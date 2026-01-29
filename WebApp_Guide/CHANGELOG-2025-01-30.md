# Changelog - Doplnění z Google Codelabs

**Datum:** 30. ledna 2025  
**Zdroj:** [Google Codelabs - Getting Started with Google Antigravity](https://codelabs.developers.google.com/getting-started-google-antigravity)

## Shrnutí

Provedl jsem srovnání Martinova návodu s oficiálními Google Codelabs a doplnil chybějící obsah.

---

## Nové screenshoty

Přidány do `antigravity-guide/assets/images/google-codelabs/`:

| Soubor | Obsah |
|--------|-------|
| `01-intro.png` | Úvodní stránka codelabs |
| `02-installation.png` | Setup Wizard - Security modes |
| `03-agent-manager.png` | Agent Manager - očíslovaný diagram |
| `04-browser.png` | Browser Agent - Chrome extension |
| `05-artifacts.png` | Artifacts panel |
| `07-editor.png` | Editor View layout |
| `09-workflows.png` | Workflows trigger (/generate) |
| `10-skills.png` | Workspace Skills |
| `11-security.png` | Security - Deny List |

---

## Aktualizované sekce

### Phase 1: antigravity-guide

#### 03-installation.html ⭐ MAJOR UPDATE
**Přidáno:**
- Security Modes (Secure, Review-driven, Agent-driven, Custom)
- Terminal Execution Policy
- Review Policy  
- JavaScript Execution Policy
- Keybindings & Extensions setup
- Command Line tool (`agy`)
- Přihlášení k Google

#### 04-first-launch.html
**Přidáno:**
- Editor View layout diagram
- Klávesové zkratky (Ctrl+`, Cmd+L, etc.)
- Extensions z Open VSX

#### 06-agent-manager.html ⭐ MAJOR UPDATE
**Přidáno:**
- Očíslovaný diagram rozhraní (Inbox, Workspaces, Playground, etc.)
- Planning vs. Fast mode detaily
- Model selection dropdown
- @ Mentions a / Workflows syntaxe

#### 07-artifacts.html
**Přidáno:**
- Screenshots jako typ artefaktu
- Browser Recordings (video)
- Code diffs s komentáři (Google Docs style)
- Review Changes button

#### 08-browser-agent.html ⭐ MAJOR UPDATE
**Přidáno:**
- Chrome Extension instalace krok za krokem
- Permissions flow
- URL Allowlist
- JavaScript Execution Policy

#### 10-customization.html ⭐ MAJOR UPDATE
**Přidáno:**
- Workflows sekce (nový obsah!)
  - Vytvoření workflow
  - Frontmatter (name, description)
  - Použití `/workflow` v chatu
  - Vestavěné workflows (/explain, /refactor, /document, /fix)
- Knowledge Base
- .agignore

---

### Phase 3: phase3-pro-workflow

#### 07-agent-config.html
**Přidáno:**
- Deny List (Security blokace)
  - Doporučené příkazy (rm, sudo, curl, wget, etc.)
  - Konfigurace v UI
- Browser URL Allowlist

---

### Phase 4: phase4-god-mode

#### 05-custom-agents.html
**Přidáno:**
- Workspace Skills (nová sekce!)
  - Struktura skill (.agent/skills/)
  - SKILL.md formát
  - Resources folder
  - Příklad: License Header Adder
  - Porovnání Skills vs Custom Agents

---

## Co Google Codelabs obsahuje navíc (neimplementováno)

1. **"Provide Feedback"** sekce - jak posílat feedback Googlu
2. **"Revisit the Inbox"** - detailní popis inbox management
3. **Conclusion sekce** - Next steps a další resources

Tyto sekce jsou specifické pro Google produkt a nejsou relevantní pro Martinův obecný návod.

---

## Doporučení

1. **Přidat video tutoriál** - Codelabs má interaktivní formát, Martin by mohl přidat screencasts
2. **Quiz/Cvičení** - Přidat praktická cvičení na konec každé fáze
3. **Glossary** - Seznam termínů (artifact, workflow, skill, etc.)
