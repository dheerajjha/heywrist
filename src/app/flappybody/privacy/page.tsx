import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "FlappyBody - Privacy Policy",
  description: "Privacy policy for the FlappyBody app by HeyWrist",
};

export default function FlappyBodyPrivacy() {
  return (
    <PolicyLayout appName="FlappyBody" slug="flappybody" title="Privacy Policy">
      <p><strong>Effective Date:</strong> September 13, 2026</p>
      <p><strong>Last Updated:</strong> September 13, 2026</p>

      <p>
        Hey Wrist (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) built FlappyBody as a
        hands-free arcade game for iPhone. The game is played with the front
        camera: it tracks the vertical position of your head, and that position
        drives the flyer&apos;s altitude on screen. This Privacy Policy describes
        what FlappyBody accesses, what it does and does not collect, and what
        rights you have regarding your data.
      </p>
      <p>
        <strong>In short:</strong> the camera feed never leaves your device and
        is never stored. There is no analytics SDK in the app. The only thing
        FlappyBody stores outside your device is a random per-install identifier
        paired with your referral code, so that referral codes can be redeemed
        across devices. FlappyBody does not ask you for your name or your email
        address.
      </p>

      <h2>1. What FlappyBody Does Not Collect</h2>

      <h3>1.1 Camera</h3>
      <p>
        FlappyBody uses the front camera to play. The camera feed is processed
        entirely on your device by Apple&apos;s Vision framework, which is used
        to find the position of the player&apos;s head. Frames are{" "}
        <strong>never stored</strong> and <strong>never transmitted
        anywhere</strong>.
      </p>
      <p>
        You can revoke camera access at any time from Settings → Privacy &amp;
        Security → Camera on your device. FlappyBody cannot track your head
        position, and therefore cannot be played, without it.
      </p>

      <h3>1.2 Photo Library</h3>
      <p>
        FlappyBody&apos;s access to your photo library is <strong>add-only and
        write-only</strong>, and it is requested only when you explicitly tap to
        save a clip. The app <strong>cannot read</strong> your photo library.
      </p>

      <h3>1.3 Run Clips</h3>
      <p>
        Runs are recorded and written to the app&apos;s own cache directory on
        your device. A clip leaves your device only if you share it, through the
        system share sheet, to a destination you choose. Where a shared clip
        goes after that is determined by the destination you picked and its own
        privacy policy.
      </p>

      <h3>1.4 Analytics</h3>
      <p>
        There is <strong>no analytics SDK</strong> in FlappyBody. No usage data
        is collected.
      </p>

      <h2>2. What FlappyBody Does Collect</h2>

      <h3>2.1 Referral Identifier</h3>
      <p>
        So that referral codes can be redeemed across devices, FlappyBody stores
        a <strong>random per-install identifier</strong> together with a
        six-character referral code in the app&apos;s <strong>public CloudKit
        database</strong>. That identifier is randomly generated, is not derived
        from any personal information, and is never joined to any personal
        information.
      </p>
      <p>
        To state it plainly: records stored in a CloudKit public database also
        carry an identifier that Apple derives from the Apple ID signed in on
        the device. That identifier is created and managed by Apple as part of
        CloudKit. <strong>FlappyBody never reads it.</strong>
      </p>
      <p>
        CloudKit is operated by Apple and is subject to{" "}
        <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">
          Apple&apos;s Privacy Policy
        </a>.
      </p>

      <h3>2.2 Game Center</h3>
      <p>
        FlappyBody has a Game Center leaderboard. If you submit a score, Game
        Center associates that score with your Game Center identity. That
        association is handled by Apple, not by this app. Game Center is subject
        to Apple&apos;s terms and privacy policy.
      </p>

      <h3>2.3 Purchases</h3>
      <p>
        Subscriptions are processed by Apple. The app never sees your payment
        details.
      </p>

      <h2>3. Data Sharing</h2>
      <p>
        We do not sell, rent, trade, or disclose your data to any third party.
        FlappyBody sends nothing to any advertising network, analytics provider,
        or data broker, and it contains no advertising SDK, social media SDK, or
        third-party crash reporting service.
      </p>
      <p>
        Apple may collect aggregated, anonymised telemetry as part of standard
        App Store services. See{" "}
        <a href="https://www.apple.com/privacy/" target="_blank" rel="noopener noreferrer">
          Apple&apos;s Privacy Policy
        </a>{" "}
        for details.
      </p>

      <h2>4. Data Retention &amp; Deletion</h2>
      <ul>
        <li>Revoke camera or photo library access at any time from iOS Settings</li>
        <li>Delete clips from the app, or delete the app to remove everything it has written to your device</li>
        <li>Manage your Game Center data through iOS Settings and your Apple account</li>
      </ul>
      <p>
        When you uninstall FlappyBody, everything stored on your device &mdash;
        including cached run clips &mdash; is removed with it. If you would like
        the referral record described in Section 2.1 deleted, email{" "}
        <a href="mailto:founder@heywrist.com">founder@heywrist.com</a> and we
        will remove it.
      </p>

      <h2>5. Children&apos;s Privacy</h2>
      <p>
        FlappyBody is not directed at children under the age of 13. We do not
        knowingly collect personal information from children.
      </p>

      <h2>6. International Users</h2>
      <p>
        FlappyBody&apos;s gameplay data stays on your device. The referral
        record described in Section 2.1 is stored in Apple&apos;s CloudKit,
        which may hold it on infrastructure outside your country. We do not
        operate any servers of our own.
      </p>

      <h2>7. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with an updated effective date. Continued use of
        FlappyBody after changes constitutes acceptance.
      </p>

      <h2>8. Contact Us</h2>
      <p>Questions about this Privacy Policy? Contact us at:</p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:founder@heywrist.com">founder@heywrist.com</a>
      </p>
      <p><strong>Developer:</strong> Hey Wrist</p>
    </PolicyLayout>
  );
}
