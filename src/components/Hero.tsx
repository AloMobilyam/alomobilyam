"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { HERO_DESCRIPTION } from "@/lib/site";
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

        <div className="relative mx-auto max-w-6xl px-4 pb-4 pt-3 sm:px-6 sm:pb-8 sm:pt-8 lg:px-8 lg:pb-10">
          <div className="grid items-start gap-5 lg:grid-cols-2 lg:items-center lg:gap-12">
            <m.div
              className="order-1"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
            >
              <p className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-wood-200/80 bg-white/85 px-2.5 py-1 text-[10px] font-semibold text-wood-700 shadow-sm backdrop-blur-sm sm:mb-3 sm:px-3 sm:py-1.5 sm:text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Mersin geneli yerinde servis
              </p>

              <h1 className="max-w-[18ch] font-serif text-[1.625rem] font-bold leading-[1.2] tracking-tight text-wood-900 sm:max-w-none sm:text-4xl sm:leading-tight lg:text-[2.65rem]">
                Mobilya Tamir, Bakım ve Montajda{" "}
                <span className="text-wood-700">Güvenilir Usta</span>
              </h1>

              <p className="mt-2.5 max-w-prose text-base leading-relaxed text-wood-700 sm:mt-4 sm:text-lg">
                {HERO_DESCRIPTION}
              </p>

              <div className="mt-4 sm:mt-7">
                <CTAButtons layout="stack" compact />
              </div>

              <p className="mt-3 text-sm text-wood-600">
                <Link
                  href="/hizmetler/mersin-mutfak-dolabi-yenileme"
                  className="font-medium text-wood-800 underline-offset-2 transition-colors hover:text-wood-600 hover:underline"
                >
                  Mersin mutfak dolabı yenileme
                </Link>{" "}
                hizmetimiz hakkında detaylı bilgi alın.
              </p>

              <ul className="mt-4 hidden flex-wrap gap-x-4 gap-y-1.5 text-xs text-wood-600 sm:mt-6 sm:flex sm:gap-x-5 sm:text-sm">
                {["40+ yıllık tecrübe", "Ustalık belgeli", "Garantili işçilik"].map((item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-100 text-[9px] text-emerald-700">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </m.div>

            <div className="order-2">
              <HeroShowcase />
            </div>
          </div>
        </div>
      </section>

      <Stats />
    </>
  );
}
