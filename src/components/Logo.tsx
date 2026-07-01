import Link from "next/link";

type LogoProps = {
  compact?: boolean;
  showText?: boolean;
  variant?: "light" | "dark";
  className?: string;
  link?: boolean;
};

export function Logo({
  compact = false,
  showText = true,
  variant = "light",
  className = "",
  link = true,
}: LogoProps) {
  const isDark = variant === "dark";
  const iconSize = compact ? "h-9 w-9" : "h-10 w-10 sm:h-11 sm:w-11";
  const svgSize = compact ? "h-[18px] w-[18px]" : "h-5 w-5 sm:h-6 sm:w-6";

  const content = (
    <>
      <div
        className={`flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-wood-700 to-wood-900 text-cream-50 shadow-md shadow-wood-900/25 ring-1 ring-wood-600/20 transition-transform group-hover:scale-[1.02] ${iconSize}`}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={svgSize}
          aria-hidden="true"
        >
          <path
            d="M10.5 8.5c0-.83.67-1.5 1.5-1.5h1.8l.6-1.2h3.8l.6 1.2h1.8c.83 0 1.5.67 1.5 1.5V11h-11V8.5z"
            fill="currentColor"
            opacity="0.95"
          />
          <rect x="8.5" y="11" width="15" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" fill="none" />
          <path d="M16 6.5v4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          <path d="M14 8.75h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          <path
            d="M11.5 23.5c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <path
            d="M21 14.5l2.5 2.5-2.5 2.5"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.85"
          />
        </svg>
      </div>

      {showText && (
        <div className="min-w-0">
          <p
            className={`truncate font-serif font-bold leading-tight ${
              isDark ? "text-cream-50" : "text-wood-900"
            } ${compact ? "text-[15px]" : "text-base sm:text-lg"}`}
          >
            Alo Mobilya
          </p>
          <p
            className={`truncate ${isDark ? "text-cream-300" : "text-wood-500"} ${
              compact ? "text-[10px]" : "text-[11px] sm:text-xs"
            }`}
          >
            Tamir • Onarım • Yenileme
          </p>
        </div>
      )}
    </>
  );

  if (link) {
    return (
      <Link href="/" className={`group flex min-w-0 items-center gap-2.5 ${className}`} aria-label="Alo Mobilya ana sayfa">
        {content}
      </Link>
    );
  }

  return (
    <div className={`flex min-w-0 items-center gap-2.5 ${className}`} aria-hidden="true">
      {content}
    </div>
  );
}
