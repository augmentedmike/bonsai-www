import { Suspense } from "react";
import { SuccessContent } from "./success-content";

export default function SupportSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center gap-4">
          <div className="w-10 h-10 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
          <p className="text-zinc-400">Confirming your booking…</p>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
