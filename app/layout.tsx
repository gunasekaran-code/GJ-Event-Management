import { Plus_Jakarta_Sans, Fraunces, Geist } from "next/font/google";
import { siteMetadata, getLocalBusinessJsonLd } from "@/lib/seo";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-plus-jakarta",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["700"],
  style: ["italic"],
  variable: "--font-fraunces",
});

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getLocalBusinessJsonLd();

  return (
    <html
      lang="en"
      className={cn("h-full", "scroll-smooth", "antialiased", plusJakarta.variable, fraunces.variable, "font-sans", geist.variable)}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-bg font-sans text-primary">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
