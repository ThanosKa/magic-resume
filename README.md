<div align="center">

<h1>✨ Magic Resume ✨</h1>

[![Next.js 16](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19-61dafb)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38bdf8)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10+-purple)](https://www.framer.com/motion/)
[![Tiptap](https://img.shields.io/badge/Tiptap-^3-8a2be2)](https://tiptap.dev/)
[![Zustand](https://img.shields.io/badge/Zustand-state-8a3ffc)](https://zustand-demo.pmnd.rs/)
[![pnpm](https://img.shields.io/badge/pnpm-%F0%9F%8F%AF-orange)](https://pnpm.io/)

[![Twitter Follow](https://img.shields.io/twitter/follow/KazakisThanos?style=social)](https://x.com/KazakisThanos)

<p>AI-assisted CV builder with live preview, AI polish, and one-click export to PDF or JSON.</p>

</div>

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

1. Install dependencies

```bash
pnpm install
```

2. Configure environment (required for AI polish)

```bash
cp .env.example .env.local
# Add your OpenRouter key
OPENROUTER_API_KEY=sk-...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

3. Run the app locally

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

## Deployment

**Vercel (recommended)**

- Push your branch to GitHub/GitLab/Bitbucket so Vercel can pull it.
- In Vercel, **New Project** → import the repo → set env vars (`NEXT_PUBLIC_SITE_URL`, `OPENROUTER_API_KEY`).
- Framework preset: **Next.js**. Leave build command as `next build` (default) and output as `.next`.
- For previews, Vercel auto-builds each PR. For production, promote the main branch or trigger a production deployment.
- One-click deploy:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FThanosKa%2Fmagic-resume)

**Manual/Other hosts**

- Build locally: `pnpm build`.
- Start: `pnpm start` (expects `.env.local` with required variables).
- Ensure the host supports Node.js 18+ and Next.js server output.

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
- **Contributions are welcome!** Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a pull request.
- We follow a [Code of Conduct](.github/CODE_OF_CONDUCT.md) to ensure a welcoming environment for all contributors.

### Quick Start for Contributors

- Fork and create a feature branch.
- Keep PRs scoped; include before/after context for UI changes (screenshots or short GIFs).
- Run `pnpm lint` (and `pnpm build` if you touch build/runtime code) before submitting.
- Prefer existing patterns (Radix + Tailwind, server-first components; guard client-only code).

For detailed contribution guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md).

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=ThanosKa/magic-resume&type=Date)](https://star-history.com/#ThanosKa/magic-resume&Date)

## Contributions

Contributions are welcome! Please feel free to submit a Pull Request.

![Contributors](https://img.shields.io/github/contributors/ThanosKa/magic-resume)
![Activity](https://img.shields.io/github/commit-activity/m/ThanosKa/magic-resume)

### Contributors

<a href="https://github.com/ThanosKa/magic-resume/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ThanosKa/magic-resume" />
</a>

## Sponsor this Project

If you find Magic Resume helpful and would like to support its development, consider buying me a coffee! ☕

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-F16061?style=for-the-badge&logo=buy-me-a-coffee&logoColor=white)](https://buymeacoffee.com/thaka)

Your support helps keep the project maintained and allows me to work on new features. Thank you! 🙏

## License

This project is licensed under the GNU Affero General Public License v3.0. See the [LICENSE](LICENSE) file for details.

**Note:** Commercial use requires explicit permission from the author. For commercial licensing inquiries, please open an issue or contact the maintainer.
