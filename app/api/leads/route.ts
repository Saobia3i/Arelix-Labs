import { type NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      name: string;
      email: string;
      message: string;
      source?: string;
    };

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const lead = await prisma.lead.create({
      data: {
        name: body.name,
        email: body.email,
        message: body.message,
        source: body.source ?? null,
      },
    });

    return NextResponse.json({ id: lead.id }, { status: 201 });
  } catch (err) {
    console.error('[POST /api/leads]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  const session = await auth();
  const role = (session?.user as { role?: string } | undefined)?.role;

  if (!session || role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(leads);
  } catch (err) {
    console.error('[GET /api/leads]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
