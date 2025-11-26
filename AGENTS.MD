# Repository Guidelines

## Project Structure & Module Organization
- Next.js App Router app with landing components in `components/landing`, editor in `components/editor`, shared UI in `components/ui`, state in `store`, types in `types`, helpers in `lib`.

## Build, Test, and Development Commands
- Install: `pnpm install`
- Dev: `pnpm dev`
- Build: `pnpm build`
- Lint: `pnpm lint`
- Start: `pnpm start` (after build)

## Coding Style & Naming Conventions
- TypeScript + React; follow Tailwind/Radix styling patterns.
- Use aliases (`@/`) over deep relatives; keep components PascalCase, utilities kebab-case.
- See `.cursor` code-style and TypeScript guidelines for details.

## Rules
- Prefer pnpm; avoid destructive git operations.
- Keep UI consistent with the established neutral/Radix/Tailwind look.
- Avoid hydration issues: no random IDs or browser-only logic during SSR.

## Testing Guidelines
- No automated tests required unless requested; provide manual verification steps when relevant.

## Commit & Pull Request Guidelines
- Keep commits focused and descriptive (Conventional-style if possible).
- PRs should include summary, linked issues, screenshots for UI changes, and any migration/env notes.
- Do not add dependencies without approval.

## Canonical Rules & Conventions
- Reference `.cursor/` files for architecture overview, TypeScript, React, and code style guidance.

## Agents
- `tech-lead` agent (`.claude/agents/tech-lead.md`) for planning and task breakdowns.
