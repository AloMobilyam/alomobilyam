import { BUSINESS, CANONICAL_SITE_URL } from "@/lib/site";

export const SERVICE_SLUG = "mersin-mobilya-yenileme";

export const SERVICE_PATH = `/hizmetler/${SERVICE_SLUG}` as const;

export const SERVICE_URL = `${CANONICAL_SITE_URL}${SERVICE_PATH}`;

export const SERVICE_TITLE = "Mersin Mobilya Yenileme";

export const SERVICE_METADATA = {
  title: "Mersin Mobilya Yenileme | Kapak Değişimi ve Yüzey Yenileme — Alo Mobilya",
  description:
    "Mersin genelinde yerinde mobilya yenileme. Banyo dolabı ve gardırop kapak değişimi, boya/rötuş, menteşe ve aksesuar yenileme, montaj ve ayar ile eski mobilyalarınızı modernleştiriyoruz.",
  keywords: [
    "mersin mobilya yenileme",
    "mobilya yenileme mersin",
    "banyo dolabı yenileme",
    "gardırop yenileme",
    "dolap kapak değişimi",
    "mobilya kapak değişimi",
    "yerinde mobilya yenileme",
    "mobilya boyama rötuş",
    "menteşe değişimi mersin",
    "yenişehir mobilya yenileme",
  ],
  ogImage: {
    url: "/services/mobilya-yenileme/once-sonra/mobilya-yenileme-gardirop-sonrasi-01.png",
    alt: "Mersin mobilya yenileme sonrası - modernleştirilmiş gardırop",
  },
} as const;

export const SERVICE_WHATSAPP_MESSAGE =
  "Merhaba, Mersin mobilya yenileme hizmeti hakkında bilgi almak istiyorum.";

export const SERVICE_TESTIMONIALS_WHATSAPP_MESSAGE =
  "Merhaba, mobilya yenileme için fotoğraf göndermek ve ön bilgi almak istiyorum.";

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
  h1: "Mersin Mobilya Yenileme",
  h1Highlight: "Kapak Değişimi ve Modern Görünüm",
  paragraphs: [
    "Eski mobilyalarınızı tamamen değiştirmeden yeniliyoruz. Banyo dolabı ve gardırop kapak değişimi, yüzey yenileme, menteşe ve aksesuar güncellemesiyle daha modern ve kullanışlı bir görünüm kazandırıyoruz.",
    "Yenişehir, Mezitli, Toroslar, Akdeniz ve Mersin genelinde; kapak sökme-takma, boya/rötuş, montaj ve ayar işlemleriyle yerinde servis sunuyoruz. Fotoğraf göndererek ön değerlendirme alabilirsiniz.",
  ],
  trustItems: [
    "40+ yıllık tecrübe",
    "Ustalık belgeli",
    "Yerinde servis",
    "Fotoğrafla ön değerlendirme",
  ],
  showcase: {
    title: "Mobilya Yenileme",
    before: "/services/mobilya-yenileme/once-sonra/mobilya-yenileme-gardirop-oncesi-01.png",
    after: "/services/mobilya-yenileme/once-sonra/mobilya-yenileme-gardirop-sonrasi-01.png",
    beforeAlt:
      "Mersin mobilya yenileme oncesi - eski gorunumlu gardirop",
    afterAlt:
      "Mersin mobilya yenileme sonrasi - modernlestirilmis gardirop",
  },
} as const;

export const SERVICE_GALLERY = {
  eyebrow: "Gerçek İşler",
  title: "Gerçek Öncesi / Sonrası Galerisi",
  description:
    "Banyo dolabı ve gardırop yenileme projelerimizden seçilmiş gerçek önce ve sonra görüntüleri.",
} as const;

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

const SERVICE_GALLERY_IMAGE_BASE =
  "/services/mobilya-yenileme/once-sonra" as const;

function galleryImage(filename: string) {
  return `${SERVICE_GALLERY_IMAGE_BASE}/${filename}`;
}

export const SERVICE_BEFORE_AFTER_GALLERY: ServiceBeforeAfterItem[] = [
  {
    id: 1,
    before: {
      src: galleryImage("mobilya-yenileme-banyo-dolabi-oncesi-01.png"),
      alt: "Mersin banyo dolabi yenileme oncesi - eski ve yipranmis banyo dolabi",
    },
    after: {
      src: galleryImage("mobilya-yenileme-banyo-dolabi-sonrasi-01.png"),
      alt: "Mersin banyo dolabi yenileme sonrasi - modernlestirilmis banyo dolabi",
    },
    caption:
      "Banyo dolabı kapak değişimi ve montaj ile mevcut gövde korunarak daha temiz ve güncel bir görünüm elde edildi.",
  },
  {
    id: 2,
    before: {
      src: galleryImage("mobilya-yenileme-gardirop-oncesi-01.png"),
      alt: "Mersin gardirop yenileme oncesi - eski model gardirop kapaklari",
    },
    after: {
      src: galleryImage("mobilya-yenileme-gardirop-sonrasi-01.png"),
      alt: "Mersin gardirop yenileme sonrasi - yeni kapakli modern gardirop",
    },
    caption:
      "Gardırop kapakları sökülüp yenileri takılarak dolap hem görünüm hem kullanım açısından modernleştirildi.",
  },
];

export const SERVICE_WORK_STAGES_SECTION = {
  eyebrow: "İş Aşamaları",
  title: "Mobilya Yenileme Sürecimiz",
  description:
    "Her projede mevcut mobilyanın durumuna göre gereken adımları planlayıp işlemleri dikkatli şekilde sırayla uyguluyoruz.",
} as const;

export type ServiceWorkStageIcon =
  | "remove"
  | "door"
  | "paint"
  | "hinge"
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
  "/services/mobilya-yenileme/is-asamalari" as const;

function stageImage(filename: string) {
  return `${SERVICE_WORK_STAGES_IMAGE_BASE}/${filename}`;
}

export const SERVICE_WORK_STAGES: ServiceWorkStage[] = [
  {
    id: 1,
    title: "Kapakların Sökülmesi",
    description:
      "Gardırop veya dolap kapakları zarar vermeden sökülür. Bu aşama, yeni kapak montajı ve gerekli aksesuar yenilemeleri için sağlam bir başlangıç sağlar.",
    icon: "remove",
    image: {
      src: stageImage("mobilya-yenileme-gardirop-kapak-sokme-01.png"),
      alt: "Mersin mobilya yenileme - gardirop kapaklarinin sokulmesi asamasi",
    },
  },
  {
    id: 2,
    title: "Yeni Kapak Takma",
    description:
      "Seçilen yeni kapaklar doğru hiza ile yerleştirilir. Hedef, mevcut gövdeyi koruyarak daha modern ve dengeli bir görünüm elde etmektir.",
    icon: "door",
    image: {
      src: stageImage("mobilya-yenileme-gardirop-kapak-takma-01.png"),
      alt: "Mersin mobilya yenileme - gardirop yeni kapak takma asamasi",
    },
  },
  {
    id: 3,
    title: "Banyo Dolabı Kapak Montajı",
    description:
      "Banyo dolabı kapakları yenilenerek takılır. Nemli ortama uygun montaj ve hiza ayarıyla hem görünüm hem kullanım rahatlığı güncellenir.",
    icon: "paint",
    image: {
      src: stageImage("mobilya-yenileme-banyo-dolabi-kapak-takma-01.png"),
      alt: "Mersin mobilya yenileme - banyo dolabi kapak takma asamasi",
    },
  },
  {
    id: 4,
    title: "Montaj ve Son Kontroller",
    description:
      "Menteşe, kulp ve bağlantı ayarları tamamlanır. Açılış-kapanış, hiza ve genel görünüm teslim öncesi son kez kontrol edilir.",
    icon: "assembly",
    image: {
      src: stageImage("mobilya-yenileme-banyo-dolabi-montaj-01.png"),
      alt: "Mersin mobilya yenileme - montaj ve son kontrol asamasi",
    },
  },
];

export const SERVICE_OPERATIONS_SECTION = {
  eyebrow: "Hizmet Kapsamı",
  title: "Hangi İşlemleri Yapıyoruz?",
  description:
    "Mobilya yenileme sürecinde ihtiyaca göre tek tek veya birlikte planlanabilen başlıca işlemler bunlardır.",
} as const;

export type ServiceOperationIcon =
  | "door"
  | "paint"
  | "hinge"
  | "handle"
  | "wardrobe"
  | "assembly";

export type ServiceOperation = {
  id: number;
  title: string;
  description: string;
  icon: ServiceOperationIcon;
};

export const SERVICE_OPERATIONS: ServiceOperation[] = [
  {
    id: 1,
    title: "Kapak Değişimi",
    description:
      "Eski veya yıpranmış kapaklar yeni modellerle değiştirilerek mobilyaya daha modern bir çizgi kazandırılır.",
    icon: "door",
  },
  {
    id: 2,
    title: "Kapak Sökme ve Takma",
    description:
      "Kapaklar zarar vermeden sökülür; gerekli yenileme sonrası doğru hiza ile yeniden monte edilir.",
    icon: "door",
  },
  {
    id: 3,
    title: "Boya, Rötuş ve Yüzey Yenileme",
    description:
      "Yüzey yapısı uygunsa boya, rötuş ve yüzey yenileme ile renk ve görünüm güncellenir.",
    icon: "paint",
  },
  {
    id: 4,
    title: "Menteşe ve Aksesuar Yenileme",
    description:
      "Gevşemiş menteşeler, eski kulplar ve yıpranmış aksesuarlar ihtiyaca göre yenilenir.",
    icon: "hinge",
  },
  {
    id: 5,
    title: "Banyo Dolabı Yenileme",
    description:
      "Banyo dolabı kapak ve yüzey yenilemeleriyle mevcut dolap daha temiz ve güncel hale getirilir.",
    icon: "handle",
  },
  {
    id: 6,
    title: "Gardırop / Dolap Yenileme",
    description:
      "Gardırop ve dolap kapakları yenilenerek hem görünüm hem kullanım rahatlığı modernleştirilir.",
    icon: "wardrobe",
  },
  {
    id: 7,
    title: "Montaj ve Ayar",
    description:
      "Kapak hizası, menteşe ayarı ve son montaj kontrolleriyle mobilya günlük kullanıma hazır hale getirilir.",
    icon: "assembly",
  },
  {
    id: 8,
    title: "Yerinde Servis",
    description:
      "Uygun projelerde tüm yenileme adımları adresinizde planlanır ve yerinde uygulanır.",
    icon: "assembly",
  },
];

export const SERVICE_COMPARISON = {
  eyebrow: "Karşılaştırma",
  title: "Sıfırdan Değiştirmek mi, Yenilemek mi?",
  description:
    "Mobilyanın gövdesi sağlamsa yenileme çoğu zaman daha pratik bir seçenek olabilir. Ama her mobilya için aynı karar doğru değildir.",
  renovationLabel: "Yenileme",
  newLabel: "Sıfırdan Değiştirme",
  rows: [
    {
      aspect: "Bütçe",
      renovation:
        "Mevcut gövde korunur; ağırlık kapak değişimi, yüzey yenileme, aksesuar ve ayar işlerine verilir. Genellikle daha ulaşılabilir olur.",
      newOption:
        "Komple yeni mobilya, teslimat ve kurulum gerektirdiği için daha yüksek bütçe isteyebilir.",
    },
    {
      aspect: "Süreç",
      renovation:
        "Yerinde planlanır ve çoğu projede daha kısa sürer; mobilyayı uzun süre kullanımsız bırakmaz.",
      newOption:
        "Seçim, sipariş, teslimat ve kurulum süreci daha uzun olabilir.",
    },
    {
      aspect: "Tadilat Etkisi",
      renovation:
        "Evde daha sınırlı müdahale ile ilerlenir. Mevcut düzen büyük oranda korunur.",
      newOption:
        "Eski mobilyanın tamamen kaldırılması ve yenisinin yerleştirilmesi gerekebilir.",
    },
    {
      aspect: "Ne Zaman Uygun?",
      renovation:
        "Gövde sağlam, görünüm eski veya kapak/aksesuarlar yıpranmışsa yenileme mantıklı olabilir.",
      newOption:
        "Taşıması zayıflamış, ölçüleri yetersiz veya yapısal olarak problemli mobilyalarda sıfırdan değiştirme daha doğru olabilir.",
    },
  ],
  note: "Fotoğraflar veya yerinde inceleme ile hangi seçeneğin daha mantıklı olduğunu baskı kurmadan açıkça paylaşıyoruz.",
} as const;

export const SERVICE_PRICING_FACTORS = {
  eyebrow: "Fiyatlandırma",
  title: "Fiyatı Etkileyen Faktörler",
  description:
    "Mobilya yenilemede net fiyat; mobilyanın tipi, kapak sayısı ve uygulanacak işlerin kapsamıyla birlikte belirlenir.",
  factors: [
    {
      title: "Mobilyanın tipi ve boyutu",
      description:
        "Banyo dolabı, gardırop veya diğer dolaplarda ölçü ve parça sayısı toplam işçiliği doğrudan etkiler.",
    },
    {
      title: "Kapak sayısı ve değişim kapsamı",
      description:
        "Değişecek veya yenilenecek kapak adedi fiyat aralığını belirleyen temel unsurlardan biridir.",
    },
    {
      title: "Yüzey yenileme ihtiyacı",
      description:
        "Boya, rötuş veya yüzey hazırlığı gerektiren alanların miktarı iş kapsamını değiştirir.",
    },
    {
      title: "Menteşe ve aksesuar ihtiyacı",
      description:
        "Değişecek menteşe, kulp ve bağlantı parçalarının adedi toplam maliyete yansır.",
    },
    {
      title: "Montaj ve ayar süresi",
      description:
        "Kapak ayarı, yeniden montaj ve son kontroller için gereken süre proje bazında değişir.",
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
    "Mobilyanızın birkaç fotoğrafını WhatsApp üzerinden gönderin; kapak değişimi ve yenileme seçenekleri hakkında hızlı geri dönüş alın.",
} as const;

export const SERVICE_TRUST = {
  eyebrow: "Güven",
  title: "Erdoğan Usta ile Yerinde Yenileme",
  description:
    "Mobilya yenilemede ölçüye uygun, ihtiyaca göre planlanan ve yerinde uygulanan bir çalışma modeliyle ilerliyoruz.",
  cards: [
    { title: "40+ Yıl Tecrübe" },
    { title: "Ustalık Belgeli Hizmet" },
    { title: "Yerinde Servis" },
    { title: "Ölçüye Uygun İşçilik" },
  ],
  certificate: {
    src: "/certificates/ustalik-belgesi.png",
    alt: "Erdoğan Kuşçu ustalık belgesi - Alo Mobilya",
    width: 1448,
    height: 1086,
  },
  text:
    "Belge görselinde daha önce projede kullanılan güvenli sertifika görselini tercih ediyoruz. Yerinde çalışırken mobilyanızın durumuna göre gereksiz iş önermez, uygun olan yenileme işlemlerini net şekilde açıklarız.",
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
    "Mobilya yenileme hizmeti alan müşterilerimizden seçilmiş yorumlar.",
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
    question: "Mobilya yenileme yerinde mi yapılıyor?",
    answer:
      "Evet. Uygun olan projelerde mobilya yenileme işlemlerini adresinizde, yani yerinde planlayıp uyguluyoruz. Yapılacak işlerin kapsamını önce görüp buna göre bilgi veriyoruz.",
  },
  {
    question: "Hangi mobilyalar yenilenebilir?",
    answer:
      "Banyo dolabı, gardırop ve benzer dolaplarda kapak değişimi, yüzey yenileme, menteşe ve aksesuar güncellemesi planlanabilir. Uygunluk mevcut gövdenin durumuna göre değerlendirilir.",
  },
  {
    question: "Kapak değişimi nasıl yapılır?",
    answer:
      "Eski kapaklar dikkatlice sökülür, yeni kapaklar doğru hiza ile takılır. Gerekirse menteşe ve kulp yenilemesi de aynı süreçte yapılır.",
  },
  {
    question: "Eski mobilyayı değiştirmeden yenilemek mantıklı mı?",
    answer:
      "Gövde yapısı sağlamsa çoğu zaman mantıklıdır. Kapak değişimi, boya/rötuş ve aksesuar yenilemeleriyle mevcut mobilyayı daha modern ve kullanışlı hale getirmek mümkündür.",
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
      "Süre; mobilyanın tipine, kapak sayısına ve uygulanacak işlemlere göre değişir. Fotoğraflar veya keşif sonrasında daha net bir zaman aralığı paylaşıyoruz.",
  },
];

export const SERVICE_WHATSAPP_CTA = {
  eyebrow: "WhatsApp Desteği",
  title: "Mobilyanız İçin Ön Bilgi Alın",
  description:
    "Fotoğraf göndererek kapak değişimi, yüzey yenileme, menteşe ve aksesuar seçenekleri hakkında hızlı ön değerlendirme alabilirsiniz.",
  note:
    "Google Ads etiketi ve mevcut WhatsApp dönüşüm takibi korunarak çalışır.",
} as const;
