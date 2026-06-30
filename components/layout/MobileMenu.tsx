"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { X, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { siteConfig } from "@/lib/content";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
};

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] backdrop-blur-sm"
          style={{ background: "rgba(75, 22, 76, 0.28)" }}
          onClick={onClose}
        />
      )}

      {open && (
        <motion.aside
          key="mobile-menu"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className="fixed top-0 right-0 z-[110] flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
        >
          <style>{`
            .mm-link {
              position: relative;
              display: inline-block;
              width: fit-content;
              color: #4b164c;
            }
            .mm-link::after {
              content: '';
              position: absolute;
              bottom: -4px;
              left: 0;
              width: 0;
              height: 2px;
              background-color: #bc5eff;
              border-radius: 999px;
              transition: width 0.3s ease;
            }
            .mm-link:hover::after,
            .mm-link:focus-visible::after {
              width: 100%;
            }
            .mm-close {
              transition: background-color 0.2s ease, transform 0.2s ease;
              color: #4b164c;
            }
            .mm-close:hover {
              background-color: rgba(75, 22, 76, 0.08);
              transform: rotate(90deg);
            }
            .mm-btn-shine {
              position: relative;
              overflow: hidden;
              background: linear-gradient(135deg, #4b164c 0%, #7b2d7c 50%, #4b164c 100%);
              background-size: 200% 200%;
              transition: background-position 0.4s ease, transform 0.2s ease, box-shadow 0.3s ease;
            }
            .mm-btn-shine::before {
              content: '';
              position: absolute;
              top: 0;
              left: -75%;
              width: 50%;
              height: 100%;
              background: linear-gradient(
                120deg,
                transparent 0%,
                rgba(255,255,255,0.35) 50%,
                transparent 100%
              );
              transform: skewX(-20deg);
              animation: mm-shine 2.8s infinite;
            }
            @keyframes mm-shine {
              0%   { left: -75%; }
              60%  { left: 125%; }
              100% { left: 125%; }
            }
            .mm-btn-shine:hover {
              background-position: right center;
              transform: scale(1.02);
              box-shadow: 0 4px 20px rgba(75, 22, 76, 0.45);
            }
            .mm-btn-call {
              transition: transform 0.2s ease, box-shadow 0.3s ease, background-color 0.3s ease;
              background-color: #4b164c;
            }
            .mm-btn-call:hover {
              transform: scale(1.02);
              box-shadow: 0 4px 16px rgba(75, 22, 76, 0.35);
              background-color: #3a1039;
            }
            .mm-social:hover {
              color: #bc5eff;
            }
          `}</style>

          {/* Decorative brand wash */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #bc5eff 0%, transparent 70%)" }}
          />

          {/* Top bar: logo + close */}
          <div className="relative flex items-center justify-between px-6 pt-6">
            <Link href="/#home" onClick={onClose} className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="GJ Decoration logo"
                width={42}
                height={42}
                className="rounded-lg"
                style={{ height: "auto" }}
              />
              <div>
                <p className="text-lg font-bold leading-tight" style={{ color: "#4b164c" }}>
                  GJ Decoration
                </p>
                <p
                  className="text-[9px] font-bold uppercase tracking-wider leading-tight"
                  style={{ color: "#d28effea" }}
                >
                  Event Management
                </p>
              </div>
            </Link>

            <button
              onClick={onClose}
              aria-label="Close menu"
              className="mm-close rounded-full p-2"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="relative mt-10 flex flex-col gap-7 px-8">
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="mm-link text-3xl font-bold pb-1"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTAs
          <div className="relative mt-1 space-y-4 px-11">
            <a
              href={`tel:${siteConfig.phone}`}
              className="mm-btn-call flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white"
            >
              <Phone className="h-4 w-4 shrink-0" />
              {siteConfig.phoneDisplay}
            </a>
            <Link
              href="/Booking"
              onClick={onClose}
              className="mm-btn-shine flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold text-white"
            >
              Book Now
            </Link>
            
          </div> */}



          {/* Footer info */}
          <div
            className="relative mt-auto space-y-5 px-8 pb-8 pt-8"
            style={{ borderTop: "1px solid rgba(75, 22, 76, 0.1)" }}
          >
            <div>
              <p
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: "#d28effea" }}
              >
                Socials
              </p>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mm-social mt-2 flex items-center gap-2 font-medium"
                style={{ color: "#4b164c" }}
              >
                <InstagramIcon className="h-4 w-4" />
                @gj_decoration_event
              </a>
            </div>
            <div>
              <p
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: "#d28effea" }}
              >
                Get in Touch
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mm-social mt-2 block font-medium"
                style={{ color: "#4b164c" }}
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}