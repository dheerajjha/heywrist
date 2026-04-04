import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Watery - Privacy Policy",
  description: "Privacy policy for the Watery app by HeyWrist",
};

export default function WateryPrivacy() {
  return (
    <PolicyLayout appName="Watery" title="Privacy Policy">
      <p><strong>Effective Date:</strong> April 1, 2026</p>
      <p><strong>Last Updated:</strong> April 1, 2026</p>

      <p>
        Ranju Jha (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) built Watery as a smart
        hydration tracking application for iPhone and Apple Watch. This Privacy
        Policy describes what information Watery accesses, how it is processed,
        and what rights you have regarding your data.
      </p>
      <p>
        <strong>In short:</strong> Watery stores all data on your device. We
        have no servers and never see your hydration or health data.
      </p>

      <h2>1. Information We Access</h2>

      <h3>1.1 Apple HealthKit Data</h3>
      <p>
        Watery accesses data from Apple Health (HealthKit) only after you
        explicitly grant permission. We may request the following:
      </p>
      <p><strong>Read Access:</strong></p>
      <ul>
        <li><strong>Biological Sex</strong> — used to personalize hydration recommendations</li>
        <li><strong>Date of Birth</strong> — used to calculate age-appropriate goals</li>
        <li><strong>Body Weight</strong> — used to calculate your personalized daily water target</li>
        <li><strong>Dietary Water Intake</strong> — to sync with water logged from other apps</li>
        <li><strong>Dietary Caffeine Intake</strong> — to adjust hydration goals based on caffeine consumption</li>
        <li><strong>Activity &amp; Exercise</strong> — to adjust goals based on workout intensity</li>
      </ul>
      <p><strong>Write Access:</strong></p>
      <ul>
        <li><strong>Dietary Water Intake</strong> — to log your water consumption to Apple Health so it appears in the Health app and is available to other health apps you authorize</li>
      </ul>
      <p>
        You can grant or revoke any HealthKit permissions at any time from
        Settings → Privacy &amp; Security → Health on your iPhone.
      </p>
      <p>
        In accordance with Apple&apos;s HealthKit guidelines, health data is
        <strong> never</strong> used for advertising, marketing, or data mining,
        and is <strong>never</strong> transmitted to any third party.
      </p>

      <h3>1.2 Notifications</h3>
      <p>
        Watery may request permission to send local notifications to remind you
        to drink water throughout the day. Smart reminders are calculated
        on-device based on your schedule and hydration progress. These
        notifications are scheduled locally and do not involve any external
        push notification servers.
      </p>

      <h3>1.3 Siri Shortcuts</h3>
      <p>
        Watery supports Siri Shortcuts for hands-free drink logging (e.g.,
        &quot;Hey Siri, log a glass of water&quot;). Siri interaction data is processed
        by Apple on your device. We do not receive or store any Siri
        interaction data.
      </p>

      <h3>1.4 Widgets &amp; Dynamic Island</h3>
      <p>
        Watery provides Home Screen widgets, Lock Screen widgets, and Dynamic
        Island Live Activities to display your hydration progress. Widget data
        is stored in a shared app group on your device and is not transmitted
        externally.
      </p>

      <h3>1.5 Information We Do NOT Collect</h3>
      <p>Watery does not collect, access, or request:</p>
      <ul>
        <li>Your name, email address, or any personally identifiable information</li>
        <li>Location data</li>
        <li>Contacts, photos, microphone, or camera access</li>
        <li>Device identifiers for tracking purposes</li>
        <li>Browsing history or usage data outside the app</li>
      </ul>

      <h2>2. Data Stored on Your Device</h2>
      <p>Watery stores the following data locally:</p>
      <ul>
        <li><strong>Hydration profile</strong> — weight, activity level, climate, wake/sleep times</li>
        <li><strong>Drink logs</strong> — beverage type, amount, timestamp</li>
        <li><strong>Custom cups</strong> — user-defined container sizes and icons</li>
        <li><strong>Daily/weekly/monthly history</strong> — hydration trends and statistics</li>
        <li><strong>Streak data</strong> — consecutive days meeting your goal</li>
        <li><strong>App preferences</strong> — units (ml/oz), notification schedule, theme</li>
      </ul>

      <h2>3. Data Storage &amp; Security</h2>
      <p>
        All data is stored exclusively on your device using Apple&apos;s on-device
        storage frameworks. Watery operates <strong>no servers, no cloud
        storage, and no remote databases</strong>. There are no user accounts or
        sign-ups. Your data never leaves your device unless you manually export it.
      </p>

      <h2>4. Data Sharing</h2>
      <p>
        We do not share, sell, rent, trade, or disclose your hydration data,
        health information, or any personal data to any third party.
      </p>

      <h2>5. Third-Party Services &amp; SDKs</h2>
      <p>Watery does not include any third-party:</p>
      <ul>
        <li>Analytics or telemetry SDKs</li>
        <li>Advertising or ad-tracking frameworks</li>
        <li>Crash reporting services that transmit user data</li>
        <li>Social media SDKs</li>
      </ul>
      <p>
        Apple may collect aggregated, anonymized telemetry as part of standard
        App Store services. See{" "}
        <a href="https://www.apple.com/privacy/" target="_blank" rel="noopener noreferrer">
          Apple&apos;s Privacy Policy
        </a>{" "}
        for details.
      </p>

      <h2>6. Apple Watch Integration</h2>
      <p>
        Watery&apos;s Apple Watch app allows you to log drinks directly from your
        wrist with complications showing real-time progress. Data is
        synchronized between your iPhone and Apple Watch using Apple&apos;s
        WatchConnectivity framework — a direct, encrypted, device-to-device
        channel. No data passes through external servers.
      </p>

      <h2>7. Data Retention &amp; Deletion</h2>
      <p>You are in full control of your data:</p>
      <ul>
        <li>Delete individual drink logs from within the app</li>
        <li>Reset your hydration profile at any time</li>
        <li>Revoke HealthKit permissions from iOS Settings</li>
        <li>Delete all app data by uninstalling the app</li>
      </ul>
      <p>
        When you uninstall Watery, all locally stored data is permanently
        removed. HealthKit data you wrote remains in Apple Health and can be
        managed from the Health app.
      </p>

      <h2>8. Children&apos;s Privacy</h2>
      <p>
        Watery is not directed at children under the age of 13. We do not
        knowingly collect personal information from children.
      </p>

      <h2>9. International Users</h2>
      <p>
        All data remains on your device. We do not operate servers, so there
        are no cross-border data transfers.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with an updated effective date. Continued use of
        Watery after changes constitutes acceptance.
      </p>

      <h2>11. Contact Us</h2>
      <p>Questions about this Privacy Policy? Contact us at:</p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:support@heywrist.com">support@heywrist.com</a>
      </p>
      <p><strong>Developer:</strong> Ranju Jha</p>
    </PolicyLayout>
  );
}
