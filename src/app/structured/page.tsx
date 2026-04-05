import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Structured - Visual Daily Planner",
  description:
    "Visual daily planner for iPhone and Apple Watch with timeline view, iCloud sync, widgets, Live Activities, and Siri Shortcuts.",
};

const features = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
      </svg>
    ),
    title: "Visual Timeline",
    desc: "A beautiful scrollable daily timeline with hour grid, color-coded task blocks, current time indicator, and all-day task strip at the top.",
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859" />
      </svg>
    ),
    title: "Inbox & Drag-to-Schedule",
    desc: "Capture tasks without a time, then drag them from your inbox onto the timeline. Drag task blocks to reschedule instantly.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182" />
      </svg>
    ),
    title: "Recurring Tasks",
    desc: "Set daily, weekly, or monthly repeating tasks. Edit a single instance or all future occurrences with one tap.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Focus Mode & Live Activities",
    desc: "Full-screen countdown timer for the active task. Track progress on Lock Screen and Dynamic Island with Live Activities.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    ),
    title: "Calendar & Reminders Import",
    desc: "Import events from Apple Calendar and tasks from Apple Reminders. See everything in one unified timeline view.",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Apple Watch, Widgets & Siri",
    desc: "Standalone Watch app with complications, home/lock screen widgets, StandBy mode, and Siri Shortcuts for hands-free task creation.",
    color: "from-rose-500 to-rose-600",
  },
];

const steps = [
  { num: "1", title: "Plan Your Day", desc: "Add tasks to the visual timeline or capture them in your inbox. Set times, durations, colors, and icons." },
  { num: "2", title: "Execute & Focus", desc: "Work through your timeline. Tap Focus to enter countdown mode with Live Activity tracking on Lock Screen." },
  { num: "3", title: "Replan & Repeat", desc: "Swipe through incomplete tasks to reschedule, complete, or inbox them. Recurring tasks auto-populate tomorrow." },
];

export default function StructuredHome() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-700/20 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-teal-600/30 via-emerald-600/20 to-transparent rounded-full blur-3xl -translate-y-1/2" />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 text-center sm:pt-32 sm:pb-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm text-teal-300">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" />
            For iPhone and Apple Watch
          </div>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Your day,{" "}
            <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              beautifully planned
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl">
            A visual daily planner with timeline view, drag-and-drop scheduling,
            recurring tasks, Focus Mode with Live Activities, iCloud sync, widgets,
            and a full Apple Watch experience.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="https://apps.apple.com/app/structured-daily-planner" className="inline-block">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-14" />
            </a>
            <span className="text-sm text-slate-500">Free to use &middot; Pro subscription available</span>
          </div>

          {/* Hero mockup */}
          <div className="relative mx-auto mt-16 max-w-3xl">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
            <div className="flex items-end justify-center gap-6">
              <div className="w-56 sm:w-64 rounded-3xl border border-white/10 bg-slate-900/80 p-3 shadow-2xl shadow-teal-600/10">
                <div className="aspect-[9/19] rounded-2xl bg-gradient-to-br from-[#0a1a1a] to-[#0a2a2a] flex flex-col p-4">
                  <p className="text-xs text-teal-400/60 mb-1">Today</p>
                  <p className="text-sm font-semibold text-teal-200 mb-3">Wednesday, Apr 5</p>
                  <div className="space-y-2 flex-1">
                    <div className="flex gap-2 items-center">
                      <span className="text-[10px] text-teal-400/50 w-8">9:00</span>
                      <div className="flex-1 rounded-lg bg-teal-600/30 border-l-2 border-teal-400 px-2 py-1.5">
                        <p className="text-[10px] font-medium text-teal-200">Morning standup</p>
                        <p className="text-[8px] text-teal-300/50">30 min</p>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="text-[10px] text-teal-400/50 w-8">10:00</span>
                      <div className="flex-1 rounded-lg bg-blue-600/30 border-l-2 border-blue-400 px-2 py-1.5">
                        <p className="text-[10px] font-medium text-blue-200">Deep work: API refactor</p>
                        <p className="text-[8px] text-blue-300/50">2 hrs</p>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="text-[10px] text-emerald-400 w-8 font-bold">NOW</span>
                      <div className="flex-1 h-px bg-emerald-400" />
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="text-[10px] text-teal-400/50 w-8">12:30</span>
                      <div className="flex-1 rounded-lg bg-amber-600/30 border-l-2 border-amber-400 px-2 py-1.5">
                        <p className="text-[10px] font-medium text-amber-200">Lunch break</p>
                        <p className="text-[8px] text-amber-300/50">1 hr</p>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="text-[10px] text-teal-400/50 w-8">14:00</span>
                      <div className="flex-1 rounded-lg bg-violet-600/30 border-l-2 border-violet-400 px-2 py-1.5">
                        <p className="text-[10px] font-medium text-violet-200">Design review</p>
                        <p className="text-[8px] text-violet-300/50">45 min</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden w-28 sm:block mb-8">
                <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-2 shadow-2xl shadow-teal-600/10">
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-[#0a1a1a] to-[#0a2a2a] flex flex-col items-center justify-center p-2">
                    <p className="text-[8px] text-teal-400/60">Next</p>
                    <p className="text-[10px] font-bold text-teal-300 mt-0.5">Lunch</p>
                    <p className="text-sm font-bold text-teal-200 mt-1">12:30</p>
                    <p className="text-[8px] text-teal-400/60 mt-0.5">in 45 min</p>
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
              <span className="text-teal-400">own your day</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              A planner that thinks the way you do — visual, flexible, and fast.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="group rounded-2xl border border-white/5 bg-slate-900/50 p-6 hover:border-teal-500/30 hover:bg-slate-900/80 transition-all">
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
            <p className="mt-4 text-lg text-slate-400">Plan, execute, replan.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 text-2xl font-bold">{s.num}</div>
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
            <h2 className="text-3xl font-bold sm:text-4xl">Simple pricing</h2>
            <p className="mt-4 text-lg text-slate-400">Free core planner. Pro unlocks the full experience.</p>
          </div>
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 text-center">
              <h3 className="text-lg font-semibold">Free</h3>
              <p className="mt-1 text-sm text-slate-400">Full daily planner</p>
              <p className="mt-4 text-3xl font-bold">$0</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-300 text-left">
                {["Visual daily timeline", "Task creation & editing", "Inbox & drag-to-schedule", "Day & week navigation", "iCloud sync", "Apple Watch app"].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-teal-500/30 bg-gradient-to-b from-teal-600/10 to-slate-900/50 p-6 text-center">
              <h3 className="text-lg font-semibold">Pro</h3>
              <p className="mt-1 text-sm text-slate-400">Full planner experience</p>
              <p className="mt-4 text-3xl font-bold">$2.99<span className="text-base font-normal text-slate-500">/mo</span></p>
              <p className="text-xs text-slate-500 mt-1">or $19.99/yr &middot; $49.99 lifetime</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-300 text-left">
                {["Everything in Free", "Recurring tasks", "Calendar & Reminders import", "Replan triage view", "Custom notifications", "Premium icons & colors"].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
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
          <h2 className="text-3xl font-bold sm:text-4xl">Start planning your day visually</h2>
          <p className="mt-4 text-lg text-slate-400">
            See your entire day at a glance. Drag, drop, and focus your way through it.
          </p>
          <div className="mt-10">
            <a href="https://apps.apple.com/app/structured-daily-planner" className="inline-block">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-14" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
