import { NextResponse } from "next/server";

// POST /api/public-action/intake
// Body: structured Public Action Network report.
// In production: validate, persist (Postgres/Supabase), notify reviewers, queue confirmation email.
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { category, name, email, narrative } = body;
    if (!category || !name || !email || !narrative) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }
    const tracking_id = "PAN-" + Date.now().toString(36).toUpperCase();
    // TODO: persist + notify reviewers
    return NextResponse.json({ ok: true, tracking_id });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}
