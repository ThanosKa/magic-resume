import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { siteMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Page Not Found | " + siteMetadata.name,
  description:
    "Sorry, the page you're looking for doesn't exist. Let's get you back on track with your resume creation.",
};

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
        <div className="max-w-md space-y-6">
          <div className="space-y-2">
            <h1 className="text-6xl font-bold tracking-tight text-foreground">
              404
            </h1>
            <h2 className="text-2xl font-semibold text-muted-foreground">
              Page Not Found
            </h2>
            <p className="text-muted-foreground">
              Sorry, we couldn&apos;t find the page you&apos;re looking for. It
              might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/">Go Home</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/editor">Create Resume</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
