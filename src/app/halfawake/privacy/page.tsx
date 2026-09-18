import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Half Awake - Privacy Policy",
  description: "Privacy policy for the Half Awake dream journal app by Hey Wrist",
};

export default function HalfAwakePrivacy() {
  return (
    <PolicyLayout appName="Half Awake" slug="halfawake" title="Privacy Policy">
      <p><strong>Effective Date:</strong> September 18, 2026</p>
      <p><strong>Last Updated:</strong> September 18, 2026</p>

      <p>
        Hey Wrist (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) built Half Awake as a
        dream journal for iPhone and Apple Watch. You speak what you remember on waking; the
        app turns it into text, gives it a title, a short summary and a few tags, and files it
        under last night. This policy describes exactly what the app stores, what it sends
        anywhere, and what it does not.
      </p>
      <p>
        <strong>In short:</strong> your dreams &mdash; the audio, the transcripts, the titles
        and the tags &mdash; are stored on your device and are never sent to us. We operate no
        server that holds them, and there is no account to create. The app does send anonymous
        product-usage counts to an analytics service, described in section 3, and those counts
        never contain anything you said or wrote.
      </p>

      <h2>1. What Stays On Your Device</h2>

      <h3>1.1 Recordings</h3>
      <p>
        When you tap the capture control, Half Awake records audio to its own container on
        your device. Recording happens only while the capture screen is open, and it stops on
        its own after twenty seconds of silence. The file is written to the app&apos;s App
        Group container, which is shared only between the Half Awake iPhone app, its Watch app
        and its widgets. <strong>Recordings are never uploaded.</strong> The app contains no
        code that transmits audio anywhere.
      </p>
      <p>
        If you turn &quot;Keep the recording&quot; off in Settings, the audio file is deleted
        as soon as the entry is saved. If you leave it on, the file stays until you delete the
        entry or use &quot;Delete everything&quot;.
      </p>

      <h3>1.2 Transcripts, titles, summaries and tags</h3>
      <p>
        Everything derived from what you said is stored in the app&apos;s own database on your
        device. Nothing about an entry is transmitted to us at any point.
      </p>

      <h3>1.3 Speech to text</h3>
      <p>
        Your voice is turned into text by your own device. On iOS 26 and later Half Awake uses
        the system&apos;s on-device speech analyser, which downloads a language model to your
        phone once and then runs locally. On earlier versions it uses on-device speech
        recognition with the on-device requirement switched on, and it{" "}
        <strong>refuses to run at all</strong> when the language you have chosen has no
        on-device model &mdash; in that case it tells you so and offers you the keyboard,
        rather than sending your audio to a server to be understood.
      </p>
      <p>
        The one-time download of a language model is a request to Apple for the model itself.
        It contains no audio and no text of yours.
      </p>

      <h3>1.4 Titles, summaries and tags</h3>
      <p>
        Where your hardware provides it, Half Awake uses your device&apos;s own on-device
        intelligence to write the title and summary and to suggest tags. Where it does not,
        the app falls back to a keyword engine built into the app itself. Both run entirely on
        your device. No third-party artificial-intelligence service is contacted, and no
        transcript is sent off the device to be analysed. Settings &rarr; About names which of
        the two produced the analysis on your device.
      </p>

      <h2>2. iCloud Sync (Optional, Off By Default)</h2>
      <p>
        If you turn &quot;Sync with iCloud&quot; on &mdash; a Half Awake Pro feature, disabled
        unless you enable it &mdash; your entries are mirrored to <strong>your own private
        iCloud database</strong> so your other devices can see them. That data lives in your
        Apple Account, under Apple&apos;s terms, and is not accessible to us: we have no
        credentials for it and no way to read it. Turning the setting off stops the mirroring.
      </p>

      <h2>3. What Is Collected</h2>

      <h3>3.1 Anonymous usage analytics</h3>
      <p>
        Half Awake includes a third-party analytics SDK (Mixpanel). It records product-usage
        events so we can tell which parts of the app earn their place: which screens are
        opened, which features are used, when onboarding is completed, when a paywall is shown
        or dismissed, and when a purchase, trial or restore happens.
      </p>
      <p>
        These events are keyed to a random identifier derived from your device&apos;s vendor
        identifier &mdash; an identifier that is specific to apps from this developer and is
        reset when you delete the app. It is not your name, your email or your Apple Account.
      </p>
      <p>
        <strong>Analytics never receive dream content.</strong> No transcript, no title, no
        summary, no tag and no audio is ever included in an event. Where an event needs to
        describe a dream it describes it numerically &mdash; for example a word count, or how
        many tags were produced.
      </p>

      <h3>3.2 Purchases</h3>
      <p>
        Purchases are handled entirely by Apple. We never see your payment details. The app
        records which product was bought so it can unlock the right features, and reports the
        outcome to analytics as described above.
      </p>

      <h3>3.3 Development builds only</h3>
      <p>
        A bug-reporting SDK is compiled into internal development builds so testers can report
        problems. It is <strong>not present in the version published on the App Store</strong>.
      </p>

      <h2>4. What Half Awake Never Asks For</h2>
      <ul>
        <li>No account, sign-in, sign-up, email address or password</li>
        <li>No location, at any precision</li>
        <li>No contacts, calendar or photos</li>
        <li>No health or fitness data, and no HealthKit access</li>
        <li>No advertising identifier, and no cross-app or cross-site tracking</li>
      </ul>

      <h2>5. Permissions</h2>
      <p>
        <strong>Microphone.</strong> Asked for the first time you tap the capture control, so
        the app can record what you say on waking. You can revoke it at any time in iOS
        Settings &rarr; Privacy &amp; Security &rarr; Microphone; the app still works, and you
        type the entry instead.
      </p>
      <p>
        <strong>Speech recognition.</strong> Asked for only on the older fallback path
        described in section 1.3, and only where an on-device model exists.
      </p>
      <p>
        <strong>Notifications.</strong> Optional. Used for the wake-window nudge and, for Pro
        users, reality-check reminders and the wake-back-to-bed reminder. These are local
        notifications scheduled on your device; nothing about them is sent anywhere. None of
        them is an alarm clock.
      </p>
      <p>
        <strong>Face ID / Touch ID.</strong> Optional. Used only to unlock the journal on this
        device. The biometric check is performed by iOS; the app is told yes or no and never
        sees biometric data.
      </p>

      <h2>6. Children</h2>
      <p>
        Half Awake is rated 4+ and contains no objectionable content, but it is not directed at
        children and we do not knowingly collect information from anyone under 13. Since the
        app has no account and collects no personal identifiers, there is nothing to delete on
        our side in any case.
      </p>

      <h2>7. Deleting Your Data</h2>
      <p>
        Everything is on your device, so you control it directly. In the app, open Settings
        (the moon icon at the top right of the first screen), scroll to &quot;Your data&quot;
        and tap <strong>&quot;Delete everything&quot;</strong>. That erases every entry and
        every audio file and cannot be undone. Deleting the app removes the same data.
      </p>
      <p>
        If you had iCloud sync enabled, deleting entries in the app also removes them from your
        own iCloud database.
      </p>
      <p>
        To stop analytics entirely, delete the app; there is no server-side profile of you to
        request or erase, because we hold no personal data about you.
      </p>

      <h2>8. Your Rights</h2>
      <p>
        Depending on where you live you may have rights to access, correct, export or erase
        personal data held about you. Half Awake is built so that those rights are exercised
        directly on the device: the journal is yours, exportable to Markdown or JSON from
        Settings, and erasable in one action. We hold no copy. If you believe we hold
        information about you and you would like it removed, write to{" "}
        <a href="mailto:founder@heywrist.com">founder@heywrist.com</a>.
      </p>

      <h2>9. Changes To This Policy</h2>
      <p>
        If this policy changes, the date at the top changes with it, and a material change will
        be described in the app&apos;s release notes. Continuing to use Half Awake after a
        change means you accept the updated policy.
      </p>

      <h2>10. Not Medical Advice</h2>
      <p>
        Half Awake is a journal, for reflection rather than treatment. It records what you say
        and counts what repeats. It does not interpret dreams, predict anything, or provide
        medical, psychological or therapeutic advice. If your sleep or your dreams worry you,
        please speak to a doctor.
      </p>

      <h2>11. Contact</h2>
      <p>
        Questions about this policy: <a href="mailto:founder@heywrist.com">founder@heywrist.com</a>.
      </p>
    </PolicyLayout>
  );
}
