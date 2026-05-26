import type { Metadata } from "next";
import WaitlistForm from "@/app/components/WaitlistForm";

export const metadata: Metadata = {
  title: "ChronoFit - Narrative Fitness Timer",
  description:
    "Watch-first interval timer with all 20 timer types, deep gamification, and a unique storytelling layer for iPhone and Apple Watch.",
};

const features = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "All 20 Timer Types",
    desc: "HIIT, Tabata, AMRAP, EMOM, For Time, Circuit, Round Timer, Pyramid, Ladder, Death By, Sally, Compound, Countdown, Stopwatch, Boxing, MMA, Stretch, Yoga, Breathwork, and Custom.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "Narrative Missions",
    desc: "You are Agent Zero. 5 story chapters, 15 missions — each workout stabilizes time anomalies. The first fitness timer with real storytelling.",
    color: "from-rose-500 to-rose-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0 1 16.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 0 1-2.77.896m5.25-6.624V2.721" />
      </svg>
    ),
    title: "XP & 6 Agent Ranks",
    desc: "Earn XP from every workout. Rise from Recruit to Temporal Master across 6 ranks. 12 achievement badges with automatic tracking.",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Watch-First Design",
    desc: "Not a phone app with a Watch companion — a genuine Apple Watch-native experience. 12 timer types and 8 presets right on your wrist.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
    title: "Cinematic UI",
    desc: "Phase-reactive colors (orange=work, cyan=rest, green=warmup), animated timer rings, particle effects, and glass-morphism cards.",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
      </svg>
    ),
    title: "22 Preset Workouts",
    desc: "Ready-to-go workouts covering every timer type, plus a custom builder with work/rest/rounds/warmup/cooldown sliders.",
    color: "from-cyan-500 to-cyan-600",
  },
];

const steps = [
  { num: "1", title: "Choose Your Mission", desc: "Pick from 22 presets, 20 timer types, or build a custom workout. Each story mission maps to a workout type." },
  { num: "2", title: "Work Out", desc: "Immersive full-screen timer with animated rings, phase colors, particles, and haptic feedback on every transition." },
  { num: "3", title: "Level Up", desc: "Earn XP, climb ranks, unlock achievements, and advance the story. Every rep powers the timeline." },
];

export default function ChronoFitHome() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-600/20 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-red-500/30 via-rose-500/20 to-transparent rounded-full blur-3xl -translate-y-1/2" />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 text-center sm:pt-32 sm:pb-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm text-red-300">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" />
            For iPhone and Apple Watch
          </div>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Every workout is a{" "}
            <span className="bg-gradient-to-r from-red-400 via-rose-400 to-amber-400 bg-clip-text text-transparent">
              mission
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl">
            All 20 interval timer types, deep gamification with XP and ranks,
            and a unique narrative layer where your workouts stabilize time
            anomalies &mdash; all designed Watch-first.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <div id="waitlist" className="w-full"><WaitlistForm source="chronofit" /><p className="mt-3 text-xs text-slate-500">🍳 Cooking · join the list to get notified when it ships.</p></div>
            <span className="text-sm text-slate-500">Free to start &middot; Lifetime purchase available</span>
          </div>

          {/* Hero mockup */}
          <div className="relative mx-auto mt-16 max-w-3xl">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
            <div className="flex items-end justify-center gap-6">
              <div className="w-56 sm:w-64 rounded-3xl border border-white/10 bg-slate-900/80 p-3 shadow-2xl shadow-red-500/10">
                <div className="aspect-[9/19] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center p-4">
                  <div className="w-full space-y-3">
                    <div className="text-center">
                      <p className="text-xs text-slate-500">HIIT Workout</p>
                      <p className="text-2xl font-bold text-red-400">00:28</p>
                      <p className="text-xs text-orange-400 uppercase tracking-wider">Work</p>
                    </div>
                    <div className="mx-auto h-20 w-20 rounded-full border-4 border-red-500/30 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full border-4 border-orange-500 flex items-center justify-center" style={{ borderTopColor: "transparent", transform: "rotate(120deg)" }}>
                        <svg className="h-5 w-5 text-orange-400 -rotate-[120deg]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/60 px-2 py-1.5">
                        <span className="text-[10px] text-slate-300">Round</span>
                        <span className="text-[10px] font-medium text-red-400">3 / 8</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/60 px-2 py-1.5">
                        <span className="text-[10px] text-slate-300">XP Earned</span>
                        <span className="text-[10px] font-medium text-amber-400">+75</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/60 px-2 py-1.5">
                        <span className="text-[10px] text-slate-300">Rank</span>
                        <span className="text-[10px] font-medium text-violet-400">Agent</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden w-28 sm:block mb-8">
                <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-2 shadow-2xl shadow-red-500/10">
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center p-2">
                    <p className="text-[8px] text-orange-400 uppercase">Work</p>
                    <p className="text-lg font-bold text-red-400">0:28</p>
                    <p className="text-[8px] text-slate-400">Round 3/8</p>
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
              The ultimate{" "}
              <span className="text-red-400">fitness timer</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Every timer type. Every workout style. One app with a story to tell.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="group rounded-2xl border border-white/5 bg-slate-900/50 p-6 hover:border-red-500/30 hover:bg-slate-900/80 transition-all">
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
            <p className="mt-4 text-lg text-slate-400">Choose your mission, work out, level up.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 text-2xl font-bold">{s.num}</div>
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
            <h2 className="text-3xl font-bold sm:text-4xl">Fair pricing</h2>
            <p className="mt-4 text-lg text-slate-400">Free core timer. No subscription-only gates.</p>
          </div>
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 text-center">
              <h3 className="text-lg font-semibold">Free</h3>
              <p className="mt-1 text-sm text-slate-400">Core timer functionality</p>
              <p className="mt-4 text-3xl font-bold">$0</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-300 text-left">
                {["All 20 timer types", "22 preset workouts", "Custom workout builder", "Phase-reactive UI & haptics"].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-red-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-red-500/30 bg-gradient-to-b from-red-500/10 to-slate-900/50 p-6 text-center">
              <h3 className="text-lg font-semibold">Pro</h3>
              <p className="mt-1 text-sm text-slate-400">Full narrative + gamification</p>
              <p className="mt-4 text-3xl font-bold">$39.99<span className="text-base font-normal text-slate-500"> lifetime</span></p>
              <p className="text-xs text-slate-500 mt-1">or $2.99/mo &middot; $19.99/yr</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-300 text-left">
                {["Everything in Free", "5 story chapters, 15 missions", "XP system & 6 agent ranks", "12 achievement badges", "Sound packs & themes"].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-red-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
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
          <h2 className="text-3xl font-bold sm:text-4xl">Your body powers the timeline</h2>
          <p className="mt-4 text-lg text-slate-400">
            Every rep stabilizes reality. Download ChronoFit and begin your first mission.
          </p>
          <div className="mt-10">
            <div className="w-full"><WaitlistForm source="chronofit" /><p className="mt-3 text-xs text-slate-500">🍳 Cooking · join the list to get notified when it ships.</p></div>
          </div>
        </div>
      </section>
    </main>
  );
}
