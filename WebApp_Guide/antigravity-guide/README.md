# Google Antigravity Interactive Guide

A local, offline-capable interactive guide for the Google Antigravity IDE.

## 🚀 Getting Started

Due to browser security restrictions (CORS) regarding `file://` protocol, this guide requires a simple local server to load content sections dynamically.

### Option 1: Python (Recommended)

If you have Python installed (Mac comes with it):

1. Open Terminal in this folder.
2. Run:

   ```bash
   python3 -m http.server
   ```

3. Open [http://localhost:8000](http://localhost:8000)

### Option 2: VS Code Live Server

If you use VS Code:

1. Right-click `index.html`.
2. Select "Open with Live Server".

### Option 3: Firefox

Firefox allows `file://` XHR requests by default in some versions, so you might be able to just open `index.html`. Chrome/Safari/Edge will likely block the content loading.

## 🛠 Features

- **Progress Tracking**: Remembers where you left off.
- **Full-Text Search**: Press `Cmd+K` / `Ctrl+K`.
- **Keyboard Navigation**: Use Left/Right arrows or vim-style `j`/`k`.
- **Theme Support**: Auto-detects system prefs, toggleable UI.

## 📁 Structure

- `index.html`: Main SPA shell.
- `sections/`: Content HTML fragments.
- `css/`: Styling (Google Palette).
- `js/`: Application logic (Vanilla JS).

## 📄 License

Proprietary guide for Google Antigravity.
