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
      <style>{`
        .nav-link {
          position: relative;
          color: #4b164c;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #4b164c;
          border-radius: 999px;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .logo-brand {
          position: relative;
          display: inline-block;
        }
        .logo-brand::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #bc5eff;
          border-radius: 999px;
          transition: width 0.35s ease;
        }
        .logo-link:hover .logo-brand::after {
          width: 100%;
        }
        .btn-shine {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #4b164c 0%, #7b2d7c 50%, #4b164c 100%);
          background-size: 200% 200%;
          transition: background-position 0.4s ease, transform 0.2s ease, box-shadow 0.3s ease;
        }
        .btn-shine::before {
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
          animation: shine 2.8s infinite;
        }
        @keyframes shine {
          0%   { left: -75%; }
          60%  { left: 125%; }
          100% { left: 125%; }
        }
        .btn-shine:hover {
          background-position: right center;
          transform: scale(1.05);
          box-shadow: 0 4px 20px rgba(75, 22, 76, 0.45);
        }
        .btn-call {
          transition: transform 0.2s ease, box-shadow 0.3s ease, background-color 0.3s ease;
          background-color: #4b164c;
        }
        .btn-call:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 16px rgba(75, 22, 76, 0.35);
          background-color: #3a1039;
        }
      `}</style>

      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-3 py-2.5 md:px-6 md:py-4">

          {/* Logo */}
          <Link href="/#home" className="logo-link flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="GJ Decoration logo"
              width={56}
              height={56}
              loading="eager"
              className="rounded-lg md:w-[50px] md:h-[50px]"
              style={{ height: "auto" }}
            />
            <div>
              <p className="text-sm md:text-2xl font-bold leading-tight" style={{ color: "#4b164c" }}>
                GJ Decoration
              </p>
              <p className="text-[8px] md:text-[11px] font-bold uppercase tracking-wider leading-tight" style={{ color: "#4b164c99" }}>
                Event Management
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {[
              { label: "Home", href: "/#home" },
              { label: "Portfolio", href: "/#portfolio" },
              { label: "Services", href: "/#services" },
              { label: "Pricing", href: "/Pricing" },
              { label: "Contact", href: "/Contact" },
            ].map(({ label, href }) => (
              <Link key={label} href={href} className="nav-link text-sm font-bold pb-0.5">
                {label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2 md:gap-4">

            {/* Call button */}
            <a
              href={`tel:${siteConfig.phone}`}
              className="btn-call flex items-center justify-center gap-2 rounded-full px-3.5 py-2.5 md:px-5 md:py-2.5 text-xs md:text-sm font-bold text-white"
            >
              <Phone className="h-3.5 w-3.5 md:h-4 md:w-4 shrink-0" />
              <span className="hidden md:inline">{siteConfig.phoneDisplay}</span>
            </a>

            {/* Book Now — shining */}
            <Link
              href="/Booking"
              className="btn-shine flex items-center gap-1.5 rounded-full px-3 py-2.5 md:px-5 md:py-2.5 text-xs md:text-sm font-bold text-white whitespace-nowrap"
            >
              Book Now
            </Link>

            {/* Menu button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center gap-1.5 font-bold p-1 transition-colors duration-200"
              style={{ color: "#4b164c" }}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
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