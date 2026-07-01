"use client";

import { m } from "framer-motion";
import { SERVICE_FAQS, SERVICE_WHATSAPP_LINK } from "@/lib/services/mutfak-dolabi-yenileme";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { WhatsAppIcon } from "../icons";
import { SectionHeading } from "../SectionHeading";

export function ServiceFaqSection() {
  return (
    <section id="sss" className="section-padding scroll-mt-14 bg-cream-50 pb-12 sm:scroll-mt-20 md:pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sık Sorulan Sorular"
          title="Mutfak Dolabı Yenileme Hakkında Merak Edilenler"
          description="Mersin mutfak dolabı yenileme hizmetiyle ilgili en sık sorulan soruların yanıtları."
        />

        <m.div
          className="mt-10 space-y-3 sm:mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {SERVICE_FAQS.map((faq) => (
            <m.div key={faq.question} variants={fadeInUp}>
              <details className="group rounded-2xl border border-wood-100 bg-white shadow-sm">
                <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-wood-900 marker:hidden sm:px-6 sm:py-5 [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4 text-sm sm:text-base">
                    {faq.question}
                    <span className="shrink-0 text-wood-400 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <div className="border-t border-wood-50 px-5 py-4 text-sm leading-relaxed text-wood-600 sm:px-6">
                  {faq.answer}
                </div>
              </details>
            </m.div>
          ))}
        </m.div>

        <m.div
          className="mt-8 text-center sm:mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <p className="text-sm text-wood-600 sm:text-base">
            Sorunuzun yanıtını bulamadınız mı?
          </p>
          <m.a
            href={SERVICE_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#25D366]/25 sm:w-auto sm:gap-3 sm:px-8 sm:text-base"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            WhatsApp ile Sorun
          </m.a>
        </m.div>
      </div>
    </section>
  );
}
