'use client';

import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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
    <Section spacing="sm" background="paper" id="trust-strip">
      <Grid container spacing={2}>
        {bannerDomains.map((domain) => {
          const Icon = domain.icon;
          return (
            <Grid key={domain.title} size={{ xs: 6, sm: 4, md: 2.4 }}>
              <Card
                sx={{
                  height: '100%',
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: 1.25,
                  borderRadius: '16px 0px 16px 16px', // Cat's Eye sharp corner
                  bgcolor: (theme) => (theme.palette.mode === 'light' ? '#FFFFFF' : '#0D0D0D'),
                  border: (theme) => (theme.palette.mode === 'light' ? '1.5px solid #000000' : '1.5px solid #FFFFFF'),
                  boxShadow: (theme) =>
                    theme.palette.mode === 'light'
                      ? '0 4px 16px rgba(0,0,0,0.08)'
                      : '0 4px 16px rgba(0,0,0,0.6)',
                  transition: 'all 150ms ease',
                  '&:hover': {
                    borderColor: (theme) => (theme.palette.mode === 'light' ? '#C00000' : '#E5231B'),
                    boxShadow: (theme) =>
                      theme.palette.mode === 'light'
                        ? '0 8px 24px rgba(0,0,0,0.18)'
                        : '0 8px 24px rgba(229,35,27,0.3)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: '10px 0px 10px 10px',
                    bgcolor: (theme) => (theme.palette.mode === 'light' ? '#F4F5F7' : '#1A1A1A'),
                    border: '1px solid',
                    borderColor: (theme) => (theme.palette.mode === 'light' ? '#E2E8F0' : '#333333'),
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={22} strokeWidth={2} />
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
