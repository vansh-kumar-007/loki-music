import Link from "next/link";
import { ArrowLeft, ArrowRight, LockKeyhole } from "lucide-react";
import { BrandMark } from "@/components/brand/brand-mark";

type AuthGateProps = {
  mode: "login" | "register";
};

export function AuthGate({ mode }: AuthGateProps) {
  const registering = mode === "register";

  return (
    <main className="auth-page">
      <Link className="auth-back" href="/"><ArrowLeft size={15} /> Back to LOKI</Link>
      <div className="auth-panel">
        <Link className="auth-brand" href="/" aria-label="LOKI home"><BrandMark /></Link>
        <span className="auth-icon"><LockKeyhole size={21} /></span>
        <p className="eyebrow">ACCOUNT ACCESS / PHASE 2</p>
        <h1>{registering ? "Your space is" : "Welcome back,"}<br /><span>{registering ? "taking shape." : "listener."}</span></h1>
        <p className="auth-description">Authentication is not connected yet. This preview does not accept credentials or create accounts.</p>
        <div className="auth-status">
          <span className="status-dot status-dot--muted" />
          <span>{registering ? "Account creation is not available" : "Sign-in is not available"}</span>
        </div>
        <Link className="button button--primary auth-preview-button" href="/dashboard">
          Explore the app preview <ArrowRight size={16} />
        </Link>
        <p className="auth-switch">
          {registering ? "Already here?" : "New to LOKI?"}{" "}
          <Link href={registering ? "/login" : "/register"}>{registering ? "Sign in" : "Create an account"}</Link>
        </p>
      </div>
      <p className="auth-footer">Music is better when shared.</p>
    </main>
  );
}
