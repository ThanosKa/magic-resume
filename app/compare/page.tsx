import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { JsonLd } from '@/components/seo/json-ld';
import { breadcrumbJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Compare Magic Resume vs Other Resume Builders',
  description:
    'Honest, detailed comparisons between Magic Resume and popular resume builders like Resume.io, Zety, Novoresume, and more. See features, pricing, and which is best for you.',
  alternates: { canonical: '/compare' },
  keywords: [
    'resume builder comparison',
    'magic resume vs',
    'best resume builder',
    'resume builder reviews',
  ],
};

const comparisons = [
  { slug: 'magic-resume-vs-resume-io', name: 'Magic Resume vs Resume.io', competitor: 'Resume.io' },
  { slug: 'magic-resume-vs-zety', name: 'Magic Resume vs Zety', competitor: 'Zety' },
  { slug: 'magic-resume-vs-novoresume', name: 'Magic Resume vs Novoresume', competitor: 'Novoresume' },
  { slug: 'magic-resume-vs-kickresume', name: 'Magic Resume vs Kickresume', competitor: 'Kickresume' },
  { slug: 'magic-resume-vs-enhancv', name: 'Magic Resume vs Enhancv', competitor: 'Enhancv' },
  { slug: 'magic-resume-vs-canva', name: 'Magic Resume vs Canva', competitor: 'Canva Resume' },
  { slug: 'magic-resume-vs-reactive-resume', name: 'Magic Resume vs Reactive Resume', competitor: 'Reactive Resume' },
  { slug: 'magic-resume-vs-indeed', name: 'Magic Resume vs Indeed', competitor: 'Indeed Resume' },
  { slug: 'magic-resume-vs-linkedin', name: 'Magic Resume vs LinkedIn', competitor: 'LinkedIn Resume' },
  { slug: 'magic-resume-vs-visualcv', name: 'Magic Resume vs VisualCV', competitor: 'VisualCV' },
];

export default function CompareHub() {
  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Home', url: '/' },
            { name: 'Compare', url: '/compare' },
          ]),
        ]}
      />
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-muted/30 py-16">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Compare Resume Builders
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Honest, detailed comparisons between Magic Resume and popular
              resume builders. We believe in transparency — see exactly how we
              stack up.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="grid gap-4 sm:grid-cols-2">
              {comparisons.map((comp) => (
                <Link
                  key={comp.slug}
                  href={`/compare/${comp.slug}`}
                  className="group flex items-center justify-between rounded-lg border border-border p-5 transition-colors hover:border-foreground/20 hover:bg-muted/30"
                >
                  <div>
                    <h2 className="font-semibold group-hover:text-primary">
                      {comp.name}
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Detailed comparison of features, pricing, and privacy
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary shrink-0" />
                </Link>
              ))}
            </div>

            <div className="mt-12 rounded-lg border border-border bg-muted/30 p-8 text-center">
              <h2 className="text-xl font-semibold">
                Why Compare?
              </h2>
              <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
                We believe the best way to earn your trust is to be
                transparent. Every comparison page honestly evaluates both
                products — because if Magic Resume isn&apos;t the right fit for
                you, we&apos;d rather help you find what is.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
