"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
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
      {/* Fix 1: Separate the conditionals and add unique keys */}
      {open && (
        <motion.div
          key="mobile-backdrop" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-primary/20 backdrop-blur-sm" // 👈 Increased z-index to beat the header
          onClick={onClose}
        />
      )}
      
      {open && (
        <motion.aside
          key="mobile-menu" // 👈 Added Key
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className="fixed top-0 right-0 z-[110] flex h-full w-full max-w-md flex-col glass-strong p-8 shadow-2xl" // 👈 Increased z-index
        >
          <div className="flex justify-end">
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="rounded-full p-2 text-primary transition-colors hover:bg-light"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-6">
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
                  className="text-3xl font-bold text-primary transition-colors hover:text-secondary"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="mt-auto space-y-6 border-t border-primary/10 pt-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-primary/50">
                Socials
              </p>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center gap-2 text-primary hover:text-secondary"
              >
                <InstagramIcon className="h-4 w-4" />
                @gj_decoration_event
              </a>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-primary/50">
                Get in Touch
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 block text-primary hover:text-secondary"
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