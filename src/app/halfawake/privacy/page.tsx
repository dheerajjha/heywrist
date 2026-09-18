import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Half Awake - Privacy Policy",
  description: "Privacy policy for the Half Awake voice dream journal by Hey Wrist",
};

export default function HalfAwakePrivacy() {
  return (
    <PolicyLayout appName="Half Awake" slug="halfawake" title="Privacy Policy">
      <p><strong>Effective date:</strong> 18 September 2026</p>
      <p><strong>Last updated:</strong> 18 September 2026</p>

      <p>
        Hey Wrist (&quot;we&quot;, &quot;us&quot;) makes Half Awake, an app for iPhone and Apple
        Watch that records a spoken dream, turns it into text and keeps a journal of what recurs.
        This policy describes what Half Awake stores, what leaves your device and what does not.
      </p>

      <p>
        <strong>In short:</strong> your recordings, transcripts and journal stay on your device.
        Speech is turned into text <em>on the device</em>, never by a server of ours or anyone
        else&rsquo;s. We have no user accounts and no server that holds your dreams. Half Awake does
        send anonymous product-usage analytics to Mixpanel, described in section 5, and that is the
        only routine transmission the app makes.
      </p>

      <h2>1. Half Awake does not ask for an account</h2>
      <p>
        There is no sign-up, no email address, no password and no profile. Nothing you record is
        tied to your identity by us, because we never learn it. There is therefore no account for us
        to delete on request. Deleting the app removes everything held locally, and{" "}
        <strong>Settings &rsaquo; Delete all my data</strong> inside the app clears every entry,
        recording, transcript and preference without uninstalling.
      </p>

      <h2>2. Transcription happens on your device</h2>
      <p>
        When you speak a dream, the audio is transcribed by Apple&rsquo;s speech frameworks running
        on the device itself:
      </p>
      <ul>
        <li>
          On iOS 26 and later, by <code>SpeechAnalyzer</code>, which is on-device by construction
          and uses a language asset downloaded to the device in advance.
        </li>
        <li>
          On earlier versions, by <code>SFSpeechRecognizer</code> with
          {" "}<code>requiresOnDeviceRecognition</code> set to true, which instructs the system not
          to use a network service.
        </li>
      </ul>
      <p>
        If neither can work for the language you have chosen, <strong>Half Awake tells you so and
        offers typing instead.</strong> It does not quietly fall back to a server-based transcription
        to produce a result, because that would send your audio off the device, which is the one
        thing this app promises it will not do.
      </p>

      <h2>3. Analysis happens on your device too</h2>
      <p>
        The summaries, the themes and the links between recurring people, places and images are
        produced on the device &mdash; by Apple&rsquo;s on-device Foundation Models where the
        hardware and the operating system support it, and otherwise by plain rule-based matching
        written into the app. In neither case is the text of a dream sent anywhere to be analysed.
      </p>
      <p>
        Half Awake is a journal and a recall aid. It does not interpret dreams, does not claim they
        mean anything, and does not offer prediction, divination or fortune telling.
      </p>

      <h2>4. What stays on your device</h2>
      <p>
        All of the following is stored locally, in an app group container that only Half Awake and
        its own widgets and watch app can read:
      </p>
      <ul>
        <li>Audio recordings, until you delete them or let the app clear them after transcription</li>
        <li>Transcripts and anything you type or edit afterwards</li>
        <li>Titles, dates, tags, moods, recurring-symbol links and your own notes</li>
        <li>Reminder times and every app preference</li>
      </ul>

      <h2>5. Analytics (Mixpanel)</h2>
      <p>
        Half Awake sends anonymous product-usage events to Mixpanel so we can tell which parts of
        the app are used and where it fails. <strong>No dream content of any kind is included.</strong>{" "}
        No transcript, no title, no tag, no audio, no fragment of anything you said or wrote.
      </p>
      <p>What is sent:</p>
      <ul>
        <li>
          That an event happened &mdash; for example that a recording was started, that a
          transcription succeeded or failed, that a screen was opened or the upgrade screen was shown
        </li>
        <li>
          Basic app and device context: app version, build number, device model, operating system
          version, locale, the language the interface was served in, and whether the action happened
          on the watch or the phone
        </li>
        <li>
          A random per-install identifier derived from Apple&rsquo;s Identifier for Vendor, used only
          to count returning users. It is not the advertising identifier, cannot be used to track you
          across other companies&rsquo; apps or websites, and is reset when you delete the app
        </li>
      </ul>
      <p>
        Mixpanel processes this on our behalf as a data processor &mdash; see{" "}
        <a href="https://mixpanel.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">
          Mixpanel&rsquo;s Privacy Policy
        </a>. You can turn analytics off entirely in{" "}
        <strong>Settings &rsaquo; Send anonymous usage data</strong>, and the app works exactly the
        same with it off.
      </p>

      <h2>6. Apple Watch</h2>
      <p>
        The watch app records and shows your journal. Data moves between the watch and the phone
        over Apple&rsquo;s WatchConnectivity framework, a direct encrypted link between your own two
        devices. It does not pass through any server of ours.
      </p>

      <h2>7. iCloud sync (optional, off by default)</h2>
      <p>
        If you turn sync on, your journal is kept in your own private iCloud database so it appears
        on your other devices. That data sits in your Apple account, not ours &mdash; we cannot read
        it, and we have no console that shows it. Turning sync off stops further syncing, and
        removing the copy held in iCloud is done from iOS Settings under your Apple Account. If the
        app ships without this feature enabled, nothing in your journal ever leaves the device at
        all.
      </p>

      <h2>8. Microphone and speech permissions</h2>
      <p>
        Half Awake asks for microphone access in order to record you speaking, and for speech
        recognition access so the system can turn that recording into text on the device. Both
        prompts are shown by iOS, and you can decline or revoke either at any time in iOS Settings.
        Declining the microphone leaves typing available; the rest of the app still works.
      </p>

      <h2>9. Notifications</h2>
      <p>
        If you allow them, Half Awake schedules a local reminder at a time you choose. Local
        notifications are composed and delivered on the device; nothing is sent to a push server, and
        no notification content is shared with us.
      </p>

      <h2>10. Purchases</h2>
      <p>
        Half Awake Pro is sold through Apple&rsquo;s In-App Purchase. Apple handles the payment and
        tells the app whether an entitlement is active. <strong>We never see your card, your billing
        address or your Apple Account.</strong> Restoring a purchase asks Apple, not us.
      </p>

      <h2>11. Export</h2>
      <p>
        You can export your journal as plain text or CSV at any time. An exported file goes wherever
        you choose to send it, and from that point it is outside the app and outside this policy.
      </p>

      <h2>12. Children</h2>
      <p>
        Half Awake is not directed at children under 13 and we do not knowingly collect personal
        information from them. Since the app has no accounts and collects no personal information
        from anyone, there is nothing for us to hold.
      </p>

      <h2>13. Your rights</h2>
      <p>
        Because we hold no personal data about you, there is nothing for us to export, correct or
        erase on your behalf. Everything is under your control on the device:{" "}
        <strong>Settings &rsaquo; Delete all my data</strong> removes the journal, the recordings and
        every preference, and deleting the app removes the lot.
      </p>

      <h2>14. Changes</h2>
      <p>
        If this policy changes we will update the date at the top of this page and, where the change
        is material, say so in the app&rsquo;s release notes.
      </p>

      <h2>15. Contact</h2>
      <p>
        Questions about this policy:{" "}
        <a href="mailto:founder@heywrist.com">founder@heywrist.com</a>.
      </p>
    </PolicyLayout>
  );
}
