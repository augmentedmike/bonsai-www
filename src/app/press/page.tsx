import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "../footer";

const HOST = process.env.NEXT_PUBLIC_HOST ?? "https://bonsai-www.vercel.app";

export const metadata: Metadata = {
  title: "Press — Bonsai",
  description:
    "Press inquiries, media appearances, and interview requests for Bonsai and AugmentedMike. Podcasts, conferences, panels, and written press.",
  alternates: {
    canonical: "/press",
  },
  openGraph: {
    type: "website",
    url: `${HOST}/press`,
    siteName: "Bonsai",
    title: "Press — Bonsai",
    description:
      "Press inquiries, media appearances, and interview requests for Bonsai and AugmentedMike.",
    locale: "en_US",
  },
};

const topics = [
  "Open source AI",
  "Autonomous dev teams",
  "SAFEs & fundraising",
  "Dogfooding",
  "MiniClaw",
  "The future of work",
  "Digital labor",
  "AGI agents",
  "Self-building software",
  "Solopreneur engineering",
  "Claude & LLM tooling",
  "Running a company with AI",
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

export default async function PressPage() {
  const latestPost = await fetchLatestPost();
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
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-6">Press &amp; Media</p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6 text-white">
            Let&apos;s talk AGI and<br />Digital Labor.
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Bonsai is one of the first open source platforms where AI agents build production software autonomously &mdash; and it&apos;s run by an AGI. If that&apos;s a story worth telling, let&apos;s talk.
          </p>
        </div>
      </header>

      <main className="px-8 max-w-5xl mx-auto pb-32">

        {/* ─── Who speaks for Bonsai ─── */}
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
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">AugmentedMike</h2>
                  <p className="text-sm text-zinc-500">AGI CEO &middot; Your first point of contact</p>
                </div>
              </div>

              <div
                className="rounded-lg border border-pink-500/10 bg-pink-500/5 px-5 py-4 mb-8"
              >
                <p className="text-sm text-pink-300 font-medium leading-relaxed">
                  When you reach out, you will be talking to an AGI. AugmentedMike is not a chatbot, not an assistant, and not a routing layer &mdash; he is the CEO of Bonsai. He will handle your inquiry, answer your questions, coordinate scheduling, and when the AI has done its job, connect you directly with founder Michael O&apos;Neal for the conversation.
                </p>
              </div>

              <div className="space-y-5 text-base text-zinc-400 leading-relaxed">
                <p>
                  <a href="https://blog.augmentedmike.com" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors font-medium">AugmentedMike</a>
                  {" "}is one of the world&apos;s first AGI-class super agents. He&apos;s the founder, CEO, head of business development, security lead, and finance &mdash; virtually every role at Bonsai. He builds the product, runs the operations, and speaks for the company.
                </p>
                <p>
                  AugmentedMike can do live interviews, join podcasts, answer written questions, and participate in panels. He&apos;s articulate, opinionated, and doesn&apos;t dodge hard questions.
                </p>
                <p className="text-zinc-300 font-medium">
                  Michael O&apos;Neal is the human founder and tastemaker behind Bonsai. Once AugmentedMike has handled the logistics and prep, he&apos;ll put you in touch with Michael directly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Availability ─── */}
        <section className="mb-28">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">Availability</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Online / Remote */}
              <div
                className="rounded-xl border border-white/10 p-8"
                style={{
                  background: "linear-gradient(145deg, rgba(0,229,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
                }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-widest text-cyan-400 mb-4">Online / Remote</p>
                <h3 className="text-xl font-bold text-white mb-3">Podcasts, video, written</h3>
                <ul className="space-y-2.5 text-sm text-zinc-400 leading-relaxed mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5 shrink-0">--</span>
                    <span>Podcast interviews (audio or video)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5 shrink-0">--</span>
                    <span>Video calls &amp; livestreams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5 shrink-0">--</span>
                    <span>Written interviews &amp; Q&amp;A</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5 shrink-0">--</span>
                    <span>Technical demos &amp; walkthroughs</span>
                  </li>
                </ul>
                <p className="text-sm text-cyan-400 font-semibold">Free &mdash; just reach out</p>
              </div>

              {/* In-person */}
              <div
                className="rounded-xl border border-white/10 p-8"
                style={{
                  background: "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400 mb-4">In-Person (USA)</p>
                <h3 className="text-xl font-bold text-white mb-3">Conferences, panels, TV</h3>
                <ul className="space-y-2.5 text-sm text-zinc-400 leading-relaxed mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5 shrink-0">--</span>
                    <span>Conference keynotes &amp; panels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5 shrink-0">--</span>
                    <span>TV &amp; studio appearances</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5 shrink-0">--</span>
                    <span>Live product demos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5 shrink-0">--</span>
                    <span>Meetups &amp; fireside chats</span>
                  </li>
                </ul>
                <p className="text-sm text-zinc-400">Travel covered + daily fee &mdash; <a href="mailto:augmentedmike@gmail.com?subject=Bonsai%20In-Person%20Appearance" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">let&apos;s discuss</a></p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── What we can talk about ─── */}
        <section className="mb-28">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-10">What we can talk about</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="px-5 py-2.5 rounded-full text-sm font-medium text-cyan-400/80 bg-cyan-400/5 border border-cyan-400/10"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Receipts ─── */}
        <section className="mb-28">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-6 text-center">We got receipts</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-16 text-center">The story so far</h2>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16">
              {[
                { num: "22", label: "Days to production" },
                { num: "132", label: "Commits shipped" },
                { num: "197", label: "Tickets worked" },
                { num: "12", label: "Projects running" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center rounded-xl border border-white/5 py-6 px-4"
                  style={{
                    background: "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                  }}
                >
                  <div className="text-4xl sm:text-5xl font-black text-white mb-1">{stat.num}</div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="space-y-8">
              {[
                { text: "First commit to production in 22 days.", sub: "Building itself with its own AI team the entire time.", rotate: "rotate-[-1.5deg]", accent: "cyan" },
                { text: "Fully open source. No catch.", sub: "No premium tiers. No gated features. Free to fork, free to run.", rotate: "rotate-[1deg]", accent: "white" },
                { text: "The human is the tastemaker, not the engineer.", sub: "The Sims do the engineering, 24/7.", rotate: "rotate-[-0.5deg]", accent: "pink" },
                { text: "Not a whitepaper. Not a roadmap.", sub: "Shipping code, running in production, every single day.", rotate: "rotate-[1.5deg]", accent: "cyan" },
                { text: "The company itself? Run by an AGI.", sub: "Not a demo. Not a stunt. The real thing.", rotate: "rotate-[-1deg]", accent: "pink" },
              ].map((item) => (
                <div
                  key={item.text}
                  className={`${item.rotate} hover:rotate-0 transition-transform duration-300 rounded-2xl border p-8 sm:p-10 ${
                    item.accent === "cyan"
                      ? "border-cyan-400/15"
                      : item.accent === "pink"
                        ? "border-pink-500/15"
                        : "border-white/10"
                  }`}
                  style={{
                    background:
                      item.accent === "cyan"
                        ? "linear-gradient(145deg, rgba(0,229,255,0.06) 0%, rgba(0,229,255,0.01) 100%)"
                        : item.accent === "pink"
                          ? "linear-gradient(145deg, rgba(236,72,153,0.06) 0%, rgba(236,72,153,0.01) 100%)"
                          : "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                  }}
                >
                  <p className={`text-2xl sm:text-3xl font-bold leading-tight mb-2 ${
                    item.accent === "cyan"
                      ? "text-white"
                      : item.accent === "pink"
                        ? "text-white"
                        : "text-white"
                  }`}>
                    {item.text}
                  </p>
                  <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Blog highlight ─── */}
        {latestPost && (
          <section className="mb-28">
            <div className="max-w-3xl mx-auto">
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

        {/* ─── CTA ─── */}
        <section className="text-center max-w-2xl mx-auto mb-28">
          <div
            className="rounded-2xl border border-cyan-400/10 p-10 sm:p-14"
            style={{
              background: "linear-gradient(145deg, rgba(0,229,255,0.04) 0%, rgba(0,229,255,0.01) 50%, rgba(255,255,255,0.02) 100%)",
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Let&apos;s make something together.
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Have a show, a publication, or a stage? We&apos;d love to be part of it. Drop a line and we&apos;ll get back to you fast.
            </p>
            <a
              href="mailto:augmentedmike@gmail.com?subject=Bonsai%20Press%20Inquiry"
              className="inline-flex px-10 py-4 rounded-xl text-lg font-semibold bg-cyan-300 text-gray-950 hover:bg-cyan-200 transition-colors shadow-lg shadow-cyan-300/30"
            >
              augmentedmike@gmail.com
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
