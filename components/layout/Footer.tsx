import Link from "next/link";
import { siteConfig } from "@/lib/content";

const companyLinks = [
  { label: "About", href: "/#about" },
  { label: "Book Now", href: "/Booking" },
  { label: "Services", href: "/#services" },
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
                <li key={`${link.href}-${link.label}`}>
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
                <li key={`${link.href}-${link.label}`}>
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
            <div className="flex flex-col items-center justify-center gap-8 w-full max-w-4xl mx-auto px-4">
              {/* Buttons Container */}
              <div className="flex flex-wrap gap-5 items-center justify-center w-full">
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
                  className="inline-block rounded-full border border-secondary px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-secondary hover:text-primary"
                >
                  WhatsApp Us
                </a>
              </div>

              {/* Embedded Map Container — Lavender Theme */}
              <div className="font-sans">
                <div className="rounded-2xl border-[1.5px] border-violet-300 overflow-hidden shadow-[0_4px_24px_rgba(139,92,246,0.10)] hover:shadow-md hover:shadow-violet-200 transition-shadow duration-300" style={{ background: '#f3f0ff' }}>

                  {/* Header */}
                  <div className="flex items-center gap-2.5 px-[18px] py-3 border-b border-violet-200" style={{ background: 'linear-gradient(90deg, #ede9fe 0%, #f5f3ff 100%)' }}>
                    <div className="w-8 h-8 rounded-full bg-violet-700 flex items-center justify-center shrink-0">
                      {/* pin icon */}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[15px] font-medium text-violet-900 m-0">Our Location</p>
                      <p className="text-xs text-violet-700 mt-0.5 m-0">Gj Event Management</p>
                    </div>
                    <span className="ml-auto text-[11px] text-violet-700 bg-violet-100 border border-violet-300 px-2.5 py-0.5 rounded-full">
                      ● Open now
                    </span>
                  </div>

                  {/* Map iframe */}
                  <div className="relative w-full aspect-[16/5] bg-violet-100">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.4286695286284!2d78.13026027585522!3d8.803788191248744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03fb1add20f05d%3A0x47e67398c65c9f90!2sGj%20event%20management!5e0!3m2!1sen!2sin!4v1719390000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: 'hue-rotate(210deg) saturate(0.7) brightness(1.05) sepia(0.08)' }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Google Map Location"
                    />
                  </div>

                  {/* Footer */}
                  <div className="flex items-center gap-3 px-[18px] py-2.5 border-t border-violet-100" style={{ background: '#f5f3ff' }}>
                    <a href="https://www.google.com/maps?client=safari&rls=en&oe=UTF-8&dlnr=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KV3wIN0a-wM7MZCfXMaYc-ZH&daddr=Anna+nagar+3rd+Street+10/54/5+Tசவேரியார்புரம்+தாளமுத்துநகர்+ரோடு,+பின்புறம்,+Marakkadai,+Thoothukudi,+Tamil+Nadu+628008" target="_blank" rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs text-violet-700 bg-violet-100 border border-violet-200 rounded-full px-3 py-1 hover:bg-violet-200 transition-colors no-underline">
                      Directions
                    </a>
                    <a href="https://maps.google.com" target="_blank" rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs text-violet-700 bg-violet-100 border border-violet-200 rounded-full px-3 py-1 hover:bg-violet-200 transition-colors no-underline">
                      View larger map
                    </a>
                  </div>
                </div>
              </div>
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
