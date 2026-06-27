import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/lib/content";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <AnimatedReveal>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <SectionLabel>Selected Work</SectionLabel>
              <h2 className="mt-3 text-3xl font-bold text-primary md:text-5xl">
                Events we&apos;re proud to have{" "}
                <span className="font-serif italic">delivered</span>
              </h2>
            </div>
            <Link
              href="/Pricing"
              className="inline-flex items-center gap-1 text-sm font-bold text-secondary hover:underline"
            >
              See all events
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedReveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item, i) => (
            <AnimatedReveal key={item.title} delay={i * 0.08}>
              <GlassCard className="group overflow-hidden p-0 transition-transform hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-primary/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary/40">
                    {item.client}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary/60">
                    {item.description}
                  </p>
                </div>
              </GlassCard>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
