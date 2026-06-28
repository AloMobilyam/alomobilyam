import { WORKS } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";
import { WorkCard } from "./WorkCard";

export function Gallery() {
  return (
    <section id="galeri" className="scroll-mt-16 bg-white py-14 sm:scroll-mt-20 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Öncesi & Sonrası"
          title="İşlerimizden Örnekler"
          description="Tamir ve yenileme çalışmalarımızdan önce ve sonra örnekleri. Her işte farkı net şekilde görebilirsiniz."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {WORKS.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}
