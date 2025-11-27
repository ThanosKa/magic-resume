# Magic Resume

[![Next.js 16](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/) [![React 19](https://img.shields.io/badge/React-19-61dafb)](https://react.dev/) [![pnpm](https://img.shields.io/badge/pnpm-%F0%9F%8F%AF-orange)](https://pnpm.io/)

AI-assisted CV builder with a live preview, AI polishing, and one-click export to PDF or JSON.

## What It Does

Magic Resume is a Next.js (App Router) application for creating professional CVs quickly:
- Guided editor for personal info, experience, education, projects, skills, and summaries
- Real-time preview with flexible header alignment and section ordering/toggles
- Import/export JSON, print-friendly view, and server-side PDF generation via Puppeteer
- AI polish (OpenRouter) to improve titles, summaries, and descriptions
- Client-side persistence (Zustand + localStorage) so drafts stay saved between sessions

## Why It’s Useful

- Cuts drafting time with structured inputs and rich text support (Tiptap)
- Keeps design consistent with Radix/Tailwind styling and Framer Motion details
- Export options cover PDF for sharing and JSON for backups or integration
- Privacy-first: data stays local unless you explicitly call the AI polish API

## Getting Started

Prerequisites: Node 18.18+ and pnpm installed.

1) Install dependencies
```bash
pnpm install
```

2) Configure environment (required for AI polish)
```bash
cp .env.example .env.local
# Add your OpenRouter key
OPENROUTER_API_KEY=sk-...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

3) Run the app locally
```bash
pnpm dev
# Visit http://localhost:3000 for the landing page and /editor for the builder
```

Useful scripts:
```bash
pnpm lint     # ESLint
pnpm build    # Production build
pnpm start    # Start after a build
pnpm seo-check # Basic SEO sanity checks
```

## Usage

- Open `/editor`, fill each section, and toggle/order sections as needed.
- Use “AI Polish” on summaries, experiences, education, or projects (requires `OPENROUTER_API_KEY`).
- Import a saved resume JSON, or export to JSON/PDF from the header menu; print uses the same layout.
- Data is persisted locally under the `cv-builder-data` store key so you can pick up where you left off.

API examples (local dev):
```bash
# Polish content
curl -X POST http://localhost:3000/api/polish \
  -H "Content-Type: application/json" \
  -d '{"content":"Lead developer on a data platform...", "polishType":"summary"}'

# Generate a PDF from prepared HTML (used by the editor)
curl -X POST http://localhost:3000/api/generate-pdf \
  -H "Content-Type: application/json" \
  -d '{"html":"<html>...</html>","filename":"cv"}' --output cv.pdf
```

## Project Structure

- `app/` – App Router pages (`/`, `/editor`, API routes)
- `components/landing/` – Marketing sections for the homepage
- `components/editor/` – Editor UI (forms, header, preview, AI polish dialog)
- `components/ui/` – Shared UI primitives (Radix + Tailwind)
- `store/` – Zustand store for CV state and persistence
- `lib/` – SEO helpers and metadata
- `styles/` – Global styles
- `scripts/` – Utilities like `seo-check`
- `types/` – Shared CV typings and defaults

## Getting Help

- File an issue or discussion in the repository with reproduction details.
- Review `app/` and `components/` for implementation references; `scripts/seo-check.js` can help validate SEO metadata locally.

## Maintainers & Contributing

- Maintained by the Magic Resume team. For questions or proposals, open an issue.
- Contributions welcome: create a PR, follow the existing TypeScript/Next.js style, and run `pnpm lint` (and `pnpm build` if you touch build/runtime code) before submitting.
