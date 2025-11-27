import { logger } from "../logger"

const OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1"
const MODEL = "openai/gpt-oss-20b:free"

export async function POST(req: Request) {
  try {
    const { content } = await req.json()
    const apiKey = process.env.OPENROUTER_API_KEY

    if (!content) {
      logger.warn("Missing content payload for polish request")
      return new Response("Content is required", { status: 400 })
    }

    if (!apiKey) {
      logger.error("OpenRouter API key is missing on the server")
      return new Response("OpenRouter API key is not configured on the server", { status: 500 })
    }

    logger.info({ model: MODEL }, "Sending polish request to OpenRouter")

    const response = await fetch(`${OPENROUTER_BASE_URL}/chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
        "X-Title": "Magic Resume",
      },
      body: JSON.stringify({
        model: MODEL,
        stream: false,
        messages: [
          {
            role: "system",
            content: `You are an expert CV/resume writer. Improve the provided CV content to make it more professional and impactful.

Guidelines:
- Use strong action verbs (Led, Developed, Implemented, Achieved, etc.)
- Quantify achievements where possible (percentages, numbers, metrics)
- Keep the original meaning and facts intact
- Maintain any existing HTML formatting (ul, li, strong tags)
- Be concise but impactful
- Focus on achievements over responsibilities
- Return ONLY the improved text, no explanations or commentary`,
          },
          {
            role: "user",
            content: `Improve this CV content:\n\n${content}`,
          },
        ],
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      logger.error(
        { status: response.status, statusText: response.statusText, errorText },
        "OpenRouter request failed",
      )
      return new Response(
        `OpenRouter error: ${errorText || response.statusText || "Unknown error"}`,
        { status: response.status || 500 },
      )
    }

    const data = (await response.json()) as {
      choices?: Array<{ message?: { content?: string } }>
    }
    const polished = data?.choices?.[0]?.message?.content?.trim()

    if (!polished) {
      logger.error("OpenRouter returned no content")
      return new Response("OpenRouter did not return content", { status: 500 })
    }

    logger.info("Polish request succeeded")
    return Response.json({ polished })
  } catch (error) {
    logger.error({ err: error }, "Unexpected error in polish route")
    return new Response("An unexpected error occurred", { status: 500 })
  }
}
