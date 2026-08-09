'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import type { Theme } from '@mui/material/styles';
import { keyframes } from '@emotion/react';
import Section from '@/components/ui/Section';
import { founders } from '@/content/site-copy';
import { ArrowUpRight, GraduationCap, Mail, Phone } from 'lucide-react';

const profileShimmerSweep = keyframes`
  0%, 14% { transform: translateX(-260%) rotate(25deg); }
  68%, 100% { transform: translateX(720%) rotate(25deg); }
`;

export default function FoundersGrid() {
  return (
    <Section spacing="lg" id="founders">
      <Box sx={{ maxWidth: 760, mx: 'auto', mb: { xs: 5, md: 6 }, textAlign: 'center' }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2.1rem', md: '2.8rem' },
            fontWeight: 700,
            mb: 1.5,
            letterSpacing: '-0.025em',
          }}
        >
          {founders.headline}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '1rem', md: '1.08rem' } }}>
          {founders.tagline}
        </Typography>
      </Box>

      <Grid container spacing={{ xs: 3, md: 3.5 }}>
        {founders.items.map((founder, idx) => (
          <Grid key={founder.role} size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              sx={{
                position: 'relative',
                minHeight: { xs: 460, md: 520 },
                overflow: 'hidden',
                borderRadius: '26px 26px 26px 4px',
                bgcolor: (theme: Theme) => (theme.palette.mode === 'light' ? '#E8EAED' : '#000000'),
                backgroundImage: (theme: Theme) =>
                  `linear-gradient(180deg, transparent 42%, ${
                    theme.palette.mode === 'light' ? 'rgba(8,12,22,0.28)' : 'rgba(0,0,0,0.5)'
                  } 100%), url("${founder.image}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                border: '1px solid',
                borderColor: (theme: Theme) =>
                  theme.palette.mode === 'light' ? '#D8DEE8' : '#FFFFFF',
                boxShadow: (theme: Theme) =>
                  theme.palette.mode === 'light'
                    ? '0 18px 45px rgba(15,23,42,0.12)'
                    : '0 18px 45px rgba(0,0,0,0.45)',
                transition: 'transform 240ms ease, box-shadow 240ms ease',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '-60%',
                  left: '-35%',
                  width: '28%',
                  height: '220%',
                  zIndex: 2,
                  pointerEvents: 'none',
                  opacity: 0.38,
                  background:
                    'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.14) 48%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.14) 52%, transparent 100%)',
                  animation: `${profileShimmerSweep} 3.2s ease-in-out infinite`,
                  '@media (prefers-reduced-motion: reduce)': {
                    animation: 'none',
                    opacity: 0,
                  },
                },
                '&:hover': {
                  transform: 'translateY(-8px)',
                  borderColor: (theme: Theme) =>
                    theme.palette.mode === 'light' ? '#B84A47' : '#C25752',
                  boxShadow: (theme: Theme) =>
                    theme.palette.mode === 'light'
                      ? '0 26px 60px rgba(15,23,42,0.18)'
                      : '0 26px 60px rgba(0,0,0,0.6)',
                },
                '&:hover .founder-action': {
                  transform: 'rotate(45deg)',
                  bgcolor: (theme: Theme) =>
                    theme.palette.mode === 'light' ? '#B84A47' : '#C25752',
                  color: '#FFFFFF',
                },
              }}
            >
              <Typography
                aria-hidden="true"
                sx={{
                  position: 'absolute',
                  top: 22,
                  left: 24,
                  fontFamily: 'var(--font-oswald)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: '#FFFFFF',
                  textShadow: '0 2px 12px rgba(0,0,0,0.55)',
                }}
              >
                PROFILE {String(idx + 1).padStart(2, '0')}
              </Typography>

              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: 14, md: 18 },
                  right: { xs: 14, md: 18 },
                  bottom: { xs: 14, md: 18 },
                  p: { xs: 2.5, md: 3 },
                  borderRadius: '20px 20px 20px 4px',
                  color: '#FFFFFF',
                  bgcolor: 'rgba(12,15,22,0.72)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  boxShadow: '0 16px 35px rgba(0,0,0,0.28)',
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 2 }}>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{ fontSize: '1.35rem', fontWeight: 700, lineHeight: 1.2, color: '#FFFFFF', mb: 0.5 }}
                    >
                      {founder.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: (theme: Theme) =>
                          theme.palette.mode === 'light' ? '#B84A47' : '#C96A66',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        mb: 1.5,
                      }}
                    >
                      {founder.role}
                    </Typography>
                  </Box>

                  <Box
                    component="a"
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${founder.name}'s LinkedIn profile`}
                    className="founder-action"
                    sx={{
                      width: 38,
                      height: 38,
                      borderRadius: '50%',
                      flexShrink: 0,
                      display: 'grid',
                      placeItems: 'center',
                      bgcolor: 'rgba(255,255,255,0.14)',
                      color: '#FFFFFF',
                      border: '1px solid rgba(255,255,255,0.28)',
                      transition: 'transform 220ms ease, background-color 220ms ease, color 220ms ease',
                    }}
                  >
                    <ArrowUpRight size={18} />
                  </Box>
                </Box>

                <Typography sx={{ color: 'rgba(255,255,255,0.78)', fontSize: '0.86rem', lineHeight: 1.65 }}>
                  {founder.bio}
                </Typography>

                <Box sx={{ display: 'grid', gap: 0.8, mt: 1.7 }}>
                  {founder.education && (
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                      <GraduationCap size={14} style={{ flex: '0 0 auto', marginTop: 3 }} />
                      <Typography sx={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.74rem', lineHeight: 1.45 }}>
                        {founder.education}
                      </Typography>
                    </Box>
                  )}
                  <Box
                    component="a"
                    href={`mailto:${founder.email}`}
                    sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'rgba(255,255,255,0.82)', textDecoration: 'none', '&:hover': { color: '#FFFFFF' } }}
                  >
                    <Mail size={14} />
                    <Typography sx={{ fontSize: '0.74rem', overflowWrap: 'anywhere' }}>{founder.email}</Typography>
                  </Box>
                  {founder.phone && (
                    <Box
                      component="a"
                      href={`tel:+88${founder.phone}`}
                      sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'rgba(255,255,255,0.82)', textDecoration: 'none', '&:hover': { color: '#FFFFFF' } }}
                    >
                      <Phone size={14} />
                      <Typography sx={{ fontSize: '0.74rem' }}>{founder.phone}</Typography>
                    </Box>
                  )}
                  {founder.portfolio && (
                    <Box
                      component="a"
                      href={founder.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.74rem', textDecoration: 'none', '&:hover': { color: '#FFFFFF' } }}
                    >
                      Portfolio ↗
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mt: 4, textAlign: 'center', fontStyle: 'italic', fontWeight: 500 }}
      >
        “{founders.footerNote}”
      </Typography>
    </Section>
  );
}
