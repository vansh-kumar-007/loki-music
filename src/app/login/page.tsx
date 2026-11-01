import type { Metadata } from "next";
import { AuthGate } from "@/components/screens/auth-gate";

export const metadata: Metadata = { title: "Sign in" };

export default function LoginPage() {
  return <AuthGate mode="login" />;
}
