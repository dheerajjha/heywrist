import type { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = { title: "TypeRoster Privacy Policy", description: "How the TypeRoster Mac app handles your fonts, project sets, and preview text." };

export default function TypeRosterPrivacy() {
  return <PolicyLayout appName="TypeRoster" slug="typeroster" title="Privacy Policy">
    <p>Effective November 24, 2026. The TypeRoster Mac app does not collect or send personal data to Hey Wrist or third-party partners. It has no account, analytics SDK, ads or tracking.</p>
    <h2>What stays on your Mac</h2>
    <p>The app reads fonts available to macOS and files or folders you choose. Font names, file locations, content hashes, read-only access bookmarks, client sets, favorites and preview text are stored or processed on your Mac. An activated font may have a private local copy so that macOS can make it available to other apps during the login session. TypeRoster does not upload these files or synchronize your library to a server.</p>
    <h2>Your controls</h2>
    <p>You can turn off a set, clear manual activation, remove an imported font reference, delete a project, or replace your preview text. Removing a font from the library leaves the original file in place. Local backups you or macOS manage are separate.</p>
    <h2>Support, purchases and this website</h2>
    <p>If you choose to email support, Hey Wrist receives the email address and information you send and uses them to answer your request. Apple handles App Store purchases under its own privacy policy. TypeRoster does not receive your payment card details.</p>
    <p>Opening a Help link takes you to this website in your browser. Unlike the Mac app, heywrist.com uses website analytics: page paths, visit times, IP addresses and associated approximate location, referrer and browser information may be processed, including by our hosting and analytics provider, Vercel. The website does not receive the fonts or preview text from the app.</p>
    <p>For privacy questions or requests about support correspondence, contact <a href="mailto:founder@heywrist.com?subject=TypeRoster%20privacy">founder@heywrist.com</a>.</p>
  </PolicyLayout>;
}
