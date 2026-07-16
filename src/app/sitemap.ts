import type { MetadataRoute } from "next";
import { SERVICE_PATH } from "@/lib/services/mutfak-dolabi-yenileme";
import { SERVICE_PATH as MOBILYA_ONARIM_SERVICE_PATH } from "@/lib/services/mobilya-onarim";
import { SERVICE_PATH as MOBILYA_YENILEME_SERVICE_PATH } from "@/lib/services/mobilya-yenileme";
import { SERVICE_PATH as MENTESE_SERVICE_PATH } from "@/lib/services/mentese-degisimi";
import { SERVICE_PATH as RAY_SERVICE_PATH } from "@/lib/services/ray-degisimi";
import { SERVICE_PATH as VESTIYER_SERVICE_PATH } from "@/lib/services/vestiyer-portmanto-yenileme";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}${SERVICE_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}${VESTIYER_SERVICE_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}${MOBILYA_ONARIM_SERVICE_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}${MOBILYA_YENILEME_SERVICE_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}${MENTESE_SERVICE_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}${RAY_SERVICE_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
