'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-muted via-background to-background" />

      <div className="container mx-auto max-w-6xl px-4 py-24 md:py-32 lg:py-40">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/editor"
              prefetch
              className={cn(
                'group inline-flex items-center rounded-full border border-gray-200/80 bg-gray-100/80 px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm transition-all ease-in',
                'hover:border-gray-300 hover:bg-gray-200 hover:text-gray-800',
                'dark:border-white/10 dark:bg-neutral-900/90 dark:text-neutral-100 dark:hover:border-white/20 dark:hover:bg-neutral-800'
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center gap-2 text-sm text-inherit transition ease-out">
                <span>✨ AI-Powered CV Enhancement</span>
                <ArrowRightIcon className="h-3 w-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 max-w-4xl text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
          >
            Build Your Professional CV in{' '}
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Minutes
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl"
          >
            Create stunning, professional resumes with our intuitive editor. See
            changes in real-time, polish your content with AI, and export
            anywhere.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button asChild size="lg" className="rounded-full px-8 text-base">
              <Link href="/editor">
                Create Your CV
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 text-base bg-transparent"
            >
              <Link href="#features">Learn More</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 w-full max-w-4xl"
          >
            <div className="relative rounded-xl border border-border bg-muted/30 p-2 shadow-2xl">
              <div className="aspect-[16/10] overflow-hidden rounded-lg border border-border bg-background">
                <div className="flex h-full">
                  <div className="w-2/5 border-r border-border bg-muted/50 p-4">
                    <div className="space-y-3">
                      <div className="h-3 w-1/2 rounded bg-foreground/10" />
                      <div className="h-8 w-full rounded bg-foreground/5" />
                      <div className="h-8 w-full rounded bg-foreground/5" />
                      <div className="mt-4 h-3 w-1/3 rounded bg-foreground/10" />
                      <div className="h-20 w-full rounded bg-foreground/5" />
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-6 dark:bg-white">
                    <div className="space-y-4">
                      <div className="h-6 w-1/3 rounded bg-gray-200" />
                      <div className="h-3 w-1/4 rounded bg-gray-100" />
                      <div className="mt-6 h-3 w-1/5 rounded bg-gray-300" />
                      <div className="space-y-2">
                        <div className="h-2 w-full rounded bg-gray-100" />
                        <div className="h-2 w-5/6 rounded bg-gray-100" />
                        <div className="h-2 w-4/6 rounded bg-gray-100" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
