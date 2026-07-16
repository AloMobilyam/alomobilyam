import type { MouseEvent } from "react";
import { GOOGLE_ADS_WHATSAPP_CONVERSION_SEND_TO } from "@/lib/site";

const isProduction = process.env.NODE_ENV === "production";
const CONVERSION_CALLBACK_TIMEOUT_MS = 1000;

export function trackWhatsAppConversion(): Promise<void> {
  return new Promise((resolve) => {
    let settled = false;

    const finish = () => {
      if (settled) return;
      settled = true;
      resolve();
    };

    if (!isProduction || typeof window === "undefined") {
      finish();
      return;
    }

    const { gtag } = window;
    if (typeof gtag !== "function") {
      finish();
      return;
    }

    const timeoutId = window.setTimeout(finish, CONVERSION_CALLBACK_TIMEOUT_MS);

    gtag("event", "conversion", {
      send_to: GOOGLE_ADS_WHATSAPP_CONVERSION_SEND_TO,
      value: 1.0,
      currency: "TRY",
      event_callback: () => {
        window.clearTimeout(timeoutId);
        finish();
      },
    });
  });
}

export async function handleWhatsAppClick(
  event: MouseEvent<HTMLAnchorElement>,
): Promise<void> {
  event.preventDefault();

  const url = event.currentTarget.href;

  await trackWhatsAppConversion();

  window.open(url, "_blank", "noopener,noreferrer");
}
