# Contributing to Magic Resume

Thank you for your interest in contributing to Magic Resume! This document provides guidelines and instructions for contributing to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Code Style Guidelines](#code-style-guidelines)
- [Reporting Bugs](#reporting-bugs)
- [Requesting Features](#requesting-features)
- [Questions or Help](#questions-or-help)

## Code of Conduct

This project adheres to a Code of Conduct that all contributors are expected to follow. Please read [CODE_OF_CONDUCT.md](.github/CODE_OF_CONDUCT.md) before participating.

## Getting Started

### Prerequisites

- Node.js 18.18+ installed
- pnpm package manager installed
- Git installed

### Setting Up Your Development Environment

1. **Fork the repository** on GitHub

2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/magic-resume.git
   cd magic-resume
   ```

3. **Add the upstream repository**:
   ```bash
   git remote add upstream https://github.com/ThanosKa/magic-resume.git
   ```

4. **Install dependencies**:
   ```bash
   pnpm install
   ```

5. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   # Add your OpenRouter API key if you want to test AI polish features
   ```

6. **Start the development server**:
   ```bash
   pnpm dev
   ```

7. **Verify everything works**:
   - Visit `http://localhost:3000` for the landing page
   - Visit `http://localhost:3000/editor` for the editor

## Development Workflow

### Branch Naming

Create a new branch for your changes:

```bash
git checkout -b type/description
```

Branch naming conventions:
- `feature/` - New features (e.g., `feature/add-dark-mode`)
- `fix/` - Bug fixes (e.g., `fix/pdf-export-error`)
- `docs/` - Documentation changes (e.g., `docs/update-readme`)
- `refactor/` - Code refactoring (e.g., `refactor/optimize-store`)
- `chore/` - Maintenance tasks (e.g., `chore/update-dependencies`)

### Making Changes

1. **Create your branch** from `main`:
   ```bash
   git checkout main
   git pull upstream main
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following the [Code Style Guidelines](#code-style-guidelines)

3. **Write tests for your changes**:
   ```bash
   # Run tests in watch mode during development
   pnpm test:watch
   
   # Run all tests
   pnpm test
   
   # Generate coverage report
   pnpm test:coverage
   ```
   
   See the [Testing Guidelines](#testing-guidelines) section for details on writing tests.

4. **Test your changes**:
   ```bash
   pnpm lint      # Check for linting errors
   pnpm build     # Ensure the project builds successfully
   ```

4. **Commit your changes**:
   ```bash
   git add .
   git commit -m "type: descriptive commit message"
   ```

   Commit message format:
   - Use present tense ("Add feature" not "Added feature")
   - Use imperative mood ("Fix bug" not "Fixes bug")
   - Keep the first line under 72 characters
   - Add a blank line between the subject and body if needed

   Examples:
   ```
   feat: add dark mode toggle to editor header
   fix: resolve PDF generation error with special characters
   docs: update contributing guidelines
   ```

5. **Keep your branch up to date**:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

6. **Push your branch**:
   ```bash
   git push origin feature/your-feature-name
   ```

## Pull Request Process

### Before Submitting

- [ ] Code follows the project's style guidelines (see [Code Style Guidelines](#code-style-guidelines))
- [ ] All tests pass (`pnpm test`)
- [ ] Added tests for new functionality
- [ ] Linting passes (`pnpm lint` and `pnpm build`)
- [ ] Self-review your code
- [ ] Comment complex code sections
- [ ] Update documentation if needed
- [ ] Add screenshots/GIFs for UI changes

### Submitting a Pull Request

1. **Create a Pull Request** from your fork to the `main` branch
2. **Fill out the PR template** completely
3. **Link related issues** if applicable
4. **Wait for review** - maintainers will review your PR
5. **Address feedback** - make requested changes and push updates
6. **Celebrate** - once approved and merged! 🎉

### PR Review Criteria

Your PR will be reviewed for:

- **Functionality**: Does it work as intended?
- **Code Quality**: Is it clean, readable, and maintainable?
- **Style**: Does it follow project conventions?
- **Testing**: Have you tested your changes?
- **Documentation**: Is documentation updated if needed?
- **Performance**: Are there any performance concerns?
- **Breaking Changes**: Are any breaking changes documented?

## Code Style Guidelines

This project follows strict code style guidelines. Please review [.cursor/code-style.mdc](.cursor/code-style.mdc) for detailed information.

### Quick Reference

**Formatting:**
- Use Prettier defaults (2-space indent, double quotes, trailing commas, semicolons)
- Run `pnpm lint` before committing
- Keep imports ordered (external → `@/` aliases → relative)

**Naming:**
- Variables/functions: `camelCase`
- Constants: `SCREAMING_SNAKE_CASE`
- Types/interfaces: `PascalCase` with `Props` suffix for component props
- Files: `PascalCase` for components, `kebab-case` for utilities

**TypeScript:**
- Use `import type` for type-only imports
- Avoid `any` - use proper types
- Prefer string literal unions over enums
- Use `as const` for literal inference

**React:**
- Default to server components
- Gate browser-only logic with mounted checks
- Keep components lean and declarative
- Use `cn` utility for conditional classes
- Avoid nested ternaries in JSX

**State Management:**
- Use Zustand for global state
- Lift state to hooks/Zustand selectors
- Favor immutable updates

### Example Component Structure

```tsx
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "primary" | "secondary";
}

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "base-styles",
        variant === "primary" && "primary-styles",
        className
      )}
      {...props}
    />
  );
}
```

## Testing Guidelines

Magic Resume uses **Vitest** for testing with a comprehensive test strategy covering unit tests, integration tests, and API mocking.

### Testing Strategy

- **Unit Tests**: Test pure functions, utilities, Zod schemas, and type helpers
- **Integration Tests**: Test Zustand store state management and persistence
- **Mock Tests**: Test API routes with mocked external dependencies (OpenRouter, Puppeteer)

### Running Tests

```bash
# Run all tests once
pnpm test

# Watch mode for development
pnpm test:watch

# Interactive UI
pnpm test:ui

# Coverage report
pnpm test:coverage
```

### Writing Tests

Tests are co-located with source files using the `.test.ts` or `.test.tsx` extension:

```
lib/
  utils.ts
  utils.test.ts       # Unit tests for utils
store/
  cv-store.ts
  cv-store.test.ts    # Integration tests for store
```

**Example Unit Test:**

```typescript
import { describe, test, expect } from 'vitest';
import { cn } from './utils';

describe('cn utility', () => {
  test('should merge class names', () => {
    const result = cn('base', 'extra');
    expect(result).toBe('base extra');
  });

  test('should handle conditionals', () => {
    const result = cn('base', true && 'active', false && 'inactive');
    expect(result).toBe('base active');
  });
});
```

**Example Integration Test (Store):**

```typescript
import { describe, test, expect, beforeEach } from 'vitest';
import { useCVStore } from './cv-store';

describe('CV Store', () => {
  beforeEach(() => {
    useCVStore.setState(useCVStore.getState().reset(), true);
  });

  test('should update personal info', () => {
    useCVStore.getState().updatePersonalInfo({ name: 'Test User' });
    
    const state = useCVStore.getState();
    expect(state.cv.personalInfo.name).toBe('Test User');
  });

  test('should persist to localStorage', () => {
    useCVStore.getState().updatePersonalInfo({ name: 'Test' });
    
    const stored = localStorage.getItem('cv-builder-data');
    expect(stored).toContain('Test');
  });
});
```

**Example API Mock Test:**

```typescript
import { describe, test, expect, vi } from 'vitest';
import { POST } from './route';

const mockFetch = vi.fn();
global.fetch = mockFetch;

describe('Polish API', () => {
  test('should polish content successfully', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ choices: [{ message: { content: 'Polished!' } }] }),
    });

    const request = new Request('http://localhost/api/polish', {
      method: 'POST',
      body: JSON.stringify({ content: 'Raw text' }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(data.polished).toBe('Polished!');
  });
});
```

### Best Practices

**DO:**
- ✅ Test behavior, not implementation details
- ✅ Mock external dependencies (APIs, file system)
- ✅ Use descriptive test names that explain what's being tested
- ✅ Keep tests focused and atomic (one assertion per test when possible)
- ✅ Clean up state in `beforeEach` hooks
- ✅ Aim for meaningful coverage (70%+ for core logic)

**DON'T:**
- ❌ Test library code (React, Zustand internals)
- ❌ Make real network requests in tests
- ❌ Test private implementation details
- ❌ Write brittle tests that break on refactoring
- ❌ Ignore test failures

### Coverage Requirements

- **Utilities/Helpers**: 80%+ coverage
- **Store Logic**: 70%+ coverage
- **API Routes**: 60%+ coverage (due to external dependencies)

Run `pnpm test:coverage` to see coverage reports.

## Reporting Bugs

Found a bug? Please help us fix it!

1. **Check existing issues** - Make sure the bug hasn't already been reported
2. **Use the bug report template** - Go to Issues → New Issue → Bug Report
3. **Provide details**:
   - Clear description of the bug
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment (OS, browser, Node version)
   - Screenshots if applicable
   - Error messages or logs

## Requesting Features

Have an idea for a new feature? We'd love to hear it!

1. **Check existing issues** - See if the feature has been requested
2. **Use the feature request template** - Go to Issues → New Issue → Feature Request
3. **Provide details**:
   - Clear description of the feature
   - Use case and motivation
   - Proposed solution
   - Alternatives considered

## Questions or Help

- **GitHub Discussions**: For questions, ideas, or general discussion
- **GitHub Issues**: For bugs and feature requests

## Project Structure

Understanding the project structure will help you contribute:

```
magic-resume/
├── app/                    # Next.js App Router pages and API routes
│   ├── api/               # API endpoints
│   ├── editor/            # Editor page
│   └── page.tsx           # Landing page
├── components/
│   ├── editor/            # Editor-specific components
│   ├── landing/           # Landing page components
│   └── ui/                # Shared UI primitives (Radix + Tailwind)
├── lib/                   # Utility functions and helpers
├── store/                 # Zustand store for CV state
├── types/                 # TypeScript type definitions
└── styles/                # Global styles
```

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com)

## Recognition

Contributors will be recognized in:
- GitHub Contributors page
- Release notes (for significant contributions)
- Project documentation

Thank you for contributing to Magic Resume! 🎉
