"use client"

import { motion } from "framer-motion"
import { Eye, Sparkles, Download, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Eye,
    title: "Real-Time Preview",
    description:
      "See your CV update instantly as you type. No guessing, no surprises - what you see is exactly what you get.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Polish",
    description:
      "Enhance your content with intelligent suggestions. Our AI helps you articulate your achievements more effectively.",
  },
  {
    icon: Download,
    title: "Export Anywhere",
    description: "Download as JSON for backup or print directly to PDF. Your CV, your format, your choice.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "Your data stays in your browser. No account required, no data sent to servers unless you use AI features.",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Features() {
  return (
    <section id="features" className="border-t border-border bg-muted/30 py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Everything You Need</h2>
          <p className="mt-4 text-lg text-muted-foreground">Powerful features to help you create the perfect CV</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={item}>
              <Card className="h-full border-border/50 bg-background transition-colors hover:border-border">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                    <feature.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="mb-2 font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
