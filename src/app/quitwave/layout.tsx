import type { Metadata } from "next";
import Link from "next/link";

// App Store id 6761487095. The listing is not public yet, so every "download"
// affordance points back at /quitwave. When the listing goes live, set this to
// "https://apps.apple.com/app/id6761487095".
const APP_STORE_URL = "/quitwave";

export const metadata: Metadata = {
  title: {
    default: "Quitwave - Beat cravings on your wrist",
    template: "%s | Quitwave",
  },
  description:
    "A quit-vaping app built around the three minutes when it is hardest. The craving rescue runs standalone on Apple Watch, paced by haptics, with no phone and no signal. Unlimited and free.",
};

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-teal-100/70 hover:text-white transition-colors">
      {children}
    </Link>
  );
}

function AppMark({ size }: { size: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-xl bg-gradient-to-b from-[#0B3D4A] to-[#06222B] ring-1 ring-[#2EC4B6]/40"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-4/6 w-4/6 text-[#2EC4B6]">
        <circle cx="12" cy="10" r="6" stroke="currentColor" strokeWidth={2.2} />
        <path d="M2 17c3 0 3.5-2 6-2s3 2 6 2 3.5-2 6-2" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" />
      </svg>
    </span>
  );
}

export default function QuitwaveLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#04161C] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#04161C]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/quitwave" className="flex items-center gap-2">
            <AppMark size={32} />
            <span className="text-lg font-bold">Quitwave</span>
          </Link>
          <nav className="hidden items-center gap-6 sm:flex">
            <NavLink href="/quitwave#rescue">The rescue</NavLink>
            <NavLink href="/quitwave#pricing">Pricing</NavLink>
            <NavLink href="/quitwave/support">Support</NavLink>
            <Link href={APP_STORE_URL} className="rounded-full bg-[#2EC4B6] px-4 py-1.5 text-sm font-medium text-[#04161C] hover:bg-[#3FD8C6] transition-colors">
              Coming soon
            </Link>
          </nav>
        </div>
      </header>

      {children}

      <footer className="border-t border-white/10 bg-[#04161C]">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <AppMark size={28} />
                <span className="font-bold">Quitwave</span>
              </div>
              <p className="text-sm text-slate-400">
                Cravings come in waves. Learn to ride them.
                <br />
                Built by{" "}
                <a href="https://heywrist.com" className="text-[#2EC4B6] hover:text-[#3FD8C6]">Hey Wrist</a>
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-slate-300">Legal</h4>
              <div className="flex flex-col gap-2">
                <Link href="/quitwave/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/quitwave/terms" className="text-sm text-slate-400 hover:text-white transition-colors">Terms of Use</Link>
              </div>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-slate-300">Support</h4>
              <div className="flex flex-col gap-2">
                <Link href="/quitwave/support" className="text-sm text-slate-400 hover:text-white transition-colors">FAQ &amp; Help</Link>
                <a href="mailto:founder@heywrist.com" className="text-sm text-slate-400 hover:text-white transition-colors">founder@heywrist.com</a>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <div className="text-sm text-slate-500">
              <p>&copy; {new Date().getFullYear()} Hey Wrist. All rights reserved.</p>
              <p className="mt-1 text-xs text-slate-600">
                Quitwave is not a medical app and gives no medical advice. Apple, Apple Watch,
                iPhone and App Store are trademarks of Apple Inc.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#2EC4B6]/10 px-4 py-2 text-sm font-medium text-[#2EC4B6] ring-1 ring-[#2EC4B6]/30">
              Coming soon to the App Store
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
