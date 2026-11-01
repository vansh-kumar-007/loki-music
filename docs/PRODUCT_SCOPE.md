# First-Release Scope and Acceptance Criteria

**Status:** Proposed scope for owner approval. This stages the plan's requirements; deferred items are not removed from the product roadmap.

## First-release goal

Deliver one real, self-hostable collaborative listening path: authenticated users can connect Last.fm for metadata/scrobbling, discover playable items from one approved provider, create/join rooms, and use authorized roles to control a shared queue and session. A participant without rights or access to a track gets a clear error and is never represented as listening in sync.

The playback-provider approval gate is a prerequisite. If the selected provider does not permit shared-room control, revise the product scope with the owner rather than faking playback.

## Proposed in-scope capabilities

1. **Accounts and profiles:** register, sign in/out, recover access, manage a basic profile, and set profile visibility.
2. **Last.fm:** connect/disconnect an account; view linked identity, profile and supported metadata/history; send now-playing and scrobble events only when official criteria are met.
3. **One approved playback provider:** provider search/details, supported play/pause/seek/state, account/access checks, useful unavailable/error states, and required attribution. No provider is currently selected.
4. **Rooms:** create public/private rooms, configure initial room limits, join/leave, share revocable invitation links, and show authorized participants/presence.
5. **Synchronized session:** room state is persisted on the server; new and reconnecting participants can recover it; playback timing and drift correction work for the selected provider and permitted use.
6. **DJ controls:** owner/listener/controller roles; request, approve/reject, transfer/revoke control; server-side validation of every command.
7. **Shared queue:** add, remove, reorder, show who added an item, and prevent unauthorized writes.
8. **Room communication and safety:** real-time text chat, join/leave and track/controller events, basic block/report, and abuse/rate controls.
9. **Open-source operation:** reproducible setup, environment-variable documentation, migrations, RLS tests, contribution/security guidance, and deployment/self-host instructions.

## Proposed later increments (deferred, not removed)

Full friend-request/activity network, extensive profile statistics, advanced recommendations and genre sections, dynamic artwork-derived ambience, waveform/audio visualizer, lyrics provider, output-device selection, advanced notifications, and additional playback providers. The roadmap's eight phases remain intact.

## Acceptance criteria

- Provider terms and required approvals are recorded; each listener's authentication, subscription, region, and track access are checked or reported by the provider as appropriate.
- Two or more independent browser sessions can join a room and receive the same persisted state after initial join and reconnect.
- **Provisional synchronization target:** for a provider that permits seek/playback-state control, 95% of participants begin within 2 seconds of the scheduled start and steady-state drift is corrected to under 1.5 seconds within 10 seconds. Measure across realistic network/browser conditions. Revisit these thresholds if the approved provider's official controls cannot meet them.
- A local play/pause/seek/skip event is persisted with a new revision and delivered to authorized members. Duplicate or stale commands do not produce conflicting state.
- Unauthorized users cannot read private room data, join beyond capacity, alter queue/roles, or issue playback commands through direct API/database requests. Tests cover denied as well as allowed paths.
- Owner/DJ control requests have a visible requester, decision, notification to both parties, and server-enforced permission transition.
- Queue updates are ordered and attributable, including when two members act close together.
- If one listener lacks provider access, playback failure is visible to them and room state does not falsely claim they are synchronized.
- Last.fm scrobbling occurs only after a track longer than 30 seconds has been played for at least half its duration or four minutes, whichever is earlier; for music selected by another person such as a room DJ, set `chosenByUser` appropriately. Source: [Last.fm Scrobbling 2.0](https://www.last.fm/api/scrobbling).
- Credentials never appear in browser bundles, logs, docs, screenshots, or Git history. Disconnect/delete paths remove or revoke stored provider data according to the documented retention policy.
- Keyboard, screen-reader, reduced-motion, mobile, loading, empty, and error states meet documented accessibility and UX checks.
- Documentation lets a new developer run the application without committing secrets; the build, type checks, automated tests, migration checks, and browser flows pass before release.

## Release gates

1. Provider feasibility and legal/terms gate approved.
2. Architecture, scope, privacy defaults, and sync targets approved.
3. Authentication, data migrations, and access policies pass allow/deny tests.
4. Core room flows pass multi-session tests with real provider playback.
5. Security, accessibility, self-host, and release documentation reviewed.
