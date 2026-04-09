import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "Watery - Smart Hydration Tracking",
    template: "%s | Watery",
  },
  description:
    "Smart hydration tracking for iPhone and Apple Watch. Personalized goals, 10 drink types, Dynamic Island, widgets, and Siri — log water in one tap.",
};

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-blue-100/70 hover:text-white transition-colors">
      {children}
    </Link>
  );
}

export default function WateryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/watery" className="flex items-center gap-2">
            <img src="/icons/watery.png" alt="watery icon" width={32} height={32} className="rounded-lg" />
            <span className="text-lg font-bold">Watery</span>
          </Link>
          <nav className="hidden items-center gap-6 sm:flex">
            <NavLink href="/watery#features">Features</NavLink>
            <NavLink href="/watery#pricing">Pricing</NavLink>
            <NavLink href="/watery/support">Support</NavLink>
            <a href="https://apps.apple.com/app/watery" className="rounded-full bg-blue-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-blue-500 transition-colors">
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
                <img src="/icons/watery.png" alt="watery icon" width={28} height={28} className="rounded-lg" />
                <span className="font-bold">Watery</span>
              </div>
              <p className="text-sm text-slate-400">
                Smart hydration, effortlessly.
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
                <Link href="/watery/support" className="text-sm text-slate-400 hover:text-white transition-colors">FAQ &amp; Help</Link>
                <a href="mailto:support@heywrist.com" className="text-sm text-slate-400 hover:text-white transition-colors">support@heywrist.com</a>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <div className="text-sm text-slate-500">
              <p>&copy; {new Date().getFullYear()} Ranju Jha. All rights reserved.</p>
              <p className="mt-1 text-xs text-slate-600">Apple Watch, iPhone, and App Store are trademarks of Apple Inc.</p>
            </div>
            <a href="https://apps.apple.com/app/watery" className="inline-block">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-10" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
