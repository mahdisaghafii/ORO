// Generates the page's derived images with the gate's own browser (Playwright + Chromium), so nothing else is needed on the machine:
//
//   node make-assets.mjs            both of the below
//   node make-assets.mjs --webp     assets/*-poster.webp for every poster JPG the page names in its MEDIA table
//   node make-assets.mjs --og       assets/og.jpg (1200x630), the link-preview card, rendered from the page's intro screen
//
// Rerun it when a poster JPG or the intro screen changes, and commit the results. Both are deterministic: the WebP quality is picked
// from a fixed ladder, and the card is drawn with reduced motion and the clips blocked, so the screen shows the poster frame.
//
// WebP: each file must come out at most 60% of its JPG (the plan's budget) and at least MIN_PSNR dB like the JPG it replaces;
// the script takes the highest quality on the ladder that meets the size limit and fails if none does.

import { chromium } from 'playwright';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..');
const ASSETS = path.join(ROOT, 'assets');
const argv = process.argv.slice(2);
const only = argv.includes('--webp') ? 'webp' : argv.includes('--og') ? 'og' : 'both';

const MAX_RATIO = 0.6;
const MIN_PSNR = 36; // dB against the decoded JPG
const LADDER = [0.92, 0.9, 0.88, 0.86, 0.84, 0.82, 0.8, 0.78, 0.76, 0.74, 0.72, 0.7, 0.66, 0.62, 0.58, 0.54, 0.5];
const kb = (n) => (n / 1024).toFixed(1) + ' KB';

async function webps(browser) {
  const page = await browser.newPage();
  // The posters the page really uses, read from its MEDIA table (assets nobody references are never shipped, so they get no WebP).
  const html = fs.readFileSync(path.join(ROOT, 'showcase.html'), 'utf8');
  const jpgs = [...new Set([...html.matchAll(/assets\/([\w-]+-poster\.jpg)/g)].map((m) => m[1]))].sort();
  let bad = 0;
  for (const f of jpgs) {
    const jpg = fs.readFileSync(path.join(ASSETS, f));
    // In the page: decode the JPG, then try each quality on the ladder; return the first (highest) that is small enough.
    const r = await page.evaluate(async ({ b64, ladder, limit }) => {
      const img = new Image(); img.src = 'data:image/jpeg;base64,' + b64; await img.decode();
      const c = document.createElement('canvas'); c.width = img.naturalWidth; c.height = img.naturalHeight;
      const x = c.getContext('2d', { willReadFrequently: true }); x.drawImage(img, 0, 0);
      const ref = x.getImageData(0, 0, c.width, c.height).data;
      const out = []; // every rung, so a failure can say how close it got
      for (const q of ladder) {
        const url = c.toDataURL('image/webp', q);
        if (!url.startsWith('data:image/webp')) throw new Error('this Chromium cannot encode WebP');
        const back = new Image(); back.src = url; await back.decode();
        const d = document.createElement('canvas'); d.width = c.width; d.height = c.height;
        const dx = d.getContext('2d', { willReadFrequently: true }); dx.drawImage(back, 0, 0);
        const got = dx.getImageData(0, 0, c.width, c.height).data;
        let se = 0, n = 0; for (let i = 0; i < ref.length; i += 4) for (let k = 0; k < 3; k++) { const e = ref[i + k] - got[i + k]; se += e * e; n++; }
        const psnr = se ? 10 * Math.log10(255 * 255 / (se / n)) : 99;
        const bytes = Math.floor((url.length - url.indexOf(',') - 1) * 3 / 4);
        out.push({ q, bytes, psnr, url });
        if (bytes <= limit) return { w: c.width, h: c.height, pick: out.at(-1), out: out.map(({ q, bytes, psnr }) => ({ q, bytes, psnr })) };
      }
      return { w: c.width, h: c.height, pick: null, out: out.map(({ q, bytes, psnr }) => ({ q, bytes, psnr })) };
    }, { b64: jpg.toString('base64'), ladder: LADDER, limit: Math.floor(jpg.length * MAX_RATIO) });
    const name = f.replace(/\.jpg$/, '.webp');
    if (!r.pick) { bad++; console.log(`FAIL  ${name}: no quality on the ladder gets under ${MAX_RATIO * 100}% of ${kb(jpg.length)} (best ${kb(r.out.at(-1).bytes)})`); continue; }
    if (r.pick.psnr < MIN_PSNR) { bad++; console.log(`FAIL  ${name}: ${r.pick.psnr.toFixed(1)} dB at q=${r.pick.q}, under ${MIN_PSNR} dB`); continue; }
    fs.writeFileSync(path.join(ASSETS, name), Buffer.from(r.pick.url.slice(r.pick.url.indexOf(',') + 1), 'base64'));
    console.log(`ok    ${name}  ${r.w}x${r.h}  ${kb(jpg.length)} jpg -> ${kb(r.pick.bytes)} webp (${Math.round(r.pick.bytes / jpg.length * 100)}%)  q=${r.pick.q}  ${r.pick.psnr.toFixed(1)} dB`);
  }
  await page.close();
  return bad;
}

function serve(root) { // a plain static server; the page needs http, not file://
  const srv = http.createServer((req, res) => {
    const file = path.join(root, decodeURIComponent(new URL(req.url, 'http://x').pathname));
    if (!file.startsWith(root) || !fs.existsSync(file) || !fs.statSync(file).isFile()) { res.writeHead(404); return res.end(); }
    res.writeHead(200, { 'Content-Type': { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.woff2': 'font/woff2', '.jpg': 'image/jpeg', '.webp': 'image/webp' }[path.extname(file)] || 'application/octet-stream' });
    fs.createReadStream(file).pipe(res);
  });
  return new Promise((ok) => srv.listen(0, '127.0.0.1', () => ok(srv)));
}

async function og(browser) {
  const srv = await serve(ROOT);
  // A desktop-shaped 1200x630 at 1x: the wide layout puts the phone beside the intro text. Reduced motion keeps the phone still.
  const ctx = await browser.newContext({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1, locale: 'fa-IR', reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  await page.route('**/*.mp4', (r) => r.abort()); // no clip, so the phone shows its poster frame instead of whatever second the clip is on
  await page.goto(`http://127.0.0.1:${srv.address().port}/showcase.html`, { waitUntil: 'load' });
  await page.addStyleTag({ content: '.proto, .hint { display: none !important; }' }); // the prototype badge and the scroll hint are not part of a link card
  await page.waitForFunction(() => getComputedStyle(document.querySelector('.sec .txt h1')).opacity === '1', null, { timeout: 15000 });
  await page.evaluate(() => document.fonts.ready);
  // Wait for the 3D path itself (three.js loaded, the canvas still in place), then let the poster draw and the phone settle.
  await page.waitForFunction(() => typeof THREE !== 'undefined' && !!document.getElementById('gl'), null, { timeout: 15000 });
  await page.waitForTimeout(1500);
  const file = path.join(ASSETS, 'og.jpg');
  await page.screenshot({ path: file, type: 'jpeg', quality: 86 });
  await srv.close();
  console.log(`ok    og.jpg  1200x630  ${kb(fs.statSync(file).size)}`);
}

const browser = await chromium.launch({ channel: 'chromium', headless: true });
let bad = 0;
try {
  if (only !== 'og') bad += await webps(browser);
  if (only !== 'webp') await og(browser);
} finally { await browser.close(); }
process.exit(bad ? 1 : 0);
