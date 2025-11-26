# Magic Resume

AI-assisted CV builder with live preview, templated sections, and quick exports.

## Features
- Guided editor for personal details, experience, education, projects, and skills
- AI polishing + live preview that mirrors your inputs
- Social/contact buttons with icons instead of raw URLs
- Theme toggle, responsive layout, and animated hero CTA to jump into the editor

## Tech Stack
- Next.js 16 (App Router, Turbopack for dev)
- React 19, TypeScript 5.7
- Tailwind CSS 4, Radix UI primitives, Framer Motion
- Zustand for state, Zod + React Hook Form for validation

## Getting Started
1. **Install dependencies**
   ```bash
   pnpm install
   ```
2. **Run the dev server**
   ```bash
   pnpm dev
   ```
   Open http://localhost:3000.
3. **Lint**
   ```bash
   pnpm lint
   ```
4. **Production build**
   ```bash
   pnpm build && pnpm start
   ```

## Environment
Create a `.env.local` if you add secrets (API keys for AI providers, analytics, etc.). Nothing is required to run locally today.

## Deployment
- **Vercel** (recommended): `vercel` from the repo root or connect the GitHub repo and set `NEXT_PUBLIC` env vars as needed.
- **Static export**: `pnpm build` then `next export` if you add an export path.

## Troubleshooting
- If you see hydration mismatches, ensure the app renders only client-safe components (theme toggle is guarded) and avoid random IDs in server-rendered branches.
- Upgrade dependencies with `pnpm up` and rerun `pnpm lint` if you change ESLint/TypeScript configs.

## Project Structure
- `app/` – routes and layout
- `components/` – UI primitives and landing/editor components
- `store/` – Zustand state
- `styles/` – Tailwind and global styles
- `types/` – shared TypeScript types
