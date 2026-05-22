import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Sona - Privacy Policy",
  description: "Privacy policy for the Sona app by Hey Wrist",
};

export default function SonaPrivacy() {
  return (
    <PolicyLayout appName="Sona" slug="chatty" title="Privacy Policy">
      <p><strong>Effective Date:</strong> May 1, 2026</p>
      <p><strong>Last Updated:</strong> May 22, 2026</p>

      <p>
        Hey Wrist (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) builds Sona &mdash; an
        AI chat companion for Apple Watch and iPhone. This Privacy Policy
        explains what information Sona accesses, how it is processed, who it is
        shared with, and what controls you have over your data.
      </p>
      <p>
        <strong>In short:</strong> Sona does not require an account and never
        sees your name or email. Your messages are sent to a secure
        enterprise cloud AI service to generate AI responses. We use
        Mixpanel for anonymous, opt-out usage analytics, and our own
        bug-reporting service for crash diagnostics. Conversations, persona
        memory, streaks, and starred messages are stored only on your
        device. Apple processes any in-app purchases &mdash; we never
        receive your payment information.
      </p>

      <h2>1. Information Sona Accesses on Your Device</h2>

      <h3>1.1 Microphone (Optional)</h3>
      <p>
        Sona requests microphone access only when you tap the voice button.
        Audio is converted to text using Apple&apos;s on-device{" "}
        <code>SFSpeechRecognizer</code> framework. On supported devices and
        locales recognition runs fully on-device; on devices that do not
        support on-device recognition for your locale, Apple may transmit a
        short audio snippet to its speech servers (this is governed by{" "}
        <a href="https://www.apple.com/legal/privacy/data/en/speech-and-keyboard/" target="_blank" rel="noopener noreferrer">
          Apple&apos;s Speech and Keyboard privacy notice
        </a>
        ). We never receive a copy of the audio. You can revoke microphone
        access at any time from iOS Settings &rarr; Sona.
      </p>

      <h3>1.2 Camera and Photo Library (Optional)</h3>
      <p>
        On iPhone, Sona requests Camera and Photo Library access only when
        you tap the image-attach button to share a photo with the AI for
        vision analysis. The image you attach is sent to our enterprise
        cloud AI service (see Section 2) so the model can describe it. We
        do not access photos in the background and we do not scan your
        library.
      </p>

      <h3>1.3 Notifications (Optional)</h3>
      <p>
        Sona schedules <strong>local</strong> notifications for the daily
        prompt. These run entirely on your device through Apple&apos;s
        <code>UNUserNotificationCenter</code>. We do not operate a push
        server; nothing is transmitted to receive a daily prompt.
      </p>

      <h3>1.4 Information Sona Does NOT Access</h3>
      <ul>
        <li>Your name, email address, phone number, or any account credentials</li>
        <li>Location data</li>
        <li>Contacts, calendar, or health data</li>
        <li>Browsing history or activity outside the app</li>
        <li>Advertising identifiers (we do not use IDFA)</li>
      </ul>

      <h2>2. AI Processing &mdash; Enterprise Cloud AI Provider</h2>
      <p>
        Sona&apos;s AI personas are powered by a{" "}
        <strong>secure enterprise cloud AI service</strong>, hosted in
        US-based cloud regions and bound by an enterprise data-processing
        agreement.
      </p>
      <p>When you send a message, Sona transmits the following to the AI service over HTTPS:</p>
      <ul>
        <li>The text of your message</li>
        <li>An attached image, if you chose to attach one</li>
        <li>Recent messages from the same conversation, used as context</li>
        <li>The selected persona&apos;s system prompt</li>
        <li>A small set of facts you have explicitly saved as Memory in the app</li>
      </ul>
      <p>
        We do <strong>not</strong> attach your name, email, device
        identifier, IP address (beyond what any standard HTTPS request
        contains), or any account information &mdash; we have none of those.
      </p>
      <p>
        <strong>How the AI service uses this data:</strong> under our
        provider&apos;s published enterprise terms:
      </p>
      <ul>
        <li>Your prompts and completions are <strong>not used to train</strong> the provider&apos;s or its upstream model partners&apos; foundation models.</li>
        <li>The provider may retain prompts and completions for up to <strong>30 days</strong> for abuse and misuse monitoring, accessible only to authorized personnel under strict access controls. After 30 days they are deleted.</li>
        <li>Data is processed in the regions specified by the provider for the deployment.</li>
      </ul>
      <p>
        <strong>Web access is restricted.</strong> Sona&apos;s deployment
        does not give the AI tools the ability to freely browse the open
        internet. The AI cannot fetch arbitrary URLs, sign into services,
        or reach out to third-party APIs on your behalf. A small set of
        personas optionally use the provider&apos;s curated web grounding
        to cite up-to-date facts; that grounding is provided by the same
        AI service and governed by the same enterprise terms.
      </p>

      <h2>3. Analytics &mdash; Mixpanel</h2>
      <p>
        Sona uses <a href="https://mixpanel.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">Mixpanel</a>{" "}
        to understand how the app is used and where to invest engineering
        effort. The data we send is intentionally minimal:
      </p>
      <ul>
        <li>An anonymous device identifier derived from Apple&apos;s <code>identifierForVendor</code> (resets when you delete the app from all your devices)</li>
        <li>App version, build number, iOS/watchOS version, and device model</li>
        <li>Event names &mdash; e.g. &quot;conversation created&quot;, &quot;voice opened&quot;, &quot;paywall shown&quot;, &quot;purchase completed&quot;</li>
        <li>Coarse event properties &mdash; persona name, message length (count only, not content), source screen</li>
      </ul>
      <p>
        We <strong>never</strong> send the content of your messages, AI
        replies, persona memories, or any personally identifiable
        information to Mixpanel.
      </p>
      <p>
        <strong>Opt out:</strong> Open Sona &rarr; Settings &rarr; Privacy
        &rarr; turn off &quot;Share anonymous usage&quot;. We will stop
        sending events immediately and Mixpanel will discard your existing
        anonymous profile.
      </p>

      <h2>4. Crash and Bug Reporting &mdash; Hey Wrist Bug Reporter</h2>
      <p>
        Sona includes our internal bug-reporting SDK that sends crash
        diagnostics to <code>bug.heywrist.com</code>, a service we operate.
        In the App Store build it transmits only:
      </p>
      <ul>
        <li>Crash type and stack trace</li>
        <li>App version and build number</li>
        <li>iOS/watchOS version and device model</li>
        <li>An anonymous installation identifier</li>
      </ul>
      <p>
        Production builds do <strong>not</strong> capture screenshots, do
        not capture network logs, and do not associate any tester email
        with the report. Diagnostic data is retained for up to 90 days and
        then deleted.
      </p>

      <h2>5. In-App Purchases &mdash; Apple StoreKit</h2>
      <p>
        Sona offers an optional Sona Pro subscription (monthly or yearly)
        and a one-time Sona Pro Lifetime purchase. All payments are
        processed by <strong>Apple</strong> via the App Store using Apple
        StoreKit.
      </p>
      <ul>
        <li>We never receive or store your payment-method details, billing address, or Apple ID.</li>
        <li>Apple sends Sona a signed transaction receipt that we use only to verify that you are entitled to Sona Pro features. The receipt is processed on your device using StoreKit 2.</li>
        <li>Restoring a purchase on a new device contacts Apple, not us.</li>
        <li>Subscriptions auto-renew until cancelled. Manage or cancel at any time in iOS Settings &rarr; your Apple ID &rarr; Subscriptions.</li>
      </ul>
      <p>
        Apple&apos;s handling of your payment data is governed by{" "}
        <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">
          Apple&apos;s Privacy Policy
        </a>
        .
      </p>

      <h2>6. Data Stored Only on Your Device</h2>
      <p>
        The following data lives only on your device, in the app&apos;s
        sandboxed <code>UserDefaults</code> storage. It is never uploaded
        to a server we operate:
      </p>
      <ul>
        <li>Conversation history (your messages and AI replies)</li>
        <li>Persona memory (facts you ask Sona to remember)</li>
        <li>Streak data and starred messages</li>
        <li>App settings, theme choice, language preference, and notification preferences</li>
        <li>The free-tier daily message counter</li>
      </ul>

      <h2>7. Apple Watch Integration</h2>
      <p>
        Sona&apos;s Apple Watch app stores its own copy of conversations and
        memory in the Watch&apos;s sandboxed storage. Data synced between the
        Apple Watch and iPhone uses Apple&apos;s WatchConnectivity framework
        &mdash; a direct, encrypted, device-to-device channel. The Watch
        does not connect to the cloud AI service independently for chat
        &mdash; when paired, AI requests are routed through your iPhone;
        when the Watch is solo (e.g. on cellular), it sends requests using
        the same cloud AI service described in Section 2.
      </p>
      <p>
        The Watch does not initiate in-app purchases. If you tap a Pro
        feature on Watch while on the free tier, the Watch will prompt you
        to upgrade in Sona on iPhone.
      </p>

      <h2>8. No Accounts</h2>
      <p>
        Sona has no sign-up, no login, and no user accounts. There are no
        credentials to lose, reset, or breach. Your purchase entitlement is
        tied to your Apple ID, which Apple manages.
      </p>

      <h2>9. Data Sharing</h2>
      <p>We do not sell, rent, trade, or share your data with third parties for advertising or marketing purposes.</p>
      <p>The only third parties that receive any data from Sona are:</p>
      <ul>
        <li><strong>Our enterprise cloud AI provider</strong> &mdash; to generate AI responses (Section 2)</li>
        <li><strong>Mixpanel</strong> &mdash; for anonymous usage analytics, opt-out available (Section 3)</li>
        <li><strong>Apple</strong> &mdash; for in-app purchases and standard App Store telemetry (Section 5)</li>
        <li><strong>Hey Wrist Bug Reporter</strong> (operated by us) &mdash; for crash diagnostics (Section 4)</li>
      </ul>

      <h2>10. Your Rights and Controls</h2>
      <ul>
        <li><strong>Delete a single conversation:</strong> swipe left on the conversation list.</li>
        <li><strong>Delete everything on this device:</strong> Settings &rarr; Data &rarr; &quot;Delete all local data&quot;. This wipes conversations, memory, streaks, and starred messages on the iPhone and pushes a wipe to the paired Apple Watch.</li>
        <li><strong>Stop analytics:</strong> Settings &rarr; Privacy &rarr; turn off &quot;Share anonymous usage&quot;.</li>
        <li><strong>Cancel Sona Pro:</strong> iOS Settings &rarr; your Apple ID &rarr; Subscriptions &rarr; Sona &rarr; Cancel.</li>
        <li><strong>Revoke permissions:</strong> iOS Settings &rarr; Sona &rarr; toggle off Microphone, Camera, Photos, or Notifications.</li>
        <li><strong>Delete the app:</strong> uninstalling Sona deletes all on-device data permanently.</li>
      </ul>
      <p>
        EU/UK residents have the right under GDPR/UK GDPR to access, correct,
        or delete personal data, and to object to processing or restrict it.
        Because we do not collect personally identifiable information, the
        practical exercise of these rights is achieved through the controls
        above. If you believe we hold data about you and want to exercise
        these rights formally, contact us at{" "}
        <a href="mailto:founder@heywrist.com">founder@heywrist.com</a>.
      </p>
      <p>
        California residents have the right under the CCPA to know, delete,
        and opt out of the &quot;sale&quot; of personal information.
        We do not sell personal information.
      </p>

      <h2>11. Children&apos;s Privacy</h2>
      <p>
        Sona is rated 12+ and is not directed at children under 13. We do
        not knowingly collect personal information from children under 13.
        If you are a parent or guardian and believe your child has used
        Sona, contact us and we will help you delete any associated
        on-device data (although we typically have nothing to delete from
        our servers because we have no account).
      </p>

      <h2>12. International Users</h2>
      <p>
        Our enterprise cloud AI provider processes prompts in US-based
        cloud regions. Mixpanel is operated in the United States. By
        using Sona you consent to these transfers. Our AI provider and
        Mixpanel rely on Standard Contractual Clauses for cross-border
        transfers from the EU/UK.
      </p>

      <h2>13. Security</h2>
      <p>
        All network requests from Sona use HTTPS with certificate
        validation. The API key embedded in the app is obfuscated to
        slow casual extraction and is not the same key we use server-side
        for unrelated services. Apple&apos;s app sandbox prevents other
        apps on your device from reading Sona&apos;s on-device storage.
      </p>

      <h2>14. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Material
        changes will be reflected in the &quot;Last Updated&quot; date at
        the top, and where the change materially expands the data we
        collect we will surface a notice in the app the next time you open
        it.
      </p>

      <h2>15. Contact Us</h2>
      <p>Questions about this Privacy Policy? Contact us at:</p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:founder@heywrist.com">founder@heywrist.com</a>
      </p>
      <p><strong>Developer:</strong> Hey Wrist</p>
    </PolicyLayout>
  );
}
