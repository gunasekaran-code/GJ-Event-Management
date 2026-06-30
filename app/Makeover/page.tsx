"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Sparkles, Clock, Users, Check } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/lib/content";

const mehandiPackages = [
  {
    title: "Bridal Makeover",
    price: "Starting ₹15,000",
    description:
      "Full hand and feet intricate bridal designs with fine detailing, customised to your theme.",
    features: ["Both hands & feet", "Groom design included", "4–6 hrs session", "Trial session"],
  },
  {
    title: "Guest / Party Makeover",
    price: "Starting ₹300 / person",
    description:
      "Quick, elegant designs for wedding guests, sangeet nights, or festive gatherings.",
    features: ["Front hand design", "10–15 min per guest", "Multiple artists available"],
  },
  {
    title: "Festival Makeover",
    price: "Starting ₹2,500",
    description:
      "Traditional and modern motifs for Eid, Diwali, or any celebratory occasion.",
    features: ["Both hands", "Custom motif selection", "1–2 hrs session"],
  },
];

const features = [
  { icon: Sparkles, label: "Natural, skin-safe henna" },
  { icon: Clock, label: "On-time, reliable artists" },
  { icon: Users, label: "Solo or group bookings" },
];

export default function MehandiPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f5f5f5] pt-15 md:pt-15">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#f8e7f6]/100 py-10 md:py-16">
          <div className="relative mx-auto max-w-7xl px-5 md:px-6">
            <div className="mb-7 flex flex-wrap gap-3">
              <Link
                href="/#home"
                className="inline-flex items-center gap-2 rounded-full border border-[#4b164c]/10 bg-white/80 px-4 py-2 text-sm font-bold text-[#4b164c] shadow-[0_10px_30px_rgba(75,22,76,0.08)] transition-all hover:border-[#bc5eff]/50 hover:text-[#bc5eff] hover:shadow-[0_14px_36px_rgba(188,94,255,0.16)]"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to home
              </Link>
            </div>

            <div className="grid gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              {/* Left intro */}
              <div className="flex flex-col h-full">
                <div className="flex justify-center text-sm">
                  <SectionLabel>Makeover Artistry</SectionLabel>
                </div>

                <h1 className="mt-5 text-4xl font-bold leading-tight text-[#4b164c] md:text-6xl">
                  Hand-crafted{" "}
                  <span className="font-serif italic text-[#bc5eff]">Makeover</span> for
                  every occasion
                </h1>

                <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#4b164c]/70 mb-8 md:mb-16">
                  From intricate bridal masterpieces to quick festive designs for guests,
                  our artists bring tradition and detail to every celebration.
                </p>

                <div className="mt-auto grid gap-3">
                  {features.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 rounded-2xl border border-[#4b164c]/10 bg-white/90 px-4 py-3 shadow-[0_12px_34px_rgba(75,22,76,0.06)]"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f8e7f6] text-[#bc5eff]">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-bold text-[#4b164c]">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right image */}
              <div className="relative h-72 w-full overflow-hidden rounded-3xl shadow-[0_24px_80px_rgba(75,22,76,0.12)] md:h-[460px]">
                <Image
                  src="/Makeover-hero.jpg"
                  alt="Bridal Makeover design"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="mx-auto max-w-7xl px-5 py-14 md:px-6 md:py-20">
          <div className="flex justify-center text-sm">
            <SectionLabel>Packages</SectionLabel>
          </div>
          <h2 className="mt-5 text-center text-3xl font-bold text-[#4b164c] md:text-5xl">
            Choose your{" "}
            <span className="font-serif italic text-[#bc5eff]">Makeover</span> package
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {mehandiPackages.map((pkg) => (
              <div
                key={pkg.title}
                className="glass-strong flex flex-col rounded-3xl p-6 shadow-[0_20px_60px_rgba(75,22,76,0.10)] transition-all hover:shadow-[0_24px_70px_rgba(188,94,255,0.18)]"
              >
                <h3 className="text-xl font-bold text-[#4b164c]">{pkg.title}</h3>
                <p className="mt-1 text-sm font-bold text-[#bc5eff]">{pkg.price}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#4b164c]/70">
                  {pkg.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm font-semibold text-[#4b164c]">
                      <Check className="h-4 w-4 shrink-0 text-[#bc5eff]" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/Booking?event=Makeover&selection=${encodeURIComponent(pkg.title)}`}
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-[#4b164c] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#3a1039]"
                >
                  Book This Package
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-5 pb-16 md:px-6 md:pb-24">
          <div
            className="rounded-3xl bg-[#4b164c] p-8 text-white shadow-[0_24px_80px_rgba(75,22,76,0.18)] bg-cover bg-center md:p-12"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1620656798579-1984d9e87df7?auto=format&fit=crop&w=1400&q=80')`,
            }}
          >
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#bc5eff]">
                Ready to book?
              </p>
              <h3 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
                Let's design something{" "}
                <span className="font-serif italic">beautiful</span> together
              </h3>
              <p className="mt-3 text-sm text-white/70">
                Tell us your event date and design preference — we'll match you with the
                right artist.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/Booking?event=Makeover"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#4b164c] transition-all hover:bg-[#f8e7f6]"
                >
                  Book Makeover Now
                </Link>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-white/10"
                >
                  Call {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}