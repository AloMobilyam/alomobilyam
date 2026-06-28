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

export const SERVICES = [
  { title: "Mobilya Onarım", description: "Kırık, çatlak ve hasarlı mobilyalarınızı yerinde onarıyoruz." },
  { title: "Mobilya Yenileme", description: "Eski mobilyalarınıza modern ve kullanışlı bir görünüm kazandırıyoruz." },
  { title: "Menteşe Değişimi", description: "Sarkmış kapaklar ve gevşek menteşeler için hızlı menteşe değişimi." },
  { title: "Ray Değişimi", description: "Çekmece ve dolap raylarınızı dayanıklı parçalarla yeniliyoruz." },
  { title: "Dolap Kapak Ayarı", description: "Hizası bozuk kapakları düzgün ve sessiz kapanacak şekilde ayarlıyoruz." },
  { title: "Kapı Onarım", description: "Mobilya kapılarındaki kırık, çatlak ve menteşe sorunlarını gideriyoruz." },
  { title: "Dolap Kurulum", description: "Yeni dolaplarınızı profesyonelce kuruyor, sağlam ve düzgün monte ediyoruz." },
  { title: "Gardırop Kurulumu", description: "Gardırop montajını eksiksiz ve güvenli şekilde tamamlıyoruz." },
  { title: "Mutfak Dolabı Tamiri", description: "Mutfak dolaplarında menteşe, ray ve kapak sorunlarına kalıcı çözüm." },
  { title: "Sürgülü Dolap Ray Tamiri", description: "Takılan veya kırılan sürgülü ray sistemlerini onarıyoruz." },
  { title: "Çekmece Ray Değişimi", description: "Yumuşak kapanan, dayanıklı çekmece rayları ile değişim yapıyoruz." },
  { title: "Masa Sandalye Tamiri", description: "Sallanan, kırık veya gevşek masa ve sandalyeleri tamir ediyoruz." },
  { title: "Mobilya Montaj ve Demontaj", description: "Taşınma ve yenileme süreçlerinde montaj ve demontaj desteği." },
  { title: "Yerinde Servis", description: "Mersin genelinde adresinize gelerek tüm işlemleri yerinde yapıyoruz." },
] as const;

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

export const GALLERY_ITEMS = [
  { label: "Dolap kapak ayarı", type: "before" as const },
  { label: "Dolap kapak ayarı", type: "after" as const },
  { label: "Menteşe değişimi", type: "before" as const },
  { label: "Menteşe değişimi", type: "after" as const },
  { label: "Çekmece ray tamiri", type: "before" as const },
  { label: "Çekmece ray tamiri", type: "after" as const },
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
