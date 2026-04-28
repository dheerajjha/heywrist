import type { Metadata } from "next";
import WaitlistForm from "../components/WaitlistForm";

export const metadata: Metadata = {
  title: "Hey Wrist PDF — every PDF tool you need for $1/year",
  description:
    "30 PDF tools, unlimited use of every non-AI tool for $1/year. Merge, split, compress, edit, sign, OCR, scan, watermark, convert — on iPhone first.",
};

type Tool = { name: string; desc: string; tier: "Free" | "Pro" | "AI" };

const tools: Tool[] = [
  { name: "Merge PDFs", desc: "Combine any number of PDFs into one.", tier: "Free" },
  { name: "Split PDF", desc: "Pull pages or ranges into separate files.", tier: "Free" },
  { name: "Edit PDF", desc: "Annotate, draw, add text and shapes.", tier: "Free" },
  { name: "PDF → JPG", desc: "Export every page as a sharp image.", tier: "Free" },
  { name: "JPG → PDF", desc: "Photos and screenshots into one PDF.", tier: "Free" },
  { name: "Sign PDF", desc: "Pencil-perfect signatures, flattened.", tier: "Free" },
  { name: "Watermark", desc: "Stamp text or images on every page.", tier: "Free" },
  { name: "Rotate", desc: "Fix sideways or upside-down pages.", tier: "Free" },
  { name: "HTML → PDF", desc: "Save any webpage as Safari would.", tier: "Free" },
  { name: "Unlock PDF", desc: "Remove the password you already know.", tier: "Free" },
  { name: "Protect PDF", desc: "Password-protect any document.", tier: "Free" },
  { name: "Organize", desc: "Reorder, delete, insert pages by drag.", tier: "Free" },
  { name: "Page numbers", desc: "Add numbers, custom format and position.", tier: "Free" },
  { name: "Scan to PDF", desc: "Apple's gold-standard document scanner.", tier: "Free" },
  { name: "Crop PDF", desc: "Trim margins, set crop boxes per page.", tier: "Free" },
  { name: "Compress PDF", desc: "Native compress free; server-grade Pro for the smallest file.", tier: "Pro" },
  { name: "OCR PDF", desc: "On-device free; server OCR for batches and rare scripts.", tier: "Pro" },
  { name: "Compare PDFs", desc: "Text diff free; visual + layout-aware diff Pro.", tier: "Pro" },
  { name: "Redact PDF", desc: "Flatten free; compliance-grade content-stream redaction Pro.", tier: "Pro" },
  { name: "PDF → Word", desc: "Layout and tables reconstructed properly.", tier: "Pro" },
  { name: "PDF → PowerPoint", desc: "Slides back to editable PPTX.", tier: "Pro" },
  { name: "PDF → Excel", desc: "Tables extracted into real cells.", tier: "Pro" },
  { name: "Word → PDF", desc: "Pixel-faithful via headless LibreOffice.", tier: "Pro" },
  { name: "PowerPoint → PDF", desc: "Animations flattened, fonts preserved.", tier: "Pro" },
  { name: "Excel → PDF", desc: "Sheets paginated cleanly.", tier: "Pro" },
  { name: "PDF → PDF/A", desc: "Long-term archival format, compliance-ready.", tier: "Pro" },
  { name: "Repair PDF", desc: "Fix broken xref tables and recover damaged files.", tier: "Pro" },
  { name: "Request signatures", desc: "Send for e-signature via DocuSign / Adobe Sign.", tier: "Pro" },
  { name: "Summarize", desc: "Key points and action items from any PDF.", tier: "AI" },
  { name: "Translate", desc: "Layout-preserving translation in 30+ languages.", tier: "AI" },
];

const tierStyles: Record<Tool["tier"], string> = {
  Free: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  Pro: "bg-rose-500/15 text-rose-300 border-rose-500/30",
  AI: "bg-violet-500/15 text-violet-300 border-violet-500/30",
};

export default function PdfHome() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-600/20 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-rose-500/30 via-orange-500/20 to-transparent rounded-full blur-3xl -translate-y-1/2" />
        <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-16 text-center sm:pt-32 sm:pb-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-sm text-rose-300">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Coming soon · iPhone first
          </div>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Stop paying{" "}
            <span className="text-slate-500 line-through decoration-rose-500/60 decoration-4">$80/year</span>
            <br className="hidden sm:block" /> for PDF tools.{" "}
            <span className="bg-gradient-to-r from-rose-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
              Pay $1.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl">
            Every PDF tool you actually use — merge, split, compress, edit, sign, OCR, watermark, convert,
            scan — unlimited, on your iPhone, for one dollar a year. No per-file limits. No watermarks.
            No upsells.
          </p>
          <div id="waitlist" className="mx-auto mt-10 max-w-md">
            <WaitlistForm source="pdf" />
            <p className="mt-3 text-xs text-slate-500">
              Email when the app drops. No spam, no newsletter.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="border-t border-white/5 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold sm:text-4xl">Why this exists</h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-300">
            <p>
              I got fed up. Every PDF tool on the web wants{" "}
              <span className="text-rose-300">$80–$120 a year</span> to do things your phone could do
              offline if someone bothered to wire it up properly. Merge two files? Paywall. Compress?
              Paywall. Remove a password you already know? Paywall + watermark + 2&nbsp;MB upload limit.
            </p>
            <p>
              Hey Wrist PDF is the opposite. Pay <span className="font-semibold text-white">$1 a year</span>{" "}
              once, get every non-AI tool unlimited, forever-as-long-as-you-renew. Most of it runs on
              your device — instant, private, offline. The hard stuff (Office round-trips, OCR at scale,
              compliance redaction) runs on a tiny server and you get it for the same $1.
            </p>
            <p className="text-slate-400">
              The only thing that costs more is AI summarize / translate, because tokens cost real money.
              That&apos;s a separate, optional add-on. Everything else is the dollar.
            </p>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="border-t border-white/5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              30 tools. <span className="text-rose-400">One dollar.</span>
            </h2>
            <p className="mt-4 text-slate-400">
              <span className="text-emerald-300">Free</span> = always on, fully on-device. {" "}
              <span className="text-rose-300">Pro</span> = unlocked with $1/year. {" "}
              <span className="text-violet-300">AI</span> = optional add-on.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-white/5 bg-slate-900/50 p-5 hover:border-rose-500/30 hover:bg-slate-900/80 transition-all"
              >
                <div className="flex items-center justify-between gap-3 mb-2">
                  <h3 className="font-semibold">{t.name}</h3>
                  <span className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium ${tierStyles[t.tier]}`}>
                    {t.tier}
                  </span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-white/5 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">One price. No surprises.</h2>
            <p className="mt-4 text-slate-400">
              The whole toolbox, unlimited use, for the price of a pack of gum.
            </p>
          </div>
          <div className="mt-12 rounded-3xl border border-rose-500/30 bg-gradient-to-br from-rose-500/10 via-red-500/5 to-orange-500/10 p-8 sm:p-10 text-center">
            <p className="text-sm uppercase tracking-widest text-rose-300">Hey Wrist PDF</p>
            <div className="mt-3 flex items-baseline justify-center gap-2">
              <span className="text-6xl font-bold sm:text-7xl">$1</span>
              <span className="text-lg text-slate-400">/ year</span>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              vs. <span className="line-through">$80/yr</span> on the tools you&apos;re used to
            </p>
            <ul className="mx-auto mt-8 grid max-w-md gap-2 text-left text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-emerald-400">✓</span> All 28 non-AI tools, unlimited use</li>
              <li className="flex gap-2"><span className="text-emerald-400">✓</span> No file size caps, no watermarks</li>
              <li className="flex gap-2"><span className="text-emerald-400">✓</span> Most tools work offline on your iPhone</li>
              <li className="flex gap-2"><span className="text-emerald-400">✓</span> Office conversions, OCR, redaction included</li>
              <li className="flex gap-2"><span className="text-emerald-400">✓</span> Cancel anytime, keep what you exported</li>
            </ul>
            <div className="mt-8 rounded-xl border border-violet-500/20 bg-violet-500/5 p-4 text-sm text-slate-300">
              <p>
                <span className="font-semibold text-violet-300">AI summarize &amp; translate</span> are
                an optional add-on (tokens cost real money). Everything else is the dollar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-white/5 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Get it when it ships.</h2>
          <p className="mt-4 text-lg text-slate-400">
            Drop your email. I&apos;ll only ping you when the app is in the App Store —
            and once when the $1/year promo opens.
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <WaitlistForm source="pdf-bottom" />
          </div>
        </div>
      </section>
    </main>
  );
}
