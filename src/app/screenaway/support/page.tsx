import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with the Screenaway app",
};

const faqs = [
  {
    q: "How does Screenaway track my screen time?",
    a: "Apple’s DeviceActivity framework prepares usage reports on your device. Screenaway does not send the contents of those reports to analytics. Our privacy policy explains the separate app-interaction analytics.",
  },
  {
    q: "How do I set up app blocking?",
    a: "Open Shield, tap Add, choose the apps or categories, and set the times and days. Screenaway uses Apple’s Screen Time permission to apply the rule. One recurring schedule is included without Pro.",
  },
  {
    q: "How do I set up the Apple Watch app?",
    a: "Make sure Screenaway is installed on your iPhone, then open the Watch app on your iPhone and scroll down to find Screenaway. Tap \u201cInstall\u201d if it\u2019s not already on your watch. You can add complications by long-pressing your watch face, tapping \u201cEdit,\u201d and selecting Screenaway from the complication picker.",
  },
  {
    q: "Why does Screenaway need access to my camera?",
    a: "The camera is only used for the \u201cExercise to Unlock\u201d feature, which uses on-device Vision AI to count exercises like pushups. No images or video are stored, recorded, or sent anywhere. You can use all other features without granting camera access.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "You can cancel anytime through your iPhone: go to Settings \u2192 [your name] \u2192 Subscriptions \u2192 Screenaway \u2192 Cancel Subscription. You\u2019ll continue to have Pro access until the end of your current billing period.",
  },
  {
    q: "How do I restore my plan?",
    a: "Use the same Apple Account as the original purchase. Open You → Upgrade to Pro → Restore purchases. Lifetime is a one-time purchase; only monthly and annual plans renew.",
  },
  {
    q: "My screen time data doesn\u2019t seem accurate. What should I do?",
    a: "Screen time tracking depends on Apple\u2019s DeviceActivity API, which may have slight variations from Apple\u2019s built-in Screen Time. Make sure Screenaway has Screen Time permission enabled in Settings \u2192 Screen Time. If issues persist, try removing and re-granting the permission.",
  },
];

export default function ScreenawaySupport() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <nav className="mb-8 text-sm text-slate-500 flex gap-2">
        <Link href="/screenaway" className="hover:text-white transition-colors">
          Screenaway
        </Link>
        <span>/</span>
        <span className="text-white">Support</span>
      </nav>

      <h1 className="text-3xl font-bold mb-2">Support</h1>
      <p className="text-slate-400 mb-12">
        Find answers to common questions or reach out to us directly.
      </p>

      {/* FAQ */}
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </summary>
              <p className="px-5 pb-5 text-sm text-slate-400 leading-relaxed">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="rounded-2xl border border-white/10 bg-slate-900/50 p-8 text-center">
        <h2 className="text-xl font-semibold mb-2">Still need help?</h2>
        <p className="text-sm text-slate-400 mb-6">
          We typically respond within 24 hours.
        </p>
        <a
          href="mailto:founder@heywrist.com"
          className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-indigo-500 transition-colors"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          founder@heywrist.com
        </a>
        <p className="mt-6 text-xs text-slate-500">
          Love Screenaway?{" "}
          <a
            href="https://x.com/awesome_fingers"
            className="text-indigo-400 hover:text-indigo-300"
          >
            Leave a review on the App Store
          </a>{" "}
          &mdash; it helps a lot!
        </p>
      </section>

      <footer className="mt-16 pt-8 border-t border-white/10 text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Hey Wrist. All rights reserved.</p>
        <p className="mt-1">
          Contact:{" "}
          <a
            href="mailto:founder@heywrist.com"
            className="text-indigo-400 hover:text-indigo-300"
          >
            founder@heywrist.com
          </a>
        </p>
      </footer>
    </main>
  );
}
