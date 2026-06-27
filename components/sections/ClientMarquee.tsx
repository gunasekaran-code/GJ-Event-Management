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

      {/* Added flex-col and gap-6 to stack the marquees with spacing */}
      <div className="mt-12 flex flex-col gap-10">
        
        {/* Top Marquee - Moving Left */}
        <Marquee direction="left" speed="slow">
          {clientLogos.map((client) => (
            <div
              key={client.name}
              className="flex h-19 w-39 shrink-0 items-center justify-center rounded-xl glass px-6"
            >
              <img
                src={client.imgUrl}
                alt={`${client.name} logo`}
                className="max-h-full max-w-full object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </Marquee>

        {/* Bottom Marquee - Moving Right */}
        <Marquee direction="right" speed="slow">
          {/* Reversing the array so the visual order is offset from the top row */}
          {[...clientLogos].reverse().map((client) => (
            <div
              // Added "-right" to the key to ensure React has unique keys across both lists
              key={`${client.name}-right`}
              className="flex h-19 w-39 shrink-0 items-center justify-center rounded-xl glass px-6"
            >
              <img
                src={client.imgUrl}
                alt={`${client.name} logo`}
                className="max-h-full max-w-full object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </Marquee>

      </div>
    </section>
  );
}