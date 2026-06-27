"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/content";


export function VideoCTA() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Fullscreen pinned YouTube background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none -z-10">
        <iframe
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "calc(100vw + 200px)",
            height: "calc(100vh + 200px)",
            minWidth: "177.78vh",
            minHeight: "56.25vw",
          }}
          src="https://www.youtube.com/embed/Co2Ot_nnI-8?autoplay=1&mute=1&loop=1&playlist=Co2Ot_nnI-8&controls=0&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&disablekb=1&playsinline=1&enablejsapi=1"
          title="GJ Event Management – Event background"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center text-white px-4">
        <div className="flex flex-col items-center gap-4 max-w-3xl">

          {/* Eyebrow */}
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
            Thoothukudi's Trusted Event Planners
          </p>

          {/* Headline */}
          <h2 className="font-display text-white text-4xl font-bold md:text-5xl lg:text-6xl leading-[1.15]">
            Every Celebration Deserves{" "}
            <span className="italic">a Perfect Stage.</span>
          </h2>

          <h1 className=" font-display" > 

          </h1>



          {/* Sub-copy — pulled from your Google listing description */}
          <p className="text-sm md:text-base text-white/70 max-w-lg leading-relaxed">
            Décor, pandhal, catering, stage, DJ, lighting & more —
            <br className="hidden md:block" />
            GJ Event Management brings every detail to life, right here in Thoothukudi.
          </p>

          {/* Service pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-1">
            {[
              "Birthday Themes",
              "School & College Events",
              "Weddings",
              "DJ & Lighting",
              "Catering",
              "Pandhal & Stages",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#4b164c] shadow-lg transition hover:bg-white/90 active:scale-95"
            >
              Book Your Event
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            
            <a href="tel:+919843358537"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 active:scale-95"
            >
              {siteConfig.phone}
            </a>
          </div>

          {/* Trust line */}
          <p className="text-xs text-white/40 mt-1">
            Open 24 hours · Anna Nagar, Thoothukudi
          </p>

        </div>
      </div>
    </section>
  );
}