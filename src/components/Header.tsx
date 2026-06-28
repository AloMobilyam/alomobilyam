"use client";

import { useEffect, useState } from "react";
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
    <header className="sticky top-0 z-40 border-b border-wood-100/80 bg-cream-50/90 backdrop-blur-lg">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:px-8">
        <Logo compact />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Ana menü">
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

        <div className="flex items-center gap-2">
          <a
            href={LINKS.tel}
            className="hidden items-center gap-2 rounded-xl bg-wood-800 px-3.5 py-2 text-sm font-semibold text-cream-50 transition-colors hover:bg-wood-900 lg:flex"
            aria-label={`Ara: ${BUSINESS.phone}`}
          >
            <PhoneIcon className="h-4 w-4" />
            <span className="hidden xl:inline">{BUSINESS.phone}</span>
            <span className="xl:hidden">Ara</span>
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-wood-200 bg-white text-wood-800 transition-colors hover:bg-wood-50 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">Menü</span>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 top-14 z-30 bg-wood-900/20 backdrop-blur-[2px] md:hidden"
            aria-hidden="true"
            onClick={closeMenu}
          />
          <nav
            id="mobile-menu"
            className="absolute inset-x-0 top-full z-40 border-b border-wood-100 bg-cream-50 px-4 py-3 shadow-lg md:hidden"
            aria-label="Mobil menü"
          >
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-center rounded-xl px-4 py-3 text-base font-medium text-wood-800 transition-colors hover:bg-wood-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="border-t border-wood-100 pt-2">
                <a
                  href={LINKS.tel}
                  onClick={closeMenu}
                  className="flex items-center gap-3 rounded-xl bg-wood-800 px-4 py-3 text-base font-semibold text-cream-50"
                >
                  <PhoneIcon className="h-5 w-5" />
                  {BUSINESS.phone}
                </a>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}
