"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, m } from "framer-motion";
import { handleWhatsAppClick } from "@/lib/google-ads";
import { LINKS } from "@/lib/site";
import { useNavLinks } from "@/hooks/useNavLinks";
import { PhoneIcon, WhatsAppIcon } from "./icons";
import { Logo } from "./Logo";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const navLinks = useNavLinks();

  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    const { style } = document.body;
    const previous = {
      overflow: style.overflow,
      position: style.position,
      top: style.top,
      left: style.left,
      right: style.right,
      width: style.width,
    };

    style.overflow = "hidden";
    style.position = "fixed";
    style.top = `-${scrollY}px`;
    style.left = "0";
    style.right = "0";
    style.width = "100%";

    return () => {
      style.overflow = previous.overflow;
      style.position = previous.position;
      style.top = previous.top;
      style.left = previous.left;
      style.right = previous.right;
      style.width = previous.width;
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  const handleLogoClick = () => {
    onClose();
    window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <m.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobil menü"
          className="fixed inset-0 z-[9999] flex min-h-[100dvh] flex-col bg-cream-50 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex shrink-0 items-center gap-2 border-b border-wood-200 px-3 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:gap-3 sm:px-4">
            <button
              type="button"
              onClick={handleLogoClick}
              className="min-w-0 max-w-[38%] shrink overflow-hidden text-left sm:max-w-[42%]"
              aria-label="Ana sayfaya dön"
            >
              <Logo compact link={false} />
            </button>
            <h2 className="min-w-0 flex-1 truncate text-center text-sm font-bold text-wood-900 sm:text-lg">
              Menü
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-wood-200 bg-white text-wood-900 shadow-sm transition-colors active:bg-wood-50 sm:h-12 sm:w-12"
              aria-label="Menüyü kapat"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto overscroll-contain px-5 py-4" aria-label="Mobil menü linkleri">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={onClose}
                    className="flex w-full items-center rounded-xl px-4 py-4 text-lg font-semibold text-wood-900 transition-colors active:bg-wood-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="shrink-0 border-t border-wood-200 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <div className="mx-auto flex max-w-lg gap-3">
              <a
                href={LINKS.tel}
                onClick={onClose}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-wood-800 px-4 py-3.5 text-sm font-semibold text-cream-50 transition-colors active:bg-wood-900"
              >
                <PhoneIcon className="h-5 w-5" />
                Ara
              </a>
              <a
                href={LINKS.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => {
                  void handleWhatsAppClick(event);
                  onClose();
                }}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3.5 text-sm font-semibold text-white transition-colors active:bg-[#1fb855]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp ile Yaz
              </a>
            </div>
          </div>
        </m.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
