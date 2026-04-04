import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Notes - Privacy Policy",
  description: "Privacy policy for the Notes app by HeyWrist",
};

export default function NotesPrivacy() {
  return (
    <PolicyLayout appName="Notes" title="Privacy Policy">
      <p>
        <strong>Effective Date:</strong> March 19, 2026
      </p>
      <p>
        Ranju Jha (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) built Notes as an
        AI-powered notes and tasks app for iPhone and Apple Watch. This Privacy
        Policy explains how Notes handles your information.
      </p>

      <h2>Information We Access</h2>
      <p>Notes may access the following data with your explicit permission:</p>
      <ul>
        <li>Microphone (for voice recording)</li>
        <li>Speech Recognition (for on-device transcription)</li>
        <li>Gmail account (for email integration, via OAuth2)</li>
        <li>Contacts (for the People/CRM feature)</li>
        <li>Calendar (for event-related tasks)</li>
      </ul>

      <h2>How Your Data Is Stored</h2>
      <p>
        Notes and tasks are stored on your device using SwiftData with
        CloudKit integration. Data syncs through your personal iCloud
        account — not through our servers.
      </p>

      <h2>AI Processing</h2>
      <p>
        Notes uses Azure OpenAI (GPT-4.1-nano) through a secure proxy for
        AI features such as categorization, summarization, and the Ask AI
        chat. Text sent to the AI service is processed in real time and is
        not stored or used for training. A heuristic fallback engine handles
        requests when the AI service is unavailable.
      </p>

      <h2>Gmail Integration</h2>
      <p>
        If you choose to connect your Gmail account, Notes accesses your
        email via Google OAuth2 with read-only permissions. Email data is
        processed locally on your device for AI summaries and task
        extraction. No email content is stored on our servers.
      </p>

      <h2>Data Sharing</h2>
      <p>
        We do not share, sell, rent, or disclose your personal data to any
        third party. Period.
      </p>

      <h2>Voice Recordings</h2>
      <p>
        Voice recordings are stored locally on your device. Transcription
        is performed on-device using Apple Speech Recognition. Recordings
        and transcripts are never uploaded to external servers.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        Notes is not directed at children under the age of 13. We do not
        knowingly collect personal information from children.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will
        be posted on this page with an updated effective date.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at <a href="mailto:support@heywrist.com">support@heywrist.com</a>.
      </p>
    </PolicyLayout>
  );
}
