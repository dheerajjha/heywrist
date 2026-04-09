import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the Screenaway app by Hey Wrist",
};

export default function ScreenawayTerms() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <nav className="mb-8 text-sm text-slate-500 flex gap-2">
        <Link href="/screenaway" className="hover:text-white transition-colors">
          Screenaway
        </Link>
        <span>/</span>
        <span className="text-white">Terms of Use</span>
      </nav>

      <h1 className="text-3xl font-bold mb-2">Terms of Use</h1>
      <p className="text-sm text-slate-400 mb-2">
        For Screenaway &mdash;{" "}
        <Link
          href="/screenaway/privacy"
          className="text-indigo-400 hover:text-indigo-300 underline"
        >
          Privacy Policy
        </Link>
      </p>
      <p className="text-sm text-slate-500 mb-10">
        <strong>Effective Date:</strong> April 2, 2026 &middot;{" "}
        <strong>Last Updated:</strong> April 2, 2026
      </p>

      <article className="prose prose-invert prose-slate max-w-none prose-headings:text-white prose-a:text-indigo-400 hover:prose-a:text-indigo-300 prose-strong:text-white">
        <p>
          By downloading, installing, or using Screenaway (&ldquo;the App&rdquo;), you
          agree to be bound by these Terms of Use. If you do not agree, please
          do not use the App.
        </p>

        <h2>Description of Service</h2>
        <p>
          Screenaway is a screen time management app for iPhone and Apple Watch
          that helps you track device usage, block distracting apps, run focus
          timers, and build healthier digital habits. The App uses Apple&rsquo;s
          Screen Time APIs (FamilyControls, ManagedSettings, and
          DeviceActivity frameworks) to provide its core functionality.
        </p>

        <h2>Screen Time API Disclaimer</h2>
        <p>
          App blocking and usage monitoring rely on Apple&rsquo;s Screen Time
          framework. <strong>Functionality may vary</strong> based on your iOS
          version, device model, and device settings. We do not guarantee that
          app blocking will work in all scenarios, as this depends on Apple&rsquo;s
          system-level APIs. Changes to iOS or watchOS may affect Screenaway&rsquo;s
          functionality without prior notice.
        </p>

        <h2>Subscriptions &amp; Purchases</h2>

        <h3>Free Tier</h3>
        <p>
          Screenaway offers a free tier with basic screen time tracking, one
          focus mode, and one watch complication. No payment is required.
        </p>

        <h3>Pro Subscription</h3>
        <p>Screenaway Pro is available at the following price points:</p>
        <ul>
          <li>
            <strong>Weekly:</strong> $3.99/week
          </li>
          <li>
            <strong>Monthly:</strong> $5.99/month
          </li>
          <li>
            <strong>Annual:</strong> $34.99/year
          </li>
          <li>
            <strong>Lifetime:</strong> $59.99 (one-time purchase)
          </li>
        </ul>

        <h3>Auto-Renewal</h3>
        <p>
          Subscriptions (weekly, monthly, and annual) automatically renew unless
          canceled at least 24 hours before the end of the current billing
          period. Your Apple ID account will be charged for renewal within 24
          hours prior to the end of the current period at the same price.
        </p>

        <h3>Free Trial</h3>
        <p>
          The annual plan may include a 7-day free trial. If you cancel during
          the trial period, you will not be charged. If you do not cancel, the
          subscription will automatically convert to a paid subscription at the
          end of the trial period.
        </p>

        <h3>Managing Subscriptions</h3>
        <p>
          You can manage or cancel your subscription at any time through your
          Apple ID settings: Settings &gt; [your name] &gt; Subscriptions.
          Cancellation takes effect at the end of the current billing period.
          No refunds are provided for partial billing periods.
        </p>

        <h3>Lifetime Purchase</h3>
        <p>
          The lifetime purchase is a one-time, non-recurring payment that
          grants permanent access to all Pro features. &ldquo;Lifetime&rdquo; refers to
          the lifetime of the product, not the purchaser.
        </p>

        <h3>Family Sharing</h3>
        <p>
          Screenaway Pro subscriptions and lifetime purchases may be shared with
          up to five additional family members through Apple&rsquo;s Family Sharing,
          subject to Apple&rsquo;s Family Sharing terms and conditions.
        </p>

        <h3>Student Discount</h3>
        <p>
          Screenaway Pro is free for verified students. Eligibility and
          verification requirements may change at our discretion.
        </p>

        <h2>Accuracy Disclaimer</h2>
        <p>
          Screen time data, usage statistics, and related metrics are provided
          for informational purposes only.{" "}
          <strong>
            We do not warrant the accuracy of screen time tracking.
          </strong>{" "}
          Actual usage may differ from reported figures due to limitations of
          Apple&rsquo;s APIs, device settings, or background app behavior.
        </p>

        <h2>Not Medical Advice</h2>
        <p>
          Screenaway is not a medical device and does not provide medical
          advice, diagnosis, or treatment. Features involving HealthKit data
          (sleep, mindfulness) are for informational and personal wellness
          purposes only. Always consult a qualified healthcare provider for
          medical concerns.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          All content, design, code, and branding in Screenaway are the
          intellectual property of Hey Wrist. You may not copy, modify,
          distribute, decompile, or reverse engineer any part of the App.
        </p>

        <h2>User Responsibilities</h2>
        <p>You agree to:</p>
        <ul>
          <li>Use the App in compliance with all applicable laws</li>
          <li>Not attempt to circumvent app blocking features for others</li>
          <li>
            Not use the App in a way that could harm or impair its functionality
          </li>
          <li>
            Maintain the security of your device and Apple ID credentials
          </li>
        </ul>

        <h2>Disclaimer of Warranties</h2>
        <p>
          The App is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties
          of any kind, either express or implied, including but not limited to
          implied warranties of merchantability, fitness for a particular
          purpose, and non-infringement. We do not guarantee uninterrupted,
          error-free operation.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by applicable law, Hey Wrist shall
          not be liable for any indirect, incidental, special, consequential,
          or punitive damages arising from your use of or inability to use the
          App, including but not limited to:
        </p>
        <ul>
          <li>Loss of data or productivity</li>
          <li>Inaccurate screen time reporting</li>
          <li>
            Failure of app blocking features to function as expected
          </li>
          <li>Any actions taken based on data provided by the App</li>
        </ul>
        <p>
          In no event shall our total liability exceed the amount you paid for
          the App in the twelve (12) months preceding the claim.
        </p>

        <h2>Termination</h2>
        <p>
          We reserve the right to terminate or suspend your access to the App
          at any time, without prior notice, for conduct that we believe
          violates these Terms or is harmful to other users or us.
        </p>

        <h2>Changes to These Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. Changes will
          be posted on this page with an updated effective date. Continued use
          of the App after changes constitutes acceptance of the updated Terms.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of the State of California, United States, without regard to its
          conflict of law provisions.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at{" "}
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
