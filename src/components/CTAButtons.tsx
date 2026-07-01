"use client";

import { m } from "framer-motion";
import { LINKS } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./icons";

type CTAButtonsProps = {
  layout?: "stack" | "row";
  size?: "md" | "lg";
  compact?: boolean;
  className?: string;
  whatsappHref?: string;
  whatsappLabel?: string;
};

export function CTAButtons({
  layout = "stack",
  size = "lg",
  compact = false,
  className = "",
  whatsappHref = LINKS.whatsappMessage,
  whatsappLabel,
}: CTAButtonsProps) {
  const whatsappMobileLabel = whatsappLabel ?? "WhatsApp";
  const whatsappDesktopLabel = whatsappLabel ?? "WhatsApp ile Yaz";
  const sizeClasses = compact
    ? "px-4 py-2.5 text-sm gap-2 rounded-xl sm:px-6 sm:py-3.5 sm:text-base sm:rounded-2xl sm:gap-3"
    : size === "lg"
      ? "px-6 py-3.5 text-sm gap-2 rounded-xl sm:px-8 sm:py-4 sm:text-lg sm:rounded-2xl sm:gap-3"
      : "px-5 py-3 text-sm gap-2 rounded-xl sm:text-base";

  const iconSize = compact ? "h-4 w-4 sm:h-5 sm:w-5" : size === "lg" ? "h-5 w-5 sm:h-6 sm:w-6" : "h-4 w-4 sm:h-5 sm:w-5";

  const layoutClasses =
    layout === "row" ? "grid grid-cols-2 sm:flex sm:flex-row" : "grid grid-cols-2 sm:flex sm:flex-col";

  return (
    <div className={`w-full gap-2 sm:gap-3 ${layoutClasses} ${className}`}>
      <m.a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex w-full items-center justify-center font-semibold text-white bg-[#25D366] shadow-md shadow-[#25D366]/20 sm:w-auto sm:flex-1 sm:font-bold sm:shadow-lg sm:shadow-[#25D366]/30 ${sizeClasses}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <WhatsAppIcon className={iconSize} />
        <span className="sm:hidden">{whatsappMobileLabel}</span>
        <span className="hidden sm:inline">{whatsappDesktopLabel}</span>
      </m.a>
      <m.a
        href={LINKS.tel}
        className={`inline-flex w-full items-center justify-center border-2 border-wood-300 bg-white font-semibold text-wood-900 shadow-sm sm:w-auto sm:flex-1 sm:font-bold sm:shadow-md sm:shadow-wood-900/5 ${sizeClasses}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <PhoneIcon className={iconSize} />
        <span className="hidden sm:inline">Hemen Ara</span>
        <span className="sm:hidden">Ara</span>
      </m.a>
    </div>
  );
}
