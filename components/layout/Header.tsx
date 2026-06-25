"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { siteConfig, navLinks } from "@/lib/content";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass-strong">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
          <Link href="#home" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="GJ Decoration logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-bold leading-tight text-primary">
                GJ Decoration
              </p>
              <p className="text-[10px] uppercase tracking-wider text-primary/50">
                Event Management
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-3 md:gap-5">
            <a
              href={`tel:${siteConfig.phoneDisplay}`}
              className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-white transition-transform hover:scale-105"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden md:inline">{siteConfig.phoneDisplay}</span>
            </a>

            <Link
              href="#portfolio"
              className="hidden font-serif text-sm italic text-primary lg:block"
            >
              Portfolio
            </Link>
            <Link
              href="#contact"
              className="hidden font-serif text-sm italic text-primary lg:block"
            >
              Contact
            </Link>

            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hidden text-primary transition-colors hover:text-secondary md:block"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>

            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center gap-2 text-primary transition-colors hover:text-secondary"
              aria-label="Open menu"
            >
              <span className="hidden text-xs font-bold uppercase tracking-wider sm:inline">
                Menu
              </span>
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
}
