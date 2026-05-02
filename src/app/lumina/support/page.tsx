import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with the Lumina app",
};

const faqs = [
  {
    q: "What focus methods does Lumina support?",
    a: "Lumina offers 6 methods: Pomodoro (25/5 \u00d7 4 cycles), Deep Work (90 min), 52/17, Flowtime (open-ended with escalating energy), Time Boxing (custom durations), and Ultradian (90 min). Each method has its own break structure.",
  },
  {
    q: "What is Lumina the companion?",
    a: "Lumina is a tiny star spirit born from your first focus session. It evolves through 7 tiers as you accumulate XP: Flickering Spark, Steady Glow, Bright Ember, Radiant Star, Celestial Light, Nova Spirit, and Cosmic Guardian. Each tier changes Lumina\u2019s color and glow.",
  },
  {
    q: "How do constellations work?",
    a: "Focus sessions generate light energy (2 per minute + session bonuses). Spend light energy to reignite stars within constellations. There are 12 constellations total \u2014 4 hand-crafted and 8 procedurally generated. Unlock more as you level up.",
  },
  {
    q: "How do ambient soundscapes work?",
    a: "Lumina generates 6 ambient sounds procedurally via AVAudioEngine: Rain, Ocean Waves, Forest, Fireplace, White Noise, and Cosmic Hum. Select a soundscape before starting your session. Volume fades in/out smoothly.",
  },
  {
    q: "Does Lumina work on Apple Watch?",
    a: "Yes. Lumina has a full standalone Apple Watch app with 4 focus methods, a mini Lumina orb, session summaries, and 3 complication types (circular, rectangular, corner) for your watch face.",
  },
  {
    q: "How does Siri integration work?",
    a: "Lumina supports App Intents for Siri Shortcuts. Say \u201cStart focusing with Lumina,\u201d \u201cStart a Pomodoro,\u201d or \u201cHow long have I focused today\u201d to control sessions hands-free.",
  },
  {
    q: "Does Lumina sync with my calendar?",
    a: "Yes. Completed focus sessions can be automatically added as events in your Apple Calendar via EventKit integration. Enable this in Settings \u2192 Calendar Sync.",
  },
];

export default function LuminaSupport() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <nav className="mb-8 text-sm text-slate-500 flex gap-2">
        <Link href="/lumina" className="hover:text-white transition-colors">Lumina</Link>
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
        <a href="mailto:founder@heywrist.com" className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-600 transition-colors">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          founder@heywrist.com
        </a>
      </section>

      <footer className="mt-16 pt-8 border-t border-white/10 text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Hey Wrist. All rights reserved.</p>
        <p className="mt-1">Contact: <a href="mailto:founder@heywrist.com" className="text-blue-400 hover:text-blue-300">founder@heywrist.com</a></p>
      </footer>
    </main>
  );
}
