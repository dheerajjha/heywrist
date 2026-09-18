import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Billsoon - Privacy Policy",
  description: "Privacy policy for the Billsoon subscription manager by Hey Wrist",
};

export default function BillsoonPrivacy() {
  return (
    <PolicyLayout appName="Billsoon" slug="billsoon" title="Privacy Policy">
      <p><strong>Effective date:</strong> 18 September 2026</p>
      <p><strong>Last updated:</strong> 18 September 2026</p>

      <p>
        Hey Wrist (&quot;we&quot;, &quot;us&quot;) makes Billsoon, an app for iPhone, iPad and Apple
        Watch that keeps track of the subscriptions and recurring bills you tell it about and warns
        you before each one charges. This policy describes what Billsoon stores, what leaves your
        device and what does not.
      </p>

      <p>
        <strong>In short:</strong> your subscription list lives on your device. Billsoon has no
        server of its own and no user accounts. It never connects to a bank. It does send anonymous
        product-usage analytics to Mixpanel, described below, and that is the only routine
        transmission the app makes.
      </p>

      <h2>1. Billsoon does not ask for an account</h2>
      <p>
        There is no sign-up, no email address, no password and no profile. Nothing you enter is tied
        to your identity by us, because we never learn it. That also means there is no account for
        us to delete on request: deleting the app removes everything held locally, and
        <strong> Settings &rsaquo; Delete all my data</strong> inside the app clears the list, the
        history and every scheduled reminder, including the copy in iCloud if you turned sync on.
      </p>

      <h2>2. Billsoon does not connect to your bank</h2>
      <p>
        Billsoon has no bank-linking feature, no card connection, no Open Banking integration and no
        access to your statements. Every subscription in the app is one you typed in or picked from
        the built-in catalogue. It follows that Billsoon cannot see a charge you have not told it
        about, and cannot cancel anything on your behalf.
      </p>

      <h2>3. What stays on your device</h2>
      <p>All of the following is stored locally, in an app group container that only Billsoon and
      its own widgets can read:</p>
      <ul>
        <li>Subscription names, prices, currencies, billing cycles and next-charge dates</li>
        <li>Free-trial end dates</li>
        <li>Category, payment-method label, &ldquo;shared with&rdquo; label and notes</li>
        <li>Price history, the dates you marked paid or skipped and cancellation records</li>
        <li>Your settings: display currency, first day of month, reminder lead time and notification time</li>
      </ul>
      <p>
        A compact summary of the next few weeks of charges is written to the same container so the
        widgets and the Apple Watch app can draw without opening the database. That summary never
        leaves the device except over the Apple Watch link described in section 6.
      </p>

      <h2>4. Analytics (Mixpanel)</h2>
      <p>
        Billsoon sends anonymous product-usage events to Mixpanel, Inc. so we can tell which parts of
        the app are used and where people get stuck. This is the only routine transmission the app
        makes, and it is described here rather than buried because it is the one claim a
        &ldquo;private by design&rdquo; app most often gets wrong.
      </p>
      <p><strong>What is sent:</strong></p>
      <ul>
        <li>
          Event names describing an action, for example that a subscription was added, that the
          paywall was shown, that Insights was opened, or that a purchase completed. Events carry
          shape, not content: <em>which</em> billing cycle was chosen, not the name of the service;
          <em> how many</em> subscriptions exist, not what they are.
        </li>
        <li>
          A device identifier derived from Apple&apos;s <em>identifierForVendor</em>. This is
          specific to this app on this device, resets when you delete the app, and is not linked to
          you by name.
        </li>
        <li>App version and build, device language, the language the app is displayed in, whether
        the event came from the phone or the Watch, and a per-session identifier.</li>
      </ul>
      <p><strong>What is never sent:</strong> the names of your subscriptions, their prices, their
      dates, your notes, your payment-method labels, your totals, your contacts, your location, or
      anything that identifies you personally.</p>
      <p>
        Mixpanel processes this on our behalf. See{" "}
        <a href="https://mixpanel.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">
          Mixpanel&apos;s privacy policy
        </a>
        .
      </p>

      <h2>5. Development builds only: the bug reporter</h2>
      <p>
        Builds we run internally include a bug-reporting SDK that can capture a screenshot and
        recent logs when a tester reports a problem. It is compiled in behind a debug flag and is
        never started in the version distributed on the App Store. Because the SDK links Apple&apos;s
        speech frameworks, iOS requires the app to declare microphone and speech-recognition purpose
        strings; Billsoon has no voice feature and never records audio.
      </p>

      <h2>6. Apple Watch</h2>
      <p>
        The Watch app receives the summary described in section 3 from your iPhone over Apple&apos;s
        WatchConnectivity link, which is a direct device-to-device transfer. When you mark a charge
        paid on the Watch, that action is sent back to the phone the same way, and the phone records
        the analytics event on the Watch&apos;s behalf. The Watch app contains no analytics SDK of
        its own.
      </p>

      <h2>7. iCloud sync (optional, Pro, off by default)</h2>
      <p>
        If you turn on iCloud sync, your subscription list is mirrored through{" "}
        <strong>your own private iCloud database</strong> using Apple&apos;s CloudKit, so it appears
        on your other devices signed in to the same Apple Account. We do not operate that storage,
        cannot read it, and receive nothing from it. Turning sync off returns Billsoon to local-only
        storage. Apple&apos;s handling of iCloud data is governed by{" "}
        <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">
          Apple&apos;s privacy policy
        </a>
        .
      </p>

      <h2>8. Exchange rates (optional, off by default)</h2>
      <p>
        Billsoon ships with a built-in currency rate table so that totals for foreign subscriptions
        work with no network at all. If you switch on <strong>Refresh exchange rates</strong>,
        Billsoon makes an anonymous HTTPS request to <em>open.er-api.com</em> to fetch current rates.
        That request contains no identifier and no information about your subscriptions; it asks only
        for the public rate table. The setting is off unless you turn it on.
      </p>

      <h2>9. Notifications</h2>
      <p>
        Reminders are local notifications scheduled on your device by the app. There is no push
        server and Billsoon holds no push token. If you decline the notification permission, every
        other part of the app continues to work.
      </p>

      <h2>10. Purchases</h2>
      <p>
        Billsoon Pro is sold through Apple&apos;s In-App Purchase. Apple processes the payment; we
        never see your payment details. The app reads the purchase receipt already on your device to
        decide whether Pro features are unlocked. We record that a purchase, trial start or restore
        happened as an analytics event, with the product identifier and price, but not with anything
        identifying you.
      </p>

      <h2>11. Export and import</h2>
      <p>
        CSV export writes a file through the system share sheet to wherever you choose. Import reads
        a file you pick. Neither passes through us.
      </p>

      <h2>12. Children</h2>
      <p>
        Billsoon is rated 4+ and contains no objectionable content, but it is a tool for adults
        managing their own bills. We do not knowingly collect personal information from children.
      </p>

      <h2>13. Your rights</h2>
      <p>
        Because Billsoon holds no account and no personal identifiers on our side, there is no
        profile for us to produce, correct or erase. If you would like the analytics identifier for
        your install disassociated from collected events, email{" "}
        <a href="mailto:founder@heywrist.com">founder@heywrist.com</a> and we will action it. Deleting
        the app, or using <strong>Delete all my data</strong> inside it, removes everything held
        locally and in your iCloud database.
      </p>

      <h2>14. Changes</h2>
      <p>
        If this policy changes in a way that affects what is collected, we will update the date at
        the top and describe the change in the app&apos;s release notes.
      </p>

      <h2>15. Contact</h2>
      <p>
        Hey Wrist &mdash; <a href="mailto:founder@heywrist.com">founder@heywrist.com</a>
      </p>
    </PolicyLayout>
  );
}
