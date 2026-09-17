import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Quench - Privacy Policy",
  description: "Privacy policy for the Quench water & drink tracker app by HeyWrist",
};

export default function WateryPrivacy() {
  return (
    <PolicyLayout appName="Quench" title="Privacy Policy">
      <p><strong>Effective Date:</strong> September 18, 2026</p>
      <p><strong>Last Updated:</strong> September 18, 2026</p>

      <p>
        Hey Wrist (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) built Quench (formerly
        &quot;Watery&quot;) as a hydration tracking application for iPhone and Apple
        Watch. This Privacy Policy describes what information Quench accesses, how it
        is processed, and what rights you have regarding your data.
      </p>
      <p>
        <strong>In short:</strong> your hydration and health data stays on your device
        and in your own iCloud account. We never receive it. We do collect a small
        amount of anonymous, app-usage analytics — described in section 5 — to
        understand which features people use. Your drink log is never part of that.
      </p>

      <h2>1. Information We Access</h2>

      <h3>1.1 Apple HealthKit Data</h3>
      <p>
        Quench accesses data from Apple Health (HealthKit) only after you explicitly
        grant permission. We may request the following:
      </p>
      <p><strong>Read Access:</strong></p>
      <ul>
        <li><strong>Biological Sex</strong> — used to personalize hydration recommendations</li>
        <li><strong>Date of Birth</strong> — used to calculate age-appropriate goals</li>
        <li><strong>Body Weight</strong> — used to calculate your personalized daily water target</li>
        <li><strong>Step Count</strong> — used to adjust your goal on more active days</li>
        <li><strong>Workouts</strong> — used to adjust goals based on exercise intensity</li>
        <li><strong>Dietary Water Intake</strong> — to sync with water logged from other apps</li>
        <li><strong>Dietary Caffeine Intake</strong> — to adjust hydration goals based on caffeine consumption</li>
      </ul>
      <p><strong>Write Access:</strong></p>
      <ul>
        <li><strong>Dietary Water Intake</strong> — to log your water consumption to Apple Health so it appears in the Health app and is available to other health apps you authorize</li>
        <li><strong>Dietary Caffeine Intake</strong> — to log caffeine from drinks such as coffee and tea, if you leave caffeine syncing enabled</li>
      </ul>
      <p>
        You can grant or revoke any HealthKit permissions at any time from Settings →
        Privacy &amp; Security → Health on your iPhone.
      </p>
      <p>
        In accordance with Apple&apos;s HealthKit guidelines, health data is
        <strong> never</strong> used for advertising, marketing, or data mining, and is
        <strong> never</strong> transmitted to any third party — including to our
        analytics provider.
      </p>

      <h3>1.2 Notifications</h3>
      <p>
        Quench may request permission to send local notifications to remind you to
        drink water throughout the day. Smart reminders are calculated on-device based
        on your schedule and hydration progress. These notifications are scheduled
        locally and do not involve any external push notification servers.
      </p>

      <h3>1.3 Siri Shortcuts</h3>
      <p>
        Quench supports Siri Shortcuts for hands-free drink logging (e.g., &quot;Hey
        Siri, log a glass of water&quot;). Siri interaction data is processed by Apple
        on your device. We do not receive or store any Siri interaction data.
      </p>

      <h3>1.4 Widgets &amp; Dynamic Island</h3>
      <p>
        Quench provides Home Screen widgets, Lock Screen widgets, and Dynamic Island
        Live Activities to display your hydration progress. Widget data is stored in a
        shared app group on your device and is not transmitted externally.
      </p>

      <h3>1.5 Location &amp; Weather</h3>
      <p>
        If — and only if — you turn on the weather-adjusted goal feature, Quench asks
        for your location while you are using the app. Your approximate coordinates are
        sent to <strong>Apple&apos;s WeatherKit service</strong> to look up today&apos;s
        high temperature, so the app can raise your hydration goal on hot days. That
        lookup is handled by Apple under{" "}
        <a href="https://www.apple.com/legal/privacy/data/en/weather/" target="_blank" rel="noopener noreferrer">
          Apple&apos;s WeatherKit privacy terms
        </a>. We never store your location, never attach it to an analytics event, and
        never share it with anyone else. You can decline or revoke location access at
        any time in iOS Settings; the rest of the app works normally without it.
      </p>

      <h3>1.6 Information We Do NOT Collect</h3>
      <p>Quench does not collect, access, or request:</p>
      <ul>
        <li>Your name, email address, or any personally identifiable information</li>
        <li>Contacts, photos, microphone, or camera access</li>
        <li>The Advertising Identifier (IDFA), or any cross-app or cross-site tracking</li>
        <li>Browsing history or any activity outside the app</li>
        <li>Your drink log, weight, or any Apple Health data — none of this is ever sent to us or to any third party</li>
      </ul>

      <h2>2. Data Stored on Your Device</h2>
      <p>Quench stores the following data on your device:</p>
      <ul>
        <li><strong>Hydration profile</strong> — weight, activity level, climate, wake/sleep times</li>
        <li><strong>Drink logs</strong> — beverage type, amount, timestamp</li>
        <li><strong>Custom cups</strong> — user-defined container sizes and icons</li>
        <li><strong>Daily/weekly/monthly history</strong> — hydration trends and statistics</li>
        <li><strong>Streak data</strong> — consecutive days meeting your goal</li>
        <li><strong>App preferences</strong> — units (ml/oz), notification schedule, theme</li>
      </ul>

      <h2>3. Data Storage, iCloud &amp; Security</h2>
      <p>
        Your hydration data is stored on your device using Apple&apos;s on-device
        storage frameworks. There are no user accounts and no sign-ups, and we operate
        no servers that hold your hydration or health data.
      </p>
      <p>
        <strong>iCloud sync.</strong> If you enable iCloud sync, Quench mirrors your
        hydration database into <strong>your own private iCloud account</strong> using
        Apple&apos;s CloudKit framework, so your data appears on your other Apple
        devices. This data lives in your personal iCloud container. It is governed by{" "}
        <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">
          Apple&apos;s Privacy Policy
        </a>, and <strong>we have no ability to read it</strong>. You can turn iCloud
        sync off at any time in the app&apos;s settings, and you can remove the data
        from iCloud in iOS Settings → your name → iCloud → Manage Storage.
      </p>

      <h2>4. Data Sharing</h2>
      <p>
        We do not sell, rent, or trade your data to anyone, and we do not share it with
        data brokers or advertisers. We never share your hydration data or health
        information with any third party. The only data that leaves your device to
        reach us is the anonymous product-usage analytics described in section 5, which
        is processed on our behalf by the provider named there.
      </p>

      <h2>5. Analytics &amp; Third-Party Services</h2>
      <p>
        Quench includes one third-party SDK: <strong>Mixpanel</strong>, a product
        analytics service, which we use to understand which features are used and where
        people get stuck. It is active in the App Store version of the app.
      </p>
      <p><strong>What we send to Mixpanel:</strong></p>
      <ul>
        <li>Anonymous product-usage events — for example that a screen was opened, that onboarding was completed, that a drink was logged, or that the upgrade screen was shown</li>
        <li>Basic app and device context — app version, build number, device model, operating system version, and locale</li>
        <li>A random per-install identifier derived from Apple&apos;s Identifier for Vendor, used only to count returning users. It is not the IDFA, cannot be used to track you across other companies&apos; apps or websites, and is reset when you delete the app</li>
      </ul>
      <p><strong>What we never send to Mixpanel:</strong></p>
      <ul>
        <li>Any Apple Health data</li>
        <li>What you drank, how much, or the names of your custom cups</li>
        <li>Your location, weight, name, or email address</li>
      </ul>
      <p>
        In other words, we can see that a drink was logged; we cannot see what it was or
        how much. Mixpanel processes this data on our behalf as a data processor — see{" "}
        <a href="https://mixpanel.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">
          Mixpanel&apos;s Privacy Policy
        </a>. If you would prefer to send nothing at all, you can disable analytics
        collection for Quench in iOS Settings → Privacy &amp; Security → Analytics &amp;
        Improvements, or simply not install the app.
      </p>
      <p>Quench does <strong>not</strong> include any:</p>
      <ul>
        <li>Advertising or ad-tracking frameworks</li>
        <li>Social media SDKs</li>
        <li>Data-broker or audience-selling integrations</li>
      </ul>
      <p>
        Apple may also collect aggregated, anonymized telemetry as part of standard App
        Store services. See{" "}
        <a href="https://www.apple.com/privacy/" target="_blank" rel="noopener noreferrer">
          Apple&apos;s Privacy Policy
        </a>{" "}
        for details.
      </p>

      <h2>6. Purchases</h2>
      <p>
        Quench Pro is sold through Apple&apos;s In-App Purchase system. Payment is
        handled entirely by Apple — we never see your payment details. We receive only
        the anonymous subscription status needed to unlock Pro features on your device,
        and an anonymous event recording that a purchase or trial began.
      </p>

      <h2>7. Apple Watch Integration</h2>
      <p>
        Quench&apos;s Apple Watch app allows you to log drinks directly from your wrist
        with complications showing real-time progress. Data is synchronized between your
        iPhone and Apple Watch using Apple&apos;s WatchConnectivity framework — a
        direct, encrypted, device-to-device channel. No hydration data passes through
        our servers.
      </p>

      <h2>8. Data Retention &amp; Deletion</h2>
      <p>You are in full control of your data:</p>
      <ul>
        <li>Delete individual drink logs from within the app</li>
        <li>Reset your hydration profile at any time</li>
        <li>Revoke HealthKit or location permissions from iOS Settings</li>
        <li>Turn off iCloud sync, and remove the iCloud copy from iOS Settings</li>
        <li>Delete all app data by uninstalling the app</li>
      </ul>
      <p>
        When you uninstall Quench, all locally stored data is permanently removed, and
        the per-install analytics identifier is discarded. HealthKit data you wrote
        remains in Apple Health and can be managed from the Health app. To request
        deletion of historical analytics events, email us at the address in section 11.
      </p>

      <h2>9. Children&apos;s Privacy</h2>
      <p>
        Quench is not directed at children under the age of 13. We do not knowingly
        collect personal information from children.
      </p>

      <h2>10. International Users</h2>
      <p>
        Your hydration and health data remains on your device and in your own iCloud
        account. The anonymous analytics described in section 5 are processed on
        Mixpanel&apos;s infrastructure, which may be located in the United States, so
        that limited, non-identifying data may be transferred across borders.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be posted on
        this page with an updated effective date. Continued use of Quench after changes
        constitutes acceptance.
      </p>

      <h2>12. Contact Us</h2>
      <p>Questions about this Privacy Policy? Contact us at:</p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:founder@heywrist.com">founder@heywrist.com</a>
      </p>
      <p><strong>Developer:</strong> Hey Wrist</p>
    </PolicyLayout>
  );
}
