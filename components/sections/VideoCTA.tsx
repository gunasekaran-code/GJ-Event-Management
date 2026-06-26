"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
          title="Event background video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45 z-0" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center text-white px-4">
        <div className="flex flex-col items-center gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Celebrate Extraordinary Moments With Us
          </p>

          <h2 className="font-display text-white text-4xl font-bold md:text-5xl lg:text-6xl  leading-[1.15] max-w-3xl">
            Every Event Tells a Story.<br />
            Let Us Craft Yours.
          </h2>

          <p className="text-sm md:text-base text-white/70 max-w-md leading-relaxed">
            From intimate gatherings to grand milestones —
            <br className="hidden md:block" />
            celebrate in comfort, leave a lasting impression.
          </p>

        </div>
      </div>
    </section>
  );
}