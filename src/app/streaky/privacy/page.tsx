import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Streaky - Privacy Policy",
  description: "Privacy policy for the Streaky app by HeyWrist",
};

export default function StreakyPrivacy() {
  return (
    <PolicyLayout appName="Streaky" title="Privacy Policy">
      <p>
        <strong>Effective Date:</strong> March 19, 2026
      </p>
      <p>
        Ranju Jha (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) built Streaky as a habit
        tracking app for iPhone and Apple Watch. This Privacy Policy explains
        how Streaky handles your information.
      </p>

      <h2>Information We Access</h2>
      <p>
        Streaky may access the following data from Apple HealthKit with your
        explicit permission (read-only):
      </p>
      <ul>
        <li>Steps</li>
        <li>Walking + running distance</li>
        <li>Active calories burned</li>
        <li>Exercise time</li>
        <li>Stand minutes</li>
        <li>Flights climbed</li>
        <li>Cycling distance</li>
        <li>Swimming distance</li>
      </ul>
      <p>
        This data is used solely to automatically track health-related habits.
        Streaky does not write any data to HealthKit.
      </p>

      <h2>What We Store</h2>
      <p>Streaky stores the following data on your device:</p>
      <ul>
        <li>Habit definitions (name, icon, color, schedule)</li>
        <li>Habit completions and streaks</li>
        <li>User preferences (theme, notifications)</li>
      </ul>

      <h2>iCloud Sync</h2>
      <p>
        Streaky uses Apple&apos;s CloudKit to sync your habit data across your
        Apple devices. This data is stored in your private iCloud account and is
        not accessible to us or any third party. iCloud sync is managed entirely
        by Apple&apos;s infrastructure and is subject to{" "}
        <a
          href="https://www.apple.com/legal/privacy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apple&apos;s Privacy Policy
        </a>
        .
      </p>

      <h2>Notifications</h2>
      <p>
        Streaky may send local notifications to remind you about your habits.
        These notifications are scheduled on your device and do not involve any
        external servers.
      </p>

      <h2>No Third-Party Services</h2>
      <ul>
        <li>No analytics or crash-reporting SDKs are used.</li>
        <li>No advertising networks are included.</li>
        <li>No third-party SDKs are included in the app.</li>
        <li>No accounts or sign-ups are required.</li>
      </ul>

      <h2>Data Sharing</h2>
      <p>
        We do not share, sell, rent, or disclose your personal data to any third
        party.
      </p>

      <h2>Apple Watch</h2>
      <p>
        The Streaky Apple Watch companion app displays your habits and allows
        you to mark them complete. Data is synced across devices via your
        private iCloud account using CloudKit.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        Streaky is not directed at children under the age of 13. We do not
        knowingly collect personal information from children.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated effective date.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at{" "}
        <a href="mailto:support@heywrist.com">support@heywrist.com</a>.
      </p>
    </PolicyLayout>
  );
}
