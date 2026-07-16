import { BUSINESS, CANONICAL_SITE_URL } from "@/lib/site";

export const SERVICE_SLUG = "mersin-vestiyer-portmanto-yenileme";

export const SERVICE_PATH = `/hizmetler/${SERVICE_SLUG}` as const;

export const SERVICE_URL = `${CANONICAL_SITE_URL}${SERVICE_PATH}`;

export const SERVICE_TITLE = "Mersin Vestiyer / Portmanto Yenileme";

export const SERVICE_METADATA = {
  title: "Mersin Vestiyer / Portmanto Yenileme | Yerinde Boyama ve Tamir — Alo Mobilya",
  description:
    "Mersin genelinde yerinde vestiyer ve portmanto yenileme hizmeti. Kapak boyama, zımparalama, menteşe ve kulp değişimi, montaj ve düzenleme işlemleriyle giriş dolaplarınızı yeniliyoruz.",
  keywords: [
    "mersin vestiyer yenileme",
    "mersin portmanto yenileme",
    "vestiyer yenileme mersin",
    "portmanto yenileme mersin",
    "vestiyer boyama",
    "portmanto tamiri",
    "vestiyer kapak değişimi",
    "vestiyer menteşe değişimi",
    "giriş dolabı yenileme",
    "mersin mobilya yenileme",
  ],
  ogImage: {
    url: "/services/vestiyer-portmanto-yenileme/once-sonra/vestiyer-portmanto-yenileme-sonrasi-01.png",
    alt: "Mersin vestiyer portmanto yenileme sonrası - modernleştirilmiş giriş dolabı",
  },
} as const;

export const SERVICE_WHATSAPP_MESSAGE =
  "Merhaba, Mersin vestiyer / portmanto yenileme hizmeti hakkında bilgi almak istiyorum.";

export const SERVICE_TESTIMONIALS_WHATSAPP_MESSAGE =
  "Merhaba, vestiyer / portmanto yenileme için fotoğraf göndermek ve on bilgi almak istiyorum.";

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
  h1: "Mersin Vestiyer / Portmanto Yenileme",
  h1Highlight: "Yerinde Boyama ve Düzenleme",
  paragraphs: [
    "Eski, yıpranmış veya kullanışsız vestiyer ve portmantolarınızı yerinde yeniliyor; kapak, menteşe, boya, zımpara, montaj ve düzenleme işlemleriyle daha temiz ve güncel bir görünüm kazandırıyoruz.",
    "Yenişehir, Mezitli, Toroslar, Akdeniz ve Mersin genelinde çalışırken mevcut dolabınızı tamamen değiştirmek yerine uygun olduğu durumlarda daha pratik bir yenileme planı sunuyoruz.",
  ],
  trustItems: [
    "40+ yıllık tecrübe",
    "Ustalık belgeli",
    "Yerinde servis",
    "Fotoğrafla ön değerlendirme",
  ],
  showcase: {
    title: "Vestiyer / Portmanto Yenileme",
    before: "/services/vestiyer-portmanto-yenileme/once-sonra/vestiyer-portmanto-yenileme-oncesi-01.png",
    after: "/services/vestiyer-portmanto-yenileme/once-sonra/vestiyer-portmanto-yenileme-sonrasi-01.png",
    beforeAlt:
      "Mersin vestiyer portmanto yenileme oncesi - koyu renkli ve yipranmis giris dolabi",
    afterAlt:
      "Mersin vestiyer portmanto yenileme sonrasi - acik tonlu ve modernlestirilmis vestiyer",
  },
} as const;

export const SERVICE_GALLERY = {
  eyebrow: "Gercek Isler",
  title: "Gercek Oncesi / Sonrasi Galerisi",
  description:
    "Vestiyer ve portmanto yenileme projelerimizden seçilmiş gerçek önce ve sonra görüntüleri.",
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
  "/services/vestiyer-portmanto-yenileme/once-sonra" as const;

function galleryImage(filename: string) {
  return `${SERVICE_GALLERY_IMAGE_BASE}/${filename}`;
}

export const SERVICE_BEFORE_AFTER_GALLERY: ServiceBeforeAfterItem[] = [
  {
    id: 1,
    before: {
      src: galleryImage("vestiyer-portmanto-yenileme-oncesi-01.png"),
      alt: "Mersin vestiyer yenileme oncesi - koyu renkli ve eski gorunumlu vestiyer",
    },
    after: {
      src: galleryImage("vestiyer-portmanto-yenileme-sonrasi-01.png"),
      alt: "Mersin vestiyer yenileme sonrasi - daha acik renkli, duzenli ve modern vestiyer",
    },
    caption:
      "Eski giris dolabi yerinde yuzey hazirligi, boya ve montaj islemleriyle daha ferah bir vestiyer gorunumune donusturuldu.",
  },
  {
    id: 2,
    before: {
      src: galleryImage("vestiyer-portmanto-yenileme-oncesi-02.png"),
      alt: "Mersin portmanto yenileme oncesi - yipranmis kapakli giris dolabi",
    },
    after: {
      src: galleryImage("vestiyer-portmanto-yenileme-sonrasi-02.png"),
      alt: "Mersin portmanto yenileme sonrasi - dengeli renklerle yenilenmis portmanto",
    },
    caption:
      "Kapaklar ve gorunur yuzeyler yenilenerek portmanto daha toplu, temiz ve gunluk kullanima uygun hale getirildi.",
  },
  {
    id: 3,
    before: {
      src: galleryImage("vestiyer-portmanto-yenileme-oncesi-03.png"),
      alt: "Mersin giris dolabi yenileme oncesi - eski model vestiyer ve yipranmis detaylar",
    },
    after: {
      src: galleryImage("vestiyer-portmanto-yenileme-sonrasi-03.png"),
      alt: "Mersin giris dolabi yenileme sonrasi - modern detaylar kazanmis vestiyer",
    },
    caption:
      "Kullanilan aksesuarlar ve kapak yuzeyleri guncellenerek vestiyere daha modern bir cizgi kazandirildi.",
  },
  {
    id: 4,
    before: {
      src: galleryImage("vestiyer-portmanto-yenileme-oncesi-04.png"),
      alt: "Mersin portmanto boyama oncesi - eski ve koyu renkli portmanto gorunumu",
    },
    after: {
      src: galleryImage("vestiyer-portmanto-yenileme-sonrasi-04.png"),
      alt: "Mersin portmanto boyama sonrasi - acik ton ve yenilenmis kullanim alanlari",
    },
    caption:
      "Boyama, duzenleme ve son kontroller sonrasinda giris alaniyla daha uyumlu bir portmanto elde edildi.",
  },
];

export const SERVICE_WORK_STAGES_SECTION = {
  eyebrow: "İş Aşamaları",
  title: "Vestiyer Yenileme Sürecimiz",
  description:
    "Her projede mevcut duruma göre gereken adımları planlayıp işlemleri dikkatli şekilde sırayla uyguluyoruz.",
} as const;

export type ServiceWorkStageIcon =
  | "remove"
  | "sand"
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
  "/services/vestiyer-portmanto-yenileme/is-asamalari" as const;

function stageImage(filename: string) {
  return `${SERVICE_WORK_STAGES_IMAGE_BASE}/${filename}`;
}

export const SERVICE_WORK_STAGES: ServiceWorkStage[] = [
  {
    id: 1,
    title: "Kapakların Sökülmesi",
    description:
      "Vestiyer veya portmanto kapakları ile müdahale edilmesi gereken parçalar dikkatlice sökülür. Bu aşama, yüzey hazırlığı ve gerekli parça değişimleri için sağlam bir başlangıç sağlar.",
    icon: "remove",
    image: {
      src: stageImage("vestiyer-portmanto-kapak-sokme-01.png"),
      alt: "Mersin vestiyer portmanto yenileme - kapaklarin sokulmesi asamasi",
    },
  },
  {
    id: 2,
    title: "Zımparalama",
    description:
      "Eski boya, kirlenmiş yüzey ve pürüzler profesyonel zımparalama ile hazırlanır. Yeni boya veya düzeltme işlemlerinin daha dengeli uygulanması için zemin düzeltilir.",
    icon: "sand",
    image: {
      src: stageImage("vestiyer-portmanto-zimparalama-01.png"),
      alt: "Mersin vestiyer portmanto yenileme - zimparalama asamasi",
    },
  },
  {
    id: 3,
    title: "Boyama ve Yüzey Yenileme",
    description:
      "Seçilen renge göre kapak ve görünür yüzeylerde boyama uygulanır. Hedef, giriş alanına daha temiz, modern ve evinizle uyumlu bir görünüm kazandırmaktır.",
    icon: "paint",
    image: {
      src: stageImage("vestiyer-portmanto-boyama-01.png"),
      alt: "Mersin vestiyer portmanto yenileme - boyama asamasi",
    },
  },
  {
    id: 4,
    title: "Menteşe Değişimi ve Ayar",
    description:
      "Gevşemiş, ses yapan veya kapağı sarkıtan menteşeler ihtiyaca göre yenilenir. Kapak hiza ayarları yapılarak daha düzgün açılıp kapanması sağlanır.",
    icon: "hinge",
    image: {
      src: stageImage("vestiyer-portmanto-mentese-degisimi-01.png"),
      alt: "Mersin vestiyer portmanto yenileme - mentese degisimi asamasi",
    },
  },
  {
    id: 5,
    title: "Montaj ve Son Kontroller",
    description:
      "Yenilenen kapaklar ve aksesuarlar yeniden monte edilir. Kullanım rahatlığı, hiza, açılış-kapanış ve genel görünüm teslim öncesi son kez kontrol edilir.",
    icon: "assembly",
    image: {
      src: stageImage("vestiyer-portmanto-montaj-01.png"),
      alt: "Mersin vestiyer portmanto yenileme - montaj ve son kontrol asamasi",
    },
  },
];

export const SERVICE_OPERATIONS_SECTION = {
  eyebrow: "Hizmet Kapsamı",
  title: "Hangi İşlemleri Yapıyoruz?",
  description:
    "Vestiyer ve portmanto yenileme sürecinde ihtiyaca göre tek tek veya birlikte planlanabilen başlıca işlemler bunlardır.",
} as const;

export type ServiceOperationIcon =
  | "door"
  | "paint"
  | "hinge"
  | "handle"
  | "repair"
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
    title: "Kapak Boyama",
    description:
      "Yıpranmış veya rengi eskiyen kapaklar uygun yüzey hazırlığı sonrasında yeniden boyanarak daha temiz ve güncel bir görünüme kavuşturulur.",
    icon: "paint",
  },
  {
    id: 2,
    title: "Kapak Sökme ve Yeniden Takma",
    description:
      "Kapaklar zarar vermeden sökülür, gerekli işlemler tamamlandıktan sonra doğru hiza ile yeniden monte edilir.",
    icon: "door",
  },
  {
    id: 3,
    title: "Menteşe Değişimi",
    description:
      "Sarkan veya zor kapanan kapaklarda eski menteşeler yenilenir, kapak ayarları yapılarak kullanım kolaylaştırılır.",
    icon: "hinge",
  },
  {
    id: 4,
    title: "Kulp Değişimi",
    description:
      "Eski, kırık veya görünümü zayıf kulplar yeni modellerle değiştirilerek vestiyere daha düzenli bir detay kazandırılır.",
    icon: "handle",
  },
  {
    id: 5,
    title: "Gövde ve Yüzey Düzenleme",
    description:
      "Kullanımdan kaynaklı küçük sorunlar, gevşemeler veya göze batan detaylar gerekli olduğu kadar düzeltilir.",
    icon: "repair",
  },
  {
    id: 6,
    title: "Yerinde Montaj",
    description:
      "Tüm işlemler tamamlandıktan sonra portmanto veya vestiyer adresinizde son kontrollerle birlikte teslim edilir.",
    icon: "assembly",
  },
];

export const SERVICE_COMPARISON = {
  eyebrow: "Karşılaştırma",
  title: "Sıfırdan Yaptırmak mı, Yenilemek mi?",
  description:
    "Mevcut vestiyer veya portmantonun iskeleti sağlamsa yenileme çoğu zaman daha pratik bir seçenek olabilir. Ama her dolap için aynı karar doğru değildir.",
  renovationLabel: "Yenileme",
  newLabel: "Sıfırdan Yaptırma",
  rows: [
    {
      aspect: "Bütçe",
      renovation:
        "Genellikle daha ulaşılabilir olur; mevcut gövde korunur ve ağırlık kapak, boya, aksesuar ve ayar işlerine verilir.",
      newOption:
        "Komple yeni üretim, malzeme ve kurulum gerektirdiği için daha yüksek bütçe gerektirebilir.",
    },
    {
      aspect: "Süreç",
      renovation:
        "Yerinde planlanır ve çoğu projede daha kısa sürer; giriş alanınızı uzun süre devre dışı bırakmaz.",
      newOption:
        "Ölçü, üretim ve montaj süreci daha kapsamlı olabilir; bekleme ve kurulum süresi uzayabilir.",
    },
    {
      aspect: "Tadilat Etkisi",
      renovation:
        "Evde daha sınırlı müdahale ile ilerlenir. Mevcut düzen büyük oranda korunur.",
      newOption:
        "Eski dolabın tamamen kaldırılması ve yeni ölçüye göre yeniden kurulum gerekebilir.",
    },
    {
      aspect: "Ne Zaman Uygun?",
      renovation:
        "Gövde sağlam, görünüm eski veya aksesuarlar yıpranmışsa yenileme mantıklı olabilir.",
      newOption:
        "Taşıması zayıflamış, ölçüleri yetersiz veya yapısal olarak problemli dolaplarda sıfırdan yaptırma daha doğru olabilir.",
    },
  ],
  note: "Fotoğraflar veya yerinde inceleme ile hangi seçeneğin daha mantıklı olduğunu baskı kurmadan açıkça paylaşıyoruz.",
} as const;

export const SERVICE_PRICING_FACTORS = {
  eyebrow: "Fiyatlandırma",
  title: "Fiyatı Etkileyen Faktörler",
  description:
    "Vestiyer ve portmanto yenilemede net fiyat; dolabın ölçüsü, kapak durumu ve uygulanacak işlerin kapsamıyla birlikte belirlenir.",
  factors: [
    {
      title: "Dolabın ölçüsü ve parça sayısı",
      description:
        "Vestiyerin genel büyüklüğü, kapak sayısı ve raf düzeni toplam işçiliği doğrudan etkiler.",
    },
    {
      title: "Boyanacak yüzey miktarı",
      description:
        "Kapak, yan panel veya görünür yüzeylerin ne kadarının yenileneceği fiyat aralığını değiştirir.",
    },
    {
      title: "Menteşe ve kulp ihtiyacı",
      description:
        "Değişecek menteşe, kulp ve bağlantı parçalarının adedi toplam maliyete yansır.",
    },
    {
      title: "Mevcut durum",
      description:
        "Sadece kozmetik yenileme ile daha detaylı düzeltme gerektiren dolapların iş kapsamı aynı olmaz.",
    },
    {
      title: "Montaj ve ayar süresi",
      description:
        "Kapak ayarı, yeniden montaj ve son düzenleme için gereken süre proje bazında değişir.",
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
    "Vestiyer veya portmantonuzun birkaç fotoğrafını WhatsApp üzerinden gönderin; uygun işlemler ve ön bilgi hakkında hızlı geri dönüş alın.",
} as const;

export const SERVICE_TRUST = {
  eyebrow: "Güven",
  title: "Erdoğan Usta ile Yerinde Yenileme",
  description:
    "Vestiyer ve portmanto yenilemede ölçüye uygun, ihtiyaca göre planlanan ve yerinde uygulanan bir çalışma modeliyle ilerliyoruz.",
  cards: [
    { title: "40+ Yıl Tecrübe" },
    { title: "Ustalik Belgeli Hizmet" },
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
    "Belge görselinde daha önce projede kullanılan güvenli sertifika görselini tercih ediyoruz. Yerinde çalışırken dolabınızın durumuna göre gereksiz iş önermez, uygun olan işlemleri net şekilde açıklarız.",
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
    "Vestiyer, portmanto ve benzer mobilya yenileme hizmeti alan müşterilerimizden seçilmiş yorumlar.",
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
    name: "Sila Sayili",
    text: "Dolabım yapılmıştı, işçilik çok iyi. Tavsiye ederim.",
  },
  {
    id: 6,
    name: "Sinem Sayili",
    text: "Evimin tüm mobilyalarını yaptılar. Hepsinden çok memnunum. İstediğim şekilde sağlam ve işçilikleri çok güzeldi.",
  },
];

export type ServiceFaqItem = {
  question: string;
  answer: string;
};

export const SERVICE_FAQS: ServiceFaqItem[] = [
  {
    question: "Vestiyer ve portmanto yenileme yerinde mi yapiliyor?",
    answer:
      "Evet. Uygun olan projelerde vestiyer ve portmanto yenileme işlemlerini adresinizde, yani yerinde planlayıp uyguluyoruz. Yapılacak işlerin kapsamını önce görüp buna göre bilgi veriyoruz.",
  },
  {
    question: "Hangi parçalar değişebilir?",
    answer:
      "Kapaklar, menteşeler, kulplar ve gerekli olduğunda bazı bağlantı parçaları değiştirilebilir. Hangi değişimlerin gerekli olduğunu mevcut duruma göre belirliyoruz.",
  },
  {
    question: "Eski vestiyer boyanabilir mi?",
    answer:
      "Yüzey yapısı uygunsa evet. Zımparalama ve uygun hazırlık sonrasında vestiyer veya portmanto kapakları yeniden boyanabilir. Her dolap için önce uygunluk kontrolü yapıyoruz.",
  },
  {
    question: "Yeni dolap yaptırmadan yenilemek mantıklı mı?",
    answer:
      "Gövde yapısı sağlamsa çoğu zaman mantıklı olabilir. Boya, kapak ayarı, kulp ve menteşe yenilemeleriyle mevcut dolabı daha kullanışlı ve güncel hale getirmek mümkündür.",
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
      "Süre; dolabın büyüklüğüne, boyanacak yüzeylere ve değişecek parçalara göre değişir. Fotoğraflar veya keşif sonrasında daha net bir zaman aralığı paylaşıyoruz.",
  },
];

export const SERVICE_WHATSAPP_CTA = {
  eyebrow: "WhatsApp Desteği",
  title: "Vestiyer veya Portmantonuz İçin Ön Bilgi Alın",
  description:
    "Fotoğraf göndererek boyama, kapak ayarı, menteşe değişimi ve yenileme seçenekleri hakkında hızlı ön değerlendirme alabilirsiniz.",
  note:
    "Google Ads etiketi ve mevcut WhatsApp dönüşüm takibi korunarak çalışır.",
} as const;
