import type { Metadata } from "next";
import WaitlistForm from "@/app/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Watery - Smart Hydration Tracking",
  description:
    "Smart hydration tracking for iPhone and Apple Watch. Personalized goals, 10 drink types, Dynamic Island, widgets, and Siri.",
};

const features = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75c-4.97 4.97-7.5 8.03-7.5 11.25a7.5 7.5 0 0 0 15 0c0-3.22-2.53-6.28-7.5-11.25Z" />
      </svg>
    ),
    title: "10 Drink Types",
    desc: "Water, coffee, tea, juice, soda, milk, smoothie, sports drink, alcohol, and custom. Each has a unique hydration multiplier so you see the real impact.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
    title: "One-Tap Logging",
    desc: "Quick-add cups right on the dashboard. Log from widgets, Control Center, Siri, or Apple Watch complications — without opening the app.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    title: "Smart Goals",
    desc: "Personalized daily goal based on your weight, activity level, and climate. Pace-to-goal messaging keeps you on track throughout the day.",
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Apple Watch",
    desc: "Standalone Watch app with progress ring, quick-add buttons, and 4 complication families. Log water from your wrist in seconds.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: "Dynamic Island",
    desc: "Live Activity shows your hydration progress on the Lock Screen and Dynamic Island. Watch your progress ring fill up in real time.",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
      </svg>
    ),
    title: "Smart Reminders",
    desc: "Local notifications with smart scheduling based on your routine. Never forget to hydrate again.",
    color: "from-emerald-500 to-emerald-600",
  },
];

const steps = [
  { num: "1", title: "Set Your Goal", desc: "Enter your weight and activity level. Watery calculates your ideal daily intake." },
  { num: "2", title: "Log Drinks", desc: "One-tap quick add from dashboard, widgets, Watch, Control Center, or Siri." },
  { num: "3", title: "Stay on Track", desc: "Watch your progress ring fill, maintain streaks, and get smart reminders." },
];

export default function WateryHome() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-blue-500/30 via-cyan-500/20 to-transparent rounded-full blur-3xl -translate-y-1/2" />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 text-center sm:pt-32 sm:pb-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            For iPhone, iPad, and Apple Watch
          </div>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Hydration,{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              simplified
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl">
            Personalized goals, 10 drink types with hydration multipliers,
            one-tap logging from anywhere &mdash; the fastest way to stay hydrated
            on iPhone and Apple Watch.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <div id="waitlist" className="w-full"><WaitlistForm source="watery" /><p className="mt-3 text-xs text-slate-500">🍳 Cooking · join the list to get notified when it ships.</p></div>
            <span className="text-sm text-slate-500">Free &middot; No account required</span>
          </div>

          {/* Hero mockup */}
          <div className="relative mx-auto mt-16 max-w-3xl">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
            <div className="flex items-end justify-center gap-6">
              <div className="w-56 sm:w-64 rounded-3xl border border-white/10 bg-slate-900/80 p-3 shadow-2xl shadow-blue-500/10">
                <div className="aspect-[9/19] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center p-4">
                  <div className="w-full space-y-3">
                    <div className="text-center">
                      <p className="text-xs text-slate-500">Today</p>
                      <p className="text-2xl font-bold text-blue-400">1,850 ml</p>
                      <p className="text-xs text-emerald-400">74% of goal</p>
                    </div>
                    <div className="mx-auto h-20 w-20 rounded-full border-4 border-blue-500/30 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full border-4 border-blue-500 flex items-center justify-center" style={{ borderTopColor: "transparent", transform: "rotate(-70deg)" }}>
                        <svg className="h-6 w-6 text-blue-400 rotate-[70deg]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75c-4.97 4.97-7.5 8.03-7.5 11.25a7.5 7.5 0 0 0 15 0c0-3.22-2.53-6.28-7.5-11.25Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5">
                      {["+200", "+250", "+500"].map((amt) => (
                        <div key={amt} className="rounded-lg bg-blue-500/20 border border-blue-500/30 py-1.5 text-center">
                          <span className="text-[10px] font-medium text-blue-300">{amt} ml</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 rounded-lg bg-slate-800/60 px-2 py-1.5">
                        <div className="h-3 w-3 rounded bg-blue-500" />
                        <span className="text-[10px] text-slate-300">Water</span>
                        <span className="ml-auto text-[10px] text-slate-400">1,200 ml</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg bg-slate-800/60 px-2 py-1.5">
                        <div className="h-3 w-3 rounded bg-amber-500" />
                        <span className="text-[10px] text-slate-300">Coffee</span>
                        <span className="ml-auto text-[10px] text-slate-400">400 ml</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg bg-slate-800/60 px-2 py-1.5">
                        <div className="h-3 w-3 rounded bg-emerald-500" />
                        <span className="text-[10px] text-slate-300">Tea</span>
                        <span className="ml-auto text-[10px] text-slate-400">250 ml</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden w-28 sm:block mb-8">
                <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-2 shadow-2xl shadow-blue-500/10">
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center p-2">
                    <p className="text-[8px] text-slate-500">Hydration</p>
                    <p className="text-lg font-bold text-blue-400">74%</p>
                    <p className="text-[8px] text-slate-400">650 ml left</p>
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
              The fastest way to{" "}
              <span className="text-blue-400">stay hydrated</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Smart goals, instant logging, and deep Apple ecosystem integration.
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
            <p className="mt-4 text-lg text-slate-400">Three steps to better hydration.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 text-2xl font-bold">{s.num}</div>
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
          <h2 className="text-3xl font-bold sm:text-4xl">Drink more, feel better</h2>
          <p className="mt-4 text-lg text-slate-400">
            Watery makes hydration effortless with the fastest logging experience on iPhone and Apple Watch.
          </p>
          <div className="mt-10">
            <div className="w-full"><WaitlistForm source="watery" /><p className="mt-3 text-xs text-slate-500">🍳 Cooking · join the list to get notified when it ships.</p></div>
          </div>
        </div>
      </section>
    </main>
  );
}
