import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "BetterChannels - Terms & Conditions",
  description: "Terms and conditions for the BetterChannels app by HeyWrist",
};

export default function BetterChannelsTerms() {
  return (
    <PolicyLayout appName="BetterChannels" title="Terms & Conditions">
      <p><strong>Effective Date:</strong> April 5, 2026</p>
      <p><strong>Last Updated:</strong> April 5, 2026</p>

      <p>
        These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of the
        BetterChannels application (&quot;the App&quot;) developed by Ranju Jha
        (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By downloading,
        installing, or using BetterChannels, you agree to be bound by these Terms.
      </p>

      <h2>1. Description of Service</h2>
      <p>
        BetterChannels is a native iOS and Apple Watch companion application
        for managing Claude Code sessions remotely. It connects to a locally
        running Model Context Protocol (MCP) server on your machine and
        provides real-time session monitoring, message sending, voice input,
        Live Activities, and Apple Watch integration.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 13 years of age to use the App. By using
        BetterChannels, you represent that you meet this requirement.
      </p>

      <h2>3. Third-Party Dependencies</h2>
      <p>
        BetterChannels requires Claude Code (developed by Anthropic) and a
        compatible MCP server running on your computer. We are not affiliated
        with, endorsed by, or partnered with Anthropic. Your use of Claude
        Code is subject to{" "}
        <a href="https://www.anthropic.com/policies" target="_blank" rel="noopener noreferrer">
          Anthropic&apos;s Terms of Service
        </a>.
        We are not responsible for:
      </p>
      <ul>
        <li>Claude Code availability, performance, or output quality</li>
        <li>Changes to the Model Context Protocol specification</li>
        <li>Actions taken by Claude Code on your codebase</li>
        <li>Anthropic&apos;s pricing, API limits, or policy changes</li>
      </ul>

      <h2>4. Local Network &amp; Security</h2>
      <p>
        BetterChannels communicates with the MCP server over your local
        network. You are responsible for:
      </p>
      <ul>
        <li>Securing your local network and MCP server</li>
        <li>Ensuring unauthorized users cannot access the MCP server</li>
        <li>Understanding that messages sent through BetterChannels are executed by Claude Code on your machine</li>
        <li>Reviewing Claude Code actions before they affect production systems</li>
      </ul>
      <p>
        We are not liable for unintended code changes, data loss, or security
        incidents resulting from instructions sent via BetterChannels to
        Claude Code.
      </p>

      <h2>5. Voice Input &amp; Speech</h2>
      <p>
        BetterChannels uses Apple&apos;s on-device speech recognition for voice
        dictation and text-to-speech for reading progress updates. By using
        voice features, you acknowledge that speech recognition accuracy
        varies and that you are responsible for reviewing transcribed text
        before sending instructions to Claude Code sessions.
      </p>

      <h2>6. No Warranty on AI Output</h2>
      <p>
        BetterChannels displays progress updates and status information from
        Claude Code sessions. We make <strong>no guarantees</strong> about the
        accuracy, correctness, or safety of Claude Code&apos;s output, code
        changes, or command executions. Always review AI-generated code
        changes before deploying to production.
      </p>

      <h2>7. User Content &amp; Data Ownership</h2>
      <p>
        You retain full ownership of all messages, instructions, and content
        you create or transmit through BetterChannels. We do not claim any
        rights to your content. All data stays on your device and local
        network — we cannot access it.
      </p>

      <h2>8. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Reverse engineer, decompile, or disassemble the App</li>
        <li>Use the App to send harmful, malicious, or illegal instructions</li>
        <li>Attempt to bypass security restrictions of the MCP server</li>
        <li>Redistribute or sublicense the App</li>
        <li>Use the App in violation of Anthropic&apos;s acceptable use policies</li>
      </ul>

      <h2>9. Intellectual Property</h2>
      <p>
        All design, code, graphics, icons, and other elements of
        BetterChannels are the intellectual property of Ranju Jha. You are
        granted a limited, non-exclusive, non-transferable license for
        personal use. &quot;Claude,&quot; &quot;Claude Code,&quot; and
        &quot;Model Context Protocol&quot; are trademarks or products of
        Anthropic, PBC.
      </p>

      <h2>10. Disclaimer of Warranties</h2>
      <p>
        The App is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot;
        basis without warranties of any kind. We do not guarantee WebSocket
        connection reliability, notification delivery, Live Activity accuracy,
        speech recognition precision, or uninterrupted operation.
      </p>

      <h2>11. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Ranju Jha shall not be liable
        for any indirect, incidental, special, consequential, or punitive
        damages arising from your use of the App, including:
      </p>
      <ul>
        <li>Unintended code changes made by Claude Code via instructions sent through BetterChannels</li>
        <li>Data loss or corruption on your development machine</li>
        <li>Missed or delayed session notifications</li>
        <li>Inaccurate voice transcription leading to unintended instructions</li>
        <li>MCP server connection failures or interruptions</li>
      </ul>

      <h2>12. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Ranju Jha from any claims
        arising from your use of the App, instructions sent to Claude Code,
        or violation of these Terms.
      </p>

      <h2>13. Termination</h2>
      <p>
        You may stop using the App at any time by uninstalling it. We reserve
        the right to discontinue or modify the App without prior notice.
      </p>

      <h2>14. Changes to These Terms</h2>
      <p>
        We may modify these Terms at any time. Continued use after changes
        constitutes acceptance.
      </p>

      <h2>15. Governing Law</h2>
      <p>
        These Terms shall be governed by the laws of the jurisdiction in which
        the developer resides.
      </p>

      <h2>16. Contact Us</h2>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:support@heywrist.com">support@heywrist.com</a>
      </p>
      <p><strong>Developer:</strong> Ranju Jha</p>
    </PolicyLayout>
  );
}
