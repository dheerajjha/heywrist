import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with the Structured app",
};

const faqs = [
  {
    q: "How does the timeline view work?",
    a: "The timeline is a scrollable vertical view of your day with an hour grid. Tasks appear as color-coded blocks positioned by their start time and sized by duration. A red current-time indicator shows where you are in the day. All-day tasks appear in a strip at the top.",
  },
  {
    q: "What is the Inbox?",
    a: "The Inbox is where you capture tasks that don\u2019t have a scheduled time yet. You can quickly add tasks to the inbox and later drag them onto the timeline to assign a specific time slot.",
  },
  {
    q: "How do recurring tasks work?",
    a: "With Pro, you can set tasks to repeat daily, weekly (on specific days), or monthly. When editing a recurring task, you can choose to modify just that single occurrence or all future instances.",
  },
  {
    q: "How does Focus Mode work?",
    a: "Tap \u201cFocus Now\u201d on any task to enter a full-screen countdown timer. Focus Mode tracks your progress with a Live Activity on the Lock Screen and Dynamic Island. You can mark the task complete directly from the focus screen.",
  },
  {
    q: "Does Structured sync across devices?",
    a: "Yes. Structured uses iCloud (CloudKit) to sync your tasks, subtasks, and preferences across all your Apple devices automatically. Make sure iCloud is enabled in your device settings.",
  },
  {
    q: "Can I import my Apple Calendar events?",
    a: "Yes, with Pro. Go to Settings \u2192 Calendar Integration to grant access. Your calendar events will appear as read-only blocks on your timeline so you can plan around them.",
  },
  {
    q: "Does Structured work on Apple Watch?",
    a: "Yes. The Apple Watch app shows your current and upcoming tasks in a list view. You can mark tasks complete from your wrist. Watch complications show your next task on supported watch faces.",
  },
  {
    q: "What is Replan?",
    a: "Replan is a Pro feature that helps you triage incomplete tasks from past days. It presents overdue tasks as a card stack \u2014 swipe to reschedule to today, mark complete, send to inbox, or delete.",
  },
  {
    q: "What widgets are available?",
    a: "Structured offers Timeline, Inbox, Single Task, and Subtask widgets in small, medium, and large sizes for your Home Screen, Lock Screen, and StandBy mode. All widgets support interactive task completion.",
  },
];

export default function StructuredSupport() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <nav className="mb-8 text-sm text-slate-500 flex gap-2">
        <Link href="/structured" className="hover:text-white transition-colors">Structured</Link>
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
        <a href="mailto:support@heywrist.com" className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-teal-500 transition-colors">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          support@heywrist.com
        </a>
      </section>

      <footer className="mt-16 pt-8 border-t border-white/10 text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Hey Wrist. All rights reserved.</p>
        <p className="mt-1">Contact: <a href="mailto:support@heywrist.com" className="text-teal-400 hover:text-teal-300">support@heywrist.com</a></p>
      </footer>
    </main>
  );
}
