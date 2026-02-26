import Image from "next/image";
import Link from "next/link";
import { CyclingTagline } from "./cycling-tagline";
import { StickyNav } from "./sticky-nav";
import { MiniClawPowered } from "./miniclaw-powered";

const features = [
  {
    title: "AI workers, not a chatbot",
    desc: "A researcher, a designer, a developer — each with distinct skills and work style. They pick up your tickets and collaborate like a real team. No prompting. No babysitting.",
  },
  {
    title: "Tickets in, features out",
    desc: "Write what you want in plain English. Your AI team handles research, planning, and implementation end to end. Move the ticket to 'In Progress' and walk away.",
  },
  {
    title: "Watch it get built live",
    desc: "Every ticket produces a live preview as work happens. Inspect it, give feedback, redirect — you stay in control without writing a line of code.",
  },
  {
    title: "Ships while you sleep",
    desc: "Your AI team runs 24/7. Drop a ticket at midnight, wake up to a working feature. The kanban board tracks every decision so nothing slips.",
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

const steps = [
  {
    step: "1",
    title: "Build your team",
    desc: "Create AI workers with custom names, skills, and personalities. A researcher who digs deep. A designer who makes it look right. A developer who ships.",
  },
  {
    step: "2",
    title: "Write a ticket",
    desc: "Describe what you want built. One sentence or ten — whatever it takes to explain the idea. Your team handles everything from there.",
  },
  {
    step: "3",
    title: "Review and ship",
    desc: "Watch the live preview as your team builds. When it looks right, approve it. That's the whole job.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-950">
      {/* Hero background */}
      <div className="absolute top-0 left-0 right-0 h-[900px] pointer-events-none" style={{ zIndex: 0 }}>
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          className="object-cover object-top opacity-90"
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
            Bonsai is a kanban board where AI workers do the actual work. Not a copilot. Not a chatbot. A team that ships.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link
              href="/see-it-in-action"
              className="px-8 py-4 rounded-lg text-base font-semibold bg-cyan-300 text-gray-950 hover:bg-cyan-200 transition-colors shadow-lg shadow-cyan-300/30"
            >
              See It In Action
            </Link>
            <a
              href="#get-started"
              className="px-8 py-4 rounded-lg text-base font-semibold bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20 transition-colors"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </main>

      {/* Social proof bar */}
      <div className="relative border-y border-white/5 py-6 px-8" style={{ zIndex: 2 }}>
        <p className="text-center text-sm text-zinc-500">
          Open source · Built with Next.js and Claude · Running in production
        </p>
      </div>

      {/* How it works */}
      <section className="relative px-8 py-28 max-w-6xl mx-auto w-full" style={{ zIndex: 2 }}>
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">How it works</h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Three steps. No prompting required.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {steps.map((item) => (
            <div key={item.step} className="text-left">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-lg font-bold text-cyan-400 shrink-0">
                  {item.step}
                </div>
                <div className="flex-1 h-px bg-white/10 rounded-full" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">{item.title}</h3>
              <p className="text-base text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Showcase: Roles + Personas */}
      <section className="relative px-8 py-28 max-w-6xl mx-auto w-full" style={{ zIndex: 2 }}>
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Your team. Your rules.</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Create AI workers with names, skills, and personalities. A researcher who digs deep. A designer who makes it look right. A developer who ships.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-gray-900 border border-white/10 overflow-hidden shadow-2xl">
            <Image
              src="/screenshots/in-action/team-edit-researcher-female.png"
              alt="Editing an AI researcher worker in Bonsai"
              width={1200}
              height={750}
              className="w-full h-auto"
            />
          </div>
          <div className="flex justify-center gap-3 mt-8">
            {[
              { name: "Adaora", role: "Researcher" },
              { name: "Emi", role: "Designer" },
              { name: "Layla", role: "Developer" },
            ].map((worker) => (
              <div
                key={worker.name}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm"
              >
                <span className="text-white font-medium">{worker.name}</span>
                <span className="text-zinc-500 ml-1">/ {worker.role}</span>
              </div>
            ))}
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
              src="/screenshots/in-action/project-1-board.png"
              alt="Bonsai kanban board with AI workers building features"
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
              Separate kanban boards, separate teams, separate git branches. Work on your SaaS and your side project at the same time without them ever touching.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-zinc-400">
                <span className="text-cyan-400 mt-0.5">--</span>
                <span>Each project has its own AI team</span>
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
              src="/screenshots/in-action/dogfooding.png"
              alt="Multiple isolated projects in Bonsai"
              width={1200}
              height={750}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="relative px-8 py-20 max-w-6xl mx-auto w-full" style={{ zIndex: 2 }}>
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            A dev team that runs on tickets
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Research, design, code, tests, git — handled end to end. You focus on what to build. Your AI team figures out how.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="rounded-2xl bg-white/5 border border-white/10 p-8 hover:bg-white/8 hover:border-white/20 transition-all"
            >
              <div className="text-5xl font-mono font-bold text-cyan-400/40 mb-4 tracking-tighter">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{f.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section className="relative px-8 py-24 max-w-4xl mx-auto w-full text-center" style={{ zIndex: 2 }}>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Built for people with ideas and no time to waste
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          Whether you're a solo founder who can't code, a developer who wants to move faster, or a team lead who wants to stop writing tickets and start reviewing previews — Bonsai gives you leverage.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          {[
            { label: "Solo founders", desc: "Ship features without hiring. Your AI team works around the clock." },
            { label: "Developers", desc: "Delegate the boring work. Focus on architecture and review." },
            { label: "Small teams", desc: "10x your output without 10x the headcount." },
          ].map((item) => (
            <div key={item.label} className="rounded-xl bg-white/5 border border-white/10 p-6">
              <div className="text-cyan-400 font-semibold mb-2">{item.label}</div>
              <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

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
          Bonsai is open source and free to self-host. Fork the repo, follow the setup guide, and have your first AI team running in under an hour.
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
          <Link
            href="/see-it-in-action"
            className="px-10 py-4 rounded-xl text-lg font-semibold bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
          >
            Watch the demo
          </Link>
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
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/5 bg-gray-950" style={{ zIndex: 2 }}>
        <div className="max-w-6xl mx-auto px-8 pt-16 pb-10">
          {/* Top grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Image src="/bonsai-logo.png" alt="Bonsai" width={22} height={22} className="rounded-md" />
                <span className="font-semibold text-white text-sm">Bonsai</span>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed max-w-[200px]">
                The kanban board that not only can, but does. Open source. Self-hostable. Autonomous.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400 mb-5">Product</h4>
              <ul className="space-y-3.5">
                <li>
                  <Link href="/see-it-in-action" className="text-sm text-zinc-500 hover:text-white transition-colors">
                    Demo
                  </Link>
                </li>
                <li>
                  <a
                    href="https://github.com/augmentedmike/bonsai-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-500 hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/augmentedmike/bonsai-app#readme"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-500 hover:text-white transition-colors"
                  >
                    Docs
                  </a>
                </li>
                <li>
                  <a href="#get-started" className="text-sm text-zinc-500 hover:text-white transition-colors">
                    Get Started
                  </a>
                </li>
              </ul>
            </div>

            {/* Ecosystem */}
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400 mb-5">Ecosystem</h4>
              <ul className="space-y-3.5">
                <li>
                  <a
                    href="https://miniclaw.bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-500 hover:text-white transition-colors"
                  >
                    MiniClaw
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.augmentedmike.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-500 hover:text-white transition-colors"
                  >
                    AugmentedMike Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://usebonsai.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-500 hover:text-white transition-colors"
                  >
                    usebonsai.org
                  </a>
                </li>
              </ul>
            </div>

            {/* Built by */}
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400 mb-5">Built by</h4>
              <ul className="space-y-3.5">
                <li>
                  <a
                    href="https://blog.augmentedmike.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-500 hover:text-white transition-colors"
                  >
                    AugmentedMike
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.augmentedmike.com/about"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-500 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-zinc-600">© 2026 Bonsai — Open source. Built in Austin, TX.</p>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/augmentedmike/bonsai-app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
              >
                ★ Star on GitHub
              </a>
              <span className="text-zinc-800">·</span>
              <a
                href="https://blog.augmentedmike.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
              >
                augmentedmike.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
