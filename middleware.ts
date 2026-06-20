import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function isSiteLocked() {
  return process.env.SITE_LOCKED === "true";
}

function isAuthorized(request: NextRequest) {
  const user = process.env.SITE_ACCESS_USER ?? "bansodo";
  const password = process.env.SITE_ACCESS_PASSWORD;
  if (!password) return false;

  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Basic ")) return false;

  const encoded = authHeader.slice("Basic ".length);
  try {
    const decoded = atob(encoded);
    const separator = decoded.indexOf(":");
    if (separator === -1) return false;
    const inputUser = decoded.slice(0, separator);
    const inputPassword = decoded.slice(separator + 1);
    return inputUser === user && inputPassword === password;
  } catch {
    return false;
  }
}

export function middleware(request: NextRequest) {
  if (!isSiteLocked()) {
    return NextResponse.next();
  }

  if (isAuthorized(request)) {
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  }

  const password = process.env.SITE_ACCESS_PASSWORD;
  if (!password) {
    return new NextResponse("サイトは現在準備中です。", {
      status: 503,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="伴走堂 プレビュー"',
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)"],
};
