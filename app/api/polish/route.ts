const OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1"
const MODEL = "openai/gpt-oss-20b:free"

export async function POST(req: Request) {
  const { content } = await req.json()
  const apiKey = process.env.OPENROUTER_API_KEY

  if (!content) {
    return new Response("Content is required", { status: 400 })
  }

  if (!apiKey) {
    return new Response("OpenRouter API key is not configured on the server", { status: 500 })
  }

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
    return new Response("OpenRouter did not return content", { status: 500 })
  }

  return Response.json({ polished })
}
