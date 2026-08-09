import React from 'react';
import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import AdminShell from './AdminShell';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const role = (session?.user as { role?: string } | undefined)?.role;

  if (!session) {
    redirect('/login');
  }

  if (role !== 'ADMIN') {
    redirect('/');
  }

  return <AdminShell>{children}</AdminShell>;
}
