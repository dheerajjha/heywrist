import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "FlappyBody - Terms & Conditions",
  description: "Terms and conditions for the FlappyBody app by HeyWrist",
};

export default function FlappyBodyTerms() {
  return (
    <PolicyLayout appName="FlappyBody" slug="flappybody" title="Terms & Conditions">
      <p><strong>Effective Date:</strong> September 13, 2026</p>
      <p><strong>Last Updated:</strong> September 13, 2026</p>

      <p>
        These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of the
        FlappyBody application (&quot;the App&quot;) developed by Hey Wrist
        (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By downloading,
        installing, or using FlappyBody, you agree to be bound by these Terms.
      </p>

      <h2>1. Description of Service</h2>
      <p>
        FlappyBody is a hands-free arcade game for iPhone. The front camera
        tracks the vertical position of your head, and that position drives a
        flyer&apos;s altitude on screen. Score is the number of columns cleared
        and reps are counted push-ups. A Free move mode removes calibration and
        can be played seated.
      </p>
      <p>
        <strong>FlappyBody is a game.</strong> It is not a fitness, training,
        health, or medical product, it is not a substitute for one, and it does
        not provide fitness, health, or medical advice. Scores, reps, and
        leaderboard positions are game scoring only and are not a measurement or
        assessment of your fitness or your health. Play in a clear space, within
        your own limits, and stop if you feel uncomfortable.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 13 years of age to use the App. By using
        FlappyBody, you represent that you meet this requirement.
      </p>

      <h2>3. Camera &amp; Device Access</h2>
      <p>
        The App requires access to the front camera in order to work. The camera
        feed is processed on your device to locate your head; frames are not
        stored or transmitted. Access to your photo library is add-only and is
        requested only when you choose to save a clip. You may revoke either
        permission at any time in your device&apos;s Settings, though the App
        cannot be played without camera access. See our{" "}
        <a href="/flappybody/privacy">Privacy Policy</a> for details.
      </p>

      <h2>4. Free Play &amp; Subscriptions</h2>
      <p>
        FlappyBody is free to download. Free play includes 10 runs on the day
        you install the App and 3 runs per day thereafter. Unlimited runs are
        available through an auto-renewing subscription at $4.99 per week or
        $39.99 per year. Prices are in US dollars and may vary by region; the
        price applicable to you is shown in the App Store before you confirm a
        purchase.
      </p>
      <ul>
        <li>Payment is charged to your App Store account at confirmation of purchase.</li>
        <li>Subscriptions renew automatically unless auto-renew is turned off at least 24 hours before the end of the current period.</li>
        <li>Your account is charged for renewal within 24 hours prior to the end of the current period.</li>
        <li>You can manage or cancel your subscription in your App Store account settings at any time after purchase.</li>
        <li>Refunds are handled by Apple, not by us.</li>
        <li>We may change the free run allowance or subscription pricing for future versions and future purchases.</li>
      </ul>
      <p>
        All purchases are processed by Apple and are subject to Apple&apos;s{" "}
        <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer">
          Standard EULA
        </a>.
      </p>

      <h2>5. Referral Program</h2>
      <p>
        Each installation is issued a six-character referral code. When your
        code is redeemed, both you and the person who redeemed it receive one
        free month. Referral credit has no cash value, cannot be exchanged,
        transferred, or redeemed outside the App, and may not be sold. We may
        modify, suspend, or withdraw the referral program, and may void credit
        obtained through fraudulent or automated redemption.
      </p>

      <h2>6. Game Center &amp; Leaderboards</h2>
      <p>
        FlappyBody offers a Game Center leaderboard. Game Center is operated by
        Apple and your use of it is subject to Apple&apos;s terms. We may remove
        scores we reasonably believe were obtained by manipulating the App, the
        camera input, or the device clock, and may exclude an installation from
        the leaderboard for repeated manipulation.
      </p>

      <h2>7. Recorded Clips</h2>
      <p>
        Runs you record are yours. They are written to the App&apos;s cache
        directory on your device, and they are shared only when you choose to
        share them. Because clips are held in a cache rather than in permanent
        storage, save any clip you want to keep. You are solely responsible for
        the content of anything you record and share and for ensuring that
        anyone else appearing in a clip consents to it being shared.
      </p>

      <h2>8. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Reverse engineer, decompile, or disassemble the App</li>
        <li>Modify, adapt, or create derivative works based on the App</li>
        <li>Use the App for any unlawful purpose</li>
        <li>Attempt to manipulate scores, reps, run limits, or referral credit</li>
        <li>Record or share clips of other people without their consent</li>
      </ul>

      <h2>9. Intellectual Property</h2>
      <p>
        All content, design, graphics, code, and other elements of FlappyBody
        are the intellectual property of Hey Wrist. You are granted a limited,
        non-exclusive, non-transferable license to use the App for personal,
        non-commercial purposes.
      </p>

      <h2>10. Disclaimer of Warranties</h2>
      <p>
        The App is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot;
        basis without warranties of any kind. We do not guarantee uninterrupted
        operation, the accuracy of head tracking or rep counting under any
        particular lighting, camera placement, or clothing, or that the App will
        meet your specific requirements.
      </p>

      <h2>11. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Hey Wrist shall not be liable
        for any indirect, incidental, special, consequential, or punitive
        damages arising from your use of the App, including lost scores, lost or
        cleared run clips, leaderboard errors, or referral credit that fails to
        apply.
      </p>

      <h2>12. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Hey Wrist from any claims
        arising from your use of the App or violation of these Terms.
      </p>

      <h2>13. Termination</h2>
      <p>
        You may stop using the App at any time by uninstalling it. Uninstalling
        does not cancel a subscription &mdash; cancel it in your App Store
        account settings. We reserve the right to discontinue or modify the App
        without prior notice.
      </p>

      <h2>14. Changes to These Terms</h2>
      <p>
        We may modify these Terms at any time. Continued use after changes
        constitutes acceptance.
      </p>

      <h2>15. Governing Law</h2>
      <p>
        These Terms shall be governed by the laws of the jurisdiction in which
        the developer resides.
      </p>

      <h2>16. Contact Us</h2>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:founder@heywrist.com">founder@heywrist.com</a>
      </p>
      <p><strong>Developer:</strong> Hey Wrist</p>
    </PolicyLayout>
  );
}
