"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { trackWhatsAppConversion } from "@/lib/google-ads";
import {
  SERVICE_TRUST_CARDS,
  SERVICE_TRUST_CERTIFICATE,
  SERVICE_TRUST_DESCRIPTION,
  SERVICE_WHATSAPP_LINK,
} from "@/lib/services/mutfak-dolabi-yenileme";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { CheckIcon, WhatsAppIcon } from "../icons";
import { SectionHeading } from "../SectionHeading";

export function ServiceTrustSection() {
  const { src, alt, width, height } = SERVICE_TRUST_CERTIFICATE;

  return (
    <section
      id="neden-alo-mobilya"
      className="section-padding scroll-mt-14 bg-white sm:scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Güven"
          title="Neden Alo Mobilya?"
          description="Ustalık belgesi ve yılların tecrübesiyle ölçüye uygun mutfak dolabı yenileme hizmeti sunuyoruz."
        />

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <m.figure
            className="overflow-hidden rounded-2xl border border-wood-100 bg-cream-50 p-2 shadow-sm ring-1 ring-wood-100/80 sm:p-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            <div className="overflow-hidden rounded-xl bg-white">
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="mx-auto block h-auto w-full object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </m.figure>

          <m.div
            className="flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {SERVICE_TRUST_CARDS.map((card) => (
                <m.div
                  key={card.title}
                  variants={fadeInUp}
                  className="flex flex-col items-center justify-center rounded-xl border border-wood-100 bg-cream-50 px-3 py-4 text-center shadow-sm sm:rounded-2xl sm:px-4 sm:py-5"
                >
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-wood-800 text-cream-50 sm:h-10 sm:w-10">
                    <CheckIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <p className="text-[11px] font-semibold leading-tight text-wood-800 sm:text-sm">
                    {card.title}
                  </p>
                </m.div>
              ))}
            </div>

            <m.p
              variants={fadeInUp}
              className="mt-5 text-sm leading-relaxed text-wood-700 sm:mt-6 sm:text-base"
            >
              {SERVICE_TRUST_DESCRIPTION}
            </m.p>

            <m.div variants={fadeInUp} className="mt-6 sm:mt-8">
              <m.a
                href={SERVICE_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppConversion}
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#25D366]/25 sm:gap-3 sm:px-8 sm:py-4 sm:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                WhatsApp ile Teklif Al
              </m.a>
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
