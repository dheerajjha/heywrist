import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "AutoSleepy - Privacy Policy",
  description: "Privacy policy for the AutoSleepy app by HeyWrist",
};

export default function AutoSleepyPrivacy() {
  return (
    <PolicyLayout appName="AutoSleepy" title="Privacy Policy">
      <p><strong>Effective Date:</strong> April 1, 2026</p>
      <p><strong>Last Updated:</strong> April 1, 2026</p>

      <p>
        Hey Wrist (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) built AutoSleepy as a
        privacy-first sleep tracking application for iPhone and Apple Watch.
        This Privacy Policy describes what information AutoSleepy accesses, how
        it is processed, and what rights you have regarding your data.
      </p>
      <p>
        <strong>In short:</strong> AutoSleepy follows a zero-cloud architecture.
        We do not collect, transmit, or store any of your personal or health
        data on any server. All data remains on your device.
      </p>

      <h2>1. Information We Access</h2>

      <h3>1.1 Apple HealthKit Data</h3>
      <p>
        AutoSleepy accesses data from Apple Health (HealthKit) only after you
        explicitly grant permission through the iOS system-level permissions
        dialog. We may request read access to the following categories of health
        data in order to provide sleep tracking, analysis, and insights:
      </p>
      <ul>
        <li><strong>Sleep Analysis</strong> — sleep stages (REM, Core, Deep, Awake), sleep duration, time in bed</li>
        <li><strong>Heart Rate</strong> — resting and sleeping heart rate, heart rate variability (HRV)</li>
        <li><strong>Respiratory Rate</strong> — breathing rate during sleep</li>
        <li><strong>Blood Oxygen Saturation</strong> — SpO2 levels recorded during sleep</li>
        <li><strong>Wrist Temperature</strong> — baseline deviations recorded by Apple Watch</li>
        <li><strong>Activity &amp; Step Count</strong> — used to detect bedtime and wake time</li>
      </ul>
      <p>
        AutoSleepy reads HealthKit data in a <strong>read-only manner</strong> based
        on the permissions you grant. You can revoke any or all HealthKit
        permissions at any time from Settings → Privacy &amp; Security → Health
        on your iPhone. AutoSleepy does not write data back to HealthKit unless
        you explicitly enable this in the app&apos;s settings.
      </p>
      <p>
        In accordance with Apple&apos;s HealthKit guidelines, health data accessed
        through HealthKit is <strong>never</strong> used for advertising,
        marketing, or data mining purposes, and is <strong>never</strong>
        transmitted to any third party.
      </p>

      <h3>1.2 Apple HomeKit Data</h3>
      <p>
        AutoSleepy integrates with Apple HomeKit to automate smart home devices
        based on your sleep and wake schedule (e.g., adjusting lights, thermostat,
        or scenes). HomeKit data is processed entirely on your device through
        Apple&apos;s HomeKit framework. We do not access, log, or store any
        information about your HomeKit devices, scenes, or home configuration.
      </p>

      <h3>1.3 Notifications &amp; Siri Shortcuts</h3>
      <p>
        AutoSleepy may request permission to send local notifications (e.g.,
        smart alarm, bedtime reminders) and to register Siri Shortcuts for
        hands-free control. These features are processed entirely on your device.
        No notification content or Siri interaction data is transmitted externally.
      </p>

      <h3>1.4 Information We Do NOT Collect</h3>
      <p>AutoSleepy does not collect, access, or request:</p>
      <ul>
        <li>Your name, email address, or any personally identifiable information</li>
        <li>Location data (GPS, Wi-Fi, or cellular)</li>
        <li>Contacts, photos, or calendar data</li>
        <li>Device identifiers for tracking purposes</li>
        <li>Browsing history or usage data outside the app</li>
      </ul>

      <h2>2. How Your Data Is Stored</h2>
      <p>
        AutoSleepy follows a <strong>zero-cloud architecture</strong>. All
        sleep data, health metrics, AI-generated insights, trend history, and
        user preferences are stored exclusively on your device using Apple&apos;s
        on-device storage frameworks (SwiftData / Core Data).
      </p>
      <p>
        There are no user accounts, no sign-ups, no registration, and no
        server-side databases. We operate no backend infrastructure for user
        data. Your data never leaves your device unless you manually choose to
        export it.
      </p>

      <h2>3. AI-Powered Insights</h2>
      <p>
        AutoSleepy uses on-device intelligence (Core ML, Create ML) to generate
        sleep insights, trend analysis, and personalized recommendations. All AI
        processing occurs locally on your device. No health or sleep data is
        sent to external AI services, cloud APIs, or remote servers for
        processing.
      </p>

      <h2>4. Data Sharing</h2>
      <p>
        We do not share, sell, rent, trade, or disclose your personal data or
        health information to any third party. This is absolute and without
        exception. There is no data to share because we never have access to it.
      </p>

      <h2>5. Third-Party Services &amp; SDKs</h2>
      <p>
        AutoSleepy does not include any third-party:
      </p>
      <ul>
        <li>Analytics or telemetry SDKs</li>
        <li>Advertising or ad-tracking frameworks</li>
        <li>Crash reporting services that transmit user data</li>
        <li>Social media SDKs</li>
        <li>Attribution or fingerprinting libraries</li>
      </ul>
      <p>
        Apple may collect aggregated, anonymized telemetry data about app usage
        (such as download counts and crash logs) as part of standard App Store
        and TestFlight services. This data is provided to us only in aggregate
        form and cannot be used to identify individual users. See{" "}
        <a href="https://www.apple.com/privacy/" target="_blank" rel="noopener noreferrer">
          Apple&apos;s Privacy Policy
        </a>{" "}
        for details.
      </p>

      <h2>6. Apple Watch Integration</h2>
      <p>
        AutoSleepy includes a standalone Apple Watch app that collects sleep
        data via on-device sensors. All data collected by the watch app remains
        on-device and syncs only with the paired iPhone via Apple&apos;s secure
        Watch Connectivity framework. Data is encrypted in transit between
        devices.
      </p>

      <h2>7. Data Retention &amp; Deletion</h2>
      <p>
        Since all data is stored locally on your device, you are in full
        control of your data at all times. You can:
      </p>
      <ul>
        <li>Delete individual sleep records from within the app</li>
        <li>Revoke HealthKit permissions at any time from iOS Settings</li>
        <li>Delete all app data by uninstalling the app</li>
      </ul>
      <p>
        When you uninstall AutoSleepy, all locally stored data is permanently
        removed from your device. We retain no copies because we never had
        access to your data.
      </p>

      <h2>8. Children&apos;s Privacy</h2>
      <p>
        AutoSleepy is not directed at children under the age of 13 (or the
        applicable age of digital consent in your jurisdiction). We do not
        knowingly collect personal information from children. If you believe a
        child has used the app, please note that no data is transmitted to us
        regardless of the user&apos;s age.
      </p>

      <h2>9. International Users</h2>
      <p>
        Because AutoSleepy does not transmit any data to external servers, there
        are no cross-border data transfers. All data remains on your device
        under your control, regardless of your location.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will
        be posted on this page with an updated effective date. We encourage you
        to review this page periodically. Continued use of AutoSleepy after
        changes constitutes acceptance of the updated policy.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        If you have any questions, concerns, or requests regarding this Privacy
        Policy or your data, please contact us at:
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:support@heywrist.com">support@heywrist.com</a>
      </p>
      <p>
        <strong>Developer:</strong> Hey Wrist
      </p>
    </PolicyLayout>
  );
}
