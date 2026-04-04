import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "AutoSleepy - Automatic Sleep Tracking",
    template: "%s | AutoSleepy",
  },
  description:
    "Privacy-first sleep tracking for iPhone and Apple Watch. Automatic detection, sleep stages, AI insights, smart alarm, and HomeKit — all without accounts or cloud uploads.",
};

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-purple-100/70 hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
}

export default function AutoSleepyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/autosleepy" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600">
              <svg
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            </div>
            <span className="text-lg font-bold">AutoSleepy</span>
          </Link>
          <nav className="hidden items-center gap-6 sm:flex">
            <NavLink href="/autosleepy#features">Features</NavLink>
            <NavLink href="/autosleepy#pricing">Pricing</NavLink>
            <NavLink href="/autosleepy/support">Support</NavLink>
            <a
              href="https://apps.apple.com/app/autosleepy"
              className="rounded-full bg-purple-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-purple-500 transition-colors"
            >
              Download
            </a>
          </nav>
        </div>
      </header>

      {children}

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600">
                  <svg
                    className="h-3.5 w-3.5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                  </svg>
                </div>
                <span className="font-bold">AutoSleepy</span>
              </div>
              <p className="text-sm text-slate-400">
                Automatic sleep tracking, reimagined.
                <br />
                Built by{" "}
                <a
                  href="https://heywrist.com"
                  className="text-purple-400 hover:text-purple-300"
                >
                  Hey Wrist
                </a>
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-slate-300">
                Legal
              </h4>
              <div className="flex flex-col gap-2">
                <Link
                  href="/autosleepy/privacy"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/autosleepy/terms"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Terms of Use
                </Link>
              </div>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-slate-300">
                Support
              </h4>
              <div className="flex flex-col gap-2">
                <Link
                  href="/autosleepy/support"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  FAQ &amp; Help
                </Link>
                <a
                  href="mailto:support@heywrist.com"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  support@heywrist.com
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <div className="text-sm text-slate-500">
              <p>&copy; {new Date().getFullYear()} Ranju Jha. All rights reserved.</p>
              <p className="mt-1 text-xs text-slate-600">Apple Watch, iPhone, and App Store are trademarks of Apple Inc.</p>
            </div>
            <a
              href="https://apps.apple.com/app/autosleepy"
              className="inline-block"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-10"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
