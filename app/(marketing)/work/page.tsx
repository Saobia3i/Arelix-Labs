import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Typography from '@mui/material/Typography';
import ServicesCardGrid from '@/components/sections/ServicesCardGrid';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import CTASection from '@/components/sections/CTASection';
import Section from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Capabilities & Solutions — Arelix Labs',
  description:
    'Engineering solutions across software, hardware, PCB design, AI, and connected IoT systems.',
};

export default function WorkPage() {
  notFound();

  return (
    <>
      <Section spacing="md" id="work-header">
        <Typography
          variant="overline"
          sx={{ color: 'primary.main', display: 'block', mb: 1, fontWeight: 700 }}
        >
          ENGINEERING CAPABILITIES
        </Typography>
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: '2.4rem', md: '3rem' }, mb: 2, fontWeight: 700 }}
        >
          Build What's Next
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 620, lineHeight: 1.7 }}
        >
          We engineer custom digital products, connected hardware, PCB electronics, and intelligent automation built for real-world enterprise use.
        </Typography>
      </Section>
      <ServicesCardGrid />
      <ProcessTimeline />
      <CTASection />
    </>
  );
}
