# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Interactive web guide for Google Antigravity IDE, built as a single-page application (SPA) with vanilla JavaScript. The guide runs locally via a simple HTTP server and provides documentation for developers learning the Antigravity platform.

## Running the Project

```bash
# Start local development server (required due to CORS restrictions)
cd antigravity-guide
python3 -m http.server

# Access at http://localhost:8000
```

Alternative: VS Code Live Server extension (right-click `index.html` → "Open with Live Server")

## Architecture

### Application Structure

```
antigravity-guide/
├── index.html          # SPA shell (loads sections dynamically)
├── config.json         # Section definitions and feature flags
├── js/
│   ├── app.js          # Main App object (routing, state, navigation)
│   └── modules/
│       └── search.js   # Full-text search (builds index from all sections)
├── css/
│   ├── main.css        # Imports all styles
│   ├── variables.css   # CSS custom properties (PRAUT brand colors)
│   └── components/     # Modular component styles
└── sections/           # Content HTML fragments (01-intro.html through 12-resources.html)
```

### Core Patterns

**App Object (`js/app.js`)**: Single global `App` object manages:
- Hash-based routing (`#section-id`)
- Section loading via fetch
- Progress tracking in localStorage (`antigravity-progress`)
- Theme persistence (`antigravity-theme`)

**Section Loading**: Content sections are HTML fragments fetched dynamically. New sections must be registered in `config.json`.

**Styling**: Uses CSS custom properties defined in `variables.css`. Supports light/dark themes via `[data-theme="dark"]` selector.

### Key Keyboard Shortcuts

- `Cmd/Ctrl+K`: Search
- `←/→` or `j/k`: Navigate between sections
- `Escape`: Close search modal

## Content Guidelines

- Sections use callout classes: `callout-tip`, `callout-warning`, `callout-info`, `callout-danger`
- Code blocks use PrismJS for syntax highlighting (loaded from CDN)
- Visual placeholders use `.visual-placeholder` class for screenshot/diagram slots
- All content is in Czech language

## Adding New Sections

1. Create HTML fragment in `sections/` (e.g., `13-new-topic.html`)
2. Add entry to `config.json` sections array:
   ```json
   {
     "id": "13-new-topic",
     "title": "13. Nový Téma",
     "file": "sections/13-new-topic.html"
   }
   ```

## Brand Colors (PRAUT)

- Primary: `#5B2C9D` (Deep Purple)
- Secondary: `#7C4DFF` (Light Purple)
- Success: `#00C853` (Green)
- Danger: `#D50000` (Red)
- Warning: `#FFAB00` (Amber)
