import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";

export function Founders() {
  return (
    <section
      id="Founders"
      aria-labelledby="founders-heading"
      className="scroll-mt-24 bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Section intro */}
        <AnimatedReveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>The People Behind It</SectionLabel>
            <h2
              id="founders-heading"
              className="mt-3 text-3xl font-bold text-primary md:text-4xl"
            >
              Meet our <span className="font-serif italic">Founder</span> &
              Co-Founder
            </h2>
            <p className="mt-4 leading-relaxed text-primary/70">
              Two people, one vision — building South Tamil Nadu&apos;s most
              trusted event experience brand from Thoothukudi.
            </p>
          </div>
        </AnimatedReveal>

        {/* Founder — image left, content right */}
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedReveal>
            <GlassCard className="relative h-[320px] w-full overflow-hidden p-0">
              <Image
                src="/image/founder.jpeg"
                alt="Founder"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
            </GlassCard>
          </AnimatedReveal>

          <AnimatedReveal>
            <SectionLabel>Founder</SectionLabel>
            <h3 className="mt-3 text-2xl font-bold text-primary md:text-3xl">
              <span className="font-serif italic">Name Surname</span>
            </h3>
            <p className="mt-1 text-sm font-medium text-accent">
              Founder &amp; Creative Director
            </p>
            <p className="mt-4 leading-relaxed text-primary/70">
              With over a decade of experience in event design and
              production, [Name] founded the company with a simple belief —
              every celebration deserves to feel effortless, elegant, and
              deeply personal. From intimate weddings to large-scale
              corporate events, [he/she] leads every production with an eye
              for detail and a passion for storytelling.
            </p>
            <p className="mt-4 leading-relaxed text-primary/70">
              Under [his/her] leadership, the team has grown into one of
              South Tamil Nadu&apos;s most sought-after event management and
              decoration companies.
            </p>
          </AnimatedReveal>
        </div>

        {/* Co-Founder — content left, image right (reversed on mobile) */}
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedReveal className="order-2 lg:order-1">
            <SectionLabel>Co-Founder</SectionLabel>
            <h3 className="mt-3 text-2xl font-bold text-primary md:text-3xl">
              <span className="font-serif italic">Name Surname</span>
            </h3>
            <p className="mt-1 text-sm font-medium text-accent">
              Co-Founder &amp; Operations Head
            </p>
            <p className="mt-4 leading-relaxed text-primary/70">
              [Name] brings structure and precision to every event behind the
              scenes. Overseeing logistics, vendor relationships, and
              on-ground execution, [he/she] ensures that every event runs
              seamlessly from planning to the final moment.
            </p>
            <p className="mt-4 leading-relaxed text-primary/70">
              [His/Her] operational expertise, paired with a deep
              understanding of client needs, has been instrumental in scaling
              the company&apos;s reach across Tamil Nadu.
            </p>
          </AnimatedReveal>

          <AnimatedReveal className="order-1 lg:order-2">
            <GlassCard className="relative h-[320px] w-full overflow-hidden p-0">
              <Image
                src="/image/cofounder.jpeg"
                alt="Co-Founder"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
            </GlassCard>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}