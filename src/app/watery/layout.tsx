import type { Metadata } from "next";
import Link from "next/link";

// Quench was called "Watery" during development. The /watery paths are kept on
// purpose: App Store Connect's support URL and the in-app paywall's Terms and
// Privacy links point at /watery/support, /watery/terms and /watery/privacy.
// The App Store listing is not public yet, so nothing here links to it.

export const metadata: Metadata = {
  title: {
    default: "Quench: Water & Drink Tracker",
    template: "%s | Quench",
  },
  description:
    "Quench is a water and drink tracker for iPhone, iPad and Apple Watch. Log any of 14 drink types for free, with an optional Quench Pro.",
};

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-blue-100/70 hover:text-white transition-colors">
      {children}
    </Link>
  );
}

export default function QuenchLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/watery" className="flex items-center gap-2">
            <img src="/icons/watery.png" alt="Quench icon" width={32} height={32} className="rounded-lg" />
            <span className="text-lg font-bold">Quench</span>
          </Link>
          <nav className="flex items-center gap-6">
            <span className="hidden items-center gap-6 sm:flex">
              <NavLink href="/watery#features">Features</NavLink>
              <NavLink href="/watery#pricing">Pricing</NavLink>
              <NavLink href="/watery/privacy">Privacy</NavLink>
            </span>
            <Link href="/watery/support" className="rounded-full bg-blue-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-blue-500 transition-colors">
              Support
            </Link>
          </nav>
        </div>
      </header>

      {children}

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <img src="/icons/watery.png" alt="Quench icon" width={28} height={28} className="rounded-lg" />
                <span className="font-bold">Quench</span>
              </div>
              <p className="text-sm text-slate-400">
                Water &amp; Drink Tracker for iPhone, iPad and Apple Watch.
                <br />
                Built by{" "}
                <a href="https://heywrist.com" className="text-blue-400 hover:text-blue-300">Hey Wrist</a>
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-slate-300">Legal</h4>
              <div className="flex flex-col gap-2">
                <Link href="/watery/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/watery/terms" className="text-sm text-slate-400 hover:text-white transition-colors">Terms of Use</Link>
              </div>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-slate-300">Support</h4>
              <div className="flex flex-col gap-2">
                <Link href="/watery/support" className="text-sm text-slate-400 hover:text-white transition-colors">Help &amp; FAQ</Link>
                <a href="mailto:founder@heywrist.com" className="text-sm text-slate-400 hover:text-white transition-colors">founder@heywrist.com</a>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <div className="text-sm text-slate-500">
              <p>&copy; {new Date().getFullYear()} Hey Wrist. All rights reserved.</p>
              <p className="mt-1 text-xs text-slate-600">
                Quench is not a medical device and gives no medical advice. Apple, Apple Watch,
                iPhone, iPad and App Store are trademarks of Apple Inc.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 ring-1 ring-blue-500/30">
              Coming soon to the App Store
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
