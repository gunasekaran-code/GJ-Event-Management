"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/lib/content";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <AnimatedReveal>
          <h2 className="text-center text-3xl font-bold text-primary md:text-4xl">
            Frequently Asked Questions
          </h2>
        </AnimatedReveal>

        <div className="mt-12 divide-y divide-primary/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <AnimatedReveal key={faq.question} delay={index * 0.05}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between py-6 text-left"
                >
                  <span className="pr-4 font-bold text-primary">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-secondary transition-transform",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 leading-relaxed text-primary/70">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
