# Build Checklist

Status key: **Done** = completed and verified/documented; **Pending** = not started; **Blocked** = requires a material external decision or prerequisite. Planned features remain listed in [Product requirements](PRODUCT_REQUIREMENTS.md); first-release staging is in [Product scope](PRODUCT_SCOPE.md).

## Phase 0 — Audit, feasibility, and architecture

- [x] Verify canonical checkout, read/write/command access, temporary file create/read/delete, Git root/remotes/branch/status/history, local GitHub auth, and no-write push capability.
- [x] Read the full owner-provided plan and audit the repository and available development tools.
- [x] Compare official playback APIs/SDKs, terms, licensing, controls/state/seek, authentication/subscription, geography, cost, quotas, and synchronization fit.
- [x] Recheck Jamendo's official API terms, track/file methods, and current published non-commercial API plan. Mark shared-room and commercial-use questions unresolved; no provider selected.
- [x] Inventory the full plan's routes, interface, integrations, room/social/queue features, quality requirements, open-source requirements, and eight-phase roadmap.
- [x] Document the proposed system architecture, initial data model/authorization, security/privacy boundaries, and repository foundation.
- [x] Recommend provisional MVP, room, profile, presence, invitation, and retention defaults with reasoning.
- [x] Review document consistency, internal links, external references, Markdown, secret scan, and the final docs-only diff; run `git diff --check`.
- [x] No application code or dependencies added; no application build or tests were available to run.

## Phase 0 status

- Phase 0 documentation and investigation are complete. The provider decision remains **unresolved by design**; Jamendo is a due-diligence candidate only.
- Written provider clarification and owner approval are required before playback integration or real synchronized-room acceptance. This does not silently select a provider.
- [ ] Owner review of the Phase 0 finalization report before any next phase.

## Phase 1 — UI Foundation (not started)

- [ ] Project setup and theme.
- [ ] Sidebar, dashboard, responsive layout, player interface, and landing page.
- [ ] Use only clearly labeled sample data during this initial UI phase; do not imply that sample playback or synchronization is real.

## Phase 2 — Authentication (not started)

- [ ] Supabase authentication, user profiles, Last.fm account linking, and settings.

## Phase 3 — Music Integration (provider-gated; not started)

- [ ] Last.fm metadata, approved provider abstraction and playback, scrobbling, search, and discovery.
- [ ] Owner-selected provider has written terms fit for intended use and passes official SDK/stream and access checks.

## Phase 4 — Listening Rooms (not started)

- [ ] Room creation/invitations, real-time participants, authoritative shared state, provider-permitted synchronization, reconnect/late-join recovery.

## Phase 5 — Collaborative Controls (not started)

- [ ] Roles, DJ permissions, control requests/approval/rejection, ownership/controller transfer, shared queue, and authorized commands.

## Phase 6 — Social Features (not started)

- [ ] Chat, friends, notifications, user activity, blocking, and reporting.

## Phase 7 — Polish (not started)

- [ ] Animation, legally/technically supported visualizer, responsive optimization, security audit, error handling, and performance improvements.

## Phase 8 — Open-Source Release (not started)

- [ ] Documentation, environment setup, database migrations, GitHub preparation, contribution/security materials, and deployment/self-host guide.

## Manual owner actions

- Review the Phase 0 finalization report before the next phase.
- Before playback integration, choose a provider only after reviewing current terms and obtaining any needed written clarification. For Jamendo, the open questions are listed in [Provider feasibility](PROVIDER_FEASIBILITY.md); no message has been sent on the owner's behalf.
- Provide/create Last.fm, Supabase, and approved-provider accounts when corresponding integration work is authorized. Keep credentials outside Git.
- Revisit provisional room capacity, sync targets, privacy defaults, and retention after provider and multi-session evidence; the documented defaults are the starting recommendation.

## Verification record

- Initial repository audit found only `LICENSE` and one initial commit; the canonical workspace access and temporary write/read/delete check passed.
- Local GitHub remote access and a no-write push dry run passed in the initial audit. Phase 0 changes were pushed through a feature branch, not directly to `main`.
- Documentation whitespace checks passed. Application tests/builds were not run because the repository has no application or test configuration.
- Final closeout checks and merge state are reported in the Phase 0 finalization report and the Git history; this checklist tracks phase work and gates, not a transient local branch name.
