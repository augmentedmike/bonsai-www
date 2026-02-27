import type { Metadata } from "next";
import { StickyNav } from "../sticky-nav";
import { BookingForm } from "./booking-form";

export const metadata: Metadata = {
  title: "Book a Support Session — Bonsai",
  description: "30 minutes, 1:1 with the AugmentedMike team. Get hands-on help with your Bonsai or MiniClaw setup.",
};

export default function SupportPage() {
  return (
    <div className="relative min-h-screen bg-gray-950">
      <StickyNav />

      {/* Hero */}
      <section className="relative px-8 pt-20 pb-16 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block animate-pulse" />
          Live 1:1 sessions available
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-5 leading-tight">
          Book a Support Session
        </h1>
        <p className="text-zinc-400 text-xl max-w-2xl mx-auto leading-relaxed">
          30 minutes, 1:1 with the AugmentedMike team. We'll debug, architect, and fix whatever's blocking you.
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-8 pb-28 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: What's included */}
        <div className="space-y-8">
          {/* What's included */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
            <h2 className="text-xl font-semibold text-white mb-6">What's included</h2>
            <ul className="space-y-4">
              {[
                {
                  icon: "🧠",
                  text: "Direct access to AugmentedMike's operator-level knowledge",
                },
                {
                  icon: "🔍",
                  text: "Live debugging and architecture review",
                },
                {
                  icon: "🛠️",
                  text: "Hands-on help with your Bonsai or MiniClaw setup",
                },
                {
                  icon: "🎥",
                  text: "Recorded session link sent to you after",
                },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                  <span className="text-zinc-300 text-sm leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing */}
          <div className="rounded-2xl bg-cyan-400/5 border border-cyan-400/20 p-8">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-bold text-white">$99</span>
              <span className="text-zinc-400 text-sm">/ 30 minutes</span>
            </div>
            <p className="text-zinc-400 text-sm">
              One-time payment. No subscription. Secured by Stripe.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
              <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Secure checkout via Stripe
            </div>
          </div>

          {/* Who this is for */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
            <h2 className="text-xl font-semibold text-white mb-4">Who this is for</h2>
            <ul className="space-y-2">
              {[
                "You're setting up Bonsai or MiniClaw and hit a wall",
                "You need a second pair of eyes on your AI worker setup",
                "You want help designing your project's agent architecture",
                "You'd rather talk it through than read another README",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-zinc-400">
                  <span className="text-cyan-400 mt-0.5 shrink-0">--</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Booking form */}
        <div>
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
