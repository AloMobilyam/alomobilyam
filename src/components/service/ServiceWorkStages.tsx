"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { m } from "framer-motion";
import {
  SERVICE_WORK_STAGES,
  type ServiceWorkStageIcon,
} from "@/lib/services/mutfak-dolabi-yenileme";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { SectionHeading } from "../SectionHeading";

const IMAGE_WIDTH = 1200;
const IMAGE_HEIGHT = 900;

export function ServiceWorkStages() {
  return (
    <section
      id="is-asamalari"
      className="section-padding scroll-mt-14 bg-cream-100 sm:scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="İş Aşamaları"
          title="Mutfak Dolabı Yenileme Sürecimiz"
          description="Her projeyi aynı özen ve profesyonellikle adım adım tamamlıyoruz."
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
    countertop: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        aria-hidden="true"
      >
        <rect x="2" y="8" width="20" height="4" rx="0.5" />
        <path d="M4 12v8M20 12v8" strokeLinecap="round" />
        <path d="M8 8V6h8v2" strokeLinejoin="round" />
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
