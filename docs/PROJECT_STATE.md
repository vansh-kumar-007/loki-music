# Project State

**Last updated:** 2026-11-01
**Status:** Phase 0 investigation documented; awaiting owner review and approval before implementation.

## Current state

- Canonical checkout: `D:\Projects\LOKI\loki-music`
- Working branch: `codex/phase-0-investigation`
- Phase 0 documentation commit: `9723f86` (`docs: document Phase 0 architecture and provider research`), pushed to the matching origin branch; draft [PR #1](https://github.com/vansh-kumar-007/loki-music/pull/1) is open for review.
- Starting point: `96763b4416d06cb6aaad10caa3af6ac3fe9c3696` (`Initial commit`)
- Repository baseline: one tracked MIT license; no app, package manifest, tests, migrations, CI, or setup docs existed at audit time.
- Local environment audit: Node.js 24.16.0, npm 11.13.0, pnpm 11.17.0, Corepack 0.35.0, Git 2.54.0, Python 3.14.5. Global TypeScript, Yarn, Bun, Deno, and GitHub CLI were not found.
- GitHub access: local Git remote access and a no-write push dry-run succeeded during the initial audit. No push to `main` was made.

## Approved direction

The owner generally approved Next.js App Router with TypeScript, the planned frontend libraries, Supabase Auth and PostgreSQL, server-authoritative room state, authorized Supabase Realtime, Last.fm as a metadata/scrobbling integration, and a modular playback-provider boundary.

The owner authorized Phase 0 planning and investigation. Phase 1, UI work, dependency installation, app scaffolding, and application code are not authorized until the Phase 0 report and architecture decisions have been reviewed and approved.

## Decisions still needed

1. Select a playback provider only after reviewing the feasibility findings. Spotify, SoundCloud, and TIDAL appear incompatible with the shared-room product under their published rules; Apple MusicKit needs written clarification; YouTube has significant embedded-player constraints; Jamendo is a narrower, track-license-dependent candidate.
2. Approve the proposed first-release scope and provisional synchronization targets.
3. Confirm privacy defaults and initial room limits before the first schema migration.

No provider has been selected or integrated.

## Current limitations

- The repository is documentation-only and is not runnable.
- No Supabase project, Last.fm developer app, or playback-provider account is configured.
- Provider terms and availability can change; recheck them before integration and release.
- The feasibility report is a product and engineering assessment, not a legal opinion. Provider-specific written clarification may be required before implementation.
