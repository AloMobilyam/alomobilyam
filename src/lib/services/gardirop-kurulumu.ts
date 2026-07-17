import { BUSINESS, CANONICAL_SITE_URL } from "@/lib/site";

export const SERVICE_SLUG = "mersin-gardirop-kurulumu";

export const SERVICE_PATH = `/hizmetler/${SERVICE_SLUG}` as const;

export const SERVICE_URL = `${CANONICAL_SITE_URL}${SERVICE_PATH}`;

export const SERVICE_TITLE = "Mersin Gardırop Kurulumu";

export const SERVICE_METADATA = {
  title: "Mersin Gardırop Kurulumu | Yerinde Gardırop Montajı - Alo Mobilya",
  description:
    "Mersin genelinde yerinde gardırop kurulumu. İskelet, yan panel, üst gövde, raf-bölme, kapak, çekmece montajı ve son kapak ayarı ile güvenli teslim.",
  keywords: [
    "mersin gardırop kurulumu",
    "gardırop kurulumu mersin",
    "gardırop montajı mersin",
    "yerinde gardırop montajı",
    "gardırop iskelet kurulumu",
    "gardırop kapak montajı",
    "gardırop kapak ayarı",
    "gardırop raf montajı",
    "gardırop çekmece montajı",
    "mersin mobilya montaj",
  ],
  ogImage: {
    url: "/services/gardirop-kurulumu/is-asamalari/gardirop-kurulumu-kapak-montaji-01.png",
    alt: "Mersin gardırop kurulumu - kapak montajı",
  },
} as const;

export const SERVICE_WHATSAPP_MESSAGE =
  "Merhaba, Mersin gardırop kurulumu hizmeti hakkında bilgi almak istiyorum.";

export const SERVICE_TESTIMONIALS_WHATSAPP_MESSAGE =
  "Merhaba, gardırop kurulumu için fotoğraf göndermek ve ön bilgi almak istiyorum.";

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
  badge: "Mersin geneli yerinde gardırop montajı",
  h1: "Mersin Gardırop Kurulumu",
  h1Highlight: "Eksiksiz ve Güvenli Montaj",
  paragraphs: [
    "Yeni gardırobunuzu Mersin genelinde adresinizde kuruyoruz. İskelet, yan panel, üst gövde, raf, bölme, kapak ve çekmece montajını sıralı şekilde tamamlıyoruz.",
    "Gardırop parçalarınız hazırsa fotoğrafla ön değerlendirme alabilir; kurulum, kapak ayarı ve son kontrol işlemlerini yerinde planlayabilirsiniz.",
  ],
  trustItems: [
    "40+ yıllık tecrübe",
    "Ustalık belgeli",
    "Yerinde kurulum",
    "Fotoğrafla ön değerlendirme",
  ],
  showcase: {
    title: "Gardırop Kurulumu",
    left: {
      src: "/services/gardirop-kurulumu/is-asamalari/gardirop-kurulumu-iskelet-kurulumu-01.png",
      alt: "Mersin gardırop kurulumu - iskelet kurulumu",
      label: "İSKELET",
    },
    right: {
      src: "/services/gardirop-kurulumu/is-asamalari/gardirop-kurulumu-kapak-montaji-01.png",
      alt: "Mersin gardırop kurulumu - kapak montajı",
      label: "MONTAJ",
    },
  },
} as const;

export const SERVICE_WORK_STAGES_SECTION = {
  eyebrow: "İş Aşamaları",
  title: "Gardırop Kurulumu Nasıl Yapılır?",
  description:
    "Bu sayfada öncesi/sonrası galerisi yerine gardırop kurulumunun gerçek iş aşamalarını gösteriyoruz.",
} as const;

export type ServiceWorkStageIcon =
  | "frame"
  | "panel"
  | "body"
  | "shelf"
  | "door"
  | "adjust"
  | "drawer"
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
  "/services/gardirop-kurulumu/is-asamalari" as const;

function stageImage(filename: string) {
  return `${SERVICE_WORK_STAGES_IMAGE_BASE}/${filename}`;
}

export const SERVICE_WORK_STAGES: ServiceWorkStage[] = [
  {
    id: 1,
    title: "İskelet Kurulumu",
    description:
      "Gardırobun ana iskeleti parça sırasına göre kurulur. Taşıyıcı yapı dengeli oturtularak sonraki montaj adımlarına hazır hale getirilir.",
    icon: "frame",
    image: {
      src: stageImage("gardirop-kurulumu-iskelet-kurulumu-01.png"),
      alt: "Mersin gardırop kurulumu - iskelet kurulumu",
    },
  },
  {
    id: 2,
    title: "Yan Panel Montajı",
    description:
      "Yan paneller gövdeye hizalı şekilde bağlanır. Bağlantı noktaları kontrol edilerek gardırobun düzgün durması sağlanır.",
    icon: "panel",
    image: {
      src: stageImage("gardirop-kurulumu-yan-panel-montaji-01.png"),
      alt: "Mersin gardırop kurulumu - yan panel montajı",
    },
  },
  {
    id: 3,
    title: "Üst Gövde Sabitleme",
    description:
      "Üst gövde parçaları yerine alınır ve güvenli şekilde sabitlenir. Gövde bütünlüğü ve diklik kontrolü bu aşamada yapılır.",
    icon: "body",
    image: {
      src: stageImage("gardirop-kurulumu-ust-govde-sabitleme-01.png"),
      alt: "Mersin gardırop kurulumu - üst gövde sabitleme",
    },
  },
  {
    id: 4,
    title: "Raf ve Bölme Montajı",
    description:
      "Raflar, bölmeler ve iç kullanım alanları gardırop planına göre monte edilir. Askılık ve depolama düzeni kullanıma uygun hale getirilir.",
    icon: "shelf",
    image: {
      src: stageImage("gardirop-kurulumu-raf-ve-bolme-montaji-01.png"),
      alt: "Mersin gardırop kurulumu - raf ve bölme montajı",
    },
  },
  {
    id: 5,
    title: "Alt Gövde ve Çekmece Montajı",
    description:
      "Alt gövde, çekmece bölümleri ve ray bağlantıları kurulur. Çekmecelerin rahat açılıp kapanması için ilk kontroller yapılır.",
    icon: "drawer",
    image: {
      src: stageImage("gardirop-kurulumu-alt-govde-ve-cekmece-montaji-01.png"),
      alt: "Mersin gardırop kurulumu - alt gövde ve çekmece montajı",
    },
  },
  {
    id: 6,
    title: "Kapak Montajı",
    description:
      "Gardırop kapakları menteşe ve bağlantı elemanlarıyla takılır. Kapak aralıkları ve gövdeye oturuşu kontrol edilir.",
    icon: "door",
    image: {
      src: stageImage("gardirop-kurulumu-kapak-montaji-01.png"),
      alt: "Mersin gardırop kurulumu - kapak montajı",
    },
  },
  {
    id: 7,
    title: "Kapak Ayarı",
    description:
      "Kapakların hiza, boşluk ve kapanma ayarı yapılır. Sürtme, açıklık ve dengesiz kapanma ihtimali teslim öncesi giderilir.",
    icon: "adjust",
    image: {
      src: stageImage("gardirop-kurulumu-kapak-ayari-01.png"),
      alt: "Mersin gardırop kurulumu - kapak ayarı",
    },
  },
  {
    id: 8,
    title: "Son Kontrol ve Ayar",
    description:
      "Kurulum sonunda gövde, raf, çekmece ve kapak kontrolleri yapılır. Gardırop kullanıma hazır şekilde teslim edilir.",
    icon: "check",
    image: {
      src: stageImage("gardirop-kurulumu-son-kontrol-ve-ayar-01.png"),
      alt: "Mersin gardırop kurulumu - son kontrol ve ayar",
    },
  },
];

export const SERVICE_DESCRIPTION = {
  eyebrow: "Hizmet Açıklaması",
  title: "Gardırop Kurulumu Nedir?",
  description:
    "Gardırop kurulumu; yeni gardırop parçalarının yerinde iskelet, gövde, raf, çekmece ve kapak montajıyla güvenli, hizalı ve kullanıma hazır hale getirilmesidir.",
  paragraphs: [
    "Alo Mobilya olarak Mersin genelinde gardırop montajını adresinizde tamamlıyoruz. Paketli veya demonte gelen gardırop parçaları, bağlantı elemanları ve kullanım alanı birlikte kontrol edilerek işe başlanır.",
    "Kurulum sırasında iskeletin dengeli oturması, panellerin doğru hizalanması, raf ve bölmelerin sağlam sabitlenmesi, kapakların düzgün açılıp kapanması önceliklidir.",
    "WhatsApp üzerinden gardırop parçalarının ve kurulacak alanın fotoğraflarını göndererek ön değerlendirme alabilirsiniz. Kapsam netleştiğinde yerinde kurulum için randevu planlanır.",
  ],
} as const;

export const SERVICE_PROBLEMS_SECTION = {
  eyebrow: "Çözüm Alanları",
  title: "Hangi Sorunlara Çözüm Olur?",
  description:
    "Gardırop kurulumu; yeni mobilyanın sağlam kurulması kadar sonradan sorun çıkarabilecek hiza, kapak ve çekmece problemlerinin önüne geçmeyi de hedefler.",
} as const;

export type ServiceProblemIcon =
  | "frame"
  | "panel"
  | "shelf"
  | "door"
  | "adjust"
  | "drawer"
  | "onsite"
  | "check";

export type ServiceProblem = {
  id: number;
  title: string;
  description: string;
  icon: ServiceProblemIcon;
};

export const SERVICE_PROBLEMS: ServiceProblem[] = [
  {
    id: 1,
    title: "Demonte Gardırop Kurulumu",
    description:
      "Paketli gelen gardırop parçaları doğru sırayla kurulur ve kullanıma hazır hale getirilir.",
    icon: "frame",
  },
  {
    id: 2,
    title: "Hizasız Gövde Riski",
    description:
      "Yan panel ve üst gövde bağlantıları kontrol edilerek gardırobun eğri durması önlenir.",
    icon: "panel",
  },
  {
    id: 3,
    title: "Raf ve Bölme Eksikleri",
    description:
      "Raf, bölme ve askılık alanları planlanan yerlerine sağlam şekilde sabitlenir.",
    icon: "shelf",
  },
  {
    id: 4,
    title: "Kapak Montajı",
    description:
      "Kapaklar menteşe bağlantılarıyla takılır ve gövdeye göre düzgün oturması sağlanır.",
    icon: "door",
  },
  {
    id: 5,
    title: "Kapak Ayarı",
    description:
      "Kapak aralıkları, sürtme ve kapanma sorunları teslim öncesi ayarlanır.",
    icon: "adjust",
  },
  {
    id: 6,
    title: "Çekmece Montajı",
    description:
      "Alt gövde ve çekmece bölümleri kurularak rahat açılıp kapanma kontrolü yapılır.",
    icon: "drawer",
  },
  {
    id: 7,
    title: "Yerinde Servis İhtiyacı",
    description:
      "Gardırop parçaları taşınmadan, Mersin genelinde adresinizde kurulum planlanır.",
    icon: "onsite",
  },
  {
    id: 8,
    title: "Teslim Öncesi Kontrol",
    description:
      "Kurulum bitiminde gövde, raf, çekmece ve kapaklar birlikte kontrol edilir.",
    icon: "check",
  },
];

export const SERVICE_PRICING_FACTORS = {
  eyebrow: "Fiyatlandırma",
  title: "Fiyatı Etkileyen Faktörler",
  description:
    "Gardırop kurulumunda net fiyat; gardırobun ölçüsü, parça sayısı, kapak/çekmece yapısı ve yerinde iş kapsamına göre belirlenir.",
  factors: [
    {
      title: "Gardırop ölçüsü",
      description:
        "Tek kapaklı küçük gardırop ile geniş çok kapaklı gardırop arasında işçilik süresi değişir.",
    },
    {
      title: "Parça ve panel adedi",
      description:
        "Yan panel, üst gövde, raf, bölme ve bağlantı elemanı sayısı kurulum süresini etkiler.",
    },
    {
      title: "Kapak sayısı ve tipi",
      description:
        "Menteşeli kapak, çoklu kapak veya ayar gerektiren kapak yapısı fiyatı etkileyebilir.",
    },
    {
      title: "Çekmece ve ray montajı",
      description:
        "Alt gövde, çekmece kutusu ve ray bağlantılarının sayısı iş kapsamına dahil edilir.",
    },
    {
      title: "Alan ve sabitleme ihtiyacı",
      description:
        "Kurulacak alanın darlığı, zemin durumu ve ek sabitleme gereksinimi süreyi değiştirebilir.",
    },
    {
      title: "Konum ve randevu planı",
      description:
        "Yenişehir, Mezitli, Toroslar, Akdeniz ve diğer Mersin noktalarında ulaşım ve randevu planı dikkate alınır.",
    },
  ],
  discoveryFeeNote:
    "Fotoğraf veya video üzerinden ön değerlendirme ücretsizdir. Yerinde keşif ve ölçü alma taleplerinde Mersin şehir içi keşif ücreti 500 TL'dir. İş onaylandığında bu tutar toplam iş bedelinden düşülür.",
  ctaText:
    "Gardırop parçaları ve kurulacak alanın fotoğraflarını WhatsApp üzerinden gönderin; uygunluk ve ön bilgi hakkında hızlı dönüş alın.",
} as const;

export const SERVICE_TRUST = {
  eyebrow: "Güven",
  title: "Erdoğan Usta ile Güvenli Gardırop Kurulumu",
  description:
    "Gardırop montajında sağlam gövde, düzgün kapak ayarı ve temiz teslim için ustalık belgeli yerinde servis modeliyle çalışıyoruz.",
  cards: [
    { title: "40+ Yıl Tecrübe" },
    { title: "Ustalık Belgeli Hizmet" },
    { title: "Yerinde Kurulum" },
    { title: "Eksiksiz Montaj" },
  ],
  certificate: {
    src: "/certificates/ustalik-belgesi.png",
    alt: "Erdoğan Kuşçu ustalık belgesi - Alo Mobilya",
    width: 1448,
    height: 1086,
  },
  text:
    "Güven bölümünde projede kullanılan güvenli ustalık belgesi görselini paylaşıyoruz. Gardırop kurulumunda parçaları, bağlantıları ve kapak ayarlarını gereksiz işlem önermeden net şekilde planlarız.",
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
    "Gardırop kurulumu ve mobilya montaj hizmeti alan müşterilerimizden seçilmiş yorumlar.",
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
    question: "Gardırop kurulumu yerinde mi yapılıyor?",
    answer:
      "Evet. Gardırop montajını Mersin genelinde adresinizde, yani yerinde planlayıp uyguluyoruz. Parçalar hazırsa kurulum evinizde veya iş yerinizde tamamlanır.",
  },
  {
    question: "Gardırop kurulumunda hangi işlemler dahil?",
    answer:
      "İskelet kurulumu, yan panel montajı, üst gövde sabitleme, raf ve bölme montajı, alt gövde/çekmece montajı, kapak montajı, kapak ayarı ve son kontrol işlemleri kapsama göre yapılır.",
  },
  {
    question: "Kapak ayarı kurulumdan sonra yapılıyor mu?",
    answer:
      "Evet. Kapaklar takıldıktan sonra aralık, hiza ve kapanma ayarı yapılır. Teslim öncesi kapakların rahat açılıp kapanması kontrol edilir.",
  },
  {
    question: "Çekmece montajı da yapıyor musunuz?",
    answer:
      "Evet. Gardırobun alt gövde ve çekmece bölümleri varsa ray bağlantılarıyla birlikte montajı yapılır ve kullanım kontrolü sağlanır.",
  },
  {
    question: "Fotoğrafla ön değerlendirme mümkün mü?",
    answer:
      "Evet. Gardırop parçalarının ve kurulacak alanın fotoğraflarını WhatsApp üzerinden göndererek işlem kapsamı hakkında hızlı ön bilgi alabilirsiniz.",
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
    question: "Kurulum ne kadar sürer?",
    answer:
      "Süre; gardırobun ölçüsüne, parça sayısına, kapak ve çekmece adedine göre değişir. Fotoğraflar veya keşif sonrasında daha net bir zaman aralığı paylaşılır.",
  },
];

export const SERVICE_WHATSAPP_CTA = {
  eyebrow: "WhatsApp Desteği",
  title: "Gardırop Kurulumu İçin Ön Bilgi Alın",
  description:
    "Gardırop parçaları ve kurulacak alanın fotoğrafını göndererek hızlı ön değerlendirme alabilirsiniz.",
  note: "Mevcut WhatsApp dönüşüm takibi korunarak çalışır.",
} as const;
