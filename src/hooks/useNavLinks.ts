"use client";

import { usePathname } from "next/navigation";
import { getNavLinks } from "@/lib/navigation";

export function useNavLinks() {
  const pathname = usePathname();
  return getNavLinks(pathname);
}
