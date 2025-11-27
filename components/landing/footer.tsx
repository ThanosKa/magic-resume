'use client';

import { motion } from 'framer-motion';
import { Github, Mail } from 'lucide-react';

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        fill="currentColor"
        d="M18.3 2H21l-7 8.1L21.9 22H15l-4.5-5.9L5 22H2.3l7.5-8.6L1.6 2H8l4 5.4z"
      />
    </svg>
  );
}

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
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-2 text-muted-foreground">
            <img
              src="/icon.svg"
              alt="Magic Resume Logo"
              className="h-6 w-6 opacity-80"
            />
            <span className="font-medium">Magic Resume</span>
          </div>

          <div className="flex items-center gap-3 text-muted-foreground">
            <a
              href="https://github.com/ThanosKa/magic-resume"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
              aria-label="GitHub repository"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/KazakisThanos"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
              aria-label="X profile"
            >
              <XIcon className="h-5 w-5" />
            </a>
            <a
              href="mailto:kazakis.th@gmail.com"
              className="transition-colors hover:text-foreground"
              aria-label="Email kazakis.th@gmail.com"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Thaka. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
