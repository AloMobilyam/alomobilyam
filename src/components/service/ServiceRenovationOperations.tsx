"use client";

import type { ReactNode } from "react";
import { m } from "framer-motion";
import {
  SERVICE_RENOVATION_OPERATIONS,
  type ServiceRenovationOperationIcon,
} from "@/lib/services/mutfak-dolabi-yenileme";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { SectionHeading } from "../SectionHeading";

export function ServiceRenovationOperations() {
  return (
    <section
      id="yenileme-islemleri"
      className="section-padding scroll-mt-14 bg-cream-50 sm:scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Hizmet Kapsamı"
          title="Hangi Yenileme İşlemleri Yapılır?"
          description="Mutfak dolabı yenileme sürecinde ihtiyacınıza göre aşağıdaki işlemleri tek tek veya birlikte planlıyoruz."
        />

        <m.div
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {SERVICE_RENOVATION_OPERATIONS.map((operation) => (
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

function OperationIcon({
  name,
  className = "h-5 w-5",
}: {
  name: ServiceRenovationOperationIcon;
  className?: string;
}) {
  const icons: Record<ServiceRenovationOperationIcon, ReactNode> = {
    door: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <rect x="5" y="3" width="14" height="18" rx="1" />
        <circle cx="15" cy="12" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    lake: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M12 3c-2 0-3.5 1.5-3.5 3.5S10 10 12 10s3.5-1.5 3.5-3.5S14 3 12 3z" />
        <path d="M5 21h14" strokeLinecap="round" />
        <path d="M8 21l1-8h6l1 8" strokeLinejoin="round" />
      </svg>
    ),
    lam: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <path d="M3 10h18M8 5v14" strokeLinecap="round" />
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
    countertop: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <rect x="2" y="8" width="20" height="4" rx="0.5" />
        <path d="M4 12v8M20 12v8" strokeLinecap="round" />
        <path d="M8 8V6h8v2" strokeLinejoin="round" />
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
