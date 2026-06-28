"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { BUSINESS, LINKS, NAV_LINKS } from "@/lib/site";
import { PhoneIcon } from "./icons";
import { Logo } from "./Logo";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-wood-100/80 bg-cream-50/95 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center px-3 sm:h-16 sm:px-6 lg:px-8">
        {/* Mobile: Logo | Phone | Hamburger */}
        <div className="flex w-full items-center justify-between gap-2 md:hidden">
          <Logo compact showText={false} />

          <a
            href={LINKS.tel}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-wood-800 text-cream-50 shadow-md transition-colors hover:bg-wood-900"
            aria-label={`Ara: ${BUSINESS.phone}`}
          >
            <PhoneIcon className="h-4 w-4" />
          </a>

          <button
            type="button"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-wood-200 bg-white text-wood-800"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop: Logo left, Menu + Phone right */}
        <div className="hidden w-full items-center justify-end gap-6 md:flex">
          <Logo className="mr-auto" />

          <nav className="flex items-center gap-1" aria-label="Ana menü">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-wood-700 transition-colors hover:bg-wood-100 hover:text-wood-900"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={LINKS.tel}
            className="inline-flex items-center gap-2 rounded-xl bg-wood-800 px-4 py-2.5 text-sm font-semibold text-cream-50 shadow-md transition-colors hover:bg-wood-900"
            aria-label={`Ara: ${BUSINESS.phone}`}
          >
            <PhoneIcon className="h-4 w-4" />
            {BUSINESS.phone}
          </a>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <m.div
              className="fixed inset-0 top-14 z-30 bg-wood-900/25 backdrop-blur-[2px] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-hidden="true"
              onClick={closeMenu}
            />
            <m.nav
              id="mobile-menu"
              className="absolute inset-x-0 top-full z-40 border-b border-wood-100 bg-cream-50 px-3 py-3 shadow-xl md:hidden"
              aria-label="Mobil menü"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <ul className="space-y-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className="flex items-center rounded-xl px-4 py-3.5 text-base font-medium text-wood-800 active:bg-wood-100"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </m.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
