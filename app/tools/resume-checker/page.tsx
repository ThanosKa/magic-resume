import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { JsonLd } from '@/components/seo/json-ld';
import { breadcrumbJsonLd } from '@/lib/seo';
import { CheckerForm } from './checker-form';

export const metadata: Metadata = {
  title: 'Free ATS Resume Checker — Score Your Resume Instantly',
  description:
    'Check your resume for ATS compatibility, keyword optimization, formatting issues, and more. Free tool with instant results. No sign-up required.',
  alternates: { canonical: '/tools/resume-checker' },
  keywords: [
    'ats resume checker',
    'resume ats check',
    'ats compatibility checker',
    'resume score checker',
    'free resume checker',
    'ats friendly resume checker',
    'resume keyword checker',
  ],
  openGraph: {
    title: 'Free ATS Resume Checker — Score Your Resume Instantly',
    description:
      'Check your resume for ATS compatibility, keyword optimization, and formatting issues. Free, instant, no sign-up.',
    url: '/tools/resume-checker',
  },
};

const faqItems = [
  {
    question: 'What is an ATS (Applicant Tracking System)?',
    answer:
      'An Applicant Tracking System (ATS) is software used by employers to collect, sort, scan, and rank job applications. Over 75% of companies use ATS to filter resumes before a human recruiter ever sees them. Common ATS platforms include Workday, Greenhouse, Lever, iCIMS, and Taleo.',
  },
  {
    question: 'How does this ATS resume checker work?',
    answer:
      'Our checker analyzes your resume text for 12+ factors that affect ATS compatibility: section headers, contact information, action verbs, quantified achievements, formatting issues, keyword matching, readability, and more. Everything runs in your browser — your resume is never sent to a server.',
  },
  {
    question: 'Is this resume checker really free?',
    answer:
      'Yes, completely free with no limits. No sign-up, no email required, no hidden fees. You can check as many resumes as you want.',
  },
  {
    question: 'What score should I aim for?',
    answer:
      'Aim for a score of 80 or above. A score of 80+ means your resume has strong ATS compatibility. Between 60-79 is decent but has room for improvement. Below 60 means your resume likely needs significant changes to pass ATS screening.',
  },
  {
    question: 'Does this tool store my resume data?',
    answer:
      'No. All analysis happens entirely in your web browser using JavaScript. Your resume text is never transmitted to any server, stored in any database, or shared with anyone. Your privacy is completely protected.',
  },
  {
    question: 'How can I improve my ATS score?',
    answer:
      'The most impactful improvements are: use standard section headers (Work Experience, Education, Skills), include relevant keywords from the job description, start bullet points with strong action verbs, quantify achievements with numbers and percentages, and avoid tables, graphics, and unusual formatting.',
  },
];

export default function ResumeCheckerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'ATS Resume Checker',
            url: 'https://magik-resume.dev/tools/resume-checker',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            description:
              'Free ATS resume checker that analyzes your resume for compatibility with Applicant Tracking Systems.',
            creator: {
              '@type': 'Organization',
              name: 'Magic Resume',
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          },
          breadcrumbJsonLd([
            { name: 'Home', url: '/' },
            { name: 'Tools', url: '/tools' },
            { name: 'ATS Resume Checker', url: '/tools/resume-checker' },
          ]),
        ]}
      />
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border bg-muted/30 py-12">
          <div className="container mx-auto max-w-4xl px-4">
            <Link
              href="/tools"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              All Tools
            </Link>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Free ATS Resume Checker
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Paste your resume below to get an instant ATS compatibility score
              with actionable suggestions. Optionally add the job description
              for keyword matching analysis.
            </p>
          </div>
        </section>

        {/* Tool */}
        <section className="py-12">
          <div className="container mx-auto max-w-4xl px-4">
            <CheckerForm />
          </div>
        </section>

        {/* Educational content */}
        <section className="border-t border-border bg-muted/10 py-16">
          <div className="container mx-auto max-w-3xl px-4 space-y-8">
            <div>
              <h2 className="text-2xl font-bold">
                What Is ATS and Why Does It Matter?
              </h2>
              <p className="mt-3 text-muted-foreground leading-7">
                An Applicant Tracking System (ATS) is software that employers
                use to manage job applications. When you submit your resume
                online, it almost always goes through an ATS before any human
                sees it. The ATS parses your resume, extracts information, and
                ranks you against other candidates based on keyword matches and
                formatting compatibility.
              </p>
              <p className="mt-3 text-muted-foreground leading-7">
                In 2026, over 75% of companies use ATS software, including
                nearly all Fortune 500 companies. If your resume is not
                ATS-optimized, it may never reach a hiring manager — regardless
                of how qualified you are.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                How to Make Your Resume ATS-Friendly
              </h2>
              <ul className="mt-3 space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="font-semibold text-foreground">1.</span>
                  <span>
                    <strong className="text-foreground">
                      Use standard section headers.
                    </strong>{' '}
                    Stick with &quot;Work Experience,&quot;
                    &quot;Education,&quot; &quot;Skills,&quot; and
                    &quot;Professional Summary.&quot; Creative headers like
                    &quot;My Journey&quot; confuse ATS parsers.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-foreground">2.</span>
                  <span>
                    <strong className="text-foreground">
                      Match keywords from the job description.
                    </strong>{' '}
                    ATS systems rank resumes by keyword relevance. Mirror the
                    exact terms used in the job posting.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-foreground">3.</span>
                  <span>
                    <strong className="text-foreground">
                      Keep formatting simple.
                    </strong>{' '}
                    Avoid tables, text boxes, graphics, headers/footers, and
                    multi-column layouts. Use a single-column format.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-foreground">4.</span>
                  <span>
                    <strong className="text-foreground">
                      Start bullets with action verbs.
                    </strong>{' '}
                    Words like &quot;Developed,&quot; &quot;Led,&quot;
                    &quot;Increased,&quot; and &quot;Managed&quot; are stronger
                    than passive descriptions.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-foreground">5.</span>
                  <span>
                    <strong className="text-foreground">
                      Quantify achievements.
                    </strong>{' '}
                    Numbers stand out to both ATS and humans. Use percentages,
                    dollar amounts, and specific figures.
                  </span>
                </li>
              </ul>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqItems.map((item) => (
                  <div key={item.question}>
                    <h3 className="font-semibold">{item.question}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
