"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/content";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg pt-24"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-light via-bg to-white" />
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 py-20 text-center md:px-6">
        <AnimatedReveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-secondary">
            Thoothukudi, Tamil Nadu
          </p>
          <h1 className="text-4xl font-bold leading-tight text-primary md:text-6xl lg:text-7xl">
            We Craft{" "}
            <span className="font-serif italic text-secondary">
              Traditional
            </span>{" "}
            Celebrations
          </h1>
        </AnimatedReveal>

        <AnimatedReveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary/70">
            GJ Decoration & Event Management brings authentic Tamil Nadu wedding
            mandap designs, reception decor, and full event production to
            Thoothukudi and across Tamil Nadu — where tradition meets modern
            excellence.
          </p>
        </AnimatedReveal>

        <AnimatedReveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white transition-transform hover:scale-105"
            >
              Plan Your Event
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-8 py-4 text-sm font-bold text-primary transition-colors hover:bg-light"
            >
              View Our Work
            </Link>
          </div>
        </AnimatedReveal>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 text-sm text-primary/40"
        >
          Trusted by families across {siteConfig.address.state}
        </motion.div>
      </div>
    </section>
  );
}
