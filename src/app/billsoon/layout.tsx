import type { Metadata } from "next";
import Link from "next/link";

// App Store id 6761487157. The listing is not public yet, so every "download"
// affordance points back at /billsoon until it is.
const APP_STORE_URL = "/billsoon";

export const metadata: Metadata = {
  title: {
    default: "Billsoon - Know before it charges you",
    template: "%s | Billsoon",
  },
  description:
    "A subscription and renewal tracker for iPhone and Apple Watch that needs no bank link and no account. Your list stays on the device; the next charge shows up on the Lock Screen, in a widget, on a watch face, and in a Live Activity that counts down the last day of a free trial.",
};

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-neutral-400 hover:text-white transition-colors">
      {children}
    </Link>
  );
}

// The app icon, redrawn: a lime ticket with the top-right corner cut away, a
// calendar bar and a tick.
function AppMark({ size }: { size: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-[22%] bg-[#111111] ring-1 ring-white/10"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-[78%] w-[78%]">
        <path
          d="M3 5.6A1.6 1.6 0 0 1 4.6 4h11.2L21 9.2v9.2A1.6 1.6 0 0 1 19.4 20H4.6A1.6 1.6 0 0 1 3 18.4Z"
          fill="#C6FF3D"
        />
        <rect x="5.2" y="9.9" width="13.6" height="2.5" rx="0.6" fill="#111111" />
        <circle cx="9.9" cy="11.15" r="0.62" fill="#C6FF3D" />
        <circle cx="14.1" cy="11.15" r="0.62" fill="#C6FF3D" />
        <path
          d="m7.6 15.7 2.5 2.4 5-5"
          stroke="#111111"
          strokeWidth={2.4}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </span>
  );
}

export default function BillsoonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#141414] text-white selection:bg-[#C6FF3D] selection:text-black">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#141414]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/billsoon" className="flex items-center gap-2.5">
            <AppMark size={30} />
            <span className="text-lg font-bold tracking-tight">Billsoon</span>
          </Link>
          <nav className="hidden items-center gap-6 sm:flex">
            <NavLink href="/billsoon#how">How it works</NavLink>
            <NavLink href="/billsoon#pricing">Pricing</NavLink>
            <NavLink href="/billsoon/support">Support</NavLink>
            <Link
              href={APP_STORE_URL}
              className="rounded-md bg-[#C6FF3D] px-4 py-1.5 text-sm font-semibold text-black hover:bg-[#d4ff66] transition-colors"
            >
              Coming soon
            </Link>
          </nav>
        </div>
      </header>

      {children}

      <footer className="border-t border-white/10 bg-[#141414]">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <div className="mb-3 flex items-center gap-2.5">
                <AppMark size={26} />
                <span className="font-bold">Billsoon</span>
              </div>
              <p className="text-sm text-neutral-400">
                Know before it charges you.
                <br />
                Built by{" "}
                <a href="https://heywrist.com" className="text-[#C6FF3D] hover:underline">
                  Hey Wrist
                </a>
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-500">Legal</h4>
              <div className="flex flex-col gap-2">
                <Link href="/billsoon/privacy" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/billsoon/terms" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  Terms of Use
                </Link>
              </div>
            </div>
            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-500">Support</h4>
              <div className="flex flex-col gap-2">
                <Link href="/billsoon/support" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  FAQ &amp; help
                </Link>
                <a href="mailto:founder@heywrist.com" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  founder@heywrist.com
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <div className="text-sm text-neutral-500">
              <p>&copy; {new Date().getFullYear()} Hey Wrist. All rights reserved.</p>
              <p className="mt-1 text-xs text-neutral-600">
                Apple, Apple Watch, iPhone, iCloud and App Store are trademarks of Apple Inc. Service
                names shown in the app are the trademarks of their respective owners and are used only
                to help you label your own subscriptions.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-md bg-[#C6FF3D]/10 px-4 py-2 text-sm font-medium text-[#C6FF3D] ring-1 ring-[#C6FF3D]/30">
              Coming soon to the App Store
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
