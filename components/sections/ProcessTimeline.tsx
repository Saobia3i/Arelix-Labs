'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Section from '@/components/ui/Section';
import { process } from '@/content/site-copy';

export default function ProcessTimeline() {
  return (
    <Section spacing="lg" id="process">
      <Box sx={{ mb: 5 }}>
        <Typography variant="overline" sx={{ color: 'primary.main', display: 'block', mb: 1 }}>
          How We Work
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
          Our Process
        </Typography>
      </Box>

      {/* Desktop: horizontal timeline */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          position: 'relative',
        }}
      >
        {/* Connecting line */}
        <Box
          aria-hidden="true"
          sx={{
            position: 'absolute',
            top: 20,
            left: '10%',
            right: '10%',
            height: '1px',
            bgcolor: 'divider',
          }}
        />

        {process.map((step) => (
          <Box
            key={step.step}
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              px: 2,
            }}
          >
            {/* Step circle */}
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: '1px solid',
                borderColor: 'primary.main',
                bgcolor: 'background.default',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 3,
                zIndex: 1,
                position: 'relative',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-oswald)',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  color: 'primary.main',
                  letterSpacing: '0.05em',
                }}
              >
                {step.step}
              </Typography>
            </Box>

            <Typography variant="h6" sx={{ mb: 1, fontSize: '0.95rem', fontWeight: 600 }}>
              {step.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, fontSize: '0.85rem' }}>
              {step.body}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Mobile: vertical list */}
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          flexDirection: 'column',
          gap: 4,
          position: 'relative',
          pl: 4,
        }}
      >
        {/* Vertical line */}
        <Box
          aria-hidden="true"
          sx={{
            position: 'absolute',
            left: 19,
            top: 0,
            bottom: 0,
            width: '1px',
            bgcolor: 'divider',
          }}
        />

        {process.map((step) => (
          <Box key={step.step} sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: '1px solid',
                borderColor: 'primary.main',
                bgcolor: 'background.default',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                position: 'relative',
                zIndex: 1,
                ml: -4,
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-oswald)',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  color: 'primary.main',
                  letterSpacing: '0.05em',
                }}
              >
                {step.step}
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ mb: 0.75, fontSize: '1rem', fontWeight: 600 }}>
                {step.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
                {step.body}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Section>
  );
}
