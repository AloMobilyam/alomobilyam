import { GALLERY_ITEMS } from "@/lib/site";
import { PlaceholderImage } from "./PlaceholderImage";
import { SectionHeading } from "./SectionHeading";

export function Gallery() {
  return (
    <section id="galeri" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Öncesi & Sonrası"
          title="İşlerimizden Örnekler"
          description="Gerçek iş fotoğrafları yakında eklenecektir. Aşağıdaki alanlar örnek çalışma kategorilerini göstermektedir."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_ITEMS.map((item, index) => (
            <PlaceholderImage
              key={`${item.label}-${item.type}-${index}`}
              label={item.label}
              variant="gallery"
              badge={item.type === "before" ? "Öncesi" : "Sonrası"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
