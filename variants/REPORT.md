# Portfolio redesign — three variants

Date: 2026-09-21. Branch: `redesign-variants`. Nothing was deployed, pushed, or published.
CIRA was run locally (Docker Compose) to capture the workbench screenshot, and the CIRA
repository was not modified.

Layout per variant: `index.html`, `work/cira/index.html`, `pricing/index.html`, `404.html`,
`assets/`. Start all three with `variants/preview.sh` (A on 8101, B on 8102, C on 8103).

Shared: `variants/CONTENT.md` is the canonical copy for all three variants, so the only
difference between them is design. `variants/_screens/` holds headless-Chrome screenshots of
every page at 375 and 1440 width (gitignored).

---

## What each variant took from its reference, and where it differs

**Variant A — Glow (`variants/a/`, from midu.design).** Taxman's favorite, and the one that got
the most care. It takes midu's whole shape: the `#050505` ground, the fixed top bar with the
wordmark left and a `Menu` pill plus a white pill button right, the right-aligned hero
statement sitting above a small meta row (`AI workflow systems` + a live local clock +
`Scroll to explore`), and the signature move — a giant lowercase `covalent` wordmark filling the
bottom of the hero with a soft warm glow behind it, within a strict type system measured off the
live site (section headlines 82px/1.0 at −0.04em weight 500, body 18px, small labels 14px, chip
pills at 16px radius, cards at 32px, panel fills at `rgba(255,255,255,.07)`). The section order
follows midu: hero → statement and about → featured work card with tag pills → scope statement →
services → midu-style "choose your pace" pricing cards → FAQ accordion → a footer that repeats the
wordmark and glow. Deliberate differences: the statement is rebuilt with Switzer at 32px and
Instrument Serif italic accents rather than midu's muted-block treatment; the glow is warmer and
lower-contrast than midu's, and it animates on a 22–28s drift instead of midu's scroll-linked
shader; the FAQ is a native `<details>` accordion rather than a JS one; there is no cookie banner,
no "slots for August" scarcity pill, no testimonial carousel, and the overlay menu is a plain
full-screen list instead of midu's animated card grid. Above 1080px the about and scope bands
split into a headline column and a copy column — an addition, because single-column bands left
too much dead space at 1440.

**Variant B — Editorial (`variants/b/`, from subone.studio).** Pure-black ground, Instrument Sans
at 70px/1.0/−0.04em for full-width editorial statements, Geist Mono at 12px uppercase for every
eyebrow, section number and metadata line, `rgba(255,255,255,.5)` secondary tier, hairlines at
`.1–.16`, 5px radii. It reproduces subone's numbered section headers (`[ 01 ]  ABOUT  © 2026` over
a hairline), the two-column `[ CONTEXT ]` label/value blocks, the offset first line on big
statements, the floating video card with a play control and a mono caption, and the oversized
wordmark above a compact four-column mono footer. Deliberate differences: subone's hero is
video-forward with a photographic background, so the hero here uses a designed frame and a CSS
grain/glow layer instead — no stock or generated imagery anywhere; the statement indent is
achieved with a first-line offset rather than per-character animation; and the reference's
"featured in" logo strip has no counterpart, because inventing clients or press marks is out of
bounds. The one substantive liberty the variant takes beyond the reference: the footer wordmark
is JS-fitted to the content column so it lands 6px inside the gutter at every width from 320 to
1920.

**Variant C — Studio (`variants/c/`, from shakuro.com, translated to dark).** Shakuro's structure,
recoloured to `#0b0d14` with `#131623` surfaces, `#c9cad6` body text and one saturated accent. It
keeps shakuro's left-aligned hero with a single pill button and ~240px of top padding, the large
rounded product panel directly under the hero (carrying the real CIRA workbench screenshot at
1440×900), the three-up trust row on hairline dividers, a wide work card next to supporting
panels, a numbered services accordion with `+`/`−` disclosure controls, the process section with a
left heading column and a right accordion, a CTA band, and a multi-column footer. Deliberate
differences: shakuro's trust row is awards, ratings and review counts — all of that is removed and
replaced with three true statements about the work (the review gate, citations with sources, fixed
evaluations); the accent `#2d2dff` is used only as the primary button fill and as an ambient glow,
because at 2.7:1 on `#0b0d14` it fails WCAG AA as a link colour, so links use a `#9d9dff` tint at
6.6:1; shakuro's two-line hero headline is not reproducible with the mandated statement at 72px
(measured: the first sentence alone runs three lines at the 1128px measure), so the statement is
split across the H1 and a one-line lead with no words added or dropped; and the numbered process
list replaces shakuro's project-count statistics, which would have been invented numbers.

---

## Verification (§5), unedited output

**1. `curl -s -o /dev/null -w '%{http_code}'` for `/`, `/work/cira/`, `/pricing/`, `/404.html`**

```
variant a (port 8101)
  /              200
  /work/cira/    200
  /pricing/      200
  /404.html      200
variant b (port 8102)
  /              200
  /work/cira/    200
  /pricing/      200
  /404.html      200
variant c (port 8103)
  /              200
  /work/cira/    200
  /pricing/      200
  /404.html      200
```

**2. Every internal `href`/`src` resolves on its own variant server**

```
a: 4 pages, 54 internal references checked
a: all internal references resolve 200
b: 4 pages, 41 internal references checked
b: all internal references resolve 200
c: 4 pages, 57 internal references checked
c: all internal references resolve 200
```

**3. `grep -ri "openai"` / `grep -ri "self-built"` across `variants/`**

```
openai:            0
self-built:        0
```

**4. The disclosure's first sentence, exactly once per variant, on `/work/cira/` only**

```
a: 1 occurrence(s) of the first sentence, in: a/work/cira/index.html
b: 1 occurrence(s) of the first sentence, in: b/work/cira/index.html
c: 1 occurrence(s) of the first sentence, in: c/work/cira/index.html

--- verbatim paragraph check (Python, HTML-normalised) ---
a: ['a/work/cira/index.html']
b: ['b/work/cira/index.html']
c: ['c/work/cira/index.html']
```

The second check compares the whole paragraph against `variants/CONTENT.md` after tag-stripping
and whitespace normalisation, so a line-wrap difference cannot hide a wording difference.

**5. Banned words from §1**

```
revolutioniz|cutting-edge|seamless|leverage|unlock|supercharge|game-changing|world-class|next-generation|harness|empower|synergy|AI-powered
0 matches across variants/a, variants/b, variants/c (*.html, *.css, *.js)
```

**6. Screenshots** — `variants/_screens/`, 24 files, full pages at 375 and 1440 for all four pages
of all three variants (`a-home-1440.png` … `c-404-375.png`). Captured with headless Chrome at
1440×900 and 375×812, fonts settled via `document.fonts.ready`, reveals triggered by walking the
page first. Every one was inspected; the defects listed below were found that way.

**Additional checks run beyond §5**

```
scrollWidth vs innerWidth (no horizontal scroll at 375):
  a: overflow:[A.skip, .glow-a, .glow-b]  — all three are clipped by an overflow:hidden parent
  b: only .amb (fixed, inset -34vmax, clipped) and A.skip
  c: only A.skip
```

```
css + js size per variant (limit ~150 KB)
a: css 19124 B + js  2772 B = 21896 B
b: css 23911 B + js  2810 B = 26721 B
c: css 27751 B + js  3594 B = 31345 B
```

```
external hosts referenced by any page
http://www.w3.org (inline SVG namespace) · api.fontshare.com (variant A fonts) ·
fonts.googleapis.com · fonts.gstatic.com · covalent-ai.dev · github.com · linkedin.com
no analytics, no cookies, no third-party scripts, no <form> elements
```

---

## Placeholders

Every designed placeholder is marked with an HTML comment containing `PLACEHOLDER:`.

| File | Line | Slot |
| --- | --- | --- |
| `variants/a/work/cira/index.html` | 74 | walkthrough video slot (16:9, play control, "Walkthrough — not recorded yet") |
| `variants/a/work/cira/index.html` | 83 | flow diagram slot ("Flow diagram — in progress") |
| `variants/b/index.html` | 55 | hero walkthrough slot (floating video card, mono caption) |
| `variants/b/work/cira/index.html` | 84 | case-study walkthrough video |
| `variants/b/work/cira/index.html` | 97 | flow diagram |
| `variants/c/work/cira/index.html` | 74 | walkthrough video slot (16:9) |
| `variants/c/work/cira/index.html` | 83 | flow diagram slot (own inline SVG mark) |

No diagram asset from the CIRA repository is reused in any variant; the diagram slots are empty
designed frames whose captions match the current implementation rather than the obsolete
captions on those files.

---

## What was not done, and what is imperfect

**Not done**

- No video and no diagram: neither exists yet, so both are designed placeholder frames in all
  three variants.
- The CIRA public repository does not exist, so every "how to verify" link and every row of the
  evidence table points at the placeholder `https://github.com/covalent-dev/cira`. There are 7
  such links per variant on the case study page.
- Nothing was deployed, pushed, or published. `preview.sh` is the only way these have been served.
- No real-device testing. All verification was headless Chrome at 375, 768 and 1440.

**Imperfect, and left that way deliberately**

- Variant A's hero wordmark is a filled gradient rather than a fully bleached wordmark over an
  orange glow, because `background-clip: text` cannot take a blend mode. It reads as midu in
  screenshots, but it is not the same technique.
- Variant B's ambient layer is a CSS radial gradient plus a repeating-linear-gradient grain, not
  film grain; it reads as texture at 1x and as faint banding on a wide-gamut display.
- Variant C's hero statement runs three lines at 1440 instead of the reference's two, for the
  reason given above. Keeping 72px and the mandated words won.
- Variants B and C keep the three FAQ questions exactly as `CONTENT.md` words them, and those
  three questions are in the visitor's voice ("the tools we already use"), so "we" appears in
  those strings. The site's own voice is first-person singular everywhere else.
- Variant B's `og.png` and variant C's `og.png` are 193 KB and 496 KB. They are Open Graph cards
  only and are never loaded by a page.
- `assets/workbench.png` ships in all three variants but only `workbench.jpg` is referenced.

**Things worth knowing before choosing**

- The workbench screenshot is the review-gate state (an intake that stopped for a person), not the
  completed state. That is the more interesting frame, but it is a choice, and switching it is a
  one-line change in each variant.
- Prices live in one commented block per variant (`<!-- PRICES: ... -->` in `pricing/index.html`
  and in the home page's pricing section). Editing them is mechanical.
- All three variants are self-contained: no build step, no npm, no framework, no analytics.
