'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import { ArrowUpRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { selectedWork } from '@/content/site-copy';

export default function SelectedWork() {
  return (
    <Section spacing="lg" background="paper" id="selected-work">
      <Box sx={{ mb: 5 }}>
        <Typography variant="overline" sx={{ color: 'primary.main', display: 'block', mb: 1 }}>
          Selected Work
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
          What we've shipped
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {selectedWork.map((project) => (
          <Grid key={project.name} size={{ xs: 12, md: 6 }}>
            <Card>
              <Box sx={{ mb: 2 }}>
                {project.tag.split(' · ').map((tag) => (
                  <Badge key={tag} label={tag} sx={{ mr: 0.75, mb: 0.75 }} />
                ))}
              </Box>
              <Typography
                variant="h4"
                sx={{ mb: 1.5, fontSize: '1.2rem', fontWeight: 600 }}
              >
                {project.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ lineHeight: 1.7, mb: 2.5 }}
              >
                {project.description}
              </Typography>
              <MuiLink
                href="#"
                underline="none"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.5,
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'primary.main',
                  '&:hover': { color: 'primary.dark' },
                  transition: 'color 80ms ease',
                }}
              >
                View Case Study
                <ArrowUpRight size={14} strokeWidth={2} />
              </MuiLink>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
