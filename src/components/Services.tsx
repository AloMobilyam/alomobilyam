"use client";

import Link from "next/link";
import Image from "next/image";
import { m } from "framer-motion";
import { SERVICES, type ServiceItem } from "@/lib/site";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { SectionHeading } from "./SectionHeading";
import { ServiceIcon } from "./ServiceIcon";

export function Services() {
  return (
    <section id="hizmetler" className="section-padding scroll-mt-14 bg-cream-50 sm:scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Hizmetlerimiz"
          title="Mersin'de Mobilya Tamir ve Montaj Hizmetleri"
          description="Ev ve ofis mobilyalarınız için tamir, bakım, onarım ve montaj işlemlerini Mersin genelinde yerinde gerçekleştiriyoruz."
        />

        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-wood-600">
          <Link
            href="/hizmetler/mersin-mutfak-dolabi-yenileme"
            className="font-medium text-wood-800 underline-offset-2 transition-colors hover:text-wood-600 hover:underline"
          >
            Mutfak dolabı yenileme hizmetimizi inceleyin
          </Link>
        </p>

        <m.div
          className="mt-6 grid gap-2.5 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {SERVICES.map((service) => {
            const card = <ServiceCard service={service} />;

            if (service.href) {
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wood-500 focus-visible:ring-offset-2 sm:rounded-2xl"
                >
                  {card}
                </Link>
              );
            }

            return <div key={service.title}>{card}</div>;
          })}
        </m.div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: ServiceItem }) {
  const hasImage = Boolean(service.cardImage);

  return (
    <m.article
      variants={fadeInUp}
      whileHover={{
        y: -4,
        boxShadow: "0 16px 32px -10px rgba(44, 24, 16, 0.14)",
        transition: { duration: 0.25 },
      }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-xl border border-wood-100 bg-white shadow-sm transition-[border-color] duration-300 hover:border-wood-200 sm:rounded-2xl ${
        hasImage ? "" : "p-3.5 sm:p-6"
      }`}
    >
      {hasImage ? (
        <>
          <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-wood-100">
            <Image
              src={service.cardImage!}
              alt={`${service.title} — Alo Mobilya örnek iş`}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-wood-900/15 to-transparent" />
            <div className="absolute bottom-2.5 left-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-white/95 text-wood-700 shadow-sm ring-1 ring-wood-900/5 backdrop-blur-sm sm:bottom-3 sm:left-3 sm:h-9 sm:w-9 sm:rounded-xl">
              <ServiceIcon name={service.icon} className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </div>
          </div>

          <div className="flex flex-1 flex-col p-3.5 sm:p-5">
            <h3 className="font-serif text-sm font-bold text-wood-900 sm:text-lg">
              {service.title}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-wood-600 sm:mt-2 sm:text-sm">
              {service.description}
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-wood-100/50 sm:-right-6 sm:-top-6 sm:h-24 sm:w-24" />

          <div className="relative mb-2.5 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-wood-100 to-wood-200 text-wood-700 transition-colors duration-300 group-hover:from-wood-800 group-hover:to-wood-900 group-hover:text-cream-50 sm:mb-4 sm:h-12 sm:w-12 sm:rounded-2xl">
            <ServiceIcon name={service.icon} className="h-4 w-4 sm:h-6 sm:w-6" />
          </div>

          <h3 className="relative font-serif text-sm font-bold text-wood-900 sm:text-lg">
            {service.title}
          </h3>
          <p className="relative mt-1 text-xs leading-relaxed text-wood-600 sm:mt-2 sm:text-sm">
            {service.description}
          </p>
        </>
      )}
    </m.article>
  );
}
