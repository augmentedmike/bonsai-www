"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";

function getTimeSlots(): string[] {
  const slots: string[] = [];
  const now = new Date();
  // Mexico City is UTC-6 (CST) or UTC-5 (CDT)
  // Use Intl to get Mexico City offset
  const mexicoTz = "America/Mexico_City";

  let businessDaysFound = 0;
  let cursor = new Date(now);
  cursor.setHours(0, 0, 0, 0);

  while (businessDaysFound < 7) {
    cursor.setDate(cursor.getDate() + 1);
    const dayOfWeek = new Date(cursor.toLocaleString("en-US", { timeZone: mexicoTz })).getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) continue; // skip weekends

    businessDaysFound++;

    // Generate 10am–4pm slots in 30-min increments (10:00, 10:30 ... 15:30)
    for (let hour = 10; hour < 16; hour++) {
      for (const min of [0, 30]) {
        const date = new Date(cursor);
        date.setHours(hour, min, 0, 0);

        const label = date.toLocaleString("en-US", {
          timeZone: mexicoTz,
          weekday: "short",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });

        slots.push(label);
      }
    }
  }

  return slots;
}

export function BookingForm() {
  const router = useRouter();
  const slots = useMemo(() => getTimeSlots(), []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "",
    preferredTime: slots[0] || "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.url) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      router.push(data.url);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
      <h2 className="text-xl font-semibold text-white mb-2">Reserve your slot</h2>
      <p className="text-zinc-500 text-sm mb-6">
        Fill out the form — you'll be taken to Stripe to complete payment.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1.5">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-colors"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1.5">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@example.com"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-colors"
          />
        </div>

        {/* Topic */}
        <div>
          <label htmlFor="topic" className="block text-sm font-medium text-zinc-300 mb-1.5">
            What do you need help with?
          </label>
          <textarea
            id="topic"
            name="topic"
            required
            rows={4}
            placeholder="e.g. I'm trying to set up a Bonsai worker that can push to GitHub but getting auth errors. Also want to discuss project architecture…"
            value={form.topic}
            onChange={handleChange}
            className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-colors resize-none"
          />
        </div>

        {/* Time slot */}
        <div>
          <label htmlFor="preferredTime" className="block text-sm font-medium text-zinc-300 mb-1.5">
            Preferred time slot
            <span className="ml-1.5 text-zinc-600 font-normal">(Mexico City time)</span>
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            required
            value={form.preferredTime}
            onChange={handleChange}
            className="w-full rounded-lg bg-gray-900 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-colors appearance-none cursor-pointer"
          >
            {slots.map((slot) => (
              <option key={slot} value={slot} className="bg-gray-900">
                {slot}
              </option>
            ))}
          </select>
          <p className="mt-1.5 text-xs text-zinc-600">
            We'll confirm this slot via email after payment.
          </p>
        </div>

        {error && (
          <div className="rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 rounded-xl text-base font-semibold bg-cyan-300 text-gray-950 hover:bg-cyan-200 transition-colors shadow-lg shadow-cyan-300/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <span className="w-4 h-4 rounded-full border-2 border-gray-950/40 border-t-gray-950 animate-spin" />
              Redirecting to Stripe…
            </>
          ) : (
            <>
              Book & Pay $99
              <span className="opacity-60">→</span>
            </>
          )}
        </button>

        <p className="text-center text-xs text-zinc-600">
          Secured by Stripe · Your card info never touches our servers
        </p>
      </form>
    </div>
  );
}
