"use client";

import { useState } from "react";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import { WORKS } from "@/lib/site";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { SectionHeading } from "./SectionHeading";
import { WorkCard } from "./WorkCard";
import { fadeInUp, viewportOnce } from "@/lib/motion";

export function OurWorks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeWork = WORKS[activeIndex];

  return (
    <section id="galeri" className="section-padding scroll-mt-14 bg-white sm:scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portföy"
          title="Yaptığımız İşler"
          description="Mersin genelinde tamamladığımız mobilya tamir ve yenileme çalışmalarından örnekler. Her işte öncesi ve sonrası farkını net şekilde görebilirsiniz."
        />

        <div className="mt-10">
          <AnimatePresence mode="wait">
            <m.div
              key={activeWork.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <BeforeAfterSlider
                before={activeWork.before}
                after={activeWork.after}
                alt={activeWork.title}
              />
              <div className="mt-4 text-center">
                <span className="inline-block rounded-full bg-wood-100 px-3 py-1 text-xs font-semibold text-wood-700">
                  {activeWork.category}
                </span>
                <h3 className="mt-2 font-serif text-xl font-bold text-wood-900">
                  {activeWork.title}
                </h3>
                <p className="mx-auto mt-2 max-w-xl text-sm text-wood-600">
                  {activeWork.description}
                </p>
                {activeWork.href && (
                  <Link
                    href={activeWork.href}
                    className="mt-3 inline-block text-sm font-medium text-wood-800 underline-offset-2 transition-colors hover:text-wood-600 hover:underline"
                  >
                    Dolap yenileme çözümlerimizi görün
                  </Link>
                )}
              </div>
            </m.div>
          </AnimatePresence>

          <div className="mt-6 flex justify-center gap-2">
            {WORKS.map((work, index) => (
              <button
                key={work.slug}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-8 bg-wood-800"
                    : "w-2.5 bg-wood-300 hover:bg-wood-500"
                }`}
                aria-label={`${work.title} göster`}
                aria-current={index === activeIndex}
              />
            ))}
          </div>
        </div>

        <m.div
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {WORKS.map((work) => (
            <m.div key={work.slug} variants={fadeInUp}>
              <WorkCard work={work} />
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
