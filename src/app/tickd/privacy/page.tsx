import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Tickd - Privacy Policy",
  description: "Privacy policy for the Tickd app by HeyWrist",
};

export default function TickdPrivacy() {
  return (
    <PolicyLayout appName="Tickd" slug="tickd" title="Privacy Policy">
      <p><strong>Effective Date:</strong> June 8, 2026</p>
      <p><strong>Last Updated:</strong> June 8, 2026</p>

      <p>
        Hey Wrist (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) built Tickd as a calm daily
        planner and to-do application for iPhone and Apple Watch. This Privacy
        Policy describes what information Tickd accesses, how it is processed,
        and what rights you have regarding your data.
      </p>
      <p>
        <strong>In short:</strong> Tickd does not require an account and never
        sees your name or email. Your tasks, schedule, and preferences are
        stored on your device and synced through your private iCloud account
        &mdash; we never see them. When you use the AI planner, the text you
        type or dictate is sent to a secure enterprise cloud AI service to build
        your schedule, but it is not used to train AI models. We use Mixpanel
        for anonymous, opt-out usage analytics. Apple processes any in-app
        purchases &mdash; we never receive your payment information.
      </p>

      <h2>1. Information We Access</h2>

      <h3>1.1 Microphone &amp; Speech Recognition</h3>
      <p>
        Tickd requests microphone and speech recognition access only when you
        tap the mic button in the AI planner to speak a request instead of
        typing it. Your speech is converted to text so the planner can act on
        it. Transcription is performed using Apple&apos;s on-device speech
        recognition framework &mdash; raw audio is not stored by Tickd or sent
        to our servers. You can decline these permissions and still use Tickd by
        typing instead, and you can revoke them at any time in iOS Settings.
      </p>

      <h3>1.2 iCloud Sync (CloudKit)</h3>
      <p>
        Tickd uses Apple&apos;s CloudKit (via SwiftData) to sync your tasks,
        schedule, daily anchors, and preferences across your Apple devices. This
        data is stored in your <strong>private iCloud container</strong> and is
        accessible only to you through your Apple ID. We do not have access to
        your iCloud data.
      </p>
      <p>
        You can disable iCloud sync at any time from Settings → [your name] →
        iCloud. Disabling sync keeps data local to each device. iCloud is
        subject to{" "}
        <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">
          Apple&apos;s Privacy Policy
        </a>.
      </p>

      <h3>1.3 Notifications</h3>
      <p>
        Tickd may request permission to send local notifications to remind you
        about scheduled tasks and routines. These notifications are scheduled
        entirely on your device and do not involve any external push
        notification servers.
      </p>

      <h3>1.4 Information We Do NOT Collect</h3>
      <p>Tickd does not collect, access, or request:</p>
      <ul>
        <li>Your name, email address, or any personally identifiable information</li>
        <li>Location data</li>
        <li>Contacts, photos, calendar, or health data</li>
        <li>Apple&apos;s Advertising Identifier (IDFA) &mdash; we do not use the App Tracking Transparency framework and do not track you across other apps or websites</li>
        <li>Browsing history or usage data outside the app</li>
      </ul>

      <h2>2. AI Planner &mdash; Enterprise Cloud AI Provider</h2>
      <p>
        Tickd&apos;s headline feature lets you describe your day in natural
        language (for example, &quot;plan my afternoon around 2 hours of deep
        work&quot;) and turns it into a schedule. To do this, the text you type
        or dictate into the AI planner is sent over an encrypted HTTPS
        connection to a <strong>secure enterprise cloud AI service</strong>,
        hosted in US-based cloud regions and bound by an enterprise
        data-processing agreement. The generated schedule is returned to your
        device.
      </p>
      <p>What is and isn&apos;t sent:</p>
      <ul>
        <li><strong>Sent:</strong> only the text of the planning request you choose to make (and prior messages in that conversation needed for context).</li>
        <li><strong>Not sent:</strong> your name or email, your full task database, location, contacts, photos, or any device identifiers.</li>
      </ul>
      <p>Under our provider&apos;s enterprise terms:</p>
      <ul>
        <li>Your requests are <strong>not used to train</strong> the provider&apos;s or its upstream partners&apos; AI models.</li>
        <li>The provider may retain request data for a limited period (up to 30 days) solely for abuse and misuse monitoring, after which it is deleted.</li>
      </ul>
      <p>
        The AI feature is only triggered when you actively use the planner
        &mdash; no content leaves your device in the background. Release builds
        of Tickd do not log your AI conversations.
      </p>

      <h2>3. Data Stored on Your Device</h2>
      <p>Tickd stores the following data locally (synced via iCloud):</p>
      <ul>
        <li><strong>Tasks &amp; subtasks</strong> — title, time, completion status</li>
        <li><strong>Schedule &amp; timeline</strong> — time blocks and the order of your day</li>
        <li><strong>Later inbox</strong> — captured ideas not yet scheduled</li>
        <li><strong>Daily anchors</strong> — your wake and wind-down times</li>
        <li><strong>Momentum / streak data</strong></li>
        <li><strong>App preferences</strong> — theme, notification settings, onboarding state</li>
      </ul>

      <h2>4. Data Sharing</h2>
      <p>
        We do not share, sell, rent, trade, or disclose your tasks, schedule, or
        any personally identifiable information to any third party. The only data
        that leaves your device is (a) the AI planner text described in Section 2
        and (b) the anonymous analytics events described in Section 5.
      </p>

      <h2>5. Analytics &mdash; Mixpanel</h2>
      <p>
        Tickd uses{" "}
        <a href="https://mixpanel.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">
          Mixpanel
        </a>{" "}
        to understand how the app is used and where to invest engineering
        effort. The data we send is intentionally minimal:
      </p>
      <ul>
        <li>An anonymous device identifier used only to de-duplicate events (not shared with other apps)</li>
        <li>App version, build number, iOS/watchOS version, and device model</li>
        <li>Event names — e.g. &quot;task created&quot;, &quot;day planned&quot;, &quot;paywall shown&quot;, &quot;purchase completed&quot;</li>
        <li>Coarse event properties — e.g. source screen, theme choice, language</li>
      </ul>
      <p>
        We <strong>never</strong> send the contents of your tasks, your schedule,
        your AI planner text, or any personally identifiable information to
        Mixpanel. Mixpanel is not used for advertising or cross-app tracking, and
        Tickd does not use Apple&apos;s App Tracking Transparency framework.
      </p>
      <p>
        <strong>Opt out:</strong> if you do not want Tickd to send anonymous
        analytics events, email{" "}
        <a href="mailto:founder@heywrist.com">founder@heywrist.com</a> and we
        will disable analytics for your installation in the next app update.
      </p>

      <h2>6. In-App Purchases</h2>
      <p>
        Tickd offers an optional premium tier, <strong>Tickd Pro</strong>,
        available as a monthly or annual auto-renewable subscription or a
        one-time lifetime purchase. All purchases are processed by Apple and are
        subject to Apple&apos;s{" "}
        <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer">
          Standard EULA
        </a>. We never receive or store your payment information. Subscriptions
        renew automatically unless cancelled at least 24 hours before the end of
        the current period; you can manage or cancel them in your Apple ID
        settings.
      </p>

      <h2>7. Apple Watch &amp; Widgets</h2>
      <p>
        Tickd&apos;s Apple Watch app lets you view and complete today&apos;s plan
        from your wrist. Watch data syncs via your private iCloud account or
        WatchConnectivity &mdash; no data passes through external servers.
      </p>

      <h2>8. Data Retention &amp; Deletion</h2>
      <p>You are in full control of your data:</p>
      <ul>
        <li>Delete individual tasks or scheduled items from within the app</li>
        <li>Revoke microphone, speech, or notification permissions from iOS Settings</li>
        <li>Disable iCloud sync to keep data local only</li>
        <li>Delete all app data by uninstalling the app</li>
      </ul>
      <p>
        When you uninstall Tickd, all locally stored data is permanently removed.
        iCloud data can be removed from Settings → [your name] → iCloud → Manage
        Storage.
      </p>

      <h2>9. Children&apos;s Privacy</h2>
      <p>
        Tickd is not directed at children under the age of 13. We do not
        knowingly collect personal information from children.
      </p>

      <h2>10. International Users</h2>
      <p>
        Your tasks and schedule are stored on your device and in your private
        iCloud account &mdash; we do not operate any servers that hold them. When
        you use the AI planner, your request text is processed over HTTPS by our
        enterprise cloud AI provider in US-based cloud regions, and the anonymous
        analytics events in Section 5 are processed by Mixpanel, which may store
        them on infrastructure outside your country.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with an updated effective date. Continued use of
        Tickd after changes constitutes acceptance.
      </p>

      <h2>12. Contact Us</h2>
      <p>Questions about this Privacy Policy? Contact us at:</p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:founder@heywrist.com">founder@heywrist.com</a>
      </p>
      <p><strong>Developer:</strong> Hey Wrist</p>
    </PolicyLayout>
  );
}
