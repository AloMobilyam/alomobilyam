import { BUSINESS, FAQS, LINKS, SERVICES, SITE_URL } from "./site";
import {
  SERVICE_BREADCRUMB_ITEMS,
  SERVICE_FAQS,
  SERVICE_METADATA,
  SERVICE_TITLE,
  SERVICE_URL,
} from "./services/mutfak-dolabi-yenileme";

const organizationId = `${SITE_URL}/#organization`;
const localBusinessId = `${SITE_URL}/#localbusiness`;

export function getOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: BUSINESS.name,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    founder: {
      "@type": "Person",
      name: BUSINESS.owner,
    },
    sameAs: [LINKS.whatsapp],
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationSchema(),
      {
        "@type": "LocalBusiness",
        "@id": localBusinessId,
        parentOrganization: { "@id": organizationId },
        name: BUSINESS.name,
        description:
          "40 yılı aşkın tecrübeli, ustalık belgeli mobilya ustası Erdoğan Kuşçu ile Mersin genelinde yerinde mobilya tamiri, mobilya yenileme, mutfak dolabı yenileme, dolap kurulumu, menteşe değişimi, ray değişimi ve kapı onarım hizmeti.",
        url: SITE_URL,
        telephone: BUSINESS.phoneRaw,
        image: `${SITE_URL}/favicon.svg`,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: BUSINESS.location.locality,
          addressRegion: BUSINESS.location.region,
          addressCountry: BUSINESS.location.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: BUSINESS.location.geo.latitude,
          longitude: BUSINESS.location.geo.longitude,
        },
        areaServed: {
          "@type": "City",
          name: "Mersin",
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: "Mersin",
          },
        },
        founder: {
          "@type": "Person",
          name: BUSINESS.owner,
          jobTitle: "Ustalık Belgeli Mobilya Ustası",
          knowsAbout: [
            "Mobilya tamiri",
            "Mobilya montajı",
            "Mobilya bakım ve onarım",
          ],
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: BUSINESS.phoneRaw,
          contactType: "customer service",
          availableLanguage: "Turkish",
          areaServed: "TR-33",
        },
        sameAs: [LINKS.whatsapp],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Mobilya Tamir ve Montaj Hizmetleri",
          itemListElement: SERVICES.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.description,
              areaServed: {
                "@type": "City",
                name: "Mersin",
              },
            },
          })),
        },
      },
    ],
  };
}

export function getFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

function resolveBreadcrumbItemUrl(href: string): string {
  if (href.startsWith("http")) {
    return href;
  }

  if (href === "/") {
    return SITE_URL;
  }

  return `${SITE_URL}${href}`;
}

export function getMutfakDolabiYenilemeFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SERVICE_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getMutfakDolabiYenilemeServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: SERVICE_TITLE,
    description: SERVICE_METADATA.description,
    url: SERVICE_URL,
    provider: {
      "@id": localBusinessId,
    },
    areaServed: {
      "@type": "City",
      name: "Mersin",
    },
    serviceType: "Mutfak dolabı yenileme",
  };
}

export function getMutfakDolabiYenilemeBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: SERVICE_BREADCRUMB_ITEMS.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: resolveBreadcrumbItemUrl(item.href),
    })),
  };
}
