import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Structured - Terms & Conditions",
  description: "Terms and conditions for the Structured app by HeyWrist",
};

export default function StructuredTerms() {
  return (
    <PolicyLayout appName="Structured" title="Terms & Conditions">
      <p><strong>Effective Date:</strong> April 5, 2026</p>
      <p><strong>Last Updated:</strong> April 5, 2026</p>

      <p>
        These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of the
        Structured application (&quot;the App&quot;) developed by Hey Wrist
        (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By downloading,
        installing, or using Structured, you agree to be bound by these Terms.
      </p>

      <h2>1. Description of Service</h2>
      <p>
        Structured is a visual daily planner application for iPhone and Apple
        Watch featuring a scrollable timeline, task management with subtasks,
        inbox with drag-to-schedule, recurring tasks, Focus Mode with Live
        Activities, weekly view, widgets, iCloud sync, Calendar and Reminders
        integration, Siri Shortcuts, and Apple Watch complications.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 13 years of age to use the App. By using
        Structured, you represent that you meet this requirement.
      </p>

      <h2>3. Productivity Disclaimer</h2>
      <p>
        Structured is a planning and productivity tool provided for{" "}
        <strong>personal organization purposes only</strong>. We do not
        guarantee that using the App will improve your productivity,
        time management, or task completion rate. Results vary by individual.
        The App is not a substitute for professional time management advice.
      </p>

      <h2>4. Calendar &amp; Reminders Integration</h2>
      <p>
        If you grant access, Structured imports events from Apple Calendar and
        tasks from Apple Reminders as read-only data for display purposes. We
        are not responsible for inaccuracies in imported data, missed
        notifications from external calendars, or conflicts between imported
        events and your scheduled tasks. You can revoke access at any time
        from iOS Settings.
      </p>

      <h2>5. iCloud Sync</h2>
      <p>
        Structured uses Apple&apos;s CloudKit for cross-device sync. You are
        responsible for maintaining adequate iCloud storage. We are not liable
        for data loss due to iCloud outages, sync conflicts, or insufficient
        storage. iCloud usage is governed by Apple&apos;s terms of service.
      </p>

      <h2>6. In-App Purchases &amp; Subscriptions</h2>
      <p>
        Structured offers premium features through subscriptions or one-time
        purchases, including recurring tasks, calendar import, replan view,
        custom notifications, and premium customization. All purchases are
        processed by Apple and subject to Apple&apos;s{" "}
        <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer">
          Standard EULA
        </a>.
      </p>
      <ul>
        <li>Subscriptions auto-renew unless canceled 24 hours before the billing period ends</li>
        <li>Manage or cancel subscriptions from Settings → [your name] → Subscriptions</li>
        <li>All sales are final. Refunds are handled by Apple.</li>
        <li>Prices may vary by region.</li>
      </ul>

      <h2>7. User Content &amp; Data Ownership</h2>
      <p>
        You retain full ownership of all tasks, notes, subtasks, and other
        content you create in Structured. We do not claim any rights to your
        content. Your data is stored locally and in your private iCloud
        account — we cannot access it.
      </p>

      <h2>8. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Reverse engineer, decompile, or disassemble the App</li>
        <li>Attempt to bypass subscription restrictions or manipulate app data</li>
        <li>Use the App for any unlawful purpose</li>
        <li>Redistribute or sublicense the App</li>
      </ul>

      <h2>9. Intellectual Property</h2>
      <p>
        All design, code, graphics, icons, animations, and other elements of
        Structured are the intellectual property of Hey Wrist. You are granted
        a limited, non-exclusive, non-transferable license for personal use.
      </p>

      <h2>10. Disclaimer of Warranties</h2>
      <p>
        The App is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot;
        basis without warranties of any kind. We do not guarantee notification
        delivery accuracy, iCloud sync reliability, widget update frequency,
        or uninterrupted operation.
      </p>

      <h2>11. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Hey Wrist shall not be liable
        for any indirect, incidental, special, consequential, or punitive
        damages arising from your use of the App, including:
      </p>
      <ul>
        <li>Loss of task data, schedules, or planning information</li>
        <li>Missed notifications or appointment reminders</li>
        <li>iCloud sync failures or data conflicts</li>
        <li>Inaccurate imported calendar or reminder data</li>
      </ul>

      <h2>12. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Hey Wrist from any claims
        arising from your use of the App or violation of these Terms.
      </p>

      <h2>13. Termination</h2>
      <p>
        You may stop using the App at any time by uninstalling it. We reserve
        the right to discontinue or modify the App without prior notice.
      </p>

      <h2>14. Changes to These Terms</h2>
      <p>
        We may modify these Terms at any time. Continued use after changes
        constitutes acceptance.
      </p>

      <h2>15. Governing Law</h2>
      <p>
        These Terms shall be governed by the laws of the jurisdiction in which
        the developer resides.
      </p>

      <h2>16. Contact Us</h2>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:founder@heywrist.com">founder@heywrist.com</a>
      </p>
      <p><strong>Developer:</strong> Hey Wrist</p>
    </PolicyLayout>
  );
}
