import Link from "next/link";
import { BUSINESS, EXPERIENCE_HIGHLIGHTS } from "@/lib/site";
import { CertificateImage } from "./CertificateImage";
import { SectionHeading } from "./SectionHeading";

export function ExperienceSection() {
  return (
    <section id="tecrube" className="section-padding bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Güven ve Tecrübe"
              title="40 Yıllık Tecrübe, Belgeli Ustalık"
              description={`${BUSINESS.owner}, 40 yılı aşkın mobilya ustalığı tecrübesi ve ustalık belgesiyle Mersin genelinde yerinde mobilya tamiri, bakım, onarım, yenileme ve montaj hizmeti sunar.`}
              centered={false}
            />

            <p className="mt-6 text-sm leading-relaxed text-wood-600">
              Yerinde mutfak dolabı yenileme dahil tüm hizmetlerimizde aynı titizlik ve
              ustalık anlayışı geçerlidir.{" "}
              <Link
                href="/hizmetler/mersin-mutfak-dolabi-yenileme"
                className="font-medium text-wood-800 underline-offset-2 transition-colors hover:text-wood-600 hover:underline"
              >
                Dolap yenileme çözümlerimizi görün
              </Link>
              .
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
              {EXPERIENCE_HIGHLIGHTS.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-center rounded-xl border border-wood-100 bg-cream-50 px-3 py-3.5 text-center shadow-sm sm:rounded-2xl sm:px-4 sm:py-4"
                >
                  <p className="text-[11px] font-semibold leading-tight text-wood-800 sm:text-sm">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <CertificateImage />
        </div>
      </div>
    </section>
  );
}
