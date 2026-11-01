import type { ArtworkVariant } from "@/data/demo-catalog";

type ArtworkProps = {
  variant: ArtworkVariant;
  label?: string;
  className?: string;
};

export function Artwork({ variant, label = "Original abstract artwork", className = "" }: ArtworkProps) {
  return (
    <div
      className={"artwork artwork--" + variant + " " + className}
      role="img"
      aria-label={label}
    >
      <span className="artwork-halo" aria-hidden="true" />
      <span className="artwork-orbit" aria-hidden="true" />
      <span className="artwork-core" aria-hidden="true" />
      <span className="artwork-grain" aria-hidden="true" />
    </div>
  );
}
