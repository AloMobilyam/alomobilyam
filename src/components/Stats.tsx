"use client";

import { m } from "framer-motion";
import { STATS } from "@/lib/site";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Stats() {
  return (
    <section className="relative z-10 -mt-2 pb-4 sm:-mt-4 sm:pb-6" aria-label="İstatistikler">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <m.div
          className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {STATS.map((stat) => (
            <m.div
              key={stat.label}
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-2xl border border-wood-100 bg-white p-4 text-center shadow-md shadow-wood-900/5 sm:p-5"
            >
              <p className="font-serif text-2xl font-bold text-wood-800 sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[11px] font-medium leading-tight text-wood-600 sm:text-sm">
                {stat.label}
              </p>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
