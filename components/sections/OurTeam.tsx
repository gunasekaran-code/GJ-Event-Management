"use client";

import React, { ReactNode } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface ScrollStackItemProps {
  children: ReactNode;
  index?: number;
  total?: number;
}

interface ScrollStackProps {
  children: ReactNode;
  className?: string;
}

const teamMembers = [
  {
    name: "Event Coordination",
    role: "Timeline, vendors, and on-day support",
    description:
      "Keeps the moving parts aligned so every setup is ready on time and the celebration feels calm from start to finish.",
    photo: "/team/event-coordination.jpg",
    initials: "EC",
    emoji: "📋",
  },
  {
    name: "Creative Planning",
    role: "Concepts, themes, and event styling",
    description:
      "Translates your occasion into a clear decoration plan with colors, floral cues, stage styling, and guest-flow details.",
    photo: "/team/creative-planning.jpg",
    initials: "CP",
    emoji: "🎨",
  },
  {
    name: "Production Team",
    role: "Fabrication, setup, and finishing",
    description:
      "Builds the visible experience on site, from entrance arches and backdrops to lighting, props, and clean final touches.",
    photo: "/team/production-team.jpg",
    initials: "PT",
    emoji: "🏗️",
  },
];

export function ScrollStackItem({ children, index = 0 }: ScrollStackItemProps) {
  return (
    <div
      className="sticky"
      style={{
        // Using a fixed base (120px) prevents "jumping" on different screens.
        // The index offset creates the slight stack effect.
        top: `calc(120px + ${index * 24}px)`,
        zIndex: index + 10,
      }}
    >
      {children}
    </div>
  );
}

function ScrollStack({ children, className = "" }: ScrollStackProps) {
  const items = React.Children.toArray(children);

  return (
    <div className={`relative ${className}`}>
      {items.map((child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(
            child as React.ReactElement<ScrollStackItemProps>,
            { index, total: items.length }
          );
        }
        return child;
      })}
    </div>
  );
}

export function OurTeam() {
  return (
    <section id="team" className="bg-bg py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 md:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        
        {/* Left side: Pinned header */}
        <div className="lg:sticky lg:top-32 lg:self-start">
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
        <ScrollStack className="space-y-6 pb-[20vh]">
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