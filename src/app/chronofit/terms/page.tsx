import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "ChronoFit - Terms & Conditions",
  description: "Terms and conditions for the ChronoFit app by HeyWrist",
};

export default function ChronoFitTerms() {
  return (
    <PolicyLayout appName="ChronoFit" title="Terms & Conditions">
      <p>
        <strong>Effective Date:</strong> March 19, 2026
      </p>
      <p>
        By downloading or using ChronoFit (&quot;the App&quot;), you agree to be bound
        by these Terms &amp; Conditions. If you do not agree, please do not use
        the App.
      </p>

      <h2>Use of the App</h2>
      <p>
        ChronoFit is a fitness timer app for iPhone and Apple Watch that
        provides interval timers with gamification and storytelling elements.
        The App is provided for fitness and entertainment purposes only.
      </p>

      <h2>Not Medical Advice</h2>
      <p>
        ChronoFit is <strong>not a medical device</strong> and does not provide
        medical advice. Always consult a qualified healthcare provider before
        beginning any new exercise program.
      </p>

      <h2>In-App Purchases</h2>
      <p>
        ChronoFit offers optional in-app purchases including a Pro subscription
        and cosmetic items. All purchases are processed through Apple and are
        subject to Apple&apos;s terms and conditions. You can manage or cancel
        subscriptions through your device&apos;s Settings.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content, design, narrative elements, and code in ChronoFit are the
        intellectual property of Ranju Jha. You may not copy, modify,
        distribute, or reverse engineer any part of the App.
      </p>

      <h2>Disclaimer of Warranties</h2>
      <p>
        The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of
        any kind, either express or implied. We do not guarantee the accuracy
        or reliability of any features provided by the App.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Ranju Jha shall not be liable
        for any indirect, incidental, special, consequential, or punitive
        damages arising from your use of or inability to use the App,
        including any injury sustained during exercise.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We reserve the right to modify these Terms at any time. Continued use
        of the App after changes constitutes acceptance of the updated Terms.
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
