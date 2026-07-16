"use client";

import { useState } from "react";
import { handlePhoneClick } from "@/lib/google-ads";
import { BUSINESS, LINKS } from "@/lib/site";
import { useNavLinks } from "@/hooks/useNavLinks";
import { PhoneIcon } from "./icons";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = useNavLinks();

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-wood-100/80 bg-cream-50/95 backdrop-blur-xl">
        <div className="mx-auto flex h-12 max-w-6xl items-center px-3 sm:h-16 sm:px-6 lg:px-8">
          {/* Mobile: Logo + Hamburger */}
          <div className="flex w-full items-center justify-between gap-3 md:hidden">
            <Logo compact />

            <button
              type="button"
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-wood-200 bg-white text-wood-800"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Desktop */}
          <div className="hidden w-full items-center justify-end gap-6 md:flex">
            <Logo className="mr-auto" />

            <nav className="flex items-center gap-1" aria-label="Ana menü">
              {navLinks.map((link) => (
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
              onClick={handlePhoneClick}
              className="inline-flex items-center gap-2 rounded-xl bg-wood-800 px-4 py-2.5 text-sm font-semibold text-cream-50 shadow-md transition-colors hover:bg-wood-900"
            >
              <PhoneIcon className="h-4 w-4" />
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
