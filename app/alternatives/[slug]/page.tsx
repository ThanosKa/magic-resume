import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check, X, Minus } from 'lucide-react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { JsonLd } from '@/components/seo/json-ld';
import { breadcrumbJsonLd } from '@/lib/seo';
import { Button } from '@/components/ui/button';

interface Alternative {
  name: string;
  url: string;
  description: string;
  pricing: string;
  pros: string[];
  cons: string[];
}

interface AlternativePageData {
  title: string;
  metaDescription: string;
  keywords: string[];
  intro: string;
  whyLookForAlternatives: string;
  whatToLookFor: string[];
  alternatives: Alternative[];
}

const alternativesData: Record<string, AlternativePageData> = {
  'resume-io-alternatives': {
    title: 'Best Resume.io Alternatives (2026)',
    metaDescription:
      'Looking for a Resume.io alternative? Compare the 7 best free and paid resume builders including Magic Resume, Zety, Novoresume, and more.',
    keywords: [
      'resume.io alternatives',
      'resume.io alternative free',
      'best resume.io replacement',
      'sites like resume.io',
    ],
    intro:
      'Resume.io is a popular resume builder known for its clean templates and guided builder. However, its free tier is very limited and the subscription pricing can add up. Whether you want a truly free option, better privacy, or more customization, there are excellent alternatives worth considering.',
    whyLookForAlternatives:
      'Resume.io requires a paid subscription to download resumes as PDF, offers limited free templates, and stores your data on their servers. Many job seekers want a tool that lets them export for free, respects their privacy, or offers features like AI writing assistance without extra charges.',
    whatToLookFor: [
      'Free PDF export without watermarks',
      'No mandatory account creation',
      'AI-powered writing assistance',
      'ATS-friendly template designs',
      'Real-time preview while editing',
      'Data privacy and local storage',
    ],
    alternatives: [
      {
        name: 'Magic Resume',
        url: '/',
        description:
          'A completely free, open-source resume builder with AI-powered writing assistance, PDF import, and real-time preview. All data stays in your browser -- no sign-up required.',
        pricing: 'Free forever (all features included)',
        pros: [
          '100% free with no hidden fees or paywalls',
          'AI writing polish included at no cost',
          'No account creation required',
          'Privacy-first: all data stored locally in your browser',
          'PDF import to convert existing resumes',
          'Open source and transparent',
        ],
        cons: [
          'Fewer template designs than Resume.io',
          'No cloud sync between devices',
          'Newer platform with a growing community',
        ],
      },
      {
        name: 'Zety',
        url: 'https://zety.com',
        description:
          'A well-known resume builder with a large template library and content suggestions. Offers a step-by-step wizard to guide users through resume creation.',
        pricing: 'Free to create; $2.70/month to download (14-day trial)',
        pros: [
          'Large library of professional templates',
          'Built-in content suggestions for job descriptions',
          'Step-by-step guided builder',
        ],
        cons: [
          'Requires payment to download your resume',
          'Subscription auto-renews at higher price',
          'Limited customization on free tier',
        ],
      },
      {
        name: 'Novoresume',
        url: 'https://novoresume.com',
        description:
          'A modern resume builder with a focus on design and visual appeal. Popular among students and entry-level job seekers for its clean layouts.',
        pricing: 'Free tier; Premium from $19.99/month',
        pros: [
          'Clean, modern template designs',
          'Drag-and-drop section reordering',
          'Cover letter builder included',
        ],
        cons: [
          'Free tier limited to one basic template',
          'Premium pricing is relatively high',
          'Some templates are not ATS-friendly',
        ],
      },
      {
        name: 'FlowCV',
        url: 'https://flowcv.io',
        description:
          'A free resume builder that offers unlimited PDF downloads and a variety of templates. Known for its generous free tier.',
        pricing: 'Free; Pro from $19/month',
        pros: [
          'Free PDF downloads with no watermark',
          'Good selection of clean templates',
          'Simple and intuitive interface',
        ],
        cons: [
          'No AI writing features on free tier',
          'Fewer advanced customization options',
          'Requires account creation',
        ],
      },
      {
        name: 'Canva',
        url: 'https://canva.com',
        description:
          'A general-purpose design tool with hundreds of resume templates. Great for creative resumes but less focused on ATS compatibility.',
        pricing: 'Free; Canva Pro from $12.99/month',
        pros: [
          'Hundreds of visually stunning templates',
          'Full creative control over design',
          'Additional tools for cover letters and portfolios',
        ],
        cons: [
          'Many templates are not ATS-friendly',
          'Not purpose-built for resumes',
          'Best templates require Canva Pro',
        ],
      },
      {
        name: 'Indeed Resume Builder',
        url: 'https://indeed.com/create-resume',
        description:
          'A free resume builder integrated with Indeed job search platform. Simple and straightforward but limited in design options.',
        pricing: 'Free',
        pros: [
          'Completely free to use',
          'Direct integration with Indeed job applications',
          'Simple and quick to use',
        ],
        cons: [
          'Very limited template options',
          'Basic formatting and customization',
          'Resume data tied to your Indeed account',
        ],
      },
      {
        name: 'Standard Resume',
        url: 'https://standardresume.co',
        description:
          'A minimalist resume builder focused on clean typography and ATS-friendly designs. Favored by tech professionals.',
        pricing: 'Free tier; Pro from $8/month',
        pros: [
          'Extremely clean, professional output',
          'Strong ATS compatibility',
          'Fast and distraction-free editing',
        ],
        cons: [
          'Very few template choices',
          'Limited customization options',
          'Free tier has restrictions on exports',
        ],
      },
    ],
  },
  'zety-alternatives': {
    title: 'Best Zety Alternatives (2026)',
    metaDescription:
      'Tired of Zety pricing? Discover the best free and affordable Zety alternatives for building professional resumes in 2026.',
    keywords: [
      'zety alternatives',
      'free zety alternative',
      'sites like zety',
      'zety free alternative',
    ],
    intro:
      'Zety is one of the most advertised resume builders online, but many users are frustrated to discover they cannot download their resume without paying. If you have been lured in by the "free" claim only to hit a paywall, you are not alone. Here are the best alternatives that respect your time and budget.',
    whyLookForAlternatives:
      'Zety advertises itself as free but requires a paid subscription to actually download your resume. The trial pricing can be confusing, and the subscription auto-renews at a higher rate. Many users feel misled after spending time building their resume only to be asked to pay at the final step.',
    whatToLookFor: [
      'Truly free PDF downloads without surprise paywalls',
      'Transparent pricing with no hidden auto-renewals',
      'Comparable or better template quality',
      'AI content suggestions for bullet points',
      'ATS-compatible resume formats',
      'Easy import of existing resume data',
    ],
    alternatives: [
      {
        name: 'Magic Resume',
        url: '/',
        description:
          'A genuinely free resume builder where every feature -- including AI writing, PDF export, and PDF import -- is available without payment or account creation. Your data never leaves your browser.',
        pricing: 'Free forever (all features included)',
        pros: [
          'Truly free: no paywall on any feature including PDF export',
          'AI-powered content suggestions at no cost',
          'No sign-up or account creation needed',
          'Data stored locally in your browser for privacy',
          'Import existing PDF resumes automatically',
          'Open source and community-driven',
        ],
        cons: [
          'Smaller template library than Zety',
          'No cloud backup (browser-based storage)',
          'Relatively new compared to Zety',
        ],
      },
      {
        name: 'Resume.io',
        url: 'https://resume.io',
        description:
          'A polished resume builder with professional templates and a straightforward builder experience. More transparent about pricing than Zety.',
        pricing: 'Free to create; from $2.95/week to download',
        pros: [
          'Clean, professional template designs',
          'Guided resume building experience',
          'Built-in content tips for each section',
        ],
        cons: [
          'Still requires payment for PDF downloads',
          'Weekly pricing can be confusing',
          'Limited free functionality',
        ],
      },
      {
        name: 'FlowCV',
        url: 'https://flowcv.io',
        description:
          'A generous free resume builder that actually lets you download your resume as PDF for free. One of the better Zety alternatives for budget-conscious users.',
        pricing: 'Free; Pro from $19/month',
        pros: [
          'Free PDF downloads with no watermarks',
          'Multiple clean templates available for free',
          'Easy-to-use drag-and-drop editor',
        ],
        cons: [
          'No AI writing features on free tier',
          'Account creation is required',
          'Pro features are relatively expensive',
        ],
      },
      {
        name: 'Novoresume',
        url: 'https://novoresume.com',
        description:
          'A design-focused resume builder with modern templates. Popular in Europe and among recent graduates looking for visually appealing resumes.',
        pricing: 'Free tier; Premium from $19.99/month',
        pros: [
          'Modern, visually appealing templates',
          'Intuitive section-based editor',
          'Cover letter builder on same platform',
        ],
        cons: [
          'Free tier limited to one template',
          'Premium is expensive for occasional use',
          'Some designs prioritize looks over ATS compatibility',
        ],
      },
      {
        name: 'Reactive Resume',
        url: 'https://rxresu.me',
        description:
          'A free, open-source resume builder that can be self-hosted. Offers strong customization and full control over your data.',
        pricing: 'Free and open source',
        pros: [
          'Completely free with all features',
          'Open source with self-hosting option',
          'Good customization and template variety',
        ],
        cons: [
          'Requires account creation',
          'Interface can feel less polished',
          'Self-hosting requires technical knowledge',
        ],
      },
      {
        name: 'Indeed Resume Builder',
        url: 'https://indeed.com/create-resume',
        description:
          'A no-frills, completely free resume builder from the job search giant. Best for quick resumes to use within the Indeed ecosystem.',
        pricing: 'Free',
        pros: [
          'Completely free with no paywalls at all',
          'Direct integration with Indeed job search',
          'Quick and straightforward process',
        ],
        cons: [
          'Very basic template designs',
          'Limited formatting and customization',
          'Data is tied to your Indeed account',
        ],
      },
    ],
  },
  'novoresume-alternatives': {
    title: 'Best Novoresume Alternatives (2026)',
    metaDescription:
      'Looking for Novoresume alternatives? Compare the best free and paid resume builders with modern designs and better value.',
    keywords: [
      'novoresume alternatives',
      'novoresume alternative free',
      'sites like novoresume',
      'better than novoresume',
    ],
    intro:
      'Novoresume is popular for its modern designs and clean interface, especially among students and early-career professionals. But its free tier is limited to a single template, and the premium pricing is steep. If you want similar design quality without the restrictions, these alternatives deliver.',
    whyLookForAlternatives:
      'Novoresume limits free users to a single basic template and restricts key features like additional sections and cover letters to premium plans. At $19.99/month, the premium tier is one of the more expensive options in the market, which is hard to justify for a tool you may only need occasionally.',
    whatToLookFor: [
      'Modern, visually appealing templates like Novoresume',
      'Free access to multiple template designs',
      'Flexible section ordering and customization',
      'ATS compatibility for automated screening',
      'Cover letter support on the same platform',
      'Reasonable pricing or a genuinely free tier',
    ],
    alternatives: [
      {
        name: 'Magic Resume',
        url: '/',
        description:
          'A free, open-source resume builder with a modern editor, real-time preview, AI content polish, and PDF import. Every feature is included without payment.',
        pricing: 'Free forever (all features included)',
        pros: [
          'All features completely free -- no premium tier',
          'Modern editor with real-time live preview',
          'AI writing polish for better bullet points',
          'PDF import to bring in existing resumes',
          'No account or sign-up needed',
          'Open source and privacy-focused',
        ],
        cons: [
          'Fewer visual template styles than Novoresume',
          'No cloud sync across devices',
          'No built-in cover letter builder yet',
        ],
      },
      {
        name: 'FlowCV',
        url: 'https://flowcv.io',
        description:
          'A well-designed free resume builder with multiple templates and free PDF downloads. The closest competitor to Novoresume in design quality.',
        pricing: 'Free; Pro from $19/month',
        pros: [
          'Clean modern designs similar to Novoresume',
          'Free PDF export without watermarks',
          'Color and font customization on free tier',
        ],
        cons: [
          'Account creation required',
          'Advanced features locked behind Pro plan',
          'No AI writing features on free tier',
        ],
      },
      {
        name: 'Canva',
        url: 'https://canva.com',
        description:
          'A full design platform with hundreds of eye-catching resume templates. Ideal if you want maximum creative control over your resume layout.',
        pricing: 'Free; Canva Pro from $12.99/month',
        pros: [
          'Massive library of visually impressive templates',
          'Complete creative freedom over layout and design',
          'Works for resumes, cover letters, portfolios, and more',
        ],
        cons: [
          'Many templates are not optimized for ATS systems',
          'Not a dedicated resume builder',
          'Best design elements require Pro subscription',
        ],
      },
      {
        name: 'Resume.io',
        url: 'https://resume.io',
        description:
          'A professional resume builder with guided content creation and polished templates. A strong option if you prefer a step-by-step approach.',
        pricing: 'Free to create; from $2.95/week to download',
        pros: [
          'Professional, clean template designs',
          'Step-by-step guided experience',
          'Multi-language support',
        ],
        cons: [
          'Requires payment for PDF download',
          'Per-week pricing adds up quickly',
          'Limited free functionality',
        ],
      },
      {
        name: 'Standard Resume',
        url: 'https://standardresume.co',
        description:
          'A minimalist resume builder favored by designers and engineers. Focuses on elegant typography and clean layouts.',
        pricing: 'Free tier; Pro from $8/month',
        pros: [
          'Beautifully minimal and professional designs',
          'Strong ATS compatibility',
          'Easy LinkedIn import',
        ],
        cons: [
          'Very limited number of templates',
          'Minimal visual customization options',
          'Free tier has export limitations',
        ],
      },
      {
        name: 'Reactive Resume',
        url: 'https://rxresu.me',
        description:
          'An open-source resume builder with extensive customization options. A great Novoresume alternative for those who value flexibility.',
        pricing: 'Free and open source',
        pros: [
          'Free with no restrictions on features',
          'Open source and self-hostable',
          'Extensive customization and layout options',
        ],
        cons: [
          'Requires account creation for the hosted version',
          'Design quality slightly below Novoresume',
          'Steeper learning curve for full customization',
        ],
      },
    ],
  },
  'canva-resume-alternatives': {
    title: 'Best Canva Resume Alternatives (2026)',
    metaDescription:
      'Looking for Canva resume alternatives? Find ATS-friendly resume builders that combine great design with applicant tracking system compatibility.',
    keywords: [
      'canva resume alternative',
      'canva resume builder alternative',
      'ats friendly resume builder',
      'canva resume template alternative',
    ],
    intro:
      'Canva makes beautiful resumes, but beauty is only skin deep when it comes to job applications. Many Canva resume templates use complex layouts, graphics, and text boxes that confuse Applicant Tracking Systems (ATS). If your resume cannot be parsed by ATS software, it may never reach a human recruiter. These alternatives offer great design with ATS compatibility built in.',
    whyLookForAlternatives:
      'Canva is a general-purpose design tool, not a dedicated resume builder. Its templates often use multi-column layouts, icons, and graphics that break ATS parsing. There is no built-in ATS check, no content suggestions tailored to resume writing, and the best templates require a paid Canva Pro subscription.',
    whatToLookFor: [
      'ATS-friendly output that parses correctly',
      'Professional designs that still look great',
      'Resume-specific features like content suggestions',
      'Proper PDF export optimized for ATS',
      'Real-time preview as you edit',
      'No design skills required',
    ],
    alternatives: [
      {
        name: 'Magic Resume',
        url: '/',
        description:
          'A purpose-built resume builder that produces clean, ATS-friendly PDFs. Includes AI writing, real-time preview, and PDF import -- all completely free.',
        pricing: 'Free forever (all features included)',
        pros: [
          'ATS-optimized output by default',
          'AI writing assistance for polished content',
          'Real-time preview while editing',
          'Free PDF export -- no watermarks or paywalls',
          'PDF import to convert existing resumes',
          'No sign-up or design skills required',
        ],
        cons: [
          'Less creative freedom than a full design tool',
          'Fewer purely visual template styles',
          'No cover letter designer yet',
        ],
      },
      {
        name: 'Zety',
        url: 'https://zety.com',
        description:
          'A resume-focused builder with ATS-tested templates and built-in content suggestions. A solid alternative when ATS compatibility is your priority.',
        pricing: 'Free to create; $2.70/month to download (14-day trial)',
        pros: [
          'Templates specifically designed for ATS',
          'Contextual content suggestions per industry',
          'Professional, polished output',
        ],
        cons: [
          'Requires payment to download your resume',
          'Confusing trial-to-subscription pricing',
          'Less visual variety than Canva',
        ],
      },
      {
        name: 'Resume.io',
        url: 'https://resume.io',
        description:
          'A polished resume builder with tested, ATS-compatible templates. Offers a guided wizard that helps you write effective content.',
        pricing: 'Free to create; from $2.95/week to download',
        pros: [
          'ATS-tested template designs',
          'Guided content creation with tips',
          'Clean professional output',
        ],
        cons: [
          'Payment required for PDF download',
          'Less creative control than Canva',
          'Weekly pricing model',
        ],
      },
      {
        name: 'Novoresume',
        url: 'https://novoresume.com',
        description:
          'A design-forward resume builder that balances visual appeal with ATS compatibility better than Canva. Popular for its modern aesthetic.',
        pricing: 'Free tier; Premium from $19.99/month',
        pros: [
          'Modern designs with ATS compatibility',
          'Drag-and-drop customization',
          'Color themes and font choices',
        ],
        cons: [
          'Free tier limited to one template',
          'Premium pricing is quite high',
          'Some templates still have ATS issues',
        ],
      },
      {
        name: 'FlowCV',
        url: 'https://flowcv.io',
        description:
          'A free resume builder with clean, ATS-friendly templates and visual customization options that bridge the gap between design and compatibility.',
        pricing: 'Free; Pro from $19/month',
        pros: [
          'Free PDF downloads with clean layouts',
          'Good balance of design and ATS compatibility',
          'Color and font customization available for free',
        ],
        cons: [
          'Fewer creative options than Canva',
          'Requires account creation',
          'No AI content features on free tier',
        ],
      },
      {
        name: 'Standard Resume',
        url: 'https://standardresume.co',
        description:
          'A minimalist resume builder that produces perfectly ATS-compatible documents. Ideal for professionals in tech and corporate fields.',
        pricing: 'Free tier; Pro from $8/month',
        pros: [
          'Near-perfect ATS compatibility',
          'Clean, professional typography',
          'Distraction-free editing experience',
        ],
        cons: [
          'Very limited template variety',
          'Minimal visual customization',
          'Not suitable for creative fields',
        ],
      },
    ],
  },
  'best-free-resume-builders': {
    title: 'Best Free Resume Builders in 2026',
    metaDescription:
      'The best truly free resume builders in 2026. No hidden fees, no paywalls on downloads. Build and export professional resumes for free.',
    keywords: [
      'best free resume builder',
      'free resume builder no cost',
      'completely free resume builder',
      'free resume maker',
    ],
    intro:
      'Finding a genuinely free resume builder is harder than it should be. Many tools advertise as "free" but lock PDF downloads, templates, or essential features behind paywalls. We tested dozens of resume builders to find the ones that are actually, truly free -- no hidden fees, no watermarks, no surprise charges at the export step.',
    whyLookForAlternatives:
      'Most "free" resume builders are free to use but not free to export. You invest time building your resume only to discover you need to pay $5-$25 to download it as a PDF. Truly free options exist, and they have matured significantly in recent years. You should not have to pay to apply for a job.',
    whatToLookFor: [
      'Free PDF download without watermarks',
      'No mandatory paid plan or trial expiration',
      'Professional-quality template designs',
      'No sign-up required (or at least optional)',
      'No hidden costs for essential features',
      'ATS-friendly output format',
    ],
    alternatives: [
      {
        name: 'Magic Resume',
        url: '/',
        description:
          'A 100% free, open-source resume builder. Every feature is free including AI writing, PDF import, real-time preview, and PDF export. No sign-up needed and all data stays in your browser.',
        pricing: 'Free forever -- no paid tier exists',
        pros: [
          'Every feature is free: AI writing, PDF import, export',
          'No sign-up or account creation whatsoever',
          'Privacy-first: data never leaves your browser',
          'Open source for full transparency',
          'Professional templates with real-time preview',
          'AI-powered content polish at no cost',
        ],
        cons: [
          'No cloud sync (data is browser-local)',
          'Template library is still growing',
          'Newer platform with a smaller user base',
        ],
      },
      {
        name: 'FlowCV',
        url: 'https://flowcv.io',
        description:
          'One of the few established resume builders with genuinely free PDF downloads. Offers a good selection of templates and customization on the free tier.',
        pricing: 'Free; Pro from $19/month for extras',
        pros: [
          'Free PDF downloads without watermarks',
          'Multiple templates available for free',
          'Color and font customization on free tier',
        ],
        cons: [
          'Requires account creation',
          'AI features require paid plan',
          'Some premium templates locked',
        ],
      },
      {
        name: 'Reactive Resume',
        url: 'https://rxresu.me',
        description:
          'A completely free, open-source resume builder. Can be self-hosted for maximum control. All features available without payment.',
        pricing: 'Free and open source',
        pros: [
          'All features free with no paid tier',
          'Open source and self-hostable',
          'Good template variety and customization',
        ],
        cons: [
          'Requires account creation on hosted version',
          'Interface less polished than commercial tools',
          'Self-hosting needs technical skill',
        ],
      },
      {
        name: 'Indeed Resume Builder',
        url: 'https://indeed.com/create-resume',
        description:
          'A straightforward free resume builder from Indeed. Best for creating quick resumes to apply to jobs directly through the Indeed platform.',
        pricing: 'Free',
        pros: [
          'Completely free with no paywalls',
          'Direct Indeed job application integration',
          'Very quick and simple to use',
        ],
        cons: [
          'Extremely basic template options',
          'Minimal formatting control',
          'Data tied to Indeed account',
        ],
      },
      {
        name: 'LinkedIn Resume Builder',
        url: 'https://linkedin.com',
        description:
          'LinkedIn lets you export your profile as a resume-formatted PDF. Free for all LinkedIn users, though the output is basic.',
        pricing: 'Free (with LinkedIn account)',
        pros: [
          'One-click export from existing LinkedIn profile',
          'No additional account needed if you have LinkedIn',
          'Good for quick applications',
        ],
        cons: [
          'Very limited formatting and design',
          'Output is generic LinkedIn format',
          'Cannot customize layout or template',
        ],
      },
      {
        name: 'Canva (Free Tier)',
        url: 'https://canva.com',
        description:
          'Canva offers many free resume templates with its free plan. Good creative options though not all designs are ATS-friendly.',
        pricing: 'Free; Canva Pro from $12.99/month',
        pros: [
          'Many free template options available',
          'Full creative control over design',
          'Free PDF export',
        ],
        cons: [
          'Many templates not ATS-compatible',
          'Best templates require Pro subscription',
          'Not built specifically for resumes',
        ],
      },
      {
        name: 'Google Docs Resume Templates',
        url: 'https://docs.google.com/document/u/0/?ftv=1&tgif=c',
        description:
          'Free resume templates built into Google Docs. Basic but reliable and always free. Good for simple, clean resumes.',
        pricing: 'Free (with Google account)',
        pros: [
          'Completely free with no restrictions',
          'Familiar editing interface',
          'Easy sharing and collaboration',
        ],
        cons: [
          'Very basic templates and designs',
          'No resume-specific features or guidance',
          'Requires manual formatting work',
        ],
      },
    ],
  },
  'best-ai-resume-builders': {
    title: 'Best AI Resume Builders in 2026',
    metaDescription:
      'Compare the best AI-powered resume builders in 2026. Find tools that use AI to write, optimize, and tailor your resume for each job application.',
    keywords: [
      'best ai resume builder',
      'ai resume writer',
      'ai powered resume builder',
      'resume builder with ai',
    ],
    intro:
      'AI is transforming how people write resumes. Instead of staring at a blank page, AI resume builders can generate bullet points, polish your language, optimize for keywords, and even tailor your resume to specific job descriptions. Here are the best AI-powered resume builders available today.',
    whyLookForAlternatives:
      'Writing effective resume content is the hardest part of the resume building process. Generic templates do not help you articulate your experience. AI-powered tools can suggest impactful bullet points, quantify achievements, and ensure your language matches what recruiters and ATS systems look for. The quality of AI features varies greatly between platforms, and many charge premium prices for basic AI capabilities.',
    whatToLookFor: [
      'AI content generation for bullet points and summaries',
      'Job description keyword matching',
      'Tone and language polish',
      'AI-powered content suggestions based on your role',
      'Free or affordable AI features',
      'High-quality output that sounds natural, not robotic',
    ],
    alternatives: [
      {
        name: 'Magic Resume',
        url: '/',
        description:
          'A free resume builder with built-in AI writing assistance. The AI can polish your bullet points, improve language, and enhance your content -- all completely free with no usage limits.',
        pricing: 'Free forever (AI features included)',
        pros: [
          'AI writing polish included free with no usage caps',
          'Natural-sounding AI output that avoids generic phrasing',
          'PDF import with AI-powered data extraction',
          'No sign-up or payment for AI features',
          'Real-time preview as you edit',
          'Privacy-first: data stays in your browser',
        ],
        cons: [
          'AI tailoring to specific job descriptions is still evolving',
          'No built-in job description analyzer yet',
          'Newer platform with developing AI capabilities',
        ],
      },
      {
        name: 'Teal',
        url: 'https://tealhq.com',
        description:
          'A job search platform with AI resume building, job tracking, and resume tailoring. Strong AI features for matching resumes to job descriptions.',
        pricing: 'Free tier; Teal+ from $9/week',
        pros: [
          'AI resume tailoring to specific job descriptions',
          'Integrated job tracking and application management',
          'Resume scoring against job postings',
        ],
        cons: [
          'Best AI features require paid subscription',
          'Weekly pricing adds up for extended job searches',
          'More complex than a simple resume builder',
        ],
      },
      {
        name: 'Kickresume',
        url: 'https://kickresume.com',
        description:
          'A resume builder with GPT-powered AI writing that generates full resume sections from minimal input. One of the early adopters of AI in resume building.',
        pricing: 'Free tier; Premium from $19/month',
        pros: [
          'Strong AI content generation for entire sections',
          'Large template library with modern designs',
          'Cover letter AI generation included',
        ],
        cons: [
          'AI generation limited on free tier',
          'Premium pricing is relatively high',
          'AI output sometimes needs significant editing',
        ],
      },
      {
        name: 'Rezi',
        url: 'https://rezi.ai',
        description:
          'An AI-focused resume builder built specifically around AI content optimization. Features keyword targeting and ATS scoring.',
        pricing: 'Free tier; Pro from $29/month',
        pros: [
          'AI keyword optimization for ATS',
          'AI-generated bullet points based on job titles',
          'Built-in ATS resume scoring',
        ],
        cons: [
          'Free tier is very limited',
          'One of the more expensive options',
          'Interface can feel cluttered',
        ],
      },
      {
        name: 'Zety',
        url: 'https://zety.com',
        description:
          'A popular resume builder with content suggestion features. While not marketed as "AI," its contextual suggestions function similarly to help users write better content.',
        pricing: 'Free to create; $2.70/month to download (14-day trial)',
        pros: [
          'Contextual content suggestions per role and industry',
          'Large library of pre-written phrases',
          'Step-by-step guided experience',
        ],
        cons: [
          'Content suggestions are template-based, not true AI',
          'Requires payment to download',
          'Subscription auto-renews',
        ],
      },
      {
        name: 'Resume Worded',
        url: 'https://resumeworded.com',
        description:
          'An AI-powered resume review tool that scores your resume and provides specific feedback. More of a reviewer than a builder, but pairs well with any builder.',
        pricing: 'Free scoring; Pro from $19/month',
        pros: [
          'Detailed AI-powered resume scoring and feedback',
          'Specific line-by-line improvement suggestions',
          'LinkedIn profile review included',
        ],
        cons: [
          'Not a full resume builder -- just a reviewer',
          'Best features require Pro subscription',
          'Feedback can be generic for niche roles',
        ],
      },
    ],
  },
  'resume-builders-no-sign-up': {
    title: 'Best Resume Builders Without Sign-Up (2026)',
    metaDescription:
      'Build a professional resume without creating an account. The best resume builders that require no sign-up, no email, no registration.',
    keywords: [
      'resume builder no sign up',
      'resume builder without account',
      'no registration resume builder',
      'resume maker no login',
    ],
    intro:
      'You should not need to hand over your email address just to build a resume. Many resume builders require account creation as a way to collect your contact information for marketing. If you just want to build a resume quickly and privately, these tools let you get started immediately -- no sign-up forms, no email verification, no passwords.',
    whyLookForAlternatives:
      'Account creation is a friction point. You get email marketing, password management hassles, and your personal data stored on yet another server. For something as sensitive as a resume -- which contains your full name, work history, education, and sometimes your address -- requiring account creation also creates unnecessary privacy risk.',
    whatToLookFor: [
      'No account creation or email required to start',
      'No registration wall before exporting',
      'Ability to save and resume your work',
      'Professional-quality templates',
      'Free PDF export without login gate',
      'Minimal data collection overall',
    ],
    alternatives: [
      {
        name: 'Magic Resume',
        url: '/',
        description:
          'A completely free resume builder that requires zero sign-up. Start building immediately, and your data is saved locally in your browser. Export to PDF anytime -- no email or account required.',
        pricing: 'Free forever (all features included)',
        pros: [
          'Absolutely no sign-up, email, or account needed',
          'Start building your resume in seconds',
          'All features including AI and PDF export -- no login gate',
          'Data saved locally in your browser automatically',
          'Import existing PDF resumes without registration',
          'Open source and privacy-first by design',
        ],
        cons: [
          'No cloud sync (data is in your browser only)',
          'Clearing browser data will remove saved resumes',
          'No account means no cross-device access',
        ],
      },
      {
        name: 'Resume.com',
        url: 'https://resume.com',
        description:
          'A free resume builder (owned by Indeed) that offers a quick start experience. While it does eventually ask for sign-in, you can explore templates first.',
        pricing: 'Free',
        pros: [
          'Quick start with minimal friction',
          'Free PDF downloads',
          'Simple, straightforward templates',
        ],
        cons: [
          'Eventually requires sign-in to save and export',
          'Very basic template designs',
          'Limited customization options',
        ],
      },
      {
        name: 'Canva',
        url: 'https://canva.com',
        description:
          'While Canva technically requires an account, you can sign in with Google quickly. The friction is minimal compared to dedicated resume builders.',
        pricing: 'Free; Canva Pro from $12.99/month',
        pros: [
          'Quick Google sign-in option',
          'Large variety of free templates',
          'Full design customization',
        ],
        cons: [
          'Does require account creation (Google sign-in)',
          'Many templates are not ATS-friendly',
          'Not a dedicated resume tool',
        ],
      },
      {
        name: 'Google Docs',
        url: 'https://docs.google.com',
        description:
          'If you already have a Google account, Google Docs resume templates require no additional sign-up. Templates are basic but functional.',
        pricing: 'Free (with Google account)',
        pros: [
          'No additional sign-up if you have Google',
          'Completely free with no restrictions',
          'Easy PDF export',
        ],
        cons: [
          'Requires a Google account',
          'Very basic resume templates',
          'No resume-specific features',
        ],
      },
      {
        name: 'FlowCV',
        url: 'https://flowcv.io',
        description:
          'While FlowCV does require a free account, registration is quick and the free tier is very generous. Worth the minor sign-up for the features.',
        pricing: 'Free; Pro from $19/month',
        pros: [
          'Quick registration process',
          'Free PDF downloads after sign-up',
          'Good template selection',
        ],
        cons: [
          'Does require account creation',
          'Email marketing after registration',
          'Some features locked behind Pro plan',
        ],
      },
    ],
  },
  'open-source-resume-builders': {
    title: 'Best Open Source Resume Builders (2026)',
    metaDescription:
      'Discover the best open-source resume builders in 2026. Free, transparent, and community-driven tools you can self-host or use online.',
    keywords: [
      'open source resume builder',
      'free open source cv builder',
      'self hosted resume builder',
      'github resume builder',
    ],
    intro:
      'Open-source resume builders give you something proprietary tools cannot: transparency and control. You can inspect the code, verify that your data is handled responsibly, customize the tool to your needs, and even self-host it. For developers, privacy advocates, and anyone who values transparency, open source is the way to go.',
    whyLookForAlternatives:
      'Proprietary resume builders are black boxes. You do not know what happens to your data, how it is stored, or who can access it. They can change pricing, remove features, or shut down without notice. Open-source alternatives give you code transparency, community-driven development, no vendor lock-in, and often better privacy practices by default.',
    whatToLookFor: [
      'Active development and recent updates on GitHub',
      'Self-hosting option for full data control',
      'Good documentation and community support',
      'Modern, professional template designs',
      'Easy setup for non-technical users (hosted version)',
      'Permissive open-source license',
    ],
    alternatives: [
      {
        name: 'Magic Resume',
        url: '/',
        description:
          'An open-source resume builder with AI writing, PDF import, and real-time preview. Runs entirely in the browser with no server-side data storage. Full source code available on GitHub.',
        pricing: 'Free and open source (MIT license)',
        pros: [
          'Fully open source with code on GitHub',
          'AI writing features included free',
          'No server-side data storage -- fully client-side',
          'No sign-up required to use',
          'PDF import with AI extraction',
          'Modern Next.js stack, easy to contribute to',
        ],
        cons: [
          'Client-side only -- no self-hosted server option',
          'Template library is still growing',
          'Smaller community compared to older projects',
        ],
      },
      {
        name: 'Reactive Resume',
        url: 'https://rxresu.me',
        description:
          'One of the most popular open-source resume builders on GitHub. Offers a polished interface, many templates, and a self-hosting option via Docker.',
        pricing: 'Free and open source',
        pros: [
          'Large GitHub community and active development',
          'Easy self-hosting with Docker',
          'Many templates and extensive customization',
        ],
        cons: [
          'Hosted version requires account creation',
          'Self-hosting requires Docker knowledge',
          'Can be resource-heavy when self-hosted',
        ],
      },
      {
        name: 'OpenResume',
        url: 'https://open-resume.com',
        description:
          'A simple, clean open-source resume builder built with React. Focuses on ease of use and ATS-friendly output.',
        pricing: 'Free and open source',
        pros: [
          'Simple and focused on one thing: building resumes',
          'ATS-friendly output',
          'Clean React codebase, easy to understand',
        ],
        cons: [
          'Limited template options',
          'Fewer features than more mature projects',
          'Smaller community',
        ],
      },
      {
        name: 'Resumake',
        url: 'https://resumake.io',
        description:
          'An open-source resume generator that creates resumes from LaTeX templates. Ideal for developers and academics who prefer LaTeX formatting.',
        pricing: 'Free and open source',
        pros: [
          'LaTeX-based output for precise formatting',
          'Multiple LaTeX template styles',
          'No account required',
        ],
        cons: [
          'LaTeX output may not suit all users',
          'Less intuitive for non-technical users',
          'Development has slowed in recent years',
        ],
      },
      {
        name: 'HackMyResume',
        url: 'https://github.com/hacksalot/HackMyResume',
        description:
          'A command-line resume builder for developers who prefer working in the terminal. Uses JSON Resume format and supports multiple output formats.',
        pricing: 'Free and open source',
        pros: [
          'CLI-based workflow for developers',
          'JSON Resume standard format',
          'Multiple output formats: PDF, HTML, Markdown',
        ],
        cons: [
          'Command-line only -- no GUI',
          'Not maintained actively',
          'Steep learning curve for non-developers',
        ],
      },
      {
        name: 'JSON Resume',
        url: 'https://jsonresume.org',
        description:
          'An open standard for resume data in JSON format, with a registry of community-built themes. More of a standard and ecosystem than a single tool.',
        pricing: 'Free and open source',
        pros: [
          'Open standard -- not locked to any tool',
          'Large ecosystem of community themes',
          'Portable data format',
        ],
        cons: [
          'Requires technical knowledge to use directly',
          'No visual editor -- you edit JSON',
          'Theme quality varies widely',
        ],
      },
    ],
  },
  'privacy-first-resume-builders': {
    title: 'Best Privacy-First Resume Builders (2026)',
    metaDescription:
      'Resume builders that protect your personal data. Find privacy-focused resume tools that keep your information secure and under your control.',
    keywords: [
      'privacy first resume builder',
      'private resume builder',
      'resume builder data privacy',
      'secure resume builder',
    ],
    intro:
      'Your resume contains some of your most sensitive personal information: full name, work history, education, skills, and sometimes your home address and phone number. Most resume builders upload all of this to their servers, and their privacy policies often allow broad use of your data. These privacy-first alternatives keep your information under your control.',
    whyLookForAlternatives:
      'Many resume builders store your personal data on their servers, share it with third-party analytics, and use vague privacy policies that allow them to use your data for marketing or AI training. Data breaches at resume sites have exposed millions of resumes. If you value your privacy, you need a tool that minimizes or eliminates server-side data storage.',
    whatToLookFor: [
      'Client-side processing (data never sent to servers)',
      'Local storage instead of cloud databases',
      'No account creation required',
      'Transparent privacy policy',
      'Open-source code for verification',
      'No third-party tracking or analytics',
    ],
    alternatives: [
      {
        name: 'Magic Resume',
        url: '/',
        description:
          'Built from the ground up with privacy as a core principle. All resume data is stored locally in your browser using local storage. No data is ever sent to or stored on any server. No account needed.',
        pricing: 'Free forever (all features included)',
        pros: [
          'All data stored locally in your browser -- never sent to servers',
          'No account creation, email, or personal data collected',
          'Open source -- verify the privacy claims yourself',
          'AI features use minimal data transmission',
          'No third-party tracking scripts',
          'Data can be deleted by clearing browser storage',
        ],
        cons: [
          'No cloud backup option (local-only storage)',
          'Clearing browser data removes your resume',
          'No cross-device sync without manual export/import',
        ],
      },
      {
        name: 'Reactive Resume',
        url: 'https://rxresu.me',
        description:
          'An open-source resume builder that can be self-hosted, giving you complete control over where your data lives. The most private option for technical users.',
        pricing: 'Free and open source',
        pros: [
          'Self-hosting option for complete data control',
          'Open source -- audit the code yourself',
          'No data shared with third parties when self-hosted',
        ],
        cons: [
          'Hosted version stores data on their servers',
          'Self-hosting requires technical knowledge',
          'Account creation needed for hosted version',
        ],
      },
      {
        name: 'OpenResume',
        url: 'https://open-resume.com',
        description:
          'A simple open-source resume builder that processes everything client-side. Your resume data stays in your browser.',
        pricing: 'Free and open source',
        pros: [
          'Client-side processing for privacy',
          'Open source and verifiable',
          'No account or sign-up needed',
        ],
        cons: [
          'Limited features compared to full-featured builders',
          'Basic template options',
          'Smaller development community',
        ],
      },
      {
        name: 'Google Docs (with precautions)',
        url: 'https://docs.google.com',
        description:
          'While Google collects data broadly, Google Docs offers encrypted storage and you control sharing. Better privacy than many dedicated resume builders.',
        pricing: 'Free (with Google account)',
        pros: [
          'Encrypted storage with access controls',
          'You control who can view your documents',
          'No resume-specific data sharing with third parties',
        ],
        cons: [
          'Google collects usage data broadly',
          'Requires Google account with associated tracking',
          'Not specifically designed for resume privacy',
        ],
      },
      {
        name: 'LaTeX Resume (Overleaf or local)',
        url: 'https://overleaf.com',
        description:
          'Building a resume in LaTeX and compiling locally is one of the most private options. No web service ever sees your data. Overleaf is an online option for those less comfortable with local setup.',
        pricing: 'Free (local); Overleaf free or from $15/month',
        pros: [
          'Local compilation means data never leaves your computer',
          'Complete control over output format',
          'Professional academic and technical templates',
        ],
        cons: [
          'Steep learning curve for LaTeX',
          'Not practical for non-technical users',
          'Overleaf hosted version stores data on their servers',
        ],
      },
      {
        name: 'FlowCV',
        url: 'https://flowcv.io',
        description:
          'While not fully privacy-first, FlowCV has a cleaner privacy approach than many competitors with straightforward data handling.',
        pricing: 'Free; Pro from $19/month',
        pros: [
          'Relatively clean privacy policy',
          'Free PDF downloads',
          'Good template selection',
        ],
        cons: [
          'Data stored on their servers',
          'Account creation required',
          'Not open source -- cannot verify claims',
        ],
      },
    ],
  },
};

function getAllAlternativeSlugs(): string[] {
  return Object.keys(alternativesData);
}

function getAlternativeBySlug(slug: string): AlternativePageData | undefined {
  return alternativesData[slug];
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllAlternativeSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getAlternativeBySlug(slug);
  if (!data) return {};

  return {
    title: data.title,
    description: data.metaDescription,
    keywords: data.keywords,
    alternates: { canonical: `/alternatives/${slug}` },
  };
}

export default async function AlternativePage({ params }: Props) {
  const { slug } = await params;
  const data = getAlternativeBySlug(slug);
  if (!data) notFound();

  const pageTitle = data.title.replace(/\s*\(2026\)$/, '');

  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Home', url: '/' },
            { name: 'Alternatives', url: '/alternatives' },
            { name: pageTitle, url: `/alternatives/${slug}` },
          ]),
        ]}
      />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-muted/30 py-12">
          <div className="container mx-auto max-w-3xl px-4">
            <Link
              href="/alternatives"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              All Alternatives
            </Link>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              {data.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{data.intro}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Last updated: February 2026
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto max-w-3xl px-4 space-y-12">
            {/* Why People Look for Alternatives */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Why People Look for Alternatives
              </h2>
              <p className="text-muted-foreground">
                {data.whyLookForAlternatives}
              </p>
            </div>

            {/* What to Look For */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                What to Look For
              </h2>
              <ul className="space-y-2">
                {data.whatToLookFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Alternatives */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                The Alternatives
              </h2>
              <div className="space-y-8">
                {data.alternatives.map((alt, index) => (
                  <div
                    key={alt.name}
                    className={`rounded-lg border p-6 ${
                      index === 0
                        ? 'border-primary/40 bg-primary/5'
                        : 'border-border'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-xl font-semibold">
                          <span className="text-muted-foreground mr-2">
                            {index + 1}.
                          </span>
                          {alt.name}
                          {index === 0 && (
                            <span className="ml-2 inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                              Our Pick
                            </span>
                          )}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {alt.pricing}
                        </p>
                      </div>
                      <Link
                        href={alt.url}
                        target={alt.url.startsWith('http') ? '_blank' : undefined}
                        rel={
                          alt.url.startsWith('http')
                            ? 'noopener noreferrer'
                            : undefined
                        }
                        className="shrink-0 text-sm font-medium text-primary hover:underline"
                      >
                        Visit
                      </Link>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {alt.description}
                    </p>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Pros</h4>
                        <ul className="space-y-1.5">
                          {alt.pros.map((pro) => (
                            <li
                              key={pro}
                              className="flex items-start gap-2 text-sm"
                            >
                              <Check className="h-3.5 w-3.5 text-green-500 mt-0.5 shrink-0" />
                              <span className="text-muted-foreground">
                                {pro}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Cons</h4>
                        <ul className="space-y-1.5">
                          {alt.cons.map((con) => (
                            <li
                              key={con}
                              className="flex items-start gap-2 text-sm"
                            >
                              <X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />
                              <span className="text-muted-foreground">
                                {con}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Comparison Table */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Quick Comparison Table
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-3 px-3 text-left font-semibold">
                        Tool
                      </th>
                      <th className="py-3 px-3 text-left font-semibold">
                        Pricing
                      </th>
                      <th className="py-3 px-3 text-center font-semibold">
                        Free Export
                      </th>
                      <th className="py-3 px-3 text-center font-semibold">
                        No Sign-Up
                      </th>
                      <th className="py-3 px-3 text-center font-semibold">
                        AI Features
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.alternatives.map((alt, index) => (
                      <tr
                        key={alt.name}
                        className={`border-b border-border/50 ${
                          index === 0 ? 'bg-primary/5' : ''
                        }`}
                      >
                        <td className="py-3 px-3 font-medium">
                          {alt.name}
                          {index === 0 && (
                            <span className="ml-1.5 text-xs text-primary">
                              *
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-3 text-muted-foreground">
                          {alt.pricing.split('(')[0].trim().split(';')[0].trim()}
                        </td>
                        <td className="py-3 px-3 text-center">
                          <ComparisonIcon
                            value={inferFreeExport(alt)}
                          />
                        </td>
                        <td className="py-3 px-3 text-center">
                          <ComparisonIcon
                            value={inferNoSignUp(alt)}
                          />
                        </td>
                        <td className="py-3 px-3 text-center">
                          <ComparisonIcon
                            value={inferAIFeatures(alt)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                * Our recommendation
              </p>
            </div>

            {/* CTA */}
            <div className="rounded-lg border border-border bg-muted/30 p-8 text-center">
              <h3 className="text-xl font-semibold">
                Try Magic Resume Free
              </h3>
              <p className="mt-2 text-muted-foreground">
                No sign-up, no payment, no catches. Start building your
                professional resume right now.
              </p>
              <Button asChild size="lg" className="mt-4 rounded-full px-8">
                <Link href="/editor">
                  Create Your Resume Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function ComparisonIcon({ value }: { value: 'yes' | 'no' | 'partial' }) {
  if (value === 'yes') return <Check className="h-4 w-4 text-green-500 mx-auto" />;
  if (value === 'no') return <X className="h-4 w-4 text-red-400 mx-auto" />;
  return <Minus className="h-4 w-4 text-yellow-500 mx-auto" />;
}

function inferFreeExport(alt: Alternative): 'yes' | 'no' | 'partial' {
  const pricingLower = alt.pricing.toLowerCase();
  const prosText = alt.pros.join(' ').toLowerCase();
  const consText = alt.cons.join(' ').toLowerCase();

  if (
    prosText.includes('free pdf') ||
    prosText.includes('free export') ||
    prosText.includes('completely free') ||
    prosText.includes('100% free') ||
    prosText.includes('every feature is free') ||
    prosText.includes('all features free') ||
    prosText.includes('all features completely free') ||
    pricingLower.includes('free forever') ||
    pricingLower === 'free' ||
    pricingLower.includes('free and open source')
  ) {
    return 'yes';
  }

  if (
    consText.includes('requires payment') ||
    consText.includes('payment required') ||
    pricingLower.includes('to download')
  ) {
    return 'no';
  }

  return 'partial';
}

function inferNoSignUp(alt: Alternative): 'yes' | 'no' | 'partial' {
  const prosText = alt.pros.join(' ').toLowerCase();
  const consText = alt.cons.join(' ').toLowerCase();

  if (
    prosText.includes('no sign-up') ||
    prosText.includes('no account') ||
    prosText.includes('no registration') ||
    prosText.includes('no sign up')
  ) {
    return 'yes';
  }

  if (
    consText.includes('requires account') ||
    consText.includes('account creation') ||
    consText.includes('requires sign-in') ||
    consText.includes('requires google') ||
    consText.includes('google account') ||
    prosText.includes('quick google sign-in')
  ) {
    return 'no';
  }

  return 'partial';
}

function inferAIFeatures(alt: Alternative): 'yes' | 'no' | 'partial' {
  const prosText = alt.pros.join(' ').toLowerCase();
  const consText = alt.cons.join(' ').toLowerCase();
  const descLower = alt.description.toLowerCase();

  if (
    prosText.includes('ai') ||
    descLower.includes('ai-powered') ||
    descLower.includes('ai writing') ||
    descLower.includes('ai content') ||
    descLower.includes('gpt')
  ) {
    if (consText.includes('ai features require paid') || consText.includes('ai generation limited')) {
      return 'partial';
    }
    return 'yes';
  }

  if (
    consText.includes('no ai') ||
    prosText.includes('content suggestion')
  ) {
    return 'partial';
  }

  return 'no';
}
