import { Quote } from "lucide-react";
import { testimonials } from "@/lib/content";
import { GlassCard } from "@/components/ui/GlassCard";
import { Marquee } from "@/components/ui/Marquee";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";

function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <GlassCard className="w-[340px] shrink-0 p-6 md:w-[400px]">
      <Quote className="h-6 w-6 text-accent" />
      <p className="mt-4 text-sm leading-relaxed text-primary/80">{quote}</p>
      <div className="mt-6">
        <p className="font-bold text-primary">{name}</p>
        <p className="text-xs text-primary/50">{role}</p>
      </div>
    </GlassCard>
  );
}

export function Testimonials() {
  const row1 = testimonials.slice(0, 4);
  const row2 = testimonials.slice(4);

  return (
    <section id="testimonials" className="overflow-hidden bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <AnimatedReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary md:text-5xl">
              Trusted by Families{" "}
              <span className="font-serif italic text-secondary">
                Loved by Everyone
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary/60">
              Hear from families and organisations across Thoothukudi and Tamil
              Nadu who chose GJ Decoration for their most important celebrations.
            </p>
          </div>
        </AnimatedReveal>
      </div>

      <div className="mt-12 space-y-6">
        <Marquee direction="left">
          {row1.map((t) => (
            <TestimonialCard key={t.name + t.quote.slice(0, 20)} {...t} />
          ))}
        </Marquee>
        <Marquee direction="right" speed="slow">
          {row2.map((t) => (
            <TestimonialCard key={t.name + t.quote.slice(0, 20)} {...t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
