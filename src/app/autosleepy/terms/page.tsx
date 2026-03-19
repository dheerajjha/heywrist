import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "AutoSleepy - Terms & Conditions",
  description: "Terms and conditions for the AutoSleepy app by HeyWrist",
};

export default function AutoSleepyTerms() {
  return (
    <PolicyLayout appName="AutoSleepy" title="Terms & Conditions">
      <p>
        <strong>Effective Date:</strong> March 19, 2026
      </p>
      <p>
        By downloading or using AutoSleepy (&quot;the App&quot;), you agree to be bound
        by these Terms &amp; Conditions. If you do not agree, please do not use
        the App.
      </p>

      <h2>Use of the App</h2>
      <p>
        AutoSleepy is a sleep tracking app that uses Apple Watch sensor data to
        monitor your sleep. The App is provided for informational and personal
        wellness purposes only.
      </p>

      <h2>Not Medical Advice</h2>
      <p>
        AutoSleepy is <strong>not a medical device</strong> and does not provide
        medical advice, diagnosis, or treatment. The sleep data, scores, and
        insights provided by the App are for informational purposes only. Always
        consult a qualified healthcare provider for medical concerns.
      </p>

      <h2>HealthKit Data</h2>
      <p>
        The App requires access to Apple HealthKit to function. You may revoke
        this access at any time through your device&apos;s Settings. Revoking access
        may limit or disable certain features.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content, design, and code in AutoSleepy are the intellectual
        property of Ranju Jha. You may not copy, modify, distribute, or reverse
        engineer any part of the App.
      </p>

      <h2>Disclaimer of Warranties</h2>
      <p>
        The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of
        any kind, either express or implied. We do not guarantee the accuracy,
        completeness, or reliability of any data or features provided by the
        App.
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
