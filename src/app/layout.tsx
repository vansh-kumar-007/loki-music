import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "LOKI — Music is better when shared",
    template: "%s — LOKI",
  },
  description: "Discover your sound. Create your space. Listen together.",
  applicationName: "LOKI",
  openGraph: {
    title: "LOKI — Music is better when shared",
    description: "A collaborative music-listening space, built for the moments between tracks.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050B08",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
