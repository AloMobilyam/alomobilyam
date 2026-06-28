import { BUSINESS } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-wood-800 bg-wood-950 py-8 pb-24 text-center md:pb-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-serif text-lg font-bold text-cream-50">
          {BUSINESS.name}
        </p>
        <p className="mt-1 text-sm text-cream-300">
          {BUSINESS.owner} · Mersin geneli yerinde mobilya servisi
        </p>
        <p className="mt-4 text-xs text-cream-400">
          © {year} {BUSINESS.name}. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
