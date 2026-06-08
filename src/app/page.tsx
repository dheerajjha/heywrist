import Link from "next/link";
import WaitlistForm from "./components/WaitlistForm";

const X_HANDLE = "awesome_fingers";
const X_URL = `https://x.com/${X_HANDLE}`;

type App = {
  name: string;
  slug: string;
  desc: string;
  appStoreUrl?: string;
  preview?: boolean;
  cooking?: string;
};

const apps: App[] = [
  { name: "Recordy", slug: "recordy", desc: "Premium voice recorder for iPhone and Apple Watch", appStoreUrl: "https://apps.apple.com/us/app/record-audio-voice-smart/id6760845363" },
  { name: "Dexter Notes", slug: "notes", desc: "AI-powered notes and tasks for iPhone and Apple Watch", appStoreUrl: "https://apps.apple.com/us/app/dexter-notes/id6761487065" },
  { name: "Streaky", slug: "streaky", desc: "Habit tracking with gamification for iPhone and Apple Watch", appStoreUrl: "https://apps.apple.com/us/app/streaky-streak-tracker/id6760764570" },
  { name: "Tickd", slug: "tickd", desc: "A calm daily planner & to-do with AI scheduling for iPhone and Apple Watch", preview: true },
  { name: "Screenaway", slug: "screenaway", desc: "Screen time control for iPhone and Apple Watch", cooking: "wrestling Apple's ScreenTime API" },
  { name: "AutoSleepy", slug: "autosleepy", desc: "Privacy-first sleep tracking for iPhone and Apple Watch", cooking: "still in deep sleep" },
  { name: "Watery", slug: "watery", desc: "Smart hydration tracking for iPhone and Apple Watch", cooking: "still hydrating" },
  { name: "Sona", slug: "chatty", desc: "AI companion with 8 personas for Apple Watch and iPhone", cooking: "teaching her to talk" },
  { name: "Structured", slug: "structured", desc: "Visual daily planner for iPhone and Apple Watch", cooking: "unstructured rn" },
  { name: "ChronoFit", slug: "chronofit", desc: "Narrative fitness timer for iPhone and Apple Watch", cooking: "doing reps" },
  { name: "Lumina", slug: "lumina", desc: "Focus timer that lights the cosmos for iPhone and Apple Watch", cooking: "lighting the fuse" },
  { name: "BetterChannels", slug: "betterchannels", desc: "Mobile mission control for Claude Code sessions", cooking: "tuning in" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Subtle gradient backdrop */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),transparent_60%)]" />

      <main className="relative mx-auto max-w-5xl px-6 py-16 sm:py-24">
        {/* Hero */}
        <div className="flex flex-col items-center text-center mb-20">
          <img
            src="/icons/heywrist.png"
            alt="HeyWrist"
            width={80}
            height={80}
            className="rounded-2xl shadow-lg shadow-indigo-500/20 mb-6"
          />
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Hey<span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Wrist</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
            A team of developers building Apple Watch-first apps. Testing every AI tool so you don&apos;t waste tokens. Shipping products that actually work.
          </p>

          <WaitlistForm source="home" />

          <a
            href={X_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
            aria-label={`Follow @${X_HANDLE} on X`}
          >
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span>Follow @{X_HANDLE} on X</span>
          </a>
        </div>

        {/* App grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <Link
              key={app.slug}
              href={app.appStoreUrl ?? `/${app.slug}`}
              target={app.appStoreUrl ? "_blank" : undefined}
              rel={app.appStoreUrl ? "noopener noreferrer" : undefined}
              className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 backdrop-blur-sm hover:border-white/15 hover:bg-white/[0.06] transition-all duration-200"
            >
              {app.appStoreUrl ? (
                <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400 ring-1 ring-emerald-500/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Shipped
                </span>
              ) : app.preview ? (
                <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-indigo-500/10 px-2 py-0.5 text-[10px] font-medium text-indigo-300 ring-1 ring-indigo-500/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  New
                </span>
              ) : (
                <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium text-amber-400 ring-1 ring-amber-500/20">
                  🍳 Cooking
                </span>
              )}
              <div className="flex items-center gap-3.5 mb-3">
                <img
                  src={`/icons/${app.slug}.png`}
                  alt={`${app.name} icon`}
                  width={48}
                  height={48}
                  className="rounded-[12px] shadow-md shadow-black/30"
                />
                <h2 className="text-lg font-semibold text-slate-200 group-hover:text-white transition-colors">
                  {app.name}
                </h2>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">{app.desc}</p>
              <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
                {app.appStoreUrl ? (
                  <span className="inline-flex items-center gap-1 text-slate-400 group-hover:text-white transition-colors">
                    Get it on the App Store
                    <svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor" aria-hidden="true">
                      <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h6v2H7v10h10v-4h2v6H5V5z" />
                    </svg>
                  </span>
                ) : app.preview ? (
                  <span className="inline-flex items-center gap-1 text-slate-400 group-hover:text-white transition-colors">
                    Learn more
                    <svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor" aria-hidden="true">
                      <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z" />
                    </svg>
                  </span>
                ) : (
                  <span className="italic text-slate-500 group-hover:text-slate-300 transition-colors">
                    {app.cooking}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-white/[0.06] text-center">
          <div className="flex flex-col items-center gap-3">
            <img
              src="/icons/heywrist.png"
              alt="HeyWrist"
              width={28}
              height={28}
              className="rounded-lg opacity-40"
            />
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Hey Wrist. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <a
                href="mailto:founder@heywrist.com"
                className="text-slate-500 hover:text-slate-300 transition-colors"
              >
                founder@heywrist.com
              </a>
              <span className="text-slate-700">&middot;</span>
              <a
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-300 transition-colors"
                aria-label={`@${X_HANDLE} on X`}
              >
                <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>@{X_HANDLE}</span>
              </a>
            </div>
            <p className="mt-1 text-xs text-slate-600">
              Apple Watch, iPhone, and App Store are trademarks of Apple Inc.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
