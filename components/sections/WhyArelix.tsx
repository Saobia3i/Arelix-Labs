'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Section from '@/components/ui/Section';
import { whyArelix } from '@/content/site-copy';

export default function WhyArelix() {
  return (
    <Section spacing="lg" background="paper" id="why-arelix">
      <Box sx={{ mb: 5 }}>
        <Typography variant="overline" sx={{ color: 'primary.main', display: 'block', mb: 1 }}>
          Why Arelix Labs
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
          What makes us different
        </Typography>
      </Box>
      <Grid container spacing={{ xs: 4, md: 6 }}>
        {whyArelix.map((item, index) => (
          <Grid key={item.title} size={{ xs: 12, sm: 6, md: 4 }}>
            <Box>
              <Typography
                variant="overline"
                sx={{
                  color: 'primary.main',
                  display: 'block',
                  mb: 1,
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                }}
              >
                {String(index + 1).padStart(2, '0')}
              </Typography>
              <Typography
                variant="h5"
                sx={{ mb: 1.5, fontSize: '1.05rem', fontWeight: 600 }}
              >
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                {item.body}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
