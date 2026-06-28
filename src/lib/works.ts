/** Gerçek fotoğraf dosyası mı yoksa placeholder yolu mu kontrol eder. */
export function isRealWorkImage(src: string): boolean {
  return /\.(jpe?g|png|webp|avif)$/i.test(src);
}

export const WORK_PLACEHOLDER_LABELS = {
  before: "Öncesi görseli eklenecek",
  after: "Sonrası görseli eklenecek",
} as const;
