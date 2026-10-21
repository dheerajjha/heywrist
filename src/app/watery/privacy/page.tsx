import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Quench: Water & Drink Tracker by Hey Wrist",
};

// Every statement on this page was checked against the app's code (watery repo,
// 2026-10-21). The analytics list in section 6 mirrors the app's Analytics.track
// call sites: if a property is added to or removed from the app, update section 6
// in the same change.
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
          Your drink entries are stored on your devices, and in your own private iCloud account if
          you turn on iCloud sync. We cannot read them.
        </li>
        <li>
          Quench sends product analytics to Mixpanel. Besides which features you use, this includes
          some profile and goal values, such as your weight and daily goal. Section 6 lists
          everything it includes.
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
        Quench uses Apple Health (HealthKit) only if you allow it, and Apple&apos;s permission
        screen lets you choose each type of data. You can change your choices at any time in the
        Health app (tap your profile picture, then Apps &rarr; Quench) or in iOS Settings &rarr;
        Privacy &amp; Security &rarr; Health.
      </p>
      <p><strong>Quench can read:</strong></p>
      <ul>
        <li>
          <strong>Body weight and biological sex</strong> &mdash; to pre-fill your profile during
          setup. Your weight is used to calculate your daily goal; biological sex picks the body
          figure the app shows.
        </li>
        <li>
          <strong>Step count and workouts</strong> &mdash; only if you turn on Auto from Health, to
          estimate your activity level from the last 7 days.
        </li>
        <li>
          <strong>Date of birth, dietary water and dietary caffeine</strong> &mdash; these are part
          of the permission request, but the current version of Quench does not use, store or send
          them.
        </li>
      </ul>
      <p><strong>Quench can write:</strong></p>
      <ul>
        <li>
          <strong>Dietary water</strong> &mdash; for each drink you log, its hydration-adjusted
          amount. Alcoholic drinks are not written.
        </li>
        <li>
          <strong>Dietary caffeine</strong> &mdash; an estimate for coffee, tea, energy drinks and
          soda, while Sync caffeine is on.
        </li>
      </ul>
      <p>
        Health data is never used for advertising or marketing, and never sold. Your step counts,
        workouts and other Health readings are not sent anywhere, with one exception you should
        know about: the weight and biological sex on your profile, which may have been pre-filled
        from Apple Health, are included in the analytics event Quench sends when you finish setup
        (section 6), and are part of your profile in iCloud if you turn on iCloud sync (section 3).
      </p>

      <h2>2. Information stored on your devices</h2>
      <p>
        Quench keeps your information on your iPhone or iPad and, if you use it, your Apple Watch,
        using Apple&apos;s on-device storage:
      </p>
      <ul>
        <li>
          <strong>Your profile</strong> &mdash; an optional first name, weight, optional height,
          biological sex, activity level, climate, units, daily goal, wake and sleep times,
          reminder settings, and the reason you chose for using Quench.
        </li>
        <li><strong>Your drink log</strong> &mdash; the type, amount and time of each drink.</li>
        <li><strong>Your cups, challenges and streaks</strong>, and your theme and mascot choices.</li>
        <li>
          If the weather-aware goal is on, the latest high temperature and the climate it implies
          (not your location).
        </li>
      </ul>
      <p>
        Quench&apos;s widgets, Live Activities and Siri actions use this information through
        storage they share with the app on your iPhone or iPad. The Watch app keeps its own copy,
        synced from your iPhone (section 4). Your first name stays on your devices (and in your
        iCloud, if you turn on sync); Quench uses it in greetings and reminder text.
      </p>

      <h2>3. iCloud sync (Quench Pro)</h2>
      <p>
        iCloud sync is off unless you turn it on (Settings &rarr; Customise My Hydration &rarr;
        iCloud Sync). When it is on, Quench stores your profile, drink log, cups and challenges in
        your own private iCloud database using Apple&apos;s CloudKit, so they appear on your other
        devices signed in to the same Apple Account. Your profile includes details such as your
        weight and biological sex. This data is held by Apple under{" "}
        <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">
          Apple&apos;s Privacy Policy
        </a>
        , and we have no access to your private iCloud data. You can turn sync off in the app, and
        delete Quench&apos;s iCloud data in iOS Settings &rarr; your name &rarr; iCloud &rarr;
        Manage Storage.
      </p>

      <h2>4. Apple Watch, widgets, Live Activities and Siri</h2>
      <p>
        The Watch app syncs with your iPhone using Apple&apos;s WatchConnectivity framework; this
        does not pass through any server of ours. Widgets, complications and Live Activities show
        information that is already on your device and do not send it anywhere. When you use Siri
        or Shortcuts, Apple handles the request and Quench receives only the action to perform,
        such as logging a glass of water. We do not receive your voice or Siri transcripts.
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
        . Quench does not store your location and never sends it to us or to Mixpanel; it keeps
        only the temperature and the climate setting that follows from it. That temperature and
        climate are included in an analytics event (section 6). You can turn the feature off in
        the app, or revoke location access in iOS Settings &rarr; Privacy &amp; Security &rarr;
        Location Services &rarr; Quench.
      </p>

      <h2>6. Analytics (Mixpanel)</h2>
      <p>
        We use Mixpanel, a product analytics service, to understand how Quench is used and what to
        improve. Mixpanel processes this data on our behalf as our service provider, under terms
        that require it to protect the data, and it may process it in the United States. See{" "}
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
      <p><strong>What Quench sends to Mixpanel:</strong></p>
      <ul>
        <li>
          <strong>Usage events</strong>, for example: the app was opened; a screen or setup step
          was viewed; a setting was changed; a drink was logged or deleted, and from where (such as
          the Today screen or a reminder&apos;s quick-log button); a reminder was opened or
          dismissed; the daily goal was reached; the upgrade screen was shown; a purchase or
          restore was started, completed, cancelled or failed, with the plan and whether it was a
          free trial.
        </li>
        <li>
          <strong>Profile and goal values.</strong> When you finish setup: weight, height,
          biological sex, activity level, climate, units, daily goal, wake and sleep hours,
          reminder settings, the reason you chose for using Quench, whether you entered a first
          name (and how many characters it has, never the name itself), and whether setup used
          Apple Health. Later, when you change your activity level, climate, units, daily goal,
          wake or sleep hour, or reminder interval in Settings, the new value.
        </li>
        <li>
          <strong>Summary numbers</strong>: today&apos;s total intake and number of drinks when you
          open the Today screen; your daily goal and streak; how many entries and days are in your
          history; the type, length and target of a custom challenge you create (for example, a
          no-caffeine or no-alcohol challenge); and, if the weather-aware goal is on, the
          day&apos;s high temperature.
        </li>
        <li>
          <strong>Device and app details</strong> that the Mixpanel SDK adds, such as device model,
          iOS version, screen size, and app version and build; when Quench was first and last
          opened; a random ID for each time the app is opened; and error details when something
          fails, such as a weather lookup.
        </li>
        <li>
          <strong>An approximate location from your IP address.</strong> Like most online services,
          Mixpanel receives the IP address the data comes from and may use it to estimate your
          country, region and city.
        </li>
      </ul>
      <p>
        <strong>What Quench does not send:</strong> which drinks you log (water, coffee, wine and
        so on), the names of your cups, your first name, your email address, your location
        coordinates, or any Apple Health data other than the weight and biological sex described
        above.
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
        device so its widgets can see it. Apple gives us sales and subscription
        reports that do not include your name, email address or payment details. The analytics
        events in section 6 record purchase steps, such as that a trial or a purchase started.
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
          Turn off iCloud sync, the weather-aware goal or reminders at any time, and revoke Apple
          Health, location or notification access in iOS Settings.
        </li>
        <li>
          Deleting Quench removes the data it stored on that device. If iCloud sync was on, also
          delete the iCloud copy in iOS Settings &rarr; your name &rarr; iCloud &rarr; Manage
          Storage, or it will come back when you reinstall.
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
