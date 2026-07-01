"use client";

import { m } from "framer-motion";
import { BUSINESS, LINKS, SERVICES } from "@/lib/site";
import { useNavLinks } from "@/hooks/useNavLinks";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { Logo } from "./Logo";
import { PhoneIcon, WhatsAppIcon } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();
  const navLinks = useNavLinks();

  return (
    <footer className="border-t border-wood-800 bg-wood-950 pt-8 pb-6 md:pb-10 md:pt-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <m.div
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <m.div variants={fadeInUp} className="sm:col-span-2 lg:col-span-1">
            <Logo variant="dark" />
            <p className="mt-4 text-sm leading-relaxed text-cream-200">
              {BUSINESS.owner} — 40 yılı aşkın tecrübeyle Mersin genelinde yerinde mobilya tamir, bakım ve montaj hizmeti.
            </p>
          </m.div>

          <m.div variants={fadeInUp}>
            <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-cream-100">
              İletişim
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={LINKS.whatsappMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-cream-100 transition-colors hover:text-[#25D366]"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={LINKS.tel}
                  className="inline-flex items-center gap-2 text-sm text-cream-100 transition-colors hover:text-wood-300"
                >
                  <PhoneIcon className="h-4 w-4" />
                  {BUSINESS.phone}
                </a>
              </li>
            </ul>
          </m.div>

          <m.div variants={fadeInUp}>
            <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-cream-100">
              Hizmetler
            </h3>
            <ul className="mt-4 space-y-2">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.title}>
                  <a
                    href={service.href ?? "/#hizmetler"}
                    className="text-sm text-cream-100 transition-colors hover:text-wood-300"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </m.div>

          <m.div variants={fadeInUp}>
            <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-cream-100">
              Hızlı Menü
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-cream-100 transition-colors hover:text-wood-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </m.div>
        </m.div>

        <m.div
          className="mt-10 border-t border-wood-800 pt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
        >
          <p className="text-xs text-cream-300">
            © {year} {BUSINESS.name}. Tüm hakları saklıdır.
          </p>
        </m.div>
      </div>
    </footer>
  );
}
