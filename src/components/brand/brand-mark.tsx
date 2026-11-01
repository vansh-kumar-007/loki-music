type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <span className="brand-lockup">
      <span className="brand-glyph" aria-hidden="true">
        <svg viewBox="0 0 38 38" fill="none">
          <path d="M19 3.5 32.4 11v16L19 34.5 5.6 27V11L19 3.5Z" />
          <path d="M12 23.5V14l7 11 7-11v9.5" />
          <path d="M11.5 28.5h15" />
        </svg>
      </span>
      {!compact ? (
        <span className="brand-word">
          LOKI<span className="brand-period">.</span>
        </span>
      ) : null}
    </span>
  );
}
