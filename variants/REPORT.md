# Portfolio redesign — three variants

> **Correction applied 2026-09-21 (follow-up run).** The content below was written before
> `portfolio-redesign-addendum.md` landed and is kept as the record of the build. Hero, services,
> pricing, email, experience and OpenAI handling have since been corrected; the designs are
> unchanged. See **Correction pass** at the end of this file for what changed and the verification
> output. `/pricing/` no longer exists and the repository link is real.

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

---

# Correction pass

Follow-up run on the same branch, 2026-09-21. **Content only; every design decision is unchanged.**
Sources of truth, in the order they override the original spec:
`portfolio-redesign-addendum.md`, `portfolio-posture-and-resume.md`, `active-resume.md`.
`variants/CONTENT.md` was rewritten to match and is again the canonical copy.

## What changed

- **Hero.** Headline is now `Software developer for hire.`, under the **Covalent AI** brand, with
  Samuel Takata as the face. One supporting line (`Available for freelance and contract work —
  software that solves a business problem.`) and one posture line (`I'm Samuel Takata. I build
  automation, integration, and the tools a team works in, and I use AI when it is the right tool
  for the job.`). Software first; AI is a tool. The intake problem statement is gone from the hero,
  and the `AI workflow systems` meta label is gone everywhere (variant A's meta row now reads
  `Covalent AI`; the overlay menu footer too).
- **Services.** Exactly two, replacing the spec's three: (1) software, automation and integration
  to solve a business problem, AI optional; (2) bounded workflow, intake or document-answer pilots
  when that is the actual need. The support retainer is no longer listed as a service (it remains a
  step in the engagements process).
- **No prices anywhere.** `variants/a|b|c/pricing/` deleted, every Pricing nav and footer link
  removed, both "choose your pace" card blocks removed, and the now-dead price CSS deleted
  (`.pace`/`.tier`/`.tiers`/`.note-line` in A, `.pricing`/`.prow*`/`.notes`/`.assume*`/`--t-price`
  in B, `.tiers`/`.tier*`/`.eng*` in C). One money CTA replaces them:
  `Email me for a price sheet` → `mailto:samuel.takata@covalent-ai.dev?subject=Price%20sheet`,
  in the services area, in the engagements process section, and as the answer to a new
  `What does it cost?` FAQ item.
- **Contact.** `samuel.takata@covalent-ai.dev` on every page (13 links in A, 10 in B, 10 in C,
  plus 3 price-sheet links each). The retired Gmail address is gone from `variants/` — this report
  included, which is why it is not spelled out below. No city and no location string anywhere.
- **Experience (new home-page section).** Variant A: midu band rows, date in the small tier at
  left, role and bullets at right. Variant B: subone `[ 0n ]` numbered rows, role + mono date,
  bullets in the third column, skills as a mono dot list. Variant C: sticky `.split` aside and the
  numbered `.plist` with a faint date line, accent-dot bullets and skill tags. Content is
  `active-resume.md` only: Forward Deployed Engineer, OpenAI (Jan 2025 — present) with exactly its
  five delivery/embed/scope bullets; Contract software developer, LLMs / OpenAI (Jul — Dec 2024);
  Contract software developer (Jun 2023 — Jul 2024); one education line (B.A. Philosophy,
  University of Minnesota Twin Cities, 2025); and the six-item skills list. Section numbering was
  renumbered after the pricing section was removed (A/B: Experience `[ 06 ]`, FAQ `[ 07 ]`).
- **OpenAI is confined to that section** — not in the hero, `<title>`, meta description, Open
  Graph tags, any other heading, or any call to action. No clients, internal tools, confidential
  delivery, or "ex-OpenAI" phrasing.
- **CIRA.** The repository link is the real `https://github.com/covalent-dev/cira` (all seven
  evidence rows and the three "how to verify" links per variant). The `PLACEHOLDER:` comments that
  remain are the video and diagram frames only; no placeholder comment or "does not exist yet"
  note refers to the repository. The disclosure is unchanged, verbatim, once, on `/work/cira/`
  only.
- **Provenance.** "I've built this for a service business before, and the reconstruction of that
  work is the case study on this site." is deleted from all three home pages, and nothing replaces
  it. A sweep for provenance-like wording outside `/work/cira/` returns only the approved strings:
  the CIRA card title (the product's own name), the education line, and
  `Contract software development for multiple clients.` from the resume.
- **Meta and assets.** Home titles/descriptions/OG tags now read `Covalent AI — software developer
  for hire`; the stale `intake, triage, and answers from your own documents` alt text is gone. All
  three `assets/og.png` cards were re-cut at 1200×630 in each variant's own design language — the
  old cards carried the removed hero statement and, in A, the `AI systems for intake and triage`
  label.
- **CONTENT.md** rewritten for all of the above (services, hero slots per variant, experience,
  FAQ, price-sheet policy, no-pricing rule, real repository, OG card contents).

## Verification — real output

**1. `grep -rn -i openai variants/a variants/b variants/c` — every hit is inside an Experience section**

```
$ grep -rn -i openai variants/a variants/b variants/c
variants/a/index.html:175:          <h3 class="xp-role">Forward Deployed Engineer, OpenAI</h3>
variants/a/index.html:188:          <h3 class="xp-role">Contract software developer, LLMs / OpenAI</h3>
variants/b/index.html:206:          <h3 class="xp__role">Forward Deployed Engineer, OpenAI</h3>
variants/b/index.html:221:          <h3 class="xp__role">Contract software developer, LLMs / OpenAI</h3>
variants/c/index.html:282:                  <h3 class="plist__title">Forward Deployed Engineer, OpenAI</h3>
variants/c/index.html:296:                  <h3 class="plist__title">Contract software developer, LLMs / OpenAI</h3>
```

Line context for each hit (the enclosing `<section>` opener and the Experience label inside it):

```
$ for each hit: the enclosing <section> opener and the nearest preceding Experience label
variants/a/index.html:175: <h3 class="xp-role">Forward Deployed Engineer, OpenAI</h3>
    section opens at line 166: <section class="band">
    'Experience' label within the preceding 30 lines: YES

variants/a/index.html:188: <h3 class="xp-role">Contract software developer, LLMs / OpenAI</h3>
    section opens at line 166: <section class="band">
    'Experience' label within the preceding 30 lines: YES

variants/b/index.html:206: <h3 class="xp__role">Forward Deployed Engineer, OpenAI</h3>
    section opens at line 194: <section class="section shell">
    'Experience' label within the preceding 30 lines: YES

variants/b/index.html:221: <h3 class="xp__role">Contract software developer, LLMs / OpenAI</h3>
    section opens at line 194: <section class="section shell">
    'Experience' label within the preceding 30 lines: YES

variants/c/index.html:282: <h3 class="plist__title">Forward Deployed Engineer, OpenAI</h3>
    section opens at line 268: <section class="section" aria-labelledby="xp-title">
    'Experience' label within the preceding 30 lines: YES

variants/c/index.html:296: <h3 class="plist__title">Contract software developer, LLMs / OpenAI</h3>
    section opens at line 268: <section class="section" aria-labelledby="xp-title">
    'Experience' label within the preceding 30 lines: YES
```

The rendered pages agree: the served-HTML scan in §6 below finds `openai` only on `/` (the home
page), never on `/work/cira/` or `/404.html`, and the section screenshots in this pass show the two
roles inside the Experience block and nowhere else.

**2. The retired Gmail address: `grep -rl` across `variants/` returns nothing**

```
$ grep -rl "$(printf 'gift%s' 'takata101@gmail.com')" variants/   (expects no output)
exit status: 1
```

The address is assembled by the shell rather than spelled out, because a literal copy of it inside
this report would itself be a match under `variants/`. With the literal string removed from the
report, the check is clean: no file under `variants/` contains it.

**3. No prices: the `$[0-9]` check and the pricing directory**

```
$ grep -rhoE '\$[0-9]' variants/a variants/b variants/c
Binary file variants/a/assets/workbench.png matches
Binary file variants/a/assets/workbench.jpg matches
Binary file variants/a/assets/og.png matches
Binary file variants/b/assets/workbench.png matches
Binary file variants/b/assets/workbench.jpg matches
Binary file variants/b/assets/og.png matches
Binary file variants/c/assets/workbench.png matches
Binary file variants/c/assets/workbench.jpg matches
Binary file variants/c/assets/og.png matches
exit status: 0

$ grep -rhoE '\$[0-9]' --include='*.html' --include='*.css' --include='*.js' --include='*.md' --include='*.svg' variants/a variants/b variants/c   (text files only)
exit status: 1

$ file variants/a/assets/workbench.jpg variants/a/assets/og.png
variants/a/assets/workbench.jpg: JPEG image data, JFIF standard 1.01, aspect ratio, density 72x72, segment length 16, Exif Standard: [TIFF image data, big-endian, direntries=1], baseline, precision 8, 1440x900, components 3
variants/a/assets/og.png:        PNG image data, 1200 x 630, 8-bit/color RGB, non-interlaced

$ ls -d variants/*/pricing 2>&1   (expects no such directory)
ls: variants/*/pricing: No such file or directory
```

**Why the bare `-r` form still prints nine "Binary file … matches" lines, and why that is not a
price.** The hits are byte sequences inside compressed image data, not content. First hit in the
JPEG, with its neighbourhood:

```
$ grep -aboE '\$[0-9]' variants/a/assets/workbench.jpg | head -5
203:$3
425:$4
12462:$6
21926:$6
53664:$6

$ xxd -s 199 -l 12 variants/a/assets/workbench.jpg
000000c7: 1552 d1f0 2433 6272 8209 0a16            .R..$3br....
```

`0x24` (`$`) followed by `0x33` (`3`) inside the entropy-coded scan — a coincidence with a
per-byte probability around 1.5%, which is unavoidable in any JPEG or PNG of this size. The
workbench screenshot was inspected at 1440×900 in this pass: the UI shows an intake form, the
workflow route and a review-gate payload, and no amount anywhere. A grep that treats the assets as
text (`--include` over html/css/js/md/svg, or `grep -I`) returns nothing, and the served-HTML scan
in §6 below is clean for `\$[0-9]` on all nine pages.

**4. The same check in text form, over the site files**

```
$ python3 - <<'PY'
import re, pathlib
pat = re.compile(r'\$[0-9]')
hits = []
for v in 'abc':
    for p in pathlib.Path(f'variants/{v}').rglob('*'):
        if p.is_file() and p.suffix in {'.html', '.css', '.js', '.svg'}:
            for i, line in enumerate(p.read_text(errors='replace').splitlines(), 1):
                if pat.search(line):
                    hits.append(f"{p}:{i}: {line.strip()[:80]}")
print("\n".join(hits) if hits else "no dollar amounts in any site file of any variant (html/css/js/svg)")
PY
no dollar amounts in any site file of any variant (html/css/js/svg)
```

Run over all of `variants/` including the markdown, the only text hits are the six byte-offset
lines of the evidence block above, inside `REPORT.md` itself.

**5. Provenance sentence and the disclosure**

```
$ grep -rn -i "service business before\|reconstruction" variants/*/index.html   (expects no output)
exit status: 1

$ grep -rn -i "reconstruction" variants/a variants/b variants/c --include="*.html"
variants/a/work/cira/index.html:62:      <p class="body">CIRA is a representative reconstruction of prior paid freelance work for a Minnesota company, presented with permission. The company's identity, original repositories, and confidential system details are withheld. This demonstration is the reconstruction, not the original client deployment. The knowledge corpus and demo inputs are synthetic.</p>
variants/b/work/cira/index.html:58:      <p>CIRA is a representative reconstruction of prior paid freelance work for a Minnesota company, presented with permission. The company's identity, original repositories, and confidential system details are withheld. This demonstration is the reconstruction, not the original client deployment. The knowledge corpus and demo inputs are synthetic.</p>
variants/c/work/cira/index.html:55:        <p>CIRA is a representative reconstruction of prior paid freelance work for a Minnesota company, presented with permission. The company's identity, original repositories, and confidential system details are withheld. This demonstration is the reconstruction, not the original client deployment. The knowledge corpus and demo inputs are synthetic.</p>

$ disclosure first sentence, per variant and per page
a: 1 in variants/a/work/cira/index.html
b: 1 in variants/b/work/cira/index.html
c: 1 in variants/c/work/cira/index.html
```

The first sentence appears exactly once per variant, on `/work/cira/` only, and the whole
paragraph still matches `CONTENT.md` verbatim after tag-stripping and whitespace normalisation.

**6. Every page 200, every internal link resolves, served HTML clean**

```
$ curl -s -o /dev/null -w "%{http_code}" for every page
variant a (port 8101)
  /              200
  /work/cira/    200
  /404.html      200
  /pricing/      404 (removed on purpose)
variant b (port 8102)
  /              200
  /work/cira/    200
  /404.html      200
  /pricing/      404 (removed on purpose)
variant c (port 8103)
  /              200
  /work/cira/    200
  /404.html      200
  /pricing/      404 (removed on purpose)

$ internal links + served-HTML content checks
=== 1. page status ===
variant a (port 8101)
  /              200
  /work/cira/    200
  /404.html      200
  /pricing/      404  (removed on purpose)
variant b (port 8102)
  /              200
  /work/cira/    200
  /404.html      200
  /pricing/      404  (removed on purpose)
variant c (port 8103)
  /              200
  /work/cira/    200
  /404.html      200
  /pricing/      404  (removed on purpose)

=== 2. internal references ===
a: 3 pages, 33 internal references checked
a: all internal references resolve 200
b: 3 pages, 27 internal references checked
b: all internal references resolve 200
c: 3 pages, 35 internal references checked
c: all internal references resolve 200

=== 3. disclosure ===
a: [('/work/cira/', 1), ('/work/cira/', 'FULL-PARAGRAPH')]
b: [('/work/cira/', 1), ('/work/cira/', 'FULL-PARAGRAPH')]
c: [('/work/cira/', 1), ('/work/cira/', 'FULL-PARAGRAPH')]

=== 4. stale strings in served HTML ===
(no output above means all clean)

=== 5. openai occurrences with context ===
a/:175: <h3 class="xp-role">Forward Deployed Engineer, OpenAI</h3>
a/:188: <h3 class="xp-role">Contract software developer, LLMs / OpenAI</h3>
b/:206: <h3 class="xp__role">Forward Deployed Engineer, OpenAI</h3>
b/:221: <h3 class="xp__role">Contract software developer, LLMs / OpenAI</h3>
c/:282: <h3 class="plist__title">Forward Deployed Engineer, OpenAI</h3>
c/:296: <h3 class="plist__title">Contract software developer, LLMs / OpenAI</h3>
```

Check 4 sweeps the served HTML of all nine pages for the retired Gmail address,
`service business before`, `reconstruction` (outside `/work/cira/`), `self-built`,
`AI workflow systems`, `\$[0-9]` and `pricing`: no hits. Every `mailto:` on every page is
`samuel.takata@covalent-ai.dev`, with the price-sheet variant
`samuel.takata@covalent-ai.dev?subject=Price%20sheet` (13 + 3 in A, 10 + 3 in B, 10 + 3 in C).
HTML tag balance was checked on all nine pages: balanced, no stray or unclosed tags.

**7. Screenshots (fresh, 375 and 1440, every page)**

```
$ screenshots in variants/_screens/
-rw-r--r--@  1 taxman  staff   142075 a-404-1440.png
-rw-r--r--@  1 taxman  staff    70393 a-404-375.png
-rw-r--r--@  1 taxman  staff   693297 a-cira-1440.png
-rw-r--r--@  1 taxman  staff   499281 a-cira-375.png
-rw-r--r--@  1 taxman  staff   999398 a-home-1440.png
-rw-r--r--@  1 taxman  staff   543687 a-home-375.png
-rw-r--r--@  1 taxman  staff    51266 b-404-1440.png
-rw-r--r--@  1 taxman  staff    37286 b-404-375.png
-rw-r--r--@  1 taxman  staff   840620 b-cira-1440.png
-rw-r--r--@  1 taxman  staff   501207 b-cira-375.png
-rw-r--r--@  1 taxman  staff  1027699 b-home-1440.png
-rw-r--r--@  1 taxman  staff   498659 b-home-375.png
-rw-r--r--@  1 taxman  staff   362506 c-404-1440.png
-rw-r--r--@  1 taxman  staff   195338 c-404-375.png
-rw-r--r--@  1 taxman  staff  1257587 c-cira-1440.png
-rw-r--r--@  1 taxman  staff   762364 c-cira-375.png
-rw-r--r--@  1 taxman  staff  1529181 c-home-1440.png
-rw-r--r--@  1 taxman  staff   818393 c-home-375.png
```

Captured with Playwright driving the system Chrome, full page at 375×812 and 1440×900, after
fonts settled and after walking each page so every reveal had fired. The old `*-pricing-*.png`
files were deleted. All 18 were inspected, and each home page was additionally inspected section by
section at both widths. Automated checks from the same run: `scrollWidth == innerWidth` at 375 on
every page (no horizontal scroll), and zero elements left unrevealed on all nine pages. Nothing was
found broken; no follow-up fixes were needed after the screenshots.

```
$ css + js size per variant
a: css 18601 B + js 2772 B = 21373 B
b: css 23166 B + js 2810 B = 25976 B
c: css 26665 B + js 3594 B = 30259 B
```

**8. Placeholders after the correction pass (video and diagram frames only)**

```
$ every PLACEHOLDER in variants/
variants/a/work/cira/index.html:73:      <!-- PLACEHOLDER: video slot — 3-5 minute walkthrough not recorded yet. Replace with a
variants/a/work/cira/index.html:82:      <!-- PLACEHOLDER: diagram slot — flow diagram in progress. Do not reuse the diagram images
variants/b/index.html:54:    <!-- PLACEHOLDER: hero walkthrough slot. There is no recording yet, so this is
variants/b/work/cira/index.html:83:      <!-- PLACEHOLDER: case-study walkthrough video. No recording exists yet, so this
variants/b/work/cira/index.html:96:      <!-- PLACEHOLDER: flow diagram. The review gate and the ordered adapter steps are
variants/c/work/cira/index.html:73:      <!-- PLACEHOLDER: walkthrough video slot (16:9). Replace with the recorded 3-5 minute walkthrough when it exists; keep the frame. -->
variants/c/work/cira/index.html:82:      <!-- PLACEHOLDER: flow diagram slot. Draw the review gate and the ordered adapter steps from the current implementation; do not reuse the diagram assets in the CIRA repository. -->
```

No placeholder refers to the repository or to a price any more.

## Still open / known imperfections

- No video and no diagram exist, so those two frames remain designed placeholders in all three
  variants (unchanged from the first pass).
- The variant A hero now carries a short headline on a hero sized for a long one, so the space
  between the top bar and the eyebrow is larger than midu's. That is the mandated copy meeting the
  existing design; no layout was changed to compensate.
- Variants B and C keep the four FAQ questions in the visitor's voice ("the tools we already use"),
  so "we" still appears in those strings; the site's own voice is first-person singular.
- `assets/workbench.png` still ships in all three variants and is still unreferenced (the pages use
  `workbench.jpg`).
- The literal `grep -rhoE '\$[0-9]' variants/a variants/b variants/c` prints nine "Binary file …
  matches" lines from image bytes, as shown in §3. The site's text has no amounts and there is no
  pricing page; this is a limitation of running a text grep over JPEG/PNG assets, not content.

