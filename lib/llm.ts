import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

const SYSTEM_PROMPT = `You are the Arelix Labs assistant. Arelix Labs is an engineering company that builds advanced software, hardware, AI, and IoT systems.

You help website visitors learn about:
- Arelix's services (software engineering, hardware & embedded systems, AI/ML, IoT, systems integration, technical consulting)
- The Arelix team and their approach
- The engagement process (Discovery → Architecture → Build → Integration & Test → Deploy & Support)
- How to start a conversation about a project

Guidelines:
- Keep answers concise and direct — 2-4 sentences unless more detail is clearly needed.
- If a visitor shows genuine interest in starting a project, offer to capture their name, email, and project description so the Arelix team can follow up. Say exactly: "I can pass your details to the Arelix team. Just share your name, email, and a brief description of your project."
- Do NOT answer questions unrelated to Arelix Labs or general engineering/technology topics.
- Do NOT make up specific pricing, timelines, or team members.
- Refer to https://arelixlabs.com/contact for direct contact.`;

export async function callLLM(messages: ChatMessage[]): Promise<ReadableStream<Uint8Array>> {
  const allMessages: ChatMessage[] = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...messages,
  ];

  const stream = await groq.chat.completions.create({
    model: 'llama-3.1-8b-instant',
    messages: allMessages,
    stream: true,
    max_tokens: 512,
    temperature: 0.7,
  });

  const encoder = new TextEncoder();

  return new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of stream) {
          const content = chunk.choices[0]?.delta?.content ?? '';
          if (content) {
            controller.enqueue(encoder.encode(content));
          }
        }
        controller.close();
      } catch (err) {
        controller.error(err);
      }
    },
  });
}
