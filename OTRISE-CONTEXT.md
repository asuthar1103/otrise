# OTRise — Development Context

Working notes for anyone (human or AI assistant) picking up this codebase. This
file is the source of truth for how the project is built, deployed, and edited.

## What this is

OTRise is a free OT/ICS cybersecurity training game. Six levels take a learner
from plant-floor basics to incident command, covering the Purdue model,
industrial protocols, IEC 62443, safety instrumented systems, and real ICS
incidents. It is deliberately small, fast, and free of tracking.

Live at https://otrise.io

## Architecture in one line

The entire application is a single self-contained `index.html` — markup, CSS,
and vanilla JavaScript in one file. There is no build step, no bundler, no
package manager, no dependencies, and no backend. Editing the file and pushing
it is the whole development loop.

The only external requests the page makes are two Google Fonts stylesheets
(Space Grotesk and JetBrains Mono). The favicon is an inline SVG data URL, so
there are no image assets either.

### File layout inside `index.html`

The file is roughly 600 lines and falls into four contiguous regions. Line
numbers drift as the file is edited, so navigate by the landmarks rather than by
number.

The head block holds the title, meta description, canonical URL, Open Graph and
Twitter card tags, theme colour, the inline SVG favicon, and the font links.
Anything SEO- or share-preview-related lives here and nowhere else.

The `<style>` block opens with a `:root` block that defines every colour in the
design as a custom property. Changing the palette means changing these variables
and nothing else — they are referenced everywhere downstream. The tokens are
`--bg`, `--panel`, `--panel2`, `--line`, `--line2` for surfaces and borders;
`--text`, `--dim`, `--faint`, `--body` for the type scale; `--green`, `--amber`,
`--red`, `--sel` for accents and state; and `--mono` for the monospace stack.
The body background is a stack of two radial gradients over a repeating grid
pattern — that is what produces the faint blueprint grid. There is a single
responsive breakpoint at `max-width: 900px`, below which the two-column layout
collapses to one.

The markup is a `<header class="top">` wordmark and score chips, then three
`<section class="screen">` elements: `#mapScreen` (the level ladder and the
mission-briefing panel), `#quizScreen` (one question at a time with inline
explanation), and `#resultScreen` (score, badge, retry). Exactly one carries the
`active` class at a time.

The `<script>` block holds the content data and all behaviour.

## The content model

All learning content lives in one array, `const LEVELS`, near the top of the
script block. Each of the six entries has this shape:

```js
{ title:"First Day at the Plant", role:"Level 1 · Rookie", diff:1, badge:"OT Aware",
  desc:"The absolute basics: what OT actually is and why it isn't just 'IT with hard hats'.",
  questions:[
    { q:"...", opts:["correct","wrong","wrong","wrong"], a:0, why:"..." },
    // 8 questions per level
  ]}
```

`title`, `role`, `desc` and `badge` drive the ladder row and the briefing panel.
`diff` (1–6) fills the difficulty bar. Each question needs exactly four options
and a `why` string, which is shown after answering — right or wrong. The
explanations are the actual teaching mechanism, so they matter more than the
questions do.

Six levels, eight questions each, forty-eight questions total.

### The one rule that is easy to get wrong

**Every question stores its correct answer first in `opts`, with `a:0`.** All 48
questions follow this. The four options are shuffled at render time by
`shuffle4()`, which produces a fresh permutation per level attempt, so learners
never see a fixed order. If you add a question with the correct answer anywhere
other than index 0, it will silently be graded wrong. Write the correct option
first, always set `a:0`, and let the shuffle do the work.

### Passing and progression

`const PASS = 6` is the threshold — six of eight correct clears a level and
unlocks the next. Changing that one constant changes the difficulty of the whole
game. Progress is stored in `localStorage` under the key `otrise-v1`, holding
`unlocked`, `best` (per-level best scores) and `totalScore`. The read path also
falls back to the legacy key `ot-academy-v2` so returning learners keep their
progress from before the rename; leave that fallback in place. All storage
access is wrapped in try/catch, so the game still works with storage disabled.

## Editing guide

To change wording, questions, or explanations, edit the `LEVELS` array. To
change colours, edit the `:root` custom properties. To change layout, edit the
CSS for `.screen`, `.ladder`, or the briefing panel. To change SEO or link
previews, edit the head block — and if the canonical URL ever changes, update
`<link rel="canonical">` and `og:url` together.

Two things to keep in mind when editing. First, the brand name appears in the
head block and in the header wordmark; the phrases "OT Cyber Expert" (the level
6 badge) and "OT Cyber Professional" (the completion title) are descriptive
qualifications rather than brand names, and are intentionally left as they are.
Second, avoid introducing a build step or an npm dependency without a good
reason — the zero-dependency single-file design is what makes this project
trivial to host, audit, and hand to someone else.

### Testing changes

Open the file directly in a browser — `file://` works fine, since there is no
server-side anything. Worth checking on any content change: all six ladder rows
render, a level can be started and completed, the explanation appears after each
answer, the pass threshold unlocks the next level, and a page reload preserves
progress. To test the first-run experience, clear the `otrise-v1` key from
localStorage.

## Deployment

Pushing to `main` is the deploy. AWS Amplify Hosting watches the branch via a
GitHub webhook, builds on every commit, and serves the result over CloudFront at
https://otrise.io. There is no build command to configure — Amplify publishes
the repository root as static files.

Both the apex domain and `www` are mapped to `main`, with no redirect between
them. The apex is canonical, matching `<link rel="canonical" href="https://otrise.io/">`
in the head block. If you ever add a `www`→apex redirect or flip the canonical,
change both together or search engines will see a split signal.

### A failure mode worth knowing about

Amplify stores the Git repository URL as a literal string. **Renaming the GitHub
repository silently orphans that connection** — the webhook stops matching, and
pushes appear to succeed while deploying nowhere. Every dashboard keeps showing
green; the only symptom is that the live site does not change. This has already
happened once on this project, during the rename from the original repo name.

If a commit lands but the site does not update, check the source repository URL
in the Amplify app's branch settings before assuming anything else, and use
"Reconnect Repository" to repair it. Note that reconnecting does not itself
trigger a build, and the console offers no manual build button — "Redeploy this
version" replays the previous artifact rather than building the latest commit.
The reliable way to force a deploy is to push a new commit.

The DNS records and TLS certificate are managed by Amplify. The Amplify console's
domain-status tracker lags reality by a wide margin — it can still read "SSL
configuration in progress" long after the domain is serving valid HTTPS. Trust
an actual page load over the tracker.

## Sources

Advanced levels draw on IEC 62443, IEC 61511, NIST SP 800-82, and the
cyber-physical risk framework of Sinclair Koelemij.
