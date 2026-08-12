import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Oswald, Roboto } from 'next/font/google';
import './globals.css';
import { ColorModeProvider } from '@/theme/ColorModeProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';

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
  metadataBase: new URL('https://arelixlabs.com'),
  title: 'Arelix Labs — Engineering at the Intersection of Software, Hardware, AI & IoT',
  description:
    'Arelix Labs builds advanced software, hardware, AI, and IoT systems for clients who need engineering that works in the real world.',
  keywords: 'software engineering, hardware, AI, IoT, embedded systems, custom solutions, Arelix Labs',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/images/arelix-logo-transparent.png', type: 'image/png' },
    ],
    apple: [{ url: '/images/arelix-logo-transparent.png', type: 'image/png' }],
  },
  openGraph: {
    title: 'Arelix Labs — Engineering Software, Hardware, AI & IoT',
    description:
      'Engineering at the intersection of software, hardware, AI, and IoT.',
    type: 'website',
    locale: 'en_US',
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
    title: 'Arelix Labs — Engineering Software, Hardware, AI & IoT',
    description: 'Engineering at the intersection of software, hardware, AI, and IoT.',
    images: ['/images/og-image.png'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

import ChatBot from '@/components/ui/ChatBot';
import WhatsAppBubble from '@/components/ui/WhatsAppBubble';
import NavigationScrollReset from '@/components/ui/NavigationScrollReset';
import GoogleSeoSchema from '@/components/seo/GoogleSeoSchema';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const storedMode = (await cookies()).get('arelix-color-mode')?.value;
  const initialMode = storedMode === 'dark' ? 'dark' : 'light';

  return (
    <html
      lang="en"
      className={`${oswald.variable} ${roboto.variable}`}
      data-arelix-theme={initialMode}
      style={{ colorScheme: initialMode, backgroundColor: initialMode === 'dark' ? '#000000' : '#FFFFFF' }}
      suppressHydrationWarning
    >
      <body
        style={{
          fontFamily: 'var(--font-roboto), Roboto, sans-serif',
          backgroundColor: initialMode === 'dark' ? '#000000' : '#FFFFFF',
        }}
        suppressHydrationWarning
      >
        <ColorModeProvider initialMode={initialMode}>
          <GoogleSeoSchema />
          <NavigationScrollReset />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppBubble />
          <ScrollToTop />
          <ChatBot />
        </ColorModeProvider>
      </body>
    </html>
  );
}
