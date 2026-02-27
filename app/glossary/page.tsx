import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { JsonLd } from '@/components/seo/json-ld';
import { breadcrumbJsonLd } from '@/lib/seo';
import { glossaryTerms, getTermsByCategory } from '@/data/glossary-terms';

export const metadata: Metadata = {
  title: 'Resume & Career Glossary — 100+ Terms Explained',
  description:
    'Comprehensive glossary of resume, job search, interview, and career development terms. Clear definitions with examples and resume-writing tips for each term.',
  alternates: { canonical: '/glossary' },
  keywords: [
    'resume glossary',
    'career terms',
    'resume terminology',
    'job search glossary',
    'ats meaning',
  ],
};

export default function GlossaryHub() {
  const categories = [...new Set(glossaryTerms.map((t) => t.category))];

  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Home', url: '/' },
            { name: 'Glossary', url: '/glossary' },
          ]),
        ]}
      />
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-muted/30 py-16">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Resume & Career Glossary
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {glossaryTerms.length}+ terms explained with clear definitions,
              examples, and resume-writing tips. Everything you need to know
              about resumes, job searching, and career development.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto max-w-4xl px-4">
            {categories.map((category) => {
              const terms = getTermsByCategory(category);
              return (
                <div key={category} className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">{category}</h2>
                  <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                    {terms.map((term) => (
                      <Link
                        key={term.slug}
                        href={`/glossary/${term.slug}`}
                        className="group rounded-lg border border-border p-3 transition-colors hover:border-foreground/20 hover:bg-muted/30"
                      >
                        <span className="text-sm font-medium group-hover:text-primary">
                          {term.term}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
