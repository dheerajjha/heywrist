import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "Structured - Visual Daily Planner",
    template: "%s | Structured",
  },
  description:
    "Visual daily planner for iPhone and Apple Watch with timeline view, iCloud sync, widgets, Live Activities, and Siri Shortcuts.",
};

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-teal-100/70 hover:text-white transition-colors">
      {children}
    </Link>
  );
}

export default function StructuredLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/structured" className="flex items-center gap-2">
            <img src="/icons/structured.png" alt="structured icon" width={32} height={32} className="rounded-lg" />
            <span className="text-lg font-bold">Structured</span>
          </Link>
          <nav className="hidden items-center gap-6 sm:flex">
            <NavLink href="/structured#features">Features</NavLink>
            <NavLink href="/structured#pricing">Pricing</NavLink>
            <NavLink href="/structured/support">Support</NavLink>
            <a href="https://apps.apple.com/app/structured-daily-planner" className="rounded-full bg-teal-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-teal-500 transition-colors">
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
                <img src="/icons/structured.png" alt="structured icon" width={28} height={28} className="rounded-lg" />
                <span className="font-bold">Structured</span>
              </div>
              <p className="text-sm text-slate-400">
                Your day, beautifully planned.
                <br />
                Built by{" "}
                <a href="https://heywrist.com" className="text-teal-400 hover:text-teal-300">Hey Wrist</a>
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-slate-300">Legal</h4>
              <div className="flex flex-col gap-2">
                <Link href="/structured/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/structured/terms" className="text-sm text-slate-400 hover:text-white transition-colors">Terms of Use</Link>
              </div>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-slate-300">Support</h4>
              <div className="flex flex-col gap-2">
                <Link href="/structured/support" className="text-sm text-slate-400 hover:text-white transition-colors">FAQ &amp; Help</Link>
                <a href="mailto:founder@heywrist.com" className="text-sm text-slate-400 hover:text-white transition-colors">founder@heywrist.com</a>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <div className="text-sm text-slate-500">
              <p>&copy; {new Date().getFullYear()} Hey Wrist. All rights reserved.</p>
              <p className="mt-1 text-xs text-slate-600">Apple Watch, iPhone, and App Store are trademarks of Apple Inc.</p>
            </div>
            <a href="https://apps.apple.com/app/structured-daily-planner" className="inline-block">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-10" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
