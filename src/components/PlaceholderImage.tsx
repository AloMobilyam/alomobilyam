type PlaceholderImageProps = {
  label: string;
  variant?: "hero" | "gallery" | "service";
  badge?: string;
  className?: string;
};

const gradients = {
  hero: "from-wood-700 via-wood-600 to-wood-800",
  gallery: "from-cream-200 via-wood-200 to-wood-400",
  service: "from-wood-100 via-cream-100 to-wood-200",
};

export function PlaceholderImage({
  label,
  variant = "gallery",
  badge,
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative flex aspect-[4/3] w-full items-end overflow-hidden rounded-2xl bg-gradient-to-br ${gradients[variant]} shadow-inner ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_40%,rgba(61,43,31,0.08)_100%)]" />
      {badge && (
        <span className="absolute left-3 top-3 rounded-full bg-wood-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cream-50 backdrop-blur-sm">
          {badge}
        </span>
      )}
      <p className="relative w-full bg-gradient-to-t from-wood-900/70 to-transparent px-4 py-4 text-sm font-medium text-cream-50">
        {label}
      </p>
    </div>
  );
}
