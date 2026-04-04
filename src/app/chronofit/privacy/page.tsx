import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "ChronoFit - Privacy Policy",
  description: "Privacy policy for the ChronoFit app by HeyWrist",
};

export default function ChronoFitPrivacy() {
  return (
    <PolicyLayout appName="ChronoFit" title="Privacy Policy">
      <p>
        <strong>Effective Date:</strong> March 19, 2026
      </p>
      <p>
        Ranju Jha (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) built ChronoFit as a
        narrative fitness timer app for iPhone and Apple Watch. This Privacy
        Policy explains how ChronoFit handles your information.
      </p>

      <h2>Information We Collect</h2>
      <p>
        ChronoFit does <strong>not</strong> collect any personal information.
        The app does not require accounts, sign-ups, or any form of
        registration.
      </p>

      <h2>How Your Data Is Stored</h2>
      <p>
        All workout data, stats, XP, streaks, achievements, and story
        progress are stored locally on your device using UserDefaults. No
        data is uploaded to any server.
      </p>

      <h2>Data Sharing</h2>
      <p>
        We do not share, sell, rent, or disclose your personal data to any
        third party. Period.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        ChronoFit does not include any third-party analytics, advertising, or
        tracking SDKs. No data is sent to external services.
      </p>

      <h2>Apple Watch</h2>
      <p>
        The ChronoFit Apple Watch app operates independently and stores its
        data locally on your watch. No data passes through external servers.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        ChronoFit is not directed at children under the age of 13. We do not
        knowingly collect personal information from children.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will
        be posted on this page with an updated effective date.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at <a href="mailto:support@heywrist.com">support@heywrist.com</a>.
      </p>
    </PolicyLayout>
  );
}
