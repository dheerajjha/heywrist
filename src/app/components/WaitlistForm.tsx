"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function WaitlistForm({ source = "home" }: { source?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage(null);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (!res.ok || !json.ok) {
        setStatus("error");
        setMessage(json.error || "Something went wrong.");
        return;
      }
      setStatus("success");
      setMessage("You're on the list. I'll only email when something ships.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Try again.");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
    >
      <label htmlFor="waitlist-email" className="sr-only">
        Email address
      </label>
      <input
        id="waitlist-email"
        type="email"
        required
        autoComplete="email"
        placeholder="you@domain.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "loading" || status === "success"}
        className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-indigo-400/60 focus:bg-white/[0.06] disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading"
          ? "Joining…"
          : status === "success"
            ? "You're in"
            : "Join the waitlist"}
      </button>
      {message ? (
        <p
          role="status"
          className={`mt-1 w-full text-center text-xs sm:text-left ${
            status === "error" ? "text-rose-300" : "text-emerald-300"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
