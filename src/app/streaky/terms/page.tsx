import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Streaky - Terms & Conditions",
  description: "Terms and conditions for the Streaky app by HeyWrist",
};

export default function StreakyTerms() {
  return (
    <PolicyLayout appName="Streaky" title="Terms & Conditions">
      <p>
        <strong>Effective Date:</strong> March 19, 2026
      </p>
      <p>
        By downloading or using Streaky (&quot;the App&quot;), you agree to be bound by
        these Terms &amp; Conditions. If you do not agree, please do not use the
        App.
      </p>

      <h2>Use of the App</h2>
      <p>
        Streaky is a habit tracking app designed to help you build positive
        habits and break negative ones. The App is provided for personal
        productivity and wellness purposes only.
      </p>

      <h2>HealthKit Data</h2>
      <p>
        The App may access Apple HealthKit data to automatically track
        health-related habits. You may revoke this access at any time through
        your device&apos;s Settings. Revoking access may limit the automatic
        tracking features.
      </p>

      <h2>iCloud Sync</h2>
      <p>
        Streaky uses Apple&apos;s CloudKit to sync data across your devices. This
        requires an active iCloud account. We do not control Apple&apos;s iCloud
        service and are not responsible for iCloud-related issues.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content, design, and code in Streaky are the intellectual property
        of Ranju Jha. You may not copy, modify, distribute, or reverse engineer
        any part of the App.
      </p>

      <h2>Disclaimer of Warranties</h2>
      <p>
        The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of
        any kind, either express or implied. We do not guarantee uninterrupted
        operation or that the App will meet your specific requirements.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Ranju Jha shall not be liable
        for any indirect, incidental, special, consequential, or punitive
        damages arising from your use of or inability to use the App.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We reserve the right to modify these Terms at any time. Continued use of
        the App after changes constitutes acceptance of the updated Terms.
      </p>

      <h2>Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with
        applicable law.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at{" "}
        <a href="mailto:support@heywrist.com">support@heywrist.com</a>.
      </p>
    </PolicyLayout>
  );
}
