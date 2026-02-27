import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { JsonLd } from '@/components/seo/json-ld';
import { breadcrumbJsonLd } from '@/lib/seo';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Resume & Career Blog',
  description:
    'Expert resume writing tips, career advice, and job search strategies. Learn how to write a professional resume, ace interviews, and land your dream job.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Resume & Career Blog | Magic Resume',
    description:
      'Expert resume writing tips, career advice, and job search strategies.',
    url: '/blog',
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' },
          ]),
        ]}
      />
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-muted/30 py-16">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Resume & Career Blog
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Expert tips on resume writing, job searching, and career growth.
              Updated regularly with actionable advice.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto max-w-4xl px-4">
            {posts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  Blog posts coming soon. In the meantime, start building your
                  resume with our{' '}
                  <Link
                    href="/editor"
                    className="text-primary underline underline-offset-4"
                  >
                    free AI-powered editor
                  </Link>
                  .
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    className="group rounded-lg border border-border p-6 transition-colors hover:border-foreground/20"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground">
                            {post.category} &middot; {post.date} &middot;{' '}
                            {post.readTime}
                          </p>
                          <h2 className="mt-2 text-xl font-semibold group-hover:text-primary">
                            {post.title}
                          </h2>
                          <p className="mt-2 text-muted-foreground">
                            {post.description}
                          </p>
                        </div>
                        <ArrowRight className="mt-6 h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
