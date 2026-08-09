// ============================================================
// Arelix Labs — Site Copy
// All page text as typed constants. Render by importing these;
// never hardcode marketing copy directly in JSX.
// ============================================================

export const hero = {
  eyebrow: 'Engineering Systems That Work in the Real World',
  title: 'We Build What Others\nCan\'t Ship.',
  tagline: 'Arelix Labs designs and delivers advanced software, hardware, AI, and IoT systems — end-to-end, production-grade, no handoffs.',
  body: 'From embedded firmware to full-stack platforms to intelligent automation, we\'re the engineering partner for teams that need technical depth, not a slideware vendor.',
  cta: 'Talk to Arelix',
  ctaSecondary: 'See Our Work',
};

export const trustStrip: {
  icon: string;
  title: string;
  subtitle: string;
}[] = [
  {
    icon: 'Cpu',
    title: 'Hardware + Software',
    subtitle: 'Full-stack from silicon to UI',
  },
  {
    icon: 'Brain',
    title: 'AI & Machine Learning',
    subtitle: 'Applied intelligence, not buzzwords',
  },
  {
    icon: 'Wifi',
    title: 'IoT Systems',
    subtitle: 'Connected devices that actually ship',
  },
  {
    icon: 'Shield',
    title: 'Production-Grade',
    subtitle: 'Engineered to run, not just demo',
  },
];

export const services: {
  category: string;
  description: string;
  items: string[];
}[] = [
  {
    category: 'Software Engineering',
    description:
      'Full-stack web and mobile applications, APIs, and backend systems built for scale and maintainability.',
    items: [
      'Web application development (React, Next.js, Node.js)',
      'Mobile applications (React Native, cross-platform)',
      'RESTful & GraphQL API design and implementation',
      'Cloud infrastructure and DevOps (AWS, GCP, CI/CD)',
      'Database architecture (SQL, NoSQL, time-series)',
      'Legacy system modernisation and migration',
    ],
  },
  {
    category: 'Hardware & Embedded Systems',
    description:
      'Custom PCB design, firmware development, and embedded systems engineering from prototype to production.',
    items: [
      'Custom PCB design and hardware prototyping',
      'Firmware development (C/C++, RTOS, bare-metal)',
      'Microcontroller and SoC integration (ARM, ESP32, STM32)',
      'Signal processing and sensor fusion',
      'Hardware-software co-design',
      'Production readiness and DFM review',
    ],
  },
  {
    category: 'Artificial Intelligence & ML',
    description:
      'Applied machine learning, computer vision, NLP, and intelligent automation systems — deployed to production.',
    items: [
      'Custom ML model design, training, and evaluation',
      'Computer vision pipelines (detection, classification, segmentation)',
      'Natural language processing and LLM integration',
      'Edge AI and on-device inference (TensorRT, ONNX)',
      'AI-powered automation and decision systems',
      'Model monitoring, retraining, and MLOps pipelines',
    ],
  },
  {
    category: 'IoT & Connected Systems',
    description:
      'End-to-end IoT architecture — from device hardware through connectivity layers to cloud dashboards.',
    items: [
      'IoT device design and firmware (MQTT, CoAP, BLE, LoRaWAN)',
      'Edge computing and gateway architecture',
      'Cloud IoT platforms (AWS IoT, Azure IoT Hub)',
      'Real-time data pipelines and telemetry systems',
      'Fleet management and remote device monitoring',
      'Industrial IoT and SCADA integration',
    ],
  },
  {
    category: 'Systems Integration',
    description:
      'Connecting disparate systems, APIs, and hardware into coherent, reliable, automated workflows.',
    items: [
      'Third-party API and platform integration',
      'ERP, CRM, and enterprise system connectors',
      'Hardware-to-cloud data bridges',
      'Automated testing and validation pipelines',
      'Observability, logging, and alerting infrastructure',
      'Compliance and security hardening',
    ],
  },
  {
    category: 'Technical Consulting & Architecture',
    description:
      'Strategic technical guidance for founders, CTOs, and product teams navigating complex engineering decisions.',
    items: [
      'Architecture review and design for complex systems',
      'Technology selection and vendor evaluation',
      'Technical due diligence for investors and acquirers',
      'Engineering team mentorship and process improvement',
      'Build-vs-buy and make-vs-integrate analysis',
      'Proof-of-concept and feasibility studies',
    ],
  },
];

export const whyArelix: { title: string; body: string }[] = [
  {
    title: 'We own the full stack.',
    body: 'Software, hardware, AI, IoT — handled under one roof. No finger-pointing between vendors when something doesn\'t integrate.',
  },
  {
    title: 'We ship to production.',
    body: 'We\'re not a prototype shop. Everything we build is engineered to run reliably at scale, not just to impress in a demo.',
  },
  {
    title: 'We speak engineering, not buzzwords.',
    body: 'Our team is engineers first. We scope projects accurately, surface real constraints early, and don\'t overpromise.',
  },
  {
    title: 'We move fast without cutting corners.',
    body: 'Aggressive timelines don\'t have to mean technical debt. We have the depth to move quickly and the discipline to do it right.',
  },
  {
    title: 'We treat your budget like our own.',
    body: 'We build the right solution for the problem, not the most impressive one. Our incentive is your system working, not billable hours.',
  },
  {
    title: 'We stay until it\'s done.',
    body: 'Integration hell, hardware quirks, deployment surprises — we don\'t disappear when things get hard. We solve it.',
  },
];

export const process: {
  step: string;
  title: string;
  body: string;
}[] = [
  {
    step: '01',
    title: 'Discovery',
    body: 'We map your technical requirements, constraints, and success criteria. No assumptions, no generic playbooks.',
  },
  {
    step: '02',
    title: 'Architecture',
    body: 'We design the system architecture — hardware, software, data, and integration layers — before writing a line of code.',
  },
  {
    step: '03',
    title: 'Build',
    body: 'Iterative development with regular check-ins. You see real progress, not status updates.',
  },
  {
    step: '04',
    title: 'Integration & Test',
    body: 'Every component gets integrated and tested against real-world conditions — not just unit tests in isolation.',
  },
  {
    step: '05',
    title: 'Deploy & Support',
    body: 'We handle deployment, documentation, and knowledge transfer. Post-launch support is part of the engagement.',
  },
];

export const selectedWork: {
  name: string;
  tag: string;
  description: string;
}[] = [
  {
    name: 'Industrial Sensor Network',
    tag: 'IoT · Hardware · Cloud',
    description:
      'Designed and deployed a 200-node wireless sensor network for a manufacturing facility, including custom PCBs, LoRaWAN firmware, and a real-time cloud dashboard. Reduced unplanned downtime by 34%.',
  },
  {
    name: 'AI Quality Inspection System',
    tag: 'Computer Vision · AI · Embedded',
    description:
      'Built an edge AI visual inspection system using custom-trained models deployed on NVIDIA Jetson hardware. Achieved 99.2% defect detection accuracy in production, replacing a manual inspection team of 12.',
  },
  {
    name: 'Fleet Telematics Platform',
    tag: 'Web Platform · IoT · Software',
    description:
      'Developed a full-stack telematics platform for a logistics company — device firmware, real-time data pipelines, and a React dashboard tracking 800+ vehicles. Handles 2M+ data points per day.',
  },
  {
    name: 'Medical Device Firmware',
    tag: 'Embedded · Hardware · Compliance',
    description:
      'Engineered safety-critical firmware for a Class II medical device — RTOS, sensor fusion algorithms, and IEC 62304-compliant documentation. Shipped to FDA 510(k) clearance.',
  },
];

export const about = {
  short:
    'Arelix Labs is an engineering company founded on a simple principle: the best technical work comes from people who understand the full stack — from electrons to end users.',
  full: [
    'We started Arelix Labs because we kept seeing the same problem: clients would hire a software agency, then a hardware firm, then an AI consultancy, and spend half their budget managing the seams between them. Nobody owned the whole system.',
    'We built Arelix Labs to be that one team. Not a generalist shop that does everything mediocrely, but a team of specialists who have worked across domains long enough to design systems that integrate cleanly from day one.',
    'Our work spans embedded firmware running on custom silicon, cloud platforms processing millions of events per day, AI models trained on proprietary datasets and deployed at the edge, and everything in between. We\'ve shipped to regulated industries (medical, industrial, automotive) and early-stage startups alike.',
    'We\'re selective about the work we take on. If your project is technically interesting and the stakes are real, we\'d like to talk.',
  ],
};

export const vision = {
  title: 'Our Vision',
  body: 'A world where advanced engineering is accessible to any team with a hard problem to solve — not just the ones who can afford a 50-person consultancy.',
};

export const mission = {
  title: 'Our Mission',
  body: 'To design and deliver production-grade software, hardware, AI, and IoT systems for clients who need technical depth, not a vendor relationship.',
};

export const founders: {
  name: string;
  role: string;
  bio: string;
}[] = [
  {
    name: 'Founder Name',
    role: 'Co-Founder & CEO',
    bio: 'Bio coming soon. Background in systems engineering, embedded hardware, and scaling technical teams across multiple ventures.',
  },
  {
    name: 'Founder Name',
    role: 'Co-Founder & CTO',
    bio: 'Bio coming soon. Deep expertise in AI/ML, distributed systems, and production infrastructure for high-throughput applications.',
  },
];

export const cta = {
  headline: 'Ready to build something that works?',
  body: 'Tell us about your project. We\'ll tell you honestly whether we\'re the right team for it — and if we are, we\'ll show you exactly how we\'d approach it.',
  buttonLabel: 'Talk to Arelix',
};

export const contact = {
  headline: 'Let\'s talk about your project.',
  body: 'Fill out the form and we\'ll get back to you within one business day. Prefer email? Reach us at hello@arelixlabs.com.',
  formLabels: {
    name: 'Your name',
    email: 'Your email',
    message: 'Tell us about your project',
    submit: 'Send Message',
  },
};

// ──────────────────────────────────────────────────
// Recommended Homepage Section Order
// Hero → TrustStrip → ServicesGrid → WhyArelix →
// ProcessTimeline → SelectedWork → CTASection
// ──────────────────────────────────────────────────
