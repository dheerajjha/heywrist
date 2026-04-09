import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the Screenaway app by Hey Wrist",
};

export default function ScreenawayPrivacy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <nav className="mb-8 text-sm text-slate-500 flex gap-2">
        <Link href="/screenaway" className="hover:text-white transition-colors">
          Screenaway
        </Link>
        <span>/</span>
        <span className="text-white">Privacy Policy</span>
      </nav>

      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-sm text-slate-400 mb-2">
        For Screenaway &mdash;{" "}
        <Link
          href="/screenaway/terms"
          className="text-indigo-400 hover:text-indigo-300 underline"
        >
          Terms of Use
        </Link>
      </p>
      <p className="text-sm text-slate-500 mb-10">
        <strong>Effective Date:</strong> April 2, 2026 &middot;{" "}
        <strong>Last Updated:</strong> April 2, 2026
      </p>

      <article className="prose prose-invert prose-slate max-w-none prose-headings:text-white prose-a:text-indigo-400 hover:prose-a:text-indigo-300 prose-strong:text-white">
        <p>
          Hey Wrist (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), built
          Screenaway as a screen time control app for iPhone and Apple Watch.
          This Privacy Policy explains how Screenaway handles your information
          and is designed to meet Apple&rsquo;s App Store requirements.
        </p>

        <h2>Our Core Principle</h2>
        <p>
          <strong>
            All data is processed and stored on your device only.
          </strong>{" "}
          Screenaway does not have servers, cloud databases, or any remote
          infrastructure. Your data never leaves your device.
        </p>

        <h2>Information We Access</h2>
        <p>
          Screenaway may request access to the following data categories, each
          requiring your explicit permission:
        </p>

        <h3>Health &amp; Fitness Data (HealthKit)</h3>
        <ul>
          <li>
            <strong>Sleep analysis</strong> &mdash; Read access to understand
            your rest patterns and correlate with screen time habits
          </li>
          <li>
            <strong>Mindfulness minutes</strong> &mdash; Read/write access to
            log focus and breathing sessions
          </li>
        </ul>
        <p>
          HealthKit data is read and written only with your explicit permission
          through Apple&rsquo;s standard authorization prompts. We never access
          HealthKit data without your consent.
        </p>

        <h3>Screen Time &amp; Device Activity</h3>
        <ul>
          <li>
            <strong>App usage patterns</strong> &mdash; Monitored via Apple&rsquo;s
            DeviceActivity framework to track screen time and app usage
          </li>
          <li>
            <strong>App blocking</strong> &mdash; Managed via Apple&rsquo;s
            FamilyControls and ManagedSettings frameworks
          </li>
        </ul>
        <p>
          We use Apple&rsquo;s FamilyControls, ManagedSettings, and DeviceActivity
          frameworks. All app blocking and usage monitoring is handled entirely
          by Apple&rsquo;s system frameworks on your device. Screenaway does not
          independently collect or store lists of which specific apps you use.
        </p>

        <h3>Location</h3>
        <ul>
          <li>
            <strong>Walking time detection</strong> &mdash; Used to detect when
            you&rsquo;re walking and optionally encourage you to put your phone away
          </li>
        </ul>
        <p>
          Location data is processed on-device in real time and is not stored or
          transmitted.
        </p>

        <h3>Camera</h3>
        <ul>
          <li>
            <strong>Exercise detection</strong> &mdash; Used for the
            &ldquo;Exercise to Unlock&rdquo; feature, which uses on-device Vision AI to
            count pushups and other exercises
          </li>
        </ul>
        <p>
          Camera data is processed entirely on-device using Apple&rsquo;s Vision
          framework. No images or video are stored, recorded, or transmitted.
        </p>

        <h3>Motion &amp; Sensors</h3>
        <ul>
          <li>
            <strong>Flip-to-focus detection</strong> &mdash; Detects when you
            place your phone face-down to automatically start a focus session
          </li>
        </ul>
        <p>Motion data is processed on-device in real time and is not stored.</p>

        <h2>Information We Do NOT Collect</h2>
        <ul>
          <li>No personal identifiers (name, email, phone number)</li>
          <li>No browsing history</li>
          <li>No advertising identifiers or tracking data</li>
          <li>No precise GPS coordinates are stored</li>
          <li>No account creation is required</li>
        </ul>

        <h2>Data Processing</h2>
        <p>
          All data processing occurs locally on your iPhone or Apple Watch.
          Specifically:
        </p>
        <ul>
          <li>Screen time statistics are calculated on-device</li>
          <li>Focus session data is stored locally</li>
          <li>Challenge progress and streak data are stored locally</li>
          <li>Exercise detection uses on-device machine learning</li>
          <li>No data is sent to external servers for any purpose</li>
        </ul>

        <h2>Third-Party Services</h2>
        <p>
          Screenaway uses <strong>no third-party services</strong>. There are:
        </p>
        <ul>
          <li>No analytics SDKs</li>
          <li>No advertising networks</li>
          <li>No crash reporting services that transmit personal data</li>
          <li>No social media SDKs</li>
          <li>No third-party tracking of any kind</li>
        </ul>

        <h2>Data Sharing</h2>
        <p>
          We do not share, sell, rent, or disclose your data to any third party.
          Period.
        </p>

        <h2>Apple Watch</h2>
        <p>
          The Screenaway Apple Watch companion app communicates with your iPhone
          using Apple&rsquo;s WatchConnectivity framework &mdash; a direct, encrypted,
          on-device communication channel. No data passes through external
          servers.
        </p>

        <h2>Children&rsquo;s Privacy</h2>
        <p>
          Screenaway may be used by parents to manage family screen time. We
          comply with the Children&rsquo;s Online Privacy Protection Act (COPPA). We
          do not knowingly collect personal information from children under 13.
          Since all data is processed and stored locally on the device, no
          children&rsquo;s data is transmitted to us or any third party.
        </p>

        <h2>Data Retention &amp; Deletion</h2>
        <p>
          All data is stored locally on your device. You can delete your data at
          any time by:
        </p>
        <ul>
          <li>Deleting the Screenaway app from your device</li>
          <li>
            Revoking HealthKit permissions in Settings &gt; Privacy &amp;
            Security &gt; Health
          </li>
          <li>
            Revoking Screen Time permissions in Settings &gt; Screen Time
          </li>
        </ul>
        <p>
          Deleting the app removes all locally stored data permanently. We have
          no backups or copies of your data.
        </p>

        <h2>Security</h2>
        <p>
          Your data is protected by Apple&rsquo;s built-in device encryption. Since
          Screenaway stores all data on-device and has no network
          communication, there is no risk of server-side data breaches.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated effective date. Continued use
          of the app after changes constitutes acceptance of the updated policy.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <a href="mailto:support@heywrist.com">support@heywrist.com</a>.
        </p>
        <p>
          <strong>Developer:</strong> Hey Wrist
        </p>
      </article>

      <footer className="mt-16 pt-8 border-t border-white/10 text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Hey Wrist. All rights reserved.</p>
        <p className="mt-1">
          Contact:{" "}
          <a
            href="mailto:support@heywrist.com"
            className="text-indigo-400 hover:text-indigo-300"
          >
            support@heywrist.com
          </a>
        </p>
      </footer>
    </main>
  );
}
