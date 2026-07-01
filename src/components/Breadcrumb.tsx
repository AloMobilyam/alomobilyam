import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href: string;
};

type BreadcrumbProps = {
  items: readonly BreadcrumbItem[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-wood-100/80 bg-cream-50/80"
    >
      <div className="mx-auto max-w-6xl px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-wood-600 sm:text-sm">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {index > 0 && (
                  <span aria-hidden="true" className="text-wood-400">
                    ›
                  </span>
                )}
                {isLast ? (
                  <span className="font-medium text-wood-900" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-wood-900"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
