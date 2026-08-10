import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://arelixlabs.com';

  const allowedUserAgents = [
    '*',
    'Googlebot',
    'Google-Extended',   // Google Gemini AI Crawler
    'GPTBot',            // OpenAI ChatGPT Crawler
    'ChatGPT-User',      // ChatGPT Web Search Agent
    'ClaudeBot',         // Anthropic Claude AI Crawler
    'Claude-Web',        // Anthropic Claude Web Search Agent
    'PerplexityBot',     // Perplexity AI Crawler
    'Bingbot',           // Microsoft Bing & Copilot
    'Applebot',          // Apple Search & Siri AI
    'Meta-ExternalAgent', // Meta AI
  ];

  return {
    rules: allowedUserAgents.map((userAgent) => ({
      userAgent,
      allow: '/',
      disallow: ['/api/'],
    })),
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
