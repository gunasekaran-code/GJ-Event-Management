import Link from "next/link";
import { ArrowLeft, CalendarDays, ChevronDown, Clock, Send } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/lib/content";

const eventTypes = [
  "Wedding",
  "Birthday",
  "Corporate",
  "Social Gathering",
  "Classical Performance / Dance Event",
];

const guestCounts = ["Under 50", "50-150", "150-300", "300+"];

const fieldClass =
  "min-h-12 w-full rounded-2xl border border-primary/10 bg-white/90 px-4 py-3 text-sm font-semibold text-primary shadow-[0_12px_34px_rgba(75,22,76,0.06)] outline-none transition-all placeholder:text-primary/35 hover:border-secondary/50 focus:border-secondary focus:bg-white focus:shadow-[0_14px_38px_rgba(221,136,207,0.18)] focus:ring-4 focus:ring-secondary/15";

const iconFieldClass = `${fieldClass} pr-12 [color-scheme:light]`;
const pickerFieldClass = `${iconFieldClass} appearance-none [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0`;

export default function BookingPage() {
  return (
    <>
      <Header />
      <main className="bg-bg pt-20 md:pt-24">
        <section className="relative overflow-hidden bg-light/60 py-10 md:py-16">
          <div className="absolute inset-x-0 top-0 h-24 bg-white/50" />
          <div className="relative mx-auto max-w-7xl px-4 md:px-6">
            <Link
              href="/#home"
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/80 px-4 py-2 text-sm font-bold text-primary shadow-[0_10px_30px_rgba(75,22,76,0.08)] transition-all hover:border-secondary/50 hover:text-secondary hover:shadow-[0_14px_36px_rgba(221,136,207,0.16)]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>

            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <SectionLabel>Booking</SectionLabel>
                <h1 className="mt-5 text-4xl font-bold leading-tight text-primary md:text-6xl">
                  Plan your{" "}
                  <span className="font-serif italic text-secondary">
                    event
                  </span>
                </h1>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-primary/70">
                  Share the basics with us and our team will get back to you
                  with the right decor, production, and planning support for
                  your celebration.
                </p>

                <div className="mt-8 rounded-2xl bg-primary p-6 text-white shadow-[0_20px_60px_rgba(75,22,76,0.18)]">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                    Direct Contact
                  </p>
                  <a
                    href={`tel:${siteConfig.phoneDisplay}`}
                    className="mt-3 block text-2xl font-bold"
                  >
                    {siteConfig.phone}
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-2 block text-sm text-white/70 transition-colors hover:text-secondary"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <form className="glass-strong rounded-3xl p-5 shadow-[0_24px_80px_rgba(75,22,76,0.12)] md:p-8">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-sm font-bold text-primary">
                      Full Name
                    </span>
                    <input
                      name="fullName"
                      type="text"
                      required
                      className={fieldClass}
                      placeholder="Your name"
                    />
                  </label>

                  <label className="space-y-2">
                    <span className="text-sm font-bold text-primary">
                      Email Address
                    </span>
                    <input
                      name="email"
                      type="email"
                      required
                      className={fieldClass}
                      placeholder="name@example.com"
                    />
                  </label>

                  <label className="space-y-2">
                    <span className="text-sm font-bold text-primary">
                      Phone Number
                    </span>
                    <input
                      name="phone"
                      type="tel"
                      required
                      className={fieldClass}
                      placeholder="+91 98765 43210"
                    />
                  </label>

                  <label className="space-y-2">
                    <span className="text-sm font-bold text-primary">
                      Event Date
                    </span>
                    <span className="relative block">
                      <input
                        name="eventDate"
                        type="date"
                        className={pickerFieldClass}
                      />
                      <CalendarDays className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary" />
                    </span>
                  </label>
                </div>

                <label className="mt-4 flex items-center gap-3 rounded-2xl border border-secondary/30 bg-light/70 px-4 py-3 text-sm font-bold text-primary">
                  <input
                    name="dateTentative"
                    type="checkbox"
                    className="h-4 w-4 accent-secondary"
                  />
                  My event date is tentative
                </label>

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-sm font-bold text-primary">
                      Start Time
                    </span>
                    <span className="relative block">
                      <input
                        name="startTime"
                        type="time"
                        className={pickerFieldClass}
                      />
                      <Clock className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary" />
                    </span>
                  </label>

                  <label className="space-y-2">
                    <span className="text-sm font-bold text-primary">
                      Estimated Duration / End Time
                    </span>
                    <input
                      name="duration"
                      type="text"
                      className={fieldClass}
                      placeholder="Example: 6 hours or ends by 10 PM"
                    />
                  </label>

                  <label className="space-y-2 md:col-span-2">
                    <span className="text-sm font-bold text-primary">
                      Venue / Location
                    </span>
                    <input
                      name="venue"
                      type="text"
                      required
                      className={fieldClass}
                      placeholder="Venue name, city, or area"
                    />
                  </label>
                </div>

                <div className="mt-8 border-t border-primary/10 pt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                    Event Profile
                  </p>

                  <div className="mt-5 grid gap-5 md:grid-cols-2">
                    <label className="space-y-2">
                      <span className="text-sm font-bold text-primary">
                        Event Type
                      </span>
                      <span className="relative block">
                        <select
                          name="eventType"
                          required
                          defaultValue=""
                          className={`${iconFieldClass} appearance-none`}
                        >
                          <option value="" disabled>
                            Select event type
                          </option>
                          {eventTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary" />
                      </span>
                    </label>

                    <label className="space-y-2">
                      <span className="text-sm font-bold text-primary">
                        Estimated Guest Count
                      </span>
                      <span className="relative block">
                        <select
                          name="guestCount"
                          required
                          defaultValue=""
                          className={`${iconFieldClass} appearance-none`}
                        >
                          <option value="" disabled>
                            Select guest range
                          </option>
                          {guestCounts.map((count) => (
                            <option key={count} value={count}>
                              {count}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary" />
                      </span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-8 py-4 text-sm font-bold text-white transition-transform hover:scale-[1.01] md:w-auto"
                >
                  Submit Booking Details
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
