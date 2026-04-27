# Architecture

**Date:** 2026-04-27

## System Design
The application is a single-page React client application (SPA). It acts as a static portfolio website. 
It follows a component-based architecture where the UI is divided into reusable parts. Data is injected statically via `portfolio.js` and through external API fetching during build time (`fetch.js` to get GitHub profile data).

## Data Flow
- **State Management**: Data is mostly static, imported directly from `src/portfolio.js`. React Context (`src/contexts/StyleContext.js`) is used for managing the dark/light theme state across the application.
- **External Data**: `fetch.js` runs prior to the build/start process to fetch live GitHub user data (like repository details) and outputs it locally so the React app can import it at runtime without hitting API rate limits.
- **Top-down Flow**: Data from `portfolio.js` is passed down as props to container components (sections), which then map over data arrays to render individual item components (like cards).

## Key Abstractions
- **Containers (`src/containers/`)**: Large section-level components that represent full segments of the webpage (e.g., `Greeting`, `Skills`, `Education`, `WorkExperience`, `Projects`, `Contact`). They consume the raw data.
- **Components (`src/components/`)**: Smaller, reusable UI elements (e.g., `Button`, `ExperienceCard`, `GithubRepoCard`, `Header`, `Footer`).
- **Data Store**: `src/portfolio.js` exports objects and arrays containing personal information, project lists, skills, etc.

## Entry Points
- **Client Entry**: `src/index.js` mounts the React application.
- **App Root**: `src/App.js` provides the Context Provider.
- **Main Layout**: `src/containers/Main.js` orchestrates all the section containers on a single scrollable page.
