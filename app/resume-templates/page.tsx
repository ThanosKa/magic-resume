import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { JsonLd } from '@/components/seo/json-ld';
import { breadcrumbJsonLd } from '@/lib/seo';
import { Button } from '@/components/ui/button';
import { resumeTemplates } from '@/data/resume-templates';

export const metadata: Metadata = {
  title: 'Free Resume Templates (2026) — ATS-Friendly & Customizable',
  description:
    'Browse 20+ free, ATS-friendly resume templates for every career level and industry. Professional, modern, creative, and minimalist designs. Customize and download as PDF.',
  alternates: { canonical: '/resume-templates' },
  keywords: [
    'free resume templates',
    'resume templates 2026',
    'ats friendly resume templates',
    'professional resume template',
    'modern resume template',
    'simple resume template',
  ],
  openGraph: {
    title: 'Free Resume Templates (2026) — ATS-Friendly & Customizable',
    description:
      'Browse 20+ free, ATS-friendly resume templates. Customize and download as PDF instantly.',
    url: '/resume-templates',
  },
};

export default function ResumeTemplatesHub() {
  const categories = [
    ...new Set(resumeTemplates.map((t) => t.category)),
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Home', url: '/' },
            { name: 'Resume Templates', url: '/resume-templates' },
          ]),
        ]}
      />
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-muted/30 py-16">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Free Resume Templates
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose from {resumeTemplates.length}+ professionally designed,
              ATS-friendly templates. Every template is free to customize and
              download as PDF.
            </p>
            <Button asChild size="lg" className="mt-6 rounded-full px-8">
              <Link href="/editor">
                Start Building Your Resume
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto max-w-5xl px-4">
            {categories.map((category) => {
              const templates = resumeTemplates.filter(
                (t) => t.category === category
              );
              return (
                <div key={category} className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">
                    {category} Templates
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {templates.map((template) => (
                      <Link
                        key={template.slug}
                        href={`/resume-templates/${template.slug}`}
                        className="group rounded-lg border border-border p-5 transition-colors hover:border-foreground/20 hover:bg-muted/30"
                      >
                        <h3 className="font-semibold group-hover:text-primary">
                          {template.name}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                          {template.description.slice(0, 120)}...
                        </p>
                        <div className="mt-3 flex items-center gap-2">
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600">
                            <Star className="h-3 w-3" />
                            ATS: {template.atsScore}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {template.tone}
                          </span>
                        </div>
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
