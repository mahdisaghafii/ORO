# Putting the page on your server

Short version: build `dist/`, upload what is inside it, set four things on the server, then check it from a phone in Iran with the VPN off.

## 1. Build the folder

You need to decide the page's address first (domain and path, for example `https://example.ir/portfolio/`). The link preview in Telegram and Instagram needs it written in full. If you don't know it yet, build without it and rebuild later.

```bash
cd prototypes/live-portfolio
python3 build.py --base-url https://your-address/path/
```

- `--base-url` is the address where `index.html` will be served, ending with `/`. It sets `og:url` and the full address of the preview picture (`og:image`).
- Without `--base-url` the build still works, but it leaves those two tags out and prints a warning. A shared link then shows no picture.
- Run it again whenever the page, a clip or the address changes. It deletes and rebuilds `dist/` every time, so `dist/` is yours: nothing else writes to it (the checks build into a scratch folder, `tools/out/dist`). `--out <folder>` builds somewhere else instead.
- It prints how many files and how many MB are in `dist/`. It stops with an error if a file the page names is missing, or if the page would load anything from another website.

## 2. Upload

Upload **what is inside `dist/`**, all of it, as it is: `index.html`, `assets/`, `vendor/`. Put those three at the page's address, not the `dist` folder itself, or the page ends up at `/dist/`. Don't pick files, don't rename anything. Everything is inside; the page loads nothing from outside, so it works with the foreign internet blocked.

## 3. What the server must do

You choose the web server and the domain; the four things below are what the page needs from whatever you use.

1. **Serve `.mp4` as `video/mp4`.** Most servers already do. If a clip downloads instead of playing, this is why.
2. **Allow byte-range requests.** iPhones won't play a video unless the server answers range requests. Most servers do this for plain files by default; a proxy or CDN in front sometimes switches it off. Step 4 shows how to test it.
3. **Compress HTML and JS** (gzip is enough; brotli is better). This matters most for `vendor/three.min.js`, which is 603 KB raw. Our slow-connection test ran without compression: there, the 3D phone showed up after about 9 seconds. Compression should cut that a lot (not measured yet; the phone test will show it). Don't bother compressing `.mp4`, `.webp`, `.jpg` and `.woff2`; they are already compressed.
4. **Cache for a long time and for a short time.**
   - `assets/` and `vendor/`: a long time (a month).
   - `index.html`: a short time (a few minutes), so a new build shows up soon.
   - Because of the long cache, **if you replace a clip or picture, give the new file a new name** (and rebuild), or visitors keep the old one.

### Example for nginx

Only an example; change the names. If you use another server, the four points above are what to copy.

```nginx
server {
    listen 80;
    server_name example.ir;               # your domain
    root /var/www/oro-portfolio;          # the folder you uploaded the contents of dist/ into

    gzip on;
    gzip_comp_level 5;
    gzip_types text/css application/javascript text/javascript application/json image/svg+xml;
    # text/html is compressed by default once gzip is on

    # video/mp4 and byte ranges: nginx does both for static files by default.
    # Don't turn off ranges, and don't put something in front that strips them.

    location = /index.html {
        add_header Cache-Control "public, max-age=300";
    }
    location /assets/ {
        add_header Cache-Control "public, max-age=2592000";
    }
    location /vendor/ {
        add_header Cache-Control "public, max-age=2592000";
    }
}
```

**If the page lives in a sub-folder** of a site (like `https://example.ir/portfolio/`), two things change:

- Put the files in a folder with that name under `root` (`/var/www/oro-portfolio/portfolio/index.html`), and use the same path in `--base-url`.
- The three `location` blocks must carry the same prefix, or the long-cache rules silently stop applying:

```nginx
    location = /portfolio/index.html { add_header Cache-Control "public, max-age=300"; }
    location /portfolio/assets/      { add_header Cache-Control "public, max-age=2592000"; }
    location /portfolio/vendor/      { add_header Cache-Control "public, max-age=2592000"; }
```

HTTPS is up to you (a certificate for the domain); use `https://` in `--base-url` if the page is served over it.

## 4. Check it from Iran, VPN off

Do this from a phone or a computer inside Iran with the VPN **off**. Replace the addresses with yours.

1. Open the page address. It should load and show the first screen within a few seconds.
2. Clips are range-friendly: the first line should say `206` (`HTTP/1.1 206 Partial Content` or `HTTP/2 206`), with a `Content-Range` line below it. A `200` means ranges are off; iPhones will not play the clips.
   ```bash
   curl -I -H "Range: bytes=0-1" https://your-address/path/assets/oro-profile.mp4
   ```
3. Clips have the right type: the same output should have `Content-Type: video/mp4`.
4. Compression is on: this should print `Content-Encoding: gzip` (or `br`).
   ```bash
   curl -sI -H "Accept-Encoding: gzip" https://your-address/path/vendor/three.min.js | grep -i content-encoding
   ```
5. The link preview: paste the address in a Telegram chat with yourself. It should show the card (title, one line, picture). If it shows no picture, the build had no `--base-url` or the address is wrong. Telegram remembers a link's preview; if you fixed it and still see the old card, test with a different address ending (for example add `?v=2`).

## 5. Phone test (about 10 minutes)

Put the page link in the `@oro_platform` bio (or send it to yourself in an Instagram DM), then open it **inside Instagram** on a mid-range Android, with **mobile data and the VPN off**. If you can borrow an iPhone, do it there too. Tick what works, and keep a screenshot or screen recording of anything that doesn't, to send back with the list.

On the Android, and again on the iPhone:

- [ ] The first screen shows text and the picture quickly, without a blank white wait.
- [ ] The text is in the Vazirmatn font (the same look as in the screenshots), not a plain system font.
- [ ] Scrolling is smooth: no stutter, no jumping.
- [ ] Every chapter (ORO, Chain of Legends, Qeleq, Chid) shows its text.
- [ ] Each chapter's clip plays by itself, with no sound, and only the chapter on screen plays.
- [ ] Chain of Legends shows its clip wide (landscape), the others tall.
- [ ] Under each phone, the small line is there and matches (each ends with «روی گوشی بزن تا بزرگ ببینی»):
  - Chain of Legends: «تیزر رسمی بازی؛ ساخته‌ی خودم»
  - Qeleq: «بازپخش از محصول واقعی · نسخه‌ی دمو؛ سود و زیان محو شده»
  - Chid: «بازپخش از محصول واقعی · یک اتاق، پنج طراحی واقعی روی چید»
  - The ORO profile chapters have no such line; that is intended.
- [ ] Tapping a phone opens the replay full screen, and ✕ closes it.
- [ ] The two links at the end open (Instagram and the Telegram channel).
- [ ] Nothing on screen shows money figures or anything you didn't approve.
- [ ] The phone doesn't get hot or slow down after a minute of scrolling.

On the iPhone, also:

- [ ] The clips play (if they stay still, check step 4.2 again: byte ranges).

Also:

- [ ] Sharing the link in Telegram and in an Instagram DM shows the preview card with the picture.
- [ ] On the Android with Data Saver on, or on a weak connection, text still appears first and the page is usable.
