"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { useState } from "react";
import { m } from "framer-motion";
import { trackWhatsAppConversion } from "@/lib/google-ads";
import {
  SERVICE_BEFORE_AFTER_GALLERY,
  SERVICE_COMPARISON,
  SERVICE_FAQS,
  SERVICE_GALLERY,
  SERVICE_HERO,
  SERVICE_OPERATIONS,
  SERVICE_OPERATIONS_SECTION,
  SERVICE_PRICING_FACTORS,
  SERVICE_TESTIMONIALS,
  SERVICE_TESTIMONIALS_SECTION,
  SERVICE_TESTIMONIALS_WHATSAPP_MESSAGE,
  SERVICE_TRUST,
  SERVICE_WHATSAPP_CTA,
  SERVICE_WHATSAPP_LINK,
  SERVICE_WORK_STAGES,
  SERVICE_WORK_STAGES_SECTION,
  getServiceWhatsAppLink,
  type ServiceOperationIcon,
  type ServiceWorkStageIcon,
} from "@/lib/services/vestiyer-portmanto-yenileme";
import { fadeInUp, scaleIn, staggerContainer, viewportOnce } from "@/lib/motion";
import { CTAButtons } from "../CTAButtons";
import { CheckIcon, WhatsAppIcon } from "../icons";
import { SectionHeading } from "../SectionHeading";

const IMAGE_WIDTH = 1200;
const IMAGE_HEIGHT = 900;

export function VestiyerPortmantoPageContent() {
  return (
    <>
      <ServiceHeroSection />
      <BeforeAfterGallerySection />
      <WorkStagesSection />
      <OperationsSection />
      <ComparisonSection />
      <PricingFactorsSection />
      <TrustSection />
      <TestimonialsSection />
      <FaqSection />
      <WhatsAppCtaSection />
    </>
  );
}

function ServiceHeroSection() {
  const { badge, h1, h1Highlight, paragraphs, trustItems, showcase } = SERVICE_HERO;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-100 via-cream-50 to-cream-50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,165,116,0.2),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(92,64,51,0.05),transparent_50%)]" />

      <div className="relative mx-auto max-w-6xl px-4 pb-4 pt-3 sm:px-6 sm:pb-8 sm:pt-8 lg:px-8 lg:pb-10">
        <div className="grid items-start gap-5 lg:grid-cols-2 lg:items-center lg:gap-12">
          <m.div
            className="order-1"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            <p className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-wood-200/80 bg-white/85 px-2.5 py-1 text-[10px] font-semibold text-wood-700 shadow-sm backdrop-blur-sm sm:mb-3 sm:px-3 sm:py-1.5 sm:text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {badge}
            </p>

            <h1 className="max-w-[20ch] font-serif text-[1.625rem] font-bold leading-[1.2] tracking-tight text-wood-900 sm:max-w-none sm:text-4xl sm:leading-tight lg:text-[2.65rem]">
              {h1} <span className="text-wood-700">{h1Highlight}</span>
            </h1>

            <div className="mt-2.5 max-w-prose space-y-2.5 text-base leading-relaxed text-wood-700 sm:mt-4 sm:space-y-3 sm:text-lg">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-4 sm:mt-7">
              <CTAButtons
                layout="stack"
                compact
                whatsappHref={SERVICE_WHATSAPP_LINK}
                whatsappLabel="WhatsApp ile Bilgi Al"
              />
            </div>

            <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5 text-[11px] text-wood-600 sm:mt-6 sm:gap-x-5 sm:text-sm">
              {trustItems.map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-100 text-[9px] text-emerald-700">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </m.div>

          <HeroShowcase showcase={showcase} />
        </div>
      </div>
    </section>
  );
}

function HeroShowcase({
  showcase,
}: {
  showcase: {
    title: string;
    before: string;
    after: string;
    beforeAlt: string;
    afterAlt: string;
  };
}) {
  return (
    <m.div
      className="relative order-2 mx-auto w-full max-w-sm lg:max-w-none"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={scaleIn}
    >
      <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-wood-300/20 via-transparent to-wood-600/10 blur-xl sm:-inset-4 sm:rounded-[2rem] sm:blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-white/50 bg-gradient-to-br from-wood-100 via-cream-100 to-wood-200 p-1 shadow-xl shadow-wood-900/10 ring-1 ring-wood-200/60 sm:rounded-3xl sm:p-1.5 sm:shadow-2xl">
        <div className="relative overflow-hidden rounded-[0.85rem] bg-gradient-to-br from-[#b8956a] via-[#8b6914] to-[#4a3228] sm:rounded-[1.25rem]">
          <div className="absolute inset-0 opacity-50 [background-image:repeating-linear-gradient(90deg,transparent,transparent_4px,rgba(0,0,0,0.035)_4px,rgba(0,0,0,0.035)_8px)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_15%,rgba(255,255,255,0.25),transparent_55%)]" />

          <div className="relative grid grid-cols-2 gap-1.5 p-2 sm:gap-3 sm:p-4">
            <ShowcaseImagePanel
              src={showcase.before}
              alt={showcase.beforeAlt}
              label="ÖNCESİ"
              highlight={false}
            />
            <ShowcaseImagePanel
              src={showcase.after}
              alt={showcase.afterAlt}
              label="SONRASI"
              highlight
              priority
            />
          </div>

          <div className="relative border-t border-white/10 bg-wood-900/55 px-3 py-2 backdrop-blur-sm sm:px-4 sm:py-3">
            <p className="text-center text-[10px] font-medium text-cream-100 sm:text-sm">
              {showcase.title}
            </p>
          </div>
        </div>
      </div>

      <m.div
        className="absolute -bottom-2 left-0 rounded-xl border border-wood-100/80 bg-white/95 px-2 py-1.5 shadow-md sm:-bottom-3 sm:-left-3 sm:rounded-2xl sm:px-3 sm:py-2"
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={viewportOnce}
        transition={{ delay: 0.2 }}
      >
        <p className="text-[10px] font-bold text-wood-800 sm:text-xs">Yerinde Servis</p>
      </m.div>

      <m.div
        className="absolute -right-1 top-0 rounded-xl border border-wood-700/30 bg-wood-800 px-2 py-1.5 shadow-md sm:-right-3 sm:-top-2 sm:rounded-2xl sm:px-3 sm:py-2"
        initial={{ opacity: 0, x: 8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={viewportOnce}
        transition={{ delay: 0.3 }}
      >
        <p className="text-[10px] font-bold text-cream-50 sm:text-xs">Modern Görünüm</p>
      </m.div>
    </m.div>
  );
}

function ShowcaseImagePanel({
  src,
  alt,
  label,
  highlight = false,
  priority = false,
}: {
  src: string;
  alt: string;
  label: string;
  highlight?: boolean;
  priority?: boolean;
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative aspect-[5/4] max-h-[120px] overflow-hidden rounded-xl border shadow-md sm:aspect-[3/4] sm:max-h-none sm:rounded-2xl sm:shadow-lg ${
        highlight
          ? "border-emerald-300/40 shadow-emerald-900/10"
          : "border-wood-900/25 shadow-wood-900/15"
      }`}
    >
      <div className="absolute inset-0 bg-cream-100" />
      {!hasError && (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 45vw, 220px"
          priority={priority}
          onError={() => setHasError(true)}
        />
      )}
      <span
        className={`absolute left-1.5 top-1.5 z-10 rounded-full px-1.5 py-0.5 text-[8px] font-bold tracking-wider sm:left-2 sm:top-2 sm:px-2 sm:text-[9px] ${
          label === "ÖNCESİ"
            ? "bg-wood-900/85 text-cream-50"
            : "bg-emerald-700/90 text-white"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function BeforeAfterGallerySection() {
  return (
    <section
      id="galeri"
      className="section-padding scroll-mt-14 bg-white sm:scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={SERVICE_GALLERY.eyebrow}
          title={SERVICE_GALLERY.title}
          description={SERVICE_GALLERY.description}
        />

        <m.div
          className="mt-10 columns-1 gap-6 sm:columns-2 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {SERVICE_BEFORE_AFTER_GALLERY.map((item) => (
            <m.article
              key={item.id}
              variants={fadeInUp}
              className="mb-6 break-inside-avoid"
            >
              <div className="overflow-hidden rounded-2xl border border-wood-100 bg-cream-50 shadow-sm ring-1 ring-wood-100/80">
                <div className="grid grid-cols-2 gap-0.5 bg-wood-100/60 p-0.5 sm:gap-1 sm:p-1">
                  <GalleryImagePanel
                    src={item.before.src}
                    alt={item.before.alt}
                    label="ÖNCESİ"
                    variant="before"
                  />
                  <GalleryImagePanel
                    src={item.after.src}
                    alt={item.after.alt}
                    label="SONRASI"
                    variant="after"
                  />
                </div>

                <figcaption className="border-t border-wood-100 px-3 py-3 sm:px-4 sm:py-3.5">
                  <p className="text-center text-xs leading-relaxed text-wood-700 sm:text-sm">
                    <span className="font-semibold text-wood-900">Proje {item.id}.</span>{" "}
                    {item.caption}
                  </p>
                </figcaption>
              </div>
            </m.article>
          ))}
        </m.div>
      </div>
    </section>
  );
}

function GalleryImagePanel({
  src,
  alt,
  label,
  variant,
}: {
  src: string;
  alt: string;
  label: string;
  variant: "before" | "after";
}) {
  const isAfter = variant === "after";

  return (
    <figure className="relative overflow-hidden rounded-xl bg-cream-100 sm:rounded-[0.85rem]">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={src}
          alt={alt}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          className="h-full w-full object-cover"
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 280px"
          loading="lazy"
        />
      </div>
      <span
        className={`absolute left-1.5 top-1.5 z-10 rounded-full px-1.5 py-0.5 text-[8px] font-bold tracking-wider sm:left-2 sm:top-2 sm:px-2 sm:text-[9px] ${
          isAfter
            ? "bg-emerald-700/90 text-white"
            : "bg-wood-900/85 text-cream-50"
        }`}
      >
        {label}
      </span>
    </figure>
  );
}

function WorkStagesSection() {
  return (
    <section
      id="is-asamalari"
      className="section-padding scroll-mt-14 bg-cream-100 sm:scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={SERVICE_WORK_STAGES_SECTION.eyebrow}
          title={SERVICE_WORK_STAGES_SECTION.title}
          description={SERVICE_WORK_STAGES_SECTION.description}
        />

        <m.div
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {SERVICE_WORK_STAGES.map((stage) => (
            <m.article
              key={stage.id}
              variants={fadeInUp}
              className="group overflow-hidden rounded-2xl border border-wood-100 bg-white shadow-sm ring-1 ring-wood-100/80"
            >
              <figure className="relative overflow-hidden">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={stage.image.src}
                    alt={stage.image.alt}
                    width={IMAGE_WIDTH}
                    height={IMAGE_HEIGHT}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
                    loading="lazy"
                  />
                </div>
                <span className="absolute left-3 top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-wood-900/90 text-xs font-bold text-cream-50 sm:h-8 sm:w-8 sm:text-sm">
                  {stage.id}
                </span>
              </figure>

              <div className="p-4 sm:p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-wood-100 to-wood-200 text-wood-700 transition-colors duration-300 group-hover:from-wood-800 group-hover:to-wood-900 group-hover:text-cream-50 sm:h-11 sm:w-11 sm:rounded-2xl">
                  <WorkStageIcon name={stage.icon} className="h-5 w-5 sm:h-5 sm:w-5" />
                </div>

                <h3 className="font-serif text-base font-bold text-wood-900 sm:text-lg">
                  {stage.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-wood-600 sm:text-[0.9375rem]">
                  {stage.description}
                </p>
              </div>
            </m.article>
          ))}
        </m.div>
      </div>
    </section>
  );
}

function OperationsSection() {
  return (
    <section
      id="yenileme-islemleri"
      className="section-padding scroll-mt-14 bg-cream-50 sm:scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={SERVICE_OPERATIONS_SECTION.eyebrow}
          title={SERVICE_OPERATIONS_SECTION.title}
          description={SERVICE_OPERATIONS_SECTION.description}
        />

        <m.div
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {SERVICE_OPERATIONS.map((operation) => (
            <m.article
              key={operation.id}
              variants={fadeInUp}
              className="group flex h-full flex-col rounded-2xl border border-wood-100 bg-white p-4 shadow-sm ring-1 ring-wood-100/80 sm:p-5"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-wood-100 to-wood-200 text-wood-700 transition-colors duration-300 group-hover:from-wood-800 group-hover:to-wood-900 group-hover:text-cream-50 sm:h-11 sm:w-11 sm:rounded-2xl">
                <OperationIcon name={operation.icon} className="h-5 w-5" />
              </div>

              <h3 className="font-serif text-base font-bold text-wood-900 sm:text-lg">
                {operation.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-wood-600">
                {operation.description}
              </p>
            </m.article>
          ))}
        </m.div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section
      id="yenileme-karsilastirma"
      className="section-padding scroll-mt-14 bg-cream-100 sm:scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={SERVICE_COMPARISON.eyebrow}
          title={SERVICE_COMPARISON.title}
          description={SERVICE_COMPARISON.description}
        />

        <m.div
          className="mt-10 overflow-hidden rounded-2xl border border-wood-100 bg-white shadow-sm ring-1 ring-wood-100/80"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          role="region"
          aria-label="Vestiyer yenileme ile sıfırdan yaptırma karşılaştırması"
        >
          <div className="hidden sm:grid sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1.2fr)] sm:border-b sm:border-wood-100 sm:bg-cream-50">
            <div className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-wood-600">
              Kriter
            </div>
            <div className="border-l border-wood-100 px-5 py-4 text-xs font-semibold uppercase tracking-wider text-wood-800">
              {SERVICE_COMPARISON.renovationLabel}
            </div>
            <div className="border-l border-wood-100 px-5 py-4 text-xs font-semibold uppercase tracking-wider text-wood-600">
              {SERVICE_COMPARISON.newLabel}
            </div>
          </div>

          <m.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {SERVICE_COMPARISON.rows.map((row, index) => (
              <m.div
                key={row.aspect}
                variants={fadeInUp}
                className={`border-wood-100 sm:grid sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1.2fr)] ${
                  index < SERVICE_COMPARISON.rows.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="bg-cream-50 px-4 py-4 sm:bg-transparent sm:px-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-wood-600 sm:text-sm sm:normal-case sm:tracking-normal sm:text-wood-900">
                    {row.aspect}
                  </p>
                </div>

                <div className="border-t border-wood-100 px-4 py-4 sm:border-l sm:border-t-0 sm:px-5">
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-wood-500 sm:hidden">
                    {SERVICE_COMPARISON.renovationLabel}
                  </p>
                  <p className="break-words text-sm leading-relaxed text-wood-700">{row.renovation}</p>
                </div>

                <div className="border-t border-wood-100 px-4 py-4 sm:border-l sm:border-t-0 sm:px-5">
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-wood-500 sm:hidden">
                    {SERVICE_COMPARISON.newLabel}
                  </p>
                  <p className="break-words text-sm leading-relaxed text-wood-600">{row.newOption}</p>
                </div>
              </m.div>
            ))}
          </m.div>
        </m.div>

        <m.p
          className="mt-6 text-center text-sm leading-relaxed text-wood-600 sm:mt-8 sm:text-base"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          {SERVICE_COMPARISON.note}
        </m.p>
      </div>
    </section>
  );
}

function PricingFactorsSection() {
  const whatsappHref = getServiceWhatsAppLink(SERVICE_TESTIMONIALS_WHATSAPP_MESSAGE);

  return (
    <section
      id="fiyat-faktorleri"
      className="section-padding scroll-mt-14 bg-white sm:scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={SERVICE_PRICING_FACTORS.eyebrow}
          title={SERVICE_PRICING_FACTORS.title}
          description={SERVICE_PRICING_FACTORS.description}
        />

        <m.div
          className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {SERVICE_PRICING_FACTORS.factors.map((factor) => (
            <m.div
              key={factor.title}
              variants={fadeInUp}
              className="rounded-2xl border border-wood-100 bg-cream-50 p-4 shadow-sm sm:p-5"
            >
              <h3 className="font-serif text-base font-bold text-wood-900 sm:text-lg">
                {factor.title}
              </h3>
              <p className="mt-2 break-words text-sm leading-relaxed text-wood-600">
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
          {SERVICE_PRICING_FACTORS.discoveryFeeNote}
        </m.p>

        <m.div
          className="mt-8 rounded-2xl border border-wood-100 bg-cream-100 p-5 text-center sm:mt-10 sm:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-wood-700 sm:text-base">
            {SERVICE_PRICING_FACTORS.ctaText}
          </p>

          <m.a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackWhatsAppConversion}
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

function TrustSection() {
  const { eyebrow, title, description, cards, certificate, text } = SERVICE_TRUST;

  return (
    <section
      id="neden-alo-mobilya"
      className="section-padding scroll-mt-14 bg-cream-50 sm:scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

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
                src={certificate.src}
                alt={certificate.alt}
                width={certificate.width}
                height={certificate.height}
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
              {cards.map((card) => (
                <m.div
                  key={card.title}
                  variants={fadeInUp}
                  className="flex flex-col items-center justify-center rounded-xl border border-wood-100 bg-white px-3 py-4 text-center shadow-sm sm:rounded-2xl sm:px-4 sm:py-5"
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
              {text}
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
                WhatsApp ile Bilgi Al
              </m.a>
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const whatsappHref = getServiceWhatsAppLink(SERVICE_TESTIMONIALS_WHATSAPP_MESSAGE);

  return (
    <section
      id="musteri-yorumlari"
      className="section-padding scroll-mt-14 bg-cream-100 sm:scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={SERVICE_TESTIMONIALS_SECTION.eyebrow}
          title={SERVICE_TESTIMONIALS_SECTION.title}
          description={SERVICE_TESTIMONIALS_SECTION.description}
        />

        <m.div
          className="mt-10 grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2 xl:grid-cols-4 lg:gap-6"
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
            Siz de vestiyer veya portmantonuzun fotoğrafını gönderin, yapılabilecek işlemler hakkında ön bilgi alın.
          </p>
          <m.a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackWhatsAppConversion}
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

function FaqSection() {
  return (
    <section
      id="sss"
      className="section-padding scroll-mt-14 bg-cream-50 pb-16 sm:scroll-mt-20 md:pb-20"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sık Sorulan Sorular"
          title="Vestiyer / Portmanto Yenileme Hakkında Merak Edilenler"
          description="Mersin'de yerinde vestiyer ve portmanto yenileme hizmetiyle ilgili en çok sorulan soruların kısa yanıtları."
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
                    <span className="min-w-0 break-words">{faq.question}</span>
                    <span
                      className="shrink-0 text-wood-400 transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
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
            onClick={trackWhatsAppConversion}
            className="mt-4 inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#25D366]/25 sm:w-auto sm:gap-3 sm:px-8 sm:text-base"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            WhatsApp ile Soru Sor
          </m.a>
        </m.div>
      </div>
    </section>
  );
}

function WhatsAppCtaSection() {
  return (
    <section className="bg-wood-900 py-10 sm:py-14" aria-label="Vestiyer yenileme iletisim">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={SERVICE_WHATSAPP_CTA.eyebrow}
          title={SERVICE_WHATSAPP_CTA.title}
          description={SERVICE_WHATSAPP_CTA.description}
          variant="light"
        />
        <div className="mx-auto mt-7 max-w-md sm:max-w-lg">
          <CTAButtons
            layout="stack"
            whatsappHref={SERVICE_WHATSAPP_LINK}
            whatsappLabel="WhatsApp ile Yaz"
          />
        </div>
        <p className="mx-auto mt-5 max-w-2xl text-sm text-cream-300">
          {SERVICE_WHATSAPP_CTA.note}
        </p>
      </div>
    </section>
  );
}

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

function WorkStageIcon({
  name,
  className = "h-5 w-5",
}: {
  name: ServiceWorkStageIcon;
  className?: string;
}) {
  const icons: Record<ServiceWorkStageIcon, ReactNode> = {
    remove: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        aria-hidden="true"
      >
        <rect x="5" y="3" width="14" height="18" rx="1" />
        <path d="M9 3v4M15 3v4" strokeLinecap="round" />
        <path d="M8 12h8" strokeLinecap="round" strokeDasharray="2 2" />
      </svg>
    ),
    sand: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        aria-hidden="true"
      >
        <rect x="3" y="14" width="18" height="6" rx="1" />
        <path d="M7 14V8l5-4 5 4v6" strokeLinejoin="round" />
        <path d="M6 10h12" strokeLinecap="round" />
      </svg>
    ),
    paint: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        aria-hidden="true"
      >
        <path d="M12 3c-2 0-3.5 1.5-3.5 3.5S10 10 12 10s3.5-1.5 3.5-3.5S14 3 12 3z" />
        <path d="M5 21h14" strokeLinecap="round" />
        <path d="M8 21l1-8h6l1 8" strokeLinejoin="round" />
      </svg>
    ),
    hinge: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        aria-hidden="true"
      >
        <rect x="4" y="4" width="7" height="16" rx="1" />
        <rect x="13" y="4" width="7" height="16" rx="1" />
        <circle cx="7.5" cy="12" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="16.5" cy="12" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    assembly: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        aria-hidden="true"
      >
        <path d="M12 2v6M8 5l4-3 4 3" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="4" y="10" width="16" height="10" rx="1" />
        <path d="M9 15h6" strokeLinecap="round" />
      </svg>
    ),
  };

  return <>{icons[name]}</>;
}

function OperationIcon({
  name,
  className = "h-5 w-5",
}: {
  name: ServiceOperationIcon;
  className?: string;
}) {
  const icons: Record<ServiceOperationIcon, ReactNode> = {
    door: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <rect x="5" y="3" width="14" height="18" rx="1" />
        <circle cx="15" cy="12" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    paint: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M12 3c-2 0-3.5 1.5-3.5 3.5S10 10 12 10s3.5-1.5 3.5-3.5S14 3 12 3z" />
        <path d="M5 21h14" strokeLinecap="round" />
        <path d="M8 21l1-8h6l1 8" strokeLinejoin="round" />
      </svg>
    ),
    hinge: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <rect x="4" y="4" width="7" height="16" rx="1" />
        <rect x="13" y="4" width="7" height="16" rx="1" />
        <circle cx="7.5" cy="12" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="16.5" cy="12" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    handle: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M6 12h12" strokeLinecap="round" />
        <path d="M6 12v-2a2 2 0 0 1 2-2h1" strokeLinecap="round" />
        <path d="M18 12v2a2 2 0 0 1-2 2h-1" strokeLinecap="round" />
      </svg>
    ),
    repair: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    assembly: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M12 2v6M8 5l4-3 4 3" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="4" y="10" width="16" height="10" rx="1" />
        <path d="M9 15h6" strokeLinecap="round" />
      </svg>
    ),
  };

  return <>{icons[name]}</>;
}
