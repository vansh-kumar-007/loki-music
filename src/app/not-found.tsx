import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="auth-page">
      <div className="auth-panel auth-panel--not-found">
        <span className="auth-icon"><Compass size={21} /></span>
        <p className="eyebrow">404 / LOST IN THE FOREST</p>
        <h1>This path<br /><span>is not here.</span></h1>
        <p className="auth-description">The page may have moved, or it may not be part of this preview yet.</p>
        <Link className="button button--primary auth-preview-button" href="/"><ArrowLeft size={16} /> Back to LOKI</Link>
      </div>
    </main>
  );
}
