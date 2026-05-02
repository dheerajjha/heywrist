import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with the BetterChannels app",
};

const faqs = [
  {
    q: "What is BetterChannels?",
    a: "BetterChannels is a native iOS and Apple Watch companion app for Claude Code. It lets you monitor your coding sessions in real time, send instructions, and receive progress updates \u2014 all from your phone or wrist, without touching your laptop.",
  },
  {
    q: "How does it connect to Claude Code?",
    a: "BetterChannels connects to a Model Context Protocol (MCP) server that runs locally on your machine alongside Claude Code. The MCP server bridges session data to your phone via HTTP and WebSocket over your local network. No cloud services are involved.",
  },
  {
    q: "How do I set up the MCP server?",
    a: "Install the BetterChannels MCP backend on your laptop (requires Node.js). Run it with \u2018npm start\u2019 or \u2018bun run start\u2019 \u2014 it starts on port 3333 by default. Then add the MCP server to your Claude Code configuration. The iPhone app will auto-discover it on your local network.",
  },
  {
    q: "What are Claude Code Channels?",
    a: "Claude Code Channels is an official Anthropic feature (launched March 2026) that lets you connect Claude Code to messaging platforms like Telegram and Discord via MCP plugins. BetterChannels provides a similar experience but as a native iOS app with Live Activities, voice input, and Apple Watch support.",
  },
  {
    q: "Can I send messages to Claude Code from my phone?",
    a: "Yes. You can type messages or use voice dictation (speech-to-text) to send instructions to any active Claude Code session. Messages are relayed through the local MCP server to Claude Code on your laptop.",
  },
  {
    q: "How do Live Activities work?",
    a: "When a Claude Code session is active, BetterChannels shows a Live Activity on your Lock Screen and Dynamic Island with the project name, current status, progress percentage, and latest message. This updates in real time via WebSocket.",
  },
  {
    q: "Does the Apple Watch app work independently?",
    a: "The Watch app shows your session list, status badges, and lets you send quick replies or dictate messages. It syncs with the iPhone app via WatchConnectivity. The iPhone must be reachable for the Watch to communicate with the MCP server.",
  },
  {
    q: "What does the text-to-speech feature do?",
    a: "BetterChannels can read progress updates aloud using on-device speech synthesis. This is useful when you\u2019re away from your screen \u2014 you\u2019ll hear what Claude is doing. You can mute globally or per-session from the toolbar.",
  },
  {
    q: "Is my code sent to any external servers?",
    a: "No. BetterChannels only communicates with the MCP server on your local network. Your source code, file contents, and repository data stay between Claude Code and your machine. We have no servers and receive no data.",
  },
  {
    q: "Does it work with OpenClaw or other MCP tools?",
    a: "BetterChannels is built on the open Model Context Protocol standard. While it\u2019s designed for Claude Code, it should work with any MCP-compatible coding agent that implements the same session and progress APIs.",
  },
];

export default function BetterChannelsSupport() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <nav className="mb-8 text-sm text-slate-500 flex gap-2">
        <Link href="/betterchannels" className="hover:text-white transition-colors">BetterChannels</Link>
        <span>/</span>
        <span className="text-white">Support</span>
      </nav>

      <h1 className="text-3xl font-bold mb-2">Support</h1>
      <p className="text-slate-400 mb-12">Find answers to common questions or reach out to us directly.</p>

      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/10 bg-slate-900/50 open:bg-slate-900/80 transition-colors">
              <summary className="flex cursor-pointer items-center justify-between p-5 text-sm font-medium list-none [&::-webkit-details-marker]:hidden">
                <span>{faq.q}</span>
                <svg className="h-4 w-4 shrink-0 text-slate-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <p className="px-5 pb-5 text-sm text-slate-400 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-slate-900/50 p-8 text-center">
        <h2 className="text-xl font-semibold mb-2">Still need help?</h2>
        <p className="text-sm text-slate-400 mb-6">We typically respond within 24 hours.</p>
        <a href="mailto:founder@heywrist.com" className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-orange-500 transition-colors">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          founder@heywrist.com
        </a>
      </section>

      <footer className="mt-16 pt-8 border-t border-white/10 text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Hey Wrist. All rights reserved.</p>
        <p className="mt-1">Contact: <a href="mailto:founder@heywrist.com" className="text-orange-400 hover:text-orange-300">founder@heywrist.com</a></p>
        <p className="mt-2 text-xs text-slate-600">Claude, Claude Code, and Model Context Protocol are trademarks or products of Anthropic, PBC.</p>
      </footer>
    </main>
  );
}
