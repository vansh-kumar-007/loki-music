# Architecture Decisions

These records capture the owner's approved architectural direction and the remaining Phase 0 decisions. They do not authorize application implementation. Playback-provider selection is expressly pending.

## ADR-001 — Use the Next.js App Router as the web application boundary

**Status:** Approved direction; detailed setup follows Phase 0 sign-off.
**Decision:** Use Next.js App Router with TypeScript. Use Route Handlers for server-side callbacks, validated commands, and provider calls where needed.
**Reasoning:** This follows the project plan and keeps browser UI, server-side credential handling, and request validation in one initial deployment unit. Next.js documents Route Handlers as request handlers in the App Router: <https://nextjs.org/docs/app/getting-started/route-handlers>.
**Trade-off:** A single app is simpler to deploy and operate initially, but domain modules must remain separated so a dedicated backend can be introduced if scale or provider requirements justify it.

## ADR-002 — Use Supabase for authentication, PostgreSQL, and Realtime

**Status:** Approved direction; implementation follows Phase 0 sign-off.
**Decision:** Use Supabase Auth and PostgreSQL. Use Supabase Realtime for authorized event delivery and presence, with private channels and explicit authorization policies.
**Reasoning:** This is the planned stack and provides identity, relational persistence, database policies, and realtime delivery in one integrated backend.
**Trade-off:** Supabase-specific database and realtime features reduce immediate portability. Keep domain rules and provider integrations behind clear interfaces; do not build a second abstraction layer solely for hypothetical portability.

## ADR-003 — Persist room state server-side; use Realtime to distribute changes

**Status:** Approved direction.
**Decision:** PostgreSQL stores authoritative room playback state, queue, membership, roles, and requests. Authorized server-side commands validate the caller and commit changes transactionally. Realtime sends resulting events to room participants.
**Reasoning:** Browser role checks alone cannot secure control commands, while persisted state provides recovery after reconnects. Supabase recommends Broadcast over Postgres Changes for scalable, secure subscriptions and documents RLS authorization for private Realtime channels: <https://supabase.com/docs/guides/realtime/subscribing-to-database-changes> and <https://supabase.com/docs/guides/realtime/authorization>.

## ADR-004 — Keep Last.fm separate from playback

**Status:** Approved direction.
**Decision:** Use Last.fm for metadata, discovery, account-linked listening data, now-playing updates, and scrobbling. It is not the audio playback provider.
**Reasoning:** The product plan explicitly distinguishes metadata from legal playback. Last.fm requires a server-side API key/secret and authenticated session key for write methods; its web authentication flow has its own callback and session exchange: <https://www.last.fm/api/authentication> and <https://www.last.fm/api/authspec>.

## ADR-005 — Keep a modular playback-provider boundary; provider choice is pending

**Status:** Open; owner approval required.
**Decision:** Do not select or integrate a provider until the owner reviews `PROVIDER_FEASIBILITY.md`. The adapter must report supported capabilities and access requirements so the product only enables permitted controls.
**Reasoning:** Providers differ in player SDKs, subscription gates, geography, legal restrictions, and room-synchronization feasibility. Spotify, SoundCloud, and TIDAL have published restrictions that conflict with or create substantial uncertainty for the LOKI room model. Apple MusicKit needs written clarification; YouTube requires a visible, unmodified player; Jamendo has a smaller catalog and track-specific Creative Commons terms.

## ADR-006 — Phase 0 is documentation and investigation only

**Status:** Approved.
**Decision:** Do not install dependencies, scaffold the app, create application code, or begin Phase 1 until the Phase 0 findings and architecture decisions have been presented and approved.
**Reasoning:** This is the owner's explicit development boundary. Planning documents may be reviewed as Phase 0 deliverables; code follows only after the exit gate.

## Open decisions

- Playback provider and the written permissions/clarifications needed for shared listening.
- MVP privacy defaults and room/participant limits.
- Acceptance targets for command latency, initial playback skew, and steady-state drift after the provider spike.
- How provider-specific track identity and scrobble attribution are represented across the supported sources.
