import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Quitwave - Privacy Policy",
  description: "Privacy policy for the Quitwave app by Hey Wrist",
};

export default function QuitwavePrivacy() {
  return (
    <PolicyLayout appName="Quitwave" slug="quitwave" title="Privacy Policy">
      <p><strong>Effective Date:</strong> September 18, 2026</p>
      <p><strong>Last Updated:</strong> September 18, 2026</p>

      <p>
        Hey Wrist (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) built Quitwave, an app for
        people who are stopping vaping or using other nicotine products. This policy describes
        exactly what the app stores, what it sends, and what it never touches. It describes the
        shipping build, not an intention.
      </p>
      <p>
        <strong>In short:</strong> there is no account and no sign-in. Everything you record in
        Quitwave &mdash; your quit details, every craving you log, every slip, and every setting
        &mdash; is written to the app&apos;s own storage on your iPhone and Apple Watch and is not
        sent to us or to anyone else. The only data that leaves the device is anonymous product
        analytics: which screens were opened, that a rescue started and finished, and whether a
        purchase succeeded. We do not sell data and we do not track you across other companies&apos;
        apps or websites.
      </p>

      <h2>1. What stays on your device</h2>
      <p>All of the following is stored locally, in a container shared between the Quitwave iPhone app, the Quitwave Watch app and Quitwave&apos;s widgets, and never transmitted:</p>
      <ul>
        <li>What you are quitting, your estimated daily spend, your estimated units per day, your quit date and your free-text &quot;why&quot;</li>
        <li>Every craving you log: when it started, how long the session ran, the intensity you set before and after, the trigger you tapped, and whether it ran on the phone or the Watch</li>
        <li>Every slip you record</li>
        <li>Your breathing pattern, haptic strength, reminder times and every other setting</li>
      </ul>
      <p>
        Quitwave has no account system, no login, no cloud sync and no iCloud mirror of this data.
        We cannot read it, and we could not produce a copy of it if you asked us to, because we do
        not have one.
      </p>

      <h2>2. What leaves your device</h2>
      <h3>2.1 Product analytics (Mixpanel)</h3>
      <p>
        Quitwave sends anonymous usage events to Mixpanel, Inc. so we can see whether the app works:
        which onboarding page people stop on, that a rescue was started and whether it ran to the
        end, which paywall was shown and from where, and whether a purchase, trial start or restore
        succeeded or failed.
      </p>
      <p>These events carry:</p>
      <ul>
        <li>An identifier derived from Apple&apos;s <em>identifierForVendor</em>, which is specific to this app on this device and is reset when you delete the app</li>
        <li>The event name and a small set of properties, for example the number of seconds a rescue ran or the reason a purchase failed</li>
        <li>Your device language, the language Quitwave rendered in, the app version and the build number</li>
      </ul>
      <p>
        <strong>What these events never carry:</strong> the contents of your craving log, your
        &quot;why&quot; text, your quit date, your spending figure, your name, your email address,
        your phone number, your contacts, your location, or any health information.
      </p>
      <p>
        Mixpanel&apos;s privacy policy is at{" "}
        <a href="https://mixpanel.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">mixpanel.com/legal/privacy-policy</a>.
      </p>

      <h3>2.2 Purchases</h3>
      <p>
        Subscriptions and the lifetime unlock are sold by Apple through the App Store. Apple
        processes the payment and tells the app whether you are entitled. We never see your payment
        details, and we do not operate a purchase server.
      </p>

      <h3>2.3 Development-only bug reporting</h3>
      <p>
        A bug-reporting SDK is compiled into the app but is started only in internal development
        builds, behind a debug compilation flag. It does not run in the version distributed on the
        App Store. Because that SDK references Apple&apos;s speech and microphone APIs, iOS requires
        the app to declare microphone and speech-recognition purpose strings; those strings say the
        same thing this paragraph does. <strong>Quitwave has no voice feature and never opens the
        microphone.</strong>
      </p>

      <h2>3. What Quitwave does not do</h2>
      <ul>
        <li>No advertising and no ad networks</li>
        <li>No cross-app or cross-site tracking, and no IDFA / App Tracking Transparency prompt, because we do not track</li>
        <li>No selling or sharing of personal information</li>
        <li>No HealthKit. Quitwave does not read from or write to the Health app</li>
        <li>No location access, no camera access, no contacts, no photo library</li>
        <li>No accounts, and therefore no passwords to lose</li>
      </ul>

      <h2>4. Notifications</h2>
      <p>
        If you allow it, Quitwave can send you a daily check-in and, once there is enough history
        for it to mean anything, a reminder shortly before the hours your own log says are hardest.
        These are scheduled locally on the device. There is no push server, and we do not receive a
        push token. You can turn them off in the app&apos;s Settings or in iOS Settings at any time.
      </p>

      <h2>5. On-device text generation</h2>
      <p>
        The weekly read on the Patterns tab is generated on your device. On iOS 26, where Apple&apos;s
        on-device language model is available, Quitwave hands it findings that were already computed
        from your local log and asks only for those sentences to be rewritten. On every other device
        a rule-based generator produces the same sentences from templates. Either way nothing is
        sent anywhere, and no third-party AI service is involved.
      </p>

      <h2>6. Children</h2>
      <p>
        Quitwave is rated 12+ and is not directed at children under 13. We do not knowingly collect
        personal information from children under 13. If you believe a child has used the app,
        deleting it removes everything it stored.
      </p>

      <h2>7. Deleting your data</h2>
      <p>
        Open Quitwave, go to the Settings tab, scroll to <strong>Your data</strong> and tap{" "}
        <strong>Delete all my data</strong>. That removes the craving log, the quit details and every
        preference from the device. Deleting the app does the same thing. Because there is no
        account and no server copy, there is nothing left for us to delete on your behalf.
      </p>
      <p>
        To have analytics events associated with your install identifier deleted, email{" "}
        <a href="mailto:founder@heywrist.com">founder@heywrist.com</a> from any address and say so;
        we will remove them from Mixpanel. You do not need an account to make that request.
      </p>

      <h2>8. Your rights</h2>
      <p>
        Depending on where you live, you may have rights to access, correct, delete or object to the
        processing of personal information, including under the GDPR and the CCPA. Since the only
        personal information we hold is the analytics described in section 2.1, those requests are
        handled by email at <a href="mailto:founder@heywrist.com">founder@heywrist.com</a>. We do not
        sell personal information, so there is nothing to opt out of.
      </p>

      <h2>9. Not medical information</h2>
      <p>
        Quitwave is not a medical app. It provides general information and a breathing exercise, not
        treatment, diagnosis or medical advice, and it collects no health data. Nothing in the app
        should be used in place of advice from a doctor or a pharmacist.
      </p>

      <h2>10. Changes</h2>
      <p>
        If this policy changes we will update the date at the top of this page and, where the change
        is material, note it in the app&apos;s release notes.
      </p>

      <h2>11. Contact</h2>
      <p>
        Hey Wrist &mdash; <a href="mailto:founder@heywrist.com">founder@heywrist.com</a>
      </p>
    </PolicyLayout>
  );
}
