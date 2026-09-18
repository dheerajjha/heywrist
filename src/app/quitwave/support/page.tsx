import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with Quitwave — FAQs, troubleshooting and how to reach us",
};

const faqs = [
  {
    q: "How does the craving rescue work?",
    a: "Tap Rescue, set how strong the urge feels, and a three-minute guided breathing session starts. The ring expands and contracts with the breath, and haptics mark each phase so you can follow it without looking. At the end you set how strong it feels now and, if you want, tap what set it off. That is one logged craving.",
  },
  {
    q: "Does the rescue really work without my phone?",
    a: "Yes. The Watch app is standalone. It runs the full session, keeps the screen on with an extended runtime session, plays the haptics and writes the craving to its own storage — with the phone in another room, switched off, or in airplane mode. The next time the two devices see each other, the record syncs across.",
  },
  {
    q: "Is the rescue limited on the free version?",
    a: "No, and it never will be. Rescues are unlimited on the free tier, on the phone and on the Watch. The moment an urge hits is the worst possible moment to meet a purchase screen. Quitwave Pro is about what happens after the rescue: the Patterns tab, your full history, every widget style, custom breathing and CSV export.",
  },
  {
    q: "What happens when I tap “I slipped”?",
    a: "Your day count starts again from that moment. Nothing else changes: the money you have saved, the units you have not taken and the total number of cravings you have beaten all stay exactly as they were. That is deliberate — a slip should not delete the evidence that the effort was real.",
  },
  {
    q: "Where does my data live?",
    a: "On your devices. There is no account, no sign-in and no server of ours holding your craving log. Settings → Your data → “Delete all my data” wipes everything from the device, and deleting the app does the same thing.",
  },
  {
    q: "How do I add the widgets?",
    a: "Touch and hold your Lock Screen or Home Screen, tap Customise or the + button, then search for Quitwave. The circular and rectangular Lock Screen widgets are free; the Home Screen and StandBy styles are part of Pro. To add the Control Centre button, swipe down from the top-right corner, tap +, and add Quitwave’s rescue control.",
  },
  {
    q: "How do I put Quitwave on my watch face?",
    a: "Touch and hold the watch face, tap Edit, swipe to the complications screen, tap a slot and choose Quitwave. The complication shows your day count, and tapping it opens straight into a rescue rather than into the app’s home screen.",
  },
  {
    q: "The haptics are too strong, or too faint.",
    a: "Settings → Rescue → Haptics has four levels: off, light, standard and strong. The Watch also follows the system setting in the Watch app → Sounds & Haptics, so if everything feels faint, check Prominent Haptic there too.",
  },
  {
    q: "Can I change the breathing pattern?",
    a: "The default is four seconds in, four held, six out. Quitwave Pro adds three more presets — box, long exhale and quick — and a custom editor with a stepper for each phase, in Settings → Rescue.",
  },
  {
    q: "What is the weekly read, and where does it come from?",
    a: "It is two or three plain sentences about your week on the Patterns tab: whether cravings got shorter, which hour is hardest, which trigger comes up most. It is generated on your device from your own log. Nothing is sent anywhere, and no outside service is involved.",
  },
  {
    q: "Why does the Patterns tab say it needs more data?",
    a: "Below four logged cravings there is nothing honest to say. With one or two records, “your hardest hour” is just whichever hour you happened to open the app in, and we would rather show nothing than tell you something confidently wrong about yourself.",
  },
  {
    q: "How do I restore a purchase on a new device?",
    a: "Sign in to the same Apple Account, open Quitwave and tap Restore Purchases — it is on the paywall and also in Settings → Support. Restore reads the receipt already on the device, so it works even if the App Store sync itself fails.",
  },
  {
    q: "How do I cancel a subscription?",
    a: "iOS Settings → tap your name at the top → Subscriptions → Quitwave. Cancel at least 24 hours before the period ends to avoid the next charge. Refunds are handled by Apple at reportaproblem.apple.com.",
  },
  {
    q: "Is Quitwave medical advice?",
    a: "No. Quitwave is not a medical app. It offers general information and a breathing exercise — not treatment, not a diagnosis and not medical advice. If you want clinical help with quitting, speak to a doctor or a pharmacist.",
  },
];

export default function QuitwaveSupport() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <nav className="mb-8 flex gap-2 text-sm text-slate-500">
        <Link href="/quitwave" className="hover:text-white transition-colors">Quitwave</Link>
        <span>/</span>
        <span className="text-white">Support</span>
      </nav>

      <h1 className="text-3xl font-bold">Support</h1>
      <p className="mt-3 text-slate-400">
        Answers to the things people actually ask. If yours is not here, email{" "}
        <a href="mailto:founder@heywrist.com" className="text-[#2EC4B6] hover:text-[#3FD8C6]">
          founder@heywrist.com
        </a>{" "}
        and a human will reply.
      </p>

      <div className="mt-12 space-y-6">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-base font-semibold text-white">{f.q}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{f.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-[#2EC4B6]/30 bg-[#2EC4B6]/[0.06] p-6">
        <h2 className="text-base font-semibold text-white">Still stuck?</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">
          Email <a href="mailto:founder@heywrist.com" className="text-[#2EC4B6] hover:text-[#3FD8C6]">founder@heywrist.com</a>{" "}
          with your iOS and watchOS versions and what you were doing when it went wrong. We read
          every message. If it is a bug, it helps enormously to know whether it happened on the
          phone or on the Watch.
        </p>
      </div>

      <footer className="mt-16 border-t border-white/10 pt-8 text-sm text-slate-500">
        <div className="flex gap-4">
          <Link href="/quitwave/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/quitwave/terms" className="hover:text-white transition-colors">Terms of Use</Link>
        </div>
        <p className="mt-4">&copy; {new Date().getFullYear()} Hey Wrist. All rights reserved.</p>
        <p className="mt-1 text-xs text-slate-600">
          Quitwave is not a medical app and gives no medical advice.
        </p>
      </footer>
    </main>
  );
}
