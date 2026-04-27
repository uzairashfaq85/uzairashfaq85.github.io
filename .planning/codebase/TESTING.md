# Testing

**Date:** 2026-04-27

## Frameworks
- **Jest**: The default test runner provided by Create React App.
- **Enzyme**: Used for React component rendering and assertion (configured via `enzyme-adapter-react-16` in `src/setupTests.js`).
- **jest-canvas-mock**: Used to mock HTML canvas functionality during testing, likely required by components rendering Lottie animations or similar graphical elements.

## Structure
- Tests are colocated with the components they test. Example: `src/App.test.js`.
- The entry point for test configuration is `src/setupTests.js`.

## Execution
- Tests are run using `npm test` or `react-scripts test`.
- No extensive automated test suites or CI workflows are immediately apparent for high coverage; testing seems focused on base component mounting.
