import { BUSINESS, CANONICAL_SITE_URL } from "@/lib/site";

export const SERVICE_SLUG = "mersin-mentese-degisimi";

export const SERVICE_PATH = `/hizmetler/${SERVICE_SLUG}` as const;

export const SERVICE_URL = `${CANONICAL_SITE_URL}${SERVICE_PATH}`;

export const SERVICE_TITLE = "Mersin Menteşe Değişimi";

export const SERVICE_METADATA = {
  title:
    "Mersin Menteşe Değişimi | Sarkmış Kapak ve Yerinde Servis — Alo Mobilya",
  description:
    "Mersin genelinde yerinde menteşe değişimi. Sarkmış kapaklar, gevşek veya kırılmış menteşeler, mutfak-banyo dolabı ve kalkar kapak menteşelerinde hızlı servis.",
  keywords: [
    "mersin menteşe değişimi",
    "menteşe değişimi mersin",
    "dolap menteşe değişimi",
    "sarkmış kapak tamiri",
    "mutfak dolabı menteşesi",
    "banyo dolabı menteşesi",
    "gardırop menteşe değişimi",
    "kalkar kapak menteşesi",
    "yerinde menteşe değişimi",
    "kapak ayarı mersin",
  ],
  ogImage: {
    url: "/services/mentese-degisimi/is-asamalari/mentese-degisimi-yeni-mentese-takma-01.png",
    alt: "Mersin menteşe değişimi - yeni menteşe takma işlemi",
  },
} as const;

export const SERVICE_WHATSAPP_MESSAGE =
  "Merhaba, Mersin menteşe değişimi hizmeti hakkında bilgi almak istiyorum.";

export const SERVICE_TESTIMONIALS_WHATSAPP_MESSAGE =
  "Merhaba, menteşe değişimi için fotoğraf göndermek ve ön bilgi almak istiyorum.";

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
  h1: "Mersin Menteşe Değişimi",
  h1Highlight: "Yerinde Hızlı Servis",
  paragraphs: [
    "Sarkmış kapaklar, gevşek veya kırılmış menteşeler için Mersin genelinde yerinde menteşe değişimi yapıyoruz. Mutfak dolabı, banyo dolabı, gardırop ve vestiyer kapaklarında hızlı ve temiz çözüm sunuyoruz.",
    "Fotoğrafla ön değerlendirme alabilir, kapak ayarı, vida sıkma ve menteşe yuvası kontrolüyle birlikte kalkar kapak / üstten açılır kapak menteşelerinde de destek isteyebilirsiniz.",
  ],
  trustItems: [
    "40+ yıllık tecrübe",
    "Ustalık belgeli",
    "Yerinde hızlı servis",
    "Fotoğrafla ön değerlendirme",
  ],
  showcase: {
    title: "Menteşe Değişimi",
    left: {
      src: "/services/mentese-degisimi/is-asamalari/mentese-degisimi-eski-mentese-sokme-01.png",
      alt: "Mersin menteşe değişimi - eski menteşe sökme aşaması",
      label: "SÖKME",
    },
    right: {
      src: "/services/mentese-degisimi/is-asamalari/mentese-degisimi-yeni-mentese-takma-01.png",
      alt: "Mersin menteşe değişimi - yeni menteşe takma aşaması",
      label: "TAKMA",
    },
  },
} as const;

export const SERVICE_WORK_STAGES_SECTION = {
  eyebrow: "İş Aşamaları",
  title: "Menteşe Değişimi İşlem Türleri",
  description:
    "Klasik öncesi/sonrası dönüşüm yerine gerçek iş aşamalarını paylaşıyoruz: eski menteşe sökme, yeni menteşe takma ve kalkar kapak uygulamaları.",
} as const;

export type ServiceWorkStageIcon =
  | "remove"
  | "hinge"
  | "lift"
  | "adjust"
  | "check"
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

const SERVICE_WORK_STAGES_IMAGE_BASE =
  "/services/mentese-degisimi/is-asamalari" as const;

function stageImage(filename: string) {
  return `${SERVICE_WORK_STAGES_IMAGE_BASE}/${filename}`;
}

export const SERVICE_WORK_STAGES: ServiceWorkStage[] = [
  {
    id: 1,
    title: "Eski Menteşe Sökme",
    description:
      "Gevşemiş, kırılmış veya kapağı sarkıtan eski menteşeler dikkatlice sökülür. Kapak ve gövde yüzeyi zarar görmeden hazırlanır.",
    icon: "remove",
    image: {
      src: stageImage("mentese-degisimi-eski-mentese-sokme-01.png"),
      alt: "Mersin menteşe değişimi - eski menteşe sökme 01",
    },
  },
  {
    id: 2,
    title: "Menteşe Yuvası Kontrolü",
    description:
      "Menteşe yuvaları, vida delikleri ve kapak hizası kontrol edilir. Gerekirse vida sıkma ve yuva düzeltmesiyle sağlam zemin hazırlanır.",
    icon: "check",
    image: {
      src: stageImage("mentese-degisimi-eski-mentese-sokme-02.png"),
      alt: "Mersin menteşe değişimi - menteşe yuvası kontrolü",
    },
  },
  {
    id: 3,
    title: "Kapak Hazırlığı",
    description:
      "Kapak sökülürken veya yerinde çalışılırken yüzey ve menteşe noktaları kontrol edilir. Sonraki montajın düzgün oturması için hazırlık yapılır.",
    icon: "adjust",
    image: {
      src: stageImage("mentese-degisimi-eski-mentese-sokme-03.png"),
      alt: "Mersin menteşe değişimi - kapak hazırlığı",
    },
  },
  {
    id: 4,
    title: "Yeni Menteşe Takma",
    description:
      "Uygun tipte yeni menteşeler monte edilir. Mutfak, banyo ve gardırop kapaklarında açılıp kapanma rahatlığı hedeflenir.",
    icon: "hinge",
    image: {
      src: stageImage("mentese-degisimi-yeni-mentese-takma-01.png"),
      alt: "Mersin menteşe değişimi - yeni menteşe takma 01",
    },
  },
  {
    id: 5,
    title: "Kapak Ayarı",
    description:
      "Takılan menteşelerde kapak ayarı yapılır. Hiza, boşluk ve kapanış kontrol edilerek kapak düzgün ve sessiz çalışacak hale getirilir.",
    icon: "assembly",
    image: {
      src: stageImage("mentese-degisimi-yeni-mentese-takma-02.png"),
      alt: "Mersin menteşe değişimi - kapak ayarı",
    },
  },
  {
    id: 6,
    title: "Kalkar Kapak Menteşesi",
    description:
      "Üstten açılır / kalkar kapak sistemlerinde menteşe takma ve ayar yapılır. Ağırlık dengesi ve güvenli açılış kontrol edilir.",
    icon: "lift",
    image: {
      src: stageImage("mentese-degisimi-kalkar-kapak-mentese-takma-01.png"),
      alt: "Mersin menteşe değişimi - kalkar kapak menteşe takma",
    },
  },
];

export const SERVICE_DESCRIPTION = {
  eyebrow: "Hizmet Açıklaması",
  title: "Yerinde Menteşe Değişimi Nasıl İlerler?",
  description:
    "Amacımız kapakları yeniden düzgün, güvenli ve rahat kullanılabilecek hale getirmek. İşlem kapsamı mobilyanın tipine ve menteşe durumuna göre netleştirilir.",
  paragraphs: [
    "Mersin genelinde yerinde menteşe değişimi sunuyoruz. Sarkmış kapaklar, gevşek veya kırılmış menteşeler, vida tutmayan yuvalar ve ayarsız kapaklar için adresinizde hızlı servis planlıyoruz.",
    "Mutfak dolabı menteşesi, banyo dolabı menteşesi, gardırop / vestiyer kapak menteşesi ve kalkar kapak / üstten açılır kapak menteşelerinde; sökme, takma, vida sıkma, kapak ayarı ve son kontrol adımlarını birlikte uyguluyoruz.",
    "WhatsApp üzerinden birkaç fotoğraf göndererek ön değerlendirme alabilirsiniz. Uygunluk ve işlem kapsamı netleştikten sonra yerinde hızlı servis için randevu planlanır.",
  ],
} as const;

export const SERVICE_PROBLEMS_SECTION = {
  eyebrow: "Uygunluk",
  title: "Hangi Sorunlar İçin Uygundur?",
  description:
    "Menteşe kaynaklı kullanım sorunlarında çoğu zaman komple mobilya değişimine gerek kalmadan çözüm üretilebilir.",
} as const;

export type ServiceProblemIcon =
  | "sag"
  | "broken"
  | "kitchen"
  | "bath"
  | "wardrobe"
  | "lift"
  | "adjust"
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
    title: "Sarkmış Kapaklar",
    description:
      "Aşağı doğru düşen, hizasız kapanan veya sürten dolap kapaklarında menteşe değişimi ve ayar ile düzeltme yapılır.",
    icon: "sag",
  },
  {
    id: 2,
    title: "Gevşek veya Kırılmış Menteşeler",
    description:
      "Ses yapan, tutmayan veya kırılmış menteşeler yenilenir; vida ve yuva kontrolüyle sağlam montaj sağlanır.",
    icon: "broken",
  },
  {
    id: 3,
    title: "Mutfak Dolabı Menteşesi",
    description:
      "Yoğun kullanılan mutfak dolabı kapaklarında menteşe değişimi, kapak ayarı ve vida sıkma işlemleri uygulanır.",
    icon: "kitchen",
  },
  {
    id: 4,
    title: "Banyo Dolabı Menteşesi",
    description:
      "Nem ve kullanım nedeniyle yıpranan banyo dolabı menteşelerinde yerinde değişim ve ayar yapılır.",
    icon: "bath",
  },
  {
    id: 5,
    title: "Gardırop / Vestiyer Kapak Menteşesi",
    description:
      "Gardırop ve vestiyer kapaklarında sarkma, zor açılma veya düzgün kapanmama sorunları giderilir.",
    icon: "wardrobe",
  },
  {
    id: 6,
    title: "Kalkar Kapak Menteşesi",
    description:
      "Üstten açılır / kalkar kapak sistemlerinde menteşe takma, denge ve güvenli açılış kontrolü yapılır.",
    icon: "lift",
  },
  {
    id: 7,
    title: "Kapak Ayarı ve Vida Sıkma",
    description:
      "Menteşe yuvası kontrolü, vida sıkma ve kapak ayarı ile kullanım rahatlığı artırılır.",
    icon: "adjust",
  },
  {
    id: 8,
    title: "Fotoğrafla Ön Değerlendirme",
    description:
      "Kapak ve menteşe fotoğraflarını göndererek işlem kapsamı hakkında hızlı ön bilgi alabilirsiniz.",
    icon: "photo",
  },
];

export const SERVICE_PRICING_FACTORS = {
  eyebrow: "Fiyatlandırma",
  title: "Fiyatı Etkileyen Faktörler",
  description:
    "Menteşe değişiminde net fiyat; menteşe adedi, kapak tipi ve yerinde iş kapsamıyla birlikte belirlenir.",
  factors: [
    {
      title: "Değişecek menteşe adedi",
      description:
        "Tek kapak mı, birden fazla dolap kapağı mı olduğu toplam işçiliği doğrudan etkiler.",
    },
    {
      title: "Menteşe tipi",
      description:
        "Standart dolap menteşesi ile kalkar / üstten açılır kapak sistemleri farklı parça ve işçilik ister.",
    },
    {
      title: "Kapak ve yuva durumu",
      description:
        "Vida tutmayan yuvalar, kırık menteşe noktaları veya ek sağlamlaştırma ihtiyacı kapsamı değiştirir.",
    },
    {
      title: "Mobilyanın tipi",
      description:
        "Mutfak dolabı, banyo dolabı, gardırop veya vestiyer kapaklarında müdahale alanı aynı olmayabilir.",
    },
    {
      title: "Ayar ve kontrol süresi",
      description:
        "Kapak ayarı, hiza kontrolü ve son kullanım testi için gereken süre işe göre değişir.",
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
    "Kapak ve menteşe fotoğraflarınızı WhatsApp üzerinden gönderin; uygunluk ve ön bilgi hakkında hızlı geri dönüş alın.",
} as const;

export const SERVICE_TRUST = {
  eyebrow: "Güven",
  title: "Erdoğan Usta ile Yerinde Menteşe Değişimi",
  description:
    "Gereksiz işlem önermeden, kapak ve menteşe durumuna göre net planlanan yerinde servis modeliyle ilerliyoruz.",
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
    "Güven bölümünde projede kullanılan güvenli ustalık belgesi görselini paylaşıyoruz. Yerinde çalışırken yalnızca gereken menteşe değişimi, vida sıkma ve kapak ayarı adımlarını açıkça anlatırız.",
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
    "Menteşe değişimi ve mobilya onarım hizmeti alan müşterilerimizden seçilmiş yorumlar.",
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
    question: "Menteşe değişimi yerinde mi yapılıyor?",
    answer:
      "Evet. Uygun olan projelerde menteşe sökme, yeni menteşe takma ve kapak ayarını adresinizde, yani yerinde planlayıp uyguluyoruz.",
  },
  {
    question: "Hangi dolaplarda menteşe değişimi yapılır?",
    answer:
      "Mutfak dolabı, banyo dolabı, gardırop, vestiyer ve benzer kapaklı mobilyalarda menteşe değişimi planlanabilir. Kalkar / üstten açılır kapak sistemleri de değerlendirilir.",
  },
  {
    question: "Sarkmış kapak menteşe değişimiyle düzelir mi?",
    answer:
      "Çoğu sarkma sorunu gevşemiş veya yıpranmış menteşelerden kaynaklanır. Menteşe değişimi, vida sıkma ve kapak ayarı ile çoğu durumda düzeltilir.",
  },
  {
    question: "Fotoğrafla ön değerlendirme mümkün mü?",
    answer:
      "Evet. Kapak ve menteşe fotoğraflarını WhatsApp üzerinden göndererek işlem kapsamı hakkında hızlı ön bilgi alabilirsiniz.",
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
      "Süre; değişecek menteşe adedine, kapak tipine ve yuva durumuna göre değişir. Fotoğraflar veya keşif sonrasında daha net bir zaman aralığı paylaşıyoruz.",
  },
];

export const SERVICE_WHATSAPP_CTA = {
  eyebrow: "WhatsApp Desteği",
  title: "Menteşe Değişimi İçin Ön Bilgi Alın",
  description:
    "Kapak fotoğrafı göndererek sarkma, gevşek menteşe, mutfak-banyo dolabı veya kalkar kapak sorunlarınız için hızlı ön değerlendirme alabilirsiniz.",
  note: "Mevcut WhatsApp dönüşüm takibi korunarak çalışır.",
} as const;
