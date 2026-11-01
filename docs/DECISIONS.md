# Architecture Decisions

These records capture the owner's approved architectural direction, Phase 0 recommendations, and unresolved provider gate. They do not authorize Phase 1 implementation; the owner asked to review the Phase 0 finalization report before the next phase begins. Playback-provider selection is expressly unresolved.

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

**Status:** Unresolved; Jamendo is only the lead candidate for further diligence.
**Decision:** Select and integrate no provider until its current terms, supported playback model, account/market requirements, and synchronization rights are confirmed and the owner approves the provider. Keep the adapter capability-aware.
**Reasoning:** Providers differ in player SDKs, subscriptions, geography, quotas, and legal restrictions. The current comparison is in `PROVIDER_FEASIBILITY.md`. Jamendo's API terms allow non-commercial API use and expose track-level Creative Commons metadata, but its published terms page says it was last modified in 2013 and does not expressly resolve LOKI's simultaneous room use. Written confirmation is required. Spotify, SoundCloud, and TIDAL have direct published conflicts; Apple MusicKit needs terms clarification; YouTube requires a visible embedded player.

## ADR-006 — Phase 0 finalization must precede Phase 1

**Status:** Approved.
**Decision:** Phase 0 consists of the audit, provider comparison, complete requirements inventory, architecture/security decisions, provisional product defaults, and documentation cleanup. Do not install dependencies, scaffold the app, create application code, or begin Phase 1 until the owner reviews the Phase 0 finalization report.
**Reasoning:** This is the owner's explicit boundary. Phase 0 may document an unresolved provider; that unresolved legal gate blocks playback integration and real room-sync acceptance, not completion of the documentation review itself.

## ADR-007 — Use privacy-conscious defaults for initial rooms and profiles

**Status:** Recommended and provisional; not implemented.
**Decision:** Start rooms private, require authentication, disable guests by default, cap initial rooms at 10 participants, require owner approval for control requests, limit request frequency, and allow public profile/friend activity only by explicit opt-in. Presence is visible only to authorized room members. See `PRODUCT_SCOPE.md` for proposed invitation, queue, and data-retention defaults.
**Reasoning:** These defaults reduce accidental exposure and keep initial abuse and Realtime behavior bounded. Revisit capacity and controls after real provider and multi-session tests. No default overrides provider rules or user consent.

## Open decisions and prerequisites

- **Provider and legal feasibility:** unresolved. Obtain Jamendo's written response to the questions in `PROVIDER_FEASIBILITY.md` or continue evaluating alternatives; do not select/integrate it by default.
- **Room/profile defaults:** recommendations are in `PRODUCT_SCOPE.md`; treat them as provisional product defaults unless review identifies a material concern.
- **Synchronization acceptance:** 95% start within 2 seconds and drift below 1.5 seconds within 10 seconds are provisional measurement targets, subject to a real provider spike and browser/network evidence.
- **Provider-specific identity/scrobble mapping:** decide once a provider is approved; keep source IDs and `chosenByUser` attribution distinct.
