"use client";

import type { ReactNode } from "react";
import { m } from "framer-motion";
import {
  SERVICE_MATERIAL_OPTIONS,
  type ServiceMaterialOptionIcon,
} from "@/lib/services/mutfak-dolabi-yenileme";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { SectionHeading } from "../SectionHeading";

export function ServiceMaterialOptions() {
  const { eyebrow, title, description, options, note } = SERVICE_MATERIAL_OPTIONS;

  return (
    <section
      id="malzeme-secenekleri"
      className="section-padding scroll-mt-14 bg-white sm:scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <m.div
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {options.map((option) => (
            <m.article
              key={option.id}
              variants={fadeInUp}
              className="group flex h-full flex-col rounded-2xl border border-wood-100 bg-cream-50 p-4 shadow-sm sm:p-5"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-wood-100 to-wood-200 text-wood-700 transition-colors duration-300 group-hover:from-wood-800 group-hover:to-wood-900 group-hover:text-cream-50 sm:h-11 sm:w-11 sm:rounded-2xl">
                <MaterialIcon name={option.icon} className="h-5 w-5" />
              </div>

              <h3 className="font-serif text-base font-bold text-wood-900 sm:text-lg">
                {option.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-wood-600">
                {option.description}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-wood-700">
                <span className="font-semibold text-wood-800">Avantaj: </span>
                {option.advantage}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-wood-600">
                <span className="font-semibold text-wood-700">Uygun olduğu durum: </span>
                {option.suitableFor}
              </p>
            </m.article>
          ))}
        </m.div>

        <m.p
          className="mt-8 text-center text-sm leading-relaxed text-wood-600 sm:mt-10 sm:text-base"
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

function MaterialIcon({
  name,
  className = "h-5 w-5",
}: {
  name: ServiceMaterialOptionIcon;
  className?: string;
}) {
  const icons: Record<ServiceMaterialOptionIcon, ReactNode> = {
    lam: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <path d="M3 10h18M8 5v14" strokeLinecap="round" />
      </svg>
    ),
    lake: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M12 3c-2 0-3.5 1.5-3.5 3.5S10 10 12 10s3.5-1.5 3.5-3.5S14 3 12 3z" />
        <path d="M5 21h14" strokeLinecap="round" />
        <path d="M8 21l1-8h6l1 8" strokeLinejoin="round" />
      </svg>
    ),
    membran: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="1" />
        <path d="M4 9h16M9 4v16" strokeLinecap="round" />
        <path d="M4 15h16" strokeLinecap="round" />
      </svg>
    ),
    acrylic: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7l3-7z" strokeLinejoin="round" />
      </svg>
    ),
    paint: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M12 2C8 2 5 5 5 9c0 2 1 4 3 5v6h8v-6c2-1 3-3 3-5 0-4-3-7-7-7z" />
        <path d="M9 21h6" strokeLinecap="round" />
      </svg>
    ),
  };

  return <>{icons[name]}</>;
}
