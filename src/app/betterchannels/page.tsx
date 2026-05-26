import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BetterChannels - Mobile Mission Control for Claude Code",
  description:
    "Native iOS and Apple Watch companion for Claude Code sessions. Monitor progress, send instructions, and get real-time updates via MCP — right from your pocket.",
};

const features = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>
    ),
    title: "Real-Time Session Dashboard",
    desc: "Mission Control view shows all your active Claude Code sessions at a glance. See which are active, waiting for input, or completed — with live status updates via WebSocket.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
      </svg>
    ),
    title: "Send Instructions on the Go",
    desc: "Type or dictate messages to any Claude Code session from your phone. Approve actions, redirect work, or ask for status updates — without touching your laptop.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
      </svg>
    ),
    title: "Voice Input & Speech",
    desc: "Dictate instructions hands-free with on-device speech recognition. BetterChannels can also read progress updates aloud with text-to-speech — perfect for multitasking.",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: "Live Activities & Dynamic Island",
    desc: "Track session progress on your Lock Screen and Dynamic Island. See what Claude is working on, completion percentage, and status — even when the app is backgrounded.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Progress Timeline",
    desc: "Every session has a detailed timeline of what Claude has done: files edited, commands run, errors encountered, and your sent messages — all in chronological order.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Apple Watch Companion",
    desc: "View sessions, check status, and send quick replies or dictate instructions directly from your wrist. Never miss a waiting prompt while away from your desk.",
    color: "from-violet-500 to-violet-600",
  },
];

const steps = [
  { num: "1", title: "Install the MCP Server", desc: "Run the BetterChannels MCP backend on your laptop. It bridges Claude Code sessions to your phone via WebSocket." },
  { num: "2", title: "Connect Your Phone", desc: "Open BetterChannels on iPhone or Apple Watch. It auto-discovers the MCP server on your local network." },
  { num: "3", title: "Monitor & Direct", desc: "See real-time progress, send instructions, dictate voice messages, and get Live Activity updates — all from your pocket." },
];

export default function BetterChannelsHome() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-700/20 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-orange-600/30 via-red-600/20 to-transparent rounded-full blur-3xl -translate-y-1/2" />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 text-center sm:pt-32 sm:pb-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm text-orange-300">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
            For iPhone and Apple Watch
          </div>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Claude Code in{" "}
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-amber-400 bg-clip-text text-transparent">
              your pocket
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl">
            A native mobile mission control for Claude Code. Monitor sessions in real time,
            send instructions by voice or text, and track progress on your Lock Screen —
            powered by the Model Context Protocol.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="https://x.com/awesome_fingers" className="inline-block">
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-5 py-3 text-base font-medium text-orange-300 ring-1 ring-orange-500/30">🍳 Cooking · Follow @awesome_fingers for launch</span>
            </a>
            <span className="text-sm text-slate-500">Free &middot; Requires Claude Code on your Mac</span>
          </div>

          {/* Hero mockup */}
          <div className="relative mx-auto mt-16 max-w-3xl">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
            <div className="flex items-end justify-center gap-6">
              <div className="w-56 sm:w-64 rounded-3xl border border-white/10 bg-slate-900/80 p-3 shadow-2xl shadow-orange-600/10">
                <div className="aspect-[9/19] rounded-2xl bg-gradient-to-br from-[#1a0f0a] to-[#1a1210] flex flex-col p-4">
                  <p className="text-xs font-semibold text-orange-300 mb-3">Mission Control</p>
                  <div className="flex gap-1.5 mb-3">
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 font-medium">2 Active</span>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 font-medium">1 Waiting</span>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-slate-500/20 text-slate-400 font-medium">3 Done</span>
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="rounded-lg bg-green-600/15 border border-green-500/20 px-3 py-2">
                      <div className="flex items-center gap-1.5 mb-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                        <p className="text-[10px] font-medium text-green-300">heywrist-app</p>
                      </div>
                      <p className="text-[9px] text-green-400/60">Editing SessionView.swift...</p>
                      <div className="mt-1 h-1 rounded-full bg-green-500/20">
                        <div className="h-1 w-3/4 rounded-full bg-green-500" />
                      </div>
                    </div>
                    <div className="rounded-lg bg-orange-600/15 border border-orange-500/20 px-3 py-2">
                      <div className="flex items-center gap-1.5 mb-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                        <p className="text-[10px] font-medium text-orange-300">api-refactor</p>
                      </div>
                      <p className="text-[9px] text-orange-400/60">Waiting for approval...</p>
                    </div>
                    <div className="rounded-lg bg-green-600/15 border border-green-500/20 px-3 py-2">
                      <div className="flex items-center gap-1.5 mb-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                        <p className="text-[10px] font-medium text-green-300">landing-page</p>
                      </div>
                      <p className="text-[9px] text-green-400/60">Running npm build...</p>
                      <div className="mt-1 h-1 rounded-full bg-green-500/20">
                        <div className="h-1 w-1/2 rounded-full bg-green-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden w-28 sm:block mb-8">
                <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-2 shadow-2xl shadow-orange-600/10">
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-[#1a0f0a] to-[#1a1210] flex flex-col items-center justify-center p-2">
                    <div className="h-2 w-2 rounded-full bg-orange-400 mb-1" />
                    <p className="text-[9px] font-bold text-orange-300">Waiting</p>
                    <p className="text-[8px] text-orange-400/60 mt-0.5">api-refactor</p>
                    <p className="text-[7px] text-slate-500 mt-1">Tap to reply</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Everything Claude Code needs,{" "}
              <span className="text-orange-400">on the go</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Built on the Model Context Protocol. Native on Apple platforms. Instant updates.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="group rounded-2xl border border-white/5 bg-slate-900/50 p-6 hover:border-orange-500/30 hover:bg-slate-900/80 transition-all">
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${f.color} text-white`}>
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 sm:py-28 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl">How it works</h2>
            <p className="mt-4 text-lg text-slate-400">Three steps to mobile Claude Code management.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 text-2xl font-bold">{s.num}</div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 sm:py-28 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl">Built on open standards</h2>
            <p className="mt-4 text-lg text-slate-400">
              BetterChannels uses the Model Context Protocol (MCP) — the same open standard
              that powers Claude Code Channels, OpenClaw, and the broader agentic AI ecosystem.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Model Context Protocol", desc: "Open standard for AI tool communication, donated to the Linux Foundation by Anthropic" },
              { label: "WebSocket Real-Time", desc: "Instant bidirectional updates between your laptop and phone — no polling, no delays" },
              { label: "Local Network Only", desc: "Your MCP server runs on your machine. No cloud relay. Your code never leaves your network." },
              { label: "Claude Code Compatible", desc: "Works with Claude Code 2.1.80+ and any MCP-compatible coding agent" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-white/10 bg-slate-900/50 p-5">
                <h3 className="font-semibold mb-1">{item.label}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 border-t border-white/5">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Stop checking your terminal</h2>
          <p className="mt-4 text-lg text-slate-400">
            Let Claude Code work while you walk, eat, or think. BetterChannels keeps you in the loop
            from anywhere in your home or office.
          </p>
          <div className="mt-10">
            <a href="https://x.com/awesome_fingers" className="inline-block">
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-5 py-3 text-base font-medium text-orange-300 ring-1 ring-orange-500/30">🍳 Cooking · Follow @awesome_fingers for launch</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
