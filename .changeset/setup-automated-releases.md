---
"@s2mangas/core": patch
"@s2mangas/react": patch
"@s2mangas/native": patch
---

Setup automated releases with GitHub Actions and Changesets

This changeset sets up the automated release system that will:
- Create release PRs automatically when changesets are merged
- Publish packages to NPM automatically
- Generate changelogs
- Handle version bumping across the monorepo