import { NextRequest, NextResponse } from 'next/server';
import { pdfToText } from 'pdf-ts';
import { z } from 'zod';
import { logger } from '../logger';
import { generateId, type CVData } from '@/types/cv';

const OPENROUTER_BASE_URL = 'https://openrouter.ai/api/v1';
const MODEL = 'x-ai/grok-4.1-fast:free';
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

const aiResponseSchema = z.object({
  personalInfo: z.object({
    name: z.string().min(1),
    title: z.string(),
    email: z.string().email(),
    phone: z.string().min(1),
    location: z.string().min(1),
    photoUrl: z.string().optional().or(z.literal('')),
    headerAlign: z.enum(['left', 'center', 'right']).optional(),
    showPhoto: z.boolean().optional(),
    socialLinks: z
      .array(
        z.object({
          platform: z.enum([
            'linkedin',
            'github',
            'twitter',
            'portfolio',
            'other',
          ]),
          url: z.string().trim().optional().or(z.literal('')),
          label: z.string().optional(),
        })
      )
      .optional(),
  }),
  summary: z.string().optional(),
  education: z
    .array(
      z.object({
        institution: z.string(),
        degree: z.string(),
        field: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        description: z.string().optional(),
        visible: z.boolean().optional(),
      })
    )
    .optional(),
  experience: z
    .array(
      z.object({
        company: z.string(),
        position: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        description: z.string().optional(),
        visible: z.boolean().optional(),
      })
    )
    .optional(),
  projects: z
    .array(
      z.object({
        name: z.string(),
        role: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        description: z.string().optional(),
        link: z.string().optional().or(z.literal('')),
        visible: z.boolean().optional(),
      })
    )
    .optional(),
  skills: z.string().optional(),
  sections: z
    .array(
      z.object({
        type: z.enum([
          'experience',
          'education',
          'projects',
          'skills',
          'summary',
        ]),
        title: z.string().min(1),
        enabled: z.boolean().optional(),
        order: z.number().int().min(0).optional(),
      })
    )
    .optional(),
  title: z.string().optional(),
});

const PARSE_PROMPT = `You are an expert at extracting structured data from CV/resume PDFs. Extract the information exactly as it appears in the PDF and return it as valid JSON matching this structure:

{
  "personalInfo": {
    "name": "string",
    "title": "string (job title/profession)",
    "email": "string",
    "phone": "string",
    "location": "string",
    "photoUrl": "string (optional, empty string if not present)",
    "headerAlign": "left" | "center" | "right",
    "showPhoto": false,
    "socialLinks": [
      {
        "platform": "linkedin" | "github" | "twitter" | "portfolio" | "other",
        "url": "string",
        "label": "string (optional)"
      }
    ]
  },
  "summary": "string (professional summary/objective, empty string if not present)",
  "education": [
    {
      "institution": "string",
      "degree": "string",
      "field": "string",
      "startDate": "string",
      "endDate": "string (use 'Present' if ongoing)",
      "description": "string (empty string if not present)",
      "visible": true
    }
  ],
  "experience": [
    {
      "company": "string",
      "position": "string",
      "startDate": "string",
      "endDate": "string (use 'Present' if current)",
      "description": "string (can include HTML like <ul><li> for bullet points)",
      "visible": true
    }
  ],
  "projects": [
    {
      "name": "string",
      "role": "string",
      "startDate": "string",
      "endDate": "string (use 'Present' if ongoing)",
      "description": "string",
      "link": "string (optional, empty string if not present)",
      "visible": true
    }
  ],
  "skills": "string (can be plain text or HTML formatted)"
}

Guidelines:
- Extract information exactly as written in the PDF - do not invent or modify content
- If a field is not present in the PDF, use empty string "" or empty array []
- For dates, preserve the format used in the PDF (e.g., "2020", "Jan 2020", "2020-2023")
- For social links, extract every LinkedIn/GitHub/Twitter/portfolio URL you see (or obvious handle) and include them in socialLinks. Identify the platform from the URL (linkedin.com → linkedin, github.com → github, etc.). Return full profile URLs when possible; if only a handle is present, return the handle without @ symbols.
- For skills, return structured HTML (e.g., "<ul><li><strong>Languages:</strong> JavaScript, Python</li></ul>") rather than plain text whenever the PDF lists categories or bullets.
- For headerAlign, default to "center"
- Return ONLY valid JSON, no markdown formatting or code blocks
- Ensure all required fields are present with appropriate defaults`;

const normalizeSocialUrl = (
  value: string,
  platform: CVData['personalInfo']['socialLinks'][number]['platform']
) => {
  const trimmed = value.trim();
  if (!trimmed) return '';

  const ensureProtocol = (val: string) =>
    /^https?:\/\//i.test(val) ? val : `https://${val}`;

  const withoutProtocol = trimmed
    .replace(/^https?:\/\//i, '')
    .replace(/^www\./i, '');
  const strippedHandle = withoutProtocol.replace(/^@/, '');

  switch (platform) {
    case 'linkedin': {
      if (withoutProtocol.startsWith('linkedin.com')) {
        return ensureProtocol(withoutProtocol);
      }
      const profile = strippedHandle
        .replace(/^linkedin\.com\//i, '')
        .replace(/^in\//i, '');
      return `https://linkedin.com/in/${profile}`;
    }
    case 'github': {
      if (withoutProtocol.startsWith('github.com')) {
        return ensureProtocol(withoutProtocol);
      }
      const username = strippedHandle.replace(/^github\.com\//i, '');
      return `https://github.com/${username}`;
    }
    case 'twitter': {
      if (
        withoutProtocol.startsWith('twitter.com') ||
        withoutProtocol.startsWith('x.com')
      ) {
        return ensureProtocol(withoutProtocol);
      }
      const handle = strippedHandle
        .replace(/^twitter\.com\//i, '')
        .replace(/^x\.com\//i, '');
      return `https://twitter.com/${handle}`;
    }
    case 'portfolio':
    case 'other':
    default:
      return ensureProtocol(withoutProtocol);
  }
};

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      logger.warn('No file provided in parse-pdf request');
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    if (file.type !== 'application/pdf') {
      logger.warn({ fileType: file.type }, 'Invalid file type');
      return NextResponse.json(
        { error: 'Only PDF files are allowed' },
        { status: 400 }
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      logger.warn({ fileSize: file.size }, 'File too large');
      return NextResponse.json(
        { error: 'File size must be less than 10MB' },
        { status: 400 }
      );
    }

    logger.info(
      { fileName: file.name, fileSize: file.size },
      'Extracting text from PDF'
    );

    const arrayBuffer = await file.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);
    const extractedText = await pdfToText(uint8Array);

    if (!extractedText || extractedText.trim().length === 0) {
      logger.warn('PDF contains no extractable text');
      return NextResponse.json(
        {
          error:
            'PDF contains no extractable text. Please ensure the PDF has selectable text.',
        },
        { status: 400 }
      );
    }

    logger.info(
      { textLength: extractedText.length },
      'PDF text extracted, sending to AI'
    );

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      logger.error('OpenRouter API key is missing');
      return NextResponse.json(
        { error: 'OpenRouter API key is not configured' },
        { status: 500 }
      );
    }

    const response = await fetch(`${OPENROUTER_BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer':
          process.env.NEXT_PUBLIC_SITE_URL || 'https://magik-resume.dev',
        'X-Title': 'Magic Resume',
      },
      body: JSON.stringify({
        model: MODEL,
        stream: false,
        messages: [
          {
            role: 'system',
            content: PARSE_PROMPT,
          },
          {
            role: 'user',
            content: `Extract CV data from this PDF text:\n\n${extractedText}`,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      logger.error(
        { status: response.status, statusText: response.statusText, errorText },
        'OpenRouter request failed'
      );
      return NextResponse.json(
        {
          error: `Failed to parse PDF: ${errorText || response.statusText || 'Unknown error'}`,
        },
        { status: response.status || 500 }
      );
    }

    const data = (await response.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    const aiResponse = data?.choices?.[0]?.message?.content?.trim();

    if (!aiResponse) {
      logger.error('OpenRouter returned no content');
      return NextResponse.json(
        { error: 'AI did not return parsed data' },
        { status: 500 }
      );
    }

    logger.info(
      { responseLength: aiResponse.length },
      'AI response received, parsing JSON'
    );

    let jsonText = aiResponse;
    const jsonMatch = aiResponse.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
    if (jsonMatch) {
      jsonText = jsonMatch[1];
    }

    let parsedData: unknown;
    try {
      parsedData = JSON.parse(jsonText);
    } catch (parseError) {
      logger.error(
        { error: parseError, jsonText },
        'Failed to parse AI response as JSON'
      );
      return NextResponse.json(
        { error: 'Failed to parse AI response. Please try again.' },
        { status: 500 }
      );
    }

    const validationResult = aiResponseSchema.safeParse(parsedData);
    if (!validationResult.success) {
      logger.warn(
        { errors: validationResult.error.errors },
        'AI response failed validation'
      );
      return NextResponse.json(
        {
          error: 'Parsed data does not match expected format',
          details: validationResult.error.errors,
        },
        { status: 400 }
      );
    }

    const validatedData = validationResult.data;

    const now = new Date().toISOString();
    const cvData: CVData = {
      id: generateId(),
      title: validatedData.title || 'Imported CV',
      createdAt: now,
      updatedAt: now,
      personalInfo: {
        name: validatedData.personalInfo.name,
        title: validatedData.personalInfo.title,
        email: validatedData.personalInfo.email,
        phone: validatedData.personalInfo.phone,
        location: validatedData.personalInfo.location,
        photoUrl: validatedData.personalInfo.photoUrl || undefined,
        headerAlign: validatedData.personalInfo.headerAlign || 'center',
        showPhoto: validatedData.personalInfo.showPhoto ?? false,
        socialLinks: (validatedData.personalInfo.socialLinks || []).flatMap(
          (link) => {
            const rawUrl = link.url ?? '';
            const normalizedUrl = normalizeSocialUrl(rawUrl, link.platform);
            if (!normalizedUrl) return [];
            return [
              {
                id: generateId(),
                platform: link.platform,
                url: normalizedUrl,
                label: link.label,
              },
            ];
          }
        ),
      },
      summary: validatedData.summary || '',
      education: (validatedData.education || []).map((edu) => ({
        id: generateId(),
        institution: edu.institution,
        degree: edu.degree,
        field: edu.field,
        startDate: edu.startDate,
        endDate: edu.endDate,
        description: edu.description || '',
        visible: edu.visible ?? true,
      })),
      experience: (validatedData.experience || []).map((exp) => ({
        id: generateId(),
        company: exp.company,
        position: exp.position,
        startDate: exp.startDate,
        endDate: exp.endDate,
        description: exp.description || '',
        visible: exp.visible ?? true,
      })),
      projects: (validatedData.projects || []).map((proj) => ({
        id: generateId(),
        name: proj.name,
        role: proj.role,
        startDate: proj.startDate,
        endDate: proj.endDate,
        description: proj.description || '',
        link: proj.link || undefined,
        visible: proj.visible ?? true,
      })),
      skills: validatedData.skills || '',
      sections: validatedData.sections
        ? validatedData.sections.map((section, index) => ({
            id: generateId(),
            type: section.type,
            title: section.title,
            enabled: section.enabled ?? true,
            order: section.order ?? index,
          }))
        : [
            {
              id: generateId(),
              type: 'summary' as const,
              title: 'Professional Summary',
              enabled: true,
              order: 0,
            },
            {
              id: generateId(),
              type: 'experience' as const,
              title: 'Experience',
              enabled: true,
              order: 1,
            },
            {
              id: generateId(),
              type: 'education' as const,
              title: 'Education',
              enabled: true,
              order: 2,
            },
            {
              id: generateId(),
              type: 'projects' as const,
              title: 'Projects',
              enabled: true,
              order: 3,
            },
            {
              id: generateId(),
              type: 'skills' as const,
              title: 'Technical Skills',
              enabled: true,
              order: 4,
            },
          ],
    };

    logger.info('PDF parsed successfully');
    return NextResponse.json({ cvData });
  } catch (error) {
    logger.error(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      'Unexpected error in parse-pdf route'
    );
    return NextResponse.json(
      { error: 'An unexpected error occurred while parsing the PDF' },
      { status: 500 }
    );
  }
}
