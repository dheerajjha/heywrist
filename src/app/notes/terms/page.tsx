import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Dexter Notes - Terms & Conditions",
  description: "Terms and conditions for the Dexter Notes app by HeyWrist",
};

export default function NotesTerms() {
  return (
    <PolicyLayout appName="Dexter Notes" title="Terms & Conditions">
      <p><strong>Effective Date:</strong> April 1, 2026</p>
      <p><strong>Last Updated:</strong> April 1, 2026</p>

      <p>
        These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of the Dexter Notes
        application (&quot;the App&quot;) developed by Ranju Jha (&quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;). By downloading, installing, or using Dexter Notes, you agree to be
        bound by these Terms.
      </p>

      <h2>1. Description of Service</h2>
      <p>
        Dexter Notes is an AI-powered notes, tasks, and personal CRM application for
        iPhone and Apple Watch. Features include voice recording, AI
        categorization and summarization, Gmail integration, contact linking,
        and iCloud sync.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 13 years of age to use the App. By using Dexter Notes,
        you represent that you meet this requirement.
      </p>

      <h2>3. AI-Generated Content Disclaimer</h2>
      <p>
        AI features including auto-categorization, summarization, task
        extraction, and Ask AI chat are powered by Azure OpenAI and may
        produce inaccurate, incomplete, or misleading results. You acknowledge:
      </p>
      <ul>
        <li>AI-generated content is for <strong>informational purposes only</strong></li>
        <li>You should not rely solely on AI output for critical decisions</li>
        <li>AI summaries of emails may miss important details or misinterpret content</li>
        <li>AI categorization and priority suggestions are approximate</li>
        <li>We are not liable for actions taken based on AI-generated content</li>
      </ul>

      <h2>4. Gmail Integration</h2>
      <p>
        The optional Gmail integration accesses your email with your explicit
        consent via Google OAuth 2.0. By connecting Gmail to Dexter Notes, you agree that:
      </p>
      <ul>
        <li>Dexter Notes will access your emails in read-only mode</li>
        <li>Email content may be sent to our AI service for summarization (not stored)</li>
        <li>You may revoke access at any time from Google Account settings or from within the app</li>
        <li>We are not responsible for the content, accuracy, or availability of your emails</li>
        <li>Gmail integration is subject to Google&apos;s Terms of Service</li>
      </ul>

      <h2>5. Your Content</h2>
      <p>
        All notes, tasks, voice recordings, and other content you create are
        your property. They are stored on your device and in your private iCloud
        account. You retain all rights to your content. We do not claim
        ownership of any content you create.
      </p>
      <p>
        You are responsible for backing up your data. We are not liable for
        data loss due to device failure, iCloud issues, or app uninstallation.
      </p>

      <h2>6. In-App Purchases</h2>
      <p>
        Dexter Notes may offer premium features through in-app purchases. All
        purchases are processed by Apple and subject to Apple&apos;s{" "}
        <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer">
          Standard EULA
        </a>.
      </p>
      <ul>
        <li>All sales are final. Refunds are handled by Apple.</li>
        <li>Prices may vary by region.</li>
      </ul>

      <h2>7. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Reverse engineer, decompile, or disassemble the App</li>
        <li>Abuse the AI service (e.g., excessive automated requests)</li>
        <li>Use the App for any unlawful purpose</li>
        <li>Attempt to extract AI models or bypass usage limits</li>
      </ul>

      <h2>8. Intellectual Property</h2>
      <p>
        All design, code, AI integrations, and other elements of Dexter Notes are
        the intellectual property of Ranju Jha. You are granted a limited,
        non-exclusive, non-transferable license for personal use.
      </p>

      <h2>9. Disclaimer of Warranties</h2>
      <p>
        The App is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without
        warranties of any kind. We do not guarantee the accuracy of AI
        features, the availability of the AI service, or uninterrupted
        operation.
      </p>

      <h2>10. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Ranju Jha shall not be liable
        for any indirect, incidental, special, consequential, or punitive
        damages arising from your use of the App, including:
      </p>
      <ul>
        <li>Inaccurate AI categorization, summaries, or task extraction</li>
        <li>Missed or incorrect email summaries</li>
        <li>Loss of notes, tasks, or voice recordings</li>
        <li>iCloud sync failures</li>
        <li>AI service downtime or unavailability</li>
      </ul>

      <h2>11. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Ranju Jha from any claims
        arising from your use of the App, your content, or violation of these
        Terms.
      </p>

      <h2>12. Termination</h2>
      <p>
        You may stop using the App at any time by uninstalling it. We reserve
        the right to discontinue or modify the App or AI services without
        prior notice.
      </p>

      <h2>13. Changes to These Terms</h2>
      <p>
        We may modify these Terms at any time. Continued use after changes
        constitutes acceptance.
      </p>

      <h2>14. Governing Law</h2>
      <p>
        These Terms shall be governed by the laws of the jurisdiction in which
        the developer resides.
      </p>

      <h2>15. Contact Us</h2>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:support@heywrist.com">support@heywrist.com</a>
      </p>
      <p><strong>Developer:</strong> Ranju Jha</p>
    </PolicyLayout>
  );
}
