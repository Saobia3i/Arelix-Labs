import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Arelix Labs — Build Digital. Build Physical. Build What\'s Next.',
    short_name: 'Arelix Labs',
    description:
      'Engineering custom software, PCB electronics, AI models, and IoT systems into unified, production-ready solutions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#B84A47',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
