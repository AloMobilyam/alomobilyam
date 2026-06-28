import { WHY_US } from "@/lib/site";
import { CheckIcon } from "./icons";
import { SectionHeading } from "./SectionHeading";

export function WhyUs() {
  return (
    <section id="neden-biz" className="section-padding bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Neden Alo Mobilya?"
          title="Mersin'de Güvenilir Mobilya Ustası"
          description="Kaliteli işçilik, şeffaf iletişim ve yerinde servis anlayışıyla mobilyalarınıza uzun ömürlü çözümler sunuyoruz."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {WHY_US.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-2xl border border-wood-100 bg-cream-50 p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-wood-800 text-cream-50">
                <CheckIcon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-wood-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-wood-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
