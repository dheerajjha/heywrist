import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Help with Quench: Water & Drink Tracker — restoring purchases, cancelling a subscription, iCloud sync, Apple Health and deleting your data.",
};

const faqs = [
  {
    q: "How do I restore my Quench Pro purchase?",
    a: "Quench Pro belongs to the Apple Account you bought it with. On a new iPhone or iPad signed in to that account it is usually recognised automatically. If it isn’t, open Quench, go to Settings → Quench Pro, and tap Restore Purchases at the bottom of the screen.",
  },
  {
    q: "How do I cancel a subscription?",
    a: "Subscriptions are billed and managed by Apple. On your iPhone or iPad, open the Settings app, tap your name, then Subscriptions → Quench, and tap Cancel Subscription. Cancel at least 24 hours before the renewal date to avoid the next charge; after a paid period you keep Pro until it ends. Deleting the app does not cancel a subscription. The lifetime purchase is a one-time payment with nothing to cancel. Refunds are handled by Apple at reportaproblem.apple.com.",
  },
  {
    q: "How does iCloud sync work?",
    a: "iCloud sync is part of Quench Pro and is off until you turn it on in Settings → Customise My Hydration → iCloud Sync. It takes effect the next time you open Quench. Your drink history, cups and challenges are then stored in your own private iCloud account and appear on your other iPhones and iPads signed in to the same Apple Account. Your profile (name, weight, goal and settings) is not synced and stays on each device. We cannot see your iCloud data. If nothing syncs, check that each device is signed in to iCloud with the same Apple Account.",
  },
  {
    q: "How do I allow or change Apple Health access?",
    a: "Quench asks for Apple Health access only when you tap a Health option: Pull from Apple Health during setup, or the Auto from Health or Sync caffeine switches in Settings → Customise My Hydration. Apple’s permission screen lets you choose each type of data. To change it later, open the Health app, tap your profile picture, then Apps → Quench (or go to Settings → Privacy & Security → Health → Quench). Quench saves the water from drinks you log in the app or on your Apple Watch, and their caffeine unless you turn off Sync caffeine. It can read your weight, to suggest a goal, and your biological sex, to pick the body figure the app shows; and, if you turn on Auto from Health, your steps and workouts, to estimate your activity level. Quench works without Health access; you just enter your details yourself.",
  },
  {
    q: "How do I delete my data?",
    a: "To delete a single drink, tap the trash icon next to it on the Today screen or in History. To delete everything, delete Quench from each device you use it on; that removes the data it stored there (apart from a small install marker in the keychain, which holds no personal information), and deleting it from your iPhone also removes the Apple Watch app. If you turned on iCloud sync, also delete Quench’s data in Settings → your name → iCloud → Manage Storage, or your drink history will come back when you reinstall. Water and caffeine already saved to Apple Health stay in Health until you delete them in the Health app. To ask us to delete analytics data, email founder@heywrist.com.",
  },
  {
    q: "What is free, and what is in Quench Pro?",
    a: "Free: logging any of the 14 drink types, deleting entries, your goal and history, the Apple Watch app and complications, widgets, Siri and Shortcuts, reminders and Apple Health. Nothing that is free today will move to Pro. Quench Pro adds the weather-aware goal, iCloud sync, smart reminder timing, advanced insights, CSV and PDF export, extra themes and mascots, and custom challenges, for $2.99 a month, $14.99 a year (with a 7-day free trial for new subscribers) or $29.99 once for lifetime access. These are US prices; the App Store shows your local price before you buy.",
  },
];

export default function QuenchSupport() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <nav className="mb-8 text-sm text-slate-500 flex gap-2">
        <Link href="/watery" className="hover:text-white transition-colors">Quench</Link>
        <span>/</span>
        <span className="text-white">Support</span>
      </nav>

      <h1 className="text-3xl font-bold mb-2">Quench Support</h1>
      <p className="text-slate-400">
        Help with Quench: Water &amp; Drink Tracker for iPhone, iPad and Apple Watch.
      </p>

      <section className="mt-10 rounded-2xl border border-blue-500/30 bg-blue-500/[0.06] p-6">
        <h2 className="text-base font-semibold text-white">Contact us</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">
          Email{" "}
          <a href="mailto:founder@heywrist.com" className="text-blue-400 hover:text-blue-300">
            founder@heywrist.com
          </a>
          . A person reads every message. If something isn&apos;t working, tell us your iOS
          version, whether it happened on the iPhone, iPad or Apple Watch, and what you were doing
          at the time.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-6">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
              <h3 className="text-base font-semibold text-white">{faq.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-16 pt-8 border-t border-white/10 text-sm text-slate-500">
        <div className="flex flex-wrap gap-4">
          <Link href="/watery/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/watery/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          <a href="mailto:founder@heywrist.com" className="hover:text-white transition-colors">founder@heywrist.com</a>
        </div>
        <p className="mt-4">&copy; {new Date().getFullYear()} Hey Wrist. All rights reserved.</p>
        <p className="mt-1 text-xs text-slate-600">
          Quench is not a medical device and gives no medical advice.
        </p>
      </footer>
    </main>
  );
}
