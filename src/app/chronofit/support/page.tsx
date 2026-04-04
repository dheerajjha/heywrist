import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with the ChronoFit app",
};

const faqs = [
  {
    q: "What timer types does ChronoFit support?",
    a: "ChronoFit supports all 20 interval timer types: HIIT, Tabata, AMRAP, EMOM, For Time, Circuit, Round Timer, Pyramid, Ladder, Death By, Sally, Compound, Countdown, Stopwatch, Boxing, MMA, Stretch, Yoga, Breathwork, and Custom.",
  },
  {
    q: "What is the story mode?",
    a: "You are Agent Zero, recruited by the Chrono Initiative. Time anomalies are appearing across reality, and your physical exertion powers chrono-stabilizers. There are 5 chapters with 15 missions, each tied to a timer type with unique briefings and XP rewards.",
  },
  {
    q: "How does the XP system work?",
    a: "You earn 50 base XP per workout plus 5 XP per minute. Story missions award bonus XP (50\u20131000). As you accumulate XP, you rise through 6 ranks: Recruit, Agent, Senior Agent, Elite Operative, Chrono Commander, and Temporal Master.",
  },
  {
    q: "How do I use ChronoFit on Apple Watch?",
    a: "ChronoFit has a standalone Apple Watch app with 12 timer types and 8 presets. It features a ring timer with phase colors, play/pause/skip controls, round counter, and a completion screen with stats.",
  },
  {
    q: "What do the phase colors mean?",
    a: "Orange means work, cyan means rest, green means warmup, yellow means prepare, and purple means cooldown. The entire UI reacts to each phase with matching colors, haptic patterns, and animations.",
  },
  {
    q: "How do I build a custom workout?",
    a: "Go to the Timer Library and tap any timer type. From the detail sheet, you can use presets or tap \u201cCustom\u201d to build your own workout with sliders for work duration, rest duration, rounds, warmup, and cooldown.",
  },
  {
    q: "Is my workout data saved?",
    a: "Yes. All stats, streaks, XP, level, recent workouts (last 20), completed missions, and achievements are persisted on-device using UserDefaults. No data is uploaded anywhere.",
  },
];

export default function ChronoFitSupport() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <nav className="mb-8 text-sm text-slate-500 flex gap-2">
        <Link href="/chronofit" className="hover:text-white transition-colors">ChronoFit</Link>
        <span>/</span>
        <span className="text-white">Support</span>
      </nav>

      <h1 className="text-3xl font-bold mb-2">Support</h1>
      <p className="text-slate-400 mb-12">Find answers to common questions or reach out to us directly.</p>

      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/10 bg-slate-900/50 open:bg-slate-900/80 transition-colors">
              <summary className="flex cursor-pointer items-center justify-between p-5 text-sm font-medium list-none [&::-webkit-details-marker]:hidden">
                <span>{faq.q}</span>
                <svg className="h-4 w-4 shrink-0 text-slate-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <p className="px-5 pb-5 text-sm text-slate-400 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-slate-900/50 p-8 text-center">
        <h2 className="text-xl font-semibold mb-2">Still need help?</h2>
        <p className="text-sm text-slate-400 mb-6">We typically respond within 24 hours.</p>
        <a href="mailto:support@heywrist.com" className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-red-500 transition-colors">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          support@heywrist.com
        </a>
      </section>

      <footer className="mt-16 pt-8 border-t border-white/10 text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Ranju Jha. All rights reserved.</p>
        <p className="mt-1">Contact: <a href="mailto:support@heywrist.com" className="text-red-400 hover:text-red-300">support@heywrist.com</a></p>
      </footer>
    </main>
  );
}
