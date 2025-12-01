# Create PR

## Overview

Create a pull request following Magic Resume's contribution guidelines.

## Pre-Flight Checks

1. Run quality checks:
   ```bash
   pnpm lint
   pnpm build
   pnpm test
   Ensure all changes are committed and pushed
   Verify branch follows naming convention (feature/, fix/, docs/, refactor/, chore/)
   Create Pull Request
   Use GitHub CLI to create PR with proper template:
   ```

gh pr create --title "<type>: <brief description>" \
 --body "## Description
Brief summary of changes.

## Type of Change

- [ ] 🐛 Bug fix (non-breaking change fixing an issue)
- [ ] ✨ New feature (non-breaking change adding functionality)
- [ ] 💥 Breaking change (fix or feature causing existing functionality to change)
- [ ] 📝 Documentation update
- [ ] 🎨 Style update (formatting, renaming)
- [ ] ♻️ Code refactoring (no functional changes)
- [ ] ⚡ Performance improvement
- [ ] ✅ Test update
- [ ] 🔧 Build configuration change
- [ ] 🔨 Chore (dependency updates, etc.)

## Related Issues

Closes #<issue-number>

## Changes Made

-
-

## Testing

- [x] Tested locally with \`pnpm dev\`
- [x] All tests pass with \`pnpm test\`
- [x] Build succeeds with \`pnpm build\`
- [x] Linting passes with \`pnpm lint\`

### Browser Testing

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

## Screenshots/GIFs

<!-- If UI changes, add before/after screenshots -->

## Checklist

- [x] Code follows project style guidelines
- [x] Self-reviewed code
- [x] Commented complex code sections
- [x] Updated documentation
- [x] Added tests for new functionality
- [x] All tests pass locally
- [x] Branch is up to date with main" \
       --base main
      Post-Creation
      Verify CI/CD checks pass
      Add reviewers if needed
      Monitor for feedback
      Title Format Examples
      feat: add dark mode toggle
      fix: resolve PDF export error
      docs: update API documentation
      refactor: optimize state management
      chore: update dependencies
