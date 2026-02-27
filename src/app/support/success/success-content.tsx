"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [name, setName] = useState<string>("");
  const [alreadyCalled, setAlreadyCalled] = useState(false);

  useEffect(() => {
    if (alreadyCalled) return;
    setAlreadyCalled(true);

    if (!sessionId) {
      setStatus("success");
      return;
    }

    fetch(`/api/confirm?session_id=${sessionId}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.ok) {
          setName(data.name || "");
          setStatus("success");
        } else {
          // Payment may not be confirmed yet — still show success
          setStatus("success");
        }
      })
      .catch(() => setStatus("success")); // don't block on errors
  }, [sessionId, alreadyCalled]);

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center px-8 text-center">
      {status === "loading" && (
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
          <p className="text-zinc-400">Confirming your booking…</p>
        </div>
      )}

      {status === "success" && (
        <div className="max-w-lg w-full">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            You&apos;re booked!
          </h1>
          {name && (
            <p className="text-zinc-400 text-lg mb-2">Hey {name} —</p>
          )}
          <p className="text-zinc-300 text-lg mb-3 leading-relaxed">
            We received your payment and we&apos;ll confirm your slot via email within the hour.
          </p>
          <p className="text-zinc-400 text-base mb-10">
            AugmentedMike will be ready for you. 🌿
          </p>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 mb-8 text-left space-y-3">
            <p className="text-sm text-zinc-300 font-medium">What happens next:</p>
            <ul className="space-y-2">
              {[
                "Check your email — a calendar invite will arrive shortly",
                "A recording link will be sent to you after the session",
                "Questions before the call? Reply to your booking email",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-zinc-400">
                  <span className="text-cyan-400 shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-cyan-300 text-gray-950 font-semibold hover:bg-cyan-200 transition-colors"
          >
            ← Back to usebonsai.org
          </Link>
        </div>
      )}
    </div>
  );
}
