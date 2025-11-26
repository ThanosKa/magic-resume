"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is my data safe?",
    answer:
      "Yes! Your CV data is stored locally in your browser. We never send your personal information to any server unless you explicitly use the AI polishing feature, which only processes the specific text you choose to enhance.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No account required. You can start building your CV immediately. Your progress is automatically saved in your browser, so you can come back anytime to continue editing.",
  },
  {
    question: "How does the AI Polish feature work?",
    answer:
      "Our AI analyzes your text and suggests improvements to make it more professional and impactful. You can choose to accept, modify, or reject any suggestions. You'll need to provide your own API key for this feature.",
  },
  {
    question: "Can I export my CV as PDF?",
    answer:
      "Yes! Click the Print button to open your browser's print dialog, then save as PDF. Your CV is already formatted for standard A4 paper size with professional margins.",
  },
  {
    question: "Is this service free?",
    answer:
      "The CV builder is completely free to use. The AI polishing feature requires your own OpenRouter API key, which has its own pricing based on usage.",
  },
  {
    question: "Can I import an existing CV?",
    answer:
      "Yes! If you've previously exported your CV as JSON, you can import it back using the Import button in the editor. This makes it easy to continue working on a previous version.",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function FAQ() {
  return (
    <section id="faq" className="border-t border-border py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-muted-foreground">Everything you need to know about our CV builder</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={item}>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-base font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
