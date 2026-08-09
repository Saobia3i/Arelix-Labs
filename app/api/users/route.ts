import { type NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { auth } from '@/lib/auth';

export async function GET() {
  const session = await auth();
  const role = (session?.user as { role?: string } | undefined)?.role;
  if (!session || role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const users = await prisma.user.findMany({
    select: { id: true, name: true, email: true, role: true, createdAt: true },
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json(users);
}

export async function PATCH(req: NextRequest) {
  const session = await auth();
  const role = (session?.user as { role?: string } | undefined)?.role;
  if (!session || role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { userId, newRole } = (await req.json()) as { userId: string; newRole: 'USER' | 'ADMIN' };
  if (!userId || !newRole) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const updated = await prisma.user.update({
    where: { id: userId },
    data: { role: newRole },
    select: { id: true, name: true, email: true, role: true },
  });

  return NextResponse.json(updated);
}
