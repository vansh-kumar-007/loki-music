# Product Requirements and Roadmap Traceability

**Source:** Owner-provided `Plan.txt`, reviewed in full on 2026-11-01.
**Status:** Product requirements inventory; planned features are not implementation claims. Proposed release staging is in [Product scope](PRODUCT_SCOPE.md).

This document keeps the plan's functional and non-functional requirements discoverable inside the repository. The proposed first release may stage features, but staging does not remove them from the product roadmap.

## Product identity and visual direction

- Open-source, self-hostable collaborative music-listening web application named LOKI; tagline: **“Music is better when shared.”**
- Provide a premium, immersive, personal listening experience with a dark emerald/forest-green atmosphere. Suggested palette: `#050B08` main background, `#091810` secondary, `#102B1B` surfaces, `#00C875` accent, `#39FF88` subtle glow, `#B7FFD1` highlight, `#E8F5EC` main text, and `#82988A` secondary text. Keep neon restrained.
- Use music-app usability, immersive album layouts, community-room interaction, and glass-panel design as inspiration without copying any product interface.
- Original brand assets only. Use artwork only where the source terms permit it; do not use Marvel/Loki character art, Spotify/Apple/Discord logos, or copied layouts without permission.
- Responsive desktop-first experience with complete tablet and mobile support.

## Application shell, pages, and player

- Sidebar navigation: Home, Discover, Search, My Library, Listening Rooms, Friends, Activity, Recently Played, Settings; include profile, username, Last.fm connection state, and a settings shortcut. Support collapse/expand.
- Dashboard: welcome, current track, recent tracks, recommendations, trending music, active rooms, friends listening, and personalized Last.fm statistics.
- Persistent player: artwork, title, artist, play/pause, previous/next, shuffle/repeat, progress, volume, queue, legitimate lyrics link only when a licensed lyrics provider exists, and output selection only when supported. Show room-sync status only when actual provider state supports that claim.
- Planned motion includes smooth page/artwork transitions, subtle emerald ambience/glow, equalizer and hover feedback, expanding sidebar, floating player controls, room participant animation, and loading skeletons. Honor reduced-motion and accessibility preferences; an audio-reactive visualizer requires provider permission and actual audio-analysis capability.
- Player controls are capability-aware. Unsupported controls are unavailable or clearly disabled; no no-op buttons or placeholder links.
- Key routes:

  | Route | Purpose |
  |---|---|
  | `/` | Landing page |
  | `/login`, `/register` | Authentication |
  | `/dashboard` | Main dashboard |
  | `/discover`, `/search` | Discovery and search |
  | `/library`, `/history` | Library and listening history |
  | `/rooms`, `/room/create`, `/room/[id]` | Room browsing, creation, and room session |
  | `/friends` | Friends and activity |
  | `/profile/[username]` | User profile |
  | `/settings`, `/settings/integrations` | Preferences and connected accounts |

## Last.fm and playback separation

- Last.fm connection/disconnection, username, profile, top artists/albums/tracks, recent tracks, artist/album/track metadata, listening statistics, and history, subject to official endpoint availability, rate limits, and caching rules.
- Send now-playing and scrobble updates only through the official API and according to its criteria. Handle expired sessions, API errors, rate limits, unavailable artwork, and clear connection feedback. Keep API secrets and user session keys server-side.
- Last.fm metadata, history, and scrobbling do not grant audio playback rights. Playback must come from a separate approved provider or rights-cleared user source.
- Preserve a `MusicProvider` capability contract for track search/details, play, pause, seek, current track, and playback state. Show only controls the chosen source supports; document account, subscription, geography, license, and SDK requirements.
- User-supplied URLs are not proof of streaming rights. Do not extract audio, proxy around restrictions, or fetch arbitrary user URLs server-side without SSRF controls.

## Listening rooms and synchronized playback

- Create rooms with name, cover, description, public/private visibility, optional password, participant limit, guest-access setting, control-request setting, and queue permissions.
- Create a unique room identifier and revocable invitation link. The interface shows room identity/owner, current track and playback progress, members, controller, shared queue, chat, and control-request notifications.
- Room playback state includes current provider track, position, playing state, server timestamp, current DJ/controller, queue, repeat/shuffle modes when supported, and last update.
- Owner/DJ play, pause, skip, and seek commands update server state and notify authorized members. Clients joining mid-track or reconnecting recover the room snapshot. Correct drift only where the provider's terms and player controls permit.
- Each participant may have distinct entitlements, geography, browser autoplay behavior, and playback failure. Report local playback health separately from the intended shared room state; never infer that audio is synchronized just because a command was accepted or broadcast.
- Do not assume independent personal subscriptions permit shared-room control. Provider legal approval and technical feasibility are gating requirements for real synchronized playback.

## Roles, queue, chat, and social features

- **Owner:** full room settings and participant management, room deletion, control-request approval/rejection, ownership transfer, and playback control.
- **DJ/controller:** play/pause/skip/seek, volume where supported, queue management, and repeat/shuffle where supported.
- **Listener:** listen, view the queue, chat, suggest tracks, and request control.
- Control requests identify the requester, notify the authorized approver and requester, and update permission state after approval. Support revocation, voluntary transfer, and automatic controller handoff after disconnect; configure request cooldowns and validate commands on the server.
- Shared queue: add/remove/reorder, drag-and-drop, show the contributor, upcoming tracks, permission settings, suggestions, queue voting, and optional democratic skip voting.
- Real-time room chat with avatars/usernames, timestamps, emoji, presence indicators, and system events for joins/leaves, track changes, and controller changes.
- Social network: friend requests and accept/reject, online friends, friend listening activity, joining public rooms, private-room invitations, and room sharing. Include blocking and reporting.
- A notification center covers friend/room invitations, control requests/decisions, friend activity, and room activity.

## Discovery, profiles, and optional premium features

- Discovery: trending/popular tracks and artists, new-to-user artists, Last.fm top tracks, recommendations/similar artists and tracks, albums, and genre exploration. Each result shows available artwork, title, artist, play availability, queue action, and details.
- Profile: picture, username, biography, Last.fm username, favorite artists/tracks, recent music, statistics/scrobbles, friends, and public rooms. Profiles and activity require user-controlled privacy.
- Optional where technically and legally feasible: audio-reactive visualizer, waveform, artwork-derived ambient colors, artwork transitions, keyboard shortcuts that do not fire while typing, and richer listening statistics.
- Planned keyboard shortcuts, when the user is not typing: Space for play/pause; left/right for previous/seek-back and next/seek-forward according to context; up/down for volume; Escape to close dialogs.
- Output-device selection, lyrics, audio analysis, and similar controls appear only when a legitimate supported provider exists.

## Data and security requirements

- Normalized PostgreSQL with UUID keys, foreign keys, constraints, timestamps, and indexes. Plan entities: `profiles`, `connected_accounts`, `friends`, `friend_requests`, `listening_rooms`, `room_members`, `room_roles`, `control_requests`, `playback_states`, `room_queue`, `room_messages`, `notifications`, `user_preferences`, `listening_history`, `blocked_users`, and `reports`.
- Names may differ where the architecture preserves the behavior; for example, a single role column on a unique room-membership row can represent the current owner/DJ/listener role.
- Supabase RLS and explicit grants prevent unauthorized access to private rooms, roles, credentials, queue, and messages. Verify roles on the server for every mutation. Protect sessions, callbacks, invitations, API keys, account linking, disconnection, and account deletion.
- Validate/rate-limit input and actions; render messages safely; enforce report/block behavior; use privacy-aware retention and secure cover uploads. Never store plaintext passwords or expose provider credentials.
- Do not use hidden APIs, defeat provider restrictions, or present unauthorized, sample, or unavailable media as playable.

## Responsive, landing, and open-source requirements

- Desktop, laptop, tablet, and mobile support. Mobile includes bottom navigation, compact player, collapsible queue, full-screen room layout, responsive participants, and touch-friendly controls.
- Landing page headline: “Music is better when shared.” Subheadline: “Discover your sound. Create your space. Listen together.” Include Start Listening and Explore Rooms actions, a compliant cinematic background, floating artwork, room preview, feature overview, Last.fm explanation, open-source information, and repository link.
- Public repository should include README, MIT license, `.env.example`, `.gitignore`, CONTRIBUTING, SECURITY, CODE_OF_CONDUCT, migrations, setup/API/architecture documentation, deployment guidance, and safe environment-variable setup. The README should explain the product and features, screenshots when available, stack, installation, environment variables, Last.fm and Supabase setup, local run steps, deployment, contribution, and license. Never commit keys, tokens, or personal credentials.
- Easy fork/self-host flow with explicit external service prerequisites.

## Eight-phase roadmap

1. **UI Foundation:** project setup, theme, sidebar, dashboard, responsive layout, player interface, landing page. Sample data is allowed only for this initial UI phase and must be clearly labeled; sample playback/synchronization cannot be represented as real.
2. **Authentication:** Supabase authentication, profiles, Last.fm linking, settings.
3. **Music Integration:** Last.fm metadata, provider abstraction, legally supported playback, scrobbling, search, and discovery.
4. **Listening Rooms:** room creation/invitations, real-time participants, shared state, and provider-permitted synchronization.
5. **Collaborative Controls:** roles, DJ permissions, requests, approval/rejection, and shared queue.
6. **Social Features:** chat, friends, notifications, and user activity.
7. **Polish:** animation, visualizer, responsive optimization, security audit, error handling, and performance.
8. **Open-Source Release:** documentation, environment setup, migrations, GitHub preparation, and deployment guide.

## Quality and completion criteria

- Genuine functionality; no static mockup presented as a product, fake playback, fake sync, nonfunctional controls, or placeholder links.
- Proper loading, error, and empty states; modular reusable components; strong TypeScript types; accessible interactions; optimized images; efficient subscriptions; and reliable reconnect handling.
- Before release, relevant builds, type checks, automated/database/browser tests, security and accessibility review, provider compliance checks, and self-host instructions must pass. Do not claim completion without observed verification.
