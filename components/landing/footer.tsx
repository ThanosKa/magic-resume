'use client';

import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-border bg-muted/30 py-8"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2 text-muted-foreground">
            <img src="/icon.svg" alt="Magic Resume Logo" className="h-6 w-6 opacity-80" />
            <span className="font-medium">Magic Resume</span>
          </div>
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} CV Builder. Built with Next.js.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
