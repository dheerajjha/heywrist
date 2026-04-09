import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "BetterChannels - Privacy Policy",
  description: "Privacy policy for the BetterChannels app by HeyWrist",
};

export default function BetterChannelsPrivacy() {
  return (
    <PolicyLayout appName="BetterChannels" title="Privacy Policy">
      <p><strong>Effective Date:</strong> April 5, 2026</p>
      <p><strong>Last Updated:</strong> April 5, 2026</p>

      <p>
        Hey Wrist (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) built BetterChannels as
        a native iOS and Apple Watch companion for Claude Code sessions. This
        Privacy Policy describes what information BetterChannels accesses, how
        it is processed, and what rights you have regarding your data.
      </p>
      <p>
        <strong>In short:</strong> BetterChannels communicates only with a
        local MCP server running on your own machine. We have no cloud
        servers, no accounts, no analytics, and no tracking.
      </p>

      <h2>1. How BetterChannels Works</h2>
      <p>
        BetterChannels connects to a Model Context Protocol (MCP) server that
        you run locally on your laptop or workstation. This MCP server bridges
        your active Claude Code sessions to your iPhone and Apple Watch over
        your local network via HTTP and WebSocket. All communication stays
        within your local network — no data is routed through external
        servers, cloud services, or our infrastructure.
      </p>

      <h2>2. Information We Access</h2>

      <h3>2.1 Microphone &amp; Speech Recognition — Optional</h3>
      <p>
        BetterChannels offers voice input for dictating instructions to Claude
        Code sessions. This uses Apple&apos;s on-device Speech Recognition
        framework (SFSpeechRecognizer) and requires your explicit permission
        for both microphone access and speech recognition. Audio is processed
        entirely on your device — we never receive, store, or transmit your
        audio recordings. You can revoke these permissions at any time from
        Settings → Privacy &amp; Security.
      </p>

      <h3>2.2 Local Network Access</h3>
      <p>
        BetterChannels communicates with the MCP server on your local network
        via HTTP and WebSocket connections. iOS may prompt you to allow local
        network access. This connection is used exclusively for sending
        messages to and receiving progress updates from your Claude Code
        sessions. No external network requests are made by the app itself.
      </p>

      <h3>2.3 Notifications</h3>
      <p>
        BetterChannels may request permission to send local notifications for
        session status changes (e.g., when Claude is waiting for input, or
        when a task completes). Notifications are triggered entirely on-device
        based on WebSocket events — no external push notification servers are
        involved.
      </p>

      <h3>2.4 Information We Do NOT Collect</h3>
      <p>BetterChannels does not collect, access, or request:</p>
      <ul>
        <li>Your name, email address, or any personally identifiable information</li>
        <li>Your source code, file contents, or repository data (this stays between Claude Code and your MCP server)</li>
        <li>Location data, contacts, photos, calendar, or health data</li>
        <li>Device identifiers for tracking purposes</li>
        <li>Any data for analytics, advertising, or profiling</li>
      </ul>

      <h2>3. Data Stored on Your Device</h2>
      <p>BetterChannels may store the following locally:</p>
      <ul>
        <li><strong>Session metadata</strong> — project names, session IDs, and status (active/waiting/completed)</li>
        <li><strong>Progress timeline</strong> — status messages and progress updates received from the MCP server</li>
        <li><strong>Sent messages</strong> — instructions you sent to Claude Code sessions</li>
        <li><strong>App preferences</strong> — mute settings, connection configuration</li>
      </ul>
      <p>
        This data is stored in the app&apos;s sandboxed container and is
        deleted when you uninstall the app.
      </p>

      <h2>4. Data Storage &amp; Security</h2>
      <p>
        BetterChannels operates <strong>no proprietary servers, no cloud
        databases, and no remote analytics endpoints</strong>. The MCP server
        runs on your own machine under your control. All communication occurs
        over your local network. No user accounts or sign-ups are required.
        Your data never passes through our infrastructure.
      </p>

      <h2>5. Data Sharing</h2>
      <p>
        We do not share, sell, rent, trade, or disclose any data to any third
        party. The only data exchange is between the BetterChannels app on
        your device and the MCP server running on your own computer.
      </p>

      <h2>6. Third-Party Services &amp; SDKs</h2>
      <p>BetterChannels does not include any third-party:</p>
      <ul>
        <li>Analytics or telemetry SDKs</li>
        <li>Advertising or ad-tracking frameworks</li>
        <li>Crash reporting services that transmit user data</li>
        <li>Social media SDKs</li>
        <li>Cloud service SDKs (no Firebase, no AWS, no Azure)</li>
      </ul>
      <p>
        The app uses Apple&apos;s native frameworks exclusively: SwiftUI,
        AVFoundation, Speech, ActivityKit, WidgetKit, and WatchConnectivity.
      </p>

      <h2>7. Live Activities &amp; Widgets</h2>
      <p>
        BetterChannels provides Live Activities on the Lock Screen and Dynamic
        Island to show real-time session progress (project name, status,
        completion percentage). This data comes from your local MCP server
        and is rendered entirely on-device via ActivityKit. Widgets display
        session summaries from locally cached data — no network requests are
        made by widget extensions.
      </p>

      <h2>8. Apple Watch Integration</h2>
      <p>
        BetterChannels includes an Apple Watch app that displays sessions and
        allows quick replies and voice dictation. Data syncs between iPhone
        and Apple Watch via Apple&apos;s WatchConnectivity framework — no
        external servers are involved. Voice dictation on Watch uses Apple&apos;s
        built-in dictation service.
      </p>

      <h2>9. Text-to-Speech</h2>
      <p>
        BetterChannels can read progress updates aloud using Apple&apos;s
        AVSpeechSynthesizer (on-device text-to-speech). No audio data is
        transmitted externally. You can mute speech globally or per-session.
      </p>

      <h2>10. Claude Code &amp; Anthropic</h2>
      <p>
        BetterChannels is a third-party companion app and is not developed by
        or affiliated with Anthropic. Claude Code, Claude, and the Model
        Context Protocol are products/standards of Anthropic. Your use of
        Claude Code is governed by{" "}
        <a href="https://www.anthropic.com/policies" target="_blank" rel="noopener noreferrer">
          Anthropic&apos;s Terms of Service and Privacy Policy
        </a>.
        BetterChannels only communicates with the local MCP server — it does
        not connect to Anthropic&apos;s APIs directly.
      </p>

      <h2>11. Data Retention &amp; Deletion</h2>
      <p>You are in full control of your data:</p>
      <ul>
        <li>Session data is ephemeral and tied to active MCP server connections</li>
        <li>Revoke microphone or speech recognition permissions from iOS Settings</li>
        <li>Stop the MCP server on your laptop to end all data flow</li>
        <li>Delete all app data by uninstalling the app</li>
      </ul>

      <h2>12. Children&apos;s Privacy</h2>
      <p>
        BetterChannels is a developer productivity tool not directed at
        children under the age of 13. We do not knowingly collect personal
        information from children.
      </p>

      <h2>13. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with an updated effective date. Continued use of
        BetterChannels after changes constitutes acceptance.
      </p>

      <h2>14. Contact Us</h2>
      <p>Questions about this Privacy Policy? Contact us at:</p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:support@heywrist.com">support@heywrist.com</a>
      </p>
      <p><strong>Developer:</strong> Hey Wrist</p>
    </PolicyLayout>
  );
}
