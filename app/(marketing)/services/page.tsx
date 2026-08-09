import type { Metadata } from 'next';
import ServicesCardGrid from '@/components/sections/ServicesCardGrid';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Services — Arelix Labs',
  description:
    'Full-stack software development, PCB design, firmware, IoT, and AI systems engineering.',
};

export default function ServicesPage() {
  return (
    <>
      <ServicesCardGrid />
      <CTASection />
    </>
  );
}
