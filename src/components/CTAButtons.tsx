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

  const layoutClasses =
    layout === "row"
      ? "flex-col sm:flex-row"
      : "flex-col";

  return (
    <div className={`flex w-full gap-3 ${layoutClasses} ${className}`}>
      <a
        href={LINKS.whatsappMessage}
        target="_blank"
        rel="noopener noreferrer"
        className={`group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] font-bold text-white shadow-lg shadow-[#25D366]/30 transition-all hover:bg-[#1fb855] hover:shadow-xl hover:shadow-[#25D366]/35 active:scale-[0.98] sm:w-auto sm:flex-1 ${sizeClasses}`}
      >
        <WhatsAppIcon className={`${size === "lg" ? "h-6 w-6" : "h-5 w-5"} transition-transform group-hover:scale-110`} />
        WhatsApp ile Yaz
      </a>
      <a
        href={LINKS.tel}
        className={`group inline-flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-wood-300 bg-white font-bold text-wood-900 shadow-md shadow-wood-900/5 transition-all hover:border-wood-400 hover:bg-cream-50 hover:shadow-lg active:scale-[0.98] sm:w-auto sm:flex-1 ${sizeClasses}`}
      >
        <PhoneIcon className={`${size === "lg" ? "h-6 w-6" : "h-5 w-5"} transition-transform group-hover:scale-110`} />
        Hemen Ara
      </a>
    </div>
  );
}
