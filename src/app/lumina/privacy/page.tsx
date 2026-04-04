import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Lumina - Privacy Policy",
  description: "Privacy policy for the Lumina app by HeyWrist",
};

export default function LuminaPrivacy() {
  return (
    <PolicyLayout appName="Lumina" title="Privacy Policy">
      <p><strong>Effective Date:</strong> April 1, 2026</p>
      <p><strong>Last Updated:</strong> April 1, 2026</p>

      <p>
        Ranju Jha (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) built Lumina as a premium focus
        and study timer application for iPhone and Apple Watch. This Privacy
        Policy describes what information Lumina accesses, how it is processed,
        and what rights you have regarding your data.
      </p>
      <p>
        <strong>In short:</strong> Lumina stores all data on your device. We
        have no servers, no accounts, and no tracking.
      </p>

      <h2>1. Information We Access</h2>

      <h3>1.1 Calendar (EventKit) — Optional</h3>
      <p>
        Lumina can optionally sync completed focus sessions to your Apple
        Calendar using EventKit. This requires your explicit permission through
        the iOS system-level dialog. Calendar events are written locally to
        your device&apos;s calendar and are not transmitted to any external
        service. You can revoke calendar access at any time from Settings →
        Privacy &amp; Security → Calendars.
      </p>

      <h3>1.2 Microphone — Optional</h3>
      <p>
        Lumina may request microphone access solely for ambient sound
        generation and audio-reactive visualizations via AVAudioEngine. No
        audio is recorded, stored, or transmitted. The microphone is used
        only as a real-time input for sound processing — no audio data
        persists after you close the app. You can revoke microphone access at
        any time from iOS Settings.
      </p>

      <h3>1.3 Siri Shortcuts</h3>
      <p>
        Lumina supports Siri Shortcuts to start focus sessions hands-free
        (e.g., &quot;Hey Siri, start a focus session&quot;). Siri interaction data is
        processed by Apple on your device. We do not receive or store any Siri
        interaction data.
      </p>

      <h3>1.4 Notifications</h3>
      <p>
        Lumina may request permission to send local notifications for session
        completion alerts, break reminders, and daily focus reminders.
        Notifications are scheduled entirely on-device and do not involve
        external push notification servers.
      </p>

      <h3>1.5 Information We Do NOT Collect</h3>
      <p>Lumina does not collect, access, or request:</p>
      <ul>
        <li>Your name, email address, or any personally identifiable information</li>
        <li>Location data</li>
        <li>Contacts, photos, or health/fitness data</li>
        <li>Device identifiers for tracking purposes</li>
        <li>Browsing history or usage data outside the app</li>
      </ul>

      <h2>2. Data Stored on Your Device</h2>
      <p>Lumina stores the following data locally using SwiftData:</p>
      <ul>
        <li><strong>Focus sessions</strong> — duration, type (Pomodoro, deep work, custom), completion status</li>
        <li><strong>Daily/weekly statistics</strong> — total focus time, session counts, streaks</li>
        <li><strong>Companion state</strong> — your virtual companion&apos;s mood, level, and interactions</li>
        <li><strong>Constellation progress</strong> — stars earned, constellations unlocked</li>
        <li><strong>Gamification data</strong> — XP, achievements, narrative progress</li>
        <li><strong>App preferences</strong> — timer settings, ambient sound preferences, theme, notification schedule</li>
      </ul>

      <h2>3. Data Storage &amp; Security</h2>
      <p>
        All data is stored exclusively on your device. Lumina operates{" "}
        <strong>no servers, no cloud storage, and no remote databases</strong>.
        No user accounts or sign-ups are required. Your data never leaves your
        device unless you manually export it.
      </p>

      <h2>4. Data Sharing</h2>
      <p>
        We do not share, sell, rent, trade, or disclose your focus session
        data, statistics, or any personal data to any third party.
      </p>

      <h2>5. Third-Party Services &amp; SDKs</h2>
      <p>Lumina does not include any third-party:</p>
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
        Lumina&apos;s Apple Watch app operates as a standalone focus timer with
        haptic interval alerts and complications showing focus progress. Data
        stored on the Watch remains local. Communication between Watch and
        iPhone uses Apple&apos;s WatchConnectivity — no data passes through
        external servers.
      </p>

      <h2>7. Data Retention &amp; Deletion</h2>
      <p>You are in full control of your data:</p>
      <ul>
        <li>Reset focus history, companion, or constellation progress from within the app</li>
        <li>Revoke calendar or microphone permissions from iOS Settings</li>
        <li>Delete all app data by uninstalling the app</li>
      </ul>
      <p>
        When you uninstall Lumina, all locally stored data is permanently
        removed. Calendar events you created remain in your calendar and can
        be managed from the Calendar app.
      </p>

      <h2>8. Children&apos;s Privacy</h2>
      <p>
        Lumina is not directed at children under the age of 13. We do not
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
        Lumina after changes constitutes acceptance.
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
