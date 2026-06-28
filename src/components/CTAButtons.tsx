"use client";

import { m } from "framer-motion";
import { LINKS } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./icons";

type CTAButtonsProps = {
  layout?: "stack" | "row";
  size?: "md" | "lg";
  className?: string;
};

export function CTAButtons({
  layout = "stack",
  size = "lg",
  className = "",
}: CTAButtonsProps) {
  const sizeClasses =
    size === "lg"
      ? "px-6 py-4 text-base sm:px-8 sm:py-4 sm:text-lg"
      : "px-5 py-3.5 text-sm sm:text-base";

  const layoutClasses = layout === "row" ? "flex-col sm:flex-row" : "flex-col";

  return (
    <div className={`flex w-full gap-3 ${layoutClasses} ${className}`}>
      <m.a
        href={LINKS.whatsappMessage}
        target="_blank"
        rel="noopener noreferrer"
        className={`group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] font-bold text-white shadow-lg shadow-[#25D366]/30 sm:w-auto sm:flex-1 ${sizeClasses}`}
        whileHover={{ scale: 1.02, boxShadow: "0 12px 32px -4px rgba(37,211,102,0.45)" }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <WhatsAppIcon className={`${size === "lg" ? "h-6 w-6" : "h-5 w-5"}`} />
        WhatsApp ile Yaz
      </m.a>
      <m.a
        href={LINKS.tel}
        className={`group inline-flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-wood-300 bg-white font-bold text-wood-900 shadow-md shadow-wood-900/5 sm:w-auto sm:flex-1 ${sizeClasses}`}
        whileHover={{ scale: 1.02, borderColor: "#b89b7a", boxShadow: "0 12px 32px -8px rgba(44,24,16,0.15)" }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <PhoneIcon className={`${size === "lg" ? "h-6 w-6" : "h-5 w-5"}`} />
        Hemen Ara
      </m.a>
    </div>
  );
}
