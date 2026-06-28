type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  variant?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
  variant = "dark",
}: SectionHeadingProps) {
  const isLight = variant === "light";

  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p
          className={`mb-1.5 text-[11px] font-semibold uppercase tracking-widest sm:mb-2 sm:text-sm ${
            isLight ? "text-cream-300" : "text-wood-600"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-[1.375rem] font-bold leading-snug tracking-tight sm:text-3xl lg:text-4xl ${
          isLight ? "text-cream-50" : "text-wood-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mx-auto mt-2 max-w-prose text-base leading-relaxed sm:mt-4 sm:text-lg ${
            isLight ? "text-cream-200" : "text-wood-700"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
