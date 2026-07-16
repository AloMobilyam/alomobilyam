import { BUSINESS, CANONICAL_SITE_URL } from "@/lib/site";

export const SERVICE_SLUG = "mersin-kapi-onarim";

export const SERVICE_PATH = `/hizmetler/${SERVICE_SLUG}` as const;

export const SERVICE_URL = `${CANONICAL_SITE_URL}${SERVICE_PATH}`;

export const SERVICE_TITLE = "Mersin Kapı Onarım";

export const SERVICE_METADATA = {
  title:
    "Mersin Kapı Onarım | Amerikan Kapı Tamiri ve Yerinde Boyama — Alo Mobilya",
  description:
    "Mersin genelinde yerinde kapı onarım. Amerikan kapı, iç oda kapısı ve mobilya kapılarında kırık, çatlak, menteşe, kol/kilit, macun, zımpara ve boyama işlemleri.",
  keywords: [
    "mersin kapı onarım",
    "mersin amerikan kapı tamiri",
    "kapı tamiri mersin",
    "kapı menteşe onarımı",
    "kapı kolu ve kilit onarımı",
    "kapı boyama ve yüzey düzeltme",
    "kapı macun ve zımpara işlemi",
    "yerinde kapı tamiri",
    "amerikan kapı boyama mersin",
    "iç oda kapısı onarım",
  ],
  ogImage: {
    url: "/services/kapi-onarim/once-sonra/kapi-onarim-amerikan-kapi-sonrasi-01.png",
    alt: "Mersin kapı onarım sonrası - yenilenmiş Amerikan kapı",
  },
} as const;

export const SERVICE_WHATSAPP_MESSAGE =
  "Merhaba, Mersin kapı onarım hizmeti hakkında bilgi almak istiyorum.";

export const SERVICE_TESTIMONIALS_WHATSAPP_MESSAGE =
  "Merhaba, kapı onarım için fotoğraf göndermek ve ön bilgi almak istiyorum.";

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
  h1: "Mersin Kapı Onarım",
  h1Highlight: "Amerikan Kapı Tamiri ve Yerinde Boyama",
  paragraphs: [
    "Kırık, çatlak, yıpranmış veya kapanma sorunu yaşayan kapılarınızı yerinde onarıyoruz. Menteşe kontrolü, kapı kolu/kilit onarımı, macun, zımpara, boya ve yüzey düzeltme işlemleriyle kapınızı yeniden temiz ve kullanışlı hale getiriyoruz.",
    "Amerikan kapı, iç oda kapısı ve mobilya kapılarında; sürtme, kapanmama, boya deformasyonu ve yüzey yıpranması için Mersin genelinde yerinde kapı tamiri sunuyoruz.",
  ],
  trustItems: [
    "40+ yıllık tecrübe",
    "Ustalık belgeli",
    "Yerinde servis",
    "Fotoğrafla ön değerlendirme",
  ],
  showcase: {
    title: "Kapı Onarım",
    before:
      "/services/kapi-onarim/once-sonra/kapi-onarim-amerikan-kapi-oncesi-01.png",
    after:
      "/services/kapi-onarim/once-sonra/kapi-onarim-amerikan-kapi-sonrasi-01.png",
    beforeAlt:
      "Mersin kapı onarım öncesi - yıpranmış ve hasarlı Amerikan kapı",
    afterAlt:
      "Mersin kapı onarım sonrası - boyanmış ve yenilenmiş Amerikan kapı",
  },
} as const;

export const SERVICE_GALLERY = {
  eyebrow: "Gerçek İşler",
  title: "Gerçek Öncesi / Sonrası Galerisi",
  description:
    "Amerikan kapı onarım projelerimizden seçilmiş gerçek önce ve sonra görüntüleri.",
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

const SERVICE_GALLERY_IMAGE_BASE = "/services/kapi-onarim/once-sonra" as const;

function galleryImage(filename: string) {
  return `${SERVICE_GALLERY_IMAGE_BASE}/${filename}`;
}

export const SERVICE_BEFORE_AFTER_GALLERY: ServiceBeforeAfterItem[] = [
  {
    id: 1,
    before: {
      src: galleryImage("kapi-onarim-amerikan-kapi-oncesi-01.png"),
      alt: "Mersin Amerikan kapı onarım öncesi 01 - yıpranmış yüzeyli kapı",
    },
    after: {
      src: galleryImage("kapi-onarim-amerikan-kapi-sonrasi-01.png"),
      alt: "Mersin Amerikan kapı onarım sonrası 01 - yenilenmiş ve boyanmış kapı",
    },
    caption:
      "Yıpranmış Amerikan kapıda macun, zımpara ve boyama ile yüzey toparlanarak temiz bir görünüm elde edildi.",
  },
  {
    id: 2,
    before: {
      src: galleryImage("kapi-onarim-amerikan-kapi-oncesi-02.png"),
      alt: "Mersin Amerikan kapı onarım öncesi 02 - deformasyonlu kapı yüzeyi",
    },
    after: {
      src: galleryImage("kapi-onarim-amerikan-kapi-sonrasi-02.png"),
      alt: "Mersin Amerikan kapı onarım sonrası 02 - düzeltilmiş kapı yüzeyi",
    },
    caption:
      "Boya deformasyonu ve yüzey hasarı giderilerek kapı yeniden düzgün ve kullanışlı hale getirildi.",
  },
  {
    id: 3,
    before: {
      src: galleryImage("kapi-onarim-amerikan-kapi-oncesi-03.png"),
      alt: "Mersin Amerikan kapı onarım öncesi 03 - hasarlı ve eski görünümlü kapı",
    },
    after: {
      src: galleryImage("kapi-onarim-amerikan-kapi-sonrasi-03.png"),
      alt: "Mersin Amerikan kapı onarım sonrası 03 - boyalı ve temiz Amerikan kapı",
    },
    caption:
      "Yerinde kapı boyama ve yüzey düzeltme ile Amerikan kapı hem görünüm hem kullanım açısından yenilendi.",
  },
];

export const SERVICE_WORK_STAGES_SECTION = {
  eyebrow: "İş Aşamaları",
  title: "Kapı Onarım Sürecimiz",
  description:
    "Her kapıda hasarın türüne göre gereken adımları planlayıp menteşe kontrolünden boyamaya kadar işlemleri sırayla uyguluyoruz.",
} as const;

export type ServiceWorkStageIcon =
  | "hinge"
  | "lock"
  | "fill"
  | "sand"
  | "paint"
  | "finish";

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
  "/services/kapi-onarim/is-asamalari" as const;

function stageImage(filename: string) {
  return `${SERVICE_WORK_STAGES_IMAGE_BASE}/${filename}`;
}

export const SERVICE_WORK_STAGES: ServiceWorkStage[] = [
  {
    id: 1,
    title: "Menteşe Kontrolü",
    description:
      "Kapının açılıp kapanması, sürtme ve sarkma kontrol edilir. Gevşek veya sorunlu menteşeler tespit edilerek onarım planı netleştirilir.",
    icon: "hinge",
    image: {
      src: stageImage("kapi-onarim-kapi-mentese-kontrol-01.png"),
      alt: "Mersin kapı onarım - menteşe kontrolü aşaması",
    },
  },
  {
    id: 2,
    title: "Kapı Kolu ve Kilit Onarımı",
    description:
      "Tutmayan, sıkışan veya bozulmuş kapı kolları ve kilit mekanizmaları kontrol edilir; gerekli onarım veya ayar uygulanır.",
    icon: "lock",
    image: {
      src: stageImage("kapi-onarim-kapi-kol-kilit-onarimi-01.png"),
      alt: "Mersin kapı onarım - kapı kolu ve kilit onarımı",
    },
  },
  {
    id: 3,
    title: "Macun İşlemi",
    description:
      "Çatlak, kırık ve yüzey boşlukları macun ile doldurulur. Sonraki zımpara ve boyanın düzgün oturması için zemin hazırlanır.",
    icon: "fill",
    image: {
      src: stageImage("kapi-onarim-kapi-macun-islemi-01.png"),
      alt: "Mersin kapı onarım - macun işlemi aşaması",
    },
  },
  {
    id: 4,
    title: "Zımparalama",
    description:
      "Macunlu ve yıpranmış yüzeyler profesyonel zımparalama ile dengelenir. Boyanın daha temiz tutunması için pürüzler giderilir.",
    icon: "sand",
    image: {
      src: stageImage("kapi-onarim-kapi-zimparalama-01.png"),
      alt: "Mersin kapı onarım - zımparalama aşaması",
    },
  },
  {
    id: 5,
    title: "Kapı Boyama",
    description:
      "Hazırlanan yüzeyde kapı boyama uygulanır. Amerikan kapı ve iç oda kapılarında tutarlı, temiz bir görünüm hedeflenir.",
    icon: "paint",
    image: {
      src: stageImage("kapi-onarim-kapi-boyama-01.png"),
      alt: "Mersin kapı onarım - kapı boyama aşaması 01",
    },
  },
  {
    id: 6,
    title: "Yüzey Düzeltme ve Son Kontrol",
    description:
      "Boya sonrası yüzey düzeltmesi yapılır; menteşe, kol/kilit ve kapanış son kez kontrol edilerek kapı kullanıma hazır hale getirilir.",
    icon: "finish",
    image: {
      src: stageImage("kapi-onarim-kapi-boyama-02.png"),
      alt: "Mersin kapı onarım - yüzey düzeltme ve boyama aşaması 02",
    },
  },
];

export const SERVICE_PROBLEMS_SECTION = {
  eyebrow: "Uygunluk",
  title: "Hangi Kapı Sorunlarını Çözüyoruz?",
  description:
    "Amerikan kapı, iç oda kapısı ve mobilya kapılarında sık görülen yapısal ve yüzey sorunlarında yerinde çözüm üretiyoruz.",
} as const;

export type ServiceProblemIcon =
  | "crack"
  | "paint"
  | "lock"
  | "hinge"
  | "rub"
  | "door"
  | "room"
  | "cabinet";

export type ServiceProblem = {
  id: number;
  title: string;
  description: string;
  icon: ServiceProblemIcon;
};

export const SERVICE_PROBLEMS: ServiceProblem[] = [
  {
    id: 1,
    title: "Kırık ve Çatlak",
    description:
      "Kapı yüzeyindeki kırık, çatlak ve ezilmeler macun ve yüzey düzeltme ile onarılarak kapı yeniden toparlanır.",
    icon: "crack",
  },
  {
    id: 2,
    title: "Boya Deformasyonu",
    description:
      "Soyulmuş, solmuş veya bozulmuş boya yüzeyleri zımpara ve boyama ile düzeltilerek temiz bir görünüm kazandırılır.",
    icon: "paint",
  },
  {
    id: 3,
    title: "Kapı Kolu ve Kilit Sorunları",
    description:
      "Tutmayan, sıkışan veya arızalı kapı kolları ve kilitlerde onarım veya ayar ile kullanım rahatlığı sağlanır.",
    icon: "lock",
  },
  {
    id: 4,
    title: "Menteşe Gevşemesi",
    description:
      "Gevşemiş menteşelerden kaynaklanan sarkma ve kapanma sorunlarında menteşe kontrolü ve onarımı yapılır.",
    icon: "hinge",
  },
  {
    id: 5,
    title: "Kapı Sürtmesi ve Kapanmama",
    description:
      "Sürten, zor kapanan veya hizasız kapılarda menteşe ayarı ve yerinde müdahale ile düzgün kapanış hedeflenir.",
    icon: "rub",
  },
  {
    id: 6,
    title: "Amerikan Kapı Tamiri",
    description:
      "Amerikan kapılarda yüzey yıpranması, boya hasarı ve mekanik sorunlar için yerinde tamir ve boyama uygulanır.",
    icon: "door",
  },
  {
    id: 7,
    title: "İç Oda Kapısı Onarımı",
    description:
      "Yatak odası, salon ve diğer iç oda kapılarında kırık, çatlak ve kapanma sorunları giderilir.",
    icon: "room",
  },
  {
    id: 8,
    title: "Mobilya Kapısı Onarımı",
    description:
      "Dolap ve mobilya kapılarındaki kırık, çatlak ve menteşe kaynaklı sorunlarda yerinde onarım planlanır.",
    icon: "cabinet",
  },
];

export const SERVICE_OPERATIONS_SECTION = {
  eyebrow: "Hizmet Kapsamı",
  title: "Kapı Onarımda Yapılan İşlemler",
  description:
    "Kapı onarım sürecinde ihtiyaca göre tek tek veya birlikte planlanabilen başlıca işlemler bunlardır.",
} as const;

export type ServiceOperationIcon =
  | "fill"
  | "sand"
  | "paint"
  | "hinge"
  | "lock"
  | "finish"
  | "door"
  | "onsite";

export type ServiceOperation = {
  id: number;
  title: string;
  description: string;
  icon: ServiceOperationIcon;
};

export const SERVICE_OPERATIONS: ServiceOperation[] = [
  {
    id: 1,
    title: "Macun İşlemi",
    description:
      "Çatlak ve yüzey boşlukları macun ile doldurulur; boya öncesi düzgün bir zemin hazırlanır.",
    icon: "fill",
  },
  {
    id: 2,
    title: "Zımparalama",
    description:
      "Yıpranmış ve macunlanmış yüzeyler zımparalanarak boyanın daha dengeli tutunması sağlanır.",
    icon: "sand",
  },
  {
    id: 3,
    title: "Kapı Boyama",
    description:
      "Amerikan kapı ve iç oda kapılarında yerinde boyama ile yüzey yenilenir, temiz bir görünüm hedeflenir.",
    icon: "paint",
  },
  {
    id: 4,
    title: "Menteşe Kontrolü ve Onarımı",
    description:
      "Gevşek menteşeler kontrol edilir; sarkma, sürtme ve kapanmama sorunları giderilir.",
    icon: "hinge",
  },
  {
    id: 5,
    title: "Kapı Kolu ve Kilit Onarımı",
    description:
      "Arızalı veya sıkışan kapı kolları ve kilit mekanizmaları onarılarak kullanım kolaylaştırılır.",
    icon: "lock",
  },
  {
    id: 6,
    title: "Yüzey Düzeltme",
    description:
      "Boya deformasyonu, çizik ve yıpranma izleri uygun işlemlerle azaltılarak yüzey toparlanır.",
    icon: "finish",
  },
  {
    id: 7,
    title: "Kapı Hiza ve Kapanış Ayarı",
    description:
      "Kapının düzgün açılıp kapanması için hiza, boşluk ve menteşe ayarı yapılır.",
    icon: "door",
  },
  {
    id: 8,
    title: "Yerinde Kapı Tamiri",
    description:
      "Uygun projelerde tüm onarım adımları adresinizde planlanır ve yerinde tamamlanır.",
    icon: "onsite",
  },
];

export const SERVICE_PRICING_FACTORS = {
  eyebrow: "Fiyatlandırma",
  title: "Fiyatı Etkileyen Faktörler",
  description:
    "Kapı onarımda net fiyat; hasarın türü, uygulanacak işlemler ve kapı tipiyle birlikte belirlenir.",
  factors: [
    {
      title: "Hasarın türü ve boyutu",
      description:
        "Kırık, çatlak, boya deformasyonu veya kapanma sorunlarının kapsamı toplam işçiliği doğrudan etkiler.",
    },
    {
      title: "Kapı tipi",
      description:
        "Amerikan kapı, iç oda kapısı veya mobilya kapısı olması müdahale alanını ve süreyi değiştirir.",
    },
    {
      title: "Yüzey işlemleri",
      description:
        "Macun, zımpara, boyama ve yüzey düzeltme ihtiyacı proje bedelini ve süresini etkiler.",
    },
    {
      title: "Mekanik parçalar",
      description:
        "Menteşe, kapı kolu veya kilit onarımı gerekip gerekmediği maliyete yansır.",
    },
    {
      title: "İşlem kapsamı",
      description:
        "Tek yüz boyama, çift yüz yenileme veya yalnızca mekanik onarım gibi seçenekler bedeli değiştirir.",
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
    "Kapınızın birkaç fotoğrafını WhatsApp üzerinden gönderin; onarım seçenekleri ve ön bilgi hakkında hızlı geri dönüş alın.",
} as const;

export const SERVICE_TRUST = {
  eyebrow: "Güven",
  title: "Erdoğan Usta ile Yerinde Kapı Onarım",
  description:
    "Kapı onarımda ihtiyaca göre planlanan, gereksiz işlem önermeyen ve yerinde uygulanan bir çalışma modeliyle ilerliyoruz.",
  cards: [
    { title: "40+ Yıl Tecrübe" },
    { title: "Ustalık Belgeli Hizmet" },
    { title: "Yerinde Servis" },
    { title: "Sağlam İşçilik" },
  ],
  certificate: {
    src: "/certificates/ustalik-belgesi.png",
    alt: "Erdoğan Kuşçu ustalık belgesi - Alo Mobilya",
    width: 1448,
    height: 1086,
  },
  text:
    "Güven bölümünde projede kullanılan güvenli ustalık belgesi görselini paylaşıyoruz. Yerinde çalışırken kapınızın durumuna göre yalnızca gereken onarım, boyama ve mekanik düzeltme adımlarını açıkça anlatırız.",
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
    "Kapı onarım ve mobilya tamir hizmeti alan müşterilerimizden seçilmiş yorumlar.",
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
    question: "Kapı onarım yerinde mi yapılıyor?",
    answer:
      "Evet. Uygun olan projelerde kapı onarım, menteşe kontrolü, kol/kilit onarımı, macun, zımpara ve boyama işlemlerini adresinizde, yani yerinde planlayıp uyguluyoruz.",
  },
  {
    question: "Amerikan kapı tamiri yapıyor musunuz?",
    answer:
      "Evet. Mersin Amerikan kapı tamiri kapsamında yüzey yıpranması, boya deformasyonu, çatlak ve kapanma sorunlarında yerinde onarım ve boyama sunuyoruz.",
  },
  {
    question: "Kapı menteşe ve kilit sorunları çözülür mü?",
    answer:
      "Evet. Gevşemiş menteşeler, sürten kapılar, tutmayan kapı kolları ve kilit sorunlarında kontrol, ayar ve onarım seçenekleri değerlendirilir.",
  },
  {
    question: "Kapı boyama ve yüzey düzeltme dahil mi?",
    answer:
      "Hasara göre macun, zımpara, boyama ve yüzey düzeltme işlemleri planlanabilir. Kapsam fotoğraflar veya yerinde inceleme ile netleştirilir.",
  },
  {
    question: "Mersin'in hangi bölgelerine geliyorsunuz?",
    answer:
      "Mersin genelinde randevu ile hizmet veriyoruz. Yenişehir, Mezitli, Toroslar, Akdeniz ve çevre bölgelerde yerinde kapı tamiri sunuyoruz.",
  },
  {
    question: "Keşif ücretli mi?",
    answer:
      "Fotoğraf veya video ile ön değerlendirme ücretsizdir. Yerinde keşif ve ölçü alma taleplerinde Mersin şehir içi 500 TL keşif ücreti uygulanır. İş onaylandığında bu tutar toplam iş bedelinden düşülür.",
  },
  {
    question: "Ne kadar sürede tamamlanır?",
    answer:
      "Süre; hasarın türüne, boyama ihtiyacına ve mekanik onarım kapsamına göre değişir. Fotoğraflar veya keşif sonrasında daha net bir zaman aralığı paylaşıyoruz.",
  },
];

export const SERVICE_WHATSAPP_CTA = {
  eyebrow: "WhatsApp Desteği",
  title: "Kapı Onarım İçin Ön Bilgi Alın",
  description:
    "Kapı fotoğrafı göndererek Amerikan kapı tamiri, boyama, menteşe, kol/kilit ve yüzey düzeltme seçenekleri hakkında hızlı ön değerlendirme alabilirsiniz.",
  note: "Mevcut WhatsApp dönüşüm takibi korunarak çalışır.",
} as const;
