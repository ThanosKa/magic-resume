import { logger } from '../logger';
import * as pdfParse from 'pdf-parse';

const OPENROUTER_BASE_URL = 'https://openrouter.ai/api/v1';
const MODEL = 'x-ai/grok-4.1-fast:free';

interface ExtractedCVData {
  personalInfo?: {
    name?: string;
    title?: string;
    email?: string;
    phone?: string;
    location?: string;
    socialLinks?: Array<{
      platform: 'linkedin' | 'github' | 'twitter' | 'portfolio' | 'other';
      url: string;
    }>;
  };
  summary?: string;
  experience?: Array<{
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  education?: Array<{
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  projects?: Array<{
    name: string;
    role: string;
    startDate: string;
    endDate: string;
    description: string;
    link?: string;
  }>;
  skills?: string;
}

async function extractTextFromPDF(pdfBuffer: Buffer): Promise<string> {
  try {
    // pdf-parse can be imported as default or namespace, handle both cases
    const parseFn = (pdfParse as any).default || pdfParse;
    const data = await parseFn(pdfBuffer);
    return data.text;
  } catch (error) {
    logger.error({ err: error }, 'Failed to extract text from PDF');
    throw new Error('Failed to parse PDF file');
  }
}

async function parseCVWithAI(pdfText: string): Promise<ExtractedCVData> {
  const apiKey = process.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    logger.error('OpenRouter API key is missing on the server');
    throw new Error('OpenRouter API key is not configured on the server');
  }

  const systemPrompt = `You are an expert at parsing CV/resume text and extracting structured data. Extract information from the provided CV text and return it as a JSON object.

Return a JSON object with the following structure:
{
  "personalInfo": {
    "name": "Full name",
    "title": "Job title or professional title",
    "email": "Email address",
    "phone": "Phone number",
    "location": "Location/City, State/Country",
    "socialLinks": [
      {"platform": "linkedin|github|twitter|portfolio|other", "url": "URL"}
    ]
  },
  "summary": "Professional summary paragraph",
  "experience": [
    {
      "company": "Company name",
      "position": "Job title",
      "startDate": "Start date (year or MM/YYYY)",
      "endDate": "End date (year, MM/YYYY, or 'Present')",
      "description": "Job description (can include HTML like <ul><li> for bullet points)"
    }
  ],
  "education": [
    {
      "institution": "School/University name",
      "degree": "Degree type (e.g., Bachelor of Science)",
      "field": "Field of study",
      "startDate": "Start year",
      "endDate": "End year or 'Present'",
      "description": "Additional details (GPA, honors, etc.)"
    }
  ],
  "projects": [
    {
      "name": "Project name",
      "role": "Role in project",
      "startDate": "Start date",
      "endDate": "End date or 'Present'",
      "description": "Project description",
      "link": "Optional project URL"
    }
  ],
  "skills": "Skills section text (can include HTML formatting)"
}

Guidelines:
- Extract all available information accurately
- If a field is not found, omit it from the JSON (don't include empty strings)
- For dates, use consistent formats (prefer years like "2020" or "2020-2024")
- For descriptions, preserve bullet points as HTML <ul><li> format when appropriate
- Extract social media links from URLs found in the text
- Group related skills together logically
- Return ONLY valid JSON, no explanations or markdown formatting`;

  const userPrompt = `Extract structured CV data from this text:\n\n${pdfText}`;

  logger.info('Sending CV parsing request to OpenRouter');

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
          content: systemPrompt,
        },
        {
          role: 'user',
          content: userPrompt,
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
    throw new Error(
      `OpenRouter error: ${errorText || response.statusText || 'Unknown error'}`
    );
  }

  const data = (await response.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };
  const content = data?.choices?.[0]?.message?.content?.trim();

  if (!content) {
    logger.error('OpenRouter returned no content');
    throw new Error('OpenRouter did not return content');
  }

  // Extract JSON from the response (handle cases where AI wraps it in markdown)
  let jsonStr = content;
  const jsonMatch = content.match(/```(?:json)?\s*(\{[\s\S]*\})\s*```/);
  if (jsonMatch) {
    jsonStr = jsonMatch[1];
  }

  try {
    const parsed = JSON.parse(jsonStr) as ExtractedCVData;
    logger.info('CV parsing succeeded');
    return parsed;
  } catch (parseError) {
    logger.error({ err: parseError, content }, 'Failed to parse AI response as JSON');
    throw new Error('Failed to parse extracted CV data');
  }
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      logger.warn('No file provided in PDF import request');
      return new Response('File is required', { status: 400 });
    }

    if (file.type !== 'application/pdf') {
      logger.warn({ fileType: file.type }, 'Invalid file type for PDF import');
      return new Response('File must be a PDF', { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    logger.info({ fileName: file.name, size: file.size }, 'Processing PDF import');

    // Extract text from PDF
    const pdfText = await extractTextFromPDF(buffer);
    logger.info({ textLength: pdfText.length }, 'Extracted text from PDF');

    // Parse CV data using AI
    const extractedData = await parseCVWithAI(pdfText);

    logger.info('PDF import succeeded');
    return Response.json({ data: extractedData });
  } catch (error) {
    logger.error({ err: error }, 'Unexpected error in PDF import route');
    return new Response(
      error instanceof Error ? error.message : 'An unexpected error occurred',
      { status: 500 }
    );
  }
}
