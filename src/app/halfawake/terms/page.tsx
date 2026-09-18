import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Half Awake - Terms of Use",
  description: "Terms of use for the Half Awake dream journal app by Hey Wrist",
};

export default function HalfAwakeTerms() {
  return (
    <PolicyLayout appName="Half Awake" slug="halfawake" title="Terms of Use">
      <p><strong>Effective Date:</strong> September 18, 2026</p>

      <h2>1. The Agreement You Are Actually Under</h2>
      <p>
        Half Awake is distributed through the App Store, and purchases made inside it are sold
        under{" "}
        <a
          href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apple&apos;s Standard End User License Agreement
        </a>
        . That is the agreement the subscription is sold under, and it governs if anything on
        this page appears to conflict with it. This page sets out the parts specific to Half
        Awake.
      </p>

      <h2>2. What Half Awake Is</h2>
      <p>
        Half Awake is a dream journal. You speak or type what you remember on waking; the app
        stores it on your device, writes a title and a short summary, tags it, and counts what
        repeats across nights.
      </p>
      <p>
        <strong>It is a journal, for reflection rather than treatment.</strong> It does not
        interpret dreams, tell fortunes, predict events, or provide medical, psychological or
        therapeutic advice or diagnosis. Nothing it shows you is a professional opinion. If
        your sleep or your dreams worry you, please speak to a doctor.
      </p>
      <p>
        The reminders in the Lucid toolkit are local notifications.{" "}
        <strong>They are not an alarm clock</strong> and must not be relied on as one: iOS may
        delay or suppress a notification, and a silenced device will not sound.
      </p>

      <h2>3. Your Content</h2>
      <p>
        Your entries are yours. They are stored on your device, and in your own private iCloud
        database if you switch sync on. We claim no licence over them, and we cannot read them
        &mdash; we operate no server that holds them.
      </p>
      <p>
        Because they live on your device, <strong>keeping them is your responsibility</strong>.
        Deleting the app deletes the journal. So does &quot;Delete everything&quot; in
        Settings, which cannot be undone. Half Awake Pro can export the whole journal to
        Markdown or JSON; if the entries matter to you, export them somewhere you back up.
      </p>

      <h2>4. Free and Paid</h2>
      <p>
        The app is free to use, with no time limit and no cap on entries: unlimited dreams,
        unlimited voice capture, on-device transcription, capture from the Watch, titles and
        tags for the last thirty days, the streak, and the small widget.
      </p>
      <p>
        Half Awake Pro is an optional in-app purchase that adds Patterns, the Lucid toolkit,
        full-text search, audio playback, Face ID lock, iCloud sync, export and the remaining
        widgets. It is offered as:
      </p>
      <ul>
        <li>Half Awake Pro Monthly &mdash; $4.99 per month, no free trial</li>
        <li>Half Awake Pro Yearly &mdash; $29.99 per year, with a 14-day free trial</li>
        <li>Half Awake Pro Lifetime &mdash; $59.99 once; not a subscription and never renews</li>
      </ul>
      <p>
        Prices are shown in your local currency in the app and may differ by territory.
        Subscriptions renew automatically unless cancelled at least 24 hours before the end of
        the current period. Manage or cancel any time in iOS Settings &rarr; Apple Account
        &rarr; Subscriptions. If you cancel during a free trial you are not charged. Any unused
        part of a free trial is forfeited when a subscription is purchased.
      </p>

      <h2>5. Refunds</h2>
      <p>
        Purchases are processed by Apple, and refunds are handled by Apple, not by us. Request
        one at <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a>.
        If something in the app went wrong, write to us anyway &mdash; we would like to fix it.
      </p>

      <h2>6. Acceptable Use</h2>
      <p>
        Do not attempt to reverse-engineer, decompile or tamper with the app except to the
        extent the law permits regardless of this clause, and do not use it to break the law.
        There is no sharing, no community and no server, so there is no one else here to
        misuse.
      </p>

      <h2>7. Availability and Changes</h2>
      <p>
        Features may change between versions. On-device transcription depends on your device,
        your iOS version and the language you choose; where a language has no on-device model
        the app tells you and offers typing instead. On-device intelligence for titles and
        summaries requires hardware that provides it; where it is absent, the app uses its own
        keyword engine and says so in Settings &rarr; About.
      </p>

      <h2>8. Warranty and Liability</h2>
      <p>
        Half Awake is provided &quot;as is&quot;, without warranties of any kind to the fullest
        extent the law allows. To the fullest extent permitted by law, Hey Wrist is not liable
        for indirect or consequential loss, or for lost entries. Nothing here limits liability
        that cannot be limited by law, and nothing here affects statutory consumer rights you
        have where you live.
      </p>

      <h2>9. Contact</h2>
      <p>
        <a href="mailto:founder@heywrist.com">founder@heywrist.com</a>
      </p>
    </PolicyLayout>
  );
}
