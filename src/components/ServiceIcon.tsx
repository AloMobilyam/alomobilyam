import type { ServiceIconKey } from "@/lib/site";

type ServiceIconProps = {
  name: ServiceIconKey;
  className?: string;
};

export function ServiceIcon({ name, className = "h-6 w-6" }: ServiceIconProps) {
  const icons: Record<ServiceIconKey, React.ReactNode> = {
    repair: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    refresh: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M3 12a9 9 0 0 1 15-6.7L21 8" strokeLinecap="round" />
        <path d="M21 12a9 9 0 0 1-15 6.7L3 16" strokeLinecap="round" />
        <path d="M18 3v5h-5M6 21v-5h5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    hinge: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <rect x="4" y="4" width="7" height="16" rx="1" />
        <rect x="13" y="4" width="7" height="16" rx="1" />
        <circle cx="7.5" cy="12" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="16.5" cy="12" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    rail: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M3 8h18M3 12h18M3 16h18" strokeLinecap="round" />
        <rect x="6" y="6" width="12" height="12" rx="1" />
      </svg>
    ),
    adjust: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M4 7h16M4 12h10M4 17h6" strokeLinecap="round" />
        <circle cx="18" cy="12" r="2" />
        <circle cx="14" cy="17" r="2" />
      </svg>
    ),
    door: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <rect x="5" y="3" width="14" height="18" rx="1" />
        <circle cx="15" cy="12" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    cabinet: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="1" />
        <path d="M12 4v16M3 12h18" />
      </svg>
    ),
    wardrobe: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <rect x="2" y="3" width="20" height="18" rx="1" />
        <path d="M12 3v18" />
        <path d="M7 12h0M17 12h0" strokeLinecap="round" strokeWidth="2.5" />
      </svg>
    ),
    kitchen: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="1" />
        <path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
        <path d="M6 13h12" />
      </svg>
    ),
    sliding: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <rect x="3" y="4" width="8" height="16" rx="1" />
        <rect x="13" y="4" width="8" height="16" rx="1" opacity="0.6" />
        <path d="M11 12h2" strokeLinecap="round" />
      </svg>
    ),
    drawer: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <rect x="3" y="5" width="18" height="5" rx="1" />
        <rect x="3" y="12" width="18" height="5" rx="1" />
        <path d="M8 7.5h0M8 14.5h0" strokeLinecap="round" strokeWidth="2.5" />
      </svg>
    ),
    chair: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M6 10V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
        <rect x="5" y="10" width="14" height="5" rx="1" />
        <path d="M7 15v4M17 15v4M5 19h14" strokeLinecap="round" />
      </svg>
    ),
    assembly: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M12 2v6M8 5l4-3 4 3" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="4" y="10" width="16" height="10" rx="1" />
        <path d="M9 15h6" strokeLinecap="round" />
      </svg>
    ),
    onsite: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  };

  return <>{icons[name]}</>;
}
