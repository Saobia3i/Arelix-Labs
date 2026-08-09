'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Check } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { services } from '@/content/site-copy';

interface ServiceCardProps {
  category: string;
  description: string;
  items: string[];
}

function ServiceCard({ category, description, items }: ServiceCardProps) {
  return (
    <Card>
      <Typography
        variant="h5"
        sx={{ mb: 1.5, fontSize: '1.1rem', fontWeight: 600 }}
      >
        {category}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 2.5, lineHeight: 1.65 }}
      >
        {description}
      </Typography>
      <Box component="ul" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {items.map((item) => (
          <Box
            key={item}
            component="li"
            sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}
          >
            <Box
              sx={{
                color: 'primary.main',
                mt: '2px',
                flexShrink: 0,
                '& svg': { strokeWidth: 2 },
              }}
            >
              <Check size={14} />
            </Box>
            <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
    </Card>
  );
}

export default function ServicesGrid() {
  return (
    <Section spacing="lg" id="services">
      <Box sx={{ mb: 5 }}>
        <Typography variant="overline" sx={{ color: 'primary.main', display: 'block', mb: 1 }}>
          What We Build
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
          Our Services
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {services.map((service) => (
          <Grid key={service.category} size={{ xs: 12, md: 6 }}>
            <ServiceCard {...service} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
