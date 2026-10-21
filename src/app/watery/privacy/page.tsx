import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Quench: Water & Drink Tracker by Hey Wrist",
};

// Every statement on this page was checked against the code of Quench 1.0,
// build 1792587890 (watery repo, commit 2174224), except section 3: it
// describes the follow-up 1.0 build without iCloud sync (EM decision,
// 2026-10-21; 1792587890 itself still has the toggle). Section 6 mirrors that
// build's Analytics.track call sites, its MetricKit diagnostics and its super
// properties: if a property is added to or removed from the app, update section
// 6 (and the App Store privacy details) in the same change.
export default function QuenchPrivacy() {
  return (
    <PolicyLayout appName="Quench" slug="watery" title="Privacy Policy">
      <p><strong>Effective date:</strong> October 21, 2026</p>

      <p>
        Hey Wrist (&quot;we&quot;, &quot;us&quot;) makes Quench: Water &amp; Drink Tracker
        (&quot;Quench&quot;) for iPhone, iPad and Apple Watch. This policy explains what
        information Quench uses, where it goes, and the choices you have.
      </p>

      <h2>The short version</h2>
      <ul>
        <li>There is no account and no sign-up, and Quench never asks for your email address.</li>
        <li>
          Your profile &mdash; name, weight, goal and settings &mdash; and your drink entries stay
          on your devices. This version of Quench does not sync them through iCloud, and we cannot
          read them.
        </li>
        <li>
          Quench sends product analytics to Mixpanel: which features you use, some of your
          settings, purchase steps and crash reports. They never include what or how much you
          drink, your name, weight, height or biological sex, or any Apple Health data. Section 6
          lists everything.
        </li>
        <li>
          No ads, no advertising identifier (IDFA), and no tracking across other companies&apos;
          apps or websites. We do not sell your data.
        </li>
        <li>
          Your location is used only if you turn on the weather-aware goal, and only to ask
          Apple&apos;s weather service for the day&apos;s temperature.
        </li>
        <li>Purchases are handled by Apple. We never see your payment details.</li>
      </ul>

      <h2>1. Apple Health</h2>
      <p>
        Quench asks for Apple Health access only when you tap a Health option: Pull from Apple
        Health during setup, or the Auto from Health or Sync caffeine switches in Settings &rarr;
        Customise My Hydration. Apple&apos;s permission screen lets you choose each type of data,
        and you can change your choices at any time in the Health app (tap your profile picture,
        then Apps &rarr; Quench) or in iOS Settings &rarr; Privacy &amp; Security &rarr; Health.
      </p>
      <p><strong>Quench can read:</strong></p>
      <ul>
        <li>
          <strong>Body weight and biological sex</strong> &mdash; to pre-fill your profile. Your
          weight is used to suggest your daily goal; biological sex picks the body figure the app
          shows.
        </li>
        <li>
          <strong>Step count and workouts</strong> &mdash; only while Auto from Health is on, to
          estimate your activity level from the last 7 days.
        </li>
      </ul>
      <p><strong>Quench can write:</strong></p>
      <ul>
        <li>
          <strong>Dietary water</strong> &mdash; for drinks you log in the app or on your Apple
          Watch, the hydration-adjusted amount. Alcoholic drinks are not written.
        </li>
        <li>
          <strong>Dietary caffeine</strong> &mdash; an estimate for coffee, tea, energy drinks and
          soda, unless you turn off Sync caffeine (it is on by default).
        </li>
      </ul>
      <p>
        Quench reads and writes no other Health data. It never sends Health data to us or to
        Mixpanel, never uses it for advertising or marketing, and never sells it. What Quench reads
        goes into your profile, which stays on your devices.
      </p>

      <h2>2. Information stored on your devices</h2>
      <p>Quench keeps your information on your iPhone or iPad, using Apple&apos;s on-device storage:</p>
      <ul>
        <li>
          <strong>Your profile</strong> &mdash; an optional first name, weight, optional height,
          biological sex, activity level, climate, units, daily goal, wake and sleep times,
          reminder settings, and the reason you chose for using Quench. Section 6 lists the few
          setup choices that analytics include, which never include your name, weight, height or
          biological sex.
        </li>
        <li><strong>Your drink log</strong> &mdash; the type, amount and time of each drink.</li>
        <li><strong>Your cups, challenges and streaks</strong>, and your theme and mascot choices.</li>
        <li>
          If the weather-aware goal is on, the latest high temperature and the climate it implies
          (not your location).
        </li>
        <li>
          <strong>An install marker</strong> &mdash; a small item in your keychain that records
          only when Quench was first installed, so that a reinstall is not counted as a new user.
          It syncs through iCloud Keychain if you use it, and it stays after you delete the app.
        </li>
      </ul>
      <p>
        Quench&apos;s widgets, Live Activities and Siri actions use this information through
        storage they share with the app on your iPhone or iPad. The Apple Watch app keeps its own
        copy of what it shows &mdash; such as today&apos;s progress, your goal and streak, your
        first name and your quick-log cups &mdash; sent from your iPhone (section 4). Quench uses
        your first name only in greetings and reminder text.
      </p>

      <h2>3. iCloud</h2>
      <p>
        This version of Quench does not sync through iCloud. Your drink history, cups, challenges
        and profile stay on the iPhone or iPad where you entered them, and the Apple Watch app
        syncs with your iPhone over WatchConnectivity (section 4). The only thing Quench itself
        puts in iCloud is the install marker from section 2, if you use iCloud Keychain. If you
        back up your device to iCloud, that backup includes Quench&apos;s data, as it does for
        other apps.
      </p>

      <h2>4. Apple Watch, widgets, Live Activities and Siri</h2>
      <p>
        The Watch app syncs with your iPhone using Apple&apos;s WatchConnectivity framework, not
        iCloud, and this does not pass through any server of ours. Widgets, complications and Live
        Activities show information that is already on your device and do not send it anywhere.
        When you use Siri or Shortcuts, Apple handles the request and Quench receives only the
        action to perform, such as logging a glass of water. We do not receive your voice or Siri
        transcripts.
      </p>

      <h2>5. Location and weather (Quench Pro, optional)</h2>
      <p>
        Quench uses your location only if you turn on Auto-adjust on hot days. iOS then asks for
        permission to use your location while you are using the app. Usually once a day, when you
        open Quench, it takes a single location reading (it asks for roughly kilometre-level
        accuracy) and sends it to Apple&apos;s WeatherKit service to look up the day&apos;s high
        temperature. Apple handles that request under its{" "}
        <a href="https://www.apple.com/legal/privacy/data/en/weather/" target="_blank" rel="noopener noreferrer">
          weather privacy terms
        </a>
        . Quench does not store your location and never sends it to us or to Mixpanel. It keeps
        only the day&apos;s temperature and the climate setting that follows from it, on your
        device; analytics record only that climate category and whether it raised your goal
        (section 6), never the temperature. You can turn the feature off in the app, or revoke
        location access in iOS Settings &rarr; Privacy &amp; Security &rarr; Location Services
        &rarr; Quench.
      </p>

      <h2>6. Analytics (Mixpanel)</h2>
      <p>
        We use Mixpanel, a product analytics service, to understand how Quench is used, what to
        improve and what is going wrong. Mixpanel processes this data on our behalf as our service
        provider, under terms that require it to protect the data, and it may process it in the
        United States. See{" "}
        <a href="https://mixpanel.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">
          Mixpanel&apos;s Privacy Policy
        </a>
        .
      </p>
      <p>
        <strong>The identifier.</strong> Quench labels its analytics with Apple&apos;s
        identifierForVendor (IDFV), an ID that iOS gives to apps from the same developer on the
        same device, or with a random ID if the IDFV is not available. It is not the advertising
        identifier (IDFA). Quench does not ask for permission to track you, does not combine this
        data with other companies&apos; data, and does not use it for advertising. The IDFV
        changes once every Hey Wrist app has been removed from the device.
      </p>
      <p>
        <strong>With every event:</strong> a random ID for the current app session, your
        device&apos;s language and the app&apos;s language, which part of Quench sent it, and
        whether it is an App Store or test install. The Mixpanel SDK adds device and app details
        such as device model, iOS version, screen size, and app version and build, and we record
        when Quench was first and last opened.
      </p>
      <p><strong>The events themselves:</strong></p>
      <ul>
        <li>
          <strong>Usage</strong>, for example: the app was opened, or opened for the first time
          (and whether that looks like a new install or a reinstall); a screen or setup step was
          viewed; a setting was changed; a drink was logged or deleted, and from where (such as the
          Today screen or a reminder button), never what or how much; a reminder was opened or
          dismissed; the daily goal was reached, with your streak length; a rating prompt was
          requested.
        </li>
        <li>
          <strong>Setup choices</strong>, when you finish setup: the reason you chose for using
          Quench, activity level, climate, volume and weight units, reminder settings, wake and
          sleep hours, whether you entered a first name (and how many characters it has, never the
          name itself), and whether setup used Apple Health. Later, when you change your activity
          level, climate, units, wake or sleep hour, or reminder interval, the new value; and
          whether your daily goal is one you set yourself.
        </li>
        <li>
          <strong>Counts</strong>: how many drinks you have logged today (not how much), how many
          entries and days are in your history or an export, how many cups you have, and the type
          and length of a custom challenge you create (for example, a no-caffeine or no-alcohol
          challenge).
        </li>
        <li>
          <strong>Weather</strong>, if the weather-aware goal is on: the climate category Quench
          worked out (for example, hot) and whether it raised your goal.
        </li>
        <li>
          <strong>Purchases</strong>: the upgrade screen being shown, plans tapped, purchases and
          restores started, completed, cancelled or failed (with the product, whether it was a free
          trial, and the reason for a failure), free trials converting or expiring, and billing
          problems Apple reports, such as whether you still have access.
        </li>
        <li>
          <strong>Diagnostics</strong>: crash, hang and exit reports from Apple&apos;s MetricKit,
          such as the crash type and code, the crashing code&apos;s stack frames, how long a hang
          lasted, counts of how the app exited, the app build, iOS version and device type. They
          contain no drink or health data.
        </li>
        <li>
          <strong>An approximate location from your IP address.</strong> Like most online services,
          Mixpanel receives the IP address the data comes from and may use it to estimate your
          country, region and city.
        </li>
      </ul>
      <p>
        <strong>What Quench does not send:</strong> what you drink or how much (drink types,
        amounts or daily totals), the names of your cups, your first name, your weight, height or
        biological sex, your email address, your location coordinates or the temperature, or any
        Apple Health data.
      </p>
      <p>
        <strong>App Store privacy details.</strong> Quench&apos;s privacy label on the App Store
        declares Device ID, Product Interaction, Purchase History and Coarse Location, used for
        analytics, and Crash Data and Performance Data, used for app functionality. None of it is
        linked to your identity or used to track you, and no health data is collected.
      </p>
      <p>
        <strong>Your choices.</strong> Quench does not currently have a setting to turn analytics
        off; deleting the app stops it. To ask us to delete analytics data, email{" "}
        <a href="mailto:founder@heywrist.com">founder@heywrist.com</a>. Because the data is tied
        to a device identifier rather than to your name or email, we will need your help to find
        which data is yours.
      </p>
      <p>
        Quench contains no advertising, no ad-tracking or social-media SDKs, and no data-broker
        integrations, and we do not sell or rent your data.
      </p>

      <h2>7. Purchases</h2>
      <p>
        Quench Pro is sold through Apple&apos;s In-App Purchase system. Apple processes the
        payment; we never see your payment details or your Apple Account information. Quench
        checks with Apple, on your device, whether you own Pro, and keeps that status on the
        device so its widgets can see it. Apple gives us sales and subscription reports that do
        not include your name, email address or payment details. The analytics events in section
        6 record purchase steps, such as that a trial or a purchase started.
      </p>

      <h2>8. Notifications</h2>
      <p>
        Reminders are local notifications scheduled on your device. Quench does not use a push
        notification server. Reminder text may include your first name.
      </p>

      <h2>9. Keeping and deleting your data</h2>
      <ul>
        <li>Delete a single drink with the trash icon next to it on the Today screen or in History.</li>
        <li>Edit your profile and daily goal at any time in Settings.</li>
        <li>
          Turn off the weather-aware goal or reminders at any time, and revoke Apple Health,
          location or notification access in iOS Settings.
        </li>
        <li>
          Deleting Quench removes the data it stored on that device, except the install marker in
          your keychain (section 2), which holds no personal information.
        </li>
        <li>
          Water and caffeine that Quench saved to Apple Health stay in Health until you delete them
          in the Health app.
        </li>
        <li>For analytics data, email us as described in section 6.</li>
      </ul>

      <h2>10. Children</h2>
      <p>
        Quench is not directed at children under 13, and we do not knowingly collect personal
        information from children.
      </p>

      <h2>11. Changes to this policy</h2>
      <p>
        We will post any changes on this page and update the effective date at the top.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions or requests about your privacy:{" "}
        <a href="mailto:founder@heywrist.com">founder@heywrist.com</a>
      </p>
      <p><strong>Developer:</strong> Hey Wrist</p>
    </PolicyLayout>
  );
}
