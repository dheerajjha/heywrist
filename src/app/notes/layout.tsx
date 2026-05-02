import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "Dexter Notes - AI-Powered Notes & Tasks",
    template: "%s | Dexter Notes",
  },
  description:
    "AI-powered notes, tasks, voice recording with transcription, Gmail integration, and a first-class Apple Watch experience.",
};

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-amber-100/70 hover:text-white transition-colors">
      {children}
    </Link>
  );
}

export default function NotesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/notes" className="flex items-center gap-2">
            <img src="/icons/notes.png" alt="notes icon" width={32} height={32} className="rounded-lg" />
            <span className="text-lg font-bold">Dexter Notes</span>
          </Link>
          <nav className="hidden items-center gap-6 sm:flex">
            <NavLink href="/notes#features">Features</NavLink>
            <NavLink href="/notes/support">Support</NavLink>
            <a href="https://apps.apple.com/us/app/dexter-notes/id6761487065" className="rounded-full bg-amber-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-amber-500 transition-colors">
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
                <img src="/icons/notes.png" alt="notes icon" width={28} height={28} className="rounded-lg" />
                <span className="font-bold">Dexter Notes</span>
              </div>
              <p className="text-sm text-slate-400">
                Your AI-powered second brain.
                <br />
                Built by{" "}
                <a href="https://heywrist.com" className="text-amber-400 hover:text-amber-300">Hey Wrist</a>
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-slate-300">Legal</h4>
              <div className="flex flex-col gap-2">
                <Link href="/notes/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/notes/terms" className="text-sm text-slate-400 hover:text-white transition-colors">Terms of Use</Link>
              </div>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-slate-300">Support</h4>
              <div className="flex flex-col gap-2">
                <Link href="/notes/support" className="text-sm text-slate-400 hover:text-white transition-colors">FAQ &amp; Help</Link>
                <a href="mailto:founder@heywrist.com" className="text-sm text-slate-400 hover:text-white transition-colors">founder@heywrist.com</a>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <div className="text-sm text-slate-500">
              <p>&copy; {new Date().getFullYear()} Hey Wrist. All rights reserved.</p>
              <p className="mt-1 text-xs text-slate-600">Apple Watch, iPhone, and App Store are trademarks of Apple Inc.</p>
            </div>
            <a href="https://apps.apple.com/us/app/dexter-notes/id6761487065" className="inline-block">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-10" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
