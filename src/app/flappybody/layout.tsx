import type { Metadata } from "next";
import Link from "next/link";

// App Store id 6811429458. The listing is not public yet, so every "download"
// affordance points back at /flappybody. When the listing goes live, set this
// to "https://apps.apple.com/app/id6811429458" and swap the pills below for the
// standard App Store badge used by the other apps.
const APP_STORE_URL = "/flappybody";

export const metadata: Metadata = {
  title: {
    default: "FlappyBody - Your Head Is the Controller",
    template: "%s | FlappyBody",
  },
  description:
    "A hands-free arcade game for iPhone. The front camera tracks the vertical position of your head and that drives the flyer's altitude. Push-ups fly the bird, columns cleared are your score, and Free move plays seated.",
};

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-sky-100/70 hover:text-white transition-colors">
      {children}
    </Link>
  );
}

function AppMark({ size }: { size: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-cyan-600"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-3/5 w-3/5 text-slate-950">
        <path d="M3 15c3.5 0 5-4 9-4s6 3 9 3" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="17" cy="9" r="1.6" fill="currentColor" />
      </svg>
    </span>
  );
}

export default function FlappyBodyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/flappybody" className="flex items-center gap-2">
            <AppMark size={32} />
            <span className="text-lg font-bold">FlappyBody</span>
          </Link>
          <nav className="hidden items-center gap-6 sm:flex">
            <NavLink href="/flappybody#features">Features</NavLink>
            <NavLink href="/flappybody#pricing">Pricing</NavLink>
            <NavLink href="/flappybody/support">Support</NavLink>
            <Link href={APP_STORE_URL} className="rounded-full bg-sky-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-sky-500 transition-colors">
              Coming soon
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
                <AppMark size={28} />
                <span className="font-bold">FlappyBody</span>
              </div>
              <p className="text-sm text-slate-400">
                Your head is the controller.
                <br />
                Built by{" "}
                <a href="https://heywrist.com" className="text-sky-400 hover:text-sky-300">Hey Wrist</a>
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-slate-300">Legal</h4>
              <div className="flex flex-col gap-2">
                <Link href="/flappybody/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/flappybody/terms" className="text-sm text-slate-400 hover:text-white transition-colors">Terms of Use</Link>
              </div>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-slate-300">Support</h4>
              <div className="flex flex-col gap-2">
                <Link href="/flappybody/support" className="text-sm text-slate-400 hover:text-white transition-colors">FAQ &amp; Help</Link>
                <a href="mailto:founder@heywrist.com" className="text-sm text-slate-400 hover:text-white transition-colors">founder@heywrist.com</a>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <div className="text-sm text-slate-500">
              <p>&copy; {new Date().getFullYear()} Hey Wrist. All rights reserved.</p>
              <p className="mt-1 text-xs text-slate-600">iPhone, Game Center, and App Store are trademarks of Apple Inc.</p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-300 ring-1 ring-sky-500/30">
              Coming soon to the App Store
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
