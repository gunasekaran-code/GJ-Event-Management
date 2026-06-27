import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { locations, industries } from "@/lib/content";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";

export function Reach1() {
  return (
    <section id="about" aria-labelledby="reach-heading" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-16 lg:grid-cols-2">

          <AnimatedReveal delay={0.15}>
            <SectionLabel>Industry Depth</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              <span className="font-serif italic">Who we work</span> with
            </h2>
            <p className="mt-4 leading-relaxed text-primary/70">
              Over 15 years across every major celebration type in Tamil Nadu.
              Each event brings its own traditions, stakeholders, and storytelling
              — we honour them all.
            </p>

            <ul className="mt-8 space-y-4">
              {industries.map((industry) => (
                <li key={industry} className="flex items-center gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span className="font-medium text-primary">{industry}</span>
                </li>
              ))}
            </ul>
          </AnimatedReveal>

        </div>
      </div>
    </section>
  );
}
