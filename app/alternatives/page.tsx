import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { JsonLd } from '@/components/seo/json-ld';
import { breadcrumbJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Best Resume Builder Alternatives (2026)',
  description:
    'Looking for a resume builder alternative? Compare the best free and paid resume builders including Magic Resume, Resume.io, Zety, and more.',
  alternates: { canonical: '/alternatives' },
  keywords: [
    'resume builder alternatives',
    'best free resume builders',
    'resume.io alternatives',
    'zety alternatives',
  ],
};

const alternativePages = [
  { slug: 'resume-io-alternatives', title: 'Best Resume.io Alternatives', description: 'Top alternatives to Resume.io for building professional resumes' },
  { slug: 'zety-alternatives', title: 'Best Zety Alternatives', description: 'Free and paid alternatives to Zety resume builder' },
  { slug: 'novoresume-alternatives', title: 'Best Novoresume Alternatives', description: 'Top alternatives to Novoresume for creating CVs' },
  { slug: 'canva-resume-alternatives', title: 'Best Canva Resume Alternatives', description: 'Resume builder alternatives to Canva templates' },
  { slug: 'best-free-resume-builders', title: 'Best Free Resume Builders in 2026', description: 'The top completely free resume builders with no hidden fees' },
  { slug: 'best-ai-resume-builders', title: 'Best AI Resume Builders in 2026', description: 'Resume builders with AI writing and optimization features' },
  { slug: 'resume-builders-no-sign-up', title: 'Best Resume Builders Without Sign-Up', description: 'Resume builders that don\'t require account creation' },
  { slug: 'open-source-resume-builders', title: 'Best Open Source Resume Builders', description: 'Free, open-source resume builder alternatives' },
  { slug: 'privacy-first-resume-builders', title: 'Best Privacy-First Resume Builders', description: 'Resume builders that prioritize your data privacy' },
];

export default function AlternativesHub() {
  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Home', url: '/' },
            { name: 'Alternatives', url: '/alternatives' },
          ]),
        ]}
      />
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-muted/30 py-16">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Resume Builder Alternatives
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore the best alternatives to popular resume builders.
              Honest comparisons to help you find the right tool.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="grid gap-4 sm:grid-cols-2">
              {alternativePages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/alternatives/${page.slug}`}
                  className="group flex items-center justify-between rounded-lg border border-border p-5 transition-colors hover:border-foreground/20 hover:bg-muted/30"
                >
                  <div>
                    <h2 className="font-semibold group-hover:text-primary">
                      {page.title}
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {page.description}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
