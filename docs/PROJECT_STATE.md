# Project State

**Last updated:** 2026-11-01

**Status:** Phase 0 is finalized. Phase 1 UI foundation is implemented and verified; account, playback, Last.fm, room, and backend services are not connected. Phase 2 has not started.

## Repository and environment

- Canonical checkout: `D:\Projects\LOKI\loki-music`.
- Repository: `https://github.com/vansh-kumar-007/loki-music`; the Phase 0 documentation is tracked through [PR #1](https://github.com/vansh-kumar-007/loki-music/pull/1).
- The initial repository baseline was one MIT `LICENSE` file and one commit. It had no application, package manifest, tests, migrations, CI, or setup documentation.
- Available tools at audit time: Node.js 24.16.0, npm 11.13.0, pnpm 11.17.0, Corepack 0.35.0, Git 2.54.0, Python 3.14.5. Global TypeScript, Yarn, Bun, Deno, and GitHub CLI were not found.
- Read/write, command execution, temporary test-file create/read/delete, and Git operations were verified in the canonical directory. Local GitHub remote access and a no-write push dry run passed during the audit; Phase 0 work was pushed only to its feature branch.

## Product status

- The repository now contains a runnable Next.js App Router application with TypeScript, Tailwind CSS, Motion for React, Lucide, Zustand, and Playwright browser checks.
- The Phase 1 UI includes the landing page, responsive application shell/navigation, dashboard and player/queue preview, discovery and local sample search, library/history, room/account/profile, friend/activity, and settings/integration screens.
- All catalog content is fictional sample data. Authentication, playback, Last.fm, synchronized rooms, backend persistence, and provider integration are not implemented and are not represented as working.
- The original product requirements and eight-phase roadmap are inventoried in [Product requirements](PRODUCT_REQUIREMENTS.md). Proposed first-release scope and provisional defaults are in [Product scope](PRODUCT_SCOPE.md).
- The approved direction is Next.js App Router/TypeScript, the planned frontend libraries, Supabase Auth/PostgreSQL, server-authoritative room commands, authorized Supabase Realtime, Last.fm separate from playback, and a modular playback-provider boundary.

## Phase 0 decisions and gates

- **Playback provider:** unresolved. Jamendo is only the lead candidate for further diligence, not an approved provider. Its published API terms page states a 2013 modification date and does not expressly settle LOKI's synchronized-room model. Obtain current written clarification and owner approval before integration. See [Provider feasibility](PROVIDER_FEASIBILITY.md).
- **Architecture:** the proposed system/data/security design is documented in [Architecture](ARCHITECTURE.md), with decisions recorded in [ADRs](DECISIONS.md).
- **Product defaults:** private rooms/profiles, opt-in activity, authenticated members, guest access off, 10-person initial room cap, and related provisional defaults are documented with reasoning in [Product scope](PRODUCT_SCOPE.md). They are recommendations, not implemented behavior.
- **Synchronization targets:** provisional and unverified until a provider-approved technical spike.
- **Next step:** await owner authorization before Phase 2 authentication work. Phase 1 implementation and verification are complete.

## Known limitations and manual prerequisites

- Provider terms, market availability, API limits, and access conditions can change. Recheck before any provider implementation or release.
- Jamendo's written confirmation is required before relying on its API/Creative Commons catalog for shared rooms, including any hosted or commercial use.
- A provider decision and successful playback spike are prerequisites for Phase 3 playback integration and real room-synchronization acceptance. They are not being treated as resolved by this documentation work.
- Supabase project, Last.fm developer account, and any approved provider credentials are not configured. Create these only when the corresponding phase is authorized; never commit credentials.
- The provider comparison is an engineering/product assessment, not a legal opinion.

## Phase 1 verification

- `npm run lint`: passed.
- `npm run typecheck`: passed.
- `npm run test:e2e`: 11 passed, one desktop-only skip across desktop and mobile Chromium projects; responsive viewport checks covered 1440px, 820px, and 390px.
- `npm run build`: passed; all 17 application routes were generated or server-rendered successfully.
- Production smoke test: all 16 product routes returned HTTP 200; the production dashboard at 390px had no horizontal overflow.
- The landing page and dashboard were visually inspected at desktop, tablet, and mobile sizes with no horizontal overflow.
