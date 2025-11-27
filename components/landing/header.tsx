'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <FileText className="h-6 w-6 text-foreground" />
          <span className="text-xl font-semibold tracking-tight">
            CV Builder
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
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
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="rounded-full px-6">
            <Link href="/editor">Get Started</Link>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
