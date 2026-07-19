"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, m } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { SectionHeading } from "../SectionHeading";

const IMAGE_WIDTH = 1200;
const IMAGE_HEIGHT = 900;

export type ServiceBeforeAfterGalleryItem = {
  id: number;
  before: {
    src: string;
    alt: string;
  };
  after: {
    src: string;
    alt: string;
  };
  caption: string;
};

type ServiceBeforeAfterGalleryProps = {
  items: ServiceBeforeAfterGalleryItem[];
  eyebrow: string;
  title: string;
  description: string;
};

export function ServiceBeforeAfterGallery({
  items,
  eyebrow,
  title,
  description,
}: ServiceBeforeAfterGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openAt = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const close = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || items.length === 0) return current;
      return (current - 1 + items.length) % items.length;
    });
  }, [items.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || items.length === 0) return current;
      return (current + 1) % items.length;
    });
  }, [items.length]);

  return (
    <section
      id="galeri"
      className="section-padding scroll-mt-14 bg-white sm:scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <m.div
          className="mt-10 columns-1 gap-6 sm:columns-2 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {items.map((item, index) => (
            <m.article
              key={item.id}
              variants={fadeInUp}
              className="mb-6 break-inside-avoid"
            >
              <div className="relative overflow-hidden rounded-2xl border border-wood-100 bg-cream-50 shadow-sm ring-1 ring-wood-100/80 transition-shadow has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-wood-700 has-[:focus-visible]:ring-offset-2 hover:shadow-md">
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

                <button
                  type="button"
                  onClick={() => openAt(index)}
                  aria-label={`Proje ${item.id} öncesi ve sonrasını büyüt`}
                  className="absolute inset-0 z-20 cursor-zoom-in rounded-2xl focus-visible:outline-none"
                />
              </div>
            </m.article>
          ))}
        </m.div>
      </div>

      <BeforeAfterLightbox
        items={items}
        activeIndex={activeIndex}
        onClose={close}
        onPrevious={showPrevious}
        onNext={showNext}
      />
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

type BeforeAfterLightboxProps = {
  items: ServiceBeforeAfterGalleryItem[];
  activeIndex: number | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

function BeforeAfterLightbox({
  items,
  activeIndex,
  onClose,
  onPrevious,
  onNext,
}: BeforeAfterLightboxProps) {
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const open = activeIndex !== null;
  const item = activeIndex !== null ? items[activeIndex] : null;
  const hasMultiple = items.length > 1;

  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    const { style } = document.body;
    const previous = {
      overflow: style.overflow,
      position: style.position,
      top: style.top,
      left: style.left,
      right: style.right,
      width: style.width,
    };

    style.overflow = "hidden";
    style.position = "fixed";
    style.top = `-${scrollY}px`;
    style.left = "0";
    style.right = "0";
    style.width = "100%";

    const previouslyFocused = document.activeElement as HTMLElement | null;
    window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    return () => {
      style.overflow = previous.overflow;
      style.position = previous.position;
      style.top = previous.top;
      style.left = previous.left;
      style.right = previous.right;
      style.width = previous.width;
      window.scrollTo(0, scrollY);
      previouslyFocused?.focus?.();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (!hasMultiple) return;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onPrevious();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        onNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, hasMultiple, onClose, onPrevious, onNext]);

  useEffect(() => {
    if (!open) return;

    const handleFocusTrap = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleFocusTrap);
    return () => document.removeEventListener("keydown", handleFocusTrap);
  }, [open, activeIndex]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && item && (
        <m.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label="Galeriyi kapat"
            className="absolute inset-0 bg-wood-950/80 backdrop-blur-[2px]"
            onClick={onClose}
          />

          <m.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 flex max-h-[min(92dvh,900px)] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-wood-200/20 bg-cream-50 shadow-2xl"
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex shrink-0 items-start justify-between gap-3 border-b border-wood-100 px-4 py-3 sm:px-5 sm:py-4">
              <div className="min-w-0">
                <p
                  id={titleId}
                  className="text-sm font-semibold text-wood-900 sm:text-base"
                >
                  Proje {item.id}
                </p>
                {hasMultiple && (
                  <p className="mt-0.5 text-xs text-wood-600">
                    {activeIndex! + 1} / {items.length}
                  </p>
                )}
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Kapat"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-wood-100 text-wood-800 transition-colors hover:bg-wood-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wood-700"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-3 sm:px-5 sm:py-4">
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <LightboxImagePanel
                  src={item.before.src}
                  alt={item.before.alt}
                  label="ÖNCESİ"
                  variant="before"
                />
                <LightboxImagePanel
                  src={item.after.src}
                  alt={item.after.alt}
                  label="SONRASI"
                  variant="after"
                />
              </div>

              <p className="mt-3 text-center text-xs leading-relaxed text-wood-700 sm:mt-4 sm:text-sm">
                {item.caption}
              </p>
            </div>

            {hasMultiple && (
              <>
                <button
                  type="button"
                  onClick={onPrevious}
                  aria-label="Önceki proje"
                  className="absolute left-2 top-1/2 z-20 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-wood-950/70 text-cream-50 transition-colors hover:bg-wood-950/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream-50 sm:left-3 sm:h-11 sm:w-11"
                >
                  <ChevronLeftIcon className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={onNext}
                  aria-label="Sonraki proje"
                  className="absolute right-2 top-1/2 z-20 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-wood-950/70 text-cream-50 transition-colors hover:bg-wood-950/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream-50 sm:right-3 sm:h-11 sm:w-11"
                >
                  <ChevronRightIcon className="h-5 w-5" />
                </button>
              </>
            )}
          </m.div>
        </m.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

function LightboxImagePanel({
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
    <figure className="relative overflow-hidden rounded-xl bg-wood-100/40">
      <div className="relative flex max-h-[38dvh] items-center justify-center sm:max-h-[52dvh]">
        <Image
          src={src}
          alt={alt}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          className="h-auto max-h-[38dvh] w-full object-contain sm:max-h-[52dvh]"
          sizes="(max-width: 640px) 46vw, (max-width: 1024px) 45vw, 480px"
          priority
        />
      </div>
      <span
        className={`absolute left-2 top-2 z-10 rounded-full px-2 py-0.5 text-[9px] font-bold tracking-wider sm:text-[10px] ${
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

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M15 6l-6 6 6 6" />
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}
