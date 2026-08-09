import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import TrustStrip from '@/components/sections/TrustStrip';
import ServicesGrid from '@/components/sections/ServicesGrid';
import WhyArelix from '@/components/sections/WhyArelix';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import AboutPreview from '@/components/sections/AboutPreview';
import FoundersGrid from '@/components/sections/FoundersGrid';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Arelix Labs — Build Digital. Build Physical. Build What\'s Next.',
  description:
    'Arelix Labs builds digital products, connected systems and engineering solutions for businesses ready to build what\'s next.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesGrid />
      <WhyArelix />
      <ProcessTimeline />
      <AboutPreview />
      <FoundersGrid />
      <CTASection />
    </>
  );
}
