'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { ScrollHeader } from '@/components/landing/scroll-header';
import { GitHubStars } from '@/components/shared/github-stars';

export function Header() {
  return (
    <>
      <ScrollHeader>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4"
        >
          <Link href="/" className="flex items-center gap-2">
            <img src="/icon.svg" alt="Magic Resume Logo" className="h-8 w-8" />
            <span className="text-xl font-semibold tracking-tight">
              Magic Resume
            </span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <a
              href="#features"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </a>
            <a
              href="#faq"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              FAQ
            </a>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="hidden sm:block">
              <GitHubStars />
            </div>
            <Button
              asChild
              className="rounded-full px-6"
            >
              <Link href="/editor">Get Started</Link>
            </Button>
          </div>
        </motion.div>
      </ScrollHeader>
      <div className="h-16" aria-hidden />
    </>
  );
}
