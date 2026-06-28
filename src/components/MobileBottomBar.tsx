import { BUSINESS, LINKS } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./icons";

export function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-wood-200/80 bg-cream-50/95 p-2.5 shadow-[0_-8px_30px_rgba(44,24,16,0.08)] backdrop-blur-lg md:hidden">
      <div className="mx-auto flex max-w-lg gap-2.5">
        <a
          href={LINKS.tel}
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-wood-800 px-4 py-4 text-sm font-bold text-cream-50 shadow-lg shadow-wood-900/20 transition-all active:scale-[0.98] hover:bg-wood-900"
          aria-label={`Ara: ${BUSINESS.phone}`}
        >
          <PhoneIcon className="h-5 w-5" />
          Hemen Ara
        </a>
        <a
          href={LINKS.whatsappMessage}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-4 text-sm font-bold text-white shadow-lg shadow-[#25D366]/30 transition-all active:scale-[0.98] hover:bg-[#1fb855]"
          aria-label="WhatsApp ile yaz"
        >
          <WhatsAppIcon className="h-5 w-5" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
