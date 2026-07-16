"use client";

import { m } from "framer-motion";
import { handleWhatsAppClick } from "@/lib/google-ads";
import {
  SERVICE_PRICING_FACTORS,
  SERVICE_TESTIMONIALS_WHATSAPP_MESSAGE,
  getServiceWhatsAppLink,
} from "@/lib/services/mutfak-dolabi-yenileme";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { WhatsAppIcon } from "../icons";
import { SectionHeading } from "../SectionHeading";

export function ServicePricingFactors() {
  const { eyebrow, title, description, factors, discoveryFeeNote, ctaText } =
    SERVICE_PRICING_FACTORS;
  const whatsappHref = getServiceWhatsAppLink(SERVICE_TESTIMONIALS_WHATSAPP_MESSAGE);

  return (
    <section
      id="fiyat-faktorleri"
      className="section-padding scroll-mt-14 bg-white sm:scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <m.div
          className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {factors.map((factor) => (
            <m.div
              key={factor.title}
              variants={fadeInUp}
              className="rounded-2xl border border-wood-100 bg-cream-50 p-4 shadow-sm sm:p-5"
            >
              <h3 className="font-serif text-base font-bold text-wood-900 sm:text-lg">
                {factor.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed break-words text-wood-600">
                {factor.description}
              </p>
            </m.div>
          ))}
        </m.div>

        <m.p
          className="mt-8 rounded-2xl border border-wood-100 bg-cream-100 px-5 py-4 text-center text-sm leading-relaxed text-wood-700 sm:mt-10 sm:px-8 sm:py-5 sm:text-base"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          {discoveryFeeNote}
        </m.p>

        <m.div
          className="mt-8 rounded-2xl border border-wood-100 bg-cream-100 p-5 text-center sm:mt-10 sm:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-wood-700 sm:text-base">
            {ctaText}
          </p>

          <m.a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="mt-5 inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#25D366]/25 sm:mt-6 sm:w-auto sm:gap-3 sm:px-8 sm:text-base"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            WhatsApp ile Fotoğraf Gönder
          </m.a>
        </m.div>
      </div>
    </section>
  );
}
