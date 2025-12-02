const FALLBACK_SITE_URL = 'https://magik-resume.dev';

const resolvedSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, '') ||
  FALLBACK_SITE_URL;

const toUrl = (value: string) => {
  try {
    return new URL(value);
  } catch {
    return new URL(FALLBACK_SITE_URL);
  }
};

export const siteUrl = resolvedSiteUrl;
export const metadataBase = toUrl(resolvedSiteUrl);

export const siteMetadata = {
  name: 'Magic Resume',
  title: 'CV Builder - Create Professional Resumes in Minutes',
  description:
    'Create stunning, professional resumes with our intuitive editor. Import existing PDF resumes, see changes in real-time, polish content with AI, and export anywhere.',
  keywords: [
    'CV builder',
    'resume builder',
    'AI resume',
    'online resume',
    'PDF resume',
    'cover letter',
    'curriculum vitae',
    'free resume builder',
    'AI resume writer',
    'professional resume maker',
    'resume creator online',
    'CV maker with AI',
    'build resume fast',
    'create CV quickly',
    'resume writing help',
    'professional CV template',
    'resume with live preview',
    'AI-powered resume',
    'export resume to PDF',
    'resume editor online',
    'curriculum vitae builder',
    'résumé builder',
    'CV creator',
    'job application resume',
    'import PDF resume',
    'PDF to resume converter',
    'upload PDF CV',
    'convert PDF to editable resume',
    'resume PDF importer',
    'PDF resume parser',
  ],
  ogImage: '/opengraph-image',
};

export type JsonLd = Record<string, unknown>;

export const organizationJsonLd = (sameAs: string[] = []): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteMetadata.name,
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  ...(sameAs.length ? { sameAs } : {}),
});

export const faqJsonLd = (
  faqs: Array<{ question: string; answer: string }>
): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const staticRoutes = ['/', '/editor'];
