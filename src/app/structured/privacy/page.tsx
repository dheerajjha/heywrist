import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Structured - Privacy Policy",
  description: "Privacy policy for the Structured app by HeyWrist",
};

export default function StructuredPrivacy() {
  return (
    <PolicyLayout appName="Structured" title="Privacy Policy">
      <p><strong>Effective Date:</strong> April 5, 2026</p>
      <p><strong>Last Updated:</strong> April 5, 2026</p>

      <p>
        Hey Wrist (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) built Structured as a visual
        daily planner application for iPhone and Apple Watch. This Privacy
        Policy describes what information Structured accesses, how it is
        processed, and what rights you have regarding your data.
      </p>
      <p>
        <strong>In short:</strong> Structured stores your data on your device
        and syncs via iCloud. We have no servers of our own, no accounts, and
        no tracking.
      </p>

      <h2>1. Information We Access</h2>

      <h3>1.1 Calendar (EventKit) — Optional, Pro</h3>
      <p>
        Structured can optionally import events from your Apple Calendar using
        EventKit. This requires your explicit permission through the iOS
        system-level dialog. Imported calendar events are displayed as
        read-only blocks on your timeline. We do not modify, delete, or export
        your calendar data. You can revoke calendar access at any time from
        Settings → Privacy &amp; Security → Calendars.
      </p>

      <h3>1.2 Reminders (EventKit) — Optional, Pro</h3>
      <p>
        Structured can optionally import tasks from Apple Reminders. Imported
        reminders appear in your inbox for scheduling. This requires separate
        permission through the iOS system dialog. You can revoke access from
        Settings → Privacy &amp; Security → Reminders.
      </p>

      <h3>1.3 Notifications</h3>
      <p>
        Structured may request permission to send local notifications for
        upcoming task alerts and reminders. Notifications are scheduled
        entirely on-device and do not involve external push notification
        servers.
      </p>

      <h3>1.4 iCloud Sync (CloudKit)</h3>
      <p>
        Structured uses Apple&apos;s CloudKit (via SwiftData) to sync your
        tasks, subtasks, recurrence rules, and preferences across your
        devices. This data is stored in your private iCloud container — only
        you can access it. We cannot read, access, or decrypt your iCloud
        data. Sync is governed by{" "}
        <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">
          Apple&apos;s Privacy Policy
        </a>.
      </p>

      <h3>1.5 Siri Shortcuts (AppIntents)</h3>
      <p>
        Structured supports Siri Shortcuts for hands-free task creation and
        timeline access (e.g., &quot;Create a task in Structured&quot;). Siri
        interaction data is processed by Apple on your device. We do not
        receive or store any Siri interaction data.
      </p>

      <h3>1.6 Information We Do NOT Collect</h3>
      <p>Structured does not collect, access, or request:</p>
      <ul>
        <li>Your name, email address, or any personally identifiable information</li>
        <li>Location data</li>
        <li>Contacts, photos, microphone, or camera access</li>
        <li>Health or fitness data</li>
        <li>Device identifiers for tracking purposes</li>
        <li>Browsing history or usage data outside the app</li>
      </ul>

      <h2>2. Data Stored on Your Device</h2>
      <p>Structured stores the following data locally using SwiftData:</p>
      <ul>
        <li><strong>Tasks</strong> — title, start time, duration, date, color, icon, notes, completion status</li>
        <li><strong>Subtasks</strong> — title, completion status, ordering</li>
        <li><strong>Recurrence rules</strong> — frequency, interval, days of week, end date</li>
        <li><strong>Inbox items</strong> — unscheduled tasks awaiting placement</li>
        <li><strong>Energy entries</strong> — daily energy level (1–5 scale)</li>
        <li><strong>App preferences</strong> — appearance, notification settings, widget configuration</li>
      </ul>

      <h2>3. Data Storage &amp; Security</h2>
      <p>
        All data is stored on your device and optionally synced via your
        private iCloud account. Structured operates{" "}
        <strong>no proprietary servers, no cloud databases, and no remote
        analytics endpoints</strong>. No user accounts or sign-ups are
        required. Your data never passes through our infrastructure.
      </p>

      <h2>4. Data Sharing</h2>
      <p>
        We do not share, sell, rent, trade, or disclose your task data,
        schedule information, or any personal data to any third party.
      </p>

      <h2>5. Third-Party Services &amp; SDKs</h2>
      <p>Structured does not include any third-party:</p>
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

      <h2>6. Widgets &amp; Live Activities</h2>
      <p>
        Structured provides home screen widgets, lock screen widgets, and
        StandBy mode widgets via WidgetKit. Widgets read from a shared App
        Group container on your device — no network requests are made. Live
        Activities display active task progress on your Lock Screen and
        Dynamic Island using ActivityKit, entirely on-device.
      </p>

      <h2>7. Apple Watch Integration</h2>
      <p>
        Structured&apos;s Apple Watch app displays your timeline and allows
        task completion from your wrist. Data syncs between Watch and iPhone
        via Apple&apos;s WatchConnectivity framework and shared iCloud
        container — no data passes through external servers. Watch
        complications show upcoming tasks using WidgetKit.
      </p>

      <h2>8. Data Retention &amp; Deletion</h2>
      <p>You are in full control of your data:</p>
      <ul>
        <li>Delete individual tasks, clear completed tasks, or reset all data from within the app</li>
        <li>Revoke Calendar or Reminders permissions from iOS Settings</li>
        <li>Manage iCloud storage from Settings → [your name] → iCloud</li>
        <li>Delete all app data by uninstalling the app</li>
      </ul>
      <p>
        When you uninstall Structured, all locally stored data is permanently
        removed. iCloud-synced data persists in your iCloud account and can
        be managed from iCloud settings or by reinstalling the app.
      </p>

      <h2>9. Children&apos;s Privacy</h2>
      <p>
        Structured is not directed at children under the age of 13. We do not
        knowingly collect personal information from children.
      </p>

      <h2>10. International Users</h2>
      <p>
        Your data remains on your device and in your private iCloud account.
        We do not operate servers, so there are no cross-border data transfers
        by us. iCloud data transfers are governed by Apple&apos;s policies.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with an updated effective date. Continued use of
        Structured after changes constitutes acceptance.
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
