import type { LucideIcon } from "lucide-react";
import Link from "next/link";

type EmptyStateProps = {
  icon: LucideIcon;
  eyebrow?: string;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
};

export function EmptyState({
  icon: Icon,
  eyebrow = "Not connected yet",
  title,
  description,
  actionLabel,
  actionHref,
}: EmptyStateProps) {
  return (
    <div className="empty-state">
      <span className="empty-state-icon">
        <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
      </span>
      <p className="eyebrow">{eyebrow}</p>
      <h3>{title}</h3>
      <p className="empty-state-copy">{description}</p>
      {actionLabel && actionHref ? (
        <Link className="button button--secondary button--small" href={actionHref}>
          {actionLabel}
        </Link>
      ) : null}
    </div>
  );
}
