import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for Quench: Water & Drink Tracker by Hey Wrist",
};

export default function QuenchTerms() {
  return (
    <PolicyLayout appName="Quench" slug="watery" title="Terms of Use">
      <p><strong>Effective date:</strong> October 21, 2026</p>

      <h2>1. The licence agreement</h2>
      <p>
        Quench: Water &amp; Drink Tracker (&quot;Quench&quot;) is made by Hey Wrist and distributed
        through the App Store. Your use of Quench, and everything you buy in it, is governed by
        Apple&apos;s{" "}
        <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer">
          Standard Licensed Application End User License Agreement (EULA)
        </a>
        . That is the agreement that applies; this page summarises how purchases work in Quench and
        adds nothing that contradicts it.
      </p>

      <h2>2. Quench Pro</h2>
      <p>
        Quench is free to download. Logging any drink, deleting entries and the other basics are
        free. Quench Pro is optional and adds extra features. It is available as:
      </p>
      <ul>
        <li>Quench Pro Monthly: $2.99 per month</li>
        <li>Quench Pro Annual: $14.99 per year, with a 7-day free trial for new subscribers</li>
        <li>Quench Pro Lifetime: $29.99, paid once, with nothing to renew</li>
      </ul>
      <p>
        Payment is charged to your Apple Account when you confirm the purchase, or when a free
        trial ends. Subscriptions renew automatically unless cancelled at least 24 hours before the
        end of the current period, and your account is charged for renewal within the 24 hours
        before the period ends. Manage or cancel a subscription in iOS Settings &rarr; your name
        &rarr; Subscriptions. Prices shown here are United States prices and vary by country; the
        price you pay is the one the App Store shows before you buy. Refunds are handled by Apple
        at{" "}
        <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">
          reportaproblem.apple.com
        </a>
        .
      </p>

      <h2>3. Not medical advice</h2>
      <p>
        Quench is not a medical device and is not intended to diagnose, treat, cure or prevent any
        condition. Its daily goals and hydration estimates are general guidance only. Hydration
        needs vary with health conditions, medication, climate and activity; if you have a
        condition that affects how much you should drink, such as kidney or heart disease, follow
        your doctor&apos;s advice rather than the app.
      </p>

      <h2>4. Your data</h2>
      <p>
        There is no account. How Quench handles your information, including Apple Health data and
        the analytics it sends, is described in the{" "}
        <a href="/watery/privacy">Privacy Policy</a>.
      </p>

      <h2>5. Changes</h2>
      <p>
        We may update this page; the date at the top will change when we do.
      </p>

      <h2>6. Contact</h2>
      <p>
        Hey Wrist &mdash; <a href="mailto:founder@heywrist.com">founder@heywrist.com</a>
      </p>
    </PolicyLayout>
  );
}
