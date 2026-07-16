import { BUSINESS, CANONICAL_SITE_URL } from "@/lib/site";

export const SERVICE_SLUG = "mersin-mobilya-onarim";

export const SERVICE_PATH = `/hizmetler/${SERVICE_SLUG}` as const;

export const SERVICE_URL = `${CANONICAL_SITE_URL}${SERVICE_PATH}`;

export const SERVICE_TITLE = "Mersin Mobilya Onarım";

export const SERVICE_METADATA = {
  title: "Mersin Mobilya Onarım | Yerinde Tamir ve Sağlamlaştırma — Alo Mobilya",
  description:
    "Mersin genelinde yerinde mobilya onarım hizmeti. TV ünitesi, komodin, şifonyer, dolap kapağı, menteşe ve bağlantı parçalarında kırık, çatlak ve yıpranma onarımı.",
  keywords: [
    "mersin mobilya onarım",
    "mersin mobilya tamiri",
    "mobilya onarım mersin",
    "yerinde mobilya tamiri",
    "tv ünitesi onarım",
    "komodin tamiri",
    "şifonyer onarım",
    "menteşe değişimi mersin",
    "dolap kapağı onarım",
    "mobilya boyama rötuş",
  ],
  ogImage: {
    url: "/services/mobilya-onarim/once-sonra/mobilya-onarim-tv-unitesi-sonrasi-01.png",
    alt: "Mersin mobilya onarım sonrası - yenilenmiş TV ünitesi",
  },
} as const;

export const SERVICE_WHATSAPP_MESSAGE =
  "Merhaba, Mersin mobilya onarım hizmeti hakkında bilgi almak istiyorum.";

export const SERVICE_TESTIMONIALS_WHATSAPP_MESSAGE =
  "Merhaba, mobilya onarım için fotoğraf göndermek ve ön bilgi almak istiyorum.";

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
  h1: "Mersin Mobilya Onarım",
  h1Highlight: "Yerinde Tamir ve Sağlamlaştırma",
  paragraphs: [
    "Kırık, çatlak, gevşemiş, yıpranmış veya kullanımı zorlaşmış mobilyalarınızı adresinizde onarıyoruz. TV ünitesi, komodin, şifonyer, dolap kapağı, menteşe ve bağlantı parçalarında güvenilir yerinde servis sunuyoruz.",
    "Yenişehir, Mezitli, Toroslar, Akdeniz ve Mersin genelinde; menteşe değişimi, kapak onarımı, ray ayarı, zımparalama, boya/rötuş, montaj ve yüzey yenileme işlemleriyle mobilyanızı yeniden kullanışlı hale getiriyoruz.",
  ],
  trustItems: [
    "40+ yıllık tecrübe",
    "Ustalık belgeli",
    "Yerinde servis",
    "Fotoğrafla ön değerlendirme",
  ],
  showcase: {
    title: "Mobilya Onarım",
    before: "/services/mobilya-onarim/once-sonra/mobilya-onarim-tv-unitesi-oncesi-01.png",
    after: "/services/mobilya-onarim/once-sonra/mobilya-onarim-tv-unitesi-sonrasi-01.png",
    beforeAlt:
      "Mersin mobilya onarim oncesi - yipranmis ve hasarli TV unitesi",
    afterAlt:
      "Mersin mobilya onarim sonrasi - onarilmis ve yenilenmis TV unitesi",
  },
} as const;

export const SERVICE_GALLERY = {
  eyebrow: "Gerçek İşler",
  title: "Gerçek Öncesi / Sonrası Galerisi",
  description:
    "TV ünitesi, komodin ve şifonyer onarım projelerimizden seçilmiş gerçek önce ve sonra görüntüleri.",
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

const SERVICE_GALLERY_IMAGE_BASE = "/services/mobilya-onarim/once-sonra" as const;

function galleryImage(filename: string) {
  return `${SERVICE_GALLERY_IMAGE_BASE}/${filename}`;
}

export const SERVICE_BEFORE_AFTER_GALLERY: ServiceBeforeAfterItem[] = [
  {
    id: 1,
    before: {
      src: galleryImage("mobilya-onarim-tv-unitesi-oncesi-01.png"),
      alt: "Mersin TV unitesi onarim oncesi - yipranmis yuzeyli ve hasarli unitesi",
    },
    after: {
      src: galleryImage("mobilya-onarim-tv-unitesi-sonrasi-01.png"),
      alt: "Mersin TV unitesi onarim sonrasi - temizlenmis ve yenilenmis unitesi",
    },
    caption:
      "Yıpranmış TV ünitesi zımparalama, boya/rötuş ve sağlamlaştırma ile daha düzenli ve kullanışlı hale getirildi.",
  },
  {
    id: 2,
    before: {
      src: galleryImage("mobilya-onarim-komodin-oncesi-01.png"),
      alt: "Mersin komodin onarim oncesi - eski ve yipranmis komodin",
    },
    after: {
      src: galleryImage("mobilya-onarim-komodin-sonrasi-01.png"),
      alt: "Mersin komodin onarim sonrasi - onarilmis ve boyanmis komodin",
    },
    caption:
      "Komodin yüzey hazırlığı, boyama ve montaj adımlarıyla hem görünüm hem kullanım rahatlığı yenilendi.",
  },
  {
    id: 3,
    before: {
      src: galleryImage("mobilya-onarim-sifonyer-oncesi-01.png"),
      alt: "Mersin sifonyer onarim oncesi - hasarli ve eski gorunumlu sifonyer",
    },
    after: {
      src: galleryImage("mobilya-onarim-sifonyer-sonrasi-01.png"),
      alt: "Mersin sifonyer onarim sonrasi - yenilenmis ve saglamlastirilmis sifonyer",
    },
    caption:
      "Şifonyer onarımında zımparalama, boya ve montaj ile gövde sağlamlığı korunarak görünüm güncellendi.",
  },
];

export const SERVICE_WORK_STAGES_SECTION = {
  eyebrow: "İş Aşamaları",
  title: "Mobilya Onarım Sürecimiz",
  description:
    "Her mobilyada hasarın türüne göre gereken adımları planlayıp işlemleri dikkatli şekilde sırayla uyguluyoruz.",
} as const;

export type ServiceWorkStageIcon =
  | "repair"
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
  "/services/mobilya-onarim/is-asamalari" as const;

function stageImage(filename: string) {
  return `${SERVICE_WORK_STAGES_IMAGE_BASE}/${filename}`;
}

export const SERVICE_WORK_STAGES: ServiceWorkStage[] = [
  {
    id: 1,
    title: "Kapak Onarımı",
    description:
      "Kırık, çatlak veya sarkan kapaklar dikkatlice incelenir. Gerekli düzeltme ve parça müdahaleleriyle kapak tekrar düzgün çalışacak hale getirilir.",
    icon: "repair",
    image: {
      src: stageImage("mobilya-onarim-kapak-onarimi-01.png"),
      alt: "Mersin mobilya onarim - kapak onarimi asamasi",
    },
  },
  {
    id: 2,
    title: "Zımparalama",
    description:
      "Yıpranmış yüzeyler, eski boya kalıntıları ve pürüzler profesyonel zımparalama ile hazırlanır. Sonraki boya veya rötuşun daha dengeli tutunması sağlanır.",
    icon: "sand",
    image: {
      src: stageImage("mobilya-onarim-tv-unitesi-zimparalama-01.png"),
      alt: "Mersin mobilya onarim - zimparalama asamasi",
    },
  },
  {
    id: 3,
    title: "Boya ve Rötuş",
    description:
      "Hasar gören veya rengi bozulan bölgelerde boya ve rötuş uygulanır. Amaç, mobilyanın genel görünümünü bozmadan temiz ve tutarlı bir yüzey elde etmektir.",
    icon: "paint",
    image: {
      src: stageImage("mobilya-onarim-sifonyer-boyama-01.png"),
      alt: "Mersin mobilya onarim - boya ve rotus asamasi",
    },
  },
  {
    id: 4,
    title: "Menteşe Değişimi",
    description:
      "Gevşemiş, ses yapan veya kapağı sarkıtan menteşeler ihtiyaca göre yenilenir. Kapak hiza ayarları yapılarak açılıp kapanma kolaylaştırılır.",
    icon: "hinge",
    image: {
      src: stageImage("mobilya-onarim-mentese-degisimi-01.png"),
      alt: "Mersin mobilya onarim - mentese degisimi asamasi",
    },
  },
  {
    id: 5,
    title: "Montaj ve Sağlamlaştırma",
    description:
      "Onarılan parçalar yeniden monte edilir; bağlantılar sıkılaştırılır. Kullanım rahatlığı, hiza ve genel sağlamlık teslim öncesi son kez kontrol edilir.",
    icon: "assembly",
    image: {
      src: stageImage("mobilya-onarim-komodin-montaj-01.png"),
      alt: "Mersin mobilya onarim - montaj ve saglamlastirma asamasi",
    },
  },
];

export const SERVICE_OPERATIONS_SECTION = {
  eyebrow: "Hizmet Kapsamı",
  title: "Hangi İşlemleri Yapıyoruz?",
  description:
    "Mobilya onarım sürecinde ihtiyaca göre tek tek veya birlikte planlanabilen başlıca işlemler bunlardır.",
} as const;

export type ServiceOperationIcon =
  | "door"
  | "paint"
  | "hinge"
  | "rail"
  | "repair"
  | "assembly"
  | "sand"
  | "strengthen";

export type ServiceOperation = {
  id: number;
  title: string;
  description: string;
  icon: ServiceOperationIcon;
};

export const SERVICE_OPERATIONS: ServiceOperation[] = [
  {
    id: 1,
    title: "Menteşe Değişimi",
    description:
      "Sarkan, ses yapan veya zor kapanan kapaklarda eski menteşeler yenilenir; ayar yapılarak kullanım kolaylaştırılır.",
    icon: "hinge",
  },
  {
    id: 2,
    title: "Kapak Onarımı",
    description:
      "Kırık, çatlak veya bozulmuş dolap kapakları onarılarak tekrar düzgün açılıp kapanacak hale getirilir.",
    icon: "door",
  },
  {
    id: 3,
    title: "Ray Ayarı",
    description:
      "Takılan veya düzgün kaymayan çekmece ve dolap rayları ayarlanır; gerektiğinde değişim planlanır.",
    icon: "rail",
  },
  {
    id: 4,
    title: "Zımparalama",
    description:
      "Yüzey hazırlığı için yıpranmış alanlar zımparalanır; boya ve rötuş öncesi zemin dengelenir.",
    icon: "sand",
  },
  {
    id: 5,
    title: "Boya ve Rötuş",
    description:
      "Hasarlı veya soluk bölgelerde boya/rötuş uygulanarak mobilyanın görünümü toparlanır.",
    icon: "paint",
  },
  {
    id: 6,
    title: "Montaj ve Sağlamlaştırma",
    description:
      "Gevşemiş bağlantılar sıkılaştırılır, parçalar yeniden monte edilir ve mobilya günlük kullanıma hazır hale getirilir.",
    icon: "strengthen",
  },
  {
    id: 7,
    title: "Yüzey Yenileme",
    description:
      "Çizik, leke ve yıpranma izleri uygun işlemlerle azaltılarak mobilyaya daha temiz bir yüzey kazandırılır.",
    icon: "repair",
  },
  {
    id: 8,
    title: "Yerinde Montaj",
    description:
      "Tüm onarım adımları tamamlandıktan sonra mobilya adresinizde son kontrollerle birlikte teslim edilir.",
    icon: "assembly",
  },
];

export const SERVICE_COMPARISON = {
  eyebrow: "Karşılaştırma",
  title: "Yeni Mobilya mı, Onarım mı?",
  description:
    "Mobilyanın iskeleti ve ana parçaları sağlamsa onarım çoğu zaman daha ekonomik ve pratik bir seçenek olabilir. Ama her mobilya için aynı karar doğru değildir.",
  renovationLabel: "Onarım",
  newLabel: "Yeni Mobilya",
  rows: [
    {
      aspect: "Bütçe",
      renovation:
        "Mevcut mobilya korunur; ağırlık hasarlı parçalara, menteşe/ray ayarına ve yüzey düzeltmelerine verilir. Genellikle daha ulaşılabilir olur.",
      newOption:
        "Komple yeni ürün, teslimat ve kurulum gerektirdiği için daha yüksek bütçe isteyebilir.",
    },
    {
      aspect: "Süreç",
      renovation:
        "Yerinde planlanır ve çoğu projede daha kısa sürer; mobilyayı uzun süre kullanımsız bırakmaz.",
      newOption:
        "Seçim, sipariş, teslimat ve kurulum süreci daha uzun olabilir.",
    },
    {
      aspect: "Pratiklik",
      renovation:
        "Evde sınırlı müdahale ile ilerlenir. Mevcut düzen büyük oranda korunur.",
      newOption:
        "Eski mobilyanın kaldırılması, yeni ürünün taşınması ve yeniden yerleşim gerekebilir.",
    },
    {
      aspect: "Ne Zaman Uygun?",
      renovation:
        "Gövde sağlam, sorun kapak, menteşe, ray, yüzey veya bağlantılardaysa onarım mantıklı olabilir.",
      newOption:
        "Taşıması zayıflamış, ölçüleri yetersiz veya yapısal olarak bozulmuş mobilyalarda yenisi daha doğru olabilir.",
    },
  ],
  note: "Fotoğraflar veya yerinde inceleme ile hangi seçeneğin daha mantıklı olduğunu baskı kurmadan açıkça paylaşıyoruz.",
} as const;

export const SERVICE_PRICING_FACTORS = {
  eyebrow: "Fiyatlandırma",
  title: "Fiyatı Etkileyen Faktörler",
  description:
    "Mobilya onarımda net fiyat; hasarın türü, parça ihtiyacı ve uygulanacak işlerin kapsamıyla birlikte belirlenir.",
  factors: [
    {
      title: "Hasarın türü ve boyutu",
      description:
        "Kırık, çatlak, gevşeme veya yüzey yıpranmasının kapsamı toplam işçiliği doğrudan etkiler.",
    },
    {
      title: "Parça ve aksesuar ihtiyacı",
      description:
        "Değişecek menteşe, ray, bağlantı parçası veya kapak detaylarının adedi maliyete yansır.",
    },
    {
      title: "Yüzey işlemleri",
      description:
        "Zımparalama, boya/rötuş ve yüzey yenileme ihtiyacı proje süresini ve bedeli değiştirir.",
    },
    {
      title: "Mobilyanın tipi",
      description:
        "TV ünitesi, komodin, şifonyer veya dolap gibi farklı mobilyalarda müdahale alanı aynı olmaz.",
    },
    {
      title: "Montaj ve sağlamlaştırma süresi",
      description:
        "Yeniden montaj, ayar ve son kontroller için gereken süre iş kapsamına göre değişir.",
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
    "Mobilyanızın birkaç fotoğrafını WhatsApp üzerinden gönderin; onarım seçenekleri ve ön bilgi hakkında hızlı geri dönüş alın.",
} as const;

export const SERVICE_TRUST = {
  eyebrow: "Güven",
  title: "Erdoğan Usta ile Yerinde Onarım",
  description:
    "Mobilya onarımda ihtiyaca göre planlanan, gereksiz işlem önermeyen ve yerinde uygulanan bir çalışma modeliyle ilerliyoruz.",
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
    "Belge görselinde daha önce projede kullanılan güvenli sertifika görselini tercih ediyoruz. Yerinde çalışırken mobilyanızın durumuna göre gereksiz iş önermez, uygun olan onarım adımlarını net şekilde açıklarız.",
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
    "Mobilya onarım ve tamir hizmeti alan müşterilerimizden seçilmiş yorumlar.",
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
    question: "Mobilya onarım yerinde mi yapılıyor?",
    answer:
      "Evet. Uygun olan projelerde mobilya onarım işlemlerini adresinizde, yani yerinde planlayıp uyguluyoruz. Yapılacak işlerin kapsamını önce görüp buna göre bilgi veriyoruz.",
  },
  {
    question: "Hangi mobilyalar onarılabilir?",
    answer:
      "TV ünitesi, komodin, şifonyer, dolap kapakları ve benzer mobilyalarda kırık, çatlak, gevşeme, menteşe ve ray sorunları için onarım planlanabilir. Uygunluk mevcut duruma göre değerlendirilir.",
  },
  {
    question: "Menteşe ve ray sorunları çözülür mü?",
    answer:
      "Evet. Gevşemiş menteşeler değiştirilebilir, kapak ayarı yapılabilir. Takılan veya düzgün çalışmayan raylarda ayar veya değişim seçenekleri değerlendirilir.",
  },
  {
    question: "Yeni mobilya almak yerine onarmak mantıklı mı?",
    answer:
      "Gövde ve ana yapı sağlamsa çoğu zaman mantıklı olabilir. Onarım ile hem bütçe hem süreç açısından daha pratik bir çözüm elde edilebilir.",
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
      "Süre; hasarın türüne, değişecek parçalara ve yüzey işlemlerine göre değişir. Fotoğraflar veya keşif sonrasında daha net bir zaman aralığı paylaşıyoruz.",
  },
];

export const SERVICE_WHATSAPP_CTA = {
  eyebrow: "WhatsApp Desteği",
  title: "Mobilyanız İçin Ön Bilgi Alın",
  description:
    "Fotoğraf göndererek onarım, menteşe değişimi, kapak düzeltme ve yüzey yenileme seçenekleri hakkında hızlı ön değerlendirme alabilirsiniz.",
  note:
    "Google Ads etiketi ve mevcut WhatsApp dönüşüm takibi korunarak çalışır.",
} as const;
