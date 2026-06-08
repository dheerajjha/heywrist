import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Tickd - Terms & Conditions",
  description: "Terms and conditions for the Tickd app by HeyWrist",
};

export default function TickdTerms() {
  return (
    <PolicyLayout appName="Tickd" slug="tickd" title="Terms & Conditions">
      <p><strong>Effective Date:</strong> June 8, 2026</p>
      <p><strong>Last Updated:</strong> June 8, 2026</p>

      <p>
        These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of the Tickd
        application (&quot;the App&quot;) developed by Hey Wrist (&quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;). By downloading, installing, or using Tickd, you agree to be
        bound by these Terms.
      </p>

      <h2>1. Description of Service</h2>
      <p>
        Tickd is a calm daily planner and to-do application for iPhone and Apple
        Watch. Features include a natural-language AI planner, a single-timeline
        day view, a Later inbox, daily anchors, gentle streaks, and iCloud sync.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 13 years of age to use the App. By using Tickd, you
        represent that you meet this requirement.
      </p>

      <h2>3. AI-Generated Content Disclaimer</h2>
      <p>
        The AI planner is powered by a secure enterprise cloud AI service
        accessed over HTTPS and may produce inaccurate, incomplete, or
        unexpected schedules. You acknowledge:
      </p>
      <ul>
        <li>AI-generated plans are <strong>suggestions</strong> for your convenience only</li>
        <li>You should review schedules before relying on them</li>
        <li>We are not liable for missed events or actions taken based on AI-generated plans</li>
      </ul>

      <h2>4. Your Content</h2>
      <p>
        All tasks, schedules, and other content you create are your property.
        They are stored on your device and in your private iCloud account. You
        retain all rights to your content, and we do not claim ownership of it.
      </p>
      <p>
        You are responsible for backing up your data. We are not liable for data
        loss due to device failure, iCloud issues, or app uninstallation.
      </p>

      <h2>5. In-App Purchases &amp; Subscriptions</h2>
      <p>
        Tickd offers an optional premium tier, Tickd Pro, as a monthly or annual
        auto-renewable subscription and a one-time lifetime purchase. All
        purchases are processed by Apple and subject to Apple&apos;s{" "}
        <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer">
          Standard EULA
        </a>.
      </p>
      <ul>
        <li>Subscriptions renew automatically unless cancelled at least 24 hours before the end of the current period.</li>
        <li>Manage or cancel subscriptions in your Apple ID account settings.</li>
        <li>Prices may vary by region. Refunds are handled by Apple.</li>
      </ul>

      <h2>6. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Reverse engineer, decompile, or disassemble the App</li>
        <li>Abuse the AI service (e.g., excessive automated requests)</li>
        <li>Use the App for any unlawful purpose</li>
        <li>Attempt to bypass usage limits or extract underlying models</li>
      </ul>

      <h2>7. Intellectual Property</h2>
      <p>
        All design, code, and other elements of Tickd are the intellectual
        property of Hey Wrist. You are granted a limited, non-exclusive,
        non-transferable license for personal use.
      </p>

      <h2>8. Disclaimer of Warranties</h2>
      <p>
        The App is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without
        warranties of any kind. We do not guarantee the accuracy of AI features,
        the availability of the AI service, or uninterrupted operation.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Hey Wrist shall not be liable for
        any indirect, incidental, special, consequential, or punitive damages
        arising from your use of the App, including loss of tasks or schedules,
        inaccurate AI plans, missed reminders, or iCloud sync failures.
      </p>

      <h2>10. Termination</h2>
      <p>
        You may stop using the App at any time by uninstalling it. We reserve the
        right to discontinue or modify the App or AI services without prior
        notice.
      </p>

      <h2>11. Changes to These Terms</h2>
      <p>
        We may modify these Terms at any time. Continued use after changes
        constitutes acceptance.
      </p>

      <h2>12. Governing Law</h2>
      <p>
        These Terms shall be governed by the laws of the jurisdiction in which
        the developer resides.
      </p>

      <h2>13. Contact Us</h2>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:founder@heywrist.com">founder@heywrist.com</a>
      </p>
      <p><strong>Developer:</strong> Hey Wrist</p>
    </PolicyLayout>
  );
}
