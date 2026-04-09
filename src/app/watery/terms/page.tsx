import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Watery - Terms & Conditions",
  description: "Terms and conditions for the Watery app by HeyWrist",
};

export default function WateryTerms() {
  return (
    <PolicyLayout appName="Watery" title="Terms & Conditions">
      <p><strong>Effective Date:</strong> April 1, 2026</p>
      <p><strong>Last Updated:</strong> April 1, 2026</p>

      <p>
        These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of the Watery
        application (&quot;the App&quot;) developed by Hey Wrist (&quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;). By downloading, installing, or using Watery, you agree to be
        bound by these Terms.
      </p>

      <h2>1. Description of Service</h2>
      <p>
        Watery is a smart hydration tracking application for iPhone and Apple
        Watch that calculates personalized water intake goals, provides smart
        reminders, tracks drink history, and integrates with Apple HealthKit,
        Siri, widgets, and Dynamic Island.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 13 years of age to use the App. By using Watery,
        you represent that you meet this requirement.
      </p>

      <h2>3. Health &amp; Medical Disclaimer</h2>
      <p>
        Watery is <strong>not a medical device</strong> and is not intended to
        diagnose, treat, cure, or prevent any disease or health condition.
        Hydration goals, recommendations, and calculations are for{" "}
        <strong>informational purposes only</strong> and should not be used as a
        substitute for professional medical advice.
      </p>
      <p>
        Individual hydration needs vary based on factors including medical
        conditions, medications, climate, and physical activity. Always consult
        a qualified healthcare provider regarding your specific hydration needs,
        especially if you have kidney disease, heart conditions, or other
        medical conditions affecting fluid intake.
      </p>

      <h2>4. HealthKit Usage</h2>
      <p>
        The App reads and writes data to Apple HealthKit. You may grant or
        revoke HealthKit permissions at any time from iOS Settings. Revoking
        access may limit or disable features such as personalized goal
        calculation and health data syncing. Your use of HealthKit is also
        subject to Apple&apos;s terms.
      </p>

      <h2>5. In-App Purchases</h2>
      <p>
        Watery may offer premium features through one-time in-app purchases.
        All purchases are processed by Apple and subject to Apple&apos;s{" "}
        <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer">
          Standard EULA
        </a>.
      </p>
      <ul>
        <li>All sales are final. Refunds are handled by Apple.</li>
        <li>Prices may vary by region.</li>
      </ul>

      <h2>6. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Reverse engineer, decompile, or disassemble the App</li>
        <li>Use the App for any unlawful purpose</li>
        <li>Attempt to interfere with the proper operation of the App</li>
      </ul>

      <h2>7. Intellectual Property</h2>
      <p>
        All content, design, graphics, code, and other elements of Watery are
        the intellectual property of Hey Wrist. You are granted a limited,
        non-exclusive, non-transferable license for personal use.
      </p>

      <h2>8. Disclaimer of Warranties</h2>
      <p>
        The App is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without
        warranties of any kind. We do not guarantee the accuracy of hydration
        calculations, goal recommendations, or uninterrupted operation.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Hey Wrist shall not be liable
        for any indirect, incidental, special, consequential, or punitive
        damages arising from your use of the App, including:
      </p>
      <ul>
        <li>Inaccurate hydration recommendations</li>
        <li>Health consequences from following or ignoring app recommendations</li>
        <li>Loss of hydration data</li>
        <li>HealthKit read/write failures</li>
      </ul>

      <h2>10. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Hey Wrist from any claims
        arising from your use of the App or violation of these Terms.
      </p>

      <h2>11. Termination</h2>
      <p>
        You may stop using the App at any time by uninstalling it. We reserve
        the right to discontinue or modify the App without prior notice.
      </p>

      <h2>12. Changes to These Terms</h2>
      <p>
        We may modify these Terms at any time. Continued use after changes
        constitutes acceptance.
      </p>

      <h2>13. Governing Law</h2>
      <p>
        These Terms shall be governed by the laws of the jurisdiction in which
        the developer resides.
      </p>

      <h2>14. Contact Us</h2>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:support@heywrist.com">support@heywrist.com</a>
      </p>
      <p><strong>Developer:</strong> Hey Wrist</p>
    </PolicyLayout>
  );
}
