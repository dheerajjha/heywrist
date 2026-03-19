import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Watery - Privacy Policy",
  description: "Privacy policy for the Watery app by HeyWrist",
};

export default function WateryPrivacy() {
  return (
    <PolicyLayout appName="Watery" title="Privacy Policy">
      <p>
        <strong>Effective Date:</strong> March 19, 2026
      </p>
      <p>
        Ranju Jha (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) built Watery as a smart
        hydration tracking app for iPhone and Apple Watch. This Privacy Policy
        explains how Watery handles your information.
      </p>

      <h2>Information We Access</h2>
      <p>
        Watery accesses the following data from Apple HealthKit with your
        explicit permission:
      </p>
      <h3>Read Access</h3>
      <ul>
        <li>Biological sex</li>
        <li>Date of birth</li>
        <li>Body weight</li>
        <li>Dietary water intake</li>
        <li>Dietary caffeine intake</li>
      </ul>
      <h3>Write Access</h3>
      <ul>
        <li>Dietary water intake</li>
      </ul>
      <p>
        This data is used to calculate your personalized daily hydration goal
        and to log your water intake to Apple Health.
      </p>

      <h2>What We Store</h2>
      <p>Watery stores the following data locally on your device:</p>
      <ul>
        <li>Your hydration profile (weight, activity level, climate preference)</li>
        <li>Drink logs (type, amount, timestamp)</li>
        <li>Custom cup definitions</li>
        <li>Streak data</li>
      </ul>

      <h2>How Your Data Is Stored</h2>
      <p>
        All data is stored exclusively on your device. Watery does not have any
        servers, cloud storage, or remote databases.
      </p>
      <ul>
        <li>No accounts or sign-ups are required.</li>
        <li>No data is uploaded to any server.</li>
        <li>No analytics or crash-reporting SDKs are used.</li>
        <li>No third-party SDKs are included in the app.</li>
      </ul>

      <h2>Notifications</h2>
      <p>
        Watery may send local notifications to remind you to drink water. These
        notifications are scheduled on your device and do not involve any
        external servers.
      </p>

      <h2>Data Sharing</h2>
      <p>
        We do not share, sell, rent, or disclose your personal data to any third
        party.
      </p>

      <h2>Apple Watch</h2>
      <p>
        The Watery Apple Watch companion app allows you to log drinks directly
        from your wrist. Data is synchronized between your iPhone and Apple
        Watch using Apple&apos;s WatchConnectivity framework — a direct, on-device
        communication channel. No data passes through external servers.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        Watery is not directed at children under the age of 13. We do not
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
