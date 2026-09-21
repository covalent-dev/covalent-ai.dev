# CONTENT SPEC — canonical copy for all three variants

Owner: Taxman. Written by the executor from `portfolio-redesign-spec.md` §3 and the CIRA
case study. **This file is the source of truth for wording.** Variants differ in design only.
If a variant needs a line this file does not have, add it here first.

Hard rules that apply to every string below:

- First person singular. Never "we", never "the studio", never "the team".
- No OpenAI, no employer, no job title from employment, no location, no years of experience,
  no project counts, no metrics, no client names, no logos, no testimonials.
- Banned words: revolutionize, cutting-edge, seamless, leverage, unlock, supercharge,
  game-changing, world-class, next-generation, harness, empower, synergy, "AI-powered" as an
  adjective on everything.
- The disclosure paragraph below appears **once per variant, on `/work/cira/` only**. Never
  repeat or paraphrase it anywhere else. The home-page work card must not state or imply who
  CIRA was built for.
- Every price is USD and provisional. Keep the numbers in one commented block per variant.

Identity:

| Field | Value |
| --- | --- |
| Name | Samuel Takata |
| Wordmark | `covalent` (lowercase, one word) |
| Domain | covalent-ai.dev |
| Email | gifttakata101@gmail.com |
| GitHub | https://github.com/covalent-dev |
| LinkedIn | https://linkedin.com/in/samuel-takata |
| Footer | wordmark, email, GitHub, LinkedIn, © 2026 Samuel Takata |
| CTA | email only (`mailto:`). No forms, no booking links, no newsletter. |

Page titles / meta descriptions (one per page, same across variants):

- `/index.html` — title `covalent — AI systems for intake and triage`; description
  `I build systems that take routine requests off your desk: validated, classified, routed and recorded, stopping for a person when the call is not routine.`
- `/work/cira/index.html` — title `CIRA: client intake with review and an audit trail — covalent`;
  description `A worked example of intake that validates, classifies and routes requests, stops uncertain ones for human review, and answers questions from a document corpus with citations.`
- `/pricing/index.html` — title `Pricing — covalent`; description
  `Diagnostic, pilot, implementation and support pricing in USD, with what each engagement includes and what it does not.`
- `/404.html` — title `Page not found — covalent`.

---

## NAVIGATION (every page)

Home · Work · Pricing · Email me

`Work` links to `/work/cira/`. Wordmark links to `/`. `Email me` is
`mailto:gifttakata101@gmail.com`.

---

## HOME

### Eyebrow

`Intake, triage, and answers from your own documents`

### Hero statement

> Every day, someone on your team reads the same kind of request and makes the same kind of
> decision. I build systems that do that part, and stop for a person when the call is not routine.

### Hero note (short, secondary tier)

One line under the statement:

> I'm Samuel Takata. I build intake and triage systems: requests validated, classified, routed,
> and recorded, with a review step wherever the system is unsure.

### Meta row (variant A only)

`AI workflow systems` · live clock in the visitor's local time, 12-hour with minutes and the
local timezone abbreviation, ticking each second. Reduced-motion does not stop the clock
(it is information, not decoration).

### Section: about

Label: `About`

Statement:

> I work on the unglamorous middle of a business: the queue. Requests arrive through forms,
> email, and chat, and each one has to be read, sorted, routed, and written down. Most of that
> is routine, and the routine part is what I automate.

Body:

> I've built this for a service business before, and the reconstruction of that work is the
> case study on this site. I keep the scope narrow on purpose: one workflow, one intake source,
> measured before I say it works. When a decision is uncertain or the data is sensitive, the
> system stops and asks a person. That is a design choice, not a limitation.

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
Statement: `Three things I do.`

1. **Intake and triage automation** — Requests are validated, de-duplicated, classified, routed,
   and recorded. Requests the system is unsure about stop for human review instead of guessing.
2. **Answers from your own documents, with sources** — A question is answered from your
   documents, with the passage it came from. When the documents don't support an answer, it says
   so instead of inventing one.
3. **Support for what I've built** — A prepaid monthly block of hours for changes, questions, and
   fixes on the systems I built for you.

No other service is listed. Do not add agent orchestration, chatbots, fine-tuning, dashboards,
or "AI strategy".

### Section: how engagements work

Label: `How it works`
Statement: `Four steps, no surprises.`

1. **Diagnostic** — One workflow mapped, with a decision-ready plan and a pilot scope. No code.
2. **Pilot** — One workflow, one intake source, a sandbox boundary, review routing, fixed
   evaluations, and a runbook.
3. **Implementation** — One qualified workflow with a reviewed integration and a staged handoff.
4. **Support** — A prepaid monthly block for changes, questions, and fixes on what I built.

Link: `See pricing` → `/pricing/`.

### Section: pricing preview (variant A may show midu-style "choose your pace" cards here)

Heading: `Choose your pace.`
Sub-line: `Fixed scope first, then a monthly block if you want me to keep it running.`

Cards, in this order, using the prices from `/pricing/`:

1. `Pilot` — `from $3,000` — `One workflow, one intake source, sandbox boundary, review routing, fixed evaluations, runbook, handoff.`
2. `Implementation` — `from $5,000` — `One qualified workflow, reviewed integration, staged handoff, milestone payments.`
3. `Support` — `$750–1,500 / month` — `A prepaid block of hours each month for changes, questions, and fixes.`

Card link: `See full pricing` → `/pricing/`.

### Section: FAQ

Label: `FAQ`
Statement: `Questions I get asked.`

1. **What does a pilot include?**
   > One workflow and one intake source. Request validation, duplicate handling, classification,
   > routing, a review gate, fixed evaluations, an audit trail, and a runbook. I hand it over
   > with a walkthrough and seven days of defect fixes.
2. **Will it work with the tools we already use?**
   > Integrations are scoped one at a time. The pilot runs against a sandbox boundary so nothing
   > in your live systems changes until you have seen it work.
3. **What happens to our data during a pilot?**
   > The pilot uses synthetic or approved sanitized samples. I don't take regulated or sensitive
   > data into a pilot without a separate review.
4. **How do we start?**
   > Email me with the workflow that eats the most time. I'll tell you whether it is a fit and
   > what a diagnostic would cover.

No legal, IP, tax, contract, or employment answers. No question about availability, rates for
work outside the pricing page, or guarantees.

### Closing band

Statement: `If a queue is eating your week, tell me which one.`
Sub: `I'll reply with whether it is a fit and what I'd look at first.`
Button: `Email me` → `mailto:gifttakata101@gmail.com`

---

## PRICING PAGE (`/pricing/`)

Title: `Pricing`

Intro:

> Every engagement starts with a diagnostic. Prices are in USD and provisional; the diagnostic
> decides the rest.

Table (or cards, in the variant's own style):

| Engagement | Price | What it is |
| --- | --- | --- |
| Diagnostic | $500–1,000, paid up front | One workflow mapped; a decision-ready plan and pilot scope. No code. |
| Pilot | $3,000–4,500 fixed | One workflow, one intake source, sandbox boundary, review routing, fixed evaluations, audit trail, runbook, handoff. 50% to schedule, 50% after acceptance. 7 days of defect fixes. |
| Implementation | from $5,000 | One qualified workflow with a reviewed integration and a staged handoff. Milestone payments. 14 days of defect fixes. |
| Support retainer | $750–1,500 / month, prepaid | A capped block of hours each month for changes, questions and fixes on what I built. |

Below the table, exactly these two lines:

> Bigger or higher-risk work is scoped after a diagnostic.
>
> I don't take regulated or sensitive data into a pilot without a separate review.

Then a short "What a pilot assumes" list, three lines maximum:

> One workflow, one intake source, and one reviewer group named before the pilot starts. A
> sandbox boundary, so nothing in your live systems changes until you have seen the pilot work.
> Someone on your side who can answer process questions during the build.

Close with:

> Not sure which one you need? Email me and describe the queue.
> Button: `Email me` → `mailto:gifttakata101@gmail.com`

No guarantees, no refunds language, no discounts, no "starting at" beyond the stated figures.

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
than the body. It must not appear on any other page, in full or paraphrased.

### Demo

Link to `https://covalent-ai.dev/cira/` with the note `Access by arrangement — email me.`
The email note links to `mailto:gifttakata101@gmail.com`.

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

Table, seven rows, each linking to `https://github.com/covalent-dev/cira` (placeholder repo):

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

Each item links to `https://github.com/covalent-dev/cira` (placeholder: the public repository
does not exist yet).

### Footer line

> Last updated 2026-09-21. This page follows the case study in the CIRA repository.

---

## 404 PAGE

Eyebrow: `404`
Statement: `This page doesn't exist.`
Body: `The link may be old, or the page may have moved.`
Links: `Home` → `/`, `Work` → `/work/cira/`, `Pricing` → `/pricing/`.

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
  the hero; footer repeats the wordmark and glow.
- Section order: hero → statement + about → featured work card with tag pills → scope
  statement → services → choose-your-pace cards → FAQ accordion → footer.
- Radii: pills 20px, cards 32px. Buttons: white pill, 18px label, 48px tall, dark text.

### B — Editorial (subone.studio)

- Background pure `#000`. White text; secondary `rgba(255,255,255,.5)`. Hairline borders
  `rgba(255,255,255,.1–.16)`, radii 5px.
- **Instrument Sans** 400/500 (body and headlines) + **Geist Mono** (Google Fonts) for
  uppercase labels, eyebrows, and metadata. Set labels at 12px, uppercase, with wide tracking.
- Headlines 56–70px at -0.04em, line-height 1; body 16px/1.6 in the `.5` tier.
- Signature: dark moody hero with a floating video card (bottom-right) with a play button and a
  mono caption; big editorial statements as full-width paragraphs (first line indented or
  right-aligned); numbered section headers (`[ 01 ]  ABOUT` over a hairline); hairline dividers.
- Content column: 24px page margins, full-width statements, 342px three-up cards for details.

### C — Studio (shakuro.com, translated to dark)

- Background `#0b0d14`, surfaces `#131623`, body text `#c9cad6`, headings white, accent
  `#2d2dff` used only for the primary button and links.
- **Geist** (Google Fonts) 400/500/600/700. Headings weight 450–500 at -2px tracking;
  H1 72px, H2 40px, H3 24px.
- Signature: left-aligned hero with a two-line headline, one-line sub, one pill button, then a
  large rounded product panel carrying the CIRA workbench screenshot; a numbered services list;
  a process section with a left heading column and a right accordion; a CTA band before a
  multi-column footer.
- Gutters 156px at 1440 (clamped down for smaller widths), pill radii 48px on buttons, panels
  24–32px.

---

## ASSETS

- `assets/workbench.png` — 1440×900 screenshot of the CIRA workbench at the review gate,
  captured locally from the running service. Used by all three variants.
- `assets/cira-workbench.jpg` — the same image, quality-88 JPEG, used by variants where the
  extra bytes matter.
- `assets/favicon.svg` — `c` monogram on the variant's background colour.
- `assets/og.png` — 1200×630 Open Graph card: wordmark, the hero statement's first line, and
  `covalent-ai.dev`.

No stock photos, no AI-generated images, no illustration. Placeholders are designed frames and
HTML comments containing `PLACEHOLDER:`.
