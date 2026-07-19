export const CANONICAL_SITE_URL = "https://www.alomobilyam.com";

export const GOOGLE_ADS_ID = "AW-17775158966";
export const GOOGLE_ADS_WHATSAPP_CONVERSION_SEND_TO =
  "AW-17775158966/vmRICLSY1skCELbN72tc";
export const GOOGLE_ADS_PHONE_CONVERSION_SEND_TO =
  "AW-17775158966/u_X8CKj54NEcELbN72tC";

function resolveSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");

  if (
    fromEnv &&
    fromEnv.startsWith("https://") &&
    !fromEnv.includes("vercel.app")
  ) {
    return fromEnv;
  }

  return CANONICAL_SITE_URL;
}

export const SITE_URL = resolveSiteUrl();

export const BUSINESS = {
  name: "Alo Mobilya",
  shortName: "Alo Mobilya",
  owner: "Erdoğan Kuşçu",
  phone: "+90 532 454 01 19",
  phoneRaw: "+905324540119",
  whatsapp: "905324540119",
  area: "Mersin",
  tagline: "Mersin geneli yerinde mobilya tamir, bakım, onarım ve montaj hizmeti",
  experienceYears: "40+",
  location: {
    locality: "Mersin",
    region: "Mersin",
    country: "TR",
    geo: {
      latitude: 36.8121,
      longitude: 34.6415,
    },
  },
} as const;

export const MANIFEST_COLORS = {
  background: "#fdfbf7",
  theme: "#2c1810",
} as const;

export const HERO_DESCRIPTION =
  "Erdoğan Kuşçu'nun 40 yılı aşkın mobilya ustalığı tecrübesiyle Mersin genelinde yerinde tamir, onarım, bakım ve montaj hizmeti.";

export const ON_SITE_SERVICE_IMAGE = "/site/yerinde-servis.png";

export const ON_SITE_SERVICE_IMAGE_ALT =
  "Mersin genelinde yerinde mobilya tamir, bakım ve montaj servisi — Alo Mobilya";

export const HOME_OG_IMAGE = {
  url: "/works/mutfak-dolabi-sonra.png",
  alt: "Mersin mutfak dolabı yenileme sonrası — yenilenmiş modern kapaklar",
} as const;

export const NAV_LINKS = [
  { href: "/#hizmetler", label: "Hizmetler" },
  { href: "/#galeri", label: "Galeri" },
  { href: "/#yorumlar", label: "Yorumlar" },
  { href: "/#sss", label: "SSS" },
  { href: "/#iletisim", label: "İletişim" },
] as const;

export const STATS = [
  { label: "40+ Yıllık Tecrübe" },
  { label: "Ustalık Belgeli" },
  { label: "Garantili İşçilik" },
  { label: "Mersin Geneli Yerinde Servis" },
] as const;

export const EXPERIENCE_HIGHLIGHTS = [
  { label: "40+ Yıllık Deneyim" },
  { label: "Ustalık Belgesi" },
  { label: "Yerinde Servis" },
  { label: "Titiz İşçilik" },
] as const;

export type Review = {
  id: string;
  name: string;
  rating: number;
  text: string;
};

export const REVIEWS: Review[] = [
  {
    id: "review-1",
    name: "Fatma Y.",
    rating: 5,
    text: "Gardırop kapakları sarkıyordu, menteşeler de yenilendi. Aynı gün geldiler, işi temiz bitirdiler.",
  },
  {
    id: "review-2",
    name: "Ali R.",
    rating: 5,
    text: "Çekmece rayları değiştirildi, artık yumuşak kapanıyor. Fiyat konusunda da önceden bilgi verdiler.",
  },
  {
    id: "review-3",
    name: "Serkan M.",
    rating: 5,
    text: "Yeni aldığımız dolabın montajını evde yaptılar. Hizalı ve sağlam kurulum, memnun kaldık.",
  },
  {
    id: "review-4",
    name: "Deniz C.",
    rating: 5,
    text: "Eski komodin ve masayı yenilediler. Mobilyalar kullanılabilir hale geldi, gereksiz masraf olmadı.",
  },
  {
    id: "review-5",
    name: "Gül N.",
    rating: 5,
    text: "Sürgülü dolap rayı takılıyordu, parça değişimiyle sorun çözüldü. Randevuya zamanında geldiler.",
  },
  {
    id: "review-6",
    name: "Okan P.",
    rating: 5,
    text: "WhatsApp üzerinden ulaştık, hızlı dönüş aldık. Yerinde servis sayesinde taşıma derdi olmadı.",
  },
];

export type ServiceIconKey =
  | "repair"
  | "refresh"
  | "hinge"
  | "rail"
  | "adjust"
  | "door"
  | "cabinet"
  | "wardrobe"
  | "kitchen"
  | "sliding"
  | "drawer"
  | "chair"
  | "assembly"
  | "onsite";

export type ServiceItem = {
  title: string;
  description: string;
  icon: ServiceIconKey;
  href?: string;
};

export type WorkInput = {
  slug: string;
  category: string;
  title: string;
  description: string;
  beforeAlt: string;
  afterAlt: string;
  href?: string;
};

export type WorkItem = WorkInput & {
  before: string;
  after: string;
};

export function workImagePaths(slug: string) {
  return {
    before: `/works/${slug}-once.png`,
    after: `/works/${slug}-sonra.png`,
  };
}

export const HERO_SHOWCASE_WORK = {
  title: "Mutfak Dolabı Yenileme",
  beforeAlt:
    "Mersin mutfak dolabı yenileme öncesi — eski ve yıpranmış kapak görünümü",
  afterAlt:
    "Mersin mutfak dolabı yenileme sonrası — yenilenmiş modern mutfak dolabı kapakları",
  ...workImagePaths("mutfak-dolabi"),
};

function createWork(input: WorkInput): WorkItem {
  return { ...input, ...workImagePaths(input.slug) };
}

export const WORKS: WorkItem[] = [
  createWork({
    slug: "mutfak-dolabi",
    category: "Mutfak Dolabı",
    title: "Mutfak Dolabı Yenileme",
    description:
      "Eskiyen mutfak dolabı kapakları yenilenerek modern ve kullanışlı bir görünüme kavuşturuldu.",
    beforeAlt:
      "Mersin mutfak dolabı yenileme öncesi — eski krem kapaklar ve yıpranmış görünüm",
    afterAlt:
      "Mersin mutfak dolabı yenileme sonrası — yenilenmiş modern kapaklar ve ferah mutfak",
    href: "/hizmetler/mersin-mutfak-dolabi-yenileme",
  }),
  createWork({
    slug: "banyo-dolabi",
    category: "Banyo Dolabı",
    title: "Banyo Dolabı Tamiri",
    description:
      "Şişen ve deforme olan banyo dolabı profesyonel şekilde onarıldı.",
    beforeAlt:
      "Mersin banyo dolabı tamiri öncesi — deforme ve şişmiş kapak görünümü",
    afterAlt:
      "Mersin banyo dolabı tamiri sonrası — onarılmış ve düzgün kapanan banyo dolabı",
  }),
  createWork({
    slug: "tv-unitesi",
    category: "TV Ünitesi",
    title: "TV Ünitesi Tamiri",
    description:
      "Hasarlı TV ünitesi tamir edilerek sağlam ve estetik görünümü geri kazandırıldı.",
    beforeAlt:
      "Mersin TV ünitesi tamiri öncesi — hasarlı ve yıpranmış mobilya görünümü",
    afterAlt:
      "Mersin TV ünitesi tamiri sonrası — onarılmış ve düzenli TV ünitesi",
  }),
  createWork({
    slug: "gardirop-kapak",
    category: "Gardırop",
    title: "Gardırop Kapak Ayarı",
    description:
      "Sarkan gardırop kapakları yeniden ayarlanarak sorunsuz çalışması sağlandı.",
    beforeAlt:
      "Mersin gardırop kapak ayarı öncesi — sarkan ve hizasız kapak görünümü",
    afterAlt:
      "Mersin gardırop kapak ayarı sonrası — düzgün hizalanmış gardırop kapakları",
  }),
  createWork({
    slug: "surgulu-dolap-rayi",
    category: "Sürgülü Dolap",
    title: "Sürgülü Dolap Rayı",
    description:
      "Takılan sürgülü dolap ray sistemi yenilenerek sessiz ve akıcı kullanım sağlandı.",
    beforeAlt:
      "Mersin sürgülü dolap ray tamiri öncesi — takılan ve zor kayan kapak",
    afterAlt:
      "Mersin sürgülü dolap ray tamiri sonrası — akıcı çalışan sürgülü dolap",
  }),
  createWork({
    slug: "cekmece-rayi",
    category: "Çekmece",
    title: "Çekmece Rayı Değişimi",
    description:
      "Eski ray sistemi değiştirilerek çekmeceler yumuşak ve rahat çalışır hale getirildi.",
    beforeAlt:
      "Mersin çekmece rayı değişimi öncesi — sert kapanan ve zor açılan çekmece",
    afterAlt:
      "Mersin çekmece rayı değişimi sonrası — yumuşak kapanan yenilenmiş çekmece",
  }),
  createWork({
    slug: "mentese",
    category: "Menteşe",
    title: "Menteşe Değişimi",
    description:
      "Yıpranan menteşeler kaliteli yeni menteşeler ile değiştirildi.",
    beforeAlt:
      "Mersin menteşe değişimi öncesi — gevşek ve sarkan dolap kapağı",
    afterAlt:
      "Mersin menteşe değişimi sonrası — sağlam menteşelerle düzgün kapanan kapak",
  }),
  createWork({
    slug: "kapi",
    category: "Kapı",
    title: "Ahşap Kapı Tamiri",
    description:
      "Kırık, çizik ve gevşeyen ahşap kapı profesyonel şekilde onarıldı.",
    beforeAlt:
      "Mersin ahşap kapı tamiri öncesi — çizik ve hasarlı kapı yüzeyi",
    afterAlt:
      "Mersin ahşap kapı tamiri sonrası — onarılmış ve düzgün kapanan ahşap kapı",
  }),
  createWork({
    slug: "masa",
    category: "Masa",
    title: "Masa Tamiri",
    description:
      "Sallanan veya hasar görmüş masa güçlendirilerek uzun ömürlü kullanım sağlandı.",
    beforeAlt:
      "Mersin masa tamiri öncesi — sallanan ve hasarlı masa görünümü",
    afterAlt:
      "Mersin masa tamiri sonrası — güçlendirilmiş ve sağlam masa",
  }),
  createWork({
    slug: "komodin",
    category: "Komodin",
    title: "Komodin Tamiri",
    description:
      "Hasarlı komodin tamir edilerek estetik görünümü yeniden kazandırıldı.",
    beforeAlt:
      "Mersin komodin tamiri öncesi — hasarlı ve yıpranmış komodin",
    afterAlt:
      "Mersin komodin tamiri sonrası — onarılmış ve düzenli komodin görünümü",
  }),
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Mobilya Onarım",
    description:
      "Kırık, çatlak ve hasarlı mobilyalarınızı Mersin genelinde yerinde onarıyoruz.",
    icon: "repair",
    href: "/hizmetler/mersin-mobilya-onarim",
  },
  {
    title: "Mobilya Yenileme",
    description:
      "Eski mobilyalarınıza modern ve kullanışlı bir görünüm kazandırıyoruz.",
    icon: "refresh",
    href: "/hizmetler/mersin-mobilya-yenileme",
  },
  {
    title: "Mutfak Dolabı Yenileme",
    description:
      "Eski mutfak dolaplarınızı yerinde kapak boyama, menteşe değişimi ve montaj işlemleriyle yeniliyoruz.",
    icon: "kitchen",
    href: "/hizmetler/mersin-mutfak-dolabi-yenileme",
  },
  {
    title: "Menteşe Değişimi",
    description: "Sarkmış kapaklar ve gevşek menteşeler için hızlı menteşe değişimi.",
    icon: "hinge",
    href: "/hizmetler/mersin-mentese-degisimi",
  },
  {
    title: "Ray Değişimi",
    description: "Çekmece ve dolap raylarınızı dayanıklı parçalarla yeniliyoruz.",
    icon: "rail",
    href: "/hizmetler/mersin-ray-degisimi",
  },
  {
    title: "Dolap Kapak Ayarı",
    description: "Hizası bozuk kapakları düzgün ve sessiz kapanacak şekilde ayarlıyoruz.",
    icon: "adjust",
    href: "/hizmetler/mersin-dolap-kapak-ayari",
  },
  {
    title: "Kapı Onarım",
    description:
      "Mobilya kapılarındaki kırık, çatlak ve menteşe sorunlarını gideriyoruz.",
    icon: "door",
    href: "/hizmetler/mersin-kapi-onarim",
  },
  {
    title: "Dolap Kurulum",
    description:
      "Yeni dolaplarınızı profesyonelce kuruyor, sağlam ve düzgün monte ediyoruz.",
    icon: "cabinet",
    href: "/hizmetler/mersin-dolap-kurulum",
  },
  {
    title: "Gardırop Kurulumu",
    description: "Gardırop montajını eksiksiz ve güvenli şekilde tamamlıyoruz.",
    icon: "wardrobe",
    href: "/hizmetler/mersin-gardirop-kurulumu",
  },
  {
    title: "Vestiyer / Portmanto Yenileme",
    description: "Eski vestiyer ve portmantolarınıza modern, temiz ve kullanışlı bir görünüm kazandırıyoruz.",
    icon: "wardrobe",
    href: "/hizmetler/mersin-vestiyer-portmanto-yenileme",
  },
  {
    title: "Sürgülü Dolap Ray Tamiri",
    description: "Takılan veya kırılan sürgülü ray sistemlerini onarıyoruz.",
    icon: "sliding",
    href: "/hizmetler/mersin-surgulu-dolap-ray-tamiri",
  },
  {
    title: "Çekmece Ray Değişimi",
    description: "Yumuşak kapanan, dayanıklı çekmece rayları ile değişim yapıyoruz.",
    icon: "drawer",
    href: "/hizmetler/mersin-cekmece-ray-degisimi",
  },
  {
    title: "Masa Sandalye Tamiri",
    description: "Sallanan, kırık veya gevşek masa ve sandalyeleri tamir ediyoruz.",
    icon: "chair",
    href: "/hizmetler/mersin-masa-sandalye-tamiri",
  },
  {
    title: "Mobilya Montaj ve Demontaj",
    description: "Taşınma ve yenileme süreçlerinde montaj ve demontaj desteği.",
    icon: "assembly",
    href: "/hizmetler/mersin-mobilya-montaj-demontaj",
  },
  {
    title: "Tekne Tik ve Ahşap Bakımı",
    description:
      "Tekne tik güverte, ahşap küpeşte, kamara mobilyası ve marin vernik işlemlerini yapıyoruz.",
    icon: "refresh",
    href: "/hizmetler/mersin-tekne-tik-ahsap-bakimi",
  },
];

export const WHY_US = [
  {
    title: "40 Yıllık Ustalık Tecrübesi",
    description:
      "Erdoğan Kuşçu, uzun yıllara dayanan mobilya ustalığı deneyimi ve ustalık belgesiyle işlerinizi güvenle, titizlikle ve profesyonelce tamamlar.",
  },
  {
    title: "Usta İşi Kalite",
    description: "Erdoğan Kuşçu'nun yılların deneyimiyle her iş titizlikle ve ustalıkla yapılır.",
  },
  {
    title: "Yerinde Hızlı Servis",
    description: "Mağazaya gitmenize gerek yok. Mersin'in her noktasına gelerek hizmet veriyoruz.",
  },
  {
    title: "Şeffaf İletişim",
    description: "İş öncesi net bilgi, uygun fiyat ve güvenilir hizmet anlayışıyla çalışıyoruz.",
  },
  {
    title: "Geniş Hizmet Yelpazesi",
    description: "Tamirden montaja, menteşeden ray değişimine kadar tüm mobilya ihtiyaçlarınız tek elden.",
  },
] as const;

export const FAQS = [
  {
    question: "Mersin'in hangi ilçelerine hizmet veriyorsunuz?",
    answer:
      "Mersin genelinde yerinde servis hizmeti sunuyoruz. Mezitli, Yenişehir, Toroslar, Akdeniz ve çevre ilçelere randevu ile geliyoruz.",
  },
  {
    question: "Fiziksel mağazanız veya atölyeniz var mı?",
    answer:
      "Hayır. Alo Mobilya olarak tamamen yerinde servis modeliyle çalışıyoruz. İşlerinizi kendi adresinizde, evinizde veya iş yerinizde yapıyoruz.",
  },
  {
    question: "Fiyat nasıl belirleniyor?",
    answer:
      "Yapılacak işin türüne ve kapsamına göre fiyat belirlenir. WhatsApp veya telefon ile kısa bir bilgi paylaştığınızda size ön bilgi verebiliriz.",
  },
  {
    question: "Aynı gün servis mümkün mü?",
    answer:
      "Yoğunluğa bağlı olarak aynı gün veya ertesi gün randevu imkânı sunuyoruz. Acil durumlar için WhatsApp üzerinden yazabilirsiniz.",
  },
  {
    question: "Hangi mobilya türlerinde hizmet veriyorsunuz?",
    answer:
      "Dolap, gardırop, mutfak dolabı, masa, sandalye, çekmece ve sürgülü dolap dahil tüm ev ve ofis mobilyalarında tamir, bakım ve montaj hizmeti veriyoruz.",
  },
] as const;

export const LINKS = {
  tel: `tel:${BUSINESS.phoneRaw}`,
  whatsapp: `https://wa.me/${BUSINESS.whatsapp}`,
  whatsappMessage: `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent("Merhaba, mobilya tamiri/montajı için bilgi almak istiyorum.")}`,
} as const;
