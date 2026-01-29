# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Multi-phase interactive web learning platform for Google Antigravity IDE. Built as a collection of vanilla JavaScript SPAs (no build tools required). The platform guides users from beginner to "Power User" through 4 progressive learning phases (36 total sections). All content is in Czech.

## Running the Project

```bash
# Start local development server (required due to CORS restrictions on fetch)
cd WebApp_Guide
python3 -m http.server 8000

# Access landing page at http://localhost:8000
# Phase 1: http://localhost:8000/antigravity-guide/
# Phase 2: http://localhost:8000/phase2-navigation/
# Phase 3: http://localhost:8000/phase3-pro-workflow/
# Phase 4: http://localhost:8000/phase4-god-mode/
```

Alternative: VS Code Live Server extension (right-click `index.html` → "Open with Live Server")

## CI/CD

GitHub Actions runs on push/PR to main:
- **HTML validation**: `html-validate` with `.htmlvalidate.json` config
- **Server test**: Verifies Python HTTP server starts and serves pages
- **Lighthouse audit**: Performance/accessibility audit (PRs only)

## Architecture

### Multi-Phase SPA Structure

```
WebApp_Guide/
├── index.html                 # Landing page (Tailwind + Chart.js)
├── antigravity-guide/         # Phase 1: Basics (12 sections) - Blue theme
├── phase2-navigation/         # Phase 2: Navigation & Data (8 sections) - Blue theme
├── phase3-pro-workflow/       # Phase 3: Pro Workflow (8 sections) - Green theme
└── phase4-god-mode/           # Phase 4: God Mode (8 sections) - Red theme
```

Each phase folder has identical structure:
```
{phase}/
├── index.html          # SPA shell
├── config.json         # Section definitions, feature flags, color scheme
├── js/
│   ├── app.js          # Main App object (routing, state, navigation)
│   └── modules/
│       ├── search.js   # Full-text search indexer
│       └── glossary.js # Technical term tooltips
├── css/
│   ├── main.css        # Imports all styles
│   ├── variables.css   # CSS custom properties
│   └── components/     # callouts.css, code-blocks.css, sidebar.css
└── sections/           # Content HTML fragments (01-*.html through N-*.html)
```

### Core App Pattern (`js/app.js`)

Single global `App` object manages:
- **Hash-based routing**: `#section-id` triggers `loadSection()`
- **Section loading**: Fetches HTML fragment into `#content-container`
- **Progress tracking**: Per-phase localStorage keys (`antigravity-progress`, `phase2-progress`, etc.)
- **Theme persistence**: `antigravity-theme` in localStorage
- **Post-load enhancements**: PrismJS highlighting, copy buttons, heading IDs, glossary tooltips

### Data Flow

1. `config.json` defines section metadata (id, title, file path, readingTime)
2. User clicks nav → hash change → `App.loadSection(sectionId)`
3. Fetch HTML from `sections/{id}.html`, inject into container
4. Apply enhancements, save progress to localStorage

## Adding Content

### New Section in Existing Phase

1. Create HTML fragment: `{phase}/sections/09-new-topic.html`
2. Add entry to `{phase}/config.json`:
   ```json
   {
     "id": "09-new-topic",
     "title": "9. Nové Téma",
     "file": "sections/09-new-topic.html",
     "readingTime": "3 min"
   }
   ```

### New Phase

1. Copy an existing phase folder structure
2. Update `config.json` with new phase number, color scheme, sections
3. Add link to root `index.html` phase cards
4. Update `App.updatePhaseSwitcher()` in each phase's `app.js`

## Code Standards

### HTML Content Fragments

Use callout classes for styled boxes:
- `callout-tip` (green) - Tips and best practices
- `callout-warning` (amber) - Cautions
- `callout-info` (blue) - Additional information
- `callout-danger` (red) - Critical warnings

Use `.visual-placeholder` class for screenshot/diagram slots awaiting assets.

### CSS

Use CSS custom properties from `variables.css`. Brand colors (PRAUT):
- Primary: `#5B2C9D` (Deep Purple)
- Secondary: `#7C4DFF` (Light Purple)
- Success: `#00C853`
- Danger: `#D50000`
- Warning: `#FFAB00`

### JavaScript

- ES6+ syntax, async/await
- Comments in Czech for this project
- All state managed through the global `App` object

### Commits

Conventional commit format: `<type>: <description>`

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

## Keyboard Shortcuts (in-app)

- `Cmd/Ctrl+K`: Open search modal
- `←/→` or `j/k`: Navigate between sections
- `Escape`: Close modals
