import { BUSINESS, CANONICAL_SITE_URL } from "@/lib/site";

export const SERVICE_SLUG = "mersin-masa-sandalye-tamiri";

export const SERVICE_PATH = `/hizmetler/${SERVICE_SLUG}` as const;

export const SERVICE_URL = `${CANONICAL_SITE_URL}${SERVICE_PATH}`;

export const SERVICE_TITLE = "Mersin Masa Sandalye Tamiri";

export const SERVICE_METADATA = {
  title:
    "Mersin Masa Sandalye Tamiri | Sallanan Sandalye ve Masa Onarımı — Alo Mobilya",
  description:
    "Mersin masa sandalye tamiri. Sallanan sandalye, kırık masa, gevşek bağlantı ve ayak onarımını yerinde yapıyoruz. Fotoğrafla ön değerlendirme.",
  keywords: [
    "mersin masa sandalye tamiri",
    "mersin sandalye tamiri",
    "mersin masa tamiri",
    "sallanan sandalye tamiri",
    "kırık masa sandalye onarımı",
    "yerinde mobilya tamiri",
    "masa ayak onarımı mersin",
    "sandalye bağlantı güçlendirme",
    "sallanan masa tamiri",
    "masa sandalye vida sıkma",
  ],
  ogImage: {
    url: "/services/masa-sandalye-tamiri/once-sonra/masa-sandalye-tamiri-sonrasi-01.png",
    alt: "Mersin masa sandalye tamiri sonrası - onarılmış masa ve sandalye",
  },
} as const;

export const SERVICE_WHATSAPP_MESSAGE =
  "Merhaba, Mersin masa sandalye tamiri hizmeti hakkında bilgi almak istiyorum.";

export const SERVICE_TESTIMONIALS_WHATSAPP_MESSAGE =
  "Merhaba, masa sandalye tamiri için fotoğraf göndermek ve ön bilgi almak istiyorum.";

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
  h1: "Mersin Masa Sandalye Tamiri",
  h1Highlight: "Sallanan ve Kırık Parçaları Onarıyoruz",
  paragraphs: [
    "Sallanan sandalye, gevşek masa ayağı, kırık sırtlık veya zayıf bağlantıları yerinde tamir ediyoruz. Vida sıkma, ayak onarımı, bağlantı güçlendirme ve sırtlık onarımıyla mobilyanızı yeniden sağlam kullanıma hazırlıyoruz.",
    "Mersin masa tamiri ve Mersin sandalye tamiri kapsamında kırık masa sandalye onarımını adresinizde planlıyoruz. Fotoğraf göndererek hızlı ön değerlendirme alabilirsiniz.",
  ],
  trustItems: [
    "40+ yıllık tecrübe",
    "Ustalık belgeli",
    "Yerinde servis",
    "Fotoğrafla ön değerlendirme",
  ],
  showcase: {
    title: "Masa Sandalye Tamiri",
    before:
      "/services/masa-sandalye-tamiri/once-sonra/masa-sandalye-tamiri-oncesi-01.png",
    after:
      "/services/masa-sandalye-tamiri/once-sonra/masa-sandalye-tamiri-sonrasi-01.png",
    beforeAlt:
      "Mersin masa sandalye tamiri öncesi - sallanan ve hasarlı sandalye",
    afterAlt:
      "Mersin masa sandalye tamiri sonrası - sağlamlaştırılmış sandalye",
  },
} as const;

export const SERVICE_GALLERY = {
  eyebrow: "Gerçek İşler",
  title: "Gerçek Öncesi / Sonrası Galerisi",
  description:
    "Masa ve sandalye tamir projelerimizden seçilmiş gerçek önce ve sonra görüntüleri.",
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
  "/services/masa-sandalye-tamiri/once-sonra" as const;

function galleryImage(filename: string) {
  return `${SERVICE_GALLERY_IMAGE_BASE}/${filename}`;
}

export const SERVICE_BEFORE_AFTER_GALLERY: ServiceBeforeAfterItem[] = [
  {
    id: 1,
    before: {
      src: galleryImage("masa-sandalye-tamiri-oncesi-01.png"),
      alt: "Mersin masa sandalye tamiri öncesi 01 - sallanan ve gevşek sandalye",
    },
    after: {
      src: galleryImage("masa-sandalye-tamiri-sonrasi-01.png"),
      alt: "Mersin masa sandalye tamiri sonrası 01 - güçlendirilmiş ve sağlam sandalye",
    },
    caption:
      "Sallanan sandalyede bağlantılar sıkılaştırılarak kullanım güvenliği ve sağlamlık geri kazandırıldı.",
  },
  {
    id: 2,
    before: {
      src: galleryImage("masa-sandalye-tamiri-oncesi-02.png"),
      alt: "Mersin masa sandalye tamiri öncesi 02 - hasarlı masa veya sandalye yapısı",
    },
    after: {
      src: galleryImage("masa-sandalye-tamiri-sonrasi-02.png"),
      alt: "Mersin masa sandalye tamiri sonrası 02 - onarılmış ve dengeli mobilya",
    },
    caption:
      "Gevşek ayak ve bağlantı noktaları onarılarak masa/sandalye yeniden dengeli hale getirildi.",
  },
  {
    id: 3,
    before: {
      src: galleryImage("masa-sandalye-tamiri-oncesi-03.png"),
      alt: "Mersin masa sandalye tamiri öncesi 03 - kırık veya yıpranmış sandalye",
    },
    after: {
      src: galleryImage("masa-sandalye-tamiri-sonrasi-03.png"),
      alt: "Mersin masa sandalye tamiri sonrası 03 - yenilenmiş ve kullanıma hazır sandalye",
    },
    caption:
      "Kırık masa sandalye onarımıyla yapısal zayıflık giderildi; mobilya günlük kullanıma hazırlandı.",
  },
];

export const SERVICE_WORK_STAGES_SECTION = {
  eyebrow: "İş Aşamaları",
  title: "Masa Sandalye Tamir Sürecimiz",
  description:
    "Her mobilyada sorunun kaynağına göre vida sıkma, ayak onarımı, bağlantı güçlendirme ve sırtlık onarımını planlıyoruz.",
} as const;

export type ServiceWorkStageIcon =
  | "screw"
  | "leg"
  | "joint"
  | "backrest";

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
  "/services/masa-sandalye-tamiri/is-asamalari" as const;

function stageImage(filename: string) {
  return `${SERVICE_WORK_STAGES_IMAGE_BASE}/${filename}`;
}

export const SERVICE_WORK_STAGES: ServiceWorkStage[] = [
  {
    id: 1,
    title: "Vida Sıkma",
    description:
      "Gevşemiş vida ve bağlantı noktaları kontrol edilir. Sallanan masa ve sandalyelerde sıkma işlemiyle ilk sağlamlaştırma sağlanır.",
    icon: "screw",
    image: {
      src: stageImage("masa-sandalye-tamiri-masa-sandalye-vida-sikma-01.png"),
      alt: "Mersin masa sandalye tamiri - vida sıkma aşaması",
    },
  },
  {
    id: 2,
    title: "Sandalye Ayak Onarımı",
    description:
      "Kırık, çatlamış veya oynayan sandalye ayakları onarılır. Denge ve taşıma güvenliği yeniden kurulur.",
    icon: "leg",
    image: {
      src: stageImage("masa-sandalye-tamiri-sandalye-ayak-onarimi-01.png"),
      alt: "Mersin masa sandalye tamiri - sandalye ayak onarımı",
    },
  },
  {
    id: 3,
    title: "Bağlantı Güçlendirme",
    description:
      "Gevşek ek yerleri, birleşim noktaları ve iskelet bağlantıları güçlendirilir. Günlük kullanıma dayanıklı yapı hedeflenir.",
    icon: "joint",
    image: {
      src: stageImage(
        "masa-sandalye-tamiri-sandalye-baglanti-saglamlastirma-01.png",
      ),
      alt: "Mersin masa sandalye tamiri - bağlantı sağlamlaştırma",
    },
  },
  {
    id: 4,
    title: "Sırtlık Onarımı",
    description:
      "Kırık veya sarkan sandalye sırtlıkları onarılır. Oturma konforu ve destek güvenliği geri kazandırılır.",
    icon: "backrest",
    image: {
      src: stageImage("masa-sandalye-tamiri-sandalye-sirtlik-onarimi-01.png"),
      alt: "Mersin masa sandalye tamiri - sandalye sırtlık onarımı",
    },
  },
];

export const SERVICE_DESCRIPTION = {
  eyebrow: "Hizmet Açıklaması",
  title: "Masa Sandalye Tamiri Nedir?",
  description:
    "Masa sandalye tamiri; sallanan, kırık veya gevşek masa ve sandalyelerin yerinde onarılarak yeniden sağlam ve güvenli kullanıma hazırlanmasıdır.",
  paragraphs: [
    "Sallanan sandalye tamiri ve masa ayak onarımında çoğu zaman komple değişim gerekmez. Vida sıkma, bağlantı güçlendirme, ayak ve sırtlık onarımıyla mobilya yeniden kullanılabilir hale gelir.",
    "Mersin masa sandalye tamiri hizmetimizde yerinde mobilya tamiri sunuyoruz. Yemek masası, çalışma masası, sandalye ve taburelerde adresinizde müdahale planlıyoruz.",
    "WhatsApp üzerinden birkaç fotoğraf göndererek ön değerlendirme alabilirsiniz. Hasarın kapsamı netleştikten sonra yerinde servis için randevu oluşturulur.",
  ],
} as const;

export const SERVICE_PROBLEMS_SECTION = {
  eyebrow: "Uygunluk",
  title: "Hangi Sorunları Çözüyoruz?",
  description:
    "Sallanan, kırık veya gevşek masa ve sandalyelerde sık görülen sorunlarda yerinde çözüm üretiyoruz.",
} as const;

export type ServiceProblemIcon =
  | "wobble"
  | "broken"
  | "loose"
  | "leg"
  | "backrest"
  | "table"
  | "chair"
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
    title: "Sallanan Sandalye",
    description:
      "Oturunca salınan sandalyelerde vida sıkma ve bağlantı güçlendirme ile denge geri kazandırılır.",
    icon: "wobble",
  },
  {
    id: 2,
    title: "Kırık Masa / Sandalye",
    description:
      "Kırık masa sandalye onarımında hasarlı bölgeler onarılarak yapısal bütünlük yeniden sağlanır.",
    icon: "broken",
  },
  {
    id: 3,
    title: "Gevşek Bağlantılar",
    description:
      "Gevşemiş ek yerleri ve birleşim noktaları sıkılaştırılarak gıcırtı ve salınma azaltılır.",
    icon: "loose",
  },
  {
    id: 4,
    title: "Kırık veya Oynayan Ayak",
    description:
      "Masa ve sandalye ayaklarında kırık, çatlak veya oynama varsa ayak onarımı uygulanır.",
    icon: "leg",
  },
  {
    id: 5,
    title: "Sırtlık Hasarı",
    description:
      "Kırık, sarkan veya destek vermeyen sırtlıklarda yerinde sırtlık onarımı planlanır.",
    icon: "backrest",
  },
  {
    id: 6,
    title: "Masa Tamiri",
    description:
      "Sallanan masa, gevşek ayak ve zayıf masa iskeleti için Mersin masa tamiri sunuyoruz.",
    icon: "table",
  },
  {
    id: 7,
    title: "Sandalye Tamiri",
    description:
      "Yemek ve çalışma sandalyelerinde sallama, kırık ve bağlantı sorunları giderilir.",
    icon: "chair",
  },
  {
    id: 8,
    title: "Yerinde Mobilya Tamiri",
    description:
      "Uygun projelerde tüm onarım adımları adresinizde, yani yerinde tamamlanır.",
    icon: "onsite",
  },
];

export const SERVICE_PRICING_FACTORS = {
  eyebrow: "Fiyatlandırma",
  title: "Fiyatı Etkileyen Faktörler",
  description:
    "Masa sandalye tamirinde net fiyat; hasarın türü, parça sayısı ve uygulanacak işlemlerle birlikte belirlenir.",
  factors: [
    {
      title: "Hasarın türü ve boyutu",
      description:
        "Sallanma, kırık, çatlak veya gevşek bağlantı kapsamı toplam işçiliği doğrudan etkiler.",
    },
    {
      title: "Parça sayısı",
      description:
        "Tek sandalye, masa + sandalye seti veya birden fazla mobilya olması süreyi ve bedeli değiştirir.",
    },
    {
      title: "Uygulanacak işlemler",
      description:
        "Yalnızca vida sıkma ile ayak, sırtlık veya bağlantı onarımının birlikte planlanması maliyeti etkiler.",
    },
    {
      title: "Malzeme ihtiyacı",
      description:
        "Yeni vida, destek parçası veya güçlendirme malzemesi gerekip gerekmediği bedele yansır.",
    },
    {
      title: "Mobilya tipi ve yapısı",
      description:
        "Masif, sunta veya farklı birleşimli mobilyalarda müdahale yöntemi ve süre değişebilir.",
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
    "Masa veya sandalyenizin birkaç fotoğrafını WhatsApp üzerinden gönderin; onarım seçenekleri ve ön bilgi hakkında hızlı geri dönüş alın.",
} as const;

export const SERVICE_TRUST = {
  eyebrow: "Güven",
  title: "Erdoğan Usta ile Yerinde Masa Sandalye Tamiri",
  description:
    "Masa ve sandalye tamirinde ihtiyaca göre planlanan, gereksiz işlem önermeyen ve yerinde uygulanan bir çalışma modeliyle ilerliyoruz.",
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
    "Güven bölümünde projede kullanılan güvenli ustalık belgesi görselini paylaşıyoruz. Yerinde çalışırken masa ve sandalyenizin durumuna göre yalnızca gereken sıkma, onarım ve güçlendirme adımlarını açıkça anlatırız.",
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
    "Masa sandalye tamiri ve mobilya onarım hizmeti alan müşterilerimizden seçilmiş yorumlar.",
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
    question: "Masa sandalye tamiri yerinde mi yapılıyor?",
    answer:
      "Evet. Uygun olan projelerde vida sıkma, ayak onarımı, bağlantı güçlendirme ve sırtlık onarımını adresinizde, yani yerinde planlayıp uyguluyoruz.",
  },
  {
    question: "Sallanan sandalye tamiri yapıyor musunuz?",
    answer:
      "Evet. Sallanan sandalye tamiri kapsamında gevşek vidalar, bağlantı noktaları ve ayak sorunlarında yerinde müdahale sunuyoruz.",
  },
  {
    question: "Kırık masa veya sandalye onarılır mı?",
    answer:
      "Çoğu kırık masa sandalye onarımında yapısal hasar giderilebilir. Fotoğraflar üzerinden onarımın uygunluğu önceden değerlendirilir.",
  },
  {
    question: "Masa ve sandalye birlikte mi tamir edilir?",
    answer:
      "Evet. Tek sandalye, masa veya masa + sandalye seti için birlikte planlama yapılabilir. Parça sayısına göre süre ve bedel netleşir.",
  },
  {
    question: "Mersin'in hangi bölgelerine geliyorsunuz?",
    answer:
      "Mersin genelinde randevu ile hizmet veriyoruz. Yenişehir, Mezitli, Toroslar, Akdeniz ve çevre bölgelerde yerinde mobilya tamiri sunuyoruz.",
  },
  {
    question: "Keşif ücretli mi?",
    answer:
      "Fotoğraf veya video ile ön değerlendirme ücretsizdir. Yerinde keşif ve ölçü alma taleplerinde Mersin şehir içi 500 TL keşif ücreti uygulanır. İş onaylandığında bu tutar toplam iş bedelinden düşülür.",
  },
  {
    question: "Ne kadar sürede tamamlanır?",
    answer:
      "Süre; hasarın türüne, parça sayısına ve uygulanacak işlemlere göre değişir. Fotoğraflar veya keşif sonrasında daha net bir zaman aralığı paylaşıyoruz.",
  },
];

export const SERVICE_WHATSAPP_CTA = {
  eyebrow: "WhatsApp Desteği",
  title: "Masa Sandalye Tamiri İçin Ön Bilgi Alın",
  description:
    "Masa veya sandalye fotoğrafı göndererek sallanan sandalye tamiri, masa ayak onarımı ve bağlantı güçlendirme seçenekleri hakkında hızlı ön değerlendirme alabilirsiniz.",
  note: "Mevcut WhatsApp dönüşüm takibi korunarak çalışır.",
} as const;
