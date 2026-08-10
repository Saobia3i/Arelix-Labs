'use client';

import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { Theme } from '@mui/material/styles';
import { keyframes } from '@emotion/react';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { hero } from '@/content/site-copy';
import {
  ArrowRight,
  Cpu,
  Zap,
  CheckCircle2,
  Code2,
  Layers,
  Lock,
  Smartphone,
  Palette,
} from 'lucide-react';
import Link from 'next/link';

const heroCapabilityCards = [
  { title: 'Web', subtitle: 'Web Engineering', icon: Code2 },
  { title: 'Apps', subtitle: 'Mobile Applications', icon: Smartphone },
  { title: 'UI/UX', subtitle: 'Product & Interface Design', icon: Palette },
  { title: 'PCB', subtitle: 'PCB & Hardware Design', icon: Cpu },
  { title: 'Electronics', subtitle: 'Embedded & IoT Systems', icon: Zap },
];

const talkButtonShimmer = keyframes`
  0% { transform: translateX(-240%) skewX(-22deg); }
  100% { transform: translateX(620%) skewX(-22deg); }
`;

function CapabilityCards() {
  const [activeCapIndex, setActiveCapIndex] = useState(0);
  const capCarouselRef = useRef<HTMLDivElement>(null);

  // Auto-carousel timer (every 2.8s)
  useEffect(() => {
    const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const timer = setInterval(() => {
      setActiveCapIndex((prev) => (prev + 1) % heroCapabilityCards.length);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  // Smooth scroll container on mobile when active cap changes
  useEffect(() => {
    const container = capCarouselRef.current;
    if (!container) return;
    const activeItem = container.querySelector<HTMLElement>(`[data-cap-index="${activeCapIndex}"]`);
    if (activeItem && container.scrollWidth > container.clientWidth) {
      const scrollLeft = activeItem.offsetLeft - (container.clientWidth - activeItem.clientWidth) / 2;
      container.scrollTo({ left: Math.max(0, scrollLeft), behavior: 'smooth' });
    }
  }, [activeCapIndex]);

  return (
    <Box sx={{ mb: 2.5, width: '100%', maxWidth: { lg: 620 } }}>
      {/* Mobile View: 1 Card Auto-Carousel */}
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Box
          ref={capCarouselRef}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            scrollbarWidth: 'none',
            gap: 1.25,
            px: 0.25,
            pb: 0.5,
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {heroCapabilityCards.map((item, idx) => {
            const Icon = item.icon;
            const isActive = idx === activeCapIndex;
            return (
              <Box
                key={item.title}
                data-cap-index={idx}
                onClick={() => setActiveCapIndex(idx)}
                sx={{
                  flex: '0 0 52%',
                  maxWidth: 180,
                  minWidth: 0,
                  scrollSnapAlign: 'start',
                }}
              >
                <Card
                  noPadding
                  sx={{
                    p: 1.1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: 1,
                    minHeight: 64,
                    borderRadius: '12px 0px 12px 12px',
                    bgcolor: (theme: Theme) =>
                      isActive
                        ? (theme.palette.mode === 'light' ? '#FFFFFF' : '#0F0404')
                        : (theme.palette.mode === 'light' ? '#FFFFFF' : '#000000'),
                    border: '1.5px solid',
                    borderColor: (theme: Theme) =>
                      isActive
                        ? '#B84A47'
                        : (theme.palette.mode === 'light' ? '#CBD5E1' : '#262626'),
                    boxShadow: (theme: Theme) =>
                      isActive
                        ? '0 6px 18px rgba(184,74,71,0.22)'
                        : (theme.palette.mode === 'light' ? '0 3px 10px rgba(0,0,0,0.05)' : '0 3px 10px rgba(0,0,0,0.4)'),
                    transition: 'all 200ms ease',
                    cursor: 'pointer',
                  }}
                >
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: '8px 0px 8px 8px',
                      bgcolor: (theme: Theme) =>
                        isActive
                          ? 'rgba(184, 74, 71, 0.12)'
                          : (theme.palette.mode === 'light' ? '#F4F5F7' : '#141414'),
                      border: '1px solid',
                      borderColor: (theme: Theme) =>
                        isActive
                          ? '#B84A47'
                          : (theme.palette.mode === 'light' ? '#E2E8F0' : '#262626'),
                      color: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={16} strokeWidth={2} />
                  </Box>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontSize: '0.82rem', fontWeight: 700, color: 'text.primary', lineHeight: 1.15 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: '0.68rem', mt: 0.1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                    >
                      {item.subtitle}
                    </Typography>
                  </Box>
                </Card>
              </Box>
            );
          })}
        </Box>

        {/* Mobile Pagination Indicator Dots */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 0.75,
            mt: 1,
          }}
        >
          {heroCapabilityCards.map((item, idx) => (
            <Box
              key={item.title}
              onClick={() => setActiveCapIndex(idx)}
              sx={{
                width: idx === activeCapIndex ? 18 : 6,
                height: 6,
                borderRadius: 3,
                bgcolor: idx === activeCapIndex ? '#B84A47' : 'text.disabled',
                cursor: 'pointer',
                transition: 'all 250ms ease',
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Desktop View: 5 Compact Cards Grid */}
      <Box
        sx={{
          display: { xs: 'none', md: 'grid' },
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 1.25,
        }}
      >
        {heroCapabilityCards.map((item, idx) => {
          const Icon = item.icon;
          const isActive = idx === activeCapIndex;
          return (
            <Box
              key={item.title}
              onClick={() => setActiveCapIndex(idx)}
              sx={{ cursor: 'pointer' }}
            >
              <Card
                noPadding
                sx={{
                  height: '100%',
                  minHeight: 96,
                  p: 1.25,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  justifyContent: 'center',
                  gap: 0.75,
                  borderRadius: '12px 0px 12px 12px',
                  bgcolor: (theme: Theme) =>
                    isActive
                      ? (theme.palette.mode === 'light' ? '#FFFFFF' : '#0F0404')
                      : (theme.palette.mode === 'light' ? '#FFFFFF' : '#000000'),
                  border: '1.5px solid',
                  borderColor: (theme: Theme) =>
                    isActive
                      ? '#B84A47'
                      : (theme.palette.mode === 'light' ? '#CBD5E1' : '#262626'),
                  boxShadow: (theme: Theme) =>
                    isActive
                      ? '0 6px 18px rgba(184,74,71,0.22)'
                      : (theme.palette.mode === 'light' ? '0 3px 10px rgba(0,0,0,0.05)' : '0 3px 10px rgba(0,0,0,0.4)'),
                  transition: 'all 200ms ease',
                  '&:hover': {
                    borderColor: '#B84A47',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: '8px 0px 8px 8px',
                    bgcolor: (theme: Theme) =>
                      isActive
                        ? 'rgba(184, 74, 71, 0.12)'
                        : (theme.palette.mode === 'light' ? '#F4F5F7' : '#141414'),
                    border: '1px solid',
                    borderColor: (theme: Theme) =>
                      isActive
                        ? '#B84A47'
                        : (theme.palette.mode === 'light' ? '#E2E8F0' : '#262626'),
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={16} strokeWidth={2} />
                </Box>
                <Box sx={{ width: '100%' }}>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontSize: '0.8rem', fontWeight: 700, lineHeight: 1.1, color: 'text.primary' }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{
                      fontSize: '0.66rem',
                      lineHeight: 1.2,
                      display: 'block',
                      mt: 0.25,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {item.subtitle}
                  </Typography>
                </Box>
              </Card>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

const consoleTabs = [
  { id: 'software', label: 'Software Engine', icon: Code2, status: 'OPTIMIZED' },
  { id: 'hardware', label: 'Hardware & PCB', icon: Cpu, status: 'PRODUCTION READY' },
  { id: 'ai', label: 'AI & Automation', icon: Zap, status: 'ACTIVE MODEL' },
  { id: 'iot', label: 'IoT & Telemetry', icon: Layers, status: 'STREAMING' },
];

function LiveEngineConsole() {
  const [activeTab, setActiveTab] = useState(consoleTabs[0]);

  return (
    <Card
      sx={{
        p: { xs: 2.25, sm: 2.5 },
        maxWidth: 440,
        ml: 'auto',
        borderRadius: '20px 0px 20px 20px',
        bgcolor: (theme: Theme) => (theme.palette.mode === 'light' ? '#FFFFFF' : '#000000'),
        border: (theme: Theme) =>
          theme.palette.mode === 'light' ? '1.5px solid #000000' : '1.5px solid #FFFFFF',
        boxShadow: (theme: Theme) =>
          theme.palette.mode === 'light'
            ? '0 10px 30px rgba(0,0,0,0.1)'
            : '0 10px 30px rgba(0,0,0,0.85)',
      }}
    >
      {/* Eyebrow Tag */}
      <Typography
        variant="caption"
        sx={{
          display: 'block',
          color: 'text.secondary',
          fontWeight: 600,
          letterSpacing: '0.06em',
          fontSize: '0.7rem',
          mb: 1,
        }}
      >
        • SOFTWARE + HARDWARE + AI + IOT
      </Typography>

      {/* Console Top Bar */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.75 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.85 }}>
          <Box
            sx={{
              width: 9,
              height: 9,
              borderRadius: '50%',
              bgcolor: '#22C55E',
              boxShadow: '0 0 8px #22C55E',
            }}
          />
          <Typography
            variant="caption"
            sx={{
              fontFamily: 'var(--font-oswald)',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: 'primary.main',
              fontSize: '0.74rem',
            }}
          >
            ARELIX CORE ENGINE v2.4
          </Typography>
        </Box>
        <Badge label={activeTab.status} color="primary" />
      </Box>

      <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.75, fontSize: '1.1rem', lineHeight: 1.25 }}>
        Integrated Systems Architecture
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 1.75, fontSize: '0.8rem' }}>
        Software, electronics, and AI connected under a single unified engineering handoff:
      </Typography>

      {/* Console Domain Tabs */}
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, mb: 2 }}>
        {consoleTabs.map((tab) => {
          const isSelected = tab.id === activeTab.id;
          const TabIcon = tab.icon;
          return (
            <Box
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              sx={{
                p: 1,
                borderRadius: '10px 0px 10px 10px',
                cursor: 'pointer',
                transition: 'all 150ms ease',
                bgcolor: (theme) =>
                  isSelected
                    ? 'rgba(192, 0, 0, 0.08)'
                    : theme.palette.mode === 'light'
                    ? '#F4F5F7'
                    : '#000000',
                border: '1.5px solid',
                borderColor: (theme) =>
                  isSelected
                    ? '#B84A47'
                    : theme.palette.mode === 'light'
                    ? '#E2E8F0'
                    : '#262626',
                display: 'flex',
                alignItems: 'center',
                gap: 0.85,
              }}
            >
              <TabIcon size={16} style={{ color: isSelected ? '#B84A47' : 'inherit' }} />
              <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: '0.74rem' }}>
                {tab.label}
              </Typography>
            </Box>
          );
        })}
      </Box>

      {/* Widget Sales Action Bar */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
          <Lock size={13} style={{ color: '#B84A47' }} />
          <Typography variant="caption" sx={{ fontWeight: 700, fontSize: '0.72rem' }}>
            Zero Vendor Lock-in
          </Typography>
        </Box>

        <Button
          component={Link}
          href="/contact"
          variant="primary"
          size="small"
          sx={{ fontSize: '0.74rem', py: 0.3, px: 1.25 }}
        >
          Contact us <ArrowRight size={12} style={{ marginLeft: 4 }} />
        </Button>
      </Box>
    </Card>
  );
}

export default function Hero() {
  return (
    <Section
      spacing="lg"
      id="hero"
      sx={{
        py: { xs: 6, md: 6, lg: 3 },
        minHeight: { lg: 'calc(100svh - 68px)' },
        display: { lg: 'flex' },
        alignItems: { lg: 'center' },
      }}
    >
      {/* Semantic Schema.org Organization Metadata for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Arelix Labs',
            url: 'https://arelixlabs.com',
            logo: 'https://arelixlabs.com/images/arelix-logo-transparent.png',
            description:
              "Arelix Labs builds digital products, connected systems and engineering solutions for businesses ready to build what's next.",
            knowsAbout: [
              'Software Engineering',
              'PCB Design',
              'Embedded RTOS Firmware',
              'Artificial Intelligence',
              'IoT Telemetry Systems',
            ],
          }),
        }}
      />

      <Box
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
          gap: { xs: 5, lg: 8 },
          alignItems: 'flex-start',
        }}
      >
        {/* Left: Copy */}
        <Box sx={{ width: '100%', maxWidth: { lg: 620 }, minWidth: 0 }}>
          {/* H1 */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '1.65rem', sm: '2.4rem', md: '3.2rem', lg: '3.8rem' },
              mb: 2,
              fontWeight: 700,
              letterSpacing: '-0.025em',
              lineHeight: { xs: 1.15, sm: 1.1 },
              whiteSpace: 'pre-line',
              wordBreak: 'break-word',
            }}
          >
            {hero.title}
          </Typography>

          {/* Tagline */}
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1.1rem', md: '1.2rem' },
              color: 'primary.main',
              fontWeight: 700,
              mb: 2,
              maxWidth: 560,
              lineHeight: 1.5,
            }}
          >
            {hero.tagline}
          </Typography>

          {/* Body */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 3.5, maxWidth: 540, lineHeight: 1.7, fontSize: '0.95rem' }}
          >
            {hero.body}
          </Typography>

          {/* ── Capability Cards ── */}
          <CapabilityCards />

          {/* CTA */}
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3.5 }}>
            <Button
              variant="primary"
              href="/contact"
              id="hero-primary-cta"
              size="large"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 3.5,
                py: 1.25,
                fontSize: '0.98rem',
                boxShadow: '0 8px 24px rgba(184, 74, 71, 0.22)',
                position: 'relative',
                overflow: 'hidden',
                isolation: 'isolate',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  inset: '-45% auto -45% -20%',
                  width: '24%',
                  pointerEvents: 'none',
                  background:
                    'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), rgba(255,255,255,0.72), rgba(255,255,255,0.18), transparent)',
                  filter: 'blur(0.5px)',
                  willChange: 'transform',
                  animation: `${talkButtonShimmer} 1.55s linear infinite`,
                },
                '@media (prefers-reduced-motion: reduce)': {
                  '&::after': { display: 'none' },
                },
              }}
            >
              {hero.cta} <ArrowRight size={18} />
            </Button>
          </Box>

          {/* Trust proof points */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: { xs: 2, sm: 3 },
              pt: 2.5,
              borderTop: '1px solid',
              borderColor: (theme) =>
                theme.palette.mode === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.12)',
            }}
          >
            {[
              'Full-Stack & Embedded Engineering',
              '100% Guaranteed IP Transfer',
              'Cross-Border Technology Partner',
            ].map((label) => (
              <Box key={label} sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                <CheckCircle2 size={16} style={{ color: '#B84A47' }} />
                <Typography variant="caption" sx={{ fontWeight: 700, fontSize: '0.78rem', color: 'text.primary' }}>
                  {label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Right: Console widget — desktop only */}
        <Box sx={{ display: { xs: 'none', lg: 'block' }, pl: { lg: 3, xl: 5 }, width: '100%', mt: { lg: 4.5 } }}>
          <LiveEngineConsole />
        </Box>
      </Box>
    </Section>
  );
}
