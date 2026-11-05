import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { CANONICAL_SITE_URL } from "@/lib/site";

const CANONICAL_HOST = new URL(CANONICAL_SITE_URL).host;

export function middleware(request: NextRequest) {
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "";

  if (
    !host ||
    host.includes("localhost") ||
    host.startsWith("127.0.0.1") ||
    host === CANONICAL_HOST
  ) {
    return NextResponse.next();
  }

  // Keep branch previews on their own Vercel URL for visual QA.
  // Production Vercel aliases still redirect to the canonical domain.
  if (process.env.VERCEL_ENV === "preview" && host.endsWith(".vercel.app")) {
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  }

  if (host.includes("vercel.app") || host === "alomobilyam.com") {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.protocol = "https:";
    redirectUrl.host = CANONICAL_HOST;
    return NextResponse.redirect(redirectUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
