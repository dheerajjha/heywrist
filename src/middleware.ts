import { NextRequest, NextResponse } from "next/server";

const subdomainApps = [
  "screenaway",
  "autosleepy",
  "recordy",
  "streaky",
  "watery",
  "chatty",
  "notes",
  "chronofit",
  "lumina",
  "structured",
  "betterchannels",
];

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const { pathname } = request.nextUrl;

  for (const app of subdomainApps) {
    if (hostname === `${app}.heywrist.com`) {
      // Already has the app prefix (e.g. notes.heywrist.com/notes/privacy)
      // → serve as-is, no rewrite needed
      if (pathname.startsWith(`/${app}`)) {
        return NextResponse.next();
      }

      // Add the app prefix (e.g. notes.heywrist.com/privacy → /notes/privacy)
      const url = request.nextUrl.clone();
      url.pathname = `/${app}${pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon\\.ico).*)"],
};
