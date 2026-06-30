import type { MetadataRoute } from "next";
import { BUSINESS, SITE_URL } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BUSINESS.name,
    short_name: BUSINESS.name,
    description: BUSINESS.tagline,
    start_url: "/",
    id: SITE_URL,
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1a1a1a",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
