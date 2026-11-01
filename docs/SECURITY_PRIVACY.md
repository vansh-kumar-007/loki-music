# Security and Privacy Boundaries

**Status:** Proposed Phase 0 design; detailed policies and migration tests are required before implementation.

## Assets and threats

LOKI will hold identity, linked-account tokens, private room invitations, social relationships, chat, room roles, playback history, and reports. Main risks include account takeover, room enumeration, leaked provider credentials, forged roles/commands, Realtime topic abuse, invitation guessing, queue races, chat spam/XSS, and unintended exposure of listening activity.

## Identity and sessions

- Verify Supabase Auth sessions server-side on every private operation.
- Use secure, HTTP-only session cookies where the chosen flow supports them; protect callbacks with state/nonce and exact redirect URI validation.
- Apply least privilege and session expiry/revocation behavior. Disconnecting an integration removes its tokens and stops future provider calls.
- Do not store provider access tokens, refresh tokens, session keys, or API secrets in profiles or client-readable tables.

## Provider credentials

- Keep provider API secrets and signing keys in server-only managed secrets.
- Encrypt user-specific provider credentials at rest; separate them from public profile data and deny direct browser access.
- Redact authorization headers, callback codes, session keys, and invite tokens from logs and error reports.
- Rotate/refresh tokens according to provider rules. Support revoke/disconnect and account deletion.

## Room access and controls

- Default private room reads to deny; distinguish public browse fields from private room state.
- Generate high-entropy invitation tokens, store only a hash, support expiration/revocation, and rate-limit failed joins.
- Hash optional room passwords with a modern password hash (Argon2id preferred where supported); never store or log a plaintext room password.
- Make membership/role changes and control commands transactional. Recheck the active membership and role in the server/database at mutation time; do not trust frontend state.
- Keep queue and playback mutations behind validated server operations. Apply idempotency/revision checks to prevent retries or stale state from winning.
- Use private Realtime topics with membership-based authorization; revoke access when a user leaves, is removed, blocked, or loses a role.

## Database and RLS

- Enable RLS on every exposed table. Align table grants with per-operation policies; policies alone do not remove grants.
- Write policy tests for signed-out users, ordinary members, owners/controllers, blocked users, and unrelated users.
- Keep provider tokens outside exposed schemas or in a server-only table with no client grants. Never put a Supabase secret/service-role key in browser code.
- For security-definer database functions, pin `search_path`, schema-qualify object names, grant execute narrowly, validate caller/room-role, and test unauthorized calls.
- Index columns used by RLS and common membership lookups.

## User-generated content and abuse controls

- Render chat text as text, not trusted HTML; validate size and supported Unicode, rate-limit, and support report/block workflows.
- Validate image upload type, size, and ownership; use private storage and signed access where covers are not public.
- Rate-limit login callbacks, room creation/join, chat, control requests, and playback commands. Use cooldowns and audit records for high-impact owner/DJ changes.
- Provide a retention policy for messages, listening history, reports, and provider tokens. Document account deletion behavior and any narrowly retained moderation records.

## Privacy

- Make listening history, presence, friend activity, and profile visibility explicit settings.
- Only expose room presence to users allowed to see that room. Do not infer or publish a user's listening history from room state without consent.
- Keep public profile projection separate from private account and integration data.
- Respect blocking in invitations, profile views, chat, presence, and friend suggestions.
- Document what is sent to Last.fm and the selected playback provider; provide disconnect controls and data deletion/export guidance as scope requires.

## Rights and media

- Store provider identifiers and license/attribution metadata, not audio files or extracted streams, unless an approved license specifically permits LOKI to host them.
- Do not bypass access controls, provider SDK/player restrictions, ads, geographic limits, subscriptions, or browser autoplay controls.
- Show provider attribution and rights-specific attribution where required. Keep the playback UI honest about local access and synchronization state.

## Verification required before release

- Supabase RLS test suite, API permission tests, room join/invite tests, and two-user realtime tests.
- Secret scanning and production environment review.
- Threat review for room invitation flows, token storage, public profile surfaces, and user deletion.
- Provider terms recheck and written permissions/clarifications recorded where needed.
