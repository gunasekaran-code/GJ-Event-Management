import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { locations, industries } from "@/lib/content";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";

export function Reach() {
  return (
    <section id="about" aria-labelledby="reach-heading" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <AnimatedReveal>
            <SectionLabel>Tamil Nadu Reach</SectionLabel>
            <h2 id="reach-heading" className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              <span className="font-serif italic">Where we produce</span> events
            </h2>
            <p className="mt-4 leading-relaxed text-primary/70">
              Headquartered in Thoothukudi, Tamil Nadu — we are a full-service
              event management and decoration company, with teams deployed
              across South Tamil Nadu for weddings, corporate events, and
              cultural celebrations.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {locations.map((loc) => (
                <Link key={loc.city} href={loc.href}>
                  <GlassCard className="group flex items-center justify-between p-4 transition-colors hover:bg-light">
                    <div>
                      <p className="font-bold text-primary">{loc.city}</p>
                      <p className="text-xs text-primary/50">{loc.region}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-accent opacity-0 transition-opacity group-hover:opacity-100" />
                  </GlassCard>
                </Link>
              ))}
            </div>
          </AnimatedReveal>

        </div>
      </div>
    </section>
  );
}
