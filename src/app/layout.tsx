import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Manrope, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AURALIS — Room-calibrated spatial audio | Field Instruments",
  description:
    "AURALIS is a single-node spatial loudspeaker that measures your room, steers sound with timed beams, and renders height and distance cues based on how human hearing works.",
  openGraph: {
    title: "AURALIS — Room-calibrated spatial audio",
    description:
      "Sense the room. Steer with beams. Render spatial cues. A science-first product launch landing.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07080a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable} h-full`}>
      <body className="min-h-full antialiased">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
