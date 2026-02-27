"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export function StickyNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 bg-gray-950/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-8 max-w-6xl mx-auto w-full">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/bonsai-logo.png"
            alt="Bonsai"
            width={32}
            height={32}
            className={`rounded-lg transition-all duration-300 ${scrolled ? "scale-90" : "scale-100"}`}
          />
          <span
            className={`font-semibold tracking-tight text-white transition-all duration-300 ${
              scrolled ? "text-base" : "text-lg"
            }`}
          >
            Bonsai
          </span>
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
            href="/support"
            className="text-sm text-zinc-300 hover:text-white transition-colors"
          >
            Support
          </Link>
          <a
            href="#get-started"
            className={`text-sm font-medium rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 ${
              scrolled ? "px-3 py-1.5" : "px-4 py-2"
            }`}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
