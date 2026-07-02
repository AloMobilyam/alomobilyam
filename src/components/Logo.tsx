import Image from "next/image";
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
  const iconDimension = compact ? 36 : 44;

  const content = (
    <>
      <div
        className={`relative shrink-0 overflow-hidden rounded-xl shadow-md shadow-wood-900/25 ring-1 ring-wood-600/20 transition-transform group-hover:scale-[1.02] ${iconSize}`}
      >
        <Image
          src="/brand/alo-mobilya-icon-1024.png"
          alt="Alo Mobilya logo ikonu"
          width={iconDimension}
          height={iconDimension}
          className="h-full w-full object-cover"
          priority
        />
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
