import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/lib/content";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";

export function BlogPreview() {
  return (
    <section id="insights" className="bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <AnimatedReveal>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <SectionLabel>Insights</SectionLabel>
              <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
                <span className="font-serif italic">Notes from</span> the field
              </h2>
            </div>
            <Link
              href="#"
              className="inline-flex items-center gap-1 text-sm font-bold text-secondary hover:underline"
            >
              Read the blog
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedReveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {blogPosts.map((post, i) => (
            <AnimatedReveal key={post.title} delay={i * 0.1}>
              <GlassCard className="group overflow-hidden p-0 transition-transform hover:-translate-y-1">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-secondary">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-primary/40">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary/60">
                    {post.excerpt}
                  </p>
                  <Link
                    href="#"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-secondary hover:underline"
                  >
                    Read article
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </GlassCard>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
