import type { Metadata } from "next";
import Link from "next/link";

// App Store id 6760845441. The listing is not public yet, so every "download"
// affordance points back at /halfawake until it is.
const APP_STORE_URL = "/halfawake";

export const metadata: Metadata = {
  title: {
    default: "Half Awake - Speak it before it fades",
    template: "%s | Half Awake",
  },
  description:
    "A voice dream journal for Apple Watch and iPhone. Speak the dream with your eyes still shut; it is transcribed and read back to you entirely on your device. No account, no server, nothing sent anywhere to be understood.",
};

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-slate-400 hover:text-white transition-colors">
      {children}
    </Link>
  );
}

// The app icon, redrawn: a waning crescent over a horizon line, the moment
// between sleeping and waking.
function AppMark({ size }: { size: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-[22%] bg-[#0C0B1F] ring-1 ring-white/10"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-[76%] w-[76%]">
        <path
          d="M15.6 3.4a8.6 8.6 0 1 0 5 10.9 7 7 0 0 1-5-10.9Z"
          fill="#A9A6FF"
        />
        <circle cx="7.4" cy="6.2" r="0.8" fill="#F2E9C9" />
        <circle cx="4.9" cy="9.6" r="0.5" fill="#F2E9C9" />
        <rect x="3" y="19.2" width="18" height="1.5" rx="0.75" fill="#3B3775" />
      </svg>
    </span>
  );
}

export default function HalfAwakeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#07061A] text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link href="/halfawake" className="flex items-center gap-3">
            <AppMark size={32} />
            <span className="text-base font-semibold tracking-tight">Half Awake</span>
          </Link>
          <nav className="flex items-center gap-5">
            <NavLink href="/halfawake/support">Support</NavLink>
            <NavLink href="/halfawake/privacy">Privacy</NavLink>
            <NavLink href="/halfawake/terms">Terms</NavLink>
          </nav>
        </div>
      </header>

      {children}

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Half Awake is made by Hey Wrist.</p>
          <div className="flex gap-5">
            <NavLink href="/halfawake/support">Support</NavLink>
            <NavLink href="/halfawake/privacy">Privacy</NavLink>
            <NavLink href="/halfawake/terms">Terms</NavLink>
            <a
              href={APP_STORE_URL}
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              App Store
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
