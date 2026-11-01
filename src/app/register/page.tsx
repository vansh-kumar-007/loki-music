import type { Metadata } from "next";
import { AuthGate } from "@/components/screens/auth-gate";

export const metadata: Metadata = { title: "Create an account" };

export default function RegisterPage() {
  return <AuthGate mode="register" />;
}
