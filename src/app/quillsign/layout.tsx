import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "QuillSign - Fill and sign PDFs",
    template: "%s | QuillSign",
  },
  description:
    "Privacy, terms and support for QuillSign, the on-device PDF filling and signing app for iPhone by Hey Wrist.",
};

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-[#EFE7D6]/70 hover:text-[#EFE7D6] transition-colors">
      {children}
    </Link>
  );
}

function NibMark({ size }: { size: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-lg bg-[#F6F1E7]"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-3/4 w-3/4">
        <path d="M3 17c2-1 3-6 5-6s1 5 3 5 2-4 4-4" stroke="#1D2B4C" strokeWidth={1.8} fill="none" strokeLinecap="round" />
        <path d="M15 13l5-7 1.5 1.5-7 5z" fill="#C9A86A" />
      </svg>
    </span>
  );
}

export default function QuillSignLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#111318] text-[#EFE7D6]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111318]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <Link href="/quillsign" className="flex items-center gap-2">
            <NibMark size={32} />
            <span className="font-serif text-lg font-semibold">QuillSign</span>
          </Link>
          <nav aria-label="QuillSign" className="flex items-center gap-4 sm:gap-6">
            <NavLink href="/quillsign/privacy">Privacy</NavLink>
            <NavLink href="/quillsign/terms">Terms</NavLink>
            <NavLink href="/quillsign/support">Support</NavLink>
          </nav>
        </div>
      </header>

      {children}

      <footer className="border-t border-white/10 bg-[#111318]">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <NibMark size={28} />
                <span className="font-serif font-semibold">QuillSign</span>
              </div>
              <p className="text-sm text-[#BDB5A4]">
                Fill and sign, right where the PDF arrives.
                <br />
                Built by{" "}
                <a href="https://heywrist.com" className="text-[#86A8E6] hover:text-white">Hey Wrist</a>
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-[#EFE7D6]">Legal</h4>
              <div className="flex flex-col gap-2">
                <Link href="/quillsign/privacy" className="text-sm text-[#BDB5A4] hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/quillsign/terms" className="text-sm text-[#BDB5A4] hover:text-white transition-colors">Terms &amp; Conditions</Link>
              </div>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-[#EFE7D6]">Support</h4>
              <div className="flex flex-col gap-2">
                <Link href="/quillsign/support" className="text-sm text-[#BDB5A4] hover:text-white transition-colors">FAQ &amp; Help</Link>
                <a href="mailto:founder@heywrist.com" className="text-sm text-[#BDB5A4] hover:text-white transition-colors">founder@heywrist.com</a>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-white/10 pt-8 text-sm text-[#7D7768]">
            <p>&copy; {new Date().getFullYear()} Hey Wrist. All rights reserved.</p>
            <p className="mt-1 text-xs">iPhone, Safari, Shortcuts and App Store are trademarks of Apple Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
