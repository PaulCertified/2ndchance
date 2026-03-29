# Second Chance Life — Build, Lead Gen & SEO Strategy

Living document: product, ICP, what’s shipped, and a **phased roadmap** to a best-in-class lead platform for declined / hard-to-place life insurance shoppers.

---

## 1. Product thesis & ICP

### 1.1 Positioning

We are **not** competing on “get life insurance today” like most agents.

**Core line:** *Denied before? We specialize in approvals with your condition.*

The emotional product is **second-chance approval**—hope and legitimacy for people who were declined or assume they cannot qualify.

**What we’re really selling:** “Second chance approval,” not a generic commodity policy.

### 1.2 Ideal customer profile (ICP)

| Dimension | Target |
|-----------|--------|
| **Age** | ~40–75 (form enforces 40–75; ads often 50–70) |
| **Situation** | Prior decline, fear of decline, or chronic diagnosis; shopping “no exam” / simplified issue |
| **Conditions (core)** | COPD, CHF, AFib, CAD (+ diabetes, stroke history in funnel) |
| **Mindset** | Skeptical but hopeful; responds to **medication names**, **condition-specific** copy, and **human agent** trust |
| **Channels** | Facebook/Instagram, TikTok, organic search (long-tail “can I get life insurance with X”) |
| **Offers** | No-exam / simplified options, fast decision framing (24–72 hrs where true), mortgage protection, final expense |

### 1.3 Compliance (non-negotiable)

- No guarantees of approval or coverage; carrier-specific underwriting.  
- Licensed-agent handoff; NPN visible where we show the agent.  
- Privacy Policy + TCPA consent before aggressive SMS/dialer automation.

---

## 2. Phase 0 — Foundation *(shipped)*

**Goal:** Credible, on-brand funnel that converts and introduces the assigned agent.

### 2.1 Stack

| Layer | Choice |
|--------|--------|
| Framework | React 18, Vite 5, TypeScript |
| Routing | `react-router-dom` — `/`, `/blog`, `/blog/:slug`, `NotFound` |
| UI | shadcn / Radix + Tailwind (Merriweather + Source Sans) |
| Forms | Local state + Sonner toasts |
| Data | TanStack Query (ready for API/CRM) |
| Tests | Vitest; Playwright + `e2e/smoke.spec.ts` |

### 2.2 Landing funnel (`Index.tsx`)

| Section | Component |
|---------|-----------|
| Hero | `HeroSection` — denied-before angle, bullets |
| Conditions | `ConditionSection` |
| Medications | `MedicationSection` |
| Social proof | `TestimonialSection` |
| Process | `HowItWorks` |
| Lead capture | `LeadForm` |
| Urgency | `UrgencySection` |
| Sticky / exit | `FloatingCTA`, `ExitIntentPopup` |

CTAs scroll to `#lead-form`.

### 2.3 Lead form & agent reveal

- **Fields:** Name, phone, email, age 40–75, condition, optional medications.  
- **After submit:** Success copy + **Paul Gipson** card — `public/paul.jpg`, Licensed Professional, **NPN 21670586**, click-to-call.  
- **Config:** `src/config/agent.ts`, optional `VITE_AGENT_PHONE_*` (`.env.example`).

### 2.4 Clinical / ad reference *(for copy & future content)*

**COPD** — Albuterol, Advair, Spiriva, Symbicort, oxygen.  
**CHF** — Lisinopril, Losartan, Carvedilol, Metoprolol, Lasix.  
**AFib** — Eliquis, Xarelto, Warfarin, Amiodarone.  
**CAD** — Atorvastatin, Aspirin, Clopidogrel, Nitroglycerin.

### 2.5 Blog *(shipped)*

- **Routes:** `/blog` (index), `/blog/:slug` (article).  
- **Content:** Markdown files in `src/content/blog/posts/`, registered in `src/content/blog/posts.ts` (title, description, category, keywords, dates).  
- **Rendering:** `react-markdown` + Tailwind Typography (`prose`). Internal links use React Router; CTAs point to `/#lead-form`.  
- **SEO:** Per-visit `document.title` + meta description on posts; JSON-LD `Article` on post pages.  
- **Footer:** `SiteFooter` on home + blog with **Home | Blog**.

### 2.6 Acquisition playbook *(operational context)*

Angles: no exam, conditions accepted, fast approval, mortgage / final expense.  
Meta: denied-before, medication hooks, mortgage angle. TikTok: myth-bust, med callouts, compliant case-style stories.

---

## 3. Phased roadmap *(what comes next)*

Each phase has a **goal**, **deliverables**, and **exit criteria** so work stays sequenced.

---

### Phase 1 — Lead plumbing & trust

**Goal:** Every submit becomes a trackable lead in your stack; site meets baseline trust/compliance for paid traffic.

| Deliverable | Notes |
|-------------|--------|
| CRM / webhook on submit | POST payload: contact, age, condition, meds, timestamp, page URL, **UTMs** (capture on load → sessionStorage). |
| Production phone | Real `VITE_AGENT_PHONE_*` or hardcoded in `agent.ts`. |
| Privacy Policy + Terms | Linked in footer + near sensitive fields. |
| TCPA consent | Checkbox + copy if auto-SMS/dialer; attorney-reviewed. |
| Footer license block | Name, NPN, states (as applicable)—mirrors post-submit card. |

**Exit criteria:** Submit creates a row/contact in CRM; legal links live; TCPA matches your actual contact strategy.

---

### Phase 2 — Measurement & CRO

**Goal:** Know what’s working and improve conversion systematically.

| Deliverable | Notes |
|-------------|--------|
| Meta Pixel + (optional) CAPI | Lead event on successful submit; CAPI from server/CRM when possible. |
| GA4 | `generate_lead` or custom event on submit. |
| Google Ads | If search: conversion tag + parallel with blog later. |
| Form abandonment | Track partial fills for remarketing (privacy-compliant). |
| CRO backlog | Test headlines (denied vs med-first), CTAs, agent card microcopy, single- vs multi-step form. |

**Exit criteria:** Dashboards show spend → lead volume; at least one structured A/B or sequential test documented.

---

### Phase 3 — Personalization & speed-to-lead

**Goal:** Ads land on relevant copy; hot leads get faster, cleaner handoff.

| Deliverable | Notes |
|-------------|--------|
| UTM or slug-based hero | e.g. `?condition=copd` or `/copd` from **one** content config (TS/JSON)—no duplicate apps. |
| Mortgage protection block or variant | Matches Campaign 3 angle. |
| Expanded medication UI | More drugs; each links forward to **Phase 4** blog URLs when they exist. |
| SMS auto-reply | Post-submit text (“Got it—calling soon”) where TCPA allows. |
| Optional booking | Calendly/Cal.com on thank-you for self-schedulers. |
| Duplicate detection | Phone/email dedupe in CRM or edge function to avoid double-dials. |
| Qualification routing | Simple rules: in-band → “we’re calling now” vs nurture message (optional calendar vs email-only). |

**Exit criteria:** At least one paid campaign uses a dedicated LP variant; median time-to-first-touch improves vs baseline.

---

### Phase 4 — Blog & SEO engine

**Goal:** Capture long-tail organic intent (condition, med, “declined,” age) and feed the **same form**.

| Deliverable | Notes |
|-------------|--------|
| Routes | `/blog`, `/blog/:slug`. |
| Content pipeline | MDX or markdown in `content/posts/` (zero CMS cost to start). |
| Post template | H1 + answer-first blurb + H2/H3 + disclaimer + **CTA** mid + end; author box (Paul, NPN). |
| SEO per post | Title, meta description, canonical, OG/Twitter; **FAQ schema** where fit. |
| Internal linking | Hub pages + cross-links to home/form. |
| Sitemap | Generate `sitemap.xml` at build for all routes + posts. |
| Branded `og:image` | Home + key templates; per-post images when you have creative. |
| E-E-A-T | Dated posts, “last updated,” no fake guarantees, refresh top URLs yearly. |

**Content rollout (order suggested):**

1. **Pillar A — Declined / second chance** (5+ articles).  
2. **Pillars B–E — COPD, CHF, AFib, CAD** (3–5 each).  
3. **Pillar F — Age / mortgage / final expense** (ICP situations).  
4. **Pillar G — Medication-first** (Eliquis, Spiriva, Metoprolol, etc.)—matches ad hooks.

*(Full title ideas remain useful as a backlog; pull from the cluster list in §4 below.)*

**Exit criteria:** Blog live, 8–12 indexed articles minimum, measurable organic entrances to `/` or `/blog` within one quarter (varies by domain age).

---

### Phase 5 — Scale & editorial maturity

**Goal:** Non-engineers can ship content; nurture is automated where appropriate.

| Deliverable | Notes |
|-------------|--------|
| Headless CMS | If weekly publishing outpaces dev (Sanity, Contentful, etc.). |
| Email/SMS nurture | Sequences for “not hot now” leads; compliance-reviewed. |
| More landers | Full library of `/med/...` and state/angle variants from config. |
| Link building / PR | Guest posts, podcasts, partnerships (off-site SEO). |

**Exit criteria:** Editorial calendar runs without blocking on code deploys for routine posts.

---

## 4. Blog keyword clusters *(backlog for Phase 4)*

One pillar + supporting posts each; every piece gets one primary keyword, synonyms, disclaimer, CTA to form.

**A — Declined / second chance**  
Declined next steps, denied reapply, high-risk underwriting basics, no-exam pre-existing, simplified vs guaranteed issue.

**B — COPD**  
COPD + life insurance, no exam + COPD, inhalers/educational, oxygen.

**C — CHF**  
CHF + life insurance, CHF meds (educational).

**D — AFib**  
AFib + life insurance, Eliquis/Xarelto/Warfarin FAQ, blood thinners (careful copy).

**E — CAD**  
CAD + life insurance, stents / no-exam education.

**F — Age & situation**  
50–75 + health issues, mortgage protection + health, final expense after decline.

**G — Medication-first**  
Eliquis, Metoprolol/Carvedilol, Spiriva/Symbicort articles aligned to ads.

---

## 5. File map

| Path | Purpose |
|------|---------|
| `src/pages/Index.tsx` | Landing assembly |
| `src/components/LeadForm.tsx` | Form + agent reveal |
| `src/config/agent.ts` | Agent profile, NPN, photo, phone |
| `public/paul.jpg` | Headshot |
| `.env.example` | Phone env vars |
| `src/App.tsx` | Routes |
| `src/pages/BlogIndex.tsx`, `BlogPost.tsx` | Blog listing & article |
| `src/content/blog/posts.ts` + `posts/*.md` | Post registry & bodies |
| `src/components/SiteFooter.tsx` | Shared footer (Home \| Blog) |
| `e2e/smoke.spec.ts` | Smoke test |

---

## 6. Summary

- **Phase 0** is live: funnel + agent trust close.  
- **Phases 1–2** make leads **real**, **measurable**, and **compliant**.  
- **Phase 3** aligns **ads → LP → speed-to-lead**.  
- **Phase 4** adds the **SEO/blog engine** mapped to ICP keywords.  
- **Phase 5** is **scale** (CMS, nurture, more variants).

Use this doc to sequence engineering, media, and content so nothing critical (CRM, legal, measurement) waits behind nice-to-haves.
