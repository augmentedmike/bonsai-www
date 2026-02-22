import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <Image
            src="/bonsai-logo.png"
            alt="Bonsai"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-lg font-semibold tracking-tight text-white">Bonsai</span>
        </div>
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
      <main className="flex flex-col items-center justify-center px-8 text-center max-w-4xl mx-auto pt-20 pb-32">
        <div className="mb-12 relative">
          <div className="absolute inset-0 blur-3xl bg-cyan-500/30 rounded-full"></div>
          <Image
            src="/bonsai-logo.png"
            alt="Bonsai"
            width={120}
            height={120}
            className="rounded-full relative z-10"
          />
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          Agents work on your
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
            tickets while you sleep
          </span>
        </h1>
        <p className="text-lg text-zinc-300 max-w-2xl mb-12 leading-relaxed">
          A digital team that passes the Turing test. Define tickets, preview the work, and approve when it looks right.
          All the management, planning, testing, and security is handled for you.
        </p>
        <div className="flex gap-4">
          <a
            href="#install"
            className="px-8 py-4 rounded-lg text-base font-semibold bg-gradient-to-r from-cyan-500 to-emerald-500 text-white hover:from-cyan-400 hover:to-emerald-400 transition-all shadow-lg shadow-cyan-500/50"
          >
            Install Bonsai
          </a>
          <a
            href="https://github.com/augmentedmike/bonsai-app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-lg text-base font-semibold bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20 transition-colors"
          >
            View Source
          </a>
        </div>
      </main>

      {/* How it works */}
      <section className="px-8 py-24 max-w-6xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-16 text-white">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              step: "1",
              title: "Define tickets",
              desc: "Describe what you need built. That's it. No assigning, no planning, no project management.",
            },
            {
              step: "2",
              title: "Live preview",
              desc: "Watch your digital team build the software in real-time. Steer features as they're being developed. You control when and how much.",
            },
            {
              step: "3",
              title: "Approve & ship",
              desc: "When the preview looks exactly like what you want, approve it. Everything else is handled for you.",
            },
          ].map((item) => (
            <div key={item.step} className="text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-lg font-bold text-cyan-400">
                  {item.step}
                </div>
                <div className="flex-1 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What's automated */}
      <section className="px-8 py-24 max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">All the "nerd stuff" is handled for you</h2>
        <p className="text-center text-zinc-300 mb-12 max-w-2xl mx-auto">
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
              <p className="text-sm text-zinc-200 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Install */}
      <section id="install" className="px-8 py-24 max-w-3xl mx-auto w-full text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">Get started</h2>
        <p className="text-zinc-300 mb-10">
          Fork the repo and follow the setup guide to get Bonsai running locally.
        </p>
        <a
          href="https://github.com/augmentedmike/bonsai-app/fork"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full sm:w-auto px-12 py-4 rounded-xl text-lg font-semibold bg-gradient-to-r from-cyan-500 to-emerald-500 text-white hover:from-cyan-400 hover:to-emerald-400 transition-all shadow-lg shadow-cyan-500/50"
        >
          Fork on GitHub
        </a>
        <p className="text-sm text-zinc-400 mt-6">
          Then see the{" "}
          <a
            href="https://github.com/augmentedmike/bonsai-app#readme"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:underline"
          >
            README
          </a>{" "}
          for setup instructions
        </p>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 text-center text-sm text-zinc-500 border-t border-white/5">
        Bonsai — Open source, built with Next.js and Claude.
      </footer>
    </div>
  );
}
