import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { JsonLd } from '@/components/seo/json-ld';
import { articleJsonLd, breadcrumbJsonLd } from '@/lib/seo';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog';
import { Button } from '@/components/ui/button';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.lastModified,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

function renderMarkdown(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith('## ')) {
      elements.push(
        <h2
          key={i}
          className="mt-10 mb-4 text-2xl font-bold tracking-tight"
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="mt-8 mb-3 text-xl font-semibold">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith('#### ')) {
      elements.push(
        <h4 key={i} className="mt-6 mb-2 text-lg font-semibold">
          {line.slice(5)}
        </h4>
      );
    } else if (line.startsWith('| ')) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith('|')) {
        tableLines.push(lines[i]);
        i++;
      }
      i--;
      const headers = tableLines[0]
        .split('|')
        .filter(Boolean)
        .map((h) => h.trim());
      const rows = tableLines.slice(2).map((row) =>
        row
          .split('|')
          .filter(Boolean)
          .map((c) => c.trim())
      );
      elements.push(
        <div key={i} className="my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                {headers.map((h, j) => (
                  <th
                    key={j}
                    className="px-4 py-2 text-left font-semibold"
                    dangerouslySetInnerHTML={{ __html: h.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                  />
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className="border-b border-border/50">
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="px-4 py-2 text-muted-foreground"
                      dangerouslySetInnerHTML={{ __html: cell.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }}
                    />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else if (line.startsWith('- ') || line.startsWith('1. ')) {
      const listItems: string[] = [];
      const isOrdered = line.startsWith('1.');
      while (
        i < lines.length &&
        (lines[i].startsWith('- ') || /^\d+\. /.test(lines[i]))
      ) {
        listItems.push(lines[i].replace(/^-\s|^\d+\.\s/, ''));
        i++;
      }
      i--;
      const ListTag = isOrdered ? 'ol' : 'ul';
      elements.push(
        <ListTag
          key={i}
          className={`my-4 space-y-2 pl-6 ${isOrdered ? 'list-decimal' : 'list-disc'}`}
        >
          {listItems.map((item, j) => (
            <li
              key={j}
              className="text-muted-foreground"
              dangerouslySetInnerHTML={{
                __html: item
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
                  .replace(
                    /\[([^\]]+)\]\(([^)]+)\)/g,
                    '<a href="$2" class="text-primary underline underline-offset-4">$1</a>'
                  ),
              }}
            />
          ))}
        </ListTag>
      );
    } else if (line.trim() === '') {
      // skip empty lines
    } else {
      elements.push(
        <p
          key={i}
          className="my-4 text-muted-foreground leading-7"
          dangerouslySetInnerHTML={{
            __html: line
              .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
              .replace(
                /\[([^\]]+)\]\(([^)]+)\)/g,
                '<a href="$2" class="text-primary underline underline-offset-4">$1</a>'
              ),
          }}
        />
      );
    }
    i++;
  }

  return elements;
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd
        data={[
          articleJsonLd({
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.lastModified,
            url: `/blog/${slug}`,
          }),
          breadcrumbJsonLd([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' },
            { name: post.title, url: `/blog/${slug}` },
          ]),
        ]}
      />
      <Header />
      <main className="flex-1">
        <article className="py-16">
          <div className="container mx-auto max-w-3xl px-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <header className="mb-10">
              <p className="text-sm text-muted-foreground">
                {post.category} &middot; {post.date} &middot; {post.readTime}
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                {post.title}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {post.description}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Last updated: {post.lastModified}
              </p>
            </header>

            <div className="border-t border-border pt-8">
              {renderMarkdown(post.content)}
            </div>

            <div className="mt-12 rounded-lg border border-border bg-muted/30 p-8 text-center">
              <h3 className="text-xl font-semibold">
                Ready to Build Your Resume?
              </h3>
              <p className="mt-2 text-muted-foreground">
                Put these tips into action with Magic Resume&apos;s free
                AI-powered editor. No sign-up required.
              </p>
              <Button asChild size="lg" className="mt-4 rounded-full px-8">
                <Link href="/editor">Create Your Resume Free</Link>
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
