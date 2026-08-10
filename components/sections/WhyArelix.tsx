'use client';

import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import type { Theme } from '@mui/material/styles';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import {
  Check,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

// The 6 Engineering Advantages for Why Choose Us
const whyChooseCards = [
  {
    num: '01',
    title: 'Unified Full-Stack Ownership',
    subtitle: 'No handoffs between software & hardware teams.',
    description:
      'We bring web software, mobile apps, PCB electronics, embedded RTOS firmware, and AI into one single engineering unit.',
    metric: '100% In-House Team',
    bullets: [
      'Full-stack web & mobile architecture',
      'Custom PCB design & hardware engineering',
      'Embedded C/C++ & RTOS firmware development',
      'End-to-end API integration & cloud telemetry',
    ],
  },
  {
    num: '02',
    title: 'Production-Grade Sprint Velocity',
    subtitle: 'From concept to working hardware & cloud platform fast.',
    description:
      'Our integrated prototyping pipeline reduces hardware-to-cloud deployment cycles from months down to weeks.',
    metric: '4x Faster Time-to-Market',
    bullets: [
      'Rapid PCB prototyping & SMT assembly',
      'Parallel software & firmware development',
      'Automated CI/CD for embedded systems',
      'Direct cloud telemetry provisioning',
    ],
  },
  {
    num: '03',
    title: 'Deep Architecture & Hardware Depth',
    subtitle: 'Bare-metal C/C++, Rust, Edge AI & Cloud microservices.',
    description:
      'We write high-performance firmware, engineer custom multi-layer PCBs, and build resilient cloud APIs.',
    metric: 'Silicon to Cloud',
    bullets: [
      'Multi-layer high-speed PCB layouts',
      'Edge AI computer vision & inference engines',
      'Scalable GraphQL / REST microservices',
      'Low-power BLE, LoRa, Wi-Fi, and Cellular IoT',
    ],
  },
  {
    num: '04',
    title: '100% Client IP & Source Ownership',
    subtitle: 'Zero vendor lock-in. Full design IP handed over.',
    description:
      'All source code, PCB Gerber manufacturing files, CAD models, and API documentation belong entirely to you.',
    metric: '100% Guaranteed IP Transfer',
    bullets: [
      'Complete Git repository handoff',
      'Gerber, BOM, and schematic CAD files',
      'Comprehensive architecture docs',
      'Zero proprietary vendor lock-in fees',
    ],
  },
  {
    num: '05',
    title: 'Enterprise Uptime & Security',
    subtitle: 'Built for high reliability, security, and low latency.',
    description:
      'End-to-end encrypted telemetry, OTA firmware updates, and cloud infrastructure engineered for 99.99% uptime.',
    metric: '99.99% Target Uptime',
    bullets: [
      'Hardware Root of Trust & Secure Boot',
      'Encrypted AES-256 telemetry streams',
      'Fail-safe Over-The-Air (OTA) updates',
      'High-availability cloud deployment',
    ],
  },
  {
    num: '06',
    title: 'Direct Senior Engineering Access',
    subtitle: 'No non-technical account managers relaying messages.',
    description:
      'You work directly with our senior software architects, electronics engineers, and AI developers.',
    metric: 'Direct Dev Contact',
    bullets: [
      'Direct Slack / Teams sync with core devs',
      'Transparent weekly sprint demos',
      'Senior-level technical decision making',
      'Long-term engineering partnership',
    ],
  },
];

export default function WhyArelix() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll Progress Hook across the 350vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 84px', 'end end'],
  });

  // Calculate active index (0 to 5) as the user scrolls, with entry/exit buffers
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const startBuffer = 0.10;
    const endBuffer = 0.90;
    const progress = Math.max(0, Math.min(1, (latest - startBuffer) / (endBuffer - startBuffer)));

    const calculatedIndex = Math.min(
      whyChooseCards.length - 1,
      Math.floor(progress * whyChooseCards.length)
    );

    if (calculatedIndex !== activeIndex) {
      setActiveIndex(calculatedIndex);
    }
  });

  const activeCard = whyChooseCards[activeIndex];

  const handleStepClick = (idx: number) => {
    setActiveIndex(idx);
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerTop = window.scrollY + containerRect.top;
      const containerHeight = containerRef.current.offsetHeight - window.innerHeight;

      const startBuffer = 0.10;
      const endBuffer = 0.90;
      const effectiveProgress = startBuffer + (idx / (whyChooseCards.length - 1)) * (endBuffer - startBuffer);

      const targetY = containerTop + effectiveProgress * containerHeight;

      window.scrollTo({
        top: targetY,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Section
      spacing="lg"
      background="default"
      id="why-arelix"
      sx={{ py: { xs: 2, md: 2 } }}
    >
      {/* Scroll pinning container: each mobile/desktop scroll segment advances one card. */}
      <Box
        ref={containerRef}
        sx={{
          position: 'relative',
          height: '350vh',
        }}
      >
        {/* Sticky Inner Wrapper (Pins to screen on desktop as mouse scrolls) */}
        <Box
          sx={{
            position: 'sticky',
            top: { xs: 12, md: 84 },
            zIndex: 2,
          }}
        >
          {/* SVG Dot Grid Canvas Background */}
          <Box
            aria-hidden="true"
            sx={{
              position: 'absolute',
              inset: -30,
              pointerEvents: 'none',
              zIndex: 0,
              opacity: (theme) => (theme.palette.mode === 'light' ? 0.35 : 0.6),
            }}
          >
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="why-dot-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill="#B84A47" opacity="0.24" />
                  <circle cx="18" cy="18" r="1.2" fill="#888888" opacity="0.25" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#why-dot-grid)" />
            </svg>
          </Box>

          {/* Mobile keeps the card experience focused, with a short section label. */}
          <Typography
            variant="overline"
            sx={{
              display: 'block',
              mb: { xs: 0.5, md: 1 },
              color: 'primary.main',
              fontWeight: 800,
              letterSpacing: '0.12em',
              position: 'relative',
              zIndex: 1,
            }}
          >
            Why choose us?
          </Typography>

          {/* Section Header */}
          <Box sx={{ maxWidth: 760, mb: { xs: 1.5, md: 1.5 }, position: 'relative', zIndex: 1 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.35rem', sm: '1.5rem', md: '1.85rem' },
                fontWeight: 700,
                letterSpacing: '-0.02em',
                mb: 0.75,
                lineHeight: { xs: 1.15, md: 1.15 },
              }}
            >
              Built for teams that need technical depth, not slideware.
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontSize: { xs: '0.78rem', md: '0.925rem' }, lineHeight: { xs: 1.35, md: 1.4 } }}
            >
              Scroll down with your mouse to reveal each of our 6 core engineering principles in sequence.
            </Typography>
          </Box>

          {/* Mobile Step Indicator (01 - 06 Stepper) */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'relative',
              mb: 2,
              px: 0.5,
              width: '100%',
              zIndex: 1,
            }}
          >
            {/* Connecting Track Line */}
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: 16,
                right: 16,
                height: 2,
                bgcolor: (theme) => (theme.palette.mode === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.15)'),
                transform: 'translateY(-50%)',
                zIndex: 0,
              }}
            >
              {/* Active Progress Line */}
              <Box
                sx={{
                  height: '100%',
                  bgcolor: 'primary.main',
                  width: `${(activeIndex / (whyChooseCards.length - 1)) * 100}%`,
                  transition: 'width 0.3s ease',
                }}
              />
            </Box>

            {/* 6 Step Circles */}
            {whyChooseCards.map((card, idx) => {
              const isActive = idx === activeIndex;
              const isCompleted = idx < activeIndex;
              return (
                <Box
                  key={card.num}
                  onClick={() => handleStepClick(idx)}
                  sx={{
                    position: 'relative',
                    zIndex: 1,
                    width: { xs: 32, sm: 36 },
                    height: { xs: 32, sm: 36 },
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-oswald)',
                    fontSize: { xs: '0.75rem', sm: '0.85rem' },
                    fontWeight: 700,
                    transition: 'all 0.25s ease',
                    bgcolor: isActive
                      ? 'primary.main'
                      : (theme) => (theme.palette.mode === 'light' ? '#FFFFFF' : '#1A1A1A'),
                    color: isActive
                      ? '#FFFFFF'
                      : isCompleted
                      ? 'primary.main'
                      : 'text.secondary',
                    border: '2px solid',
                    borderColor: isActive
                      ? 'primary.main'
                      : isCompleted
                      ? 'primary.main'
                      : (theme) => (theme.palette.mode === 'light' ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.2)'),
                    boxShadow: isActive
                      ? '0 0 0 4px rgba(184, 74, 71, 0.2)'
                      : 'none',
                    transform: isActive ? 'scale(1.1)' : 'scale(1)',
                  }}
                >
                  {card.num}
                </Box>
              );
            })}
          </Box>

          {/* Two-Column Sticky Scroll Display */}
          <Grid container spacing={2} sx={{ alignItems: 'center', position: 'relative', zIndex: 1 }}>
            {/* Left Panel: Step Navigation List (01 to 06) - Hidden on Mobile */}
            <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: { xs: 1.5, md: 0.5 },
                  width: '100%',
                  maxWidth: { md: 440 },
                }}
              >
                {whyChooseCards.map((card, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <Box
                      key={card.num}
                      onClick={() => handleStepClick(idx)}
                      sx={{
                        px: { xs: 2, md: 1.5 },
                        py: { xs: 2, md: 1 },
                        minHeight: { md: 48 },
                        borderRadius: '16px 0px 16px 16px',
                        cursor: 'pointer',
                        transition: 'all 200ms ease',
                        bgcolor: (theme) =>
                          isActive
                            ? theme.palette.mode === 'light'
                              ? '#FFFFFF'
                              : '#000000'
                            : 'transparent',
                        border: (theme) =>
                          isActive
                            ? theme.palette.mode === 'light'
                              ? '1.5px solid #000000'
                              : '1.5px solid #FFFFFF'
                            : '1px solid transparent',
                        boxShadow: isActive ? '0 4px 20px rgba(0,0,0,0.08)' : 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        '&:hover': {
                          bgcolor: (theme) =>
                            theme.palette.mode === 'light' ? 'rgba(0,0,0,0.02)' : 'rgba(255,255,255,0.03)',
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Typography
                          variant="h4"
                          sx={{
                            fontFamily: 'var(--font-oswald)',
                            fontSize: '1.25rem',
                            fontWeight: 700,
                            color: isActive ? 'primary.main' : 'text.secondary',
                            width: 32,
                          }}
                        >
                          {card.num}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: isActive ? 700 : 500,
                            fontSize: '0.95rem',
                            color: isActive ? 'text.primary' : 'text.secondary',
                          }}
                        >
                          {card.title}
                        </Typography>
                      </Box>

                      {isActive && (
                        <motion.div layoutId="active-arrow">
                          <ChevronRight size={18} style={{ color: '#B84A47' }} />
                        </motion.div>
                      )}
                    </Box>
                  );
                })}
              </Box>
            </Grid>

            {/* Right Panel: Sticky Hero Reveal Card */}
            <Grid size={{ xs: 12, md: 7 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 25, scale: 0.96 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -25, scale: 0.96 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <Card
                    noPadding
                    sx={{
                      minHeight: { xs: 300, sm: 340, md: 360 },
                      p: { xs: 2.5, sm: 3, md: 3 },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      borderRadius: '24px 0px 24px 24px', // Cat's Eye sharp top-right corner
                      bgcolor: (theme: Theme) => (theme.palette.mode === 'light' ? '#FFFFFF' : '#000000'),
                      border: (theme: Theme) =>
                        theme.palette.mode === 'light' ? '1.5px solid #000000' : '1.5px solid #FFFFFF',
                      boxShadow: (theme: Theme) =>
                        theme.palette.mode === 'light'
                          ? '0 12px 36px rgba(0,0,0,0.12)'
                          : '0 12px 36px rgba(0,0,0,0.8)',
                    }}
                  >
                    <Box>
                      {/* Top Header Row - Title and Number with standard gap to prevent collapse */}
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          justifyContent: 'space-between',
                          gap: { xs: 1.5, md: 2 },
                          mb: { xs: 2, md: 2 },
                          pb: { xs: 1.5, md: 1.5 },
                          borderBottom: '1px solid',
                          borderColor: (theme) =>
                            theme.palette.mode === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.1)',
                        }}
                      >
                        <Typography
                          variant="h3"
                          sx={{
                            flex: 1,
                            minWidth: 0,
                            fontSize: { xs: '1.15rem', sm: '1.3rem', md: '1.4rem' },
                            fontWeight: 700,
                            lineHeight: 1.25,
                            color: 'text.primary',
                          }}
                        >
                          {activeCard.title}
                        </Typography>

                        <Typography
                          variant="h2"
                          sx={{
                            flexShrink: 0,
                            fontFamily: 'var(--font-oswald)',
                            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                            fontWeight: 700,
                            color: 'primary.main',
                            lineHeight: 1,
                          }}
                        >
                          {activeCard.num}
                        </Typography>
                      </Box>

                      {/* Subtitle & Description */}
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 600, color: 'primary.main', mb: { xs: 1, md: 1 }, fontSize: { xs: '0.95rem', md: '1.05rem' } }}
                      >
                        {activeCard.subtitle}
                      </Typography>

                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ fontSize: { xs: '0.9rem', md: '0.975rem' }, lineHeight: { xs: 1.55, md: 1.6 }, mb: { xs: 2.5, md: 2 } }}
                      >
                        {activeCard.description}
                      </Typography>

                      {/* Bullet Features */}
                      <Grid container spacing={{ xs: 1.25, md: 1 }} sx={{ mb: { xs: 2, md: 1 } }}>
                        {activeCard.bullets.map((bullet, bIdx) => (
                          <Grid key={bIdx} size={{ xs: 12, sm: 6 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <Box
                                sx={{
                                  width: 17,
                                  height: 17,
                                  borderRadius: '50%',
                                  bgcolor: 'rgba(192,0,0,0.1)',
                                  color: 'primary.main',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: 0,
                                }}
                              >
                                <Check size={11} strokeWidth={3} />
                              </Box>
                              <Typography variant="body2" sx={{ fontSize: { xs: '0.825rem', md: '0.875rem' }, fontWeight: 500 }}>
                                {bullet}
                              </Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>

                    {/* Footer Row */}
                    <Box
                      sx={{
                        pt: { xs: 1.5, md: 1.5 },
                        mt: { xs: 1.5, md: 1.5 },
                        borderTop: '1px solid',
                        borderColor: (theme) =>
                          theme.palette.mode === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Sparkles size={15} style={{ color: '#B84A47' }} />
                        <Typography variant="body2" sx={{ fontWeight: 700, fontSize: { xs: '0.8rem', md: '0.875rem' } }}>
                          {activeCard.metric}
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Section>
  );
}

