"use client";

import { m } from "framer-motion";
import { scaleIn, viewportOnce } from "@/lib/motion";

export function HeroShowcase() {
  return (
    <m.div
      className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={scaleIn}
    >
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-wood-300/25 via-transparent to-wood-600/15 blur-2xl" />

      <div className="relative overflow-hidden rounded-3xl border border-white/50 bg-gradient-to-br from-wood-100 via-cream-100 to-wood-200 p-1.5 shadow-2xl shadow-wood-900/15 ring-1 ring-wood-200/60">
        <div className="relative overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-[#b8956a] via-[#8b6914] to-[#4a3228]">
          <div className="absolute inset-0 opacity-50 [background-image:repeating-linear-gradient(90deg,transparent,transparent_4px,rgba(0,0,0,0.035)_4px,rgba(0,0,0,0.035)_8px)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_15%,rgba(255,255,255,0.25),transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(165deg,rgba(255,255,255,0.1)_0%,transparent_40%,rgba(26,15,10,0.3)_100%)]" />

          <div className="relative grid grid-cols-2 gap-2 p-2.5 sm:gap-3 sm:p-4">
            <ShowcasePanel label="ÖNCESİ" tone="before" />
            <ShowcasePanel label="SONRASI" tone="after" highlight />
          </div>

          <div className="relative border-t border-white/10 bg-wood-900/55 px-4 py-3 backdrop-blur-sm">
            <p className="text-center text-xs font-medium text-cream-100 sm:text-sm">
              Profesyonel mobilya tamir &amp; yenileme
            </p>
          </div>
        </div>
      </div>

      <m.div
        className="absolute -bottom-3 -left-1 rounded-2xl border border-wood-100/80 bg-white/95 px-3 py-2 shadow-lg shadow-wood-900/10 backdrop-blur-sm sm:-left-3"
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={viewportOnce}
        transition={{ delay: 0.3 }}
      >
        <p className="text-[11px] font-bold text-wood-800 sm:text-xs">Yerinde Servis</p>
        <p className="text-[10px] text-wood-500">Mersin geneli</p>
      </m.div>

      <m.div
        className="absolute -right-1 -top-2 rounded-2xl border border-wood-700/30 bg-wood-800 px-3 py-2 shadow-lg shadow-wood-900/25 sm:-right-3"
        initial={{ opacity: 0, x: 12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={viewportOnce}
        transition={{ delay: 0.4 }}
      >
        <p className="text-[11px] font-bold text-cream-50 sm:text-xs">Usta İşi</p>
        <p className="text-[10px] text-cream-200">Güvenilir hizmet</p>
      </m.div>
    </m.div>
  );
}

function ShowcasePanel({
  label,
  tone,
  highlight = false,
}: {
  label: string;
  tone: "before" | "after";
  highlight?: boolean;
}) {
  const isBefore = tone === "before";

  return (
    <m.div
      className={`relative aspect-[3/4] overflow-hidden rounded-2xl border shadow-lg ${
        highlight
          ? "border-emerald-300/40 shadow-emerald-900/15"
          : "border-wood-900/25 shadow-wood-900/20"
      }`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className={`absolute inset-0 ${
          isBefore
            ? "bg-gradient-to-br from-wood-500/90 via-wood-600 to-wood-800"
            : "bg-gradient-to-br from-amber-100/95 via-wood-200 to-wood-400"
        }`}
      />
      <div className="absolute inset-0 opacity-35 [background-image:repeating-linear-gradient(0deg,transparent,transparent_5px,rgba(0,0,0,0.04)_5px,rgba(0,0,0,0.04)_10px)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,0.22),transparent_65%)]" />

      <span
        className={`absolute left-2 top-2 z-10 rounded-full px-2 py-0.5 text-[9px] font-bold tracking-widest backdrop-blur-sm sm:left-2.5 sm:top-2.5 sm:px-2.5 sm:py-1 sm:text-[10px] ${
          isBefore
            ? "bg-wood-900/85 text-cream-50"
            : "bg-emerald-700/90 text-white"
        }`}
      >
        {label}
      </span>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-wood-900/75 to-transparent px-3 py-4">
        <div className={`h-1.5 rounded-full ${isBefore ? "w-2/3 bg-wood-300/50" : "w-full bg-cream-100/70"}`} />
        <div className={`mt-2 h-1 rounded-full ${isBefore ? "w-1/2 bg-wood-400/40" : "w-4/5 bg-cream-50/60"}`} />
      </div>
    </m.div>
  );
}
