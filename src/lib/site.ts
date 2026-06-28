export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://alomobilyam.vercel.app";

export const BUSINESS = {
  name: "Alo Mobilya",
  owner: "Erdoğan Kuşçu",
  phone: "+90 532 454 01 19",
  phoneRaw: "+905324540119",
  whatsapp: "905324540119",
  area: "Mersin",
  tagline: "Mersin geneli yerinde mobilya tamir, bakım, onarım ve montaj hizmeti",
} as const;

export const NAV_LINKS = [
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#galeri", label: "Galeri" },
  { href: "#yorumlar", label: "Yorumlar" },
  { href: "#sss", label: "SSS" },
  { href: "#iletisim", label: "İletişim" },
] as const;

export const STATS = [
  { value: "500+", label: "Mutlu Müşteri" },
  { value: "1000+", label: "Tamamlanan İş" },
  { value: "%100", label: "Müşteri Memnuniyeti" },
  { value: "7/24", label: "Destek" },
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
    name: "Ayşe K.",
    rating: 5,
    text: "Mutfak dolabı kapaklarımız sarkıyordu. Aynı gün gelip mükemmel şekilde ayarladı. Çok memnun kaldık.",
    date: "2 hafta önce",
  },
  {
    id: "review-2",
    name: "Mehmet Y.",
    rating: 5,
    text: "Çekmece rayları değiştirildi, artık sorunsuz açılıp kapanıyor. Usta işi, tavsiye ederim.",
    date: "1 ay önce",
  },
  {
    id: "review-3",
    name: "Zeynep A.",
    rating: 5,
    text: "Gardırop kurulumu hızlı ve düzgün yapıldı. WhatsApp'tan yazınca hemen dönüş aldım.",
    date: "1 ay önce",
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
};

export type WorkItem = {
  id: string;
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  description: string;
};

export const WORKS: WorkItem[] = [
  {
    id: "dolap-kapak",
    title: "Dolap Kapak Ayarı",
    category: "Dolap Tamiri",
    beforeImage: "/works/dolap-kapak-before.svg",
    afterImage: "/works/dolap-kapak-after.svg",
    description:
      "Sarkmış ve hizası bozuk mutfak dolabı kapakları yeniden ayarlandı, menteşeler güçlendirildi.",
  },
  {
    id: "mentese-degisim",
    title: "Menteşe Değişimi",
    category: "Menteşe & Ray",
    beforeImage: "/works/mentese-before.svg",
    afterImage: "/works/mentese-after.svg",
    description:
      "Yıpranmış menteşeler sökülerek dayanıklı soft-close menteşelerle değiştirildi.",
  },
  {
    id: "cekmece-ray",
    title: "Çekmece Ray Tamiri",
    category: "Ray Değişimi",
    beforeImage: "/works/cekmece-ray-before.svg",
    afterImage: "/works/cekmece-ray-after.svg",
    description:
      "Takılan çekmece rayları yenilendi, yumuşak kapanma sağlandı ve çekmece hizası düzeltildi.",
  },
];

export const SERVICES: ServiceItem[] = [
  { title: "Mobilya Onarım", description: "Kırık, çatlak ve hasarlı mobilyalarınızı yerinde onarıyoruz.", icon: "repair" },
  { title: "Mobilya Yenileme", description: "Eski mobilyalarınıza modern ve kullanışlı bir görünüm kazandırıyoruz.", icon: "refresh" },
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
