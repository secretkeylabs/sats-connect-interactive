# Deploy to GitHub Pages

## Prerequisites

- The repo is hosted as a **public** repo at `github.com/secretkeylabs/sats-connect-interactive`.
- GitHub Pages for organization repos serves from `https://secretkeylabs.github.io/<repo-name>/`, meaning the base path will be `/sats-connect-interactive/`.

## Step 1 — Set Vite `base` for subpath deployment

The site will be served at `https://secretkeylabs.github.io/sats-connect-interactive/`, so Vite needs to know the base path. In `vite.config.ts`, add:

```ts
base: "/sats-connect-interactive/",
```

## Step 2 — Configure the SPA router for the base path

`@solidjs/router` needs to be told about the base path so all routes resolve correctly. In `src/index.tsx`, update the `<Router>`:

```tsx
<Router root={Layout} base="/sats-connect-interactive">
```

## Step 3 — Handle SPA 404 fallback

GitHub Pages doesn't support server-side rewrites. For client-side routing to work on direct URL access or page refresh, add a `public/404.html` that redirects to `index.html` preserving the path. This is the standard SPA-on-GitHub-Pages workaround (see [spa-github-pages](https://github.com/rafgraph/spa-github-pages)).

## Step 4 — Create the GitHub Actions workflow

Create `.github/workflows/deploy.yml` with a workflow that:

1. Checks out the code.
2. Sets up Bun.
3. Installs dependencies (`bun install --frozen-lockfile`).
4. Builds (`bun run build`) — output goes to `dist/`.
5. Uploads `dist/` via `actions/upload-pages-artifact`.
6. Deploys via `actions/deploy-pages`.

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v2
      - run: bun install --frozen-lockfile
      - run: bun run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

## Step 5 — Create the public GitHub repo

Create a new **public** repository under the `secretkeylabs` organization:

```sh
gh repo create secretkeylabs/sats-connect-interactive --public --source=. --push
```

If the repo already exists as internal/private, change its visibility instead:

```sh
gh repo edit secretkeylabs/sats-connect-interactive --visibility public
```

## Step 6 — Enable Pages in repo settings

In the GitHub repo settings → **Pages**:

- **Source**: set to **GitHub Actions** (not "Deploy from a branch").
- No branch selection needed — the workflow handles everything.

## Summary of file changes

| File                           | Change                                                   |
| ------------------------------ | -------------------------------------------------------- |
| `vite.config.ts`               | Add `base: "/sats-connect-interactive/"`                 |
| `src/index.tsx`                | Add `base="/sats-connect-interactive"` to `<Router>`     |
| `public/404.html`              | Create SPA redirect fallback (or switch to hash routing) |
| `.github/workflows/deploy.yml` | Create CI/CD workflow (as above)                         |
| GitHub repo settings           | Enable Pages with "GitHub Actions" source                |
