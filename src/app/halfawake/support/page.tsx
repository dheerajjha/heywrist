import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Half Awake - Support",
  description: "Help and answers for the Half Awake voice dream journal by Hey Wrist",
};

export default function HalfAwakeSupport() {
  return (
    <PolicyLayout appName="Half Awake" slug="halfawake" title="Support">
      <p>
        Email <a href="mailto:founder@heywrist.com">founder@heywrist.com</a> and a person will
        answer. Telling us your iOS version and whether it happened on the watch or the phone makes
        it much faster.
      </p>

      <h2>Getting started</h2>
      <p>
        Add the Half Awake complication to the watch face you sleep next to, or keep the watch app
        in the Dock. On waking, raise your wrist, tap once and speak. You do not need to open your
        eyes, find a screen or unlock anything, and the phone can be in another room.
      </p>
      <p>
        You can also record or type on the phone. Everything ends up in the same journal.
      </p>

      <h2>Transcription</h2>
      <p>
        Speech becomes text on your device. The first time you use a language, iOS may need to
        download that language to the device &mdash; that needs a connection once, after which it
        works offline.
      </p>
      <p>
        If you see a message saying transcription is not available for your language, that is not a
        failure to be retried: it means the device cannot do that language locally, and Half Awake
        will not send your audio to a server instead. Record and type the entry, or pick a language
        the device supports in Settings.
      </p>

      <h2>The recording did not start</h2>
      <p>
        Check that Half Awake has microphone and speech-recognition permission in iOS Settings
        &rsaquo; Privacy &amp; Security. If you declined either prompt, typing still works and the
        rest of the app is unaffected.
      </p>

      <h2>Widgets, Lock Screen and the watch</h2>
      <p>
        Long-press the Lock Screen or Home Screen, choose Customise, and add a Half Awake widget. For
        the watch, edit the face and pick Half Awake as a complication. If a widget looks stale,
        opening the app once refreshes it.
      </p>

      <h2>Recurring symbols</h2>
      <p>
        The journal links people, places and images that appear in more than one entry, so you can
        see what keeps coming back. It is a recall and pattern tool: it shows you what you wrote, and
        how often. It does not tell you what any of it means, and it is not a dream dictionary.
      </p>

      <h2>Reminders</h2>
      <p>
        Set a morning reminder in Settings for the time you actually wake up. Reminders are local to
        your device; if they never arrive, check Notifications for Half Awake in iOS Settings.
      </p>

      <h2>Purchases</h2>
      <p>
        Recording, on-device transcription and your journal are free with no time limit. Pro adds the
        extra features listed in the app. Manage or cancel a subscription in iOS Settings &rsaquo;
        your Apple Account &rsaquo; Subscriptions. Tap <strong>Restore purchases</strong> on the
        upgrade screen if you have changed device, and make sure you are signed in with the same
        Apple Account you bought with.
      </p>
      <p>
        Refunds are handled by Apple at{" "}
        <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">
          reportaproblem.apple.com
        </a>.
      </p>

      <h2>Your data</h2>
      <p>
        Entries live on your device. <strong>Settings &rsaquo; Delete all my data</strong> clears the
        journal, the recordings and every preference without uninstalling. You can export everything
        as text or CSV first &mdash; do that before you delete, because we hold no copy and cannot
        recover anything for you.
      </p>

      <h2>Still stuck</h2>
      <p>
        <a href="mailto:founder@heywrist.com">founder@heywrist.com</a>. Include what you expected, what
        happened, and a screenshot if you have one.
      </p>
    </PolicyLayout>
  );
}
