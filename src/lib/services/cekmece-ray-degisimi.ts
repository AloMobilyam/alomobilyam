import { BUSINESS, CANONICAL_SITE_URL } from "@/lib/site";

export const SERVICE_SLUG = "mersin-cekmece-ray-degisimi";

export const SERVICE_PATH = `/hizmetler/${SERVICE_SLUG}` as const;

export const SERVICE_URL = `${CANONICAL_SITE_URL}${SERVICE_PATH}`;

export const SERVICE_TITLE = "Mersin Çekmece Ray Değişimi";

export const SERVICE_METADATA = {
  title:
    "Mersin Çekmece Ray Değişimi | Yumuşak Kapanan Ray Yerinde Servis — Alo Mobilya",
  description:
    "Mersin çekmece ray değişimi. Takılan, kırık veya ses yapan çekmecelerde yumuşak kapanan, teleskopik ve frenli ray değişimi. Mobilya çekmece rayı tamiri için fotoğrafla ön değerlendirme.",
  keywords: [
    "mersin çekmece ray değişimi",
    "çekmece ray tamiri",
    "yumuşak kapanan ray değişimi",
    "teleskopik ray değişimi",
    "frenli çekmece rayı değişimi",
    "mobilya çekmece rayı tamiri",
    "yerinde çekmece ray servisi",
    "çekmece rayı değişimi mersin",
    "soft close çekmece rayı",
    "çekmece ray ayarı mersin",
  ],
  ogImage: {
    url: "/services/cekmece-ray-degisimi/is-asamalari/cekmece-ray-degisimi-yeni-ray-takma-01.png",
    alt: "Mersin çekmece ray değişimi - yeni ray takma işlemi",
  },
} as const;

export const SERVICE_WHATSAPP_MESSAGE =
  "Merhaba, Mersin çekmece ray değişimi hizmeti hakkında bilgi almak istiyorum.";

export const SERVICE_TESTIMONIALS_WHATSAPP_MESSAGE =
  "Merhaba, çekmece ray değişimi için fotoğraf göndermek ve ön bilgi almak istiyorum.";

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
  h1: "Mersin Çekmece Ray Değişimi",
  h1Highlight: "Yumuşak ve Dayanıklı Kayma",
  paragraphs: [
    "Takılan, sarkan veya ses yapan çekmeceler için Mersin genelinde yerinde çekmece ray değişimi yapıyoruz. Yumuşak kapanan, teleskopik ve frenli çekmece raylarıyla mobilya çekmece rayı tamirinde temiz ve dayanıklı çözüm sunuyoruz.",
    "Fotoğrafla ön değerlendirme alabilir; eski ray sökme, yeni ray takma, ayar ve son kontrol adımlarını adresinizde planlayabilirsiniz.",
  ],
  trustItems: [
    "40+ yıllık tecrübe",
    "Ustalık belgeli",
    "Yerinde çekmece ray servisi",
    "Fotoğrafla ön değerlendirme",
  ],
  showcase: {
    title: "Çekmece Ray Değişimi",
    left: {
      src: "/services/cekmece-ray-degisimi/is-asamalari/cekmece-ray-degisimi-eski-ray-sokme-01.png",
      alt: "Mersin çekmece ray değişimi - eski ray sökme aşaması",
      label: "SÖKME",
    },
    right: {
      src: "/services/cekmece-ray-degisimi/is-asamalari/cekmece-ray-degisimi-yeni-ray-takma-01.png",
      alt: "Mersin çekmece ray değişimi - yeni ray takma aşaması",
      label: "TAKMA",
    },
  },
} as const;

export const SERVICE_WORK_STAGES_SECTION = {
  eyebrow: "İş Aşamaları",
  title: "Çekmece Ray Değişimi Uygulamaları",
  description:
    "Öncesi/sonrası galerisi yerine gerçek iş aşamalarını paylaşıyoruz: eski ray sökme, yeni ray takma, montaj, ayar ve son kontrol.",
} as const;

export type ServiceWorkStageIcon =
  | "remove"
  | "rail"
  | "drawer"
  | "tv"
  | "adjust"
  | "check";

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

const SERVICE_WORK_STAGES_IMAGE_BASE =
  "/services/cekmece-ray-degisimi/is-asamalari" as const;

function stageImage(filename: string) {
  return `${SERVICE_WORK_STAGES_IMAGE_BASE}/${filename}`;
}

export const SERVICE_WORK_STAGES: ServiceWorkStage[] = [
  {
    id: 1,
    title: "Eski Ray Sökme",
    description:
      "Takılan, kırılmış veya gevşemiş eski çekmece rayları dikkatlice sökülür. Çekmece ve gövde yüzeyi zarar görmeden hazırlanır.",
    icon: "remove",
    image: {
      src: stageImage("cekmece-ray-degisimi-eski-ray-sokme-01.png"),
      alt: "Mersin çekmece ray değişimi - eski ray sökme",
    },
  },
  {
    id: 2,
    title: "Yeni Ray Takma",
    description:
      "Uygun tipte yumuşak kapanan, teleskopik veya frenli çekmece rayı monte edilir. Dayanıklı ve sessiz kayma hedeflenir.",
    icon: "rail",
    image: {
      src: stageImage("cekmece-ray-degisimi-yeni-ray-takma-01.png"),
      alt: "Mersin çekmece ray değişimi - yeni ray takma",
    },
  },
  {
    id: 3,
    title: "Çekmece Ray Montajı",
    description:
      "Çekmece gövdeye oturtularak ray montajı tamamlanır. Açılış-kapanış rahatlığı ve hiza birlikte kontrol edilir.",
    icon: "drawer",
    image: {
      src: stageImage("cekmece-ray-degisimi-cekmece-ray-montaji-01.png"),
      alt: "Mersin çekmece ray değişimi - çekmece ray montajı",
    },
  },
  {
    id: 4,
    title: "TV Ünitesi Ray Değişimi",
    description:
      "TV ünitesi çekmecelerinde yerinde çekmece ray değişimi uygulanır. Düzgün kayma ve sağlam montaj kontrol edilir.",
    icon: "tv",
    image: {
      src: stageImage("cekmece-ray-degisimi-tv-unitesi-ray-degisimi-01.png"),
      alt: "Mersin çekmece ray değişimi - TV ünitesi ray değişimi",
    },
  },
  {
    id: 5,
    title: "Ray Ayar Kontrolü",
    description:
      "Takılan raylarda hiza, boşluk ve soft-close kapanış kontrol edilir. Çekmece sessiz ve güvenli çalışacak hale getirilir.",
    icon: "adjust",
    image: {
      src: stageImage("cekmece-ray-degisimi-ray-ayar-kontrol-01.png"),
      alt: "Mersin çekmece ray değişimi - ray ayar kontrolü",
    },
  },
  {
    id: 6,
    title: "Son Kontrol",
    description:
      "İşlem sonunda çekmece birkaç kez açılıp kapatılarak son kontrol yapılır. Kayma, kapanış ve montaj birlikte test edilir.",
    icon: "check",
    image: {
      src: stageImage("cekmece-ray-degisimi-son-kontrol-01.png"),
      alt: "Mersin çekmece ray değişimi - son kontrol",
    },
  },
];

export const SERVICE_DESCRIPTION = {
  eyebrow: "Hizmet Açıklaması",
  title: "Çekmece Ray Değişimi Nedir?",
  description:
    "Çekmece ray değişimi; yıpranan, kırılan veya yumuşak kapanmayan çekmece raylarının yenilenerek mobilyanın yeniden düzgün kullanılmasını sağlayan yerinde servistir.",
  paragraphs: [
    "Mersin çekmece ray değişimi hizmetinde takılan çekmeceler, kırık veya eğrilmiş raylar, frenli çekmece rayı sorunları ve soft-close arızaları için adresinizde hızlı servis planlıyoruz.",
    "Çekmece ray tamiri, teleskopik ray değişimi, yumuşak kapanan ray değişimi ve mobilya çekmece rayı tamirinde; sökme, takma, ayar ve son kullanım testi adımlarını birlikte uyguluyoruz.",
    "WhatsApp üzerinden birkaç fotoğraf göndererek ön değerlendirme alabilirsiniz. Ray değişimi mi, yoksa yalnızca ayar mı gerektiği netleştikten sonra yerinde çekmece ray servisi için randevu planlanır.",
  ],
} as const;

export const SERVICE_PROBLEMS_SECTION = {
  eyebrow: "Uygunluk",
  title: "Hangi Sorunlar İçin Yapılır?",
  description:
    "Çekmece ray kaynaklı kullanım sorunlarında çoğu zaman komple mobilya değişimine gerek kalmadan çözüm üretilebilir.",
} as const;

export type ServiceProblemIcon =
  | "stuck"
  | "broken"
  | "noise"
  | "softclose"
  | "sag"
  | "tv"
  | "drawer"
  | "photo";

export type ServiceProblem = {
  id: number;
  title: string;
  description: string;
  icon: ServiceProblemIcon;
};

export const SERVICE_PROBLEMS: ServiceProblem[] = [
  {
    id: 1,
    title: "Takılan Çekmeceler",
    description:
      "Zor açılan, yarım kalan veya sıkışan çekmecelerde çekmece ray değişimi ve ayar ile kullanım rahatlığı geri gelir.",
    icon: "stuck",
  },
  {
    id: 2,
    title: "Kırık veya Eğrilmiş Ray",
    description:
      "Kırılmış, bükülmüş veya vida tutmayan raylar yenilenir; sağlam montajla çekmece güvenli çalışır.",
    icon: "broken",
  },
  {
    id: 3,
    title: "Ses Yapan Çekmece",
    description:
      "Gıcırdayan veya sürten çekmecelerde ray değişimi veya ayar ile sessiz kayma hedeflenir.",
    icon: "noise",
  },
  {
    id: 4,
    title: "Yumuşak Kapanmama",
    description:
      "Soft-close özelliği bozulmuş çekmecelerde yumuşak kapanan ray değişimi ile çarpma sesi azaltılır.",
    icon: "softclose",
  },
  {
    id: 5,
    title: "Sarkan veya Düşen Çekmece",
    description:
      "Raydan çıkan veya öne sarkan çekmecelerde teleskopik ve frenli çekmece rayı değişimi değerlendirilir.",
    icon: "sag",
  },
  {
    id: 6,
    title: "TV Ünitesi Çekmece Arızası",
    description:
      "TV ünitesi çekmecelerinde yerinde çekmece ray değişimi ve montaj kontrolü planlanabilir.",
    icon: "tv",
  },
  {
    id: 7,
    title: "Mutfak / Dolap Çekmece Rayı",
    description:
      "Mutfak, banyo ve gardırop çekmecelerinde mobilya çekmece rayı tamiri ile dayanıklı kullanım sağlanır.",
    icon: "drawer",
  },
  {
    id: 8,
    title: "Fotoğrafla Ön Değerlendirme",
    description:
      "Çekmece ve ray fotoğraflarını göndererek değişim mi, ayar mı gerektiğini hızlı öğrenebilirsiniz.",
    icon: "photo",
  },
];

export const SERVICE_REPLACE_VS_ADJUST_SECTION = {
  eyebrow: "Doğru Müdahale",
  title: "Ray Değişimi mi, Ayar mı Gerekir?",
  description:
    "Her çekmece sorunu aynı çözümü gerektirmez. Önce arızanın kaynağını netleştirip gereksiz parça değişiminden kaçınıyoruz.",
} as const;

export type ServiceReplaceVsAdjustIcon =
  | "replace"
  | "adjust"
  | "softclose"
  | "both";

export type ServiceReplaceVsAdjustOption = {
  id: number;
  title: string;
  description: string;
  icon: ServiceReplaceVsAdjustIcon;
};

export const SERVICE_REPLACE_VS_ADJUST: ServiceReplaceVsAdjustOption[] = [
  {
    id: 1,
    title: "Çekmece Ray Değişimi",
    description:
      "Ray kırılmış, eğrilmiş veya vida tutmuyorsa yeni yumuşak kapanan veya teleskopik ray ile değişim gerekir.",
    icon: "replace",
  },
  {
    id: 2,
    title: "Sadece Ray Ayarı",
    description:
      "Ray sağlam ama hiza bozuksa vida sıkma, boşluk ve kapanış ayarıyla çoğu takılma sorunu çözülebilir.",
    icon: "adjust",
  },
  {
    id: 3,
    title: "Soft-Close / Frenli Ray",
    description:
      "Yumuşak kapanma veya fren mekanizması bozulmuşsa frenli çekmece rayı değişimi önerilir.",
    icon: "softclose",
  },
  {
    id: 4,
    title: "Kombine Müdahale",
    description:
      "Bazı durumlarda bir tarafta değişim, diğer tarafta ayar gerekir. Fotoğraf veya yerinde kontrol sonrası net plan çıkarılır.",
    icon: "both",
  },
];

export const SERVICE_PRICING_FACTORS = {
  eyebrow: "Fiyatlandırma",
  title: "Fiyatı Etkileyen Faktörler",
  description:
    "Çekmece ray değişiminde net fiyat; ray adedi, ray tipi ve yerinde iş kapsamıyla birlikte belirlenir.",
  factors: [
    {
      title: "Değişecek ray adedi",
      description:
        "Tek çekmece mi, birden fazla çekmece mi olduğu toplam işçiliği doğrudan etkiler.",
    },
    {
      title: "Ray tipi",
      description:
        "Standart çekmece rayı ile soft-close, teleskopik veya frenli çekmece rayı farklı parça ve işçilik ister.",
    },
    {
      title: "Çekmece ve yuva durumu",
      description:
        "Eğrilmiş gövde, vida tutmayan yuvalar veya ek sağlamlaştırma ihtiyacı kapsamı değiştirir.",
    },
    {
      title: "Mobilyanın tipi",
      description:
        "Mutfak dolabı, gardırop, şifonyer veya TV ünitesinde müdahale alanı aynı olmayabilir.",
    },
    {
      title: "Ayar ve kontrol süresi",
      description:
        "Ray ayarı, hiza kontrolü ve soft-close test süresi işe göre değişir.",
    },
    {
      title: "Konum ve ulaşım",
      description:
        "Yenişehir, Mezitli, Toroslar, Akdeniz ve diğer Mersin noktalarında randevu planlaması mesafeye göre değişebilir.",
    },
  ],
  discoveryFeeNote:
    "Fotoğraf veya video üzerinden ön değerlendirme ücretsizdir. Yerinde keşif ve ölçü alma taleplerinde Mersin şehir içi keşif ücreti 500 TL'dir. İş onaylandığında bu tutar toplam iş bedelinden düşülür.",
  ctaText:
    "Çekmece ve ray fotoğraflarınızı WhatsApp üzerinden gönderin; uygunluk ve ön bilgi hakkında hızlı geri dönüş alın.",
} as const;

export const SERVICE_TRUST = {
  eyebrow: "Güven",
  title: "Erdoğan Usta ile Yerinde Çekmece Ray Değişimi",
  description:
    "Gereksiz işlem önermeden, çekmece ve ray durumuna göre net planlanan yerinde servis modeliyle ilerliyoruz.",
  cards: [
    { title: "40+ Yıl Tecrübe" },
    { title: "Ustalık Belgeli Hizmet" },
    { title: "Yerinde Hızlı Servis" },
    { title: "Sağlam İşçilik" },
  ],
  certificate: {
    src: "/certificates/ustalik-belgesi.png",
    alt: "Erdoğan Kuşçu ustalık belgesi - Alo Mobilya",
    width: 1448,
    height: 1086,
  },
  text:
    "Güven bölümünde projede kullanılan güvenli ustalık belgesi görselini paylaşıyoruz. Yerinde çalışırken yalnızca gereken çekmece ray değişimi, vida sıkma ve ayar adımlarını açıkça anlatırız.",
} as const;

export type ServiceTestimonial = {
  id: number;
  name: string;
  text: string;
};

export const SERVICE_TESTIMONIALS_SECTION = {
  eyebrow: "Müşteri Yorumları",
  title: "Müşterilerimiz Ne Diyor?",
  description:
    "Çekmece ray değişimi ve mobilya onarım hizmeti alan müşterilerimizden seçilmiş yorumlar.",
} as const;

export const SERVICE_TESTIMONIALS: ServiceTestimonial[] = [
  {
    id: 1,
    name: "Ferhat Kaplan",
    text: "İşlerini çok temiz ve kaliteli yapıyorlar.",
  },
  {
    id: 3,
    name: "Senem Ceylan Genç",
    text: "Mobilya tamiratı için çok teşekkür ederiz. Çok ince işçilik, çok memnun kaldık.",
  },
  {
    id: 4,
    name: "Sıla Sayılı",
    text: "Dolabım yapılmıştı, işçilik çok iyi. Tavsiye ederim.",
  },
  {
    id: 6,
    name: "Sinem Sayılı",
    text: "Evimin tüm mobilyalarını yaptılar. Hepsinden aşırı memnunum. İstediğim şekilde çok sağlam ve işçilikleri çok güzel. Kesinlikle tavsiye ederim.",
  },
];

export type ServiceFaqItem = {
  question: string;
  answer: string;
};

export const SERVICE_FAQS: ServiceFaqItem[] = [
  {
    question: "Çekmece ray değişimi yerinde mi yapılıyor?",
    answer:
      "Evet. Uygun olan projelerde eski ray sökme, yeni ray takma ve ayarı adresinizde, yani yerinde çekmece ray servisi olarak planlayıp uyguluyoruz.",
  },
  {
    question: "Yumuşak kapanan ray değişimi yapılır mı?",
    answer:
      "Evet. Soft-close (yumuşak kapanan) ve frenli çekmece rayı değişimi talep edilebilir. Mobilyanın tipine uygun ray seçilir.",
  },
  {
    question: "Teleskopik ray değişimi mümkün mü?",
    answer:
      "Evet. Tam açılım sunan teleskopik ray değişimi; mutfak, dolap ve TV ünitesi çekmecelerinde sık tercih edilen çözümdür.",
  },
  {
    question: "Her zaman ray değişimi mi gerekir, ayar yeterli olabilir mi?",
    answer:
      "Her zaman değil. Ray sağlam ama hiza bozuksa ayar yeterli olabilir. Kırık, eğrilmiş veya soft-close bozulmuş raylarda değişim önerilir.",
  },
  {
    question: "Fotoğrafla ön değerlendirme mümkün mü?",
    answer:
      "Evet. Çekmece ve ray fotoğraflarını WhatsApp üzerinden göndererek işlem kapsamı hakkında hızlı ön bilgi alabilirsiniz.",
  },
  {
    question: "Mersin'in hangi bölgelerine geliyorsunuz?",
    answer:
      "Mersin genelinde randevu ile hizmet veriyoruz. Yenişehir, Mezitli, Toroslar, Akdeniz ve çevre bölgelerde yerinde servis sunuyoruz.",
  },
  {
    question: "Keşif ücretli mi?",
    answer:
      "Fotoğraf veya video ile ön değerlendirme ücretsizdir. Yerinde keşif ve ölçü alma taleplerinde Mersin şehir içi 500 TL keşif ücreti uygulanır. İş onaylandığında bu tutar toplam iş bedelinden düşülür.",
  },
  {
    question: "Ne kadar sürede tamamlanır?",
    answer:
      "Süre; değişecek ray adedine, ray tipine ve yuva durumuna göre değişir. Fotoğraflar veya keşif sonrasında daha net bir zaman aralığı paylaşıyoruz.",
  },
];

export const SERVICE_WHATSAPP_CTA = {
  eyebrow: "WhatsApp Desteği",
  title: "Çekmece Ray Değişimi İçin Ön Bilgi Alın",
  description:
    "Çekmece veya ray fotoğrafı göndererek takılma, soft-close arızası, teleskopik ray veya TV ünitesi sorunlarınız için hızlı ön değerlendirme alabilirsiniz.",
  note: "Mevcut WhatsApp dönüşüm takibi korunarak çalışır.",
} as const;
