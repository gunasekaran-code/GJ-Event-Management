"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeft,
    ArrowUpRight,
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    CheckCircle2,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { siteConfig } from "@/lib/content";

const contactDetails = [
    {
        icon: Phone,
        label: "Call / WhatsApp",
        value: siteConfig.phoneDisplay,
        href: `tel:${siteConfig.phone}`,
        sub: "Mon – Sun, 8 AM – 9 PM",
    },
    {
        icon: Mail,
        label: "Email Us",
        value: siteConfig.email ?? "gjdecoration@gmail.com",
        href: `mailto:${siteConfig.email ?? "gjdecoration@gmail.com"}`,
        sub: "We reply within 24 hours",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Thoothukudi, Tamil Nadu",
        href: "https://maps.google.com/?q=Thoothukudi,Tamil+Nadu",
        sub: "Serving all of Tamil Nadu",
    },
    {
        icon: Clock,
        label: "Working Hours",
        value: "8:00 AM – 9:00 PM",
        href: "https://maps.google.com/?q=Thoothukudi,Tamil+Nadu",
        sub: "Available 7 days a week",
    },
];

type FormState = {
    name: string;
    phone: string;
    email: string;
    eventType: string;
    message: string;
};

const EVENT_TYPES = [
    "Wedding",
    "Reception",
    "Engagement",
    "Birthday",
    "Corporate Event",
    "Other",
];

export default function ContactPage() {
    const [form, setForm] = useState<FormState>({
        name: "",
        phone: "",
        email: "",
        eventType: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    function selectEvent(type: string) {
        setForm((prev) => ({ ...prev, eventType: type }));
    }

    async function handleSubmit(e: React.MouseEvent) {
        e.preventDefault();
        if (!form.name || !form.phone) return;
        setLoading(true);
        await new Promise((r) => setTimeout(r, 1200));
        setLoading(false);
        setSubmitted(true);
    }

    return (
        <>
            <Header />
            <main className="bg-[#f5f5f5] pt-15 md:pt-15">

                {/* ── Hero band ── */}
                <section className="relative overflow-hidden bg-[#f8e7f6] py-10 md:py-16">
                    <div className="mx-auto max-w-7xl px-4 md:px-6">

                        {/* Back */}
                        <div className="mb-7">
                            <Link
                                href="/#home"
                                className="inline-flex items-center gap-2 rounded-full border border-[#4b164c]/10 bg-white/80 px-4 py-2 text-sm font-bold text-[#4b164c] shadow-[0_10px_30px_rgba(75,22,76,0.08)] transition-all hover:border-[#bc5eff]/50 hover:text-[#bc5eff] hover:shadow-[0_14px_36px_rgba(188,94,255,0.16)]"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Back to home
                            </Link>
                        </div>

                        <AnimatedReveal>
                            <div className="flex justify-center mb-4">
                                <SectionLabel>Get In Touch</SectionLabel>
                            </div>
                            <div className="text-center mb-10">
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#bc5eff]">
                                    Let's Plan Together
                                </p>
                                <h1 className="mt-2 text-3xl font-bold text-[#4b164c] md:text-4xl">
                                    Contact Us
                                </h1>
                                <p className="mt-2 text-[#4b164c]/60 max-w-xl mx-auto">
                                    Have a wedding or event in mind? Reach out and we'll craft
                                    something unforgettable for you.
                                </p>
                            </div>
                        </AnimatedReveal>

                        {/* Contact cards */}
                        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                            {contactDetails.map((item, i) => (
                                <AnimatedReveal key={item.label} delay={i * 0.07}>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            target={item.href.startsWith("http") ? "_blank" : undefined}
                                            rel="noreferrer"
                                            className="group flex flex-col gap-3 rounded-3xl border border-[#4b164c]/10 bg-white/90 p-6 shadow-[0_12px_40px_rgba(75,22,76,0.06)] transition-all duration-300 hover:border-[#bc5eff]/40 hover:shadow-[0_20px_50px_rgba(188,94,255,0.12)] hover:-translate-y-1"
                                        >
                                            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f8e7f6]">
                                                <item.icon className="h-5 w-5 text-[#4b164c]" />
                                            </span>
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#bc5eff]">
                                                    {item.label}
                                                </p>
                                                <p className="mt-1 font-bold text-[#4b164c] group-hover:text-[#bc5eff] transition-colors">
                                                    {item.value}
                                                </p>
                                                <p className="mt-0.5 text-xs text-[#4b164c]/50">{item.sub}</p>
                                            </div>
                                        </a>
                                    ) : (
                                        <div className="flex flex-col gap-3 rounded-3xl border border-[#4b164c]/10 bg-white/90 p-6 shadow-[0_12px_40px_rgba(75,22,76,0.06)]">
                                            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f8e7f6]">
                                                <item.icon className="h-5 w-5 text-[#4b164c]" />
                                            </span>
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#bc5eff]">
                                                    {item.label}
                                                </p>
                                                <p className="mt-1 font-bold text-[#4b164c]">{item.value}</p>
                                                <p className="mt-0.5 text-xs text-[#4b164c]/50">{item.sub}</p>
                                            </div>
                                        </div>
                                    )}
                                </AnimatedReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Form + Map ── */}
                <section className="relative overflow-hidden bg-[#f8e7f6]/100 py-10 md:py-16">
                    <div className="mx-auto max-w-7xl px-4 md:px-6">
                        <div className="grid gap-8 lg:grid-cols-2">

                            {/* Form */}
                            <AnimatedReveal>
                                <div className="rounded-3xl border border-[#4b164c]/10 bg-white/90 p-7 shadow-[0_12px_40px_rgba(75,22,76,0.06)] md:p-9">
                                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#bc5eff]">
                                        Send a Message
                                    </p>
                                    <h2 className="mt-2 text-2xl font-bold text-[#4b164c] md:text-3xl">
                                        Tell us about your event
                                    </h2>
                                    <p className="mt-1 text-sm text-[#4b164c]/55">
                                        Fill in the details and we'll get back to you shortly.
                                    </p>

                                    <AnimatePresence mode="wait">
                                        {submitted ? (
                                            <motion.div
                                                key="success"
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="mt-10 flex flex-col items-center gap-4 py-10 text-center"
                                            >
                                                <CheckCircle2 className="h-14 w-14 text-[#bc5eff]" />
                                                <h3 className="text-xl font-bold text-[#4b164c]">
                                                    Message Sent!
                                                </h3>
                                                <p className="text-sm text-[#4b164c]/60">
                                                    Thank you, {form.name}. We'll reach you on{" "}
                                                    <span className="font-bold text-[#4b164c]">
                                                        {form.phone}
                                                    </span>{" "}
                                                    soon.
                                                </p>
                                                <button
                                                    onClick={() => {
                                                        setSubmitted(false);
                                                        setForm({
                                                            name: "",
                                                            phone: "",
                                                            email: "",
                                                            eventType: "",
                                                            message: "",
                                                        });
                                                    }}
                                                    className="mt-2 rounded-full border border-[#4b164c]/15 px-5 py-2.5 text-sm font-bold text-[#4b164c] transition-colors hover:border-[#bc5eff]/40 hover:text-[#bc5eff]"
                                                >
                                                    Send another
                                                </button>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="form"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="mt-7 flex flex-col gap-5"
                                            >
                                                {/* Name + Phone */}
                                                <div className="grid gap-4 sm:grid-cols-2">
                                                    <div className="flex flex-col gap-1.5">
                                                        <label className="text-xs font-bold uppercase tracking-wider text-[#4b164c]/60">
                                                            Full Name <span className="text-[#bc5eff]">*</span>
                                                        </label>
                                                        <input
                                                            name="name"
                                                            value={form.name}
                                                            onChange={handleChange}
                                                            placeholder="Your name"
                                                            className="rounded-2xl border border-[#4b164c]/12 bg-[#f8e7f6]/40 px-4 py-3 text-sm font-semibold text-[#4b164c] placeholder:text-[#4b164c]/30 outline-none transition-all focus:border-[#bc5eff]/50 focus:bg-white focus:shadow-[0_0_0_3px_rgba(188,94,255,0.1)]"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col gap-1.5">
                                                        <label className="text-xs font-bold uppercase tracking-wider text-[#4b164c]/60">
                                                            Phone <span className="text-[#bc5eff]">*</span>
                                                        </label>
                                                        <input
                                                            name="phone"
                                                            value={form.phone}
                                                            onChange={handleChange}
                                                            placeholder="+91 00000 00000"
                                                            className="rounded-2xl border border-[#4b164c]/12 bg-[#f8e7f6]/40 px-4 py-3 text-sm font-semibold text-[#4b164c] placeholder:text-[#4b164c]/30 outline-none transition-all focus:border-[#bc5eff]/50 focus:bg-white focus:shadow-[0_0_0_3px_rgba(188,94,255,0.1)]"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Email */}
                                                <div className="flex flex-col gap-1.5">
                                                    <label className="text-xs font-bold uppercase tracking-wider text-[#4b164c]/60">
                                                        Email
                                                    </label>
                                                    <input
                                                        name="email"
                                                        value={form.email}
                                                        onChange={handleChange}
                                                        placeholder="you@email.com"
                                                        className="rounded-2xl border border-[#4b164c]/12 bg-[#f8e7f6]/40 px-4 py-3 text-sm font-semibold text-[#4b164c] placeholder:text-[#4b164c]/30 outline-none transition-all focus:border-[#bc5eff]/50 focus:bg-white focus:shadow-[0_0_0_3px_rgba(188,94,255,0.1)]"
                                                    />
                                                </div>

                                                {/* Event type chips */}
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-xs font-bold uppercase tracking-wider text-[#4b164c]/60">
                                                        Event Type
                                                    </label>
                                                    <div className="flex flex-wrap gap-2">
                                                        {EVENT_TYPES.map((type) => (
                                                            <button
                                                                key={type}
                                                                type="button"
                                                                onClick={() => selectEvent(type)}
                                                                className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-200 ${form.eventType === type
                                                                        ? "bg-[#4b164c] text-white shadow-[0_4px_14px_rgba(75,22,76,0.3)]"
                                                                        : "border border-[#4b164c]/15 bg-white text-[#4b164c] hover:border-[#bc5eff]/40 hover:text-[#bc5eff]"
                                                                    }`}
                                                            >
                                                                {type}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Message */}
                                                <div className="flex flex-col gap-1.5">
                                                    <label className="text-xs font-bold uppercase tracking-wider text-[#4b164c]/60">
                                                        Message
                                                    </label>
                                                    <textarea
                                                        name="message"
                                                        value={form.message}
                                                        onChange={handleChange}
                                                        rows={4}
                                                        placeholder="Tell us your event date, venue, guest count…"
                                                        className="resize-none rounded-2xl border border-[#4b164c]/12 bg-[#f8e7f6]/40 px-4 py-3 text-sm font-semibold text-[#4b164c] placeholder:text-[#4b164c]/30 outline-none transition-all focus:border-[#bc5eff]/50 focus:bg-white focus:shadow-[0_0_0_3px_rgba(188,94,255,0.1)]"
                                                    />
                                                </div>

                                                {/* Submit */}
                                                <button
                                                    type="button"
                                                    onClick={handleSubmit}
                                                    disabled={loading || !form.name || !form.phone}
                                                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-white transition-transform hover:bg-primary/90 md:w-auto"
                                                >
                                                    {loading ? (
                                                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                                    ) : (
                                                        <Send className="h-4 w-4" />
                                                    )}
                                                    {loading ? "Sending…" : "Send Message"}
                                                </button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </AnimatedReveal>

                            {/* Map + WhatsApp CTA */}
                            <AnimatedReveal delay={0.1}>
                                <div className="flex flex-col gap-6 h-full">

                                    {/* Map embed */}
                                    <div className="overflow-hidden rounded-3xl border border-[#4b164c]/10 shadow-[0_12px_40px_rgba(75,22,76,0.06)] flex-1 min-h-[280px]">
                                        <iframe
                                            title="GJ Decoration Location"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62968.24!2d78.1348!3d8.7642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03ef3d5d3b1c77%3A0x1!2sThoothukudi%2C+Tamil+Nadu!5e0!3m2!1sen!2sin!4v1"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0, minHeight: 280 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        />
                                    </div>

                                    {/* WhatsApp CTA card */}
                                    <div className="rounded-3xl border border-[#4b164c]/10 bg-white/90 p-6 shadow-[0_12px_40px_rgba(75,22,76,0.06)]">
                                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#bc5eff]">
                                            Prefer WhatsApp?
                                        </p>
                                        <h3 className="mt-1 text-lg font-bold text-[#4b164c]">
                                            Chat with us directly
                                        </h3>
                                        <p className="mt-1 text-sm text-[#4b164c]/55">
                                            Quick replies, photos, and quote discussions — all on WhatsApp.
                                        </p>
                                        <a
                                            href={`https://wa.me/91${siteConfig.phone}?text=Hi%20GJ%20Decoration%2C%20I%27d%20like%20to%20enquire%20about%20your%20services.`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white shadow-[0_6px_20px_rgba(37,211,102,0.3)] transition-all hover:scale-105 hover:shadow-[0_10px_28px_rgba(37,211,102,0.4)]"
                                        >
                                            <svg className="h-4 w-4 fill-white" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                            Chat on WhatsApp
                                            <ArrowUpRight className="h-3.5 w-3.5" />
                                        </a>
                                    </div>
                                </div>
                            </AnimatedReveal>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <ScrollToTop />
        </>
    );
}