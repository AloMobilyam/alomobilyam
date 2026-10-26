"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const photos = [
  { file: "mutfak-dolabi-genel", title: "Mutfak dolabı", detail: "Genel görünüm", alt: "Alo Mobilya mutfak çalışması: açık renk kapaklar ve siyah kulplarla L mutfak dolabı" },
  { file: "mutfak-dolabi-detay", title: "Mutfak dolabı", detail: "Farklı açıdan görünüm", alt: "Tamamlanan mutfak dolabının tezgâh ve kapak detayları" },
  { file: "aynali-dolap", title: "Aynalı dolap", detail: "Dekoratif kapak detayları", alt: "Çapraz desenli ayna kapakları ve siyah kulplarıyla dört kapaklı dolap" },
  { file: "aydinlatmali-antre", title: "Aydınlatmalı antre ünitesi", detail: "Ayna, çekmece ve duvar paneli", alt: "Dekoratif duvar paneli üzerinde aydınlatmalı ayna ve asma çekmeceli antre ünitesi" },
  { file: "camli-kapi", title: "Camlı iç kapı", detail: "Çift kanatlı kapı çalışması", alt: "Açık renk çerçeveli, cam bölmeli çift kanatlı iç kapı" },
];
const imagePath = (file: string) => `/images/son-calismalar/${file}.webp`;

export function LatestWorks() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState(0);
  const photo = photos[selected];

  function openPhoto(index: number) {
    setSelected(index);
    dialogRef.current?.showModal();
  }

  return (
    <div className="mt-10 mb-14" aria-labelledby="latest-works-title">
      <div className="mb-6">
        <span className="rounded-full bg-wood-100 px-3 py-1 text-xs font-semibold text-wood-700">Yeni çalışmalar</span>
        <h3 id="latest-works-title" className="mt-3 font-serif text-2xl font-bold text-wood-900 sm:text-3xl">Son Çalışmalarımız</h3>
        <p className="mt-2 text-sm leading-relaxed text-wood-600">Tamamladığımız işlerden en yeni kareler. Detayları görmek için fotoğraflara dokunun.</p>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-6">
        {photos.map((item, index) => (
          <button key={item.file} type="button" onClick={() => openPhoto(index)}
            aria-label={`${item.title} — ${item.detail}, fotoğrafı büyüt`}
            className={`group overflow-hidden rounded-2xl border border-wood-100 bg-white text-left shadow-sm transition-shadow hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wood-700 ${index < 2 ? "sm:col-span-3" : "sm:col-span-2"}`}>
            <div className="relative aspect-[4/3] bg-cream-100">
              <Image src={imagePath(item.file)} alt={item.alt} fill className="object-contain"
                sizes={index < 2 ? "(max-width: 639px) 100vw, (max-width: 1152px) 50vw, 550px" : "(max-width: 639px) 100vw, (max-width: 1152px) 33vw, 360px"} />
              <span aria-hidden="true" className="absolute bottom-3 right-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-wood-900 shadow-sm">Büyüt ↗</span>
            </div>
            <div className="px-4 py-4">
              <span className="block font-serif text-lg font-bold text-wood-900">{item.title}</span>
              <span className="mt-1 block text-sm text-wood-600">{item.detail}</span>
            </div>
          </button>
        ))}
      </div>
      <dialog ref={dialogRef} aria-labelledby="work-photo-title"
        onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current?.close(); }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") setSelected((value) => (value + 1) % photos.length);
          if (event.key === "ArrowLeft") setSelected((value) => (value + photos.length - 1) % photos.length);
        }}
        className="fixed inset-0 m-auto w-[calc(100%-2rem)] max-w-5xl max-h-[90dvh] overflow-y-auto rounded-2xl bg-white p-4 shadow-2xl backdrop:bg-black/80 sm:p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h4 id="work-photo-title" className="font-serif text-lg font-bold text-wood-900">{photo.title} <span className="font-sans text-sm font-normal">({selected + 1}/{photos.length})</span></h4>
          <button type="button" autoFocus onClick={() => dialogRef.current?.close()} className="min-h-11 rounded-lg bg-wood-100 px-4 text-sm font-semibold text-wood-900">Kapat ✕</button>
        </div>
        <div className="relative h-[60dvh]">
          <Image src={imagePath(photo.file)} alt={photo.alt} fill sizes="(max-width: 1024px) 95vw, 1000px" className="object-contain" />
        </div>
        <div className="mt-3 flex items-center justify-between gap-3">
          <button type="button" onClick={() => setSelected((value) => (value + photos.length - 1) % photos.length)} className="min-h-11 rounded-lg bg-wood-100 px-4 text-sm font-semibold text-wood-900">← Önceki</button>
          <p className="hidden text-sm text-wood-600 sm:block">{photo.detail}</p>
          <button type="button" onClick={() => setSelected((value) => (value + 1) % photos.length)} className="min-h-11 rounded-lg bg-wood-100 px-4 text-sm font-semibold text-wood-900">Sonraki →</button>
        </div>
      </dialog>
    </div>
  );
}
