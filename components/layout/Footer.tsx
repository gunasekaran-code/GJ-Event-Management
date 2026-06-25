import Link from "next/link";
import { siteConfig } from "@/lib/content";

const companyLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Event Management in Thoothukudi", href: "/#about" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Clients", href: "/#clients" },
];

const resourceLinks = [
  { label: "Blog", href: "/#insights" },
  { label: "FAQ", href: "/#faq" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Resources
            </h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Contact Us
            </h3>
            <div className="space-y-3">
              <a
                href={`tel:${siteConfig.phoneDisplay}`}
                className="inline-block rounded-full border border-secondary px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-secondary hover:text-primary"
              >
                {siteConfig.phone}
              </a>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full border border-secondary px-6 py-2.5 text-center text-sm font-bold text-white transition-colors hover:bg-secondary hover:text-primary"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-white/90">
            We partner with ambitious families and brands across Tamil Nadu.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-2 inline-block text-secondary hover:underline"
          >
            {siteConfig.email}
          </a>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/60">
            Crafting celebrations with love from Thoothukudi for Tamil Nadu
          </p>
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none select-none pb-4 text-center text-[clamp(3rem,12vw,10rem)] font-bold leading-none text-transparent"
        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.08)" }}
      >
        GJ DECORATION
      </div>
    </footer>
  );
}
