"use client";

import { m } from "framer-motion";
import { REVIEWS } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} yıldız`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-amber-400" : "text-wood-200"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function GoogleReviews() {
  return (
    <section id="yorumlar" className="section-padding scroll-mt-14 bg-cream-50 sm:scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Müşteri Yorumları"
          title="Müşterilerimiz Ne Diyor?"
          description="Mersin genelinde mobilya tamiri, bakım, montaj ve yenileme hizmeti alan müşterilerimizin değerlendirmeleri."
        />

        <m.div
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {REVIEWS.map((review) => (
            <m.article
              key={review.id}
              variants={fadeInUp}
              className="flex flex-col rounded-2xl border border-wood-100 bg-white p-5 shadow-sm ring-1 ring-wood-100/80 sm:p-6"
            >
              <p className="font-semibold text-wood-800">{review.name}</p>
              <div className="mt-2">
                <StarRating rating={review.rating} />
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-wood-600 sm:text-[0.9375rem]">
                &ldquo;{review.text}&rdquo;
              </p>
            </m.article>
          ))}
        </m.div>
      </div>
    </section>
  );
}
