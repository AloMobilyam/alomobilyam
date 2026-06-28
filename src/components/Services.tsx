"use client";

import { m } from "framer-motion";
import { SERVICES } from "@/lib/site";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { SectionHeading } from "./SectionHeading";
import { ServiceIcon } from "./ServiceIcon";

export function Services() {
  return (
    <section id="hizmetler" className="scroll-mt-16 bg-cream-50 py-14 sm:scroll-mt-20 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Hizmetlerimiz"
          title="Mersin'de Mobilya Tamir ve Montaj Hizmetleri"
          description="Ev ve ofis mobilyalarınız için tamir, bakım, onarım ve montaj işlemlerini Mersin genelinde yerinde gerçekleştiriyoruz."
        />

        <m.div
          className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
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
                y: -6,
                boxShadow: "0 20px 40px -12px rgba(44, 24, 16, 0.15)",
                transition: { duration: 0.25 },
              }}
              className="group relative overflow-hidden rounded-2xl border border-wood-100 bg-white p-5 shadow-sm sm:p-6"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-wood-100/50 transition-transform duration-300 group-hover:scale-150" />

              <m.div
                className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-wood-100 to-wood-200 text-wood-700 transition-colors duration-300 group-hover:from-wood-800 group-hover:to-wood-900 group-hover:text-cream-50"
                whileHover={{ rotate: [0, -8, 8, 0] }}
                transition={{ duration: 0.4 }}
              >
                <ServiceIcon name={service.icon} className="h-6 w-6" />
              </m.div>

              <h3 className="relative font-serif text-base font-bold text-wood-900 sm:text-lg">
                {service.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-wood-600">
                {service.description}
              </p>
            </m.article>
          ))}
        </m.div>
      </div>
    </section>
  );
}
