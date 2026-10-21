# Cheyenne Dominguez — Remote Administrative Assistant Portfolio

A responsive static React/Vite portfolio. The intended GitHub Pages address is [cheyennedominguez.github.io](https://cheyennedominguez.github.io). Pages deployment is pending repository visibility setup.

## Local development

```bash
pnpm install --frozen-lockfile
pnpm dev:static
```

## Production build

```bash
pnpm build:static
```

The build is written to `dist/public/`.

The email and calendar before/after examples are stored in `client/public/images/`. The screenshots are privacy-redacted. Keep the redacted versions when sharing the repository; do not replace them with the original unredacted captures.

The design currently uses a “CD” initials mark. A profile picture is optional. If Cheyenne later chooses to use one, place a square image such as `profile-photo.jpg` in `client/public/images/` and update the page markup and styling to reference it.

## GitHub Pages

The account-level Pages repository must be named `cheyennedominguez.github.io`. The included workflow builds the static site and deploys `dist/public/` when manually run from GitHub Actions. Before using it, enable Pages with GitHub Actions under **Settings → Pages** and ensure the repository is eligible for Pages. The source repository is currently private; do not change its visibility without Cheyenne’s approval. The portfolio itself is intended to be public when published.
