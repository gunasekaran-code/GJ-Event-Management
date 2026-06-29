"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { cn } from "@/lib/utils";

export function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <AnimatedReveal>
          <SectionLabel>Our Services</SectionLabel>
        </AnimatedReveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-2">
            {services.map((service, index) => {
              const isActive = index === active;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActive(index)}
                  className="group w-full text-left cursor-default"
                >
                  <div className="flex items-start gap-4 py-4">
                    <div
                      className={cn(
                        "mt-2 h-0.5 transition-all duration-300",
                        isActive
                          ? "w-8 bg-secondary"
                          : "w-4 bg-primary/20 group-hover:w-6"
                      )}
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3
                          className={cn(
                            "text-2xl font-bold transition-colors md:text-3xl",
                            isActive
                              ? "text-primary"
                              : "text-primary/30 group-hover:text-primary/60"
                          )}
                        >
                          {service.title}
                        </h3>
                        {isActive && (
                          <motion.span
                            layoutId="service-dot"
                            className="h-2.5 w-2.5 rounded-full bg-accent"
                          />
                        )}
                      </div>

                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="mt-3 text-primary/70">
                              {service.description}
                            </p>
                            <a
                              href="/Pricing"
                              className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-secondary hover:opacity-80 transition-opacity"
                            >
                              Explore Details
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </a>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <AnimatedReveal delay={0.2} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl glass">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={current.image}
                    alt={current.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}