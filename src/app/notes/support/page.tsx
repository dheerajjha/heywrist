import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with the Dexter Notes app",
};

const faqs = [
  {
    q: "How does AI auto-categorization work?",
    a: "When you create or edit a note, AI analyzes the content and suggests a category (work, personal, finance, ideas, learning, health, shopping, travel) and relevant tags. You can accept, modify, or ignore the suggestions.",
  },
  {
    q: "How do I use voice recording?",
    a: "Tap the microphone button to start recording. You\u2019ll see a live waveform visualization. When done, the recording is automatically transcribed using Apple Speech, then AI cleans up filler words and fixes grammar.",
  },
  {
    q: "How does Gmail integration work?",
    a: "Go to the Inbox tab and sign in with your Google account via OAuth2. Dexter Notes fetches your unread/starred emails, provides AI-powered summaries, and lets you process them into notes and tasks. You can reply to emails directly from the app.",
  },
  {
    q: "What can I do with Ask AI?",
    a: "Ask AI is your \u201cSecond Brain\u201d chat interface. Ask anything about your notes and get contextual answers. For example: \u201cWhat did I write about the marketing meeting?\u201d or \u201cSummarize my notes from last week.\u201d",
  },
  {
    q: "How does the Apple Watch app work?",
    a: "The Watch app provides a morning digest with task counts and top priorities, one-tap voice recording, task management with haptic feedback, and quick capture via dictation. Data syncs bidirectionally with your iPhone via WatchConnectivity.",
  },
  {
    q: "Does Dexter Notes sync across devices?",
    a: "Yes. Dexter Notes uses SwiftData with CloudKit for seamless sync across your iPhone and Apple Watch. All data syncs through your personal iCloud account.",
  },
  {
    q: "What AI service does Dexter Notes use?",
    a: "Dexter Notes uses Azure OpenAI (GPT-4.1-nano) through a secure proxy for AI features like Ask AI, categorization, and email processing. A heuristic fallback engine works when the AI service is unavailable.",
  },
];

export default function NotesSupport() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <nav className="mb-8 text-sm text-slate-500 flex gap-2">
        <Link href="/notes" className="hover:text-white transition-colors">Dexter Notes</Link>
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
        <a href="mailto:support@heywrist.com" className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-indigo-500 transition-colors">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          support@heywrist.com
        </a>
      </section>

      <footer className="mt-16 pt-8 border-t border-white/10 text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Hey Wrist. All rights reserved.</p>
        <p className="mt-1">Contact: <a href="mailto:support@heywrist.com" className="text-indigo-400 hover:text-indigo-300">support@heywrist.com</a></p>
      </footer>
    </main>
  );
}
