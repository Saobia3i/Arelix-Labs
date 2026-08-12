'use client';

import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import type { Theme } from '@mui/material/styles';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 160);

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <Box
          component={motion.div}
          initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: 12, scale: 0.88 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          sx={{
            position: 'fixed',
            right: 24,
            bottom: 156,
            zIndex: 1210,
          }}
        >
          <Tooltip title="Back to top" placement="top">
            <IconButton
              onClick={scrollToTop}
              aria-label="Scroll back to the top"
              sx={{
                width: 52,
                height: 52,
                color: '#FFFFFF',
                bgcolor: (theme: Theme) =>
                  theme.palette.mode === 'light' ? '#B84A47' : '#C25752',
                border: '2px solid #FFFFFF',
                boxShadow: '0 10px 28px rgba(0,0,0,0.28)',
                '&:hover': {
                  bgcolor: (theme: Theme) =>
                    theme.palette.mode === 'light' ? '#9F3F3C' : '#C75B57',
                  transform: 'translateY(-3px)',
                },
                transition: 'transform 180ms ease, background-color 180ms ease',
                '@media (max-width: 600px)': {
                  width: 44,
                  height: 44,
                },
              }}
            >
              <ArrowUp size={22} strokeWidth={2.2} />
            </IconButton>
          </Tooltip>
        </Box>
      )}
    </AnimatePresence>
  );
}
