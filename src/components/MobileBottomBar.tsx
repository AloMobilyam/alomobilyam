"use client";

import { handlePhoneClick, handleWhatsAppClick } from "@/lib/google-ads";
import { LINKS } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./icons";

type MobileBottomBarProps = {
  whatsappHref?: string;
};

export function MobileBottomBar({
  whatsappHref = LINKS.whatsappMessage,
}: MobileBottomBarProps) {
  return (
    <div className="mobile-bottom-bar fixed inset-x-0 bottom-0 z-50 border-t border-wood-200/70 bg-cream-50/95 px-3 pt-2 pb-[max(0.625rem,env(safe-area-inset-bottom,0px))] shadow-[0_-4px_20px_rgba(44,24,16,0.06)] backdrop-blur-lg md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={LINKS.tel}
          onClick={handlePhoneClick}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-wood-800 px-3 py-2.5 text-[13px] font-semibold text-cream-50 transition-colors active:bg-wood-900"
          aria-label="Hemen ara"
        >
          <PhoneIcon className="h-4 w-4" />
          Ara
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#25D366] px-3 py-2.5 text-[13px] font-semibold text-white transition-colors active:bg-[#1fb855]"
          aria-label="WhatsApp ile yaz"
        >
          <WhatsAppIcon className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
