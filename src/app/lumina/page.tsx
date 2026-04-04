import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lumina - Your Focus Lights the Cosmos",
  description:
    "Premium focus and study timer for iPhone and Apple Watch with gamification, analytics, ambient soundscapes, and a narrative where your focus rebuilds the night sky.",
};

const features = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "6 Focus Methods",
    desc: "Pomodoro, Deep Work (90 min), 52/17, Flowtime, Time Boxing, and Ultradian. Each with custom durations and smart break management.",
    color: "from-blue-600 to-blue-700",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    title: "Lumina Companion",
    desc: "A tiny star spirit born from your focus. Lumina evolves through 7 tiers — from Flickering Spark to Cosmic Guardian — reacting to your focus intensity.",
    color: "from-indigo-600 to-indigo-700",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
    title: "12 Constellations",
    desc: "Light energy from focus sessions reignites stars. 4 hand-crafted + 8 procedurally generated constellations with interactive Canvas visualizations.",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    title: "Professional Analytics",
    desc: "Weekly bar charts, hourly productivity heatmaps, method breakdown, streak tracking, mood tracking, and best day/hour analysis.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
      </svg>
    ),
    title: "6 Ambient Soundscapes",
    desc: "Procedurally generated Rain, Ocean, Forest, Fireplace, White Noise, and Cosmic Hum via AVAudioEngine. Volume control with fade-in/out.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Apple Watch & Deep Integration",
    desc: "Standalone Watch timer with complications, Live Activities, Dynamic Island, Siri Shortcuts, Focus Filters, and Apple Calendar sync.",
    color: "from-rose-500 to-rose-600",
  },
];

const steps = [
  { num: "1", title: "Pick a Method", desc: "Choose from Pomodoro, Deep Work, 52/17, Flowtime, Time Boxing, or Ultradian. Customize durations." },
  { num: "2", title: "Focus", desc: "Watch Lumina glow brighter as you concentrate. Ambient sounds and haptic feedback keep you in flow." },
  { num: "3", title: "Light the Stars", desc: "Earn light energy, reignite constellations, evolve Lumina, and track your progress with analytics." },
];

export default function LuminaHome() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-700/20 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-blue-600/30 via-indigo-600/20 to-transparent rounded-full blur-3xl -translate-y-1/2" />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 text-center sm:pt-32 sm:pb-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            For iPhone and Apple Watch
          </div>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Your focus lights{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
              the cosmos
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl">
            A premium focus timer with 6 methods, a companion star spirit that evolves
            with you, 12 constellations to light, professional analytics, and immersive
            ambient soundscapes.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="https://apps.apple.com/app/lumina-focus" className="inline-block">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-14" />
            </a>
            <span className="text-sm text-slate-500">Free to start &middot; Lifetime purchase available</span>
          </div>

          {/* Hero mockup */}
          <div className="relative mx-auto mt-16 max-w-3xl">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
            <div className="flex items-end justify-center gap-6">
              <div className="w-56 sm:w-64 rounded-3xl border border-white/10 bg-slate-900/80 p-3 shadow-2xl shadow-blue-600/10">
                <div className="aspect-[9/19] rounded-2xl bg-gradient-to-br from-[#0a0a2e] to-[#1a1a4e] flex flex-col items-center justify-center p-4">
                  <div className="w-full space-y-3">
                    <div className="text-center">
                      <p className="text-xs text-blue-300/60">Deep Work</p>
                      <p className="text-2xl font-bold text-blue-300">42:18</p>
                      <p className="text-xs text-blue-400/60">Focusing</p>
                    </div>
                    <div className="mx-auto h-20 w-20 rounded-full border-4 border-blue-600/30 flex items-center justify-center relative">
                      <div className="h-16 w-16 rounded-full border-4 border-blue-500 flex items-center justify-center" style={{ borderTopColor: "transparent", borderRightColor: "transparent", transform: "rotate(45deg)" }}>
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 -rotate-45 animate-pulse shadow-lg shadow-blue-500/50" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between rounded-lg bg-blue-500/10 px-2 py-1.5">
                        <span className="text-[10px] text-blue-300/80">Lumina</span>
                        <span className="text-[10px] font-medium text-blue-300">Bright Ember</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-blue-500/10 px-2 py-1.5">
                        <span className="text-[10px] text-blue-300/80">Light Energy</span>
                        <span className="text-[10px] font-medium text-indigo-300">+84</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-blue-500/10 px-2 py-1.5">
                        <span className="text-[10px] text-blue-300/80">Streak</span>
                        <span className="text-[10px] font-medium text-violet-300">12 days</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden w-28 sm:block mb-8">
                <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-2 shadow-2xl shadow-blue-600/10">
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-[#0a0a2e] to-[#1a1a4e] flex flex-col items-center justify-center p-2">
                    <div className="h-5 w-5 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 mb-1 animate-pulse" />
                    <p className="text-sm font-bold text-blue-300">42:18</p>
                    <p className="text-[8px] text-blue-400/60">Focusing</p>
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
              Focus, elevated to{" "}
              <span className="text-blue-400">an experience</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Professional analytics meet emotional gamification in a cosmic narrative.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="group rounded-2xl border border-white/5 bg-slate-900/50 p-6 hover:border-blue-500/30 hover:bg-slate-900/80 transition-all">
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
            <p className="mt-4 text-lg text-slate-400">Focus, evolve, illuminate.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-2xl font-bold">{s.num}</div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 sm:py-28 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl">Choose your path</h2>
            <p className="mt-4 text-lg text-slate-400">Free core experience. Pro unlocks the full cosmos.</p>
          </div>
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 text-center">
              <h3 className="text-lg font-semibold">Free</h3>
              <p className="mt-1 text-sm text-slate-400">Full timer + basic gamification</p>
              <p className="mt-4 text-3xl font-bold">$0</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-300 text-left">
                {["All 6 focus methods", "Lumina companion (3 tiers)", "First 4 constellations", "Basic analytics", "Ambient soundscapes"].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-b from-blue-600/10 to-slate-900/50 p-6 text-center">
              <h3 className="text-lg font-semibold">Pro</h3>
              <p className="mt-1 text-sm text-slate-400">Full cosmic experience</p>
              <p className="mt-4 text-3xl font-bold">$39.99<span className="text-base font-normal text-slate-500"> lifetime</span></p>
              <p className="text-xs text-slate-500 mt-1">or $2.99/mo &middot; $19.99/yr</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-300 text-left">
                {["Everything in Free", "All 12 constellations", "7 Lumina evolution tiers", "Advanced analytics & heatmaps", "Exclusive orb styles"].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 border-t border-white/5">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Awaken Lumina with your first focus session</h2>
          <p className="mt-4 text-lg text-slate-400">
            Every minute of deep focus reignites a star. Start building your cosmos today.
          </p>
          <div className="mt-10">
            <a href="https://apps.apple.com/app/lumina-focus" className="inline-block">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-14" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
