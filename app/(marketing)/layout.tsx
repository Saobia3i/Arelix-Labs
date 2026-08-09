import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Arelix Labs — Engineering at the Intersection of Software, Hardware, AI & IoT',
  description:
    'Arelix Labs builds advanced software, hardware, AI, and IoT systems for clients who need engineering that works in the real world.',
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
