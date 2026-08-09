'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { about, vision, mission } from '@/content/site-copy';
import { ArrowRight, Eye, Target } from 'lucide-react';

export default function AboutPreview() {
  return (
    <Section spacing="lg" id="about-preview">
      {/* Header */}
      <Box sx={{ maxWidth: 780, mb: 5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
          <Badge label={about.headline} color="primary" />
          <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary', letterSpacing: '0.05em' }}>
            WHO WE ARE
          </Typography>
        </Box>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2.2rem', md: '2.8rem' },
            fontWeight: 700,
            mb: 2,
            letterSpacing: '-0.02em',
          }}
        >
          {about.tagline}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ lineHeight: 1.8, fontSize: { xs: '1.02rem', md: '1.1rem' } }}
        >
          {about.short}
        </Typography>
      </Box>

      {/* Modern Vision & Mission Grid */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {/* Vision Card */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              height: '100%',
              p: { xs: 3.5, md: 4 },
              borderRadius: '20px 0px 20px 20px', // Cat's Eye sharp top-right corner
              border: (theme) => (theme.palette.mode === 'light' ? '1.5px solid #000000' : '1.5px solid #FFFFFF'),
              borderTop: '4px solid',
              borderColor: 'primary.main',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              bgcolor: (theme) => (theme.palette.mode === 'light' ? '#FFFFFF' : '#0D0D0D'),
              boxShadow: (theme) =>
                theme.palette.mode === 'light'
                  ? '0 6px 24px rgba(0,0,0,0.08)'
                  : '0 6px 24px rgba(0,0,0,0.7)',
            }}
          >
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: '12px 0px 12px 12px',
                    bgcolor: (theme) => (theme.palette.mode === 'light' ? 'rgba(192, 0, 0, 0.08)' : 'rgba(229, 35, 27, 0.15)'),
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Eye size={22} />
                </Box>
                <Badge label={vision.title} color="primary" />
              </Box>

              <Typography variant="h4" sx={{ mb: 1.5, fontSize: '1.35rem', fontWeight: 700 }}>
                {vision.headline}
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, mb: 1.5, color: 'primary.main', lineHeight: 1.6, fontSize: '0.95rem' }}
              >
                "{vision.statement}"
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                {vision.body}
              </Typography>
            </Box>
          </Card>
        </Grid>

        {/* Mission Card */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              height: '100%',
              p: { xs: 3.5, md: 4 },
              borderRadius: '20px 0px 20px 20px', // Cat's Eye sharp top-right corner
              border: (theme) => (theme.palette.mode === 'light' ? '1.5px solid #000000' : '1.5px solid #FFFFFF'),
              borderTop: '4px solid',
              borderColor: 'primary.main',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              bgcolor: (theme) => (theme.palette.mode === 'light' ? '#FFFFFF' : '#0D0D0D'),
              boxShadow: (theme) =>
                theme.palette.mode === 'light'
                  ? '0 6px 24px rgba(0,0,0,0.08)'
                  : '0 6px 24px rgba(0,0,0,0.7)',
            }}
          >
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: '12px 0px 12px 12px',
                    bgcolor: (theme) => (theme.palette.mode === 'light' ? 'rgba(192, 0, 0, 0.08)' : 'rgba(229, 35, 27, 0.15)'),
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Target size={22} />
                </Box>
                <Badge label={mission.title} color="primary" />
              </Box>

              <Typography variant="h4" sx={{ mb: 1.5, fontSize: '1.35rem', fontWeight: 700 }}>
                {mission.headline}
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, mb: 1.5, color: 'primary.main', lineHeight: 1.6, fontSize: '0.95rem' }}
              >
                "{mission.statement}"
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                {mission.body}
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>

      {/* Action CTA Link */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Button
          variant="secondary"
          href="/about"
          sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, fontSize: '0.875rem' }}
        >
          Read Full Company Story <ArrowRight size={16} />
        </Button>
      </Box>
    </Section>
  );
}
