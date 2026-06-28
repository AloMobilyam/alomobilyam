"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { m } from "framer-motion";
import { scaleIn, viewportOnce } from "@/lib/motion";

type BeforeAfterSliderProps = {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt: string;
  className?: string;
};

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "ÖNCESİ",
  afterLabel = "SONRASI",
  alt,
  className = "",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPosition((x / rect.width) * 100);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    containerRef.current?.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
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
        className="relative aspect-[4/3] w-full cursor-ew-resize overflow-hidden rounded-2xl bg-wood-200 shadow-xl shadow-wood-900/10 ring-1 ring-wood-200/80 touch-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        role="img"
        aria-label={`${alt} öncesi sonrası karşılaştırma`}
      >
        <Image
          src={afterImage}
          alt={`${alt} - sonrası`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          draggable={false}
          priority
        />

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={beforeImage}
            alt={`${alt} - öncesi`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            draggable={false}
            priority
          />
        </div>

        <span className="absolute left-3 top-3 z-10 rounded-full bg-wood-900/85 px-2.5 py-1 text-[10px] font-bold tracking-wider text-cream-50 backdrop-blur-sm sm:text-xs">
          {beforeLabel}
        </span>
        <span className="absolute right-3 top-3 z-10 rounded-full bg-emerald-700/90 px-2.5 py-1 text-[10px] font-bold tracking-wider text-white backdrop-blur-sm sm:text-xs">
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
      </div>

      <p className="mt-2 text-center text-xs text-wood-500 sm:hidden">
        Kaydırarak öncesi ve sonrasını karşılaştırın
      </p>
    </m.div>
  );
}
