import { BUSINESS, LINKS } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./icons";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id="iletisim" className="bg-wood-900 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionHeading
            variant="light"
            eyebrow="İletişim"
            title="Mobilya Tamiri İçin Bize Ulaşın"
            description="Mersin genelinde yerinde mobilya tamir, bakım, onarım ve montaj hizmeti için hemen iletişime geçin. Fiziksel mağaza veya açık adres bulunmamaktadır."
          />
        </div>

        <div className="mx-auto mt-12 max-w-lg space-y-4">
          <div className="rounded-2xl bg-wood-800 p-6 text-center">
            <p className="text-sm text-cream-200">Usta</p>
            <p className="mt-1 font-serif text-2xl font-bold text-cream-50">
              {BUSINESS.owner}
            </p>
            <p className="mt-1 text-sm text-cream-300">{BUSINESS.name}</p>
          </div>

          <a
            href={LINKS.tel}
            className="flex items-center justify-center gap-3 rounded-2xl bg-cream-50 px-6 py-5 text-lg font-bold text-wood-900 transition-colors hover:bg-white"
          >
            <PhoneIcon className="h-6 w-6" />
            {BUSINESS.phone}
          </a>

          <a
            href={LINKS.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-6 py-5 text-lg font-bold text-white transition-colors hover:bg-[#1fb855]"
          >
            <WhatsAppIcon className="h-6 w-6" />
            WhatsApp ile Yaz
          </a>

          <p className="pt-4 text-center text-sm text-cream-300">
            Hizmet bölgesi: {BUSINESS.area} geneli yerinde servis
          </p>
        </div>
      </div>
    </section>
  );
}
