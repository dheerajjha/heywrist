import Link from "next/link";

const APP_STORE_URL = "/billsoon";

function Rail({ className = "" }: { className?: string }) {
  return <span className={`block h-1 w-10 bg-[#C6FF3D] ${className}`} aria-hidden="true" />;
}

function Card({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500">{eyebrow}</p>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-400">{children}</p>
    </div>
  );
}

export default function BillsoonPage() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-16 sm:pt-24">
        <Rail />
        <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
          Know before it
          <span className="text-[#C6FF3D]"> charges you</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300">
          Billsoon keeps the list of everything you pay for and tells you what is about to be taken,
          before it is taken. No bank link. No account. Nothing about your subscriptions leaves the
          device unless you switch on iCloud sync yourself.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href={APP_STORE_URL}
            className="rounded-md bg-[#C6FF3D] px-6 py-3 text-sm font-semibold text-black hover:bg-[#d4ff66] transition-colors"
          >
            Coming soon to the App Store
          </Link>
          <Link
            href="/billsoon/support"
            className="rounded-md border border-white/15 px-6 py-3 text-sm font-medium text-neutral-200 hover:border-white/30 transition-colors"
          >
            Questions
          </Link>
        </div>

        <dl className="mt-14 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-3">
          {[
            ["No bank link", "Nothing to connect, nothing to authorise, no read access to your accounts."],
            ["No account", "There is no sign-up. There is no password. There is nothing to delete on a server."],
            ["Works offline", "Totals, conversions and reminders are all computed on the device."],
          ].map(([term, detail]) => (
            <div key={term} className="bg-[#141414] p-6">
              <dt className="text-sm font-semibold">{term}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-neutral-400">{detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* How it works */}
      <section id="how" className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Rail />
          <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
            A tracker you have to open is a tracker you forget.
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-400">
            So Billsoon puts the next charge where you are already looking, and stays quiet the rest of
            the time.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card eyebrow="Lock Screen" title="The next charge, at a glance">
              A rectangular widget under the clock reads &ldquo;Soundwave $10.99 &middot; in 3 days&rdquo;.
              A circular one shows just the number of days. Both update at midnight.
            </Card>
            <Card eyebrow="Free trials" title="A countdown for the last 24 hours">
              When a free trial is about to become a paid subscription, a Live Activity counts the hours
              down on the Lock Screen and in the Dynamic Island, with the amount you are about to be
              charged. It ends itself when the deadline passes.
            </Card>
            <Card eyebrow="Watch" title="A complication and a wrist total">
              The next charge on a watch face, the days remaining as a dial, the next fourteen days as a
              list, and this month&rsquo;s committed total. Mark a charge paid from the wrist.
            </Card>
            <Card eyebrow="Home Screen" title="Small, medium, large and StandBy">
              The medium widget adds the month total and a button that marks the next charge paid without
              opening anything.
            </Card>
            <Card eyebrow="Adding" title="Three taps for a known service">
              A built-in catalogue of nearly three hundred services fills in the category, the colour and
              a typical price. Or type your own: name, price, date.
            </Card>
            <Card eyebrow="Reminders" title="Before the charge, not after">
              A local notification one, three or seven days ahead, plus one the day before a trial
              converts. Actions on the notification: remind tomorrow, mark paid, mark cancelled.
            </Card>
          </div>
        </div>
      </section>

      {/* What it tells you */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Rail />
          <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">What the list actually costs.</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <ul className="space-y-4 text-sm leading-relaxed text-neutral-300">
                <li>
                  <strong className="text-white">Committed, not averaged.</strong> The Upcoming header
                  shows what this billing month actually commits you to and what the next seven days take.
                </li>
                <li>
                  <strong className="text-white">By category.</strong> Six muted rails, one ring, and the
                  share each category takes of the monthly run rate.
                </li>
                <li>
                  <strong className="text-white">Price history.</strong> Edit a price and Billsoon keeps
                  the old one, then tells you &ldquo;+$2.00 since March&rdquo;.
                </li>
                <li>
                  <strong className="text-white">The unused nudge.</strong> Anything you have not marked as
                  used in sixty days gets surfaced, with the amount attached.
                </li>
                <li>
                  <strong className="text-white">One currency.</strong> Foreign subscriptions are converted
                  with a built-in rate table, so the totals are right with the radio off. Refreshing the
                  rates is optional and off by default.
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500">
                What Billsoon will never do
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-400">
                <li>Ask to connect a bank or card.</li>
                <li>Ask you to create an account.</li>
                <li>Cancel a subscription on your behalf, or charge you to do it.</li>
                <li>Give you financial advice.</li>
                <li>Show ads, or share anything with an advertising network.</li>
              </ul>
              <p className="mt-5 text-xs leading-relaxed text-neutral-500">
                Billsoon records what you type in and does the arithmetic. It cannot see your statements,
                so what it shows is exactly as accurate as what you tell it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Rail />
          <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
            Pay once. <span className="text-[#C6FF3D]">No subscription.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-400">
            It would be a strange thing to sell a subscription tracker on a subscription and nothing else,
            so the default plan is a one-off payment. The renewing plans exist for people who prefer them.
          </p>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <div className="rounded-xl border-2 border-[#C6FF3D] bg-white/[0.04] p-6">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">Lifetime</h3>
                <span className="rounded bg-[#C6FF3D] px-2 py-0.5 text-[10px] font-bold text-black">PAY ONCE</span>
              </div>
              <p className="mt-3 font-mono text-3xl font-bold tabular-nums">$29.99</p>
              <p className="mt-2 text-sm text-neutral-400">One payment. It does not renew and there is nothing to cancel.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-semibold">Annual</h3>
              <p className="mt-3 font-mono text-3xl font-bold tabular-nums">$14.99</p>
              <p className="mt-2 text-sm text-neutral-400">
                Renews yearly. Starts with a 14-day free trial; cancel before it ends and you are not charged.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-semibold">Monthly</h3>
              <p className="mt-3 font-mono text-3xl font-bold tabular-nums">$2.99</p>
              <p className="mt-2 text-sm text-neutral-400">Renews monthly. No trial.</p>
            </div>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Free forever</h4>
              <ul className="mt-3 space-y-1.5 text-sm text-neutral-300">
                <li>Up to 5 active subscriptions</li>
                <li>Reminders before every charge</li>
                <li>The Lock Screen widget</li>
                <li>The Watch app</li>
                <li>Upcoming timeline and the monthly total</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Pro adds</h4>
              <ul className="mt-3 space-y-1.5 text-sm text-neutral-300">
                <li>Unlimited subscriptions</li>
                <li>Every widget, including the interactive one and StandBy</li>
                <li>The free-trial Live Activity</li>
                <li>Insights: categories, price history, the unused nudge</li>
                <li>Multi-currency conversion, iCloud sync, CSV export and import, custom categories</li>
              </ul>
            </div>
          </div>

          <p className="mt-10 max-w-3xl text-xs leading-relaxed text-neutral-500">
            Subscriptions are charged to your Apple Account at confirmation and renew unless auto-renew is
            turned off at least 24 hours before the current period ends. Manage or cancel in Settings &rsaquo;
            Apple Account &rsaquo; Subscriptions. The lifetime option is a one-time purchase and does not renew.
            Read the{" "}
            <Link href="/billsoon/privacy" className="text-[#C6FF3D] hover:underline">
              Privacy Policy
            </Link>{" "}
            and the{" "}
            <Link href="/billsoon/terms" className="text-[#C6FF3D] hover:underline">
              Terms of Use
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Rail />
          <h2 className="mt-5 text-2xl font-bold tracking-tight">Requires iOS 18 and watchOS 10.</h2>
          <p className="mt-3 max-w-2xl text-neutral-400">
            Billsoon runs on iPhone and iPad, with a companion app for Apple Watch. Twelve languages:
            English, German, Spanish, French, Italian, Portuguese (Brazil), Japanese, Korean, Simplified
            Chinese, Russian, Arabic and Hindi.
          </p>
        </div>
      </section>
    </main>
  );
}
