import type { Metadata } from "next";
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
  title: "AURALIS — Spatial audio, sculpted | Field Instruments",
  description:
    "A cinematic product launch for AURALIS: a sculptural spatial audio node. Scroll to reveal the form, materials, and the case for listening in three dimensions.",
  openGraph: {
    title: "AURALIS — Spatial audio, sculpted",
    description:
      "Portfolio launch landing: scroll-scrubbed 3D product reveal with a clear marketing funnel.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
