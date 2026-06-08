import type { Metadata } from "next";

const APP_STORE_URL = "https://apps.apple.com/app/id6776298443";

export const metadata: Metadata = {
  title: "Tickd - A Calmer Way to Plan Your Day",
  description:
    "A calm daily planner for iPhone and Apple Watch. Say it and Tickd plans it — one timeline, gentle momentum, and AI that builds a real schedule.",
};

const features = [
  {
    title: "Just say it — Tickd plans it",
    desc: "Tell Tickd \u201cplan my afternoon around 2 hours of deep work\u201d and it builds a real schedule in seconds. Natural-language planning that acts instantly.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    title: "One calm timeline",
    desc: "See your entire day at a glance, beautifully laid out. Drag to reschedule and your day rearranges smoothly.",
    color: "from-violet-500 to-violet-600",
  },
  {
    title: "Momentum, not pressure",
    desc: "Gentle streaks celebrate real progress. Build consistency without guilt, noise, or nagging.",
    color: "from-sky-500 to-sky-600",
  },
  {
    title: "Capture now, schedule later",
    desc: "Drop every loose idea into a calm Later inbox, then turn scattered thoughts into scheduled time whenever you\u2019re ready.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    title: "Plan with your energy",
    desc: "Build the day around your natural peak — morning, midday, or evening — and protect focus time for deep work.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    title: "On your wrist",
    desc: "A native Apple Watch app keeps today a glance and a tap away. Everything syncs across devices with iCloud — no account required.",
    color: "from-amber-500 to-amber-600",
  },
];

const steps = [
  { num: "1", title: "Tell Tickd your day", desc: "Type or speak what you need. The AI planner turns it into a real, time-blocked schedule." },
  { num: "2", title: "Flow through your timeline", desc: "Work down one calm timeline. Drag to reschedule; capture stray ideas in the Later inbox." },
  { num: "3", title: "Build gentle momentum", desc: "Soft streaks celebrate consistency — progress without the pressure." },
];

export default function TickdHome() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/20 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-indigo-500/30 via-violet-500/20 to-transparent rounded-full blur-3xl -translate-y-1/2" />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 text-center sm:pt-32 sm:pb-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-300">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            For iPhone and Apple Watch
          </div>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            A calmer way to{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-sky-400 bg-clip-text text-transparent">
              plan your day
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl">
            Tickd turns what&apos;s in your head into a day you can actually see. Say it and
            Tickd plans it &mdash; one timeline, gentle momentum, and AI that builds a
            real schedule in seconds.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href={APP_STORE_URL} className="inline-block">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-14" />
            </a>
            <span className="text-sm text-slate-500">No account required &middot; Private by design</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Planning, <span className="text-indigo-400">made calm</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Everything you need to plan steadily and move through your day.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="group rounded-2xl border border-white/5 bg-slate-900/50 p-6 hover:border-indigo-500/30 hover:bg-slate-900/80 transition-all">
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${f.color} text-white`}>
                  <span className="h-2.5 w-2.5 rounded-full bg-white/90" />
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
            <p className="mt-4 text-lg text-slate-400">Three steps to a calmer day.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-2xl font-bold">{s.num}</div>
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
          <h2 className="text-3xl font-bold sm:text-4xl">Plan calmly. Move steadily.</h2>
          <p className="mt-4 text-lg text-slate-400">
            That&apos;s Tickd &mdash; a calm daily planner for iPhone and Apple Watch.
          </p>
          <div className="mt-10">
            <a href={APP_STORE_URL} className="inline-block">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-14" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
