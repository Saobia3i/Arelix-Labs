import { type NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/db';

async function requireAdmin() {
  const session = await auth();
  const role = (session?.user as { role?: string } | undefined)?.role;
  if (!session || role !== 'ADMIN') return null;
  return session;
}

export async function GET() {
  const session = await requireAdmin();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const items = await prisma.content.findMany();
    return NextResponse.json(items);
  } catch (err) {
    console.error('[GET /api/content]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const session = await requireAdmin();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const { section, data } = (await req.json()) as { section: string; data: unknown };

    if (!section || !data) {
      return NextResponse.json({ error: 'Missing section or data' }, { status: 400 });
    }

    const content = await prisma.content.upsert({
      where: { section },
      update: { data: data as object },
      create: { section, data: data as object },
    });

    return NextResponse.json(content);
  } catch (err) {
    console.error('[PUT /api/content]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
