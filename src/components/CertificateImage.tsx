"use client";

import Image from "next/image";
import { useState } from "react";
import { CERTIFICATE_IMAGE } from "@/lib/site";

const PLACEHOLDER_LABEL = "Ustalık belgesi görseli eklenecek";

function CertificatePlaceholder() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cream-100 via-cream-200 to-wood-200">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.4),transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(160deg,transparent_35%,rgba(61,43,31,0.06)_100%)]" />
      <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 shadow-sm ring-1 ring-wood-200/60">
          <svg className="h-7 w-7 text-wood-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M9 12h6M9 16h4M7 4h10l2 4v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8l2-4z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-sm font-medium leading-snug text-wood-700">{PLACEHOLDER_LABEL}</p>
      </div>
    </div>
  );
}

export function CertificateImage() {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const showPlaceholder = hasError || !loaded;

  return (
    <div
      className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-2xl shadow-lg ring-1 ring-wood-200/80 sm:max-w-sm"
      role="img"
      aria-label={showPlaceholder ? PLACEHOLDER_LABEL : "Erdoğan Kuşçu ustalık belgesi"}
    >
      <CertificatePlaceholder />
      {!hasError && (
        <Image
          src={CERTIFICATE_IMAGE}
          alt="Erdoğan Kuşçu ustalık belgesi"
          fill
          className={`object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
          sizes="(max-width: 768px) 80vw, 320px"
          onLoad={() => setLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}
