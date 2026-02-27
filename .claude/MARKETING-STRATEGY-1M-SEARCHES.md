# Magic Resume: 1 Million Searches in 3 Months
## Master Marketing Strategy

*Created: 2026-02-27*
*Skills used: programmatic-seo, seo-audit, ai-seo, content-strategy, competitor-alternatives, marketing-ideas, schema-markup, free-tool-strategy, social-content, launch-strategy, product-marketing-context*

---

## EXECUTIVE SUMMARY

**Current state:** 1 indexable page, ~30 keywords, zero content pages, zero blog.
**Target:** 1,000,000 organic search impressions/visits within 3 months.
**Strategy:** Explosive page expansion via programmatic SEO (3,000+ pages), content marketing (50+ blog posts), competitor comparison pages (30+), free marketing tools (3-5), technical SEO fixes, AI search optimization, and multi-channel amplification.

### The Math
- Head terms ("resume builder", "free resume builder"): ~2M monthly searches — need top 10 ranking = ~200K/mo
- Long-tail programmatic pages (3,000+ pages x avg 100-300 searches each): ~300K-900K/mo
- Blog content (50 posts x avg 500-2000 searches each): ~25K-100K/mo
- Comparison/alternative pages (30 pages x avg 500-1000 each): ~15K-30K/mo
- Free tools (3-5 tools x avg 5K-20K searches each): ~15K-100K/mo
- **Total potential: 555K - 1.33M monthly searches**

---

## PHASE 1: TECHNICAL SEO FIXES (Week 1-2)
*Priority: CRITICAL — Fix the foundation before building on top*

### 1.1 Fix Existing SEO Issues

| Issue | Fix | File | Priority |
|-------|-----|------|----------|
| `/editor` in sitemap contradicts noindex | Remove `/editor` from `staticRoutes` in `lib/seo.ts` | `lib/seo.ts` | High |
| Missing `twitter:creator` and `twitter:site` | Add `@KazakisThanos` to Twitter metadata | `app/layout.tsx` | High |
| Missing `WebApplication` JSON-LD | Add SoftwareApplication schema on homepage | `lib/seo.ts` | High |
| Missing `WebSite` JSON-LD with SearchAction | Add WebSite schema with sitelinks searchbox | `lib/seo.ts` | High |
| `organizationJsonLd` `sameAs` empty | Pass GitHub + X URLs to `sameAs` array | `app/page.tsx` | Medium |
| No `favicon.ico` | Generate favicon.ico from icon.svg | `public/` | Medium |
| No `site.webmanifest` | Create PWA manifest | `public/` | Medium |
| Generic hero alt text | Change to descriptive keyword-rich alt | `components/landing/hero.tsx` | Medium |
| No `lastmod` on sitemap entries | Add `new Date().toISOString()` | `app/sitemap.ts` | Medium |
| No `@vercel/speed-insights` | Install and add to layout | `app/layout.tsx` | Low |
| No webmaster verification meta | Add Google Search Console + Bing meta tags | `app/layout.tsx` | High |
| Missing privacy policy/terms pages | Create `/privacy` and `/terms` routes | `app/` | Medium |
| Images unoptimized | Consider enabling Next.js image optimization | `next.config.mjs` | Low |

### 1.2 Add Missing Schema Markup

**WebApplication Schema (Homepage):**
```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Magic Resume",
  "url": "https://magik-resume.dev",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free AI-powered resume builder with real-time preview, PDF import, and zero sign-up required.",
  "featureList": [
    "AI-Powered Resume Polish",
    "PDF Import with AI Extraction",
    "Real-Time Live Preview",
    "Client-Side PDF Export",
    "No Account Required",
    "Privacy-First Local Storage"
  ],
  "screenshot": "https://magik-resume.dev/og-image.png",
  "creator": {
    "@type": "Person",
    "name": "Thanos Kazakis"
  }
}
```

**WebSite Schema (Homepage):**
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Magic Resume",
  "url": "https://magik-resume.dev",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://magik-resume.dev/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

### 1.3 robots.txt Update for AI Crawlers

Update `app/robots.ts` to explicitly allow AI crawlers:
```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: https://magik-resume.dev/sitemap.xml
Host: https://magik-resume.dev
```

### 1.4 Google Search Console & Bing Webmaster Setup
- Register site in Google Search Console
- Submit sitemap
- Register in Bing Webmaster Tools
- Add verification meta tags to layout

---

## PHASE 2: PROGRAMMATIC SEO — THE GROWTH ENGINE (Week 2-6)
*Priority: CRITICAL — This is where the bulk of traffic comes from*

### 2.1 Page Type 1: Resume Examples by Job Title
**Pattern:** `[job title] resume example`
**URL:** `/resume-examples/[job-title-slug]`
**Estimated pages:** 500-1,000
**Search volume per page:** 100-5,000/mo
**Aggregate potential:** 200,000-500,000/mo

**Template structure:**
```
/resume-examples/software-engineer
/resume-examples/registered-nurse
/resume-examples/marketing-manager
/resume-examples/data-analyst
/resume-examples/teacher
/resume-examples/project-manager
...
```

**Page content (unique per job title):**
1. H1: "[Job Title] Resume Example"
2. AI-generated sample resume displayed in preview format (using the existing CV preview component)
3. "Key sections for a [Job Title] resume" — specific guidance
4. "Professional summary examples for [Job Title]" — 3-5 AI-generated examples
5. "Top skills for [Job Title] resumes" — industry-specific skill lists
6. "Experience bullet point examples" — action verb + metric examples
7. "Common mistakes on [Job Title] resumes"
8. CTA: "Create Your [Job Title] Resume Now" → links to `/editor`
9. Related job titles (internal links to similar resume examples)
10. FAQ section with FAQPage schema

**Data sources:**
- Job title list: Bureau of Labor Statistics O*NET database (public, 1,000+ titles)
- Skills per job: O*NET skill requirements (public data)
- Salary data: BLS Occupational Employment Statistics (public)
- AI-generated sample content per title using OpenRouter

**Schema per page:**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Job Title] Resume Example — Free Template & Tips",
  "author": { "@type": "Organization", "name": "Magic Resume" },
  "datePublished": "...",
  "dateModified": "..."
}
```

### 2.2 Page Type 2: Resume Summary Examples by Job Title
**Pattern:** `[job title] resume summary examples`
**URL:** `/resume-summary/[job-title-slug]`
**Estimated pages:** 500+
**Search volume per page:** 50-2,000/mo
**Aggregate potential:** 50,000-200,000/mo

**Page content:**
1. H1: "Professional Summary Examples for [Job Title]"
2. 10-15 AI-generated professional summary examples for the specific role
3. "How to write a professional summary for [Job Title]"
4. "What hiring managers look for in [Job Title] summaries"
5. Tips specific to the industry/role
6. CTA: "AI-Polish Your Summary" → `/editor`

### 2.3 Page Type 3: Resume Skills by Industry/Role
**Pattern:** `[industry/role] resume skills`
**URL:** `/resume-skills/[industry-slug]`
**Estimated pages:** 100-200
**Search volume per page:** 100-3,000/mo
**Aggregate potential:** 30,000-100,000/mo

**Page content:**
1. H1: "Essential Skills for [Industry/Role] Resumes"
2. Hard skills list with descriptions
3. Soft skills list with descriptions
4. "How to showcase [Industry] skills on your resume"
5. "ATS-friendly skill keywords for [Industry]"
6. CTA: "Build Your Resume with These Skills" → `/editor`

### 2.4 Page Type 4: Resume Templates by Industry
**Pattern:** `[industry] resume template`
**URL:** `/resume-templates/[industry-slug]`
**Estimated pages:** 50-100
**Search volume per page:** 500-5,000/mo
**Aggregate potential:** 50,000-200,000/mo

**Page content:**
1. H1: "Free [Industry] Resume Template"
2. Preview of a pre-filled resume tailored to the industry (rendered using CV preview component)
3. "What makes a great [Industry] resume"
4. Section-by-section guidance for the industry
5. "Download this template as PDF" → generates PDF, then prompts to use editor
6. CTA: "Customize This Template" → `/editor` with pre-loaded data

### 2.5 Page Type 5: Resume Objective Examples
**Pattern:** `resume objective for [job title]`
**URL:** `/resume-objective/[job-title-slug]`
**Estimated pages:** 300+
**Search volume per page:** 50-1,000/mo
**Aggregate potential:** 30,000-100,000/mo

### 2.6 Implementation Architecture

**Technical approach for Next.js:**
```
app/
├── resume-examples/
│   └── [slug]/
│       └── page.tsx          # Dynamic route
├── resume-summary/
│   └── [slug]/
│       └── page.tsx
├── resume-skills/
│   └── [slug]/
│       └── page.tsx
├── resume-templates/
│   └── [slug]/
│       └── page.tsx
├── resume-objective/
│   └── [slug]/
│       └── page.tsx
```

**Data layer:**
```
data/
├── job-titles.json           # Master list of 1000+ job titles
├── industries.json           # Master list of 50+ industries
├── skills-by-role.json       # Skills mapped to roles
├── summary-examples.json     # Pre-generated summaries
└── resume-content.json       # Pre-generated page content
```

**Key technical decisions:**
- Use `generateStaticParams()` for ISR (Incremental Static Regeneration)
- Pre-generate content with AI in a build script (not on-the-fly)
- Each page must have 60%+ unique content (avoid thin content penalty)
- Internal linking network: every page links to 5-10 related pages
- Sitemap generation: separate sitemaps per page type (`sitemap-resume-examples.xml`, etc.)

### 2.7 Internal Linking Architecture

**Hub-and-Spoke Model:**
```
Homepage (/)
├── /resume-examples (hub page listing all job titles A-Z)
│   ├── /resume-examples/software-engineer
│   ├── /resume-examples/nurse
│   └── ...
├── /resume-summary (hub page)
│   ├── /resume-summary/software-engineer
│   └── ...
├── /resume-templates (hub page)
│   ├── /resume-templates/healthcare
│   └── ...
├── /resume-skills (hub page)
│   └── ...
└── /resume-objective (hub page)
    └── ...
```

**Cross-linking rules:**
- Every resume example page links to its corresponding summary, skills, and objective pages
- Every hub page links to the top 20 most popular pages + full A-Z index
- Every programmatic page links back to its hub and to the homepage
- Footer includes links to all hub pages
- Breadcrumbs on every page with BreadcrumbList schema

---

## PHASE 3: COMPETITOR & COMPARISON PAGES (Week 3-5)
*Priority: HIGH — Captures high-intent "switching" traffic*

### 3.1 "Magic Resume vs [Competitor]" Pages

**Create pages for each direct competitor:**
| Page | URL | Target Keywords |
|------|-----|-----------------|
| Magic Resume vs Resume.io | `/compare/magic-resume-vs-resume-io` | "resume.io alternative", "resume.io vs" |
| Magic Resume vs Zety | `/compare/magic-resume-vs-zety` | "zety alternative", "zety vs" |
| Magic Resume vs Novoresume | `/compare/magic-resume-vs-novoresume` | "novoresume alternative" |
| Magic Resume vs Kickresume | `/compare/magic-resume-vs-kickresume` | "kickresume alternative" |
| Magic Resume vs Enhancv | `/compare/magic-resume-vs-enhancv` | "enhancv alternative" |
| Magic Resume vs Canva Resume | `/compare/magic-resume-vs-canva` | "canva resume alternative" |
| Magic Resume vs Reactive Resume | `/compare/magic-resume-vs-reactive-resume` | "reactive resume alternative" |
| Magic Resume vs Indeed Resume | `/compare/magic-resume-vs-indeed` | "indeed resume builder" |
| Magic Resume vs LinkedIn Resume | `/compare/magic-resume-vs-linkedin` | "linkedin resume builder" |
| Resume.io vs Zety | `/compare/resume-io-vs-zety` | "resume.io vs zety" |

**Page template for each:**
1. TL;DR (2-3 sentence comparison)
2. At-a-glance comparison table (features, pricing, privacy, AI, etc.)
3. Detailed comparison by category
4. "Who [Competitor] is best for" (honest)
5. "Who Magic Resume is best for"
6. Pricing comparison (their $20-30/mo vs our $0)
7. Migration guide ("How to switch from [Competitor]")
8. FAQ section with FAQPage schema
9. CTA: "Try Magic Resume Free — No Sign-Up Required"

### 3.2 "[Competitor] Alternatives" Pages

| Page | URL |
|------|-----|
| Best Resume.io Alternatives | `/alternatives/resume-io-alternatives` |
| Best Zety Alternatives | `/alternatives/zety-alternatives` |
| Best Novoresume Alternatives | `/alternatives/novoresume-alternatives` |
| Best Canva Resume Alternatives | `/alternatives/canva-resume-alternatives` |
| Best Free Resume Builders | `/alternatives/best-free-resume-builders` |
| Best AI Resume Builders | `/alternatives/best-ai-resume-builders` |
| Best Resume Builders No Sign Up | `/alternatives/resume-builders-no-sign-up` |
| Best Open Source Resume Builders | `/alternatives/open-source-resume-builders` |
| Best Privacy-First Resume Builders | `/alternatives/privacy-first-resume-builders` |

**Page template:**
1. Why people look for alternatives (validate pain)
2. What to look for in a resume builder (criteria framework)
3. List of 5-7 alternatives (Magic Resume first, then real alternatives)
4. Comparison table
5. Detailed breakdown of each
6. Recommendation by use case
7. CTA

### 3.3 Comparison Hub Page
**URL:** `/compare`
**Content:** Central page linking to all comparison and alternative pages
**Schema:** ItemList schema listing all comparisons

---

## PHASE 4: BLOG & CONTENT MARKETING (Week 3-8)
*Priority: HIGH — Builds authority and captures informational queries*

### 4.1 Content Pillars

| Pillar | Hub URL | Description |
|--------|---------|-------------|
| Resume Writing Guide | `/blog/how-to-write-a-resume` | Comprehensive pillar content |
| Career Advice | `/blog/category/career-advice` | Job search tips |
| Resume Formatting | `/blog/category/resume-format` | Layout and design |
| AI & Resumes | `/blog/category/ai-resume` | AI in job applications |
| Industry Guides | `/blog/category/industry-guides` | Industry-specific advice |

### 4.2 Priority Blog Posts (ordered by search volume potential)

**Tier 1 — Pillar Posts (10K+ monthly searches each):**
1. "How to Write a Resume in 2026: Complete Guide" — `/blog/how-to-write-a-resume`
2. "Best Resume Format: Which One is Right for You?" — `/blog/best-resume-format`
3. "How to Write a Cover Letter (with Examples)" — `/blog/how-to-write-a-cover-letter`
4. "Resume vs CV: What's the Difference?" — `/blog/resume-vs-cv`
5. "How to Write a Professional Summary" — `/blog/professional-summary-guide`
6. "Best Free Resume Builders in 2026" — `/blog/best-free-resume-builders`
7. "Resume Keywords: How to Beat ATS Systems" — `/blog/resume-keywords-ats`
8. "How to List Skills on a Resume" — `/blog/how-to-list-skills-on-resume`
9. "Resume Action Verbs: 500+ Power Words" — `/blog/resume-action-verbs`
10. "How to Write Resume Bullet Points" — `/blog/resume-bullet-points`

**Tier 2 — Supporting Posts (1K-10K monthly searches each):**
11. "Chronological vs Functional Resume: Which to Use"
12. "How to Explain Employment Gaps on Your Resume"
13. "How Long Should a Resume Be?"
14. "Resume Objective vs Summary: Which is Better?"
15. "How to Tailor Your Resume for Each Job Application"
16. "How to Import a PDF Resume into an Editable Format"
17. "AI Resume Writers: Are They Worth It?"
18. "Resume Mistakes That Cost You the Interview"
19. "How to Write a Resume with No Experience"
20. "Best Resume Fonts and Typography"
21. "How to Add LinkedIn to Your Resume"
22. "Remote Job Resume Tips"
23. "Career Change Resume Guide"
24. "How to Quantify Achievements on Your Resume"
25. "One-Page vs Two-Page Resume: When to Use Each"

**Tier 3 — Long-tail & AI-bait Posts (500-1K monthly searches each):**
26. "What is an ATS-Friendly Resume? (Complete Guide)"
27. "Free Resume Builder vs Paid: Which is Better?"
28. "How to Convert PDF Resume to Editable Format"
29. "Resume Privacy: Where Your Data Goes"
30. "Open Source Resume Builders: Complete Guide"
31-50. Industry-specific guides ("Nursing Resume Guide", "Software Engineer Resume Guide", etc.)

### 4.3 Content Infrastructure

**Set up MDX blog:**
```
app/
├── blog/
│   ├── page.tsx              # Blog index
│   ├── [slug]/
│   │   └── page.tsx          # Individual blog post
│   └── category/
│       └── [category]/
│           └── page.tsx      # Category page
content/
├── blog/
│   ├── how-to-write-a-resume.mdx
│   ├── best-resume-format.mdx
│   └── ...
```

**Blog post schema (Article + BreadcrumbList):**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "...",
  "description": "...",
  "image": "...",
  "author": {
    "@type": "Person",
    "name": "Thanos Kazakis",
    "url": "https://x.com/KazakisThanos"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Magic Resume",
    "logo": "https://magik-resume.dev/icon.svg"
  },
  "datePublished": "...",
  "dateModified": "...",
  "mainEntityOfPage": "..."
}
```

### 4.4 AI SEO Content Optimization

Every blog post and programmatic page MUST follow these rules for AI citation:

**Structure rules:**
- Lead every section with a direct answer (don't bury it)
- Keep key answer passages to 40-60 words (optimal for AI snippet extraction)
- Use H2/H3 headings that match how people phrase queries
- Tables beat prose for comparison content
- Numbered lists beat paragraphs for process content

**Authority rules:**
- Cite sources with links (+40% AI visibility)
- Include specific statistics with sources (+37%)
- Add expert quotes with name and title (+30%)
- Use authoritative tone with demonstrated expertise (+25%)
- Add "Last updated: [date]" prominently

**Content block patterns for AI extraction:**
- **Definition blocks** for "What is X?" queries
- **Step-by-step blocks** for "How to X" queries
- **Comparison tables** for "X vs Y" queries
- **Pros/cons blocks** for evaluation queries
- **FAQ blocks** for common questions

---

## PHASE 5: FREE TOOLS — ENGINEERING AS MARKETING (Week 4-8)
*Priority: HIGH — Tools attract links, searches, and convert users*

### 5.1 Tool 1: ATS Resume Checker / Resume Score
**URL:** `/tools/resume-checker`
**Target keywords:** "ats resume checker free", "resume score", "ats checker" (combined 50K+ monthly)
**What it does:** User pastes their resume text or uploads PDF. AI analyzes it against ATS best practices and returns a score (0-100) with specific improvement suggestions.
**Lead capture:** Show score for free, require email for detailed report (optional, can be fully free)
**CTA:** "Fix these issues with Magic Resume's AI Polish" → `/editor`
**Estimated build time:** 1-2 weeks

### 5.2 Tool 2: Resume Keyword Optimizer
**URL:** `/tools/resume-keywords`
**Target keywords:** "resume keywords", "resume keywords for [job title]", "ats keywords" (combined 30K+)
**What it does:** User pastes a job description + their resume. AI compares and identifies missing keywords, suggesting where to add them.
**CTA:** "Add these keywords with AI Polish" → `/editor`
**Estimated build time:** 1 week

### 5.3 Tool 3: Professional Summary Generator
**URL:** `/tools/summary-generator`
**Target keywords:** "professional summary generator", "resume summary generator" (combined 20K+)
**What it does:** User inputs job title, years of experience, key skills. AI generates 5 professional summary options.
**CTA:** "Use this summary in Magic Resume" → `/editor`
**Estimated build time:** 3-5 days

### 5.4 Tool 4: Resume Bullet Point Generator
**URL:** `/tools/bullet-point-generator`
**Target keywords:** "resume bullet point generator", "resume bullet points" (combined 15K+)
**What it does:** User inputs job title and responsibility. AI generates 5 achievement-oriented bullet points with metrics.
**CTA:** "Add to your resume" → `/editor`
**Estimated build time:** 3-5 days

### 5.5 Tool 5: Resume Length Calculator
**URL:** `/tools/resume-length-calculator`
**Target keywords:** "how long should a resume be", "resume length" (combined 10K+)
**What it does:** User inputs years of experience, career level, industry. Tool recommends ideal resume length with reasoning.
**CTA:** "Build your perfectly-sized resume" → `/editor`
**Estimated build time:** 1-2 days

### 5.6 Tools Hub Page
**URL:** `/tools`
**Content:** Landing page listing all free tools with descriptions
**Schema:** ItemList schema

---

## PHASE 6: GLOSSARY — CAREER TERMINOLOGY (Week 4-6)
*Priority: MEDIUM — Captures "what is" informational queries, builds topical authority*

### 6.1 Glossary Structure
**URL:** `/glossary/[term-slug]`
**Hub page:** `/glossary`
**Estimated pages:** 100-200
**Search volume per page:** 50-2,000/mo
**Aggregate potential:** 10,000-50,000/mo

### 6.2 Term Categories

**Resume terms:** ATS, cover letter, curriculum vitae, resume objective, professional summary, chronological resume, functional resume, combination resume, resume header, resume footer, references, resume gap, resume keywords, resume formatting, resume template, resume builder, portfolio, work history, transferable skills

**Job search terms:** job application, interview, phone screen, hiring manager, recruiter, job description, salary negotiation, offer letter, onboarding, probation period, career change, networking, LinkedIn profile, elevator pitch, informational interview

**Career terms:** hard skills, soft skills, technical skills, leadership skills, communication skills, career development, professional development, mentorship, certifications, continuing education

**Each glossary page:**
1. H1: "What is [Term]? — Resume & Career Guide"
2. Clear definition in first paragraph (40-60 words, AI-extractable)
3. Why it matters for your resume/career
4. Examples and context
5. Related terms (internal links)
6. How Magic Resume helps with [term]
7. CTA → `/editor`
8. FAQ section
9. DefinedTerm schema markup

---

## PHASE 7: LANDING PAGE OPTIMIZATION (Week 2-4)
*Priority: HIGH — Convert the traffic you're getting*

### 7.1 Homepage Improvements
1. **Add "How It Works" section** — 3-step visual guide (Import/Build → AI Polish → Export PDF)
2. **Add social proof section** — GitHub stars counter (already exists in header, add to body), "Join X professionals" counter
3. **Add testimonials section** — Collect and display user testimonials
4. **Add industry logos** — "Works for every industry" with icons
5. **Fix features grid** — Change from 4-col to 3-col (5 items in 4-col grid creates orphan)
6. **Add "Resume Examples" section** — Preview grid linking to programmatic pages
7. **Add light mode hero screenshot** — Currently only shows dark mode
8. **Add footer navigation** — Links to blog, tools, glossary, comparisons, privacy, terms

### 7.2 New Landing Pages
| Page | URL | Purpose |
|------|-----|---------|
| Resume Examples Hub | `/resume-examples` | Hub for all job title pages |
| Resume Templates Hub | `/resume-templates` | Hub for all industry templates |
| Resume Summary Hub | `/resume-summary` | Hub for all summary examples |
| Blog Index | `/blog` | Content marketing hub |
| Tools Hub | `/tools` | Free tools hub |
| Glossary Hub | `/glossary` | Career terminology hub |
| Compare Hub | `/compare` | All competitor comparisons |
| About | `/about` | Company/founder story |
| Privacy Policy | `/privacy` | Required for trust |
| Terms of Service | `/terms` | Required for trust |

---

## PHASE 8: AI SEARCH OPTIMIZATION (Ongoing)
*Priority: HIGH — 45% of Google searches show AI Overviews*

### 8.1 Content Extractability Checklist (Apply to Every Page)
- [ ] Clear definition in first paragraph
- [ ] Self-contained answer blocks (work without surrounding context)
- [ ] Statistics with sources cited
- [ ] Comparison tables for "[X] vs [Y]" queries
- [ ] FAQ section with natural-language questions
- [ ] Schema markup (FAQ, HowTo, Article, Product)
- [ ] Author attribution (name, credentials)
- [ ] Recently updated date visible
- [ ] Heading structure matches query patterns
- [ ] AI bots allowed in robots.txt

### 8.2 Third-Party Presence (Critical for AI Citations)
- [ ] Create/update Wikipedia page for Magic Resume
- [ ] Post authentically on Reddit (r/resumes, r/jobs, r/careeradvice, r/opensource)
- [ ] Answer Quora questions about resume building
- [ ] Submit to AlternativeTo.net
- [ ] Submit to Product Hunt
- [ ] List on G2, Capterra (even for free tools)
- [ ] Create YouTube tutorials (video content gets cited by Google AI Overviews)
- [ ] Write guest posts on career advice sites

### 8.3 AI Visibility Monitoring
Monthly manual check of top 20 queries across:
- Google AI Overviews
- ChatGPT
- Perplexity
- Track: Are you cited? Who is? What page?

---

## PHASE 9: SOCIAL & COMMUNITY AMPLIFICATION (Week 2-12)
*Priority: MEDIUM — Amplifies SEO efforts, builds backlinks*

### 9.1 Platform Strategy

| Platform | Focus | Frequency | Content Type |
|----------|-------|-----------|--------------|
| Reddit | r/resumes, r/jobs, r/opensource, r/webdev | 3-5x/week | Helpful comments + occasional tool shares |
| Twitter/X | @KazakisThanos | 5-7x/week | Build tips, open-source updates, career advice |
| LinkedIn | Thanos Kazakis | 3-5x/week | Career advice, resume tips, product updates |
| YouTube | Magic Resume | 2-4x/month | Tutorials, resume reviews, feature demos |
| Hacker News | Show HN | 1-2x total | Product launch + major feature launches |
| Product Hunt | Magic Resume | 1x (strategic) | Full product launch |

### 9.2 Content Calendar (Weekly Template)

| Day | LinkedIn | Twitter/X | Reddit |
|-----|----------|-----------|--------|
| Mon | Resume tip carousel | Thread: "How to write [section]" | Answer question in r/resumes |
| Tue | Behind-the-scenes | Quick tip tweet | Share tool in r/jobs |
| Wed | Data/stat post | Feature demo GIF | Comment in r/opensource |
| Thu | Career advice story | Thread: "[Job title] resume tips" | Answer question in r/careeradvice |
| Fri | "Start your weekend right" CTA | Week in review | Share blog post |

### 9.3 Reddit Strategy (High Priority)
Reddit is critical for both direct traffic AND AI citations (1.8% of ChatGPT citations come from Reddit).

**Subreddits to target:**
- r/resumes (300K+ members) — Help people review their resumes, mention tool when relevant
- r/jobs (1.5M+ members) — Career advice, link to guides
- r/careeradvice (200K+ members) — In-depth career guidance
- r/opensource (100K+ members) — Share the project
- r/webdev (1M+ members) — Share the tech stack, get developer interest
- r/reactjs (400K+ members) — Share technical decisions
- r/nextjs (100K+ members) — Share Next.js implementation details

**Rules:**
- Provide genuine value first (never spam)
- Share tool only when directly relevant
- Build karma and reputation before self-promoting
- Use personal account, not brand account

---

## PHASE 10: LAUNCH STRATEGY (Week 6-8)
*Priority: MEDIUM — Creates initial traffic spike + backlinks*

### 10.1 Product Hunt Launch
**Timing:** After blog + programmatic pages are live (more to show)
**Preparation:**
1. Build relationships with PH community 2-3 weeks before
2. Optimize listing: compelling tagline, polished visuals, demo video
3. Prepare team for all-day engagement on launch day
4. Line up supporters (friends, contributors, Twitter followers)

**Listing copy:**
- Tagline: "Free AI resume builder — no sign-up, no paywall, no catches"
- Description: Focus on genuinely free + AI + privacy + open-source
- Categories: Productivity, AI, Open Source

### 10.2 Hacker News "Show HN"
**Timing:** Same week as Product Hunt or 1 week after
**Angle:** Open-source + technical decisions (client-side PDF, no Puppeteer, free AI model)
**Title:** "Show HN: Magic Resume — Free open-source AI resume builder (no sign-up required)"

### 10.3 Other Launch Platforms
- BetaList
- AlternativeTo.net
- SaaSHub
- ToolHunt
- There's An AI For That
- Indie Hackers
- Dev.to (write a technical article about the stack)

---

## PHASE 11: LINK BUILDING (Ongoing)
*Priority: HIGH — Domain authority is critical for ranking on head terms*

### 11.1 Natural Link Magnets
- Free tools (ATS checker, keyword optimizer) → linkable assets
- Original data content → cited by others
- Open source project → linked from GitHub lists, awesome-lists
- Comparison pages → linked when people discuss alternatives
- Comprehensive guides → linked as references

### 11.2 Active Link Building
1. **Guest posting** on career advice blogs (include natural link to tool/guide)
2. **HARO/Quoted** — Respond to journalist queries about resumes, job searching, AI tools
3. **Awesome lists** — Submit to awesome-nextjs, awesome-react, awesome-opensource lists on GitHub
4. **Resource pages** — Find "best free tools" and "resume resources" pages, request inclusion
5. **Broken link building** — Find broken links on career advice sites, offer your content as replacement
6. **GitHub ecosystem** — README badges, contributor links, related project links

---

## IMPLEMENTATION TIMELINE

### Month 1 (Weeks 1-4)
| Week | Focus | Deliverables |
|------|-------|-------------|
| 1 | Technical SEO fixes | All schema fixes, robots.txt, GSC setup, sitemap fix |
| 1-2 | Blog infrastructure | MDX setup, blog layout, first 5 blog posts |
| 2-3 | Programmatic SEO foundation | Data collection (job titles, skills), page templates, first 100 pages |
| 3-4 | Comparison pages | 5 "vs" pages, 5 "alternatives" pages |
| 4 | Free tool #1 | ATS Resume Checker live |

### Month 2 (Weeks 5-8)
| Week | Focus | Deliverables |
|------|-------|-------------|
| 5-6 | Programmatic SEO scale | 500+ resume example pages, 200+ summary pages |
| 5-6 | Blog content | 15 more blog posts (Tier 1 + Tier 2) |
| 6-7 | Free tools #2-3 | Keyword Optimizer + Summary Generator |
| 7-8 | Glossary | 100+ glossary pages |
| 8 | Product Hunt + HN launch | Full launch campaign |

### Month 3 (Weeks 9-12)
| Week | Focus | Deliverables |
|------|-------|-------------|
| 9-10 | Programmatic SEO max | 1,000+ total pages, skills pages, template pages |
| 9-10 | Blog content | 20 more blog posts (Tier 2 + Tier 3) |
| 10-11 | Free tools #4-5 | Bullet Point Generator + Length Calculator |
| 11-12 | Remaining comparisons | 10+ more comparison pages |
| 12 | Optimization | Refresh underperformers, double down on winners |

### Running totals by end of Month 3:
| Content Type | Pages |
|-------------|-------|
| Programmatic SEO pages | 1,500-2,000 |
| Blog posts | 40-50 |
| Comparison/alternative pages | 20-30 |
| Free tools | 5 |
| Glossary pages | 100-150 |
| Hub/index pages | 10 |
| Static pages (about, privacy, terms) | 3-5 |
| **Total indexable pages** | **~1,700-2,250** |

---

## SITEMAP STRATEGY

Update `app/sitemap.ts` to generate multiple sitemaps:

```typescript
// app/sitemap.ts — sitemap index
// app/sitemap/resume-examples.ts — all resume example pages
// app/sitemap/resume-summary.ts — all summary pages
// app/sitemap/resume-skills.ts — all skills pages
// app/sitemap/resume-templates.ts — all template pages
// app/sitemap/blog.ts — all blog posts
// app/sitemap/compare.ts — all comparison pages
// app/sitemap/tools.ts — all tool pages
// app/sitemap/glossary.ts — all glossary pages
```

---

## MEASUREMENT & KPIs

### Weekly Tracking
| Metric | Tool | Target (Month 3) |
|--------|------|-------------------|
| Organic impressions | Google Search Console | 1,000,000/mo |
| Organic clicks | Google Search Console | 100,000/mo |
| Indexed pages | Google Search Console | 2,000+ |
| Pages indexed % | Google Search Console | >90% |
| Average position (target keywords) | Google Search Console | <20 |
| Referral traffic from AI | Vercel Analytics | Track trend |
| GitHub stars | GitHub | 500+ |
| Editor sessions | Vercel Analytics | 10,000/mo |

### Monthly Check
- AI visibility audit (ChatGPT, Perplexity, Google AI Overviews)
- Backlink growth (use free tools like Ahrefs Webmaster)
- Content performance (which pages drive most traffic)
- Conversion rate (visitors → editor users)

---

## RISK MITIGATION

| Risk | Mitigation |
|------|-----------|
| Thin content penalty from programmatic pages | Ensure 60%+ unique content per page, use AI to generate genuinely different content per job title |
| Slow indexation of new pages | Submit sitemaps to GSC, internal link aggressively, build backlinks to hub pages |
| AI model costs for content generation | Use free OpenRouter model for generation, batch-process during build |
| Competitor pages marked as biased | Be genuinely honest about competitor strengths, include real alternatives |
| Domain authority too low for head terms | Focus on long-tail first, build authority gradually, link building |
| Content quality inconsistency | Create strict content templates, review samples before mass generation |

---

## NEXT STEPS (IMMEDIATE)

1. **Fix technical SEO issues** (Phase 1) — Start today
2. **Set up blog infrastructure** (MDX + layout) — Week 1
3. **Build programmatic SEO data layer** (job titles JSON, skills data) — Week 1-2
4. **Write first 5 pillar blog posts** — Week 2-3
5. **Build first free tool** (ATS Resume Checker) — Week 3-4
6. **Create first 5 comparison pages** — Week 3-4
7. **Submit to Google Search Console** — Day 1
8. **Start Reddit engagement** — Day 1

---

*This strategy uses knowledge from 11 marketing skills: product-marketing-context, programmatic-seo, seo-audit, ai-seo, content-strategy, competitor-alternatives, marketing-ideas, schema-markup, free-tool-strategy, social-content, and launch-strategy.*
