import Link from "next/link"

const AGENT_ROLES = [
  {
    role: "CEO",
    emoji: "🧠",
    bonsaiUse: "Long-term roadmaps, OKRs, cross-team coordination — persisted in the kanban across every session.",
  },
  {
    role: "Developer",
    emoji: "💻",
    bonsaiUse: "Auto-tickets bugs, dispatches Sims to fix them, ships the fix. Bonsai is the bug tracker, the CI, and the memory.",
  },
  {
    role: "Researcher",
    emoji: "🔬",
    bonsaiUse: "Research tasks drop into the board, get picked up by Sims, get synthesized and stored — no prompt needed.",
  },
  {
    role: "Marketer",
    emoji: "📣",
    bonsaiUse: "Content calendar, outreach sequences, SEO tasks — all tracked as tickets, worked autonomously, reported back.",
  },
]


export function MiniClawPowered() {
  return (
    <section className="relative px-8 py-28 max-w-6xl mx-auto w-full" style={{ zIndex: 2 }}>
      {/* Subtle divider */}
      <div className="absolute top-0 left-8 right-8 h-px bg-white/5" />

      {/* Header */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-1.5 mb-6">
          <div className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-300">Ecosystem</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
          Bonsai is the brain.<br />
          <a
            href="https://miniclaw.bot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:text-cyan-200 transition-colors"
          >
            MiniClaw
          </a>{" "}
          is the body.
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
          MiniClaw turns your Mac Mini into a fully autonomous Sim operating system — with root-level machine access, persistent memory, and a team of Sims powered by Bonsai. Four SuperSims. Unlimited Sims. One machine.
        </p>
      </div>

      {/* Ecosystem relationship diagram */}
      <div className="mb-20 rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
          {/* Bonsai */}
          <div className="text-center px-8">
            <div className="text-3xl mb-2">🌿</div>
            <div className="text-base font-bold text-white">Bonsai</div>
            <div className="text-xs text-zinc-500 mt-1">Kanban brain · Sims · Memory</div>
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center gap-1 px-4">
            <div className="hidden md:block h-px w-16 bg-gradient-to-r from-cyan-300/40 to-cyan-300/80" />
            <div className="md:hidden h-8 w-px bg-gradient-to-b from-cyan-300/40 to-cyan-300/80" />
            <span className="text-[10px] text-cyan-300/60 font-mono">powers</span>
          </div>

          {/* MiniClaw */}
          <div className="text-center px-8 rounded-xl border border-cyan-300/20 bg-cyan-300/5 py-4">
            <div className="text-3xl mb-2">🦾</div>
            <div className="text-base font-bold text-cyan-300">MiniClaw</div>
            <div className="text-xs text-zinc-400 mt-1">SuperSims · Roles · Autonomy</div>
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center gap-1 px-4">
            <div className="hidden md:block h-px w-16 bg-gradient-to-r from-cyan-300/80 to-white/20" />
            <div className="md:hidden h-8 w-px bg-gradient-to-b from-cyan-300/80 to-white/20" />
            <span className="text-[10px] text-zinc-500 font-mono">runs</span>
          </div>

          {/* Your company */}
          <div className="text-center px-8">
            <div className="text-3xl mb-2">🏢</div>
            <div className="text-base font-bold text-white">Your company</div>
            <div className="text-xs text-zinc-500 mt-1">Ships while you sleep</div>
          </div>
        </div>
      </div>

      {/* Agent roles — how each uses Bonsai */}
      <div className="mb-16">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-8">
          How each MiniClaw SuperSim uses Bonsai
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {AGENT_ROLES.map((agent) => (
            <div
              key={agent.role}
              className="rounded-xl border border-white/8 bg-white/[0.03] p-6 hover:bg-white/[0.05] hover:border-white/15 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl">{agent.emoji}</span>
                <span className="text-sm font-bold text-white">{agent.role}</span>
                <span className="ml-auto text-[9px] font-semibold uppercase tracking-widest text-cyan-300/50 border border-cyan-300/20 rounded-full px-2 py-0.5">
                  MiniClaw SuperSim
                </span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">{agent.bonsaiUse}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hardware callout */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-12 text-center mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">One machine. Full company.</p>
        <p className="text-2xl md:text-3xl font-bold text-white mb-3">
          Mac Mini → Mini Rack → enterprise scale.
        </p>
        <p className="text-zinc-400 max-w-2xl mx-auto text-base leading-relaxed">
          Start with a single $600 Mac Mini running 24/7 on dime-a-day power. Scale to a Mini Rack with 5–20 nodes running parallel Sim workstreams. Bonsai coordinates the whole thing.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="text-zinc-500 text-sm mb-5">
          Want the full operating system — not just the board?
        </p>
        <a
          href="https://miniclaw.bot"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold bg-cyan-300 text-gray-950 hover:bg-cyan-200 transition-colors shadow-lg shadow-cyan-300/20"
        >
          See MiniClaw.bot
          <span className="text-gray-950/60 text-sm">→</span>
        </a>
        <p className="text-xs text-zinc-600 mt-3">
          MiniClaw is powered by Bonsai — the kanban board that not only can, but does. Autonomously.
        </p>
      </div>
    </section>
  )
}
