'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { Theme } from '@mui/material/styles';
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
} from 'lucide-react';
import Link from 'next/link';

// Live Architecture Console Domains for Right-Side Widget
const consoleTabs = [
  {
    id: 'software',
    label: 'Software Engine',
    icon: Code2,
    status: 'OPTIMIZED',
  },
  {
    id: 'hardware',
    label: 'Hardware & PCB',
    icon: Cpu,
    status: 'PRODUCTION READY',
  },
  {
    id: 'ai',
    label: 'AI & Automation',
    icon: Zap,
    status: 'ACTIVE MODEL',
  },
  {
    id: 'iot',
    label: 'IoT & Telemetry',
    icon: Layers,
    status: 'STREAMING',
  },
];

function LiveEngineConsole() {
  const [activeTab, setActiveTab] = useState(consoleTabs[0]);

  return (
    <Card
      sx={{
        p: { xs: 3, sm: 3.5 },
        borderRadius: '24px 0px 24px 24px', // Cat's Eye sharp top-right corner
        bgcolor: (theme: Theme) => (theme.palette.mode === 'light' ? '#FFFFFF' : '#000000'),
        border: (theme: Theme) => (theme.palette.mode === 'light' ? '1.5px solid #000000' : '1.5px solid #FFFFFF'),
        boxShadow: (theme: Theme) =>
          theme.palette.mode === 'light'
            ? '0 12px 36px rgba(0,0,0,0.12)'
            : '0 12px 36px rgba(0,0,0,0.85)',
      }}
    >
      {/* Console Top Bar */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              bgcolor: '#22C55E',
              boxShadow: '0 0 10px #22C55E',
            }}
          />
          <Typography
            variant="caption"
            sx={{ fontFamily: 'var(--font-oswald)', fontWeight: 700, letterSpacing: '0.1em', color: 'primary.main', fontSize: '0.78rem' }}
          >
            ARELIX CORE ENGINE v2.4
          </Typography>
        </Box>
        <Badge label={activeTab.status} color="primary" />
      </Box>

      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, fontSize: '1.25rem', lineHeight: 1.3 }}>
        Integrated Systems Architecture
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, fontSize: '0.85rem' }}>
        Software, electronics, and AI connected under a single unified engineering handoff:
      </Typography>

      {/* Console Domain Tabs */}
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.25, mb: 2.5 }}>
        {consoleTabs.map((tab) => {
          const isSelected = tab.id === activeTab.id;
          const TabIcon = tab.icon;
          return (
            <Box
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              sx={{
                p: 1.25,
                borderRadius: '12px 0px 12px 12px',
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
                gap: 1,
              }}
            >
              <TabIcon size={18} style={{ color: isSelected ? '#B84A47' : 'inherit' }} />
              <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: '0.78rem' }}>
                {tab.label}
              </Typography>
            </Box>
          );
        })}
      </Box>

      {/* Widget Sales Action Bar */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
          <Lock size={14} style={{ color: '#B84A47' }} />
          <Typography variant="caption" sx={{ fontWeight: 700, fontSize: '0.75rem' }}>
            Zero Vendor Lock-in
          </Typography>
        </Box>

        <Button
          component={Link}
          href="/contact"
          variant="primary"
          size="small"
          sx={{ fontSize: '0.78rem', py: 0.4, px: 1.5 }}
        >
          Talk to Arelix <ArrowRight size={13} style={{ marginLeft: 4 }} />
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
              'Arelix Labs builds digital products, connected systems and engineering solutions for businesses ready to build what\'s next.',
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
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
          gap: { xs: 6, lg: 8 },
          alignItems: 'center',
        }}
      >
        {/* Left: Verbatim High-Impact Sales Copy */}
        <Box sx={{ maxWidth: { lg: 620 } }}>
          {/* Capability eyebrow */}
          <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1 }}>
            <Typography
              variant="caption"
              sx={{ color: 'text.secondary', fontWeight: 600, letterSpacing: '0.05em', fontSize: '0.78rem' }}
            >
              • SOFTWARE + HARDWARE + AI + IOT
            </Typography>
          </Box>

          {/* H1 Title (Verbatim Copy: Build Digital. Build Physical. Build What's Next.) */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.2rem', md: '3.7rem', lg: '4rem' },
              mb: 2,
              fontWeight: 700,
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              whiteSpace: 'pre-line',
            }}
          >
            {hero.title}
          </Typography>

          {/* Sub-headline Tagline (Verbatim Copy: Software. Hardware. Engineered Together.) */}
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

          {/* Body Copy (Verbatim Copy) */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 3.5, maxWidth: 540, lineHeight: 1.7, fontSize: '0.95rem' }}
          >
            {hero.body}
          </Typography>

          {/* High-Converting CTA Buttons */}
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
              }}
            >
              {hero.cta} <ArrowRight size={18} />
            </Button>

            <Button
              variant="secondary"
              href="/contact"
              id="hero-secondary-cta"
              size="large"
              sx={{ px: 3, py: 1.25, fontSize: '0.95rem' }}
            >
              {hero.ctaSecondary}
            </Button>
          </Box>

          {/* Conversion Proof Points */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: { xs: 2, sm: 3 },
              pt: 2.5,
              borderTop: '1px solid',
              borderColor: (theme) => (theme.palette.mode === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.12)'),
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
              <CheckCircle2 size={16} style={{ color: '#B84A47' }} />
              <Typography variant="caption" sx={{ fontWeight: 700, fontSize: '0.78rem', color: 'text.primary' }}>
                Full-Stack &amp; Embedded Engineering
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
              <CheckCircle2 size={16} style={{ color: '#B84A47' }} />
              <Typography variant="caption" sx={{ fontWeight: 700, fontSize: '0.78rem', color: 'text.primary' }}>
                100% Guaranteed IP Transfer
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
              <CheckCircle2 size={16} style={{ color: '#B84A47' }} />
              <Typography variant="caption" sx={{ fontWeight: 700, fontSize: '0.78rem', color: 'text.primary' }}>
                Cross-Border Technology Partner
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Right: Live Engineering Console Widget */}
        <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
          <LiveEngineConsole />
        </Box>
      </Box>
    </Section>
  );
}
