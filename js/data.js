/**
 * ====================================================================
 * PORTFOLIO DATA CONFIGURATION
 * ====================================================================
 * AI Content Creator | AI Video Creator | Web Designer & Developer
 * All sections dynamically render from this file.
 */

const PORTFOLIO_DATA = {
  // 1. Personal & Hero Information
  personal: {
    name: "Rushikesh Tawade",
    preferredName: "Rushikesh",
    title: "AI Content Creator | AI Video Creator | Web Designer & Developer",
    typedTitles: [
      "AI Content Creator",
      "AI Video Creator",
      "Web Designer & Developer",
      "AI Visual Storyteller",
      "Digital Product Specialist"
    ],
    tagline: "I create AI-powered videos, modern websites and digital experiences using the latest AI tools.",
    location: "Mumbai / Pune, India · Available Worldwide (Remote)",
    email: "tawaderushi173@gmail.com",
    github: "https://github.com/rushikeshtawade",
    linkedin: "https://www.linkedin.com/in/rushikesh-tawade-564bb2232",
    avatar: "assets/avatar.jpg",
    status: {
      available: true,
      text: "Accepting New Client Projects & Creative Contracts"
    }
  },

  // 2. About Me Section
  about: {
    greeting: "Creator & Developer",
    heading: "Fusing artificial intelligence, cinematic visuals, and modern web development.",
    bio: [
      "I am a modern AI-powered digital creator and web developer. I don't just build websites — I craft complete digital ecosystems for brands, businesses, and creators, spanning cinematic AI video production, high-impact social content, and responsive web platforms.",
      "By leveraging cutting-edge generative AI workflows (Runway, Kling, Midjourney, ElevenLabs, Claude, GPT) alongside modern frontend engineering (React, Next.js, modern CSS, JavaScript), I help clients launch campaigns and web products at unprecedented speed and visual fidelity.",
      "From drafting the initial viral hook to generating photorealistic AI assets and coding high-converting landing pages, I provide turnkey digital creation for clients who want to stand out in the AI era."
    ],
    interests: [
      "AI Video Generation",
      "AI Image Synthesis & Art",
      "Modern Web Development",
      "High-Converting Landing Pages",
      "Motion Graphics & Editing",
      "Social Media Growth Strategy"
    ],
    careerGoals: "To empower global businesses and forward-thinking brands with AI-augmented creative content, cinematic storytelling, and performant web experiences.",
    stats: [
      { label: "Client Projects Delivered", value: "35+", icon: "folder-git-2" },
      { label: "AI Videos & Visuals Produced", value: "120+", icon: "film" },
      { label: "Average Turnaround Speed", value: "3x Faster", icon: "zap" },
      { label: "Client Satisfaction Rating", value: "99.8%", icon: "star" }
    ]
  },

  // 3. Client Services (New Dedicated Section)
  services: [
    {
      id: "ai-video",
      title: "AI Video Creation",
      icon: "video",
      badge: "Flagship AI Service",
      description: "Cinematic, photorealistic AI-generated video campaigns, commercial reels, and promotional trailers engineered with generative video models.",
      deliverables: [
        "Commercial & brand promotional videos",
        "Runway Gen-3, Kling AI & Sora pipeline workflows",
        "Photorealistic camera motion & scene transitions",
        "Synthetic voice-cloning & spatial sound design"
      ]
    },
    {
      id: "ai-content",
      title: "AI Content Creation",
      icon: "sparkles",
      badge: "Audience Growth",
      description: "End-to-end strategic content pipelines, viral storytelling frameworks, and brand narratives optimized to capture viewer attention.",
      deliverables: [
        "Brand storytelling & positioning copy",
        "High-retention short-form video scripts",
        "Multi-platform content adaptation & scheduling",
        "Thought leadership & newsletter articles"
      ]
    },
    {
      id: "web-dev",
      title: "Website Design & Development",
      icon: "layout",
      badge: "Core Engineering",
      description: "Bespoke, lightning-fast websites built with clean code, captivating dark/light aesthetics, fluid motion, and zero template feel.",
      deliverables: [
        "Custom frontend architecture (React, Next.js, HTML5)",
        "Mobile-first responsive layouts across all viewports",
        "Smooth micro-interactions & kinetic scroll reveals",
        "Modern SEO optimization & instant page loading"
      ]
    },
    {
      id: "portfolio-websites",
      title: "Portfolio Websites",
      icon: "user-check",
      badge: "Personal Branding",
      description: "Distinctive, high-converting personal portfolios and interactive resume sites that highlight your uniqueness to clients and recruiters.",
      deliverables: [
        "Personal brand identity & custom visual tokens",
        "Filterable project showcases with case studies",
        "Interactive downloadable & ATS print-ready resume",
        "Direct inquiry lead capture forms with validation"
      ]
    },
    {
      id: "business-websites",
      title: "Business Websites",
      icon: "briefcase",
      badge: "Commercial Solutions",
      description: "Professional multi-page portals for service agencies, startups, consultancies, and local businesses that build trust and drive revenue.",
      deliverables: [
        "Complete corporate presence & service breakdowns",
        "Lead qualification forms & appointment booking",
        "Google Maps, client testimonials & trust badges",
        "Easy-to-edit content schemas for client maintenance"
      ]
    },
    {
      id: "landing-pages",
      title: "High-Converting Landing Pages",
      icon: "flame",
      badge: "Sales & Conversion",
      description: "Laser-focused single page sales funnels built for digital product launches, SaaS rollouts, paid ad campaigns, and subscriber opt-ins.",
      deliverables: [
        "Psychology-driven visual hierarchy & bold CTAs",
        "Sub-second load times engineered for high conversion",
        "Social proof widgets & pricing tier matrices",
        "A/B test ready layouts & analytics tracking hooks"
      ]
    },
    {
      id: "ai-image-gen",
      title: "AI Image Generation & Art Direction",
      icon: "image",
      badge: "Visual Artistry",
      description: "Bespoke, photorealistic brand imagery, website hero assets, concept visuals, and custom product scenes using elite generative models.",
      deliverables: [
        "Midjourney v6, Flux & Stable Diffusion art direction",
        "Hyper-realistic custom photography replacements",
        "Consistent brand character & mascot synthesis",
        "High-resolution 4K upscaling for print and digital"
      ]
    },
    {
      id: "video-editing",
      title: "Video Editing & Post-Production",
      icon: "film",
      badge: "Motion & Craft",
      description: "Dynamic pacing, kinetic typography, multi-layer sound design, and color grading that transforms raw clips into polished masterworks.",
      deliverables: [
        "Precision pacing & engagement hook retention",
        "Kinetic subtitles, text animations & VFX overlays",
        "Immersive SFX sound design & audio mastering",
        "Optimized exports for YouTube, TikTok, and Instagram"
      ]
    },
    {
      id: "social-media",
      title: "Social Media Content & Strategy",
      icon: "share-2",
      badge: "Virality & Reach",
      description: "Turnkey visual content systems for Instagram Reels, YouTube Shorts, LinkedIn carousels, and X threads that consistently grow your following.",
      deliverables: [
        "Viral hook concepts & high-retention editing",
        "Multi-slide carousel graphics & visual infocards",
        "Custom brand template packs for recurring posts",
        "Performance optimization & trend alignment"
      ]
    }
  ],

  // 4. Creative & Technical Skills
  skills: {
    categories: [
      {
        id: "ai-tools",
        name: "AI & Creative Generation Tools",
        icon: "sparkles",
        description: "Leading-edge generative AI models for video, imagery, voice, and narrative.",
        items: [
          { name: "Runway Gen-3 / Kling AI (Video)", level: 94, tag: "AI Video" },
          { name: "Midjourney v6 & Flux (Images)", level: 96, tag: "AI Art" },
          { name: "ElevenLabs (Voice Synthesis)", level: 92, tag: "Audio AI" },
          { name: "Claude 3.7 & ChatGPT (Copy/Code)", level: 98, tag: "Prompting" },
          { name: "Premiere Pro & After Effects", level: 88, tag: "Editing" },
          { name: "CapCut Pro & Motion Graphics", level: 92, tag: "Shortform" }
        ]
      },
      {
        id: "web-dev-skills",
        name: "Website Design & Development",
        icon: "layout",
        description: "Modern frontend frameworks and performant web architecture.",
        items: [
          { name: "HTML5, Modern CSS3 & SCSS", level: 96, tag: "Standard" },
          { name: "JavaScript (ES6+) & TypeScript", level: 92, tag: "Core" },
          { name: "React & Next.js", level: 92, tag: "Frontend" },
          { name: "Tailwind CSS & Responsive UI", level: 95, tag: "Styling" },
          { name: "Interactive CSS Animations & GSAP", level: 88, tag: "Motion" },
          { name: "Figma UI/UX Prototyping", level: 90, tag: "Design" }
        ]
      },
      {
        id: "content-strategy",
        name: "Content Strategy & Video Production",
        icon: "film",
        description: "Engaging audience attention with structured narrative design.",
        items: [
          { name: "Viral Hook & Script Architecture", level: 94, tag: "Scripting" },
          { name: "Sound Design & Kinetic Typography", level: 90, tag: "VFX" },
          { name: "Multi-Format Aspect Ratio Mastering", level: 95, tag: "Delivery" },
          { name: "Brand Visual Consistency", level: 92, tag: "Identity" },
          { name: "Short-Form Algorithm Optimization", level: 89, tag: "Growth" }
        ]
      },
      {
        id: "backend-cloud",
        name: "Backend, APIs & Deployment",
        icon: "server",
        description: "Connecting digital platforms to robust cloud backends.",
        items: [
          { name: "Node.js & Express APIs", level: 88, tag: "Backend" },
          { name: "REST APIs & Webhooks", level: 92, tag: "Integration" },
          { name: "Vercel, Netlify & Cloud Hosting", level: 95, tag: "Cloud" },
          { name: "Git, GitHub & Automation", level: 92, tag: "Workflow" },
          { name: "PostgreSQL & Supabase", level: 85, tag: "Database" }
        ]
      }
    ]
  },

  // 5. Experience & Professional Journey
  experience: [
    {
      id: "exp-1",
      role: "AI Creative Producer & Lead Web Developer",
      company: "Studio Apex / Independent Consultant",
      location: "Remote · Global Clients",
      duration: "2025 — Present",
      type: "Creator & Consultant",
      description: "Spearheading AI video creation, viral digital campaigns, and custom high-converting web applications for creator brands, SaaS startups, and corporate clients.",
      achievements: [
        "Produced 80+ AI video commercials and promotional campaigns utilizing Runway Gen-3, Kling, and ElevenLabs.",
        "Designed and shipped 15+ bespoke portfolio and business websites with 98+ Google Lighthouse performance scores.",
        "Automated AI content production workflows, cutting client content turnaround times by over 65%."
      ],
      technologies: ["AI Video", "Runway Gen-3", "Midjourney", "React", "Next.js", "Premiere Pro", "Claude API"]
    },
    {
      id: "exp-2",
      role: "Site Supervisor | AutoCAD Designer | Assistant to Project Manager",
      company: "Bharat Fire Protection",
      location: "Mumbai, India",
      duration: "Dec 2022 — Dec 2024",
      type: "Full-Time",
      description: "Executed detailed AutoCAD engineering drawings for specialized firefighting systems, prepared Bills of Quantities (BOQs), and assisted project management with site coordination and billing abstracts.",
      achievements: [
        "Prepared detailed AutoCAD drawings for firefighting systems, including plans, sections and elevations based on tender drawings and project requirements.",
        "Interpreted technical specifications and engineering drawings to prepare accurate and compliant firefighting system designs.",
        "Prepared Bills of Quantities (BOQs) for project estimation, material planning and cost-related requirements.",
        "Prepared billing abstracts and maintained accurate billing and transaction records for multiple clients.",
        "Monitored project progress and coordinated with site teams, project staff and other stakeholders.",
        "Managed documentation and client account information across multiple projects.",
        "Assisted the Project Manager with project coordination, documentation and day-to-day project activities."
      ],
      technologies: ["AutoCAD", "Site Supervision", "Firefighting Systems", "BOQ Estimation", "Project Coordination", "Billing Abstracts", "Client Management"]
    },
    {
      id: "exp-3",
      role: "Office Assistant",
      company: "M/S Abhinav Enterprises",
      location: "Ratnagiri, Maharashtra, India",
      duration: "Dec 2020 — May 2022",
      type: "Full-Time",
      description: "Managed enterprise administration, employee records, payroll disbursements, and institutional financial coordination for a civil construction firm.",
      achievements: [
        "Managed and maintained company, employee and administrative records for a civil construction business.",
        "Handled routine office administration, documentation and computer-based work.",
        "Prepared and processed worker salaries while maintaining accurate payroll records.",
        "Assisted with banking operations and financial documentation.",
        "Coordinated with financial institutions when required and maintained transaction-related records.",
        "Supported management with administrative and financial activities to ensure smooth day-to-day operations."
      ],
      technologies: ["Office Administration", "Payroll Processing", "Banking Operations", "Documentation", "Financial Record Keeping", "Civil Construction Records"]
    }
  ],

  // 6. Education
  education: [
    {
      degree: "Bachelor of Commerce (B.Com)",
      institution: "University of Mumbai",
      location: "Mumbai, Maharashtra, India",
      duration: "2025",
      grade: "Graduated (2025)",
      description: "Comprehensive foundation in commercial accounting, business management, economics, and corporate financial principles.",
      highlights: [
        "Degree conferred by the prestigious University of Mumbai",
        "Applied commercial, project accounting, and business administration expertise"
      ]
    }
  ],

  // 7. Professional Certifications
  certifications: [
    {
      title: "Generative AI Creative Workflows & Video Production",
      issuer: "AI Media Guild / DeepLearning.AI",
      date: "Issued 2024",
      credentialId: "AI-CREATIVE-99281",
      verifyUrl: "https://www.coursera.org",
      badge: "AI & Media",
      icon: "sparkles"
    },
    {
      title: "Meta Front-End Developer Professional Certificate",
      issuer: "Meta / Coursera",
      date: "Issued 2023",
      credentialId: "META-FED-993821",
      verifyUrl: "https://www.coursera.org",
      badge: "Frontend & UI",
      icon: "layout"
    },
    {
      title: "AWS Certified Solutions Architect — Associate",
      issuer: "Amazon Web Services (AWS)",
      date: "Issued 2023 · Valid 2026",
      credentialId: "AWS-SAA-8849204",
      verifyUrl: "https://aws.amazon.com/verification",
      badge: "Cloud Architecture",
      icon: "cloud"
    }
  ],

  // 8. Contact Channels
  contact: {
    heading: "Let's Collaborate On Your Next Project",
    subheading: "Need an AI video campaign, a high-converting website, or turnkey digital content? Send a message and let's bring your vision to life.",
    channels: [
      {
        id: "email",
        label: "Direct Email",
        value: "tawaderushi173@gmail.com",
        href: "mailto:tawaderushi173@gmail.com",
        icon: "mail",
        actionText: "Copy Email",
        isCopyable: true
      },
      {
        id: "linkedin",
        label: "LinkedIn Profile",
        value: "linkedin.com/in/rushikesh-tawade-564bb2232",
        href: "https://www.linkedin.com/in/rushikesh-tawade-564bb2232",
        icon: "linkedin",
        actionText: "Connect on LinkedIn",
        isCopyable: false
      },
      {
        id: "github",
        label: "GitHub Repositories",
        value: "github.com/rushikeshtawade",
        href: "https://github.com/rushikeshtawade",
        icon: "github",
        actionText: "View GitHub",
        isCopyable: false
      },
      {
        id: "location",
        label: "Location & Availability",
        value: "Mumbai / Pune, India · Remote Globally",
        href: "https://maps.google.com/?q=Mumbai,India",
        icon: "map-pin",
        actionText: "Open Maps",
        isCopyable: false
      }
    ]
  }
};

// Export for module/script usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
