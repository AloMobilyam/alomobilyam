type LogoProps = {
  compact?: boolean;
  className?: string;
};

export function Logo({ compact = false, className = "" }: LogoProps) {
  return (
    <a href="#" className={`group flex items-center gap-2.5 ${className}`} aria-label="Alo Mobilya ana sayfa">
      <div
        className={`flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-wood-700 to-wood-900 text-cream-50 shadow-md shadow-wood-900/20 ring-1 ring-wood-600/30 ${
          compact ? "h-9 w-9" : "h-10 w-10 sm:h-11 sm:w-11"
        }`}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={compact ? "h-5 w-5" : "h-6 w-6"}
          aria-hidden="true"
        >
          <path
            d="M12 10c0-1.1.9-2 2-2h3.5l1-2h5l1 2H27c1.1 0 2 .9 2 2v3h-17v-3z"
            fill="currentColor"
            opacity="0.9"
          />
          <rect x="10" y="13" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path
            d="M22 8v5M20 10.5h4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M14 30c0 2 1.5 3 3 3h6c1.5 0 3-1 3-3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="min-w-0">
        <p
          className={`truncate font-serif font-bold leading-tight text-wood-900 ${
            compact ? "text-base" : "text-base sm:text-lg"
          }`}
        >
          Alo Mobilya
        </p>
        <p className={`truncate text-wood-500 ${compact ? "text-[10px]" : "text-[11px] sm:text-xs"}`}>
          Tamir • Onarım • Yenileme
        </p>
      </div>
    </a>
  );
}
