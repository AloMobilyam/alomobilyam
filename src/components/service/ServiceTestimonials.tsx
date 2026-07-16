"use client";

import { m } from "framer-motion";
import { handleWhatsAppClick } from "@/lib/google-ads";
import {
  SERVICE_TESTIMONIALS,
  SERVICE_TESTIMONIALS_WHATSAPP_MESSAGE,
  getServiceWhatsAppLink,
} from "@/lib/services/mutfak-dolabi-yenileme";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { WhatsAppIcon } from "../icons";
import { SectionHeading } from "../SectionHeading";

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="5 yıldız">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 text-amber-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function ServiceTestimonials() {
  const whatsappHref = getServiceWhatsAppLink(SERVICE_TESTIMONIALS_WHATSAPP_MESSAGE);

  return (
    <section
      id="musteri-yorumlari"
      className="section-padding scroll-mt-14 bg-cream-100 sm:scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Müşteri Yorumları"
          title="Müşterilerimiz Ne Diyor?"
          description="Mersin'de mutfak dolabı yenileme hizmeti alan müşterilerimizin değerlendirmeleri."
        />

        <m.div
          className="mt-10 grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {SERVICE_TESTIMONIALS.map((testimonial) => (
            <m.article
              key={testimonial.id}
              variants={fadeInUp}
              className="flex flex-col rounded-2xl border border-wood-100 bg-white p-5 shadow-sm ring-1 ring-wood-100/80 sm:p-6"
            >
              <p className="font-semibold text-wood-800">{testimonial.name}</p>
              <div className="mt-2">
                <StarRating />
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-wood-600 sm:text-[0.9375rem]">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </m.article>
          ))}
        </m.div>

        <m.div
          className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-wood-100 bg-cream-50 px-5 py-6 text-center shadow-sm sm:mt-12 sm:px-8 sm:py-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <p className="max-w-xl text-sm leading-relaxed text-wood-700 sm:text-base">
            Siz de mutfak dolabınızı yeniletmek için fotoğraf gönderin, ön teklif alın.
          </p>
          <m.a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="inline-flex w-full max-w-sm items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#25D366]/25 sm:gap-3 sm:px-8 sm:py-4 sm:text-base"
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
