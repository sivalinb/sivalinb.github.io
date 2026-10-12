# Siva Babu — Astro portfolio

A static Astro portfolio with a personal workbench homepage, six project highlights, a directory of 37 original public projects, five category pages, 37 project detail pages, six technical academies, and three clearly attributed upstream forks.

The homepage uses a public GitHub portrait, paper tones, handwritten annotations, an original SVG signal sketch, and project-specific stories. Three projects have full editorial features; three more are concise links. The project directory retains its focused browsing design. Homepage styles are scoped to the homepage and do not alter the directory or detail pages.

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
npm run preview
```

In a restricted environment, set `ASTRO_TELEMETRY_DISABLED=1` on the build/dev process. The lockfile pins the installed dependencies. There is no application server, paid API, database, or external font dependency.

## Information architecture

The October 11, 2026 scan covered metadata and README summaries for 43 owned repositories: 37 original public projects, 3 public upstream forks, this portfolio repository, and 2 private repositories. Only public project information enters this source bundle.

Primary areas:

| Area | Projects |
| --- | ---: |
| Observability & Reliability | 15 |
| AI & GPU Infrastructure | 6 |
| Systems & Robotics | 5 |
| Sports & Race Tools | 6 |
| Community & Everyday Apps | 5 |

A primary area keeps grouping predictable. Tags support cross-cutting topics such as OpenTelemetry, agents, Grafana, and RAG. Format is an independent filter: 10 tools, 9 labs, 6 academies, and 12 apps. Related project pages also connect the Fleet workbenches, Runtime experiment suite, RaceTime projects, Athlete observability projects, and Zero to Hero academies.

Forks are kept in References, with attribution, rather than presented as original work. Private repository names and content are absent from the website. The scan is an inventory and editorial classification; it is not a source-code audit or verification of every underlying application's behavior.

## Edit the content

- `src/data/catalog.json`: the public project catalog, categories, tags, formats, related collections, featured order, and links.
- `src/data/portfolio.ts`: personal introduction, about paragraph, GitHub link, and optional contact links. Empty email/LinkedIn values are omitted.
- `src/data/project-details.ts`: longer notes and capabilities for the original four highlighted projects. Other project pages use the catalog's concise source-grounded description and scope.
- `src/pages/index.astro`: homepage headline and section copy.
- `src/styles/global.css`: layout, typography, colors, and mobile behavior.
- `src/styles/home.css`: the personal homepage layout and its responsive styles.
- `public/images`: public repository screenshots and illustrations, plus the portrait from the owner's public GitHub profile. Image captions retain their source context.
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
