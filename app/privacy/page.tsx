import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Magic Resume. Learn how we handle your data, what information we collect, and how we protect your privacy.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-3xl px-4">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-muted-foreground">
              Last updated: February 27, 2026
            </p>

            <div className="mt-12 space-y-12">
              {/* Introduction */}
              <div>
                <p className="leading-relaxed text-muted-foreground">
                  Magic Resume (
                  <a
                    href="https://magik-resume.dev"
                    className="text-foreground underline underline-offset-4"
                  >
                    magik-resume.dev
                  </a>
                  ) is committed to protecting your privacy. This Privacy Policy
                  explains what data we collect, how we use it, and your rights
                  regarding your information.
                </p>
              </div>

              {/* What Data We Collect */}
              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  1. What Data We Collect
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Magic Resume is designed with a privacy-first approach. We do
                  not require you to create an account, and we do not collect
                  personal information by default.
                </p>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      <strong className="text-foreground">
                        Local Storage Only:
                      </strong>{' '}
                      All resume data you create is stored exclusively in your
                      browser&apos;s localStorage. This data never leaves your
                      device unless you explicitly use AI features.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      <strong className="text-foreground">
                        No Account Required:
                      </strong>{' '}
                      We do not collect email addresses, names, passwords, or
                      any other registration information. There is no sign-up
                      process.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      <strong className="text-foreground">No Databases:</strong>{' '}
                      We do not operate any server-side database that stores your
                      resume content. Your data exists only in your browser.
                    </span>
                  </li>
                </ul>
              </div>

              {/* AI Features */}
              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  2. AI Features and Data Processing
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Magic Resume offers optional AI-powered features. When you use
                  these features, some data is sent to external services:
                </p>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      <strong className="text-foreground">
                        Polish Feature:
                      </strong>{' '}
                      When you click the &quot;Polish&quot; button to enhance
                      your resume content, the relevant text is sent to
                      OpenRouter&apos;s API for AI processing. This is a
                      deliberate, user-initiated action.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      <strong className="text-foreground">
                        PDF Import Feature:
                      </strong>{' '}
                      When you import a PDF resume, the extracted text is sent to
                      OpenRouter&apos;s API for intelligent parsing and
                      structuring. This only happens when you explicitly upload a
                      PDF.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      <strong className="text-foreground">
                        No Background Processing:
                      </strong>{' '}
                      Data is never sent to AI services automatically or in the
                      background. Every AI interaction requires your explicit
                      action.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  3. Cookies and Analytics
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  We use minimal cookies and analytics:
                </p>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      <strong className="text-foreground">
                        Vercel Analytics:
                      </strong>{' '}
                      We use Vercel Analytics to understand general usage
                      patterns such as page views and visitor counts. Vercel
                      Analytics is privacy-friendly and does not track individual
                      users or collect personal information.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      <strong className="text-foreground">
                        No Personal Tracking:
                      </strong>{' '}
                      We do not use tracking cookies, fingerprinting, or any
                      other method to identify or follow individual users across
                      sessions or websites.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      <strong className="text-foreground">Theme Preference:</strong>{' '}
                      A localStorage entry is used to remember your light/dark
                      mode preference. This is not a cookie and is not sent to
                      any server.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Third-Party Services */}
              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  4. Third-Party Services
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Magic Resume integrates with the following third-party
                  services:
                </p>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      <strong className="text-foreground">
                        Vercel Analytics:
                      </strong>{' '}
                      For anonymous, aggregated website usage statistics. See{' '}
                      <a
                        href="https://vercel.com/docs/analytics/privacy-policy"
                        target="_blank"
                        rel="noreferrer"
                        className="text-foreground underline underline-offset-4"
                      >
                        Vercel&apos;s privacy policy
                      </a>
                      .
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      <strong className="text-foreground">OpenRouter:</strong>{' '}
                      For AI-powered features (Polish and PDF Import). Data is
                      only sent when you explicitly use these features. See{' '}
                      <a
                        href="https://openrouter.ai/privacy"
                        target="_blank"
                        rel="noreferrer"
                        className="text-foreground underline underline-offset-4"
                      >
                        OpenRouter&apos;s privacy policy
                      </a>
                      .
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      <strong className="text-foreground">
                        Buy Me a Coffee:
                      </strong>{' '}
                      An optional support widget is loaded on the site. This is
                      a third-party script from Buy Me a Coffee. See{' '}
                      <a
                        href="https://www.buymeacoffee.com/privacy-policy"
                        target="_blank"
                        rel="noreferrer"
                        className="text-foreground underline underline-offset-4"
                      >
                        Buy Me a Coffee&apos;s privacy policy
                      </a>
                      .
                    </span>
                  </li>
                </ul>
              </div>

              {/* Data Retention */}
              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  5. Data Retention
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Since your resume data is stored exclusively in your
                  browser&apos;s localStorage, you have full control over its
                  retention:
                </p>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      Your data persists until you clear your browser data or
                      explicitly delete your resumes within the application.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      We do not retain any copies of your resume data on our
                      servers.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      Data sent to OpenRouter for AI processing is handled
                      according to OpenRouter&apos;s data retention policies.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Children's Privacy */}
              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  6. Children&apos;s Privacy
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Magic Resume is not directed at children under the age of 13.
                  We do not knowingly collect personal information from children.
                  Since we do not collect personal information from any users, no
                  special provisions for children&apos;s data are necessary.
                </p>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  7. Your Rights
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Because your data is stored locally in your browser, you
                  already have full control:
                </p>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      <strong className="text-foreground">Access:</strong> Your
                      data is always accessible to you in your browser.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      <strong className="text-foreground">Deletion:</strong> You
                      can delete your data at any time by clearing your browser
                      storage or deleting resumes within the app.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      <strong className="text-foreground">Portability:</strong>{' '}
                      You can export your resume data as JSON at any time from
                      within the editor.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Changes */}
              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  8. Changes to This Policy
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  We may update this Privacy Policy from time to time. Any
                  changes will be posted on this page with an updated &quot;Last
                  updated&quot; date. We encourage you to review this page
                  periodically.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  9. Contact Us
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  If you have any questions or concerns about this Privacy
                  Policy, please contact us:
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
                  href="/terms"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Terms of Service
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
