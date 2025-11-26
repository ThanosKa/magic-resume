import { streamText } from "ai"

export async function POST(req: Request) {
  const { content, apiKey } = await req.json()

  if (!content) {
    return new Response("Content is required", { status: 400 })
  }

  if (!apiKey) {
    return new Response("API key is required", { status: 400 })
  }

  const result = streamText({
    model: "openai/gpt-4o-mini",
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
