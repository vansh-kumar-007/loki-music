import { Sparkles } from "lucide-react";

type DemoBadgeProps = {
  children?: string;
};

export function DemoBadge({ children = "Sample UI data" }: DemoBadgeProps) {
  return (
    <span className="demo-badge">
      <Sparkles size={12} strokeWidth={1.8} aria-hidden="true" />
      {children}
    </span>
  );
}
