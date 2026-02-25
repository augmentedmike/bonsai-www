import { chromium } from '../node_modules/playwright/index.mjs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, '../public/screenshots/in-action');
const BASE = 'http://localhost:3080';

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1600, height: 900 } });
const page = await ctx.newPage();

async function go(url, label) {
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 20000 });
    // Wait for React to hydrate
    await page.waitForTimeout(3000);
    return true;
  } catch(e) {
    console.log(`  ✗ nav to ${url}: ${e.message.slice(0,80)}`);
    return false;
  }
}

async function shot(file, url, fn) {
  console.log(`  → ${file}`);
  const ok = await go(url);
  if (!ok) { console.log(`  ✗ ${file}: nav failed`); return; }
  if (fn) { try { await fn(page); } catch(e) { console.log(`    fn err: ${e.message.slice(0,80)}`); } }
  await page.waitForTimeout(800);
  await page.screenshot({ path: `${OUT}/${file}`, fullPage: false });
  console.log(`  ✓ ${file}`);
}

// Discover project slug
await go(`${BASE}/board`);
const finalUrl = page.url();
console.log('App landed at:', finalUrl);
// e.g. http://localhost:3080/p/am-blog/board
const slugMatch = finalUrl.match(/\/p\/([^\/]+)/);
const slug = slugMatch ? slugMatch[1] : null;
console.log('Project slug:', slug);

// Also get page content for link discovery
const html = await page.content().catch(()=>'');
const links = html.match(/href="([^"]+)"/g)?.map(m => m.replace(/href="/,'').replace(/"$/,'')) || [];
console.log('Links found:', [...new Set(links)].filter(l=>l.startsWith('/')).slice(0,20));

const P = slug ? `${BASE}/p/${slug}` : `${BASE}/board`;

// Board
await shot('project-1-board.png', `${P}/board`);
await shot('dogfooding.png', `${P}/board`);

// New ticket form
await shot('new-ticket-empty.png', `${P}/new-ticket`, async p => {
  await p.waitForTimeout(1500);
});

// Team pages
await shot('team-edit-researcher-female.png', `${P}/team`, async p => {
  await p.waitForTimeout(2000);
  // Click first team member card
  const card = await p.$('[class*="persona"], [class*="member"], [class*="agent"], button[class*="card"], li button').catch(()=>null);
  if (card) { await card.click(); await p.waitForTimeout(1000); }
});
await shot('team-edit-researcher-female-2.png', `${P}/team`, async p => {
  await p.waitForTimeout(2000);
  const cards = await p.$$('[class*="persona"], [class*="member"], li, [role="listitem"]');
  if (cards[1]) { await cards[1].click(); await p.waitForTimeout(1000); }
  else if (cards[0]) { await cards[0].click(); await p.waitForTimeout(1000); }
});
await shot('team-edit-designer-male.png', `${P}/team`, async p => {
  await p.waitForTimeout(2000);
  const cards = await p.$$('[class*="persona"], [class*="member"], li, [role="listitem"]');
  if (cards[2]) { await cards[2].click(); await p.waitForTimeout(1000); }
  else if (cards[1]) { await cards[1].click(); await p.waitForTimeout(1000); }
});
await shot('team-edit-developer-male.png', `${P}/team`, async p => {
  await p.waitForTimeout(2000);
  const cards = await p.$$('[class*="persona"], [class*="member"], li, [role="listitem"]');
  if (cards[3]) { await cards[3].click(); await p.waitForTimeout(1000); }
  else if (cards[2]) { await cards[2].click(); await p.waitForTimeout(1000); }
});

// Find a ticket
const boardLinks = (html.match(/\/p\/[^"]+\/t\/[^"]+/g) || []).filter((v,i,a)=>a.indexOf(v)===i);
console.log('Ticket links from HTML:', boardLinks.slice(0,5));

// Try board and extract ticket links after load
await go(`${P}/board`);
await page.waitForTimeout(3000);
const boardHtml = await page.content().catch(()=>'');
const ticketLinks = (boardHtml.match(/\/p\/[^"']+\/t\/[^"']+/g) || [])
  .filter((v,i,a)=>a.indexOf(v)===i)
  .filter(l => !l.includes('undefined'));
console.log('Ticket links from board:', ticketLinks.slice(0,5));

if (ticketLinks.length > 0) {
  const T = `${BASE}${ticketLinks[0]}`;
  await shot('planning-research.png', T, async p => { await p.waitForTimeout(2000); });
  await shot('planning-implementation-plan.png', T, async p => {
    await p.waitForTimeout(2000);
    const tabs = await p.$$('[role="tab"]');
    for (const tab of tabs) {
      const t = await tab.textContent().catch(()=>'');
      if (/plan|research|impl/i.test(t)) { await tab.click(); await p.waitForTimeout(1200); break; }
    }
  });
  await shot('project-chat.png', T, async p => {
    await p.waitForTimeout(2000);
    const tabs = await p.$$('[role="tab"]');
    for (const tab of tabs) {
      const t = await tab.textContent().catch(()=>'');
      if (/chat|message|discuss|comm/i.test(t)) { await tab.click(); await p.waitForTimeout(1200); break; }
    }
  });
  await shot('project-1-live-preview-4.png', T, async p => {
    await p.waitForTimeout(2000);
    const tabs = await p.$$('[role="tab"]');
    for (const tab of tabs) {
      const t = await tab.textContent().catch(()=>'');
      if (/preview|live/i.test(t)) { await tab.click(); await p.waitForTimeout(2000); break; }
    }
  });
}

await browser.close();
import { readdirSync } from 'fs';
const files = readdirSync(OUT);
console.log(`\nDone. ${files.length} screenshots: ${files.join(', ')}`);
