import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quitwave - Beat cravings on your wrist",
  description:
    "A three-minute craving rescue that runs standalone on Apple Watch, paced by haptics, with the phone in your pocket. Unlimited and free, in twelve languages.",
};

const features = [
  {
    title: "The rescue is on your wrist",
    body: "Raise your wrist, tap once, and a three-minute breathing session begins — paced by haptics you can feel through a sleeve. No phone needed, no signal needed. Rescues are unlimited and free, on both devices, and always will be.",
  },
  {
    title: "One ring, honest numbers",
    body: "Days nicotine-free, money saved, units not taken, and every craving you rode out. Plus today's craving weather: how many urges, how long, and how that compares with the same time last week.",
  },
  {
    title: "A slip is one tap, and nothing else changes",
    body: "“I slipped” restarts the day count. Your money saved and your cravings beaten stay exactly as they are, because deleting the evidence that the effort was real is the last thing anyone needs at that moment.",
  },
  {
    title: "Patterns, read from your own log",
    body: "An hour-of-day heatmap, your triggers ranked, intensity before and after a rescue, and this week against last — plus a short weekly read in plain language, written on your device.",
  },
  {
    title: "On every surface",
    body: "Lock Screen and Home Screen widgets, StandBy, a Control Centre button that starts a rescue in one press, a Live Activity while a session runs, and a watch face complication.",
  },
  {
    title: "Twelve languages",
    body: "English, German, Spanish, French, Italian, Portuguese (Brazil), Japanese, Korean, Simplified Chinese, Russian, Arabic and Hindi — the whole app, not just the menus.",
  },
];

export default function QuitwavePage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(46,196,182,0.18),_transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
          <span className="inline-flex items-center rounded-full bg-[#2EC4B6]/10 px-4 py-1.5 text-sm font-medium text-[#2EC4B6] ring-1 ring-[#2EC4B6]/30">
            Watch-first
          </span>
          <h1 className="mt-6 text-5xl font-black leading-tight sm:text-6xl">
            Cravings come in waves.
            <br />
            <span className="text-[#2EC4B6]">Learn to ride them.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Quitwave is a quit-vaping app built around the three minutes when it is hardest.
            Every other app in this category is a day counter that lives on your phone.
            Quitwave&apos;s craving rescue runs on your watch.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/quitwave/support"
              className="rounded-full bg-[#2EC4B6] px-7 py-3 font-semibold text-[#04161C] hover:bg-[#3FD8C6] transition-colors"
            >
              Questions? Start here
            </Link>
            <span className="text-sm text-slate-400">Coming soon to the App Store</span>
          </div>
        </div>
      </section>

      <section id="rescue" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <h2 className="text-lg font-bold text-white">{f.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-3xl font-black">What costs money, and what never will</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h3 className="text-xl font-bold">Free forever</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>Unlimited craving rescues, on the phone and on the Watch</li>
              <li>Days free, money saved and units not taken</li>
              <li>The milestone ladder, from twenty minutes to a year</li>
              <li>The Lock Screen widget</li>
              <li>Seven days of craving history</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-[#2EC4B6]/40 bg-[#2EC4B6]/[0.06] p-8">
            <h3 className="text-xl font-bold text-[#2EC4B6]">Quitwave Pro</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>The Patterns tab: heatmap, triggers, weekly read</li>
              <li>Your full history instead of seven days</li>
              <li>Every widget style, StandBy and the Live Activity</li>
              <li>Custom breathing patterns</li>
              <li>CSV export</li>
            </ul>
            <div className="mt-6 space-y-1 text-sm text-slate-400">
              <p>$7.99 per month</p>
              <p>$39.99 per year, with a 14-day free trial</p>
              <p>$79.99 once, for lifetime access</p>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              Subscriptions auto-renew unless cancelled at least 24 hours before the end of the
              current period. Manage or cancel any time in iOS Settings &rarr; Apple Account &rarr;
              Subscriptions.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-sm leading-relaxed text-slate-300">
          <h2 className="text-lg font-bold text-white">Quitwave is not a medical app</h2>
          <p className="mt-3">
            It offers general information and a breathing exercise. It is not treatment, not a
            diagnosis, and not medical advice, and it makes no claims about your health. If you
            want clinical help with quitting, speak to a doctor or a pharmacist.
          </p>
          <p className="mt-3">
            Your craving log, your quit details and your settings stay on your devices. There is no
            account, no sign-in, and no server of ours holding any of it. See the{" "}
            <Link href="/quitwave/privacy" className="text-[#2EC4B6] hover:text-[#3FD8C6]">
              Privacy Policy
            </Link>{" "}
            for exactly what does and does not leave the device.
          </p>
        </div>
      </section>
    </main>
  );
}
