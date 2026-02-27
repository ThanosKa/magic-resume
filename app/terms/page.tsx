import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service for Magic Resume. Read our terms and conditions for using the free AI-powered resume builder.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-3xl px-4">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-muted-foreground">
              Last updated: February 27, 2026
            </p>

            <div className="mt-12 space-y-12">
              {/* Acceptance */}
              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  1. Acceptance of Terms
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  By accessing or using Magic Resume (
                  <a
                    href="https://magik-resume.dev"
                    className="text-foreground underline underline-offset-4"
                  >
                    magik-resume.dev
                  </a>
                  ), you agree to be bound by these Terms of Service. If you do
                  not agree to these terms, please do not use the service. These
                  terms apply to all visitors, users, and others who access or
                  use Magic Resume.
                </p>
              </div>

              {/* Description of Service */}
              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  2. Description of Service
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Magic Resume is a free, web-based resume and CV builder that
                  allows users to create, edit, and export professional resumes.
                  The service includes:
                </p>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      A browser-based resume editor with real-time preview
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      AI-powered features for content polishing and PDF import
                      (powered by OpenRouter)
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>Client-side PDF export</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      Local data storage in your browser (no server-side
                      storage)
                    </span>
                  </li>
                </ul>
              </div>

              {/* User Responsibilities */}
              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  3. User Responsibilities
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  When using Magic Resume, you agree to:
                </p>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      Provide accurate information in your resume content. You
                      are solely responsible for the accuracy and truthfulness of
                      the information you include.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      Use the service in compliance with all applicable laws and
                      regulations.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      Not use the service to create fraudulent, misleading, or
                      unlawful content.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      Not attempt to interfere with, disrupt, or overload the
                      service or its infrastructure.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      Maintain your own backups of your resume data. Since data
                      is stored locally in your browser, clearing your browser
                      data will result in data loss.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Your Content */}
              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  4. Your Content
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  You retain full ownership of all content you create using
                  Magic Resume. Your resumes, personal information, and any
                  other content you input belong entirely to you. We do not
                  claim any rights to your content.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  When you use AI features (Polish or Import), your content is
                  temporarily processed by OpenRouter. Please review{' '}
                  <a
                    href="https://openrouter.ai/terms"
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground underline underline-offset-4"
                  >
                    OpenRouter&apos;s terms
                  </a>{' '}
                  for their handling of processed data.
                </p>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  5. Intellectual Property
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Magic Resume is open-source software licensed under the{' '}
                  <strong className="text-foreground">
                    GNU Affero General Public License v3.0 (AGPL-3.0)
                  </strong>
                  . This means:
                </p>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      You are free to view, use, modify, and distribute the
                      source code in accordance with the AGPL-3.0 license terms.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      Any modified versions of the software must also be
                      released under the AGPL-3.0 license.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      The source code is available at{' '}
                      <a
                        href="https://github.com/ThanosKa/magic-resume"
                        target="_blank"
                        rel="noreferrer"
                        className="text-foreground underline underline-offset-4"
                      >
                        github.com/ThanosKa/magic-resume
                      </a>
                      .
                    </span>
                  </li>
                </ul>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  The Magic Resume name, logo, and branding are the property of
                  Thanos Kazakis and are not covered by the open-source license.
                </p>
              </div>

              {/* Disclaimers */}
              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  6. Disclaimers
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Magic Resume is provided on an{' '}
                  <strong className="text-foreground">
                    &quot;as is&quot; and &quot;as available&quot;
                  </strong>{' '}
                  basis, without warranties of any kind, either express or
                  implied. We do not warrant that:
                </p>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      The service will be uninterrupted, timely, secure, or
                      error-free.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      The results obtained from using the service, including
                      AI-generated suggestions, will be accurate or reliable.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      The service will meet your specific requirements or
                      expectations.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      Any data stored in your browser&apos;s localStorage will
                      be preserved indefinitely.
                    </span>
                  </li>
                </ul>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  AI-generated content is provided as suggestions only. You are
                  responsible for reviewing and verifying any AI-polished
                  content before using it in your resume.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  7. Limitation of Liability
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  To the maximum extent permitted by applicable law, Magic
                  Resume, its creator, and its contributors shall not be liable
                  for any indirect, incidental, special, consequential, or
                  punitive damages, or any loss of profits or revenues, whether
                  incurred directly or indirectly, or any loss of data, use,
                  goodwill, or other intangible losses resulting from:
                </p>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>Your access to or use of (or inability to use) the service.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      Any conduct or content of any third party on the service.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      Loss of data stored in your browser&apos;s localStorage.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      Any errors or inaccuracies in AI-generated content.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Service Availability */}
              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  8. Service Availability
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  We strive to keep Magic Resume available at all times, but we
                  do not guarantee uninterrupted access. The service may be
                  temporarily unavailable due to maintenance, updates, or
                  circumstances beyond our control. Since the application is
                  free, we are under no obligation to maintain any specific
                  level of availability.
                </p>
              </div>

              {/* Changes to Terms */}
              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  9. Changes to These Terms
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  We reserve the right to modify or replace these Terms of
                  Service at any time. Changes will be posted on this page with
                  an updated &quot;Last updated&quot; date. Your continued use
                  of the service after any changes constitutes acceptance of the
                  new terms.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  We encourage you to review these terms periodically. For
                  significant changes, we may provide additional notice through
                  the website.
                </p>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  10. Governing Law
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  These Terms shall be governed by and construed in accordance
                  with applicable law, without regard to conflict of law
                  provisions. Any disputes arising from these terms or your use
                  of the service shall be resolved through good-faith
                  negotiation before pursuing formal proceedings.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  11. Contact Us
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  If you have any questions about these Terms of Service, please
                  contact us:
                </p>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      Email:{' '}
                      <a
                        href="mailto:kazakis.th@gmail.com"
                        className="text-foreground underline underline-offset-4"
                      >
                        kazakis.th@gmail.com
                      </a>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      GitHub:{' '}
                      <a
                        href="https://github.com/ThanosKa/magic-resume"
                        target="_blank"
                        rel="noreferrer"
                        className="text-foreground underline underline-offset-4"
                      >
                        github.com/ThanosKa/magic-resume
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Back Links */}
            <div className="mt-16 border-t border-border pt-8">
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Back to Home
                </Link>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  About
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
