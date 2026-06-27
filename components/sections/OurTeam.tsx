"use client";

import React, { ReactNode, useRef, useState, useEffect } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { teamMembers } from "@/lib/content";

interface ScrollStackItemProps {
  children: ReactNode;
  index?: number;
  total?: number;
  baseTop?: number;
}

interface ScrollStackProps {
  children: ReactNode;
  className?: string;
  baseTop?: number;
}

export function ScrollStackItem({
  children,
  index = 0,
  baseTop = 120,
}: ScrollStackItemProps) {
  return (
    <div
      className="sticky"
      style={{
        top: `calc(${baseTop}px + ${index * 24}px)`,
        zIndex: 40 + index,
      }}
    >
      {children}
    </div>
  );
}

function ScrollStack({
  children,
  className = "",
  baseTop = 120,
}: ScrollStackProps) {
  const items = React.Children.toArray(children);

  return (
    <div className={`relative ${className}`}>
      {items.map((child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(
            child as React.ReactElement<ScrollStackItemProps>,
            { index, total: items.length, baseTop }
          );
        }
        return child;
      })}
    </div>
  );
}

export function OurTeam() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [baseTop, setBaseTop] = useState(128);

  useEffect(() => {
    const NAV_HEIGHT = 80;

    const compute = () => {
      const isDesktop = window.innerWidth >= 1024;
      if (isDesktop) {
        setBaseTop(128);
      } else {
        // ✅ FIX 2: On mobile, measure the sticky header's FULL height
        // (including its bottom padding pb-6 = 24px) so cards stack
        // below it, not behind it.
        const headerHeight = headerRef.current?.offsetHeight ?? 0;
        setBaseTop(NAV_HEIGHT + headerHeight + 12);
      }
    };

    compute();

    const ro = new ResizeObserver(compute);
    if (headerRef.current) ro.observe(headerRef.current);
    window.addEventListener("resize", compute);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, []);

  return (
    <section id="team" className="bg-bg py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 md:px-6 lg:grid-cols-[0.8fr_1.2fr]">

        {/* Left side: Pinned header */}
        {/* ✅ FIX 3: Lower the header's z-index to z-20 so cards (z-40+)
            always render in front of it during the scroll-behind phase. */}
        <div
          ref={headerRef}
          className="sticky top-20 self-start bg-bg z-20 pb-6 lg:top-32 lg:pb-0"
        >
          <SectionLabel>Our Team</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold text-primary md:text-5xl">
            The people behind{" "}
            <span className="font-serif italic text-primary">every detail</span>
          </h2>
          <p className="mt-5 max-w-xl text-primary/60">
            From first sketch to final setup, each part of the team keeps your
            celebration polished, practical, and personal.
          </p>
        </div>

        {/* Right side: Stacking cards */}
        {/* ✅ FIX 4: Reduced pb from pb-[20vh] to pb-[8vh] — enough for
            the last card to finish stacking without a huge dead-scroll zone. */}
        <ScrollStack className="space-y-6 pb-[8vh]" baseTop={baseTop}>
          {teamMembers.map((member) => (
            <ScrollStackItem key={member.name}>
              <article className="rounded-[28px] border border-white/70 bg-white/85 shadow-[0_24px_70px_rgba(75,22,76,0.12)] backdrop-blur overflow-hidden">
                <div
                  className="relative h-52 w-full flex items-center justify-center"
                  style={{ backgroundColor: "#f8e7f6" }}
                >
                  <div className="flex flex-col items-center gap-2 select-none">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold"
                      style={{
                        backgroundColor: "#4b164c",
                        color: "#f8e7f6",
                      }}
                    >
                      {member.initials}
                    </div>
                    <span className="text-xs text-primary/30 tracking-wide">
                      Photo coming soon
                    </span>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-white/80 to-transparent" />
                </div>

                <div className="p-8 md:p-10">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">
                    {member.role}
                  </p>
                  <h3 className="mt-4 text-2xl font-bold text-primary md:text-3xl">
                    {member.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-primary/65 md:text-base">
                    {member.description}
                  </p>
                </div>
              </article>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}