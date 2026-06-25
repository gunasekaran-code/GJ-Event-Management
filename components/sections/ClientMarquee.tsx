import { clientLogos } from "@/lib/content";
import { Marquee } from "@/components/ui/Marquee";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ClientMarquee() {
  return (
    <section id="clients" className="bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
        <AnimatedReveal>
          <SectionLabel>Producing events for</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold text-primary md:text-4xl">
            <span className="font-serif italic">Families, brands</span> and
            communities
          </h2>
        </AnimatedReveal>
      </div>

      <div className="mt-12">
        <Marquee direction="left" speed="slow">
          {clientLogos.map((name) => (
            <div
              key={name}
              className="flex h-16 w-48 shrink-0 items-center justify-center rounded-xl glass px-6"
            >
              <span className="text-sm font-bold uppercase tracking-wider text-primary/30">
                {name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
