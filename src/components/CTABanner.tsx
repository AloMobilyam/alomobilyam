import { BUSINESS, LINKS } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./icons";

export function CTABanner() {
  return (
    <section className="bg-wood-900 py-12 sm:py-14" aria-label="Hızlı iletişim">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl font-bold text-cream-50 sm:text-3xl">
          Hemen Arayın veya WhatsApp&apos;tan Yazın
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-cream-200">
          Mersin genelinde mobilya tamiri için {BUSINESS.owner} ile doğrudan
          iletişime geçin. Ücretsiz ön bilgi alın.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={LINKS.tel}
            className="inline-flex w-full max-w-xs items-center justify-center gap-3 rounded-2xl bg-cream-50 px-8 py-4 text-lg font-bold text-wood-900 transition-colors hover:bg-white sm:w-auto"
          >
            <PhoneIcon className="h-6 w-6" />
            {BUSINESS.phone}
          </a>
          <a
            href={LINKS.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full max-w-xs items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-[#1fb855] sm:w-auto"
          >
            <WhatsAppIcon className="h-6 w-6" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
