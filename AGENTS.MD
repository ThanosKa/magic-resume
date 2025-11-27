# AI Agent Guide

Instructions below are for AI assistants. Keep responses concise and aligned with the `.cursor` canonical files.

## Repo Map

- Next.js App Router. Landing UI in `components/landing`; editor pieces in `components/editor` with state in `store/`; shared primitives in `components/ui`; helpers in `lib/`; types in `types/`.

## Runbook

- Install: `pnpm install`
- Dev: `pnpm dev`
- Build: `pnpm build`
- Lint: `pnpm lint`
- Start (after build): `pnpm start`

## Behavior Rules

- Prefer pnpm; avoid destructive git commands and respect existing changes.
- Default to server components; gate browser-only logic to avoid hydration drift.
- Keep UI in the neutral Radix/Tailwind style; avoid new dependencies without approval.
- Provide manual verification steps when relevant; skip adding tests unless asked.

## Agent Permissions

- **AGENTS MUST NEVER run the server or libraries without explicit permission from the user.**
- Do not execute `pnpm dev`, `npm run dev`, or any server startup commands unless specifically requested.
- Only install dependencies when explicitly asked or when required for code changes you're implementing.
- Ask for permission before running any long-running processes, build commands, or external services.

## Code Style & Stack

- See `.cursor/code-style.mdc` for full coding conventions (imports, TS/React patterns, formatting).

## References

- Canonical files: `.cursor/general.mdc` (behavior) and `.cursor/code-style.mdc` (coding/stack).
- For planning requests, refer to `.claude/agents/tech-lead.md`.
