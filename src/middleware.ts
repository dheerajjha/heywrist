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
  "pdf",
];

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const { pathname } = request.nextUrl;

  for (const app of subdomainApps) {
    if (hostname === `${app}.heywrist.com`) {
      // Redirect double-prefix to clean URL
      // e.g. notes.heywrist.com/notes/privacy → notes.heywrist.com/privacy
      if (pathname.startsWith(`/${app}`)) {
        const clean = pathname.slice(`/${app}`.length) || "/";
        const url = request.nextUrl.clone();
        url.pathname = clean;
        return NextResponse.redirect(url, 308);
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
  matcher: ["/((?!_next|favicon\\.ico|icons/).*)"],
};
