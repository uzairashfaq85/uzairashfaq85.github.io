# Conventions

**Date:** 2026-04-27

## Code Style
- **Formatting**: Prettier is used for code formatting, configured via `.prettierrc` (e.g., single quotes, trailing commas, no semicolons).
- **Linting**: ESLint is configured with `"extends": "react-app"`.
- **Styling**: SCSS (Sass) is used for component styles, scoped by creating a `.scss` file next to its corresponding component (e.g., `Header.scss` for `Header.js`). Global styles and variables are in `index.css` and `_globalColor.scss`.

## File Organization
- Component folders contain both the logic `.js` and styling `.scss`.
- Static data is isolated in `src/portfolio.js` to keep components stateless and reusable.

## Error Handling
- Minimal explicit error handling mechanisms are visible as the app primarily renders static data.
- Fetch errors in the `fetch.js` build script handle missing environment variables or API failures before the React app builds.
