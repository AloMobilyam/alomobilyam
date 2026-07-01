import { BUSINESS, CANONICAL_SITE_URL, HERO_SHOWCASE_WORK, LINKS } from "@/lib/site";

export const SERVICE_SLUG = "mersin-mutfak-dolabi-yenileme";

export const SERVICE_PATH = `/hizmetler/${SERVICE_SLUG}` as const;

export const SERVICE_URL = `${CANONICAL_SITE_URL}${SERVICE_PATH}`;

export const SERVICE_TITLE = "Mersin Mutfak Dolabı Yenileme";

export const SERVICE_METADATA = {
  title: "Mersin Mutfak Dolabı Yenileme | Kapak, Boya ve Lake — Alo Mobilya",
  description:
    "Mersin genelinde yerinde mutfak dolabı yenileme hizmeti. Kapak değişimi, boya, lake, MDF lam, menteşe ve ray yenileme. Ustalık belgeli Erdoğan Kuşçu ile fotoğrafla ön teklif alın.",
  keywords: [
    "mersin mutfak dolabı yenileme",
    "mersin mutfak dolabı boyama",
    "yerinde mutfak dolabı yenileme",
    "mutfak dolabı kapak yenileme",
    "mutfak dolabı kapak boyama Mersin",
    "mutfak dolabı lake kapak",
    "mutfak dolabı MDF lam",
    "Alo Mobilya",
    "Erdoğan Kuşçu",
  ],
  ogImage: {
    url: "/works/mutfak-dolabi-sonra.png",
    alt: "Mersin mutfak dolabı yenileme sonrası — yenilenmiş modern kapaklar",
  },
} as const;

export const SERVICE_WHATSAPP_MESSAGE =
  "Merhaba, Mersin mutfak dolabı yenileme hizmeti hakkında bilgi almak istiyorum.";

export const SERVICE_TESTIMONIALS_WHATSAPP_MESSAGE =
  "Merhaba, mutfak dolabımın fotoğraflarını göndermek ve ön teklif almak istiyorum.";

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
  h1: "Mersin Mutfak Dolabı Yenileme",
  h1Highlight: "Yerinde Kapak Boyama ve Yenileme",
  paragraphs: [
    "Sararmış, boyası dökülen veya eskiyen mutfak dolabı kapakları mutfağınızın görünümünü olumsuz etkiler. Mersin genelinde Alo Mobilya olarak yeni dolap almadan, mevcut dolabınızı adresinizde yeniliyoruz.",
    "Erdoğan Kuşçu'nun 40 yılı aşkın ustalık tecrübesi ve ustalık belgesiyle kapak boyama, zımparalama, menteşe değişimi ve montaj işlemlerini evinizde veya iş yerinizde profesyonelce tamamlıyoruz.",
  ],
  trustItems: ["40+ yıllık tecrübe", "Ustalık belgeli", "Garantili işçilik"],
  showcase: HERO_SHOWCASE_WORK,
} as const;

export const SERVICE_PAGE_LINKS = {
  tel: LINKS.tel,
  whatsapp: SERVICE_WHATSAPP_LINK,
} as const;

export const SERVICE_GALLERY_IMAGE_BASE =
  "/mutfak-dolabi-yenileme/once-sonra" as const;

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

function galleryImage(filename: string) {
  return `${SERVICE_GALLERY_IMAGE_BASE}/${filename}`;
}

export const SERVICE_BEFORE_AFTER_GALLERY: ServiceBeforeAfterItem[] = [
  {
    id: 1,
    before: {
      src: galleryImage("once1.png"),
      alt: "Mersin mutfak dolabı yenileme öncesi — yıpranmış krem rengi klasik kapaklar, ahşap görünümlü tezgah ve beyaz eşyalar",
    },
    after: {
      src: galleryImage("sonra1.png"),
      alt: "Mersin mutfak dolabı yenileme sonrası — krem shaker kapaklar, koyu çıta detayı ve modern mutfak aydınlatması",
    },
    caption:
      "L tipi mutfakta eski krem kapaklar yerinde boyama ve yenileme ile modern shaker tarzına dönüştürüldü.",
  },
  {
    id: 2,
    before: {
      src: galleryImage("once2.png"),
      alt: "Mersin mutfak dolabı yenileme öncesi — sararmış krem panel kapaklar, granit tezgah ve beyaz ocak",
    },
    after: {
      src: galleryImage("sonra2.png"),
      alt: "Mersin mutfak dolabı yenileme sonrası — bej düz panel kapaklar, ince metal kulp ve ferah mutfak görünümü",
    },
    caption:
      "Geleneksel krem dolaplar bej tonlu düz kapaklara yenilenerek mutfağa daha modern bir hava kazandırıldı.",
  },
  {
    id: 3,
    before: {
      src: galleryImage("once3.png"),
      alt: "Mersin mutfak dolabı yenileme öncesi — bal rengi ahşap kapaklar, kemerli panel detayları ve cam vitrinli üst dolaplar",
    },
    after: {
      src: galleryImage("sonra3.png"),
      alt: "Mersin mutfak dolabı yenileme sonrası — adaçayı yeşili shaker kapaklar ve güncellenmiş mutfak düzeni",
    },
    caption:
      "Eski bal rengi ahşap kapaklar adaçayı yeşili shaker tarzına boyanarak mutfağa çağdaş bir karakter verildi.",
  },
  {
    id: 4,
    before: {
      src: galleryImage("once4.png"),
      alt: "Mersin mutfak dolabı yenileme öncesi — ahşap kenarlı krem dolaplar, fayans zemin ve pencere önü lavabo",
    },
    after: {
      src: galleryImage("sonra4.png"),
      alt: "Mersin mutfak dolabı yenileme sonrası — sade beyaz kapaklar, temiz çizgiler ve aydınlık mutfak atmosferi",
    },
    caption:
      "Ahşap çıtalı eski kapaklar sade beyaz yüzeylere dönüştürülerek mutfak daha ferah ve güncel göründü.",
  },
  {
    id: 5,
    before: {
      src: galleryImage("once5.png"),
      alt: "Mersin mutfak dolabı yenileme öncesi — koyu kahverengi ahşap kapaklar, bej tezgah ve beyaz gazlı ocak",
    },
    after: {
      src: galleryImage("sonra5.png"),
      alt: "Mersin mutfak dolabı yenileme sonrası — parlak krem kapaklar, uyumlu tezgah ve yenilenmiş mutfak hattı",
    },
    caption:
      "Koyu renkli ahşap dolaplar parlak krem tonuna boyanarak mutfağın tamamında aydınlık bir görünüm sağlandı.",
  },
  {
    id: 6,
    before: {
      src: galleryImage("once6.png"),
      alt: "Mersin mutfak dolabı yenileme öncesi — krem klasik kapaklar, koyu granit tezgah ve beyaz buzdolabı",
    },
    after: {
      src: galleryImage("sonra6.png"),
      alt: "Mersin mutfak dolabı yenileme sonrası — yenilenmiş açık ton kapaklar, düzenli tezgah hattı ve modern detaylar",
    },
    caption:
      "Klasik krem kapaklar ve koyu tezgah uyumu yerinde kapak yenileme ile daha dengeli bir mutfak estetiğine kavuştu.",
  },
  {
    id: 7,
    before: {
      src: galleryImage("once7.png"),
      alt: "Mersin mutfak dolabı yenileme öncesi — kemerli krem ahşap kapaklar, desenli fayans ve beyaz fırın",
    },
    after: {
      src: galleryImage("sonra7.png"),
      alt: "Mersin mutfak dolabı yenileme sonrası — düz panel kapaklar, sade fayans hattı ve toparlanmış mutfak görünümü",
    },
    caption:
      "Kemerli eski kapaklar düz panel tasarıma geçirilerek mutfak daha sade ve kullanışlı bir düzene kavuşturuldu.",
  },
  {
    id: 8,
    before: {
      src: galleryImage("once8.png"),
      alt: "Mersin mutfak dolabı yenileme öncesi — bordo kırmızı ahşap kapaklar, bej fayans ve cam vitrinli üst dolaplar",
    },
    after: {
      src: galleryImage("sonra8.png"),
      alt: "Mersin mutfak dolabı yenileme sonrası — krem düz kapaklar, cam detaylı üst dolaplar ve aydınlık mutfak",
    },
    caption:
      "Bordo ahşap kapaklar krem tona boyanarak aynı mutfak düzeninde tamamen farklı ve modern bir görünüm elde edildi.",
  },
  {
    id: 9,
    before: {
      src: galleryImage("once9.png"),
      alt: "Mersin mutfak dolabı yenileme öncesi — kahverengi çıtalı krem kapaklar, pencere önü lavabo ve beyaz eşyalar",
    },
    after: {
      src: galleryImage("sonra9.png"),
      alt: "Mersin mutfak dolabı yenileme sonrası — tek renk krem kapaklar, sade çizgiler ve düzenli mutfak alanı",
    },
    caption:
      "Kahverengi çıtalı eski kapaklar tek renk krem yüzeye dönüştürülerek mutfak daha bütüncül ve şık göründü.",
  },
  {
    id: 10,
    before: {
      src: galleryImage("once10.png"),
      alt: "Mersin mutfak dolabı yenileme öncesi — orta ton ahşap kemerli kapaklar, cam vitrinler ve koridor tipi mutfak",
    },
    after: {
      src: galleryImage("sonra10.png"),
      alt: "Mersin mutfak dolabı yenileme sonrası — açık renk modern kapaklar, ferah koridor mutfağı ve güncel görünüm",
    },
    caption:
      "Kemerli ahşap kapaklar açık renk modern yüzeylere yenilenerek dar mutfak alanı daha geniş ve ferah hissettirdi.",
  },
];

export const SERVICE_WORK_STAGES_IMAGE_BASE =
  "/mutfak-dolabi-yenileme/is-asamalari" as const;

export type ServiceWorkStageIcon =
  | "remove"
  | "sand"
  | "paint"
  | "hinge"
  | "countertop"
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

function stageImage(filename: string) {
  return `${SERVICE_WORK_STAGES_IMAGE_BASE}/${filename}`;
}

export const SERVICE_TRUST_CERTIFICATE = {
  src: "/certificates/ustalik-belgesi.png",
  alt: "Erdoğan Kuşçu MEB onaylı ustalık belgesi — Alo Mobilya mutfak dolabı yenileme hizmeti",
  width: 1448,
  height: 1086,
} as const;

export const SERVICE_TRUST_CARDS = [
  { title: "40+ Yıl Tecrübe" },
  { title: "Ustalık Belgeli Hizmet" },
  { title: "Yerinde Servis" },
  { title: "Garantili İşçilik" },
] as const;

export const SERVICE_TRUST_DESCRIPTION =
  "Erdoğan Kuşçu'nun 40 yılı aşan mobilya ustalığı ve ustalık belgesiyle, mutfak dolabı yenileme işlemlerini Mersin genelinde yerinde ve özenli şekilde tamamlıyoruz.";

export const SERVICE_WORK_STAGES: ServiceWorkStage[] = [
  {
    id: 1,
    title: "Kapakların Sökülmesi",
    description:
      "Mutfak dolabı kapakları, çekmeceler ve sökülmesi gereken parçalar titizlikle demonte edilir. Mevcut gövde yapısına zarar vermeden çalışarak yenileme işlemini sağlam bir temel üzerinde başlatırız.",
    icon: "remove",
    image: {
      src: stageImage("kapak-sokme.png"),
      alt: "Mersin mutfak dolabı yenileme — kapakların sökülmesi aşamasında demonte edilen dolap kapakları",
    },
  },
  {
    id: 2,
    title: "Zımparalama",
    description:
      "Eski boya ve vernik tabakası profesyonel zımparalama ile temizlenir. Yüzey pürüzsüz hale getirilerek yeni boyanın düzgün ve kalıcı tutunması sağlanır.",
    icon: "sand",
    image: {
      src: stageImage("zimparalama.png"),
      alt: "Mersin mutfak dolabı yenileme — zımparalama aşamasında kapak yüzeyinin hazırlanması",
    },
  },
  {
    id: 3,
    title: "Boyama",
    description:
      "Seçtiğiniz renk veya ahşap tonunda kapaklar katmanlı boyama tekniğiyle yenilenir. Mutfak dolabı kapaklarına modern, dayanıklı ve estetik bir görünüm kazandırılır.",
    icon: "paint",
    image: {
      src: stageImage("boyama.png"),
      alt: "Mersin mutfak dolabı yenileme — boyama aşamasında kapakların yeniden renklendirilmesi",
    },
  },
  {
    id: 4,
    title: "Menteşe Değişimi",
    description:
      "Yıpranmış, gevşek veya kırık menteşeler yeni parçalarla değiştirilir. Kapak hizası düzeltilerek sessiz kapanma ve uzun ömürlü kullanım sağlanır.",
    icon: "hinge",
    image: {
      src: stageImage("mentese-degisimi.png"),
      alt: "Mersin mutfak dolabı yenileme — menteşe değişimi aşamasında dolap kapak menteşelerinin yenilenmesi",
    },
  },
  {
    id: 5,
    title: "Tezgâh Değişimi",
    description:
      "İstenen durumlarda mutfak tezgâhı sökülür ve yenisi takılır. Dolap gövdesiyle uyumlu, işlevsel ve temiz bir tezgah hattı oluşturulur.",
    icon: "countertop",
    image: {
      src: stageImage("tezgah-degisimi.png"),
      alt: "Mersin mutfak dolabı yenileme — tezgâh değişimi aşamasında mutfak tezgahının yenilenmesi",
    },
  },
  {
    id: 6,
    title: "Montaj ve Son Kontroller",
    description:
      "Yenilenen kapaklar ve parçalar yerinde monte edilir. Açılış-kapanış, hiza ve genel görünüm son kez kontrol edilerek teslim edilir.",
    icon: "assembly",
    image: {
      src: stageImage("montaj-son-kontrol.png"),
      alt: "Mersin mutfak dolabı yenileme — montaj ve son kontroller aşamasında kapakların yerinde takılması",
    },
  },
];

export type ServiceTestimonial = {
  id: number;
  name: string;
  text: string;
};

export const SERVICE_WHAT_IS = {
  eyebrow: "Hizmet Tanımı",
  title: "Mutfak Dolabı Yenileme Nedir?",
  description:
    "Mevcut mutfak dolabınızı sökmeden, gövde yapısını koruyarak görünümünü ve kullanımını güncellemenin pratik yoludur.",
  paragraphs: [
    "Mutfak dolabı yenileme; eski mutfak dolaplarının tamamen sökülüp yerine sıfırdan mutfak yaptırmak yerine, sağlam kalan gövde üzerinde kapak, boya, lake veya MDF lam uygulamasıyla mutfağınıza yeni bir görünüm kazandırma işlemidir. Mersin genelinde Alo Mobilya olarak bu hizmeti adresinizde, yerinde sunuyoruz.",
    "Sararmış, çizilmiş veya modası geçmiş kapaklar; gevşek menteşeler, takılan raylar veya eski kulplar mutfağın hem estetiğini hem de günlük kullanımını olumsuz etkiler. Yenileme sürecinde kapak değişimi, boya veya lake uygulaması, MDF lam kapak montajı, menteşe ve ray değişimi, kulp yenileme ile yerinde montaj adımlarını ihtiyacınıza göre planlıyoruz.",
    "Gövde yapısı sağlam olduğu sürece yeni dolap almadan mutfağınızı güncelleyebilir, tadilat süresini ve maliyeti önemli ölçüde azaltabilirsiniz. Keşif sonrası hangi işlemlerin sizin mutfağınız için uygun olduğunu birlikte belirliyoruz.",
  ],
} as const;

export type ServiceRenovationOperationIcon =
  | "door"
  | "lake"
  | "lam"
  | "hinge"
  | "handle"
  | "repair"
  | "countertop"
  | "assembly";

export type ServiceRenovationOperation = {
  id: number;
  title: string;
  description: string;
  icon: ServiceRenovationOperationIcon;
};

export const SERVICE_RENOVATION_OPERATIONS: ServiceRenovationOperation[] = [
  {
    id: 1,
    title: "Dolap Kapağı Değişimi",
    description:
      "Eski kapaklar sökülür; ölçüye uygun yeni kapaklar üretilir veya hazır kapaklar monte edilir. Mutfak düzeniniz korunurken görünüm tamamen yenilenir.",
    icon: "door",
  },
  {
    id: 2,
    title: "Lake Kapak Yenileme",
    description:
      "Lake uygulamasıyla kapaklara pürüzsüz, dayanıklı ve parlak veya mat bir yüzey kazandırılır. Modern mutfaklarda sık tercih edilen bir yenileme yöntemidir.",
    icon: "lake",
  },
  {
    id: 3,
    title: "MDF Lam Kapak Uygulaması",
    description:
      "Ahşap desenli veya düz renkli MDF lam kapaklarla mutfağınıza sıcak veya sade bir karakter kazandırılır. Geniş renk ve doku seçenekleri sunar.",
    icon: "lam",
  },
  {
    id: 4,
    title: "Menteşe ve Ray Değişimi",
    description:
      "Gevşek, sesli veya kırık menteşeler ile takılan çekmece rayları yenilenir. Kapak hizası düzeltilir, sessiz ve rahat kullanım sağlanır.",
    icon: "hinge",
  },
  {
    id: 5,
    title: "Kulp Değişimi",
    description:
      "Eski veya kırık kulplar modern metal, siyah veya ahşap görünümlü yeni modellerle değiştirilir. Küçük bir dokunuşla mutfağın tamamı daha güncel görünür.",
    icon: "handle",
  },
  {
    id: 6,
    title: "Dolap Gövdesi Onarımı",
    description:
      "Nem, darbe veya yılların yıpratmasıyla hasar gören gövde parçaları onarılır. Yenileme öncesinde sağlam bir altyapı oluşturulur.",
    icon: "repair",
  },
  {
    id: 7,
    title: "Tezgâh Uyumu",
    description:
      "Yenilenen kapaklarla uyumlu tezgâh hattı planlanır. İstenen durumlarda tezgâh değişimi de yapılarak mutfak bütünlüğü sağlanır.",
    icon: "countertop",
  },
  {
    id: 8,
    title: "Yerinde Montaj ve Teslim",
    description:
      "Tüm yenileme işlemleri tamamlandıktan sonra kapaklar ve parçalar adresinizde monte edilir, son kontroller yapılarak teslim edilir.",
    icon: "assembly",
  },
];

export type ServiceComparisonRow = {
  aspect: string;
  renovation: string;
  newKitchen: string;
};

export const SERVICE_COMPARISON = {
  eyebrow: "Karşılaştırma",
  title: "Yenileme mi, Sıfırdan Mutfak mı?",
  description:
    "Her mutfak için aynı çözüm uygun değildir. Gövde durumunu ve bütçenizi değerlendirerek en mantıklı yolu birlikte belirliyoruz.",
  renovationLabel: "Mutfak Dolabı Yenileme",
  newKitchenLabel: "Sıfırdan Mutfak",
  rows: [
    {
      aspect: "Maliyet",
      renovation: "Genellikle daha ekonomik; yalnızca kapak, boya ve aksesuar yenilenir.",
      newKitchen: "Daha yüksek bütçe gerektirir; tüm dolap, tezgâh ve montaj dahildir.",
    },
    {
      aspect: "Süre",
      renovation: "Çoğu projede birkaç gün içinde tamamlanır; mutfak uzun süre kullanılamaz hale gelmez.",
      newKitchen: "Ölçü, üretim ve montaj süreci daha uzundur; tadilat kapsamı genişler.",
    },
    {
      aspect: "Tadilat",
      renovation: "Minimum tadilat; fayans, tesisat ve zemin çoğu zaman olduğu gibi kalır.",
      newKitchen: "Söküm, atık, elektrik ve sıhhi tesisat uyumu gibi ek işler gerekebilir.",
    },
    {
      aspect: "Ne Zaman Tercih Edilir?",
      renovation:
        "Gövde sağlam, ölçüler uygun ve görünüm güncellenmek istendiğinde ideal çözümdür.",
      newKitchen:
        "Gövde çok kötü durumdaysa, ölçüler değişecekse veya mutfak düzeni tamamen yenilenecekse daha mantıklı olabilir.",
    },
  ] satisfies ServiceComparisonRow[],
  note: "Keşif sırasında dolap gövdelerinizi inceliyoruz. Gövde yapısı yeterince sağlam değilse sıfırdan mutfak yaptırmanın daha doğru olacağını açıkça söylüyoruz.",
} as const;

export const SERVICE_PRICING_FACTORS = {
  eyebrow: "Fiyatlandırma",
  title: "Mutfak Dolabı Yenileme Fiyatları Neye Göre Değişir?",
  description:
    "Her mutfak farklı ölçü, kapak sayısı ve malzeme tercihiyle gelir. Net fiyat vermek yerine mutfağınızı görerek veya fotoğraflarınızı inceleyerek size özel ön teklif hazırlıyoruz.",
  factors: [
    {
      title: "Mutfak ölçüsü",
      description: "L tipi, U tipi veya düz mutfak düzeni ile toplam dolap metrajı fiyatı doğrudan etkiler.",
    },
    {
      title: "Kapak sayısı",
      description: "Üst dolap, alt dolap ve çekmece kapak adedi işçilik ve malzeme miktarını belirler.",
    },
    {
      title: "Malzeme tercihi",
      description: "Seçilen kapak malzemesi, kalınlık ve marka fiyat aralığını değiştirir.",
    },
    {
      title: "Boya / lake / MDF lam seçimi",
      description: "Boya yenileme, lake uygulaması veya MDF lam kapak arasında maliyet ve görünüm farkı oluşur.",
    },
    {
      title: "Menteşe, ray ve kulp değişimi",
      description: "Kaç adet menteşe, ray ve kulp yenileneceği toplam işçilik kalemini etkiler.",
    },
    {
      title: "Tezgâh değişimi",
      description: "Yalnızca kapak yenileme ile tezgâhın aynı kalması veya yeni tezgâh takılması fiyatı değiştirir.",
    },
    {
      title: "İşçilik ve montaj kapsamı",
      description: "Yerinde söküm, hazırlık, boyama veya kapak montajı gibi adımların kapsamı teklife yansır.",
    },
  ],
  ctaText:
    "Mutfağınızın birkaç fotoğrafını WhatsApp üzerinden gönderin; ölçü ve işlem kapsamına göre ücretsiz ön teklif alın.",
} as const;

export type ServiceFaqItem = {
  question: string;
  answer: string;
};

export const SERVICE_FAQS: ServiceFaqItem[] = [
  {
    question: "Mutfak dolabı yenileme kaç gün sürer?",
    answer:
      "Kapak sayısı, seçilen işlem türü ve boya veya lake kuruma süresine göre değişir. Çoğu yerinde yenileme projesi birkaç gün içinde tamamlanır. Keşif sonrası size net bir süre aralığı veriyoruz.",
  },
  {
    question: "Eski mutfak dolapları boyanır mı?",
    answer:
      "Evet. Gövde ve kapak yapısı uygunsa eski kapaklar zımparalanıp boyanarak yenilenir. Renk veya doku değişimi için boya ekonomik ve etkili bir seçenek olabilir.",
  },
  {
    question: "Kapak değişimi mi boya mı daha iyi?",
    answer:
      "Kapakların durumuna bağlıdır. Yüzeyi çok yıpranmış veya şekil olarak güncellenmek istenen kapaklarda değişim daha kalıcı sonuç verir. Sağlam kapaklarda boya veya lake daha hızlı ve ekonomik olabilir. Keşifte hangisinin uygun olduğunu birlikte değerlendiriyoruz.",
  },
  {
    question:
      "Mutfak dolabı yenileme sıfırdan mutfak yaptırmaktan daha ekonomik mi?",
    answer:
      "Gövde yapısı sağlam olduğunda genellikle evet. Yalnızca kapak, boya ve aksesuar yenilendiği için sıfırdan mutfağa kıyasla daha düşük bütçeyle belirgin bir görünüm değişimi elde edilir.",
  },
  {
    question: "Menteşe, ray ve kulplar değişiyor mu?",
    answer:
      "İhtiyaca göre evet. Gevşek menteşeler, takılan raylar veya eski kulplar yenileme kapsamına dahil edilebilir. Keşif sırasında hangi parçaların değişmesi gerektiğini belirliyoruz.",
  },
  {
    question: "Tezgâh değişimi de yapılıyor mu?",
    answer:
      "Evet, talep edildiğinde tezgâh değişimi de yapılabilir. Yenilenen kapaklarla uyumlu bir tezgâh hattı oluşturmak için ölçü ve malzeme seçimini birlikte planlıyoruz.",
  },
  {
    question: "Yerinde keşif yapılıyor mu?",
    answer:
      "Evet. Mersin genelinde adresinize gelerek mutfağınızı yerinde inceliyoruz. WhatsApp üzerinden fotoğraf göndererek de ön değerlendirme ve ön teklif alabilirsiniz.",
  },
  {
    question: "Mersin'de mutfak dolabı yenileme hizmeti veriyor musunuz?",
    answer:
      "Evet. Mezitli, Yenişehir, Toroslar, Akdeniz ve Mersin genelinde yerinde mutfak dolabı yenileme hizmeti sunuyoruz. Randevu ile adresinize geliyoruz.",
  },
];

export const SERVICE_TESTIMONIALS: ServiceTestimonial[] = [
  {
    id: 1,
    name: "Ayşe K.",
    text: "Sararmış kapakları krem tona boyattırdık. Evde çalışması rahattı, mutfak çok daha ferah göründü.",
  },
  {
    id: 2,
    name: "Mehmet D.",
    text: "WhatsApp'tan birkaç fotoğraf gönderdik, aynı gün geri dönüş aldık. İş bitince kapaklar düzgün hizalandı.",
  },
  {
    id: 3,
    name: "Zeynep A.",
    text: "Eski menteşeler de yenilendi, kapaklar artık sessiz kapanıyor. Çalışma alanını temiz bıraktılar.",
  },
  {
    id: 4,
    name: "Hasan T.",
    text: "Yeni dolap almak yerine yenilemeyi tercih ettik. Bütçemize uygun oldu, mutfağın görünümü belirgin şekilde değişti.",
  },
  {
    id: 5,
    name: "Elif S.",
    text: "Zımparalama ve boyama işlemi özenli yapıldı. Renk seçiminde yönlendirme aldık, sonuç beklentimizi karşıladı.",
  },
  {
    id: 6,
    name: "Mustafa B.",
    text: "Mezitli'den hizmet aldık, randevuya zamanında geldiler. Teslimden sonra küçük bir ayar için tekrar uğradılar.",
  },
];
