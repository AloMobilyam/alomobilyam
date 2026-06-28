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
          className={`mb-2 text-sm font-semibold uppercase tracking-widest ${
            isLight ? "text-cream-300" : "text-wood-600"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-3xl font-bold tracking-tight sm:text-4xl ${
          isLight ? "text-cream-50" : "text-wood-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            isLight ? "text-cream-200" : "text-wood-700"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
