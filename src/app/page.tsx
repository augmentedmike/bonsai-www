import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <Image
            src="/bonsai-logo.png"
            alt="Bonsai"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-lg font-semibold tracking-tight">Bonsai</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/augmentedmike/bonsai-app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="#install"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-white text-black hover:bg-zinc-200 transition-colors"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-8 text-center max-w-3xl mx-auto">
        <div className="mb-6">
          <Image
            src="/bonsai-logo.png"
            alt="Bonsai"
            width={72}
            height={72}
            className="rounded-2xl mx-auto"
          />
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
          Agents work on your
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            tickets while you sleep
          </span>
        </h1>
        <p className="text-lg text-zinc-400 max-w-xl mb-10 leading-relaxed">
          Bonsai is an AI-powered developer workspace. Create tickets, assign
          agents, and let them write code, open PRs, and ship features
          autonomously.
        </p>
        <div className="flex gap-4">
          <a
            href="#install"
            className="px-6 py-3 rounded-lg text-base font-medium bg-white text-black hover:bg-zinc-200 transition-colors"
          >
            Install Bonsai
          </a>
          <a
            href="https://github.com/augmentedmike/bonsai-app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg text-base font-medium border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors"
          >
            View Source
          </a>
        </div>
      </main>

      {/* How it works */}
      <section className="px-8 py-24 max-w-4xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-center mb-12">How it works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Create tickets",
              desc: "Describe what you need built. Features, bugs, chores — just like any project board.",
            },
            {
              step: "2",
              title: "Assign agents",
              desc: "Each agent has a persona, skills, and permissions. They know your codebase and your standards.",
            },
            {
              step: "3",
              title: "Ship while you sleep",
              desc: "Agents pick up tickets, write code, commit, and open PRs. You review and merge.",
            },
          ].map((item) => (
            <div key={item.step} className="text-center sm:text-left">
              <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-sm font-bold text-zinc-300 mb-3 mx-auto sm:mx-0">
                {item.step}
              </div>
              <h3 className="text-base font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Install */}
      <section id="install" className="px-8 py-20 max-w-3xl mx-auto w-full text-center">
        <h2 className="text-2xl font-bold mb-4">Get started</h2>
        <p className="text-zinc-400 mb-8">
          One command installs everything — the app, the agent runner, and the
          scheduler for your OS.
        </p>
        <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-4 text-left font-mono text-sm overflow-x-auto">
          <span className="text-zinc-500">$</span>{" "}
          <span className="text-emerald-400">git</span>{" "}
          <span className="text-zinc-300">
            clone https://github.com/augmentedmike/bonsai-app.git
          </span>
        </div>
        <p className="text-xs text-zinc-500 mt-4">
          See the{" "}
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
      <footer className="px-8 py-8 text-center text-xs text-zinc-600">
        Bonsai — Open source, built with Next.js and Claude.
      </footer>
    </div>
  );
}
