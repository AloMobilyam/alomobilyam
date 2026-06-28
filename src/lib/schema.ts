import { BUSINESS, LINKS, SERVICES, SITE_URL } from "./site";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS.name,
    description:
      "Mersin genelinde yerinde mobilya tamiri, mobilya yenileme, dolap kurulumu, menteşe değişimi, ray değişimi ve kapı onarım hizmeti.",
    url: SITE_URL,
    telephone: BUSINESS.phoneRaw,
    image: `${SITE_URL}/og-image.png`,
    priceRange: "$$",
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
  };
}

export function getFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Mersin'in hangi ilçelerine hizmet veriyorsunuz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mersin genelinde yerinde servis hizmeti sunuyoruz. Mezitli, Yenişehir, Toroslar, Akdeniz ve çevre ilçelere randevu ile geliyoruz.",
        },
      },
      {
        "@type": "Question",
        name: "Fiziksel mağazanız veya atölyeniz var mı?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hayır. Alo Mobilya olarak tamamen yerinde servis modeliyle çalışıyoruz. İşlerinizi kendi adresinizde yapıyoruz.",
        },
      },
    ],
  };
}
