import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  getSiteAccessCredentials,
  isSiteLocked,
  maintenanceHtml,
} from "@/lib/site-lock";

const NO_INDEX = { "X-Robots-Tag": "noindex, nofollow" };

function isAuthorized(request: NextRequest) {
  const { user, password } = getSiteAccessCredentials();
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

  const { password } = getSiteAccessCredentials();
  if (!password) {
    return new NextResponse(maintenanceHtml(), {
      status: 503,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        ...NO_INDEX,
      },
    });
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="伴走堂 プレビュー"',
      ...NO_INDEX,
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)"],
};
