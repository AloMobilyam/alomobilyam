import { BUSINESS, CANONICAL_SITE_URL } from "@/lib/site";

export const SERVICE_SLUG = "mersin-tekne-tik-ahsap-bakimi";

export const SERVICE_PATH = `/hizmetler/${SERVICE_SLUG}` as const;

export const SERVICE_URL = `${CANONICAL_SITE_URL}${SERVICE_PATH}`;

export const SERVICE_TITLE = "Mersin Tekne Tik ve Ahşap Bakımı";

export const SERVICE_METADATA = {
  title:
    "Mersin Tekne Tik ve Ahşap Bakımı | Tik Güverte ve Marin Vernik — Alo Mobilya",
  description:
    "Mersin tekne tik bakımı ve tekne ahşap bakımı. Tik güverte temizliği, zımpara, derz tamiri, kamara ahşap yenileme ve marin vernik uygulamaları. Fotoğrafla ön değerlendirme.",
  keywords: [
    "mersin tekne tik bakımı",
    "mersin tekne ahşap bakımı",
    "tekne tik güverte temizliği",
    "tik zımpara ve yenileme",
    "tik derz tamiri",
    "marin vernik uygulaması",
    "tekne içi ahşap mobilya onarımı",
    "kamara ahşap yenileme",
    "tekne ahşap restorasyonu",
    "mersin marina tekne ahşap bakım",
  ],
  ogImage: {
    url: "/services/tekne-tik-ahsap-bakimi/once-sonra/tekne-tik-ahsap-bakimi-tik-guverte-sonrasi-01.png",
    alt: "Mersin tekne tik bakımı sonrası - bakımlı tik güverte",
  },
} as const;

export const SERVICE_WHATSAPP_MESSAGE =
  "Merhaba, Mersin tekne tik ve ahşap bakım hizmeti hakkında bilgi almak istiyorum.";

export const SERVICE_TESTIMONIALS_WHATSAPP_MESSAGE =
  "Merhaba, tekne tik / ahşap bakımı için fotoğraf göndermek ve ön bilgi almak istiyorum.";

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
  h1: "Mersin Tekne Tik ve Ahşap Bakımı",
  h1Highlight: "Profesyonel Tik Güverte, Kamara ve Marin Vernik Uygulamaları",
  paragraphs: [
    "Teknenizin tik güverte, ahşap küpeşte, kamara mobilyası ve ahşap doğrama bölümlerinde temizlik, zımpara, derz tamiri, bakım, koruma ve marin vernik uygulamaları yapıyoruz. Tekne ahşaplarınızı daha temiz, bakımlı ve uzun ömürlü hale getirerek değerini korumasına yardımcı oluyoruz.",
    "Alo Mobilya’nın ahşap ustalığı ve yerinde servis tecrübesiyle; temiz işçilik, doğru malzeme seçimi ve zamanında teslim odaklı ilerliyoruz. Fotoğraf göndererek hızlı ön değerlendirme alabilirsiniz.",
  ],
  trustItems: [
    "40+ yıllık tecrübe",
    "Ustalık belgeli",
    "Yerinde servis",
    "Fotoğrafla ön değerlendirme",
  ],
  showcase: {
    title: "Tekne Tik ve Ahşap Bakımı",
    before:
      "/services/tekne-tik-ahsap-bakimi/once-sonra/tekne-tik-ahsap-bakimi-tik-guverte-oncesi-01.png",
    after:
      "/services/tekne-tik-ahsap-bakimi/once-sonra/tekne-tik-ahsap-bakimi-tik-guverte-sonrasi-01.png",
    beforeAlt:
      "Mersin tekne tik bakımı öncesi - yıpranmış tik güverte",
    afterAlt:
      "Mersin tekne tik bakımı sonrası - bakımlı ve yenilenmiş tik güverte",
  },
} as const;

export const SERVICE_GALLERY = {
  eyebrow: "Gerçek İşler",
  title: "Gerçek Öncesi / Sonrası Galerisi",
  description:
    "Tik güverte, ahşap küpeşte ve kamara ahşap bakım çalışmalarımızdan seçilmiş önce ve sonra görüntüleri.",
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
  "/services/tekne-tik-ahsap-bakimi/once-sonra" as const;

function galleryImage(filename: string) {
  return `${SERVICE_GALLERY_IMAGE_BASE}/${filename}`;
}

export const SERVICE_BEFORE_AFTER_GALLERY: ServiceBeforeAfterItem[] = [
  {
    id: 1,
    before: {
      src: galleryImage("tekne-tik-ahsap-bakimi-tik-guverte-oncesi-01.png"),
      alt: "Mersin tekne tik güverte bakımı öncesi - kirli ve yıpranmış tik güverte",
    },
    after: {
      src: galleryImage("tekne-tik-ahsap-bakimi-tik-guverte-sonrasi-01.png"),
      alt: "Mersin tekne tik güverte bakımı sonrası - temizlenmiş ve bakımlı tik güverte",
    },
    caption:
      "Tik güverte temizliği, zımpara ve koruma uygulamasıyla yüzey daha bakımlı ve kullanıma uygun hale getirildi.",
  },
  {
    id: 2,
    before: {
      src: galleryImage("tekne-tik-ahsap-bakimi-ahsap-kupeste-oncesi-01.png"),
      alt: "Mersin tekne ahşap küpeşte bakımı öncesi - solmuş ve yıpranmış küpeşte",
    },
    after: {
      src: galleryImage("tekne-tik-ahsap-bakimi-ahsap-kupeste-sonrasi-01.png"),
      alt: "Mersin tekne ahşap küpeşte bakımı sonrası - vernikli bakımlı küpeşte",
    },
    caption:
      "Ahşap küpeşte bakım ve vernik uygulamasıyla yüzey korunarak daha düzgün bir görünüm elde edildi.",
  },
  {
    id: 3,
    before: {
      src: galleryImage("tekne-tik-ahsap-bakimi-kamara-ahsap-oncesi-01.png"),
      alt: "Mersin kamara ahşap yenileme öncesi - yıpranmış kamara ahşapları",
    },
    after: {
      src: galleryImage("tekne-tik-ahsap-bakimi-kamara-ahsap-sonrasi-01.png"),
      alt: "Mersin kamara ahşap yenileme sonrası - yenilenmiş kamara ahşap mobilyası",
    },
    caption:
      "Kamara ahşaplarının yenilenmesi ve tekne içi ahşap mobilya bakımıyla iç mekân daha temiz ve bakımlı hale getirildi.",
  },
];

export const SERVICE_WORK_STAGES_SECTION = {
  eyebrow: "İş Aşamaları",
  title: "Tekne Tik ve Ahşap Bakım Sürecimiz",
  description:
    "Her teknede ahşapların durumuna göre temizlik, zımpara, derz, koruma ve vernik adımlarını planlı şekilde uyguluyoruz.",
} as const;

export type ServiceWorkStageIcon =
  | "clean"
  | "sand"
  | "joint"
  | "oil"
  | "varnish"
  | "cabin"
  | "carpentry"
  | "marine";

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
  "/services/tekne-tik-ahsap-bakimi/is-asamalari" as const;

function stageImage(filename: string) {
  return `${SERVICE_WORK_STAGES_IMAGE_BASE}/${filename}`;
}

export const SERVICE_WORK_STAGES: ServiceWorkStage[] = [
  {
    id: 1,
    title: "Tik Güverte Temizliği",
    description:
      "Tik güverte yüzeyindeki kir, tuz ve birikimler uygun temizlik yöntemiyle temizlenir. Bakımın sağlıklı ilerlemesi için ilk adım budur.",
    icon: "clean",
    image: {
      src: stageImage("tekne-tik-ahsap-bakimi-tik-guverte-temizligi-01.png"),
      alt: "Mersin tekne tik bakımı - tik güverte temizliği aşaması",
    },
  },
  {
    id: 2,
    title: "Tik Zımpara ve Yenileme",
    description:
      "Yüzey ihtiyaca göre zımparalanır. Tik zımpara ve yenileme ile ahşap daha düzgün bir görünüm kazanır.",
    icon: "sand",
    image: {
      src: stageImage("tekne-tik-ahsap-bakimi-tik-guverte-zimpara-01.png"),
      alt: "Mersin tekne tik bakımı - tik güverte zımpara aşaması",
    },
  },
  {
    id: 3,
    title: "Tik Derz Tamiri",
    description:
      "Açılmış veya bozulmuş derz hatlarında tik derz tamiri ve dolgu yapılır. Su ve kir girişini azaltmaya yardımcı olur.",
    icon: "joint",
    image: {
      src: stageImage("tekne-tik-ahsap-bakimi-tik-derz-tamiri-01.png"),
      alt: "Mersin tekne tik bakımı - tik derz tamiri aşaması",
    },
  },
  {
    id: 4,
    title: "Tik Koruma Yağı Uygulaması",
    description:
      "Temizlik ve zımpara sonrası tik bakım ve koruma uygulamalarıyla ahşabın görünümü desteklenir.",
    icon: "oil",
    image: {
      src: stageImage(
        "tekne-tik-ahsap-bakimi-tik-koruma-yagi-uygulamasi-01.png",
      ),
      alt: "Mersin tekne tik bakımı - tik koruma yağı uygulama aşaması",
    },
  },
  {
    id: 5,
    title: "Ahşap Küpeşte Vernik",
    description:
      "Ahşap küpeşte bakım ve vernik uygulamasıyla dış etkenlere karşı yüzey korunur.",
    icon: "varnish",
    image: {
      src: stageImage("tekne-tik-ahsap-bakimi-ahsap-kupeste-vernik-01.png"),
      alt: "Mersin tekne ahşap bakımı - ahşap küpeşte vernik aşaması",
    },
  },
  {
    id: 6,
    title: "Kamara Ahşap Mobilya Onarımı",
    description:
      "Tekne içi ahşap mobilya bakım ve onarımı ile kamara ahşaplarında temiz işçilik hedeflenir.",
    icon: "cabin",
    image: {
      src: stageImage(
        "tekne-tik-ahsap-bakimi-kamara-ahsap-mobilya-onarimi-01.png",
      ),
      alt: "Mersin kamara ahşap yenileme - kamara ahşap mobilya onarımı",
    },
  },
  {
    id: 7,
    title: "Ahşap Doğrama Tamiri",
    description:
      "Ahşap doğrama tamiratında gevşek, hasarlı veya yıpranmış bölgeler düzeltilir.",
    icon: "carpentry",
    image: {
      src: stageImage("tekne-tik-ahsap-bakimi-ahsap-dograma-tamiri-01.png"),
      alt: "Mersin tekne ahşap bakımı - ahşap doğrama tamiri aşaması",
    },
  },
  {
    id: 8,
    title: "Marin Vernik Uygulaması",
    description:
      "Uygun alanlarda marin vernik uygulamasıyla ahşap yüzeyin korunması ve daha bakımlı görünmesi desteklenir.",
    icon: "marine",
    image: {
      src: stageImage("tekne-tik-ahsap-bakimi-marin-vernik-uygulamasi-01.png"),
      alt: "Mersin tekne ahşap bakımı - marin vernik uygulama aşaması",
    },
  },
];

export const SERVICE_OPERATIONS_SECTION = {
  eyebrow: "Hizmet Kapsamı",
  title: "Hangi İşlemleri Yapıyoruz?",
  description:
    "Tekne tik ve ahşap bakımında ihtiyaca göre tek tek veya birlikte planlanabilen başlıca işlemler bunlardır.",
} as const;

export type ServiceOperationIcon =
  | "clean"
  | "sand"
  | "oil"
  | "joint"
  | "rail"
  | "cabin"
  | "carpentry"
  | "refresh"
  | "varnish"
  | "restore";

export type ServiceOperation = {
  id: number;
  title: string;
  description: string;
  icon: ServiceOperationIcon;
};

export const SERVICE_OPERATIONS: ServiceOperation[] = [
  {
    id: 1,
    title: "Tik Güverte Temizliği",
    description:
      "Tik güverte yüzeyindeki kir ve birikimler temizlenerek bakım için uygun zemin hazırlanır.",
    icon: "clean",
  },
  {
    id: 2,
    title: "Tik Zımpara ve Yenileme",
    description:
      "Yıpranmış tik yüzeyler zımparalanarak daha düzgün ve yenilenmiş bir görünüm hedeflenir.",
    icon: "sand",
  },
  {
    id: 3,
    title: "Tik Bakım ve Koruma Uygulamaları",
    description:
      "Tik bakım ve koruma ürünleriyle ahşabın daha bakımlı kalmasına yardımcı olunur.",
    icon: "oil",
  },
  {
    id: 4,
    title: "Tik Derz Tamiri ve Dolgu",
    description:
      "Açılmış derz hatlarında dolgu ve tamirle yüzey bütünlüğü güçlendirilir.",
    icon: "joint",
  },
  {
    id: 5,
    title: "Ahşap Küpeşte Bakım ve Vernik Uygulaması",
    description:
      "Küpeşte ahşaplarında bakım ve vernik ile koruma ve görünüm birlikte planlanır.",
    icon: "rail",
  },
  {
    id: 6,
    title: "Tekne İçi Ahşap Mobilya Bakım ve Onarımı",
    description:
      "Kamara ve iç mekân ahşap mobilyalarında bakım, onarım ve yüzey düzeltmesi yapılır.",
    icon: "cabin",
  },
  {
    id: 7,
    title: "Ahşap Doğrama Tamiratı",
    description:
      "Hasarlı veya gevşek ahşap doğramalar temiz işçilikle onarılır.",
    icon: "carpentry",
  },
  {
    id: 8,
    title: "Kamara Ahşaplarının Yenilenmesi",
    description:
      "Yıpranan kamara ahşapları yenilenerek daha temiz ve kullanışlı hale getirilir.",
    icon: "refresh",
  },
  {
    id: 9,
    title: "Marin Vernik Uygulamaları",
    description:
      "Uygun yüzeylerde marin vernik uygulamasıyla koruma katmanı oluşturulur.",
    icon: "varnish",
  },
  {
    id: 10,
    title: "Genel Tekne Ahşap Restorasyonu",
    description:
      "Tekne ahşap restorasyonunda kapsam; yüzey durumuna ve ihtiyaca göre netleştirilir.",
    icon: "restore",
  },
];

export const SERVICE_PRICING_FACTORS = {
  eyebrow: "Fiyatlandırma",
  title: "Fiyatı Etkileyen Faktörler",
  description:
    "Tekne tik ve ahşap bakımında net fiyat; işlerin kapsamı, yüzey durumu ve uygulanacak işlemlerle birlikte belirlenir.",
  factors: [
    {
      title: "Ahşap alanı ve kapsam",
      description:
        "Tik güverte, küpeşte, kamara veya doğrama gibi çalışma alanlarının büyüklüğü işçiliği doğrudan etkiler.",
    },
    {
      title: "Yüzeyin mevcut durumu",
      description:
        "Kirlenme, solma, çatlama veya derz açılması gibi durumlar gerekli hazırlık süresini değiştirir.",
    },
    {
      title: "Uygulanacak işlemler",
      description:
        "Yalnızca temizlik ile zımpara, derz, koruma ve vernik adımlarının birlikte planlanması bedeli etkiler.",
    },
    {
      title: "Malzeme ihtiyacı",
      description:
        "Koruma yağı, derz dolgusu, marin vernik ve benzeri malzemelerin miktarı maliyete yansır.",
    },
    {
      title: "Erişim ve çalışma koşulları",
      description:
        "Teknenin bulunduğu yer, erişim kolaylığı ve çalışma alanı koşulları planlamayı etkileyebilir.",
    },
    {
      title: "Konum ve ulaşım",
      description:
        "Mersin marina noktaları ve çevre bölgelerde randevu planlaması mesafeye göre değişebilir.",
    },
  ],
  discoveryFeeNote:
    "Fotoğraf veya video üzerinden ön değerlendirme ücretsizdir. Yerinde keşif taleplerinde Mersin şehir içi keşif ücreti 500 TL'dir. İş onaylandığında bu tutar toplam iş bedelinden düşülür.",
  ctaText:
    "Tekne ahşaplarınızın birkaç fotoğrafını WhatsApp üzerinden gönderin; tik bakım, kamara yenileme ve marin vernik seçenekleri hakkında hızlı geri dönüş alın.",
} as const;

export const SERVICE_TRUST = {
  eyebrow: "Güven",
  title: "Erdoğan Usta ile Ahşap Bakımı",
  description:
    "Tekne tik ve ahşap bakımında ahşap ustalığı, yerinde servis tecrübesi ve ihtiyaca göre planlanan bir çalışma modeliyle ilerliyoruz.",
  cards: [
    { title: "40+ Yıl Tecrübe" },
    { title: "Ustalık Belgeli Hizmet" },
    { title: "Yerinde Servis" },
    { title: "Temiz İşçilik" },
  ],
  certificate: {
    src: "/certificates/ustalik-belgesi.png",
    alt: "Erdoğan Kuşçu ustalık belgesi - Alo Mobilya",
    width: 1448,
    height: 1086,
  },
  text:
    "Güven bölümünde projede kullanılan güvenli ustalık belgesi görselini paylaşıyoruz. Çalışırken teknenizin ahşap durumuna göre yalnızca gereken bakım adımlarını açıkça anlatır; doğru malzeme ve zamanında teslim odaklı ilerleriz.",
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
    "Ahşap bakım ve mobilya işçiliği hizmeti alan müşterilerimizden seçilmiş yorumlar.",
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
    question: "Mersin’de tekne tik bakımı yapıyor musunuz?",
    answer:
      "Evet. Mersin tekne tik bakımı kapsamında tik güverte temizliği, zımpara, derz tamiri ve koruma uygulamalarını planlıyoruz. Kapsam fotoğraf veya yerinde inceleme ile netleşir.",
  },
  {
    question: "Tekne ahşap bakımı neleri kapsar?",
    answer:
      "Mersin tekne ahşap bakımı; tik güverte, ahşap küpeşte, kamara ahşapları, ahşap doğrama ve uygun alanlarda marin vernik uygulamalarını kapsayabilir.",
  },
  {
    question: "Tik derz tamiri yerinde yapılır mı?",
    answer:
      "Uygun koşullarda tik derz tamiri ve dolgu işlemlerini teknenizin bulunduğu yerde planlayıp uyguluyoruz.",
  },
  {
    question: "Marin vernik uygulaması hangi alanlara yapılır?",
    answer:
      "Ahşap küpeşte, doğrama ve uygun dış/iç ahşap yüzeylerde marin vernik uygulaması değerlendirilir. Hangi alanlara uygulanacağı yüzey durumuna göre belirlenir.",
  },
  {
    question: "Kamara ahşap yenileme yapıyor musunuz?",
    answer:
      "Evet. Kamara ahşap yenileme ve tekne içi ahşap mobilya onarımı hizmetlerimiz arasındadır.",
  },
  {
    question: "Keşif ücretli mi?",
    answer:
      "Fotoğraf veya video ile ön değerlendirme ücretsizdir. Yerinde keşif taleplerinde Mersin şehir içi 500 TL keşif ücreti uygulanır. İş onaylandığında bu tutar toplam iş bedelinden düşülür.",
  },
  {
    question: "Ne kadar sürede tamamlanır?",
    answer:
      "Süre; ahşap alanın büyüklüğüne, yüzey durumuna ve uygulanacak işlemlere göre değişir. Fotoğraflar veya keşif sonrasında daha net bir zaman aralığı paylaşıyoruz.",
  },
];

export const SERVICE_WHATSAPP_CTA = {
  eyebrow: "WhatsApp Desteği",
  title: "Tekne Ahşaplarınız İçin Ön Bilgi Alın",
  description:
    "Fotoğraf göndererek tik güverte bakımı, kamara ahşap yenileme ve marin vernik seçenekleri hakkında hızlı ön değerlendirme alabilirsiniz.",
  note: "Mevcut WhatsApp dönüşüm takibi korunarak çalışır.",
} as const;
