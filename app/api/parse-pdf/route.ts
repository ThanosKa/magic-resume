import { logger } from '../logger';
import type { CVData } from '@/types/cv';
import { generateId } from '@/types/cv';

const OPENROUTER_BASE_URL = 'https://openrouter.ai/api/v1';
const MODEL = 'x-ai/grok-4.1-fast:free';

const PARSE_PROMPT = `You are an expert CV/resume parser. Extract structured data from the provided PDF text and return it as a JSON object matching the CV structure.

The CV structure should have:
- personalInfo: { name, title, email, phone, location, socialLinks: [{ platform, url }] }
- summary: string
- experience: [{ company, position, startDate, endDate, description }]
- education: [{ institution, degree, field, startDate, endDate, description }]
- projects: [{ name, role, startDate, endDate, description, link? }]
- skills: string (can be formatted as HTML)

Guidelines:
- Extract all available information accurately
- For dates, use formats like "2020", "2020-2024", or "Present" if current
- For descriptions, preserve bullet points and formatting as HTML where appropriate
- If information is missing, use empty strings or empty arrays
- For social links, infer platform from URL (linkedin, github, twitter, portfolio, other)
- Return ONLY valid JSON, no markdown formatting or explanations
- The JSON should match the CVData type structure exactly

Return the JSON object directly without any wrapping or explanation.`;

export async function POST(req: Request) {
  try {
    const { text } = (await req.json()) as {
      text: string;
    };
    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!text) {
      logger.warn('Missing text payload for PDF parse request');
      return new Response('PDF text is required', { status: 400 });
    }

    if (!apiKey) {
      logger.error('OpenRouter API key is missing on the server');
      return new Response(
        'OpenRouter API key is not configured on the server',
        { status: 500 }
      );
    }

    logger.info('Sending PDF parse request to OpenRouter');

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
            content: `Extract structured CV data from this PDF text:\n\n${text}`,
          },
        ],
        response_format: { type: 'json_object' },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      logger.error(
        { status: response.status, statusText: response.statusText, errorText },
        'OpenRouter request failed'
      );
      return new Response(
        `OpenRouter error: ${errorText || response.statusText || 'Unknown error'}`,
        { status: response.status || 500 }
      );
    }

    const data = (await response.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    const jsonContent = data?.choices?.[0]?.message?.content?.trim();

    if (!jsonContent) {
      logger.error('OpenRouter returned no content');
      return new Response('OpenRouter did not return content', { status: 500 });
    }

    let parsedCV: Partial<CVData>;
    try {
      parsedCV = JSON.parse(jsonContent) as Partial<CVData>;
    } catch (parseError) {
      logger.error({ err: parseError, jsonContent }, 'Failed to parse AI response as JSON');
      return new Response('Failed to parse AI response', { status: 500 });
    }

    // Validate and normalize the parsed CV data
    const normalizedCV = normalizeParsedCV(parsedCV);

    logger.info('PDF parse request succeeded');
    return Response.json({ cv: normalizedCV });
  } catch (error) {
    logger.error({ err: error }, 'Unexpected error in parse-pdf route');
    return new Response('An unexpected error occurred', { status: 500 });
  }
}

function normalizeParsedCV(parsed: Partial<CVData>): Partial<CVData> {
  // Ensure arrays exist and have proper structure with IDs
  const normalized: Partial<CVData> = {
    ...parsed,
    personalInfo: parsed.personalInfo
      ? {
          ...parsed.personalInfo,
          socialLinks:
            parsed.personalInfo.socialLinks?.map((link) => ({
              ...link,
              id: link.id || generateId(),
            })) || [],
          headerAlign: parsed.personalInfo.headerAlign || 'center',
          showPhoto: parsed.personalInfo.showPhoto ?? false,
        }
      : undefined,
    experience:
      parsed.experience?.map((exp) => ({
        ...exp,
        id: exp.id || generateId(),
        visible: exp.visible ?? true,
      })) || [],
    education:
      parsed.education?.map((edu) => ({
        ...edu,
        id: edu.id || generateId(),
        visible: edu.visible ?? true,
      })) || [],
    projects:
      parsed.projects?.map((proj) => ({
        ...proj,
        id: proj.id || generateId(),
        visible: proj.visible ?? true,
      })) || [],
    summary: parsed.summary || '',
    skills: parsed.skills || '',
  };

  return normalized;
}
