"use client";

import { m } from "framer-motion";
import { SERVICE_WHEN_NEW_KITCHEN } from "@/lib/services/mutfak-dolabi-yenileme";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { SectionHeading } from "../SectionHeading";

export function ServiceWhenNewKitchenSection() {
  const { eyebrow, title, description, items, note } = SERVICE_WHEN_NEW_KITCHEN;

  return (
    <section
      id="sifirdan-mutfak-ne-zaman"
      className="section-padding scroll-mt-14 bg-cream-50 sm:scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <m.div
          className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {items.map((item) => (
            <m.article
              key={item.id}
              variants={fadeInUp}
              className="flex gap-4 rounded-2xl border border-wood-100 bg-white p-4 shadow-sm ring-1 ring-wood-100/80 sm:p-5"
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-wood-100 text-wood-700 sm:h-11 sm:w-11 sm:rounded-2xl"
                aria-hidden="true"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8v4M12 16h.01" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-wood-900 sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-wood-600">
                  {item.description}
                </p>
              </div>
            </m.article>
          ))}
        </m.div>

        <m.p
          className="mt-8 rounded-2xl border border-wood-100 bg-cream-100 px-5 py-4 text-center text-sm leading-relaxed text-wood-700 sm:mt-10 sm:px-8 sm:py-5 sm:text-base"
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
