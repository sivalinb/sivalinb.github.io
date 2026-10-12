# Siva Babu — Astro portfolio

A static, responsive portfolio with a dark teal visual style, a filterable project gallery, four project detail pages, documentation links, and GitHub contact links. Astro generates the HTML at build time. There is no application server, database, paid API, or external font dependency.

## Run locally

Use Node.js 24 or another version supported by the installed Astro release.

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro. Build and preview the final website with:

```sh
npm run build
npm run preview
```

In a restricted environment, set `ASTRO_TELEMETRY_DISABLED=1` on the build/dev process. The package lock pins the installed dependencies.

## Edit your portfolio

The personal information and project content are in `src/data/portfolio.ts`.

- Update the name, introduction, and about paragraph in `profile`.
- Add a public email and LinkedIn URL if you want those links displayed. Empty values are omitted.
- Edit or add entries in `projects`. Each entry creates its own project page automatically.
- Edit `notes` to change the documentation links on the homepage.
- The homepage headline is also in `src/pages/index.astro`.
- Colors, spacing, and responsive styles are in `src/styles/global.css`.
- The editable vector share image is `public/social-card.svg`. Regenerate `public/social-card.png` if you change it.

The first version uses Siva Babu's connected GitHub profile and summaries of these verified public READMEs:

- https://github.com/sivalinb/gpu-signal-atlas
- https://github.com/sivalinb/llm-serving-observatory
- https://github.com/sivalinb/signalops
- https://github.com/sivalinb/fleet-kernel-workbench

It makes no claims about employers, job titles, career dates, clients, or project performance. Illustrations are conceptual, not live dashboards or product screenshots. Review descriptions as the underlying projects change.

## Free public hosting on GitHub Pages

1. Create a **public** repository named `sivalinb.github.io` in your GitHub account. If it already exists, review its current contents before replacing anything.
2. Put this project's source files at the repository root, including `package.json`, `package-lock.json`, `astro.config.mjs`, `src`, `public`, and `.github/workflows/deploy.yml`. You do not need `node_modules`, `dist`, `.openai`, or `.git` from the private preview.
3. Open the repository's **Settings → Pages** and choose **GitHub Actions** as the publishing source.
4. Push the source to `main`. The included workflow builds and publishes it.
5. Confirm that the Actions deployment succeeds, then visit **https://sivalinb.github.io/**.

This repository name uses the root of your free GitHub Pages address. If you use a different repository, set `PORTFOLIO_BASE_PATH` to `/repository-name/` and keep `PORTFOLIO_SITE_URL` at your `https://username.github.io` origin in the workflow.

Official Astro deployment guide: https://docs.astro.build/en/guides/deploy/github/
GitHub Pages availability: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

GitHub Pages hosting is free for a public repository. Keep the included `github.io` address for zero domain cost. Live project backends and custom domains are separate from hosting this static portfolio.

## Other static hosts / private preview

Run `npm run build` and serve `dist`. For a different host, set `PORTFOLIO_SITE_URL` to its origin before building. `PORTFOLIO_BASE_PATH` defaults to `/`. The hosting manifest in `.openai` belongs only to the private Sites preview; it is excluded from the downloadable GitHub source bundle.

## Accessibility and motion

The site includes a skip link, visible focus states, semantic headings, a keyboard-operable mobile menu, an announced filter count, and reduced-motion styles. Navigation and project content use ordinary links. Filtering is a small client-side enhancement.
