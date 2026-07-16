import type { MouseEvent } from "react";
import {
  GOOGLE_ADS_PHONE_CONVERSION_SEND_TO,
  GOOGLE_ADS_WHATSAPP_CONVERSION_SEND_TO,
} from "@/lib/site";

const isProduction = process.env.NODE_ENV === "production";
const CONVERSION_CALLBACK_TIMEOUT_MS = 1000;
const PHONE_CONVERSION_PLACEHOLDER = "PHONE_LABEL_HERE";

function isPhoneConversionConfigured(): boolean {
  return !GOOGLE_ADS_PHONE_CONVERSION_SEND_TO.includes(
    PHONE_CONVERSION_PLACEHOLDER,
  );
}

function trackConversion(sendTo: string): Promise<void> {
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
      send_to: sendTo,
      value: 1.0,
      currency: "TRY",
      event_callback: () => {
        window.clearTimeout(timeoutId);
        finish();
      },
    });
  });
}

export function trackWhatsAppConversion(): Promise<void> {
  return trackConversion(GOOGLE_ADS_WHATSAPP_CONVERSION_SEND_TO);
}

export function trackPhoneConversion(): Promise<void> {
  if (!isPhoneConversionConfigured()) {
    return Promise.resolve();
  }

  return trackConversion(GOOGLE_ADS_PHONE_CONVERSION_SEND_TO);
}

export async function handleWhatsAppClick(
  event: MouseEvent<HTMLAnchorElement>,
): Promise<void> {
  event.preventDefault();

  const url = event.currentTarget.href;

  await trackWhatsAppConversion();

  window.open(url, "_blank", "noopener,noreferrer");
}

export async function handlePhoneClick(
  event: MouseEvent<HTMLAnchorElement>,
): Promise<void> {
  // Placeholder label varken gtag gönderme; native tel: yönlendirmesini kullan.
  if (!isPhoneConversionConfigured()) {
    return;
  }

  event.preventDefault();

  const url = event.currentTarget.href;

  await trackPhoneConversion();

  window.location.href = url;
}
