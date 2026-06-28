"use client";

import { m } from "framer-motion";
import { STATS } from "@/lib/site";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Stats() {
  return (
    <section className="relative z-10 pb-3 sm:-mt-4 sm:pb-6" aria-label="Güven göstergeleri">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <m.div
          className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {STATS.map((stat) => (
            <m.div
              key={stat.label}
              variants={fadeInUp}
              className="flex items-center justify-center rounded-xl border border-wood-100 bg-white px-2 py-2.5 text-center shadow-sm sm:rounded-2xl sm:p-4"
            >
              <p className="text-[11px] font-semibold leading-tight text-wood-800 sm:text-sm">
                {stat.label}
              </p>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
