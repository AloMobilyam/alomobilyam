"use client";

import { m } from "framer-motion";
import { SERVICE_COMPARISON } from "@/lib/services/mutfak-dolabi-yenileme";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { SectionHeading } from "../SectionHeading";

export function ServiceComparisonSection() {
  const {
    eyebrow,
    title,
    description,
    renovationLabel,
    newKitchenLabel,
    rows,
    note,
  } = SERVICE_COMPARISON;

  return (
    <section
      id="yenileme-karsilastirma"
      className="section-padding scroll-mt-14 bg-cream-100 sm:scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <m.div
          className="mt-10 overflow-hidden rounded-2xl border border-wood-100 bg-white shadow-sm ring-1 ring-wood-100/80"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          role="region"
          aria-label="Mutfak dolabı yenileme ile sıfırdan mutfak karşılaştırması"
        >
          <div className="hidden sm:grid sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1.2fr)] sm:border-b sm:border-wood-100 sm:bg-cream-50">
            <div className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-wood-600">
              Kriter
            </div>
            <div className="border-l border-wood-100 px-5 py-4 text-xs font-semibold uppercase tracking-wider text-wood-800">
              {renovationLabel}
            </div>
            <div className="border-l border-wood-100 px-5 py-4 text-xs font-semibold uppercase tracking-wider text-wood-600">
              {newKitchenLabel}
            </div>
          </div>

          <m.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {rows.map((row, index) => (
              <m.div
                key={row.aspect}
                variants={fadeInUp}
                className={`border-wood-100 sm:grid sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1.2fr)] ${
                  index < rows.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="bg-cream-50 px-4 py-4 sm:bg-transparent sm:px-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-wood-600 sm:text-sm sm:normal-case sm:tracking-normal sm:text-wood-900">
                    {row.aspect}
                  </p>
                </div>

                <div className="border-t border-wood-100 px-4 py-4 sm:border-l sm:border-t-0 sm:px-5">
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-wood-500 sm:hidden">
                    {renovationLabel}
                  </p>
                  <p className="text-sm leading-relaxed break-words text-wood-700">{row.renovation}</p>
                </div>

                <div className="border-t border-wood-100 px-4 py-4 sm:border-l sm:border-t-0 sm:px-5">
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-wood-500 sm:hidden">
                    {newKitchenLabel}
                  </p>
                  <p className="text-sm leading-relaxed break-words text-wood-600">{row.newKitchen}</p>
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
          {note}
        </m.p>
      </div>
    </section>
  );
}
