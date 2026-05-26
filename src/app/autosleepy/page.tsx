import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AutoSleepy - Automatic Sleep Tracking",
  description:
    "Privacy-first sleep tracking for iPhone and Apple Watch. Automatic detection, sleep stages, AI insights, smart alarm, and HomeKit integration.",
};

const features = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
      </svg>
    ),
    title: "Automatic Detection",
    desc: "Sleep is detected automatically from your Apple Watch via HealthKit. Deep, Core, REM, and Awake stages — no buttons to press.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    title: "Sleep Quality Score",
    desc: "A 0–100 score computed from duration, deep/REM percentage, efficiency, and HRV. Track your sleep bank and readiness score.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    title: "AI Insights",
    desc: "Pattern detection across caffeine, alcohol, exercise, and stress. Actionable recommendations to improve your sleep quality.",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Smart Alarm",
    desc: "Wakes you during light sleep for a refreshed morning. Escalating haptic patterns on your Apple Watch — no jarring alarms.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "HomeKit Integration",
    desc: "Automate your home at bedtime and wake. Dim lights at Lights Off, open curtains in the morning — all triggered by your sleep.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
      </svg>
    ),
    title: "Sleep Sounds",
    desc: "12 mixable ambient sounds — rain, ocean, white noise, forest, and more. Auto-stop timer from 15 to 90 minutes.",
    color: "from-pink-500 to-pink-600",
  },
];

const steps = [
  {
    num: "1",
    title: "Wear Your Watch",
    desc: "AutoSleepy detects sleep automatically from your Apple Watch. No buttons, no setup.",
  },
  {
    num: "2",
    title: "Wake Up to Insights",
    desc: "See your sleep stages, quality score, vitals, and AI-powered recommendations every morning.",
  },
  {
    num: "3",
    title: "Improve Over Time",
    desc: "Track trends, log lifestyle factors, and watch your sleep quality improve week over week.",
  },
];

export default function AutoSleepyHome() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-purple-500/30 via-indigo-500/20 to-transparent rounded-full blur-3xl -translate-y-1/2" />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 text-center sm:pt-32 sm:pb-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-300">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            For iPhone and Apple Watch
          </div>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Sleep tracking,{" "}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              reimagined
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl">
            Automatic sleep detection, Apple Sleep Stages, AI-powered insights,
            smart alarm, and HomeKit &mdash; all without accounts, subscriptions,
            or cloud uploads.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://x.com/awesome_fingers"
              className="inline-block"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-5 py-3 text-base font-medium text-purple-300 ring-1 ring-purple-500/30">🍳 Cooking · Follow @awesome_fingers for launch</span>
            </a>
            <span className="text-sm text-slate-500">
              Free &middot; No account required &middot; Zero cloud
            </span>
          </div>

          {/* Hero mockup */}
          <div className="relative mx-auto mt-16 max-w-3xl">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
            <div className="flex items-end justify-center gap-6">
              <div className="w-56 sm:w-64 rounded-3xl border border-white/10 bg-slate-900/80 p-3 shadow-2xl shadow-purple-500/10">
                <div className="aspect-[9/19] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center p-4">
                  <div className="w-full space-y-3">
                    <div className="text-center">
                      <p className="text-xs text-slate-500">Last Night</p>
                      <p className="text-2xl font-bold text-white">7h 42m</p>
                      <p className="text-xs text-emerald-400">Quality: 87</p>
                    </div>
                    <div className="mx-auto h-20 w-20 rounded-full border-4 border-purple-500/30 flex items-center justify-center">
                      <div
                        className="h-16 w-16 rounded-full border-4 border-purple-500 flex items-center justify-center"
                        style={{ borderTopColor: "transparent", transform: "rotate(45deg)" }}
                      >
                        <svg className="h-6 w-6 text-purple-400 -rotate-45" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 rounded-lg bg-slate-800/60 px-2 py-1.5">
                        <div className="h-3 w-3 rounded bg-indigo-500" />
                        <span className="text-[10px] text-slate-300">Deep</span>
                        <span className="ml-auto text-[10px] text-slate-400">1h 28m</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg bg-slate-800/60 px-2 py-1.5">
                        <div className="h-3 w-3 rounded bg-purple-500" />
                        <span className="text-[10px] text-slate-300">REM</span>
                        <span className="ml-auto text-[10px] text-slate-400">1h 52m</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg bg-slate-800/60 px-2 py-1.5">
                        <div className="h-3 w-3 rounded bg-cyan-500" />
                        <span className="text-[10px] text-slate-300">Core</span>
                        <span className="ml-auto text-[10px] text-slate-400">4h 22m</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden w-28 sm:block mb-8">
                <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-2 shadow-2xl shadow-purple-500/10">
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center p-2">
                    <p className="text-[8px] text-slate-500">Quality</p>
                    <p className="text-lg font-bold text-purple-400">87</p>
                    <p className="text-[8px] text-emerald-400">7h 42m</p>
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
              Everything you need to{" "}
              <span className="text-purple-400">understand your sleep</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Deep analytics, smart automation, and zero compromise on privacy.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-white/5 bg-slate-900/50 p-6 hover:border-purple-500/30 hover:bg-slate-900/80 transition-all"
              >
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
            <p className="mt-4 text-lg text-slate-400">
              Effortless sleep tracking in three steps.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-2xl font-bold">
                  {s.num}
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section id="pricing" className="py-20 sm:py-28 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Completely free. Completely private.
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              No accounts. No subscriptions. No cloud uploads. No third-party code.
            </p>
          </div>
          <div className="mx-auto max-w-2xl rounded-2xl border border-purple-500/30 bg-gradient-to-b from-purple-500/10 to-slate-900/50 p-8 text-center">
            <h3 className="text-xl font-semibold">100% Free</h3>
            <p className="mt-1 text-sm text-slate-400">Every feature. No limits. No catches.</p>
            <p className="mt-6 text-4xl font-bold">
              $0<span className="text-base font-normal text-slate-500">/forever</span>
            </p>
            <ul className="mt-8 space-y-3 text-sm text-slate-300 text-left max-w-md mx-auto">
              {[
                "All sleep stages & quality scoring",
                "AI-powered insights engine",
                "Smart alarm & HomeKit automation",
                "12 mixable sleep sounds",
                "Widgets, Live Activity, Siri",
                "Apple Watch complications",
                "CSV & Actigraphy export",
                "Zero data collection",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-purple-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 border-t border-white/5">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Wake up knowing how you slept
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            AutoSleepy tracks your sleep automatically, so you can focus on living better.
          </p>
          <div className="mt-10">
            <a
              href="https://x.com/awesome_fingers"
              className="inline-block"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-5 py-3 text-base font-medium text-purple-300 ring-1 ring-purple-500/30">🍳 Cooking · Follow @awesome_fingers for launch</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
