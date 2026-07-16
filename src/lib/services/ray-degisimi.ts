import { BUSINESS, CANONICAL_SITE_URL } from "@/lib/site";

export const SERVICE_SLUG = "mersin-ray-degisimi";

export const SERVICE_PATH = `/hizmetler/${SERVICE_SLUG}` as const;

export const SERVICE_URL = `${CANONICAL_SITE_URL}${SERVICE_PATH}`;

export const SERVICE_TITLE = "Mersin Ray Değişimi";

export const SERVICE_METADATA = {
  title:
    "Mersin Ray Değişimi | Çekmece ve Dolap Rayı Yerinde Servis — Alo Mobilya",
  description:
    "Mersin genelinde yerinde ray değişimi. Çekmece rayı, dolap rayı, sürgülü dolap ve TV ünitesi raylarında hızlı ve dayanıklı çözüm. Mobilya ray tamiri için fotoğrafla ön değerlendirme.",
  keywords: [
    "mersin ray değişimi",
    "mersin çekmece rayı değişimi",
    "mersin dolap rayı değişimi",
    "mersin mobilya ray tamiri",
    "mersin yerinde ray değişimi",
    "çekmece rayı değişimi mersin",
    "dolap rayı değişimi",
    "sürgülü dolap ray tamiri",
    "yerinde ray değişimi",
    "mobilya ray değişimi mersin",
  ],
  ogImage: {
    url: "/services/ray-degisimi/is-asamalari/ray-degisimi-yeni-ray-takma-01.png",
    alt: "Mersin ray değişimi - yeni ray takma işlemi",
  },
} as const;

export const SERVICE_WHATSAPP_MESSAGE =
  "Merhaba, Mersin ray değişimi hizmeti hakkında bilgi almak istiyorum.";

export const SERVICE_TESTIMONIALS_WHATSAPP_MESSAGE =
  "Merhaba, ray değişimi için fotoğraf göndermek ve ön bilgi almak istiyorum.";

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
  h1: "Mersin Ray Değişimi",
  h1Highlight: "Yerinde Hızlı Servis",
  paragraphs: [
    "Takılan çekmeceler, kırık dolap rayları ve sürgülü sistem sorunları için Mersin genelinde yerinde ray değişimi yapıyoruz. Çekmece, dolap, TV ünitesi ve sürgülü dolap raylarında dayanıklı parçalarla temiz çözüm sunuyoruz.",
    "Fotoğrafla ön değerlendirme alabilir; eski ray sökme, yeni ray takma, ayar ve son kontrol adımlarını birlikte planlayabilirsiniz.",
  ],
  trustItems: [
    "40+ yıllık tecrübe",
    "Ustalık belgeli",
    "Yerinde hızlı servis",
    "Fotoğrafla ön değerlendirme",
  ],
  showcase: {
    title: "Ray Değişimi",
    left: {
      src: "/services/ray-degisimi/is-asamalari/ray-degisimi-eski-ray-sokme-01.png",
      alt: "Mersin ray değişimi - eski ray sökme aşaması",
      label: "SÖKME",
    },
    right: {
      src: "/services/ray-degisimi/is-asamalari/ray-degisimi-yeni-ray-takma-01.png",
      alt: "Mersin ray değişimi - yeni ray takma aşaması",
      label: "TAKMA",
    },
  },
} as const;

export const SERVICE_WORK_STAGES_SECTION = {
  eyebrow: "İş Aşamaları",
  title: "Ray Değişimi İşlem Türleri",
  description:
    "Klasik öncesi/sonrası dönüşüm yerine gerçek iş aşamalarını paylaşıyoruz: eski ray sökme, yeni ray takma, çekmece ve sürgülü dolap uygulamaları.",
} as const;

export type ServiceWorkStageIcon =
  | "remove"
  | "rail"
  | "drawer"
  | "tv"
  | "sliding"
  | "check"
  | "adjust";

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
  "/services/ray-degisimi/is-asamalari" as const;

function stageImage(filename: string) {
  return `${SERVICE_WORK_STAGES_IMAGE_BASE}/${filename}`;
}

export const SERVICE_WORK_STAGES: ServiceWorkStage[] = [
  {
    id: 1,
    title: "Eski Ray Sökme",
    description:
      "Takılan, kırılmış veya gevşemiş eski raylar dikkatlice sökülür. Çekmece ve gövde yüzeyi zarar görmeden hazırlanır.",
    icon: "remove",
    image: {
      src: stageImage("ray-degisimi-eski-ray-sokme-01.png"),
      alt: "Mersin ray değişimi - eski ray sökme 01",
    },
  },
  {
    id: 2,
    title: "Ray Yuvası Kontrolü",
    description:
      "Ray yuvaları, vida delikleri ve hiza kontrol edilir. Gerekirse vida sıkma ve yuva düzeltmesiyle sağlam zemin hazırlanır.",
    icon: "check",
    image: {
      src: stageImage("ray-degisimi-eski-ray-sokme-02.png"),
      alt: "Mersin ray değişimi - ray yuvası kontrolü",
    },
  },
  {
    id: 3,
    title: "Yeni Ray Takma",
    description:
      "Uygun tipte yeni raylar monte edilir. Çekmece ve dolap sistemlerinde kayma rahatlığı hedeflenir.",
    icon: "rail",
    image: {
      src: stageImage("ray-degisimi-yeni-ray-takma-01.png"),
      alt: "Mersin ray değişimi - yeni ray takma 01",
    },
  },
  {
    id: 4,
    title: "Ray Ayarı ve Montaj",
    description:
      "Takılan raylarda hiza, boşluk ve kapanış kontrol edilir. Çekmece düzgün, sessiz ve güvenli çalışacak hale getirilir.",
    icon: "adjust",
    image: {
      src: stageImage("ray-degisimi-yeni-ray-takma-02.png"),
      alt: "Mersin ray değişimi - ray ayarı ve montaj",
    },
  },
  {
    id: 5,
    title: "Çekmeceli Dolap Ray Takma",
    description:
      "Çekmeceli dolaplarda ray takma ve ayar yapılır. Yoğun kullanımda dayanıklı ve yumuşak kayma sağlanır.",
    icon: "drawer",
    image: {
      src: stageImage("ray-degisimi-cekmeceli-dolap-ray-takma-01.png"),
      alt: "Mersin ray değişimi - çekmeceli dolap ray takma",
    },
  },
  {
    id: 6,
    title: "TV Ünitesi Ray Takma",
    description:
      "TV ünitesi çekmece ve kapak raylarında yerinde değişim uygulanır. Düzgün kayma ve sağlam montaj kontrol edilir.",
    icon: "tv",
    image: {
      src: stageImage("ray-degisimi-tv-unitesi-ray-takma-01.png"),
      alt: "Mersin ray değişimi - TV ünitesi ray takma",
    },
  },
  {
    id: 7,
    title: "Sürgülü Dolap Alt Ray Kontrolü",
    description:
      "Sürgülü dolap alt raylarında kontrol, temizleme ve gerekirse değişim yapılır. Kapakların rahat kayması hedeflenir.",
    icon: "sliding",
    image: {
      src: stageImage("ray-degisimi-surgu-dolap-alt-ray-kontrol-01.png"),
      alt: "Mersin ray değişimi - sürgülü dolap alt ray kontrolü",
    },
  },
];

export const SERVICE_DESCRIPTION = {
  eyebrow: "Hizmet Açıklaması",
  title: "Ray Değişimi Nedir?",
  description:
    "Ray değişimi; çekmece, dolap ve sürgülü sistemlerde yıpranan veya kırılan rayların yenilenerek mobilyanın yeniden düzgün kullanılmasını sağlayan yerinde servistir.",
  paragraphs: [
    "Mersin genelinde yerinde ray değişimi sunuyoruz. Takılan çekmeceler, kırık veya eğrilmiş raylar, sürgülü dolap sorunları ve TV ünitesi ray arızaları için adresinizde hızlı servis planlıyoruz.",
    "Çekmece rayı değişimi, dolap rayı değişimi, sürgülü dolap alt/üst ray kontrolü ve mobilya ray tamirinde; sökme, takma, ayar ve son kullanım testi adımlarını birlikte uyguluyoruz.",
    "WhatsApp üzerinden birkaç fotoğraf göndererek ön değerlendirme alabilirsiniz. Uygunluk ve işlem kapsamı netleştikten sonra yerinde hızlı servis için randevu planlanır.",
  ],
} as const;

export const SERVICE_PROBLEMS_SECTION = {
  eyebrow: "Uygunluk",
  title: "Hangi Sorunlarda Ray Değişimi Gerekir?",
  description:
    "Ray kaynaklı kullanım sorunlarında çoğu zaman komple mobilya değişimine gerek kalmadan çözüm üretilebilir.",
} as const;

export type ServiceProblemIcon =
  | "stuck"
  | "broken"
  | "drawer"
  | "cabinet"
  | "sliding"
  | "tv"
  | "noise"
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
      "Zor açılan, yarım kalan veya sıkışan çekmecelerde ray değişimi ve ayar ile kullanım rahatlığı geri gelir.",
    icon: "stuck",
  },
  {
    id: 2,
    title: "Kırık veya Eğrilmiş Raylar",
    description:
      "Kırılmış, bükülmüş veya vida tutmayan raylar yenilenir; sağlam montajla çekmece güvenli çalışır.",
    icon: "broken",
  },
  {
    id: 3,
    title: "Çekmece Rayı Değişimi",
    description:
      "Mutfak, banyo ve gardırop çekmecelerinde dayanıklı raylarla yerinde değişim yapılır.",
    icon: "drawer",
  },
  {
    id: 4,
    title: "Dolap Rayı Değişimi",
    description:
      "Dolap gövdesindeki ray sistemlerinde sökme, takma ve hiza kontrolü uygulanır.",
    icon: "cabinet",
  },
  {
    id: 5,
    title: "Sürgülü Dolap Ray Sorunu",
    description:
      "Takılan veya raydan çıkan sürgülü dolap kapaklarında alt/üst ray kontrolü ve değişim yapılır.",
    icon: "sliding",
  },
  {
    id: 6,
    title: "TV Ünitesi Ray Arızası",
    description:
      "TV ünitesi çekmece ve kapak raylarında yerinde ray değişimi planlanabilir.",
    icon: "tv",
  },
  {
    id: 7,
    title: "Ses Yapan veya Sarkan Çekmece",
    description:
      "Gıcırdayan, sarkan veya düzgün kapanmayan çekmecelerde ray ayarı ve değişim ile sorun giderilir.",
    icon: "noise",
  },
  {
    id: 8,
    title: "Fotoğrafla Ön Değerlendirme",
    description:
      "Çekmece ve ray fotoğraflarını göndererek işlem kapsamı hakkında hızlı ön bilgi alabilirsiniz.",
    icon: "photo",
  },
];

export const SERVICE_RAIL_TYPES_SECTION = {
  eyebrow: "Ray Türleri",
  title: "Kullanılan Ray Türleri",
  description:
    "Mobilyanın tipine ve kullanım yoğunluğuna göre uygun ray seçilir. Amaç uzun ömürlü, sessiz ve rahat kayma sağlamaktır.",
} as const;

export type ServiceRailTypeIcon =
  | "telescopic"
  | "roller"
  | "softclose"
  | "sliding"
  | "full"
  | "under";

export type ServiceRailType = {
  id: number;
  title: string;
  description: string;
  icon: ServiceRailTypeIcon;
};

export const SERVICE_RAIL_TYPES: ServiceRailType[] = [
  {
    id: 1,
    title: "Teleskopik Çekmece Rayı",
    description:
      "Tam açılım sunan teleskopik raylar; mutfak ve dolap çekmecelerinde dayanıklı kullanım için tercih edilir.",
    icon: "telescopic",
  },
  {
    id: 2,
    title: "Makaralı / Rulmanlı Ray",
    description:
      "Hafif ve orta yükteki çekmecelerde yumuşak kayma sağlayan makaralı veya rulmanlı sistemler kullanılır.",
    icon: "roller",
  },
  {
    id: 3,
    title: "Yumuşak Kapanır Ray",
    description:
      "Çarpma sesini azaltan soft-close (yumuşak kapanır) raylar, konfor ve uzun ömür için uygundur.",
    icon: "softclose",
  },
  {
    id: 4,
    title: "Sürgülü Dolap Rayı",
    description:
      "Sürgülü dolap alt ve üst raylarında kayma rahatlığı ve kapak hizası için uygun ray seçilir.",
    icon: "sliding",
  },
  {
    id: 5,
    title: "Tam Açılım Ray Sistemi",
    description:
      "Çekmecenin sonuna kadar açılmasını sağlayan tam açılım sistemlerde içerik erişimi kolaylaşır.",
    icon: "full",
  },
  {
    id: 6,
    title: "Alt / Yan Montaj Ray",
    description:
      "Mobilyanın yapısına göre alt montaj veya yan montaj raylarla sağlam ve dengeli çalışma hedeflenir.",
    icon: "under",
  },
];

export const SERVICE_PRICING_FACTORS = {
  eyebrow: "Fiyatlandırma",
  title: "Fiyatı Etkileyen Faktörler",
  description:
    "Ray değişiminde net fiyat; ray adedi, ray tipi ve yerinde iş kapsamıyla birlikte belirlenir.",
  factors: [
    {
      title: "Değişecek ray adedi",
      description:
        "Tek çekmece mi, birden fazla çekmece veya sürgü kapak mı olduğu toplam işçiliği doğrudan etkiler.",
    },
    {
      title: "Ray tipi",
      description:
        "Standart çekmece rayı ile soft-close, teleskopik veya sürgülü dolap sistemleri farklı parça ve işçilik ister.",
    },
    {
      title: "Çekmece ve yuva durumu",
      description:
        "Eğrilmiş gövde, vida tutmayan yuvalar veya ek sağlamlaştırma ihtiyacı kapsamı değiştirir.",
    },
    {
      title: "Mobilyanın tipi",
      description:
        "Mutfak dolabı, gardırop, TV ünitesi veya sürgülü dolapta müdahale alanı aynı olmayabilir.",
    },
    {
      title: "Ayar ve kontrol süresi",
      description:
        "Ray ayarı, hiza kontrolü ve son kullanım testi için gereken süre işe göre değişir.",
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
  title: "Erdoğan Usta ile Yerinde Ray Değişimi",
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
    "Güven bölümünde projede kullanılan güvenli ustalık belgesi görselini paylaşıyoruz. Yerinde çalışırken yalnızca gereken ray değişimi, vida sıkma ve ayar adımlarını açıkça anlatırız.",
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
    "Ray değişimi ve mobilya onarım hizmeti alan müşterilerimizden seçilmiş yorumlar.",
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
    question: "Ray değişimi yerinde mi yapılıyor?",
    answer:
      "Evet. Uygun olan projelerde eski ray sökme, yeni ray takma ve ayarı adresinizde, yani yerinde planlayıp uyguluyoruz.",
  },
  {
    question: "Hangi mobilyalarda ray değişimi yapılır?",
    answer:
      "Çekmeceli dolap, mutfak dolabı, gardırop, TV ünitesi, sürgülü dolap ve benzer raylı mobilyalarda ray değişimi planlanabilir.",
  },
  {
    question: "Takılan çekmece ray değişimiyle düzelir mi?",
    answer:
      "Çoğu takılma sorunu yıpranmış, eğrilmiş veya kırılmış raylardan kaynaklanır. Ray değişimi ve ayar ile çoğu durumda düzeltilir.",
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
  title: "Ray Değişimi İçin Ön Bilgi Alın",
  description:
    "Çekmece veya ray fotoğrafı göndererek takılma, kırık ray, sürgülü dolap veya TV ünitesi sorunlarınız için hızlı ön değerlendirme alabilirsiniz.",
  note: "Mevcut WhatsApp dönüşüm takibi korunarak çalışır.",
} as const;
