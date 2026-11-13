import type { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the QuillSign app by Hey Wrist",
};

export default function QuillSignPrivacy() {
  return (
    <PolicyLayout appName="QuillSign" slug="quillsign" title="Privacy Policy">
      <p><strong>Effective Date:</strong>{" "}October 23, 2026</p>
      <p><strong>Last Updated:</strong>{" "}November 13, 2026</p>

      <p>
        Hey Wrist (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) makes QuillSign, an app for filling in and signing
        PDF documents on iPhone. This policy explains what QuillSign stores, what it sends, and what it never uploads.
      </p>
      <p>
        <strong>In short:</strong>{" "}QuillSign processes your documents, signatures and form values on your device.
        The App Store build sends pseudonymous usage analytics to Mixpanel, which stores data in the United States;
        document content, signatures and form values are not included. There is no QuillSign account. Sharing a document
        yourself is a separate, user-controlled action.
      </p>

      <h2>1. What stays on your device</h2>
      <h3>1.1 Documents</h3>
      <p>
        PDFs you import, scan or open in QuillSign, the values you type into their fields, the marks you place, and the
        flattened PDFs you export are stored in QuillSign&apos;s private storage on your device. That storage is shared
        between the QuillSign app, its &quot;Sign with QuillSign&quot; action and its widget, so that a document you sign from
        another app can appear in your QuillSign library. The widget reads a local snapshot of recent document titles,
        status and page counts to display them; that snapshot is not analytics and is not uploaded.
      </p>
      <h3>1.2 Your signature and initials</h3>
      <p>
        Your saved signature and initials are stored as images on your device with iOS complete file protection, which
        makes those saved images unreadable while the device is locked. QuillSign never uploads the saved images to us
        or an analytics provider. A signature you place on a PDF becomes part of that PDF when you choose to export it.
      </p>
      <h3>1.3 Templates and settings</h3>
      <p>Reusable text templates, your date format and your other settings are stored on your device.</p>
      <h3>1.4 Exports, sharing and backups</h3>
      <p>
        QuillSign hands a document to another app or destination only when you initiate sharing, Save to Files, or
        returning it to the app you signed it from. Where it goes after that depends on the destination you choose and
        that service&apos;s privacy policy. QuillSign does not implement cloud sync for documents, signatures or templates.
        Device backups and cloud storage destinations you enable in iOS are handled by Apple or the provider you choose,
        not by QuillSign servers.
      </p>
      <p>
        Your pages are never watermarked by QuillSign. Unless you turn off &quot;Mention QuillSign when I send,&quot; the file
        name mentions QuillSign and a line naming the app and linking to this site is added to supported email or message
        destinations, where you can edit it before sending. &quot;Ask someone to sign&quot; includes its request line even with
        that switch off. Exported PDFs also name QuillSign in their file properties.
      </p>

      <h2>2. Camera, photos and files</h2>
      <p>
        <strong>Camera:</strong>{" "}used only when you scan a paper document, through Apple&apos;s document scanner. The
        scanned pages become a PDF on your device. QuillSign does not upload camera images.
      </p>
      <p>
        <strong>Photos:</strong>{" "}QuillSign uses the system photo picker, so it receives only the photos you choose and
        has no access to the rest of your library.
      </p>
      <p><strong>Files:</strong>{" "}QuillSign opens only the files you pick or share to it.</p>
      <p>
        <strong>Passwords:</strong>{" "}password-protected PDFs are unlocked on your device. QuillSign keeps an unlocked
        local copy, and the exported PDF has no password. Passwords are not analytics properties.
      </p>
      <p>
        <strong>Microphone and speech recognition:</strong>{" "}the App Store build does not use them. Its permission
        descriptions refer to a bug-reporting tool used only in internal development builds for dictated bug reports.
      </p>

      <h2>3. Usage analytics and local interaction records</h2>
      <h3>3.1 What the current build collects</h3>
      <p>
        The App Store build sends pseudonymous usage analytics to Mixpanel, whose project data is stored in the United
        States. Internal development builds print events locally instead of sending them through this integration.
      </p>
      <p>
        The &quot;Sign with QuillSign&quot; action, Shortcuts actions and widget record small interaction notes on your device:
        event names, timestamps, the feature that produced them and the technical properties listed below. The app reads
        those notes the next time it becomes active and sends them to Mixpanel. The action extension and widget do not
        contact Mixpanel directly.
      </p>
      <h3>3.2 What the included analytics hooks measure</h3>
      <p>
        Events measure app opens and first-open status; onboarding; import, scan and export outcomes; editor, signature,
        tool and template interactions; library searches; paywall, purchase, trial and restore outcomes; settings;
        notifications; rating prompts; widgets; Shortcuts and action-extension handoffs. Event properties are limited
        to technical values such as counts, booleans, fixed outcome categories, product identifiers and prices:
      </p>
      <ul>
        <li>
          App opens, first-open classification (new, reinstall or unknown), platform, Keychain read/write status codes,
          onboarding pages viewed and onboarding completion.
        </li>
        <li>
          Import and scan attempts and outcomes, source (such as Files or Photos), file type, scanner availability,
          page counts, password-unlock success, sample-document use and document-deletion events.
        </li>
        <li>
          Editor opens; counts of pages, fields and marks; whether a document is signed; signature or initials saved
          or placed, drawn-versus-typed method and placement category; tool use; template save/insert events; and the
          number of library search results, never the search text.
        </li>
        <li>
          Export attempts, success, failure or blocking; free, Pro, repeat-export or credit decisions; credit balances;
          previews; share-sheet opening, completion or cancellation; send-versus-request-signature purpose; the app
          credit switch; and the selected sharing activity, not the recipient or message.
        </li>
        <li>
          Paywall source, display, dismissal and selected plan; unavailable products; purchase, cancellation, trial,
          restore and entitlement outcomes; product identifier, price and currency; credits added and remaining; and
          purchase/restore outcome reasons. Import failures use fixed reasons, and export failures use error domain and
          code, not file paths.
        </li>
        <li>
          Date-format and sharing/copy preference changes; deep-link host and source; widget family; Shortcuts/control
          action type; notification permission and trial-reminder scheduling; and rating-prompt display or suppression,
          trigger, reason and success count. Deep-link host is limited to scan, files, doc, paywall, import, settings
          and library; deep-link source is limited to extension_handoff, shortcuts and action_extension. A missing value
          is recorded as &quot;none&quot; and any other value as &quot;other&quot;. Imported-file type is limited to pdf, jpg, jpeg, png,
          heic, tif, tiff, bmp, gif, webp or &quot;other&quot;.
        </li>
      </ul>
      <p>
        QuillSign stores a stable pseudonymous identifier in its local preferences and sends it to Mixpanel as the
        install&apos;s distinct identifier. It is derived from Apple&apos;s identifier for vendor, or a random UUID if that
        identifier is unavailable. The vendor identifier can be the same for our apps on one device; it is pseudonymous,
        not a promise of anonymity. Every event also carries a session_id, device_language, app_language, surface,
        install_env and is_dev super property. The profile carries $first_seen, $last_seen, app_version and build_number.
        First-open events also include install kind, Keychain status, platform and marker-write status. Mixpanel&apos;s
        standard device, operating-system and SDK metadata may accompany events. Mixpanel receives the connection&apos;s IP
        address and may estimate coarse location such as city and country.
      </p>
      <p>
        The app&apos;s privacy manifest declares device identifiers, product interactions, coarse location and purchase
        history for analytics, marked as not linked to personal identity and not used for tracking. There is no in-app
        analytics opt-out switch in this version.
      </p>
      <h3>3.3 What is never included in app analytics</h3>
      <p>
        Analytics events never include document content or titles, file names, field values, text you type, template
        names or bodies, PDF passwords, search text, or images of your signature or initials. Deep-link analytics send
        only the allowlisted host and source values named above, and imported-file analytics send only an allowlisted
        type. Documents, signatures and form values are never sent to Mixpanel. QuillSign does not track you across
        other companies&apos; apps or websites, uses no advertising identifier, and shows no ads.
      </p>

      <h2>4. Purchases and notifications</h2>
      <p>
        Purchases and subscriptions are handled by Apple. We do not receive your payment details. QuillSign reads your
        purchase status from Apple to unlock QuillSign Pro, and keeps export-pack credits and the monthly export allowance
        on your device. Export packs are consumable and cannot be restored on another device. Apple&apos;s handling of
        purchase and device-service data is covered by <a href="https://www.apple.com/legal/privacy/">Apple&apos;s Privacy Policy</a>.
      </p>
      <p>
        If you start an annual-plan trial, continue through the reminder prompt and allow notifications, QuillSign can
        schedule one local notification two days before the trial ends. Scheduling can fail, so do not rely on the
        reminder to cancel. Notifications are created on your device; we do not send push notifications.
      </p>

      <h2>5. Bug reporting in internal development builds</h2>
      <p>
        Internal development builds include a separate bug-reporting tool that can send reports, screenshots and recent
        network logs to Hey Wrist. A screenshot can include whatever is visible, so testers should not include personal
        documents in reports. This tool is started only in DEBUG builds and is not active in the App Store build.
      </p>

      <h2>6. Children</h2>
      <p>QuillSign is not directed at children under 13 and does not knowingly collect personal information from them.</p>

      <h2>7. Your choices and deletion</h2>
      <p>
        Delete a document from the library (press and hold, then Delete) to remove its local source and signed copy.
        Delete your saved signature or initials in Settings › Signature and initials, and delete templates in Settings
        › Templates. Deleting the app removes its local documents, saved signature images, templates and preferences.
        Copies you exported to another app, a storage service or a backup are separate and must be managed there.
      </p>
      <p>
        One exception to uninstall deletion is the first-open marker: a version value and timestamp stored in Apple&apos;s
        Keychain, which can survive uninstall and sync through iCloud Keychain if you enable it. It lets the app classify
        a later install as a reinstall. It contains no documents, signatures, form values, name, email or Apple Account
        identifier, and we cannot access your Keychain. This is not document cloud sync.
      </p>
      <p>
        To request deletion of Mixpanel analytics associated with your install, email founder@heywrist.com and ask us
        to delete that install&apos;s analytics. Include the app version and approximate dates you used it so we can locate
        the records; do not email documents, signatures or form values. For questions or privacy requests about
        information you sent directly to us, contact the same address.
      </p>

      <h2>8. Support and this website</h2>
      <p>
        If you email support, we receive your email address and the information you choose to include so we can respond.
        Please describe the issue without sending private documents, signatures or form values.
      </p>
      <p>
        Visiting heywrist.com is separate from using the app. This site records page paths, visit counts and timestamps,
        IP addresses, country/region/city estimates, browser information and referring pages, and uses Vercel Analytics
        and Speed Insights for website usage and performance. Opening a policy or support link does not send your
        QuillSign documents, file names, signatures or form values to the website.
      </p>

      <h2>9. Changes</h2>
      <p>If this policy changes, we will post the updated policy on this page and update the date above.</p>

      <h2>10. Contact</h2>
      <p>Questions about privacy: <a href="mailto:founder@heywrist.com">founder@heywrist.com</a></p>
      <p><strong>Developer:</strong>{" "}Hey Wrist</p>
    </PolicyLayout>
  );
}
