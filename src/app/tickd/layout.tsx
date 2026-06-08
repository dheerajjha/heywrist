import type { Metadata } from "next";
import Link from "next/link";

const APP_STORE_URL = "https://apps.apple.com/app/id6776298443";

export const metadata: Metadata = {
  title: {
    default: "Tickd - A Calmer Way to Plan Your Day",
    template: "%s | Tickd",
  },
  description:
    "Tickd is a calm daily planner for iPhone and Apple Watch. Just say it and Tickd plans it — one timeline, gentle momentum, and AI that turns 'plan my afternoon' into a real schedule.",
};

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-indigo-100/70 hover:text-white transition-colors">
      {children}
    </Link>
  );
}

export default function TickdLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/tickd" className="flex items-center gap-2">
            <img src="/icons/tickd.png" alt="Tickd icon" width={32} height={32} className="rounded-lg" />
            <span className="text-lg font-bold">Tickd</span>
          </Link>
          <nav className="hidden items-center gap-6 sm:flex">
            <NavLink href="/tickd#features">Features</NavLink>
            <NavLink href="/tickd/support">Support</NavLink>
            <NavLink href="/tickd/privacy">Privacy</NavLink>
            <a href={APP_STORE_URL} className="rounded-full bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 transition-colors">
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
                <img src="/icons/tickd.png" alt="Tickd icon" width={28} height={28} className="rounded-lg" />
                <span className="font-bold">Tickd</span>
              </div>
              <p className="text-sm text-slate-400">
                Plan calmly. Move steadily.
                <br />
                Built by{" "}
                <a href="https://heywrist.com" className="text-indigo-400 hover:text-indigo-300">Hey Wrist</a>
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-slate-300">Legal</h4>
              <div className="flex flex-col gap-2">
                <Link href="/tickd/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/tickd/terms" className="text-sm text-slate-400 hover:text-white transition-colors">Terms of Use</Link>
              </div>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-slate-300">Support</h4>
              <div className="flex flex-col gap-2">
                <Link href="/tickd/support" className="text-sm text-slate-400 hover:text-white transition-colors">FAQ &amp; Help</Link>
                <a href="mailto:founder@heywrist.com" className="text-sm text-slate-400 hover:text-white transition-colors">founder@heywrist.com</a>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <div className="text-sm text-slate-500">
              <p>&copy; {new Date().getFullYear()} Hey Wrist. All rights reserved.</p>
              <p className="mt-1 text-xs text-slate-600">Apple Watch, iPhone, and App Store are trademarks of Apple Inc.</p>
            </div>
            <a href={APP_STORE_URL} className="inline-block">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-10" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
