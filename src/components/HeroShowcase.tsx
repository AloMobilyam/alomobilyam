"use client";

import Image from "next/image";
import { useState } from "react";
import { m } from "framer-motion";
import { HERO_SHOWCASE_WORK } from "@/lib/site";
import { scaleIn, viewportOnce } from "@/lib/motion";

export function HeroShowcase() {
  const { title, before, after } = HERO_SHOWCASE_WORK;

  return (
    <m.div
      className="relative mx-auto w-full max-w-sm lg:max-w-none"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={scaleIn}
    >
      <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-wood-300/20 via-transparent to-wood-600/10 blur-xl sm:-inset-4 sm:rounded-[2rem] sm:blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-white/50 bg-gradient-to-br from-wood-100 via-cream-100 to-wood-200 p-1 shadow-xl shadow-wood-900/10 ring-1 ring-wood-200/60 sm:rounded-3xl sm:p-1.5 sm:shadow-2xl">
        <div className="relative overflow-hidden rounded-[0.85rem] bg-gradient-to-br from-[#b8956a] via-[#8b6914] to-[#4a3228] sm:rounded-[1.25rem]">
          <div className="absolute inset-0 opacity-50 [background-image:repeating-linear-gradient(90deg,transparent,transparent_4px,rgba(0,0,0,0.035)_4px,rgba(0,0,0,0.035)_8px)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_15%,rgba(255,255,255,0.25),transparent_55%)]" />

          <div className="relative grid grid-cols-2 gap-1.5 p-2 sm:gap-3 sm:p-4">
            <ShowcaseImagePanel
              src={before}
              alt={`${title} - öncesi`}
              label="ÖNCESİ"
              highlight={false}
            />
            <ShowcaseImagePanel
              src={after}
              alt={`${title} - sonrası`}
              label="SONRASI"
              highlight
            />
          </div>

          <div className="relative border-t border-white/10 bg-wood-900/55 px-3 py-2 backdrop-blur-sm sm:px-4 sm:py-3">
            <p className="text-center text-[10px] font-medium text-cream-100 sm:text-sm">
              {title}
            </p>
          </div>
        </div>
      </div>

      <m.div
        className="absolute -bottom-2 left-0 rounded-xl border border-wood-100/80 bg-white/95 px-2 py-1.5 shadow-md sm:-bottom-3 sm:-left-3 sm:rounded-2xl sm:px-3 sm:py-2"
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={viewportOnce}
        transition={{ delay: 0.2 }}
      >
        <p className="text-[10px] font-bold text-wood-800 sm:text-xs">Yerinde Servis</p>
      </m.div>

      <m.div
        className="absolute -right-1 top-0 rounded-xl border border-wood-700/30 bg-wood-800 px-2 py-1.5 shadow-md sm:-right-3 sm:-top-2 sm:rounded-2xl sm:px-3 sm:py-2"
        initial={{ opacity: 0, x: 8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={viewportOnce}
        transition={{ delay: 0.3 }}
      >
        <p className="text-[10px] font-bold text-cream-50 sm:text-xs">Usta İşi</p>
      </m.div>
    </m.div>
  );
}

function ShowcaseImagePanel({
  src,
  alt,
  label,
  highlight = false,
}: {
  src: string;
  alt: string;
  label: string;
  highlight?: boolean;
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative aspect-[5/4] max-h-[120px] overflow-hidden rounded-xl border shadow-md sm:aspect-[3/4] sm:max-h-none sm:rounded-2xl sm:shadow-lg ${
        highlight
          ? "border-emerald-300/40 shadow-emerald-900/10"
          : "border-wood-900/25 shadow-wood-900/15"
      }`}
    >
      <div className="absolute inset-0 bg-cream-100" />
      {!hasError && (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 45vw, 220px"
          priority
          onError={() => setHasError(true)}
        />
      )}
      <span
        className={`absolute left-1.5 top-1.5 z-10 rounded-full px-1.5 py-0.5 text-[8px] font-bold tracking-wider sm:left-2 sm:top-2 sm:px-2 sm:text-[9px] ${
          label === "ÖNCESİ"
            ? "bg-wood-900/85 text-cream-50"
            : "bg-emerald-700/90 text-white"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
