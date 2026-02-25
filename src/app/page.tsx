import Image from "next/image";
import Link from "next/link";
import { CyclingTagline } from "./cycling-tagline";

const features = [
  {
    emoji: "🧑‍💻",
    title: "A real team, not a chatbot",
    desc: "Bonsai gives you a researcher, a designer, and a developer — each with their own skills, personality, and work style. They collaborate on your tickets the same way a human team would.",
  },
  {
    emoji: "📋",
    title: "Just write what you need",
    desc: "Create a ticket in plain English. No specs, no wireframes, no hand-holding. Your team figures out the rest — research, planning, implementation.",
  },
  {
    emoji: "👀",
    title: "Watch it happen live",
    desc: "See your software being built in real time. Preview changes as they're made. Give feedback. Redirect the work. You're in control without doing the work.",
  },
  {
    emoji: "🌙",
    title: "Works while you sleep",
    desc: "Your AI team doesn't take breaks. Start a ticket at midnight. Wake up to a working feature. The kanban board tracks everything so nothing falls through the cracks.",
  },
  {
    emoji: "🔒",
    title: "You decide what ships",
    desc: "Nothing goes live without your approval. You see the live preview, you check it against the acceptance criteria, you ship it. Autonomy with a human in the loop.",
  },
  {
    emoji: "🛠️",
    title: "Git, tests, branches — handled",
    desc: "Every ticket gets its own branch, its own worktree, its own test run. Your codebase stays clean. Your git history stays meaningful. You don't touch any of it.",
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

      {/* Nav */}
      <nav
        className="relative flex items-center justify-between px-8 py-5 max-w-6xl mx-auto w-full"
        style={{ zIndex: 1 }}
      >
        <Link href="/" className="flex items-center gap-3">
          <Image src="/bonsai-logo.png" alt="Bonsai" width={32} height={32} className="rounded-lg" />
          <span className="text-lg font-semibold tracking-tight text-white">Bonsai</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/see-it-in-action" className="text-sm text-zinc-300 hover:text-white transition-colors">
            See It In Action
          </Link>
          <a
            href="https://github.com/augmentedmike/bonsai-app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-300 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="#get-started"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <main
        className="relative flex flex-col items-center justify-center px-8 text-center max-w-4xl mx-auto pt-20 pb-32 min-h-[700px]"
        style={{ zIndex: 1 }}
      >
        <div className="relative z-10">
          <Image src="/bonsai-logo.png" alt="Bonsai" width={100} height={100} className="mx-auto mb-10" />
          <CyclingTagline />
          <p className="text-zinc-300 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Bonsai is an AI-powered kanban board where digital workers — researchers, designers, developers —
            build your software for you. Describe what you want. Watch it get built.
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
            Three steps. No code required.
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

      {/* Features grid */}
      <section className="relative px-8 py-20 max-w-6xl mx-auto w-full" style={{ zIndex: 2 }}>
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Everything a dev team does,<br className="hidden sm:block" /> without the team
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Bonsai handles the full development cycle — research, design, code, tests, git — so you can focus on what to build, not how.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl bg-white/5 border border-white/10 p-8 hover:bg-white/8 hover:border-white/20 transition-all"
            >
              <div className="text-4xl mb-5">{f.emoji}</div>
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
      <footer
        className="relative px-8 py-12 text-center text-sm text-zinc-500 border-t border-white/5"
        style={{ zIndex: 2 }}
      >
        <div className="flex items-center justify-center gap-6 mb-3">
          <a href="https://github.com/augmentedmike/bonsai-app" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">
            GitHub
          </a>
          <Link href="/see-it-in-action" className="hover:text-zinc-300 transition-colors">
            Demo
          </Link>
        </div>
        <p>Bonsai — Open source. Built in Austin, TX.</p>
      </footer>
    </div>
  );
}
