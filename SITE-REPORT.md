# SITE-REPORT.md

Run: site posture expansion v2. Branch `site-posture-v2`, cut from `main` at `f6d6651`.
Date: 2026-09-22. Nothing was deployed, pushed, or written outside this repository. The CIRA
repository, the demo, the server, and `/Users/taxman/Andromeda-v2` were read only.

Files changed: `site/index.html`, `site/work/cira/index.html`, `site/404.html`, `site/style.css`,
`site/script.js`, `CONTENT.md`, `README.md`, `.gitignore`. New screenshots in `site/_screens/`
(gitignored). This report is new.

---

## 1. What changed, by section

### Copy and positioning

**Hero.** Headline is exactly `Prototype to production, without the agency.` Blurb is exactly
`Freelance and contract software development: internal tools, automation, integrations, and AI
features where they genuinely help.` The old headline, the `Available for freelance and contract
work — software that solves a business problem` supporting line, and the `I'm Samuel Takata…`
posture line are gone from the hero. The name now appears only in Experience, which is where the
posture file puts it. `Covalent AI` stays as the mono eyebrow, and it carries the schwa swap.

**About.** Rewritten off "the queue". It now says what kind of work is taken on: software a
business needs and does not have, plus the unglamorous internal work, with the scope and the
human-in-the-loop habit kept as the second paragraph. Two paragraphs, first person. The statement
is `I build software a business needs and does not have: the internal tool, the report nobody can
pull, the integration between two systems that never talked.`

**Scope.** The statement is unchanged by instruction: `Systems like this fail on scope, not on
models.` The body now describes the method in general terms rather than describing a pilot. It
dropped the "one workflow and one intake source" sentence, which was the third appearance of that
idea on the page, and it no longer says "a pilot".

**Services.** Four, in the order the spec gives: internal tools and automation, integrations and
data plumbing, AI features done carefully, contract development. Each is a headline plus two
sentences. The section heading became `What I build.` and it sits between the first and the second
service blurb.

**Experience and skills.** The three roles, the dates, the five Forward Deployed Engineer bullets
and the education line are untouched. The two contract roles keep their existing one-line
descriptions. The skills list was rebuilt as six labelled groups copied from the Skills section of
`active-resume.md`, in its order. The old list (`Python (automation) · JavaScript · APIs · CI/CD ·
General software development · LLM / GPT-family application work`) is gone.

**CIRA.** The featured-work card and `/work/cira/` stay. The card copy is unchanged except that the
"I don't know" quotation was turned into a plain sentence. The disclosure is byte-identical to the
source and still appears once, on `/work/cira/` only. The card title changed from `CIRA — client
intake with review and an audit trail` to `CIRA: client intake with review and an audit trail`, to
match the page title. No other change.

**FAQ.** The five questions are unchanged. Four answers were reworded so they no longer assume the
engagement is a workflow pilot: the pilot answer, the integrations answer, the data answer and the
"How do we start" answer. The cost answer is unchanged.

**Closing band.** `If a problem is eating your week, tell me which one.` became `If something is
eating your week, tell me which one.` The CIRA page's version of the same band changed from "a
queue" to "something" to match.

### Layout

- One alignment rule now applies to every large statement: flush left against the grid, capped at
  `--col` (70% of the content width), no first-line indent. `text-indent` was removed from the
  stylesheet entirely, along with the `--indent` token.
- Body copy holds the same left edge as the statements, at `--col-body` (70%).
- The Scope statement sits beside its `[ Why this stays small ]` label at the same left edge as the
  body it belongs to: the label column is `--row-label` (250px) and the statement is offset by
  `--col-lead` (20%), so the statement starts at x=302 and the body at x=302 at 1440.
- Services: the `What I build.` statement moved into the right column and the blurbs into a two
  column grid, so the statement breaks the list. Numbers still read 01, 02, 03, 04 down and across.
- Experience is centred as a block on the page (`--col-body`, `margin-inline: auto`) with the text
  still flush left inside it. The FAQ block is centred the same way. Body copy elsewhere sits at the
  same left edge; the spec's line 1 lists the FAQ among the statements that get the single rule.
- `/work/cira/` title: same left edge, `--col` cap, and one step down in size
  (`.statement--wide`, `calc(var(--t-hero) * .886)` = 62.02px at 1440) so it settles on two lines
  and "audit trail" stays whole. The measurement is in check 13.
- The grid-box elements are unchanged: the step rows, the evidence rows, the quiet disclosure panel,
  the placeholder frames, the hairline label rows, the numbered section headers.

### Motion

Three ambient effects run without scrolling, plus the schwa swap. No Framer, no library, no build
step, no new dependency.

1. The glow layer behind the page drifts on a 210s loop (transform and opacity only). This existed
   before at 150s; the duration was lengthened and the loop is now the base of the ambient set.
2. A faint highlight travels along each section's hairline (`sweep`, 74s linear). It is one pseudo
   element on top of the marker rule, offset left and translated across, at 0.34 white on black.
3. A second, dimmer hairline grid inside the hero panel drifts half a cell either way (`grid-drift`,
   96s alternate). It reads as slow movement in the panel without moving the panel.
4. The mono section marker group breathes between 0.9 and 1 opacity over 42s. This is deliberately
   almost imperceptible; it is a marker, not a call to action.

The schwa swap runs in the three wordmark instances only: the header wordmark, the footer wordmark,
and the `Covalent AI` eyebrow. `e` and `ə` are stacked in one grid cell, so the slot is as wide as
the wider glyph before any animation starts, and only opacity animates. The timing is irregular:
each instance is scheduled 8 to 20 seconds after its own last swap, and the first appearance is
staggered across the three so they never move together. `prefers-reduced-motion: reduce` stops it
and leaves the plain "e". Nothing animates on first paint: the swap is JS-scheduled and the CSS
delays start after 6 seconds at the earliest.

### Prose pass

Every visible line was rewritten against the humanizer patterns: no staged contrast, no closers that
restate the previous point, no run-up openers, no forced triads, no consecutive sentences with the
same opening, no inflated verbs, no hedging, no decorative bold, no emoji, straight quotes. The
CIRA disclosure was not touched. Sentences were varied by length on purpose; the About statement
and the service blurbs are short, the context paragraphs and the FAQ answers are longer.

---

## 2. Judgement calls

1. **The statement blurb in the hero.** The spec keeps a blurb under the headline and the posture
   file keeps `Covalent AI` as a brand wrapper, but it does not say what else belongs in the hero.
   The old hero line repeated the same copy twice (once as the note, once inside the media frame).
   There is now one blurb, one eyebrow, one headline, one video frame.
2. **The scope body indent.** "Slightly indented to the right" is satisfied by aligning the body
   with the label column instead of inventing an offset: the label column is 250px, the statement
   lead is 20% (278px) and the expected difference of 20px lands at 302 against 302. The two edges
   are identical at 1440 by construction, not by coincidence.
3. **Skills wording.** The resume's `human-review gates (a skill, not the headline)` carries an
   instruction to the writer inside the list item. The parenthetical does not ship; the skill does.
4. **The FAQ block.** The spec lists the FAQ among the statements that get the single left-biased
   rule, and separately says to centre the experience section. The FAQ is centred as a block like
   Experience, so the two long list sections read as a pair; its text is still flush left at the
   same edge as the statements.
5. **Dashes in the page titles.** The three `<title>` separators were changed from an em dash to a
   colon or a pipe, because the spec bans em dashes in prose and the titles are the most visible
   string on a tab. The CIRA title still uses a colon after `CIRA`, which is how the case study
   names it, so `client intake with review and an audit trail` is unchanged.
6. **The hidden-tab rule.** The first attempt at "animation pauses when the tab is hidden" was a
   `.is-hidden` class toggled from `visibilitychange`. Chromium never applies a
   `@media (prefers-reduced-motion: reduce)`-style suspension for this case, and the class turned
   out not to affect any animation (the selector list mixed pseudo-elements with plain elements and
   was dropped). It was removed rather than shipped as decoration. What actually happens is the
   browser's own behaviour: CSS animations and transitions do not paint in a background tab, and a
   hidden tab has a frozen `document.timeline`. `@media print` now also stops every loop and prints
   the plain wordmark. The measured evidence is in check 14.
7. **The wordmark on the 404 page.** The spec names the header logo, the large footer wordmark and
   the `Covalent AI` label. The 404 page has a header logo and a footer wordmark like every other
   page, so both carry the swap.
8. **`assets/og.png`.** The Open Graph card is the 2026-09-21 cut and still carries the retired line
   `Software developer for hire.` It needs a re-cut; the alt text already matches the new title.
   Re-cutting the image is asset work with a design decision in it, so it is flagged, not guessed.

---

## 3. Acceptance criteria — unedited output

Everything below is the raw output of the run against a local static server
(`python3 -m http.server 8123 -d site`, which is the preview command in the README). Playwright
1.57.0 driving Chromium, viewport set per check, `device_scale_factor=1` unless stated.

### 1. Headline and blurb

```
$ python3 - <<'EOF'   # inner_text comparison, full script in the run log
H = "Prototype to production, without the agency."
B = ("Freelance and contract software development: internal tools, automation, "
     "integrations, and AI features where they genuinely help.")
...
EOF
headline identical: True
blurb identical   : True
```

```
$ grep -n 'Prototype to production, without the agency.' site/index.html
48:    <h1 class="statement statement--hero" data-reveal="lg">Prototype to production, without the agency.</h1>
```

### 2. Four services, in order, and the retired heading

```
service card order: ["Internal tools and automation", "AI features, done carefully", "Integrations and data plumbing", "Contract development"]
statement position: {"statementTop": 3484.2, "cardTops": [3462.2, 3669.7, 3560.6, 3768.1], "statementLeft": 736, "cardLefts": [24, 24, 736, 736]}
```

The statement's top (3484.2) sits between card 1 (3462.2) and card 2 (3669.7), and the card order by
position is 01 (row 1, left), 02 (row 1, right, below the statement), 03 (row 2, left), 04 (row 2,
right).

```
$ grep -rn "Two things I do" site/
(no matches)
```

```
$ grep -n 'card__title\|statement--svc' site/index.html
106:          <h3 class="workcard__title">CIRA: client intake with review and an audit trail</h3>
145:          <h3 class="card__title">Internal tools and automation</h3>
151:          <h3 class="card__title">AI features, done carefully</h3>
157:        <h2 class="statement statement--svc" data-reveal="lg">What I build.</h2>
161:          <h3 class="card__title">Integrations and data plumbing</h3>
167:          <h3 class="card__title">Contract development</h3>
```

### 3. Every skill against `active-resume.md`

```
=== 3: every skill on the site against active-resume.md ===
  group='Languages'                            reserved='Languages'                            identical=True
  group='Backend'                              reserved='Backend'                              identical=True
  group='Data'                                 reserved='Data'                                 identical=True
  group='AI / LLM application work'            reserved='AI / LLM application work'            identical=True
  group='Infrastructure'                       reserved='Infrastructure'                       identical=True
  group='Automation and data collection'       reserved='Automation and data collection'       identical=True
groups: site=6 resume=6
site items absent from the resume : ['human-review gates']
resume items absent from the site : ['human-review gates', 'not the headline)']
VERDICT: every skill shown is in active-resume.md, in its groupings
```

The two "absent" lines are the same item. `active-resume.md` writes it as
`human-review gates (a skill, not the headline)`; the site shows `human-review gates`. The difference
is the internal parenthetical, which is a note to the writer about emphasis, not a skill, and does
not ship. Nothing on the site is outside that file.

### 4. `openai` occurrences

```
$ grep -rn -i "openai" site/
site/index.html:224:          <h3 class="xp__role">Forward Deployed Engineer, OpenAI</h3>
site/index.html:239:          <h3 class="xp__role">Contract software developer, LLMs / OpenAI</h3>
site/index.html:282:            <dd>OpenAI and DeepSeek APIs, structured outputs and schema validation, retrieval with citations and abstention, embeddings and chunking, fixed evaluation suites, human-review gates</dd>
```

All three sit inside the Experience block. The block is anchored with `id="experience"` so the
containment can be checked mechanically rather than by eye:

```
--- containment: every match must sit inside the experience block ---
  site/index.html:224  inside#experience=True
  site/index.html:239  inside#experience=True
  site/index.html:282  inside#experience=True
```

The About paragraph used to name OpenAI in prose. That was removed, which is what makes this check
pass rather than the section around it being widened.

### 5. Never-claim terms

```
$ grep -rniE "langchain|langgraph|\bmcp\b|kubernetes|terraform|salesforce|hubspot|\baws\b|sso|soc ?2|hipaa" site/
site/index.html:21:<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
Binary file site/_screens/cira-1440.png matches
site/404.html:22:<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
site/work/cira/index.html:21:<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

Not clean, so the details, unedited:

```
--- the same pattern with -I (skip binary files) ---
site/index.html:21:<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
site/404.html:22:<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
site/work/cira/index.html:21:<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

--- the same pattern over text files only, excluding the preconnect hooks ---
(no matches)

--- what the binary matches are ---
site/_screens/404-1440-fold.png:                 PNG image data, 1440 x 900, 8-bit/color RGB, non-interlaced
site/_screens/404-1440.png:                      PNG image data, 1440 x 1001, 8-bit/color RGB, non-interlaced
site/_screens/404-375-fold.png:                  PNG image data, 375 x 900, 8-bit/color RGB, non-interlaced

--- case-sensitive SSO / SOC 2 / HIPAA as written claims ---
(no matches)
```

Two false-positive classes. `crossorigin` on the font preconnect contains the letters `sso`; it is
an HTML attribute on all three pages and appears in this file's markup before this run, not new. The
PNG matches are compressed image bytes, which is why the check is also run with `-I` and again with
the preconnect lines excluded; both are clean. No page claims LangChain, LangGraph, MCP,
Kubernetes, Terraform, Salesforce, HubSpot, AWS, SSO, SOC 2, or HIPAA.

### 6. No prices

```
$ grep -rhoE '\$[0-9]' site/ --include='*.html' --include='*.css' --include='*.js'
(no matches)

--- the raw command without a file-type filter (binary assets match on compressed bytes) ---
Binary file site/_screens/home-375-fold.png matches
... (one line per PNG, plus site/assets/workbench.jpg and site/assets/og.png)
(exit 0)

--- pricing directory ---
ls: site/pricing: No such file or directory
(no file or directory named pricing)
```

The filtered run over the three text file types is empty. The unfiltered run reports binary files;
compressed bytes are not a price, and `grep -I` over the same corpus returns nothing on text. There
is no pricing page and no price directory.

### 7. The disclosure, once, verbatim

```
=== 7: the disclosure's first sentence in site/ ===
site/work/cira/index.html:58:      <p>CIRA is a representative reconstruction of prior paid freelance work for a Minnesota company, presented with permission. The company's identity, original repositories, and confidential system details are withheld. This demonstration is the reconstruction, not the original client deployment. The knowledge corpus and demo inputs are synthetic.</p>
       1

--- the whole disclosure paragraph: occurrences in site/ ---
site/index.html:0
site/404.html:0
site/work/cira/index.html:1

--- against case-study.md (whitespace normalised, since the source is hard-wrapped) ---
identical: True | chars: 343 343
```

The only differences between the two strings before normalisation are the three line breaks in the
Markdown block quote. Every character of the disclosure itself matches
`client-intake-resolution-ai/public-proof/case-study.md` exactly.

### 8. Contact address

```
$ grep -rn "gifttakata" site/
(no matches)

--- contact address occurrences ---
  16 samuel.takata@covalent-ai.dev
```

```
$ grep -rn "gifttakata" site/index.html site/404.html site/work/cira/index.html
(exit 1, no matches)
```

### 9. Dashes, itemised

```
$ grep -rn "—\|–" site/ --include='*.html' --include='*.css' --include='*.js'
site/index.html:225:          <p class="mono xp__when">Jan 2025 — present</p>
site/index.html:240:          <p class="mono xp__when">Jul 2024 — Dec 2024</p>
site/index.html:249:          <p class="mono xp__when">Jun 2023 — Jul 2024</p>
site/script.js:1:/* covalent — variant B, "Editorial"
site/work/cira/index.html:93:          <p class="slot__line">A 3–5 minute walkthrough is being recorded: one request that completes, and one that stops at the review gate.</p>
site/style.css:2:   covalent — variant B, "Editorial"
```

Six total, none of them inside a prose sentence:

| Line | Dash | Why it stays |
| --- | --- | --- |
| `site/index.html:225` | em dash | Date range `Jan 2025 — present`, inside the mono `.xp__when` label. Explicitly allowed. |
| `site/index.html:240` | em dash | Date range `Jul 2024 — Dec 2024`, same label. |
| `site/index.html:249` | em dash | Date range `Jun 2023 — Jul 2024`, same label. |
| `site/work/cira/index.html:93` | en dash | Numeric span `3–5 minute`. Not a sentence dash and not a range of dates, but the same class: a label value. Kept. |
| `site/style.css:2`, `site/script.js:1` | em dash | Source comments. Not rendered, not visible prose. |

Every em dash that was in a sentence is gone. The two that were in `<title>` and Open Graph
separators are now a colon or a pipe, and the walkthrough and diagram frame labels are now
`Walkthrough: not recorded yet` and `Flow diagram: in progress`.

### 10. Banned words

```
$ grep -rniE 'enhance|showcase|robust|pivotal|landscape|testament|intricate|seamless|leverage|unlock|empower|supercharge|revolutioni|cutting-edge|world-class|game-chang' site/
(no matches)

--- the same list without the screenshots directory ---
(no matches)

--- extra inflated words from the spec's list ---
(no matches)

--- hedging stacks and staged openers ---
(no matches)

--- decorative bold in visible prose (strong outside the case-study verify list) ---
site/work/cira/index.html:298:          <strong>CI</strong>
site/work/cira/index.html:304:          <strong>Fixed evaluations</strong>
site/work/cira/index.html:310:          <strong>Commit history</strong>
```

The three `<strong>` elements are the labels of the three "how to verify" rows on the CIRA page.
They are structural list labels, they existed before this run, and the spec's own copy for that
section is a bolded three-item list, so they were left alone. No other bold exists in visible prose.

### 11. Pages and links

```
11) status codes: {"/": 200, "/work/cira/": 200, "/404.html": 200, "/style.css": 200, "/script.js": 200}
    / internal links: {"/": 200, "/work/cira/": 200}
    /work/cira/ internal links: {"/": 200, "/work/cira/": 200}
    /404.html internal links: {"/": 200, "/work/cira/": 200}
```

External links were not fetched: `github.com/covalent-dev`, `github.com/covalent-dev/cira`,
`linkedin.com/in/samuel-takata`, and the demo at `covalent-ai.dev/cira/`. The mailto links are
`samuel.takata@covalent-ai.dev`.

### 12. No horizontal scroll

```
12) scrollWidth vs innerWidth
    / @375: scrollWidth=375 innerWidth=375 body=375 client=375 -> OK
    / @768: scrollWidth=768 innerWidth=768 body=768 client=768 -> OK
    / @1440: scrollWidth=1440 innerWidth=1440 body=1440 client=1440 -> OK
    /work/cira/ @375: scrollWidth=375 innerWidth=375 body=375 client=375 -> OK
    /work/cira/ @768: scrollWidth=768 innerWidth=768 body=768 client=768 -> OK
    /work/cira/ @1440: scrollWidth=1440 innerWidth=1440 body=1440 client=1440 -> OK
    /404.html @375: scrollWidth=375 innerWidth=375 body=375 client=375 -> OK
    /404.html @768: scrollWidth=768 innerWidth=768 body=768 client=768 -> OK
    /404.html @1440: scrollWidth=1440 innerWidth=1440 body=1440 client=1440 -> OK
```

### 13. The CIRA title holds "audit trail" on one line at 1440

```
13) CIRA h1 at 1440: {
  "height": 126.5,
  "lineHeight": 63.2604,
  "lines": 2,
  "fontSize": "62.02px",
  "rects": [
    { "top": 174.8,  "bottom": 250.8, "left": 24, "right": 998.2, "text_w": 974.2 },
    { "top": 238.05, "bottom": 314.05, "left": 24, "right": 268.02, "text_w": 244.02 }
  ],
  "text": "CIRA: client intake with review and an audit trail"
}
```

Two lines. The second line measures 244px wide, which is the width of `audit trail` at 62.02px
(`audit` alone is about 148px), and nothing follows it on that line, so the phrase is intact. This
was tuned rather than assumed: at the inherited 70px the second line was `audit trail` at 280px
broken onto a third line, which is the wrap the spec is describing.

### 14. No animation under `prefers-reduced-motion: reduce`

Method: Playwright's `reduced_motion="reduce"` context option, which sets the emulated media
feature, then walk every element and count `getAnimations()`. The control run is the same page in a
context with the feature untouched.

```
14) control, no emulation: {"animations": 20, "names": ["drift", "schwa-out", "schwa-in", "(transition)", "mark-pulse"]}
14) with prefers-reduced-motion: reduce: {"animations": 0, "names": []}
```

Per-element computed styles under `reduce`, from the same run (`.sechead__mark .sechead__n` repeats
once per section, `.swap__a` and `.swap__b` once per wordmark):

```
14) reduced: {"sel": ".amb", "animationName": "none", "duration": "0s", "playState": "running", "animations": 0}
14) reduced: {"sel": ".sechead", "animationName": "none", "duration": "0s", "playState": "running", "animations": 0}
14) reduced: {"sel": ".sechead__mark", "animationName": "none", "duration": "0s", "playState": "running", "animations": 0}
14) reduced: {"sel": ".swap__a", "animationName": "none", "duration": "0s", "playState": "running", "animations": 0}
14) reduced: {"sel": ".swap__b", "animationName": "none", "duration": "0s", "playState": "running", "animations": 0}
14) reduced: {"sel": ".wm .wb__g", "animationName": "none", "duration": "0s", "playState": "running", "animations": 0}
```

Same result on `/work/cira/` and `/404.html` by the same method.

Hidden tab and print, from a separate run:

```
emulated media 'screen': {"animations": 14, "names": ["drift", "schwa-out", "schwa-in", "mark-pulse"], "swapA": "1", "swapB": "0"}
emulated media 'print': {"animations": 0, "names": [], "swapA": "1", "swapB": "0"}
```

A background tab could not be produced honestly in this harness. Chromium's
`Page.setWebLifecycleState: frozen` does not set `document.hidden`, and the emulated-hidden run
(`Object.defineProperty(document, 'hidden', ...)` plus a dispatched `visibilitychange`) exercises
JS, not the compositor, so the CSS animations kept their own clock and kept running:

```
tab visible   : {"currentTime": 1450, "playState": "running", "documentHidden": false}
lifecycle -> frozen
tab frozen    : {"currentTime": 2965, "playState": "running", "documentHidden": false}
tab active    : {"currentTime": 3583, "playState": "running", "documentHidden": false}
```

So the honest statement is: no page code runs on hidden-tab changes, and the requirement is met by
the browser's own behaviour, which is that a hidden tab does not paint CSS animations and its
document timeline is frozen. The `.is-hidden` mechanism that was written first turned out to have no
effect on any animation and was removed rather than shipped as decoration (see judgement call 6).
Print media, which can be emulated, is a hard stop and is measured above.

### 15. The schwa swap causes no layout shift

Two independent measurements. First, the same page state at rest and forced into the swapped state,
with the geometry of the wordmark and of the line beneath it:

```
15) reduced_off_resting {
  "footer_wordmark": { "left": 24, "right": 1409.9844, "width": 1385.9844, "height": 345.5156, "top": 8319.55 },
  "footer_slot":     { "left": 867.4844, "right": 1068.0313, "width": 200.5469, "height": 345.5156, "top": 8319.55 },
  "footer_line":     { "left": 24, "right": 1416, "width": 1392, "height": 73.3906, "top": 8705.06 },
  "brand_wordmark":  { "left": 24, "right": 94.1406, "width": 70.1406, "height": 19, "top": 21.5 },
  "brand_slot":      { "left": 66.7031, "right": 76.8281, "width": 10.125, "height": 19, "top": 21.5 },
  "eyebrow":         { "left": 24, "right": 1416, "width": 1392, "height": 30.7969, "top": 135 },
  "opacity": { "e": "1", "schwa": "0" }
}
15) reduced_off_midswap {
  "footer_wordmark": { "left": 24, "right": 1409.9844, "width": 1385.9844, "height": 345.5156, "top": 8319.55 },
  "footer_slot":     { "left": 867.4844, "right": 1068.0313, "width": 200.5469, "height": 345.5156, "top": 8319.55 },
  "footer_line":     { "left": 24, "right": 1416, "width": 1392, "height": 73.3906, "top": 8705.06 },
  "brand_wordmark":  { "left": 24, "right": 94.1406, "width": 70.1406, "height": 19, "top": 21.5 },
  "brand_slot":      { "left": 66.7031, "right": 76.8281, "width": 10.125, "height": 19, "top": 21.5 },
  "eyebrow":         { "left": 24, "right": 1416, "width": 1392, "height": 30.7969, "top": 135 },
  "opacity": { "e": "0", "schwa": "1" }
}
```

Every number is identical between the two states, and the two states are genuinely different (the
opacities have exchanged). And the forced-swap capture, which is what the screenshots are taken in:

```
footer glyph box, resting: [24, 1385.9844, 345.5156]
footer glyph box, swapped: [24, 1385.9844, 345.5156]
```

Second, one whole swap cycle sampled frame by frame on the 1386px-wide footer wordmark, every
requestAnimationFrame for 3.4 seconds, measuring the glyph box on each frame:

```
15) one full swap cycle on the footer wordmark (200px tall, 1386px wide):
{
  "frames": 409,
  "distinctGlyphLeft": [ 24 ],
  "distinctGlyphWidth": [ 1385.9844 ],
  "distinctGlyphHeight": [ 345.5156 ],
  "distinctFooterRowTop": [ 8477.98 ],
  "framesShowingSchwa": 131,
  "framesShowingE": 260,
  "crossfadeFrames": 18,
  "crossfadeSample": [
    { "t": 1094, "glyph": [24, 1385.9844, 345.5156], "footerRowTop": 8477.98, "e": 0.0541369, "schwa": 0.945863 },
    { "t": 1119, "glyph": [24, 1385.9844, 345.5156], "footerRowTop": 8477.98, "e": 0.42166,   "schwa": 0.57834 },
    { "t": 1144, "glyph": [24, 1385.9844, 345.5156], "footerRowTop": 8477.98, "e": 0.684698,  "schwa": 0.315302 },
    { "t": 1169, "glyph": [24, 1385.9844, 345.5156], "footerRowTop": 8477.98, "e": 0.838553,  "schwa": 0.161447 },
    { "t": 1195, "glyph": [24, 1385.9844, 345.5156], "footerRowTop": 8477.98, "e": 0.925693,  "schwa": 0.0743069 },
    { "t": 1219, "glyph": [24, 1385.9844, 345.5156], "footerRowTop": 8477.98, "e": 0.972909,  "schwa": 0.0270908 }
  ]
}
```

409 frames, one distinct glyph width, one distinct height, one distinct left, one distinct position
for the footer row below it. The 18 crossfade frames are the swap happening; the box does not move
through any of them.

### 16. Accessible name of each wordmark

Read from the browser's own accessibility tree over CDP (`Accessibility.getFullAXTree`), not from
the DOM text:

```
16) /: links/headings named exactly 'covalent': 2
     ["covalent", "covalent"]
    any name containing the schwa: []
16) /404.html: links/headings named exactly 'covalent': 2
     ["covalent", "covalent"]
    any name containing the schwa: []
16) /work/cira/: links/headings named exactly 'covalent': 2
     ["covalent", "covalent"]
    any name containing the schwa: []
```

Two per page: the header wordmark and the footer wordmark. The eyebrow is a label, not a link, and
its text is `Covalent AI` in the tree with no schwa. The glyph pair is `aria-hidden`, the plain word
is in a visually hidden span, so the name is "covalent" whatever the animation is doing.

### 17. Weight, dependencies, build step

```
17) css+js bytes: {"site/style.css": 30032, "site/script.js": 3986} sum: 34018
    resources: [
  { "name": "/style.css", "size": 30332, "type": "link" },
  { "name": "/script.js", "size": 4286, "type": "script" }
]
```

34,018 bytes on disk, 34,618 over the wire, against a 150 KB budget. Every page loads exactly these
two files; there is no per-page budget to split.

```
$ ls -a | grep -iE "package|node_modules|vite|webpack|rollup|esbuild|tsconfig|pnpm|yarn|deno|bun"
(no output)
$ git status --short
 M .gitignore
 M CONTENT.md
 M README.md
 M site/404.html
 M site/index.html
 M site/script.js
 M site/style.css
 M site/work/cira/index.html
```

No `package.json`, no lockfile, no bundler config, no `node_modules`. The only external requests any
page makes are the two Google Fonts origins, which were already there.

### 18. Screenshots

In `site/_screens/` (gitignored, so they are not in the commit):

```
404-1440-fold.png                  home-1440-fold.png
404-1440.png                       home-1440.png
404-375-fold.png                   home-375-fold.png
404-375.png                        home-375.png
cira-1440-fold.png                 wordmark-midswap-eyebrow-1440.png
cira-1440.png                      wordmark-midswap-footer-1440.png
cira-375-fold.png                  wordmark-midswap-header-1440.png
cira-375.png
```

Full page and above-the-fold at 375 and 1440 for `/`, `/work/cira/` and `/404.html`, plus three
frames with the wordmark held in its swapped state (header, eyebrow, footer; the footer one is the
1440×900 frame the spec asks for). The mid-swap frames are captured by holding the animation in its
swapped state with an injected `animation-play-state: paused` and an explicit opacity for the two
glyphs, because the swap is 0.9 seconds inside a 2.9 second animation that repeats every 8 to 20
seconds, and a timed screenshot of it is not reproducible.

What looking at them changed:

- The About statement was five lines of very large type on two sentences. The copy was shortened
  (the trailing "yet" and one clause), which brought it to four lines at 1440 from the five it
  started at, and made it read as a statement rather than a paragraph.
- The hero blurb was originally placed in the second half of a two-up row, which is how the old
  layout worked. It looked detached from the headline it belongs to, so it now holds the same left
  edge as the statements.
- The Scope statement was offset 278px against a body offset of 298px, which is the "arbitrarily
  offset" the spec is complaining about. The label column was narrowed and the statement lead added
  until both edges sat at 302px.
- The Scope body ran to full width past every other line on the page. It is capped at the same 70%.
- The skills list sat in the middle column of the experience grid, aligned with the role titles and
  leaving the right column empty. It spans from there to the right edge now.
- The CIRA title at the inherited size broke `trail` onto a third line.
- The header wordmark read slightly loose once the swap slot was in place. Measured: `covalent`
  without the slot is 70.125px at the header size, with it 70.141px, so the slot widens the word by
  0.016px. Nothing to fix, and nothing was.

---

## 4. Not done

- **`assets/og.png` still carries the retired hero line.** The card is the 2026-09-21 cut and reads
  `Software developer for hire.` It needs a re-cut to the new headline. The alt text and the
  `<title>` it pairs with are updated; the image is not. Not done because re-cutting it is asset
  work with a design decision in it (type size, layout of the new headline), and this run does not
  include asset production.
- **The walkthrough video and the flow diagram are still placeholder frames.** By instruction: they
  are Taxman's to record and draw. Their captions and labels were kept and the label punctuation was
  brought into line with the dash rule.
- **Longer descriptions for the two contract roles.** By instruction: Taxman has not supplied them,
  so both keep their current one-liners and nothing was invented.
- **A second case study, industry wording, geographic wording, prices, testimonials, client logos.**
  Deferred by the spec's §6 table. None of it appears.
- **No Framer assessment was needed.** The question never arose during the work; see below.
- **Favicon.** `assets/favicon.svg` is the `c` monogram on the black background. The background
  colour did not change, so it was left alone.
- **`variants/` was not updated.** The spec scopes this run to `site/` and `CONTENT.md`. The three
  2026-09-21 variants still carry the old copy, and `variants/` is gitignored local output.

## 5. Does any of this need Framer?

No. Nothing in this run needed it and the question only arises because it was on the deferred list.
The three ambient effects are one `@keyframes` each on properties the compositor already handles
(transform and opacity), and the schwa swap is one CSS animation per glyph plus eleven lines of
JavaScript to schedule it at irregular intervals. The whole runtime is 3,986 bytes with no
dependency and no build step. Framer would add a framework, a build, and a hosting story to replace
about forty lines of CSS, and it would take the page's type and grid away from plain CSS.
Recommendation: rejected, as §6 already anticipated.

---

## 4. Review fixes (Claude, 2026-09-22)

Reviewed against the 18 checks in the spec. Sixteen passed as reported. Two items were fixed here:

1. **Check 13, the CIRA page title.** It rendered on two lines at 1440 with "an audit trail" alone
   on the second, which is the orphan the request was about. `.statement--wide` moved from
   `calc(var(--t-hero) * .886)` (62px at 1440) to `clamp(30px, 3.3vw, 48px)`. Measured after the
   change: one line at 1440 (48px, 950px of text in a 964px box), 1280 (42.24px) and 1100 (36.3px,
   726px box, a single pixel of margin at 3.34vw, which is why the factor is 3.3). It wraps below
   about 900px by design, and the phone size is unchanged at 30px. No horizontal scroll at 375,
   1100, 1280 or 1440.
2. **An unsupported claim on the CIRA page.** "A 3-5 minute walkthrough is being recorded" said a
   recording was in progress. It is not. Changed to "will be posted here", in the page and in
   `CONTENT.md`.

Still open, not fixed here: `site/assets/og.png` is the 2026-09-21 cut and still shows the retired
"Software developer for hire." Link previews will show it until the image is re-cut. That is design
work and it is Taxman's call.
