import { NextResponse } from "next/server";
import { score, firstEightMoves, SubScores } from "@/lib/simulator";

// POST /api/simulator/score
// Body: { answers: Record<string, string|string[]>, timeline?: string, email?: string, zip?: string }
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { answers = {}, timeline = "5y", email, zip } = body;
    const result = score(answers, timeline);
    const moves = firstEightMoves(result.top3.map((t) => t.key as keyof SubScores));

    // In production: persist to a database, queue email via Resend / SES, fire share-card render.
    // For now, just return.
    if (email) {
      // TODO: queue full report email
    }

    return NextResponse.json({
      ok: true,
      index: result.index,
      bucket: result.bucket,
      sub: result.sub,
      top3: result.top3,
      moves,
      timeline,
      zip: zip ?? null,
      stored_email: email ? true : false,
    });
  } catch (err) {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}
