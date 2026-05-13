import type { Metadata } from "next";
import { Bebas_Neue, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Display: heavy condensed grotesque — closest free match to GT America Cond Black
const display = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

// Body: precision grotesque (free substitute for Söhne)
const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Mono: spec data face
const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Forty Collection — Vintage Toyota FJ40, re-engineered.",
  description:
    "Forty Collection re-engineers the Toyota Land Cruiser FJ40 on a chassis we build ourselves at Rolling 40. Six commissions a year. East Fort Lauderdale.",
  icons: {
    icon: [
      { url: "/favicon-64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon-256.png", sizes: "256x256", type: "image/png" },
    ],
    apple: "/favicon-256.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
