import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { SurguluDolapRayTamiriPageContent } from "@/components/service/SurguluDolapRayTamiriPageContent";
import {
  getLocalBusinessSchema,
  getSurguluDolapRayTamiriBreadcrumbSchema,
  getSurguluDolapRayTamiriFAQSchema,
  getSurguluDolapRayTamiriServiceSchema,
} from "@/lib/schema";
import {
  SERVICE_BREADCRUMB_ITEMS,
  SERVICE_METADATA,
  SERVICE_URL,
  SERVICE_WHATSAPP_LINK,
} from "@/lib/services/surgulu-dolap-ray-tamiri";

const { title, description, keywords, ogImage } = SERVICE_METADATA;

export const metadata: Metadata = {
  title,
  description,
  keywords: [...keywords],
  authors: [{ name: "Erdoğan Kuşçu" }],
  creator: "Alo Mobilya",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SERVICE_URL,
    siteName: "Alo Mobilya",
    title,
    description,
    images: [
      {
        url: ogImage.url,
        alt: ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SERVICE_URL,
  },
};

export default function MersinSurguluDolapRayTamiriPage() {
  const localBusinessSchema = getLocalBusinessSchema();
  const serviceSchema = getSurguluDolapRayTamiriServiceSchema();
  const faqSchema = getSurguluDolapRayTamiriFAQSchema();
  const breadcrumbSchema = getSurguluDolapRayTamiriBreadcrumbSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Header />
      <main>
        <Breadcrumb items={SERVICE_BREADCRUMB_ITEMS} />
        <SurguluDolapRayTamiriPageContent />
      </main>
      <Footer />
      <MobileBottomBar whatsappHref={SERVICE_WHATSAPP_LINK} />
    </>
  );
}
