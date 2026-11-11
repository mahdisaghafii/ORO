# vendor/

Third-party files the page serves itself, so it loads nothing from outside its own folder. Don't edit them; to update one, replace it and change its row here.

| File | Source | Version | Licence |
|---|---|---|---|
| `three.min.js` | https://raw.githubusercontent.com/mrdoob/three.js/r128/build/three.min.js (official three.js repository, `build/three.min.js` at tag `r128`) | r128 | MIT (the licence line is in the file's header) |
| `fonts/Vazirmatn-Light.woff2` (weight 300) | https://github.com/rastikerdar/vazirmatn/releases/download/v33.003/vazirmatn-v33.003.zip, `fonts/webfonts/Vazirmatn-Light.woff2` | v33.003 | SIL Open Font License 1.1 |
| `fonts/Vazirmatn-Regular.woff2` (400) | same zip, `fonts/webfonts/Vazirmatn-Regular.woff2` | v33.003 | SIL OFL 1.1 |
| `fonts/Vazirmatn-Medium.woff2` (500) | same zip, `fonts/webfonts/Vazirmatn-Medium.woff2` | v33.003 | SIL OFL 1.1 |
| `fonts/Vazirmatn-Bold.woff2` (700) | same zip, `fonts/webfonts/Vazirmatn-Bold.woff2` | v33.003 | SIL OFL 1.1 |
| `fonts/Vazirmatn-ExtraBold.woff2` (800) | same zip, `fonts/webfonts/Vazirmatn-ExtraBold.woff2` | v33.003 | SIL OFL 1.1 |
| `fonts/Vazirmatn-Black.woff2` (900) | same zip, `fonts/webfonts/Vazirmatn-Black.woff2` | v33.003 | SIL OFL 1.1 |
| `fonts/OFL.txt` | same zip, `OFL.txt` (copyright 2015 The Vazirmatn Project Authors) | v33.003 | the licence text itself |

The page declares the fonts as `@font-face` rules under the family name `Vazirmatn` (weights 300, 400, 500, 700, 800, 900) and preloads 400 and 900.
