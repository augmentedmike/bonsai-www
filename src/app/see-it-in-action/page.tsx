import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const HOST = process.env.NEXT_PUBLIC_HOST ?? "https://bonsai-www.vercel.app";

export const metadata: Metadata = {
  title: "See It In Action — Bonsai",
  description:
    "Watch Bonsai's AI team work autonomously — from ticket creation to research, planning, implementation, and shipping.",
  alternates: {
    canonical: "/see-it-in-action",
  },
  openGraph: {
    type: "website",
    url: `${HOST}/see-it-in-action`,
    siteName: "Bonsai",
    title: "See It In Action — Bonsai",
    description:
      "Watch Bonsai's AI team work autonomously — from ticket creation to research, planning, implementation, and shipping.",
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
      "Watch Bonsai's AI team work autonomously — from ticket creation to research, planning, implementation, and shipping.",
    images: [`${HOST}/hero-bg.jpg`],
    site: "@augmentedmike",
    creator: "@augmentedmike",
  },
};

export default function SeeItInAction() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 max-w-6xl mx-auto w-full border-b border-white/5">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/bonsai-logo.png" alt="Bonsai" width={32} height={32} className="rounded-lg" />
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
            href="/#get-started"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-cyan-300 text-gray-950 hover:bg-cyan-200 transition-colors font-semibold"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header className="px-8 py-20 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-300/10 border border-cyan-300/20 text-sm text-cyan-300 mb-8">
          Real project · No staging · Actual AI workers
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6 text-white">
          Watch Bonsai work
        </h1>
        <p className="text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed">
          This is a real Bonsai project — not a demo. These screenshots are from a live kanban board
          where AI workers are actively building software.
        </p>
      </header>

      <main className="px-8 max-w-5xl mx-auto pb-32 space-y-32">

        {/* Step 1: The Board */}
        <section>
          <div className="max-w-2xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400 mb-4">
              Step 1
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Your work, organized by AI
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              The Bonsai kanban board looks familiar — columns, cards, status tags. But unlike a regular board,
              the cards don't just sit there. Each one is actively worked on by your AI team. Research, planning,
              implementation, testing — the whole cycle happens on the board, automatically.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/screenshots/in-action/project-1-board.png"
              alt="Bonsai kanban board showing active tickets in planning and building stages"
              width={1600}
              height={900}
              className="w-full"
            />
          </div>
          <p className="text-sm text-zinc-500 mt-4 text-center">
            A live Bonsai board — tickets in various stages, each being worked by a different AI worker
          </p>
        </section>

        {/* Step 2: Create a Ticket */}
        <section>
          <div className="max-w-2xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400 mb-4">
              Step 2
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Write what you want. That's it.
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Creating a ticket in Bonsai is like writing a Slack message — describe what you want, add
              acceptance criteria if you have them, and submit. Your AI team reads the ticket, figures out
              what needs to happen, and starts working. No spec docs. No standups. No tickets about tickets.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/screenshots/in-action/new-ticket-empty.png"
              alt="New ticket creation form in Bonsai"
              width={1600}
              height={900}
              className="w-full"
            />
          </div>
          <p className="text-sm text-zinc-500 mt-4 text-center">
            The ticket form — plain English, acceptance criteria, file attachments, done
          </p>
        </section>

        {/* Step 3: Build your team */}
        <section>
          <div className="max-w-2xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400 mb-4">
              Step 3
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Your team, your way
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Every Bonsai worker has a name, a role, a skill set, and a communication style you define.
              Want a sharp-elbowed researcher who argues her point? A developer who writes minimal code
              and explains every tradeoff? You can build that. Your team works the way you want your team to work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <Image
                src="/screenshots/in-action/team-edit-researcher-female.png"
                alt="Bonsai AI worker configuration — researcher persona"
                width={1600}
                height={900}
                className="w-full"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <Image
                src="/screenshots/in-action/team-edit-designer-male.png"
                alt="Bonsai AI worker configuration — designer persona"
                width={1600}
                height={900}
                className="w-full"
              />
            </div>
          </div>
          <p className="text-sm text-zinc-500 mt-4 text-center">
            Two AI workers — different roles, different communication styles, same project
          </p>
        </section>

        {/* Step 4: Watch it run */}
        <section>
          <div className="max-w-2xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400 mb-4">
              Step 4
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              The board runs itself
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Once tickets are on the board, your AI team gets to work. They post updates as they go,
              hand off work to each other, flag blockers, and move cards through the pipeline.
              You can watch in real time, jump in with feedback, or come back the next morning to a stack of finished work.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/screenshots/in-action/dogfooding.png"
              alt="Bonsai board running autonomously with AI workers actively processing tickets"
              width={1600}
              height={900}
              className="w-full"
            />
          </div>
          <p className="text-sm text-zinc-500 mt-4 text-center">
            The same board, hours later — work has progressed, cards have moved, output is ready for review
          </p>
        </section>

        {/* CTA */}
        <section className="text-center py-8">
          <h2 className="text-4xl font-bold text-white mb-5">
            Ready to build with a team that never sleeps?
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
            Bonsai is open source and free to self-host. Fork the repo and have your first AI team running in under an hour.
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
              href="/"
              className="px-10 py-4 rounded-xl text-lg font-semibold bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
            >
              Back to home
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
