'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

export default function GoogleSeoSchema() {
  const pathname = usePathname();
  const baseUrl = 'https://arelixlabs.com';

  // Map route pathname to clean breadcrumb title
  const getBreadcrumbName = (path: string) => {
    switch (path) {
      case '/':
        return 'Home';
      case '/services':
        return 'Services';
      case '/about':
        return 'About';
      case '/contact':
        return 'Contact';
      case '/privacy':
        return 'Privacy Policy';
      case '/terms':
        return 'Terms of Use';
      default:
        return path.replace('/', '').replace(/-/g, ' ');
    }
  };

  // Google Search Console BreadcrumbList Schema
  const breadcrumbElements = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: baseUrl,
    },
  ];

  if (pathname !== '/') {
    breadcrumbElements.push({
      '@type': 'ListItem',
      position: 2,
      name: getBreadcrumbName(pathname),
      item: `${baseUrl}${pathname}`,
    });
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbElements,
  };

  // Google Search Console Organization & Website Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Arelix Labs',
    url: baseUrl,
    logo: `${baseUrl}/images/og-image.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+880-1984-961641',
      contactType: 'customer service',
      email: 'arelixlabs@gmail.com',
      areaServed: 'Worldwide',
      availableLanguage: ['English', 'Bengali'],
    },
    sameAs: ['https://arelixlabs.com'],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Arelix Labs',
    url: baseUrl,
    description:
      'Engineering custom software, PCB electronics, AI models, and IoT systems into unified, production-ready solutions.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
