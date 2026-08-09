'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { cta } from '@/content/site-copy';

export default function CTASection() {
  return (
    <Section spacing="lg" background="paper" id="cta">
      <Box
        sx={{
          textAlign: 'center',
          maxWidth: 620,
          mx: 'auto',
        }}
      >
        {/* Geometric accent above headline */}
        <Box
          aria-hidden="true"
          sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}
        >
          <svg width="40" height="34" viewBox="0 0 40 34" fill="none">
            <polygon points="20,0 40,34 0,34" fill="#C00000" opacity="0.9" />
          </svg>
        </Box>

        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '1.8rem', md: '2.4rem' },
            mb: 2,
          }}
        >
          {cta.headline}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: 480, mx: 'auto', lineHeight: 1.7 }}
        >
          {cta.body}
        </Typography>
        <Button
          variant="primary"
          href="/contact"
          id="cta-primary-btn"
          size="large"
        >
          {cta.buttonLabel}
        </Button>
      </Box>
    </Section>
  );
}
