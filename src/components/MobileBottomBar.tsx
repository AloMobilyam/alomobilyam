import { BUSINESS, LINKS } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./icons";

export function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-wood-200 bg-cream-50/95 p-3 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-lg gap-3">
        <a
          href={LINKS.tel}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-wood-800 px-4 py-3.5 text-sm font-semibold text-cream-50 shadow-lg transition-colors hover:bg-wood-900"
          aria-label={`Ara: ${BUSINESS.phone}`}
        >
          <PhoneIcon className="h-5 w-5" />
          Ara
        </a>
        <a
          href={LINKS.whatsappMessage}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#1fb855]"
          aria-label="WhatsApp ile yaz"
        >
          <WhatsAppIcon className="h-5 w-5" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
