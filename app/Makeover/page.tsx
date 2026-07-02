"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { ArrowLeft, ShieldCheck, Sparkles, Check, Phone } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { siteConfig } from "@/lib/content";
import { mehandiPackages, heroStats, glamServices, glamAudience } from "@/lib/makeover";

export default function MehandiPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden bg-[#f5f5f5] pt-15 md:pt-15">
        {/* Hero */}
        <AnimatedReveal>
          <section className="relative overflow-hidden bg-[#f8e7f6] py-10 md:py-16">
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
                {/* Left column */}
                <div className="flex flex-col h-full">
                  <div className="flex text-sm">
                    <SectionLabel>Premium Mehandi & Makeover in Thoothukudi</SectionLabel>
                  </div>

                  <h1 className="mt-5 text-4xl font-bold leading-[1.05] text-[#4b164c] md:text-6xl">
                    Best Bridal{" "}
                    <span className="block font-serif italic text-[#bc5eff]">Makeover</span>
                    in Thoothukudi.
                  </h1>

                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#4b164c]/70">
                    From intricate bridal masterpieces to quick festive designs for
                    guests, our artists bring tradition and detail to every celebration.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      href="/Booking?event=Makeover"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#4b164c] to-[#7a2f7d] px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_34px_rgba(75,22,76,0.28)] transition-all hover:shadow-[0_18px_42px_rgba(188,94,255,0.32)]"
                    >
                      <ShieldCheck className="h-4 w-4" />
                      Book Your Mehandi
                    </Link>
                    <Link
                      href="#hygiene-promise"
                      className="text-sm font-bold text-[#4b164c] underline decoration-[#bc5eff]/50 underline-offset-4 transition-colors hover:text-[#bc5eff]"
                    >
                      See Our Hygiene Promise →
                    </Link>
                  </div>

                  <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4 lg:mt-auto lg:pt-10">
                    {heroStats.map((stat) => (
                      <div key={stat.label}>
                        <p className="text-2xl font-bold text-[#4b164c] md:text-3xl">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-[11px] font-bold tracking-wide text-[#4b164c]/50">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right image */}
                <div className="relative h-72 w-full overflow-hidden rounded-3xl shadow-[0_24px_80px_rgba(75,22,76,0.16)] sm:h-96 md:h-[560px] lg:ml-auto lg:max-w-[500px]">
                  <Image
                    src="https://images.pexels.com/photos/5759203/pexels-photo-5759203.jpeg"
                    alt="Bridal Mehandi design"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Status badge */}
                  <div className="absolute left-3 top-3 flex items-center gap-2 rounded-2xl bg-[#2a0d2b]/90 px-3 py-2.5 backdrop-blur-sm sm:left-5 sm:top-5 sm:gap-3 sm:px-4 sm:py-3">
                    <span className="relative flex h-2.5 w-2.5 shrink-0">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </span>
                    <div>
                      <p className="text-xs font-bold text-white sm:text-sm">Next Slot Ready</p>
                      <p className="text-[10px] text-white/60 sm:text-xs">Starts in ~10 mins</p>
                    </div>
                  </div>

                  {/* Pledge badge */}
                  <div className="absolute bottom-3 right-3 max-w-[200px] rounded-2xl bg-[#2a0d2b]/90 px-3 py-2.5 backdrop-blur-sm sm:bottom-5 sm:right-5 sm:max-w-[240px] sm:px-4 sm:py-3">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 shrink-0 text-[#bc5eff]" />
                      <p className="text-xs font-bold text-white sm:text-sm">Skin-Safe Henna</p>
                    </div>
                    <p className="mt-1 text-[10px] leading-relaxed text-white/60 sm:text-xs">
                      100% natural, patch-tested paste. No black henna, ever.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-10 hidden -rotate-90 text-xs font-bold tracking-[0.3em] text-[#4b164c]/30 lg:block">
                SCROLL
              </p>
            </div>
          </section>
        </AnimatedReveal>

        {/* Jen Glam Makeover — artist spotlight */}
        <AnimatedReveal>
          {/* Full-width container that handles the edge-to-edge white background */}
          <div className="w-full bg-white">
            {/* Centered content wrapper */}
            <section className="mx-auto max-w-7xl px-5 py-14 md:px-6 md:py-20">
              <div className="flex justify-center text-sm">
                <SectionLabel>Meet the Artist</SectionLabel>
              </div>
              {/* Fixed the accidental space inside text-[ #4b164c] 👇 */}
              <h2 className="mt-5 text-center text-3xl font-bold text-[#4b164c] md:text-5xl">
                Jen Glam{" "}
                <span className="font-serif italic text-[#bc5eff]">Makeover</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-center text-sm font-bold uppercase tracking-[0.15em] text-[#bc5eff]">
                Enhancing beauty, elevating confidence
              </p>

              <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
                {/* Services */}
                <div className="glass-strong rounded-3xl p-6 shadow-[0_20px_60px_rgba(75,22,76,0.10)] sm:p-8">
                  <h3 className="text-lg font-bold text-[#4b164c]">Our Makeup Services</h3>
                  <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {glamServices.map((service) => (
                      <li
                        key={service}
                        className="flex items-center gap-2 rounded-2xl border border-[#4b164c]/10 bg-white/70 px-4 py-3 text-sm font-semibold text-[#4b164c]"
                      >
                        <Check className="h-4 w-4 shrink-0 text-[#bc5eff]" />
                        {service}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 space-y-2">
                    {glamAudience.map((line) => (
                      <p key={line} className="text-sm leading-relaxed text-[#4b164c]/70">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Contact card */}
                <div className="flex flex-col justify-between rounded-3xl bg-[#4b164c] p-6 text-white shadow-[0_24px_80px_rgba(75,22,76,0.18)] sm:p-8">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#bc5eff]">
                      Get in touch
                    </p>
                    <h3 className="mt-3 text-2xl font-bold leading-tight md:text-3xl">
                      Book Jen Glam <span className="font-serif italic">Makeover</span> for your day
                    </h3>
                    <p className="mt-3 text-sm text-white/70">
                      Reach out directly on Instagram or call to check availability for
                      your wedding, reception, or event.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-col gap-3">
                    <a
                      href="https://instagram.com/jen_glam_makeover_tuty"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-bold transition-all hover:bg-white/20"
                    >
                      <FaInstagram className="h-4 w-4 shrink-0 text-[#bc5eff]" />
                      Jen Glam Makeover Tuty
                    </a>
                    <a
                      href="tel:7448518536"
                      className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-bold transition-all hover:bg-white/20"
                    >
                      <Phone className="h-4 w-4 shrink-0 text-[#bc5eff]" />
                      +91 74485 18536
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </AnimatedReveal>

        {/* Packages */}
        <AnimatedReveal>
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
        </AnimatedReveal>

        {/* CTA */}
        <AnimatedReveal>
          <section className="mx-auto max-w-7xl px-5 pb-16 md:px-6 md:pb-24">
            <div
              className="rounded-3xl bg-[#4b164c] p-6 text-white shadow-[0_24px_80px_rgba(75,22,76,0.18)] bg-cover bg-center sm:p-8 md:p-12"
              style={{
                backgroundImage: `url('/image.jpg')`,
              }}
            >
              <div className="max-w-xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#bc5eff]">
                  Ready to book?
                </p>
                <h3 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
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
        </AnimatedReveal>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}