import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const HOST = process.env.NEXT_PUBLIC_HOST ?? "https://bonsai-www.vercel.app";

export const metadata: Metadata = {
  title: "See It In Action — Bonsai",
  description:
    "Watch how Bonsai's AI team handles everything autonomously — from ticket creation to research, planning, implementation, and shipping.",
  alternates: {
    canonical: "/see-it-in-action",
  },
  openGraph: {
    type: "website",
    url: `${HOST}/see-it-in-action`,
    siteName: "Bonsai",
    title: "See It In Action — Bonsai",
    description:
      "Watch how Bonsai's AI team handles everything autonomously — from ticket creation to research, planning, implementation, and shipping.",
    images: [
      {
        url: `${HOST}/hero-bg.jpg`,
        width: 1200,
        height: 630,
        alt: "Bonsai — AI-powered kanban board in action",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "See It In Action — Bonsai",
    description:
      "Watch how Bonsai's AI team handles everything autonomously — from ticket creation to research, planning, implementation, and shipping.",
    images: [`${HOST}/hero-bg.jpg`],
    site: "@augmentedmike",
    creator: "@augmentedmike",
  },
};

export default function SeeItInAction() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 max-w-6xl mx-auto w-full">
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
          <Link
            href="/"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
          >
            Back Home
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header className="px-8 py-20 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6 text-white">
          See it in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
            action
          </span>
        </h1>
        <p className="text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          From creating tickets to shipping features—watch how Bonsai&apos;s AI team handles
          everything autonomously.
        </p>
      </header>

      {/* Story Sections */}
      <main className="px-8 max-w-7xl mx-auto pb-32 space-y-32">

        {/* 1. Build Your Team */}
        <section className="space-y-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300">
              <span className="text-2xl">🎨</span>
              <span>Step 1</span>
            </div>
            <h2 className="text-4xl font-bold text-white">Create your digital coworkers</h2>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Design digital labor with custom names, appearances, personalities, and communication styles.
              Like intelligent Sims—you have complete creative freedom to build the team you need.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <Image
                src="/screenshots/in-action/team-edit-researcher-female.png"
                alt="Aziza - AI Researcher with detailed persona"
                width={1600}
                height={900}
                className="w-full"
              />
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <Image
                src="/screenshots/in-action/team-edit-researcher-female-2.png"
                alt="Aziza - AI Researcher alternate view"
                width={1600}
                height={900}
                className="w-full"
              />
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <Image
                src="/screenshots/in-action/team-edit-developer-male.png"
                alt="Brendan - AI Developer implementing features"
                width={1600}
                height={900}
                className="w-full"
              />
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <Image
                src="/screenshots/in-action/team-edit-designer-male.png"
                alt="AI Designer persona with custom styling"
                width={1600}
                height={900}
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* 2. Create a Ticket */}
        <section className="space-y-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300">
              <span className="text-2xl">📝</span>
              <span>Step 2</span>
            </div>
            <h2 className="text-4xl font-bold text-white">Describe what you need</h2>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Just write a description in plain language. Add acceptance criteria if you want.
              No assigning tasks, no project planning—just say what you need.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur max-w-5xl mx-auto">
            <Image
              src="/screenshots/in-action/new-ticket-empty.png"
              alt="Creating a new ticket with natural language description"
              width={1600}
              height={900}
              className="w-full"
            />
          </div>
        </section>

        {/* 3. Research Phase */}
        <section className="space-y-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300">
              <span className="text-2xl">🔍</span>
              <span>Step 3</span>
            </div>
            <h2 className="text-4xl font-bold text-white">Deep research happens</h2>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Your digital researcher explores the codebase, reads documentation, and evaluates technical approaches—
              then produces a comprehensive research document for your review.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur max-w-5xl mx-auto">
            <Image
              src="/screenshots/in-action/planning-research.png"
              alt="Detailed research document produced by AI researcher"
              width={1600}
              height={900}
              className="w-full"
            />
          </div>
        </section>

        {/* 4. Implementation Plan */}
        <section className="space-y-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300">
              <span className="text-2xl">📋</span>
              <span>Step 4</span>
            </div>
            <h2 className="text-4xl font-bold text-white">Detailed planning</h2>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Based on research, your digital team creates a step-by-step implementation plan.
              Review it, request changes, or approve to move forward.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur max-w-5xl mx-auto">
            <Image
              src="/screenshots/in-action/planning-implementation-plan.png"
              alt="Step-by-step implementation plan"
              width={1600}
              height={900}
              className="w-full"
            />
          </div>
        </section>

        {/* 5. Team Collaboration */}
        <section className="space-y-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300">
              <span className="text-2xl">💬</span>
              <span>Step 5</span>
            </div>
            <h2 className="text-4xl font-bold text-white">Real-time collaboration</h2>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Chat with your digital coworkers about the work. Ask questions, provide feedback,
              or just watch them collaborate with each other autonomously.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur max-w-5xl mx-auto">
            <Image
              src="/screenshots/in-action/project-chat.png"
              alt="Team chat showing collaboration between AI agents and human"
              width={1600}
              height={900}
              className="w-full"
            />
          </div>
        </section>

        {/* 6. Live Preview */}
        <section className="space-y-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300">
              <span className="text-2xl">👀</span>
              <span>Step 6</span>
            </div>
            <h2 className="text-4xl font-bold text-white">Preview the work live</h2>
            <p className="text-lg text-zinc-300 leading-relaxed">
              See your feature running in real-time. Test it, use it, break it.
              If something&apos;s not right, give feedback and your digital team will fix it.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur max-w-5xl mx-auto">
            <Image
              src="/screenshots/in-action/project-1-live-preview-4.png"
              alt="Live preview of working application with video keyframe extraction"
              width={1600}
              height={900}
              className="w-full"
            />
          </div>
        </section>

        {/* 7. Track Progress */}
        <section className="space-y-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300">
              <span className="text-2xl">📊</span>
              <span>Step 7</span>
            </div>
            <h2 className="text-4xl font-bold text-white">Watch it all come together</h2>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Your kanban board shows work moving from planning to building to shipped—
              all automatically as your digital coworkers complete each phase. No status meetings required.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur max-w-5xl mx-auto">
            <Image
              src="/screenshots/in-action/project-1-board.png"
              alt="Kanban board showing tickets moving through planning, building, and shipped columns"
              width={1600}
              height={900}
              className="w-full"
            />
          </div>
        </section>

        {/* 8. Dogfooding */}
        <section className="space-y-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300">
              <span className="text-2xl">🍴</span>
              <span>Bonus</span>
            </div>
            <h2 className="text-4xl font-bold text-white">We eat our own dog food</h2>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Bonsai is built with Bonsai. Every feature you see was planned, researched,
              and implemented by digital coworkers working together.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur max-w-5xl mx-auto">
            <Image
              src="/screenshots/in-action/dogfooding.png"
              alt="Bonsai building itself - implementing Spanish language support"
              width={1600}
              height={900}
              className="w-full"
            />
          </div>
        </section>

      </main>

      {/* CTA */}
      <section className="px-8 py-24 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Ready to try it?</h2>
        <p className="text-lg text-zinc-300 mb-10 leading-relaxed">
          Fork the repo, create your digital coworkers, and start shipping features while you sleep.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/augmentedmike/bonsai-app/fork"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-lg text-base font-semibold bg-gradient-to-r from-cyan-500 to-emerald-500 text-white hover:from-cyan-400 hover:to-emerald-400 transition-all shadow-lg shadow-cyan-500/50"
          >
            Fork on GitHub
          </a>
          <Link
            href="/"
            className="px-8 py-4 rounded-lg text-base font-semibold bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 text-center text-sm text-zinc-500 border-t border-white/5">
        Bonsai — Open source, built with Next.js and Claude.
      </footer>
    </div>
  );
}
