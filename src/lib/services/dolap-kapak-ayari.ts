import { BUSINESS, CANONICAL_SITE_URL } from "@/lib/site";

export const SERVICE_SLUG = "mersin-dolap-kapak-ayari";

export const SERVICE_PATH = `/hizmetler/${SERVICE_SLUG}` as const;

export const SERVICE_URL = `${CANONICAL_SITE_URL}${SERVICE_PATH}`;

export const SERVICE_TITLE = "Mersin Dolap Kapak Ayarı";

export const SERVICE_METADATA = {
  title:
    "Mersin Dolap Kapak Ayarı | Hizasız Kapak ve Sessiz Kapanış — Alo Mobilya",
  description:
    "Mersin genelinde yerinde dolap kapak ayarı. Sarkmış, sürten veya aralığı bozuk kapaklarda menteşe ayarı, hizalama ve son kapanış kontrolü. Fotoğrafla ön değerlendirme.",
  keywords: [
    "mersin dolap kapak ayarı",
    "dolap kapak ayarı mersin",
    "kapak hizalama mersin",
    "sarkmış kapak ayarı",
    "menteşe ayarı mersin",
    "dolap kapağı düzeltme",
    "vestiyer kapak ayarı",
    "gardırop kapak hizalama",
    "yerinde kapak ayarı",
    "sessiz kapak kapanışı",
  ],
  ogImage: {
    url: "/services/dolap-kapak-ayari/is-asamalari/dolap-kapak-ayari-gardirop-kapak-hizalama-01.png",
    alt: "Mersin dolap kapak ayarı - gardırop kapak hizalama",
  },
} as const;

export const SERVICE_WHATSAPP_MESSAGE =
  "Merhaba, Mersin dolap kapak ayarı hizmeti hakkında bilgi almak istiyorum.";

export const SERVICE_TESTIMONIALS_WHATSAPP_MESSAGE =
  "Merhaba, dolap kapak ayarı için fotoğraf göndermek ve ön bilgi almak istiyorum.";

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
  h1: "Mersin Dolap Kapak Ayarı",
  h1Highlight: "Düzgün ve Sessiz Kapanış",
  paragraphs: [
    "Hizası bozuk, sarkan veya sürten dolap kapakları için Mersin genelinde yerinde kapak ayarı yapıyoruz. Mutfak, banyo, gardırop, vestiyer ve TV ünitesi kapaklarında düzgün ve sessiz kapanış hedefliyoruz.",
    "Fotoğrafla ön değerlendirme alabilir; menteşe sıkma, kapak hizalama ve son kapanış kontrolünü adresinizde planlayabilirsiniz.",
  ],
  trustItems: [
    "40+ yıllık tecrübe",
    "Ustalık belgeli",
    "Yerinde hızlı servis",
    "Fotoğrafla ön değerlendirme",
  ],
  showcase: {
    title: "Dolap Kapak Ayarı",
    left: {
      src: "/services/dolap-kapak-ayari/is-asamalari/dolap-kapak-ayari-dolap-ici-mentese-ayari-01.png",
      alt: "Mersin dolap kapak ayarı - dolap içi menteşe ayarı",
      label: "AYAR",
    },
    right: {
      src: "/services/dolap-kapak-ayari/is-asamalari/dolap-kapak-ayari-gardirop-kapak-hizalama-01.png",
      alt: "Mersin dolap kapak ayarı - gardırop kapak hizalama",
      label: "HİZALAMA",
    },
  },
} as const;

export const SERVICE_WORK_STAGES_SECTION = {
  eyebrow: "İş Aşamaları",
  title: "Dolap Kapak Ayarı Uygulamaları",
  description:
    "Öncesi/sonrası galerisi yerine gerçek iş aşamalarını paylaşıyoruz: menteşe ayarı, kapak hizalama ve farklı mobilya tiplerinde son kontrol.",
} as const;

export type ServiceWorkStageIcon =
  | "hinge"
  | "align"
  | "bath"
  | "wardrobe"
  | "tv"
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
  "/services/dolap-kapak-ayari/is-asamalari" as const;

function stageImage(filename: string) {
  return `${SERVICE_WORK_STAGES_IMAGE_BASE}/${filename}`;
}

export const SERVICE_WORK_STAGES: ServiceWorkStage[] = [
  {
    id: 1,
    title: "Dolap İçi Menteşe Ayarı",
    description:
      "Menteşe vidaları sıkılır ve üç yönlü ayar noktaları kontrol edilir. Kapak gövdeye dengeli oturacak şekilde düzenlenir.",
    icon: "hinge",
    image: {
      src: stageImage("dolap-kapak-ayari-dolap-ici-mentese-ayari-01.png"),
      alt: "Mersin dolap kapak ayarı - dolap içi menteşe ayarı",
    },
  },
  {
    id: 2,
    title: "Gardırop Kapak Hizalama",
    description:
      "Gardırop kapaklarında yükseklik, yan boşluk ve öne-arkaya hiza ayarlanır. Kapaklar birbirine sürtmeden kapanır.",
    icon: "align",
    image: {
      src: stageImage("dolap-kapak-ayari-gardirop-kapak-hizalama-01.png"),
      alt: "Mersin dolap kapak ayarı - gardırop kapak hizalama",
    },
  },
  {
    id: 3,
    title: "Banyo Dolabı Kapak Hizalama",
    description:
      "Banyo dolabı kapaklarında aralık eşitliği ve kapanış kontrolü yapılır. Nemli ortamda yıpranan menteşeler değerlendirilir.",
    icon: "bath",
    image: {
      src: stageImage("dolap-kapak-ayari-banyo-dolabi-kapak-hizalama-01.png"),
      alt: "Mersin dolap kapak ayarı - banyo dolabı kapak hizalama",
    },
  },
  {
    id: 4,
    title: "Vestiyer Kapak Hizalama",
    description:
      "Vestiyer ve portmanto kapaklarında hiza bozuklukları giderilir. Günlük kullanımda düzgün ve sessiz kapanış sağlanır.",
    icon: "wardrobe",
    image: {
      src: stageImage("dolap-kapak-ayari-vestiyer-kapak-hizalama-01.png"),
      alt: "Mersin dolap kapak ayarı - vestiyer kapak hizalama",
    },
  },
  {
    id: 5,
    title: "TV Ünitesi Kapak Ayarı",
    description:
      "TV ünitesi kapaklarında menteşe ayarı ve hizalama uygulanır. Hafif kapakların da gövdeye tam oturması hedeflenir.",
    icon: "tv",
    image: {
      src: stageImage("dolap-kapak-ayari-tv-unitesi-kapak-ayari-01.png"),
      alt: "Mersin dolap kapak ayarı - TV ünitesi kapak ayarı",
    },
  },
  {
    id: 6,
    title: "Gardırop Son Kontrol",
    description:
      "İşlem sonunda kapaklar açılıp kapatılarak son kontrol yapılır. Aralık, hiza ve sessiz kapanış birlikte test edilir.",
    icon: "check",
    image: {
      src: stageImage("dolap-kapak-ayari-gardirop-son-kontrol-01.png"),
      alt: "Mersin dolap kapak ayarı - gardırop son kontrol",
    },
  },
];

export const SERVICE_DESCRIPTION = {
  eyebrow: "Hizmet Açıklaması",
  title: "Dolap Kapak Ayarı Nedir?",
  description:
    "Dolap kapak ayarı; sarkan, sürten veya aralığı bozuk kapakların menteşe ayarı ve hizalama ile yeniden düzgün, güvenli ve sessiz kapanmasını sağlayan yerinde servistir.",
  paragraphs: [
    "Mersin genelinde yerinde dolap kapak ayarı sunuyoruz. Kapakların birbirine sürtmesi, aşağı sarkması, aralıkların eşit olmaması veya sessiz kapanmaması gibi sorunlarda adresinizde hızlı müdahale planlıyoruz.",
    "Menteşe sıkma, kapak hizalama, vida yuvası kontrolü ve son kapanış testi adımlarını birlikte uyguluyoruz. Gerekirse menteşe değişimine yönlendirerek kalıcı çözüm hedefliyoruz.",
    "WhatsApp üzerinden birkaç fotoğraf göndererek ön değerlendirme alabilirsiniz. Uygunluk ve işlem kapsamı netleştikten sonra yerinde servis için randevu planlanır.",
  ],
} as const;

export const SERVICE_PROBLEMS_SECTION = {
  eyebrow: "Uygunluk",
  title: "Hangi Sorunlarda Kapak Ayarı Gerekir?",
  description:
    "Kapak ayarıyla çoğu hiza sorununda komple mobilya değişimine gerek kalmadan kullanım rahatlığı geri gelir.",
} as const;

export type ServiceProblemIcon =
  | "rub"
  | "sag"
  | "gap"
  | "noise"
  | "loose"
  | "fit"
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
    title: "Kapakların Birbirine Sürtmesi",
    description:
      "Yan yana kapaklar sürtüyor veya kenarlarda iz bırakıyorsa hiza ve boşluk ayarıyla düzeltilir.",
    icon: "rub",
  },
  {
    id: 2,
    title: "Kapakların Aşağı Sarkması",
    description:
      "Aşağı düşen kapaklarda menteşe ayarı ve vida sıkma ile yükseklik dengelenir.",
    icon: "sag",
  },
  {
    id: 3,
    title: "Kapak Aralıklarının Eşit Olmaması",
    description:
      "Üst-alt veya yan aralıklar eşit değilse üç yönlü menteşe ayarıyla hizalanır.",
    icon: "gap",
  },
  {
    id: 4,
    title: "Sessiz / Düzgün Kapanmama",
    description:
      "Çarpma, takılma veya zor kapanma sorunlarında ayar ve menteşe kontrolü yapılır.",
    icon: "noise",
  },
  {
    id: 5,
    title: "Menteşe Gevşemesi",
    description:
      "Gevşemiş menteşe vidaları sıkılır; yuva durumu kontrol edilerek sağlam montaj sağlanır.",
    icon: "loose",
  },
  {
    id: 6,
    title: "Gövdeye Tam Oturmama",
    description:
      "Kapak gövdeye oturmuyor veya öne çıkıyorsa öne-arkaya ayar ile düzgün kapanış hedeflenir.",
    icon: "fit",
  },
];

export const SERVICE_PROCEDURES_SECTION = {
  eyebrow: "Uygulanan İşlemler",
  title: "Kapak Ayarında Neler Yapıyoruz?",
  description:
    "İşlem kapsamı kapak ve menteşe durumuna göre netleştirilir. Amaç gereksiz parça değişimi olmadan düzgün kapanış sağlamaktır.",
} as const;

export type ServiceProcedureIcon =
  | "tighten"
  | "align"
  | "screw"
  | "replace"
  | "check";

export type ServiceProcedure = {
  id: number;
  title: string;
  description: string;
  icon: ServiceProcedureIcon;
};

export const SERVICE_PROCEDURES: ServiceProcedure[] = [
  {
    id: 1,
    title: "Menteşe Sıkma ve Ayarlama",
    description:
      "Gevşemiş vidalar sıkılır; yükseklik, yan boşluk ve derinlik ayarları kontrollü şekilde yapılır.",
    icon: "tighten",
  },
  {
    id: 2,
    title: "Kapak Hizalama",
    description:
      "Kapaklar birbirine ve gövdeye göre hizalanır. Aralık eşitliği ve sürtmesiz kapanış hedeflenir.",
    icon: "align",
  },
  {
    id: 3,
    title: "Bozuk Vida Yuvalarını Kontrol",
    description:
      "Vida tutmayan veya açılmış yuvalar kontrol edilir. Gerekirse sağlamlaştırma önerilir.",
    icon: "screw",
  },
  {
    id: 4,
    title: "Gerekirse Menteşe Değişimine Yönlendirme",
    description:
      "Ayarla çözülemeyen kırık veya yıpranmış menteşelerde değişim seçeneği açıkça anlatılır.",
    icon: "replace",
  },
  {
    id: 5,
    title: "Son Kapanış Kontrolü",
    description:
      "Tüm kapaklar açılıp kapatılarak sessiz, düzgün ve güvenli kapanış son kez test edilir.",
    icon: "check",
  },
];

export const SERVICE_PRICING_FACTORS = {
  eyebrow: "Fiyatlandırma",
  title: "Fiyatı Etkileyen Faktörler",
  description:
    "Dolap kapak ayarında net fiyat; kapak adedi, menteşe durumu ve yerinde iş kapsamıyla birlikte belirlenir.",
  factors: [
    {
      title: "Ayarlanacak kapak adedi",
      description:
        "Tek kapak mı, birden fazla dolap veya gardırop kapağı mı olduğu toplam işçiliği etkiler.",
    },
    {
      title: "Menteşe ve yuva durumu",
      description:
        "Sadece ayar yeterli mi, yoksa vida yuvası onarımı veya menteşe değişimi mi gerektiği kapsamı değiştirir.",
    },
    {
      title: "Mobilyanın tipi",
      description:
        "Mutfak, banyo, gardırop, vestiyer veya TV ünitesi kapaklarında müdahale alanı aynı olmayabilir.",
    },
    {
      title: "Hiza bozukluğunun seviyesi",
      description:
        "Hafif aralık farkı ile ileri sarkma veya sürtme sorunları farklı süre ister.",
    },
    {
      title: "Son kontrol süresi",
      description:
        "Çoklu kapaklarda eşit aralık ve sessiz kapanış kontrolü için gereken süre işe göre değişir.",
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
    "Kapak fotoğraflarınızı WhatsApp üzerinden gönderin; uygunluk ve ön bilgi hakkında hızlı geri dönüş alın.",
} as const;

export const SERVICE_TRUST = {
  eyebrow: "Güven",
  title: "Erdoğan Usta ile Yerinde Kapak Ayarı",
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
    "Güven bölümünde projede kullanılan güvenli ustalık belgesi görselini paylaşıyoruz. Yerinde çalışırken yalnızca gereken menteşe sıkma, kapak hizalama ve son kontrol adımlarını açıkça anlatırız.",
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
    "Dolap kapak ayarı ve mobilya onarım hizmeti alan müşterilerimizden seçilmiş yorumlar.",
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
    question: "Dolap kapak ayarı yerinde mi yapılıyor?",
    answer:
      "Evet. Uygun olan projelerde menteşe sıkma, kapak hizalama ve son kapanış kontrolünü adresinizde, yani yerinde planlayıp uyguluyoruz.",
  },
  {
    question: "Hangi dolaplarda kapak ayarı yapılır?",
    answer:
      "Mutfak dolabı, banyo dolabı, gardırop, vestiyer, TV ünitesi ve benzer kapaklı mobilyalarda kapak ayarı planlanabilir.",
  },
  {
    question: "Sarkan kapak sadece ayarla düzelir mi?",
    answer:
      "Çoğu sarkma ve sürtme sorunu menteşe ayarı ve vida sıkma ile düzelir. Menteşe kırık veya yuva tutmuyorsa değişim önerilebilir.",
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
      "Süre; kapak adedine, menteşe durumuna ve hiza bozukluğunun seviyesine göre değişir. Fotoğraflar veya keşif sonrasında daha net bir zaman aralığı paylaşıyoruz.",
  },
];

export const SERVICE_WHATSAPP_CTA = {
  eyebrow: "WhatsApp Desteği",
  title: "Dolap Kapak Ayarı İçin Ön Bilgi Alın",
  description:
    "Kapak fotoğrafı göndererek sarkma, sürtme, aralık bozukluğu veya sessiz kapanmama sorunlarınız için hızlı ön değerlendirme alabilirsiniz.",
  note: "Mevcut WhatsApp dönüşüm takibi korunarak çalışır.",
} as const;
