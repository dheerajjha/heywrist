import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FlappyBody - Your Head Is the Controller",
  description:
    "A hands-free arcade game for iPhone. The front camera tracks the vertical position of your head and that drives the flyer's altitude. Columns cleared are your score, push-ups are your reps.",
};

const features = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
      </svg>
    ),
    title: "Your head is the controller",
    desc: "The front camera tracks the vertical position of your head, and that position directly drives the flyer’s altitude on screen. Nothing to tap, nothing to hold.",
    color: "from-sky-500 to-sky-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
      </svg>
    ),
    title: "A push-up is a flap",
    desc: "Prop the phone on the floor and get into a push-up position. Chest down and the flyer drops. Arms locked and it climbs. The run is exactly as long as you can keep going.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
      </svg>
    ),
    title: "Free move",
    desc: "Free move drops the calibration step entirely, so you can play sitting down. Same camera, same flyer, no floor required.",
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    title: "Two numbers that matter",
    desc: "Score is columns cleared. Reps are full push-ups. One number is an arcade score, the other is what your body actually did — and they climb together.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h8.25a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H4.5A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
    title: "Every run is recorded",
    desc: "Runs are recorded as you play, so a good one is already a clip. Share it wherever you like through the system share sheet — or keep it to yourself, which is the default.",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0 1 16.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 0 1-2.77.896m5.25-6.624V2.721" />
      </svg>
    ),
    title: "Leaderboard and referrals",
    desc: "Put your best score on the Game Center leaderboard. Share your referral code and both you and whoever redeems it get a free month.",
    color: "from-amber-500 to-amber-600",
  },
];

const steps = [
  { num: "1", title: "Prop the phone", desc: "Stand the phone on the floor with the front camera facing you, then get into a push-up position in front of it." },
  { num: "2", title: "Let it find your head", desc: "Calibration maps the height of your head to the flyer’s altitude. Playing seated instead? Pick Free move and skip this step." },
  { num: "3", title: "Fly the columns", desc: "Chest down, the flyer drops. Arms locked, it climbs. Every column you clear is a point and every full push-up is a rep." },
];

export default function FlappyBodyHome() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-600/20 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-sky-500/30 via-cyan-500/20 to-transparent rounded-full blur-3xl -translate-y-1/2" />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 text-center sm:pt-32 sm:pb-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-sm text-sky-300">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
            For iPhone &middot; Plays with the front camera
          </div>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Your head is the{" "}
            <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              controller
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl">
            FlappyBody is an arcade game you play hands-free. The front camera
            follows the vertical position of your head and that drives the
            flyer&apos;s altitude &mdash; chest down it drops, arms locked it
            climbs. Score is columns cleared. Reps are push-ups.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-5 py-3 text-sm font-medium text-sky-300 ring-1 ring-sky-500/30">
              Coming soon to the App Store
            </span>
            <span className="text-sm text-slate-500">10 free runs on day one &middot; 3 a day after that</span>
          </div>

          {/* Hero mockup */}
          <div className="relative mx-auto mt-16 max-w-3xl">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
            <div className="flex items-end justify-center gap-6">
              <div className="w-56 sm:w-64 rounded-3xl border border-white/10 bg-slate-900/80 p-3 shadow-2xl shadow-sky-500/10">
                <div className="aspect-[9/19] overflow-hidden rounded-2xl bg-gradient-to-b from-sky-900/60 to-slate-900 p-4">
                  <div className="flex items-start justify-between">
                    <div className="text-left">
                      <p className="text-[10px] uppercase tracking-wide text-slate-500">Score</p>
                      <p className="text-2xl font-bold text-sky-300">14</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] uppercase tracking-wide text-slate-500">Reps</p>
                      <p className="text-2xl font-bold text-emerald-300">14</p>
                    </div>
                  </div>
                  <div className="relative mt-4 h-48 rounded-xl border border-white/5 bg-slate-950/40">
                    {/* Columns */}
                    <div className="absolute left-10 top-0 h-16 w-5 rounded-b-md bg-emerald-500/70" />
                    <div className="absolute left-10 bottom-0 h-20 w-5 rounded-t-md bg-emerald-500/70" />
                    <div className="absolute left-28 top-0 h-24 w-5 rounded-b-md bg-emerald-500/50" />
                    <div className="absolute left-28 bottom-0 h-12 w-5 rounded-t-md bg-emerald-500/50" />
                    {/* Flyer */}
                    <div className="absolute left-4 top-[86px] h-4 w-4 rounded-full bg-amber-300 shadow-lg shadow-amber-400/40" />
                    <p className="absolute bottom-2 left-0 right-0 text-center text-[9px] text-slate-500">head height &rarr; altitude</p>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between rounded-lg bg-slate-800/60 px-2 py-1.5">
                      <span className="text-[10px] text-slate-300">Push-up</span>
                      <span className="text-[10px] text-sky-300">calibrated</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-slate-800/60 px-2 py-1.5">
                      <span className="text-[10px] text-slate-300">Free move</span>
                      <span className="text-[10px] text-slate-500">seated, no setup</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden w-28 sm:block mb-8">
                <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-2 shadow-2xl shadow-sky-500/10">
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center p-2">
                    <p className="text-[8px] text-slate-500">Best</p>
                    <p className="text-lg font-bold text-sky-300">27</p>
                    <p className="text-[8px] text-emerald-400">Game Center</p>
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
            <h2 className="text-3xl font-bold sm:text-4xl">
              An arcade game that <span className="text-sky-400">watches you move</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              One camera, one input, and nothing between you and the next column.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="group rounded-2xl border border-white/5 bg-slate-900/50 p-6 hover:border-sky-500/30 hover:bg-slate-900/80 transition-all">
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${f.color} text-white`}>
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 sm:py-28 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl">How it works</h2>
            <p className="mt-4 text-lg text-slate-400">Three steps between the floor and a high score.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-600 text-2xl font-bold">{s.num}</div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-slate-500">
            The camera feed is processed on your device to find your head, and
            nothing else. Frames are never stored and never sent anywhere.{" "}
            <Link href="/flappybody/privacy" className="text-sky-400 hover:text-sky-300 underline">
              Read the privacy policy
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 sm:py-28 border-t border-white/5">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl">Free to play, unlimited when you want it</h2>
            <p className="mt-4 text-lg text-slate-400">
              A subscription changes one thing: how many runs you get.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-8">
              <h3 className="text-xl font-semibold">Free</h3>
              <p className="mt-2 text-sm text-slate-400">Start playing the minute it installs.</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li>10 runs on the day you install</li>
                <li>3 runs every day after that</li>
                <li>Runs reset daily &mdash; come back tomorrow</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-sky-500/40 bg-gradient-to-br from-sky-500/10 to-cyan-500/5 p-8">
              <h3 className="text-xl font-semibold">
                Unlimited
                <span className="ml-2 rounded-full bg-sky-500/20 px-2 py-0.5 text-[10px] font-medium text-sky-300 align-middle">
                  Subscription
                </span>
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Unlimited runs, for as long as you keep going.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li>Unlimited runs &mdash; no daily cap</li>
                <li>
                  <strong className="text-white">$4.99</strong> per week
                </li>
                <li>
                  <strong className="text-white">$39.99</strong> per year
                </li>
                <li>Refer a friend and you both get a free month</li>
              </ul>
            </div>
          </div>
          <p className="mt-10 text-center text-xs text-slate-500">
            Prices in US dollars and may vary by region. Subscriptions are
            billed through your App Store account and renew automatically until
            cancelled at least 24 hours before the end of the current period.
            Manage or cancel anytime in the App Store. See{" "}
            <Link href="/flappybody/terms" className="text-sky-400 hover:text-sky-300 underline">Terms</Link>
            {" "}and{" "}
            <Link href="/flappybody/privacy" className="text-sky-400 hover:text-sky-300 underline">Privacy</Link>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 border-t border-white/5">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Put the phone down and play</h2>
          <p className="mt-4 text-lg text-slate-400">
            FlappyBody is finishing up for the App Store. Questions before it
            lands? We read every email.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-5 py-3 text-sm font-medium text-sky-300 ring-1 ring-sky-500/30">
              Coming soon to the App Store
            </span>
            <a href="mailto:founder@heywrist.com" className="rounded-full bg-sky-600 px-6 py-3 text-sm font-medium text-white hover:bg-sky-500 transition-colors">
              founder@heywrist.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
