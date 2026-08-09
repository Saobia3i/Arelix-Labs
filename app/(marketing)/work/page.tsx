import type { Metadata } from 'next';
import Typography from '@mui/material/Typography';
import SelectedWork from '@/components/sections/SelectedWork';
import CTASection from '@/components/sections/CTASection';
import Section from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Work — Arelix Labs',
  description:
    'Production systems we\'ve shipped: IoT sensor networks, AI inspection systems, fleet telematics platforms, and safety-critical embedded firmware.',
};

export default function WorkPage() {
  return (
    <>
      <Section spacing="md" id="work-header">
        <Typography
          variant="overline"
          sx={{ color: 'primary.main', display: 'block', mb: 1 }}
        >
          Selected Work
        </Typography>
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: '2.4rem', md: '3rem' }, mb: 2 }}
        >
          What We've Shipped
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 560, lineHeight: 1.7 }}
        >
          A sample of the production systems we've built — spanning IoT, AI, embedded,
          and full-stack software domains.
        </Typography>
      </Section>
      <SelectedWork />
      <CTASection />
    </>
  );
}
