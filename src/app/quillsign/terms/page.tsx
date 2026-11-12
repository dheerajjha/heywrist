import type { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for the QuillSign app by Hey Wrist",
};

export default function QuillSignTerms() {
  return (
    <PolicyLayout appName="QuillSign" slug="quillsign" title="Terms & Conditions">
      <p><strong>Effective Date:</strong>{" "}October 23, 2026</p>
      <p><strong>Last Updated:</strong>{" "}November 12, 2026</p>

      <p>
        These Terms govern your use of the QuillSign application (&quot;the App&quot;) made by Hey Wrist (&quot;we,&quot;
        &quot;us,&quot; or &quot;our&quot;). Subscriptions and in-app purchases are sold under Apple&apos;s{" "}
        <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Licensed Application End User License Agreement</a>.
        By using the App you agree to these Terms and to that agreement.
      </p>

      <h2>1. What QuillSign does</h2>
      <p>
        QuillSign lets you fill in PDF forms, place a signature, initials, dates and other marks on documents you provide,
        and export a flattened PDF. It works on your device and does not send your documents to us. Our{" "}
        <a href="https://heywrist.com/quillsign/privacy">Privacy Policy</a> explains local storage, analytics and sharing.
      </p>

      <h2>2. Signatures and legal effect</h2>
      <p>
        QuillSign is a document tool, not a legal or identity service. It does not verify who signs a document, does not
        apply a certified digital signature, and makes no claim that a document you sign with it is valid, binding or
        accepted for any purpose. Flattening removes editable form fields; it does not make a PDF tamper-proof. Whether
        an electronic signature is accepted depends on the recipient and on the laws where you use it. If it matters,
        check with the recipient or a qualified professional.
      </p>

      <h2>3. Your documents and your responsibility</h2>
      <p>
        You retain ownership of your documents and are responsible for the documents you open, the information you enter
        and the signatures you place. Only sign documents you are entitled to sign. Keep your own copies of anything
        important: QuillSign does not provide document cloud sync, and deleting the App removes its local documents.
      </p>

      <h2>4. Free plan, QuillSign Pro and export packs</h2>
      <p>
        The free plan includes unlimited filling and signing, a saved signature and initials, scanning, and one flattened
        export per calendar month. QuillSign Pro (monthly or annual subscription, or a one-time Lifetime purchase) adds
        unlimited exports, signing from other apps through the Share button, the Shortcuts action, extra markup tools,
        templates and library search. Available prices and any annual-plan free trial are shown by the App Store in the
        paywall before purchase. Trial eligibility and availability are determined by Apple.
      </p>
      <p>
        Monthly and annual subscriptions renew automatically until cancelled. Payment is charged to your Apple Account;
        cancel at least 24 hours before a renewal or trial end in Settings › Apple Account › Subscriptions to avoid the
        next charge. Deleting QuillSign does not cancel a subscription. A local trial reminder is optional and is not
        guaranteed to arrive. Lifetime is a one-time purchase, not a renewing subscription.
      </p>
      <p>
        Export packs are consumable: each pack adds five exports on the device where it was bought and cannot be restored
        on another device. Packs do not unlock Pro features. Pro subscriptions and Lifetime can be restored using the
        same Apple Account. Refund requests are handled by Apple at <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.
      </p>

      <h2>5. Acceptable use</h2>
      <p>Do not use the App to forge signatures, to misrepresent your identity, or for any unlawful purpose.</p>

      <h2>6. Disclaimer and limitation of liability</h2>
      <p>
        The App is provided &quot;as is&quot; without warranties of any kind. To the extent the law allows, we are not liable
        for indirect or consequential losses, or for any loss arising from a document signed, sent or relied on using the App.
        Nothing in these Terms limits rights that cannot be excluded under applicable law.
      </p>

      <h2>7. Changes</h2>
      <p>We may update these Terms; the date above shows the latest version. Continuing to use the App means you accept the update.</p>

      <h2>8. Contact</h2>
      <p><a href="mailto:founder@heywrist.com">founder@heywrist.com</a></p>
      <p><strong>Developer:</strong>{" "}Hey Wrist</p>
    </PolicyLayout>
  );
}
