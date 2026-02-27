import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { JsonLd } from '@/components/seo/json-ld';
import { breadcrumbJsonLd } from '@/lib/seo';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Resume Examples for Every Job Title (2026)',
  description:
    'Browse 200+ free resume examples organized by job title and industry. Each example includes professional summaries, key skills, and bullet points you can use.',
  alternates: { canonical: '/resume-examples' },
  keywords: [
    'resume examples',
    'resume samples',
    'resume examples by job title',
    'professional resume examples',
    'free resume examples',
  ],
  openGraph: {
    title: 'Resume Examples for Every Job Title (2026)',
    description:
      'Browse 200+ free resume examples organized by job title and industry.',
    url: '/resume-examples',
  },
};

const categories = [
  {
    name: 'Technology',
    roles: [
      'software-engineer', 'data-scientist', 'web-developer', 'product-manager',
      'ux-designer', 'devops-engineer', 'frontend-developer', 'backend-developer',
      'full-stack-developer', 'data-analyst', 'cybersecurity-analyst', 'cloud-architect',
    ],
  },
  {
    name: 'Healthcare',
    roles: [
      'registered-nurse', 'nurse-practitioner', 'medical-assistant', 'pharmacist',
      'physical-therapist', 'dental-hygienist', 'physician-assistant',
    ],
  },
  {
    name: 'Business & Finance',
    roles: [
      'accountant', 'financial-analyst', 'marketing-manager', 'project-manager',
      'business-analyst', 'operations-manager', 'human-resources-manager',
      'management-consultant',
    ],
  },
  {
    name: 'Education',
    roles: [
      'teacher', 'professor', 'school-counselor', 'instructional-designer',
      'tutor', 'librarian',
    ],
  },
  {
    name: 'Engineering',
    roles: [
      'mechanical-engineer', 'electrical-engineer', 'civil-engineer',
      'chemical-engineer', 'environmental-engineer', 'industrial-engineer',
    ],
  },
  {
    name: 'Creative & Design',
    roles: [
      'graphic-designer', 'content-writer', 'copywriter', 'video-editor',
      'photographer', 'art-director',
    ],
  },
  {
    name: 'Sales & Marketing',
    roles: [
      'sales-representative', 'digital-marketing-specialist', 'seo-specialist',
      'social-media-manager', 'brand-manager', 'account-executive',
    ],
  },
  {
    name: 'Trades & Labor',
    roles: [
      'electrician', 'plumber', 'carpenter', 'hvac-technician', 'welder',
      'construction-manager',
    ],
  },
];

function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export default function ResumeExamplesHub() {
  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Home', url: '/' },
            { name: 'Resume Examples', url: '/resume-examples' },
          ]),
        ]}
      />
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-muted/30 py-16">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Resume Examples for Every Job Title
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Browse 200+ free resume examples with professional summaries, key
              skills, and achievement-oriented bullet points. Find your job
              title below and start building.
            </p>
            <Button asChild size="lg" className="mt-6 rounded-full px-8">
              <Link href="/editor">
                Create Your Resume Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto max-w-5xl px-4">
            {categories.map((category) => (
              <div key={category.name} className="mb-12">
                <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
                <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {category.roles.map((slug) => (
                    <Link
                      key={slug}
                      href={`/resume-examples/${slug}`}
                      className="group rounded-lg border border-border p-4 transition-colors hover:border-foreground/20 hover:bg-muted/30"
                    >
                      <span className="text-sm font-medium group-hover:text-primary">
                        {slugToTitle(slug)} Resume
                      </span>
                      <ArrowRight className="mt-1 h-3 w-3 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
