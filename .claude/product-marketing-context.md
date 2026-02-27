# Product Marketing Context

*Last updated: 2026-02-27*

## Product Overview
**One-liner:** Free, AI-powered resume/CV builder with real-time preview, PDF import, and zero sign-up required.
**What it does:** Magic Resume lets anyone build a professional resume in minutes using a split-pane editor with live A4 preview. Users can import existing PDF resumes (AI extracts all data automatically), polish their content with AI suggestions, drag-and-drop reorder sections, toggle visibility per item, and export as PDF or JSON — all without creating an account.
**Product category:** Resume builder, CV builder, AI resume writer, PDF resume converter
**Product type:** Free open-source web app (SaaS-like, no backend user accounts)
**Business model:** 100% free (including AI features). Monetized via Buy Me a Coffee donations and GitHub Sponsors. AGPL-3.0 open source.

## Target Audience
**Target users:** Job seekers, career changers, students, freelancers, professionals updating their resume
**Demographics:** 18-55 year olds actively job hunting or preparing to job hunt. All industries — not just tech.
**Primary use case:** Creating or updating a professional resume quickly without paying for a subscription or signing up for an account.
**Jobs to be done:**
- "I need a professional resume fast without fighting Word formatting"
- "I have an old PDF resume and need to update it without starting over"
- "I want AI to help me write better bullet points and summaries"
- "I need to create tailored versions of my resume for different job applications"
**Use cases:**
- First-time job seekers building from scratch
- Professionals converting an old PDF resume into editable format
- Career changers needing AI help to reframe their experience
- Privacy-conscious users who don't want to upload personal data to third-party servers
- Developers/designers who want to self-host their own resume tool
- International users needing a CV (not just US-style resume)

## Problems & Pain Points
**Core problem:** Creating a professional, well-formatted resume is frustrating, expensive, and time-consuming.
**Why alternatives fall short:**
- Word/Google Docs require manual formatting with no live preview — every change is guesswork
- Paid resume builders (Zety, Resume.io, Novoresume) gate features behind $15-30/month subscriptions
- Most "free" builders are actually freemium traps — free to build, pay to download
- Traditional builders require account creation and store personal career data on their servers
- Updating an old PDF resume means recreating everything from scratch
- Writing compelling, achievement-oriented bullet points is hard without writing expertise
- Most AI resume tools default to tech/software language even for non-tech professionals
**What it costs them:** Hours of formatting time, $15-30/month subscriptions, privacy risks, subpar resume quality
**Emotional tension:** Anxiety about resume quality, frustration with formatting, fear of missing job opportunities due to a weak resume, stress about personal data being stored by third parties

## Competitive Landscape
**Direct competitors (same solution, same problem):**
- Resume.io — polished but mostly paid ($25/mo), stores data server-side
- Zety — AI features but subscription-gated ($24/mo), aggressive upselling
- Novoresume — design-focused but paid tiers ($20/mo), limited free exports
- Kickresume — AI writing but freemium, limited free plan
- Enhancv — story-driven but paid ($20/mo)
- Reactive Resume — open-source competitor, self-hostable, but more complex UX

**Secondary competitors (different solution, same problem):**
- Canva resume templates — design-first but not resume-specific, no AI polish
- LinkedIn Resume Builder — tied to LinkedIn profile, limited customization
- Indeed Resume — job-platform-native, limited export options

**Indirect competitors (conflicting approach):**
- Professional resume writing services ($200-500 one-time) — expensive, slow turnaround
- Microsoft Word/Google Docs templates — free but require manual formatting
- ChatGPT/Claude directly — can write content but can't format or export as PDF

## Differentiation
**Key differentiators:**
- 100% free including AI features (no paywall, no freemium trap)
- Zero sign-up required (no account, no email, instant start)
- Privacy-first (all data in browser localStorage, AI calls are opt-in per field)
- AI PDF import (upload existing PDF, AI extracts structured data automatically)
- Industry-neutral AI (prompts designed for ALL professions, not just tech)
- Client-side PDF generation (no server dependency, works anywhere)
- Open source (AGPL-3.0, self-hostable, transparent)
- Two-level visibility control (toggle sections AND individual items for targeted resumes)
- Side-by-side AI comparison (review AI suggestions before accepting)
- Round-trip JSON export/import (full backup and restore)
**How we do it differently:** We use a free AI model (OpenRouter's gpt-oss-20b:free) so there's zero cost to operate AI features. All data stays in the browser. No backend database, no user accounts, no server-side storage.
**Why that's better:** Users get premium-quality AI resume features without paying, signing up, or trusting a company with their career data.
**Why customers choose us:** It's genuinely free, genuinely private, and genuinely works — no catches, no upsells, no "upgrade to download."

## Objections
| Objection | Response |
|-----------|----------|
| "If it's free, the quality must be bad" | The app is open-source with 100+ stars on GitHub. The AI uses the same underlying models as paid competitors. Try it — no sign-up needed. |
| "My data isn't safe without an account" | Your data never leaves your browser. It's stored in localStorage. We can't see it even if we wanted to. AI calls only happen when you click Polish. |
| "I need multiple templates/designs" | We focus on one clean, professional, ATS-friendly template that works across all industries. One great template beats 50 mediocre ones. |
| "What if I lose my data?" | Export to JSON anytime for a complete backup. Import it back whenever you need. |

**Anti-persona:** People who want dozens of colorful/creative resume templates (graphic designers, artists wanting visual portfolios). Enterprise HR teams needing bulk resume management. Users needing cover letter generation (not yet a feature).

## Switching Dynamics
**Push (away from current solution):** Frustration with subscription costs, anger at "free" builders that paywall the download, privacy concerns about uploading personal data, time wasted formatting in Word
**Pull (toward us):** Genuinely free, instant start without sign-up, AI polish makes writing easier, PDF import saves hours of re-typing
**Habit (keeps them stuck):** Already have a Word doc they've been updating for years, already paying for Resume.io/Zety and have data there, familiar with their current tool's interface
**Anxiety (about switching):** "Will the output look professional enough?", "Can I trust a free tool with my career?", "What if the site goes down and I lose everything?"

## Customer Language
**How they describe the problem:**
- "I hate formatting resumes in Word"
- "Why do I have to pay $25/month just to download my own resume?"
- "I have an old PDF resume but I can't edit it"
- "I don't know how to write good bullet points"
- "I don't want to create another account just to make a resume"
**How they describe us:**
- "Free resume builder that actually works"
- "No sign-up needed, just start building"
- "AI helps me write better"
- "I uploaded my old PDF and it just worked"
**Words to use:** free, no sign-up, instant, professional, AI-powered, private, secure, open-source, real-time preview, PDF import
**Words to avoid:** cheap, basic, simple (implies low quality), freemium, trial, limited, upgrade
**Glossary:**
| Term | Meaning |
|------|---------|
| CV | Curriculum Vitae — used interchangeably with "resume" (CV preferred in Europe/Asia) |
| ATS | Applicant Tracking System — software that scans resumes; our clean format is ATS-friendly |
| AI Polish | Our feature that uses AI to improve resume text without changing meaning |
| PDF Import | Upload an existing PDF resume and AI extracts all structured data |
| WYSIWYG | What You See Is What You Get — our live preview |

## Brand Voice
**Tone:** Confident, friendly, straightforward — never salesy or corporate
**Style:** Direct and clear. Show don't tell. Lead with benefits, not features.
**Personality:** Helpful, trustworthy, modern, no-BS, privacy-respecting

## Proof Points
**Metrics:**
- Open source with GitHub stars (live counter in header)
- 100% free including AI features
- Zero data stored server-side
- Client-side PDF generation (no server dependency)
**Customers:** Open source community, GitHub contributors
**Testimonials:** (To be collected)
**Value themes:**
| Theme | Proof |
|-------|-------|
| Truly free | No paywall on any feature including AI, uses free AI model |
| Privacy-first | localStorage only, no accounts, no server-side data storage |
| Professional quality | Clean A4 format, ATS-friendly, AI-polished content |
| Time-saving | PDF import converts old resumes in seconds, AI writes bullet points |

## Goals
**Business goal:** 1,000,000 organic search visits within 3 months
**Conversion action:** User clicks "Create Your CV" and starts building in the editor
**Current metrics:** 1 indexable page, ~30 target keywords, Vercel Analytics active

## SEO Target Keywords (Priority Tiers)

### Tier 1 — Head Terms (10K-1M+ monthly searches)
- resume builder
- cv builder
- free resume builder
- resume maker
- cv maker
- resume creator
- resume generator
- free cv builder
- online resume builder
- ai resume builder

### Tier 2 — Feature Keywords (1K-10K monthly searches)
- ai resume writer
- pdf to resume converter
- import pdf resume
- resume builder no sign up
- free resume builder no account
- resume with live preview
- ai powered resume
- resume builder free download pdf
- professional resume maker free
- resume editor online

### Tier 3 — Long-Tail / Programmatic (100-1K monthly searches each, massive aggregate)
- resume examples for [job title] (1000+ job titles)
- [job title] resume template
- how to write a resume for [industry]
- [job title] resume summary examples
- [skill] resume examples
- best resume format for [career level]
- resume objective for [job title]
- professional summary for [job title]
- resume bullet points for [job title]
- [job title] resume pdf
