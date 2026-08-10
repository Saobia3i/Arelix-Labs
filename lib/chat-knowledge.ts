export interface KnowledgeChunk {
  id: string;
  title: string;
  content: string;
  keywords: string[];
}

const knowledgeBase: KnowledgeChunk[] = [
  {
    id: 'company',
    title: 'About Arelix Labs',
    content:
      'Arelix Labs is a technology and engineering company building practical solutions for modern businesses. It combines software, electronics, AI, embedded systems, and connected technologies to turn business requirements into reliable products and systems. The company aims to be a trusted technology partner for businesses across borders.',
    keywords: ['company', 'about', 'arelix', 'business', 'partner', 'international', 'technology'],
  },
  {
    id: 'software',
    title: 'Software Development',
    content:
      'Arelix Labs builds full-stack web and mobile products, custom admin panels and dashboards, e-commerce and marketplace platforms, EdTech, booking and service platforms, real-time leaderboards and event portals, APIs, and backend architecture. Technologies include Next.js, React, MERN, ASP.NET Core, Laravel, Node.js, and PostgreSQL.',
    keywords: ['software', 'web', 'mobile', 'nextjs', 'react', 'mern', 'aspnet', 'laravel', 'nodejs', 'postgresql', 'api', 'dashboard', 'ecommerce'],
  },
  {
    id: 'ai',
    title: 'AI Solutions',
    content:
      'AI capabilities include AI-integrated web products, lead qualification and sales agents, multi-agent systems, computer vision applications, LangGraph workflows, retrieval-augmented generation pipelines, company research, personalized outreach, and fact-verification agents.',
    keywords: ['ai', 'agent', 'rag', 'langgraph', 'automation', 'computer', 'vision', 'lead', 'llm', 'multiagent'],
  },
  {
    id: 'hardware',
    title: 'Hardware, Electronics, and IoT',
    content:
      'Arelix Labs provides PCB design, circuit design, embedded systems, firmware, prototyping, connected sensor networks, IoT dashboards, digital twins, device monitoring and control, ESP32 integration, and hardware telemetry connected to web interfaces.',
    keywords: ['hardware', 'pcb', 'circuit', 'electronics', 'embedded', 'firmware', 'iot', 'esp32', 'sensor', 'telemetry', 'prototype', 'digital', 'twin'],
  },
  {
    id: 'design-support',
    title: 'Product Design and Technology Support',
    content:
      'Product design services include UI/UX, design systems, web and mobile experiences, and admin or operational interfaces. Long-term support includes maintenance, uptime monitoring, continuous feature development, security and performance reviews, system updates, and scaling support.',
    keywords: ['design', 'ui', 'ux', 'support', 'maintenance', 'security', 'performance', 'scaling', 'monitoring'],
  },
  {
    id: 'why-arelix',
    title: 'Why Work With Arelix',
    content:
      'Arelix brings software and physical engineering under one roof. The team starts with the business problem, builds for maintainability and scale, defines clear deliverables, communicates directly, stays close to the work, and supports technology beyond launch as a long-term partner.',
    keywords: ['why', 'benefit', 'partner', 'maintainability', 'scale', 'communication', 'ownership', 'vendor'],
  },
  {
    id: 'process',
    title: 'Engineering Process',
    content:
      'The delivery process has five stages: Understand the business, users, requirements, and constraints; Plan scope, architecture, technology, roadmap, and deliverables; Build and iterate; Validate functionality, usability, reliability, and performance; Support the product with maintenance and continued development after launch.',
    keywords: ['process', 'workflow', 'timeline', 'build', 'plan', 'validate', 'support', 'delivery', 'project'],
  },
  {
    id: 'work',
    title: 'Selected Engineering Work',
    content:
      'Selected work includes Tensor Security Academy, a Next.js and PostgreSQL cybersecurity EdTech platform; Linear AI, a React and ASP.NET Core automation commerce platform; the AUST Rover Challenge portal with real-time leaderboards and certificates; WattWatch, an ESP32-connected IoT digital twin; and an AI sales research and outreach multi-agent system.',
    keywords: ['portfolio', 'work', 'project', 'case', 'tsa', 'tensor', 'linear', 'aust', 'rover', 'wattwatch', 'sales'],
  },
  {
    id: 'leadership',
    title: 'Founders and Leadership',
    content:
      'Arelix Labs has three co-founders. Khorshed Alam is Co-Founder and CEO. He earned a BSc in EEE from Ahsanullah University of Science & Technology; email: khorshedalamkhairul@gmail.com; phone: 01984961641; LinkedIn: https://www.linkedin.com/in/khorshedalamon. Khadiza Khanom is Co-Founder and Managing Director. She earned a BSc in CSE from Ahsanullah University of Science & Technology; email: kkl.khadiza@gmail.com; phone: 01795753116; LinkedIn: https://www.linkedin.com/in/khadiza-khanom-liza-a95a26263/. Saobia Islam Tinni is Co-Founder and CTO. She earned a BSc in CSE from Ahsanullah University of Science & Technology and leads full-stack architecture, Next.js, React, MERN, ASP.NET Core, AI-integrated systems, LangGraph, RAG pipelines, database and backend architecture, UI, deployment, and software engineering practices; email: islamsaobia@gmail.com; LinkedIn: https://www.linkedin.com/in/saobia-islam; portfolio: https://islamsaobia.vercel.app.',
    keywords: ['founder', 'leadership', 'ceo', 'cto', 'director', 'khorshed', 'alam', 'khadiza', 'khanom', 'saobia', 'tinni', 'team', 'linkedin', 'education', 'portfolio'],
  },
  {
    id: 'vision-mission',
    title: 'Vision and Mission',
    content:
      'The vision is to become a trusted global engineering partner that turns meaningful ideas into technology that works. The mission is to understand real business needs and engineer reliable, scalable technology that is practical today, maintainable tomorrow, and ready to grow.',
    keywords: ['vision', 'mission', 'goal', 'future', 'global', 'reliable', 'scalable'],
  },
  {
    id: 'contact',
    title: 'Contact and Project Inquiries',
    content:
      'For project inquiries, architecture discussions, pricing, or partnership conversations, email arelixlabs@gmail.com or use the Contact page. Pricing depends on scope, technical complexity, integrations, hardware requirements, timeline, and support needs, so Arelix first discusses the project before estimating.',
    keywords: ['contact', 'email', 'price', 'pricing', 'cost', 'quote', 'hire', 'consultation', 'meeting', 'arelixlabs@gmail.com'],
  },
];

const stopWords = new Set([
  'a', 'an', 'and', 'are', 'can', 'do', 'does', 'for', 'how', 'i', 'in', 'is', 'it', 'me',
  'of', 'on', 'or', 'our', 'the', 'to', 'we', 'what', 'with', 'you', 'your', 'about',
]);

function tokenize(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9@.+#-]+/g, ' ')
    .split(/\s+/)
    .filter((token) => token.length > 1 && !stopWords.has(token));
}

const scopeTerms = new Set([
  ...knowledgeBase.flatMap((chunk) => chunk.keywords),
  'app', 'application', 'website', 'platform', 'system', 'product', 'startup', 'saas',
  'cloud', 'database', 'backend', 'frontend', 'development', 'engineering', 'developer',
  'consult', 'schedule', 'service', 'services', 'team', 'company', 'business', 'solution',
]);

export function classifyChatQuery(query: string) {
  const normalized = query.trim().toLowerCase();
  const tokens = tokenize(normalized);
  const greeting = /^(hi|hello|hey|assalamu alaikum|salam|হাই|হ্যালো)[!.?\s]*$/i.test(normalized);
  const relevant = tokens.some((token) => scopeTerms.has(token));
  return { greeting, relevant };
}

export function retrieveKnowledge(query: string, limit = 4) {
  const queryTokens = tokenize(query);
  const normalizedQuery = query.toLowerCase();

  const ranked = knowledgeBase
    .map((chunk) => {
      const searchable = `${chunk.title} ${chunk.content} ${chunk.keywords.join(' ')}`.toLowerCase();
      const searchableTokens = new Set(tokenize(searchable));
      let score = 0;

      for (const token of queryTokens) {
        if (chunk.keywords.some((keyword) => keyword === token)) score += 5;
        else if (searchableTokens.has(token)) score += 2;
        else if (searchable.includes(token)) score += 0.5;
      }

      if (normalizedQuery.includes(chunk.title.toLowerCase())) score += 8;
      return { chunk, score };
    })
    .sort((a, b) => b.score - a.score);

  const matches = ranked.filter((item) => item.score > 0).slice(0, limit).map((item) => item.chunk);
  return matches.length > 0 ? matches : knowledgeBase.filter((chunk) => ['company', 'contact'].includes(chunk.id));
}

export function formatKnowledgeContext(chunks: KnowledgeChunk[]) {
  return chunks.map((chunk, index) => `[${index + 1}] ${chunk.title}\n${chunk.content}`).join('\n\n');
}

export function createLocalFallback(chunks: KnowledgeChunk[]) {
  const summary = chunks
    .slice(0, 3)
    .map((chunk) => `${chunk.title}\n${chunk.content}`)
    .join('\n\n');

  return `${summary}\n\nFor a tailored discussion, email arelixlabs@gmail.com or use the Contact page.`;
}
