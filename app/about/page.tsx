import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';

export const metadata: Metadata = {
  title: 'About Magic Resume',
  description:
    'Learn about Magic Resume, a free and open-source AI-powered resume builder created by Thanos Kazakis. Built with Next.js, React, and AI to help everyone create professional resumes.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border py-16 md:py-24">
          <div className="container mx-auto max-w-3xl px-4">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              About Magic Resume
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Magic Resume is a free, open-source, AI-powered resume builder
              designed to help everyone create professional, polished resumes
              without barriers. No sign-ups, no paywalls, no hidden fees.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="border-b border-border bg-muted/30 py-16">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="text-2xl font-bold tracking-tight">Our Mission</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We believe that everyone deserves access to high-quality resume
              building tools, regardless of their financial situation. Job
              searching is stressful enough without having to pay for basic tools
              to present yourself professionally. Magic Resume exists to level
              the playing field by providing a completely free, feature-rich
              resume builder that rivals any paid alternative.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Your resume is often the first impression you make on a potential
              employer. We want to make sure that first impression is a great
              one, for everyone.
            </p>
          </div>
        </section>

        {/* Creator */}
        <section className="border-b border-border py-16">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="text-2xl font-bold tracking-tight">
              Meet the Creator
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Magic Resume is created and maintained by{' '}
              <strong className="text-foreground">Thanos Kazakis</strong>, a
              developer passionate about building tools that make a real
              difference in people&apos;s lives. What started as a side project
              to solve a personal frustration with overpriced resume builders has
              grown into a fully featured application used by people around the
              world.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://x.com/KazakisThanos"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                @KazakisThanos on X
              </a>
              <a
                href="mailto:kazakis.th@gmail.com"
                className="inline-flex items-center rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                kazakis.th@gmail.com
              </a>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="border-b border-border bg-muted/30 py-16">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="text-2xl font-bold tracking-tight">Tech Stack</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Magic Resume is built with modern, reliable technologies to
              provide the best possible experience.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-background p-5">
                <h3 className="font-semibold">Next.js & React</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  A modern React framework providing server-side rendering, fast
                  page loads, and an excellent developer experience.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-background p-5">
                <h3 className="font-semibold">AI-Powered Features</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Integration with OpenRouter for intelligent resume polishing
                  and PDF import extraction, only when you choose to use it.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-background p-5">
                <h3 className="font-semibold">Client-Side PDF Export</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  PDF generation happens directly in your browser using
                  @react-pdf/renderer. Your resume never leaves your device.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-background p-5">
                <h3 className="font-semibold">Tailwind CSS</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Utility-first CSS for a clean, responsive design that looks
                  great on every device and supports dark mode.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Source */}
        <section className="border-b border-border py-16">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="text-2xl font-bold tracking-tight">Open Source</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Magic Resume is proudly open source under the{' '}
              <strong className="text-foreground">AGPL-3.0 license</strong>. We
              believe in transparency and community-driven development. You can
              inspect the code, contribute features, report bugs, or fork the
              project to make it your own.
            </p>
            <div className="mt-6">
              <a
                href="https://github.com/ThanosKa/magic-resume"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-b border-border bg-muted/30 py-16">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="text-2xl font-bold tracking-tight">Our Values</h2>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-semibold">Privacy First</h3>
                <p className="mt-2 text-muted-foreground">
                  Your resume data is stored locally in your browser. We
                  don&apos;t require accounts, and we never sell or share your
                  information. Data is only sent to external services when you
                  explicitly use AI features like Polish or Import.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Free Forever</h3>
                <p className="mt-2 text-muted-foreground">
                  Magic Resume will always be free to use. No premium tiers, no
                  feature gates, no &quot;upgrade to unlock&quot; prompts. Every
                  feature is available to every user from day one.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Open Source</h3>
                <p className="mt-2 text-muted-foreground">
                  Transparency is a core value. The entire codebase is open for
                  anyone to review, contribute to, or learn from. Open source
                  means you can trust what the software does with your data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-2xl font-bold tracking-tight">
              Ready to build your resume?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Start creating your professional resume right now. No sign-up
              required.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/editor"
                className="inline-flex items-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Open the Editor
              </Link>
              <Link
                href="/"
                className="inline-flex items-center rounded-full border border-border px-6 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
