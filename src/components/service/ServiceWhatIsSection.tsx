"use client";

import { m } from "framer-motion";
import { SERVICE_WHAT_IS } from "@/lib/services/mutfak-dolabi-yenileme";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { SectionHeading } from "../SectionHeading";

export function ServiceWhatIsSection() {
  const { eyebrow, title, description, paragraphs } = SERVICE_WHAT_IS;

  return (
    <section
      id="mutfak-dolabi-yenileme-nedir"
      className="section-padding scroll-mt-14 bg-white sm:scroll-mt-20"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <m.div
          className="mt-8 space-y-4 sm:mt-10 sm:space-y-5"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {paragraphs.map((paragraph) => (
            <m.p
              key={paragraph}
              variants={fadeInUp}
              className="text-sm leading-relaxed text-wood-700 sm:text-base"
            >
              {paragraph}
            </m.p>
          ))}
        </m.div>
      </div>
    </section>
  );
}
