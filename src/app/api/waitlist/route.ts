import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_EMAIL_LENGTH = 254;
const MAX_SOURCE_LENGTH = 64;

let indexEnsured = false;
async function ensureIndex() {
  if (indexEnsured) return;
  const db = await getDb();
  await db
    .collection("waitlist")
    .createIndex({ email: 1 }, { unique: true, name: "email_unique" });
  indexEnsured = true;
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const data = body as { email?: unknown; source?: unknown };
  const rawEmail = typeof data.email === "string" ? data.email.trim().toLowerCase() : "";
  const source =
    typeof data.source === "string" ? data.source.slice(0, MAX_SOURCE_LENGTH) : "home";

  if (!rawEmail || rawEmail.length > MAX_EMAIL_LENGTH || !EMAIL_RE.test(rawEmail)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  try {
    await ensureIndex();
    const db = await getDb();
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      null;
    const userAgent = req.headers.get("user-agent") || null;
    const referer = req.headers.get("referer") || null;

    await db.collection("waitlist").updateOne(
      { email: rawEmail },
      {
        $setOnInsert: {
          email: rawEmail,
          source,
          ip,
          userAgent,
          referer,
          createdAt: new Date(),
        },
      },
      { upsert: true },
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("waitlist error", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
