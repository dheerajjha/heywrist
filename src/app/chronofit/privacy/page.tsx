import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "ChronoFit - Privacy Policy",
  description: "Privacy policy for the ChronoFit app by HeyWrist",
};

export default function ChronoFitPrivacy() {
  return (
    <PolicyLayout appName="ChronoFit" title="Privacy Policy">
      <p><strong>Effective Date:</strong> April 1, 2026</p>
      <p><strong>Last Updated:</strong> April 1, 2026</p>

      <p>
        Hey Wrist (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) built ChronoFit as a narrative
        fitness timer application for iPhone and Apple Watch. This Privacy
        Policy describes what information ChronoFit accesses, how it is
        processed, and what rights you have regarding your data.
      </p>
      <p>
        <strong>In short:</strong> ChronoFit stores all data on your device.
        We have no servers, no accounts, and no tracking.
      </p>

      <h2>1. Information We Access</h2>

      <h3>1.1 Apple HealthKit Data</h3>
      <p>
        ChronoFit may request access to Apple HealthKit to save workout data
        from your timer sessions. With your permission, we may request:
      </p>
      <p><strong>Write Access:</strong></p>
      <ul>
        <li><strong>Workouts</strong> — to save completed interval training sessions (type, duration, calories)</li>
        <li><strong>Active Energy Burned</strong> — to log calories burned during workouts</li>
        <li><strong>Heart Rate</strong> — to record heart rate data during Apple Watch workouts</li>
      </ul>
      <p><strong>Read Access:</strong></p>
      <ul>
        <li><strong>Heart Rate</strong> — to display real-time heart rate during workouts on Apple Watch</li>
        <li><strong>Active Energy</strong> — to display calorie burn progress</li>
      </ul>
      <p>
        HealthKit access requires your explicit permission through iOS
        system-level prompts. You can revoke permissions at any time from
        Settings → Privacy &amp; Security → Health. In accordance with
        Apple&apos;s HealthKit guidelines, health data is <strong>never</strong>{" "}
        used for advertising, marketing, or data mining, and is{" "}
        <strong>never</strong> transmitted to any third party.
      </p>

      <h3>1.2 Notifications</h3>
      <p>
        ChronoFit may request permission to send local notifications for
        workout reminders and timer alerts. Notifications are scheduled
        on-device and do not involve external servers.
      </p>

      <h3>1.3 Motion &amp; Haptics</h3>
      <p>
        ChronoFit uses haptic feedback during workouts to signal interval
        transitions. No motion or sensor data is collected or stored.
      </p>

      <h3>1.4 Information We Do NOT Collect</h3>
      <p>ChronoFit does not collect, access, or request:</p>
      <ul>
        <li>Your name, email address, or any personally identifiable information</li>
        <li>Location data</li>
        <li>Contacts, photos, microphone, or camera access</li>
        <li>Device identifiers for tracking purposes</li>
        <li>Browsing history or usage data outside the app</li>
      </ul>

      <h2>2. Data Stored on Your Device</h2>
      <p>ChronoFit stores the following data locally:</p>
      <ul>
        <li><strong>Workout history</strong> — completed sessions, duration, type</li>
        <li><strong>Timer configurations</strong> — custom interval setups, presets</li>
        <li><strong>Gamification data</strong> — XP, levels, streaks, achievements</li>
        <li><strong>Story progress</strong> — narrative chapter unlocks and milestones</li>
        <li><strong>Statistics</strong> — total workouts, calories, personal records</li>
        <li><strong>App preferences</strong> — sound/haptic settings, theme, display options</li>
      </ul>

      <h2>3. Data Storage &amp; Security</h2>
      <p>
        All data is stored exclusively on your device. ChronoFit operates{" "}
        <strong>no servers, no cloud storage, and no remote databases</strong>.
        No user accounts or sign-ups are required. Your data never leaves your
        device.
      </p>

      <h2>4. Data Sharing</h2>
      <p>
        We do not share, sell, rent, trade, or disclose your workout data,
        health information, or any personal data to any third party.
      </p>

      <h2>5. Third-Party Services &amp; SDKs</h2>
      <p>ChronoFit does not include any third-party:</p>
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
        ChronoFit&apos;s Apple Watch app operates as a standalone workout timer
        with real-time heart rate monitoring, haptic coaching, and workout
        session tracking via Apple&apos;s HealthKit Workout API. Data stored on
        the Watch remains local. Communication between Watch and iPhone uses
        Apple&apos;s WatchConnectivity — no data passes through external servers.
      </p>

      <h2>7. Data Retention &amp; Deletion</h2>
      <p>You are in full control of your data:</p>
      <ul>
        <li>Reset workout history, XP, or story progress from within the app</li>
        <li>Revoke HealthKit permissions from iOS Settings</li>
        <li>Delete all app data by uninstalling the app</li>
      </ul>
      <p>
        When you uninstall ChronoFit, all locally stored data is permanently
        removed. HealthKit workout data you wrote remains in Apple Health and
        can be managed from the Health app.
      </p>

      <h2>8. Children&apos;s Privacy</h2>
      <p>
        ChronoFit is not directed at children under the age of 13. We do not
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
        ChronoFit after changes constitutes acceptance.
      </p>

      <h2>11. Contact Us</h2>
      <p>Questions about this Privacy Policy? Contact us at:</p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:founder@heywrist.com">founder@heywrist.com</a>
      </p>
      <p><strong>Developer:</strong> Hey Wrist</p>
    </PolicyLayout>
  );
}
