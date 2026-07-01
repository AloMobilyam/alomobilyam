import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { ServiceBeforeAfterGallery } from "@/components/service/ServiceBeforeAfterGallery";
import { ServiceComparisonSection } from "@/components/service/ServiceComparisonSection";
import { ServiceFaqSection } from "@/components/service/ServiceFaqSection";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServicePricingFactors } from "@/components/service/ServicePricingFactors";
import { ServiceRenovationOperations } from "@/components/service/ServiceRenovationOperations";
import { ServiceTestimonials } from "@/components/service/ServiceTestimonials";
import { ServiceTrustSection } from "@/components/service/ServiceTrustSection";
import { ServiceWhatIsSection } from "@/components/service/ServiceWhatIsSection";
import { ServiceWorkStages } from "@/components/service/ServiceWorkStages";
import {
  getMutfakDolabiYenilemeBreadcrumbSchema,
  getMutfakDolabiYenilemeFAQSchema,
  getMutfakDolabiYenilemeServiceSchema,
} from "@/lib/schema";
import {
  SERVICE_BREADCRUMB_ITEMS,
  SERVICE_METADATA,
  SERVICE_URL,
  SERVICE_WHATSAPP_LINK,
} from "@/lib/services/mutfak-dolabi-yenileme";

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
    title: "Mersin Mutfak Dolabı Yenileme — Alo Mobilya",
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

export default function MersinMutfakDolabiYenilemePage() {
  const serviceSchema = getMutfakDolabiYenilemeServiceSchema();
  const faqSchema = getMutfakDolabiYenilemeFAQSchema();
  const breadcrumbSchema = getMutfakDolabiYenilemeBreadcrumbSchema();

  return (
    <>
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
        <ServiceHero />
        <ServiceBeforeAfterGallery />
        <ServiceWorkStages />
        <ServiceWhatIsSection />
        <ServiceRenovationOperations />
        <ServiceComparisonSection />
        <ServicePricingFactors />
        <ServiceTrustSection />
        <ServiceTestimonials />
        <ServiceFaqSection />
      </main>
      <Footer />
      <MobileBottomBar whatsappHref={SERVICE_WHATSAPP_LINK} />
    </>
  );
}
