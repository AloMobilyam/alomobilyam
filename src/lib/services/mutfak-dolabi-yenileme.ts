import { BUSINESS, CANONICAL_SITE_URL, HERO_SHOWCASE_WORK, LINKS } from "@/lib/site";

export const SERVICE_SLUG = "mersin-mutfak-dolabi-yenileme";

export const SERVICE_PATH = `/hizmetler/${SERVICE_SLUG}` as const;

export const SERVICE_URL = `${CANONICAL_SITE_URL}${SERVICE_PATH}`;

export const SERVICE_TITLE = "Mersin Mutfak Dolabı Yenileme";

export const SERVICE_METADATA = {
  title: "Mersin Mutfak Dolabı Yenileme | Yerinde Kapak Boyama — Alo Mobilya",
  description:
    "Mersin genelinde yerinde mutfak dolabı yenileme ve boyama. 40 yıllık ustalık belgeli Erdoğan Kuşçu ile kapak yenileme, menteşe değişimi. Fotoğrafla ön teklif alın.",
  keywords: [
    "mersin mutfak dolabı yenileme",
    "mersin mutfak dolabı boyama",
    "yerinde mutfak dolabı yenileme",
    "mutfak dolabı kapak yenileme",
    "mutfak dolabı kapak boyama Mersin",
    "Alo Mobilya",
    "Erdoğan Kuşçu",
  ],
  ogImage: {
    url: "/works/mutfak-dolabi-sonra.png",
    alt: "Mersin mutfak dolabı yenileme önce sonra — modern kapaklar",
  },
} as const;

export const SERVICE_WHATSAPP_MESSAGE =
  "Merhaba, Mersin mutfak dolabı yenileme hizmeti hakkında bilgi almak istiyorum.";

export function getServiceWhatsAppLink(message = SERVICE_WHATSAPP_MESSAGE) {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const SERVICE_WHATSAPP_LINK = getServiceWhatsAppLink();

export const SERVICE_BREADCRUMB_ITEMS = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hizmetler", href: "/#hizmetler" },
  { label: SERVICE_TITLE, href: SERVICE_PATH },
] as const;

export const SERVICE_HERO = {
  badge: "Mersin geneli yerinde servis",
  h1: "Mersin Mutfak Dolabı Yenileme",
  h1Highlight: "Yerinde Kapak Boyama ve Yenileme",
  paragraphs: [
    "Sararmış, boyası dökülen veya eskiyen mutfak dolabı kapakları mutfağınızın görünümünü olumsuz etkiler. Mersin genelinde Alo Mobilya olarak yeni dolap almadan, mevcut dolabınızı adresinizde yeniliyoruz.",
    "Erdoğan Kuşçu'nun 40 yılı aşkın ustalık tecrübesi ve ustalık belgesiyle kapak boyama, zımparalama, menteşe değişimi ve montaj işlemlerini evinizde veya iş yerinizde profesyonelce tamamlıyoruz.",
  ],
  trustItems: ["40+ yıllık tecrübe", "Ustalık belgeli", "Garantili işçilik"],
  showcase: HERO_SHOWCASE_WORK,
} as const;

export const SERVICE_PAGE_LINKS = {
  tel: LINKS.tel,
  whatsapp: SERVICE_WHATSAPP_LINK,
} as const;

export const SERVICE_GALLERY_IMAGE_BASE =
  "/mutfak-dolabi-yenileme/once-sonra" as const;

export type ServiceBeforeAfterItem = {
  id: number;
  before: {
    src: string;
    alt: string;
  };
  after: {
    src: string;
    alt: string;
  };
  caption: string;
};

function galleryImage(filename: string) {
  return `${SERVICE_GALLERY_IMAGE_BASE}/${filename}`;
}

export const SERVICE_BEFORE_AFTER_GALLERY: ServiceBeforeAfterItem[] = [
  {
    id: 1,
    before: {
      src: galleryImage("once1.png"),
      alt: "Mersin mutfak dolabı yenileme öncesi — yıpranmış krem rengi klasik kapaklar, ahşap görünümlü tezgah ve beyaz eşyalar",
    },
    after: {
      src: galleryImage("sonra1.png"),
      alt: "Mersin mutfak dolabı yenileme sonrası — krem shaker kapaklar, koyu çıta detayı ve modern mutfak aydınlatması",
    },
    caption:
      "L tipi mutfakta eski krem kapaklar yerinde boyama ve yenileme ile modern shaker tarzına dönüştürüldü.",
  },
  {
    id: 2,
    before: {
      src: galleryImage("once2.png"),
      alt: "Mersin mutfak dolabı yenileme öncesi — sararmış krem panel kapaklar, granit tezgah ve beyaz ocak",
    },
    after: {
      src: galleryImage("sonra2.png"),
      alt: "Mersin mutfak dolabı yenileme sonrası — bej düz panel kapaklar, ince metal kulp ve ferah mutfak görünümü",
    },
    caption:
      "Geleneksel krem dolaplar bej tonlu düz kapaklara yenilenerek mutfağa daha modern bir hava kazandırıldı.",
  },
  {
    id: 3,
    before: {
      src: galleryImage("once3.png"),
      alt: "Mersin mutfak dolabı yenileme öncesi — bal rengi ahşap kapaklar, kemerli panel detayları ve cam vitrinli üst dolaplar",
    },
    after: {
      src: galleryImage("sonra3.png"),
      alt: "Mersin mutfak dolabı yenileme sonrası — adaçayı yeşili shaker kapaklar ve güncellenmiş mutfak düzeni",
    },
    caption:
      "Eski bal rengi ahşap kapaklar adaçayı yeşili shaker tarzına boyanarak mutfağa çağdaş bir karakter verildi.",
  },
  {
    id: 4,
    before: {
      src: galleryImage("once4.png"),
      alt: "Mersin mutfak dolabı yenileme öncesi — ahşap kenarlı krem dolaplar, fayans zemin ve pencere önü lavabo",
    },
    after: {
      src: galleryImage("sonra4.png"),
      alt: "Mersin mutfak dolabı yenileme sonrası — sade beyaz kapaklar, temiz çizgiler ve aydınlık mutfak atmosferi",
    },
    caption:
      "Ahşap çıtalı eski kapaklar sade beyaz yüzeylere dönüştürülerek mutfak daha ferah ve güncel göründü.",
  },
  {
    id: 5,
    before: {
      src: galleryImage("once5.png"),
      alt: "Mersin mutfak dolabı yenileme öncesi — koyu kahverengi ahşap kapaklar, bej tezgah ve beyaz gazlı ocak",
    },
    after: {
      src: galleryImage("sonra5.png"),
      alt: "Mersin mutfak dolabı yenileme sonrası — parlak krem kapaklar, uyumlu tezgah ve yenilenmiş mutfak hattı",
    },
    caption:
      "Koyu renkli ahşap dolaplar parlak krem tonuna boyanarak mutfağın tamamında aydınlık bir görünüm sağlandı.",
  },
  {
    id: 6,
    before: {
      src: galleryImage("once6.png"),
      alt: "Mersin mutfak dolabı yenileme öncesi — krem klasik kapaklar, koyu granit tezgah ve beyaz buzdolabı",
    },
    after: {
      src: galleryImage("sonra6.png"),
      alt: "Mersin mutfak dolabı yenileme sonrası — yenilenmiş açık ton kapaklar, düzenli tezgah hattı ve modern detaylar",
    },
    caption:
      "Klasik krem kapaklar ve koyu tezgah uyumu yerinde kapak yenileme ile daha dengeli bir mutfak estetiğine kavuştu.",
  },
  {
    id: 7,
    before: {
      src: galleryImage("once7.png"),
      alt: "Mersin mutfak dolabı yenileme öncesi — kemerli krem ahşap kapaklar, desenli fayans ve beyaz fırın",
    },
    after: {
      src: galleryImage("sonra7.png"),
      alt: "Mersin mutfak dolabı yenileme sonrası — düz panel kapaklar, sade fayans hattı ve toparlanmış mutfak görünümü",
    },
    caption:
      "Kemerli eski kapaklar düz panel tasarıma geçirilerek mutfak daha sade ve kullanışlı bir düzene kavuşturuldu.",
  },
  {
    id: 8,
    before: {
      src: galleryImage("once8.png"),
      alt: "Mersin mutfak dolabı yenileme öncesi — bordo kırmızı ahşap kapaklar, bej fayans ve cam vitrinli üst dolaplar",
    },
    after: {
      src: galleryImage("sonra8.png"),
      alt: "Mersin mutfak dolabı yenileme sonrası — krem düz kapaklar, cam detaylı üst dolaplar ve aydınlık mutfak",
    },
    caption:
      "Bordo ahşap kapaklar krem tona boyanarak aynı mutfak düzeninde tamamen farklı ve modern bir görünüm elde edildi.",
  },
  {
    id: 9,
    before: {
      src: galleryImage("once9.png"),
      alt: "Mersin mutfak dolabı yenileme öncesi — kahverengi çıtalı krem kapaklar, pencere önü lavabo ve beyaz eşyalar",
    },
    after: {
      src: galleryImage("sonra9.png"),
      alt: "Mersin mutfak dolabı yenileme sonrası — tek renk krem kapaklar, sade çizgiler ve düzenli mutfak alanı",
    },
    caption:
      "Kahverengi çıtalı eski kapaklar tek renk krem yüzeye dönüştürülerek mutfak daha bütüncül ve şık göründü.",
  },
  {
    id: 10,
    before: {
      src: galleryImage("once10.png"),
      alt: "Mersin mutfak dolabı yenileme öncesi — orta ton ahşap kemerli kapaklar, cam vitrinler ve koridor tipi mutfak",
    },
    after: {
      src: galleryImage("sonra10.png"),
      alt: "Mersin mutfak dolabı yenileme sonrası — açık renk modern kapaklar, ferah koridor mutfağı ve güncel görünüm",
    },
    caption:
      "Kemerli ahşap kapaklar açık renk modern yüzeylere yenilenerek dar mutfak alanı daha geniş ve ferah hissettirdi.",
  },
];

export const SERVICE_WORK_STAGES_IMAGE_BASE =
  "/mutfak-dolabi-yenileme/is-asamalari" as const;

export type ServiceWorkStageIcon =
  | "remove"
  | "sand"
  | "paint"
  | "hinge"
  | "countertop"
  | "assembly";

export type ServiceWorkStage = {
  id: number;
  title: string;
  description: string;
  icon: ServiceWorkStageIcon;
  image: {
    src: string;
    alt: string;
  };
};

function stageImage(filename: string) {
  return `${SERVICE_WORK_STAGES_IMAGE_BASE}/${filename}`;
}

export const SERVICE_WORK_STAGES: ServiceWorkStage[] = [
  {
    id: 1,
    title: "Kapakların Sökülmesi",
    description:
      "Mutfak dolabı kapakları, çekmeceler ve sökülmesi gereken parçalar titizlikle demonte edilir. Mevcut gövde yapısına zarar vermeden çalışarak yenileme işlemini sağlam bir temel üzerinde başlatırız.",
    icon: "remove",
    image: {
      src: stageImage("kapak-sokme.png"),
      alt: "Mersin mutfak dolabı yenileme — kapakların sökülmesi aşamasında demonte edilen dolap kapakları",
    },
  },
  {
    id: 2,
    title: "Zımparalama",
    description:
      "Eski boya ve vernik tabakası profesyonel zımparalama ile temizlenir. Yüzey pürüzsüz hale getirilerek yeni boyanın düzgün ve kalıcı tutunması sağlanır.",
    icon: "sand",
    image: {
      src: stageImage("zimparalama.png"),
      alt: "Mersin mutfak dolabı yenileme — zımparalama aşamasında kapak yüzeyinin hazırlanması",
    },
  },
  {
    id: 3,
    title: "Boyama",
    description:
      "Seçtiğiniz renk veya ahşap tonunda kapaklar katmanlı boyama tekniğiyle yenilenir. Mutfak dolabı kapaklarına modern, dayanıklı ve estetik bir görünüm kazandırılır.",
    icon: "paint",
    image: {
      src: stageImage("boyama.png"),
      alt: "Mersin mutfak dolabı yenileme — boyama aşamasında kapakların yeniden renklendirilmesi",
    },
  },
  {
    id: 4,
    title: "Menteşe Değişimi",
    description:
      "Yıpranmış, gevşek veya kırık menteşeler yeni parçalarla değiştirilir. Kapak hizası düzeltilerek sessiz kapanma ve uzun ömürlü kullanım sağlanır.",
    icon: "hinge",
    image: {
      src: stageImage("mentese-degisimi.png"),
      alt: "Mersin mutfak dolabı yenileme — menteşe değişimi aşamasında dolap kapak menteşelerinin yenilenmesi",
    },
  },
  {
    id: 5,
    title: "Tezgâh Değişimi",
    description:
      "İstenen durumlarda mutfak tezgâhı sökülür ve yenisi takılır. Dolap gövdesiyle uyumlu, işlevsel ve temiz bir tezgah hattı oluşturulur.",
    icon: "countertop",
    image: {
      src: stageImage("tezgah-degisimi.png"),
      alt: "Mersin mutfak dolabı yenileme — tezgâh değişimi aşamasında mutfak tezgahının yenilenmesi",
    },
  },
  {
    id: 6,
    title: "Montaj ve Son Kontroller",
    description:
      "Yenilenen kapaklar ve parçalar yerinde monte edilir. Açılış-kapanış, hiza ve genel görünüm son kez kontrol edilerek teslim edilir.",
    icon: "assembly",
    image: {
      src: stageImage("montaj-son-kontrol.png"),
      alt: "Mersin mutfak dolabı yenileme — montaj ve son kontroller aşamasında kapakların yerinde takılması",
    },
  },
];
