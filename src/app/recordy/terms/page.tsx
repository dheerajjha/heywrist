import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Recordy - Terms & Conditions",
  description: "Terms and conditions for the Recordy app by HeyWrist",
};

export default function RecordyTerms() {
  return (
    <PolicyLayout appName="Recordy" title="Terms & Conditions">
      <p>
        <strong>Effective Date:</strong> March 19, 2026
      </p>
      <p>
        By downloading or using Recordy (&quot;the App&quot;), you agree to be bound by
        these Terms &amp; Conditions. If you do not agree, please do not use the
        App.
      </p>

      <h2>Use of the App</h2>
      <p>
        Recordy is an audio recording app for iPhone and Apple Watch. You are
        solely responsible for ensuring that your use of the recording features
        complies with all applicable laws, including laws regarding consent to
        recording conversations.
      </p>

      <h2>Recording Laws</h2>
      <p>
        Many jurisdictions require the consent of all parties before recording a
        conversation. It is <strong>your responsibility</strong> to understand
        and comply with the recording laws in your jurisdiction. We are not
        liable for any illegal or unauthorized recordings made using the App.
      </p>

      <h2>Your Content</h2>
      <p>
        All recordings and transcriptions you create with Recordy are your
        property. They are stored on your device and we have no access to them.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content, design, and code in Recordy are the intellectual property
        of Ranju Jha. You may not copy, modify, distribute, or reverse engineer
        any part of the App.
      </p>

      <h2>Disclaimer of Warranties</h2>
      <p>
        The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of
        any kind. We do not guarantee the accuracy of transcriptions or the
        uninterrupted operation of recording features.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Ranju Jha shall not be liable
        for any indirect, incidental, special, consequential, or punitive
        damages arising from your use of or inability to use the App, including
        but not limited to loss of recordings.
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
