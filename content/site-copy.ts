// ============================================================
// Arelix Labs — Site Copy
// All page text as typed constants. Render by importing these;
// never hardcode marketing copy directly in JSX.
// ============================================================

export const hero = {
  eyebrow: '01 — HERO',
  title: 'Build Digital. Build Physical.\nBuild What\'s Next.',
  tagline: 'Software. Hardware. Engineered Together.',
  body: 'We build digital products, connected systems and engineering solutions for businesses ready to build what\'s next. From applications and platforms to PCB, embedded systems, and IoT, Arelix Labs engineers solutions designed for real-world use.',
  cta: 'Talk to Arelix',
  ctaSecondary: 'Start a Conversation',
};

export const trustStrip: {
  icon: string;
  title: string;
  subtitle: string;
}[] = [
  {
    icon: 'Code2',
    title: 'Software Engineering',
    subtitle: 'Web • Mobile • AI-Integrated Products',
  },
  {
    icon: 'Cpu',
    title: 'Hardware Engineering',
    subtitle: 'PCB • Embedded • Electronics',
  },
  {
    icon: 'Brain',
    title: 'AI & Intelligent Systems',
    subtitle: 'AI Agents • Computer Vision • IoT',
  },
  {
    icon: 'Shield',
    title: 'Long-Term Partnership',
    subtitle: 'Development • Support • Maintenance',
  },
];

export const services: {
  category: string;
  description: string;
  items: string[];
}[] = [
  {
    category: 'Software Development',
    description: 'Full-stack digital products, built for scale and security.',
    items: [
      'Web Applications — Next.js, React, MERN, ASP.NET Core, Laravel',
      'Custom Admin Panels & Dashboards',
      'E-commerce & Marketplace Platforms',
      'EdTech, Booking & Service Platforms',
      'Real-Time Systems — live leaderboards, event portals, SSE-based dashboards',
      'API Development & Backend Architecture',
    ],
  },
  {
    category: 'AI Solutions',
    description: 'Intelligence layered on top of your existing systems.',
    items: [
      'AI-Integrated Web Products',
      'AI Lead Qualification & Sales Agents',
      'Multi-Agent AI Systems',
      'Computer Vision Applications',
    ],
  },
  {
    category: 'Hardware & Electronics',
    description: 'From circuit concepts to working hardware.',
    items: [
      'PCB Design',
      'Circuit Design',
      'Embedded Systems',
      'Prototyping',
    ],
  },
  {
    category: 'IoT & Connected Systems',
    description: 'Connecting intelligence, data and devices.',
    items: [
      'IoT Dashboards & Digital Twins — real-time device monitoring and control panels',
      'Device Integration Software — bridging hardware telemetry to web interfaces',
      'Connected Device Firmware & Sensor Networks',
    ],
  },
  {
    category: 'UI/UX & Product Design',
    description: 'Interfaces designed for people, not just screens.',
    items: [
      'Product UI Design',
      'Design Systems',
      'Web & Mobile Experiences',
      'Admin & Operational Interface Design',
    ],
  },
  {
    category: 'Technology Support',
    description: "Technology doesn't stop at delivery. Neither do we.",
    items: [
      'Maintenance & Uptime Monitoring',
      'Continuous Feature Development',
      'Security & Performance Reviews',
      'System Updates & Scaling Support',
    ],
  },
];

export const whyArelix: { title: string; body: string }[] = [
  {
    title: 'Software Meets Engineering',
    body: 'We bring software and physical engineering under one roof — giving businesses a single team for digital and connected technology.',
  },
  {
    title: 'Built Around the Problem',
    body: "We don't start with a technology and look for somewhere to use it. We first understand the problem, then engineer the right solution.",
  },
  {
    title: 'Built to Keep Working',
    body: "Our goal isn't simply to deliver and disappear. We build with maintainability, scalability and long-term use in mind.",
  },
  {
    title: 'Clear From Day One',
    body: 'Clear communication, defined deliverables and a structured development process keep projects moving without unnecessary complexity.',
  },
  {
    title: 'A Partner, Not Just a Vendor',
    body: 'We aim to build lasting relationships with businesses, supporting their technology as their needs evolve.',
  },
  {
    title: 'Lean by Design',
    body: 'As a growing engineering company, we stay agile, focused and close to the work — without layers of unnecessary overhead.',
  },
];

export const process: {
  step: string;
  title: string;
  body: string;
}[] = [
  {
    step: '01',
    title: 'Understand',
    body: 'We listen before we build. We understand your business, requirements, users and constraints.',
  },
  {
    step: '02',
    title: 'Plan',
    body: 'We turn requirements into a clear roadmap. Scope, architecture, technology and deliverables are defined before development begins.',
  },
  {
    step: '03',
    title: 'Build',
    body: 'We engineer the solution. Our team develops, designs, integrates and iterates around the agreed goals.',
  },
  {
    step: '04',
    title: 'Validate',
    body: 'We test what we\'ve built. Functionality, usability, reliability and performance are reviewed before delivery.',
  },
  {
    step: '05',
    title: 'Support',
    body: 'We stay beyond launch. Maintenance, improvements and continued development keep your technology moving forward.',
  },
];

export const about = {
  headline: '07 — ABOUT ARELIX LABS',
  tagline: 'Technology Built With Purpose.',
  short:
    'Arelix Labs is a technology and engineering company building practical solutions for modern businesses. We bring software, electronics and connected technologies together to turn ideas and business requirements into reliable products and systems. As we grow, our goal is simple: become a trusted technology partner for businesses across borders.',
  full: [
    'Arelix Labs was built around a simple idea: technology works better when the people building it understand the problem behind it.',
    'We are a growing technology and engineering company focused on helping businesses turn ideas, requirements and challenges into working solutions.',
    'Our capabilities span software development, mobile applications, UI/UX, AI-integrated products and automation, PCB and electronics engineering, embedded systems, and IoT. This combination allows us to work across both the digital and physical sides of technology.',
    'We are building Arelix with a long-term vision — not simply to complete projects, but to become a technology partner businesses can rely on as they grow.',
    'Our journey starts small. Our ambition doesn\'t.',
  ],
};

export const vision = {
  title: '08 — VISION',
  headline: 'Our Vision',
  statement:
    'To become a trusted global engineering partner that turns meaningful ideas into technology that works.',
  body:
    'We envision a future where software, hardware and intelligent systems come together seamlessly to solve real problems for businesses around the world.',
};

export const mission = {
  title: '09 — MISSION',
  headline: 'Our Mission',
  statement:
    'To understand real business needs and engineer reliable, scalable technology around them.',
  body:
    'We combine thoughtful design, software development and engineering to build solutions that are practical today, maintainable tomorrow and ready to grow with our clients.',
};

export const founders = {
  title: '10 — FOUNDERS',
  headline: 'The People Behind Arelix',
  tagline: 'Three founders. One direction. A long way to go.',
  footerNote: 'Different responsibilities. Shared ownership of the vision.',
  items: [
    {
      name: '[Founder Name]',
      role: 'Co-Founder & CEO',
      bio:
        'Leads Arelix\'s vision, business strategy and growth, with a focus on partnerships and building the company\'s international direction.',
    },
    {
      name: '[Founder Name]',
      role: 'Co-Founder & Managing Director',
      bio:
        'Oversees operations, administration and client coordination, helping turn the company\'s vision into organized execution and long-term relationships.',
    },
    {
      name: '[Founder Name]',
      role: 'Co-Founder & CTO',
      bio:
        'Leads software development and technical execution, overseeing architecture, engineering practices and the development of Arelix\'s digital products.',
    },
  ],
};

export const cta = {
  headline: 'Have a technology challenge?',
  body: 'Tell us what you\'re trying to build. We\'ll explore what it takes to make it work.',
  buttonLabel: 'Talk to Arelix',
};

export const contact = {
  headline: 'Let\'s talk about your project.',
  body: 'Fill out the form and we\'ll get back to you within one business day. Prefer email? Reach us at contact@arelixlabs.com.',
  formLabels: {
    name: 'Your name',
    email: 'Your email',
    message: 'Tell us about your project',
    submit: 'Send Message',
  },
};
