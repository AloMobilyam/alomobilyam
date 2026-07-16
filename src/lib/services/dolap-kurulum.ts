import { BUSINESS, CANONICAL_SITE_URL } from "@/lib/site";

export const SERVICE_SLUG = "mersin-dolap-kurulum";

export const SERVICE_PATH = `/hizmetler/${SERVICE_SLUG}` as const;

export const SERVICE_URL = `${CANONICAL_SITE_URL}${SERVICE_PATH}`;

export const SERVICE_TITLE = "Mersin Dolap Kurulum";

export const SERVICE_METADATA = {
  title:
    "Mersin Dolap Kurulum | Gardırop ve Vestiyer Montajı — Alo Mobilya",
  description:
    "Mersin genelinde yerinde dolap kurulum hizmeti. Yeni dolap, gardırop ve vestiyer montajı; gövde, raf, kapak kurulumu ile son kontrol ve hizalama. Fotoğrafla ön değerlendirme.",
  keywords: [
    "mersin dolap kurulum",
    "dolap kurulumu mersin",
    "gardırop kurulumu mersin",
    "vestiyer kurulumu mersin",
    "yeni dolap montajı",
    "dolap gövde montajı",
    "raf montajı mersin",
    "kapak montajı",
    "yerinde dolap kurulum",
    "mersin mobilya montaj",
  ],
  ogImage: {
    url: "/services/dolap-kurulum/is-asamalari/dolap-kurulum-gardirop-kapak-montaji-01.png",
    alt: "Mersin dolap kurulum - gardırop kapak montajı",
  },
} as const;

export const SERVICE_WHATSAPP_MESSAGE =
  "Merhaba, Mersin dolap kurulum hizmeti hakkında bilgi almak istiyorum.";

export const SERVICE_TESTIMONIALS_WHATSAPP_MESSAGE =
  "Merhaba, dolap kurulum için fotoğraf göndermek ve ön bilgi almak istiyorum.";

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
  h1: "Mersin Dolap Kurulum",
  h1Highlight: "Sağlam ve Düzgün Montaj",
  paragraphs: [
    "Yeni dolaplarınızı Mersin genelinde yerinde profesyonelce kuruyoruz. Gardırop, vestiyer ve dolap montajında iskelet, gövde, raf ve kapak kurulumunu sağlam ve hizalı şekilde tamamlıyoruz.",
    "Fotoğrafla ön değerlendirme alabilir; gövde montajı, kapak takımı ve son kontrol-ayar işlemlerini adresinizde planlayabilirsiniz.",
  ],
  trustItems: [
    "40+ yıllık tecrübe",
    "Ustalık belgeli",
    "Yerinde kurulum",
    "Fotoğrafla ön değerlendirme",
  ],
  showcase: {
    title: "Dolap Kurulum",
    left: {
      src: "/services/dolap-kurulum/is-asamalari/dolap-kurulum-gardirop-iskelet-kurulumu-01.png",
      alt: "Mersin dolap kurulum - gardırop iskelet kurulumu",
      label: "İSKELET",
    },
    right: {
      src: "/services/dolap-kurulum/is-asamalari/dolap-kurulum-gardirop-kapak-montaji-01.png",
      alt: "Mersin dolap kurulum - gardırop kapak montajı",
      label: "MONTAJ",
    },
  },
} as const;

export const SERVICE_WORK_STAGES_SECTION = {
  eyebrow: "İş Aşamaları",
  title: "Dolap Kurulum Uygulamaları",
  description:
    "Öncesi/sonrası galerisi yerine gerçek iş aşamalarını paylaşıyoruz: iskelet, gövde, raf, kapak montajı ve son kontrol.",
} as const;

export type ServiceWorkStageIcon =
  | "frame"
  | "body"
  | "panel"
  | "shelf"
  | "wardrobe"
  | "door"
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
  "/services/dolap-kurulum/is-asamalari" as const;

function stageImage(filename: string) {
  return `${SERVICE_WORK_STAGES_IMAGE_BASE}/${filename}`;
}

export const SERVICE_WORK_STAGES: ServiceWorkStage[] = [
  {
    id: 1,
    title: "Gardırop İskelet Kurulumu",
    description:
      "Gardırop iskeleti ölçüye uygun şekilde kurulur. Sağlam taşıyıcı yapı, sonraki gövde ve kapak montajının temelini oluşturur.",
    icon: "frame",
    image: {
      src: stageImage("dolap-kurulum-gardirop-iskelet-kurulumu-01.png"),
      alt: "Mersin dolap kurulum - gardırop iskelet kurulumu",
    },
  },
  {
    id: 2,
    title: "Gardırop İç Gövde Montajı",
    description:
      "İç gövde panelleri ve bölmeler yerleştirilir. Raf, askılık ve kullanım alanları planlanan düzene göre monte edilir.",
    icon: "body",
    image: {
      src: stageImage("dolap-kurulum-gardirop-ic-govde-montaji-01.png"),
      alt: "Mersin dolap kurulum - gardırop iç gövde montajı",
    },
  },
  {
    id: 3,
    title: "Yan Panel Montajı",
    description:
      "Yan paneller gövdeye sabitlenir. Hiza ve birleşim noktaları kontrol edilerek dolabın dengeli oturması sağlanır.",
    icon: "panel",
    image: {
      src: stageImage("dolap-kurulum-yan-panel-montaji-01.png"),
      alt: "Mersin dolap kurulum - yan panel montajı",
    },
  },
  {
    id: 4,
    title: "Üst Dolap Raf Montajı",
    description:
      "Üst dolap ve raf sistemleri güvenli şekilde monte edilir. Yük taşıma ve kullanım rahatlığı gözetilerek sabitleme yapılır.",
    icon: "shelf",
    image: {
      src: stageImage("dolap-kurulum-ust-dolap-raf-montaji-01.png"),
      alt: "Mersin dolap kurulum - üst dolap raf montajı",
    },
  },
  {
    id: 5,
    title: "Vestiyer Gövde Montajı",
    description:
      "Vestiyer gövdesi adresinizde kurulur. Giriş alanına uygun hiza, sabitleme ve kullanım düzeni birlikte planlanır.",
    icon: "wardrobe",
    image: {
      src: stageImage("dolap-kurulum-vestiyer-govde-montaji-01.png"),
      alt: "Mersin dolap kurulum - vestiyer gövde montajı",
    },
  },
  {
    id: 6,
    title: "Gardırop Kapak Montajı",
    description:
      "Kapaklar menteşe ve bağlantı parçalarıyla takılır. Aralık ve hiza ayarları ile düzgün açılıp kapanması sağlanır.",
    icon: "door",
    image: {
      src: stageImage("dolap-kurulum-gardirop-kapak-montaji-01.png"),
      alt: "Mersin dolap kurulum - gardırop kapak montajı",
    },
  },
  {
    id: 7,
    title: "Son Kontrol ve Ayar",
    description:
      "Kurulum bitiminde kapak, raf ve gövde kontrolleri yapılır. Hizalama ve son ayarlar tamamlanarak dolap kullanıma hazır teslim edilir.",
    icon: "check",
    image: {
      src: stageImage("dolap-kurulum-son-kontrol-ve-ayar-01.png"),
      alt: "Mersin dolap kurulum - son kontrol ve ayar",
    },
  },
];

export const SERVICE_DESCRIPTION = {
  eyebrow: "Hizmet Açıklaması",
  title: "Dolap Kurulum Nedir?",
  description:
    "Dolap kurulum; yeni dolap, gardırop ve vestiyer parçalarının yerinde iskelet, gövde, raf ve kapak montajıyla sağlam, hizalı ve kullanıma hazır hale getirilmesidir.",
  paragraphs: [
    "Mersin genelinde yerinde dolap kurulum hizmeti sunuyoruz. Yeni alınan dolapların montajını evinizde veya iş yerinizde; taşıma derdi olmadan, ölçüye ve kullanım ihtiyacına uygun şekilde tamamlıyoruz.",
    "İskelet kurulumu, iç gövde ve yan panel montajı, raf sabitleme, kapak takımı ile son kontrol ve hizalama adımlarını sırayla uyguluyoruz. Amaç; sağlam, düzgün ve uzun ömürlü bir kurulum sağlamaktır.",
    "WhatsApp üzerinden dolap ve alan fotoğrafları göndererek ön değerlendirme alabilirsiniz. Kapsam netleştikten sonra yerinde kurulum için randevu planlanır.",
  ],
} as const;

export const SERVICE_CABINET_TYPES_SECTION = {
  eyebrow: "Kurulum Türleri",
  title: "Hangi Dolap Kurulumları Yapılır?",
  description:
    "Yeni dolap, gardırop ve vestiyer montajında ihtiyaç duyulan başlıca kurulum türlerini yerinde planlıyoruz.",
} as const;

export type ServiceCabinetTypeIcon =
  | "cabinet"
  | "wardrobe"
  | "vestiyer"
  | "shelf"
  | "door"
  | "check"
  | "onsite";

export type ServiceCabinetType = {
  id: number;
  title: string;
  description: string;
  icon: ServiceCabinetTypeIcon;
};

export const SERVICE_CABINET_TYPES: ServiceCabinetType[] = [
  {
    id: 1,
    title: "Yeni Dolap Kurulumu",
    description:
      "Yeni alınan dolapların parçaları yerinde birleştirilir; gövde, raf ve kapaklar sağlam şekilde monte edilir.",
    icon: "cabinet",
  },
  {
    id: 2,
    title: "Gardırop Kurulumu",
    description:
      "Gardırop iskeleti, iç gövde ve kapak montajı ölçüye uygun şekilde tamamlanır.",
    icon: "wardrobe",
  },
  {
    id: 3,
    title: "Vestiyer Kurulumu",
    description:
      "Vestiyer gövde ve panel montajı giriş alanına uygun hiza ve sabitlemeyle yapılır.",
    icon: "vestiyer",
  },
  {
    id: 4,
    title: "Raf ve Gövde Montajı",
    description:
      "Raf sistemleri ve gövde panelleri güvenli bağlantılarla sabitlenir.",
    icon: "shelf",
  },
  {
    id: 5,
    title: "Kapak Montajı",
    description:
      "Kapaklar menteşe ve bağlantı parçalarıyla takılır; aralık ve hiza ayarlanır.",
    icon: "door",
  },
  {
    id: 6,
    title: "Son Kontrol ve Hizalama",
    description:
      "Kurulum sonrası açılış-kapanış, hiza ve kullanım kontrolü yapılarak teslim edilir.",
    icon: "check",
  },
  {
    id: 7,
    title: "Mersin Geneli Yerinde Servis",
    description:
      "Yenişehir, Mezitli, Toroslar, Akdeniz ve çevre bölgelerde adresinizde kurulum yapılır.",
    icon: "onsite",
  },
];

export const SERVICE_PRICING_FACTORS = {
  eyebrow: "Fiyatlandırma",
  title: "Fiyatı Etkileyen Faktörler",
  description:
    "Dolap kurulumunda net fiyat; dolabın tipi, parça sayısı ve yerinde iş kapsamıyla birlikte belirlenir.",
  factors: [
    {
      title: "Dolap tipi ve boyutu",
      description:
        "Tek gövde dolap, geniş gardırop veya vestiyer kurulumu toplam işçiliği doğrudan etkiler.",
    },
    {
      title: "Parça ve panel adedi",
      description:
        "Yan panel, raf, kapak ve iç bölme sayısı montaj süresini ve kapsamı değiştirir.",
    },
    {
      title: "Kapak ve menteşe montajı",
      description:
        "Kapak sayısı ile menteşe/bağlantı detayları iş süresine yansır.",
    },
    {
      title: "Raf ve gövde sabitleme",
      description:
        "Üst dolap, raf sistemi ve duvar/gövde sabitleme ihtiyacı fiyata etki eder.",
    },
    {
      title: "Son ayar ve kontrol süresi",
      description:
        "Hizalama, kapak ayarı ve çoklu birim kontrolü için gereken süre projeye göre değişir.",
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
    "Dolap ve alan fotoğraflarınızı WhatsApp üzerinden gönderin; uygunluk ve ön bilgi hakkında hızlı geri dönüş alın.",
} as const;

export const SERVICE_TRUST = {
  eyebrow: "Güven",
  title: "Erdoğan Usta ile Yerinde Dolap Kurulum",
  description:
    "Ölçüye uygun, sağlam ve hizalı kurulum hedefiyle yerinde servis modeliyle ilerliyoruz.",
  cards: [
    { title: "40+ Yıl Tecrübe" },
    { title: "Ustalık Belgeli Hizmet" },
    { title: "Yerinde Kurulum" },
    { title: "Sağlam İşçilik" },
  ],
  certificate: {
    src: "/certificates/ustalik-belgesi.png",
    alt: "Erdoğan Kuşçu ustalık belgesi - Alo Mobilya",
    width: 1448,
    height: 1086,
  },
  text:
    "Güven bölümünde projede kullanılan güvenli ustalık belgesi görselini paylaşıyoruz. Yerinde çalışırken iskelet, gövde, raf ve kapak montajını gereksiz işlem önermeden net şekilde planlarız.",
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
    "Dolap kurulum ve mobilya montaj hizmeti alan müşterilerimizden seçilmiş yorumlar.",
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
    question: "Dolap kurulumu yerinde mi yapılıyor?",
    answer:
      "Evet. Yeni dolap, gardırop ve vestiyer montajını adresinizde, yani yerinde planlayıp uyguluyoruz. Parçalarınız hazırsa kurulum evinizde veya iş yerinizde tamamlanır.",
  },
  {
    question: "Hangi dolap türlerinde kurulum yapıyorsunuz?",
    answer:
      "Yeni dolap, gardırop, vestiyer ve benzer gövde-kapak sistemlerinde kurulum planlanabilir. Raf, yan panel ve kapak montajı ihtiyaca göre birlikte uygulanır.",
  },
  {
    question: "Kapak montajı ve hizalama dahil mi?",
    answer:
      "Evet. Kapak takımı, menteşe bağlantıları ve son hiza ayarı kurulum sürecinin bir parçasıdır. Teslim öncesi açılış-kapanış kontrolü yapılır.",
  },
  {
    question: "Fotoğrafla ön değerlendirme mümkün mü?",
    answer:
      "Evet. Dolap parçaları ve kurulacak alanın fotoğraflarını WhatsApp üzerinden göndererek işlem kapsamı hakkında hızlı ön bilgi alabilirsiniz.",
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
      "Süre; dolabın tipine, parça sayısına ve kapak/raf montaj kapsamına göre değişir. Fotoğraflar veya keşif sonrasında daha net bir zaman aralığı paylaşıyoruz.",
  },
];

export const SERVICE_WHATSAPP_CTA = {
  eyebrow: "WhatsApp Desteği",
  title: "Dolap Kurulum İçin Ön Bilgi Alın",
  description:
    "Dolap ve alan fotoğrafı göndererek gardırop, vestiyer veya yeni dolap montajı hakkında hızlı ön değerlendirme alabilirsiniz.",
  note: "Mevcut WhatsApp dönüşüm takibi korunarak çalışır.",
} as const;
