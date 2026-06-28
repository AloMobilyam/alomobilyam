import { BUSINESS, LINKS } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon, WrenchIcon } from "./icons";
import { PlaceholderImage } from "./PlaceholderImage";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-100 to-cream-50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,165,116,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-12 lg:px-8">
        <header className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-wood-800 text-cream-50">
              <WrenchIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="font-serif text-lg font-bold text-wood-900">{BUSINESS.name}</p>
              <p className="text-xs text-wood-600">Usta: {BUSINESS.owner}</p>
            </div>
          </div>
          <a
            href={LINKS.tel}
            className="hidden items-center gap-2 rounded-xl bg-wood-800 px-4 py-2.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-wood-900 sm:flex"
          >
            <PhoneIcon className="h-4 w-4" />
            {BUSINESS.phone}
          </a>
        </header>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 inline-flex items-center rounded-full border border-wood-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-wood-700 backdrop-blur-sm">
              Mersin geneli yerinde servis
            </p>
            <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-wood-900 sm:text-5xl lg:text-[3.25rem]">
              Mobilya Tamir, Bakım ve Montajda{" "}
              <span className="text-wood-600">Güvenilir Usta</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-wood-700">
              {BUSINESS.tagline}. Erdoğan Kuşçu ile dolap kurulumundan menteşe
              değişimine, mobilya yenilemeden kapı onarımına kadar tüm işleriniz
              adresinizde profesyonelce yapılır.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={LINKS.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#25D366]/25 transition-all hover:bg-[#1fb855] hover:shadow-xl"
              >
                <WhatsAppIcon className="h-6 w-6" />
                WhatsApp ile Yaz
              </a>
              <a
                href={LINKS.tel}
                className="inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-wood-300 bg-white px-8 py-4 text-base font-bold text-wood-900 transition-colors hover:border-wood-400 hover:bg-cream-50"
              >
                <PhoneIcon className="h-6 w-6" />
                Hemen Ara
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-wood-600">
              <li>✓ Yerinde servis</li>
              <li>✓ Usta işi kalite</li>
              <li>✓ Hızlı randevu</li>
            </ul>
          </div>

          <PlaceholderImage
            label="Profesyonel mobilya tamir ve montaj hizmeti"
            variant="hero"
          />
        </div>
      </div>
    </section>
  );
}
