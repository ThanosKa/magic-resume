import type { Metadata } from 'next';
import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { Features } from '@/components/landing/features';
import { FAQ } from '@/components/landing/faq';
import { CTA } from '@/components/landing/cta';
import { Footer } from '@/components/landing/footer';
import { JsonLd } from '@/components/seo/json-ld';
import { faqs } from '@/lib/faqs';
import { faqJsonLd, organizationJsonLd, siteMetadata } from '@/lib/seo';

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: '/',
    images: [
      {
        url: siteMetadata.ogImage,
        width: 1200,
        height: 630,
        alt: siteMetadata.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.ogImage],
  },
};

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd data={[organizationJsonLd(), faqJsonLd(faqs)]} />
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
