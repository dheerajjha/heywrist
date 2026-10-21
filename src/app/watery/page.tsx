import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Quench: Water & Drink Tracker" },
  description:
    "Quench is a water and drink tracker for iPhone and Apple Watch. Log any of 14 drink types, with an Apple Watch app, widgets, Siri and Apple Health. Free to download, with an optional Quench Pro.",
};

const features = [
  {
    title: "14 drink types",
    desc: "Water, coffee, tea, juice, milk, soda, smoothies, sports and energy drinks, sparkling and coconut water, beer, wine and spirits. Logging any of them is free.",
    pro: false,
  },
  {
    title: "Apple Watch",
    desc: "A Watch app for logging drinks from your wrist, with complications that keep today’s progress on your watch face.",
    pro: false,
  },
  {
    title: "Widgets",
    desc: "Home Screen and Lock Screen widgets show how today is going without opening the app.",
    pro: false,
  },
  {
    title: "Siri and Shortcuts",
    desc: "Ask Siri to log water or another drink, or to check your progress. The same actions are in the Shortcuts app.",
    pro: false,
  },
  {
    title: "Reminders",
    desc: "Optional reminders at the interval you choose, only between the wake and sleep times you set.",
    pro: false,
  },
  {
    title: "Apple Health",
    desc: "With your permission, Quench saves the water and caffeine from drinks you log in the app or on your Apple Watch to Apple Health, and can use your weight and activity from Health to suggest a daily goal.",
    pro: false,
  },
  {
    title: "Weather-aware goal",
    desc: "Raises your goal on hot days using Apple’s WeatherKit. It uses your location only if you turn it on.",
    pro: true,
  },
];

const freeItems = [
  "Logging any of the 14 drink types",
  "Deleting entries",
  "Your daily goal, today’s progress and history",
  "The Apple Watch app and complications",
  "Home Screen and Lock Screen widgets",
  "Siri and Shortcuts",
  "Reminders",
  "Apple Health",
];

const proItems = [
  "Weather-aware daily goal",
  "Smart reminder timing",
  "Advanced insights: 30, 90 and 365-day trends",
  "CSV and PDF export",
  "Extra colour themes and mascots",
  "Custom challenges",
];

export default function QuenchHome() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-blue-500/30 via-cyan-500/20 to-transparent rounded-full blur-3xl -translate-y-1/2" />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 text-center sm:pt-32 sm:pb-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-400" />
            For iPhone and Apple Watch
          </div>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Quench
          </h1>
          <p className="mt-3 text-xl font-medium sm:text-2xl">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Water &amp; Drink Tracker
            </span>
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl">
            Log water and every other drink in a tap, and see how close you are to
            today&apos;s goal &mdash; on your iPhone or your wrist.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/90 px-6 py-3 text-sm font-semibold text-white">
              Coming soon to the App Store
            </span>
            <Link
              href="/watery/support"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-slate-200 hover:border-white/30 hover:text-white transition-colors"
            >
              Support &amp; FAQ
            </Link>
          </div>
          <p className="mx-auto mt-5 max-w-xl text-sm text-slate-500">
            Free to download. Logging any drink, deleting entries and the basics are free, and
            nothing that is free today will move to Pro.
          </p>

          {/* Illustration of the Today screen and a Watch complication (not a screenshot) */}
          <div className="relative mx-auto mt-16 max-w-3xl" aria-hidden="true">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
            <div className="flex items-end justify-center gap-6">
              <div className="w-56 sm:w-64 rounded-3xl border border-white/10 bg-slate-900/80 p-3 shadow-2xl shadow-blue-500/10">
                <div className="aspect-[9/19] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center p-4">
                  <div className="w-full space-y-3">
                    <div className="text-center">
                      <p className="text-xs text-slate-500">Today</p>
                      <p className="text-2xl font-bold text-blue-400">1,850 ml</p>
                      <p className="text-xs text-emerald-400">74% of goal</p>
                    </div>
                    <div className="mx-auto h-20 w-20 rounded-full border-4 border-blue-500/30 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full border-4 border-blue-500 flex items-center justify-center" style={{ borderTopColor: "transparent", transform: "rotate(-70deg)" }}>
                        <svg className="h-6 w-6 text-blue-400 rotate-[70deg]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75c-4.97 4.97-7.5 8.03-7.5 11.25a7.5 7.5 0 0 0 15 0c0-3.22-2.53-6.28-7.5-11.25Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5">
                      {["+200", "+250", "+500"].map((amt) => (
                        <div key={amt} className="rounded-lg bg-blue-500/20 border border-blue-500/30 py-1.5 text-center">
                          <span className="text-[10px] font-medium text-blue-300">{amt} ml</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 rounded-lg bg-slate-800/60 px-2 py-1.5">
                        <div className="h-3 w-3 rounded bg-blue-500" />
                        <span className="text-[10px] text-slate-300">Water</span>
                        <span className="ml-auto text-[10px] text-slate-400">1,200 ml</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg bg-slate-800/60 px-2 py-1.5">
                        <div className="h-3 w-3 rounded bg-amber-500" />
                        <span className="text-[10px] text-slate-300">Coffee</span>
                        <span className="ml-auto text-[10px] text-slate-400">400 ml</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg bg-slate-800/60 px-2 py-1.5">
                        <div className="h-3 w-3 rounded bg-emerald-500" />
                        <span className="text-[10px] text-slate-300">Tea</span>
                        <span className="ml-auto text-[10px] text-slate-400">250 ml</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden w-28 sm:block mb-8">
                <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-2 shadow-2xl shadow-blue-500/10">
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center p-2">
                    <p className="text-[8px] text-slate-500">Today</p>
                    <p className="text-lg font-bold text-blue-400">74%</p>
                    <p className="text-[8px] text-slate-400">650 ml left</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl">What Quench does</h2>
            <p className="mt-4 text-lg text-slate-400">
              Quick logging wherever you are, and a goal that fits you.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/5 bg-slate-900/50 p-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold mb-2">
                  {f.title}
                  {f.pro && (
                    <span className="rounded-full bg-blue-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-blue-300 ring-1 ring-blue-500/30">
                      Pro
                    </span>
                  )}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 sm:py-28 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">Free, with an optional Pro</h2>
            <p className="mt-4 text-lg text-slate-400">
              Quench is free to download. Quench Pro adds extras; it never takes away the basics.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-8">
              <h3 className="text-xl font-bold">Free</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {freeItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-6 text-xs leading-relaxed text-slate-500">
                Nothing that is free today will become part of Pro.
              </p>
            </div>
            <div className="rounded-3xl border border-blue-500/40 bg-blue-500/[0.06] p-8">
              <h3 className="text-xl font-bold text-blue-300">Quench Pro</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {proItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-6 space-y-1 text-sm text-slate-300">
                <p>$2.99 per month</p>
                <p>$14.99 per year, with a 7-day free trial for new subscribers</p>
                <p>$29.99 once, for lifetime access</p>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-slate-500">
                US prices; the App Store shows the price for your country before you buy.
                Subscriptions renew automatically unless cancelled at least 24 hours before the end
                of the current period. Manage or cancel in iOS Settings &rarr; your name &rarr;
                Subscriptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy and health note */}
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-8 text-sm leading-relaxed text-slate-300">
            <h2 className="text-lg font-bold text-white">Your data</h2>
            <p className="mt-3">
              There is no account to create. Your drink entries and profile are stored on your
              devices. Quench uses Mixpanel for product
              analytics. It shows no ads, does not use the advertising identifier (IDFA) and does
              not track you across other companies&apos; apps or websites. The{" "}
              <Link href="/watery/privacy" className="text-blue-400 hover:text-blue-300">
                Privacy Policy
              </Link>{" "}
              lists exactly what is sent.
            </p>
            <h2 className="mt-6 text-lg font-bold text-white">Not medical advice</h2>
            <p className="mt-3">
              Quench is not a medical device. Its goals are general guidance. If you have a
              condition that affects how much you should drink, ask your doctor.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              <Link href="/watery/support" className="text-blue-400 hover:text-blue-300">Support</Link>
              <Link href="/watery/privacy" className="text-blue-400 hover:text-blue-300">Privacy Policy</Link>
              <Link href="/watery/terms" className="text-blue-400 hover:text-blue-300">Terms of Use</Link>
              <a href="mailto:founder@heywrist.com" className="text-blue-400 hover:text-blue-300">founder@heywrist.com</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
