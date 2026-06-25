"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { stats } from "@/lib/content";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { cn } from "@/lib/utils";

export function BehindTheScenes() {
  const [active, setActive] = useState(0);

  return (
    <section id="stats" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <AnimatedReveal>
          <h2 className="text-center text-3xl font-bold text-primary md:text-4xl">
            Behind the Scenes:{" "}
            <span className="font-serif italic">GJ in Figures</span>
          </h2>
        </AnimatedReveal>

        {/* Desktop: vertical accordion */}
        <div className="mt-12 hidden min-h-[70vh] gap-2 md:flex">
          {stats.map((stat, index) => {
            const isActive = index === active;
            return (
              <motion.button
                key={stat.id}
                layout
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                className={cn(
                  "relative overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary",
                  isActive ? "flex-[6]" : "flex-[1]"
                )}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <Image
                  src={stat.image}
                  alt={stat.imageAlt}
                  fill
                  className={cn(
                    "object-cover transition-all duration-500",
                    isActive ? "grayscale-0" : "grayscale"
                  )}
                  sizes="(max-width: 768px) 100vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <p className="text-3xl font-bold text-white md:text-5xl">
                    {stat.value}
                  </p>
                  {isActive ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-2"
                    >
                      <p className="text-lg font-bold text-white">
                        {stat.title}
                      </p>
                      <p className="mt-1 text-sm text-white/80">
                        {stat.description}
                      </p>
                    </motion.div>
                  ) : (
                    <p
                      className="mt-1 text-xs font-bold text-white/80 md:[writing-mode:vertical-lr] md:rotate-180"
                      style={{ maxHeight: isActive ? undefined : "120px" }}
                    >
                      {stat.title}
                    </p>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Mobile: stacked cards */}
        <div className="mt-8 space-y-4 md:hidden">
          {stats.map((stat, index) => (
            <button
              key={stat.id}
              onClick={() => setActive(index)}
              className={cn(
                "relative w-full overflow-hidden rounded-2xl text-left transition-all",
                active === index ? "h-64" : "h-20"
              )}
            >
              <Image
                src={stat.image}
                alt={stat.imageAlt}
                fill
                className={cn(
                  "object-cover",
                  active === index ? "grayscale-0" : "grayscale"
                )}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-primary/20" />
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm font-bold text-white">{stat.title}</p>
                {active === index && (
                  <p className="mt-1 text-xs text-white/80">
                    {stat.description}
                  </p>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
