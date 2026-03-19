import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "AutoSleepy - Privacy Policy",
  description: "Privacy policy for the AutoSleepy app by HeyWrist",
};

export default function AutoSleepyPrivacy() {
  return (
    <PolicyLayout appName="AutoSleepy" title="Privacy Policy">
      <p>
        <strong>Effective Date:</strong> March 19, 2026
      </p>
      <p>
        Ranju Jha (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) built AutoSleepy as a
        privacy-first sleep tracking app for iPhone and Apple Watch. This Privacy
        Policy explains how AutoSleepy handles your information.
      </p>

      <h2>Information We Access</h2>
      <p>
        AutoSleepy accesses the following data from Apple HealthKit with your
        explicit permission:
      </p>
      <ul>
        <li>Sleep analysis (sleep stages: REM, Deep, Core, Awake, In Bed)</li>
        <li>Heart rate</li>
        <li>Heart rate variability (HRV)</li>
        <li>Blood oxygen saturation (SpO2)</li>
        <li>Respiratory rate</li>
        <li>Step count</li>
        <li>Wrist temperature (iOS 18+ / watchOS 11+)</li>
      </ul>
      <p>AutoSleepy may also write sleep analysis data back to Apple Health.</p>

      <h2>HomeKit</h2>
      <p>
        AutoSleepy can optionally integrate with Apple HomeKit to execute
        bedtime and wake-time smart home scenes. This requires your explicit
        permission and no HomeKit data is stored or transmitted.
      </p>

      <h2>How Your Data Is Stored</h2>
      <p>
        All data is stored exclusively on your device. AutoSleepy does not have
        any servers, cloud storage, or remote databases. Your sleep data never
        leaves your device.
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
        party. Period.
      </p>

      <h2>Apple Watch</h2>
      <p>
        The AutoSleepy Apple Watch companion app accesses the same HealthKit
        data as the iPhone app. Data is synchronized between your iPhone and
        Apple Watch using Apple&apos;s WatchConnectivity framework — a direct,
        on-device communication channel. No data passes through external
        servers.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        AutoSleepy is not directed at children under the age of 13. We do not
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
