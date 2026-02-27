'use client';

import { motion } from 'framer-motion';
import { Upload, Sparkles, Download } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    step: '1',
    title: 'Import or Build',
    description:
      'Start from scratch or import your existing PDF resume. Our AI extracts all your data automatically — no manual re-typing.',
  },
  {
    icon: Sparkles,
    step: '2',
    title: 'Polish with AI',
    description:
      'Enhance your content with AI-powered suggestions. Transform weak bullet points into achievement-oriented statements with strong action verbs and metrics.',
  },
  {
    icon: Download,
    step: '3',
    title: 'Export & Apply',
    description:
      'Download your professional resume as a clean, ATS-friendly PDF. Your data stays in your browser — export as JSON anytime for backup.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function HowItWorks() {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Build a professional resume in three simple steps
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid gap-8 md:grid-cols-3"
        >
          {steps.map((s) => (
            <motion.div key={s.step} variants={item} className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <s.icon className="h-7 w-7 text-primary" />
              </div>
              <div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-muted text-xs font-bold">
                {s.step}
              </div>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {s.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
