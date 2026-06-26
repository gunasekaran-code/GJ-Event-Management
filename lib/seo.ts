import type { Metadata } from "next";
import { siteConfig } from "./content";

export const siteMetadata: Metadata = {
  title:
    "GJ Decoration & Event Management | Wedding & Event Planners in Thoothukudi, Tamil Nadu",
  description:
    "Premium wedding mandap, stage decor, and event management in Thoothukudi, Tamil Nadu. Traditional Tamil celebrations with modern excellence. Call GJ Decoration today.",
  keywords: [
    "event management Thoothukudi",
    "wedding decorators Thoothukudi",
    "wedding mandap Tamil Nadu",
    "event planners Tuticorin",
    "reception decoration Thoothukudi",
    "corporate events Tamil Nadu",
    "church festival decoration",
    "GJ Decoration",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: "GJ Decoration & Event Management | Thoothukudi, Tamil Nadu",
    description:
      "Premium wedding mandap, stage decor, and event management in Thoothukudi. Traditional Tamil celebrations with modern excellence.",
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "GJ Decoration & Event Management",
    description:
      "Wedding & event planners in Thoothukudi, Tamil Nadu. Traditional celebrations, modern excellence.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EventPlanner",
    name: siteConfig.name,
    description: siteConfig.tagline,
    url: "https://gjdecoration.in",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      addressCountry: siteConfig.address.country,
      postalCode: siteConfig.address.postalCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: [
      "Thoothukudi",
      "Tirunelveli",
      "Madurai",
      "Chennai",
      "Nagercoil",
      "Tamil Nadu",
    ],
    sameAs: [siteConfig.instagram],
    priceRange: "$$",
  };
}
