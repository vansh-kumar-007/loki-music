# Repository Foundation Plan

**Status:** Plan only. No dependencies installed, no application scaffold or code created. Execute after the Phase 0 exit gate is approved.

## Baseline found

The canonical repository contains one MIT `LICENSE` file and a single initial commit. It has no README, application manifest, source tree, `.gitignore`, environment example, tests, CI, migrations, or setup guide. The local Node/npm/pnpm/Corepack/Git environment is available; global TypeScript is not.

## Proposed setup work after approval

1. Create the smallest Next.js App Router + TypeScript scaffold that fits the approved UI and server boundaries.
2. Pin a supported Node version and package manager using the current Next.js support matrix at implementation time. Prefer the installed Node 24 runtime if it remains a supported LTS line then.
3. Add only approved dependencies: Tailwind, Framer Motion, Lucide, Zustand, TanStack Query, Supabase client/server packages, and provider SDKs only after provider approval.
4. Add strict TypeScript, lint/format scripts, build scripts, unit/integration/e2e test structure, and CI checks. Do not install provider SDKs before approval.
5. Add `.gitignore`, `.env.example` containing names but no values, safe secret-loading documentation, and no committed local environment files.
6. Add `supabase/` migrations and RLS tests with least-privilege grants. Keep seeds clearly marked as development-only and free of real user data.
7. Add GitHub Actions for formatting, lint, typecheck, unit tests, migration/RLS tests, and build; add dependency/security update configuration after maintenance policy is chosen.
8. Keep all work on `codex/` feature branches, review the diff, run requested/relevant checks, commit coherently, push the feature branch when authorized, and open a PR for review. Never push directly to `main` or merge without approval.

## Files planned for the foundation task

Likely files include `package.json`, lockfile, `tsconfig.json`, Next/Tailwind config, `src/app/`, typed configuration helpers, test configuration, `.gitignore`, `.env.example`, `supabase/config.toml`, initial migrations/tests, CI workflow, and updated setup documentation. Exact paths depend on the final scaffold and should be reviewed before implementation.

## Checks before any scaffold

- Provider decision and official SDK/license constraints recorded.
- Supabase project/local workflow and environment variable names agreed.
- First-release routes and states approved.
- Database authorization and secret boundaries reviewed.
- Git working tree clean and feature branch confirmed.
