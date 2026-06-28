"use client";

import { m } from "framer-motion";
import { SERVICES } from "@/lib/site";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { SectionHeading } from "./SectionHeading";
import { ServiceIcon } from "./ServiceIcon";

export function Services() {
  return (
    <section id="hizmetler" className="section-padding scroll-mt-14 bg-cream-50 sm:scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Hizmetlerimiz"
          title="Mersin'de Mobilya Tamir ve Montaj Hizmetleri"
          description="Ev ve ofis mobilyalarınız için tamir, bakım, onarım ve montaj işlemlerini Mersin genelinde yerinde gerçekleştiriyoruz."
        />

        <m.div
          className="mt-6 grid gap-2.5 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {SERVICES.map((service) => (
            <m.article
              key={service.title}
              variants={fadeInUp}
              whileHover={{
                y: -4,
                boxShadow: "0 16px 32px -10px rgba(44, 24, 16, 0.12)",
                transition: { duration: 0.25 },
              }}
              className="group relative overflow-hidden rounded-xl border border-wood-100 bg-white p-3.5 shadow-sm sm:rounded-2xl sm:p-6"
            >
              <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-wood-100/50 sm:-right-6 sm:-top-6 sm:h-24 sm:w-24" />

              <div className="relative mb-2.5 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-wood-100 to-wood-200 text-wood-700 transition-colors duration-300 group-hover:from-wood-800 group-hover:to-wood-900 group-hover:text-cream-50 sm:mb-4 sm:h-12 sm:w-12 sm:rounded-2xl">
                <ServiceIcon name={service.icon} className="h-4 w-4 sm:h-6 sm:w-6" />
              </div>

              <h3 className="relative font-serif text-sm font-bold text-wood-900 sm:text-lg">
                {service.title}
              </h3>
              <p className="relative mt-1 text-xs leading-relaxed text-wood-600 sm:mt-2 sm:text-sm">
                {service.description}
              </p>
            </m.article>
          ))}
        </m.div>
      </div>
    </section>
  );
}
