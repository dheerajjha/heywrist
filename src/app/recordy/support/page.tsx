import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with the Recordy app",
};

const faqs = [
  {
    q: "How do I start a recording?",
    a: "Open Recordy and tap the large record button. You can pause and resume at any time. Tap the bookmark icon during recording to mark important moments you can jump back to later.",
  },
  {
    q: "Can I record in the background?",
    a: "Yes. Recordy continues recording when you switch apps or lock your phone. Make sure Background Audio is enabled in your device settings for Recordy.",
  },
  {
    q: "How does transcription work?",
    a: "Recordy uses Apple\u2019s on-device Speech framework to transcribe recordings. After recording, tap the transcript icon to generate or view the transcription. You can edit, search, and export transcripts.",
  },
  {
    q: "Can I record from my Apple Watch?",
    a: "Yes. Recordy has a standalone Watch app that records directly on your wrist. Recordings auto-sync to your iPhone. You can also add bookmarks during Watch recordings.",
  },
  {
    q: "How do I export recordings?",
    a: "Open any recording and tap the share icon. You can export audio as M4A or transcripts as TXT/PDF. Use the standard iOS share sheet to send via AirDrop, email, or any other app.",
  },
  {
    q: "Does Recordy sync across devices?",
    a: "Yes. Recordy uses iCloud to sync recordings across your iPhone and Apple Watch. All data is stored locally first, then synced via your personal iCloud account.",
  },
  {
    q: "What is voice-activated recording?",
    a: "Voice-activated recording automatically pauses when it detects silence and resumes when you start speaking again. Enable it from the recording settings before starting a session.",
  },
];

export default function RecordySupport() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <nav className="mb-8 text-sm text-slate-500 flex gap-2">
        <Link href="/recordy" className="hover:text-white transition-colors">Recordy</Link>
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
        <a href="mailto:founder@heywrist.com" className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-red-500 transition-colors">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          founder@heywrist.com
        </a>
      </section>

      <footer className="mt-16 pt-8 border-t border-white/10 text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Hey Wrist. All rights reserved.</p>
        <p className="mt-1">Contact: <a href="mailto:founder@heywrist.com" className="text-red-400 hover:text-red-300">founder@heywrist.com</a></p>
      </footer>
    </main>
  );
}
