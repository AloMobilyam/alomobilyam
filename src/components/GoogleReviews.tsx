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
    <section id="yorumlar" className="scroll-mt-16 bg-cream-50 py-14 sm:scroll-mt-20 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Müşteri Yorumları"
          title="Google Yorumları"
          description="Müşterilerimizin deneyimlerinden bazıları. Gerçek Google yorumları yakında eklenecektir."
        />

        <m.div
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {REVIEWS.map((review) => (
            <m.article
              key={review.id}
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col rounded-2xl border border-wood-100 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-wood-100 font-semibold text-wood-700">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-wood-900">{review.name}</p>
                    <p className="text-xs text-wood-500">{review.date}</p>
                  </div>
                </div>
                <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </div>

              <div className="mt-3">
                <StarRating rating={review.rating} />
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-wood-600">
                &ldquo;{review.text}&rdquo;
              </p>
            </m.article>
          ))}
        </m.div>

        <m.div
          className="mt-8 flex items-center justify-center gap-2 rounded-2xl border border-dashed border-wood-200 bg-white/60 px-4 py-3 text-sm text-wood-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
        >
          <span className="font-semibold text-amber-500">★★★★★</span>
          Google yorumları placeholder — gerçek yorumlar yakında
        </m.div>
      </div>
    </section>
  );
}
