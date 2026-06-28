import { SERVICES } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="hizmetler" className="scroll-mt-16 bg-cream-50 py-14 sm:scroll-mt-20 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Hizmetlerimiz"
          title="Mersin'de Mobilya Tamir ve Montaj Hizmetleri"
          description="Ev ve ofis mobilyalarınız için tamir, bakım, onarım ve montaj işlemlerini Mersin genelinde yerinde gerçekleştiriyoruz."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-wood-100 bg-white p-6 shadow-sm transition-all hover:border-wood-200 hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-wood-100 text-wood-700 transition-colors group-hover:bg-wood-800 group-hover:text-cream-50">
                <span className="text-lg font-bold">✦</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-wood-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-wood-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
