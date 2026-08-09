import type { Metadata } from 'next';
import { Oswald, Roboto } from 'next/font/google';
import './globals.css';
import { ColorModeProvider } from '@/theme/ColorModeProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AssistantWidget from '@/components/assistant/AssistantWidget';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Arelix Labs — Engineering at the Intersection of Software, Hardware, AI & IoT',
  description:
    'Arelix Labs builds advanced software, hardware, AI, and IoT systems for clients who need engineering that works in the real world.',
  keywords: 'software engineering, hardware, AI, IoT, embedded systems, custom solutions, Arelix Labs',
  openGraph: {
    title: 'Arelix Labs',
    description:
      'Engineering at the intersection of software, hardware, AI, and IoT.',
    type: 'website',
    locale: 'en_US',
  },
};

import ChatBot from '@/components/ui/ChatBot';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${roboto.variable}`} suppressHydrationWarning>
      <body style={{ fontFamily: 'var(--font-roboto), Roboto, sans-serif' }} suppressHydrationWarning>
        <ColorModeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ChatBot />
        </ColorModeProvider>
      </body>
    </html>
  );
}
