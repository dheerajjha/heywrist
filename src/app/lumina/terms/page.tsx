import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Lumina - Terms & Conditions",
  description: "Terms and conditions for the Lumina app by HeyWrist",
};

export default function LuminaTerms() {
  return (
    <PolicyLayout appName="Lumina" title="Terms & Conditions">
      <p>
        <strong>Effective Date:</strong> March 19, 2026
      </p>
      <p>
        By downloading or using Lumina (&quot;the App&quot;), you agree to be bound
        by these Terms &amp; Conditions. If you do not agree, please do not use
        the App.
      </p>

      <h2>Use of the App</h2>
      <p>
        Lumina is a focus and study timer app for iPhone and Apple Watch that
        provides productivity tools with gamification and narrative elements.
        The App is provided for personal productivity and entertainment
        purposes.
      </p>

      <h2>In-App Purchases</h2>
      <p>
        Lumina offers optional in-app purchases including a Pro subscription
        and cosmetic items. All purchases are processed through Apple and are
        subject to Apple&apos;s terms and conditions. You can manage or cancel
        subscriptions through your device&apos;s Settings.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content, design, narrative elements, and code in Lumina are the
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
        damages arising from your use of or inability to use the App.
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
