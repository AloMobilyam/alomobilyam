import { FAQS } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function FAQ() {
  return (
    <section id="sss" className="section-padding scroll-mt-14 bg-cream-50 pb-12 sm:scroll-mt-20 md:pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sık Sorulan Sorular"
          title="Merak Edilenler"
          description="Mersin mobilya tamiri ve montaj hizmeti hakkında sık sorulan sorular."
        />

        <div className="mt-12 space-y-3">
          {FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-wood-100 bg-white shadow-sm"
            >
              <summary className="cursor-pointer list-none px-6 py-5 font-semibold text-wood-900 marker:hidden [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="shrink-0 text-wood-400 transition-transform group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <div className="border-t border-wood-50 px-6 py-4 text-sm leading-relaxed text-wood-600">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
