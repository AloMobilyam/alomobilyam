import { NAV_LINKS } from "@/lib/site";
import { SERVICE_PATH } from "@/lib/services/mutfak-dolabi-yenileme";

export type NavLink = {
  href: string;
  label: string;
};

const SERVICE_PAGE_NAV_LINKS: NavLink[] = [
  { href: "/#hizmetler", label: "Hizmetler" },
  { href: "#galeri", label: "Galeri" },
  { href: "#musteri-yorumlari", label: "Yorumlar" },
  { href: "#sss", label: "SSS" },
  { href: "/#iletisim", label: "İletişim" },
];

export function getNavLinks(pathname: string): NavLink[] {
  if (pathname === SERVICE_PATH) {
    return SERVICE_PAGE_NAV_LINKS;
  }

  return NAV_LINKS.map((link) => ({ href: link.href, label: link.label }));
}
