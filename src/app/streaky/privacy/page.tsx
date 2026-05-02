import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Streaky - Privacy Policy",
  description: "Privacy policy for the Streaky app by HeyWrist",
};

export default function StreakyPrivacy() {
  return (
    <PolicyLayout appName="Streaky" title="Privacy Policy">
      <p><strong>Effective Date:</strong> April 1, 2026</p>
      <p><strong>Last Updated:</strong> April 1, 2026</p>

      <p>
        Hey Wrist (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) built Streaky as a premium habit
        tracking application for iPhone, iPad, and Apple Watch. This Privacy
        Policy describes what information Streaky accesses, how it is processed,
        and what rights you have regarding your data.
      </p>
      <p>
        <strong>In short:</strong> Your habit data stays on your device and
        syncs via your private iCloud account. We never see your data.
      </p>

      <h2>1. Information We Access</h2>

      <h3>1.1 Apple HealthKit Data</h3>
      <p>
        Streaky accesses data from Apple Health (HealthKit) only after you
        explicitly grant permission through the iOS system-level permissions
        dialog. We may request <strong>read-only</strong> access to the
        following categories to enable automatic habit completion:
      </p>
      <ul>
        <li><strong>Activity</strong> — steps, active calories, exercise minutes, stand hours</li>
        <li><strong>Fitness</strong> — walking/running distance, cycling distance, swimming distance, flights climbed</li>
        <li><strong>Mindfulness</strong> — mindful minutes</li>
        <li><strong>Sleep</strong> — sleep duration (for sleep-related habits)</li>
        <li><strong>Nutrition</strong> — water intake (for hydration habits)</li>
      </ul>
      <p>
        Streaky reads HealthKit data solely to check whether health-related
        habits are complete. You can revoke any or all HealthKit permissions at
        any time from Settings → Privacy &amp; Security → Health on your
        device. Streaky does not write data to HealthKit.
      </p>
      <p>
        In accordance with Apple&apos;s HealthKit guidelines, health data accessed
        through HealthKit is <strong>never</strong> used for advertising,
        marketing, or data mining, and is <strong>never</strong> transmitted to
        any third party.
      </p>

      <h3>1.2 iCloud Sync (CloudKit)</h3>
      <p>
        Streaky uses Apple&apos;s CloudKit to sync your habit data across your
        Apple devices. This data is stored in your <strong>private iCloud
        container</strong> and is accessible only to you through your Apple ID.
        We do not have access to your iCloud data.
      </p>
      <p>
        You can disable iCloud sync at any time from Settings → [your name] →
        iCloud → Streaky. Disabling sync will keep data local to each device.
        iCloud sync is subject to{" "}
        <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">
          Apple&apos;s Privacy Policy
        </a>.
      </p>

      <h3>1.3 Notifications</h3>
      <p>
        Streaky may request permission to send local notifications to remind you
        about your habits. These notifications are scheduled entirely on your
        device and do not involve any external push notification servers. No
        notification content is transmitted externally.
      </p>

      <h3>1.4 Siri Shortcuts</h3>
      <p>
        Streaky supports Siri Shortcuts for hands-free habit completion. Siri
        interaction data is processed by Apple on your device. We do not receive
        or store any Siri interaction data.
      </p>

      <h3>1.5 Information We Do NOT Collect</h3>
      <p>Streaky does not collect, access, or request:</p>
      <ul>
        <li>Your name, email address, or any personally identifiable information</li>
        <li>Location data</li>
        <li>Contacts, photos, calendar, or microphone access</li>
        <li>Device identifiers for tracking purposes</li>
        <li>Browsing history or usage data outside the app</li>
      </ul>

      <h2>2. Data Stored on Your Device</h2>
      <p>Streaky stores the following data locally:</p>
      <ul>
        <li><strong>Habit definitions</strong> — name, icon, color, schedule, frequency</li>
        <li><strong>Completion history</strong> — dates and times habits were completed</li>
        <li><strong>Streak data</strong> — current and best streaks, milestone tiers</li>
        <li><strong>Gamification data</strong> — XP, levels, narrative progress</li>
        <li><strong>App preferences</strong> — theme, notification settings, display options</li>
      </ul>

      <h2>3. Data Sharing</h2>
      <p>
        We do not share, sell, rent, trade, or disclose your habit data,
        completion history, or any personal information to any third party.
      </p>

      <h2>4. Third-Party Services &amp; SDKs</h2>
      <p>Streaky does not include any third-party:</p>
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

      <h2>5. Apple Watch &amp; Widgets</h2>
      <p>
        Streaky&apos;s Apple Watch app allows you to view and complete habits from
        your wrist. Home Screen and Lock Screen widgets display your habit
        progress. All widget and watch data is synced via your private iCloud
        account or local shared app group storage. No data passes through
        external servers.
      </p>

      <h2>6. Data Retention &amp; Deletion</h2>
      <p>You are in full control of your data:</p>
      <ul>
        <li>Delete individual habits or completion history from within the app</li>
        <li>Revoke HealthKit permissions at any time from iOS Settings</li>
        <li>Disable iCloud sync to keep data local only</li>
        <li>Delete all app data by uninstalling the app</li>
      </ul>
      <p>
        When you uninstall Streaky, all locally stored data is permanently
        removed. iCloud data can be removed from Settings → [your name] →
        iCloud → Manage Storage.
      </p>

      <h2>7. Children&apos;s Privacy</h2>
      <p>
        Streaky is not directed at children under the age of 13. We do not
        knowingly collect personal information from children.
      </p>

      <h2>8. International Users</h2>
      <p>
        Your data is stored on your device and in your personal iCloud account.
        We do not operate servers, so there are no cross-border data transfers
        initiated by us.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with an updated effective date. Continued use of
        Streaky after changes constitutes acceptance.
      </p>

      <h2>10. Contact Us</h2>
      <p>Questions about this Privacy Policy? Contact us at:</p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:founder@heywrist.com">founder@heywrist.com</a>
      </p>
      <p><strong>Developer:</strong> Hey Wrist</p>
    </PolicyLayout>
  );
}
