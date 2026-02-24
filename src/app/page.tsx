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
            href="/see-it-in-action"
            className="text-sm text-zinc-300 hover:text-white transition-colors"
          >
            See It In Action
          </a>
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
        <Image
          src="/bonsai-logo.png"
          alt="Bonsai"
          width={120}
          height={120}
          className="mx-auto mb-14"
        />
        <CyclingTagline />
        <div className="flex gap-5 flex-wrap justify-center mt-4">
          <a
            href="/see-it-in-action"
            className="px-8 py-4 rounded-lg text-base font-semibold bg-cyan-300 text-gray-950 hover:bg-cyan-200 transition-colors shadow-lg shadow-cyan-300/30"
          >
            See It In Action
          </a>
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
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-20 text-white">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
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
              <div className="flex items-center gap-4 mb-5">
                <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-lg font-bold text-cyan-400 shrink-0">
                  {item.step}
                </div>
                <div className="flex-1 h-px bg-white/10 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">{item.title}</h3>
              <p className="text-base text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
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
      <footer className="relative px-8 py-12 text-center text-sm text-zinc-500 border-t border-white/5" style={{ zIndex: 2 }}>
        Bonsai — Open source, built with Next.js and Claude.
      </footer>
    </div>
  );
}
