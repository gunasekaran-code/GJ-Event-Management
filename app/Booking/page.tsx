"use client";

import { Suspense, useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  ChevronDown,
  Clock,
  Send,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/lib/content";

// ─── Types ────────────────────────────────────────────────────────────────────

interface DropdownOption {
  label: string;
  value: string;
}

interface CustomDropdownProps {
  label: string;
  placeholder: string;
  options: DropdownOption[];
  value: string;
  onChange: (val: string) => void;
  icon?: React.ReactNode;
  direction?: "up" | "down"; // Added direction prop
}

// ─── Constants ────────────────────────────────────────────────────────────────

const eventTypes: DropdownOption[] = [
  { label: "Wedding", value: "Wedding" },
  { label: "Engagement", value: "Engagement" },
  { label: "Birthday", value: "Birthday" },
  { label: "Puberty Ceremony", value: "Puberty Ceremony" },
  { label: "Baby Shower", value: "Baby Shower" },
  { label: "Holy Communion", value: "Holy Communion" },
  { label: "Name Revealing", value: "Name Revealing" },
  { label: "Corporate", value: "Corporate" },
  { label: "Social Gathering", value: "Social Gathering" },
  { label: "Classical Performance / Dance Event", value: "Classical Performance / Dance Event" },
];

const productionServices: DropdownOption[] = [
  { label: "Photography", value: "Photography" },
  { label: "Lighting", value: "Lighting" },
  { label: "DJ Events", value: "DJ Events" },
];

const equipmentServices: DropdownOption[] = [
  { label: "Arabian Tent", value: "Arabian Tent" },
  { label: "Panthal", value: "Panthal" },
  { label: "Chair", value: "Chair" },
  { label: "Speaker", value: "Speaker" },
];

const guestCounts: DropdownOption[] = [
  { label: "Under 50", value: "Under 50" },
  { label: "50 – 150", value: "50-150" },
  { label: "150 – 300", value: "150-300" },
  { label: "300+", value: "300+" },
];

/** 30-min slots: 6:00 AM → 11:30 PM */
function buildTimeSlots(): DropdownOption[] {
  const slots: DropdownOption[] = [];
  for (let h = 6; h <= 23; h++) {
    for (const m of [0, 30]) {
      const hour12 = h % 12 === 0 ? 12 : h % 12;
      const ampm = h < 12 ? "AM" : "PM";
      const label = `${hour12}:${m === 0 ? "00" : "30"} ${ampm}`;
      const value = `${String(h).padStart(2, "0")}:${m === 0 ? "00" : "30"}`;
      slots.push({ label, value });
    }
  }
  return slots;
}

const timeSlots = buildTimeSlots();

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

// ─── Shared field style ───────────────────────────────────────────────────────

const fieldBase =
  "min-h-12 w-full rounded-2xl border border-[#4b164c]/10 bg-white/90 px-4 py-3 text-sm font-semibold text-[#4b164c] shadow-[0_12px_34px_rgba(75,22,76,0.06)] outline-none transition-all placeholder:text-[#4b164c]/35 hover:border-[#bc5eff]/50 focus:border-[#bc5eff] focus:bg-white focus:shadow-[0_14px_38px_rgba(188,94,255,0.18)] focus:ring-4 focus:ring-[#bc5eff]/15";

// ─── Hook: prevent page scroll when touching inside a scrollable dropdown ─────

function useDropdownScrollFix(
  ref: React.RefObject<HTMLDivElement | null>,
  open: boolean
) {
  useEffect(() => {
    const el = ref.current;
    if (!el || !open) return;

    let startY = 0;

    const onTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const dy = e.touches[0].clientY - startY;

      const atTop = scrollTop <= 0 && dy > 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight && dy < 0;

      if (atTop || atBottom) e.preventDefault();
      e.stopPropagation();
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
    };
  }, [ref, open]);
}

// ─── Custom Dropdown ──────────────────────────────────────────────────────────

function CustomDropdown({
  label,
  placeholder,
  options,
  value,
  onChange,
  icon,
  direction = "down", // Default direction is downwards
}: CustomDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useDropdownScrollFix(listRef, open);

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  const selected = options.find((o) => o.value === value);

  // Dynamic classes based on the direction prop
  const placementClass = direction === "up" ? "bottom-full mb-2" : "top-full mt-3";
  const closedTransformClass = direction === "up" ? "translate-y-2" : "-translate-y-2";

  return (
    <label className="space-y-2">
      <span className="text-sm font-bold text-[#4b164c]">{label}</span>
      <div ref={ref} className="relative">
        <button
          type="button"
          onClick={() => setOpen((p) => !p)}
          className={`${fieldBase} flex items-center justify-between pr-10 text-left ${!selected ? "text-[#4b164c]/35" : ""
            } ${open ? "border-[#bc5eff] bg-white shadow-[0_14px_38px_rgba(188,94,255,0.18)] ring-4 ring-[#bc5eff]/15" : ""}`}
        >
          <span className="flex items-center gap-2">
            {icon && <span className="text-[#bc5eff]">{icon}</span>}
            {selected ? selected.label : placeholder}
          </span>
          <ChevronDown
            className={`pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#bc5eff] transition-transform duration-200 ${open ? "rotate-180" : ""
              }`}
          />
        </button>

        {/* Outer: animation wrapper configured for up/down directions */}
        <div
          className={`absolute left-0 right-0 z-50 ${placementClass} rounded-2xl border border-[#4b164c]/10 bg-white shadow-[0_20px_60px_rgba(75,22,76,0.15)] transition-all duration-200 ${open
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : `opacity-0 ${closedTransformClass} pointer-events-none`
            }`}
        >
          {/* Inner: scroll container — ref used by hook */}
          <div
            ref={listRef}
            className="max-h-56 overflow-y-scroll rounded-2xl overscroll-contain"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {options.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                className={`w-full px-4 py-3 text-left text-sm font-semibold transition-colors duration-150 ${opt.value === value
                    ? "bg-[#bc5eff]/10 text-[#bc5eff]"
                    : "text-[#4b164c] hover:bg-[#f8e7f6] hover:text-[#4b164c]"
                  }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </label>
  );
}

// ─── Grouped Time Dropdown ────────────────────────────────────────────────────

function TimeDropdown({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<HTMLButtonElement>(null);

  useDropdownScrollFix(listRef, open);

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  useEffect(() => {
    if (open && selectedRef.current) {
      selectedRef.current.scrollIntoView({ block: "center" });
    }
  }, [open]);

  const selected = timeSlots.find((s) => s.value === value);

  const grouped: { header: string; slots: typeof timeSlots }[] = [];
  let lastHeader = "";
  timeSlots.forEach((slot) => {
    const h = parseInt(slot.value.split(":")[0]);
    const hour12 = h % 12 === 0 ? 12 : h % 12;
    const ampm = h < 12 ? "AM" : "PM";
    const header = `${hour12} ${ampm}`;
    if (header !== lastHeader) {
      grouped.push({ header, slots: [] });
      lastHeader = header;
    }
    grouped[grouped.length - 1].slots.push(slot);
  });

  return (
    <label className="space-y-2">
      <span className="text-sm font-bold text-[#4b164c]">Start Time</span>
      <div ref={ref} className="relative">
        <button
          type="button"
          onClick={() => setOpen((p) => !p)}
          className={`${fieldBase} flex items-center justify-between pr-10 text-left ${!selected ? "text-[#4b164c]/35" : ""
            } ${open ? "border-[#bc5eff] bg-white shadow-[0_14px_38px_rgba(188,94,255,0.18)] ring-4 ring-[#bc5eff]/15" : ""}`}
        >
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#bc5eff]" />
            {selected ? selected.label : "Select start time"}
          </span>
          <ChevronDown
            className={`pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#bc5eff] transition-transform duration-200 ${open ? "rotate-180" : ""
              }`}
          />
        </button>

        <div
          className={`absolute left-0 right-0 z-50 top-full mt-3 rounded-2xl border border-[#4b164c]/10 bg-white shadow-[0_20px_60px_rgba(75,22,76,0.15)] transition-all duration-200 ${open
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-1 pointer-events-none"
            }`}
        >
          <div
            ref={listRef}
            className="max-h-64 overflow-y-scroll rounded-2xl overscroll-contain"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {grouped.map((group) => (
              <div key={group.header}>
                <div className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#4b164c]/40">
                  {group.header}
                </div>
                {group.slots.map((slot) => (
                  <button
                    key={slot.value}
                    ref={slot.value === value ? selectedRef : undefined}
                    type="button"
                    onClick={() => {
                      onChange(slot.value);
                      setOpen(false);
                    }}
                    className={`w-full px-6 py-2.5 text-left text-sm font-semibold transition-colors duration-150 ${slot.value === value
                        ? "bg-[#bc5eff]/10 text-[#bc5eff]"
                        : "text-[#4b164c] hover:bg-[#f8e7f6]"
                      }`}
                  >
                    {slot.label}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </label>
  );
}

// ─── Date Picker Dropdown ─────────────────────────────────────────────────────

function DateDropdown({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const today = new Date();
  const [viewYear, setViewYear] = useState(
    value ? parseInt(value.split("-")[0]) : today.getFullYear()
  );
  const [viewMonth, setViewMonth] = useState(
    value ? parseInt(value.split("-")[1]) - 1 : today.getMonth()
  );

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  useEffect(() => {
    const el = panelRef.current;
    if (!el || !open) return;
    const onTouchMove = (e: TouchEvent) => {
      e.stopPropagation();
      e.preventDefault();
    };
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => el.removeEventListener("touchmove", onTouchMove);
  }, [open]);

  function formatDisplay(v: string) {
    if (!v) return null;
    const [y, m, d] = v.split("-").map(Number);
    return `${MONTHS[m - 1]} ${d}, ${y}`;
  }

  function daysInMonth(y: number, m: number) {
    return new Date(y, m + 1, 0).getDate();
  }

  function firstDayOfMonth(y: number, m: number) {
    return new Date(y, m, 1).getDay();
  }

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear((y) => y - 1); }
    else setViewMonth((m) => m - 1);
  }

  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear((y) => y + 1); }
    else setViewMonth((m) => m + 1);
  }

  const totalDays = daysInMonth(viewYear, viewMonth);
  const startDay = firstDayOfMonth(viewYear, viewMonth);
  const cells: (number | null)[] = [
    ...Array(startDay).fill(null),
    ...Array.from({ length: totalDays }, (_, i) => i + 1),
  ];

  function selectDay(day: number) {
    const m = String(viewMonth + 1).padStart(2, "0");
    const d = String(day).padStart(2, "0");
    onChange(`${viewYear}-${m}-${d}`);
    setOpen(false);
  }

  function isPast(day: number) {
    const d = new Date(viewYear, viewMonth, day);
    d.setHours(0, 0, 0, 0);
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return d < t;
  }

  function isSelected(day: number) {
    if (!value) return false;
    const m = String(viewMonth + 1).padStart(2, "0");
    const d = String(day).padStart(2, "0");
    return value === `${viewYear}-${m}-${d}`;
  }

  return (
    <label className="space-y-2">
      <span className="text-sm font-bold text-[#4b164c]">Event Date</span>
      <div ref={ref} className="relative">
        <button
          type="button"
          onClick={() => setOpen((p) => !p)}
          className={`${fieldBase} flex items-center justify-between pr-10 text-left ${!value ? "text-[#4b164c]/35" : ""
            } ${open ? "border-[#bc5eff] bg-white shadow-[0_14px_38px_rgba(188,94,255,0.18)] ring-4 ring-[#bc5eff]/15" : ""}`}
        >
          <span className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-[#bc5eff]" />
            {value ? formatDisplay(value) : "Pick a date"}
          </span>
          <ChevronDown
            className={`pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#bc5eff] transition-transform duration-200 ${open ? "rotate-180" : ""
              }`}
          />
        </button>

        <div
          ref={panelRef}
          className={`absolute top-full left-0 z-50 mt-3 w-72 rounded-2xl border border-[#4b164c]/10 bg-white p-4 shadow-[0_20px_60px_rgba(75,22,76,0.15)] transition-all duration-200 ${open
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
        >
          {/* Month nav */}
          <div className="mb-3 flex items-center justify-between">
            <button
              type="button"
              onClick={prevMonth}
              className="flex h-8 w-8 items-center justify-center rounded-full text-[#4b164c]/50 transition-colors hover:bg-[#f8e7f6] hover:text-[#4b164c]"
            >
              <ChevronDown className="h-4 w-4 rotate-90" />
            </button>
            <span className="text-sm font-bold text-[#4b164c]">
              {MONTHS[viewMonth]} {viewYear}
            </span>
            <button
              type="button"
              onClick={nextMonth}
              className="flex h-8 w-8 items-center justify-center rounded-full text-[#4b164c]/50 transition-colors hover:bg-[#f8e7f6] hover:text-[#4b164c]"
            >
              <ChevronDown className="h-4 w-4 -rotate-90" />
            </button>
          </div>

          {/* Day headers */}
          <div className="mb-1 grid grid-cols-7 text-center">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
              <span key={d} className="text-xs font-bold text-[#4b164c]/35">
                {d}
              </span>
            ))}
          </div>

          {/* Day cells */}
          <div className="grid grid-cols-7 gap-y-1 text-center">
            {cells.map((day, i) =>
              day === null ? (
                <span key={`empty-${i}`} />
              ) : (
                <button
                  key={day}
                  type="button"
                  disabled={isPast(day)}
                  onClick={() => selectDay(day)}
                  className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-all duration-150 ${isSelected(day)
                      ? "bg-[#bc5eff] text-white shadow-[0_4px_14px_rgba(188,94,255,0.4)]"
                      : isPast(day)
                        ? "cursor-not-allowed text-[#4b164c]/20"
                        : "text-[#4b164c] hover:bg-[#f8e7f6] hover:text-[#4b164c]"
                    }`}
                >
                  {day}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </label>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

function BookingForm() {
  const searchParams = useSearchParams();
  const [eventType, setEventType] = useState("");
  const [guestCount, setGuestCount] = useState("");
  const [startTime, setStartTime] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [productionSelection, setProductionSelection] = useState<string[]>([]);
  const [equipmentSelection, setEquipmentSelection] = useState<string[]>([]);
  const [selectionOrder, setSelectionOrder] = useState<string[]>([]);

  useEffect(() => {
    const event = searchParams.get("event") ?? "";
    const services =
      searchParams.get("services")?.split(",").filter(Boolean) ?? [];
    const equipment =
      searchParams.get("equipment")?.split(",").filter(Boolean) ?? [];
    const selection =
      searchParams.get("selection")?.split(",").filter(Boolean) ?? [];

    if (event) setEventType(event);
    if (services.length) setProductionSelection(services);
    if (equipment.length) setEquipmentSelection(equipment);
    if (selection.length) setSelectionOrder(selection);
  }, [searchParams]);

  function toggleProduction(value: string) {
    setProductionSelection((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  }

  function toggleEquipment(value: string) {
    setEquipmentSelection((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  }

  const selectedSummary =
    selectionOrder.length > 0
      ? selectionOrder
      : [
          ...(eventType ? [eventType] : []),
          ...productionSelection,
          ...equipmentSelection,
        ];

  return (
    <>
      <Header />
      <main className="bg-[#f5f5f5] pt-15 md:pt-15">
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
              {/* <Link
                href="/Pricing"
                className="inline-flex items-center gap-2 rounded-full border border-[#4b164c]/10 bg-white/80 px-4 py-2 text-sm font-bold text-[#4b164c] shadow-[0_10px_30px_rgba(75,22,76,0.08)] transition-all hover:border-[#bc5eff]/50 hover:text-[#bc5eff] hover:shadow-[0_14px_36px_rgba(188,94,255,0.16)]"
              >
                View pricing
              </Link> */}
            </div>

            <div className="grid gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div className="flex flex-col h-full"> {/* Added flex column to control height */}
                <div className="flex justify-center text-sm">
                  <SectionLabel>Book it Now</SectionLabel>
                </div>

                <h1 className="mt-5 text-4xl font-bold leading-tight text-[#4b164c] md:text-6xl">
                  Plan your{" "}
                  <span className="font-serif italic text-[#bc5eff]">event</span>
                </h1>

                {/* Replacing <br> with margin utilities */}
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#4b164c]/70 mb-8 md:mb-16">
                  Share the basics with us and our team will get back to you
                  with the right decor, production, and planning support for
                  your celebration.
                </p>

                {/* This margin-top:auto pushes the contact box to the bottom of the container */}
                <div
                  className="mt-auto rounded-2xl bg-[#4b164c] p-6 text-white shadow-[0_20px_60px_rgba(75,22,76,0.18)] bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80')`,
                  }}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.2em] hover:text-[#bc5eff]">
                    Direct Contact
                  </p>
                  <a
                    href={`tel:${siteConfig.phoneDisplay}`}
                    className="mt-3 block text-2xl font-bold hover:text-[#bc5eff]"
                  >
                    {siteConfig.phone}
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-2 block text-sm text-white/70 transition-colors hover:text-[#bc5eff]"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              {/* Form */}
              <form className="glass-strong rounded-3xl p-5 shadow-[0_24px_80px_rgba(75,22,76,0.12)] md:p-8">
                {selectedSummary.length > 0 && (
                  <div className="mb-6 rounded-2xl border border-[#bc5eff]/20 bg-[#f8e7f6]/70 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.20em] text-[#bc5eff]">
                      Selected from pricing Pricing
                    </p>
                    <p className="mt-3 text-sm font-semibold text-[#4b164c]">
                      {selectedSummary.join(" → ")}
                    </p>
                  </div>
                )}

                <div className="grid gap-4 md:grid-cols-4">
                  <label className="space-y-4">
                    <span className="text-sm font-bold text-[#4b164c]">Full Name</span>
                    <input 
                      name="fullName"
                      type="text"
                      required
                      className={fieldBase}
                      placeholder="Your name"
                    />
                  </label>

                  <label className="space-y-2">
                    <span className="text-sm font-bold text-[#4b164c]">Venue / Location</span>
                    <input
                      name="venue"
                      type="text"
                      required
                      className={fieldBase}
                      placeholder="Venue name, city, or area"
                    />
                  </label>

                  <label className="space-y-2">
                    <span className="text-sm font-bold text-[#4b164c]">Phone Number</span>
                    <input
                      name="phone"
                      type="tel"
                      required
                      className={fieldBase}
                      placeholder="+91 98765 43210"
                    />
                  </label>

                  <DateDropdown value={eventDate} onChange={setEventDate} />
                </div>

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <TimeDropdown value={startTime} onChange={setStartTime} />

                  <label className="space-y-2">
                    <span className="text-sm font-bold text-[#4b164c]">
                      Estimated Duration / End Time
                    </span>
                    <input
                      name="duration"
                      type="text"
                      className={fieldBase}
                      placeholder="Example: 6 hours or ends by 10 PM"
                    />
                  </label>
                </div>

                <div className="mt-8 border-t border-[#4b164c]/10 pt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#bc5eff]">
                    Event Profile
                  </p>

                  <div className="mt-5 grid gap-5 md:grid-cols-2">
                    <CustomDropdown
                      label="Event Type"
                      placeholder="Select event type"
                      options={eventTypes}
                      value={eventType}
                      onChange={setEventType}
                      direction="up" // <-- Added prop here to open upwards
                    />

                    <CustomDropdown
                      label="Estimated Guest Count"
                      placeholder="Select guest range"
                      options={guestCounts}
                      value={guestCount}
                      onChange={setGuestCount}
                      direction="up"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <p className="text-sm font-bold text-[#4b164c]">
                      Production Services
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {productionServices.map((service) => {
                        const active = productionSelection.includes(service.value);
                        return (
                          <button
                            key={service.value}
                            type="button"
                            onClick={() => toggleProduction(service.value)}
                            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                              active
                                ? "border-[#bc5eff] bg-[#bc5eff]/10 text-[#bc5eff] shadow-[0_8px_24px_rgba(188,94,255,0.15)]"
                                : "border-[#4b164c]/10 bg-white text-[#4b164c]/70 hover:border-[#bc5eff]/40 hover:text-[#4b164c]"
                            }`}
                          >
                            {service.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <p className="text-sm font-bold text-[#4b164c]">
                      Equipment & Setup
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {equipmentServices.map((service) => {
                        const active = equipmentSelection.includes(service.value);
                        return (
                          <button
                            key={service.value}
                            type="button"
                            onClick={() => toggleEquipment(service.value)}
                            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                              active
                                ? "border-[#bc5eff] bg-[#bc5eff]/10 text-[#bc5eff] shadow-[0_8px_24px_rgba(188,94,255,0.15)]"
                                : "border-[#4b164c]/10 bg-white text-[#4b164c]/70 hover:border-[#bc5eff]/40 hover:text-[#4b164c]"
                            }`}
                          >
                            {service.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Hidden fields */}
                <input type="hidden" name="eventType" value={eventType} />
                <input type="hidden" name="guestCount" value={guestCount} />
                <input type="hidden" name="startTime" value={startTime} />
                <input type="hidden" name="eventDate" value={eventDate} />
                <input
                  type="hidden"
                  name="selectedPackages"
                  value={selectedSummary.join(", ")}
                />
                <input
                  type="hidden"
                  name="productionServices"
                  value={productionSelection.join(", ")}
                />
                <input
                  type="hidden"
                  name="equipmentServices"
                  value={equipmentSelection.join(", ")}
                />

                <button
                  type="submit"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-white transition-transform hover:bg-primary/90 md:w-auto"
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

export default function BookingPage() {
  return (
    <Suspense
      fallback={
        <>
          <Header />
          <main className="bg-[#f5f5f5] pt-15 md:pt-15">
            <section className="py-20 text-center text-[#4b164c]/60">
              Loading booking form...
            </section>
          </main>
          <Footer />
        </>
      }
    >
      <BookingForm />
    </Suspense>
  );
}