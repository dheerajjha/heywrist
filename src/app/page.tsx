import Link from "next/link";

const apps = [
  {
    name: "Screenaway",
    slug: "screenaway",
    desc: "Screen time control for iPhone and Apple Watch",
    color: "from-indigo-500 to-violet-600",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3" />
      </svg>
    ),
  },
  {
    name: "AutoSleepy",
    slug: "autosleepy",
    desc: "Privacy-first sleep tracking for iPhone and Apple Watch",
    color: "from-purple-500 to-indigo-600",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
      </svg>
    ),
  },
  {
    name: "Recordy",
    slug: "recordy",
    desc: "Premium voice recorder for iPhone and Apple Watch",
    color: "from-red-500 to-rose-600",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
      </svg>
    ),
  },
  {
    name: "Streaky",
    slug: "streaky",
    desc: "Habit tracking with gamification for iPhone and Apple Watch",
    color: "from-orange-500 to-amber-600",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
      </svg>
    ),
  },
  {
    name: "Watery",
    slug: "watery",
    desc: "Smart hydration tracking for iPhone and Apple Watch",
    color: "from-blue-500 to-cyan-600",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75c-4.97 4.97-7.5 8.03-7.5 11.25a7.5 7.5 0 0 0 15 0c0-3.22-2.53-6.28-7.5-11.25Z" />
      </svg>
    ),
  },
  {
    name: "Chatty",
    slug: "chatty",
    desc: "AI companion for Apple Watch and iPhone",
    color: "from-purple-500 to-violet-700",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
      </svg>
    ),
  },
  {
    name: "Notes",
    slug: "notes",
    desc: "AI-powered notes and tasks for iPhone and Apple Watch",
    color: "from-amber-500 to-yellow-600",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>
    ),
  },
  {
    name: "Structured",
    slug: "structured",
    desc: "Visual daily planner for iPhone and Apple Watch",
    color: "from-teal-500 to-emerald-600",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    ),
  },
  {
    name: "ChronoFit",
    slug: "chronofit",
    desc: "Narrative fitness timer for iPhone and Apple Watch",
    color: "from-red-500 to-rose-600",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    name: "Lumina",
    slug: "lumina",
    desc: "Focus timer that lights the cosmos for iPhone and Apple Watch",
    color: "from-blue-600 to-indigo-700",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
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
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${app.color} text-white`}>
                  {app.icon}
                </div>
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
