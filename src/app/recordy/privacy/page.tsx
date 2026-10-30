import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Recordy - Privacy Policy",
  description: "Privacy policy for the Recordy app by HeyWrist",
};

export default function RecordyPrivacy() {
  return (
    <PolicyLayout appName="Recordy" title="Privacy Policy">
      <p><strong>Effective Date:</strong> April 1, 2026</p>
      <p><strong>Last Updated:</strong> October 30, 2026</p>

      <p>
        Hey Wrist (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) built Recordy as a premium
        voice recording application for iPhone and Apple Watch. This Privacy
        Policy describes what information Recordy accesses, how it is processed,
        and what rights you have regarding your data.
      </p>
      <p>
        <strong>In short:</strong> Your recordings are stored on your device
        and, if enabled, in your private iCloud. Apple may process audio through
        its speech service when on-device recognition cannot complete. We do
        not receive your audio. Transcript text is sent to our AI service only
        when you ask for a summary — see Section 3.
      </p>

      <h2>1. Information We Access</h2>

      <h3>1.1 Microphone</h3>
      <p>
        Recordy requires microphone access to record audio on your iPhone and
        Apple Watch. Microphone access is requested through the iOS system-level
        permissions dialog. Audio is captured and stored locally on your device.
        Recordy does not upload audio to our servers. Apple may process audio for
        speech recognition as described in Section 1.2.
      </p>

      <h3>1.2 Speech Recognition</h3>
      <p>
        Recordy uses Apple&apos;s Speech framework and requests on-device
        recognition when it is supported. If that attempt cannot complete for a
        retryable reason, Recordy may retry with Apple&apos;s server-based speech
        recognizer. In that case, Apple may process the audio being transcribed.
        Long recordings are split on your device into shorter segments before
        recognition; the same on-device and Apple server paths apply to those
        segments. Recordy does not send audio to our servers or AI summary
        service. You can revoke speech recognition permission at any time from
        iOS Settings. See{" "}
        <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">
          Apple&apos;s Privacy Policy
        </a>
        {" for Apple&apos;s handling of speech data."}
      </p>

      <h3>1.3 iCloud Sync</h3>
      <p>
        If you have iCloud enabled, Recordy may sync your recordings, transcriptions,
        bookmarks, and organizational data (folders, tags) across your devices
        using Apple&apos;s CloudKit framework. This data is stored in your private
        iCloud container and is accessible only to you. We do not have access to
        your iCloud data.
      </p>
      <p>
        You can disable iCloud sync at any time from Settings → [your name] →
        iCloud → Recordy on your iPhone. Disabling sync will keep your data
        local to each device.
      </p>

      <h3>1.4 Notifications</h3>
      <p>
        Recordy may request permission to send local notifications (e.g., when a
        recording transfer from Apple Watch is complete). No notification content
        is transmitted externally.
      </p>

      <h3>1.5 Information We Do NOT Collect</h3>
      <p>Recordy does not collect, access, or request:</p>
      <ul>
        <li>Your name, email address, or any personally identifiable information</li>
        <li>Location data</li>
        <li>Contacts, photos, or calendar data</li>
        <li>Health or fitness data</li>
        <li>Device identifiers for tracking purposes</li>
        <li>Browsing history or usage data outside the app</li>
      </ul>

      <h2>2. Data Stored on Your Device</h2>
      <p>Recordy also stores the following data locally:</p>
      <ul>
        <li><strong>Audio recordings</strong> in M4A / WAV format</li>
        <li><strong>Recording metadata</strong> — title, duration, date, source device, bookmarks</li>
        <li><strong>Transcriptions</strong> — text generated from speech recognition</li>
        <li><strong>AI summaries</strong> — the summaries, key points and action items you ask for (Section 3 explains how they are made)</li>
        <li><strong>Organization data</strong> — folders, tags, favorites</li>
        <li><strong>App preferences</strong> — recording quality settings, UI preferences</li>
      </ul>

      <h2>3. AI-Powered Features</h2>
      <p>
        When you ask for a summary, key points, or action items, Recordy sends{" "}
        <strong>the text of that recording&apos;s transcription</strong> (up to
        4,000 characters) over HTTPS to our AI service, which passes it to
        Microsoft Azure OpenAI in the United States and returns the result.{" "}
        <strong>Your audio is never sent to our AI service.</strong> Your text is
        never used to train any model. If the service is unreachable, Recordy
        falls back to an on-device summariser. Speech recognition may use Apple&apos;s
        server-based service as described in Section 1.2; that path processes
        audio for transcription and does not send it to our AI summary service.
      </p>
      <p>We keep what you send to AI features to fix problems and improve the app. We never sell it.</p>

      <h2>4. Data Sharing</h2>
      <p>
        We never sell, rent, or trade your data. These services receive data in
        the flows described here:
      </p>
      <ul>
        <li>
          <strong>Mixpanel</strong> (United States) receives pseudonymous usage
          and technical diagnostic events, such as which features you use and
          whether a transcription or subscription load succeeded. The app uses
          a stable install identifier; there is no account and we do not send
          your name, email, phone number, folder names, tags, recordings, or
          transcript text to Mixpanel. You can turn analytics off in Settings
          → Privacy.
        </li>
        <li>
          <strong>Apple Speech</strong> may receive audio when the on-device
          recognizer cannot complete and Recordy retries through Apple&apos;s
          server-based speech recognition service (Section 1.2).
        </li>
        <li>
          <strong>Our AI service</strong> receives the text of a transcription,
          and only when you ask for a summary — see Section 3.
        </li>
      </ul>
      <p>
        Audio is not sent to Mixpanel or our AI service. Transcript text is not
        sent to Mixpanel and reaches our AI service only when you request a
        summary.
      </p>
      <p>
        You may choose to export or share recordings using the iOS share sheet.
        Any sharing you initiate is under your control and subject to the
        privacy policies of the services you share with.
      </p>

      <h2>5. Third-Party Services &amp; SDKs</h2>
      <p>
        Recordy uses <strong>Mixpanel</strong> for product analytics — the usage
        events described in Section 4 — and sends crash{" "}
        <em>classifications</em> (the exception type and termination reason,
        never call stacks or your content) to the same place.
      </p>
      <p>
        Apple provides the Speech framework. Depending on on-device
        availability, speech recognition can be processed on your device or by
        Apple&apos;s server-based speech service, as described in Section 1.2.
      </p>
      <p>Recordy includes no third-party:</p>
      <ul>
        <li>Advertising or ad-tracking frameworks</li>
        <li>Social media SDKs</li>
      </ul>
      <p>
        Recordy does not use Apple&apos;s App Tracking Transparency framework and
        does not track you across other companies&apos; apps or websites.
      </p>
      <p>
        Apple may collect aggregated, anonymized telemetry as part of standard
        App Store services. See{" "}
        <a href="https://www.apple.com/privacy/" target="_blank" rel="noopener noreferrer">
          Apple&apos;s Privacy Policy
        </a>{" "}
        for details.
      </p>

      <h2>6. Apple Watch Integration</h2>
      <p>
        Recordy&apos;s standalone Apple Watch app can record audio independently.
        Recordings are transferred from the Watch to your paired iPhone using
        Apple&apos;s WatchConnectivity framework — a direct, encrypted,
        device-to-device communication channel. No data passes through external
        servers during this transfer.
      </p>

      <h2>7. Data Retention &amp; Deletion</h2>
      <p>You control recordings and the copies stored on your devices and in your private iCloud account:</p>
      <ul>
        <li>Delete individual recordings or entire folders from within the app</li>
        <li>Revoke microphone or speech recognition permissions from iOS Settings</li>
        <li>Disable iCloud sync to prevent cloud storage</li>
        <li>Delete local app data by uninstalling the app</li>
      </ul>
      <p>
        When you uninstall Recordy, all locally stored data is permanently
        removed. iCloud data can be removed from Settings → [your name] →
        iCloud → Manage Storage.
      </p>

      <h2>8. Children&apos;s Privacy</h2>
      <p>
        Recordy is not directed at children under the age of 13. We do not
        knowingly collect personal information from children.
      </p>

      <h2>9. International Users</h2>
      <p>
        Your recordings, transcriptions, and summaries are stored on your device
        and optionally in your personal iCloud account. Apple may process audio
        through its server-based Speech service when on-device recognition
        cannot complete. Our AI service, described in Section 3, passes
        transcription text to Microsoft Azure OpenAI in the United States (West
        US 3) only when you request a summary. Analytics events are processed
        by Mixpanel in the United States. If you are outside the United States,
        asking for an AI summary moves that text across a border.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with an updated effective date. Continued use of
        Recordy after changes constitutes acceptance of the updated policy.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, please contact us at:
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:founder@heywrist.com">founder@heywrist.com</a>
      </p>
      <p><strong>Developer:</strong> Hey Wrist</p>
    </PolicyLayout>
  );
}
