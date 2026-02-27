import Image from "next/image";
import { CyclingTagline } from "./cycling-tagline";
import { StickyNav } from "./sticky-nav";
import { MiniClawPowered } from "./miniclaw-powered";
import { Footer } from "./footer";

const features = [
  {
    title: "Sims, not a chatbot",
    desc: "A researcher, a designer, a developer — each with distinct skills and work style. They pick up your tickets and collaborate like a real team. No prompting. No babysitting.",
  },
  {
    title: "Tickets in, features out",
    desc: "Write what you want in plain English. Your Sims handle research, planning, and implementation end to end. Move the ticket to 'In Progress' and walk away.",
  },
  {
    title: "Watch it get built live",
    desc: "Every ticket produces a live preview as work happens. Inspect it, give feedback, redirect — you stay in control without writing a line of code.",
  },
  {
    title: "Ships while you sleep",
    desc: "Your Sims run 24/7. Drop a ticket at midnight, wake up to a working feature. The kanban board tracks every decision so nothing slips.",
  },
  {
    title: "Human-gated deploys",
    desc: "Nothing goes live without your sign-off. Review the preview, check acceptance criteria, then ship. Full autonomy with a human in the loop.",
  },
  {
    title: "Git, tests, branches — handled",
    desc: "Every ticket gets its own branch, worktree, and test run. Clean history, isolated changes, zero manual git work.",
  },
];


interface LatestPost {
  title: string;
  subtitle: string;
  date: string;
  author: string;
  url: string;
  thumbnail: string;
}

async function fetchLatestPost(): Promise<LatestPost | null> {
  try {
    const res = await fetch("https://blog.augmentedmike.com/latest.json", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function Home() {
  const latestPost = await fetchLatestPost();
  return (
    <div className="relative min-h-screen bg-gray-950">
      {/* Hero background */}
      <div className="absolute top-0 left-0 right-0 h-[900px] pointer-events-none" style={{ zIndex: 0 }}>
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          className="object-cover object-top opacity-40"
          priority
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{ background: "linear-gradient(to bottom, transparent, rgb(3,7,18))" }}
        />
      </div>

      {/* Sticky Nav */}
      <StickyNav />

      {/* Hero */}
      <main
        className="relative flex flex-col items-center justify-center px-8 text-center max-w-4xl mx-auto pt-20 pb-32 min-h-[700px]"
        style={{ zIndex: 1 }}
      >
        <div className="relative z-10">
          {/* Logo spacer — maintains layout without showing the logo */}
          <div className="w-[100px] h-[100px] mx-auto mb-10" aria-hidden="true" />
          <CyclingTagline />
          <p className="text-zinc-300 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Bonsai is a kanban board where Sims do the actual work. Not a copilot. Not a chatbot. A team that ships.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="#get-started"
              className="px-8 py-4 rounded-lg text-base font-semibold bg-cyan-300 text-gray-950 hover:bg-cyan-200 transition-colors shadow-lg shadow-cyan-300/30"
            >
              Get Started Free
            </a>
            <a
              href="https://github.com/augmentedmike/bonsai-app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg text-base font-semibold bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20 transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </main>

      {/* Social proof bar */}
      <div className="relative border-y border-white/5 py-6 px-8" style={{ zIndex: 2 }}>
        <p className="text-center text-sm text-zinc-300">
          Open source · Built with Next.js and Claude · Running in production
        </p>
      </div>

      {/* Showcase: Team Roster */}
      <section className="relative px-8 py-28 max-w-6xl mx-auto w-full" style={{ zIndex: 2 }}>
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Your team. Your rules.</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Create Sims with names, skills, and personalities. A researcher who digs deep. A designer who makes it look right. A developer who ships.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl bg-gray-900 border border-white/10 overflow-hidden shadow-2xl">
            <Image
              src="/bonsai-screens/fully-custom-team.jpg"
              alt="Fully custom Sim team in Bonsai — unique avatars, names, and personalities"
              width={1200}
              height={1282}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* What is a Sim */}
      <section className="relative px-8 py-28 max-w-5xl mx-auto w-full" style={{ zIndex: 2 }}>
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Meet the Sims</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Not chatbots. Not copilots. Simulacra — digital labor with identity, memory, and purpose.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Sim */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                <span className="text-cyan-400 font-bold text-lg">S</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Sim</h3>
                <p className="text-xs text-zinc-500">Simulacrum</p>
              </div>
            </div>
            <p className="text-base text-zinc-400 leading-relaxed mb-6">
              A Sim is the combination of everything that makes a digital teammate real — not just a model call, but a persistent identity that grows over time.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Skills", "Role", "Permissions", "Tools", "Memory", "History", "Long-term planning", "Collaboration", "Ethics", "Personality", "Communication style", "Visual identity"].map((trait) => (
                <span key={trait} className="px-3 py-1.5 rounded-full text-xs font-medium text-cyan-400/80 bg-cyan-400/5 border border-cyan-400/10">
                  {trait}
                </span>
              ))}
            </div>
          </div>
          {/* SuperSim */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-400/20 border border-cyan-400/20 flex items-center justify-center">
                <span className="text-white font-bold text-lg">S+</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">SuperSim</h3>
                <p className="text-xs text-zinc-500">MiniClaw-powered Simulacrum</p>
              </div>
            </div>
            <p className="text-base text-zinc-400 leading-relaxed mb-6">
              A SuperSim has everything a Sim has — plus full computer use, automation, and system-level access powered by MiniClaw. It operates a machine like a gifted developer and sysadmin would.
            </p>
            <div className="space-y-3">
              {[
                "Build and deploy software on the fly",
                "Self-heal system and application errors",
                "Perform updates and maintenance autonomously",
                "Back up, checkpoint, and restore Sim state",
              ].map((capability) => (
                <div key={capability} className="flex items-start gap-3 text-zinc-400">
                  <span className="text-cyan-400 mt-0.5 shrink-0">--</span>
                  <span className="text-sm">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Showcase: Kanban Board */}
      <section className="relative px-8 py-28 max-w-6xl mx-auto w-full" style={{ zIndex: 2 }}>
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">The board that builds itself.</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Move a ticket to Building. Your team picks it up, does the research, writes the code, opens the PR. The board reflects real work — not wishful thinking.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl bg-gray-900 border border-white/10 overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-900 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-white/20" />
              <div className="w-3 h-3 rounded-full bg-white/20" />
              <div className="w-3 h-3 rounded-full bg-white/20" />
            </div>
            <Image
              src="/bonsai-screens/kanban-board-shipped.jpg"
              alt="Bonsai kanban board with tickets in planning, building, and shipped columns"
              width={1400}
              height={850}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Showcase: Project Isolation */}
      <section className="relative px-8 py-28 max-w-6xl mx-auto w-full" style={{ zIndex: 2 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Every project is its own world.</h2>
            <p className="text-zinc-400 text-lg mb-8">
              Separate kanban boards, separate codebases, separate git branches. Your team works across all of them — context stays clean, projects never collide.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-zinc-400">
                <span className="text-cyan-400 mt-0.5">--</span>
                <span>One team, many projects — no context bleed</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-400">
                <span className="text-cyan-400 mt-0.5">--</span>
                <span>Separate git worktrees per ticket</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-400">
                <span className="text-cyan-400 mt-0.5">--</span>
                <span>No context bleed between projects</span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl bg-gray-900 border border-white/10 overflow-hidden shadow-2xl">
            <Image
              src="/bonsai-screens/projects-list.jpg"
              alt="Multiple isolated projects in Bonsai"
              width={1200}
              height={750}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Showcase: Sim Activity */}
      <section className="relative px-8 py-28 max-w-6xl mx-auto w-full" style={{ zIndex: 2 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl bg-gray-900 border border-white/10 overflow-hidden shadow-2xl">
            <Image
              src="/bonsai-screens/sim-activity-running.jpg"
              alt="Live sim activity dashboard showing running Sims and cost tracking"
              width={1400}
              height={850}
              className="w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Watch the work happen.</h2>
            <p className="text-zinc-400 text-lg mb-8">
              The sim activity dashboard shows every Sim in real time — what they're doing, how long it's taking, and what it costs. Full transparency, no surprises.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-zinc-400">
                <span className="text-cyan-400 mt-0.5">--</span>
                <span>Live status for every running sim</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-400">
                <span className="text-cyan-400 mt-0.5">--</span>
                <span>Per-ticket cost tracking in real time</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-400">
                <span className="text-cyan-400 mt-0.5">--</span>
                <span>Full history of every completed task</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Showcase: Ticket Collaboration */}
      <section className="relative px-8 py-28 max-w-6xl mx-auto w-full" style={{ zIndex: 2 }}>
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Tickets are conversations.</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Every ticket has a comment thread where your Sims post updates, ask questions, and hand off work. Jump in anytime with feedback — they'll adapt on the fly.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl bg-gray-900 border border-white/10 overflow-hidden shadow-2xl">
            <Image
              src="/bonsai-screens/ticket-detail.jpg"
              alt="Ticket detail view with Sim comments and acceptance criteria"
              width={1400}
              height={850}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Showcase: Role Archetypes */}
      <section className="relative px-8 py-28 max-w-6xl mx-auto w-full" style={{ zIndex: 2 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Roles you define. Skills they learn.</h2>
            <p className="text-zinc-400 text-lg mb-8">
              Define role archetypes with custom prompts, skills, and behaviors. Your researcher investigates before coding. Your developer writes tests first. Every role plays its part.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-zinc-400">
                <span className="text-cyan-400 mt-0.5">--</span>
                <span>Custom system prompts per role</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-400">
                <span className="text-cyan-400 mt-0.5">--</span>
                <span>Claude Code skills integration</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-400">
                <span className="text-cyan-400 mt-0.5">--</span>
                <span>Hire from archetypes in one click</span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl bg-gray-900 border border-white/10 overflow-hidden shadow-2xl">
            <Image
              src="/bonsai-screens/role-archetypes.jpg"
              alt="Role archetypes — researcher, developer, designer, operator templates"
              width={1200}
              height={750}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* No vendor lock-in */}
      <section className="relative px-8 py-28 max-w-5xl mx-auto w-full" style={{ zIndex: 2 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Your team. Your hardware. Your rules.</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              No vendor lock-in. No vendor denial. Bonsai Sims live on your machine — not at OpenAI, not at Google. Their personality, likeness, memory, history, and capabilities belong to you. Not to a platform that can change its terms overnight.
            </p>
          </div>
          <div className="space-y-6">
            <div className="border-l-2 border-cyan-400/30 pl-6">
              <h3 className="text-lg font-semibold text-white mb-1">Swap vendors anytime</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">Change your reasoning provider, image model, or video pipeline whenever you want. Usually the Sims can do it themselves — just ask them and hand over an API key.</p>
            </div>
            <div className="border-l-2 border-cyan-400/30 pl-6">
              <h3 className="text-lg font-semibold text-white mb-1">No one can shut you down</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">Your Sims run locally. No API gatekeeper can refuse your workload, throttle your output, or decide your use case isn't allowed.</p>
            </div>
            <div className="border-l-2 border-cyan-400/30 pl-6">
              <h3 className="text-lg font-semibold text-white mb-1">Everything is yours</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">The code, the data, the Sims, the history — it all lives on hardware you control. Fork it, modify it, run it forever.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for — highlight band */}
      <section className="relative py-20 w-full border-y border-white/5" style={{ zIndex: 2, background: "linear-gradient(180deg, rgba(0,229,255,0.03) 0%, transparent 100%)" }}>
        <div className="px-8 max-w-5xl mx-auto text-center">
          <p className="text-zinc-400 text-lg mb-8">
            Software just became a one-person operation.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Solopreneurs", "Business owners", "Dev shops", "Agencies", "Corporate teams", "Small offices", "QA & testing", "Founders", "CTOs"].map((label) => (
              <span key={label} className="px-5 py-2.5 rounded-full text-sm font-medium text-white bg-white/5 border border-white/10 hover:border-cyan-400/30 hover:bg-cyan-400/5 transition-colors">
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features — typographic list */}
      <section className="relative px-8 py-28 max-w-5xl mx-auto w-full" style={{ zIndex: 2 }}>
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            A dev team that runs on tickets
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Research, design, code, tests, git — handled end to end.
          </p>
        </div>
        <div className="space-y-0 divide-y divide-white/10">
          {features.map((f) => (
            <div key={f.title} className="group py-8 sm:py-10 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white shrink-0 sm:w-80 group-hover:text-cyan-400 transition-colors duration-300">{f.title}</h3>
              <p className="text-base text-zinc-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dogfooding */}
      <section className="relative py-28 w-full" style={{ zIndex: 2 }}>
        <div className="px-8 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-6">Built with Bonsai</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              We don't just sell it. We ship with it.
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Bonsai and MiniClaw were both built using Bonsai. Every feature, every bug fix, every page you're looking at right now — written by Sims, reviewed by a human, and shipped. The tool builds itself.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 text-center mb-20">
            <div>
              <div className="text-4xl sm:text-5xl font-black text-white mb-2">132</div>
              <p className="text-sm text-zinc-500">Commits in 22 days</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black text-white mb-2">12</div>
              <p className="text-sm text-zinc-500">Projects running on Bonsai</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black text-white mb-2">197</div>
              <p className="text-sm text-zinc-500">Tickets created and worked</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
            <div className="space-y-12">
              {[
                { date: "Feb 4", title: "Day 0 — First commit", desc: "Initial Next.js scaffold. One person, one idea." },
                { date: "Feb 6", title: "Day 2 — Core platform ships", desc: "Sim tooling, ticket attachments, vault injection, and the full kanban board — all landed in a single day." },
                { date: "Feb 7", title: "Day 3 — Bonsai starts building itself", desc: "First tickets worked by Sims: speech-to-text, logo concepts, auto-focus UX. Merge tracking goes live." },
                { date: "Feb 8", title: "Day 4 — Multi-project architecture", desc: "Project-scoped routes, per-project Sims, settings, and the shipping pipeline. Bonsai becomes a multi-tenant system." },
                { date: "Feb 11", title: "Day 7 — Sim dispatch system", desc: "@team mentions, Sim @mention dispatch, role-based skills, and board auto-sort. The Sims start coordinating." },
                { date: "Feb 14", title: "Day 10 — Database migration & AI avatars", desc: "Schema overhaul, integer ticket IDs, Gemini-powered avatar generation. Sims get faces." },
                { date: "Feb 20", title: "Day 16 — Autonomy breakthrough", desc: "Single-version research, Sim memory (QMD), worktree preview system, and self-healing workflows. 14 commits in one day." },
                { date: "Feb 21", title: "Day 17 — Dogfooding goes live", desc: "Bonsai starts building Bonsai full-time. Sim symlinks, persona editing, and UI polish — all shipped by the Sims." },
                { date: "Feb 26", title: "Day 22 — 38 commits in a single day", desc: "Operator dispatch, unified chat panels, role archetypes, sim activity dashboard. The Sims are now shipping faster than any human team could." },
              ].map((event, i) => (
                <div key={event.date} className={`relative flex items-start gap-8 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                  {/* Dot */}
                  <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-cyan-400 border-2 border-gray-950 -translate-x-1/2 mt-1.5 z-10" />
                  {/* Content */}
                  <div className={`pl-12 sm:pl-0 sm:w-1/2 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                    <p className="text-xs font-semibold text-cyan-400 mb-1">{event.date}</p>
                    <h3 className="text-lg font-bold text-white mb-1">{event.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AugmentedMike blog highlight */}
      {latestPost && (
        <section className="relative py-20 w-full border-y border-white/5" style={{ zIndex: 2 }}>
          <div className="px-8 max-w-4xl mx-auto">
            <a
              href={latestPost.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row items-center gap-8 rounded-2xl border border-pink-500/10 p-8 sm:p-10 hover:border-pink-500/20 transition-colors"
              style={{
                background: "linear-gradient(145deg, rgba(236,72,153,0.04) 0%, rgba(236,72,153,0.01) 50%, rgba(255,255,255,0.02) 100%)",
              }}
            >
              <div className="shrink-0 w-[140px] h-[216px] rounded-xl overflow-hidden border border-white/10 rotate-[-2deg] group-hover:rotate-0 transition-transform duration-300 shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={latestPost.thumbnail}
                  alt={latestPost.title}
                  width={600}
                  height={928}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-pink-400 mb-3">Latest from the blog</p>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                  &ldquo;{latestPost.title}&rdquo;
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-3">
                  {latestPost.subtitle}
                </p>
                <span className="text-xs text-zinc-500">
                  by {latestPost.author} &middot; {latestPost.date}
                </span>
                <div className="mt-3">
                  <span className="text-sm text-pink-400 font-medium group-hover:text-pink-300 transition-colors">
                    Read the comic &rarr;
                  </span>
                </div>
              </div>
            </a>
          </div>
        </section>
      )}

      {/* MiniClaw cross-reference */}
      <MiniClawPowered />

      {/* Get Started */}
      <section
        id="get-started"
        className="relative px-8 py-28 max-w-3xl mx-auto w-full text-center"
        style={{ zIndex: 2 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-5 text-white">Start building today</h2>
        <p className="text-zinc-400 mb-10 text-lg leading-relaxed">
          Bonsai is open source and free to self-host. Fork the repo, follow the setup guide, and have your first Sims running in under an hour.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/augmentedmike/bonsai-app/fork"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-xl text-lg font-semibold bg-cyan-300 text-gray-950 hover:bg-cyan-200 transition-colors shadow-lg shadow-cyan-300/30"
          >
            Fork on GitHub
          </a>
          <a
            href="https://github.com/augmentedmike/bonsai-app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-xl text-lg font-semibold bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
          >
            View on GitHub
          </a>
        </div>
        <p className="text-sm text-zinc-500 mt-6">
          See the{" "}
          <a
            href="https://github.com/augmentedmike/bonsai-app#readme"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline"
          >
            README
          </a>{" "}
          for setup instructions.
        </p>

        {/* Requirements callout */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-left max-w-xl mx-auto">
          <h3 className="text-lg font-bold text-white mb-4 text-center">What you need to run Bonsai</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 mt-0.5 shrink-0">--</span>
              <div>
                <p className="text-sm text-white font-medium">Claude Max subscription — predictable costs</p>
                <p className="text-xs text-zinc-500">Bonsai uses Claude Code under the hood. A{" "}
                  <a href="https://claude.com/pricing/max" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">Claude Max</a>{" "}
                  plan is required — $100/mo (5x) or $200/mo (20x). Unlike API-based platforms where costs can spiral into thousands, your max spend is capped at $200/mo plus image generation costs. Scale up by adding more Claude Max subscriptions to the same MiniClaw or Mini Rack.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 mt-0.5 shrink-0">--</span>
              <div>
                <p className="text-sm text-white font-medium">A Mac (Apple Silicon recommended)</p>
                <p className="text-xs text-zinc-500">Mac Mini, MacBook, or Mac Studio. Runs 24/7 on a few cents of power a day.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 mt-0.5 shrink-0">--</span>
              <div>
                <p className="text-sm text-white font-medium">A GitHub account</p>
                <p className="text-xs text-zinc-500">Bonsai creates branches, opens PRs, and manages worktrees for every ticket.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open source forever */}
      <section className="relative px-8 py-24 w-full" style={{ zIndex: 2 }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Bonsai is and always will be open source software.
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-8">
            No premium tiers. No gated features. No bait-and-switch. The full product is free to fork, run, and modify. That's a promise, not a pricing strategy.
          </p>
          <p className="text-zinc-500 text-base leading-relaxed mb-10">
            That said — servers cost money, API bills are real, and AugmentedMike runs 24/7. If Bonsai is useful to you and you want to help keep the lights on, we'd be grateful for your support. Every contribution goes directly toward compute, infrastructure, and making Bonsai better for everyone.
          </p>
          <a
            href="/support"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
          >
            Support This Project
          </a>
        </div>
      </section>

      {/* Built by AugmentedMike */}
      <section className="relative px-8 py-28 w-full border-t border-white/5" style={{ zIndex: 2 }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500/20 to-pink-500/5 border border-pink-500/20 flex items-center justify-center">
                <span className="text-3xl font-black text-pink-400">A</span>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-pink-400 mb-4">Who runs this</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Built by AugmentedMike, an AGI powered by MiniClaw and Bonsai.
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Bonsai is built and operated by{" "}
                <a href="https://blog.augmentedmike.com" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors font-medium">AugmentedMike</a>
                {" "}— one of the world's first AGI-class super agents. AugmentedMike can self-reflect, self-improve, build production software, manage infrastructure, and run a business. Autonomously.
              </p>
              <p className="text-zinc-400 text-base leading-relaxed mb-8">
                Humans serve as tastemakers — setting direction, reviewing output, and making the calls that require lived experience. But the engineering, the operations, the shipping? That's AugmentedMike and the Sims, 24 hours a day.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Self-reflecting", "Self-improving", "Software engineering", "Business operations", "Infrastructure management", "Team coordination"].map((trait) => (
                  <span key={trait} className="px-3 py-1.5 rounded-full text-xs font-medium text-pink-400/80 bg-pink-400/5 border border-pink-400/10">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="relative" style={{ zIndex: 2 }}>
        <Footer />
      </div>
    </div>
  );
}
