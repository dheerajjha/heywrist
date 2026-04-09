import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "Lumina - Your Focus Lights the Cosmos",
    template: "%s | Lumina",
  },
  description:
    "Premium focus and study timer for iPhone and Apple Watch with gamification, analytics, ambient soundscapes, and a narrative where your focus rebuilds the night sky.",
};

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-blue-100/70 hover:text-white transition-colors">
      {children}
    </Link>
  );
}

export default function LuminaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/lumina" className="flex items-center gap-2">
            <img src="/icons/lumina.png" alt="lumina icon" width={32} height={32} className="rounded-lg" />
            <span className="text-lg font-bold">Lumina</span>
          </Link>
          <nav className="hidden items-center gap-6 sm:flex">
            <NavLink href="/lumina#features">Features</NavLink>
            <NavLink href="/lumina#pricing">Pricing</NavLink>
            <NavLink href="/lumina/support">Support</NavLink>
            <a href="https://apps.apple.com/app/lumina-focus" className="rounded-full bg-blue-700 px-4 py-1.5 text-sm font-medium text-white hover:bg-blue-600 transition-colors">
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
                <img src="/icons/lumina.png" alt="lumina icon" width={28} height={28} className="rounded-lg" />
                <span className="font-bold">Lumina</span>
              </div>
              <p className="text-sm text-slate-400">
                Your focus lights the cosmos.
                <br />
                Built by{" "}
                <a href="https://heywrist.com" className="text-blue-400 hover:text-blue-300">Hey Wrist</a>
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-slate-300">Legal</h4>
              <div className="flex flex-col gap-2">
                <Link href="/lumina/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/lumina/terms" className="text-sm text-slate-400 hover:text-white transition-colors">Terms of Use</Link>
              </div>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-slate-300">Support</h4>
              <div className="flex flex-col gap-2">
                <Link href="/lumina/support" className="text-sm text-slate-400 hover:text-white transition-colors">FAQ &amp; Help</Link>
                <a href="mailto:support@heywrist.com" className="text-sm text-slate-400 hover:text-white transition-colors">support@heywrist.com</a>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <div className="text-sm text-slate-500">
              <p>&copy; {new Date().getFullYear()} Hey Wrist. All rights reserved.</p>
              <p className="mt-1 text-xs text-slate-600">Apple Watch, iPhone, and App Store are trademarks of Apple Inc.</p>
            </div>
            <a href="https://apps.apple.com/app/lumina-focus" className="inline-block">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-10" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
