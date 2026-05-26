import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";
import { getDb } from "@/lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_PATH = 256;
const HASH_SECRET = process.env.IP_HASH_SECRET || "heywrist-default-salt";

let indexEnsured = false;
async function ensureIndex() {
  if (indexEnsured) return;
  const db = await getDb();
  await db.collection("pageviews").createIndexes([
    { key: { path: 1, ipHash: 1 }, unique: true, name: "path_ipHash_unique" },
    { key: { path: 1 }, name: "path_idx" },
    { key: { firstSeenAt: -1 }, name: "firstSeen_desc" },
  ]);
  indexEnsured = true;
}

function ipFromHeaders(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function hashIp(ip: string): string {
  return createHash("sha256")
    .update(`${HASH_SECRET}:${ip}`)
    .digest("hex")
    .slice(0, 32);
}

function normalizePath(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  let p = raw.trim();
  if (!p || !p.startsWith("/")) return null;
  if (p.length > MAX_PATH) p = p.slice(0, MAX_PATH);
  const cut = p.search(/[?#]/);
  if (cut >= 0) p = p.slice(0, cut);
  return p;
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const path = normalizePath((body as { path?: unknown }).path);
  if (!path) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  try {
    await ensureIndex();
    const db = await getDb();
    const ip = ipFromHeaders(req);
    const ipHash = hashIp(ip);
    const host = req.headers.get("host") || null;
    const userAgent = req.headers.get("user-agent")?.slice(0, 256) || null;
    const referer = req.headers.get("referer")?.slice(0, 512) || null;
    const country =
      req.headers.get("x-vercel-ip-country") ||
      req.headers.get("cf-ipcountry") ||
      null;
    const now = new Date();

    await db.collection("pageviews").updateOne(
      { path, ipHash },
      {
        $setOnInsert: {
          path,
          ipHash,
          firstSeenAt: now,
          host,
          country,
        },
        $set: {
          lastSeenAt: now,
          userAgent,
          referer,
        },
        $inc: { hits: 1 },
      },
      { upsert: true },
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("pageview error", err);
    // Never fail the page — swallow to avoid client retries.
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}
