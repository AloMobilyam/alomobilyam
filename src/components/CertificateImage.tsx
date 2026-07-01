"use client";

import Image from "next/image";
import { useState } from "react";
import { m } from "framer-motion";
import { CheckIcon, WrenchIcon } from "./icons";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

const badgeGridStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const CERTIFICATE_SRC = "/certificates/ustalik-belgesi.png";
const CERTIFICATE_WIDTH = 1448;
const CERTIFICATE_HEIGHT = 1086;
const PLACEHOLDER_LABEL = "Ustalık belgesi görseli eklenecek";

const TRUST_BADGES = [
  {
    title: "MEB Onaylı",
    subtitle: "Usta Öğreticilik Belgesi",
    icon: "check" as const,
  },
  {
    title: "40+ Yıllık",
    subtitle: "Sektör Deneyimi",
    icon: "calendar" as const,
  },
  {
    title: "Belgeli",
    subtitle: "Mobilya Ustası",
    icon: "wrench" as const,
  },
] as const;

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function TrustBadgeIcon({ type }: { type: (typeof TRUST_BADGES)[number]["icon"] }) {
  const className = "h-4 w-4";

  if (type === "check") return <CheckIcon className={className} />;
  if (type === "calendar") return <CalendarIcon className={className} />;
  return <WrenchIcon className={className} />;
}

function CertificatePlaceholder() {
  return (
    <div className="relative flex min-h-[12rem] w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-cream-100 via-cream-200 to-wood-200 sm:min-h-[14rem]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.4),transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(160deg,transparent_35%,rgba(61,43,31,0.06)_100%)]" />
      <div className="relative z-10 flex flex-col items-center gap-3 px-6 py-8 text-center">
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
  const [hasError, setHasError] = useState(false);

  return (
    <m.div
      className="relative mx-auto w-full max-w-full overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-wood-200/80 sm:max-w-md lg:max-w-lg xl:max-w-xl"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      <m.div variants={fadeInUp} className="px-2 pt-2 sm:px-3 sm:pt-3">
        {hasError ? (
          <CertificatePlaceholder />
        ) : (
          <Image
            src={CERTIFICATE_SRC}
            alt="Erdoğan Kuşçu MEB onaylı mobilya ustalık belgesi"
            width={CERTIFICATE_WIDTH}
            height={CERTIFICATE_HEIGHT}
            className="mx-auto block h-auto w-full object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 36rem"
            loading="lazy"
            onError={() => setHasError(true)}
          />
        )}
      </m.div>

      <m.div
        variants={badgeGridStagger}
        className="grid grid-cols-3 gap-1 border-t border-wood-100/80 bg-cream-50/60 px-2 pb-2 pt-1.5 sm:gap-2 sm:px-3 sm:pb-3 sm:pt-2"
      >
        {TRUST_BADGES.map((badge) => (
          <m.div
            key={badge.title}
            variants={fadeInUp}
            className="flex flex-col items-center rounded-xl bg-white px-1.5 py-4 text-center shadow-sm ring-1 ring-wood-100/70 sm:px-3"
          >
            <div className="mb-1.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
              <TrustBadgeIcon type={badge.icon} />
            </div>
            <p className="text-lg font-bold leading-tight text-wood-900">{badge.title}</p>
            <p className="mt-0.5 text-xs leading-snug text-wood-600">{badge.subtitle}</p>
          </m.div>
        ))}
      </m.div>
    </m.div>
  );
}
