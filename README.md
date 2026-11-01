# LOKI

**Music is better when shared.**

LOKI is planned as an open-source collaborative music-listening platform. It combines Last.fm metadata and scrobbling with a separately licensed playback source, listening rooms, synchronized playback where the provider permits it, and social features.

## Project status

Phase 0 architecture and provider-feasibility documentation is recorded in [PR #1](https://github.com/vansh-kumar-007/loki-music/pull/1). The repository is documentation-only: no application code, dependencies, or provider integration exists. **No playback provider has been selected.** Jamendo is a candidate for further investigation, but its room-use and licensing fit remains unresolved.

Do not treat the product roadmap or visual plans as implemented functionality. LOKI will not fake playback, synchronization, authentication, presence, or provider integrations.

## Product and roadmap

The complete plan inventory, including routes, interface requirements, integrations, security requirements, and all eight development phases, is in [Product requirements](docs/PRODUCT_REQUIREMENTS.md). The proposed first-release slice, provisional defaults, and acceptance criteria are in [Product scope](docs/PRODUCT_SCOPE.md).

## Approved architectural direction

- Next.js App Router and TypeScript
- Tailwind CSS, Framer Motion, and Lucide
- Zustand for transient interface state and TanStack Query for server data where useful
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

## Development

There are no install or run instructions because the application has not been scaffolded. Phase 1 has not started. Check the build checklist and project state before beginning approved work.

## License

LOKI is licensed under the MIT License; see [LICENSE](LICENSE).
