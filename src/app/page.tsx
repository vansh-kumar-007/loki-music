import type { Metadata } from "next";
import { LandingPage } from "@/components/landing/landing-page";

export const metadata: Metadata = {
  title: "Music is better when shared",
  description: "Discover your sound. Create your space. Listen together.",
};

export default function HomePage() {
  return <LandingPage />;
}
