import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sona - Support",
  description: "Help and FAQs for the Sona AI chat app for Apple Watch and iPhone",
};

type FAQ = { q: string; a: string };
type Section = { title: string; faqs: FAQ[] };

const sections: Section[] = [
  {
    title: "Getting started",
    faqs: [
      {
        q: "How do I start a conversation?",
        a: "On iPhone, open Sona and tap the New Chat button at the bottom of the chat list. Pick a persona (Sona, Muse, DevBot, FitCoach, ChefAI, Lingua, Tutor, or Calm), then type or tap the mic to dictate. On Apple Watch, open Sona and tap \u201cNew Chat,\u201d pick a persona, and start typing or use the mic. You can also tap a suggested prompt to start instantly.",
      },
      {
        q: "Does Sona work on iPhone, Apple Watch, or both?",
        a: "Both. Sona is a single app with a fully featured iPhone experience and a paired Apple Watch app. iPhone is the primary surface for image attachment, themes, and managing your Sona Pro subscription. Apple Watch is the voice-first companion \u2014 great for dictating quick questions on the go. Both devices share conversations and persona memory through Apple\u2019s WatchConnectivity framework.",
      },
      {
        q: "How do I use voice input?",
        a: "On iPhone, tap the mic icon in the chat composer to enter voice mode \u2014 you can dictate or have a hands-free spoken back-and-forth. On Apple Watch, tap the mic icon in the toolbar of any chat, or tap the text field to bring up watchOS dictation. Speech-to-text uses Apple\u2019s on-device speech framework where supported by your locale.",
      },
      {
        q: "How do I attach an image?",
        a: "On iPhone, tap the camera/photo icon in the composer to take a photo or pick one from your library. The image is sent along with your message so the AI can describe or reason about it. Image attachment is a Sona Pro feature. The Apple Watch does not currently support image attachment.",
      },
    ],
  },
  {
    title: "Personas",
    faqs: [
      {
        q: "What are the eight personas?",
        a: "Sona is your everyday AI for general questions, jokes, and motivation. Muse focuses on creative writing and ideas. DevBot helps with code and debugging. FitCoach covers fitness and movement. ChefAI handles recipes and cooking. Lingua is a translator and language tutor. Tutor explains concepts step-by-step. Calm guides mindfulness and reflection. Each has its own conversation style and suggested prompts.",
      },
      {
        q: "Are personas real experts?",
        a: "No. Personas are fictional characters with assigned conversation styles. Names like Tutor, FitCoach, ChefAI, and Calm are illustrative \u2014 they are not licensed credentials. Sona is for entertainment and general information only. Do not rely on AI responses for medical, legal, financial, mental-health, or other professional decisions.",
      },
      {
        q: "How do I change my default persona on Apple Watch?",
        a: "Open Settings in the Sona Watch app and pick your preferred default persona. New conversations started from the Watch will use that persona automatically. The default persona on iPhone is always Sona; you choose a persona each time you start a new chat.",
      },
      {
        q: "Why are some personas locked?",
        a: "Seven of the eight personas (Muse, DevBot, FitCoach, ChefAI, Lingua, Tutor, Calm) require Sona Pro. The default Sona persona is free. Pro users get unlimited access to all eight. Tap a locked persona to see the upgrade screen.",
      },
    ],
  },
  {
    title: "Sona Pro",
    faqs: [
      {
        q: "What does Sona Pro include?",
        a: "Sona Pro unlocks unlimited messages (the free tier is limited to 10 per 24 hours), all eight personas, image vision (attach photos), web grounding for up-to-date facts, premium themes, longer conversation memory, and priority access to new features.",
      },
      {
        q: "How much does Sona Pro cost?",
        a: "Sona Pro is offered as a Monthly subscription (with a 3-day free trial), a Yearly subscription (with a 7-day free trial), or a one-time Lifetime purchase. The exact price in your local currency is shown on the in-app upgrade screen and on the App Store product page before you commit to anything.",
      },
      {
        q: "How do I subscribe?",
        a: "Open Sona on iPhone, tap any locked feature or tap Settings \u2192 Sona Pro \u2192 Unlock Sona Pro. Pick a plan and confirm with Face ID, Touch ID, or your Apple ID password. Apple processes the payment \u2014 we never see your card or billing details.",
      },
      {
        q: "How do I cancel a subscription?",
        a: "Open iOS Settings \u2192 tap your name at the top \u2192 Subscriptions \u2192 Sona \u2192 Cancel Subscription. Or, in Sona, go to Settings \u2192 Sona Pro \u2192 Manage Subscription \u2014 this deep-links to the same iOS subscriptions screen. Cancelling stops auto-renewal but you keep Pro features until the end of the current billing period.",
      },
      {
        q: "How do I get a refund?",
        a: "Refunds are handled by Apple, not Hey Wrist. Visit https://reportaproblem.apple.com, sign in with your Apple ID, find the Sona purchase, and request a refund. Apple decides each request individually. EU residents have a 14-day cooling-off period for digital subscriptions under EU consumer law.",
      },
      {
        q: "I bought Sona Pro on another device. How do I restore it?",
        a: "Open Sona \u2192 Settings \u2192 Sona Pro \u2192 Restore Purchases. Make sure you\u2019re signed into the same Apple ID you used for the original purchase. Restore contacts Apple, not us, so it works even if you uninstalled and reinstalled the app.",
      },
      {
        q: "Does Sona Pro work on my Apple Watch?",
        a: "Yes. When your iPhone is paired and nearby, your Pro entitlement automatically syncs to the Watch through Apple\u2019s WatchConnectivity framework. The Watch unlocks unlimited messages and all personas at the same time as iPhone. The Watch cannot initiate purchases itself \u2014 if you tap a Pro feature on Watch while on the free tier, you\u2019ll see a notice asking you to upgrade in Sona on iPhone.",
      },
      {
        q: "Is Sona Pro Family Shared?",
        a: "Sona Pro Lifetime is enabled for Apple Family Sharing. Auto-renewing subscriptions (Monthly and Yearly) are not Family-Shared and grant access only to the purchasing Apple ID, per Apple\u2019s default subscription rules.",
      },
    ],
  },
  {
    title: "Privacy and data",
    faqs: [
      {
        q: "Does Sona send my messages to a server?",
        a: "Yes. Sona uses Microsoft Azure OpenAI Service (a Microsoft cloud product) to generate AI responses. Your message text \u2014 plus any image you attach, recent context from the same conversation, the persona\u2019s system prompt, and any facts you saved as Memory \u2014 is sent to Azure over HTTPS so the AI can respond. We do not attach your name, email, or device identifier (we don\u2019t have any of those). Microsoft does not use your prompts to train AI models, and retention is limited to 30 days for abuse monitoring. See the Privacy Policy for the full breakdown.",
      },
      {
        q: "Where are my conversations stored?",
        a: "Conversations, persona memory, streaks, and starred messages are stored only on your device, in the app\u2019s sandboxed storage. They are not uploaded to a server we operate. WatchConnectivity syncs them between your iPhone and Apple Watch using a direct, encrypted, device-to-device channel.",
      },
      {
        q: "Can I opt out of analytics?",
        a: "Yes. Open Sona \u2192 Settings \u2192 Privacy \u2192 turn off \u201cShare anonymous usage.\u201d This stops Sona from sending events to Mixpanel. We never send the content of your messages or AI replies \u2014 only event names like \u201cconversation created\u201d and coarse properties like persona name.",
      },
      {
        q: "How do I delete all my data?",
        a: "Open Sona \u2192 Settings \u2192 Data \u2192 Delete all local data. This permanently wipes conversations, persona memory, streaks, and starred messages on iPhone and pushes a wipe to your paired Apple Watch. Uninstalling Sona also deletes everything on that device.",
      },
    ],
  },
  {
    title: "Troubleshooting",
    faqs: [
      {
        q: "I sent a message but got no reply.",
        a: "Sona requires an internet connection because AI responses are generated by Microsoft Azure OpenAI in the cloud. Check Wi-Fi or cellular and tap Retry on the failed message. If the issue persists, force-quit and reopen the app. If it still fails, email founder@heywrist.com with the approximate time of the failure so we can check Azure status on our side.",
      },
      {
        q: "Voice input doesn\u2019t transcribe my speech.",
        a: "Confirm Sona has Microphone and (on iPhone) Speech Recognition permission: iOS Settings \u2192 Sona \u2192 toggle both on. On Apple Watch, the dictation interface uses watchOS\u2019s system speech recognizer; if it fails to transcribe, try a quieter environment or a slower cadence.",
      },
      {
        q: "My Apple Watch shows \u201cDaily limit reached\u201d but my iPhone still works.",
        a: "The free-tier message counter is tracked separately on each device until the iPhone syncs your Pro entitlement to the Watch. Open Sona on iPhone once with the Watch nearby \u2014 the entitlement and counter will sync within a few seconds. If you have Sona Pro, sending should be unlimited on both devices.",
      },
      {
        q: "I can\u2019t hear AI responses spoken aloud.",
        a: "On iPhone, the speak-aloud feature uses Apple\u2019s text-to-speech and respects the system Silent switch and volume. Make sure your phone is not muted, raise the volume, and tap the speaker icon on a message to play it. On Apple Watch, enable \u201cSpeak Responses\u201d in the chat toolbar; ensure your wrist is unraised or you\u2019re using paired AirPods.",
      },
      {
        q: "Sona crashed. What should I do?",
        a: "Crashes automatically generate an anonymous diagnostic report (no message content, no screenshots) that we use to find and fix the issue. If the crash is reproducible, please email founder@heywrist.com with the steps and your iOS/watchOS version so we can prioritise it.",
      },
    ],
  },
];

export default function SonaSupport() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <nav className="mb-8 text-sm text-slate-500 flex gap-2">
        <Link href="/chatty" className="hover:text-white transition-colors">Sona</Link>
        <span>/</span>
        <span className="text-white">Support</span>
      </nav>

      <h1 className="text-3xl font-bold mb-2">Support</h1>
      <p className="text-slate-400 mb-12">
        Answers to common questions about Sona for Apple Watch and iPhone.
        Looking for the legal stuff? See our{" "}
        <Link href="/chatty/privacy" className="text-blue-400 hover:text-blue-300 transition-colors">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link href="/chatty/terms" className="text-blue-400 hover:text-blue-300 transition-colors">
          Terms &amp; Conditions
        </Link>
        .
      </p>

      {sections.map((section) => (
        <section key={section.title} className="mb-12">
          <h2 className="text-xl font-semibold mb-6">{section.title}</h2>
          <div className="space-y-3">
            {section.faqs.map((faq, i) => (
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
                <p className="px-5 pb-5 text-sm text-slate-400 leading-relaxed whitespace-pre-line">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      ))}

      <section className="mt-16 rounded-2xl border border-white/10 bg-slate-900/50 p-8 text-center">
        <h2 className="text-xl font-semibold mb-2">Still need help?</h2>
        <p className="text-sm text-slate-400 mb-6">
          Email us with your iOS/watchOS version and a description of the issue.
          We typically respond within 24 hours.
        </p>
        <a
          href="mailto:founder@heywrist.com"
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-500 transition-colors"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          founder@heywrist.com
        </a>
      </section>

      <footer className="mt-16 pt-8 border-t border-white/10 text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Hey Wrist. All rights reserved.</p>
        <p className="mt-1">
          Contact:{" "}
          <a href="mailto:founder@heywrist.com" className="text-blue-400 hover:text-blue-300">
            founder@heywrist.com
          </a>
        </p>
      </footer>
    </main>
  );
}
