import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Streaky - Terms & Conditions",
  description: "Terms and conditions for the Streaky app by HeyWrist",
};

export default function StreakyTerms() {
  return (
    <PolicyLayout appName="Streaky" title="Terms & Conditions">
      <p><strong>Effective Date:</strong> April 1, 2026</p>
      <p><strong>Last Updated:</strong> April 1, 2026</p>

      <p>
        These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of the Streaky
        application (&quot;the App&quot;) developed by Hey Wrist (&quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;). By downloading, installing, or using Streaky, you agree to be
        bound by these Terms.
      </p>

      <h2>1. Description of Service</h2>
      <p>
        Streaky is a habit tracking application for iPhone, iPad, and Apple Watch
        with gamification, HealthKit auto-completion, milestone tiers, and a
        narrative system. The App is designed for personal productivity and
        wellness purposes.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 13 years of age to use the App. By using Streaky,
        you represent that you meet this requirement.
      </p>

      <h2>3. HealthKit &amp; iCloud Usage</h2>
      <p>
        The App may access Apple HealthKit data to automatically track
        health-related habits. It uses Apple CloudKit to sync data across your
        devices. You may revoke HealthKit access or disable iCloud sync at any
        time through your device&apos;s Settings. Your use of these services is
        also subject to Apple&apos;s terms.
      </p>

      <h2>4. In-App Purchases</h2>
      <p>
        Streaky may offer premium features through one-time in-app purchases.
        All purchases are processed by Apple and subject to Apple&apos;s{" "}
        <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer">
          Standard EULA
        </a>.
      </p>
      <ul>
        <li>All sales are final. Refunds are handled by Apple.</li>
        <li>Prices may vary by region.</li>
        <li>We reserve the right to modify pricing for future purchases.</li>
      </ul>

      <h2>5. Gamification &amp; Narrative Elements</h2>
      <p>
        Streaky includes gamification features such as XP, levels, milestone
        tiers, and a narrative system (&quot;The Flame vs The Fade&quot;). These elements
        are for entertainment and motivation purposes only. Progress, streaks,
        and achievements within the App have no monetary value and cannot be
        exchanged, transferred, or redeemed outside the App.
      </p>

      <h2>6. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Reverse engineer, decompile, or disassemble the App</li>
        <li>Modify, adapt, or create derivative works based on the App</li>
        <li>Use the App for any unlawful purpose</li>
        <li>Attempt to manipulate streak or gamification data</li>
      </ul>

      <h2>7. Intellectual Property</h2>
      <p>
        All content, design, graphics, narrative elements, code, and other
        elements of Streaky are the intellectual property of Hey Wrist. You are
        granted a limited, non-exclusive, non-transferable license to use the
        App for personal purposes.
      </p>

      <h2>8. Disclaimer of Warranties</h2>
      <p>
        The App is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without
        warranties of any kind. We do not guarantee uninterrupted operation,
        HealthKit data accuracy, or that the App will meet your specific
        requirements.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Hey Wrist shall not be liable
        for any indirect, incidental, special, consequential, or punitive
        damages arising from your use of the App, including loss of habit data,
        streak resets, or iCloud sync failures.
      </p>

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
        <a href="mailto:founder@heywrist.com">founder@heywrist.com</a>
      </p>
      <p><strong>Developer:</strong> Hey Wrist</p>
    </PolicyLayout>
  );
}
