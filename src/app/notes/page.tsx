import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dexter Notes - AI-Powered Notes & Tasks",
  description:
    "Dexter Notes — AI-powered notes, tasks, voice recording with transcription, Gmail integration, and Apple Watch experience.",
};

const features = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>
    ),
    title: "Rich Notes & Tasks",
    desc: "Rich text notes with inline task lists, folders, tags, calendar view, and full-text search. Pin important notes and organize your way.",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
      </svg>
    ),
    title: "Voice Recording & AI Transcription",
    desc: "One-tap recording with live waveform. On-device transcription via Apple Speech, then AI cleans up filler words and fixes grammar.",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    title: "AI Intelligence",
    desc: "Ask AI anything about your notes. Transform notes into summaries, to-do lists, emails, or blog posts. Auto-categorization and smart tagging.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
    title: "Gmail Integration",
    desc: "Fetch emails, get AI-powered summaries, extract tasks, and reply — all from within the app. Auto-creates contacts from senders.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Apple Watch",
    desc: "Morning digest, one-tap voice recording, task management, and quick capture — all from your wrist with bidirectional sync.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    title: "Contact-Centric CRM",
    desc: "People view with auto-created contacts from emails. Per-contact timeline of notes, tasks, and emails with follow-up awareness.",
    color: "from-cyan-500 to-cyan-600",
  },
];

const steps = [
  { num: "1", title: "Capture", desc: "Jot a note, dictate a recording, or import emails. From iPhone, Watch, or inbox." },
  { num: "2", title: "Organize", desc: "AI auto-categorizes, suggests tags, and links related content. Dump now, organize later." },
  { num: "3", title: "Act", desc: "Extract tasks, transform notes into emails or blog posts, and review on your Watch." },
];

export default function NotesHome() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-600/20 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-amber-500/30 via-yellow-500/20 to-transparent rounded-full blur-3xl -translate-y-1/2" />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 text-center sm:pt-32 sm:pb-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm text-amber-300">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            For iPhone and Apple Watch
          </div>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Your AI-powered{" "}
            <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              second brain
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl">
            Notes, tasks, voice recordings, Gmail integration, and AI intelligence
            &mdash; capture everything, let AI organize it, and act from
            anywhere including your Apple Watch.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="https://apps.apple.com/us/app/dexter-notes/id6761487065" className="inline-block">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-14" />
            </a>
            <span className="text-sm text-slate-500">Free to start &middot; CloudKit sync</span>
          </div>

          {/* Hero mockup */}
          <div className="relative mx-auto mt-16 max-w-3xl">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
            <div className="flex items-end justify-center gap-6">
              <div className="w-56 sm:w-64 rounded-3xl border border-white/10 bg-slate-900/80 p-3 shadow-2xl shadow-amber-500/10">
                <div className="aspect-[9/19] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center p-4">
                  <div className="w-full space-y-3">
                    <div className="text-center">
                      <p className="text-xs text-slate-500">Quick Capture</p>
                      <p className="text-lg font-bold text-amber-400">Ask AI anything</p>
                    </div>
                    <div className="space-y-1.5">
                      {[
                        { title: "Meeting Notes", tag: "Work", color: "bg-amber-500" },
                        { title: "Grocery List", tag: "Shopping", color: "bg-emerald-500" },
                        { title: "Project Ideas", tag: "Ideas", color: "bg-violet-500" },
                        { title: "Voice Memo", tag: "Recording", color: "bg-red-500" },
                      ].map((n) => (
                        <div key={n.title} className="flex items-center gap-2 rounded-lg bg-slate-800/60 px-2 py-1.5">
                          <div className={`h-3 w-3 rounded ${n.color}`} />
                          <span className="text-[10px] text-slate-300">{n.title}</span>
                          <span className="ml-auto text-[10px] text-slate-500">{n.tag}</span>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-lg bg-amber-500/20 border border-amber-500/30 p-2 text-center">
                      <p className="text-[9px] text-amber-300">3 tasks due today</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden w-28 sm:block mb-8">
                <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-2 shadow-2xl shadow-amber-500/10">
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center p-2">
                    <p className="text-[8px] text-slate-500">Digest</p>
                    <p className="text-sm font-bold text-amber-400">3 tasks</p>
                    <p className="text-[8px] text-slate-400">Good morning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Capture, organize,{" "}
              <span className="text-amber-400">act</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Dexter Notes thinks for you — powered by AI and deeply integrated with Apple ecosystem.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="group rounded-2xl border border-white/5 bg-slate-900/50 p-6 hover:border-amber-500/30 hover:bg-slate-900/80 transition-all">
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${f.color} text-white`}>
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 sm:py-28 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl">How it works</h2>
            <p className="mt-4 text-lg text-slate-400">Capture → Organize → Act. Let AI handle the middle part.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-600 text-2xl font-bold">{s.num}</div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 border-t border-white/5">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Think less about organizing. Think more.</h2>
          <p className="mt-4 text-lg text-slate-400">
            Dexter Notes captures your thoughts, AI organizes them, and you focus on what matters.
          </p>
          <div className="mt-10">
            <a href="https://apps.apple.com/us/app/dexter-notes/id6761487065" className="inline-block">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-14" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
