import { BUSINESS } from "@/lib/site";
import { CTAButtons } from "./CTAButtons";

export function CTABanner() {
  return (
    <section className="bg-wood-900 py-10 sm:py-14" aria-label="Hızlı iletişim">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-xl font-bold text-cream-50 sm:text-3xl">
          Hemen Arayın veya WhatsApp&apos;tan Yazın
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-cream-200 sm:text-base">
          Mersin genelinde mobilya tamiri için {BUSINESS.owner} ile doğrudan
          iletişime geçin. Ücretsiz ön bilgi alın.
        </p>
        <div className="mx-auto mt-7 max-w-md sm:max-w-lg">
          <CTAButtons layout="stack" />
        </div>
      </div>
    </section>
  );
}
