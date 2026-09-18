import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Quitwave - Terms of Use",
  description: "Terms of use for the Quitwave app by Hey Wrist",
};

export default function QuitwaveTerms() {
  return (
    <PolicyLayout appName="Quitwave" slug="quitwave" title="Terms of Use">
      <p><strong>Effective Date:</strong> September 18, 2026</p>

      <h2>1. The agreement your purchase is sold under</h2>
      <p>
        Quitwave is distributed through the App Store, and everything you buy in it &mdash; Quitwave
        Pro Monthly, Quitwave Pro Annual and Quitwave Pro Lifetime &mdash; is sold under Apple&apos;s{" "}
        <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer">
          Standard End User License Agreement
        </a>. That is the agreement that governs your licence to use the app, and it is what the
        paywall inside the app links to. This page adds nothing that contradicts it.
      </p>

      <h2>2. Subscriptions and billing</h2>
      <ul>
        <li>Quitwave Pro Monthly: $7.99 per month</li>
        <li>Quitwave Pro Annual: $39.99 per year, with a 14-day free trial for new subscribers</li>
        <li>Quitwave Pro Lifetime: $79.99, paid once, with nothing to renew</li>
      </ul>
      <p>
        Subscriptions renew automatically unless cancelled at least 24 hours before the end of the
        current period. Payment is charged to your Apple Account. Manage or cancel a subscription in
        iOS Settings &rarr; Apple Account &rarr; Subscriptions. Prices are the United States prices
        and vary by storefront; the price you will be charged is always the one shown on the paywall
        before you buy.
      </p>
      <p>
        Refunds are handled by Apple, not by us, at{" "}
        <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a>.
      </p>

      <h2>3. What Quitwave is not</h2>
      <p>
        Quitwave is not a medical device and not a medical service. It provides general information
        and a guided breathing exercise. It does not diagnose, treat, cure or prevent anything, and
        it makes no claims about your health. Do not use it in place of advice from a qualified
        clinician. If you are unwell, or if stopping nicotine is affecting your health, speak to a
        doctor or a pharmacist.
      </p>

      <h2>4. Your data</h2>
      <p>
        There is no account. What you record stays on your devices, and deleting the app deletes it.
        See the <a href="/quitwave/privacy">Privacy Policy</a> for the detail, including the
        anonymous analytics the app sends.
      </p>

      <h2>5. Acceptable use</h2>
      <p>
        Use Quitwave for yourself. Do not attempt to reverse-engineer it, resell it, or use it in a
        way that breaks the law where you are.
      </p>

      <h2>6. No warranty, and limits on liability</h2>
      <p>
        Quitwave is provided &quot;as is&quot;. To the fullest extent the law allows, Hey Wrist
        disclaims all warranties and is not liable for indirect or consequential loss arising from
        your use of the app. Nothing here limits liability that cannot be limited by law.
      </p>

      <h2>7. Changes</h2>
      <p>
        We may update these terms; the date at the top will change when we do. Continuing to use the
        app after an update means you accept it.
      </p>

      <h2>8. Contact</h2>
      <p>
        Hey Wrist &mdash; <a href="mailto:founder@heywrist.com">founder@heywrist.com</a>
      </p>
    </PolicyLayout>
  );
}
