import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with the AutoSleepy app",
};

const faqs = [
  {
    q: "How does AutoSleepy track my sleep?",
    a: "AutoSleepy uses Apple\u2019s HealthKit to read sleep analysis data recorded by your Apple Watch. Sleep stages (Deep, Core, REM, Awake) are detected automatically \u2014 you don\u2019t need to press any buttons. All processing happens on-device.",
  },
  {
    q: "What is the Sleep Quality Score?",
    a: "It\u2019s a 0\u2013100 score computed from your sleep duration, deep/REM percentage, sleep efficiency, and heart rate variability. Higher is better. You can track it over time in the Trends tab.",
  },
  {
    q: "How does the Smart Alarm work?",
    a: "Smart Alarm monitors your sleep stages on Apple Watch and wakes you during a light sleep phase within your configured wake window. It uses escalating haptic patterns \u2014 no jarring sounds. Enable it in Settings \u2192 Smart Alarm.",
  },
  {
    q: "How do I set up HomeKit automation?",
    a: "Create HomeKit scenes named \u201cAS Off\u201d (bedtime), \u201cAS Loo\u201d (bathroom break), and \u201cAS Done\u201d (morning). AutoSleepy will trigger them automatically at the right moments. Grant HomeKit permission when prompted.",
  },
  {
    q: "Does AutoSleepy upload my data anywhere?",
    a: "No. AutoSleepy has zero servers, zero cloud storage, zero analytics, and zero third-party code. All your sleep data stays on your device in SwiftData and Apple Health. Nothing is ever uploaded.",
  },
  {
    q: "How do I export my sleep data?",
    a: "Go to Settings \u2192 Export. You can export as CSV (all metrics in spreadsheet format) or Actigraphy (epoch-style format for sleep research). Both use the standard iOS share sheet.",
  },
  {
    q: "The app isn\u2019t detecting my sleep. What should I do?",
    a: "Make sure you\u2019re wearing your Apple Watch to bed with Sleep Focus or sleep tracking enabled. Check that AutoSleepy has HealthKit read permission in Settings \u2192 Health \u2192 Data Access. Sleep data may take a few minutes to appear after waking.",
  },
];

export default function AutoSleepySupport() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <nav className="mb-8 text-sm text-slate-500 flex gap-2">
        <Link href="/autosleepy" className="hover:text-white transition-colors">
          AutoSleepy
        </Link>
        <span>/</span>
        <span className="text-white">Support</span>
      </nav>

      <h1 className="text-3xl font-bold mb-2">Support</h1>
      <p className="text-slate-400 mb-12">
        Find answers to common questions or reach out to us directly.
      </p>

      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group rounded-xl border border-white/10 bg-slate-900/50 open:bg-slate-900/80 transition-colors"
            >
              <summary className="flex cursor-pointer items-center justify-between p-5 text-sm font-medium list-none [&::-webkit-details-marker]:hidden">
                <span>{faq.q}</span>
                <svg
                  className="h-4 w-4 shrink-0 text-slate-500 transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <p className="px-5 pb-5 text-sm text-slate-400 leading-relaxed">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-slate-900/50 p-8 text-center">
        <h2 className="text-xl font-semibold mb-2">Still need help?</h2>
        <p className="text-sm text-slate-400 mb-6">
          We typically respond within 24 hours.
        </p>
        <a
          href="mailto:support@heywrist.com"
          className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-purple-500 transition-colors"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          support@heywrist.com
        </a>
        <p className="mt-6 text-xs text-slate-500">
          Love AutoSleepy?{" "}
          <a
            href="https://apps.apple.com/app/autosleepy"
            className="text-purple-400 hover:text-purple-300"
          >
            Leave a review on the App Store
          </a>{" "}
          &mdash; it helps a lot!
        </p>
      </section>

      <footer className="mt-16 pt-8 border-t border-white/10 text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Ranju Jha. All rights reserved.</p>
        <p className="mt-1">
          Contact:{" "}
          <a href="mailto:support@heywrist.com" className="text-purple-400 hover:text-purple-300">
            support@heywrist.com
          </a>
        </p>
      </footer>
    </main>
  );
}
