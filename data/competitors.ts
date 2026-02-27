// ---------------------------------------------------------------------------
// Competitor data for Magic Resume comparison and alternative pages.
// Kept intentionally honest -- the goal is to be the most trustworthy
// comparison on the internet.
// ---------------------------------------------------------------------------

export interface CompetitorFeatures {
  aiWriting: boolean;
  pdfImport: boolean;
  realTimePreview: boolean;
  noSignUpRequired: boolean;
  privacyFirst: boolean;
  openSource: boolean;
  freeExport: boolean;
  templates: string;
  customization: string;
}

export interface Competitor {
  slug: string;
  name: string;
  url: string;
  description: string;
  pricing: string;
  freePlan: string;
  pros: string[];
  cons: string[];
  features: CompetitorFeatures;
  bestFor: string;
  notIdealFor: string;
  switchReasons: string[];
}

// ---------------------------------------------------------------------------
// Competitors
// ---------------------------------------------------------------------------

export const competitors: Competitor[] = [
  // 1. Resume.io
  {
    slug: "resume-io",
    name: "Resume.io",
    url: "https://resume.io",
    description:
      "One of the most popular online resume builders with polished templates and a step-by-step wizard. Offers a paid trial model with multiple subscription tiers.",
    pricing:
      "$2.95 for a 7-day trial, then $29.95 every 4 weeks. Annual plan ~$59.96/year.",
    freePlan:
      "Limited free plan: one resume, one cover letter, TXT download only. No PDF export on free tier.",
    pros: [
      "Clean, professional templates that look great out of the box",
      "Intuitive step-by-step resume creation wizard",
      "Built-in cover letter builder included with all plans",
      "ATS-friendly formatting across all templates",
      "Affordable annual plan (~$5/month) for long-term users",
    ],
    cons: [
      "Free plan only allows TXT downloads -- no PDF export without paying",
      "The $2.95 trial auto-renews at $29.95/4 weeks, catching some users off guard",
      "Limited customization compared to design-focused builders",
      "No AI writing assistance on free or basic plans",
      "Pricing can vary by location, making costs unpredictable",
    ],
    features: {
      aiWriting: true,
      pdfImport: false,
      realTimePreview: true,
      noSignUpRequired: false,
      privacyFirst: false,
      openSource: false,
      freeExport: false,
      templates: "30+ templates",
      customization: "Moderate -- color and font options within fixed layouts",
    },
    bestFor:
      "Job seekers who want a polished resume quickly and are willing to pay for a short subscription period.",
    notIdealFor:
      "Budget-conscious users, people who want full PDF export without paying, or privacy-focused individuals.",
    switchReasons: [
      "Tired of paying a recurring fee just to download their own resume as PDF",
      "Surprised by auto-renewal charges after the trial period",
      "Want an open-source tool they can trust with their personal data",
      "Need PDF import to edit an existing resume rather than starting from scratch",
    ],
  },

  // 2. Zety
  {
    slug: "zety",
    name: "Zety",
    url: "https://zety.com",
    description:
      "A well-known resume builder with strong AI-powered content suggestions and a large library of templates. Offers a 14-day trial but locks PDF export behind a paywall.",
    pricing:
      "$1.95 for a 14-day trial, then $25.95 every 4 weeks. Annual plan $71.40/year.",
    freePlan:
      "Free plan lets you build and edit resumes but only download as plain TXT. No PDF or Word export without paying.",
    pros: [
      "Excellent pre-written content suggestions for work experience bullet points",
      "Wide selection of modern, ATS-optimized templates",
      "Built-in resume checker that scores your resume and gives actionable tips",
      "Strong cover letter builder with matching templates",
      "Helpful career blog with genuinely useful resume writing advice",
    ],
    cons: [
      "Cannot download as PDF on the free plan -- only plain text",
      "The 14-day trial auto-renews at $25.95/4 weeks if not cancelled",
      "Aggressive upselling during the resume creation flow",
      "Limited design flexibility -- you work within predefined layouts",
      "Some users report difficulty cancelling subscriptions",
    ],
    features: {
      aiWriting: true,
      pdfImport: false,
      realTimePreview: true,
      noSignUpRequired: false,
      privacyFirst: false,
      openSource: false,
      freeExport: false,
      templates: "20+ templates",
      customization:
        "Moderate -- choice of templates, colors, and fonts but layouts are fixed",
    },
    bestFor:
      "People who struggle with writing resume content and want AI-powered suggestions to describe their experience.",
    notIdealFor:
      "Anyone who wants free PDF downloads, or users uncomfortable with auto-renewing trial subscriptions.",
    switchReasons: [
      "Frustrated that building the entire resume is free but downloading it costs money",
      "Hit with unexpected charges after the trial auto-renewed",
      "Want a tool that respects their time -- no upsell interruptions",
      "Prefer to keep their data local rather than on a third-party server",
    ],
  },

  // 3. Novoresume
  {
    slug: "novoresume",
    name: "Novorésumé",
    url: "https://novoresume.com",
    description:
      "A design-focused resume builder popular in Europe, offering clean templates and a straightforward editor. Known for transparent one-time pricing rather than auto-renewing subscriptions.",
    pricing:
      "$19.99/month, $39.99/quarter, or $99.99/year. Premium plans are one-time payments, not recurring subscriptions.",
    freePlan:
      "Free plan allows one single-page resume with basic customization (3 fonts, 30 color themes). No cover letter support on free tier.",
    pros: [
      "Transparent one-time pricing -- no sneaky auto-renewal subscriptions",
      "Clean, modern template designs that work well for European job markets",
      "Solid free plan that produces a genuinely usable single-page resume",
      "Good Trustpilot rating (4.5/5) reflecting honest business practices",
      "AI writing assistant (beta) helps generate tailored resume content",
    ],
    cons: [
      "Free plan limited to a single one-page resume with basic customization",
      "Fewer templates compared to competitors like Resume.io or Zety",
      "No PDF import -- you must build from scratch or use their editor",
      "Premium pricing is higher than some competitors for similar features",
      "Cover letters only available on paid plans",
    ],
    features: {
      aiWriting: true,
      pdfImport: false,
      realTimePreview: true,
      noSignUpRequired: false,
      privacyFirst: false,
      openSource: false,
      freeExport: true,
      templates: "8+ templates",
      customization:
        "Good -- custom layouts, 74 color themes, and up to 12 fonts on premium",
    },
    bestFor:
      "European job seekers and design-conscious candidates who appreciate transparent, one-time pricing.",
    notIdealFor:
      "Users who need multiple resumes on a free plan, or those who want extensive template variety.",
    switchReasons: [
      "Free plan is too restrictive -- limited to one page and one resume",
      "Want more templates and customization without paying",
      "Need PDF import to work with an existing resume",
      "Prefer a fully free, open-source alternative with no limitations",
    ],
  },

  // 4. Kickresume
  {
    slug: "kickresume",
    name: "Kickresume",
    url: "https://www.kickresume.com",
    description:
      "A feature-rich resume builder with AI writing tools, LinkedIn import, and a generous free plan that includes unlimited PDF downloads. Offers special pricing for students.",
    pricing:
      "$24/month, $18/month billed quarterly, or $8/month billed annually ($96/year).",
    freePlan:
      "Free plan includes unlimited resumes and cover letters with 4 basic templates and unlimited PDF downloads. No AI features on free tier.",
    pros: [
      "Generous free plan with unlimited PDF downloads -- rare among competitors",
      "AI writing powered by GPT available on all premium plans at no extra per-use cost",
      "Free 6-month premium access for students and teachers",
      "LinkedIn profile import to quickly populate your resume",
      "ATS resume checker included in premium plans",
    ],
    cons: [
      "Free plan limited to only 4 basic templates",
      "Monthly pricing ($24/month) is on the higher side",
      "Some template designs feel dated compared to newer competitors",
      "Requires account creation even for the free plan",
      "Human proofreading service costs an additional $26 per resume",
    ],
    features: {
      aiWriting: true,
      pdfImport: false,
      realTimePreview: true,
      noSignUpRequired: false,
      privacyFirst: false,
      openSource: false,
      freeExport: true,
      templates: "40+ templates (4 free)",
      customization:
        "Good -- flexible layouts with color, font, and spacing controls",
    },
    bestFor:
      "Students (free 6-month premium) and job seekers who want free PDF exports with a solid set of basic templates.",
    notIdealFor:
      "Users who want full template access without paying, or those who need a privacy-first solution.",
    switchReasons: [
      "Want more than 4 templates without paying for premium",
      "Prefer a tool that does not require account creation",
      "Looking for an open-source solution they can inspect and trust",
      "Need PDF import to edit existing resumes rather than starting over",
    ],
  },

  // 5. Enhancv
  {
    slug: "enhancv",
    name: "Enhancv",
    url: "https://enhancv.com",
    description:
      "A modern resume builder focused on showcasing personality alongside professional experience. Offers unique sections for achievements, strengths, and personal philosophy.",
    pricing:
      "$24.99/month, $49.97/quarter (~$16.66/month), or $79.94/semi-annual (~$13.33/month).",
    freePlan:
      "7-day free trial with full access (no credit card required). Free plan limited to 2 resumes, Enhancv branding, and basic sections only.",
    pros: [
      "Unique resume sections (achievements, philosophy, strengths) that help candidates stand out",
      "No credit card required for the 7-day free trial",
      "Strong ATS compatibility checker built into the editor",
      "Real-time content suggestions improve bullet points as you type",
      "Excellent Trustpilot rating (4.6/5) with a track record at top companies",
    ],
    cons: [
      "Free plan adds Enhancv branding/watermark to your resume",
      "Limited to 2 resumes and basic sections on the free plan",
      "No truly free PDF export -- branding is included unless you pay",
      "Monthly pricing ($24.99) is higher than many competitors",
      "Pricing page has been inconsistent, making costs hard to verify",
    ],
    features: {
      aiWriting: true,
      pdfImport: false,
      realTimePreview: true,
      noSignUpRequired: false,
      privacyFirst: false,
      openSource: false,
      freeExport: false,
      templates: "30+ templates",
      customization:
        "Excellent -- dual-tone color systems, 12 modern fonts, flexible layouts",
    },
    bestFor:
      "Mid-career professionals and creative candidates who want to showcase personality and unique achievements beyond a standard resume format.",
    notIdealFor:
      "Budget-conscious job seekers who need truly free exports, or users who want a quick, no-frills resume.",
    switchReasons: [
      "Do not want their resume to have Enhancv branding on it",
      "Find the pricing too high for what is essentially a document editor",
      "Want a completely free tool without trial period pressure",
      "Prefer to keep their resume data local and private",
    ],
  },

  // 6. Canva
  {
    slug: "canva",
    name: "Canva",
    url: "https://www.canva.com/resumes/",
    description:
      "The popular graphic design platform with a large library of visually stunning resume templates. Best known for creative designs, though ATS compatibility can be an issue.",
    pricing:
      "Free plan available. Canva Pro at $120/year ($10/month) unlocks premium templates and brand kit.",
    freePlan:
      "Generous free plan with hundreds of free resume templates, PDF download, and full drag-and-drop editor. Some premium templates require Canva Pro.",
    pros: [
      "Massive template library with hundreds of beautifully designed resume layouts",
      "Truly free PDF export -- no paywall for downloading your resume",
      "Intuitive drag-and-drop editor that anyone can use",
      "Great for creative roles where visual design matters",
      "Part of a broader design ecosystem -- create matching cover letters, portfolios, and business cards",
    ],
    cons: [
      "Many templates are not ATS-friendly due to complex layouts and graphics",
      "Not purpose-built for resumes -- lacks resume-specific features like content suggestions",
      "Easy to over-design a resume that looks great but gets rejected by ATS software",
      "Premium templates require Canva Pro ($120/year)",
      "No AI resume writing assistance -- you write all content yourself",
    ],
    features: {
      aiWriting: false,
      pdfImport: false,
      realTimePreview: true,
      noSignUpRequired: false,
      privacyFirst: false,
      openSource: false,
      freeExport: true,
      templates: "Hundreds of templates (mix of free and Pro)",
      customization:
        "Excellent -- full drag-and-drop design freedom with unlimited visual options",
    },
    bestFor:
      "Creative professionals (designers, marketers, artists) who want a visually distinctive resume and know how to keep it ATS-compatible.",
    notIdealFor:
      "Job seekers applying to large corporations with ATS systems, or anyone who needs AI writing help.",
    switchReasons: [
      "Realized their beautifully designed resume was getting rejected by ATS systems",
      "Need AI-powered content suggestions to write better bullet points",
      "Want a purpose-built resume tool rather than a general design platform",
      "Prefer a privacy-first tool that does not require a Canva account",
    ],
  },

  // 7. Reactive Resume
  {
    slug: "reactive-resume",
    name: "Reactive Resume",
    url: "https://rxresu.me",
    description:
      "A free, open-source resume builder with a strong focus on privacy and self-hosting. Offers real-time editing, multiple templates, and OpenAI integration. The closest open-source competitor to Magic Resume.",
    pricing: "Free forever. Self-hosting is also free (MIT License).",
    freePlan:
      "Everything is free -- no premium tier, no paywalls, no watermarks. Full PDF export included.",
    pros: [
      "Completely free with no paywalls, watermarks, or premium tiers",
      "Open-source (MIT License) with an active community and transparent codebase",
      "Self-hosting option via Docker gives full control over your data",
      "AI writing assistant via OpenAI integration for content generation",
      "Available in 50+ languages with strong internationalization support",
    ],
    cons: [
      "Requires account creation (email, GitHub, or Google sign-in)",
      "Self-hosting requires technical knowledge (Docker, PostgreSQL)",
      "Fewer templates (12) compared to commercial builders",
      "No PDF import -- you must build your resume from scratch in the editor",
      "The hosted version stores data on their servers, not locally in your browser",
    ],
    features: {
      aiWriting: true,
      pdfImport: false,
      realTimePreview: true,
      noSignUpRequired: false,
      privacyFirst: true,
      openSource: true,
      freeExport: true,
      templates: "12 templates",
      customization:
        "Good -- custom colors, Google Fonts, drag-and-drop section ordering",
    },
    bestFor:
      "Privacy-conscious developers and tech-savvy users who want a free, open-source tool they can self-host and fully control.",
    notIdealFor:
      "Non-technical users who want a zero-setup experience, or those who need a huge template library.",
    switchReasons: [
      "Want a tool that works instantly in the browser without sign-up or Docker setup",
      "Prefer localStorage-based privacy (data never leaves the browser) over server-side storage",
      "Need PDF import to quickly edit an existing resume",
      "Looking for a simpler, more focused experience without needing to self-host",
    ],
  },

  // 8. Indeed Resume Builder
  {
    slug: "indeed-resume-builder",
    name: "Indeed Resume Builder",
    url: "https://www.indeed.com/create-resume",
    description:
      "A completely free resume builder integrated into the Indeed job platform. Simple and straightforward, designed primarily for applying to jobs within the Indeed ecosystem.",
    pricing:
      "Free. Optional paid services: Resume Review ($35), Resume Writing ($155).",
    freePlan:
      "Fully free resume builder with PDF and Word export. No premium tier for the builder itself.",
    pros: [
      "Completely free with PDF and Word export -- no hidden fees for the builder",
      "Seamlessly integrated with Indeed's massive job board for easy applications",
      "Content suggestions for work experience bullet points based on job title",
      "Instant free resume report that flags errors and missing sections",
      "No paywall tricks -- the builder is genuinely free",
    ],
    cons: [
      "Very limited template options and design customization",
      "Primarily designed for the Indeed ecosystem -- less useful outside it",
      "Basic formatting that produces functional but visually plain resumes",
      "The platform has been scaled back in 2025-2026, with fewer standalone features",
      "No AI writing assistance in the free builder",
    ],
    features: {
      aiWriting: false,
      pdfImport: false,
      realTimePreview: true,
      noSignUpRequired: false,
      privacyFirst: false,
      openSource: false,
      freeExport: true,
      templates: "Limited basic templates",
      customization: "Minimal -- basic fields and sections with little design control",
    },
    bestFor:
      "Job seekers who are already active on Indeed and want a quick, free, no-frills resume to apply for jobs on the platform.",
    notIdealFor:
      "Anyone who wants a visually polished resume, design flexibility, or a tool independent of a job board.",
    switchReasons: [
      "Want a more visually appealing resume with modern templates",
      "Need more customization and design options",
      "Prefer a tool that is not tied to a specific job platform",
      "Looking for AI writing assistance to improve their resume content",
    ],
  },

  // 9. LinkedIn Resume Builder
  {
    slug: "linkedin-resume-builder",
    name: "LinkedIn Resume Builder",
    url: "https://www.linkedin.com",
    description:
      "LinkedIn's built-in resume creation tool, available primarily to Premium subscribers. Allows converting your LinkedIn profile into a formatted resume. The native builder was significantly scaled back in 2024.",
    pricing:
      "Requires LinkedIn Premium ($29.99/month or $239/year). Free users can only export their profile as a basic PDF.",
    freePlan:
      "Free users can save their LinkedIn profile as a PDF (unformatted profile dump). The actual resume builder with templates requires Premium.",
    pros: [
      "Pulls data directly from your LinkedIn profile -- no manual re-entry needed",
      "Premium subscribers get access to 40+ professionally designed templates",
      "AI-powered content rewriting using GPT-4 for Premium users",
      "Integrated with LinkedIn's Easy Apply for one-click job applications",
      "Resume checker scans for ATS compatibility and errors",
    ],
    cons: [
      "Resume builder requires LinkedIn Premium ($29.99/month) -- expensive for just resume building",
      "The native resume builder was discontinued in mid-2024 and rebuilt as a Premium-only feature",
      "Free PDF export is just a profile dump -- not a properly formatted resume",
      "Locked into the LinkedIn ecosystem with limited portability",
      "Not a standalone tool -- you are paying for the entire LinkedIn Premium suite",
    ],
    features: {
      aiWriting: true,
      pdfImport: false,
      realTimePreview: true,
      noSignUpRequired: false,
      privacyFirst: false,
      openSource: false,
      freeExport: false,
      templates: "40+ templates (Premium only)",
      customization:
        "Good for Premium users -- template selection and AI-driven content optimization",
    },
    bestFor:
      "Professionals who already pay for LinkedIn Premium and want to quickly generate a resume from their existing profile data.",
    notIdealFor:
      "Anyone who does not want to pay $29.99/month for LinkedIn Premium just to build a resume.",
    switchReasons: [
      "Do not want to pay for LinkedIn Premium just to build a resume",
      "Want a dedicated resume builder rather than a feature bundled into a social network",
      "Need more control over resume design and layout",
      "Prefer to keep their data local rather than on LinkedIn's servers",
    ],
  },

  // 10. VisualCV
  {
    slug: "visualcv",
    name: "VisualCV",
    url: "https://www.visualcv.com",
    description:
      "A long-standing resume builder trusted by over 3 million users, offering analytics to track who views your resume. Known for clean templates and a solid editor.",
    pricing:
      "$24/month, or ~$12/month billed quarterly, or less than $10/month on the annual plan.",
    freePlan:
      "Free plan allows building and downloading one resume as PDF. Limited template selection and no Word export on free tier.",
    pros: [
      "Resume analytics that show who viewed and downloaded your resume",
      "Clean, ATS-friendly templates with a professional appearance",
      "30-day money-back guarantee on all paid plans",
      "30+ professional templates on the Pro plan",
      "Trusted platform with 3+ million users across 200+ countries",
    ],
    cons: [
      "Free plan limited to one resume and PDF-only downloads",
      "Monthly pricing ($24/month) is expensive for a resume builder",
      "Word export only available on paid plans",
      "No AI writing features -- you write all content yourself",
      "The editor interface feels dated compared to newer competitors",
    ],
    features: {
      aiWriting: false,
      pdfImport: false,
      realTimePreview: true,
      noSignUpRequired: false,
      privacyFirst: false,
      openSource: false,
      freeExport: true,
      templates: "30+ templates (limited free selection)",
      customization:
        "Moderate -- template-based customization with color and font options",
    },
    bestFor:
      "Professionals who want resume analytics to track engagement, and those who value a long-established, trusted platform.",
    notIdealFor:
      "Users who want AI writing help, unlimited free resumes, or a modern editing experience.",
    switchReasons: [
      "Want AI-powered writing assistance to improve their content",
      "Do not need resume analytics and would rather have a simpler, free tool",
      "Find the monthly pricing too high for a resume builder",
      "Want an open-source tool where they control their own data",
    ],
  },
];

// ---------------------------------------------------------------------------
// Magic Resume -- our own feature set for comparison tables
// ---------------------------------------------------------------------------

export const magicResumeFeatures: CompetitorFeatures = {
  aiWriting: true,
  pdfImport: true,
  realTimePreview: true,
  noSignUpRequired: true,
  privacyFirst: true,
  openSource: true,
  freeExport: true,
  templates: "Multiple professional templates",
  customization:
    "Full -- real-time preview with flexible section ordering, fonts, colors, and spacing",
};

// ---------------------------------------------------------------------------
// Helper functions
// ---------------------------------------------------------------------------

export function getCompetitorBySlug(slug: string): Competitor | undefined {
  return competitors.find((c) => c.slug === slug);
}

export function getAllCompetitorSlugs(): string[] {
  return competitors.map((c) => c.slug);
}
