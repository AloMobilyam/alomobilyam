type WorkImageFallbackProps = {
  label: string;
  variant?: "before" | "after";
  badge?: string;
  className?: string;
};

const gradients = {
  before: "from-cream-200 via-wood-100 to-wood-300",
  after: "from-cream-100 via-cream-200 to-wood-200",
};

export function WorkImageFallback({
  label,
  variant = "before",
  badge,
  className = "",
}: WorkImageFallbackProps) {
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br ${gradients[variant]} ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(160deg,transparent_35%,rgba(61,43,31,0.06)_100%)]" />
      {badge && (
        <span
          className={`absolute left-2 top-2 z-10 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide sm:text-xs ${
            variant === "after"
              ? "bg-emerald-700/90 text-white"
              : "bg-wood-900/85 text-cream-50"
          }`}
        >
          {badge}
        </span>
      )}
      <p className="relative z-10 max-w-[90%] px-2 text-center text-[11px] font-medium leading-snug text-wood-700 sm:max-w-[85%] sm:px-3 sm:text-sm">
        {label}
      </p>
    </div>
  );
}
