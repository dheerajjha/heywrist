import type { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = { title: "TypeRoster Support", description: "Help with font previews, project activation, and the TypeRoster Mac app." };

export default function TypeRosterSupport() {
  return <PolicyLayout appName="TypeRoster" slug="typeroster" title="Support">
    <p>For help, email <a href="mailto:founder@heywrist.com?subject=TypeRoster%20support">founder@heywrist.com</a>. Include your macOS version, your TypeRoster version and what you expected to happen. You do not need to send a font file or client document.</p>
    <h2>How do I try my first font?</h2>
    <p>Open Quick start in the sidebar or Help → TypeRoster Quick Start. Type a headline, choose one of the two samples and select Save &amp; activate font. TypeRoster shows the family name to select in another Mac app’s font menu.</p>
    <h2>Why is a font still available after I turn off a set?</h2>
    <p>Another active set or manual activation can keep it available. Look at Availability in the inspector. A membership checkbox only says that the selected font belongs to a set. Fonts managed by macOS or another app are not disabled by TypeRoster.</p>
    <h2>What if a font is missing or a different version is active?</h2>
    <p>After moving a source file, import it from its new location and refresh the font library. If two versions share a PostScript name, TypeRoster reports the conflict rather than silently replacing the active version. Some design apps need to be reopened to refresh their font menus.</p>
    <h2>How do I remove a font or a project?</h2>
    <p>Turn off sets or clear manual activation to stop using an imported font. In the inspector, Remove from library removes its reference and memberships without deleting the original font file. You can rename or delete a set using its options menu.</p>
  </PolicyLayout>;
}
