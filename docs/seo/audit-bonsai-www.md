# SEO Audit — bonsai-www
**URL:** https://bonsai-www.vercel.app  
**Source:** ~/projects/bonsai-www/src/app/  
**Audited:** 2026-02-25  
**Ticket:** #145  

---

## Checklist Results

### 1. Title Tag
**Status: PARTIAL**  
- **Live value:** `Bonsai — The kanban board that not can but does`  
- **Length:** 49 chars (target: 50–60)  
- **Issues:**  
  - One character under the 50-char floor — borderline but acceptable  
  - Grammar error: "that not can but does" should be "that not only can, but does"  
  - layout.tsx still has the *old* title (`"Bonsai — AI-powered developer workspace"`) — source is out of sync with deployed code  
- **Fix:** Update to `Bonsai — The kanban board that not only can, but does` (52 chars ✓)

---

### 2. Meta Description
**Status: FAIL**  
- **Live value:** `Bonsai is an AI-powered kanban board where digital workers build your software for you. Describe what you want. Watch it get built.`  
- **Length:** 131 chars (target: 150–160)  
- **Issues:** 19–29 chars short of the target range; underutilizes SERP real estate  
- **Fix example:** `Bonsai is an AI-powered kanban board where digital workers — researchers, designers, developers — build your software for you. Describe what you want. Watch it get built.` (170 chars — trim slightly)

---

### 3. Canonical Tag
**Status: FAIL**  
- Not present in `<head>` on the live page  
- Risk: if Vercel preview URLs or future custom domain (usebonsai.org) serve the same content, search engines may split link equity or index duplicates  
- **Fix:** Add `<link rel="canonical" href="https://bonsai-www.vercel.app" />` in layout.tsx metadata (or the canonical domain once it's live)

---

### 4. HTML lang Attribute
**Status: PASS**  
- `<html lang="en">` ✓

---

### 5. Open Graph — og:title
**Status: PASS**  
- `Bonsai — The kanban board that not can but does` (has the grammar issue, but present and functional) ✓

---

### 6. Open Graph — og:description
**Status: PASS**  
- `An AI-powered kanban board where digital workers — researchers, designers, developers — execute your tickets autonomously. You describe it. They build it.`  
- Length: ~152 chars ✓ (better than the meta description)

---

### 7. Open Graph — og:image
**Status: PASS**  
- `https://bonsai-www.vercel.app/hero-bg.jpg` — 1200×630 ✓  
- `og:image:alt` present: `"Bonsai — AI-powered kanban board"` ✓

---

### 8. Open Graph — og:url
**Status: PASS**  
- `https://bonsai-www.vercel.app` ✓

---

### 9. Twitter Card
**Status: PASS**  
- `twitter:card` = `summary_large_image` ✓  
- `twitter:title`, `twitter:description`, `twitter:image` all present ✓  
- **Minor gap:** No `twitter:site` or `twitter:creator` handles set

---

### 10. JSON-LD Structured Data
**Status: FAIL**  
- Not present anywhere in the rendered HTML  
- Missing opportunity for rich results (SoftwareApplication, WebSite, or Organization schema)  
- **Fix:** Add a `<script type="application/ld+json">` block in layout.tsx with at minimum a `WebSite` + `SoftwareApplication` schema

---

### 11. Single H1
**Status: PASS**  
- One `<h1>` on the page: "Not a chatbot. / A development team." ✓  
- All subsequent headings use `<h2>` and `<h3>` correctly ✓

---

### 12. Image Alt Text
**Status: PASS**  
- Hero background: `alt=""` — correct for decorative image ✓  
- Bonsai logo (nav): `alt="Bonsai"` ✓  
- Team edit screenshot: `alt="Editing an AI researcher worker in Bonsai"` ✓  
- Board screenshot: `alt="Bonsai kanban board with AI workers building features"` ✓  
- Projects screenshot: `alt="Multiple isolated projects in Bonsai"` ✓  

---

### 13. sitemap.xml
**Status: FAIL**  
- `GET /sitemap.xml` → **404**  
- Crawlers cannot discover pages; this also prevents Google Search Console from submitting a sitemap  
- **Fix:** Add `src/app/sitemap.ts` using Next.js 13+ sitemap API

---

### 14. robots.txt
**Status: FAIL**  
- `GET /robots.txt` → **404**  
- Without robots.txt, crawlers use defaults (fine) but it's best practice to declare sitemap location  
- **Fix:** Add `src/app/robots.ts` using Next.js 13+ robots API

---

### 15. Cross-links to miniclaw.bot
**Status: PASS**  
- Footer → Ecosystem section: `<a href="https://miniclaw.bot">MiniClaw</a>` ✓  
- Renders as a real anchor with text "MiniClaw" — crawlable ✓

---

### 16. Cross-links to blog.augmentedmike.com
**Status: PASS**  
- Footer → Ecosystem: `<a href="https://blog.augmentedmike.com">AugmentedMike Blog</a>` ✓  
- Footer bottom: `<a href="https://blog.augmentedmike.com">augmentedmike.com</a>` ✓  
- Both crawlable ✓

---

## Source Sync Issue (Bonus Finding)
**Status: WARNING**  
- `layout.tsx` contains **stale metadata** that does not match the deployed live site:
  - layout.tsx title: `"Bonsai — AI-powered developer workspace"`  
  - Live title: `"Bonsai — The kanban board that not can but does"`  
  - layout.tsx description: `"Agents work on your tickets while you sleep..."`  
  - Live description: `"Bonsai is an AI-powered kanban board where digital workers..."`  
- The local `page.tsx` also shows an older layout vs. what's deployed  
- **Risk:** If someone re-deploys from the current source, it will overwrite the better live metadata with the stale values  
- **Fix:** Update layout.tsx and page.tsx to match (or supersede) the deployed version before the next deploy

---

## Summary Table

| Check | Status | Priority |
|---|---|---|
| Title (50–60 chars + grammar) | PARTIAL | P2 |
| Meta description (150–160 chars) | FAIL | P2 |
| Canonical tag | FAIL | P1 |
| HTML lang | PASS | — |
| og:title | PASS | — |
| og:description | PASS | — |
| og:image | PASS | — |
| og:url | PASS | — |
| Twitter card | PASS | — |
| JSON-LD structured data | FAIL | P1 |
| Single H1 | PASS | — |
| Image alt text | PASS | — |
| sitemap.xml | FAIL | P1 |
| robots.txt | FAIL | P1 |
| Cross-link: miniclaw.bot | PASS | — |
| Cross-link: blog.augmentedmike.com | PASS | — |
| Source sync (layout.tsx) | WARNING | P2 |

**Score: 9 PASS / 4 FAIL / 1 PARTIAL / 1 WARNING**

---

## Fix List

### P1 — Critical (blocking crawl or indexing)

**P1-1: Add sitemap.xml**  
Create `src/app/sitemap.ts`:
```ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://bonsai-www.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://bonsai-www.vercel.app/see-it-in-action',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
```

**P1-2: Add robots.txt**  
Create `src/app/robots.ts`:
```ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://bonsai-www.vercel.app/sitemap.xml',
  }
}
```

**P1-3: Add canonical tag**  
In `layout.tsx` metadata export, add:
```ts
alternates: {
  canonical: 'https://bonsai-www.vercel.app',
},
```
(Update to custom domain once usebonsai.org is the primary URL)

**P1-4: Add JSON-LD structured data**  
Add to `layout.tsx` `<head>` or as a component:
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Bonsai",
  "description": "An AI-powered kanban board where digital workers execute your tickets autonomously.",
  "url": "https://bonsai-www.vercel.app",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}
```

---

### P2 — Important (SERP performance)

**P2-1: Fix meta description length (131 → 150–160 chars)**  
Suggested: `"Bonsai is an AI-powered kanban board where your AI team — researchers, designers, developers — builds software for you. Describe it. Watch it ship."` (149 chars)

**P2-2: Fix title grammar and length**  
`"Bonsai — The kanban board that not only can, but does"` (53 chars ✓, grammatically correct)

**P2-3: Sync layout.tsx with deployed metadata**  
The deployed site has better copy than what's in source. Reconcile before next deploy.

---

### P3 — Nice to have

**P3-1: Add twitter:site handle**  
```ts
twitter: {
  site: '@augmentedmike', // or whatever the handle is
  creator: '@augmentedmike',
  // ... existing fields
}
```

**P3-2: Add og:locale**  
```ts
openGraph: {
  locale: 'en_US',
  // ... existing fields
}
```

**P3-3: Consider inline cross-links**  
Currently miniclaw.bot and blog.augmentedmike.com only appear in the footer. Adding contextual inline links (e.g., in the "Built by" or features sections) would pass more link equity and improve discoverability.

---

*Generated by AugmentedMike SEO cron — Ticket #145*
