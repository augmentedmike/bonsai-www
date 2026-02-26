import Image from "next/image";
import Link from "next/link";
import { CyclingTagline } from "./cycling-tagline";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-950">
      {/* Hero background image — top only */}
      <div className="absolute top-0 left-0 right-0 h-[900px] pointer-events-none" style={{ zIndex: 0 }}>
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          className="object-cover object-top opacity-90"
          priority
        />
        {/* Blend bottom edge into page bg */}
        <div className="absolute bottom-0 left-0 right-0 h-48" style={{
          background: 'linear-gradient(to bottom, transparent, rgb(3,7,18))'
        }} />
      </div>

      {/* Nav */}
      <nav className="relative flex items-center justify-between px-8 py-5 max-w-6xl mx-auto w-full" style={{ zIndex: 1 }}>
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/bonsai-logo.png"
            alt="Bonsai"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-lg font-semibold tracking-tight text-white">Bonsai</span>
        </Link>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/augmentedmike/bonsai-app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-300 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="#install"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <main className="relative flex flex-col items-center justify-center px-8 text-center max-w-4xl mx-auto pt-20 pb-32 min-h-[700px]" style={{ zIndex: 1 }}>

        {/* Content */}
        <div className="relative z-10">
        <div className="mb-14 h-[120px]" />
        <CyclingTagline />
        <div className="flex gap-5 flex-wrap justify-center mt-4">
          <a
            href="#install"
            className="px-8 py-4 rounded-lg text-base font-semibold bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20 transition-colors"
          >
            Install Bonsai
          </a>
        </div>
        </div>
      </main>

      {/* How it works */}
      <section className="relative px-8 py-28 max-w-6xl mx-auto w-full" style={{ zIndex: 2 }}>
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-white">How it works</h2>
        <p className="text-center text-zinc-400 mb-16 max-w-2xl mx-auto text-lg">
          Instead of writing code to build digital solutions, you speak them into creation.
        </p>

        {/* Step 1 — Create a Project */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-sm font-bold text-white shrink-0">1</span>
            <h3 className="text-2xl font-bold text-white">Create a Project</h3>
          </div>
          <p className="text-base text-zinc-400 leading-relaxed max-w-lg text-center mb-6">Create an isolated environment where you can define the problem space and create the solution via digital labor and a kanban board.</p>
          <img src="/screenshots/how-it-works/step-1-create-project.png" alt="Create a project" width={519} height={416} />
        </div>

        {/* Step 2 — Create Your Perfect Digital Coworkers */}
        <div className="flex flex-col items-center mt-24">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-sm font-bold text-white shrink-0">2</span>
            <h3 className="text-2xl font-bold text-white">Create Your Perfect Digital Coworkers</h3>
          </div>
          <div className="flex gap-4 flex-wrap justify-center">
            <img src="/screenshots/how-it-works/team-avatar-2.png" alt="Persona" width={371} height={256} />
            <img src="/screenshots/how-it-works/team-avatar-1.png" alt="Persona" width={395} height={252} />
            <img src="/screenshots/how-it-works/persona-2.png" alt="Persona" width={365} height={253} />
            <img src="/screenshots/how-it-works/persona-1.png" alt="Persona" width={350} height={245} />
          </div>
        </div>

        {/* Step 3 — Use a Kanban Board */}
        <div className="flex flex-col items-center mt-24">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-sm font-bold text-white shrink-0">3</span>
            <h3 className="text-2xl font-bold text-white">Use a Kanban Board to Shape Your Project</h3>
          </div>
          <img src="/screenshots/how-it-works/kanban-board.png" alt="Kanban board" className="max-w-4xl w-full h-auto" />
        </div>

        {/* Step 4 — Tickets */}
        <div className="flex flex-col items-center mt-24">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-sm font-bold text-white shrink-0">4</span>
            <h3 className="text-2xl font-bold text-white">Tickets — Change Requests Made Simple</h3>
          </div>
          <p className="text-base text-zinc-400 leading-relaxed max-w-lg text-center mb-6">Tickets are described in simple English (multilingual coming soon!) and can be entered via voice.</p>
          <img src="/screenshots/how-it-works/step-4-ticket-description.png" alt="Ticket description" width={1042} height={320} className="max-w-3xl w-full h-auto" />
          <p className="text-base text-zinc-400 leading-relaxed max-w-lg text-center mt-8 mb-6">Title and acceptance criteria are automatically generated from the detailed description.</p>
          <img src="/screenshots/how-it-works/step-4-auto-complete.png" alt="Auto-completed title and criteria" width={1150} height={398} className="max-w-3xl w-full h-auto" />
          <p className="text-base text-zinc-400 leading-relaxed max-w-lg text-center mt-8 mb-6">Ticket view, chat, details, attachments, and agent artifacts like the Research and Implementation plan.</p>
          <img src="/screenshots/how-it-works/step-4-ticket-view.png" alt="Ticket view with documents and chat" width={1598} height={783} className="max-w-5xl w-full h-auto" />
          <p className="text-base text-zinc-400 leading-relaxed max-w-lg text-center mt-8 mb-6">Epic ticket support and tickets can be put on hold with a click.</p>
          <img src="/screenshots/how-it-works/step-4-ticket-card.png" alt="Ticket card with epic and hold" width={465} height={460} />
          <p className="text-base text-zinc-400 leading-relaxed max-w-lg text-center mt-8 mb-6">Live view the project files.</p>
          <img src="/screenshots/how-it-works/step-4-file-viewer.png" alt="File viewer" width={1079} height={661} className="max-w-4xl w-full h-auto" />
          <p className="text-base text-zinc-400 leading-relaxed max-w-lg text-center mt-8 mb-6">Make comments on tickets to discuss the ticket or request changes.</p>
          <img src="/screenshots/how-it-works/step-4-ticket-chat.png" alt="Ticket chat" width={380} height={684} />
        </div>

      </section>

      {/* What's automated */}
      <section className="relative px-8 py-28 max-w-5xl mx-auto w-full" style={{ zIndex: 2 }}>
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-5 text-white">All the &ldquo;nerd stuff&rdquo; is handled</h2>
        <p className="text-center text-zinc-400 mb-14 max-w-2xl mx-auto text-lg leading-relaxed">
          Management, communication, planning, implementation, testing, and security — completely automated.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { emoji: "🌳", label: "Git branches & worktrees" },
            { emoji: "📋", label: "Kanban board management" },
            { emoji: "👥", label: "Researcher, designer & developer" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-8 hover:bg-white/10 hover:border-white/20 transition-all text-center"
            >
              <div className="text-5xl mb-4">{item.emoji}</div>
              <p className="text-base text-zinc-200 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Install */}
      <section id="install" className="relative px-8 py-28 max-w-3xl mx-auto w-full text-center" style={{ zIndex: 2 }}>
        <h2 className="text-4xl sm:text-5xl font-bold mb-5 text-white">Get started</h2>
        <p className="text-zinc-400 mb-10 text-lg leading-relaxed">
          Fork the repo and follow the setup guide to get Bonsai running locally.
        </p>
        <a
          href="https://github.com/augmentedmike/bonsai-app/fork"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full sm:w-auto px-12 py-4 rounded-xl text-lg font-semibold bg-cyan-300 text-gray-950 hover:bg-cyan-200 transition-colors shadow-lg shadow-cyan-300/30"
        >
          Fork on GitHub
        </a>
        <p className="text-sm text-zinc-400 mt-6">
          Then see the{" "}
          <a
            href="https://github.com/augmentedmike/bonsai-app#readme"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline"
          >
            README
          </a>{" "}
          for setup instructions
        </p>
      </section>

      {/* Footer */}
      <footer className="relative px-8 py-12 border-t border-white/5 text-sm text-zinc-500" style={{ zIndex: 2 }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <p>Bonsai — Open source, built with Next.js and Claude.</p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-zinc-600 uppercase tracking-widest text-xs font-semibold">Ecosystem</span>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="hover:text-zinc-300 transition-colors"
              >
                Bonsai
              </Link>
              <a
                href="https://miniclaw.bot"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-300 transition-colors"
              >
                MiniClaw
              </a>
              <a
                href="https://blog.augmentedmike.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-300 transition-colors"
              >
                AugmentedMike Blog
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
