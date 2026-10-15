# Siva Babu — AI infrastructure & observability portfolio

A static Astro portfolio shaped around Siva's supplied engineering résumé: production infrastructure, observability, fleet systems and reliability. The homepage presents six selected independent projects with explicit skill connections, a four-area skills section, production experience, personal projects, and technical academies. Its midnight-blue theme uses violet and mint accents consistently across navigation, categories, experience and community sections. Directories and case studies retain their light reading surfaces. No portrait is included.

The catalog contains 45 original public projects, five category pages, 45 project detail pages, six academies and three attributed upstream forks. The project directory supports category selection, search, format filters and sorting. Everything is prerendered and stays on free GitHub Pages hosting.

Public website: https://sivalinb.github.io/
Project directory: https://sivalinb.github.io/projects/
Learning academies: https://sivalinb.github.io/learn/
Upstream references: https://sivalinb.github.io/references/

## Run locally

Use Node.js 24 or a version supported by the installed Astro release.

```sh
npm ci
npm run dev
npm run build
npm run check:built
npm run preview
```

In a restricted environment, set `ASTRO_TELEMETRY_DISABLED=1` on the build/dev process. The lockfile pins the installed dependencies. There is no application server, paid API, database, or external font dependency.

## Information architecture and review

The public inventory refreshed on October 14, 2026 contains 48 repositories: 44 original projects, three upstream forks, and this portfolio repository. Only public project information enters the website and downloadable source.

Four recently added repositories were reviewed: GPU FleetOps, AI Factory Observability Lab, Data Center Explorer and Nanga Hatti. The review covered their authored code, documentation, configuration, tests and recorded evidence. Generated definitions were checked against their source; binary assets and vendored/geographic data were inventoried separately. The underlying applications and hardware were not rerun during this portfolio refresh. Repository-recorded test outcomes are labeled as recorded evidence.

The existing Nanga Hatti changes on the public portfolio were preserved before the refresh. Its public explorer uses fictional starter memories; contribution and review run locally. It remains visible as a personal/community project with engineering detail and a read-only public explorer link.

Badaga Care Circle is a community-care addition. Its homepage highlight and dedicated case study present English/Tamil education, persistent human review, shared caregiving and family backup. The case study includes unmodified screenshots of 46/46 local evaluation cases, six-request traces and operational metrics, plus architecture, source, exported evidence and the passing 53-test CI run. Medical/Tamil review and real-pilot gates remain explicit. Its local Gradio app is not presented as a hosted clinical service. The six infrastructure flagship projects and résumé-based career positioning are retained.

CirclePath adds a restorative-justice volunteer case study grounded in the working local demo: authenticated role requests, manager review, meeting preparation, repair follow-up, reintegration and approved summaries. Its homepage highlight connects the facilitator use case to bounded Gemini drafts, metadata-only OpenTelemetry, Arize and Grafana. Actual preparation and dashboard captures accompany the workflow illustration. The project records 15 passing integration tests and a passing CI run. Fictional inputs, human decisions and the unconnected Google Calendar adapter remain explicit.

| Area | Projects |
| --- | ---: |
| Observability & Reliability | 18 |
| AI & GPU Infrastructure | 8 |
| Systems & Robotics | 5 |
| Sports & Race Tools | 6 |
| Community & Everyday Apps | 8 |

Formats are independent of category: 11 tools, 13 labs, six academies and 15 apps. Tags connect cross-cutting topics. Forks stay in References with attribution. AI Incident Investigator brings the current catalog to 45 projects and is included in the featured selection.

The featured selection follows the Staff/Principal engineering résumé's strongest themes:

| Featured project | Skills demonstrated |
| --- | --- |
| GPU FleetOps | Inventory provenance, ownership, SLO policy, telemetry delivery and reviewed recovery |
| AI Factory Observability Lab | GPU/fabric correlation, source contracts, data coverage and alert ownership |
| AI Incident Investigator | OpenInference traces, measured local inference, reviewed repair and recovery verification |
| LLM Serving Observatory | Inference architecture, serving telemetry and bounded measurements |
| Telemetry Cardinality Governor | Durable Temporal execution, measured canaries, idempotent changes and rollback |
| Fleet Kernel Workbench | Linux/eBPF, package boundaries, provenance and telemetry recovery |

Résumé summaries omit personal phone/address details and unverified employer-scale claims. Employer experience and independent projects have separate sections. Public project pages keep real measurements, simulations and planned integration limits explicit.

## Edit the content

- `src/data/catalog.json`: the public project catalog, categories, tags, formats, related collections, featured order, and links.
- `src/data/portfolio.ts`: professional introduction, about paragraph, GitHub link and optional contact links. Empty email/LinkedIn values are omitted.
- `src/data/career.ts`: featured-project selection, skill connections and résumé-based experience summaries.
- `src/data/project-details.ts`: longer source-grounded project notes, capabilities and documentation links.
- `src/pages/index.astro`: homepage headline and section copy.
- `src/styles/global.css`: layout, typography, colors, and mobile behavior.
- `src/styles/home.css`: the professional homepage layout and responsive styles.
- `src/styles/redesign.css`: the scoped homepage theme, contrast, focus and reduced-motion treatment.
- `src/components/SignalJourney.astro`: four evidence-to-action stages with supporting project links. Arrow keys, Home and End change stages; all four stages remain readable without JavaScript.
- `src/components/PortfolioIcon.astro`: the homepage's small SVG icons.
- `public/images`: public repository screenshots and illustrations. Image captions retain their source context. Homepage diagrams are labeled concept views rather than presented as working application screenshots.
- `public/social-card.svg`: editable share-image artwork; `public/social-card.png` is its raster version.

To add a project, add a public repository entry to `catalog.json` and assign a valid `categoryId`, format, tags, and scope. Counts, category pages, detail routes, related project cards, and the sitemap are derived from that catalog. Keep forked projects in `references`. Review publicly shared demo access before adding a demo URL. Re-run the build after updates.

## Directory behavior

Desktop offers a category sidebar and the Projects menu. Phones offer a native category selector and expandable navigation. Category changes start a fresh category view. Search, format, and sorting work locally; their current state is reflected in a shareable URL. Clear filters recovers from empty results. The ordinary category pages and project content are prerendered and remain available without JavaScript.

## Free GitHub Pages hosting

The public repository `sivalinb/sivalinb.github.io` is configured to publish through GitHub Actions. Push to `main`; `.github/workflows/deploy.yml` builds Astro and deploys the website. No manual upload of `dist` is needed. Keep the included `github.io` address for zero domain cost. Individual project backends are separate from hosting this portfolio.

Official Astro guide: https://docs.astro.build/en/guides/deploy/github/
GitHub Pages availability: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

For another repository name, set `PORTFOLIO_BASE_PATH` to `/repository-name/` and `PORTFOLIO_SITE_URL` to your `https://username.github.io` origin. For another static host, build with its origin as `PORTFOLIO_SITE_URL`, then serve `dist`.

The `.openai` hosting manifest belongs only to the private Sites backup and is excluded from the public GitHub repository and downloadable source bundle.

## Accessibility and verification

Semantic headings, a skip link, focus indicators, native form controls, an announced result count, keyboard-operable navigation, and reduced-motion styles are included. All portfolio routes and assets were checked, along with search, empty results/reset, format filtering, sorting, category selection, and desktop/phone layouts. Project screenshots and illustrations are not evidence that every underlying app or external demo was tested during this portfolio update.

Run `npm run check` to build and verify the generated routes, catalog coverage, local links/assets, fragment targets, unique IDs and ARIA references. Separately deployed GitHub Pages project demos are external to this build. The pull-request workflow runs this check for the portfolio's current root deployment. Browser checks cover visual contrast, narrow layouts, navigation and the system explorer; static checks do not replace those checks.
