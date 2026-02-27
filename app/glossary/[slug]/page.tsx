import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { JsonLd } from '@/components/seo/json-ld';
import { breadcrumbJsonLd } from '@/lib/seo';
import { Button } from '@/components/ui/button';
import {
  getTermBySlug,
  getAllTermSlugs,
  glossaryTerms,
} from '@/data/glossary-terms';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllTermSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const term = getTermBySlug(slug);
  if (!term) return {};

  return {
    title: `What is ${term.term}? — Resume & Career Glossary`,
    description: term.shortDefinition,
    keywords: [
      `what is ${term.term.toLowerCase()}`,
      `${term.term.toLowerCase()} definition`,
      `${term.term.toLowerCase()} meaning`,
      `${term.term.toLowerCase()} resume`,
    ],
    alternates: { canonical: `/glossary/${slug}` },
  };
}

export default async function GlossaryTermPage({ params }: Props) {
  const { slug } = await params;
  const term = getTermBySlug(slug);
  if (!term) notFound();

  const relatedTerms = term.relatedTerms
    .map((rs) => glossaryTerms.find((t) => t.slug === rs))
    .filter(Boolean);

  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'DefinedTerm',
            name: term.term,
            description: term.shortDefinition,
            inDefinedTermSet: {
              '@type': 'DefinedTermSet',
              name: 'Resume & Career Glossary',
            },
          },
          breadcrumbJsonLd([
            { name: 'Home', url: '/' },
            { name: 'Glossary', url: '/glossary' },
            { name: term.term, url: `/glossary/${slug}` },
          ]),
        ]}
      />
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-muted/30 py-12">
          <div className="container mx-auto max-w-3xl px-4">
            <Link
              href="/glossary"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Glossary
            </Link>
            <p className="text-sm font-medium text-primary">{term.category}</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              What is {term.term}?
            </h1>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto max-w-3xl px-4 space-y-8">
            {/* Short Definition */}
            <div className="rounded-lg border border-border bg-muted/20 p-5">
              <p className="text-lg leading-relaxed">{term.shortDefinition}</p>
            </div>

            {/* Full Definition */}
            <div>
              <h2 className="text-2xl font-bold mb-3">
                {term.term} Explained
              </h2>
              {term.fullDefinition.split('\n\n').map((para, i) => (
                <p
                  key={i}
                  className="mt-3 text-muted-foreground leading-7"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Example */}
            <div>
              <h2 className="text-2xl font-bold mb-3">Example</h2>
              <div className="rounded-lg border border-border bg-muted/20 p-5">
                <p className="text-muted-foreground leading-relaxed">
                  {term.example}
                </p>
              </div>
            </div>

            {/* Resume Tip */}
            <div>
              <h2 className="text-2xl font-bold mb-3">
                How This Relates to Your Resume
              </h2>
              <p className="text-muted-foreground leading-7">
                {term.resumeTip}
              </p>
            </div>

            {/* CTA */}
            <div className="rounded-lg border border-border bg-muted/30 p-8 text-center">
              <h3 className="text-xl font-semibold">
                Build Your Resume Now
              </h3>
              <p className="mt-2 text-muted-foreground">
                Apply what you&apos;ve learned with Magic Resume&apos;s free
                AI-powered editor. No sign-up required.
              </p>
              <Button asChild size="lg" className="mt-4 rounded-full px-8">
                <Link href="/editor">
                  Create Your Resume Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Related Terms */}
            {relatedTerms.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Related Terms</h2>
                <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                  {relatedTerms.map(
                    (rt) =>
                      rt && (
                        <Link
                          key={rt.slug}
                          href={`/glossary/${rt.slug}`}
                          className="group rounded-lg border border-border p-3 transition-colors hover:border-foreground/20"
                        >
                          <span className="text-sm font-medium group-hover:text-primary">
                            {rt.term}
                          </span>
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
