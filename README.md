# LOKI

**Music is better when shared.**

LOKI is planned as an open-source collaborative listening platform. Its goal is to let people discover music, create listening rooms, and share a genuinely synchronized session through playback sources that permit this use.

## Project status

LOKI is in **Phase 0: research and architecture review**. This repository currently has no runnable application. No playback provider has been selected, and no application code or dependencies have been added.

The playback-provider comparison and open questions are in [Provider feasibility](docs/PROVIDER_FEASIBILITY.md). The system design, data model, and authorization approach are in [Architecture](docs/ARCHITECTURE.md). These documents are prepared for review; provider choice and implementation remain subject to approval.

## Planned product

The roadmap includes Last.fm metadata and scrobbling, a separate lawful playback-provider integration, private and public listening rooms, synchronized playback, owner and DJ controls, a shared queue, room chat, profiles, discovery, and social features. The product must clearly distinguish metadata from playback and must not present simulated playback or synchronization as real.

The planned visual direction is a cinematic dark emerald interface. LOKI will use original design elements and properly licensed artwork rather than copied logos or assets.

## Planned technology baseline

- Next.js App Router and TypeScript
- Tailwind CSS, Framer Motion, and Lucide
- Zustand for interface state and TanStack Query for server data where appropriate
- Supabase Auth, PostgreSQL, and authorized Realtime channels
- Vercel-compatible deployment

These choices are the approved architectural direction. The playback provider remains undecided.

## Documentation

- [Current project state](docs/PROJECT_STATE.md)
- [Build checklist](docs/BUILD_CHECKLIST.md)
- [System architecture](docs/ARCHITECTURE.md)
- [Architecture decisions](docs/DECISIONS.md)
- [Playback provider feasibility](docs/PROVIDER_FEASIBILITY.md)
- [First-release scope and acceptance criteria](docs/PRODUCT_SCOPE.md)
- [Security and privacy boundaries](docs/SECURITY_PRIVACY.md)
- [Repository foundation plan](docs/REPOSITORY_FOUNDATION.md)

## Development

There are no application setup or run instructions yet because the application has not been scaffolded. Follow the checklist and wait for approval of the Phase 0 findings before implementation.

## License

LOKI is licensed under the MIT License; see [LICENSE](LICENSE).
