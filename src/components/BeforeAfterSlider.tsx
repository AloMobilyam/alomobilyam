"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { m } from "framer-motion";
import { scaleIn, viewportOnce } from "@/lib/motion";
import { isRealWorkImage, WORK_PLACEHOLDER_LABELS } from "@/lib/works";
import { WorkImageFallback } from "./WorkImageFallback";

type BeforeAfterSliderProps = {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt: string;
  className?: string;
};

function SliderImage({
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
  const [hasError, setHasError] = useState(false);
  const showPlaceholder = hasError || !isRealWorkImage(src);

  if (showPlaceholder) {
    return <WorkImageFallback label={label} variant={variant} />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 50vw"
      draggable={false}
      priority
      onError={() => setHasError(true)}
    />
  );
}

function PlaceholderSplitView({
  beforeLabel,
  afterLabel,
  badgeBefore,
  badgeAfter,
}: {
  beforeLabel: string;
  afterLabel: string;
  badgeBefore: string;
  badgeAfter: string;
}) {
  return (
    <>
      <div className="absolute inset-y-0 left-0 w-1/2 border-r border-wood-300/40">
        <WorkImageFallback
          label={beforeLabel}
          variant="before"
          badge={badgeBefore}
          className="rounded-none"
        />
      </div>
      <div className="absolute inset-y-0 right-0 w-1/2">
        <WorkImageFallback
          label={afterLabel}
          variant="after"
          badge={badgeAfter}
          className="rounded-none"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 z-10 w-px -translate-x-1/2 bg-wood-300/70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-wood-300/80 bg-cream-50/90 shadow-sm"
        aria-hidden="true"
      >
        <div className="flex h-full items-center justify-center">
          <svg className="h-3.5 w-3.5 text-wood-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M8 8l-4 4 4 4M16 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </>
  );
}

export function BeforeAfterSlider({
  before,
  after,
  beforeLabel = "ÖNCESİ",
  afterLabel = "SONRASI",
  alt,
  className = "",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const isPlaceholderMode =
    !isRealWorkImage(before) && !isRealWorkImage(after);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPosition((x / rect.width) * 100);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (isPlaceholderMode) return;
    setIsDragging(true);
    containerRef.current?.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || isPlaceholderMode) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (isPlaceholderMode) return;
    setIsDragging(false);
    containerRef.current?.releasePointerCapture(e.pointerId);
  };

  return (
    <m.div
      className={`relative select-none ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={scaleIn}
    >
      <div
        ref={containerRef}
        className={`relative aspect-[4/3] max-h-[min(70vw,420px)] w-full overflow-hidden rounded-2xl bg-cream-100 shadow-xl shadow-wood-900/10 ring-1 ring-wood-200/80 sm:max-h-none ${
          isPlaceholderMode ? "cursor-default" : "cursor-ew-resize touch-none"
        }`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        role="img"
        aria-label={`${alt} öncesi sonrası karşılaştırma`}
      >
        {isPlaceholderMode ? (
          <PlaceholderSplitView
            beforeLabel={WORK_PLACEHOLDER_LABELS.before}
            afterLabel={WORK_PLACEHOLDER_LABELS.after}
            badgeBefore={beforeLabel}
            badgeAfter={afterLabel}
          />
        ) : (
          <>
            <SliderImage
              src={after}
              alt={`${alt} - sonrası`}
              label={WORK_PLACEHOLDER_LABELS.after}
              variant="after"
            />

            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <SliderImage
                src={before}
                alt={`${alt} - öncesi`}
                label={WORK_PLACEHOLDER_LABELS.before}
                variant="before"
              />
            </div>

            <span className="pointer-events-none absolute left-3 top-3 z-10 rounded-full bg-wood-900/85 px-2.5 py-1 text-[10px] font-bold tracking-wider text-cream-50 backdrop-blur-sm sm:text-xs">
              {beforeLabel}
            </span>
            <span className="pointer-events-none absolute right-3 top-3 z-10 rounded-full bg-emerald-700/90 px-2.5 py-1 text-[10px] font-bold tracking-wider text-white backdrop-blur-sm sm:text-xs">
              {afterLabel}
            </span>

            <div
              className="absolute inset-y-0 z-20 w-1 -translate-x-1/2 bg-white shadow-[0_0_12px_rgba(0,0,0,0.25)]"
              style={{ left: `${position}%` }}
            >
              <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-wood-800 shadow-lg">
                <svg className="h-4 w-4 text-cream-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M8 8l-4 4 4 4M16 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </>
        )}
      </div>

      {!isPlaceholderMode && (
        <p className="mt-2 text-center text-xs text-wood-500 sm:hidden">
          Kaydırarak öncesi ve sonrasını karşılaştırın
        </p>
      )}
    </m.div>
  );
}
