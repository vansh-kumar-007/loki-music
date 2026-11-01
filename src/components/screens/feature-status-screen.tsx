import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { EmptyState } from "@/components/ui/empty-state";

type FeatureStatusScreenProps = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  phase: string;
  actionLabel?: string;
  actionHref?: string;
};

export function FeatureStatusScreen({
  icon,
  eyebrow,
  title,
  accent,
  description,
  phase,
  actionLabel,
  actionHref,
}: FeatureStatusScreenProps) {
  return (
    <div className="page-enter">
      <div className="page-intro">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title} <span>{accent}</span></h2>
        <p>{description}</p>
      </div>
      <div className="feature-status-layout">
        <EmptyState
          icon={icon}
          eyebrow={phase}
          title="This space is not connected yet"
          description="The screen is part of the LOKI roadmap, but its account or backend service is not implemented. There is no stored data or live activity to show."
          actionLabel={actionLabel}
          actionHref={actionHref}
        />
        <aside className="feature-status-aside">
          <span className="feature-status-index">LOKI / FOUNDATION</span>
          <h3>Built in phases.<br /><span>Connected honestly.</span></h3>
          <p>Preview content is labeled. No track, room, profile, or listening status here represents a live service.</p>
          <Link className="feature-status-back" href="/dashboard"><ArrowLeft size={15} /> Back to your space</Link>
          {actionLabel && actionHref ? <Link className="feature-status-next" href={actionHref}>{actionLabel} <ArrowRight size={15} /></Link> : null}
        </aside>
      </div>
    </div>
  );
}
