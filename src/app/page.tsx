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
      <main className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Hey<span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Wrist</span>
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            Beautiful apps for iPhone and Apple Watch
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <Link
              key={app.slug}
              href={`/${app.slug}`}
              className="group rounded-2xl border border-white/5 bg-slate-900/50 p-5 hover:border-white/20 hover:bg-slate-900/80 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={`/icons/${app.slug}.png`}
                  alt={`${app.name} icon`}
                  width={40}
                  height={40}
                  className="rounded-xl"
                />
                <h2 className="text-lg font-semibold group-hover:text-white transition-colors">{app.name}</h2>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">{app.desc}</p>
              <div className="mt-4 flex gap-3 text-xs text-slate-500">
                <span className="hover:text-white transition-colors">Privacy</span>
                <span>&middot;</span>
                <span className="hover:text-white transition-colors">Terms</span>
                <span>&middot;</span>
                <span className="hover:text-white transition-colors">Support</span>
              </div>
            </Link>
          ))}
        </div>

        <footer className="mt-20 pt-8 border-t border-white/10 text-center">
          <div className="text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Ranju Jha. All rights reserved.</p>
            <p className="mt-2">
              <a href="mailto:support@heywrist.com" className="text-slate-400 hover:text-white transition-colors">
                support@heywrist.com
              </a>
            </p>
            <p className="mt-3 text-xs text-slate-600">
              Apple Watch, iPhone, and App Store are trademarks of Apple Inc.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
