# 🤝 Jak přispívat do projektu

Děkujeme za váš zájem přispět do projektu **Antigravity Guide**! Každý příspěvek je cenný a pomáhá zlepšovat vzdělávací materiály pro učitele a vývojáře.

## 📋 Obsah

- [Kodex chování](#-kodex-chování)
- [Jak mohu přispět?](#-jak-mohu-přispět)
- [Vývojové prostředí](#-vývojové-prostředí)
- [Standardy kódu](#-standardy-kódu)
- [Proces přispívání](#-proces-přispívání)
- [Hlášení chyb](#-hlášení-chyb)
- [Návrhy funkcí](#-návrhy-funkcí)

---

## 📜 Kodex chování

Tento projekt a všichni jeho účastníci se řídí naším [Kodexem chování](CODE_OF_CONDUCT.md). Účastí na tomto projektu souhlasíte s dodržováním těchto pravidel.

---

## 🎯 Jak mohu přispět?

### 📝 Obsah a dokumentace

- Opravy překlepů a gramatických chyb
- Vylepšení existujících sekcí
- Přidání nových příkladů a use cases
- Aktualizace screenshotů
- Překlad do dalších jazyků

### 💻 Kód

- Opravy bugů
- Nové funkce (po schválení v issue)
- Vylepšení výkonu
- Refaktoring
- Testy

### 🎨 Design

- Vylepšení UI/UX
- Nové ikony a grafika
- Responzivní úpravy
- Accessibility vylepšení

### 📚 Komunita

- Odpovídání na issues
- Pomoc novým přispěvatelům
- Sdílení projektu

---

## 🛠️ Vývojové prostředí

### Požadavky

- Git
- Python 3.x (pro lokální server)
- Moderní webový prohlížeč
- Editor kódu (doporučeno: VS Code)

### Nastavení

```bash
# 1. Forkněte repozitář na GitHubu

# 2. Klonujte váš fork
git clone https://github.com/VAŠE-JMÉNO/ProgramProUcitele.git
cd ProgramProUcitele

# 3. Přidejte upstream remote
git remote add upstream https://github.com/EmperorKunDis/ProgramProUcitele.git

# 4. Spusťte lokální server
cd WebApp_Guide
python3 -m http.server 8000

# 5. Otevřete v prohlížeči
# http://localhost:8000
```

### Doporučená VS Code rozšíření

- Live Server
- Prettier
- ESLint
- HTML CSS Support
- Czech Language Pack

---

## 📐 Standardy kódu

### HTML

```html
<!-- ✅ Správně -->
<div class="callout callout-tip">
  <span class="callout-icon">💡</span>
  <div class="callout-content">
    <strong>Tip:</strong> Užitečná rada
  </div>
</div>

<!-- ❌ Špatně -->
<div class=callout-tip>
<strong>Tip:</strong> Užitečná rada
</div>
```

- Používejte 2 mezery pro odsazení
- Všechny atributy v uvozovkách
- Sémantické HTML elementy
- BEM metodologie pro CSS třídy

### CSS

```css
/* ✅ Správně - používejte CSS proměnné */
.button-primary {
  background-color: var(--color-primary);
  padding: var(--spacing-md);
}

/* ❌ Špatně - hardcoded hodnoty */
.button-primary {
  background-color: #5B2C9D;
  padding: 16px;
}
```

- Používejte CSS custom properties z `variables.css`
- Mobile-first přístup
- Komentujte složitější bloky

### JavaScript

```javascript
// ✅ Správně
const App = {
  async loadSection(sectionId) {
    try {
      const response = await fetch(`sections/${sectionId}.html`);
      // ...
    } catch (error) {
      console.error('Chyba při načítání sekce:', error);
    }
  }
};

// ❌ Špatně
function loadSection(id) {
  fetch('sections/' + id + '.html').then(function(r) {
    // ...
  })
}
```

- ES6+ syntaxe
- Async/await místo .then()
- Popisné názvy funkcí a proměnných
- Komentáře v češtině pro tento projekt

### Commit zprávy

Používáme konvenční formát commit zpráv:

```
<typ>: <popis>

[volitelné tělo]

[volitelná patička]
```

**Typy:**

| Typ | Popis |
|-----|-------|
| `feat` | Nová funkce |
| `fix` | Oprava bugu |
| `docs` | Změny dokumentace |
| `style` | Formátování (žádná změna logiky) |
| `refactor` | Refaktoring kódu |
| `test` | Přidání testů |
| `chore` | Údržba |

**Příklady:**
```bash
feat: přidání dark mode přepínače
fix: oprava navigace na mobilech
docs: aktualizace instalačních instrukcí
style: sjednocení odsazení v CSS
```

---

## 🔄 Proces přispívání

### 1. Najděte nebo vytvořte Issue

- Zkontrolujte existující issues
- Pro nové funkce nejdříve vytvořte issue k diskuzi
- Počkejte na schválení před větší prací

### 2. Vytvořte branch

```bash
# Aktualizujte main branch
git checkout main
git pull upstream main

# Vytvořte nový branch
git checkout -b typ/popis-zmeny

# Příklady:
git checkout -b feat/video-tutorialy
git checkout -b fix/mobile-menu
git checkout -b docs/aktualizace-readme
```

### 3. Proveďte změny

- Držte se standardů kódu
- Testujte ve více prohlížečích
- Aktualizujte dokumentaci pokud je potřeba

### 4. Commitněte

```bash
git add .
git commit -m "feat: popis vaší změny"
```

### 5. Pushněte a vytvořte PR

```bash
git push origin nazev-vaseho-branche
```

Pak na GitHubu:
1. Klikněte na "Compare & pull request"
2. Vyplňte popis změn
3. Přiřaďte reviewery
4. Počkejte na review

### 6. Code Review

- Odpovídejte na komentáře
- Provádějte požadované změny
- Buďte trpěliví a profesionální

---

## 🐛 Hlášení chyb

### Než nahlásíte bug

1. Zkontrolujte [existující issues](https://github.com/EmperorKunDis/ProgramProUcitele/issues)
2. Ověřte, že používáte nejnovější verzi
3. Vyzkoušejte v jiném prohlížeči

### Jak nahlásit bug

Použijte [Bug Report šablonu](.github/ISSUE_TEMPLATE/bug_report.md) a uveďte:

- **Popis:** Jasný popis problému
- **Kroky k reprodukci:** Jak bug vyvolat
- **Očekávané chování:** Co by se mělo stát
- **Skutečné chování:** Co se děje
- **Prostředí:** Prohlížeč, OS, verze
- **Screenshoty:** Pokud je to relevantní

---

## 💡 Návrhy funkcí

### Než navrhnete funkci

1. Zkontrolujte [roadmapu](README.md#-roadmapa)
2. Hledejte podobné návrhy v issues
3. Zvažte, zda funkce zapadá do projektu

### Jak navrhnout funkci

Použijte [Feature Request šablonu](.github/ISSUE_TEMPLATE/feature_request.md) a uveďte:

- **Problém:** Jaký problém řeší?
- **Řešení:** Jak by funkce fungovala?
- **Alternativy:** Zvažovali jste jiná řešení?
- **Kontext:** Další relevantní informace

---

## 🏷️ Labels

| Label | Popis |
|-------|-------|
| `bug` | Něco nefunguje správně |
| `feature` | Nová funkce nebo vylepšení |
| `docs` | Změny dokumentace |
| `good first issue` | Vhodné pro začátečníky |
| `help wanted` | Potřebujeme pomoc |
| `question` | Dotaz nebo diskuze |
| `wontfix` | Nebude opraveno/implementováno |

---

## 🎉 Recognition

Všichni přispěvatelé budou uvedeni v:
- [README.md](README.md) sekce Poděkování
- [CONTRIBUTORS.md](CONTRIBUTORS.md)

---

## ❓ Otázky?

- Vytvořte issue s labelem `question`
- Kontaktujte nás na [info@praut.cz](mailto:info@praut.cz)

---

Děkujeme za váš příspěvek! 🙏
