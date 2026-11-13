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
[![CI](https://github.com/ThanosKa/magic-resume/actions/workflows/ci.yml/badge.svg)](https://github.com/ThanosKa/magic-resume/actions/workflows/ci.yml)

<p>AI-assisted CV builder with live preview, AI polish, and one-click export to PDF or JSON.</p>

</div>

## 📸 Screenshots

<div align="center">
  <img src="./public/light.png" alt="Magic Resume light mode" width="49%" />
  <img src="./public/dark.png" alt="Magic Resume dark mode" width="49%" />
</div>

## What It Does

Magic Resume is a Next.js (App Router) application for creating professional CVs quickly:

- Guided editor for personal info, experience, education, projects, skills, and summaries
- Real-time preview with flexible header alignment and section ordering/toggles
- Import/export JSON, print-friendly view, and high-quality PDF generation via `@react-pdf/renderer`
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
pnpm lint           # Run ESLint for code quality
pnpm type-check     # Run TypeScript type checking (--noEmit)
pnpm build          # Production build
pnpm start          # Start production server (after build)
pnpm test           # Run all tests once
pnpm test:watch     # Run tests in watch mode for development
pnpm test:coverage  # Generate test coverage report
pnpm seo-check      # Basic SEO sanity checks
```

## Running Tests

Magic Resume uses Vitest for testing and TypeScript for type checking. Tests run automatically on pull requests via GitHub Actions.

```bash
# Run TypeScript type checking
pnpm type-check

# Run all tests
pnpm test

# Watch mode for development
pnpm test:watch

# Generate coverage report
pnpm test:coverage
```

**Note**: API keys are not required for running tests. All external API calls are mocked, so you can use placeholder values in `.env.local` or omit them entirely for testing purposes.

PDF generation:
- Powered by `@react-pdf/renderer` for high-quality, searchable client-side generation.
- No server-side browser required. 

## Deployment

Magic Resume runs on a Cloudflare Worker named `magic-resume` through [vinext](https://github.com/cloudflare/vinext). Use Node 24.22 or newer for the Worker build and the `cf` CLI.

1. Put `OPENROUTER_API_KEY`, `NEXT_PUBLIC_SITE_URL` (your `https://` production domain) and `LOG_LEVEL` in `.env.production.local`
2. Build with `pnpm build:vinext`. It reads the `NEXT_PUBLIC_*` values and stops if `NEXT_PUBLIC_SITE_URL` is missing or not `https://`
3. Put `OPENROUTER_API_KEY` and `LOG_LEVEL` in a JSON file outside the repo, then deploy with `pnpm exec cf deploy --prebuilt --secrets-file <file>`. Later deploys keep them, so the flag is only needed when a value changes

Merging to `main` updates the Worker: `.github/workflows/deploy.yml` builds and deploys once CI passes on `main`. To deploy by hand, run `pnpm build:vinext`, then `pnpm exec cf deploy --prebuilt`.

Local Worker preview: `pnpm build:vinext && pnpm start:vinext`.

**Other Node hosts**

- Build locally: `pnpm build`.
- Start: `pnpm start` (expects `.env.local` with required variables).

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
- Run `pnpm lint` and `pnpm type-check` (and `pnpm build` if you touch build/runtime code) before submitting.
- Prefer existing patterns (Radix + Tailwind, server-first components; guard client-only code).

For detailed contribution guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md).

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=ThanosKa/magic-resume&type=Date)](https://star-history.com/#ThanosKa/magic-resume&Date)

## Contributions

Contributions are welcome! Please feel free to submit a Pull Request.

### Contributors

<a href="https://github.com/ThanosKa/magic-resume/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ThanosKa/magic-resume" alt="Contributors"/>
</a>

## Sponsor this Project

If you find Magic Resume helpful and would like to support its development, consider buying me a coffee! ☕

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-F16061?style=for-the-badge&logo=buy-me-a-coffee&logoColor=white)](https://buymeacoffee.com/thaka)

Your support helps keep the project maintained and allows me to work on new features. Thank you! 🙏

## License

This project is licensed under the GNU Affero General Public License v3.0. See the [LICENSE](LICENSE) file for details.

The AGPL permits commercial use, modification, and redistribution as long as you keep the same license and provide source (including for network use). If you need a different licensing arrangement, please open an issue or contact the maintainer.
