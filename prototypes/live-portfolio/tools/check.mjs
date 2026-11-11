// The live portfolio's verification gate. Serves the page locally, opens it in headless Chromium
// as a phone (390x844 at 3x, touch), and checks what a viewer would see. Exits 1 if any check fails.
//
//   node check.mjs                      3D page, every default check
//   node check.mjs --no-webgl           the same checks with WebGL switched off (the flat fallback)
//   node check.mjs --page "showcase.html?mode=flat"     the same checks on the flat path forced by the URL (WebGL left on)
//   node check.mjs --local-only         also fail on any request to a host other than this server
//   node check.mjs --budget             also time the first screen on a throttled "Fast 3G" connection, and check what keeps it light:
//                                       three.js requested only after the first paint (never on the flat path), far-off clips not loading, WebP posters (<= 60% of the JPG) in use,
//                                       nothing inlined over 14 KB, and the link-preview tags and og.jpg (1200x630) in place
//   node check.mjs --root ../dist --page index.html     check the release build instead
//   node check.mjs --update-baseline    rewrite baseline/layout.json from the current page (only when a layout change is intended)
//
// Default checks: no page errors, no console errors, the Vazirmatn font is in use, every chapter plays its own
// clip and no other, a tap on the phone opens the full-screen replay and ✕ closes it, and the text layout
// matches baseline/layout.json (a font or CSS regression moves it). Screenshots of each chapter go to out/.
// The page logs which path it took ("[lp] mode: 3d" or "[lp] mode: flat (...)"); the check expects the flat path with --no-webgl or
// mode=flat in the page URL, the 3D path otherwise, and that the 3D canvas is gone exactly when flat.

import { chromium } from 'playwright';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const argv = process.argv.slice(2);
const flag = (n) => argv.includes(n);
const opt = (n, d) => { const i = argv.indexOf(n); return i >= 0 ? argv[i + 1] : d; };

const ROOT = path.resolve(HERE, opt('--root', '..'));
const PAGE = opt('--page', 'showcase.html');
const NO_WEBGL = flag('--no-webgl');
const LOCAL_ONLY = flag('--local-only');
const BUDGET = flag('--budget');
const UPDATE = flag('--update-baseline');
const FLAT = NO_WEBGL || /[?&]mode=flat\b/.test(PAGE); // the path the page must take
const OUT = path.join(HERE, 'out', NO_WEBGL ? 'no-webgl' : FLAT ? 'flat' : '3d');
const BASELINE = path.join(HERE, 'baseline', 'layout.json');

// Which clip each chapter (section[data-k]) must be playing. Keep in step with MEDIA/CH in the page.
const CHAPTER_CLIPS = ['oro-profile.mp4', 'col-01-teaser.mp4', 'qeleq-01-signal.mp4', 'chid-01-design.mp4', 'oro-profile.mp4', 'oro-profile.mp4'];
const TAP_CHAPTER = 3; // the Chid chapter: a portrait clip on the phone
const BUDGET_FCP_MS = 3000; // brief: usable within ~3 s on a slow connection
const BUDGET_FIRST_SCREEN_BYTES = 400 * 1024; // everything finished before first paint
const INLINE_MAX_BYTES = 14 * 1024; // a data: URI bigger than this belongs in a file
const WEBP_MAX_RATIO = 0.6; // each poster's WebP against its JPG
const LAYOUT_TOLERANCE_PX = 2;

const results = [];
const pass = (name, detail = '') => results.push({ ok: true, name, detail });
const fail = (name, detail = '') => results.push({ ok: false, name, detail });

// ---------- a static server with byte ranges (iOS and Chrome seek video with them) ----------
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json',
  '.mp4': 'video/mp4', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2', '.woff': 'font/woff', '.ico': 'image/x-icon', '.txt': 'text/plain; charset=utf-8' };
function serve(root) {
  const srv = http.createServer((req, res) => {
    const rel = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    const file = path.join(root, rel.endsWith('/') ? rel + 'index.html' : rel);
    if (!file.startsWith(root) || !fs.existsSync(file) || !fs.statSync(file).isFile()) { res.writeHead(404); return res.end(); }
    const size = fs.statSync(file).size, type = TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream';
    const m = /bytes=(\d*)-(\d*)/.exec(req.headers.range || '');
    if (m) {
      const start = m[1] ? +m[1] : size - +m[2], end = m[1] && m[2] ? Math.min(+m[2], size - 1) : size - 1;
      res.writeHead(206, { 'Content-Type': type, 'Content-Length': end - start + 1, 'Content-Range': `bytes ${start}-${end}/${size}`, 'Accept-Ranges': 'bytes' });
      return fs.createReadStream(file, { start, end }).pipe(res);
    }
    res.writeHead(200, { 'Content-Type': type, 'Content-Length': size, 'Accept-Ranges': 'bytes' });
    fs.createReadStream(file).pipe(res);
  });
  return new Promise((ok) => srv.listen(0, '127.0.0.1', () => ok(srv)));
}

const PHONE = {
  viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true, locale: 'fa-IR',
  userAgent: 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36',
};
const ARGS = ['--hide-scrollbars', '--force-device-scale-factor=3', '--autoplay-policy=no-user-gesture-required',
  ...(NO_WEBGL ? ['--disable-webgl', '--disable-webgl2', '--disable-3d-apis'] : [])];

// Every <video> the page makes, in or out of the DOM (the 3D page draws them into a texture and never attaches them).
const TRACK_VIDEOS = () => {
  window.__videos = [];
  const make = Document.prototype.createElement;
  Document.prototype.createElement = function (tag, ...rest) {
    const el = make.call(this, tag, ...rest);
    if (String(tag).toLowerCase() === 'video') window.__videos.push(el);
    return el;
  };
};

async function chapterReport(page) {
  return page.evaluate(() => {
    const all = new Set([...window.__videos, ...document.querySelectorAll('video')]);
    return [...all].filter((v) => v.id !== 'vvid').map((v) => ({ src: (v.currentSrc || v.src || '').split('/').pop(), playing: !v.paused && !v.ended, t: v.currentTime, ready: v.readyState }));
  });
}

async function layoutSnapshot(page) {
  return page.evaluate(() => [...document.querySelectorAll('.sec')].map((s) =>
    [...s.querySelectorAll('.txt > *')].map((el) => { const r = el.getBoundingClientRect(), top = s.getBoundingClientRect().top;
      return { tag: el.tagName.toLowerCase(), x: Math.round(r.x), y: Math.round(r.y - top), w: Math.round(r.width), h: Math.round(r.height) }; })));
}

// What the files themselves must hold, read from disk (no browser needed): WebP posters, small inlines, link-preview tags.
function jpegSize(file) { // width x height from the JPEG's start-of-frame marker
  const b = fs.readFileSync(file);
  for (let i = 2; i + 9 < b.length;) {
    if (b[i] !== 0xff) { i++; continue; }
    const m = b[i + 1];
    if (m >= 0xc0 && m <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(m)) return { w: b.readUInt16BE(i + 7), h: b.readUInt16BE(i + 5) };
    i += 2 + b.readUInt16BE(i + 2);
  }
  return null;
}
function staticBudgetChecks() {
  const html = fs.readFileSync(path.join(ROOT, PAGE.split('?')[0]), 'utf8');
  // Posters: every JPG the page names has a WebP next to it, at most 60% of its size.
  const names = [...new Set([...html.matchAll(/assets\/([\w-]+-poster)\.jpg/g)].map((m) => m[1]))], rows = [];
  for (const n of names) {
    const j = path.join(ROOT, 'assets', n + '.jpg'), w = path.join(ROOT, 'assets', n + '.webp');
    if (!fs.existsSync(w)) { rows.push(`${n}.webp missing`); continue; }
    const r = fs.statSync(w).size / fs.statSync(j).size;
    if (r > WEBP_MAX_RATIO) rows.push(`${n}.webp is ${Math.round(r * 100)}% of its JPG`);
    if (!html.includes(`assets/${n}.webp`)) rows.push(`${n}.webp is not named in the page`);
  }
  names.length && !rows.length ? pass('budget: every poster has a WebP at most 60% of its JPG', `${names.length} posters`) : fail('budget: every poster has a WebP at most 60% of its JPG', rows.join('; ') || 'the page names no poster');
  // Nothing big inlined: a data: URI over 14 KB should be a file.
  const big = [...html.matchAll(/data:[a-z/+.-]+;base64,[A-Za-z0-9+/=]+/g)].filter((m) => m[0].length * 3 / 4 > INLINE_MAX_BYTES);
  big.length ? fail('budget: nothing inlined over 14 KB', `${big.length} data: URI(s), largest ${Math.round(Math.max(...big.map((m) => m[0].length)) * 3 / 4 / 1024)} KB`) : pass('budget: nothing inlined over 14 KB');
  // Link preview: the tags a chat app reads, the approved text, and a card image of the right size.
  // og:image/og:url need an absolute URL, which only a build given --base-url can write. The source page keeps a relative og:image and has no og:url;
  // a release build (no showcase.html beside it) made without a base URL has neither, and that is allowed. Either way the rest must be there.
  const meta = (attr, name) => (new RegExp(`<meta\\s+${attr}="${name}"\\s+content="([^"]*)"`).exec(html) || [])[1];
  const need = { title: meta('property', 'og:title'), description: meta('property', 'og:description'), image: meta('property', 'og:image'), type: meta('property', 'og:type'), card: meta('name', 'twitter:card') };
  const ogUrl = meta('property', 'og:url'), release = !fs.existsSync(path.join(ROOT, 'showcase.html'));
  const noBase = release && !need.image && !ogUrl;
  const miss = Object.entries(need).filter(([k, v]) => !v && !(noBase && k === 'image')).map(([k]) => k);
  const pageTitle = (/<title>([^<]*)<\/title>/.exec(html) || [])[1], pageDesc = meta('name', 'description');
  const problems = [...miss.map((k) => `no ${k}`)];
  if (need.type && need.type !== 'website') problems.push(`og:type is ${need.type}`);
  if (need.card && need.card !== 'summary_large_image') problems.push(`twitter:card is ${need.card}`);
  if (need.title && need.title !== pageTitle) problems.push('og:title differs from the <title>');
  if (need.description && need.description !== pageDesc) problems.push('og:description differs from the description');
  if (ogUrl && !need.image) problems.push('og:url without og:image');
  if (need.image) {
    // A relative og:image is a path from the page's folder. An absolute one is the page's own address (og:url) plus that path: find the file by what follows it.
    let rel = need.image;
    if (/^https?:\/\//.test(need.image)) {
      if (!ogUrl) problems.push('og:image is absolute but there is no og:url');
      else if (!need.image.startsWith(ogUrl)) problems.push(`og:image ${need.image} is not under og:url ${ogUrl}`);
      else rel = need.image.slice(ogUrl.length);
    }
    const img = path.join(ROOT, rel), dim = fs.existsSync(img) ? jpegSize(img) : null;
    if (!dim) problems.push(`og:image ${need.image} is missing or not a JPEG (looked for ${rel})`); else if (dim.w !== 1200 || dim.h !== 630) problems.push(`og:image is ${dim.w}x${dim.h}, not 1200x630`);
  }
  noBase && !problems.length ? pass('preview: link-preview tags (release build without a base URL: no og:image, no og:url)') :
  problems.length ? fail('preview: link-preview tags and og.jpg', problems.join('; ')) : pass('preview: link-preview tags and og.jpg', `og:image ${need.image}, 1200x630`);
}

async function main() {
  const srv = await serve(ROOT);
  const base = `http://127.0.0.1:${srv.address().port}`;
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({ channel: 'chromium', headless: true, args: ARGS }); // the full Chromium build (new headless), not the shell: it honours the 3x density
  const ctx = await browser.newContext(PHONE);
  await ctx.addInitScript(TRACK_VIDEOS);
  const page = await ctx.newPage();

  const errors = [], hosts = new Map(), modes = [], allUrls = [];
  page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
  // A failed load is reported by URL from the response below; the console's copy of it carries no URL.
  // With WebGL off, three.js logging that it couldn't make a context is the expected way into the fallback.
  const expected = (t) => /^Failed to load resource/.test(t) || (NO_WEBGL && /Error creating WebGL context/.test(t));
  page.on('console', (m) => {
    if (m.type() === 'error' && !expected(m.text())) errors.push('console: ' + m.text());
    if (m.type() === 'info' && /^\[lp\] mode:/.test(m.text())) modes.push(m.text());
  });
  page.on('response', (r) => { if (r.status() >= 400 && !/\/favicon\.ico$/.test(r.url())) errors.push(`HTTP ${r.status()}: ${r.url()}`); });
  page.on('request', (r) => { allUrls.push(r.url()); const h = new URL(r.url()).host; if (!r.url().startsWith('data:')) hosts.set(h, (hosts.get(h) || 0) + 1); });

  // ---------- first screen on a throttled connection ----------
  if (BUDGET) {
    const cdp = await ctx.newCDPSession(page);
    await cdp.send('Network.enable');
    // Lighthouse's "slow 4G" / Chrome's "Fast 3G": 150 ms RTT (x3.75 for the request), 1.6 Mbps down, 750 Kbps up.
    await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 562.5, downloadThroughput: (1.6 * 1024 * 1024) / 8 * 0.9, uploadThroughput: (750 * 1024) / 8 * 0.9 });
    const done = [], urlOf = new Map();
    cdp.on('Network.requestWillBeSent', (e) => urlOf.set(e.requestId, e.request.url));
    cdp.on('Network.loadingFinished', (e) => done.push({ ts: e.timestamp, bytes: e.encodedDataLength, url: urlOf.get(e.requestId) || '' }));
    await page.goto(`${base}/${PAGE}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForFunction(() => performance.getEntriesByName('first-contentful-paint').length, null, { timeout: 30000 }).catch(() => {});
    const fcp = await page.evaluate(() => performance.getEntriesByName('first-contentful-paint')[0]?.startTime ?? null);
    // Give the 3D path time to ask for three.js (it waits for the page's load); the flat path never does, so there is nothing to wait for.
    if (!FLAT) await page.waitForFunction(() => performance.getEntriesByType('resource').some((e) => /\/three\.min\.js/.test(e.name)), null, { timeout: 20000 }).catch(() => {});
    await page.waitForTimeout(500);
    // CDP timestamps are monotonic seconds, so count from the first finished response (the HTML).
    const firstTs = done.length ? Math.min(...done.map((d) => d.ts)) : 0;
    const bytesBeforeFcp = done.filter((d) => fcp != null && d.ts - firstTs <= fcp / 1000).reduce((a, d) => a + d.bytes, 0);
    fcp != null && fcp <= BUDGET_FCP_MS ? pass('budget: first paint on Fast 3G', `${Math.round(fcp)} ms`) : fail('budget: first paint on Fast 3G', `${fcp == null ? 'never' : Math.round(fcp) + ' ms'} (limit ${BUDGET_FCP_MS})`);
    bytesBeforeFcp <= BUDGET_FIRST_SCREEN_BYTES ? pass('budget: bytes before first paint', `${Math.round(bytesBeforeFcp / 1024)} KB`) : fail('budget: bytes before first paint', `${Math.round(bytesBeforeFcp / 1024)} KB (limit ${BUDGET_FIRST_SCREEN_BYTES / 1024} KB)`);
    // three.js is 600 KB, so it must not be asked for until the first screen has painted. Test when it was REQUESTED (the finish time would
    // pass on any slow link): its resource-timing start is on the same clock as the first paint. On a flat run it must not be requested at all.
    const threeReq = await page.evaluate(() => { const r = performance.getEntriesByType('resource').find((e) => /\/three\.min\.js/.test(e.name)); return r ? r.startTime : null; });
    if (FLAT) threeReq == null ? pass('budget: three.js is never fetched on the flat path') : fail('budget: three.js is never fetched on the flat path', `requested at ${Math.round(threeReq)} ms`);
    else if (threeReq == null) fail('budget: three.js is requested only after the first paint', 'never requested on the 3D path');
    else fcp != null && threeReq >= fcp ? pass('budget: three.js is requested only after the first paint', `requested at ${Math.round(threeReq)} ms, first paint at ${Math.round(fcp)} ms`)
      : fail('budget: three.js is requested only after the first paint', `requested at ${Math.round(threeReq)} ms, first paint at ${fcp == null ? 'never' : Math.round(fcp) + ' ms'}`);
    await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 0, downloadThroughput: -1, uploadThroughput: -1 });
    await page.reload({ waitUntil: 'load', timeout: 60000 });
  } else {
    await page.goto(`${base}/${PAGE}`, { waitUntil: 'load', timeout: 60000 });
  }
  await page.waitForTimeout(3000);

  // ---------- the budget's other promises (the page at the top, before any scrolling) ----------
  if (BUDGET) {
    // A clip loads only when its chapter is near: at the top that is the first chapter and the one after it, no further.
    const started = [...new Set((await chapterReport(page)).filter((v) => v.src).map((v) => v.src))];
    const allowed = [CHAPTER_CLIPS[0], CHAPTER_CLIPS[1]], extra = started.filter((c) => !allowed.includes(c));
    extra.length ? fail('budget: far-off clips wait', `already loading at the top: ${extra.join(', ')}`) : pass('budget: far-off clips wait', started.length ? `loading: ${started.join(', ')}` : 'none loading yet');
    staticBudgetChecks();
  }

  // ---------- font ----------
  const font = await page.evaluate(async () => { await document.fonts.ready; return { ok: document.fonts.check('700 24px Vazirmatn') && [...document.fonts].some((f) => /Vazirmatn/i.test(f.family) && f.status === 'loaded'), family: getComputedStyle(document.querySelector('h1')).fontFamily }; });
  font.ok ? pass('font: Vazirmatn loaded and used') : fail('font: Vazirmatn loaded and used', `h1 font-family: ${font.family}`);

  // ---------- chapters ----------
  const n = await page.locator('.sec').count();
  n === CHAPTER_CLIPS.length ? pass('chapters: count', String(n)) : fail('chapters: count', `${n}, expected ${CHAPTER_CLIPS.length}; update CHAPTER_CLIPS`);
  const layout = [];
  for (let k = 0; k < n; k++) {
    await page.evaluate((k) => scrollTo({ top: document.querySelectorAll('.sec')[k].offsetTop, behavior: 'instant' }), k);
    await page.waitForTimeout(k === 0 ? 1500 : 3500);
    const a = await chapterReport(page);
    await page.waitForTimeout(600);
    const b = await chapterReport(page);
    const want = CHAPTER_CLIPS[k];
    const mine = b.filter((v) => v.src === want);
    const advancing = mine.some((v) => v.playing && v.ready >= 2 && a.some((p) => p.src === want && v.t !== p.t));
    advancing ? pass(`chapter ${k}: plays ${want}`) : fail(`chapter ${k}: plays ${want}`, JSON.stringify(b));
    const others = b.filter((v) => v.playing && v.src !== want).map((v) => v.src);
    others.length ? fail(`chapter ${k}: only its own clip plays`, others.join(', ')) : pass(`chapter ${k}: only its own clip plays`);
    const hidden = await page.evaluate((k) => [...document.querySelectorAll('.sec')[k].querySelectorAll('.txt > *')]
      .filter((el) => +getComputedStyle(el).opacity < 0.99).map((el) => el.tagName.toLowerCase()), k);
    hidden.length ? fail(`chapter ${k}: text visible`, `opacity < 1: ${hidden.join(', ')}`) : pass(`chapter ${k}: text visible`);
    await page.screenshot({ path: path.join(OUT, `ch${k}.png`) });
    layout.push((await layoutSnapshot(page))[k]);
  }

  // ---------- layout against the baseline ----------
  if (UPDATE) {
    fs.mkdirSync(path.dirname(BASELINE), { recursive: true });
    fs.writeFileSync(BASELINE, JSON.stringify(layout, null, 1) + '\n');
    pass('layout: baseline rewritten', path.relative(HERE, BASELINE));
  } else if (!fs.existsSync(BASELINE)) {
    fail('layout: matches baseline', 'no baseline; run with --update-baseline once');
  } else {
    const want = JSON.parse(fs.readFileSync(BASELINE, 'utf8')), diffs = [];
    want.forEach((sec, k) => sec.forEach((w, i) => {
      const g = layout[k]?.[i];
      if (!g || g.tag !== w.tag || ['x', 'y', 'w', 'h'].some((p) => Math.abs(g[p] - w[p]) > LAYOUT_TOLERANCE_PX)) diffs.push(`ch${k} ${w.tag}#${i}: ${JSON.stringify(g)} vs ${JSON.stringify(w)}`);
    }));
    diffs.length ? fail('layout: matches baseline', diffs.slice(0, 6).join('; ')) : pass('layout: matches baseline');
  }

  // ---------- tap to watch full screen ----------
  await page.evaluate((k) => scrollTo({ top: document.querySelectorAll('.sec')[k].offsetTop, behavior: 'instant' }), TAP_CHAPTER);
  await page.waitForTimeout(3500);
  // The flat fallback marks each tappable phone with data-replay; the 3D page is tapped on the phone's screen.
  const target = page.locator(`.sec[data-k="${TAP_CHAPTER}"] [data-replay]`);
  if (await target.count()) await target.first().click();
  else await page.mouse.click(195, 230);
  await page.waitForTimeout(2500);
  const v = await page.evaluate(() => ({ open: document.getElementById('viewer').classList.contains('open'), src: (document.getElementById('vvid').currentSrc || '').split('/').pop() }));
  v.open && v.src === CHAPTER_CLIPS[TAP_CHAPTER] ? pass('viewer: tap opens the full-screen replay', v.src) : fail('viewer: tap opens the full-screen replay', JSON.stringify(v));
  await page.screenshot({ path: path.join(OUT, 'viewer.png') });
  if (v.open) {
    await page.click('#vclose');
    await page.waitForTimeout(500);
    const closed = await page.evaluate(() => !document.getElementById('viewer').classList.contains('open'));
    closed ? pass('viewer: ✕ closes it') : fail('viewer: ✕ closes it');
  }

  // ---------- which path ran, errors, hosts ----------
  const has3d = await page.evaluate(() => !!document.getElementById('gl'));
  FLAT ? (has3d ? fail('fallback: 3D canvas removed on the flat path') : pass('fallback: 3D canvas removed on the flat path'))
    : (has3d ? pass('3D: canvas in use') : fail('3D: canvas in use', 'the 3D canvas was removed with WebGL on'));
  const took = (modes.at(-1) || '').replace('[lp] mode: ', ''); // the last one: a later switch to flat counts
  (FLAT ? /^flat\b/ : /^3d\b/).test(took) ? pass('path: the page took the ' + (FLAT ? 'flat' : '3D') + ' path', took) : fail('path: the page took the ' + (FLAT ? 'flat' : '3D') + ' path', took || 'it logged no [lp] mode line');
  errors.length ? fail('errors: none in console or page', errors.slice(0, 5).join(' | ')) : pass('errors: none in console or page');
  if (BUDGET) {
    const posters = allUrls.filter((u) => /-poster\.(webp|jpg)$/.test(u)), jpgs = posters.filter((u) => /\.jpg$/.test(u));
    posters.length && !jpgs.length ? pass('budget: posters came as WebP', `${posters.length} requested`) : fail('budget: posters came as WebP', posters.length ? `JPG requested: ${jpgs.map((u) => u.split('/').pop()).join(', ')}` : 'no poster was requested');
  }
  const local = new URL(base).host, foreign = [...hosts.keys()].filter((h) => h !== local);
  if (LOCAL_ONLY) foreign.length ? fail('requests: local server only', foreign.join(', ')) : pass('requests: local server only');

  await browser.close();
  srv.close();

  for (const r of results) console.log(`${r.ok ? 'PASS' : 'FAIL'}  ${r.name}${r.detail ? '  (' + r.detail + ')' : ''}`);
  if (foreign.length && !LOCAL_ONLY) console.log(`note  requests to other hosts: ${foreign.join(', ')}`);
  const bad = results.filter((r) => !r.ok).length;
  console.log(`\n${results.length - bad} passed, ${bad} failed  [${NO_WEBGL ? 'no-webgl' : FLAT ? 'flat' : '3d'}${LOCAL_ONLY ? ', local-only' : ''}${BUDGET ? ', budget' : ''}]  screenshots: ${path.relative(process.cwd(), OUT)}`);
  process.exit(bad ? 1 : 0);
}

main().catch((e) => { console.error(e); process.exit(1); });
