"use client";

import { useState } from "react";

const PRESETS = [5, 10, 25, 50, 100, 250];

const STRIPE_LINK = process.env.NEXT_PUBLIC_STRIPE_DONATION_LINK ?? "";

export function SupportForm() {
  const [amount, setAmount] = useState<number | null>(25);
  const [custom, setCustom] = useState("");

  const active = custom ? Number(custom) : amount;
  const valid = active !== null && active >= 5;

  function handleCheckout() {
    if (!valid) return;
    // If a Stripe Payment Link is configured, redirect with prefilled amount
    if (STRIPE_LINK) {
      const url = new URL(STRIPE_LINK);
      url.searchParams.set("prefilled_amount", String((active ?? 25) * 100));
      window.open(url.toString(), "_blank", "noopener,noreferrer");
    } else {
      // Fallback: open Stripe placeholder
      window.open(
        `https://buy.stripe.com/placeholder?amount=${active}`,
        "_blank",
        "noopener,noreferrer"
      );
    }
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Preset amounts */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {PRESETS.map((preset) => (
          <button
            key={preset}
            type="button"
            onClick={() => {
              setAmount(preset);
              setCustom("");
            }}
            className={`relative py-4 rounded-xl text-center font-bold text-lg transition-all duration-200 border ${
              amount === preset && !custom
                ? "bg-cyan-300 text-gray-950 border-cyan-300 shadow-lg shadow-cyan-300/30"
                : "bg-white/5 text-white border-white/10 hover:border-cyan-400/30 hover:bg-white/10"
            }`}
          >
            ${preset}
          </button>
        ))}
      </div>

      {/* Custom amount */}
      <div className="relative mb-8">
        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl font-bold text-zinc-500">
          $
        </div>
        <input
          type="number"
          min={5}
          placeholder="Custom amount"
          value={custom}
          onChange={(e) => {
            setCustom(e.target.value);
            setAmount(null);
          }}
          onFocus={() => setAmount(null)}
          className="w-full py-5 pl-12 pr-6 rounded-xl text-xl font-semibold bg-white/5 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all"
        />
        {custom && Number(custom) < 5 && (
          <p className="absolute -bottom-6 left-0 text-xs text-pink-400">
            Minimum amount is $5
          </p>
        )}
      </div>

      {/* Checkout button */}
      <button
        type="button"
        onClick={handleCheckout}
        disabled={!valid}
        className={`w-full py-5 rounded-xl text-lg font-bold transition-all duration-200 ${
          valid
            ? "bg-cyan-300 text-gray-950 hover:bg-cyan-200 shadow-lg shadow-cyan-300/30 cursor-pointer"
            : "bg-zinc-800 text-zinc-500 cursor-not-allowed"
        }`}
      >
        {valid ? `Support with $${active}` : "Choose an amount"}
      </button>

      <p className="text-center text-xs text-zinc-600 mt-4">
        One-time payment via Stripe. Secure, fast, no account needed.
      </p>
    </div>
  );
}
