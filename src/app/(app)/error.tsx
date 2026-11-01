"use client";

import { useEffect } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function AppError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("LOKI interface error:", error);
  }, [error]);

  return (
    <div className="app-error-state" role="alert">
      <span className="empty-state-icon"><AlertTriangle size={22} /></span>
      <p className="eyebrow">SOMETHING DID NOT LOAD</p>
      <h2>This part of LOKI hit a snag.</h2>
      <p>Your work is not being saved in this UI preview. Try loading this screen again.</p>
      <button className="button button--secondary button--small" type="button" onClick={reset}><RotateCcw size={15} /> Try again</button>
    </div>
  );
}
