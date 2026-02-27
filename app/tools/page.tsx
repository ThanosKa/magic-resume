import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckSquare, Search, FileText, List, Ruler } from 'lucide-react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { JsonLd } from '@/components/seo/json-ld';
import { breadcrumbJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Free Resume Tools — ATS Checker, Keyword Optimizer & More',
  description:
    'Free resume tools to help you build a better resume. Check your ATS score, optimize keywords, generate professional summaries, and more — all free, no sign-up required.',
  alternates: { canonical: '/tools' },
  keywords: [
    'free resume tools',
    'ats resume checker',
    'resume keyword optimizer',
    'resume summary generator',
    'resume bullet point generator',
  ],
};

const tools = [
  {
    slug: 'resume-checker',
    icon: CheckSquare,
    title: 'ATS Resume Checker',
    description:
      'Upload your resume and get an instant ATS compatibility score. Find out if your resume will pass Applicant Tracking System screening with actionable improvement suggestions.',
    keywords: 'ats checker, resume score, ats resume checker free',
    status: 'available' as const,
  },
  {
    slug: 'resume-keywords',
    icon: Search,
    title: 'Resume Keyword Optimizer',
    description:
      'Paste a job description and your resume to find missing keywords. Our AI identifies critical keywords you need to add to pass ATS screening and match the job requirements.',
    keywords: 'resume keywords, ats keywords, resume keyword optimizer',
    status: 'coming-soon' as const,
  },
  {
    slug: 'summary-generator',
    icon: FileText,
    title: 'Professional Summary Generator',
    description:
      'Enter your job title, experience, and key skills to generate 5 professional summary options. Each summary is tailored to your industry and career level.',
    keywords: 'professional summary generator, resume summary generator',
    status: 'coming-soon' as const,
  },
  {
    slug: 'bullet-point-generator',
    icon: List,
    title: 'Resume Bullet Point Generator',
    description:
      'Transform job responsibilities into achievement-oriented bullet points. Enter your role and duties, and AI generates impactful resume bullets with action verbs and metrics.',
    keywords: 'resume bullet point generator, resume bullet points',
    status: 'coming-soon' as const,
  },
  {
    slug: 'resume-length-calculator',
    icon: Ruler,
    title: 'Resume Length Calculator',
    description:
      'Find out the ideal length for your resume based on your experience level, industry, and career stage. Get personalized recommendations backed by hiring data.',
    keywords: 'how long should a resume be, resume length',
    status: 'coming-soon' as const,
  },
];

export default function ToolsHub() {
  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Home', url: '/' },
            { name: 'Free Tools', url: '/tools' },
          ]),
        ]}
      />
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-muted/30 py-16">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Free Resume Tools
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Powerful tools to help you build a better resume. All free, no
              sign-up required.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="grid gap-6">
              {tools.map((tool) => (
                <div
                  key={tool.slug}
                  className="group rounded-lg border border-border p-6 transition-colors hover:border-foreground/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-muted p-3">
                      <tool.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h2 className="text-lg font-semibold">
                          {tool.title}
                        </h2>
                        {tool.status === 'coming-soon' && (
                          <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                            Coming Soon
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-muted-foreground">
                        {tool.description}
                      </p>
                      {tool.status === 'available' ? (
                        <Link
                          href={`/tools/${tool.slug}`}
                          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                        >
                          Try it free
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      ) : (
                        <p className="mt-3 text-sm text-muted-foreground">
                          Sign up for our newsletter to be notified when this
                          tool launches.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
