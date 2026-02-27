"use client";

import { useEffect, useState } from "react";

interface LatestPost {
  title: string;
  subtitle: string;
  slug: string;
  date: string;
  author: string;
  url: string;
  thumbnail: string;
}

export function AugmentedMikeCard() {
  const [post, setPost] = useState<LatestPost | null>(null);

  useEffect(() => {
    fetch("https://blog.augmentedmike.com/latest.json")
      .then((r) => r.json())
      .then(setPost)
      .catch(() => {});
  }, []);

  if (!post) return null;

  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col sm:flex-row items-center gap-8 rounded-2xl border border-pink-500/10 p-8 sm:p-10 hover:border-pink-500/20 transition-colors"
      style={{
        background:
          "linear-gradient(145deg, rgba(236,72,153,0.04) 0%, rgba(236,72,153,0.01) 50%, rgba(255,255,255,0.02) 100%)",
      }}
    >
      {/* Comic thumbnail */}
      <div className="shrink-0 w-[140px] h-[216px] rounded-xl overflow-hidden border border-white/10 rotate-[-2deg] group-hover:rotate-0 transition-transform duration-300 shadow-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.thumbnail}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Text */}
      <div className="text-center sm:text-left">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-pink-400 mb-3">
          Latest from the blog
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
          &ldquo;{post.title}&rdquo;
        </h3>
        <p className="text-sm text-zinc-400 leading-relaxed mb-3">
          {post.subtitle}
        </p>
        <span className="text-xs text-zinc-500">
          by {post.author} &middot; {post.date}
        </span>
        <div className="mt-3">
          <span className="text-sm text-pink-400 font-medium group-hover:text-pink-300 transition-colors">
            Read on the blog &rarr;
          </span>
        </div>
      </div>
    </a>
  );
}
