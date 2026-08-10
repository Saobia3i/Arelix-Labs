import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
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
  openGraph: {
    title: 'Arelix Labs — Build Digital. Build Physical. Build What\'s Next.',
    description:
      'Arelix Labs builds digital products, connected systems and engineering solutions for businesses ready to build what\'s next.',
    url: 'https://arelixlabs.com',
    siteName: 'Arelix Labs',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Arelix Labs Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arelix Labs — Build Digital. Build Physical. Build What\'s Next.',
    description:
      'Arelix Labs builds digital products, connected systems and engineering solutions for businesses ready to build what\'s next.',
    images: ['/images/og-image.png'],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyArelix />
      <ProcessTimeline />
      <AboutPreview />
      <FoundersGrid />
      <CTASection />
    </>
  );
}
