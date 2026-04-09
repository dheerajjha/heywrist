import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with the Streaky app",
};

const faqs = [
  {
    q: "How do I create a new habit?",
    a: "Tap the + button on the home screen. Choose from 30+ templates or create a custom habit. Pick an icon, color, schedule type, and frequency. Streaky supports 7 schedule types including daily, specific days, and times per week.",
  },
  {
    q: "What is the Flame Score?",
    a: "The Flame Score (0\u2013100) reflects your daily habit completion progress. It updates dynamically throughout the day. Complete all habits to see \u201cTHE FLAME WON TODAY\u201d \u2014 miss them and The Fade starts whispering.",
  },
  {
    q: "How does HealthKit auto-completion work?",
    a: "When creating a habit, link it to a HealthKit metric like steps, distance, or calories. Streaky will automatically mark the habit as complete when Apple Health reports you\u2019ve hit the target \u2014 no manual check-off needed.",
  },
  {
    q: "What is a streak freeze?",
    a: "Streak freeze lets you miss a configurable number of days per week without breaking your streak. Set it per-habit in the habit editor. Perfect for habits where you need rest days.",
  },
  {
    q: "How do I use Streaky on Apple Watch?",
    a: "Install Streaky on your iPhone, then check the Watch app to ensure it\u2019s installed on your watch. The Watch app shows To Do, Done, and Rest Day sections. Tap any habit to complete it. Add complications by editing your watch face.",
  },
  {
    q: "Can I backdate a completion?",
    a: "Yes. In the habit detail view, tap any day in the calendar to add or remove a completion. This is useful if you forgot to log a habit earlier.",
  },
  {
    q: "How do I export my data?",
    a: "Go to any habit\u2019s detail view and tap the share icon for a streak share card. For full data, go to Settings \u2192 Export to download a CSV file with your complete habit and completion history.",
  },
];

export default function StreakySupport() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <nav className="mb-8 text-sm text-slate-500 flex gap-2">
        <Link href="/streaky" className="hover:text-white transition-colors">Streaky</Link>
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
        <a href="mailto:support@heywrist.com" className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-orange-500 transition-colors">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          support@heywrist.com
        </a>
      </section>

      <footer className="mt-16 pt-8 border-t border-white/10 text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Hey Wrist. All rights reserved.</p>
        <p className="mt-1">Contact: <a href="mailto:support@heywrist.com" className="text-orange-400 hover:text-orange-300">support@heywrist.com</a></p>
      </footer>
    </main>
  );
}
