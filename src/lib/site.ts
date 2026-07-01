export const CANONICAL_SITE_URL = "https://www.alomobilyam.com";

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
  owner: "Erdoğan Kuşçu",
  phone: "+90 532 454 01 19",
  phoneRaw: "+905324540119",
  whatsapp: "905324540119",
  area: "Mersin",
  tagline: "Mersin geneli yerinde mobilya tamir, bakım, onarım ve montaj hizmeti",
  experienceYears: "40+",
} as const;

export const HERO_DESCRIPTION =
  "Erdoğan Kuşçu'nun 40 yılı aşkın mobilya ustalığı tecrübesiyle Mersin genelinde yerinde tamir, onarım, bakım ve montaj hizmeti.";

export const ON_SITE_SERVICE_IMAGE = "/site/yerinde-servis.png";

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
  date: string;
};

export const REVIEWS: Review[] = [
  {
    id: "review-1",
    name: "Örnek Müşteri 1",
    rating: 5,
    text: "Mutfak dolabı kapaklarımız sarkıyordu. Aynı gün gelip mükemmel şekilde ayarladı. Çok memnun kaldık.",
    date: "Örnek yorum",
  },
  {
    id: "review-2",
    name: "Örnek Müşteri 2",
    rating: 5,
    text: "Çekmece rayları değiştirildi, artık sorunsuz açılıp kapanıyor. Usta işi, tavsiye ederim.",
    date: "Örnek yorum",
  },
  {
    id: "review-3",
    name: "Örnek Müşteri 3",
    rating: 5,
    text: "Gardırop kurulumu hızlı ve düzgün yapıldı. WhatsApp'tan yazınca hemen dönüş aldım.",
    date: "Örnek yorum",
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
  }),
  createWork({
    slug: "banyo-dolabi",
    category: "Banyo Dolabı",
    title: "Banyo Dolabı Tamiri",
    description:
      "Şişen ve deforme olan banyo dolabı profesyonel şekilde onarıldı.",
  }),
  createWork({
    slug: "tv-unitesi",
    category: "TV Ünitesi",
    title: "TV Ünitesi Tamiri",
    description:
      "Hasarlı TV ünitesi tamir edilerek sağlam ve estetik görünümü geri kazandırıldı.",
  }),
  createWork({
    slug: "gardirop-kapak",
    category: "Gardırop",
    title: "Gardırop Kapak Ayarı",
    description:
      "Sarkan gardırop kapakları yeniden ayarlanarak sorunsuz çalışması sağlandı.",
  }),
  createWork({
    slug: "surgulu-dolap-rayi",
    category: "Sürgülü Dolap",
    title: "Sürgülü Dolap Rayı",
    description:
      "Takılan sürgülü dolap ray sistemi yenilenerek sessiz ve akıcı kullanım sağlandı.",
  }),
  createWork({
    slug: "cekmece-rayi",
    category: "Çekmece",
    title: "Çekmece Rayı Değişimi",
    description:
      "Eski ray sistemi değiştirilerek çekmeceler yumuşak ve rahat çalışır hale getirildi.",
  }),
  createWork({
    slug: "mentese",
    category: "Menteşe",
    title: "Menteşe Değişimi",
    description:
      "Yıpranan menteşeler kaliteli yeni menteşeler ile değiştirildi.",
  }),
  createWork({
    slug: "kapi",
    category: "Kapı",
    title: "Ahşap Kapı Tamiri",
    description:
      "Kırık, çizik ve gevşeyen ahşap kapı profesyonel şekilde onarıldı.",
  }),
  createWork({
    slug: "masa",
    category: "Masa",
    title: "Masa Tamiri",
    description:
      "Sallanan veya hasar görmüş masa güçlendirilerek uzun ömürlü kullanım sağlandı.",
  }),
  createWork({
    slug: "komodin",
    category: "Komodin",
    title: "Komodin Tamiri",
    description:
      "Hasarlı komodin tamir edilerek estetik görünümü yeniden kazandırıldı.",
  }),
];

export const SERVICES: ServiceItem[] = [
  { title: "Mobilya Onarım", description: "Kırık, çatlak ve hasarlı mobilyalarınızı yerinde onarıyoruz.", icon: "repair" },
  { title: "Mobilya Yenileme", description: "Eski mobilyalarınıza modern ve kullanışlı bir görünüm kazandırıyoruz.", icon: "refresh" },
  {
    title: "Mutfak Dolabı Yenileme",
    description:
      "Eski mutfak dolaplarınızı yerinde kapak boyama, menteşe değişimi ve montaj işlemleriyle yeniliyoruz.",
    icon: "kitchen",
    href: "/hizmetler/mersin-mutfak-dolabi-yenileme",
  },
  { title: "Menteşe Değişimi", description: "Sarkmış kapaklar ve gevşek menteşeler için hızlı menteşe değişimi.", icon: "hinge" },
  { title: "Ray Değişimi", description: "Çekmece ve dolap raylarınızı dayanıklı parçalarla yeniliyoruz.", icon: "rail" },
  { title: "Dolap Kapak Ayarı", description: "Hizası bozuk kapakları düzgün ve sessiz kapanacak şekilde ayarlıyoruz.", icon: "adjust" },
  { title: "Kapı Onarım", description: "Mobilya kapılarındaki kırık, çatlak ve menteşe sorunlarını gideriyoruz.", icon: "door" },
  { title: "Dolap Kurulum", description: "Yeni dolaplarınızı profesyonelce kuruyor, sağlam ve düzgün monte ediyoruz.", icon: "cabinet" },
  { title: "Gardırop Kurulumu", description: "Gardırop montajını eksiksiz ve güvenli şekilde tamamlıyoruz.", icon: "wardrobe" },
  { title: "Mutfak Dolabı Tamiri", description: "Mutfak dolaplarında menteşe, ray ve kapak sorunlarına kalıcı çözüm.", icon: "kitchen" },
  { title: "Sürgülü Dolap Ray Tamiri", description: "Takılan veya kırılan sürgülü ray sistemlerini onarıyoruz.", icon: "sliding" },
  { title: "Çekmece Ray Değişimi", description: "Yumuşak kapanan, dayanıklı çekmece rayları ile değişim yapıyoruz.", icon: "drawer" },
  { title: "Masa Sandalye Tamiri", description: "Sallanan, kırık veya gevşek masa ve sandalyeleri tamir ediyoruz.", icon: "chair" },
  { title: "Mobilya Montaj ve Demontaj", description: "Taşınma ve yenileme süreçlerinde montaj ve demontaj desteği.", icon: "assembly" },
  { title: "Yerinde Servis", description: "Mersin genelinde adresinize gelerek tüm işlemleri yerinde yapıyoruz.", icon: "onsite" },
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
