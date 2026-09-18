import Link from "next/link";

const APP_STORE_URL = "/halfawake";

function Card({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">{eyebrow}</p>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{children}</p>
    </div>
  );
}

export default function HalfAwakePage() {
  return (
    <main className="mx-auto max-w-5xl px-6">
      <section className="py-20">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A9A6FF]">
          Apple Watch &middot; iPhone
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          A dream is gone in ninety seconds.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
          Half Awake is a voice journal for the minute after you wake. Raise your wrist and speak,
          eyes still shut, phone still face-down on the other side of the room. By the time you get
          up, the dream is written down.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={APP_STORE_URL}
            className="rounded-lg bg-[#A9A6FF] px-5 py-2.5 text-sm font-semibold text-[#07061A] transition-colors hover:bg-[#BFBDFF]"
          >
            On the App Store
          </a>
          <Link
            href="/halfawake/support"
            className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-300 transition-colors hover:border-white/30 hover:text-white"
          >
            Support
          </Link>
        </div>
      </section>

      <section className="grid gap-4 pb-20 sm:grid-cols-2 lg:grid-cols-3">
        <Card eyebrow="Capture" title="Eyes closed, one tap">
          A complication on the watch face starts recording without a screen to find or a keyboard
          to aim at. It works with the phone in another room and with no signal at all.
        </Card>
        <Card eyebrow="Transcribe" title="Written on the device itself">
          Speech becomes text using Apple&rsquo;s on-device transcription, and if a language cannot
          be done on the device, Half Awake says so and offers typing rather than sending the audio
          somewhere. Nothing you say is uploaded to be understood.
        </Card>
        <Card eyebrow="Recall" title="What keeps coming back">
          The journal links recurring people, places and images across entries, so patterns in what
          you dream become visible over weeks. It records and connects. It does not tell you what
          any of it means.
        </Card>
        <Card eyebrow="Private" title="No account, no server of ours">
          There is no sign-up and no profile. Entries live on your device, and sync between your own
          devices through your iCloud account if you choose to turn it on.
        </Card>
        <Card eyebrow="Everywhere" title="Wrist, Lock Screen, widget">
          A watch face complication, Lock Screen and Home Screen widgets, and a morning reminder you
          can set for the time you actually wake up.
        </Card>
        <Card eyebrow="Yours to take" title="Export whenever">
          Every entry exports as plain text or CSV. Deleting the app takes the journal with it, and
          &ldquo;Delete all my data&rdquo; inside the app clears it without uninstalling.
        </Card>
      </section>
    </main>
  );
}
