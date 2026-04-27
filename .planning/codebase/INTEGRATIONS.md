# Integrations

**Date:** 2026-04-27

## External APIs & Services
- **GitHub API**: Fetches repository and profile data, presumably used by the `fetch.js` pre-start/pre-build script to generate `profile.json` or similar data files.
- **Twitter**: Twitter timeline/tweets embedding via `react-twitter-embed` (used in Twitter component).

## Deployment & Hosting
- **GitHub Pages**: The project uses the `gh-pages` npm package and deploys the `build` output directly to GitHub Pages (`npm run deploy`).
- **Dockerfile**: Present for optional containerized hosting or development, but primary production is GitHub Pages.

## Development Services
- **GitHub Actions/Workflows**: Potentially used given the `.github` directory.
- **Pre-commit Hooks**: Controlled via `.pre-commit-config.yaml`.
