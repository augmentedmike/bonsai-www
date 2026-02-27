import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not set");
  return new Stripe(key, { apiVersion: "2026-02-25.clover" });
}

async function sendTelegram(chatId: string, text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) return;
  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
  });
}

export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.json({ error: "Missing session_id" }, { status: 400 });
  }

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return NextResponse.json({ ok: false, error: "Payment not confirmed yet" }, { status: 402 });
    }

    const { name, email, topic, preferredTime } = session.metadata || {};

    const message = `📅 NEW SESSION BOOKED\n👤 ${name} (${email})\n📝 ${topic}\n⏰ ${preferredTime}\n💳 Payment confirmed`;

    const michaelId = process.env.TELEGRAM_MICHAEL_ID || "8755232806";
    const ryanId = process.env.TELEGRAM_RYAN_ID || "8780675264";

    await Promise.all([
      sendTelegram(michaelId, message),
      sendTelegram(ryanId, message),
    ]);

    return NextResponse.json({ ok: true, name, email });
  } catch (err: unknown) {
    console.error("Confirm error:", err);
    const message = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
