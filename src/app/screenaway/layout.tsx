import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "Screenaway - Take Control of Your Screen Time",
    template: "%s | Screenaway",
  },
  description:
    "Screen time control app for iPhone and Apple Watch. Track usage, block distracting apps, build healthier digital habits.",
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
      className="text-sm text-indigo-100/70 hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
}

export default function ScreenawayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/screenaway" className="flex items-center gap-2">
            <img src="/icons/screenaway.png" alt="screenaway icon" width={32} height={32} className="rounded-lg" />
            <span className="text-lg font-bold">Screenaway</span>
          </Link>
          <nav className="hidden items-center gap-6 sm:flex">
            <NavLink href="/screenaway#features">Features</NavLink>
            <NavLink href="/screenaway#pricing">Pricing</NavLink>
            <NavLink href="/screenaway/support">Support</NavLink>
            <a
              href="https://apps.apple.com/app/screenaway"
              className="rounded-full bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 transition-colors"
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
                <img src="/icons/screenaway.png" alt="screenaway icon" width={28} height={28} className="rounded-lg" />
                <span className="font-bold">Screenaway</span>
              </div>
              <p className="text-sm text-slate-400">
                Take control of your screen time.
                <br />
                Built by{" "}
                <a
                  href="https://heywrist.com"
                  className="text-indigo-400 hover:text-indigo-300"
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
                  href="/screenaway/privacy"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/screenaway/terms"
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
                  href="/screenaway/support"
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
              <p>&copy; {new Date().getFullYear()} Hey Wrist. All rights reserved.</p>
              <p className="mt-1 text-xs text-slate-600">Apple Watch, iPhone, and App Store are trademarks of Apple Inc.</p>
            </div>
            <a
              href="https://apps.apple.com/app/screenaway"
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
