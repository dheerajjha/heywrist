import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Recordy - Privacy Policy",
  description: "Privacy policy for the Recordy app by HeyWrist",
};

export default function RecordyPrivacy() {
  return (
    <PolicyLayout appName="Recordy" title="Privacy Policy">
      <p>
        <strong>Effective Date:</strong> March 19, 2026
      </p>
      <p>
        Ranju Jha (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) built Recordy as a
        privacy-first audio recording app for iPhone and Apple Watch. This
        Privacy Policy explains how Recordy handles your information.
      </p>

      <h2>Information We Access</h2>
      <p>Recordy requests the following permissions:</p>
      <ul>
        <li>
          <strong>Microphone:</strong> Required to record audio on your iPhone
          and Apple Watch.
        </li>
        <li>
          <strong>Speech Recognition:</strong> Used to transcribe your
          recordings to text. Transcription is performed entirely on your device
          using Apple&apos;s on-device speech recognition — no audio is sent to
          external servers.
        </li>
      </ul>

      <h2>What We Store</h2>
      <p>
        Recordy stores the following data locally on your device:
      </p>
      <ul>
        <li>Audio recordings (M4A format)</li>
        <li>Recording metadata (title, duration, date, source device)</li>
        <li>Transcriptions</li>
        <li>Folders, tags, and favorites</li>
      </ul>

      <h2>How Your Data Is Stored</h2>
      <p>
        All data is stored exclusively on your device. Recordy does not have any
        servers, cloud storage, or remote databases.
      </p>
      <ul>
        <li>No accounts or sign-ups are required.</li>
        <li>No data is uploaded to any server.</li>
        <li>No analytics or crash-reporting SDKs are used.</li>
        <li>No third-party SDKs are included in the app.</li>
      </ul>

      <h2>Data Sharing</h2>
      <p>
        We do not share, sell, rent, or disclose your personal data to any third
        party.
      </p>

      <h2>Apple Watch</h2>
      <p>
        The Recordy Apple Watch companion app can record audio independently.
        Recordings are transferred from the Watch to your iPhone using Apple&apos;s
        WatchConnectivity framework — a direct, on-device communication channel.
        No data passes through external servers.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        Recordy is not directed at children under the age of 13. We do not
        knowingly collect personal information from children.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated effective date.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at{" "}
        <a href="mailto:support@heywrist.com">support@heywrist.com</a>.
      </p>
    </PolicyLayout>
  );
}
