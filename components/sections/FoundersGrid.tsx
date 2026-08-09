'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Section from '@/components/ui/Section';
import { founders } from '@/content/site-copy';

export default function FoundersGrid() {
  return (
    <Section spacing="lg" id="founders">
      <Box sx={{ mb: 5 }}>
        <Typography variant="overline" sx={{ color: 'primary.main', display: 'block', mb: 1 }}>
          The Team
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
          Who we are
        </Typography>
      </Box>
      <Grid container spacing={{ xs: 4, md: 6 }}>
        {founders.map((founder) => (
          <Grid key={founder.name + founder.role} size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              sx={{
                borderLeft: '2px solid',
                borderColor: 'primary.main',
                pl: 2.5,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: 'var(--font-oswald)',
                  fontWeight: 700,
                  fontSize: '1.3rem',
                  mb: 0.5,
                }}
              >
                {founder.name}
              </Typography>
              <Typography
                variant="overline"
                sx={{
                  color: 'primary.main',
                  display: 'block',
                  mb: 1.5,
                  fontSize: '0.72rem',
                  letterSpacing: '0.1em',
                }}
              >
                {founder.role}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                {founder.bio}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
