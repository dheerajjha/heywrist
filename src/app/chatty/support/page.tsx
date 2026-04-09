import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with the Chatty app",
};

const faqs = [
  {
    q: "How do I start a conversation?",
    a: "Open Chatty on your Apple Watch and tap \u201cNew Chat.\u201d Choose a persona (Chatty, Muse, DevBot, FitCoach, or ChefAI) and start talking or typing. You can also tap a suggested prompt to get started quickly.",
  },
  {
    q: "How do I use voice input?",
    a: "Tap the text field in the chat view to bring up the watchOS dictation interface. Speak naturally and your words will be transcribed. Tap \u201cDone\u201d to send your message.",
  },
  {
    q: "What are the different personas?",
    a: "Chatty is a general assistant for jokes, facts, and motivation. Muse helps with creative writing. DevBot assists with coding. FitCoach covers health and fitness. ChefAI handles cooking and recipes. Each has unique suggested prompts and conversation style.",
  },
  {
    q: "Can I have multiple conversations?",
    a: "Yes. Each conversation is a separate thread. Tap \u201cNew Chat\u201d to start a new one. Your conversation list shows persona icons, previews, and timestamps. Swipe left to delete a conversation.",
  },
  {
    q: "Does Chatty work on iPhone?",
    a: "Chatty includes an iOS companion app with a beautiful landing page. The primary chat experience is designed for Apple Watch, where the voice-first interaction shines.",
  },
  {
    q: "Does Chatty store my conversations?",
    a: "Conversations are stored locally on your Apple Watch using UserDefaults. They persist across app launches but never leave your device. No data is uploaded to any server.",
  },
  {
    q: "How do I change my default persona?",
    a: "Open Settings in the Chatty Watch app and select your preferred default persona. New conversations will start with that persona automatically.",
  },
];

export default function ChattySupport() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <nav className="mb-8 text-sm text-slate-500 flex gap-2">
        <Link href="/chatty" className="hover:text-white transition-colors">Chatty</Link>
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
