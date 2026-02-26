import type { NextConfig } from "next";

// NEXT_PUBLIC_HOST must be set in the Vercel dashboard (Project → Settings → Environment Variables):
//   Key:   NEXT_PUBLIC_HOST
//   Value: https://bonsai-www.vercel.app   (or your canonical custom domain, e.g. https://usebonsai.org)
//   Environments: Production, Preview, Development
//
// This value is used for canonical URLs, OG tags, sitemap, and robots.txt.
// Changing it updates all absolute URLs across the site in one place.

const nextConfig: NextConfig = {
  reactCompiler: true,
  env: {
    // Expose a build-time fallback so the site always has a sensible canonical
    // URL even when NEXT_PUBLIC_HOST is not explicitly set.
    NEXT_PUBLIC_HOST: process.env.NEXT_PUBLIC_HOST ?? "https://bonsai-www.vercel.app",
  },
};

export default nextConfig;
