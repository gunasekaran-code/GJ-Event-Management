"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/content";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">

          {/* Logo */}
          <Link href="/#home" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="GJ Decoration logo"
              width={47}
              height={47}
              loading="eager"
              className="rounded-lg"
              style={{ height: "auto" }}
            />
            <div className="hidden sm:block">
              <p className="font-bold text-primary transition-colors hover:text-secondary">
                GJ Decoration
              </p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-primary/50">
                Event Management
              </p>
            </div>
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-2 md:gap-5">

            {/* Call button — always visible */}
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-white transition-transform hover:scale-105"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden md:inline">{siteConfig.phoneDisplay}</span>
            </a>

            {/* Book Now — always visible */}
            <Link
              href="/Booking"
              className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-white transition-transform hover:scale-105"
            >
              <span>Book Now</span>
            </Link>

            {/* Desktop nav links */}
            <Link
              href="/#portfolio"
              className="hidden md:block text-sm font-bold text-primary hover:text-secondary transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/#contact"
              className="hidden md:block text-sm font-bold text-primary hover:text-secondary transition-colors"
            >
              Contact
            </Link>

            {/* Menu button — always visible */}
            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center gap-1.5 text-primary transition-colors hover:text-secondary font-bold"
              aria-label="Open menu"
            >
              <span className="hidden md:block text-sm font-bold">Menu</span>
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header >

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
}
