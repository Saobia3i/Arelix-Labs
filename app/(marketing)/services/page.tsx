import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ServicesGrid from '@/components/sections/ServicesGrid';
import CTASection from '@/components/sections/CTASection';
import Section from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Services — Arelix Labs',
  description:
    'From embedded firmware to full-stack platforms to intelligent automation — see the full range of engineering services Arelix Labs offers.',
};

export default function ServicesPage() {
  return (
    <>
      <Section spacing="md" id="services-header">
        <Typography
          variant="overline"
          sx={{ color: 'primary.main', display: 'block', mb: 1 }}
        >
          What We Build
        </Typography>
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: '2.4rem', md: '3rem' }, mb: 2 }}
        >
          Services
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 560, lineHeight: 1.7 }}
        >
          We cover the full engineering stack — software, hardware, AI, and IoT — under one roof,
          designed to integrate from the start.
        </Typography>
      </Section>
      <ServicesGrid />
      <CTASection />
    </>
  );
}
