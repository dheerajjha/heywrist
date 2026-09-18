import { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Billsoon - Support",
  description: "Help, FAQs and contact details for the Billsoon subscription and renewal tracker",
};

function FAQ({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <>
      <h3>{q}</h3>
      {children}
    </>
  );
}

export default function BillsoonSupport() {
  return (
    <PolicyLayout appName="Billsoon" slug="billsoon" title="Support">
      <p>
        Email <a href="mailto:founder@heywrist.com">founder@heywrist.com</a> and a human answers,
        usually within two working days. Telling us your iOS version and what you were doing when it
        went wrong saves a round trip.
      </p>

      <h2>Getting started</h2>

      <FAQ q="How do I add a subscription?">
        <p>
          Tap <strong>+</strong> on the Upcoming screen. Search the built-in catalogue &mdash; it
          knows about three hundred or so services and fills in the category, colour and a typical
          price &mdash; then check the next charge date and tap Save. If the service is not listed,
          tap <strong>Type your own</strong> and enter a name, a price and a date.
        </p>
      </FAQ>

      <FAQ q="The catalogue price is wrong for my plan.">
        <p>
          It will be, often. Those prices are list prices from when the catalogue was compiled and
          they are only there so the field is not empty. Overwrite the amount with what you actually
          pay; Billsoon uses your number everywhere.
        </p>
      </FAQ>

      <FAQ q="I am on a free trial. What do I enter?">
        <p>
          Turn on <strong>This is a free trial</strong> and set the trial end date. Billsoon then
          treats that date as the moment money moves: it is the date on the timeline, the date that
          counts toward the month total, and the date the reminders are built around. You also get an
          extra reminder the day before, because that is the last day cancelling still costs nothing.
        </p>
      </FAQ>

      <h2>Widgets, Lock Screen and Watch</h2>

      <FAQ q="How do I put it on the Lock Screen?">
        <p>
          Press and hold the Lock Screen, tap <strong>Customise</strong>, tap the area under the
          clock, and choose a Billsoon widget. The rectangular one shows the service, the amount and
          how many days away it is; the circular one shows just the days.
        </p>
      </FAQ>

      <FAQ q="How do I add the complication to my watch face?">
        <p>
          On the Apple Watch, press and hold the face, tap <strong>Edit</strong>, swipe to the
          complications page, tap a slot and pick Billsoon. There are two: the next charge, and the
          days remaining as a dial.
        </p>
      </FAQ>

      <FAQ q="The widget is showing an old amount.">
        <p>
          iOS decides how often a widget is allowed to redraw and can hold one back when the battery
          is low or the device is busy. Billsoon asks for a refresh every time you change something
          and schedules one for midnight. Opening the app forces an immediate update.
        </p>
      </FAQ>

      <FAQ q="My Watch shows nothing, or something stale.">
        <p>
          The Watch app is a mirror of the phone. Open Billsoon on the iPhone once with the Watch
          nearby and the list transfers. If it is still empty, check that Billsoon is installed on the
          Watch from the Watch app on your iPhone.
        </p>
      </FAQ>

      <h2>Reminders and Live Activities</h2>

      <FAQ q="I did not get a reminder.">
        <p>
          Check Settings &rsaquo; Notifications &rsaquo; Billsoon on your iPhone and make sure alerts
          are allowed. Then check the reminder lead time on the subscription itself and the delivery
          time in Billsoon&rsquo;s own settings. iOS also limits how many pending local notifications
          an app may hold, so Billsoon schedules the nearest ones first and rebuilds the schedule
          every time something changes &mdash; a very long list will always have reminders for the
          next charges, not for ones months away.
        </p>
      </FAQ>

      <FAQ q="Why did the trial countdown disappear?">
        <p>
          The Live Activity only runs in the final 24 hours before a trial converts, and it ends
          itself the moment the deadline passes or you mark the subscription cancelled. It is a Pro
          feature and it needs Live Activities enabled in Settings &rsaquo; Billsoon.
        </p>
      </FAQ>

      <h2>Money and currencies</h2>

      <FAQ q="Why is “this month” different from the per-month figure?">
        <p>
          <strong>This month</strong> is what the current billing month actually commits you to, so a
          yearly plan lands in one month and nothing in the other eleven. <strong>Per month</strong> is
          the run rate: every plan converted to a monthly equivalent and added up. Both are useful and
          they are rarely equal.
        </p>
      </FAQ>

      <FAQ q="Can I change which currency the totals are in?">
        <p>
          Settings &rsaquo; <strong>Show totals in</strong>. Foreign subscriptions are converted with a
          rate table built into the app, so the figure works with no connection at all. Turning on
          <strong> Refresh exchange rates</strong> fetches current rates instead; it is a Pro option
          and it is off by default.
        </p>
      </FAQ>

      <FAQ q="My month starts on payday, not the 1st.">
        <p>Settings &rsaquo; <strong>Month starts on</strong>. Pick any day from 1 to 28.</p>
      </FAQ>

      <h2>Purchases</h2>

      <FAQ q="What does the free version include?">
        <p>
          Up to five active subscriptions, reminders, the Lock Screen widget, the Watch app, the
          Upcoming timeline and the monthly total. Pro removes the five-subscription limit and adds
          every widget including the interactive one and StandBy, the free-trial Live Activity,
          Insights, multi-currency conversion, iCloud sync, CSV export and import, and custom
          categories.
        </p>
      </FAQ>

      <FAQ q="I paid but Pro is not on.">
        <p>
          Open Settings inside Billsoon and tap <strong>Restore purchases</strong>, or tap it on the
          paywall. Make sure the device is signed in to the same Apple Account you bought with. If it
          still does not unlock, email us with the date of purchase.
        </p>
      </FAQ>

      <FAQ q="How do I cancel Billsoon Pro?">
        <p>
          Settings &rsaquo; your name &rsaquo; Subscriptions on your iPhone. If you bought the
          lifetime option there is nothing to cancel &mdash; it does not renew.
        </p>
      </FAQ>

      <FAQ q="Can Billsoon cancel my other subscriptions for me?">
        <p>
          No, and it never will. Where the catalogue knows a service&rsquo;s own cancellation page,
          the subscription screen offers a link that opens it in Safari. The cancelling is yours to do.
        </p>
      </FAQ>

      <h2>Data</h2>

      <FAQ q="Do I need an account? Do you see my bank?">
        <p>
          No to both. There is no sign-up, and Billsoon has no bank-linking feature of any kind. Your
          list is on your device. Details are in the <a href="/billsoon/privacy">Privacy Policy</a>.
        </p>
      </FAQ>

      <FAQ q="How do I move my list to a new phone?">
        <p>
          Turn on iCloud sync (Pro) on both devices while signed in to the same Apple Account, or
          export a CSV from the old phone and import it on the new one.
        </p>
      </FAQ>

      <FAQ q="How do I delete everything?">
        <p>
          Settings &rsaquo; <strong>Delete all my data</strong>. It clears the list, the history and
          every scheduled reminder on the device, and in iCloud too if sync is on. It cannot be undone.
        </p>
      </FAQ>

      <h2>Still stuck</h2>
      <p>
        <a href="mailto:founder@heywrist.com">founder@heywrist.com</a>. If it is a bug, tell us the
        iOS version and what you tapped last; if it is a missing service, send the name and we will
        add it to the catalogue.
      </p>
    </PolicyLayout>
  );
}
