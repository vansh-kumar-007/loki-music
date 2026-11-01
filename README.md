# LOKI

**Music is better when shared.**

LOKI is an open-source collaborative music-listening platform in development. Its goal is to combine Last.fm metadata with a separately approved playback source, listening rooms, and social features.

## Project status

**Phase 1 UI foundation is implemented and verified.** The runnable application is a responsive interface preview with clearly labeled fictional sample metadata. It has no authentication, music playback, live rooms, connected Last.fm account, or backend data. **No playback provider has been selected.** Jamendo remains a candidate for further investigation; its room-use and licensing fit is unresolved.

Do not treat sample catalog items or preview screens as live functionality. LOKI does not fake playback, synchronization, authentication, presence, or provider integrations.

## Product and roadmap

The complete plan inventory, including routes, interface requirements, integrations, security requirements, and all eight development phases, is in [Product requirements](docs/PRODUCT_REQUIREMENTS.md). The proposed first-release slice, provisional defaults, and acceptance criteria are in [Product scope](docs/PRODUCT_SCOPE.md).

## Approved architectural direction

- Next.js App Router and TypeScript
- Tailwind CSS, Motion for React, and Lucide
- Zustand for transient interface state; a server-data library will be added when real APIs exist
- Supabase Auth, PostgreSQL, and authorized Supabase Realtime
- Last.fm as a metadata and scrobbling integration, separate from playback
- A modular playback-provider boundary; provider selection remains unresolved
- Vercel-compatible frontend deployment with documented self-hosting

The design direction is a cinematic dark emerald interface with original visual assets. Do not copy protected product interfaces, logos, or artwork.

## Documentation

- [Product requirements and eight-phase roadmap](docs/PRODUCT_REQUIREMENTS.md)
- [Product scope and acceptance criteria](docs/PRODUCT_SCOPE.md)
- [Playback-provider feasibility](docs/PROVIDER_FEASIBILITY.md)
- [System architecture and data model](docs/ARCHITECTURE.md)
- [Security and privacy boundaries](docs/SECURITY_PRIVACY.md)
- [Architecture decisions](docs/DECISIONS.md)
- [Repository foundation and Git workflow](docs/REPOSITORY_FOUNDATION.md)
- [Build checklist](docs/BUILD_CHECKLIST.md)
- [Project state](docs/PROJECT_STATE.md)

## Run locally

Requirements: Node.js 20.9 or newer and npm. The Phase 1 interface does not require environment variables or external service credentials.

Install dependencies with npm ci, then start the development server with npm run dev.

Open http://localhost:3000. The landing page links to the interface preview and the in-progress product routes.

Available checks: npm run lint, npm run typecheck, npm run test:e2e, and npm run build. Browser tests use Playwright; install its Chromium browser once with npx playwright install chromium. You can set PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH to use a locally installed Chromium-based browser instead.

Current routes include the landing page, dashboard, discovery, local sample search, library/history states, rooms, friends/activity, settings/integration status, and account/room preview screens. Playback controls and account or room mutations are disabled until their real provider and backend phases are implemented.

See the [build checklist](docs/BUILD_CHECKLIST.md) for verified project status and remaining phases.

## License

LOKI is licensed under the MIT License; see [LICENSE](LICENSE).
