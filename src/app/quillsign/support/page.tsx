import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with the QuillSign app",
};

const faqs = [
  {
    q: "How do I sign a PDF from Mail without opening QuillSign?",
    a: "Open the PDF in Mail, Files, Safari or Photos and tap Share, then Sign with QuillSign. If you don't see it, tap View More or scroll down, then Edit Actions to add it. Fill and sign, tap Finish, then share the signed PDF, save it to Files, or tap Done to return it to the host app. Some apps ignore returned files, so use Share PDF or Save to Files there. Signing in place is part of QuillSign Pro; on the free plan the same action hands the document to the QuillSign app, where you can sign it with your free monthly export.",
  },
  {
    q: "What does the free plan include?",
    a: "Unlimited filling and signing, a saved signature and initials, scanning, and one flattened export every calendar month with no watermark. Sharing a document you already exported this month is always free.",
  },
  {
    q: "What counts as an export?",
    a: "Tapping Finish on a document produces a flattened PDF: the fields and signature are drawn into the page rather than remaining editable form fields. Flattening is not a certified digital signature or a guarantee against later editing. Each different document you finish in a month counts once; finishing or sharing the same document again that month does not count again.",
  },
  {
    q: "What is the 5-export pack?",
    a: "A one-time purchase of five exports for when you only need a few. Packs do not unlock Pro tools. They are used on the device where you bought them and cannot be restored on another device, because they are consumable. Pro subscriptions and Lifetime can be restored with the same Apple Account.",
  },
  {
    q: "How does the free trial work, and will I be reminded?",
    a: "An eligible annual plan may offer a free trial; check the App Store offer and duration shown in the paywall. After a trial starts, QuillSign offers a local reminder two days before it ends. You must continue through the reminder prompt and allow notifications. Scheduling or delivery can fail, so do not rely on it to cancel. To avoid the next charge, cancel at least 24 hours before the trial or renewal ends in Settings › Apple Account › Subscriptions. Deleting the app does not cancel your subscription.",
  },
  {
    q: "My PDF has no fields to fill. What can I do?",
    a: "Some PDFs are just pictures of a form. Use Sign, Initials, Date, Text, Check and Cross on any PDF, for free; with Pro you can also place strikes and stamps anywhere on the page.",
  },
  {
    q: "My PDF has a password.",
    a: "QuillSign asks for it when you open the file. It keeps an unlocked copy on your device, and the signed PDF you export has no password. A password-protected file opened through Sign with QuillSign is handed to the app so you can enter the password there.",
  },
  {
    q: "What does the recipient see about QuillSign?",
    a: "Your pages are never watermarked by QuillSign. With Mention QuillSign when I send turned on, the file name mentions QuillSign and a line is added to supported email or message destinations, which you can edit before sending. Turn the switch off to omit those additions on the free plan and on Pro. Ask someone to sign still includes its request line. The PDF file properties name QuillSign regardless of the switch.",
  },
  {
    q: "Where are my documents and signature stored?",
    a: "In QuillSign's private storage on your device, shared with its action extension and widget. QuillSign has no account, no document cloud sync, and does not upload your documents, signature or form values to us or analytics. Delete a document by pressing and holding it in the library, then choosing Delete. Delete saved signatures in Settings › Signature and initials. Deleting the app removes its local documents and signature images, but not copies you exported or backups managed outside the app. A content-free first-open Keychain marker can survive uninstall.",
  },
  {
    q: "Does QuillSign collect analytics?",
    a: "The current 1.0 build sends no app usage analytics to Mixpanel: its analytics integration is not configured. The action extension, Shortcuts and widget keep small interaction notes locally for the app to read. The included analytics hooks measure feature use, counts, purchase/restore outcomes and technical metadata, not document content, file names, form values, search text or signature images. The Privacy Policy explains the instrumentation and the separate analytics used by this website.",
  },
  {
    q: "How do I restore Pro on a new device?",
    a: "Sign in with the same Apple Account, open Settings in QuillSign and tap Restore Purchases. If Pro doesn't come back, check Settings › Apple Account › Subscriptions, then email us. Export packs are consumable and are not restored on a new device.",
  },
  {
    q: "Will a recipient accept a document signed with QuillSign?",
    a: "QuillSign does not verify identities or apply certified digital signatures, and we make no claim about legal effect. Whether an electronic signature is accepted depends on the recipient and where you are.",
  },
];

export default function QuillSignSupport() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <nav aria-label="Breadcrumb" className="mb-8 flex gap-2 text-sm text-[#7D7768]">
        <Link href="/quillsign" className="hover:text-white transition-colors">QuillSign</Link>
        <span>/</span>
        <span className="text-[#EFE7D6]">Support</span>
      </nav>
      <h1 className="mb-2 font-serif text-3xl font-semibold">Support</h1>
      <p className="mb-12 text-[#BDB5A4]">
        Answers to common QuillSign questions. Still stuck? Email{" "}
        <a href="mailto:founder@heywrist.com" className="text-[#86A8E6] hover:text-white">founder@heywrist.com</a>{" "}
        and include your iOS version, QuillSign version and what you were trying to do. Please do not send private
        documents, signatures or form values. We read every message.
      </p>
      <section>
        <h2 className="mb-8 font-serif text-xl font-semibold">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-xl border border-white/10 bg-white/5 open:bg-white/10 transition-colors">
              <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 text-sm font-medium list-none [&::-webkit-details-marker]:hidden">
                <span>{faq.q}</span>
                <svg className="h-4 w-4 shrink-0 text-[#7D7768] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-[#BDB5A4]">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
      <p className="mt-16 text-sm text-[#7D7768]">
        Also see the <Link href="/quillsign/privacy" className="text-[#86A8E6] hover:text-white">Privacy Policy</Link> and{" "}
        <Link href="/quillsign/terms" className="text-[#86A8E6] hover:text-white">Terms &amp; Conditions</Link>.
      </p>
    </main>
  );
}
