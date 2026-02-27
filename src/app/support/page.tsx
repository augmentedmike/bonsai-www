import type { Metadata } from "next";
import Image from "next/image";
import { SupportForm } from "./support-form";
import { Footer } from "../footer";

const HOST = process.env.NEXT_PUBLIC_HOST ?? "https://bonsai-www.vercel.app";

export const metadata: Metadata = {
  title: "Support Bonsai — Keep Open Source Alive",
  description:
    "Bonsai is free and open source forever. Help us keep the lights on, pay the compute bills, and ship faster.",
  alternates: {
    canonical: "/support",
  },
  openGraph: {
    type: "website",
    url: `${HOST}/support`,
    siteName: "Bonsai",
    title: "Support Bonsai — Keep Open Source Alive",
    description:
      "Bonsai is free and open source forever. Help us keep the lights on, pay the compute bills, and ship faster.",
    locale: "en_US",
  },
};

export default function SupportPage() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 max-w-6xl mx-auto w-full border-b border-white/5">
        <a href="/" className="flex items-center gap-3">
          <Image src="/bonsai-logo-v2.png" alt="Bonsai" width={32} height={32} className="rounded-lg" />
          <span className="text-lg font-semibold tracking-tight text-white">Bonsai</span>
        </a>
        <a
          href="/"
          className="text-sm text-zinc-400 hover:text-white transition-colors"
        >
          Back to home
        </a>
      </nav>

      {/* Hero */}
      <header className="relative px-8 pt-28 pb-20 text-center max-w-3xl mx-auto overflow-hidden">
        {/* Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none opacity-20"
          style={{
            background: "radial-gradient(ellipse at center, rgba(0,229,255,0.3) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-6">Open Source Forever</p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6 text-white">
            Help us keep<br />Bonsai alive.
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Bonsai is free. No premium tiers, no gated features, no catch. But open source doesn&apos;t mean zero cost. Servers run, APIs bill, and the Sims never sleep. Your support keeps all of it going.
          </p>
        </div>
      </header>

      <main className="px-8 max-w-5xl mx-auto pb-32">

        {/* ─── Why now ─── */}
        <section className="mb-28">
          <div className="max-w-3xl mx-auto">
            <div
              className="rounded-2xl border border-cyan-400/10 p-10 sm:p-14"
              style={{
                background: "linear-gradient(145deg, rgba(0,229,255,0.04) 0%, rgba(0,229,255,0.01) 50%, rgba(255,255,255,0.02) 100%)",
              }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Why we need support right now</h2>
              <div className="space-y-5 text-base text-zinc-400 leading-relaxed">
                <p>
                  Bonsai went from first commit to production in 22 days. It&apos;s building itself, dogfooding its own features, and shipping faster than we ever imagined. But we&apos;re at an inflection point.
                </p>
                <p>
                  Right now, Bonsai runs on a single Mac Mini, one Claude Max subscription, and sheer stubbornness. That&apos;s enough to prove the concept — but not enough to serve a community. We need to scale compute, harden the infrastructure, and keep the API bills paid while we grow.
                </p>
                <p>
                  We chose to be open source from day one because we believe autonomous software teams should be accessible to everyone — not locked behind $500/mo SaaS pricing. But that decision means we don&apos;t have a revenue model yet. We have a mission.
                </p>
                <p className="text-zinc-300 font-medium">
                  Your support is what lets us keep the doors open, the Sims running, and the code free.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Where the money goes ─── */}
        <section className="mb-28">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">Where the money goes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: "~",
                  title: "Compute & infrastructure",
                  desc: "Mac Minis running 24/7, cloud hosting, CI/CD pipelines, database storage.",
                  pct: "40%",
                },
                {
                  icon: ">>",
                  title: "API & model costs",
                  desc: "Claude Max subscriptions, Gemini for avatar generation, and other model providers.",
                  pct: "30%",
                },
                {
                  icon: "//",
                  title: "Development",
                  desc: "The human tastemakers who review, steer, and ship. The Sims do the heavy lifting — but someone has to set the direction.",
                  pct: "20%",
                },
                {
                  icon: "**",
                  title: "Community & docs",
                  desc: "Better documentation, tutorials, onboarding guides, and community support.",
                  pct: "10%",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/5 p-6"
                  style={{
                    background: "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-mono text-cyan-400">{item.icon}</span>
                    <span className="text-xs font-semibold text-zinc-500 bg-white/5 px-2.5 py-1 rounded-full">{item.pct}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Support form ─── */}
        <section className="mb-28">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Support the project</h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Pick an amount or enter your own. Every dollar goes directly to keeping Bonsai running and improving.
            </p>
          </div>
          <div
            className="max-w-xl mx-auto rounded-2xl border border-white/10 p-8 sm:p-12"
            style={{
              background: "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
            }}
          >
            <SupportForm />
          </div>
        </section>

        {/* ─── Divider ─── */}
        <div className="flex items-center gap-6 mb-28 max-w-3xl mx-auto">
          <div className="flex-1 h-px bg-white/5" />
          <span className="text-xs text-zinc-600 font-semibold uppercase tracking-widest">or go bigger</span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        {/* ─── SAFE Investment ─── */}
        <section className="mb-28">
          <div className="max-w-3xl mx-auto">
            <div
              className="rounded-2xl border border-pink-500/10 p-10 sm:p-14"
              style={{
                background: "linear-gradient(145deg, rgba(236,72,153,0.04) 0%, rgba(236,72,153,0.01) 50%, rgba(255,255,255,0.02) 100%)",
              }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-500/5 border border-pink-500/20 flex items-center justify-center shrink-0">
                  <span className="text-2xl font-black text-pink-400">A</span>
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">Invest in Bonsai</h2>
                  <p className="text-sm text-zinc-500">For larger contributions via SAFE</p>
                </div>
              </div>

              <div className="space-y-5 text-base text-zinc-400 leading-relaxed mb-10">
                <p>
                  For supporters who want to go beyond a one-time contribution, we offer investment via a <strong className="text-white font-semibold">SAFE</strong> (Simple Agreement for Future Equity) — the same instrument used by Y Combinator and most Silicon Valley startups to raise early-stage capital.
                </p>
                <p>
                  A SAFE isn&apos;t a loan and it isn&apos;t stock — it&apos;s an agreement that converts into equity at a future priced round. No interest, no maturity date, no board seats required. It&apos;s the simplest, founder-friendliest way to invest in an early-stage company.
                </p>
                <p>
                  This is how the biggest companies in tech got their start. Airbnb, Dropbox, Stripe, Coinbase — they all raised their earliest capital on SAFEs. It was created by Y Combinator in 2013 to standardize early-stage investing and remove the friction of traditional convertible notes. Today it&apos;s the default instrument for Silicon Valley seed rounds.
                </p>
                <p className="text-zinc-300 font-medium">
                  If you believe in open source AI, autonomous digital labor, and the future we&apos;re building — reach out to AugmentedMike to discuss terms.
                </p>
              </div>

              {/* How it works mini-explainer */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                {[
                  { step: "1", title: "You invest", desc: "Send funds under a signed SAFE agreement." },
                  { step: "2", title: "We build", desc: "Your capital funds infrastructure, growth, and development." },
                  { step: "3", title: "It converts", desc: "When we raise a priced round, your SAFE converts to equity at a discount." },
                ].map((s) => (
                  <div key={s.step} className="rounded-lg border border-white/5 p-5 bg-white/[0.02]">
                    <div className="text-xs font-bold text-pink-400 mb-2">Step {s.step}</div>
                    <h4 className="text-sm font-semibold text-white mb-1">{s.title}</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:augmentedmike@gmail.com?subject=Bonsai%20SAFE%20Investment"
                  className="px-8 py-4 rounded-xl text-base font-semibold bg-pink-500/10 border border-pink-500/20 text-pink-400 hover:bg-pink-500/20 transition-colors text-center"
                >
                  Contact AugmentedMike
                </a>
                <a
                  href="https://www.ycombinator.com/documents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl text-base font-semibold text-zinc-400 hover:text-white transition-colors text-center"
                >
                  Learn about SAFEs &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Closing ─── */}
        <section className="text-center max-w-2xl mx-auto">
          <div
            className="w-16 h-16 rounded-2xl mx-auto mb-8 flex items-center justify-center"
            style={{
              background: "linear-gradient(145deg, rgba(0,229,255,0.1) 0%, rgba(0,229,255,0.02) 100%)",
              border: "1px solid rgba(0,229,255,0.1)",
            }}
          >
            <Image src="/bonsai-logo-v2.png" alt="" width={32} height={32} className="rounded-lg" />
          </div>
          <p className="text-zinc-400 text-lg leading-relaxed mb-3">
            Whether you contribute $5 or $50,000 — thank you.
          </p>
          <p className="text-zinc-500 text-base leading-relaxed">
            Bonsai exists because people like you believe software should be built differently. We&apos;re proving that every day.
          </p>
          <div className="mt-10">
            <a href="/" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
              &larr; Back to Bonsai
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
