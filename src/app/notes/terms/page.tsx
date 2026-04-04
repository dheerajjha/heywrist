import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Notes - Terms & Conditions",
  description: "Terms and conditions for the Notes app by HeyWrist",
};

export default function NotesTerms() {
  return (
    <PolicyLayout appName="Notes" title="Terms & Conditions">
      <p>
        <strong>Effective Date:</strong> March 19, 2026
      </p>
      <p>
        By downloading or using Notes (&quot;the App&quot;), you agree to be bound
        by these Terms &amp; Conditions. If you do not agree, please do not use
        the App.
      </p>

      <h2>Use of the App</h2>
      <p>
        Notes is an AI-powered notes and tasks app for iPhone and Apple Watch.
        The App is provided for personal productivity and informational
        purposes.
      </p>

      <h2>AI-Generated Content</h2>
      <p>
        AI features including summarization, categorization, and the Ask AI
        chat may produce inaccurate or incomplete results. You should not
        rely solely on AI-generated content for critical decisions.
      </p>

      <h2>Gmail Integration</h2>
      <p>
        The Gmail integration accesses your email with your explicit consent
        via Google OAuth2. You may revoke access at any time through your
        Google Account settings. We are not responsible for the content of
        your emails.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content, design, and code in Notes are the intellectual property
        of Ranju Jha. You may not copy, modify, distribute, or reverse
        engineer any part of the App.
      </p>

      <h2>Disclaimer of Warranties</h2>
      <p>
        The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of
        any kind, either express or implied. We do not guarantee the accuracy
        or reliability of any AI-generated content or features.
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
