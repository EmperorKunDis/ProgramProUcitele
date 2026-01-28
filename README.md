<p align="center">
  <img src="WebApp_Guide/Antig.png" alt="Antigravity Guide Logo" width="200">
</p>

<h1 align="center">🚀 Antigravity Guide</h1>

<p align="center">
  <strong>Interaktivní webová učebnice pro Google Antigravity IDE</strong><br>
  Od nuly k Power Userovi ve 4 fázích
</p>

<p align="center">
  <a href="https://emperorkundis.github.io/ProgramProUcitele/landing/">🎓 Registrace učitelů</a> •
  <a href="https://emperorkundis.github.io/ProgramProUcitele/WebApp_Guide/">🌐 Live Demo</a> •
  <a href="#-quick-start">Quick Start</a> •
  <a href="#-funkce">Funkce</a> •
  <a href="#-struktura-projektu">Struktura</a> •
  <a href="#-přispívání">Přispívání</a> •
  <a href="#-licence">Licence</a>
</p>

<p align="center">
  <a href="https://emperorkundis.github.io/ProgramProUcitele/landing/">
    <img src="https://img.shields.io/badge/🎓_Registrace_učitelů-Připojte_se!-8B5CF6?style=for-the-badge" alt="Registrace učitelů">
  </a>
  <a href="https://emperorkundis.github.io/ProgramProUcitele/WebApp_Guide/">
    <img src="https://img.shields.io/badge/🌐_Live_Demo-GitHub_Pages-2ea44f?style=for-the-badge" alt="Live Demo">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/verze-1.0.0-blue.svg" alt="Verze">
  <img src="https://img.shields.io/badge/jazyk-čeština-green.svg" alt="Jazyk">
  <img src="https://img.shields.io/badge/licence-MIT-yellow.svg" alt="Licence">
  <img src="https://img.shields.io/badge/status-aktivní-brightgreen.svg" alt="Status">
  <img src="https://img.shields.io/badge/PRs-vítány-orange.svg" alt="PRs Welcome">
</p>

---

## 📖 O projektu

**Antigravity Guide** je komplexní interaktivní webová učebnice navržená pro učitele a vývojáře, kteří chtějí efektivně využívat **Google Antigravity IDE** - revoluční AI-powered vývojovou platformu od Google.

Projekt vznikl s cílem **maximálně zjednodušit práci učitelům** při zavádění moderních AI nástrojů do výuky, aby měli více času věnovat se samotným studentům.

> 🌐 **[Vyzkoušejte Live Demo →](https://emperorkundis.github.io/ProgramProUcitele/WebApp_Guide/)**

> 🎓 **[Registrace pro učitele →](https://emperorkundis.github.io/ProgramProUcitele/landing/)** — Připojte se ke komunitě pedagogů využívajících AI!

### 🎯 Pro koho je tento průvodce?

- **Učitelé informatiky** - Kompletní materiál pro výuku AI-assisted development
- **Začínající vývojáři** - Step-by-step průvodce od instalace po pokročilé funkce
- **Zkušení programátoři** - Rychlý přechod z Cursor/Windsurf/Copilot
- **Tech leads** - Pochopení potenciálu pro týmy

---

## ⚡ Quick Start

### Online verze (doporučeno)

Nejrychlejší způsob je použít online verzi:

**👉 [https://emperorkundis.github.io/ProgramProUcitele/WebApp_Guide/](https://emperorkundis.github.io/ProgramProUcitele/WebApp_Guide/)**

### Lokální instalace

#### Požadavky

- Webový prohlížeč (Chrome, Firefox, Safari, Edge)
- Python 3.x (pro lokální server) nebo VS Code s Live Server

#### Spuštění

```bash
# Klonování repozitáře
git clone https://github.com/EmperorKunDis/ProgramProUcitele.git
cd ProgramProUcitele/WebApp_Guide

# Spuštění lokálního serveru
python3 -m http.server 8000

# Otevřete v prohlížeči
# http://localhost:8000
```

**Alternativně:** Otevřete `index.html` pomocí VS Code Live Server extension.

---

## ✨ Funkce

### 📚 4 Progresivní fáze učení

| Fáze | Název | Sekcí | Popis |
|------|-------|-------|-------|
| 🟢 | **Základy** | 12 | Instalace, první kroky, základní koncepty |
| 🔵 | **Navigace & Data** | 8 | Efektivní práce s editorem a daty |
| 🟣 | **Pro Workflow** | 8 | Pokročilé techniky a automatizace |
| 🔴 | **God Mode** | 8 | Multi-agent orchestrace, custom workflows |

### 🛠️ Technické funkce

- **🔍 Fulltext vyhledávání** - Rychlé hledání v celém obsahu (Cmd/Ctrl+K)
- **🌓 Dark/Light mode** - Automatické ukládání preference
- **📊 Progress tracking** - Sledování postupu v každé fázi
- **⌨️ Keyboard navigace** - Plná podpora klávesových zkratek
- **📱 Responzivní design** - Tablet a Desktop (1024px+)
- **💾 Offline podpora** - Funguje po prvním načtení
- **📋 Copy-to-clipboard** - Jedním klikem zkopírujte kód

### ⌨️ Klávesové zkratky

| Zkratka | Akce |
|---------|------|
| `Cmd/Ctrl + K` | Otevřít vyhledávání |
| `←` / `→` | Předchozí / Další sekce |
| `J` / `K` | Alternativní navigace |
| `Escape` | Zavřít modální okno |

---

## 📁 Struktura projektu

```
landing/                        # 🎓 Registrace učitelů
├── 📄 index.html              # Landing page s animací
├── 📄 styles.css              # Styly (dark mode, gradienty)
└── 📄 app.js                  # Formulář a Discord redirect

WebApp_Guide/
├── 📄 index.html              # Landing page s roadmapou
├── 📄 PRD.md                  # Product Requirements Document
├── 📄 CLAUDE.md               # Instrukce pro AI asistenta
│
├── 📁 antigravity-guide/      # Fáze 1: Základy (12 sekcí)
│   ├── index.html
│   ├── config.json
│   ├── js/
│   │   ├── app.js
│   │   └── modules/
│   ├── css/
│   └── sections/
│
├── 📁 phase2-navigation/      # Fáze 2: Navigace (8 sekcí)
├── 📁 phase3-pro-workflow/    # Fáze 3: Pro Workflow (8 sekcí)
├── 📁 phase4-god-mode/        # Fáze 4: God Mode (8 sekcí)
│
├── 📁 PromptLibrary/          # Knihovna promptů
└── 📁 assets/                 # Obrázky, ikony, videa
```

### Architektura každé fáze

```
{phase}/
├── index.html          # SPA shell
├── config.json         # Definice sekcí a metadata
├── js/
│   ├── app.js          # Hlavní aplikační logika
│   └── modules/
│       ├── search.js   # Fulltext vyhledávání
│       └── glossary.js # Slovník pojmů
├── css/
│   ├── main.css        # Hlavní styly
│   ├── variables.css   # CSS proměnné (PRAUT barvy)
│   └── components/     # Komponentové styly
└── sections/           # HTML fragmenty obsahu
```

---

## 🎨 Design System

### Barevná paleta (PRAUT Brand)

| Barva | Hex | Použití |
|-------|-----|---------|
| 🟣 Primary | `#5B2C9D` | Hlavní akcenty |
| 🟪 Secondary | `#7C4DFF` | Sekundární prvky |
| 🟢 Success | `#00C853` | Úspěch, tipy |
| 🔴 Danger | `#D50000` | Varování, chyby |
| 🟡 Warning | `#FFAB00` | Upozornění |

### Callout komponenty

```html
<!-- Tip -->
<div class="callout callout-tip">
  <span class="callout-icon">💡</span>
  <div class="callout-content">
    <strong>Tip:</strong> Užitečná rada...
  </div>
</div>

<!-- Warning -->
<div class="callout callout-warning">⚠️ Pozor na...</div>

<!-- Info -->
<div class="callout callout-info">ℹ️ Informace...</div>

<!-- Danger -->
<div class="callout callout-danger">❌ Kritické varování...</div>
```

---

## 🔧 Vývoj

### Přidání nové sekce

1. Vytvořte HTML fragment v `{phase}/sections/`:
   ```bash
   touch phase2-navigation/sections/09-nova-sekce.html
   ```

2. Přidejte záznam do `config.json`:
   ```json
   {
     "id": "09-nova-sekce",
     "title": "9. Nová Sekce",
     "file": "sections/09-nova-sekce.html",
     "readingTime": "5 min"
   }
   ```

### Přidání nové fáze

1. Zkopírujte existující strukturu fáze
2. Aktualizujte `config.json` s novým číslem fáze
3. Přidejte odkaz na root `index.html`
4. Aktualizujte `App.updatePhaseSwitcher()` v každé fázi

### Testování

```bash
# Spuštění dev serveru
python3 -m http.server 8000

# Otevřete jednotlivé fáze
# http://localhost:8000/antigravity-guide/
# http://localhost:8000/phase2-navigation/
# http://localhost:8000/phase3-pro-workflow/
# http://localhost:8000/phase4-god-mode/
```

---

## 🤝 Přispívání

Příspěvky jsou vítány! Přečtěte si prosím [CONTRIBUTING.md](CONTRIBUTING.md) pro detaily.

### Rychlý přehled

1. Forkněte repozitář
2. Vytvořte feature branch (`git checkout -b feature/nova-funkce`)
3. Commitněte změny (`git commit -m 'Přidání nové funkce'`)
4. Pushněte branch (`git push origin feature/nova-funkce`)
5. Otevřete Pull Request

---

## 📋 Roadmapa

- [x] Fáze 1: Základy (12 sekcí)
- [x] Fáze 2: Navigace & Data (8 sekcí)
- [x] Fáze 3: Pro Workflow (8 sekcí)
- [x] Fáze 4: God Mode (8 sekcí)
- [x] Landing page s vizualizacemi
- [x] 🎓 **Registrační stránka pro učitele** (s intro animací)
- [ ] Video tutoriály
- [ ] Interaktivní playground
- [ ] Quiz / Knowledge check
- [ ] Lokalizace EN/DE
- [ ] PWA podpora

---

## 📚 Dokumentace

| Dokument | Popis |
|----------|-------|
| [PRD.md](WebApp_Guide/PRD.md) | Product Requirements Document |
| [CLAUDE.md](WebApp_Guide/CLAUDE.md) | Instrukce pro AI asistenty |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Návod pro přispěvatele |
| [CHANGELOG.md](CHANGELOG.md) | Historie změn |

---

## 🔗 Užitečné odkazy

- 🎓 [**Registrace pro učitele**](https://emperorkundis.github.io/ProgramProUcitele/landing/) — Připojte se ke komunitě!
- 🌐 [**Live Demo**](https://emperorkundis.github.io/ProgramProUcitele/WebApp_Guide/)
- [Google Antigravity - Oficiální dokumentace](https://antigravity.google/docs)
- [Google Antigravity - Download](https://antigravity.google/download)
- [Google Antigravity - Changelog](https://antigravity.google/changelog)
- [Praut s.r.o.](https://praut.cz) - Autor projektu

---

## 📄 Licence

Tento projekt je licencován pod **MIT License** - viz [LICENSE](LICENSE) soubor.

---

## 👏 Poděkování

- **Google** - Za vytvoření Antigravity IDE
- **Praut s.r.o.** - Za vývoj této učebnice
- **Všichni přispěvatelé** - Za pomoc s rozvojem projektu

---

<p align="center">
  Vytvořeno s ❤️ v České republice<br>
  Made by <a href="https://www.linkedin.com/in/martin-svanda-b8491a264/">Martin Švanda</a> from <a href="https://praut.cz">Praut s.r.o.</a> © 2026
</p>
