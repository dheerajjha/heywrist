import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with the Tickd app",
};

const faqs = [
  {
    q: "How does the AI planner work?",
    a: "Tap the AI planner and describe your day in plain language \u2014 for example, \u201cplan my afternoon around 2 hours of deep work.\u201d Tickd turns your request into a real, time-blocked schedule on your timeline. You can type your request or tap the mic button to speak it.",
  },
  {
    q: "Do I need an account to use Tickd?",
    a: "No. Tickd works with no sign-up. Your tasks and schedule live on your device and sync across your Apple devices through your private iCloud account.",
  },
  {
    q: "Does Tickd sync between my iPhone and Apple Watch?",
    a: "Yes. Tickd uses iCloud (CloudKit) and WatchConnectivity so today\u2019s plan stays in sync across your iPhone and Apple Watch. Make sure you\u2019re signed in to the same Apple ID and iCloud Drive is enabled.",
  },
  {
    q: "What is the Later inbox?",
    a: "The Later inbox is a calm place to capture any loose idea or task without scheduling it yet. When you\u2019re ready, drag it onto your timeline to turn it into scheduled time.",
  },
  {
    q: "How do streaks and momentum work?",
    a: "Tickd celebrates real progress with gentle streaks \u2014 designed to build consistency without guilt or nagging. There\u2019s no penalty for an off day.",
  },
  {
    q: "Is the microphone always listening?",
    a: "No. The microphone is only used when you explicitly tap the mic button in the AI planner to speak a request. Speech is transcribed on-device using Apple\u2019s speech framework. You can also skip the mic entirely and type instead.",
  },
  {
    q: "What does Tickd Pro include, and how do I manage it?",
    a: "Tickd Pro unlocks the full planning experience and is available as a monthly or annual subscription or a one-time lifetime purchase. Purchases are handled by Apple. You can manage or cancel a subscription anytime in Settings \u2192 your Apple ID \u2192 Subscriptions.",
  },
  {
    q: "How do I restore my purchase on a new device?",
    a: "Open Tickd, go to the paywall or Settings, and tap \u201cRestore Purchases.\u201d As long as you\u2019re signed in with the same Apple ID, your Pro access will be restored.",
  },
];

export default function TickdSupport() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <nav className="mb-8 text-sm text-slate-500 flex gap-2">
        <Link href="/tickd" className="hover:text-white transition-colors">Tickd</Link>
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
        <a href="mailto:founder@heywrist.com" className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-indigo-500 transition-colors">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          founder@heywrist.com
        </a>
      </section>

      <footer className="mt-16 pt-8 border-t border-white/10 text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Hey Wrist. All rights reserved.</p>
        <p className="mt-1">Contact: <a href="mailto:founder@heywrist.com" className="text-indigo-400 hover:text-indigo-300">founder@heywrist.com</a></p>
      </footer>
    </main>
  );
}
