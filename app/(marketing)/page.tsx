import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import TrustStrip from '@/components/sections/TrustStrip';
import ServicesGrid from '@/components/sections/ServicesGrid';
import WhyArelix from '@/components/sections/WhyArelix';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import SelectedWork from '@/components/sections/SelectedWork';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Arelix Labs — We Build What Others Can\'t Ship',
  description:
    'Arelix Labs designs and delivers advanced software, hardware, AI, and IoT systems — end-to-end, production-grade, no handoffs.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesGrid />
      <WhyArelix />
      <ProcessTimeline />
      <SelectedWork />
      <CTASection />
    </>
  );
}
