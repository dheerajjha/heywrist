import Link from "next/link";

const apps = [
  { name: "Screenaway", slug: "screenaway", desc: "Screen time control for iPhone and Apple Watch" },
  { name: "AutoSleepy", slug: "autosleepy", desc: "Privacy-first sleep tracking for iPhone and Apple Watch" },
  { name: "Recordy", slug: "recordy", desc: "Premium voice recorder for iPhone and Apple Watch" },
  { name: "Streaky", slug: "streaky", desc: "Habit tracking with gamification for iPhone and Apple Watch" },
  { name: "Watery", slug: "watery", desc: "Smart hydration tracking for iPhone and Apple Watch" },
  { name: "Chatty", slug: "chatty", desc: "AI companion for Apple Watch and iPhone" },
  { name: "Dexter Notes", slug: "notes", desc: "AI-powered notes and tasks for iPhone and Apple Watch" },
  { name: "Structured", slug: "structured", desc: "Visual daily planner for iPhone and Apple Watch" },
  { name: "ChronoFit", slug: "chronofit", desc: "Narrative fitness timer for iPhone and Apple Watch" },
  { name: "Lumina", slug: "lumina", desc: "Focus timer that lights the cosmos for iPhone and Apple Watch" },
  { name: "BetterChannels", slug: "betterchannels", desc: "Mobile mission control for Claude Code sessions" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Subtle gradient backdrop */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),transparent_60%)]" />

      <main className="relative mx-auto max-w-5xl px-6 py-16 sm:py-24">
        {/* Hero */}
        <div className="flex flex-col items-center text-center mb-20">
          <img
            src="/icons/heywrist.png"
            alt="HeyWrist"
            width={80}
            height={80}
            className="rounded-2xl shadow-lg shadow-indigo-500/20 mb-6"
          />
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Hey<span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Wrist</span>
          </h1>
          <p className="mt-4 max-w-md text-lg text-slate-400">
            Beautiful, privacy-first apps for iPhone &amp; Apple&nbsp;Watch
          </p>
        </div>

        {/* App grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <Link
              key={app.slug}
              href={`/${app.slug}`}
              className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 backdrop-blur-sm hover:border-white/15 hover:bg-white/[0.06] transition-all duration-200"
            >
              <div className="flex items-center gap-3.5 mb-3">
                <img
                  src={`/icons/${app.slug}.png`}
                  alt={`${app.name} icon`}
                  width={48}
                  height={48}
                  className="rounded-[12px] shadow-md shadow-black/30"
                />
                <h2 className="text-lg font-semibold text-slate-200 group-hover:text-white transition-colors">
                  {app.name}
                </h2>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">{app.desc}</p>
              <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
                <span className="group-hover:text-slate-400 transition-colors">Privacy</span>
                <span className="text-slate-700">&middot;</span>
                <span className="group-hover:text-slate-400 transition-colors">Terms</span>
                <span className="text-slate-700">&middot;</span>
                <span className="group-hover:text-slate-400 transition-colors">Support</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-white/[0.06] text-center">
          <div className="flex flex-col items-center gap-3">
            <img
              src="/icons/heywrist.png"
              alt="HeyWrist"
              width={28}
              height={28}
              className="rounded-lg opacity-40"
            />
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Ranju Jha. All rights reserved.
            </p>
            <a
              href="mailto:support@heywrist.com"
              className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
            >
              support@heywrist.com
            </a>
            <p className="mt-1 text-xs text-slate-600">
              Apple Watch, iPhone, and App Store are trademarks of Apple Inc.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
