import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with Half Awake, the dream journal you speak into",
};

const faqs = [
  {
    q: "How do I record a dream?",
    a: "Two ways. On the Watch, raise your wrist and tap the big microphone — the screen asks “Remember anything?” and one tap starts recording. On the phone, the whole home screen is one enormous button; tap anywhere on it. Either way you can keep your eyes shut. Recording stops on its own after twenty seconds of quiet, so if you fall back asleep mid-sentence nothing is lost.",
  },
  {
    q: "Does my voice get sent anywhere?",
    a: "No. The recording is written to the app’s own container on your device and is never uploaded — there is no code in the app that sends audio anywhere. Speech becomes text using your own device’s transcription. If the language you have chosen has no on-device model, the app says so and asks you to type it instead, rather than sending the audio to a server to be understood.",
  },
  {
    q: "It says there is no on-device model for my language. Now what?",
    a: "The recording is kept, and the text box below the message is ready for you — type what you remember and the entry is saved exactly like a spoken one, with the same title, summary and tags. You can also switch the transcription language in Settings if you dream in more than one; it defaults to whatever language the app is running in.",
  },
  {
    q: "Who writes the title and the summary?",
    a: "Your device does. Where your hardware provides on-device intelligence, that writes them; where it does not, a keyword engine built into the app does the job instead, less gracefully. Settings → About names which of the two ran on your device. Either way nothing leaves the phone, and either way you can edit every word: tap the entry, tap Edit.",
  },
  {
    q: "Why does my Watch capture take a moment to appear on the phone?",
    a: "The Watch hands the recording to your phone over Watch Connectivity, and that transfer waits for the two to be in range of each other. If your phone is charging in another room, the capture queues on the Watch and arrives when you are back near it. The Watch settings page shows how many are still waiting.",
  },
  {
    q: "What does the moon next to each entry mean?",
    a: "It is the phase of the moon on the night you recorded, drawn to the real illuminated fraction. It is there so nights are easy to tell apart at a glance. It is decoration and astronomy, nothing more — Half Awake does not read anything into it.",
  },
  {
    q: "Does Half Awake tell me what my dreams mean?",
    a: "No, and it never will. It records what you said, gives it a title, and counts what repeats — “the glass train, seven times”. That is a fact about your journal, not an interpretation of it. There is no symbol dictionary, no reading, and no prediction anywhere in the app.",
  },
  {
    q: "How does the streak work?",
    a: "It counts mornings in a row on which you kept something. The day is generous about the hour: anything captured before 11:00 belongs to that morning, and anything after belongs to the next one, because a dream you remember at ten at night is a dream about last night. Miss a whole day and the run resets.",
  },
  {
    q: "What is free and what needs Pro?",
    a: "Free, with no cap and no time limit: unlimited dreams, unlimited voice capture, on-device transcription, capture from the Watch, titles/summaries/tags for the last 30 days, the streak, and the small home-screen widget. Half Awake Pro adds Patterns, the Lucid toolkit, full-text search, audio playback and keeping recordings, Face ID lock, iCloud sync, Markdown/JSON export, and the remaining widgets.",
  },
  {
    q: "How much is Pro, and how do I cancel?",
    a: "$4.99 per month, $29.99 per year with a 14-day free trial, or $59.99 once for good. Subscriptions renew automatically unless cancelled at least 24 hours before the period ends; cancel in iOS Settings → Apple Account → Subscriptions. The lifetime purchase is not a subscription and never renews, so there is nothing to cancel.",
  },
  {
    q: "I bought Pro and it is not showing on my new phone.",
    a: "Sign in with the same Apple Account you bought it with, then tap Restore Purchases — it is on the paywall and in Settings. Purchases are tied to the Apple Account, not the device. If it still does not appear, check iOS Settings → Apple Account → Subscriptions to confirm the subscription is active, relaunch the app, and email us if it has not come back.",
  },
  {
    q: "Do the reality-check reminders replace my alarm?",
    a: "No. Everything in the Lucid toolkit is a local notification, including the wake-back-to-bed reminder. iOS can delay or suppress a notification, and a silenced phone will not sound one. Keep using your alarm clock.",
  },
  {
    q: "Can I get my journal out of the app?",
    a: "Yes, with Pro: Settings → Export as Markdown, or Export as JSON. Markdown drops straight into any notes app; JSON keeps every field including the tags and the mood. Because everything lives on your device, exporting is also how you back it up — deleting the app deletes the journal.",
  },
  {
    q: "How do I delete everything?",
    a: "Open Settings by tapping the moon icon at the top right of the first screen, scroll to “Your data”, and tap “Delete everything”. That erases every entry and every audio file from the device and cannot be undone. There is no account and no server of ours, so there is nothing left anywhere else.",
  },
];

export default function HalfAwakeSupport() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <nav className="mb-8 flex gap-2 text-sm text-slate-500">
        <Link href="/halfawake" className="hover:text-white transition-colors">
          Half Awake
        </Link>
        <span>/</span>
        <span className="text-white">Support</span>
      </nav>

      <h1 className="mb-2 text-3xl font-bold">Support</h1>
      <p className="mb-12 text-slate-400">
        Answers to the questions we are asked most. If yours is not here, write to{" "}
        <a href="mailto:founder@heywrist.com" className="text-[#a494ff] hover:text-[#c3b9ff]">
          founder@heywrist.com
        </a>{" "}
        &mdash; a person reads it.
      </p>

      <div className="space-y-6">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="mb-2 text-base font-semibold text-white">{f.q}</h2>
            <p className="text-sm leading-relaxed text-slate-400">{f.a}</p>
          </div>
        ))}
      </div>

      <section className="mt-16 rounded-xl border border-[#8e7cff]/30 bg-[#8e7cff]/[0.07] p-6">
        <h2 className="mb-2 text-base font-semibold">Still stuck?</h2>
        <p className="text-sm leading-relaxed text-slate-300">
          Email{" "}
          <a href="mailto:founder@heywrist.com" className="text-[#a494ff] hover:text-[#c3b9ff]">
            founder@heywrist.com
          </a>
          . Telling us your iOS version, whether you were on the Watch or the phone, and the
          transcription language you had selected usually gets to the answer in one reply.
        </p>
      </section>

      <footer className="mt-16 border-t border-white/10 pt-8 text-sm text-slate-500">
        <div className="flex gap-4">
          <Link href="/halfawake/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/halfawake/terms" className="hover:text-white transition-colors">
            Terms of Use
          </Link>
        </div>
        <p className="mt-4 text-xs text-slate-600">
          Half Awake is a journal, for reflection rather than treatment. It gives no medical,
          psychological or therapeutic advice. If your sleep worries you, please speak to a doctor.
        </p>
      </footer>
    </main>
  );
}
