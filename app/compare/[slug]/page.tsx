import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check, X } from 'lucide-react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { JsonLd } from '@/components/seo/json-ld';
import { breadcrumbJsonLd } from '@/lib/seo';
import { Button } from '@/components/ui/button';
import {
  getCompetitorBySlug,
  getAllCompetitorSlugs,
  magicResumeFeatures,
} from '@/data/competitors';

interface Props {
  params: Promise<{ slug: string }>;
}

function extractCompetitorSlug(pageSlug: string): string | null {
  const match = pageSlug.match(/^magic-resume-vs-(.+)$/);
  return match ? match[1] : null;
}

export async function generateStaticParams() {
  return getAllCompetitorSlugs().map((cs) => ({
    slug: `magic-resume-vs-${cs}`,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const competitorSlug = extractCompetitorSlug(slug);
  if (!competitorSlug) return {};
  const comp = getCompetitorBySlug(competitorSlug);
  if (!comp) return {};

  return {
    title: `Magic Resume vs ${comp.name}: Honest Comparison (2026)`,
    description: `Compare Magic Resume and ${comp.name} side by side. See features, pricing ($0 vs ${comp.pricing}), privacy, and which resume builder is right for you.`,
    keywords: [
      `magic resume vs ${comp.name.toLowerCase()}`,
      `${comp.name.toLowerCase()} alternative`,
      `${comp.name.toLowerCase()} vs magic resume`,
      `best ${comp.name.toLowerCase()} alternative`,
    ],
    alternates: { canonical: `/compare/${slug}` },
  };
}

function FeatureRow({
  label,
  ours,
  theirs,
}: {
  label: string;
  ours: boolean | string;
  theirs: boolean | string;
}) {
  const renderValue = (val: boolean | string) => {
    if (typeof val === 'boolean') {
      return val ? (
        <Check className="h-5 w-5 text-green-500" />
      ) : (
        <X className="h-5 w-5 text-red-400" />
      );
    }
    return <span className="text-sm">{val}</span>;
  };

  return (
    <tr className="border-b border-border/50">
      <td className="py-3 px-4 text-sm font-medium">{label}</td>
      <td className="py-3 px-4 text-center">{renderValue(ours)}</td>
      <td className="py-3 px-4 text-center">{renderValue(theirs)}</td>
    </tr>
  );
}

export default async function ComparePage({ params }: Props) {
  const { slug } = await params;
  const competitorSlug = extractCompetitorSlug(slug);
  if (!competitorSlug) notFound();
  const comp = getCompetitorBySlug(competitorSlug);
  if (!comp) notFound();

  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Home', url: '/' },
            { name: 'Compare', url: '/compare' },
            {
              name: `Magic Resume vs ${comp.name}`,
              url: `/compare/${slug}`,
            },
          ]),
        ]}
      />
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-muted/30 py-12">
          <div className="container mx-auto max-w-3xl px-4">
            <Link
              href="/compare"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              All Comparisons
            </Link>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Magic Resume vs {comp.name}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              An honest, detailed comparison between Magic Resume and{' '}
              {comp.name}. We highlight the strengths of both products so you
              can make the best choice for your needs.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Last updated: February 2026
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto max-w-3xl px-4 space-y-12">
            {/* TL;DR */}
            <div className="rounded-lg border border-border bg-muted/20 p-6">
              <h2 className="text-lg font-semibold mb-2">TL;DR</h2>
              <p className="text-muted-foreground">
                Magic Resume is 100% free (including AI features) with no
                sign-up required and all data stored locally in your browser.{' '}
                {comp.name} {comp.description.toLowerCase()}{' '}
                {comp.pricing !== 'Free'
                  ? `Pricing: ${comp.pricing}.`
                  : 'Also free.'}{' '}
                Choose Magic Resume if you want a completely free, private
                experience. Choose {comp.name} if {comp.bestFor.toLowerCase()}.
              </p>
            </div>

            {/* Feature Comparison Table */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Feature Comparison
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-3 px-4 text-left text-sm font-semibold">
                        Feature
                      </th>
                      <th className="py-3 px-4 text-center text-sm font-semibold text-primary">
                        Magic Resume
                      </th>
                      <th className="py-3 px-4 text-center text-sm font-semibold">
                        {comp.name}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <FeatureRow label="Price" ours="Free forever" theirs={comp.pricing} />
                    <FeatureRow label="AI Writing" ours={magicResumeFeatures.aiWriting} theirs={comp.features.aiWriting} />
                    <FeatureRow label="PDF Import" ours={magicResumeFeatures.pdfImport} theirs={comp.features.pdfImport} />
                    <FeatureRow label="Real-Time Preview" ours={magicResumeFeatures.realTimePreview} theirs={comp.features.realTimePreview} />
                    <FeatureRow label="No Sign-Up Required" ours={magicResumeFeatures.noSignUpRequired} theirs={comp.features.noSignUpRequired} />
                    <FeatureRow label="Privacy First" ours={magicResumeFeatures.privacyFirst} theirs={comp.features.privacyFirst} />
                    <FeatureRow label="Open Source" ours={magicResumeFeatures.openSource} theirs={comp.features.openSource} />
                    <FeatureRow label="Free PDF Export" ours={magicResumeFeatures.freeExport} theirs={comp.features.freeExport} />
                    <FeatureRow label="Templates" ours={magicResumeFeatures.templates} theirs={comp.features.templates} />
                    <FeatureRow label="Customization" ours={magicResumeFeatures.customization} theirs={comp.features.customization} />
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pros and Cons */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="text-xl font-bold mb-3">
                  {comp.name} Pros
                </h2>
                <ul className="space-y-2">
                  {comp.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {pro}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-3">
                  {comp.name} Cons
                </h2>
                <ul className="space-y-2">
                  {comp.cons.map((con) => (
                    <li key={con} className="flex items-start gap-2">
                      <X className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {con}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Who Each Is Best For */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-border p-5">
                <h3 className="font-semibold text-primary">
                  Choose Magic Resume if...
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>You want a completely free resume builder with no catches</li>
                  <li>You don&apos;t want to create an account</li>
                  <li>Privacy matters — you want data stored locally</li>
                  <li>You need AI-powered content polish</li>
                  <li>You have an existing PDF resume to import</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border p-5">
                <h3 className="font-semibold">
                  Choose {comp.name} if...
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {comp.bestFor}
                </p>
                {comp.notIdealFor && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    <strong className="text-foreground">Not ideal if:</strong>{' '}
                    {comp.notIdealFor}
                  </p>
                )}
              </div>
            </div>

            {/* Why People Switch */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Why People Switch from {comp.name} to Magic Resume
              </h2>
              <ul className="space-y-3">
                {comp.switchReasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <ArrowRight className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="rounded-lg border border-border bg-muted/30 p-8 text-center">
              <h3 className="text-xl font-semibold">
                Try Magic Resume Free
              </h3>
              <p className="mt-2 text-muted-foreground">
                No sign-up, no payment, no catches. Start building your
                professional resume right now.
              </p>
              <Button asChild size="lg" className="mt-4 rounded-full px-8">
                <Link href="/editor">
                  Create Your Resume Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold mb-4">FAQ</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">
                    Is Magic Resume really free?
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    Yes, 100% free including all AI features. No sign-up
                    required, no paywall on PDF export, no hidden fees.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">
                    Can I import my resume from {comp.name}?
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    Yes. Export your resume as PDF from {comp.name}, then use
                    Magic Resume&apos;s PDF Import feature to automatically
                    extract all your data into an editable format.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">
                    Is this comparison biased?
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    We try to be as honest as possible. We acknowledge{' '}
                    {comp.name}&apos;s genuine strengths and are transparent
                    about our own limitations. We believe the best marketing
                    is honesty.
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
