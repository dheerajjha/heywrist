import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with the FlappyBody app",
};

const faqs = [
  {
    q: "How do I control the game?",
    a: "With your head. The front camera tracks the vertical position of your head, and that position directly drives the flyer’s altitude on screen — head low, the flyer drops; head high, it climbs. There is nothing to tap and nothing to hold.",
  },
  {
    q: "How do I set up a push-up run?",
    a: "Prop your phone on the floor with the front camera facing you and get into a push-up position in front of it. Chest down and the flyer drops. Arms locked and it climbs. Your score is the number of columns you clear, and your reps are the full push-ups you complete along the way.",
  },
  {
    q: "The camera can’t find my head. What should I do?",
    a: "Give the front camera a clear, unobstructed view of your head, wipe the lens, and add light if the room is dim. Then move the phone back or change its angle so your head stays in frame through your whole range of movement — top and bottom — and calibrate again. If it still won’t lock on, switch to Free move, which skips calibration entirely.",
  },
  {
    q: "Can I play sitting down?",
    a: "Yes — that’s what Free move is for. Free move removes the calibration step, so you can play seated at a desk or on a sofa with the phone propped in front of you. Same camera, same flyer, no floor required.",
  },
  {
    q: "How do the free runs work?",
    a: "You get 10 runs on the day you install FlappyBody, and 3 runs per day after that. A subscription removes the cap: $4.99 per week or $39.99 per year for unlimited runs.",
  },
  {
    q: "How do referral codes work?",
    a: "Every installation gets its own six-character referral code. Share yours with a friend, and when they redeem it you both get a free month. Redeeming someone else’s code works the same way in reverse — one code, two free months, one for each of you.",
  },
  {
    q: "How do I restore my subscription on a new device?",
    a: "Sign in with the same Apple ID you used to subscribe, then use Restore Purchases in the app. Subscriptions are tied to your Apple ID, not to the device. If it still doesn’t appear, check Settings → [your name] → Subscriptions to confirm the subscription is active, then relaunch the app — and email us if it doesn’t come back.",
  },
  {
    q: "What happens to my recorded runs?",
    a: "Runs are recorded to the app’s own cache directory on your device. They stay there — nothing is uploaded. A clip leaves your phone only when you share it yourself through the system share sheet, or save it to Photos by tapping save. Because the cache isn’t permanent storage, save or share any clip you want to keep.",
  },
];

export default function FlappyBodySupport() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <nav className="mb-8 text-sm text-slate-500 flex gap-2">
        <Link href="/flappybody" className="hover:text-white transition-colors">FlappyBody</Link>
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
        <a href="mailto:founder@heywrist.com" className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-sky-500 transition-colors">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          founder@heywrist.com
        </a>
      </section>

      <footer className="mt-16 pt-8 border-t border-white/10 text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Hey Wrist. All rights reserved.</p>
        <p className="mt-1">Contact: <a href="mailto:founder@heywrist.com" className="text-sky-400 hover:text-sky-300">founder@heywrist.com</a></p>
      </footer>
    </main>
  );
}
