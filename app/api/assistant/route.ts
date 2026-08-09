import { type NextRequest, NextResponse } from 'next/server';
import { callLLM, type ChatMessage } from '@/lib/llm';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const { messages } = (await req.json()) as { messages: ChatMessage[] };

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid messages' }, { status: 400 });
    }

    const stream = await callLLM(messages);

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch (err) {
    console.error('[/api/assistant]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
