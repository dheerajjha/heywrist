import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Lumina - Terms & Conditions",
  description: "Terms and conditions for the Lumina app by HeyWrist",
};

export default function LuminaTerms() {
  return (
    <PolicyLayout appName="Lumina" title="Terms & Conditions">
      <p><strong>Effective Date:</strong> April 1, 2026</p>
      <p><strong>Last Updated:</strong> April 1, 2026</p>

      <p>
        These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of the Lumina
        application (&quot;the App&quot;) developed by Hey Wrist (&quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;). By downloading, installing, or using Lumina, you agree to be
        bound by these Terms.
      </p>

      <h2>1. Description of Service</h2>
      <p>
        Lumina is a premium focus and study timer application for iPhone and
        Apple Watch featuring Pomodoro and deep work modes, ambient soundscapes,
        a virtual companion, constellation progress system, calendar sync, and
        Siri Shortcuts.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 13 years of age to use the App. By using Lumina,
        you represent that you meet this requirement.
      </p>

      <h2>3. Focus Timer Disclaimer</h2>
      <p>
        Lumina is a productivity tool and is provided for{" "}
        <strong>personal productivity and entertainment purposes only</strong>.
        We do not guarantee that using the App will improve your focus,
        productivity, or academic performance. Results vary by individual.
      </p>

      <h2>4. Calendar Integration</h2>
      <p>
        If you grant calendar access, Lumina writes completed focus sessions to
        your Apple Calendar. This is a convenience feature — we are not
        responsible for unintended calendar entries or conflicts. You can revoke
        calendar access at any time from iOS Settings.
      </p>

      <h2>5. In-App Purchases &amp; Subscriptions</h2>
      <p>
        Lumina may offer premium features through subscriptions or one-time
        purchases, including Pro access and cosmetic items (companion
        accessories, constellation themes). All purchases are processed by
        Apple and subject to Apple&apos;s{" "}
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
        Lumina includes gamification features such as a virtual companion,
        constellation unlocks, XP, achievements, and cosmetic items. These
        elements are for entertainment and motivation. Virtual items and
        progress have no monetary value and cannot be exchanged, transferred, or
        redeemed outside the App.
      </p>

      <h2>7. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Reverse engineer, decompile, or disassemble the App</li>
        <li>Manipulate focus session data, XP, or companion state</li>
        <li>Use the App for any unlawful purpose</li>
      </ul>

      <h2>8. Intellectual Property</h2>
      <p>
        All content, design, narrative elements, companion artwork,
        constellation designs, ambient soundscapes, code, and other elements
        of Lumina are the intellectual property of Hey Wrist. You are granted
        a limited, non-exclusive, non-transferable license for personal use.
      </p>

      <h2>9. Disclaimer of Warranties</h2>
      <p>
        The App is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without
        warranties of any kind. We do not guarantee timer accuracy,
        uninterrupted ambient sound playback, or calendar sync reliability.
      </p>

      <h2>10. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Hey Wrist shall not be liable
        for any indirect, incidental, special, consequential, or punitive
        damages arising from your use of the App, including:
      </p>
      <ul>
        <li>Loss of focus session data, companion progress, or constellation progress</li>
        <li>Unintended calendar entries</li>
        <li>Timer inaccuracies</li>
      </ul>

      <h2>11. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Hey Wrist from any claims
        arising from your use of the App or violation of these Terms.
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
      <p><strong>Developer:</strong> Hey Wrist</p>
    </PolicyLayout>
  );
}
