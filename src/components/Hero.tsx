import { BUSINESS } from "@/lib/site";
import { CTAButtons } from "./CTAButtons";
import { HeroShowcase } from "./HeroShowcase";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-100 via-cream-50 to-cream-50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,165,116,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(92,64,51,0.06),transparent_50%)]" />

      <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-10 lg:px-8 lg:pb-20">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="order-2 lg:order-1">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-wood-200/80 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-wood-700 shadow-sm backdrop-blur-sm sm:text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Mersin geneli yerinde servis
            </p>

            <h1 className="font-serif text-[1.75rem] font-bold leading-[1.15] tracking-tight text-wood-900 sm:text-4xl lg:text-[2.75rem]">
              Mobilya Tamir, Bakım ve Montajda{" "}
              <span className="text-wood-600">Güvenilir Usta</span>
            </h1>

            <p className="mt-4 text-[15px] leading-relaxed text-wood-700 sm:mt-5 sm:text-lg">
              {BUSINESS.tagline}. {BUSINESS.owner} ile dolap kurulumundan menteşe
              değişimine, mobilya yenilemeden kapı onarımına kadar tüm işleriniz
              adresinizde profesyonelce yapılır.
            </p>

            <div className="mt-6 sm:mt-8">
              <CTAButtons layout="stack" />
            </div>

            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-wood-600 sm:mt-8 sm:text-sm">
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-600">✓</span> Yerinde servis
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-600">✓</span> Usta işi kalite
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-600">✓</span> Hızlı randevu
              </li>
            </ul>
          </div>

          <div className="order-1 lg:order-2">
            <HeroShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}
