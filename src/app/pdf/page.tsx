import type { Metadata } from "next";
import {
  Archive,
  Combine,
  Crop,
  Diff,
  EyeOff,
  FilePlus,
  FileSignature,
  FileSpreadsheet,
  FileType2,
  Globe,
  Hash,
  Image as ImageIcon,
  Languages,
  LayoutGrid,
  Lock,
  type LucideIcon,
  Minimize2,
  PenLine,
  Presentation,
  RotateCw,
  ScanLine,
  ScanText,
  Scissors,
  Send,
  Sparkles,
  Stamp,
  Unlock,
  Wrench,
} from "lucide-react";
import WaitlistForm from "../components/WaitlistForm";

export const metadata: Metadata = {
  title: "Hey Wrist PDF — every PDF tool you need for $1/month",
  description:
    "30 PDF tools, unlimited use of every non-AI tool for $1/month. Clean, fast, Apple-native — built to replace the $10–20/month utility apps cluttering the App Store.",
};

type Tier = "Free" | "Pro" | "AI";
type Category =
  | "Organize"
  | "Optimize"
  | "ConvertTo"
  | "ConvertFrom"
  | "Edit"
  | "Security"
  | "AI";

type Tool = {
  name: string;
  desc: string;
  tier: Tier;
  category: Category;
  Icon: LucideIcon;
};

const tools: Tool[] = [
  // Organize
  { name: "Merge PDFs", desc: "Combine any number of PDFs into one.", tier: "Free", category: "Organize", Icon: Combine },
  { name: "Split PDF", desc: "Pull pages or ranges into separate files.", tier: "Free", category: "Organize", Icon: Scissors },
  { name: "Organize", desc: "Reorder, delete, insert pages by drag.", tier: "Free", category: "Organize", Icon: LayoutGrid },
  { name: "Scan to PDF", desc: "Apple's gold-standard document scanner.", tier: "Free", category: "Organize", Icon: ScanLine },
  // Optimize
  { name: "Compress PDF", desc: "Native compress free; server-grade Pro for the smallest file.", tier: "Pro", category: "Optimize", Icon: Minimize2 },
  { name: "OCR PDF", desc: "On-device free; server OCR for batches and rare scripts.", tier: "Pro", category: "Optimize", Icon: ScanText },
  { name: "Repair PDF", desc: "Fix broken xref tables and recover damaged files.", tier: "Pro", category: "Optimize", Icon: Wrench },
  // Convert TO PDF
  { name: "JPG → PDF", desc: "Photos and screenshots into one PDF.", tier: "Free", category: "ConvertTo", Icon: FilePlus },
  { name: "Word → PDF", desc: "Pixel-faithful via headless LibreOffice.", tier: "Pro", category: "ConvertTo", Icon: FileType2 },
  { name: "PowerPoint → PDF", desc: "Animations flattened, fonts preserved.", tier: "Pro", category: "ConvertTo", Icon: Presentation },
  { name: "Excel → PDF", desc: "Sheets paginated cleanly.", tier: "Pro", category: "ConvertTo", Icon: FileSpreadsheet },
  { name: "HTML → PDF", desc: "Save any webpage as Safari would.", tier: "Free", category: "ConvertTo", Icon: Globe },
  // Convert FROM PDF
  { name: "PDF → JPG", desc: "Export every page as a sharp image.", tier: "Free", category: "ConvertFrom", Icon: ImageIcon },
  { name: "PDF → Word", desc: "Layout and tables reconstructed properly.", tier: "Pro", category: "ConvertFrom", Icon: FileType2 },
  { name: "PDF → PowerPoint", desc: "Slides back to editable PPTX.", tier: "Pro", category: "ConvertFrom", Icon: Presentation },
  { name: "PDF → Excel", desc: "Tables extracted into real cells.", tier: "Pro", category: "ConvertFrom", Icon: FileSpreadsheet },
  { name: "PDF → PDF/A", desc: "Long-term archival format, compliance-ready.", tier: "Pro", category: "ConvertFrom", Icon: Archive },
  // Edit
  { name: "Edit PDF", desc: "Annotate, draw, add text and shapes.", tier: "Free", category: "Edit", Icon: PenLine },
  { name: "Rotate", desc: "Fix sideways or upside-down pages.", tier: "Free", category: "Edit", Icon: RotateCw },
  { name: "Page numbers", desc: "Add numbers, custom format and position.", tier: "Free", category: "Edit", Icon: Hash },
  { name: "Watermark", desc: "Stamp text or images on every page.", tier: "Free", category: "Edit", Icon: Stamp },
  { name: "Crop PDF", desc: "Trim margins, set crop boxes per page.", tier: "Free", category: "Edit", Icon: Crop },
  // Security
  { name: "Unlock PDF", desc: "Remove the password you already know.", tier: "Free", category: "Security", Icon: Unlock },
  { name: "Protect PDF", desc: "Password-protect any document.", tier: "Free", category: "Security", Icon: Lock },
  { name: "Sign PDF", desc: "Pencil-perfect signatures, flattened.", tier: "Free", category: "Security", Icon: FileSignature },
  { name: "Redact PDF", desc: "Flatten free; compliance-grade content-stream redaction Pro.", tier: "Pro", category: "Security", Icon: EyeOff },
  { name: "Compare PDFs", desc: "Text diff free; visual + layout-aware diff Pro.", tier: "Pro", category: "Security", Icon: Diff },
  { name: "Request signatures", desc: "Send for e-signature via DocuSign / Adobe Sign.", tier: "Pro", category: "Security", Icon: Send },
  // Intelligence
  { name: "Summarize", desc: "Key points and action items from any PDF.", tier: "AI", category: "AI", Icon: Sparkles },
  { name: "Translate", desc: "Layout-preserving translation in 30+ languages.", tier: "AI", category: "AI", Icon: Languages },
];

// Tier pill (only shown for Pro / AI — Free is the default and stays implicit).
const tierStyles: Record<Exclude<Tier, "Free">, string> = {
  Pro: "bg-white/5 text-slate-200 border-white/15",
  AI: "bg-pink-500/15 text-pink-200 border-pink-500/30",
};

// Category-tinted icon tile, ilovepdf-style: red / purple / amber / green / blue / teal / pink.
const categoryIconStyles: Record<Category, string> = {
  Organize: "from-red-500/30 to-red-500/5 text-red-200 ring-red-500/30",
  Optimize: "from-purple-500/30 to-purple-500/5 text-purple-200 ring-purple-500/30",
  ConvertTo: "from-amber-500/30 to-amber-500/5 text-amber-200 ring-amber-500/30",
  ConvertFrom: "from-green-500/30 to-green-500/5 text-green-200 ring-green-500/30",
  Edit: "from-blue-500/30 to-blue-500/5 text-blue-200 ring-blue-500/30",
  Security: "from-teal-500/30 to-teal-500/5 text-teal-200 ring-teal-500/30",
  AI: "from-pink-500/30 to-pink-500/5 text-pink-200 ring-pink-500/30",
};

const categoryLegend: { key: Category; label: string; dot: string }[] = [
  { key: "Organize", label: "Organize", dot: "bg-red-400" },
  { key: "Optimize", label: "Optimize", dot: "bg-purple-400" },
  { key: "ConvertTo", label: "Convert to PDF", dot: "bg-amber-400" },
  { key: "ConvertFrom", label: "Convert from PDF", dot: "bg-green-400" },
  { key: "Edit", label: "Edit", dot: "bg-blue-400" },
  { key: "Security", label: "Security", dot: "bg-teal-400" },
  { key: "AI", label: "AI", dot: "bg-pink-400" },
];

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
            <span className="text-slate-500 line-through decoration-rose-500/60 decoration-4">$10–20/month</span>
            <br className="hidden sm:block" /> for PDF tools.{" "}
            <span className="bg-gradient-to-r from-rose-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
              Pay $1.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl">
            Every PDF tool you actually use — merge, split, compress, edit, sign, OCR, watermark, convert,
            scan — unlimited, on your iPhone, for one dollar a month. Clean, fast, Apple-native.
            No per-file limits. No watermarks. No sketchy privacy.
          </p>
          <div id="waitlist" className="mx-auto mt-10 max-w-md">
            <WaitlistForm source="pdf" />
            <p className="mt-3 text-xs text-slate-500">
              Email when the app drops. No spam, no newsletter.
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
              Color-coded by category. <span className="text-slate-300">Pro</span> tools are unlocked with $1/month;{" "}
              <span className="text-pink-300">AI</span> is an optional add-on. Everything else is free, on-device.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-slate-300">
              {categoryLegend.map(({ key, label, dot }) => (
                <span key={key} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
                  {label}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map(({ name, desc, tier, category, Icon }) => (
              <div
                key={name}
                className="group rounded-2xl border border-white/5 bg-slate-900/50 p-5 hover:border-rose-500/30 hover:bg-slate-900/80 transition-all"
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ring-1 group-hover:scale-105 transition-transform ${categoryIconStyles[category]}`}
                    aria-hidden
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3 mb-1.5">
                      <h3 className="font-semibold leading-none">{name}</h3>
                      {tier !== "Free" && (
                        <span className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium ${tierStyles[tier]}`}>
                          {tier}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="border-t border-white/5 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold sm:text-4xl">Why this exists</h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-300">
            <p>
              Fed up watching Chinese utility apps charge{" "}
              <span className="text-rose-300">$10–20 a month</span> like it&apos;s nothing. Same features.
              Worse UX. Sketchy privacy. The App Store is full of them — top of every PDF search,
              5-star ratings farmed, free trials that auto-renew at $89.99/year before you blink.
            </p>
            <p>
              We built Hey Wrist PDF as the opposite. Pay{" "}
              <span className="font-semibold text-white">$1 a month</span>, get every non-AI tool
              unlimited. Clean, fast, Apple-native. Most of it runs on your device — instant, private,
              offline. The hard stuff (Office round-trips, OCR at scale, compliance redaction) runs on
              a tiny server and you get it for the same dollar.
            </p>
            <p className="text-slate-400">
              The only thing that costs more is AI summarize / translate, because tokens cost real money.
              That&apos;s a separate, optional add-on. Everything else is the dollar.
            </p>
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
              <span className="text-lg text-slate-400">/ month</span>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              vs. <span className="line-through">$10–20/mo</span> on the apps cluttering the App Store
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
            and once when the $1/month promo opens.
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <WaitlistForm source="pdf-bottom" />
          </div>
        </div>
      </section>
    </main>
  );
}
