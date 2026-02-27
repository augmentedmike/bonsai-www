import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-gray-950">
      <div className="max-w-5xl mx-auto px-8 pt-16 pb-10">
        {/* Three-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-12">

          {/* Investors */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-pink-400 mb-5">Investors</h4>
            <p className="text-sm text-zinc-400 leading-relaxed">
              SAFE agreements are available for early-stage investment. Standard YC SAFE terms &mdash; no board seats, no interest, converts at a future priced round.
            </p>
          </div>

          {/* Press */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-cyan-400 mb-5">Press</h4>
            <p className="text-sm text-zinc-400 leading-relaxed">
              For press inquiries, interviews, media assets, or coverage requests &mdash; all handled via AugmentedMike.
            </p>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400 mb-5">Support</h4>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Found a bug? Need help? Have a question? Reach out to AugmentedMike &mdash; we read every message.
            </p>
          </div>

        </div>

        {/* Single email CTA */}
        <div className="text-center mb-12">
          <a
            href="mailto:augmentedmike@gmail.com?subject=Bonsai%20Inquiry"
            className="inline-flex items-center gap-2 text-base font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            augmentedmike@gmail.com
            <span className="text-cyan-400/50">&rarr;</span>
          </a>
          <p className="text-xs text-zinc-600 mt-2">One inbox for everything &mdash; investors, press, and support.</p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/bonsai-logo-v2.png" alt="Bonsai" width={18} height={18} className="rounded-md" />
            <p className="text-xs text-zinc-600">&copy; 2026 Bonsai &mdash; Open source. Built in Austin, TX.</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="/" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
              Home
            </a>
            <span className="text-zinc-800">&middot;</span>
            <a href="/press" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
              Press
            </a>
            <span className="text-zinc-800">&middot;</span>
            <a href="/support" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
              Support
            </a>
            <span className="text-zinc-800">&middot;</span>
            <a
              href="https://github.com/augmentedmike/bonsai-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
            >
              GitHub
            </a>
            <span className="text-zinc-800">&middot;</span>
            <a
              href="https://blog.augmentedmike.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
            >
              AugmentedMike
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
