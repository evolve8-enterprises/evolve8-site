import { NextResponse } from "next/server";

// POST /api/subscribe
// Generic: handles newsletter, contact form, waitlist.
// In production: Mailchimp (opt-in only), Resend, or your own queue.
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, name, kind = "newsletter" } = body;
    if (!email && kind !== "contact") {
      return NextResponse.json({ ok: false, error: "Email required" }, { status: 400 });
    }
    // TODO: route by `kind` — newsletter → Mailchimp; contact → press/donate/founder/hello;
    // waitlist → tagged list.
    return NextResponse.json({ ok: true, kind, queued: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}
