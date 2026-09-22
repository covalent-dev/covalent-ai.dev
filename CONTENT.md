# CONTENT SPEC — canonical copy for the site

Owner: Taxman. Rewritten in the site-posture-v2 run from `site-posture-expansion-spec.md` and the
posture refs (`portfolio-posture-and-resume.md`, `active-resume.md`). **This file is the source of
truth for wording.** The site is a single design now; the three 2026-09-21 variants are in the
history of the `redesign-variants` branch. If the site needs a line this file does not have, add it
here first.

Positioning: one person who takes work from first prototype to running software, instead of an
agency that hands it off. CIRA is one example of that work, not the identity.

Hard rules that apply to every string below:

- First person singular. Never "we", never "the studio", never "the team". (The FAQ questions talk
  about the visitor's team, which is fine; the answers are first person.)
- **Software first, AI as a tool.** The site is not an AI agency or an "AI consultancy".
- **No prices anywhere.** No dollar amounts, no price cards, no `/pricing/` page. The only money
  call to action is the price-sheet email:
  `mailto:samuel.takata@covalent-ai.dev?subject=Price%20sheet`
  (label: `Email me for a price sheet`).
- **`OpenAI` appears in exactly one place: the Experience section of the home page.** Not in the
  hero, `<title>`, meta description, Open Graph tags, headings outside Experience, or any call to
  action. No OpenAI clients, internal tools, confidential delivery, or "ex-OpenAI" phrasing.
- No location and no city. Remote only. No years of experience, project counts, metrics, client
  names, logos, or testimonials.
- **Provenance is stated in exactly one place: the disclosure on `/work/cira/`.** No other page may
  claim, hint at, or reconstruct past client work; "I've built this for a service business
  before…" and anything like it stays deleted and must not come back in another form.
- Banned words: enhance, showcase, robust, pivotal, landscape, testament, intricate, seamless,
  leverage, unlock, empower, supercharge, revolutionize, cutting-edge, game-changing, world-class,
  next-generation, harness, synergy, "AI-powered" as an adjective on everything.
- No em dash or en dash inside a prose sentence. Date ranges (`Jan 2025 — present`) and numeric
  ranges (`3–5 minute`) may keep one.
- The disclosure paragraph below appears **once, on `/work/cira/` only**. Never repeat or
  paraphrase it anywhere else. The home-page work card must not state or imply who CIRA was built
  for.

Identity:

| Field | Value |
| --- | --- |
| Name | Samuel Takata |
| Brand wrapper | `Covalent AI` |
| Wordmark | `covalent` (lowercase, one word) |
| Domain | covalent-ai.dev |
| Email | samuel.takata@covalent-ai.dev |
| Location | Remote. Do not print a city. |
| GitHub | https://github.com/covalent-dev |
| LinkedIn | https://linkedin.com/in/samuel-takata |
| Project repository | https://github.com/covalent-dev/cira (real, not a placeholder) |
| Footer | wordmark, email, GitHub, LinkedIn, © 2026 Samuel Takata |
| CTA | email only (`mailto:`). No forms, no booking links, no newsletter. |

Page titles / meta descriptions:

- `/index.html` — title `Covalent AI: prototype to production, without the agency`; description
  `Freelance and contract software development: internal tools, automation, integrations, and AI features where they genuinely help.`
- `/work/cira/index.html` — title `CIRA: client intake with review and an audit trail | Covalent AI`;
  description `A worked example of intake that validates, classifies and routes requests, stops uncertain ones for human review, and answers questions from a document corpus with citations.`
- `/404.html` — title `Page not found | Covalent AI`.
- There is no `/pricing/` page. The directory is deleted, not hidden.

The og:image (`assets/og.png`) is the 2026-09-21 cut and still reads `Software developer for hire.`
It needs a re-cut to the new headline; that asset work is deferred, and the alt text already
matches the new title.

---

## NAVIGATION (every page)

Home · Work · Email me

`Work` links to `/work/cira/`. Wordmark links to `/`. `Email me` is
`mailto:samuel.takata@covalent-ai.dev`. No Pricing link anywhere: not in the header, the footer,
or the 404 page.

---

## HOME

### Hero

Eyebrow: `Covalent AI` (mono label, carries the schwa swap on its "e").

Headline (H1, exact):

> Prototype to production, without the agency.

Blurb under the headline (exact):

> Freelance and contract software development: internal tools, automation, integrations, and AI
> features where they genuinely help.

No name in the hero. The name and the roles belong in Experience.

Video slot: the designed frame stays, with the mono caption `Walkthrough: not recorded yet`.
Marked with `<!-- PLACEHOLDER: ... -->`.

### Section: about

Label: `About`

Statement:

> I build software a business needs and does not have yet: the internal tool, the report nobody can
> pull, the integration between two systems that never talked.

Body, under the label `[ Context ]`:

> Most of that work is unglamorous and internal, which suits me. It is usually the reason someone
> is staying late, and almost nobody wants to own it. I have built this kind of software on contract
> and as a forward deployed engineer.
>
> I keep the work small on purpose. One workflow, one source, measured before I call it done, with a
> person in the loop when a decision is uncertain. That is how delivery stays predictable.

### Section: featured work

Label: `Featured work`

Card title: `CIRA: client intake with review and an audit trail`

Card tags: `Intake` · `Triage` · `Review gate` · `Retrieval with citations` · `Audit trail`

Card text:

> CIRA takes a request from first contact to a recorded decision. It validates the request, checks
> for duplicates, classifies type and priority, picks an owner, and assesses confidence and risk.
> Anything uncertain or sensitive stops at a review gate before anything downstream changes. Every
> accepted request runs the same ordered steps and leaves an audit trail tied together by a
> correlation ID.
>
> It also answers questions from a versioned document corpus. Every answer cites the passage it
> used, and when the documents do not support an answer it says so.

Card footer line: `Read the case study` (links to `/work/cira/`).

The card carries a workbench image with alt text `The CIRA workbench during an intake that stopped
at the review gate`. It must not name or hint at who the system was built for.

### Section: why this stays small

Label: `Scope`

Statement: `Systems like this fail on scope, not on models.`

Body, under the label `[ Why this stays small ]`:

> Starting small is the method, not a hedge. The decisions that shape the software sit at the edges:
> what counts as a duplicate, which requests must never be automated, and what the reviewer needs to
> see to say yes. I would rather make those decisions visible in two weeks than promise a platform.

### Section: services

Label: `Services`

Statement, and where it sits: `What I build.` is placed **between the first and the second service
blurb**, in the right column, so it breaks the list instead of sitting on top of it.

1. **Internal tools and automation**
   > The admin work, the reporting, and the data entry that eats someone's week. I build the tool
   > that replaces it, sized so the first version is running while the problem is still worth
   > solving.
2. **Integrations and data plumbing**
   > APIs, webhooks, and the systems that were never meant to talk to each other. That includes
   > collecting data from sites and feeds, and the cleaning and deduplication that makes the result
   > usable.
3. **AI features, done carefully**
   > Classification, drafting, and answers pulled from a company's own documents with the source
   > attached. Where a decision is uncertain, a person reviews it before anything downstream
   > changes.
4. **Contract development**
   > Joining an existing team for a stretch, from prototype to production. I take on scoped
   > delivery, work inside your process, and hand back something your team can run.

Exactly these four. No support retainer, agent orchestration, chatbots, fine-tuning, dashboards, or
"AI strategy". No dollar amounts in any of them.

Call to action under the section, visible without expanding anything:

> `Email me for a price sheet` → `mailto:samuel.takata@covalent-ai.dev?subject=Price%20sheet`

### Section: how engagements work

Label: `How it works`
Statement: `Four steps, no surprises.`

1. **Diagnostic** — One workflow mapped, with a decision-ready plan and a scope for the first build.
   No code.
2. **Pilot** — One workflow, one source, a sandbox boundary, review routing, fixed evaluations, and
   a runbook.
3. **Implementation** — One qualified workflow with a reviewed integration and a staged handoff.
4. **Support** — A monthly block for changes, questions, and fixes on what I built.

### Section: experience

Label: `Experience`
Statement: `Where I've worked.`

From `active-resume.md` only. Nothing beyond this list. This is the only section that may contain
the word `OpenAI`.

| When | Role | Detail |
| --- | --- | --- |
| Jan 2025 — present | Forward Deployed Engineer, OpenAI | exactly the five bullets below |
| Jul 2024 — Dec 2024 | Contract software developer, LLMs / OpenAI | `Contract software development, focused on LLM product work.` |
| Jun 2023 — Jul 2024 | Contract software developer | `Contract software development for multiple clients.` |
| 2025 | B.A. Philosophy, University of Minnesota Twin Cities | one line, no bullets |

The two contract roles keep these one-line descriptions until Taxman supplies longer honest ones.
Do not invent any.

The five Forward Deployed Engineer bullets, first person, exactly these:

> - I build full-stack systems that deliver customer value.
> - I embed with customer teams, understand their needs, and guide adoption of what I build.
> - I scope work, sequence delivery, and remove blockers early.
> - I make trade-offs between scope, speed, and quality, and adjust plans to protect delivery.
> - I contribute directly in the code when progress or clarity depends on it.

Do not add the resume's summary line, Research/Product feedback, internal playbooks, client
names, internal tools, or confidential delivery.

Skills, as grouped lists in the same section, copied from the Skills section of `active-resume.md`
with its groupings and its order. The parenthetical "(a skill, not the headline)" is an internal
note and does not ship:

> **Languages** — Python, SQL, JavaScript, HTML/CSS
> **Backend** — FastAPI, Pydantic, REST APIs and JSON contracts, SQLAlchemy, Alembic migrations
> **Data** — PostgreSQL, pgvector
> **AI / LLM application work** — OpenAI and DeepSeek APIs, structured outputs and schema
> validation, retrieval with citations and abstention, embeddings and chunking, fixed evaluation
> suites, human-review gates
> **Infrastructure** — Docker and Compose, GitHub Actions CI, Linux deployment behind nginx with
> TLS, structured JSON logging, audit trails
> **Automation and data collection** — Playwright, HTML/feed/API collectors, scheduled jobs,
> deduplication and normalization pipelines

No skill that file does not list.

### Section: FAQ

Label: `FAQ`
Statement: `Questions I get asked.`

1. **What does a pilot include?**
   > One bounded piece of software that solves one problem: an automation, an integration, or an
   > AI-assisted workflow when that is the actual need. It comes with tests, a runbook, and a
   > walkthrough. Scope and price are agreed in writing before it starts.
2. **What does it cost?**
   > There is no price list on this site. Tell me what you need and I will send the current price
   > sheet.
   Followed by `Email me for a price sheet` → the price-sheet mailto above. No amounts.
3. **Will it work with the tools we already use?**
   > That is usually the point. I connect to the systems you already run, and the first build goes
   > against a sandbox boundary, so nothing in your live systems changes until you have seen it
   > work.
4. **What happens to our data during a pilot?**
   > A pilot uses synthetic or approved sanitized samples. I don't take regulated or sensitive data
   > into one without a separate review.
5. **How do we start?**
   > Email me with the work that eats the most time. I'll tell you whether it is a fit and what a
   > diagnostic would cover.

No legal, IP, tax, contract, or employment answers. No question about rates for work outside the
emailed price sheet, or guarantees.

### Closing band

Statement: `If something is eating your week, tell me which one.`
Sub: `I'll reply with whether it is a fit and what I'd look at first.`
Button: `Email me` → `mailto:samuel.takata@covalent-ai.dev`

---

## PRICE SHEET (emailed, never on the site)

There is no pricing page and no price card. A visitor who wants numbers emails
`samuel.takata@covalent-ai.dev` with the subject `Price sheet`, and Taxman replies with the sheet.
Source of truth for the sheet itself is `portfolio-posture-and-resume.md`; those figures never
appear in `site/`.

---

## CIRA CASE STUDY (`/work/cira/`)

Breadcrumb: `Work / CIRA`

### Title

`CIRA: client intake with review and an audit trail`

One step down in size from the home hero (`.statement--wide`) so it settles on two lines at 1440
and "audit trail" stays whole.

### One-sentence problem

> A service business receives requests through forms, email, and support channels. Each one has to
> be checked, classified, assigned, recorded, and followed up.

### Disclosure (verbatim, exactly once, near the top, visually quiet but readable)

> CIRA is a representative reconstruction of prior paid freelance work for a Minnesota company,
> presented with permission. The company's identity, original repositories, and confidential
> system details are withheld. This demonstration is the reconstruction, not the original client
> deployment. The knowledge corpus and demo inputs are synthetic.

Render it in a quiet panel: secondary text tier, hairline border, no icon, no heading louder
than the body. It must not appear on any other page, in full or paraphrased. This is the **only**
place on the site where provenance is stated. It is exempt from the prose pass and is fixed text.

### Demo

Line: `Open to try, no login.` next to the link `Open the demo` →
`https://covalent-ai.dev/cira/`.
Second line: `It runs in rules-only mode, so no live model call is made. The live-model version is
available on request:` followed by the `email me` mailto link.

### Video slot

A designed placeholder frame, 16:9, labelled `Walkthrough: not recorded yet`, with the line
`A 3–5 minute walkthrough is being recorded: one request that completes, and one that stops at the
review gate.` Mark with `<!-- PLACEHOLDER: ... -->`.

### Diagram slot

A designed placeholder frame, labelled `Flow diagram: in progress`, with the line
`The review gate and the ordered adapter steps, drawn from the current implementation.`
Mark with `<!-- PLACEHOLDER: ... -->`. Do not reuse the diagram images in the CIRA repository.

### What it does

> For each intake, CIRA validates the request, checks for an existing completed effect,
> classifies type and priority, selects an owner, and assesses confidence and risk. An optional
> model decision can preserve or tighten the rules' safety requirements, never loosen them.
> Uncertain or sensitive decisions go to human review before CRM changes are allowed.
>
> An accepted request follows an ordered adapter workflow: duplicate lookup, contact,
> conversation, ticket, note, and status. In the hosted demo those effects are recorded in
> memory; the implemented Erxes adapter stays dormant. Postgres persists workflow results,
> review records, and audit events. A correlation ID ties the events together without putting
> the raw request message into the audit trail.
>
> The service also answers questions over a versioned document corpus, cites supporting
> passages, and abstains when there is insufficient support.

### How review and recovery work

> The classifier's rules establish a safety floor. A model cannot lower risk, raise confidence,
> remove a review reason, or bypass the gate. Malformed output, provider errors, and policy
> disagreement fail closed into review with no CRM changes in the recorded evaluation.
>
> A reviewer can approve, reject, or request changes. Rejection and requests for changes produce
> no CRM effects. A conflicting second decision is rejected before the adapter is touched.
> Duplicate protection prevents an already completed effect from being repeated, and the
> container smoke record verifies replay across a restart. Allowlisted transient adapter
> failures receive at most one immediate retry.
>
> These controls make failures visible and constrain side effects. They do not establish safety
> for every customer environment or an unrestricted autonomous workflow.

### Implementation and tradeoffs

> CIRA uses FastAPI and Pydantic for the API contract, Postgres and Alembic for persistence and
> migrations, and Docker Compose for deployment. CI runs linting, tests, migrations, fixed
> evaluations, and a container build.
>
> Retrieval uses pgvector. The recorded hosted deployment runs a local sentence-embedding model,
> `all-MiniLM-L6-v2`, through ONNX; a deterministic hashed-lexical provider is the offline
> default. Both pass the fixed four-case evaluation. In the recorded comparison, the semantic
> provider retrieves the expected passage at rank one for two paraphrases the lexical provider
> misses. That is a small, explicit check, not a retrieval-quality benchmark.
>
> The review gate trades automatic handling for human judgment when the evidence is uncertain.
> Persistent state adds a database to operate, but preserves the record across restarts. The
> demo's in-memory CRM makes the workflow inspectable without changing a real customer's records.

No hosted-model name is given on this page. Do not name any model provider beyond the
`all-MiniLM-L6-v2` embedding model quoted above.

### Evidence and limits

Intro line: `These are retained runs, not a current uptime or accuracy claim.`

Table, seven rows, each linking to the real repository `https://github.com/covalent-dev/cira`:

| What was checked | Retained result |
| --- | --- |
| Workflow and review evaluation | 21/21 cases, including provider failure, review decisions, and CLI/API parity |
| Trace integrity | 46 referenced hashes verified; zero missing or mismatched |
| RAG evaluation | Four fixed cases covering answers, abstention, conflicting sources, and stale sources |
| Embedding comparison | Both providers pass the fixed matrix against pgvector |
| Hosted semantic retrieval | Two paraphrase answers and one abstention, recorded on 2026-09-15 |
| Hosted model call | One intake completed through the deployed service |
| Persistence and replay | Container health, migration, persisted records, and duplicate replay across restart |

Limits paragraph:

> These records describe specific runs. They do not establish current uptime, general model
> accuracy, throughput, business outcomes, or production customer traffic. The corpus contains
> 10 authored documents and 30 chunks. The hosted demo uses basic authentication, and review
> endpoints use a shared token. Enterprise identity and compliance certification are out of scope
> for this work, and no live Erxes write is evidenced.

### How to verify

> Three things to check, in the repository: the CI configuration, the fixed evaluations, and the
> commit history.
>
> - **CI** — linting, tests, migrations, fixed evaluations, and a container build on every push
>   and pull request.
> - **Fixed evaluations** — the workflow and review evaluation and the four-case retrieval
>   evaluation, with their retained results.
> - **Commit history** — the work in order, including the review gate and the recovery paths.

Each item links to `https://github.com/covalent-dev/cira`. The repository is real: no
placeholder comment, no "does not exist yet" note, no `PLACEHOLDER:` marker on a repository link.

### Footer line

> Last updated 2026-09-22. This page follows the case study in the CIRA repository.

---

## 404 PAGE

Eyebrow: `404`
Statement: `This page doesn't exist.`
Body: `The link may be old, or the page may have moved.`
Links: `Home` → `/`, `Work` → `/work/cira/`, `Email me` → `mailto:samuel.takata@covalent-ai.dev`.
No Pricing link.

---

## DESIGN TOKENS

One design, the former variant B ("Editorial"), after subone.studio.

- Background pure `#000`. White text; secondary `rgba(255,255,255,.5)`. Hairline borders
  `rgba(255,255,255,.1–.16)`, radii 5px.
- **Instrument Sans** 400/500 (body and headlines) plus **Geist Mono** (Google Fonts) for
  uppercase labels, eyebrows, and metadata. Labels at 12px, uppercase, wide tracking.
- Headlines 56–70px at -0.04em, line-height 1; body 16px/1.6 in the `.5` tier.
- Alignment: one rule for every large statement. Flush left against the grid, capped at
  `--col` (70% of the content width). Body copy holds the same edge at `--col-body`.
  A statement that shares its band with a hairline label column (`--row-label`, 250px) is
  offset by `--col-lead` (20%) so it starts where its body starts.
- Experience and FAQ blocks are centred as blocks on the page (`--col-body`, `margin-inline:
  auto`) with their text still flush left inside them.
- Hairline dividers over every section header, with the mono marker group (`[ 0n ]`, the name,
  `© 2026`) sharing one row.
- Ambient motion, all CSS plus one small script: the glow layer drifts (210s), a faint highlight
  travels the section hairline (74s), the section marker breathes (42s), and a second offset grid
  drifts inside the hero panel (96s). Nothing runs on scroll position.
- The schwa swap: the "e" in `covalent` becomes `ə` and returns, in the header wordmark, the
  footer wordmark, and the `Covalent AI` label only, never in body copy, the email address, a URL,
  or a page title. The glyph pair shares one fixed grid cell, so the line cannot reflow. Each
  instance reschedules 8–20s after its last swap, so the three never fall into step.
  `prefers-reduced-motion: reduce` stops it, and a hidden tab stops it, both leaving the plain "e".
  The animated glyph is `aria-hidden` and the accessible name of every wordmark is `covalent`.

---

## ASSETS

- `assets/workbench.png` — 1440×900 screenshot of the CIRA workbench at the review gate,
  captured locally from the running service.
- `assets/workbench.jpg` — the same image, quality-88 JPEG; this is the file the pages reference.
- `assets/favicon.svg` — `c` monogram on the background colour.
- `assets/og.png` — 1200×630 Open Graph card from the 2026-09-21 cut. It still carries the retired
  hero line `Software developer for hire.` and needs a re-cut to the new headline. Deferred.

No stock photos, no AI-generated images, no illustration. Placeholders are designed frames and
HTML comments containing `PLACEHOLDER:` — video and diagram slots only, never a repository link.
