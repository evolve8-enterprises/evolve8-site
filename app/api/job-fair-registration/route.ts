import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "reyaporche@gmail.com";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, session } = body as {
      name: string;
      email: string;
      session: { date: string; time: string; short: string };
    };

    if (!name?.trim() || !email?.trim() || !session?.date) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "Evolve8 Job Fair <jobs@evolve8enterprises.com>",
        to: [TO_EMAIL],
        subject: `Virtual Job Fair Registration — ${session.date} at ${session.time}`,
        html: `
          <h2>New Virtual Job Fair Registration</h2>
          <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;font-family:sans-serif;font-size:15px;">
            <tr><td style="color:#666;padding-right:16px;"><strong>Name</strong></td><td>${name}</td></tr>
            <tr><td style="color:#666;padding-right:16px;"><strong>Email</strong></td><td>${email}</td></tr>
            <tr><td style="color:#666;padding-right:16px;"><strong>Session</strong></td><td>${session.date}</td></tr>
            <tr><td style="color:#666;padding-right:16px;"><strong>Time</strong></td><td>${session.time}</td></tr>
          </table>
          <br/>
          <p style="color:#888;font-size:13px;">Sent from the Evolve8 Virtual Job Fair registration form.</p>
        `,
      });
    } else {
      console.log("[Job Fair Registration]", { name, email, session });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[Job Fair Registration Error]", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
