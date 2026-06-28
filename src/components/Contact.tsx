import { BUSINESS } from "@/lib/site";
import { CTAButtons } from "./CTAButtons";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id="iletisim" className="scroll-mt-16 bg-wood-900 py-14 sm:scroll-mt-20 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionHeading
            variant="light"
            eyebrow="İletişim"
            title="Mobilya Tamiri İçin Bize Ulaşın"
            description="Mersin genelinde yerinde mobilya tamir, bakım, onarım ve montaj hizmeti için hemen iletişime geçin. Fiziksel mağaza veya açık adres bulunmamaktadır."
          />
        </div>

        <div className="mx-auto mt-10 max-w-lg space-y-4">
          <div className="rounded-2xl border border-wood-700 bg-wood-800/80 p-6 text-center">
            <p className="text-sm text-cream-200">Usta</p>
            <p className="mt-1 font-serif text-2xl font-bold text-cream-50">
              {BUSINESS.owner}
            </p>
            <p className="mt-1 text-sm text-cream-300">{BUSINESS.name}</p>
          </div>

          <CTAButtons layout="stack" />

          <p className="pt-2 text-center text-sm text-cream-300">
            Hizmet bölgesi: {BUSINESS.area} geneli yerinde servis
          </p>
        </div>
      </div>
    </section>
  );
}
