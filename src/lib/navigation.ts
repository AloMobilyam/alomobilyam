import { NAV_LINKS } from "@/lib/site";
import { SERVICE_PATH } from "@/lib/services/mutfak-dolabi-yenileme";

export type NavLink = {
  href: string;
  label: string;
};

function normalizePathname(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

export function getServicePageNavLinks(servicePath: string): NavLink[] {
  return [
    { href: "/#hizmetler", label: "Hizmetler" },
    { href: `${servicePath}#galeri`, label: "Galeri" },
    { href: `${servicePath}#musteri-yorumlari`, label: "Yorumlar" },
    { href: `${servicePath}#sss`, label: "SSS" },
    { href: "/#iletisim", label: "İletişim" },
  ];
}

export function getNavLinks(pathname: string): NavLink[] {
  const normalizedPath = normalizePathname(pathname);

  if (normalizedPath === SERVICE_PATH) {
    return getServicePageNavLinks(SERVICE_PATH);
  }

  return NAV_LINKS.map((link) => ({ href: link.href, label: link.label }));
}
