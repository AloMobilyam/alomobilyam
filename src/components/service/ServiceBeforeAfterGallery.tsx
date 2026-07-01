"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { SERVICE_BEFORE_AFTER_GALLERY } from "@/lib/services/mutfak-dolabi-yenileme";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { SectionHeading } from "../SectionHeading";

const IMAGE_WIDTH = 1200;
const IMAGE_HEIGHT = 900;

export function ServiceBeforeAfterGallery() {
  return (
    <section
      id="galeri"
      className="section-padding scroll-mt-14 bg-white sm:scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gerçek İşler"
          title="Gerçek Öncesi / Sonrası Galerisi"
          description="Tamamladığımız mutfak dolabı yenileme çalışmalarından gerçek önce ve sonra fotoğrafları."
        />

        <m.div
          className="mt-10 columns-1 gap-6 sm:columns-2 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {SERVICE_BEFORE_AFTER_GALLERY.map((item) => (
            <m.article
              key={item.id}
              variants={fadeInUp}
              className="mb-6 break-inside-avoid"
            >
              <div className="overflow-hidden rounded-2xl border border-wood-100 bg-cream-50 shadow-sm ring-1 ring-wood-100/80">
                <div className="grid grid-cols-2 gap-0.5 bg-wood-100/60 p-0.5 sm:gap-1 sm:p-1">
                  <GalleryImagePanel
                    src={item.before.src}
                    alt={item.before.alt}
                    label="ÖNCESİ"
                    variant="before"
                  />
                  <GalleryImagePanel
                    src={item.after.src}
                    alt={item.after.alt}
                    label="SONRASI"
                    variant="after"
                  />
                </div>

                <figcaption className="border-t border-wood-100 px-3 py-3 sm:px-4 sm:py-3.5">
                  <p className="text-center text-xs leading-relaxed text-wood-700 sm:text-sm">
                    <span className="font-semibold text-wood-900">
                      Proje {item.id}.
                    </span>{" "}
                    {item.caption}
                  </p>
                </figcaption>
              </div>
            </m.article>
          ))}
        </m.div>
      </div>
    </section>
  );
}

function GalleryImagePanel({
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
    <figure className="relative overflow-hidden rounded-xl bg-cream-100 sm:rounded-[0.85rem]">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={src}
          alt={alt}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          className="h-full w-full object-cover"
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 280px"
          loading="lazy"
        />
      </div>
      <span
        className={`absolute left-1.5 top-1.5 z-10 rounded-full px-1.5 py-0.5 text-[8px] font-bold tracking-wider sm:left-2 sm:top-2 sm:px-2 sm:text-[9px] ${
          isAfter
            ? "bg-emerald-700/90 text-white"
            : "bg-wood-900/85 text-cream-50"
        }`}
      >
        {label}
      </span>
    </figure>
  );
}
