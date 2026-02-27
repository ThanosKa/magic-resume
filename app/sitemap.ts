import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/seo';
import { getAllPostSlugs } from '@/lib/blog';
import { getAllJobTitleSlugs } from '@/data/job-titles';
import { getAllTemplateSlugs } from '@/data/resume-templates';
import { getAllCompetitorSlugs } from '@/data/competitors';
import { getAllTermSlugs } from '@/data/glossary-terms';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // ── Static hub pages ──────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${siteUrl}/resume-examples`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteUrl}/resume-templates`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteUrl}/tools`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/tools/resume-checker`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/compare`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/alternatives`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/glossary`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${siteUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${siteUrl}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${siteUrl}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  // ── Blog posts ────────────────────────────────────────────────────────
  const blogPages: MetadataRoute.Sitemap = getAllPostSlugs().map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // ── Resume examples (job titles) ─────────────────────────────────────
  const resumeExamplePages: MetadataRoute.Sitemap = getAllJobTitleSlugs().map((slug) => ({
    url: `${siteUrl}/resume-examples/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // ── Resume templates ──────────────────────────────────────────────────
  const templatePages: MetadataRoute.Sitemap = getAllTemplateSlugs().map((slug) => ({
    url: `${siteUrl}/resume-templates/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // ── Competitor comparisons ────────────────────────────────────────────
  const comparePages: MetadataRoute.Sitemap = getAllCompetitorSlugs().map((slug) => ({
    url: `${siteUrl}/compare/magic-resume-vs-${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // ── Alternative pages ─────────────────────────────────────────────────
  const alternativeSlugs = [
    'resume-io-alternatives',
    'zety-alternatives',
    'novoresume-alternatives',
    'canva-resume-alternatives',
    'best-free-resume-builders',
    'best-ai-resume-builders',
    'resume-builders-no-sign-up',
    'open-source-resume-builders',
    'privacy-first-resume-builders',
  ];
  const alternativePages: MetadataRoute.Sitemap = alternativeSlugs.map((slug) => ({
    url: `${siteUrl}/alternatives/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // ── Glossary terms ────────────────────────────────────────────────────
  const glossaryPages: MetadataRoute.Sitemap = getAllTermSlugs().map((slug) => ({
    url: `${siteUrl}/glossary/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [
    ...staticPages,
    ...blogPages,
    ...resumeExamplePages,
    ...templatePages,
    ...comparePages,
    ...alternativePages,
    ...glossaryPages,
  ];
}
