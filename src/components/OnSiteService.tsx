import { BUSINESS } from "@/lib/site";
import { MapPinIcon } from "./icons";
import { PlaceholderImage } from "./PlaceholderImage";
import { SectionHeading } from "./SectionHeading";

export function OnSiteService() {
  return (
    <section id="yerinde-servis" className="bg-cream-100 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Yerinde Servis"
              title="Mersin Genelinde Adresinize Geliyoruz"
              description="Fiziksel mağaza veya atölye bulunmamaktadır. Tüm mobilya tamir, bakım, onarım ve montaj işlemleriniz evinizde veya iş yerinizde yapılır."
              centered={false}
            />

            <div className="mt-8 space-y-4">
              <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <MapPinIcon className="mt-0.5 h-6 w-6 shrink-0 text-wood-700" />
                <div>
                  <h3 className="font-semibold text-wood-900">Hizmet Bölgesi</h3>
                  <p className="mt-1 text-sm leading-relaxed text-wood-600">
                    {BUSINESS.area} genelinde yerinde mobilya tamir, bakım,
                    onarım ve montaj hizmeti. Mezitli, Yenişehir, Toroslar,
                    Akdeniz ve tüm Mersin ilçelerine randevu ile servis.
                  </p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-wood-600">
                Mobilyanızı taşımanıza gerek yok. Usta {BUSINESS.owner},
                gerekli malzeme ve ekipmanla adresinize gelerek işinizi
                profesyonelce tamamlar.
              </p>
            </div>
          </div>

          <PlaceholderImage
            label="Mersin geneli yerinde mobilya servisi"
            variant="service"
          />
        </div>
      </div>
    </section>
  );
}
