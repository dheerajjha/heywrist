import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "ChronoFit - Terms & Conditions",
  description: "Terms and conditions for the ChronoFit app by HeyWrist",
};

export default function ChronoFitTerms() {
  return (
    <PolicyLayout appName="ChronoFit" title="Terms & Conditions">
      <p><strong>Effective Date:</strong> April 1, 2026</p>
      <p><strong>Last Updated:</strong> April 1, 2026</p>

      <p>
        These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of the ChronoFit
        application (&quot;the App&quot;) developed by Ranju Jha (&quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;). By downloading, installing, or using ChronoFit, you agree to
        be bound by these Terms.
      </p>

      <h2>1. Description of Service</h2>
      <p>
        ChronoFit is a narrative fitness timer application for iPhone and Apple
        Watch featuring interval training timers, gamification (XP, levels,
        streaks, achievements), story-driven workouts, and HealthKit integration.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 13 years of age to use the App. By using ChronoFit,
        you represent that you meet this requirement.
      </p>

      <h2>3. Fitness &amp; Medical Disclaimer</h2>
      <p>
        ChronoFit is <strong>not a medical device</strong> and does not provide
        medical advice, diagnosis, or treatment. You acknowledge that:
      </p>
      <ul>
        <li>The App is designed for general fitness and entertainment purposes only</li>
        <li>You should consult a qualified healthcare provider before beginning any new exercise program</li>
        <li>You exercise at your own risk and are responsible for monitoring your own physical condition</li>
        <li>Timer-guided workouts are suggestions, not prescriptions — adjust intensity to your fitness level</li>
        <li>Heart rate data displayed on Apple Watch is approximate and not a medical measurement</li>
        <li>Stop exercising immediately if you feel pain, dizziness, or discomfort</li>
      </ul>

      <h2>4. HealthKit Usage</h2>
      <p>
        The App may write workout data to Apple HealthKit and read heart rate /
        calorie data during sessions. You may revoke HealthKit permissions at
        any time from iOS Settings. HealthKit data written by ChronoFit remains
        in Apple Health after app deletion and can be managed from the Health app.
      </p>

      <h2>5. In-App Purchases &amp; Subscriptions</h2>
      <p>
        ChronoFit may offer premium features through subscriptions or one-time
        purchases, including Pro access and cosmetic items. All purchases are
        processed by Apple and subject to Apple&apos;s{" "}
        <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer">
          Standard EULA
        </a>.
      </p>
      <ul>
        <li>Subscriptions auto-renew unless canceled 24 hours before the billing period ends</li>
        <li>Manage or cancel subscriptions from Settings → [your name] → Subscriptions</li>
        <li>All sales are final. Refunds are handled by Apple.</li>
        <li>Prices may vary by region.</li>
      </ul>

      <h2>6. Gamification &amp; Virtual Items</h2>
      <p>
        ChronoFit includes gamification features such as XP, levels, streaks,
        achievements, narrative chapters, and cosmetic items. These elements are
        for entertainment and motivation purposes only. Virtual items and
        progress have no monetary value and cannot be exchanged, transferred, or
        redeemed outside the App.
      </p>

      <h2>7. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Reverse engineer, decompile, or disassemble the App</li>
        <li>Manipulate gamification data, XP, or achievements</li>
        <li>Use the App for any unlawful purpose</li>
      </ul>

      <h2>8. Intellectual Property</h2>
      <p>
        All content, design, narrative elements, story content, graphics, code,
        and other elements of ChronoFit are the intellectual property of Ranju
        Jha. You are granted a limited, non-exclusive, non-transferable license
        for personal use.
      </p>

      <h2>9. Disclaimer of Warranties</h2>
      <p>
        The App is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without
        warranties of any kind. We do not guarantee calorie calculations,
        heart rate accuracy, or uninterrupted operation.
      </p>

      <h2>10. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Ranju Jha shall not be liable
        for any indirect, incidental, special, consequential, or punitive
        damages arising from your use of the App, including:
      </p>
      <ul>
        <li>Physical injury sustained during exercise guided by the App</li>
        <li>Inaccurate calorie or heart rate data</li>
        <li>Loss of workout history, XP, or story progress</li>
      </ul>

      <h2>11. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Ranju Jha from any claims
        arising from your use of the App, including injury claims, or
        violation of these Terms.
      </p>

      <h2>12. Termination</h2>
      <p>
        You may stop using the App at any time by uninstalling it. We reserve
        the right to discontinue or modify the App without prior notice.
      </p>

      <h2>13. Changes to These Terms</h2>
      <p>
        We may modify these Terms at any time. Continued use after changes
        constitutes acceptance.
      </p>

      <h2>14. Governing Law</h2>
      <p>
        These Terms shall be governed by the laws of the jurisdiction in which
        the developer resides.
      </p>

      <h2>15. Contact Us</h2>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:support@heywrist.com">support@heywrist.com</a>
      </p>
      <p><strong>Developer:</strong> Ranju Jha</p>
    </PolicyLayout>
  );
}
