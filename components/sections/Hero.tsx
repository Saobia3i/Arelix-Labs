'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import { hero } from '@/content/site-copy';

// Geometric SVG brand graphic — angular forms echoing the triangular mark
function HeroGraphic() {
  return (
    <Box
      aria-hidden="true"
      sx={{
        width: '100%',
        height: { xs: 280, md: 420 },
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg
        viewBox="0 0 500 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', maxWidth: 500 }}
      >
        {/* Large background triangle */}
        <polygon
          points="250,20 480,400 20,400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          style={{ color: 'var(--divider-color, #2A2A2A)', opacity: 0.5 }}
        />
        {/* Primary red fill triangle */}
        <polygon points="250,60 430,380 70,380" fill="#C00000" opacity="0.12" />
        {/* Accent triangles */}
        <polygon points="250,100 370,360 130,360" fill="#C00000" opacity="0.18" />
        <polygon points="250,160 320,320 180,320" fill="#C00000" opacity="0.30" />
        {/* Core diamond mark */}
        <polygon points="250,200 290,280 250,310 210,280" fill="#C00000" />
        {/* Corner accent marks */}
        <rect x="30" y="30" width="24" height="1" fill="#C00000" opacity="0.6" />
        <rect x="30" y="30" width="1" height="24" fill="#C00000" opacity="0.6" />
        <rect x="446" y="30" width="24" height="1" fill="#C00000" opacity="0.6" />
        <rect x="469" y="30" width="1" height="24" fill="#C00000" opacity="0.6" />
        {/* Grid dots */}
        {[100, 150, 200, 250, 300, 350, 400].map((x) =>
          [80, 140, 200, 260].map((y) => (
            <circle
              key={`${x}-${y}`}
              cx={x}
              cy={y}
              r="1.5"
              fill="#C00000"
              opacity="0.2"
            />
          ))
        )}
      </svg>
    </Box>
  );
}

export default function Hero() {
  return (
    <Section spacing="lg" id="hero">
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
          gap: { xs: 6, lg: 10 },
          alignItems: 'center',
        }}
      >
        {/* Left: Text content */}
        <Box sx={{ maxWidth: { lg: 580 } }}>
          {/* Eyebrow */}
          <Typography
            variant="overline"
            sx={{
              color: 'primary.main',
              display: 'block',
              mb: 2.5,
              fontSize: '0.8rem',
            }}
          >
            {hero.eyebrow}
          </Typography>

          {/* H1 */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.6rem', sm: '3.2rem', md: '3.8rem', lg: '4rem' },
              mb: 2.5,
              whiteSpace: 'pre-line',
            }}
          >
            {hero.title}
          </Typography>

          {/* Tagline */}
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1.05rem', md: '1.15rem' },
              color: 'text.secondary',
              mb: 1.5,
              maxWidth: 520,
            }}
          >
            {hero.tagline}
          </Typography>

          {/* Body */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 4, maxWidth: 500 }}
          >
            {hero.body}
          </Typography>

          {/* CTA */}
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant="primary"
              href="/contact"
              id="hero-primary-cta"
              size="large"
            >
              {hero.cta}
            </Button>
            <Button
              variant="secondary"
              href="/work"
              id="hero-secondary-cta"
              size="large"
            >
              {hero.ctaSecondary}
            </Button>
          </Box>
        </Box>

        {/* Right: Geometric graphic */}
        <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
          <HeroGraphic />
        </Box>
      </Box>
    </Section>
  );
}
