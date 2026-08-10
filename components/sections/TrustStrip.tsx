'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import type { Theme } from '@mui/material/styles';
import { ChevronLeft, ChevronRight, Code2, Smartphone, Palette, Cpu, Zap } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

const bannerDomains = [
  { title: 'Web', subtitle: 'Full-Stack Web Engineering', icon: Code2 },
  { title: 'Apps', subtitle: 'Mobile Applications', icon: Smartphone },
  { title: 'UI/UX', subtitle: 'Product & Interface Design', icon: Palette },
  { title: 'PCB', subtitle: 'PCB & Hardware Design', icon: Cpu },
  { title: 'Electronics', subtitle: 'Embedded & IoT Systems', icon: Zap },
];

export default function TrustStrip() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = useCallback((index: number) => {
    const nextIndex = Math.max(0, Math.min(bannerDomains.length - 1, index));
    const container = carouselRef.current;
    const item = container?.querySelector<HTMLElement>(`[data-carousel-index="${nextIndex}"]`);
    if (container && item) {
      container.scrollTo({ left: item.offsetLeft, behavior: 'smooth' });
    }
    setActiveIndex(nextIndex);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isCarouselLayout = window.matchMedia('(max-width: 899.95px)').matches;
    if (reduceMotion || !isCarouselLayout) return;

    const timer = window.setInterval(() => {
      goToSlide((activeIndex + 1) % bannerDomains.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [activeIndex, goToSlide]);

  const updateActiveSlide = () => {
    const container = carouselRef.current;
    if (!container) return;
    const items = Array.from(container.querySelectorAll<HTMLElement>('[data-carousel-index]'));
    const closest = items.reduce(
      (best, item, index) =>
        Math.abs(item.offsetLeft - container.scrollLeft) < Math.abs(items[best].offsetLeft - container.scrollLeft)
          ? index
          : best,
      0
    );
    setActiveIndex(closest);
  };

  return (
    <Section
      spacing="sm"
      background="paper"
      id="trust-strip"
      sx={{ py: { xs: 3, md: 2.5 }, overflowX: { xs: 'clip', md: 'visible' } }}
    >
      <Box
        ref={carouselRef}
        onScroll={updateActiveSlide}
        sx={{
          width: '100%',
          maxWidth: '100%',
          minWidth: 0,
          display: { xs: 'flex', md: 'grid' },
          gridTemplateColumns: { md: 'repeat(5, minmax(0, 1fr))' },
          gap: { xs: 1.5, md: 1.75 },
          overflowX: { xs: 'auto', md: 'visible' },
          scrollSnapType: { xs: 'x mandatory', md: 'none' },
          scrollBehavior: 'smooth',
          overscrollBehaviorX: 'contain',
          pb: { xs: 1, md: 0 },
          px: { xs: 0.25, md: 0 },
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {bannerDomains.map((domain, index) => {
          const Icon = domain.icon;
          return (
            <Box
              key={domain.title}
              data-carousel-index={index}
              sx={{
                flex: { xs: '0 0 78%', sm: '0 0 44%', md: 'initial' },
                minWidth: 0,
                scrollSnapAlign: 'start',
                scrollSnapStop: 'always',
              }}
            >
              <Card
                noPadding
                sx={{
                  height: '100%',
                  minHeight: { xs: 95, md: 105 },
                  p: { xs: 1.25, md: 1.5 },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  justifyContent: 'center',
                  gap: 0.75,
                  borderRadius: '12px 0px 12px 12px',
                  bgcolor: (theme: Theme) => (theme.palette.mode === 'light' ? '#FFFFFF' : '#000000'),
                  border: '1px solid',
                  borderColor: (theme: Theme) => (theme.palette.mode === 'light' ? '#D8DEE8' : '#FFFFFF'),
                  boxShadow: (theme: Theme) =>
                    theme.palette.mode === 'light'
                      ? '0 4px 12px rgba(0,0,0,0.06)'
                      : '0 4px 12px rgba(0,0,0,0.5)',
                  transition: 'all 150ms ease',
                  '&:hover': {
                    borderColor: (theme: Theme) => (theme.palette.mode === 'light' ? '#B84A47' : '#C25752'),
                    boxShadow: (theme: Theme) =>
                      theme.palette.mode === 'light'
                        ? '0 6px 18px rgba(0,0,0,0.12)'
                        : '0 6px 18px rgba(214,107,102,0.16)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: '8px 0px 8px 8px',
                    bgcolor: (theme: Theme) => (theme.palette.mode === 'light' ? '#F4F5F7' : '#000000'),
                    border: '1px solid',
                    borderColor: (theme: Theme) => (theme.palette.mode === 'light' ? '#E2E8F0' : '#333333'),
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={16} strokeWidth={2} />
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: '0.82rem', fontWeight: 700, mb: 0.15, color: 'text.primary' }}
                  >
                    {domain.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.68rem', lineHeight: 1.25 }}>
                    {domain.subtitle}
                  </Typography>
                </Box>
              </Card>
            </Box>
          );
        })}
      </Box>

      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          mt: 1.25,
        }}
      >
        <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
          Swipe to explore
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton
            size="small"
            onClick={() => goToSlide(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label="Previous service"
            sx={{ border: '1px solid', borderColor: 'divider' }}
          >
            <ChevronLeft size={17} />
          </IconButton>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
            {bannerDomains.map((domain, index) => (
              <Box
                key={domain.title}
                component="button"
                type="button"
                aria-label={`Go to ${domain.title}`}
                onClick={() => goToSlide(index)}
                sx={{
                  width: index === activeIndex ? 18 : 6,
                  height: 6,
                  p: 0,
                  border: 0,
                  borderRadius: 99,
                  bgcolor: index === activeIndex ? 'primary.main' : 'divider',
                  cursor: 'pointer',
                  transition: 'width 180ms ease, background-color 180ms ease',
                }}
              />
            ))}
          </Box>

          <IconButton
            size="small"
            onClick={() => goToSlide(activeIndex + 1)}
            disabled={activeIndex === bannerDomains.length - 1}
            aria-label="Next service"
            sx={{ border: '1px solid', borderColor: 'divider' }}
          >
            <ChevronRight size={17} />
          </IconButton>
        </Box>
      </Box>
    </Section>
  );
}
