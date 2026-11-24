import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TypeRoster — Font Manager for Mac",
  description: "Compare your headline in different typefaces and keep the right fonts active for each client project.",
};

export default function TypeRosterPage() {
  return (
    <main className="min-h-screen bg-[#f5f0e6] px-6 py-16 text-[#30242c]">
      <div className="mx-auto max-w-3xl">
        <p className="border-y border-[#776771] py-3 font-mono text-xs tracking-[.19em]">TYPEROSTER &nbsp; / &nbsp; MAC SPECIMEN STUDIO</p>
        <h1 className="mt-14 font-serif text-5xl leading-tight sm:text-7xl">Your words, in every face.</h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed">Type a headline or a paragraph and compare it at the same point size across your own font library. Save the faces you pick into a set for each client or project.</p>
        <section className="my-10 rounded-xl bg-[#412b39] p-7 text-[#fbefdb]">
          <h2 className="font-serif text-3xl">One font. Two projects.</h2>
          <p className="mt-3 leading-relaxed">When the menu is finished but the poster still needs the same font, turn off the menu’s set. The poster keeps its font.</p>
        </section>
        <p>For macOS 14 or later. Start with Instrument Serif and Space Grotesk or import your own licensed fonts.</p>
        <nav aria-label="TypeRoster resources" className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#b9abae] pt-5 underline underline-offset-4">
          <Link href="/typeroster/support">Support</Link><Link href="/typeroster/privacy">Privacy policy</Link><Link href="/typeroster/terms">Terms and font licenses</Link>
        </nav>
      </div>
    </main>
  );
}
