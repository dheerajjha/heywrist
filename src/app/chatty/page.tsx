import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sona — AI Companion for Apple Watch",
  description:
    "AI chatbot for Apple Watch and iPhone with streaming responses, eight personas plus custom ones, voice-first input, and beautiful OLED-optimized design.",
};

const features = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
      </svg>
    ),
    title: "Streaming AI Replies",
    desc: "Character-by-character response animation with natural punctuation pauses and a blinking cursor — feels like a real conversation.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
      </svg>
    ),
    title: "Voice-First Input",
    desc: "Tap to dictate via watchOS voice input, or use voice-only mode for hands-free conversations. Speak naturally and Sona responds instantly — no tiny keyboard needed.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    title: "8 Personas + Custom",
    desc: "Sona (general), Muse (creative writing), DevBot (coding), FitCoach (fitness), ChefAI (cooking), Lingua (translation), Tutor (study help), and Calm (mindfulness). Build your own custom personas too — each with unique personality and suggested prompts.",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "Multiple Conversations",
    desc: "Manage multiple conversation threads. Auto-titling, persona icons, previews, timestamps, and swipe-to-delete.",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    title: "Live Web Search",
    desc: "Up-to-the-minute facts grounded in the web — free for everyone. Ask about the news, sports scores, or anything that changed yesterday.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
    title: "OLED-Optimized Design",
    desc: "Dark-first design for Apple Watch OLED displays. Choose from seven themes — Light, Dark, and Paper free for everyone; Glass, Neo-Pop, Sunset, and Ocean unlock with Sona Pro.",
    color: "from-cyan-500 to-cyan-600",
  },
];

const personas = [
  { name: "Sona", desc: "General assistant", color: "from-blue-500 to-purple-600", tier: "Free" },
  { name: "Tutor", desc: "Study help", color: "from-sky-500 to-blue-600", tier: "Free" },
  { name: "Muse", desc: "Creative writing", color: "from-pink-500 to-fuchsia-600", tier: "Pro" },
  { name: "DevBot", desc: "Coding help", color: "from-emerald-500 to-teal-600", tier: "Pro" },
  { name: "FitCoach", desc: "Health & fitness", color: "from-orange-500 to-red-600", tier: "Pro" },
  { name: "ChefAI", desc: "Cooking & recipes", color: "from-amber-500 to-red-600", tier: "Pro" },
  { name: "Lingua", desc: "Translation", color: "from-cyan-500 to-blue-600", tier: "Pro" },
  { name: "Calm", desc: "Mindfulness", color: "from-violet-500 to-indigo-600", tier: "Pro" },
];

export default function SonaHome() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-purple-500/30 via-violet-500/20 to-transparent rounded-full blur-3xl -translate-y-1/2" />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 text-center sm:pt-32 sm:pb-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-300">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            For Apple Watch and iPhone
          </div>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            AI on your{" "}
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              wrist
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl">
            A beautifully designed AI chatbot for Apple Watch with streaming responses,
            eight personas plus custom ones, voice-first input, and conversations that feel alive.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="https://x.com/awesome_fingers" className="inline-block">
              <span className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-5 py-3 text-base font-medium text-purple-300 ring-1 ring-purple-500/30">🍳 Cooking · Follow @awesome_fingers for launch</span>
            </a>
            <span className="text-sm text-slate-500">Free to use &middot; Sona Pro available</span>
          </div>

          {/* Hero mockup — Watch only */}
          <div className="relative mx-auto mt-16 max-w-xs">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
            <div className="mx-auto w-40 rounded-[2rem] border border-white/10 bg-slate-900/80 p-3 shadow-2xl shadow-purple-500/20">
              <div className="aspect-[5/6] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col p-3 gap-2">
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="h-4 w-4 rounded-full bg-gradient-to-br from-purple-500 to-violet-600" />
                  <span className="text-[9px] font-semibold text-white">Sona</span>
                </div>
                <div className="self-end max-w-[80%] rounded-xl rounded-br-sm bg-purple-600/60 px-2.5 py-1.5">
                  <p className="text-[8px] text-white">Tell me a fun fact!</p>
                </div>
                <div className="self-start max-w-[85%] rounded-xl rounded-bl-sm bg-slate-700/60 px-2.5 py-1.5">
                  <p className="text-[8px] text-slate-200">Octopuses have three hearts and blue blood!</p>
                </div>
                <div className="mt-auto flex gap-1">
                  {["Joke", "Motivate", "Trivia"].map((p) => (
                    <div key={p} className="rounded-full bg-purple-500/20 border border-purple-500/30 px-2 py-0.5">
                      <span className="text-[7px] text-purple-300">{p}</span>
                    </div>
                  ))}
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
              A full AI experience on{" "}
              <span className="text-purple-400">Apple Watch</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Eight personas, streaming replies, and voice input — designed for the small screen.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="group rounded-2xl border border-white/5 bg-slate-900/50 p-6 hover:border-purple-500/30 hover:bg-slate-900/80 transition-all">
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

      {/* Personas */}
      <section className="py-20 sm:py-28 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl">Meet the personas</h2>
            <p className="mt-4 text-lg text-slate-400">
              Eight built-in personas plus the ability to create your own — each with its own personality, expertise, and conversation style.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {personas.map((p) => (
              <div key={p.name} className="rounded-2xl border border-white/5 bg-slate-900/50 p-5 text-center hover:border-white/20 transition-colors">
                <div className={`mx-auto mb-3 h-12 w-12 rounded-full bg-gradient-to-br ${p.color}`} />
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-xs text-slate-400 mt-1">{p.desc}</p>
                <span
                  className={
                    p.tier === "Free"
                      ? "mt-3 inline-block rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300"
                      : "mt-3 inline-block rounded-full bg-purple-500/10 px-2 py-0.5 text-[10px] font-medium text-purple-300"
                  }
                >
                  {p.tier === "Free" ? "Free" : "Sona Pro"}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-slate-500">
            Plus build unlimited custom personas to shape Sona to whatever you need.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 sm:py-28 border-t border-white/5">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl">Free to start, Pro when you need it</h2>
            <p className="mt-4 text-lg text-slate-400">
              Sona is free with no account required. Upgrade to Sona Pro for unlimited messages, more personas, premium themes, and image vision.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-8">
              <h3 className="text-xl font-semibold">Free</h3>
              <p className="mt-2 text-sm text-slate-400">Everything you need to try Sona on your wrist.</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li>20 AI messages per 24-hour rolling period</li>
                <li>Sona and Tutor personas</li>
                <li>Live web search</li>
                <li>Voice-only conversations</li>
                <li>Light, Dark, and Paper themes</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-purple-500/40 bg-gradient-to-br from-purple-500/10 to-violet-500/5 p-8">
              <h3 className="text-xl font-semibold">
                Sona Pro
                <span className="ml-2 rounded-full bg-purple-500/20 px-2 py-0.5 text-[10px] font-medium text-purple-300 align-middle">
                  Recommended
                </span>
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Available as monthly or yearly subscription, or a one-time lifetime purchase. Pricing shown on the App Store before you buy.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li>Unlimited messages</li>
                <li>Six additional personas: Muse, DevBot, FitCoach, ChefAI, Lingua, Calm</li>
                <li>Image vision — attach photos to your messages</li>
                <li>Four premium themes: Glass, Neo-Pop, Sunset, Ocean</li>
                <li>3-day free trial for new monthly and yearly subscribers</li>
              </ul>
            </div>
          </div>
          <p className="mt-10 text-center text-xs text-slate-500">
            Subscriptions auto-renew until cancelled at least 24 hours before the end of the current period.
            See <a href="/chatty/terms" className="text-purple-400 hover:text-purple-300 underline">Terms</a>
            {" "}and <a href="/chatty/privacy" className="text-purple-400 hover:text-purple-300 underline">Privacy</a>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 border-t border-white/5">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Your AI companion, always on your wrist</h2>
          <p className="mt-4 text-lg text-slate-400">
            Ask anything, anytime — right from your Apple Watch.
          </p>
          <div className="mt-10">
            <a href="https://x.com/awesome_fingers" className="inline-block">
              <span className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-5 py-3 text-base font-medium text-purple-300 ring-1 ring-purple-500/30">🍳 Cooking · Follow @awesome_fingers for launch</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
