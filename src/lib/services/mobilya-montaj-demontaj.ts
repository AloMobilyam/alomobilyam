import { BUSINESS, CANONICAL_SITE_URL } from "@/lib/site";

export const SERVICE_SLUG = "mersin-mobilya-montaj-demontaj";

export const SERVICE_PATH = `/hizmetler/${SERVICE_SLUG}` as const;

export const SERVICE_URL = `${CANONICAL_SITE_URL}${SERVICE_PATH}`;

export const SERVICE_TITLE = "Mersin Mobilya Montaj ve Demontaj";

export const SERVICE_METADATA = {
  title:
    "Mersin Mobilya Montaj ve Demontaj | Dolap Sökme Takma — Alo Mobilya",
  description:
    "Mersin genelinde yerinde mobilya montaj ve demontaj. Taşınma, yenileme, dolap sökme-takma, gardırop montajı, vestiyer montajı ve panel hizalama. Fotoğrafla ön değerlendirme.",
  keywords: [
    "mersin mobilya montaj",
    "mobilya demontaj mersin",
    "mobilya montaj demontaj mersin",
    "dolap sökme takma mersin",
    "gardırop montajı mersin",
    "vestiyer montajı mersin",
    "taşınma mobilya demontaj",
    "panel hizalama",
    "yerinde mobilya montaj",
    "mersin mobilya sökme takma",
  ],
  ogImage: {
    url: "/services/mobilya-montaj-demontaj/is-asamalari/mobilya-montaj-demontaj-dolap-dikme-montaji-01.png",
    alt: "Mersin mobilya montaj ve demontaj - dolap dikme montajı",
  },
} as const;

export const SERVICE_WHATSAPP_MESSAGE =
  "Merhaba, Mersin mobilya montaj ve demontaj hizmeti hakkında bilgi almak istiyorum.";

export const SERVICE_TESTIMONIALS_WHATSAPP_MESSAGE =
  "Merhaba, mobilya montaj / demontaj için fotoğraf göndermek ve ön bilgi almak istiyorum.";

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
  h1: "Mersin Mobilya Montaj ve Demontaj",
  h1Highlight: "Sökme, Takma, Hizalama",
  paragraphs: [
    "Taşınma, yenileme, dolap sökme-takma, gardırop montajı, vestiyer montajı ve panel hizalama ihtiyaçlarınızda Mersin genelinde yerinde profesyonel montaj ve demontaj desteği sunuyoruz.",
    "Fotoğrafla ön değerlendirme alabilir; demontaj hazırlığı, parça birleştirme ve son hizalama adımlarını adresinizde planlayabilirsiniz.",
  ],
  trustItems: [
    "40+ yıllık tecrübe",
    "Ustalık belgeli",
    "Yerinde montaj",
    "Fotoğrafla ön değerlendirme",
  ],
  showcase: {
    title: "Mobilya Montaj ve Demontaj",
    left: {
      src: "/services/mobilya-montaj-demontaj/is-asamalari/mobilya-montaj-demontaj-parca-hazirlama-01.png",
      alt: "Mersin mobilya montaj ve demontaj - parça hazırlama",
      label: "HAZIRLIK",
    },
    right: {
      src: "/services/mobilya-montaj-demontaj/is-asamalari/mobilya-montaj-demontaj-dolap-dikme-montaji-01.png",
      alt: "Mersin mobilya montaj ve demontaj - dolap dikme montajı",
      label: "MONTAJ",
    },
  },
} as const;

export const SERVICE_WORK_STAGES_SECTION = {
  eyebrow: "İş Aşamaları",
  title: "Montaj ve Demontaj Uygulamaları",
  description:
    "Öncesi/sonrası galerisi yerine gerçek iş aşamalarını paylaşıyoruz: parça hazırlama, gövde montajı, panel ve raf sabitleme ile hizalama.",
} as const;

export type ServiceWorkStageIcon =
  | "frame"
  | "panel"
  | "parts"
  | "body"
  | "shelf"
  | "side"
  | "align"
  | "top";

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
  "/services/mobilya-montaj-demontaj/is-asamalari" as const;

function stageImage(filename: string) {
  return `${SERVICE_WORK_STAGES_IMAGE_BASE}/${filename}`;
}

export const SERVICE_WORK_STAGES: ServiceWorkStage[] = [
  {
    id: 1,
    title: "Dolap Dikme Montajı",
    description:
      "Dolap dikmeleri ölçüye uygun şekilde yerleştirilir. Sağlam dikme yapısı, sonraki gövde ve panel montajının temelini oluşturur.",
    icon: "frame",
    image: {
      src: stageImage("mobilya-montaj-demontaj-dolap-dikme-montaji-01.png"),
      alt: "Mersin mobilya montaj ve demontaj - dolap dikme montajı",
    },
  },
  {
    id: 2,
    title: "Vestiyer Panel Montajı",
    description:
      "Vestiyer panelleri giriş alanına uygun hiza ile monte edilir. Sabitleme ve kullanım düzeni birlikte planlanır.",
    icon: "panel",
    image: {
      src: stageImage("mobilya-montaj-demontaj-vestiyer-panel-montaji-01.png"),
      alt: "Mersin mobilya montaj ve demontaj - vestiyer panel montajı",
    },
  },
  {
    id: 3,
    title: "Parça Hazırlama",
    description:
      "Montaj öncesi paneller, bağlantı elemanları ve parçalar kontrol edilir. Doğru sıra ve eksiksiz malzeme ile işe başlanır.",
    icon: "parts",
    image: {
      src: stageImage("mobilya-montaj-demontaj-parca-hazirlama-01.png"),
      alt: "Mersin mobilya montaj ve demontaj - parça hazırlama",
    },
  },
  {
    id: 4,
    title: "Alt Gövde Montajı",
    description:
      "Alt gövde panelleri birleştirilir ve dengeli oturtulur. Çekmece ve alt bölmeler için sağlam taşıyıcı yapı kurulur.",
    icon: "body",
    image: {
      src: stageImage("mobilya-montaj-demontaj-alt-govde-montaji-01.png"),
      alt: "Mersin mobilya montaj ve demontaj - alt gövde montajı",
    },
  },
  {
    id: 5,
    title: "Raf Panel Montajı",
    description:
      "Raf sistemleri güvenli şekilde monte edilir. Yük taşıma ve kullanım rahatlığı gözetilerek sabitleme yapılır.",
    icon: "shelf",
    image: {
      src: stageImage("mobilya-montaj-demontaj-raf-panel-montaji-01.png"),
      alt: "Mersin mobilya montaj ve demontaj - raf panel montajı",
    },
  },
  {
    id: 6,
    title: "Dolap Yan Panel Montajı",
    description:
      "Yan paneller gövdeye sabitlenir. Hiza ve birleşim noktaları kontrol edilerek dolabın dengeli oturması sağlanır.",
    icon: "side",
    image: {
      src: stageImage("mobilya-montaj-demontaj-dolap-yan-panel-montaji-01.png"),
      alt: "Mersin mobilya montaj ve demontaj - dolap yan panel montajı",
    },
  },
  {
    id: 7,
    title: "Dolap Gövde Hizalama",
    description:
      "Gövde dikliği ve panel hizası kontrol edilir. Eğrilik ve boşluklar düzeltilerek düzgün bir kurulum elde edilir.",
    icon: "align",
    image: {
      src: stageImage("mobilya-montaj-demontaj-dolap-govde-hizalama-01.png"),
      alt: "Mersin mobilya montaj ve demontaj - dolap gövde hizalama",
    },
  },
  {
    id: 8,
    title: "Üst Panel Montajı",
    description:
      "Üst paneller güvenli şekilde sabitlenir. Son bağlantılar ve genel denge kontrolü ile montaj tamamlanır.",
    icon: "top",
    image: {
      src: stageImage("mobilya-montaj-demontaj-ust-panel-montaji-01.png"),
      alt: "Mersin mobilya montaj ve demontaj - üst panel montajı",
    },
  },
];

export const SERVICE_DESCRIPTION = {
  eyebrow: "Hizmet Açıklaması",
  title: "Mobilya Montaj ve Demontaj Nedir?",
  description:
    "Mobilya montaj ve demontaj; dolap, gardırop, vestiyer ve benzer parçaların güvenli şekilde sökülmesi, yeniden kurulması ve kullanıma hazır hizalanmasıdır.",
  paragraphs: [
    "Mersin genelinde yerinde montaj ve demontaj hizmeti sunuyoruz. Taşınma öncesi dolap sökme, yeni adreste yeniden kurulum, yenileme sürecinde geçici demontaj veya yeni alınan mobilyanın montajını adresinizde planlıyoruz.",
    "Parça hazırlama, alt/üst gövde montajı, yan panel ve raf sabitleme ile panel hizalama adımlarını sırayla uyguluyoruz. Amaç; sağlam, düzgün ve taşınmaya veya kullanıma uygun bir sonuç sağlamaktır.",
    "WhatsApp üzerinden mobilya ve alan fotoğrafları göndererek ön değerlendirme alabilirsiniz. Kapsam netleştikten sonra yerinde montaj veya demontaj için randevu planlanır.",
  ],
} as const;

export const SERVICE_PROBLEMS_SECTION = {
  eyebrow: "Hizmet Kapsamı",
  title: "Hangi Durumlarda Montaj / Demontaj Gerekir?",
  description:
    "Taşınma, yenileme ve yeni mobilya kurulumunda sık karşılaşılan durumlar için yerinde montaj ve demontaj desteği planlıyoruz.",
} as const;

export type ServiceProblemIcon =
  | "move"
  | "refresh"
  | "cabinet"
  | "wardrobe"
  | "vestiyer"
  | "align"
  | "parts"
  | "onsite";

export type ServiceProblem = {
  id: number;
  title: string;
  description: string;
  icon: ServiceProblemIcon;
};

export const SERVICE_PROBLEMS: ServiceProblem[] = [
  {
    id: 1,
    title: "Taşınma Öncesi Demontaj",
    description:
      "Dolap ve büyük mobilyalar güvenli şekilde sökülür; taşıma sırasında hasar riski azaltılır.",
    icon: "move",
  },
  {
    id: 2,
    title: "Yenileme Sürecinde Söküm",
    description:
      "Boyama, tadilat veya yenileme öncesi mobilyalar kontrollü biçimde demonte edilir.",
    icon: "refresh",
  },
  {
    id: 3,
    title: "Dolap Sökme ve Takma",
    description:
      "Mevcut dolaplar sökülüp yeni düzene veya yeni adrese uygun şekilde yeniden monte edilir.",
    icon: "cabinet",
  },
  {
    id: 4,
    title: "Gardırop Montajı",
    description:
      "Yeni veya demonte gardırop parçaları yerinde birleştirilerek sağlam kurulur.",
    icon: "wardrobe",
  },
  {
    id: 5,
    title: "Vestiyer Montajı",
    description:
      "Vestiyer panel ve gövde montajı giriş alanına uygun hiza ile tamamlanır.",
    icon: "vestiyer",
  },
  {
    id: 6,
    title: "Panel ve Gövde Hizalama",
    description:
      "Eğri duran paneller, boşluklar ve gövde hizası düzeltilerek düzgün kullanım sağlanır.",
    icon: "align",
  },
  {
    id: 7,
    title: "Parça Birleştirme",
    description:
      "Alt gövde, yan panel, raf ve üst panel bağlantıları doğru sırayla birleştirilir.",
    icon: "parts",
  },
  {
    id: 8,
    title: "Mersin Geneli Yerinde Servis",
    description:
      "Yenişehir, Mezitli, Toroslar, Akdeniz ve çevre bölgelerde adresinizde hizmet verilir.",
    icon: "onsite",
  },
];

export const SERVICE_PROCESS_SECTION = {
  eyebrow: "Montaj Sürecimiz",
  title: "Montaj Sürecimiz",
  description:
    "Fotoğrafla ön değerlendirmeden son kontrole kadar montaj ve demontaj işini net adımlarla planlıyoruz.",
} as const;

export type ServiceProcessStep = {
  id: number;
  title: string;
  description: string;
};

export const SERVICE_PROCESS_STEPS: ServiceProcessStep[] = [
  {
    id: 1,
    title: "WhatsApp ile Fotoğraf Ön Değerlendirme",
    description:
      "Mobilya ve alan fotoğraflarını gönderirsiniz; kapsam, uygunluk ve ön bilgi paylaşılır.",
  },
  {
    id: 2,
    title: "Randevu ve Yerinde Keşif",
    description:
      "Uygun gün ve saat planlanır; gerekirse adresinizde ölçü ve keşif yapılır.",
  },
  {
    id: 3,
    title: "Söküm / Demontaj Hazırlığı",
    description:
      "Parçalar işaretlenir, bağlantılar kontrollü sökülür ve taşıma veya yeniden montaja hazırlanır.",
  },
  {
    id: 4,
    title: "Montaj ve Parça Birleştirme",
    description:
      "Dikme, gövde, panel ve raf parçaları doğru sırayla birleştirilerek sağlam kurulur.",
  },
  {
    id: 5,
    title: "Kapak, Raf, Panel ve Gövde Hizalama",
    description:
      "Hiza, aralık ve denge kontrolleri yapılarak dolap ve mobilyanın düzgün oturması sağlanır.",
  },
  {
    id: 6,
    title: "Son Kontrol ve Teslim",
    description:
      "Açılış-kapanış, sabitleme ve genel kullanım kontrolüyle iş tamamlanıp teslim edilir.",
  },
];

export const SERVICE_PRICING_FACTORS = {
  eyebrow: "Fiyatlandırma",
  title: "Fiyatı Etkileyen Faktörler",
  description:
    "Mobilya montaj ve demontajda net fiyat; mobilya tipi, parça sayısı ve yerinde iş kapsamıyla birlikte belirlenir.",
  factors: [
    {
      title: "Mobilya tipi ve boyutu",
      description:
        "Tek gövde dolap, geniş gardırop, vestiyer veya birden fazla ünite toplam işçiliği doğrudan etkiler.",
    },
    {
      title: "Montaj / demontaj kapsamı",
      description:
        "Yalnız söküm mü, yalnız kurulum mu, yoksa ikisi birden mi gerektiği fiyatı değiştirir.",
    },
    {
      title: "Parça ve panel adedi",
      description:
        "Yan panel, raf, kapak, üst/alt gövde ve bağlantı sayısı montaj süresini etkiler.",
    },
    {
      title: "Hizalama ve ayar ihtiyacı",
      description:
        "Gövde hizası, panel boşlukları ve kapak/raf ayarı için gereken süre projeye göre değişir.",
    },
    {
      title: "Taşınma veya yenileme koşulları",
      description:
        "Dar alan, kat çıkışı veya tadilat ortamı iş planını ve işçiliği etkileyebilir.",
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
    "Mobilya ve alan fotoğraflarınızı WhatsApp üzerinden gönderin; montaj veya demontaj kapsamı hakkında hızlı geri dönüş alın.",
} as const;

export const SERVICE_TRUST = {
  eyebrow: "Güven",
  title: "Erdoğan Usta ile Yerinde Montaj ve Demontaj",
  description:
    "Taşınma ve yenileme süreçlerinde kontrollü söküm, sağlam montaj ve net iletişimle ilerliyoruz.",
  cards: [
    { title: "40+ Yıl Tecrübe" },
    { title: "Ustalık Belgeli Hizmet" },
    { title: "Yerinde Montaj" },
    { title: "Sağlam İşçilik" },
  ],
  certificate: {
    src: "/certificates/ustalik-belgesi.png",
    alt: "Erdoğan Kuşçu ustalık belgesi - Alo Mobilya",
    width: 1448,
    height: 1086,
  },
  text:
    "Güven bölümünde projede kullanılan güvenli ustalık belgesi görselini paylaşıyoruz. Yerinde çalışırken demontaj, parça birleştirme ve hizalama adımlarını gereksiz işlem önermeden net şekilde planlarız.",
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
    "Mobilya montaj, demontaj ve kurulum hizmeti alan müşterilerimizden seçilmiş yorumlar.",
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
    question: "Mobilya montaj ve demontaj yerinde mi yapılıyor?",
    answer:
      "Evet. Taşınma, yenileme veya yeni kurulum için montaj ve demontaj işlemlerini adresinizde, yani yerinde planlayıp uyguluyoruz.",
  },
  {
    question: "Hangi mobilyalarda montaj / demontaj yapılır?",
    answer:
      "Dolap, gardırop, vestiyer ve benzer gövde-panel sistemlerinde montaj ve demontaj planlanabilir. Parça sayısı ve alan uygunluğuna göre kapsam netleştirilir.",
  },
  {
    question: "Taşınma öncesi dolap sökme hizmetiniz var mı?",
    answer:
      "Evet. Taşınma öncesi kontrollü demontaj ve sonrasında yeni adreste yeniden montaj ihtiyacına göre hizmet planlayabilirsiniz.",
  },
  {
    question: "Panel hizalama montaja dahil mi?",
    answer:
      "Evet. Kapak, raf, panel ve gövde hizalama adımları montaj sürecinin bir parçasıdır. Teslim öncesi denge ve kullanım kontrolü yapılır.",
  },
  {
    question: "Fotoğrafla ön değerlendirme mümkün mü?",
    answer:
      "Evet. Mobilya ve çalışılacak alanın fotoğraflarını WhatsApp üzerinden göndererek işlem kapsamı hakkında hızlı ön bilgi alabilirsiniz.",
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
      "Süre; mobilyanın tipine, parça sayısına ve yalnızca montaj mı yoksa demontaj + montaj mı gerektiğine göre değişir. Fotoğraflar veya keşif sonrasında daha net bir zaman aralığı paylaşıyoruz.",
  },
];

export const SERVICE_WHATSAPP_CTA = {
  eyebrow: "WhatsApp Desteği",
  title: "Montaj / Demontaj İçin Ön Bilgi Alın",
  description:
    "Mobilya ve alan fotoğrafı göndererek taşınma, dolap sökme-takma, gardırop veya vestiyer montajı hakkında hızlı ön değerlendirme alabilirsiniz.",
  note: "Mevcut WhatsApp dönüşüm takibi korunarak çalışır.",
} as const;
