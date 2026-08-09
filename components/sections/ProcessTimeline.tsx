'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { Theme } from '@mui/material/styles';
import { motion, useReducedMotion } from 'framer-motion';
import Section from '@/components/ui/Section';
import { process } from '@/content/site-copy';

export default function ProcessTimeline() {
  const reduceMotion = useReducedMotion();

  return (
    <Section spacing="lg" id="process" sx={{ py: { xs: 6, md: 7 } }}>
      <Box sx={{ maxWidth: 650, mx: 'auto', mb: { xs: 5, md: 6 }, textAlign: 'center' }}>
        <Typography variant="h2" sx={{ fontSize: { xs: '2.1rem', md: '2.7rem' }, mb: 1.25 }}>
          Our Process
        </Typography>
        <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
          A clear engineering path from the first conversation to long-term support.
        </Typography>
      </Box>

      {/* Desktop animated timeline */}
      <Box
        sx={{
          display: { xs: 'none', md: 'grid' },
          gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
          gap: 2,
          position: 'relative',
          pt: 1,
        }}
      >
        <Box
          aria-hidden="true"
          sx={{ position: 'absolute', top: 31, left: '10%', right: '10%', height: 2, bgcolor: 'divider' }}
        >
          <motion.div
            initial={reduceMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, #C00000, #E97A75)',
              transformOrigin: 'left center',
            }}
          />
        </Box>

        {process.map((step, index) => (
          <motion.div
            key={step.step}
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
            whileHover={reduceMotion ? undefined : { y: -8 }}
            style={{ minWidth: 0, position: 'relative', zIndex: 1 }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
              <motion.div
                animate={reduceMotion ? undefined : { scale: [1, 1.08, 1] }}
                transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.35, ease: 'easeInOut' }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    border: '1.5px solid',
                    borderColor: (theme: Theme) =>
                      theme.palette.mode === 'light' ? '#C00000' : '#D95C57',
                    bgcolor: 'background.default',
                    display: 'grid',
                    placeItems: 'center',
                    boxShadow: (theme: Theme) =>
                      theme.palette.mode === 'light'
                        ? '0 0 0 7px rgba(192,0,0,0.07)'
                        : '0 0 0 7px rgba(217,92,87,0.10)',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-oswald)',
                      fontWeight: 700,
                      fontSize: '0.82rem',
                      color: (theme: Theme) =>
                        theme.palette.mode === 'light' ? '#C00000' : '#E97A75',
                    }}
                  >
                    {step.step}
                  </Typography>
                </Box>
              </motion.div>

              <Box
                sx={{
                  mt: 3,
                  p: 2.25,
                  width: '100%',
                  minHeight: 178,
                  borderRadius: '18px 0 18px 18px',
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: (theme: Theme) =>
                    theme.palette.mode === 'light' ? '#E2E8F0' : '#2A2A2A',
                  textAlign: 'center',
                  transition: 'border-color 200ms ease, box-shadow 200ms ease',
                  '&:hover': {
                    borderColor: (theme: Theme) =>
                      theme.palette.mode === 'light' ? '#C00000' : '#D95C57',
                    boxShadow: (theme: Theme) =>
                      theme.palette.mode === 'light'
                        ? '0 16px 34px rgba(15,23,42,0.12)'
                        : '0 16px 34px rgba(0,0,0,0.5)',
                  },
                }}
              >
                <Typography variant="h6" sx={{ mb: 1, fontSize: '1rem', fontWeight: 700 }}>
                  {step.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, fontSize: '0.84rem' }}>
                  {step.body}
                </Typography>
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>

      {/* Mobile animated vertical timeline */}
      <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', gap: 2.5, position: 'relative' }}>
        <Box
          aria-hidden="true"
          sx={{ position: 'absolute', left: 23, top: 24, bottom: 24, width: 2, bgcolor: 'divider' }}
        />

        {process.map((step, index) => (
          <motion.div
            key={step.step}
            initial={reduceMotion ? false : { opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <Box sx={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 2, position: 'relative' }}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  bgcolor: 'background.default',
                  border: '1.5px solid',
                  borderColor: (theme: Theme) =>
                    theme.palette.mode === 'light' ? '#C00000' : '#D95C57',
                  display: 'grid',
                  placeItems: 'center',
                  zIndex: 1,
                }}
              >
                <Typography sx={{ fontFamily: 'var(--font-oswald)', fontWeight: 700, color: 'primary.main' }}>
                  {step.step}
                </Typography>
              </Box>

              <Box
                sx={{
                  p: 2.25,
                  borderRadius: '16px 0 16px 16px',
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Typography variant="h6" sx={{ mb: 0.75, fontSize: '1rem', fontWeight: 700 }}>
                  {step.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
                  {step.body}
                </Typography>
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Section>
  );
}
