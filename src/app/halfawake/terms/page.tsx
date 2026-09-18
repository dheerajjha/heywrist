import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Half Awake - Terms of Use",
  description: "Terms of use for the Half Awake voice dream journal by Hey Wrist",
};

export default function HalfAwakeTerms() {
  return (
    <PolicyLayout appName="Half Awake" slug="halfawake" title="Terms of Use">
      <p><strong>Effective date:</strong> 18 September 2026</p>
      <p><strong>Last updated:</strong> 18 September 2026</p>

      <h2>1. The agreement that governs purchases</h2>
      <p>
        Half Awake is distributed through the App Store, and any purchase you make in it is governed
        by Apple&rsquo;s{" "}
        <a
          href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Licensed Application End User License Agreement
        </a>{" "}
        (the standard EULA). These terms sit alongside it. Where the two disagree about your
        purchase, Apple&rsquo;s agreement wins.
      </p>

      <h2>2. What Half Awake is</h2>
      <p>
        A voice journal for recording dreams on waking, transcribing them on your device, and
        keeping a record of what recurs across entries.
      </p>

      <h2>3. What it is not</h2>
      <p>
        Half Awake does not interpret your dreams and makes no claim that they mean anything. It
        offers no divination, fortune telling, prediction or guidance about the future.
      </p>
      <p>
        <strong>It is also not a medical or mental-health app.</strong> It does not diagnose,
        treat or monitor any sleep disorder or condition, it is not a sleep tracker, and nothing in
        it is medical advice. If your sleep or your dreams are distressing you, please speak to a
        qualified professional.
      </p>

      <h2>4. Subscriptions and the one-time purchase</h2>
      <p>
        The core journal &mdash; recording, on-device transcription, and your entries &mdash; is
        free and has no time limit. Half Awake Pro adds the extra features described in the app.
      </p>
      <ul>
        <li>Monthly and annual subscriptions renew automatically unless cancelled at least 24 hours before the current period ends.</li>
        <li>Where a free trial is offered, any unused part of it is forfeited if you buy a subscription during the trial.</li>
        <li>Your Apple Account is charged at confirmation of purchase and again at each renewal.</li>
        <li>Manage or cancel at any time in iOS Settings &rsaquo; your Apple Account &rsaquo; Subscriptions.</li>
        <li>The lifetime option is a one-time purchase and does not renew.</li>
      </ul>

      <h2>5. Refunds</h2>
      <p>
        Apple handles all billing, so refunds are requested from Apple at{" "}
        <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">
          reportaproblem.apple.com
        </a>. We cannot issue a refund ourselves, but tell us what went wrong and we will try to fix
        it.
      </p>

      <h2>6. Your data</h2>
      <p>
        Your recordings, transcripts and journal are yours. They stay on your device, and on your
        own iCloud account if you turn sync on. We do not hold them, cannot read them and cannot
        recover them for you if you delete them or lose the device. Export regularly if the journal
        matters to you.
      </p>

      <h2>7. Acceptable use</h2>
      <p>
        Use Half Awake for your own journal. Do not attempt to decompile it, resell it, or use it to
        break the law.
      </p>

      <h2>8. Availability and warranty</h2>
      <p>
        Half Awake is provided as is. We try to keep it working on current versions of iOS and
        watchOS, but we do not guarantee it will be uninterrupted or error-free, and on-device
        transcription depends on Apple frameworks, language assets and hardware we do not control.
      </p>

      <h2>9. Liability</h2>
      <p>
        To the extent the law allows, our liability is limited to the amount you paid for the app in
        the twelve months before the claim. Nothing here limits liability that cannot be limited by
        law.
      </p>

      <h2>10. Changes</h2>
      <p>
        We may update these terms. The date at the top of this page changes when we do, and material
        changes are noted in the app&rsquo;s release notes.
      </p>

      <h2>11. Contact</h2>
      <p>
        <a href="mailto:founder@heywrist.com">founder@heywrist.com</a>
      </p>
    </PolicyLayout>
  );
}
