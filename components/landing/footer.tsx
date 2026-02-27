'use client';

import Link from 'next/link';
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

const footerLinks = {
  Product: [
    { label: 'Resume Builder', href: '/editor' },
    { label: 'Resume Examples', href: '/resume-examples' },
    { label: 'Resume Templates', href: '/resume-templates' },
    { label: 'Free Tools', href: '/tools' },
  ],
  Resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Glossary', href: '/glossary' },
    { label: 'Compare', href: '/compare' },
    { label: 'FAQ', href: '/#faq' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'GitHub', href: 'https://github.com/ThanosKa/magic-resume' },
  ],
};

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-border bg-muted/30 py-12"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <img
                src="/icon.svg"
                alt="Magic Resume Logo"
                className="h-6 w-6 opacity-80"
              />
              <span className="font-semibold">Magic Resume</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Free AI-powered resume builder. No sign-up required, no paywall,
              no catches.
            </p>
            <div className="mt-4 flex items-center gap-3 text-muted-foreground">
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
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-3 text-sm font-semibold">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith('http') ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Magic Resume. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
