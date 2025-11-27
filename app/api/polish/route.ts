import { logger } from "../logger";

const OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1";
// const MODEL = "openai/gpt-4o-mini";
const MODEL = "x-ai/grok-4.1-fast:free";

type PolishType = "title" | "summary" | "description";

const POLISH_PROMPTS = {
  title: {
    system: `You are an expert CV/resume writer for all industries and professions, from healthcare and finance to skilled trades and technology. Craft clear, specific titles that match the field signaled by the content - never default to software or engineering language unless it is already present.

Guidelines:
- Create impactful, professional job titles that stand out in the correct domain
- Reflect seniority, specialization, and key skills without inventing new ones
- Keep it concise (typically 2-6 words)
- Use industry-standard terminology that fits the profession described
- Avoid generic titles; add specificity where appropriate
- Stay neutral if the industry is unclear rather than assuming tech roles
- Return ONLY the improved title, no explanations or commentary`,
    user: (content: string) =>
      `Optimize this professional title for maximum impact:\n\n${content}`,
  },
  summary: {
    system: `You are an expert CV/resume writer for any profession or industry. Craft summaries that reflect the field indicated by the content - finance, healthcare, operations, education, technology, trades, and beyond - without defaulting to software or engineering language unless it already appears.

Guidelines:
- Create a compelling 2-3 sentence professional summary
- Highlight unique value proposition and key achievements
- Use strong, confident language
- Include years of experience if mentioned
- Focus on what makes this person stand out
- Match tone and terminology to the role/industry provided; stay neutral if unclear
- Maintain professional tone
- Return ONLY the improved summary, no explanations or commentary`,
    user: (content: string) =>
      `Create a compelling professional summary from this content:\n\n${content}`,
  },
  description: {
    system: `You are an expert CV/resume writer for all professions. Improve the provided CV content to make it more professional and impactful while staying true to the industry or role indicated - never assume a software or engineering focus unless it is present in the input.

Guidelines:
- Use strong action verbs (Led, Developed, Implemented, Achieved, etc.)
- Quantify achievements where possible (percentages, numbers, metrics)
- Keep the original meaning and facts intact
- Keep terminology aligned to the domain (finance, healthcare, retail, trades, etc.) and stay neutral if unclear
- Maintain any existing HTML formatting (ul, li, strong tags)
- Be concise but impactful
- Focus on achievements over responsibilities
- Return ONLY the improved text, no explanations or commentary`,
    user: (content: string) => `Improve this CV content:\n\n${content}`,
  },
};

export async function POST(req: Request) {
  try {
    const { content, polishType = "description" } = (await req.json()) as {
      content: string;
      polishType?: PolishType;
    };
    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!content) {
      logger.warn("Missing content payload for polish request");
      return new Response("Content is required", { status: 400 });
    }

    if (!apiKey) {
      logger.error("OpenRouter API key is missing on the server");
      return new Response(
        "OpenRouter API key is not configured on the server",
        { status: 500 }
      );
    }

    // Get the appropriate prompt for the polish type
    const prompt = POLISH_PROMPTS[polishType] || POLISH_PROMPTS.description;

    logger.info(
      { model: MODEL, polishType },
      "Sending polish request to OpenRouter"
    );

    const response = await fetch(`${OPENROUTER_BASE_URL}/chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer":
          process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
        "X-Title": "Magic Resume",
      },
      body: JSON.stringify({
        model: MODEL,
        stream: false,
        messages: [
          {
            role: "system",
            content: prompt.system,
          },
          {
            role: "user",
            content: prompt.user(content),
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      logger.error(
        { status: response.status, statusText: response.statusText, errorText },
        "OpenRouter request failed"
      );
      return new Response(
        `OpenRouter error: ${errorText || response.statusText || "Unknown error"}`,
        { status: response.status || 500 }
      );
    }

    const data = (await response.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    const polished = data?.choices?.[0]?.message?.content?.trim();

    if (!polished) {
      logger.error("OpenRouter returned no content");
      return new Response("OpenRouter did not return content", { status: 500 });
    }

    logger.info("Polish request succeeded");
    return Response.json({ polished });
  } catch (error) {
    logger.error({ err: error }, "Unexpected error in polish route");
    return new Response("An unexpected error occurred", { status: 500 });
  }
}
