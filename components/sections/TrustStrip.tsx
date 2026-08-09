'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Cpu, Brain, Wifi, Shield, type LucideIcon } from 'lucide-react';
import Section from '@/components/ui/Section';
import IconTile from '@/components/ui/IconTile';
import { trustStrip } from '@/content/site-copy';

const iconMap: Record<string, LucideIcon> = {
  Cpu,
  Brain,
  Wifi,
  Shield,
};

export default function TrustStrip() {
  return (
    <Section spacing="sm" background="paper" id="trust-strip">
      <Grid container spacing={2}>
        {trustStrip.map((item) => {
          const Icon = iconMap[item.icon] ?? Cpu;
          return (
            <Grid key={item.icon} size={{ xs: 6, md: 3 }}>
              <IconTile
                icon={<Icon size={22} strokeWidth={1.5} />}
                label={item.title}
                sublabel={item.subtitle}
              />
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
}
