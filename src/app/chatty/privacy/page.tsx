import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Chatty - Privacy Policy",
  description: "Privacy policy for the Chatty app by HeyWrist",
};

export default function ChattyPrivacy() {
  return (
    <PolicyLayout appName="Chatty" title="Privacy Policy">
      <p><strong>Effective Date:</strong> April 1, 2026</p>
      <p><strong>Last Updated:</strong> April 1, 2026</p>

      <p>
        Hey Wrist (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) built Chatty as an AI chatbot
        application for Apple Watch and iPhone. This Privacy Policy describes
        what information Chatty accesses, how it is processed, and what rights
        you have regarding your data.
      </p>
      <p>
        <strong>In short:</strong> Chatty processes conversations on your device.
        We do not collect personal information and have no accounts or servers.
      </p>

      <h2>1. Information We Access</h2>

      <h3>1.1 Microphone (Optional)</h3>
      <p>
        Chatty may request microphone access for voice input on Apple Watch and
        iPhone. Voice input is processed on-device using Apple&apos;s speech
        recognition framework to convert your speech to text. No audio data is
        recorded, stored, or transmitted to any external server. You can revoke
        microphone access at any time from iOS Settings.
      </p>

      <h3>1.2 Keyboard Input</h3>
      <p>
        Text you type into Chatty is processed locally to generate AI responses.
        Your typed messages are stored only in the local conversation history on
        your device.
      </p>

      <h3>1.3 Information We Do NOT Collect</h3>
      <p>Chatty does not collect, access, or request:</p>
      <ul>
        <li>Your name, email address, or any personally identifiable information</li>
        <li>Location data</li>
        <li>Contacts, photos, calendar, or health data</li>
        <li>Device identifiers for tracking purposes</li>
        <li>Browsing history or usage data outside the app</li>
      </ul>

      <h2>2. Conversation Data</h2>
      <p>
        Your conversations with AI personas are stored locally on your device.
        Conversation history includes your messages and AI-generated responses.
        This data:
      </p>
      <ul>
        <li>Is stored exclusively on your device</li>
        <li>Never leaves your device</li>
        <li>Is not uploaded to any server or cloud service</li>
        <li>Is not accessible to us or any third party</li>
        <li>Can be deleted at any time from within the app</li>
      </ul>

      <h2>3. AI Processing</h2>
      <p>
        AI responses in Chatty are generated using on-device intelligence.
        Chatty does <strong>not</strong> connect to external AI services (such
        as OpenAI, Google, or any cloud-based API) to generate responses. All
        natural language processing and response generation occurs locally on
        your device.
      </p>
      <p>
        No conversation content, prompts, or context is transmitted to any
        external server for processing, training, or any other purpose.
      </p>

      <h2>4. No Accounts Required</h2>
      <p>
        Chatty does not require user accounts, sign-ups, email verification, or
        any form of registration. There are no login credentials to manage or
        protect.
      </p>

      <h2>5. Data Sharing</h2>
      <p>
        We do not share, sell, rent, trade, or disclose your conversation data
        or any personal information to any third party.
      </p>

      <h2>6. Third-Party Services &amp; SDKs</h2>
      <p>Chatty does not include any third-party:</p>
      <ul>
        <li>Analytics or telemetry SDKs</li>
        <li>Advertising or ad-tracking frameworks</li>
        <li>Crash reporting services that transmit user data</li>
        <li>AI cloud APIs or services</li>
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

      <h2>7. Apple Watch Integration</h2>
      <p>
        Chatty&apos;s Apple Watch app operates as a standalone application. 
        Conversation data on the Watch is stored locally on the Watch. Data
        synced between Apple Watch and iPhone uses Apple&apos;s WatchConnectivity
        framework — a direct, encrypted, device-to-device channel. No data
        passes through external servers.
      </p>

      <h2>8. Data Retention &amp; Deletion</h2>
      <p>You are in full control of your data:</p>
      <ul>
        <li>Delete individual conversations from within the app</li>
        <li>Clear all conversation history at any time</li>
        <li>Revoke microphone permissions from iOS Settings</li>
        <li>Delete all app data by uninstalling the app</li>
      </ul>
      <p>
        When you uninstall Chatty, all locally stored data is permanently
        removed. We retain no copies because we never had access to your data.
      </p>

      <h2>9. Children&apos;s Privacy</h2>
      <p>
        Chatty is not directed at children under the age of 13. We do not
        knowingly collect personal information from children. Since no data is
        transmitted to us, no children&apos;s data is collected regardless.
      </p>

      <h2>10. International Users</h2>
      <p>
        All data remains on your device. We do not operate servers, so there
        are no cross-border data transfers.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with an updated effective date. Continued use of
        Chatty after changes constitutes acceptance.
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
