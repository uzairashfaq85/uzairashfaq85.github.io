# Concerns

**Date:** 2026-04-27

## Technical Debt & Maintenance
- **Outdated React Version**: The application is using React 16.10.2, which is quite old. It uses Create React App (`react-scripts` v5), which is deprecated by the React team in favor of Vite, Next.js, or Remix.
- **Dependency Vulnerabilities**: Given the age of the dependencies, running an `npm audit` might yield a significant number of vulnerabilities. Dependencies like `node-sass` or older version of `sass` might need upgrading.
- **Testing Coverage**: Tests are present but minimal. Lack of integration or end-to-end tests makes large refactors riskier.
- **Large Media Files**: The `public` and `assets` directories contain numerous images and SVGs. Ensuring these are optimized could significantly improve initial load times.

## Potential Fragility
- **Fetch Script**: The pre-deploy `fetch.js` relies on external API structures (e.g., GitHub GraphQL API). If the API changes or rate limits apply, the build will fail.
- **Theme Handling**: Switching between Dark/Light themes relies heavily on global SCSS overrides and a centralized Context. Modifying deep UI components requires careful management of CSS class names and Context consumption.
