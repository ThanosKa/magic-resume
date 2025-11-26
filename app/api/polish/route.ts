import { streamText } from "ai"

const OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1"
const MODEL = "openai/gpt-4o-mini"

export async function POST(req: Request) {
  const { content } = await req.json()
  const apiKey = process.env.OPENROUTER_API_KEY

  if (!content) {
    return new Response("Content is required", { status: 400 })
  }

  if (!apiKey) {
    return new Response("OpenRouter API key is not configured on the server", { status: 500 })
  }

  const result = streamText({
    model: MODEL,
    baseUrl: OPENROUTER_BASE_URL,
    apiKey,
    headers: {
      "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
      "X-Title": "Magic Resume",
    },
    system: `You are an expert CV/resume writer. Your task is to improve the provided CV content to make it more professional and impactful.

Guidelines:
- Use strong action verbs (Led, Developed, Implemented, Achieved, etc.)
- Quantify achievements where possible (percentages, numbers, metrics)
- Keep the original meaning and facts intact
- Maintain any existing HTML formatting (ul, li, strong tags)
- Be concise but impactful
- Focus on achievements over responsibilities
- Return ONLY the improved text, no explanations or commentary`,
    prompt: `Improve this CV content:\n\n${content}`,
  })

  return result.toTextStreamResponse()
}
