import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "BetterChannels - Mobile Mission Control for Claude Code",
    template: "%s | BetterChannels",
  },
  description:
    "Native iOS and Apple Watch companion for Claude Code sessions. Monitor progress, send instructions, and get real-time updates via MCP — right from your pocket.",
};

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-orange-100/70 hover:text-white transition-colors">
      {children}
    </Link>
  );
}

export default function BetterChannelsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/betterchannels" className="flex items-center gap-2">
            <img src="/icons/betterchannels.png" alt="betterchannels icon" width={32} height={32} className="rounded-lg" />
            <span className="text-lg font-bold">BetterChannels</span>
          </Link>
          <nav className="hidden items-center gap-6 sm:flex">
            <NavLink href="/betterchannels#features">Features</NavLink>
            <NavLink href="/betterchannels#how-it-works">How It Works</NavLink>
            <NavLink href="/betterchannels/support">Support</NavLink>
            <a href="https://x.com/awesome_fingers" className="rounded-full bg-orange-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-orange-500 transition-colors">Follow for launch</a>
          </nav>
        </div>
      </header>

      {children}

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <img src="/icons/betterchannels.png" alt="betterchannels icon" width={28} height={28} className="rounded-lg" />
                <span className="font-bold">BetterChannels</span>
              </div>
              <p className="text-sm text-slate-400">
                Your Claude Code sessions, in your pocket.
                <br />
                Built by{" "}
                <a href="https://heywrist.com" className="text-orange-400 hover:text-orange-300">Hey Wrist</a>
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-slate-300">Legal</h4>
              <div className="flex flex-col gap-2">
                <Link href="/betterchannels/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/betterchannels/terms" className="text-sm text-slate-400 hover:text-white transition-colors">Terms of Use</Link>
              </div>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-slate-300">Support</h4>
              <div className="flex flex-col gap-2">
                <Link href="/betterchannels/support" className="text-sm text-slate-400 hover:text-white transition-colors">FAQ &amp; Help</Link>
                <a href="mailto:founder@heywrist.com" className="text-sm text-slate-400 hover:text-white transition-colors">founder@heywrist.com</a>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <div className="text-sm text-slate-500">
              <p>&copy; {new Date().getFullYear()} Hey Wrist. All rights reserved.</p>
              <p className="mt-1 text-xs text-slate-600">Apple Watch, iPhone, and App Store are trademarks of Apple Inc. Claude is a trademark of Anthropic.</p>
            </div>
            <a href="https://x.com/awesome_fingers" className="inline-block">
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300 ring-1 ring-orange-500/30">🍳 Cooking · Follow @awesome_fingers for launch</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
