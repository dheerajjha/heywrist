import type { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = { title: "TypeRoster Terms and Font Licenses", description: "Mac App Store license terms and credits for the included sample fonts." };

export default function TypeRosterTerms() {
  return <PolicyLayout appName="TypeRoster" slug="typeroster" title="Terms & Conditions">
    <p>TypeRoster is a Mac font manager. The Mac App Store purchase is governed by <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Apple’s Standard Licensed Application End User License Agreement</a>. Buying TypeRoster does not grant rights to third-party fonts you import.</p>
    <h2>Your fonts</h2>
    <p>Import and activate only fonts you are permitted to use. Your font licenses determine whether and how you may use them in designs, share them, or embed them in published work.</p>
    <h2 id="sample-fonts">Sample font credits</h2>
    <p><a href="https://github.com/Instrument/instrument-serif">Instrument Serif</a> (copyright 2022, The Instrument Serif Project Authors) and <a href="https://github.com/floriankarsten/space-grotesk">Space Grotesk</a> (copyright 2020, The Space Grotesk Project Authors) are distributed under the SIL Open Font License, Version 1.1. The original notices and complete license text are included beside both font files in the app’s SampleFonts resources. Their respective font licenses continue to apply.</p>
  </PolicyLayout>;
}
