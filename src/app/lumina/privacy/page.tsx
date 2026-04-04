import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Lumina - Privacy Policy",
  description: "Privacy policy for the Lumina app by HeyWrist",
};

export default function LuminaPrivacy() {
  return (
    <PolicyLayout appName="Lumina" title="Privacy Policy">
      <p>
        <strong>Effective Date:</strong> March 19, 2026
      </p>
      <p>
        Ranju Jha (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) built Lumina as a
        premium focus and study timer for iPhone and Apple Watch. This Privacy
        Policy explains how Lumina handles your information.
      </p>

      <h2>Information We Collect</h2>
      <p>
        Lumina does <strong>not</strong> collect any personal information. The
        app does not require accounts, sign-ups, or any form of registration.
      </p>

      <h2>How Your Data Is Stored</h2>
      <p>
        Focus sessions, daily stats, companion state, constellation progress,
        and user preferences are stored locally on your device using SwiftData.
        No data is uploaded to any server.
      </p>

      <h2>Calendar Integration</h2>
      <p>
        Lumina can optionally sync completed focus sessions to your Apple
        Calendar via EventKit. This requires your explicit permission. Calendar
        data is written locally and is not transmitted to any external service.
      </p>

      <h2>Microphone</h2>
      <p>
        Lumina uses the microphone solely for ambient sound generation via
        AVAudioEngine. No audio is recorded, stored, or transmitted.
      </p>

      <h2>Data Sharing</h2>
      <p>
        We do not share, sell, rent, or disclose your personal data to any
        third party. Period.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        Lumina does not include any third-party analytics, advertising, or
        tracking SDKs. No data is sent to external services.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        Lumina is not directed at children under the age of 13. We do not
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
