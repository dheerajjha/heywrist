import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Billsoon - Terms of Use",
  description: "Terms of use for the Billsoon subscription manager by Hey Wrist",
};

export default function BillsoonTerms() {
  return (
    <PolicyLayout appName="Billsoon" slug="billsoon" title="Terms of Use">
      <p><strong>Effective date:</strong> 18 September 2026</p>

      <h2>1. The agreement that governs purchases</h2>
      <p>
        Billsoon is distributed through the App Store and Billsoon Pro is sold as an Apple In-App
        Purchase. Those purchases are made under Apple&apos;s{" "}
        <a
          href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Standard End User License Agreement
        </a>
        , which is the agreement the app itself links to on its purchase screen. This page adds
        nothing that contradicts it; where the two differ, Apple&apos;s EULA governs.
      </p>

      <h2>2. What Billsoon is</h2>
      <p>
        Billsoon is a record-keeping tool. It stores the subscriptions and recurring bills you enter
        and reminds you before the dates you enter. It has no connection to your bank, your card or
        any merchant, and it cannot start, change or cancel a subscription on your behalf.
      </p>

      <h2>3. What it is not</h2>
      <p>
        Billsoon is not financial advice, not a budgeting service, and not a cancellation service. Its
        figures are arithmetic performed on the values you supplied. If a price changed and you did
        not update it, Billsoon will be confidently wrong, and the responsibility for what you are
        actually charged remains between you and the merchant.
      </p>
      <p>
        Prices and cancellation links in the built-in service catalogue are convenience defaults that
        were accurate when the list was compiled. They are starting points for the editor, not quoted
        prices, and every one of them is editable. Service names in the catalogue are the trademarks
        of their owners and appear only so you can label your own entries.
      </p>

      <h2>4. Subscriptions and the one-time purchase</h2>
      <ul>
        <li><strong>Billsoon Pro Monthly</strong> &mdash; $2.99 per month, renewing.</li>
        <li><strong>Billsoon Pro Annual</strong> &mdash; $14.99 per year, renewing, with a 14-day free trial.</li>
        <li><strong>Billsoon Pro Lifetime</strong> &mdash; $29.99 once. It does not renew.</li>
      </ul>
      <p>
        Renewing plans are charged to your Apple Account at confirmation and renew automatically
        unless auto-renew is turned off at least 24 hours before the end of the current period. A free
        trial becomes a paid period unless cancelled before it ends. Manage or cancel in Settings
        &rsaquo; Apple Account &rsaquo; Subscriptions. Prices may differ by storefront; the price shown
        in the app at the moment of purchase is the price charged.
      </p>

      <h2>5. Refunds</h2>
      <p>
        Apple handles all billing and all refunds for App Store purchases. Request one at{" "}
        <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">
          reportaproblem.apple.com
        </a>
        . We cannot issue refunds ourselves.
      </p>

      <h2>6. Your data</h2>
      <p>
        You own what you enter. Billsoon keeps it on your device, and in your own iCloud database if
        you switch sync on. You can export it as CSV at any time and delete all of it from Settings.
        What we collect is set out in the{" "}
        <a href="/billsoon/privacy">Privacy Policy</a>.
      </p>

      <h2>7. Acceptable use</h2>
      <p>
        Use Billsoon for your own records. Do not attempt to reverse engineer, resell or redistribute
        the app except as Apple&apos;s EULA permits.
      </p>

      <h2>8. Availability and warranty</h2>
      <p>
        Billsoon is provided as is. We do our best to make reminders fire on time, but iOS decides
        when a local notification is delivered and how often a widget refreshes, and we cannot
        guarantee a reminder will reach you. Do not rely on Billsoon alone for a payment whose
        consequences matter.
      </p>

      <h2>9. Liability</h2>
      <p>
        To the extent permitted by law, our total liability arising from your use of Billsoon is
        limited to the amount you paid for it. We are not liable for a charge you did not expect, a
        trial that converted, or a subscription you meant to cancel.
      </p>

      <h2>10. Changes</h2>
      <p>
        We may update these terms. Material changes will be noted here with a new effective date and
        described in the app&apos;s release notes.
      </p>

      <h2>11. Contact</h2>
      <p>
        Hey Wrist &mdash; <a href="mailto:founder@heywrist.com">founder@heywrist.com</a>
      </p>
    </PolicyLayout>
  );
}
