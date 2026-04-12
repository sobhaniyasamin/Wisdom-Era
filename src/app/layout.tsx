import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ConstellationBackground } from "@/components/canvas/ConstellationBackground";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wisdomera.net"),
  title: {
    default: "Wisdom Era — Keep Up with the Future",
    template: "%s | Wisdom Era",
  },
  description:
    "AI-focused tech holding company investing in and co-building the future of e-commerce and agriculture across emerging markets.",
  openGraph: {
    title: "Wisdom Era — Keep Up with the Future",
    description:
      "AI-focused tech holding company investing in and co-building the future of e-commerce and agriculture across emerging markets.",
    url: "https://wisdomera.net",
    siteName: "Wisdom Era",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wisdom Era — Keep Up with the Future",
    description:
      "AI-focused tech holding company investing in and co-building the future of e-commerce and agriculture across emerging markets.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <JsonLd />
        <ConstellationBackground />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-teal focus:text-navy-deep focus:px-4 focus:py-2 focus:rounded-md focus:font-semibold"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
