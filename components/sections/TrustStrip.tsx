'use client';

import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { Theme } from '@mui/material/styles';
import { Code2, Smartphone, Palette, Cpu, Zap } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

const bannerDomains = [
  { title: 'Web', subtitle: 'Web Engineering', icon: Code2 },
  { title: 'Apps', subtitle: 'Mobile Applications', icon: Smartphone },
  { title: 'UI/UX', subtitle: 'Product & Interface Design', icon: Palette },
  { title: 'PCB', subtitle: 'PCB & Hardware Design', icon: Cpu },
  { title: 'Electronics', subtitle: 'Embedded & IoT Systems', icon: Zap },
];

export default function TrustStrip() {
  return (
    <Section spacing="sm" background="paper" id="trust-strip" sx={{ py: { xs: 3, md: 2.5 } }}>
      <Grid container spacing={{ xs: 1.5, md: 1.75 }}>
        {bannerDomains.map((domain) => {
          const Icon = domain.icon;
          return (
            <Grid key={domain.title} size={{ xs: 6, sm: 4, md: 2.4 }}>
              <Card
                noPadding
                sx={{
                  height: '100%',
                  minHeight: { xs: 138, md: 150 },
                  p: { xs: 1.5, md: 1.75 },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  justifyContent: 'center',
                  gap: 1,
                  borderRadius: '14px 0px 14px 14px',
                  bgcolor: (theme: Theme) => (theme.palette.mode === 'light' ? '#FFFFFF' : '#000000'),
                  border: '1px solid',
                  borderColor: (theme: Theme) => (theme.palette.mode === 'light' ? '#D8DEE8' : '#FFFFFF'),
                  boxShadow: (theme: Theme) =>
                    theme.palette.mode === 'light'
                      ? '0 4px 16px rgba(0,0,0,0.08)'
                      : '0 4px 16px rgba(0,0,0,0.6)',
                  transition: 'all 150ms ease',
                  '&:hover': {
                    borderColor: (theme: Theme) => (theme.palette.mode === 'light' ? '#B84A47' : '#C25752'),
                    boxShadow: (theme: Theme) =>
                      theme.palette.mode === 'light'
                        ? '0 8px 24px rgba(0,0,0,0.18)'
                        : '0 8px 24px rgba(214,107,102,0.16)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '10px 0px 10px 10px',
                    bgcolor: (theme: Theme) => (theme.palette.mode === 'light' ? '#F4F5F7' : '#000000'),
                    border: '1px solid',
                    borderColor: (theme: Theme) => (theme.palette.mode === 'light' ? '#E2E8F0' : '#333333'),
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} strokeWidth={2} />
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: '0.95rem', fontWeight: 700, mb: 0.25, color: 'text.primary' }}
                  >
                    {domain.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem', lineHeight: 1.3 }}>
                    {domain.subtitle}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
}
