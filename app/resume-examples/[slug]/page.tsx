import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { JsonLd } from '@/components/seo/json-ld';
import { articleJsonLd, breadcrumbJsonLd } from '@/lib/seo';
import { Button } from '@/components/ui/button';
import { getJobTitleBySlug, jobTitles } from '@/data/job-titles';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return jobTitles.map((jt) => ({ slug: jt.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobTitleBySlug(slug);
  if (!job) return {};

  return {
    title: `${job.title} Resume Example — Free Template & Tips (2026)`,
    description: `See a professional ${job.title} resume example with key skills, professional summary, and bullet points. Free template you can customize in our AI-powered builder.`,
    keywords: [
      `${job.title.toLowerCase()} resume`,
      `${job.title.toLowerCase()} resume example`,
      `${job.title.toLowerCase()} resume template`,
      `${job.title.toLowerCase()} resume sample`,
    ],
    alternates: { canonical: `/resume-examples/${slug}` },
    openGraph: {
      title: `${job.title} Resume Example — Free Template & Tips`,
      description: `Professional ${job.title} resume example with skills, summary, and bullet points.`,
      url: `/resume-examples/${slug}`,
    },
  };
}

export default async function ResumeExamplePage({ params }: Props) {
  const { slug } = await params;
  const job = getJobTitleBySlug(slug);
  if (!job) notFound();

  const relatedJobs = jobTitles
    .filter((jt) => jt.category === job.category && jt.slug !== slug)
    .slice(0, 6);

  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd
        data={[
          articleJsonLd({
            headline: `${job.title} Resume Example`,
            description: `Professional ${job.title} resume example with key skills and summary examples.`,
            datePublished: '2026-02-27',
            dateModified: '2026-02-27',
            url: `/resume-examples/${slug}`,
          }),
          breadcrumbJsonLd([
            { name: 'Home', url: '/' },
            { name: 'Resume Examples', url: '/resume-examples' },
            { name: `${job.title} Resume`, url: `/resume-examples/${slug}` },
          ]),
        ]}
      />
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-muted/30 py-12">
          <div className="container mx-auto max-w-3xl px-4">
            <Link
              href="/resume-examples"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              All Resume Examples
            </Link>
            <p className="text-sm font-medium text-primary">{job.category}</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              {job.title} Resume Example
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A {job.title} resume should highlight your relevant skills,
              quantified achievements, and industry expertise. Below you&apos;ll
              find professional summary examples, key skills to include, and
              tips for making your resume stand out.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Last updated: February 2026
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto max-w-3xl px-4 space-y-12">
            {/* Professional Summary Examples */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Professional Summary Examples for {job.title}
              </h2>
              <p className="text-muted-foreground mb-6">
                Your professional summary is the first thing hiring managers
                read. Here are {job.summaryExamples.length} examples tailored
                for {job.title} roles:
              </p>
              <div className="space-y-4">
                {job.summaryExamples.map((summary, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-border bg-muted/20 p-5"
                  >
                    <p className="text-sm font-medium text-muted-foreground mb-2">
                      Example {i + 1}
                    </p>
                    <p className="text-foreground leading-relaxed">
                      &ldquo;{summary}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Skills */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Key Skills for a {job.title} Resume
              </h2>
              <p className="text-muted-foreground mb-6">
                Include these skills on your {job.title} resume to pass ATS
                screening and demonstrate your qualifications:
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {job.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume Tips */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Tips for Writing a {job.title} Resume
              </h2>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">1.</span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">
                      Tailor your resume to each job description.
                    </strong>{' '}
                    Match the keywords and requirements from the {job.title}{' '}
                    job posting to your resume content.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">2.</span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">
                      Quantify your achievements.
                    </strong>{' '}
                    Instead of listing duties, show impact with numbers,
                    percentages, and dollar amounts.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">3.</span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">
                      Use strong action verbs.
                    </strong>{' '}
                    Start every bullet point with verbs like Led, Developed,
                    Implemented, Increased, Reduced, or Delivered.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">4.</span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">
                      Keep it ATS-friendly.
                    </strong>{' '}
                    Use a clean single-column layout, standard section
                    headings, and save as PDF.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">5.</span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">
                      Use AI to polish your content.
                    </strong>{' '}
                    Magic Resume&apos;s AI Polish feature can transform weak
                    bullet points into achievement-oriented statements.
                  </span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="rounded-lg border border-border bg-muted/30 p-8 text-center">
              <h3 className="text-xl font-semibold">
                Build Your {job.title} Resume Now
              </h3>
              <p className="mt-2 text-muted-foreground">
                Create a professional {job.title} resume in minutes with our
                free AI-powered editor. No sign-up required.
              </p>
              <Button asChild size="lg" className="mt-4 rounded-full px-8">
                <Link href="/editor">
                  Create Your Resume Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Related Examples */}
            {relatedJobs.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Related Resume Examples
                </h2>
                <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                  {relatedJobs.map((rj) => (
                    <Link
                      key={rj.slug}
                      href={`/resume-examples/${rj.slug}`}
                      className="group rounded-lg border border-border p-4 transition-colors hover:border-foreground/20"
                    >
                      <span className="text-sm font-medium group-hover:text-primary">
                        {rj.title} Resume
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">
                    What should a {job.title} resume include?
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    A {job.title} resume should include a professional summary,
                    work experience with quantified achievements, relevant
                    skills ({job.skills.slice(0, 4).join(', ')}), education,
                    and any relevant certifications.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">
                    How long should a {job.title} resume be?
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    For most {job.title} positions, aim for a one-page resume
                    if you have less than 10 years of experience. Senior
                    professionals with 10+ years of relevant experience can
                    extend to two pages.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">
                    What are the best skills for a {job.title} resume?
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    The top skills for a {job.title} resume include{' '}
                    {job.skills.slice(0, 5).join(', ')}. Always match your
                    skills to the specific job description for ATS
                    optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
