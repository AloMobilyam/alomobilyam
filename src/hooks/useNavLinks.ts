"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { getNavLinks } from "@/lib/navigation";

export function useNavLinks() {
  const pathname = usePathname();
  return useMemo(() => getNavLinks(pathname), [pathname]);
}
