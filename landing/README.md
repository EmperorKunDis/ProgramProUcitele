# 🎓 Landing Page - Registrace učitelů

Moderní registrační stránka pro učitele, kteří se chtějí připojit ke komunitě Program Pro Učitele.

## 🌐 Live

**[https://emperorkundis.github.io/ProgramProUcitele/landing/](https://emperorkundis.github.io/ProgramProUcitele/landing/)**

## ✨ Funkce

- **Intro animace** — AI brain SVG s gradient efekty a smooth fade-out
- **Registrační formulář** — Příjmení, škola, město, rok narození, předměty
- **Discord integrace** — Automatické přesměrování po registraci
- **Dark mode** — Moderní tmavý design s purple/cyan gradienty
- **Responzivní** — Funguje na mobilu i desktopu
- **Session storage** — Intro animace se zobrazí jen jednou per session

## 📁 Struktura

```
landing/
├── index.html    # Hlavní HTML (intro overlay + formulář + modal)
├── styles.css    # Všechny styly (animace, komponenty, responzivita)
├── app.js        # JavaScript (form handling, intro logic)
└── README.md     # Tento soubor
```

## 🔧 Konfigurace

V `app.js` můžete upravit:

```javascript
const CONFIG = {
    discordInvite: 'https://discord.gg/RDt5HvP9',  // Discord server link
    introDuration: 3600,                            // Délka intro animace (ms)
    redirectDelay: 2500                             // Delay před redirectem (ms)
};
```

## 🔌 Webhook (TODO)

Registrace se zatím ukládají do `localStorage`. Pro produkční nasazení:

1. Vytvořte backend endpoint nebo použijte webhook (Google Sheets, Discord, Make/Zapier)
2. Odkomentujte a upravte fetch v `app.js`:

```javascript
fetch('YOUR_WEBHOOK_URL', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
});
```

## 🎨 Design

- **Primary:** `#8B5CF6` (fialová)
- **Secondary:** `#06B6D4` (cyan)
- **Accent:** `#10B981` (zelená)
- **Background:** `#0F0F23` (tmavě modrá)
