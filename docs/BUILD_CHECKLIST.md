# Build Checklist

Status key: **Done** = verified or documented; **In review** = awaiting owner decision; **Pending** = not started; **Blocked** = cannot proceed without an external decision or prerequisite.

## Phase 0 — Investigation and architecture

- [x] Verify the canonical local checkout, working-tree status, Git remote, local/remote commit relationship, local Git authentication, and no-write push capability.
- [x] Read the full project plan and inspect the existing repository and local development tools.
- [x] Research official playback APIs, SDKs, current provider terms, controls, account requirements, market restrictions, quotas, and costs.
- [x] Document the system architecture and initial database/authorization design.
- [x] Document proposed first-release scope and acceptance criteria.
- [x] Document security and privacy boundaries.
- [x] Document the repository foundation plan.
- [ ] Owner review of the provider comparison and approval of a provider choice. **No provider is selected.**
- [ ] Owner approval of the architecture decisions, MVP scope, privacy defaults, and acceptance targets.
- [ ] After approval, update the ADRs/checklist with the final decisions.

## Phase 0 exit gate

- [ ] Provider choice is supported by current terms, technical controls, account/market requirements, and written clarification where needed.
- [ ] Architecture, database/access model, first-release scope, and security boundaries are approved.
- [ ] Repository setup tasks are approved for implementation.

Until these items are approved, do not install dependencies, scaffold the application, create application code, or begin Phase 1.

## Phase 1 — UI Foundation

- [ ] Pending Phase 0 approval.
- [ ] Project setup, theme, sidebar, dashboard, responsive layout, player interface, and landing page.
- [ ] Any sample data is visibly identified as sample data; unavailable playback actions are disabled or clearly unavailable.

## Phases 2–8 — Planned roadmap

- [ ] Phase 2: Authentication.
- [ ] Phase 3: Music Integration.
- [ ] Phase 4: Listening Rooms.
- [ ] Phase 5: Collaborative Controls.
- [ ] Phase 6: Social Features.
- [ ] Phase 7: Polish.
- [ ] Phase 8: Open Source Release.

## Manual tasks for the owner

- [ ] Review the provider feasibility report and choose whether to pursue a candidate, request provider clarification, or continue research.
- [ ] Provide or create Last.fm, Supabase, and approved playback-provider developer accounts/credentials when the corresponding integration work is approved. Do not commit credentials.
- [ ] Approve privacy defaults, initial room limits, and the measurable synchronization targets before schema and room implementation.

## Verification record

- Initial audit: temporary workspace write/read/delete check passed; final working tree was clean.
- Initial Git check: origin/main matched local HEAD; local Git push dry-run reported up to date.
- No application tests or build were run because no application or test configuration exists.
- `git diff --cached --check` passed before commit. Documentation-only commit `9723f86` was pushed to `origin/codex/phase-0-investigation`; local and remote branch heads match.
- Draft pull request [#1](https://github.com/vansh-kumar-007/loki-music/pull/1) is open against `main` for owner review; it has not been merged.
