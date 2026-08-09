'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { cta } from '@/content/site-copy';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <Section spacing="lg" background="paper" id="cta">
      <Card
        sx={{
          maxWidth: 860,
          mx: 'auto',
          p: { xs: 4, md: 6 },
          textAlign: 'center',
          position: 'relative',
          borderTop: '4px solid',
          borderColor: 'primary.main',
          background: (theme) =>
            theme.palette.mode === 'light'
              ? '#FFFFFF'
              : 'linear-gradient(180deg, #141414 0%, #1A1A1A 100%)',
        }}
      >
        {/* Geometric accent above headline */}
        <Box
          aria-hidden="true"
          sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}
        >
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              bgcolor: (theme) =>
                theme.palette.mode === 'light' ? 'rgba(192,0,0,0.08)' : 'rgba(229,35,27,0.15)',
              color: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Sparkles size={22} />
          </Box>
        </Box>

        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '1.8rem', md: '2.5rem' },
            fontWeight: 700,
            mb: 2,
            maxWidth: 640,
            mx: 'auto',
          }}
        >
          {cta.headline}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: 540, mx: 'auto', lineHeight: 1.75 }}
        >
          {cta.body}
        </Typography>
        <Button
          variant="primary"
          href="/contact"
          id="cta-primary-btn"
          size="large"
          sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 4, py: 1.25 }}
        >
          {cta.buttonLabel} <ArrowRight size={18} />
        </Button>
      </Card>
    </Section>
  );
}
