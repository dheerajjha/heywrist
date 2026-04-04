import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Chatty - Privacy Policy",
  description: "Privacy policy for the Chatty app by HeyWrist",
};

export default function ChattyPrivacy() {
  return (
    <PolicyLayout appName="Chatty" title="Privacy Policy">
      <p>
        <strong>Effective Date:</strong> March 19, 2026
      </p>
      <p>
        Ranju Jha (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) built Chatty as an
        AI chatbot app for Apple Watch and iPhone. This Privacy Policy explains
        how Chatty handles your information.
      </p>

      <h2>Information We Collect</h2>
      <p>
        Chatty does <strong>not</strong> collect any personal information. The
        app does not require accounts, sign-ups, or any form of registration.
      </p>

      <h2>Conversation Data</h2>
      <p>
        Your conversations with AI personas are stored locally on your Apple
        Watch using UserDefaults. This data never leaves your device. No
        conversation data is uploaded to any server.
      </p>

      <h2>AI Responses</h2>
      <p>
        AI responses are generated using on-device logic. Chatty does not
        connect to external AI services or APIs. All response generation
        happens locally on your device.
      </p>

      <h2>Data Sharing</h2>
      <p>
        We do not share, sell, rent, or disclose your personal data to any
        third party. Period.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        Chatty does not include any third-party analytics, advertising, or
        tracking SDKs. No data is sent to external services.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        Chatty is not directed at children under the age of 13. We do not
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
