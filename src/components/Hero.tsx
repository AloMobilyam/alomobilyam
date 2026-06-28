"use client";

import { m } from "framer-motion";
import { BUSINESS } from "@/lib/site";
import { fadeInUp, viewportOnce } from "@/lib/motion";
import { CTAButtons } from "./CTAButtons";
import { HeroShowcase } from "./HeroShowcase";
import { Stats } from "./Stats";

export function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-cream-100 via-cream-50 to-cream-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,165,116,0.2),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(92,64,51,0.05),transparent_50%)]" />

        <div className="relative mx-auto max-w-6xl px-4 pb-6 pt-5 sm:px-6 sm:pb-8 sm:pt-8 lg:px-8 lg:pb-10">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <m.div
              className="order-2 lg:order-1"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
            >
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-wood-200/80 bg-white/85 px-3 py-1.5 text-[11px] font-semibold text-wood-700 shadow-sm backdrop-blur-sm sm:text-sm">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                Mersin geneli yerinde servis
              </p>

              <h1 className="font-serif text-[1.65rem] font-bold leading-[1.12] tracking-tight text-wood-900 sm:text-4xl lg:text-[2.65rem]">
                Mobilya Tamir, Bakım ve Montajda{" "}
                <span className="bg-gradient-to-r from-wood-700 to-wood-500 bg-clip-text text-transparent">
                  Güvenilir Usta
                </span>
              </h1>

              <p className="mt-3 text-[14px] leading-relaxed text-wood-700 sm:mt-4 sm:text-lg">
                {BUSINESS.tagline}. {BUSINESS.owner} ile dolap kurulumundan menteşe
                değişimine kadar tüm işleriniz adresinizde profesyonelce yapılır.
              </p>

              <div className="mt-5 sm:mt-7">
                <CTAButtons layout="stack" />
              </div>

              <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-wood-600 sm:mt-6 sm:gap-x-5 sm:text-sm">
                {["Yerinde servis", "Usta işi kalite", "Hızlı randevu"].map((item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 text-[10px] text-emerald-700">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </m.div>

            <div className="order-1 lg:order-2">
              <HeroShowcase />
            </div>
          </div>
        </div>
      </section>

      <Stats />
    </>
  );
}
