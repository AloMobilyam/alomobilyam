"use client";

import Image from "next/image";
import { useState } from "react";
import { ON_SITE_SERVICE_IMAGE } from "@/lib/site";
import { PlaceholderImage } from "./PlaceholderImage";

const PLACEHOLDER_LABEL = "Mersin geneli yerinde mobilya servisi";

export function OnSiteServiceImage() {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const showPlaceholder = hasError || !loaded;

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-inner">
      {showPlaceholder && (
        <PlaceholderImage
          label={PLACEHOLDER_LABEL}
          variant="service"
          className="absolute inset-0 h-full w-full rounded-none"
        />
      )}
      {!hasError && (
        <Image
          src={ON_SITE_SERVICE_IMAGE}
          alt={PLACEHOLDER_LABEL}
          fill
          className={`object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
          sizes="(max-width: 1024px) 100vw, 50vw"
          onLoad={() => setLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}
