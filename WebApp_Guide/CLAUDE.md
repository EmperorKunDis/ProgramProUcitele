# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Multi-phase interactive web learning platform for Google Antigravity IDE, built as a collection of vanilla JavaScript SPAs. The platform guides users from beginner to "Power User" through 4 progressive learning phases (36 total sections). All content is in Czech.

## Running the Project

```bash
# Start local development server (required due to CORS restrictions on fetch)
python3 -m http.server

# Access landing page at http://localhost:8000
# Or directly access phases: http://localhost:8000/antigravity-guide/
```

Alternative: VS Code Live Server extension (right-click `index.html` → "Open with Live Server")

## Architecture

### Multi-Phase Structure

```
WebApp_Guide/
├── index.html                 # Landing page with roadmap and Chart.js visualizations
├── antigravity-guide/         # Phase 1: Basics (12 sections)
├── phase2-navigation/         # Phase 2: Navigation & Data (8 sections)
├── phase3-pro-workflow/       # Phase 3: Pro Workflow (8 sections)
└── phase4-god-mode/           # Phase 4: God Mode (8 sections)
```

Each phase folder shares identical structure:
```
{phase}/
├── index.html          # SPA shell
├── config.json         # Section definitions, feature flags, phase metadata
├── js/
│   ├── app.js          # Main App object (routing, state, navigation)
│   └── modules/
│       ├── search.js   # Full-text search (builds index from all sections)
│       └── glossary.js # Technical term tooltips
├── css/
│   ├── main.css        # Imports all styles
│   ├── variables.css   # CSS custom properties (PRAUT brand colors)
│   └── components/     # Modular component styles
└── sections/           # Content HTML fragments (01-*.html through N-*.html)
```

### Core App Pattern (`js/app.js`)

Single global `App` object manages:
- Hash-based routing (`#section-id`)
- Section loading via fetch into `#content-container`
- Progress tracking per phase in localStorage (`antigravity-progress`, `phase2-progress`, etc.)
- Theme persistence (`antigravity-theme`)
- Onboarding modal for first-time visitors
- Cross-phase progress display in sidebar

### Section Loading Flow

1. `config.json` defines section metadata (id, title, file path, reading time)
2. `App.loadSection()` fetches HTML fragment, injects into container
3. Post-load: PrismJS highlighting, copy buttons, heading IDs, glossary tooltips
4. Progress saved to localStorage, UI updated

### Keyboard Shortcuts

- `Cmd/Ctrl+K`: Open search modal
- `←/→` or `j/k`: Navigate between sections
- `Escape`: Close search modal or mobile menu

## Content Guidelines

### Callout Classes
- `callout-tip` - Tips and best practices (green)
- `callout-warning` - Cautions (amber)
- `callout-info` - Additional information (blue)
- `callout-danger` - Critical warnings (red)

### Code Blocks
PrismJS handles syntax highlighting (loaded from CDN). Copy buttons auto-added via `App.addCopyButtons()`.

### Visual Placeholders
Use `.visual-placeholder` class for screenshot/diagram slots awaiting assets.

## Adding New Content

### New Section in Existing Phase
1. Create HTML fragment in `{phase}/sections/` (e.g., `09-new-topic.html`)
2. Add entry to `{phase}/config.json` sections array:
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
2. Update `config.json` with new phase number, color scheme, and sections
3. Add link to root `index.html` phase cards
4. Add progress key to `App.updatePhaseSwitcher()` in each phase's `app.js`

## Brand Colors (PRAUT)

- Primary: `#5B2C9D` (Deep Purple)
- Secondary: `#7C4DFF` (Light Purple)
- Success: `#00C853` (Green)
- Danger: `#D50000` (Red)
- Warning: `#FFAB00` (Amber)

## Landing Page

Root `index.html` uses Tailwind CSS (CDN) and Chart.js for:
- Radar chart: Skill comparison (beginner vs power user)
- Line chart: Learning curve visualization
- Bar chart: Study time allocation

Links directly to each phase's `index.html`.
