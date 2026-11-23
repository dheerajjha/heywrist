import type { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Screenaway handles Screen Time reports, optional permissions, purchases and product analytics.",
};

export default function ScreenawayPrivacy() {
  return (
    <PolicyLayout appName="Screenaway" slug="screenaway" title="Privacy Policy">
      <p>Updated November 23, 2026. Hey Wrist makes Screenaway for iPhone and Apple Watch. No Screenaway account is required.</p>
      <h2>What stays on your devices</h2>
      <p>Apple provides the Screen Time reports after you grant access. The report extension processes app names, icons, time, pickups and notification counts on your device. We do not send those reports or the list of apps or sites you choose to block to our analytics provider. Your focus history, optional reflections, Shield rules and challenge check-ins are stored locally. The app can share limited state with its widgets and your paired Apple Watch.</p>
      <h2>Optional permissions</h2>
      <p>You can use the focus timer without granting Screen Time, Health or notification access. If you connect Apple Health, the app can request sleep and mindful-session data and can write qualifying mindful minutes. Health records are not sent to our analytics provider or used for advertising. Camera-based exercise detection processes frames on-device; Screenaway does not upload the images, video or repetition counts. Motion features use on-device sensor information.</p>
      <p>If you enable a reminder, Screenaway schedules it locally through iOS. You can turn off access in iOS Settings. Revoking Health access does not automatically erase entries already saved in Apple Health; those can be managed in the Health app.</p>
      <h2>Product analytics</h2>
      <p>We use Mixpanel to understand how people use Screenaway and where features or purchases fail. Events can include screens opened, feature controls used, focus mode and duration, counts of selected items, plan selection and purchase outcomes. They are associated with a pseudonymous device identifier (Apple’s identifier for vendor or a randomly generated fallback) and session identifiers. Mixpanel also receives technical context such as app version, device model and operating system.</p>
      <p>These records are associated with that identifier; they are not anonymous. We do not send field-note content, individual app-usage reports, HealthKit samples, sleep goals or camera frames to Mixpanel. Screenaway does not use advertising IDs, sell your personal information, or track your activity across other companies’ apps and websites for advertising. See <a href="https://mixpanel.com/legal/privacy-policy/">Mixpanel’s privacy policy</a>.</p>
      <h2>Purchases and billing</h2>
      <p>Apple processes subscriptions, trials, one-time purchases, refunds and restores. Screenaway reads Apple-verified transaction and renewal information to determine Pro access and, if you choose, remind you about your trial. We do not receive your payment card details.</p>
      <h2>Data choices and support</h2>
      <p>Removing the app deletes its local app container; it does not cancel an App Store subscription, delete Apple Health records, or erase analytics already processed. Manage subscriptions through your Apple Account. If you email support or explicitly join the website waitlist, we receive the contact information you provide for that purpose. For privacy or deletion requests, contact <a href="mailto:founder@heywrist.com">founder@heywrist.com</a>.</p>
    </PolicyLayout>
  );
}
