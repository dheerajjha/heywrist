import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "Hey Wrist PDF — every PDF tool you need for $1/year",
    template: "%s | Hey Wrist PDF",
  },
  description:
    "30 PDF tools — merge, split, compress, edit, sign, OCR, watermark, scan, and more. Unlimited use of every non-AI tool for $1/year. iPhone first.",
};

function PdfMark({ size = 32 }: { size?: number }) {
  return (
    <span
      aria-hidden
      style={{ width: size, height: size }}
      className="inline-flex items-center justify-center rounded-[10px] bg-gradient-to-br from-rose-500 via-red-500 to-orange-500 text-white shadow-md shadow-rose-500/30"
    >
      <span className="text-[10px] font-extrabold tracking-wider">PDF</span>
    </span>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-rose-100/70 hover:text-white transition-colors">
      {children}
    </Link>
  );
}

export default function PdfLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/pdf" className="flex items-center gap-2">
            <PdfMark size={32} />
            <span className="text-lg font-bold">Hey Wrist PDF</span>
          </Link>
          <nav className="hidden items-center gap-6 sm:flex">
            <NavLink href="/pdf#tools">Tools</NavLink>
            <NavLink href="/pdf#pricing">Pricing</NavLink>
            <NavLink href="/pdf#waitlist">Waitlist</NavLink>
          </nav>
        </div>
      </header>

      {children}

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <PdfMark size={28} />
                <span className="font-bold">Hey Wrist PDF</span>
              </div>
              <p className="text-sm text-slate-400">
                Every PDF tool, $1/year.
                <br />
                Built by{" "}
                <a href="https://heywrist.com" className="text-rose-400 hover:text-rose-300">
                  Hey Wrist
                </a>
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-slate-300">Coming soon</h4>
              <div className="flex flex-col gap-2">
                <Link href="/pdf#tools" className="text-sm text-slate-400 hover:text-white transition-colors">
                  All 30 tools
                </Link>
                <Link href="/pdf#pricing" className="text-sm text-slate-400 hover:text-white transition-colors">
                  $1/year pricing
                </Link>
              </div>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-slate-300">Support</h4>
              <div className="flex flex-col gap-2">
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
            <a href="#waitlist" className="text-sm text-rose-300 hover:text-white transition-colors">
              Join the waitlist →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
