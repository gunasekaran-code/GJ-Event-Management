"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ShoppingBag,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { pricingCategories, type PricingItem } from "@/lib/content";
import { cn } from "@/lib/utils";

type SelectedItem = PricingItem & { categoryId: string };

function parsePrice(value: string): number {
  return Number(value.replace(/[₹,\s]/g, "")) || 0;
}

function formatTotal(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

function buildBookingUrl(selections: SelectedItem[]): string {
  const params = new URLSearchParams();
  const order = selections.map((s) => s.name).join(",");
  if (order) params.set("selection", order);

  const event = selections.find((s) => s.categoryId === "events");
  if (event) params.set("event", event.name);

  const production = selections
    .filter((s) => s.categoryId === "production")
    .map((s) => s.name);
  if (production.length) params.set("services", production.join(","));

  const equipment = selections
    .filter((s) => s.categoryId === "equipment")
    .map((s) => s.name);
  if (equipment.length) params.set("equipment", equipment.join(","));

  const query = params.toString();
  return query ? `/Booking?${query}` : "/Booking";
}

function PriceCard({
  item,
  categoryId,
  selected,
  selectionIndex,
  onToggle,
}: {
  item: PricingItem;
  categoryId: string;
  selected: boolean;
  selectionIndex: number;
  onToggle: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative w-full overflow-hidden rounded-3xl border text-left transition-all duration-300",
        selected
          ? "border-secondary bg-light shadow-[0_20px_60px_rgba(188,94,255,0.18)] ring-2 ring-secondary/30"
          : "border-primary/10 bg-white/90 shadow-[0_12px_40px_rgba(75,22,76,0.06)] hover:border-secondary/40 hover:shadow-[0_20px_50px_rgba(188,94,255,0.12)]"
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 via-secondary/0 to-secondary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {selected && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white shadow-[0_4px_14px_rgba(188,94,255,0.4)]"
        >
          <Check className="h-4 w-4" />
        </motion.span>
      )}

      {selected && selectionIndex >= 0 && (
        <span className="absolute left-4 top-4 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          #{selectionIndex + 1}
        </span>
      )}

      <div className="relative p-6 md:p-7">
        <div className="flex items-start justify-between gap-4 pr-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">
              {item.priceNote}
            </p>
            <h3 className="mt-2 text-xl font-bold text-primary transition-colors group-hover:text-secondary md:text-2xl">
              {item.name}
            </h3>
          </div>
          <p className="shrink-0 text-2xl font-bold text-primary md:text-3xl">
            {item.price}
          </p>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-primary/65">
          {item.description}
        </p>

        <ul className="mt-5 space-y-2">
          {item.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-primary/75"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
              {feature}
            </li>
          ))}
        </ul>

        <span
          className={cn(
            "mt-6 inline-flex items-center gap-1.5 text-sm font-bold transition-colors",
            selected ? "text-secondary" : "text-primary/50 group-hover:text-secondary"
          )}
        >
          {selected ? "Selected" : "Select package"}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </motion.button>
  );
}

export default function PricingPage() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const selectedItems = useMemo(() => {
    const allItems: SelectedItem[] = pricingCategories.flatMap((category) =>
      category.items.map((item) => ({ ...item, categoryId: category.id }))
    );
    return selectedIds
      .map((id) => allItems.find((item) => item.id === id))
      .filter((item): item is SelectedItem => Boolean(item));
  }, [selectedIds]);

  const estimatedTotal = useMemo(
    () => selectedItems.reduce((sum, item) => sum + parsePrice(item.price), 0),
    [selectedItems]
  );

  function toggleItem(id: string) {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  }

  const bookingUrl = buildBookingUrl(selectedItems);

  return (
    <>
      <Header />
      <main className="bg-bg pt-15 md:pt-15">
        
        {pricingCategories.map((category, categoryIndex) => (
          <section
            key={category.id}
            id={category.id}
            className={cn(
              "py-16 md:py-20",
              categoryIndex % 2 === 0 ? "bg-white" : "bg-bg"
            )}
          >
            <div className="mx-auto max-w-7xl px-4 md:px-6">
              <AnimatedReveal>
                <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                      Category {categoryIndex + 1}
                    </p>
                    <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">
                      {category.title}
                    </h2>
                    <p className="mt-2 text-primary/60">{category.subtitle}</p>
                  </div>
                  <p className="text-sm font-bold text-primary/40">
                    {category.items.length} packages available
                  </p>
                </div>
              </AnimatedReveal>

              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {category.items.map((item, itemIndex) => {
                  const selectionIndex = selectedIds.indexOf(item.id);
                  return (
                    <AnimatedReveal key={item.id} delay={itemIndex * 0.06}>
                      <PriceCard
                        item={item}
                        categoryId={category.id}
                        selected={selectionIndex >= 0}
                        selectionIndex={selectionIndex}
                        onToggle={() => toggleItem(item.id)}
                      />
                    </AnimatedReveal>
                  );
                })}
              </div>
            </div>
          </section>
        ))}
      </main>

      <AnimatePresence>
        {selectedItems.length > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="fixed bottom-0 left-0 right-0 z-40 border-t border-primary/10 bg-white/95 px-4 py-4 shadow-[0_-12px_40px_rgba(75,22,76,0.12)] backdrop-blur-md md:px-6"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="min-w-0">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-secondary">
                  <ShoppingBag className="h-4 w-4" />
                  Your selection ({selectedItems.length})
                </p>
                <p className="mt-2 truncate text-sm font-semibold text-primary md:whitespace-normal">
                  {selectedItems.map((item) => item.name).join(" → ")}
                </p>
                <p className="mt-1 text-sm text-primary/55">
                  Estimated from{" "}
                  <span className="font-bold text-primary">
                    {formatTotal(estimatedTotal)}
                  </span>
                  . Final quote confirmed after consultation.
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedIds([])}
                  className="rounded-full border border-primary/15 px-5 py-3 text-sm font-bold text-primary transition-colors hover:border-secondary/40 hover:text-secondary"
                >
                  Clear
                </button>
                <Link
                  href={bookingUrl}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.02] hover:bg-primary/90"
                >
                  Book Selected
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={selectedItems.length > 0 ? "pb-28" : ""}>
        <Footer />
      </div>
      <ScrollToTop />
    </>
  );
}
