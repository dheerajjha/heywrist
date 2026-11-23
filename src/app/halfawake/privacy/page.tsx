import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Half Awake - Privacy Policy",
  description: "Privacy policy for the Half Awake dream journal app by Hey Wrist",
};

export default function HalfAwakePrivacy() {
  return (
    <PolicyLayout appName="Half Awake" slug="halfawake" title="Privacy Policy">
      <p><strong>Effective Date:</strong>{" "}September 18, 2026</p>
      <p><strong>Last Updated:</strong>{" "}November 23, 2026</p>

      <p>
        Hey Wrist built Half Awake as a voice dream journal for iPhone and Apple Watch.
        This policy describes the app&apos;s local storage, transfers between your devices,
        optional sharing and sync, and the analytics and diagnostics sent to Mixpanel.
      </p>

      <h2>Your dreams and recordings</h2>
      <p>
        Half Awake stores dream audio, original words, titles, summaries and tags in its own app
        containers on your devices. We operate no backend that stores those dreams and require no
        account. The phone uses an App Group shared with its local extensions; the Watch has its
        own separate on-device storage. An App Group identifier does not make one container span
        physical devices.
      </p>
      <p>
        The Watch sends completed recordings and dictated words to your phone using Apple&apos;s
        WatchConnectivity queues. That is a transfer between your devices, not an upload to us.
        Phone recordings are not sent to a speech server by the shipping app. Apple&apos;s on-device
        SpeechAnalyzer and the legacy recognizer&apos;s required on-device mode process speech locally;
        if no supported local engine can work, the app offers typing and preserves unfinished audio.
        Downloading an Apple language model requires a network connection but does not upload your
        recording or transcript. Titles/tags/summaries use on-device intelligence or bundled rules.
      </p>
      <p>
        Recording is initiated by the capture control. On the phone it finalizes on background or
        interruption, and both recorders have quiet-stop and hard duration limits. Unfinished phone
        captures have local draft sidecars so they can be reopened. With Keep the recording off,
        ordinary source audio can be removed only after its journal entry is successfully saved,
        not after a failed transcript or save. Recovered recordings are retained for safety even
        when that setting is off.
      </p>

      <h2>Choices that can send content elsewhere</h2>
      <ul>
        <li>
          Optional Pro iCloud sync mirrors journal entries to your private Apple CloudKit database.
          We have no access to that private database. Its configuration changes on app relaunch.
          Audio files are not mirrored by this app&apos;s CloudKit model.
        </li>
        <li>
          A journal export or share card is explicit user action through the system share sheet.
          A card transfers its rendered image, including the visible title/date and optional text
          excerpt, not the source recording or other entries. A destination you choose has its own
          privacy terms. The app does not send messages or share anything without your action.
        </li>
        <li>Widgets you choose to install can display dream titles outside the locked journal.</li>
      </ul>

      <h2>Usage analytics and purchases</h2>
      <p>
        The Release app uses Mixpanel for product-usage and purchase-outcome analytics. Events use
        a pseudonymous vendor-based device identifier, not an app account or your Apple Account.
        They include screen/action names and numerical facts such as duration, word/tag counts,
        whether audio exists, Watch origin and a lucid-dream flag. Literal dream audio, transcripts,
        titles, summaries, tag text, search text and reminder text are not sent in those events.
      </p>
      <p>
        Other event properties include onboarding pages, feature/settings names, permission results,
        search character counts, journal/export/recap counts, recall streak milestones, share-card
        options, transcription/analysis engine names, outcome and error codes, rating-prompt triggers,
        and notification kind, scheduled time, repeat/count/delay settings and interaction outcomes.
        Purchase events include product identifiers, price and currency where a paid purchase
        completes, trial duration, purchase source, cancellation/error outcomes and entitlement tier.
      </p>
      <p>
        Events also include session and installation identifiers, device/app language, app version
        and build, and whether the installation is App Store, sandbox or development. First-open
        events include new/reinstall/unknown classification, platform and Keychain status codes. Mixpanel
        keeps a pseudonymous profile with first/last-seen timestamps and version/build information.
        Its SDK adds device model, operating-system and SDK versions, screen size and network/carrier
        information. Mixpanel receives the connection&apos;s IP address and can use it to derive an
        approximate location; the app does not request GPS or location permission. These identifiers
        and usage records are pseudonymous, not anonymous or a guarantee of &quot;no personal data&quot;.
        Deleting Half Awake alone does not guarantee a new vendor identifier while other apps from
        the same developer remain installed.
      </p>
      <p>
        The shipping phone app also sends Apple&apos;s MetricKit crash, hang and app-exit diagnostics
        to Mixpanel to diagnose reliability problems. These include exception/signal/termination
        classification, source build and OS/device information, diagnostic time windows, TestFlight
        status when available, hang duration and foreground/background exit counts. Crash reports
        include up to ten crashed-thread frames as binary names and binary-relative offsets, stack
        depth and the app binary UUID. They do not include recordings, dream text, memory contents,
        registers, argument values or other threads&apos; frames.
      </p>
      <p>
        Payments and biometric authentication are performed by Apple. We do not receive payment
        details or biometric data. The app receives signed purchase status and an authentication
        result. A development bug-reporting SDK is linked into the app but is initialized only in
        Debug builds, not in the shipping Release app. The simulator-only server-speech lab is
        compiled out of Release.
      </p>

      <h2>Deletion and retained Watch files</h2>
      <p>
        Phone Settings → Delete journal entries deletes saved journal entries and readable unfinished
        text after a successful journal deletion. It attempts to remove the deleted entries&apos; ordinary
        audio files, but does not sweep all recordings: recovered, unidentified or protected sources
        and files that cannot safely be read/deleted remain on the phone. Unfinished audio can be
        rediscovered even after its draft text has been removed. To remove the app&apos;s remaining local
        files, delete the iPhone app rather than merely offloading it.
      </p>
      <p>
        Phone journal deletion does not cancel Watch transfers already queued or erase failed-transfer
        source files retained on the Watch. Delete the Watch app separately to remove those local
        copies. The current Watch app has no failed-transfer retry/deletion controls. Deleting synced
        entries also requests deletion from your private CloudKit database; deleting an app does not
        itself erase that cloud database. Exports, backups or images already saved/shared elsewhere
        are outside the app&apos;s deletion control.
      </p>
      <p>
        Deleting journal entries or uninstalling does not erase analytics already sent to Mixpanel.
        There is no in-app analytics opt-out switch in this version. A small first-open marker in
        Apple&apos;s Keychain can survive uninstall and sync through iCloud Keychain when you enable it;
        it contains no dream content and helps classify a later installation as a reinstall.
        Depending on where you live, you may have rights to access, correct or erase pseudonymous
        analytics data. Contact <a href="mailto:founder@heywrist.com">founder@heywrist.com</a> for these requests; do not send dream content.
      </p>
      <p>
        An already-enabled journal lock stays in place while receipts load or after a subscription
        expires. No contacts, location, HealthKit or advertising-identifier permission is required.
        Microphone, legacy speech recognition, local notifications and biometric unlock are requested
        only for their stated functions and can be changed in system settings.
      </p>
      <p>
        For privacy questions or requests about pseudonymous analytics, contact <a href="mailto:founder@heywrist.com">founder@heywrist.com</a>.
        Material changes to this policy will be reflected in its last-updated date.
        The journal is for recall, not medical advice, diagnosis or dream interpretation.
      </p>
    </PolicyLayout>
  );
}
