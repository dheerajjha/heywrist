import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with the Watery app",
};

const faqs = [
  {
    q: "How is my daily goal calculated?",
    a: "Watery calculates your goal based on your weight, activity level, and climate. You can adjust it manually anytime in Settings. The goal adapts as your profile changes.",
  },
  {
    q: "Why do different drinks have different hydration values?",
    a: "Each drink type has a hydration multiplier. Water is 100%, coffee is 80% (caffeine is mildly dehydrating), alcohol is -50% (it dehydrates you), and sports drinks are 110%. Watery explains each multiplier so you understand the real impact.",
  },
  {
    q: "How do I log water from my Apple Watch?",
    a: "Open the Watery Watch app and tap a quick-add button on the dashboard, or use a Watch complication for one-tap access. You can also use the Control Center widget on watchOS.",
  },
  {
    q: "How do I use widgets to log water?",
    a: "Add a Watery widget to your Home Screen or Lock Screen. Interactive widgets let you tap +200, +250, or +500 ml buttons without opening the app. Control Center widgets work the same way.",
  },
  {
    q: "Does Watery sync with Apple Health?",
    a: "Yes. Watery reads and writes water intake data to Apple Health. Grant HealthKit permission when prompted. Your hydration data stays on-device and syncs through your personal Apple Health database.",
  },
  {
    q: "How do I set up reminders?",
    a: "Go to Settings \u2192 Reminders. Watery uses smart scheduling based on your routine to send local notification reminders throughout the day.",
  },
  {
    q: "Can I create custom cups?",
    a: "Yes. Go to Settings \u2192 Cups to create custom cup sizes that appear as quick-add buttons on your dashboard and widgets.",
  },
];

export default function WaterySupport() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <nav className="mb-8 text-sm text-slate-500 flex gap-2">
        <Link href="/watery" className="hover:text-white transition-colors">Watery</Link>
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
        <a href="mailto:support@heywrist.com" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-500 transition-colors">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          support@heywrist.com
        </a>
      </section>

      <footer className="mt-16 pt-8 border-t border-white/10 text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Hey Wrist. All rights reserved.</p>
        <p className="mt-1">Contact: <a href="mailto:support@heywrist.com" className="text-blue-400 hover:text-blue-300">support@heywrist.com</a></p>
      </footer>
    </main>
  );
}
