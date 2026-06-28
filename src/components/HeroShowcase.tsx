export function HeroShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-wood-300/30 via-transparent to-wood-600/20 blur-2xl" />

      <div className="relative overflow-hidden rounded-3xl border border-wood-200/60 bg-gradient-to-br from-wood-200 via-wood-300 to-wood-500 p-1 shadow-2xl shadow-wood-900/15 ring-1 ring-white/40">
        <div className="relative overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-[#c4a574] via-[#8b6914] to-[#5c4033]">
          <div className="absolute inset-0 opacity-40 [background-image:repeating-linear-gradient(90deg,transparent,transparent_3px,rgba(0,0,0,0.04)_3px,rgba(0,0,0,0.04)_6px)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(255,255,255,0.22),transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.08)_0%,transparent_45%,rgba(44,24,16,0.25)_100%)]" />

          <div className="relative grid grid-cols-2 gap-2 p-3 sm:gap-3 sm:p-4">
            <ShowcasePanel label="Öncesi" tone="before" />
            <ShowcasePanel label="Sonrası" tone="after" highlight />
          </div>

          <div className="relative border-t border-white/10 bg-wood-900/50 px-4 py-3 backdrop-blur-sm">
            <p className="text-center text-sm font-medium text-cream-100">
              Usta işi mobilya tamir &amp; yenileme
            </p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-3 -left-2 rounded-2xl border border-wood-100 bg-white px-3 py-2 shadow-lg shadow-wood-900/10 sm:-left-4">
        <p className="text-xs font-semibold text-wood-800">Yerinde Servis</p>
        <p className="text-[10px] text-wood-500">Mersin geneli</p>
      </div>

      <div className="absolute -right-2 -top-2 rounded-2xl border border-wood-100 bg-wood-800 px-3 py-2 shadow-lg shadow-wood-900/20 sm:-right-4">
        <p className="text-xs font-semibold text-cream-50">Usta İşi</p>
        <p className="text-[10px] text-cream-200">Güvenilir hizmet</p>
      </div>
    </div>
  );
}

function ShowcasePanel({
  label,
  tone,
  highlight = false,
}: {
  label: string;
  tone: "before" | "after";
  highlight?: boolean;
}) {
  const isBefore = tone === "before";

  return (
    <div
      className={`relative aspect-[3/4] overflow-hidden rounded-2xl border shadow-inner ${
        highlight
          ? "border-emerald-200/50 shadow-emerald-900/10"
          : "border-wood-900/20 shadow-wood-900/20"
      }`}
    >
      <div
        className={`absolute inset-0 ${
          isBefore
            ? "bg-gradient-to-br from-wood-400/80 via-wood-500 to-wood-700"
            : "bg-gradient-to-br from-amber-200/90 via-wood-300 to-wood-500"
        }`}
      />
      <div className="absolute inset-0 opacity-30 [background-image:repeating-linear-gradient(0deg,transparent,transparent_4px,rgba(0,0,0,0.05)_4px,rgba(0,0,0,0.05)_8px)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.2),transparent_60%)]" />

      <span
        className={`absolute left-2 top-2 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm sm:text-xs ${
          isBefore
            ? "bg-wood-900/75 text-cream-100"
            : "bg-emerald-700/85 text-white"
        }`}
      >
        {label}
      </span>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-wood-900/70 to-transparent px-3 py-4">
        <div className={`h-1.5 rounded-full ${isBefore ? "w-2/3 bg-wood-300/60" : "w-full bg-cream-200/70"}`} />
        <div className={`mt-2 h-1 rounded-full ${isBefore ? "w-1/2 bg-wood-400/50" : "w-4/5 bg-cream-100/60"}`} />
      </div>
    </div>
  );
}
