import type { MetadataRoute } from "next";
import { SERVICE_PATH } from "@/lib/services/mutfak-dolabi-yenileme";
import { SERVICE_PATH as MOBILYA_ONARIM_SERVICE_PATH } from "@/lib/services/mobilya-onarim";
import { SERVICE_PATH as MOBILYA_YENILEME_SERVICE_PATH } from "@/lib/services/mobilya-yenileme";
import { SERVICE_PATH as MENTESE_SERVICE_PATH } from "@/lib/services/mentese-degisimi";
import { SERVICE_PATH as RAY_SERVICE_PATH } from "@/lib/services/ray-degisimi";
import { SERVICE_PATH as DOLAP_KAPAK_AYARI_SERVICE_PATH } from "@/lib/services/dolap-kapak-ayari";
import { SERVICE_PATH as KAPI_ONARIM_SERVICE_PATH } from "@/lib/services/kapi-onarim";
import { SERVICE_PATH as VESTIYER_SERVICE_PATH } from "@/lib/services/vestiyer-portmanto-yenileme";
import { SERVICE_PATH as DOLAP_KURULUM_SERVICE_PATH } from "@/lib/services/dolap-kurulum";
import { SERVICE_PATH as GARDIROP_KURULUM_SERVICE_PATH } from "@/lib/services/gardirop-kurulumu";
import { SERVICE_PATH as SURGULU_DOLAP_RAY_TAMIRI_SERVICE_PATH } from "@/lib/services/surgulu-dolap-ray-tamiri";
import { SERVICE_PATH as CEKMECE_RAY_DEGISIMI_SERVICE_PATH } from "@/lib/services/cekmece-ray-degisimi";
import { SERVICE_PATH as MASA_SANDALYE_TAMIRI_SERVICE_PATH } from "@/lib/services/masa-sandalye-tamiri";
import { SERVICE_PATH as MOBILYA_MONTAJ_DEMONTAJ_SERVICE_PATH } from "@/lib/services/mobilya-montaj-demontaj";
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
    {
      url: `${SITE_URL}${DOLAP_KAPAK_AYARI_SERVICE_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}${KAPI_ONARIM_SERVICE_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}${DOLAP_KURULUM_SERVICE_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}${GARDIROP_KURULUM_SERVICE_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}${SURGULU_DOLAP_RAY_TAMIRI_SERVICE_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}${CEKMECE_RAY_DEGISIMI_SERVICE_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}${MASA_SANDALYE_TAMIRI_SERVICE_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}${MOBILYA_MONTAJ_DEMONTAJ_SERVICE_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
