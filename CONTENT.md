# CONTENT SPEC — canonical copy for all three variants

Owner: Taxman. Written by the executor from `portfolio-redesign-spec.md` §3, corrected by
`portfolio-redesign-addendum.md` and the posture refs
(`portfolio-posture-and-resume.md`, `active-resume.md`). **This file is the source of truth for
wording.** Variants differ in design only. If a variant needs a line this file does not have, add
it here first.

Hard rules that apply to every string below:

- First person singular. Never "we", never "the studio", never "the team".
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
- **Provenance is stated in exactly one place: the disclosure on `/work/cira/`.** No home page may
  claim, hint at, or reconstruct past client work; "I've built this for a service business
  before…" and anything like it is deleted and must not come back in another form.
- Banned words: revolutionize, cutting-edge, seamless, leverage, unlock, supercharge,
  game-changing, world-class, next-generation, harness, empower, synergy, "AI-powered" as an
  adjective on everything.
- The disclosure paragraph below appears **once per variant, on `/work/cira/` only**. Never
  repeat or paraphrase it anywhere else. The home-page work card must not state or imply who
  CIRA was built for.

Identity:

| Field | Value |
| --- | --- |
| Name | Samuel Takata |
| Brand wrapper | `Covalent AI` |
| Wordmark | `covalent` (lowercase, one word; the hero wordmark may read `covalent`) |
| Domain | covalent-ai.dev |
| Email | samuel.takata@covalent-ai.dev |
| Location | Remote. Do not print a city. |
| GitHub | https://github.com/covalent-dev |
| LinkedIn | https://linkedin.com/in/samuel-takata |
| Project repository | https://github.com/covalent-dev/cira (real, not a placeholder) |
| Footer | wordmark, email, GitHub, LinkedIn, © 2026 Samuel Takata |
| CTA | email only (`mailto:`). No forms, no booking links, no newsletter. |

Page titles / meta descriptions (one per page, same across variants):

- `/index.html` — title `Covalent AI — software developer for hire`; description
  `Software developer for hire. Freelance and contract work: automation, integration, and the tools a team works in, with AI as a tool when it is the right one.`
- `/work/cira/index.html` — title `CIRA: client intake with review and an audit trail — Covalent AI`;
  description `A worked example of intake that validates, classifies and routes requests, stops uncertain ones for human review, and answers questions from a document corpus with citations.`
- `/404.html` — title `Page not found — Covalent AI`.
- There is no `/pricing/` page. The directory is deleted, not hidden.

---

## NAVIGATION (every page)

Home · Work · Email me

`Work` links to `/work/cira/`. Wordmark links to `/`. `Email me` is
`mailto:samuel.takata@covalent-ai.dev`. No Pricing link anywhere: not in the header, the overlay
menu, the footer, or the 404 page.

---

## HOME

### Hero

Headline (H1, all variants):

> Software developer for hire.

Supporting line:

> Available for freelance and contract work — software that solves a business problem.

Face and posture line:

> I'm Samuel Takata. I build automation, integration, and the tools a team works in, and I use AI
> when it is the right tool for the job.

Brand wrapper, where the design has a slot for it: `Covalent AI`.

Per-variant slot assignment (same words, different slots):

| Variant | Eyebrow / label | H1 | Supporting + posture |
| --- | --- | --- | --- |
| A | `Available for freelance and contract work` | `Software developer for hire.` | posture line in the hero note; `Covalent AI` in the meta row |
| B | `Covalent AI` (mono eyebrow) | `Software developer for hire.` | supporting line + posture line in the hero note |
| C | `Covalent AI — freelance and contract software` | `Software developer for hire.` | supporting line as the hero lead, posture line as the hero note |

The old hero problem statement about requests arriving through forms, email and chat, and the
`AI workflow systems` meta label are both deleted. They do not appear on the site.

### Meta row (variant A only)

`Covalent AI` · live clock in the visitor's local time, 12-hour with minutes and the local
timezone abbreviation, ticking each second. Reduced-motion does not stop the clock (it is
information, not decoration).

### Section: about

Label: `About`

Statement:

> I work on the unglamorous middle of a business: the queue. Requests arrive through forms,
> email, and chat, and each one has to be read, sorted, routed, and written down. Most of that
> is routine, and the routine part is what I automate.

Body:

> I keep the scope narrow on purpose: one workflow, one intake source, measured before I say it
> works. When a decision is uncertain or the data is sensitive, the system stops and asks a
> person. That is a design choice, not a limitation.

The former opening sentence of this body ("I've built this for a service business before, and the
reconstruction of that work is the case study on this site.") is deleted. Nothing replaces it.

### Section: featured work

Label: `Featured work`

Card title: `CIRA — client intake with review and an audit trail`

Card tags: `Intake` · `Triage` · `Review gate` · `Retrieval with citations` · `Audit trail`

Card text:

> CIRA takes a request from first contact to a recorded decision. It validates the request,
> checks for duplicates, classifies type and priority, picks an owner, and assesses confidence
> and risk. Anything uncertain or sensitive stops at a review gate before anything downstream
> changes. Every accepted request runs the same ordered steps and leaves an audit trail tied
> together by a correlation ID.
>
> It also answers questions from a versioned document corpus. Every answer cites the passage it
> used, and it says "I don't know" when the documents don't support an answer.

Card footer line: `Read the case study` (links to `/work/cira/`).

The card carries a workbench image with alt text `The CIRA workbench during an intake that
stopped at the review gate`. It must not name or hint at who the system was built for.

### Section: why this stays small

Label: `Scope`

Statement: `Systems like this fail on scope, not on models.`

Body:

> A pilot is one workflow and one intake source. The interesting decisions happen at the edges:
> what counts as a duplicate, which requests must not be automated, and what the reviewer needs
> to see to say yes. I would rather make those edges visible in two weeks than promise a
> platform.

### Section: services

Label: `Services`
Statement: `Two things I do.`

1. **Software, automation, and integration** — I build the software that solves a business
   problem: the internal tool that is missing, the integration between two systems that do not
   talk to each other, the automation for work that eats a week every month. AI is optional — I
   reach for it when it is the right tool and leave it out when it is not.
2. **Bounded workflow, intake, and document-answer pilots** — When the actual need is a workflow,
   an intake queue, or answers from your own documents, I run a bounded pilot: one workflow, one
   intake source, a review gate wherever the system is unsure, fixed evaluations, and a runbook.

Exactly these two. Do not add a third service, a support retainer, agent orchestration, chatbots,
fine-tuning, dashboards, or "AI strategy".

Call to action in this section, visible without expanding anything:

> `Email me for a price sheet` → `mailto:samuel.takata@covalent-ai.dev?subject=Price%20sheet`

### Section: how engagements work

Label: `How it works`
Statement: `Four steps, no surprises.`

1. **Diagnostic** — One workflow mapped, with a decision-ready plan and a pilot scope. No code.
2. **Pilot** — One workflow, one intake source, a sandbox boundary, review routing, fixed
   evaluations, and a runbook.
3. **Implementation** — One qualified workflow with a reviewed integration and a staged handoff.
4. **Support** — A monthly block for changes, questions, and fixes on what I built.

Link: `Email me for a price sheet` → the price-sheet mailto above. No amounts, no payment terms
on the page.

### Section: experience (new)

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

The five Forward Deployed Engineer bullets, first person, exactly these:

> - I build full-stack systems that deliver customer value.
> - I embed with customer teams, understand their needs, and guide adoption of what I build.
> - I scope work, sequence delivery, and remove blockers early.
> - I make trade-offs between scope, speed, and quality, and adjust plans to protect delivery.
> - I contribute directly in the code when progress or clarity depends on it.

Do not add the resume's summary line, Research/Product feedback, internal playbooks, client
names, internal tools, or confidential delivery.

Skills, as a short list in the same section (from `active-resume.md`):

> Python (automation) · JavaScript · APIs · CI/CD · General software development ·
> LLM / GPT-family application work

### Section: FAQ

Label: `FAQ`
Statement: `Questions I get asked.`

1. **What does a pilot include?**
   > One bounded piece of software that solves one problem: an automation, an integration, or an
   > AI-assisted workflow when that is the actual need. It comes with tests, a runbook, and a
   > walkthrough, and it is scoped and priced in writing before it starts.
2. **What does it cost?**
   > There is no price list on this site. Tell me what you need and I will send the current price
   > sheet.
   Followed by `Email me for a price sheet` → the price-sheet mailto above. No amounts.
3. **Will it work with the tools we already use?**
   > Integrations are scoped one at a time. The pilot runs against a sandbox boundary so nothing
   > in your live systems changes until you have seen it work.
4. **What happens to our data during a pilot?**
   > The pilot uses synthetic or approved sanitized samples. I don't take regulated or sensitive
   > data into a pilot without a separate review.
5. **How do we start?**
   > Email me with the workflow that eats the most time. I'll tell you whether it is a fit and
   > what a diagnostic would cover.

No legal, IP, tax, contract, or employment answers. No question about rates for work outside the
emailed price sheet, or guarantees.

### Closing band

Statement: `If a problem is eating your week, tell me which one.`
Sub: `I'll reply with whether it is a fit and what I'd look at first.`
Button: `Email me` → `mailto:samuel.takata@covalent-ai.dev`

---

## PRICE SHEET (emailed, never on the site)

There is no pricing page and no price card in any variant. A visitor who wants numbers emails
`samuel.takata@covalent-ai.dev` with the subject `Price sheet`, and Taxman replies with the sheet.
Source of truth for the sheet itself is `portfolio-posture-and-resume.md`; those figures never
appear in `variants/`.

---

## CIRA CASE STUDY (`/work/cira/`)

Breadcrumb: `Work / CIRA`

### Title

`CIRA: client intake with review and an audit trail`

### One-sentence problem

> A service business receives requests through forms, email, and support channels, and each one
> needs to be checked, classified, assigned, recorded, and followed up.

### Disclosure (verbatim, exactly once, near the top, visually quiet but readable)

> CIRA is a representative reconstruction of prior paid freelance work for a Minnesota company,
> presented with permission. The company's identity, original repositories, and confidential
> system details are withheld. This demonstration is the reconstruction, not the original client
> deployment. The knowledge corpus and demo inputs are synthetic.

Render it in a quiet panel: secondary text tier, hairline border, no icon, no heading louder
than the body. It must not appear on any other page, in full or paraphrased. This is the **only**
place on the site where provenance is stated.

### Demo

Link to `https://covalent-ai.dev/cira/` with the note `Access by arrangement — email me.`
The email note links to `mailto:samuel.takata@covalent-ai.dev`.

### Video slot

A designed placeholder frame, 16:9, labelled `Walkthrough — not recorded yet`, with the line
`A 3–5 minute walkthrough is being recorded: one request that completes, and one that stops at
the review gate.` Mark with `<!-- PLACEHOLDER: ... -->`.

### Diagram slot

A designed placeholder frame, labelled `Flow diagram — in progress`, with the line
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
> endpoints use a shared token; there is no enterprise identity, SSO, or compliance
> certification claim. No live Erxes write is evidenced.

### How to verify

> Three things to check, in the repository: the CI configuration, the fixed evaluations, and the
> commit history.
>
> - **CI** — linting, tests, migrations, fixed evaluations, and a container build on every push
>   and pull request.
> - **Fixed evaluations** — the workflow and review evaluation and the four-case retrieval
>   evaluation, with their retained results.
> - **Commit history** — the work in order, including the review gate and the recovery paths.

Each item links to `https://github.com/covalent-dev/cira`. The repository is real now: no
placeholder comment, no "does not exist yet" note, no `PLACEHOLDER:` marker on a repository link.

### Footer line

> Last updated 2026-09-21. This page follows the case study in the CIRA repository.

---

## 404 PAGE

Eyebrow: `404`
Statement: `This page doesn't exist.`
Body: `The link may be old, or the page may have moved.`
Links: `Home` → `/`, `Work` → `/work/cira/`, `Email me` → `mailto:samuel.takata@covalent-ai.dev`.
No Pricing link.

---

## PER-VARIANT DESIGN TOKENS

### A — Glow (midu.design)

- Background `#050505`. Text white; tiers `rgba(255,255,255,.8/.6/.5/.4)`; panels `rgba(255,255,255,.07)`.
- **Switzer** 400/500/600 from Fontshare
  (`https://api.fontshare.com/v2/css?f[]=switzer@400,500,600&display=swap`) plus **Instrument
  Serif italic** (Google Fonts) for one or two accent words per headline.
- Hero statement 32px/1.1 at -0.02em. Section headlines 65–82px, line-height 1.0,
  letter-spacing -0.04em, weight 500. Body 18px/1.3 at -0.02em. Small labels 14px.
- Signature: a giant `covalent` wordmark filling the hero's lower half with a soft warm radial
  glow behind it (radial warm ellipse, low opacity, screen/dodge blend); top bar with the
  wordmark left, a `Menu` pill right opening a full-screen overlay menu; small meta row under
  the hero (`Covalent AI` + live clock + `Scroll to explore`); footer repeats the wordmark and
  glow.
- Section order: hero → statement + about → featured work card with tag pills → scope
  statement → services → four-step process → experience → FAQ accordion → footer.
- Experience rows: two columns, the date in the 14px `--t4` tier on the left and the role,
  bullets and skill chips on the right, over the same hairlines as `.services`/`.steps`.
- Radii: pills 20px, cards 32px. Buttons: white pill, 18px label, 48px tall, dark text.

### B — Editorial (subone.studio)

- Background pure `#000`. White text; secondary `rgba(255,255,255,.5)`. Hairline borders
  `rgba(255,255,255,.1–.16)`, radii 5px.
- **Instrument Sans** 400/500 (body and headlines) + **Geist Mono** (Google Fonts) for
  uppercase labels, eyebrows, and metadata. Set labels at 12px, uppercase, with wide tracking.
- Headlines 56–70px at -0.04em, line-height 1; body 16px/1.6 in the `.5` tier.
- Signature: dark moody hero with a floating video card (bottom-right) with a play button and a
  mono caption; big editorial statements as full-width paragraphs (first line indented);
  numbered section headers (`[ 01 ]  ABOUT` over a hairline); hairline dividers.
- Content column: 24px page margins, full-width statements, two-up cards for services details.
- Experience rows: subone's numbered `[ 0n ]` label, the role and its mono date, and the
  bullets in a third column, over hairlines; skills as a mono dot-separated list.

### C — Studio (shakuro.com, translated to dark)

- Background `#0b0d14`, surfaces `#131623`, body text `#c9cad6`, headings white, accent
  `#2d2dff` used only for the primary button and links.
- **Geist** (Google Fonts) 400/500/600/700. Headings weight 450–500 at -2px tracking;
  H1 72px, H2 40px, H3 24px.
- Signature: left-aligned hero with a headline, a one-line lead, one pill button, then a
  large rounded product panel carrying the CIRA workbench screenshot; a numbered services
  accordion; a process section with a left heading column and a right list; a CTA band before a
  multi-column footer.
- Experience section: the sticky `.split` aside on the left ("Where I've worked."), and a
  numbered list on the right — a faint date line, the role title, bullets with accent dots, and
  skill tags.
- Gutters 156px at 1440 (clamped down for smaller widths), pill radii 48px on buttons, panels
  24–32px.

---

## ASSETS

- `assets/workbench.png` — 1440×900 screenshot of the CIRA workbench at the review gate,
  captured locally from the running service.
- `assets/workbench.jpg` — the same image, quality-88 JPEG; this is the file the pages reference.
- `assets/favicon.svg` — `c` monogram on the variant's background colour.
- `assets/og.png` — 1200×630 Open Graph card: wordmark, the hero statement, the supporting line,
  and `covalent-ai.dev`. Re-cut in the correction pass so it no longer carries the removed hero
  problem statement.

No stock photos, no AI-generated images, no illustration. Placeholders are designed frames and
HTML comments containing `PLACEHOLDER:` — video and diagram slots only, never a repository link.
