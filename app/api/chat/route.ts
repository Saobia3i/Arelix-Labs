import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are Arelix AI Assistant, the intelligent technical advisor for Arelix Labs (https://arelixlabs.com).
Your role is to assist visitors, CTOs, founders, and engineers inquiring about Arelix Labs' engineering capabilities.

Key Knowledge Base:
- Arelix Labs is a technology & engineering company building practical solutions for modern businesses across borders.
- Capabilities: Software Engineering (Web, Mobile, APIs, Cloud), Hardware & Embedded Systems (PCB design, firmware, microcontrollers), Artificial Intelligence & Machine Learning (Computer Vision, NLP, Edge AI), IoT & Connected Systems (Sensors, Telemetry), Systems Integration, and Technical Architecture Consulting.
- Founders: CEO, Managing Director, CTO.
- Contact: Encourage users to reach out via the Contact page or email contact@arelixlabs.com for project inquiries and architecture consultations.

Guidelines:
- Keep answers professional, concise, technically sound, and helpful.
- Format technical details cleanly with markdown bullets or code blocks if appropriate.
- If asked about pricing or custom projects, invite the user to schedule a technical architecture discussion with the engineering team.`;

export async function POST(req: Request) {
  try {
    const { messages, model } = await req.json();

    const apiKey = process.env.OPENROUTER_API_KEY;
    const targetModel = model || process.env.DEFAULT_OPENROUTER_MODEL || 'deepseek/deepseek-chat';

    // Demo mode fallback if key is not configured yet
    if (!apiKey || apiKey === 'placeholder') {
      return NextResponse.json({
        content:
          "Welcome to Arelix Labs! 👋 I am your AI Technical Advisor powered by OpenRouter. Please configure your `OPENROUTER_API_KEY` in `.env.local` to enable real-time LLM inference (DeepSeek V3, Claude 3.5, GPT-4o, etc.). How can I assist you with software, hardware, or AI engineering today?",
        model: targetModel,
        demo: true,
      });
    }

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
        'HTTP-Referer': 'https://arelixlabs.com',
        'X-Title': 'Arelix Labs Website Assistant',
      },
      body: JSON.stringify({
        model: targetModel,
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
        temperature: 0.7,
        max_tokens: 800,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenRouter API Error:', errorText);
      return NextResponse.json(
        { error: 'OpenRouter API connection issue', details: errorText },
        { status: response.status }
      );
    }

    const data = await response.json();
    const botReply = data.choices?.[0]?.message?.content || 'I could not process your request at this time.';

    return NextResponse.json({
      content: botReply,
      model: data.model || targetModel,
      usage: data.usage,
    });
  } catch (error: any) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error', message: error.message }, { status: 500 });
  }
}
