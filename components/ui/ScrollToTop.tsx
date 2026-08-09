'use client';

import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import type { Theme } from '@mui/material/styles';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 420);

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
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: 12, scale: 0.88 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          style={{ position: 'fixed', right: 30, bottom: 100, zIndex: 1190 }}
        >
          <Tooltip title="Back to top" placement="left">
            <IconButton
              onClick={scrollToTop}
              aria-label="Scroll back to the top"
              sx={{
                width: 46,
                height: 46,
                color: '#FFFFFF',
                bgcolor: (theme: Theme) =>
                  theme.palette.mode === 'light' ? '#C00000' : '#D95C57',
                border: '1.5px solid #FFFFFF',
                boxShadow: '0 10px 28px rgba(0,0,0,0.28)',
                '&:hover': {
                  bgcolor: (theme: Theme) =>
                    theme.palette.mode === 'light' ? '#940000' : '#C94D49',
                  transform: 'translateY(-3px)',
                },
                transition: 'transform 180ms ease, background-color 180ms ease',
                '@media (max-width: 600px)': {
                  width: 42,
                  height: 42,
                },
              }}
            >
              <ArrowUp size={21} strokeWidth={2.2} />
            </IconButton>
          </Tooltip>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
