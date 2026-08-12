'use client';

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/SocialIcons';

export default function WhatsAppBubble() {
  const whatsappUrl = 'https://wa.me/8801725520582';
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const showPill = !isDismissed && (isVisible || isHovered);

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        position: 'fixed',
        right: 24,
        bottom: 90,
        zIndex: 1205,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 10 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
      >
        {/* Tail Message Bubble Floating to the Left */}
        <AnimatePresence>
          {showPill && (
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0.9, x: 8 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: 8 }}
              transition={{ duration: 0.2 }}
              sx={{
                position: 'absolute',
                right: 'calc(100% + 14px)',
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: (theme) => (theme.palette.mode === 'light' ? '#FFFFFF' : '#0B1320'),
                color: '#25D366',
                pl: 2,
                pr: 1.25,
                py: 0.85,
                borderRadius: '100px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.22)',
                border: '1.5px solid #25D366',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: 1.25,
                zIndex: 1206,
                fontFamily: 'var(--font-roboto), Roboto, sans-serif',
                // Rightward pointing speech triangle tail
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: '50%',
                  left: '100%',
                  transform: 'translateY(-50%)',
                  borderWidth: '6px',
                  borderStyle: 'solid',
                  borderColor: 'transparent transparent transparent #25D366',
                },
              }}
            >
              <Box
                component="a"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: '#25D366',
                    boxShadow: '0 0 8px #25D366',
                    flexShrink: 0,
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: 'var(--font-roboto), Roboto, sans-serif',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    color: (theme) => (theme.palette.mode === 'light' ? '#128C7E' : '#25D366'),
                    letterSpacing: '0.01em',
                    lineHeight: 1,
                  }}
                >
                  Chat with us
                </Typography>
              </Box>
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDismissed(true);
                }}
                aria-label="Close WhatsApp tail notification"
                sx={{
                  width: 20,
                  height: 20,
                  p: 0,
                  ml: 0.5,
                  color: 'text.secondary',
                  transition: 'all 150ms ease',
                  '&:hover': {
                    color: '#25D366',
                    bgcolor: 'rgba(37, 211, 102, 0.15)',
                  },
                }}
              >
                <X size={13} />
              </IconButton>
            </Box>
          )}
        </AnimatePresence>

        {/* Floating WhatsApp Action Button */}
        <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.94 }}>
          <Box
            component="a"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            sx={{
              width: 52,
              height: 52,
              borderRadius: '50%',
              bgcolor: '#25D366',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 26px rgba(37, 211, 102, 0.45)',
              border: '2px solid #FFFFFF',
              textDecoration: 'none',
              transition: 'background-color 200ms ease, box-shadow 200ms ease',
              '&:hover': {
                bgcolor: '#20BA5A',
                boxShadow: '0 12px 32px rgba(37, 211, 102, 0.65)',
              },
              '@media (max-width: 600px)': {
                width: 48,
                height: 48,
              },
            }}
          >
            <WhatsAppIcon size={26} color="#FFFFFF" />
          </Box>
        </motion.div>
      </motion.div>
    </Box>
  );
}
