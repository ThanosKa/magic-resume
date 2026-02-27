import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check, Star } from 'lucide-react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { JsonLd } from '@/components/seo/json-ld';
import { breadcrumbJsonLd } from '@/lib/seo';
import { Button } from '@/components/ui/button';
import {
  getTemplateBySlug,
  getAllTemplateSlugs,
  resumeTemplates,
} from '@/data/resume-templates';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllTemplateSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  if (!template) return {};

  return {
    title: `Free ${template.name} (2026) — Download & Customize`,
    description: `${template.description.slice(0, 150)}. Free to use with Magic Resume's AI-powered editor. ATS score: ${template.atsScore}.`,
    keywords: [
      template.name.toLowerCase(),
      `${template.name.toLowerCase()} free`,
      `${template.name.toLowerCase()} download`,
      `${template.name.toLowerCase()} 2026`,
      `best ${template.category.toLowerCase()} resume template`,
    ],
    alternates: { canonical: `/resume-templates/${slug}` },
  };
}

export default async function TemplatePage({ params }: Props) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  if (!template) notFound();

  const relatedTemplates = template.relatedTemplates
    .map((rs) => resumeTemplates.find((t) => t.slug === rs))
    .filter(Boolean);

  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Home', url: '/' },
            { name: 'Resume Templates', url: '/resume-templates' },
            { name: template.name, url: `/resume-templates/${slug}` },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: template.faqItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          },
        ]}
      />
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border bg-muted/30 py-12">
          <div className="container mx-auto max-w-3xl px-4">
            <Link
              href="/resume-templates"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              All Templates
            </Link>
            <p className="text-sm font-medium text-primary">
              {template.category} Template
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              {template.name}
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              {template.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-3 py-1 text-sm font-medium text-green-600">
                <Star className="h-3.5 w-3.5" />
                ATS Score: {template.atsScore}
              </span>
              <span className="rounded-full bg-muted px-3 py-1 text-sm">
                {template.tone}
              </span>
            </div>
            <Button
              asChild
              size="lg"
              className="mt-6 rounded-full px-8"
            >
              <Link href="/editor">
                Use This Template Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto max-w-3xl px-4 space-y-10">
            {/* Best For */}
            <div>
              <h2 className="text-2xl font-bold mb-3">Best For</h2>
              <div className="flex flex-wrap gap-2">
                {template.bestFor.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border px-3 py-1 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold mb-3">Template Features</h2>
              <ul className="space-y-2">
                {template.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sections */}
            <div>
              <h2 className="text-2xl font-bold mb-3">Included Sections</h2>
              <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                {template.sections.map((section) => (
                  <li key={section}>{section}</li>
                ))}
              </ol>
            </div>

            {/* Tips */}
            <div>
              <h2 className="text-2xl font-bold mb-3">
                Tips for Using This Template
              </h2>
              <ul className="space-y-2">
                {template.tips.map((tip, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-muted-foreground"
                  >
                    <span className="font-semibold text-foreground shrink-0">
                      {i + 1}.
                    </span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="rounded-lg border border-border bg-muted/30 p-8 text-center">
              <h3 className="text-xl font-semibold">
                Start with the {template.name}
              </h3>
              <p className="mt-2 text-muted-foreground">
                Customize this template in minutes with Magic Resume&apos;s free
                AI-powered editor. Real-time preview, ATS optimization, and PDF
                export included.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-4 rounded-full px-8"
              >
                <Link href="/editor">
                  Create Your Resume Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {template.faqItems.map((item) => (
                  <div key={item.question}>
                    <h3 className="font-semibold">{item.question}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Templates */}
            {relatedTemplates.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Related Templates</h2>
                <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                  {relatedTemplates.map(
                    (rt) =>
                      rt && (
                        <Link
                          key={rt.slug}
                          href={`/resume-templates/${rt.slug}`}
                          className="group rounded-lg border border-border p-4 transition-colors hover:border-foreground/20"
                        >
                          <span className="text-sm font-medium group-hover:text-primary">
                            {rt.name}
                          </span>
                          <p className="mt-1 text-xs text-muted-foreground">
                            ATS Score: {rt.atsScore}
                          </p>
                        </Link>
                      )
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
