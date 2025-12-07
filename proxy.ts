// proxy.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const PROTECTED_PATHS = ["/admin"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PROTECTED_PATHS.some((p) => pathname.startsWith(p))) {
    const token = request.cookies.get("session_token")?.value;

    if (!token) {
      const url = new URL("/login", request.url);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
