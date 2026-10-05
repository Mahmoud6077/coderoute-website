import { NextResponse, type NextRequest } from "next/server";
import { needOptions, type Need } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 8_000;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

// In-memory limiter: good enough to stop casual abuse on one server instance.
// For stronger protection, add the host's firewall / rate limiting in front (see README).
const hits = new Map<string, number[]>();

function rateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5_000) {
    for (const [k, v] of hits) if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
  }
  return false;
}

function json(body: Record<string, unknown>, status: number) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

// Remove control characters; when singleLine, also remove line breaks (prevents header injection).
function clean(value: unknown, max: number, singleLine: boolean): string {
  if (typeof value !== "string") return "";
  const stripped = singleLine
    ? value.replace(/[\u0000-\u001F\u007F]/g, " ")
    : value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, " ");
  return stripped.trim().slice(0, max);
}

const EMAIL = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]{2,}$/;
const PHONE = /^\+?[0-9٠-٩][0-9٠-٩\s().-]{6,19}$/;

function sameOrigin(request: NextRequest): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try {
    const originHost = new URL(origin).host;
    const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
    return !!host && originHost === host;
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  if (!sameOrigin(request)) return json({ error: "forbidden" }, 403);

  const type = request.headers.get("content-type") ?? "";
  if (!type.toLowerCase().startsWith("application/json")) return json({ error: "invalid" }, 415);

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) return json({ error: "invalid" }, 413);

  let data: Record<string, unknown>;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("not an object");
    data = parsed as Record<string, unknown>;
  } catch {
    return json({ error: "invalid" }, 400);
  }

  // Honeypot: real visitors never see or fill this field. Pretend success so bots learn nothing.
  if (typeof data.company_website === "string" && data.company_website.length > 0) return json({ ok: true }, 200);

  const ip = (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) return json({ error: "rate" }, 429);

  const name = clean(data.name, 100, true);
  const contact = clean(data.contact, 150, true);
  const message = clean(data.message, 2000, false);
  const need = clean(data.need, 20, true) as Need;
  const lang = data.lang === "ar" ? "ar" : "en";

  const contactOk = EMAIL.test(contact) || PHONE.test(contact);
  if (name.length < 2 || !contactOk || !needOptions.includes(need)) return json({ error: "invalid" }, 400);

  const apiKey = process.env.ZEPTOMAIL_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) return json({ error: "unavailable" }, 503);
  // Zoho shows the key with its "Zoho-enczapikey" prefix; accept it with or without.
  const authorization = apiKey.startsWith("Zoho-enczapikey") ? apiKey : `Zoho-enczapikey ${apiKey}`;

  const text = [
    `New enquiry from the CodeRoute website (${lang})`,
    "",
    `Name: ${name}`,
    `Contact: ${contact}`,
    `Needs help with: ${need}`,
    "",
    "Message:",
    message || "(none)",
  ].join("\n");

  try {
    const res = await fetch("https://cpaas.zoho.com/v1.1/email", {
      method: "POST",
      headers: { Authorization: authorization, Accept: "application/json", "Content-Type": "application/json" },
      // Plain text only: nothing the visitor typed is ever rendered as HTML.
      body: JSON.stringify({
        from: { address: from, name: "CodeRoute Website" },
        to: [{ email_address: { address: to, name: "CodeRoute" } }],
        subject: `Website enquiry: ${name}`,
        textbody: text,
        ...(EMAIL.test(contact) ? { reply_to: [{ address: contact, name }] } : {}),
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      console.error("contact: mail provider returned", res.status);
      return json({ error: "generic" }, 502);
    }
  } catch (err) {
    console.error("contact: mail provider request failed", err instanceof Error ? err.name : "unknown");
    return json({ error: "generic" }, 502);
  }

  return json({ ok: true }, 200);
}
