import { BUSINESS, CANONICAL_SITE_URL } from "@/lib/site";

export const SERVICE_SLUG = "mersin-surgulu-dolap-ray-tamiri";

export const SERVICE_PATH = `/hizmetler/${SERVICE_SLUG}` as const;

export const SERVICE_URL = `${CANONICAL_SITE_URL}${SERVICE_PATH}`;

export const SERVICE_TITLE = "Mersin Sürgülü Dolap Ray Tamiri";

export const SERVICE_METADATA = {
  title:
    "Mersin Sürgülü Dolap Ray Tamiri | Gardırop Kapak Rayı Yerinde Servis — Alo Mobilya",
  description:
    "Mersin sürgülü dolap ray tamiri. Takılan, raydan çıkan veya sıkışan sürgülü gardırop ve portmanto kapaklarında üst/alt ray kontrolü, kapak hizalama ve yerinde ayar. Fotoğrafla ön değerlendirme.",
  keywords: [
    "mersin sürgülü dolap ray tamiri",
    "mersin sürgülü gardırop ray tamiri",
    "mersin sürgülü kapak tamiri",
    "sürgülü dolap kapağı raydan çıkıyor",
    "sürgülü dolap kapağı takılıyor",
    "gardırop sürgülü kapak tamiri mersin",
    "portmanto sürgülü kapak ray tamiri",
    "sürgülü dolap üst ray ayarı",
    "sürgülü dolap alt ray tamiri",
    "yerinde sürgülü kapak tamiri mersin",
  ],
  ogImage: {
    url: "/services/surgulu-dolap-ray-tamiri/is-asamalari/surgulu-dolap-ray-tamiri-kapak-hizalama-01.png",
    alt: "Mersin sürgülü dolap ray tamiri - kapak hizalama",
  },
} as const;

export const SERVICE_WHATSAPP_MESSAGE =
  "Merhaba, Mersin sürgülü dolap ray tamiri hizmeti hakkında bilgi almak istiyorum.";

export const SERVICE_TESTIMONIALS_WHATSAPP_MESSAGE =
  "Merhaba, sürgülü dolap ray tamiri için fotoğraf göndermek ve ön bilgi almak istiyorum.";

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
  h1: "Mersin Sürgülü Dolap Ray Tamiri",
  h1Highlight: "Kapak Raydan Çıkmasın",
  paragraphs: [
    "Takılan, sıkışan veya raydan çıkan sürgülü dolap ve gardırop kapakları için Mersin genelinde yerinde ray tamiri yapıyoruz. Üst ray, alt ray, tekerlek/makara ve kapak hizasını birlikte kontrol ederek kaymayı yeniden düzgün hale getiriyoruz.",
    "Portmanto sürgülü kapaklarında da aynı yaklaşımı uyguluyoruz. Fotoğrafla ön değerlendirme alabilir; üst/alt ray ayarı, kapak hizalama ve son kontrol adımlarını adresinizde planlayabilirsiniz.",
  ],
  trustItems: [
    "40+ yıllık tecrübe",
    "Ustalık belgeli",
    "Yerinde hızlı servis",
    "Fotoğrafla ön değerlendirme",
  ],
  showcase: {
    title: "Sürgülü Dolap Ray Tamiri",
    left: {
      src: "/services/surgulu-dolap-ray-tamiri/is-asamalari/surgulu-dolap-ray-tamiri-ust-ray-kontrol-01.png",
      alt: "Mersin sürgülü dolap ray tamiri - üst ray kontrolü",
      label: "KONTROL",
    },
    right: {
      src: "/services/surgulu-dolap-ray-tamiri/is-asamalari/surgulu-dolap-ray-tamiri-kapak-hizalama-01.png",
      alt: "Mersin sürgülü dolap ray tamiri - kapak hizalama",
      label: "HİZALAMA",
    },
  },
} as const;

export const SERVICE_WORK_STAGES_SECTION = {
  eyebrow: "İş Aşamaları",
  title: "Sürgülü Ray Tamiri Uygulamaları",
  description:
    "Öncesi/sonrası galerisi yerine gerçek iş aşamalarını paylaşıyoruz: üst/alt ray kontrolü, kapak hizalama, üst ray ayarı, montaj ve son kontrol.",
} as const;

export type ServiceWorkStageIcon =
  | "topRail"
  | "bottomRail"
  | "align"
  | "adjust"
  | "mount"
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
  "/services/surgulu-dolap-ray-tamiri/is-asamalari" as const;

function stageImage(filename: string) {
  return `${SERVICE_WORK_STAGES_IMAGE_BASE}/${filename}`;
}

export const SERVICE_WORK_STAGES: ServiceWorkStage[] = [
  {
    id: 1,
    title: "Üst Ray Kontrolü",
    description:
      "Sürgülü kapak üst rayı, makara yuvası ve ray hattı kontrol edilir. Gevşeme, eğrilme veya raydan çıkma riski değerlendirilir.",
    icon: "topRail",
    image: {
      src: stageImage("surgulu-dolap-ray-tamiri-ust-ray-kontrol-01.png"),
      alt: "Mersin sürgülü dolap ray tamiri - üst ray kontrolü",
    },
  },
  {
    id: 2,
    title: "Alt Ray Kontrolü",
    description:
      "Alt ray temizliği, tekerlek/makara durumu ve ray yuvası incelenir. Takılma ve sürtünme kaynakları tespit edilir.",
    icon: "bottomRail",
    image: {
      src: stageImage("surgulu-dolap-ray-tamiri-alt-ray-kontrol-01.png"),
      alt: "Mersin sürgülü dolap ray tamiri - alt ray kontrolü",
    },
  },
  {
    id: 3,
    title: "Kapak Hizalama",
    description:
      "Sürgülü kapakların birbirine göre yüksekliği, boşluğu ve kayma hizası ayarlanır. Kapakların sürtmeden çalışması hedeflenir.",
    icon: "align",
    image: {
      src: stageImage("surgulu-dolap-ray-tamiri-kapak-hizalama-01.png"),
      alt: "Mersin sürgülü dolap ray tamiri - kapak hizalama",
    },
  },
  {
    id: 4,
    title: "Üst Ray Ayarı",
    description:
      "Üst ray vida ve ayar noktaları düzenlenir. Kapak rayda dengeli tutularak raydan çıkma ve sarkma azaltılır.",
    icon: "adjust",
    image: {
      src: stageImage("surgulu-dolap-ray-tamiri-ust-ray-ayari-01.png"),
      alt: "Mersin sürgülü dolap ray tamiri - üst ray ayarı",
    },
  },
  {
    id: 5,
    title: "Son Kontrol",
    description:
      "Kapaklar açılıp kapatılarak sessiz kayma, hiza ve rayda kalma birlikte test edilir. Günlük kullanıma hazır hale getirilir.",
    icon: "check",
    image: {
      src: stageImage("surgulu-dolap-ray-tamiri-son-kontrol-01.png"),
      alt: "Mersin sürgülü dolap ray tamiri - son kontrol",
    },
  },
  {
    id: 6,
    title: "Sürgülü Kapak Montajı",
    description:
      "Gerekirse kapak raydan alınır, tekerlek/ray parçaları düzenlenir ve kapak yeniden monte edilir. Sağlam oturma kontrol edilir.",
    icon: "mount",
    image: {
      src: stageImage("surgulu-dolap-ray-tamiri-surgulu-kapak-montaji-01.png"),
      alt: "Mersin sürgülü dolap ray tamiri - sürgülü kapak montajı",
    },
  },
];

export const SERVICE_DESCRIPTION = {
  eyebrow: "Hizmet Açıklaması",
  title: "Sürgülü Dolap Ray Tamiri Nedir?",
  description:
    "Sürgülü dolap ray tamiri; sürgülü gardırop, sürgülü dolap ve portmanto kapaklarında üst/alt ray, tekerlek ve hiza sorunlarının yerinde giderilerek kapakların yeniden düzgün kaymasını sağlayan servistir.",
  paragraphs: [
    "Bu hizmet çekmece rayı değişiminden farklıdır. Odak noktamız sürgülü kapak sistemleridir: raydan çıkan kapak, takılan sürgü, sıkışan kapak, üst ray ayarı, alt ray temizliği/onarımı ve kapak hizalama.",
    "Mersin genelinde yerinde sürgülü dolap ray tamiri sunuyoruz. Gardırop sürgülü kapakları, yatak odası sürgülü dolapları ve portmanto sürgülü kapak raylarında adresinizde hızlı müdahale planlıyoruz.",
    "WhatsApp üzerinden birkaç fotoğraf göndererek ön değerlendirme alabilirsiniz. Ray mı, tekerlek mi, yoksa yalnızca ayar mı gerektiği netleştikten sonra yerinde servis için randevu planlanır.",
  ],
} as const;

export const SERVICE_PROBLEMS_SECTION = {
  eyebrow: "Uygunluk",
  title: "Hangi Sorunlarda Sürgülü Ray Tamiri Gerekir?",
  description:
    "Sürgülü kapak sorunlarında çoğu zaman komple dolap değişimine gerek kalmadan ray, tekerlek ve hiza müdahalesiyle çözüm üretilir.",
} as const;

export type ServiceProblemIcon =
  | "offTrack"
  | "stuck"
  | "align"
  | "noise"
  | "topRail"
  | "bottomRail"
  | "wardrobe"
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
    title: "Kapak Raydan Çıkıyor",
    description:
      "Sürgülü dolap kapağı raydan çıkıyorsa üst/alt ray, tekerlek ve hiza kontrolüyle kapak yeniden rayda tutulur.",
    icon: "offTrack",
  },
  {
    id: 2,
    title: "Kapak Takılıyor / Sıkışıyor",
    description:
      "Zor kayan veya yarım kalan kapaklarda ray temizliği, tekerlek kontrolü ve ayar ile kayma rahatlığı geri gelir.",
    icon: "stuck",
  },
  {
    id: 3,
    title: "Kapak Hizası Bozulmuş",
    description:
      "Kapaklar birbirine sürtüyor veya aralıklar eşit değilse sürgülü kapak hizalama ve ayar uygulanır.",
    icon: "align",
  },
  {
    id: 4,
    title: "Ses Yapan Sürgülü Kapak",
    description:
      "Gıcırdayan veya sürten kapaklarda makara, ray hattı ve montaj noktaları kontrol edilerek sessiz kayma hedeflenir.",
    icon: "noise",
  },
  {
    id: 5,
    title: "Üst Ray Problemi",
    description:
      "Üst ray gevşemesi, eğrilmesi veya ayarsızlığı kapak sarkmasına ve raydan çıkmaya yol açabilir.",
    icon: "topRail",
  },
  {
    id: 6,
    title: "Alt Ray Problemi",
    description:
      "Kirlenen, ezilen veya yıpranan alt raylarda temizleme, onarım veya gerekli parçaların yenilenmesi planlanır.",
    icon: "bottomRail",
  },
  {
    id: 7,
    title: "Gardırop / Portmanto Sürgüsü",
    description:
      "Sürgülü gardırop ve portmanto kapak raylarında yerinde tamir, ayar ve montaj kontrolü yapılır.",
    icon: "wardrobe",
  },
  {
    id: 8,
    title: "Fotoğrafla Ön Değerlendirme",
    description:
      "Kapak ve ray fotoğraflarını göndererek ray tamiri mi, teker değişimi mi gerektiğini hızlı öğrenebilirsiniz.",
    icon: "photo",
  },
];

export const SERVICE_REPAIR_VS_WHEEL_SECTION = {
  eyebrow: "Doğru Müdahale",
  title: "Ray Tamiri mi, Teker Değişimi mi?",
  description:
    "Her sürgülü kapak sorunu aynı çözümü gerektirmez. Önce arızanın kaynağını netleştirip gereksiz parça değişiminden kaçınıyoruz.",
} as const;

export type ServiceRepairOptionIcon =
  | "repair"
  | "wheel"
  | "adjust"
  | "both";

export type ServiceRepairOption = {
  id: number;
  title: string;
  description: string;
  icon: ServiceRepairOptionIcon;
};

export const SERVICE_REPAIR_VS_WHEEL: ServiceRepairOption[] = [
  {
    id: 1,
    title: "Ray Tamiri / Düzeltme",
    description:
      "Ray eğrilmiş, vida gevşemiş veya ray hattı bozulmuşsa onarım, sıkma ve hiza düzeltmesiyle kapak yeniden düzgün kayar.",
    icon: "repair",
  },
  {
    id: 2,
    title: "Teker / Makara Değişimi",
    description:
      "Tekerlek kırılmış, aşınmış veya dönmüyorsa yalnızca teker değişimi yeterli olabilir; tüm rayı değiştirmek gerekmeyebilir.",
    icon: "wheel",
  },
  {
    id: 3,
    title: "Sadece Ayar ve Hizalama",
    description:
      "Kapak rayda duruyor ama sürtüyor veya aralıklar bozuksa üst/alt ayar ve kapak hizalama ile sorun çoğu zaman çözülür.",
    icon: "adjust",
  },
  {
    id: 4,
    title: "Kombine Müdahale",
    description:
      "Bazı durumlarda teker değişimi ile ray ayarı birlikte gerekir. Fotoğraf veya yerinde kontrol sonrası net plan çıkarılır.",
    icon: "both",
  },
];

export const SERVICE_WHY_OFF_TRACK_SECTION = {
  eyebrow: "Neden Olur?",
  title: "Sürgülü Kapak Neden Raydan Çıkar?",
  description:
    "Raydan çıkma çoğu zaman tek bir parçadan değil; üst ray, alt ray, tekerlek ve hiza dengesinin birlikte bozulmasından kaynaklanır.",
} as const;

export type ServiceCauseIcon =
  | "loose"
  | "wear"
  | "dirt"
  | "weight"
  | "impact"
  | "misalign";

export type ServiceCause = {
  id: number;
  title: string;
  description: string;
  icon: ServiceCauseIcon;
};

export const SERVICE_WHY_OFF_TRACK: ServiceCause[] = [
  {
    id: 1,
    title: "Üst Ray Gevşemesi",
    description:
      "Üst ray vidaları gevşeyince kapak dengesi bozulur ve kayarken raydan çıkabilir.",
    icon: "loose",
  },
  {
    id: 2,
    title: "Aşınmış Teker / Makara",
    description:
      "Yıpranan tekerlekler ray yuvasında tutunamaz; kapak aşağı düşer veya raydan çıkar.",
    icon: "wear",
  },
  {
    id: 3,
    title: "Kirli veya Tıkalı Alt Ray",
    description:
      "Alt rayda biriken toz, kıl ve yabancı cisimler tekeri ray dışına zorlayabilir.",
    icon: "dirt",
  },
  {
    id: 4,
    title: "Kapak Ağırlığı / Dengesizlik",
    description:
      "Tek tarafa yüklenen veya ağır sürgülü kapaklarda hiza bozulup raydan çıkma riski artar.",
    icon: "weight",
  },
  {
    id: 5,
    title: "Sert Kullanım veya Darbe",
    description:
      "Kapakların sert itilmesi veya çarpması ray hattını ve teker yuvalarını bozabilir.",
    icon: "impact",
  },
  {
    id: 6,
    title: "Hizasız Montaj",
    description:
      "Önceki montajda üst-alt ray hizası bozulmuşsa kapak zamanla raydan çıkmaya başlar.",
    icon: "misalign",
  },
];

export const SERVICE_PRICING_FACTORS = {
  eyebrow: "Fiyatlandırma",
  title: "Fiyatı Etkileyen Faktörler",
  description:
    "Sürgülü dolap ray tamirinde net fiyat; kapak adedi, ray/teker durumu ve yerinde iş kapsamıyla birlikte belirlenir.",
  factors: [
    {
      title: "Kapak ve ray adedi",
      description:
        "Tek sürgülü kapak mı, çift kapaklı gardırop veya portmanto sistemi mi olduğu toplam işçiliği etkiler.",
    },
    {
      title: "Ray mı, teker mi?",
      description:
        "Yalnızca ayar, teker değişimi veya üst/alt ray müdahalesi farklı parça ve süre ister.",
    },
    {
      title: "Üst ve alt ray durumu",
      description:
        "Eğrilmiş ray, vida tutmayan yuvalar veya ek sağlamlaştırma ihtiyacı kapsamı değiştirir.",
    },
    {
      title: "Mobilyanın tipi",
      description:
        "Sürgülü gardırop, sürgülü dolap ve portmanto sistemlerinde müdahale alanı aynı olmayabilir.",
    },
    {
      title: "Hizalama ve kontrol süresi",
      description:
        "Kapak hizalama, üst ray ayarı ve son kayma testi için gereken süre işe göre değişir.",
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
    "Sürgülü kapak ve ray fotoğraflarınızı WhatsApp üzerinden gönderin; ray tamiri mi teker değişimi mi gerektiği hakkında hızlı ön bilgi alın.",
} as const;

export const SERVICE_TRUST = {
  eyebrow: "Güven",
  title: "Erdoğan Usta ile Yerinde Sürgülü Ray Tamiri",
  description:
    "Gereksiz işlem önermeden, sürgülü kapak ve ray durumuna göre net planlanan yerinde servis modeliyle ilerliyoruz.",
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
    "Güven bölümünde projede kullanılan güvenli ustalık belgesi görselini paylaşıyoruz. Yerinde çalışırken yalnızca gereken ray tamiri, teker kontrolü, kapak hizalama ve ayar adımlarını açıkça anlatırız.",
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
    "Sürgülü dolap ray tamiri ve mobilya onarım hizmeti alan müşterilerimizden seçilmiş yorumlar.",
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
    question: "Sürgülü dolap ray tamiri yerinde mi yapılıyor?",
    answer:
      "Evet. Uygun olan projelerde üst/alt ray kontrolü, teker değişimi, kapak hizalama ve ayarı adresinizde, yani yerinde planlayıp uyguluyoruz.",
  },
  {
    question: "Bu hizmet çekmece ray değişiminden farklı mı?",
    answer:
      "Evet. Bu sayfa sürgülü gardırop, sürgülü dolap ve portmanto kapak raylarına odaklıdır. Çekmece ve genel dolap ray değişimi ayrı bir hizmet olarak sunulur.",
  },
  {
    question: "Sürgülü dolap kapağı raydan çıkıyorsa ne yapılır?",
    answer:
      "Önce üst ray, alt ray, tekerlek ve hiza kontrol edilir. Çoğu durumda ayar, teker değişimi veya ray düzeltmesiyle kapak yeniden rayda tutulur.",
  },
  {
    question: "Takılan sürgülü kapak düzelir mi?",
    answer:
      "Çoğu takılma; kirli alt ray, aşınmış teker veya bozulmuş hizadan kaynaklanır. Temizlik, teker kontrolü ve ayar ile çoğu durumda düzeltilir.",
  },
  {
    question: "Fotoğrafla ön değerlendirme mümkün mü?",
    answer:
      "Evet. Sürgülü kapak, üst ray ve alt ray fotoğraflarını WhatsApp üzerinden göndererek işlem kapsamı hakkında hızlı ön bilgi alabilirsiniz.",
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
];

export const SERVICE_WHATSAPP_CTA = {
  eyebrow: "WhatsApp Desteği",
  title: "Sürgülü Dolap Ray Tamiri İçin Ön Bilgi Alın",
  description:
    "Sürgülü kapak, üst ray veya alt ray fotoğrafı göndererek raydan çıkma, takılma, sıkışma ve hiza sorunlarınız için hızlı ön değerlendirme alabilirsiniz.",
  note: "Mevcut WhatsApp dönüşüm takibi korunarak çalışır.",
} as const;
