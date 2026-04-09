import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Dexter Notes - Privacy Policy",
  description: "Privacy policy for the Dexter Notes app by HeyWrist",
};

export default function NotesPrivacy() {
  return (
    <PolicyLayout appName="Dexter Notes" title="Privacy Policy">
      <p><strong>Effective Date:</strong> April 1, 2026</p>
      <p><strong>Last Updated:</strong> April 1, 2026</p>

      <p>
        Ranju Jha (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) built Dexter Notes as an AI-powered
        notes, tasks, and personal CRM application for iPhone and Apple Watch.
        This Privacy Policy describes what information Notes accesses, how it
        is processed, and what rights you have regarding your data.
      </p>
      <p>
        <strong>In short:</strong> Your notes sync via your private iCloud
        account. AI features use a secure cloud service but do not store your
        content. Gmail access is read-only and revocable at any time. Dexter Notes
        complies with the Google API Services User Data Policy.
      </p>

      <h2>1. Information We Access</h2>

      <h3>1.1 Microphone &amp; Speech Recognition</h3>
      <p>
        Dexter Notes may request microphone access for voice note recording on iPhone
        and Apple Watch. Voice recordings are stored locally on your device.
        Transcription is performed on-device using Apple&apos;s speech recognition
        framework — no audio data is sent to external servers for transcription.
      </p>

      <h3>1.2 Gmail Integration (Optional)</h3>
      <p>
        If you choose to connect your Gmail account, Dexter Notes accesses your email
        via Google OAuth 2.0 with <strong>read-only</strong> permissions. We
        request only the minimum scopes necessary:
      </p>
      <ul>
        <li><strong>gmail.readonly</strong> — to fetch and display email summaries</li>
      </ul>
      <p>
        Email data is fetched directly from Google&apos;s servers to your device.
        Email content may be sent to our AI service for summarization and task
        extraction, but is <strong>not stored</strong> on any server. No email
        content, attachments, or metadata is persisted outside your device.
      </p>
      <p>
        You can disconnect your Gmail account at any time from within the app
        or by revoking access from your{" "}
        <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">
          Google Account permissions
        </a>.
      </p>

      <h3>1.3 Contacts (Optional)</h3>
      <p>
        Dexter Notes may request access to your device contacts for the People/CRM
        feature. Contact data is used locally to link notes and tasks to people.
        Contact information is stored in your private iCloud container and is
        not transmitted to external servers.
      </p>

      <h3>1.4 Calendar (Optional)</h3>
      <p>
        Dexter Notes may request access to your calendar for event-related task
        creation. Calendar data is read locally and is not transmitted
        externally.
      </p>

      <h3>1.5 iCloud Sync (CloudKit)</h3>
      <p>
        Dexter Notes uses Apple&apos;s CloudKit (via SwiftData) to sync your notes, tasks,
        folders, and tags across your Apple devices. This data is stored in
        your <strong>private iCloud container</strong> and is accessible only
        to you through your Apple ID. We do not have access to your iCloud
        data.
      </p>

      <h3>1.6 Notifications</h3>
      <p>
        Dexter Notes may request permission to send local notifications for task
        reminders and due dates. Notifications are scheduled on-device and
        do not involve external servers.
      </p>

      <h3>1.7 Information We Do NOT Collect</h3>
      <p>Dexter Notes does not collect or request:</p>
      <ul>
        <li>Your name or email address (beyond optional Gmail OAuth)</li>
        <li>Location data</li>
        <li>Photos or camera access</li>
        <li>Health or fitness data</li>
        <li>Device identifiers for tracking purposes</li>
        <li>Browsing history or usage data outside the app</li>
      </ul>

      <h2>2. AI Processing</h2>
      <p>
        Dexter Notes uses Azure OpenAI (GPT-4.1-nano) through a secure proxy for AI
        features including:
      </p>
      <ul>
        <li><strong>Auto-categorization</strong> of notes and tasks</li>
        <li><strong>Summarization</strong> of notes and emails</li>
        <li><strong>Ask AI chat</strong> for natural language queries</li>
        <li><strong>Smart task extraction</strong> from notes and emails</li>
        <li><strong>Priority suggestions</strong> based on content analysis</li>
      </ul>
      <p>
        Text sent to the AI service is processed in real time and is{" "}
        <strong>not stored, logged, or used for model training</strong>. The AI
        service processes your request and returns a response — no content is
        retained after processing. Communication with the AI service uses
        HTTPS encryption.
      </p>
      <p>
        When the AI service is unavailable, a heuristic on-device fallback
        engine handles requests locally.
      </p>

      <h2>3. Data Stored on Your Device</h2>
      <p>Dexter Notes stores the following data locally (synced via iCloud):</p>
      <ul>
        <li><strong>Notes</strong> — text, voice recordings, transcriptions</li>
        <li><strong>Tasks</strong> — title, due date, priority, completion status</li>
        <li><strong>Folders &amp; tags</strong> — organizational structure</li>
        <li><strong>People/CRM data</strong> — linked contacts, interaction history</li>
        <li><strong>App preferences</strong> — theme, notification settings, AI preferences</li>
      </ul>

      <h2>4. Data Sharing</h2>
      <p>
        We do not share, sell, rent, trade, or disclose your notes, tasks,
        email content, or any personal data to any third party beyond what
        is necessary for AI processing as described above.
      </p>

      <h2>5. Third-Party Services</h2>
      <p>Dexter Notes integrates with the following services:</p>
      <ul>
        <li><strong>Azure OpenAI</strong> — for AI-powered features (text processing only, no data retention)</li>
        <li><strong>Google Gmail API</strong> — for optional email integration (read-only, user-authorized via OAuth 2.0)</li>
        <li><strong>Apple CloudKit</strong> — for iCloud sync (your private container)</li>
      </ul>
      <p>Dexter Notes does not include any:</p>
      <ul>
        <li>Analytics or telemetry SDKs</li>
        <li>Advertising or ad-tracking frameworks</li>
        <li>Social media SDKs</li>
      </ul>

      <h2>6. Apple Watch Integration</h2>
      <p>
        Dexter Notes&apos; Apple Watch app allows you to create quick notes, view tasks,
        and record voice memos from your wrist. Watch data syncs via iCloud or
        WatchConnectivity — no data passes through external servers.
      </p>

      <h2>7. Data Retention &amp; Deletion</h2>
      <p>You are in full control of your data:</p>
      <ul>
        <li>Delete individual notes, tasks, or voice recordings from within the app</li>
        <li>Disconnect Gmail at any time (revoke from Google Account settings)</li>
        <li>Revoke contacts, calendar, or microphone permissions from iOS Settings</li>
        <li>Disable iCloud sync to keep data local only</li>
        <li>Delete all app data by uninstalling the app</li>
      </ul>
      <p>
        When you uninstall Dexter Notes, all locally stored data is permanently
        removed. iCloud data can be removed from Settings → [your name] →
        iCloud → Manage Storage.
      </p>

      <h2>8. Google API Services Disclosure</h2>
      <p>
        Dexter Notes&apos; use and transfer of information received from Google APIs
        adheres to the{" "}
        <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">
          Google API Services User Data Policy
        </a>, including the Limited Use requirements. We only use Gmail data
        to provide email integration features within the app.
      </p>

      <h2>9. Children&apos;s Privacy</h2>
      <p>
        Dexter Notes is not directed at children under the age of 13. We do not
        knowingly collect personal information from children.
      </p>

      <h2>10. International Users</h2>
      <p>
        Your notes and tasks are stored on your device and in your private
        iCloud account. AI processing requests are sent to Azure servers
        (US-based). No personal identifiers are included in AI requests.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with an updated effective date. Continued use of
        Dexter Notes after changes constitutes acceptance.
      </p>

      <h2>12. Contact Us</h2>
      <p>Questions about this Privacy Policy? Contact us at:</p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:support@heywrist.com">support@heywrist.com</a>
      </p>
      <p><strong>Developer:</strong> Ranju Jha</p>
    </PolicyLayout>
  );
}
