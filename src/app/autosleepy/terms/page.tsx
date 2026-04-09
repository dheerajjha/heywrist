import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "AutoSleepy - Terms & Conditions",
  description: "Terms and conditions for the AutoSleepy app by HeyWrist",
};

export default function AutoSleepyTerms() {
  return (
    <PolicyLayout appName="AutoSleepy" title="Terms & Conditions">
      <p><strong>Effective Date:</strong> April 1, 2026</p>
      <p><strong>Last Updated:</strong> April 1, 2026</p>

      <p>
        These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of the AutoSleepy
        application (&quot;the App&quot;) developed by Hey Wrist (&quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;). By downloading, installing, or using AutoSleepy, you agree to
        be bound by these Terms. If you do not agree, please do not use the App.
      </p>

      <h2>1. Description of Service</h2>
      <p>
        AutoSleepy is a sleep tracking application for iPhone and Apple Watch
        that uses Apple Watch sensor data and HealthKit integration to monitor
        your sleep patterns, provide AI-powered insights, smart alarms, and
        HomeKit automation. The App is provided for informational and personal
        wellness purposes only.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 13 years of age (or the applicable minimum age in
        your jurisdiction) to use the App. By using AutoSleepy, you represent
        that you meet this age requirement.
      </p>

      <h2>3. Health &amp; Medical Disclaimer</h2>
      <p>
        AutoSleepy is <strong>not a medical device</strong> and is not intended
        to diagnose, treat, cure, or prevent any disease or health condition.
        The sleep data, scores, trends, and AI-generated insights provided by
        the App are for <strong>informational and educational purposes
        only</strong>.
      </p>
      <p>
        You should not rely on AutoSleepy as a substitute for professional
        medical advice, diagnosis, or treatment. Always seek the advice of a
        qualified healthcare provider with any questions regarding a medical
        condition or sleep disorder. Never disregard professional medical advice
        or delay in seeking it because of information provided by the App.
      </p>

      <h2>4. HealthKit &amp; HomeKit Usage</h2>
      <p>
        The App requires access to Apple HealthKit to provide sleep tracking
        functionality. It may also integrate with Apple HomeKit for home
        automation features. You may grant or revoke these permissions at any
        time through your device&apos;s Settings. Revoking HealthKit access may
        limit or disable core features of the App.
      </p>
      <p>
        Your use of HealthKit and HomeKit data is also subject to Apple&apos;s
        terms and conditions for those services.
      </p>

      <h2>5. In-App Purchases &amp; Subscriptions</h2>
      <p>
        AutoSleepy may offer premium features through one-time in-app purchases.
        All purchases are processed by Apple through the App Store and are
        subject to Apple&apos;s{" "}
        <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer">
          Standard End User License Agreement (EULA)
        </a>.
      </p>
      <ul>
        <li>All sales are final. Refunds are handled exclusively by Apple.</li>
        <li>Prices may vary by region and are displayed in your local currency.</li>
        <li>We reserve the right to modify pricing for future purchases.</li>
      </ul>

      <h2>6. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Reverse engineer, decompile, or disassemble the App</li>
        <li>Modify, adapt, or create derivative works based on the App</li>
        <li>Use the App for any unlawful purpose</li>
        <li>Attempt to interfere with the proper operation of the App</li>
        <li>Remove or alter any proprietary notices or labels on the App</li>
      </ul>

      <h2>7. Intellectual Property</h2>
      <p>
        All content, design, graphics, interfaces, code, and other elements of
        AutoSleepy are the intellectual property of Hey Wrist and are protected
        by copyright, trademark, and other intellectual property laws. You are
        granted a limited, non-exclusive, non-transferable, revocable license
        to use the App for personal, non-commercial purposes.
      </p>

      <h2>8. Disclaimer of Warranties</h2>
      <p>
        The App is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without
        warranties of any kind, whether express or implied, including but not
        limited to implied warranties of merchantability, fitness for a
        particular purpose, accuracy, and non-infringement. We do not warrant
        that the App will be uninterrupted, error-free, or free of harmful
        components.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by applicable law, Hey Wrist shall not
        be liable for any indirect, incidental, special, consequential, or
        punitive damages, including but not limited to loss of profits, data,
        use, goodwill, or other intangible losses, arising from:
      </p>
      <ul>
        <li>Your use of or inability to use the App</li>
        <li>Any inaccuracy in sleep data, health metrics, or AI insights</li>
        <li>Unauthorized access to or alteration of your data</li>
        <li>Any third-party conduct related to the App</li>
        <li>Any health decisions made based on information from the App</li>
      </ul>

      <h2>10. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Hey Wrist from any claims,
        damages, losses, liabilities, and expenses (including attorneys&apos; fees)
        arising from your use of the App or violation of these Terms.
      </p>

      <h2>11. Termination</h2>
      <p>
        You may stop using the App at any time by uninstalling it. We reserve
        the right to discontinue or modify the App at any time without prior
        notice. These Terms survive any termination to the extent necessary.
      </p>

      <h2>12. Changes to These Terms</h2>
      <p>
        We reserve the right to modify these Terms at any time. Updated Terms
        will be posted on this page with a revised effective date. Your
        continued use of the App after changes constitutes acceptance of the
        updated Terms.
      </p>

      <h2>13. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the
        laws of the jurisdiction in which the developer resides, without regard
        to conflict of law principles.
      </p>

      <h2>14. Severability</h2>
      <p>
        If any provision of these Terms is found to be unenforceable, the
        remaining provisions shall continue in full force and effect.
      </p>

      <h2>15. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at:
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:support@heywrist.com">support@heywrist.com</a>
      </p>
      <p>
        <strong>Developer:</strong> Hey Wrist
      </p>
    </PolicyLayout>
  );
}
