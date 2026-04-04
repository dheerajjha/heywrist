import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Recordy - Terms & Conditions",
  description: "Terms and conditions for the Recordy app by HeyWrist",
};

export default function RecordyTerms() {
  return (
    <PolicyLayout appName="Recordy" title="Terms & Conditions">
      <p><strong>Effective Date:</strong> April 1, 2026</p>
      <p><strong>Last Updated:</strong> April 1, 2026</p>

      <p>
        These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of the Recordy
        application (&quot;the App&quot;) developed by Ranju Jha (&quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;). By downloading, installing, or using Recordy, you agree to be
        bound by these Terms. If you do not agree, please do not use the App.
      </p>

      <h2>1. Description of Service</h2>
      <p>
        Recordy is a premium voice recording application for iPhone and Apple
        Watch with transcription, bookmarks, AI summaries, and iCloud sync. The
        App is designed for personal and professional audio capture.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 13 years of age to use the App. By using Recordy,
        you represent that you meet this age requirement.
      </p>

      <h2>3. Recording Laws &amp; Your Responsibility</h2>
      <p>
        Many jurisdictions require the consent of one or all parties before
        recording a conversation. It is <strong>your sole responsibility</strong>{" "}
        to understand and comply with all applicable recording and privacy laws
        in your jurisdiction, including federal, state, and local laws.
      </p>
      <p>
        We are not liable for any illegal, unauthorized, or improper recordings
        made using the App. You agree to use the recording features only in
        compliance with applicable laws and with appropriate consent from all
        parties involved where required.
      </p>

      <h2>4. Your Content</h2>
      <p>
        All recordings, transcriptions, summaries, and other content you create
        with Recordy are your property. They are stored on your device (and
        optionally in your personal iCloud account) and we have no access to
        them. You retain all rights, title, and interest in your content.
      </p>
      <p>
        You are solely responsible for backing up your recordings. We are not
        responsible for any loss of recordings due to device failure, software
        updates, or any other cause.
      </p>

      <h2>5. In-App Purchases</h2>
      <p>
        Recordy may offer premium features through one-time in-app purchases.
        All purchases are processed by Apple through the App Store and are
        subject to Apple&apos;s{" "}
        <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer">
          Standard EULA
        </a>.
      </p>
      <ul>
        <li>All sales are final. Refunds are handled exclusively by Apple.</li>
        <li>Prices may vary by region.</li>
        <li>We reserve the right to modify pricing for future purchases.</li>
      </ul>

      <h2>6. Transcription &amp; AI Accuracy</h2>
      <p>
        Transcription and AI summary features are provided for convenience and
        may contain errors. We do <strong>not</strong> guarantee the accuracy,
        completeness, or reliability of any transcription or AI-generated
        content. You should not rely on transcriptions for legal, medical, or
        other critical purposes without independent verification.
      </p>

      <h2>7. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the App to record conversations without required consent</li>
        <li>Reverse engineer, decompile, or disassemble the App</li>
        <li>Use the App for any unlawful, harassing, or harmful purpose</li>
        <li>Attempt to interfere with the proper operation of the App</li>
      </ul>

      <h2>8. Intellectual Property</h2>
      <p>
        All design, graphics, interfaces, code, and other elements of Recordy
        are the intellectual property of Ranju Jha. You are granted a limited,
        non-exclusive, non-transferable license to use the App for personal
        purposes.
      </p>

      <h2>9. Disclaimer of Warranties</h2>
      <p>
        The App is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without
        warranties of any kind. We do not guarantee the accuracy of
        transcriptions, the quality of recordings, or the uninterrupted
        operation of any features.
      </p>

      <h2>10. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Ranju Jha shall not be liable
        for any indirect, incidental, special, consequential, or punitive
        damages arising from your use of the App, including but not limited to:
      </p>
      <ul>
        <li>Loss of recordings or transcriptions</li>
        <li>Inaccurate transcriptions or AI summaries</li>
        <li>Legal consequences arising from unauthorized recordings</li>
        <li>iCloud sync failures or data loss</li>
      </ul>

      <h2>11. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Ranju Jha from any claims,
        damages, or expenses arising from your use of the App, your content, or
        violation of these Terms or applicable laws.
      </p>

      <h2>12. Termination</h2>
      <p>
        You may stop using the App at any time by uninstalling it. We reserve
        the right to discontinue or modify the App without prior notice.
      </p>

      <h2>13. Changes to These Terms</h2>
      <p>
        We may modify these Terms at any time. Updated Terms will be posted on
        this page. Continued use after changes constitutes acceptance.
      </p>

      <h2>14. Governing Law</h2>
      <p>
        These Terms shall be governed by the laws of the jurisdiction in which
        the developer resides, without regard to conflict of law principles.
      </p>

      <h2>15. Contact Us</h2>
      <p>
        Questions about these Terms? Contact us at:
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:support@heywrist.com">support@heywrist.com</a>
      </p>
      <p><strong>Developer:</strong> Ranju Jha</p>
    </PolicyLayout>
  );
}
