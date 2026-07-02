import { GOOGLE_ADS_WHATSAPP_CONVERSION_SEND_TO } from "@/lib/site";

const isProduction = process.env.NODE_ENV === "production";

export function trackWhatsAppConversion(): void {
  if (!isProduction || typeof window === "undefined") {
    return;
  }

  const { gtag } = window;
  if (typeof gtag !== "function") {
    return;
  }

  gtag("event", "conversion", {
    send_to: GOOGLE_ADS_WHATSAPP_CONVERSION_SEND_TO,
    value: 1.0,
    currency: "TRY",
  });
}
