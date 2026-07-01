"use client";

import { m } from "framer-motion";
import { SERVICE_AUDIENCE } from "@/lib/services/mutfak-dolabi-yenileme";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { SectionHeading } from "../SectionHeading";

export function ServiceAudienceSection() {
  const { eyebrow, title, description, items } = SERVICE_AUDIENCE;

  return (
    <section
      id="kimler-icin"
      className="section-padding scroll-mt-14 bg-cream-50 sm:scroll-mt-20"
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
          {items.map((item) => (
            <m.article
              key={item.id}
              variants={fadeInUp}
              className="flex h-full flex-col rounded-2xl border border-wood-100 bg-white p-4 shadow-sm ring-1 ring-wood-100/80 sm:p-5"
            >
              <h3 className="font-serif text-base font-bold text-wood-900 sm:text-lg">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-wood-600">
                {item.description}
              </p>
            </m.article>
          ))}
        </m.div>
      </div>
    </section>
  );
}
