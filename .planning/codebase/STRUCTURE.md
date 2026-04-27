# Directory Structure

**Date:** 2026-04-27

## High-Level Layout
- `.planning/` - Project planning and GSD context directory.
- `build/` - Output directory for production builds.
- `public/` - Static assets, HTML entry point (`index.html`), and favicons.
- `src/` - Application source code.

## Source Directory (`src/`)
- `src/assets/` - Images, fonts, and other static assets imported by components.
- `src/components/` - Reusable UI components. Each component typically has its own folder containing a `.js` and `.scss` file.
  - Examples: `button/`, `experienceCard/`, `header/`, `footer/`.
- `src/containers/` - High-level page sections that assemble components and pass data.
  - Examples: `greeting/`, `skills/`, `projects/`, `contact/`.
- `src/contexts/` - React Context providers (e.g., for theme styling).
- `src/hooks/` - Custom React hooks (e.g., `useLocalStorage`).
- `src/portfolio.js` - Central configuration and data file containing all portfolio content.
- `src/App.js` / `src/index.js` - Core entry points and wrappers.

## Naming Conventions
- React components and containers use PascalCase for directory names and filenames (mostly), though some components use camelCase directory names (e.g., `githubRepoCard/`).
- Stylesheets use the same name as the component they style (e.g., `Header.scss` alongside `Header.js`).
- Helper files are camelCase (e.g., `utils.js`, `fetch.js`).
