"use client";

import { m } from "framer-motion";
import Image from "next/image";
import type { WorkItem } from "@/lib/site";
import { fadeInUp } from "@/lib/motion";

type WorkCardProps = {
  work: WorkItem;
};

export function WorkCard({ work }: WorkCardProps) {
  return (
    <m.article
      className="group overflow-hidden rounded-2xl border border-wood-100 bg-white shadow-sm"
      variants={fadeInUp}
      whileHover={{ y: -4, boxShadow: "0 16px 32px -8px rgba(44,24,16,0.12)" }}
      transition={{ duration: 0.25 }}
    >
      <div className="border-b border-wood-50 px-4 py-4 sm:px-5">
        <span className="inline-block rounded-full bg-wood-100 px-2.5 py-0.5 text-xs font-semibold text-wood-700">
          {work.category}
        </span>
        <h3 className="mt-2 font-serif text-lg font-bold text-wood-900 sm:text-xl">
          {work.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-wood-600">
          {work.description}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-px bg-wood-100">
        <WorkImage src={work.beforeImage} alt={`${work.title} - öncesi`} label="Önce" variant="before" />
        <WorkImage src={work.afterImage} alt={`${work.title} - sonrası`} label="Sonra" variant="after" />
      </div>
    </m.article>
  );
}

function WorkImage({
  src,
  alt,
  label,
  variant,
}: {
  src: string;
  alt: string;
  label: string;
  variant: "before" | "after";
}) {
  const isAfter = variant === "after";

  return (
    <m.div
      className="relative aspect-[4/3] overflow-hidden bg-cream-100"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
      <span
        className={`absolute left-2 top-2 z-10 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide sm:text-xs ${
          isAfter
            ? "bg-emerald-700/90 text-white"
            : "bg-wood-900/85 text-cream-50"
        }`}
      >
        {label}
      </span>
    </m.div>
  );
}
