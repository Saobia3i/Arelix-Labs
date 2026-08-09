import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/db';
import Card from '@/components/ui/Card';

async function getStats() {
  try {
    const [totalLeads, totalUsers, weekLeads] = await Promise.all([
      prisma.lead.count(),
      prisma.user.count(),
      prisma.lead.count({
        where: {
          createdAt: {
            gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
          },
        },
      }),
    ]);
    return { totalLeads, totalUsers, weekLeads };
  } catch {
    return { totalLeads: 0, totalUsers: 0, weekLeads: 0 };
  }
}

interface StatCardProps {
  label: string;
  value: number;
  sub?: string;
}

function StatCard({ label, value, sub }: StatCardProps) {
  return (
    <Card>
      <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
        {label}
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontFamily: 'var(--font-oswald)',
          fontSize: '2.5rem',
          fontWeight: 700,
          color: 'primary.main',
          mb: 0.25,
        }}
      >
        {value}
      </Typography>
      {sub && (
        <Typography variant="body2" color="text.secondary">
          {sub}
        </Typography>
      )}
    </Card>
  );
}

export default async function DashboardPage() {
  const session = await auth();
  const stats = await getStats();

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 0.5 }}>
        Dashboard
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        Welcome back, {session?.user?.name ?? 'Admin'}.
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <StatCard label="Total Leads" value={stats.totalLeads} sub="All time" />
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <StatCard label="Leads This Week" value={stats.weekLeads} sub="Last 7 days" />
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <StatCard label="Total Users" value={stats.totalUsers} sub="Registered accounts" />
        </Grid>
      </Grid>
    </Box>
  );
}
