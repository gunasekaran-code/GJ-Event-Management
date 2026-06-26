"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/content";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useState, useEffect } from "react";

const heroSlides = [
  {
    src: "https://images.unsplash.com/photo-1587271636175-90d58cdad458?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Traditional wedding mandap decoration in Thoothukudi",
  },
  {
    src: "https://images.unsplash.com/photo-1633443682042-17462ad4ad76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Reception flower decoration by GJ Events Thoothukudi",
  },
  {
    src: "https://images.unsplash.com/photo-1756190564669-215843660e93?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Outdoor event decoration Thoothukudi Tamil Nadu",
  },
  {
    src: "https://images.unsplash.com/photo-1595436805731-10652dcd9de8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Sangeet stage setup Tamil Nadu event management",
  },

];

const rotatingWords = ["Timeless", "Elegant", "Sacred", "Grand"];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(slideTimer);
  }, []);

  useEffect(() => {
    const wordTimer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(wordTimer);
  }, []);

  return (
    <section
      id="home"
      aria-label="GJ Decoration & Event Management – Thoothukudi"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg"
    >
      {/* Full-screen background slideshow */}
      {heroSlides.map((slide, i) => (
        <AnimatePresence key={i}>
          {current === i && (
            <motion.div
              key={i}
              className="absolute inset-0 z-0"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="h-full w-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />
            </motion.div>
          )}
        </AnimatePresence>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Slide dots */}
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${current === i ? "w-8 bg-white" : "w-1.5 bg-white/40"
              }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-5xl px-4 py-20 text-center md:px-6 ">
        <AnimatedReveal>
          <div className="-mt-4 mb-4 flex justify-center md:mb-5">
            {/* <SectionLabel className="mb-5 text-xs font-medium tracking-normal text-[#cb8cff] normal-case">
      Event Decorators in Thoothukudi, Tamil Nadu
    </SectionLabel> */}
          </div>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            We Craft{" "}
            <span className="relative inline-block font-serif italic">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[wordIndex]}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  // className="inline-block bg-gradient-to-r from-[#4b164c] via-[var(--color-secondary)] to-[#4b164c] bg-clip-text text-transparent"    // Purple
                  className="inline-block bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#aa771c] bg-clip-text text-transparent"   // Gold 
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>{" "}
            Celebrations
          </h1>
        </AnimatedReveal>

        <AnimatedReveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            GJ Decoration & Event Management — Thoothukudi&apos;s trusted choice for
            authentic Tamil Nadu wedding mandap designs, reception decor, and
            full event production across Tuticorin and Tamil Nadu.
          </p>
        </AnimatedReveal>

        <AnimatedReveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/Booking"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 text-sm font-bold text-white transition-transform hover:scale-105"
            >
              Plan Your Event
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              View Our Work
            </Link>
          </div>
        </AnimatedReveal>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 text-sm text-white/40"
        >
          Trusted by families across {siteConfig.address.state}
        </motion.div>
      </div>
    </section>
  );
}
