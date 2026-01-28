# 🎮 Discord Server Setup - Antigravity Guide

Kompletní návod pro nastavení Discord komunity pro projekt **Antigravity Guide** a **Praut s.r.o.**

---

## 📋 Základní informace serveru

### Server Settings
- **Název:** Antigravity Guide | Praut.cz
- **Ikona:** Logo Antigravity (Antig.png)
- **Banner:** PRAUT gradient (fialová #5B2C9D → #7C4DFF)
- **Verification Level:** Medium (musí být registrovaný 5+ minut)
- **Default Notification:** Only @mentions
- **Explicit Content Filter:** Scan messages from all members

### Server Description
```
🚀 Oficiální komunita pro Antigravity Guide - interaktivní průvodce Google Antigravity IDE pro učitele.

📚 Sdílíme zkušenosti, tipy a triky pro AI-assisted výuku
🤝 Propojujeme učitele z celé ČR
💡 Diskutujeme o moderních technologiích ve vzdělávání

🔗 Web: https://emperorkundis.github.io/ProgramProUcitele/WebApp_Guide/
🔗 GitHub: https://github.com/EmperorKunDis/ProgramProUcitele
```

---

## 🎨 Role (od nejvyšší po nejnižší)

### 👑 Administrace
| Role | Barva | Permissions | Popis |
|------|-------|-------------|-------|
| `🔮 Zakladatel` | #5B2C9D | Administrator | Vlastník serveru |
| `⚡ Admin` | #7C4DFF | Manage Server, Channels, Roles, Messages | Správci |
| `🛡️ Moderátor` | #00C853 | Kick, Ban, Manage Messages, Mute | Moderace |

### 🏫 Učitelé (ověření)
| Role | Barva | Popis |
|------|-------|-------|
| `👨‍🏫 Učitel` | #3498db | Ověřený učitel |
| `🎓 Mentor` | #e74c3c | Zkušený učitel, pomáhá ostatním |
| `📚 Přispěvatel` | #f39c12 | Přispěl do projektu na GitHubu |

### 📖 Předměty (self-assign)
| Role | Emoji | Barva |
|------|-------|-------|
| `Informatika` | 💻 | #2ecc71 |
| `Matematika` | 📐 | #3498db |
| `Fyzika` | ⚛️ | #9b59b6 |
| `Chemie` | 🧪 | #e67e22 |
| `Jazyky` | 🌍 | #1abc9c |
| `Přírodověda` | 🌿 | #27ae60 |
| `Humanitní` | 📜 | #c0392b |

### 🎯 Úroveň zapojení
| Role | Popis |
|------|-------|
| `🌱 Nováček` | Právě se připojil |
| `🌿 Aktivní` | Pravidelně přispívá |
| `🌳 Veterán` | Dlouhodobý člen |
| `⭐ VIP` | Výjimečný přínos komunitě |

### 🔔 Notifikace (self-assign)
| Role | Popis |
|------|-------|
| `📢 Novinky` | Oznámení o updatech |
| `🎉 Eventy` | Pozvánky na webináře/meetupy |
| `🐛 Beta Tester` | Testování nových funkcí |

---

## 📁 Struktura kanálů

### 📌 INFORMACE
```
├── 📜│pravidla
├── 👋│vitejte
├── 📢│oznameni
├── 📋│changelog
└── 🎭│role-menu
```

### 💬 KOMUNITA
```
├── 💬│hlavni-chat
├── 🎉│predstavte-se
├── 💡│napady-a-feedback
├── 🖼️│galerie
└── 🎲│offtopic
```

### 📚 ANTIGRAVITY GUIDE
```
├── ❓│dotazy-zakladni
├── 🔧│dotazy-pokrocile
├── 📖│tipy-a-triky
├── 🐛│hlaseni-chyb
└── ✨│feature-requesty
```

### 🏫 VÝUKA
```
├── 📝│materialy-a-zdroje
├── 🎓│zkusenosti-z-vyuky
├── 💼│priprava-hodin
├── 🤖│ai-ve-vyuce
└── 📊│hodnoceni-a-zpetna-vazba
```

### 👨‍💻 VÝVOJ
```
├── 💻│github-updates (webhook)
├── 🔨│contributors
├── 📋│roadmap
└── 🧪│beta-testing
```

### 🎙️ VOICE
```
├── 🎤│Hlavní místnost
├── 📚│Studovna (quiet)
├── 🤝│Mentoring 1
└── 🤝│Mentoring 2
```

### 🎫 PODPORA
```
├── 🎫│vytvorit-ticket
└── 📨│kontakt-praut
```

---

## 📜 Pravidla serveru

```markdown
# 📜 Pravidla komunity Antigravity Guide

Vítejte v naší komunitě! Abychom udrželi příjemné prostředí pro všechny, dodržujte prosím následující pravidla:

## 🤝 Základní pravidla

1. **Respektujte ostatní** - Jsme komunita učitelů. Chovejte se profesionálně a s respektem.

2. **Žádný spam** - Neposílejte opakované zprávy, reklamy nebo nevyžádaný obsah.

3. **Správné kanály** - Používejte kanály k jejich určenému účelu.

4. **Bez NSFW obsahu** - Server je určen pro profesionální diskuzi.

5. **Žádná diskriminace** - Netolerujeme rasismus, sexismus ani jiné formy diskriminace.

6. **Ochrana soukromí** - Nesdílejte osobní údaje jiných bez jejich souhlasu.

7. **Bez pirátství** - Nesdílejte nelegální obsah nebo warez.

## 💡 Tipy pro lepší zážitek

- Představte se v #predstavte-se
- Vyberte si role v #role-menu
- Před položením dotazu zkuste vyhledat odpověď
- Pomáhejte ostatním - karma se vrací! 😊

## ⚠️ Důsledky porušení

1. ⚡ Varování
2. 🔇 Mute (1-24h)
3. 👢 Kick
4. 🔨 Ban

---

*Připojením na server souhlasíte s těmito pravidly.*
*Pravidla mohou být kdykoliv aktualizována.*

Máte dotaz? Kontaktujte @Moderátor nebo @Admin
```

---

## 🤖 Doporučení boti

### 1. **Carl-bot** (Moderace + Role menu)
- **Invite:** https://carl.gg/
- **Použití:**
  - Reaction roles (self-assign předměty, notifikace)
  - Auto-moderace (spam, links, caps)
  - Welcome messages
  - Logging

**Nastavení reaction roles:**
```
/reactionrole make

Emoji: 💻 → Role: Informatika
Emoji: 📐 → Role: Matematika
Emoji: ⚛️ → Role: Fyzika
... atd.
```

### 2. **MEE6** nebo **Tatsu** (Leveling)
- **Použití:**
  - XP systém za aktivitu
  - Automatické role podle úrovně
  - Leaderboard

**Doporučené úrovně:**
```
Level 5  → 🌿 Aktivní
Level 15 → 🌳 Veterán
Level 30 → ⭐ VIP
```

### 3. **GitHub Bot** (Webhooks)
- **Nastavení:** Repository → Settings → Webhooks
- **URL:** Discord webhook URL pro #github-updates
- **Events:** Push, Pull Request, Issues, Releases

### 4. **Ticket Tool** nebo **Ticket Bot**
- **Použití:** Support systém
- **Nastavení:**
  - Kategorie: Technický problém, Dotaz k obsahu, Jiné
  - Auto-transcript po zavření

### 5. **Statbot** (Analytika)
- **Použití:** Statistiky serveru
- Aktivita členů, růst, engagement

---

## 👋 Welcome Message (Carl-bot)

```
👋 Vítej na serveru **Antigravity Guide**, {user}!

🚀 Jsme komunita učitelů, kteří objevují možnosti **Google Antigravity IDE** a AI ve výuce.

**📌 První kroky:**
1️⃣ Přečti si pravidla v <#pravidla>
2️⃣ Vyber si role v <#role-menu>
3️⃣ Představ se v <#predstavte-se>

**🔗 Užitečné odkazy:**
• [Live Demo](https://emperorkundis.github.io/ProgramProUcitele/WebApp_Guide/)
• [GitHub](https://github.com/EmperorKunDis/ProgramProUcitele)
• [Praut.cz](https://praut.cz)

Máš dotaz? Neváhej se zeptat v <#hlavni-chat>! 💬

*— Tým Antigravity Guide*
```

---

## 🎭 Role Menu Embed (Carl-bot)

```
**🎭 Vyber si své role**

Klikni na reakci pro přidání/odebrání role.

**📚 Předměty které učíš:**
💻 Informatika
📐 Matematika
⚛️ Fyzika
🧪 Chemie
🌍 Jazyky
🌿 Přírodověda
📜 Humanitní vědy

**🔔 Notifikace:**
📢 Novinky a updaty
🎉 Eventy a webináře
🐛 Beta testing

**💼 Status:**
👨‍🏫 Jsem učitel/ka
🎓 Chci mentorovat ostatní
```

---

## 📊 Doporučená nastavení kanálů

### #pravidla
- Slowmode: None
- Permissions: Read only (everyone)

### #oznameni
- Slowmode: None
- Permissions: Read only, @Novinky mention

### #hlavni-chat
- Slowmode: 5s (proti spamu)
- Permissions: Send messages

### #github-updates
- Slowmode: None
- Permissions: Read only + Webhook

### Voice kanály
- User limit: 10-15
- Studovna: Muted by default

---

## 🔗 Integrace

### GitHub Webhook
1. Jdi na GitHub repo → Settings → Webhooks
2. Add webhook
3. Payload URL: `https://discord.com/api/webhooks/...` (z #github-updates)
4. Content type: `application/json`
5. Events: Push, PR, Issues, Releases

### Invite Link
```
https://discord.gg/RDt5HvP9
```
**Nastavení:**
- Max uses: Unlimited
- Expiration: Never
- Temporary membership: No

---

## 📈 Růstová strategie

### Fáze 1: Launch (1-50 členů)
- [ ] Pozvat beta testery
- [ ] Nastavit základní strukturu
- [ ] Otestovat boty
- [ ] Vytvořit welcome flow

### Fáze 2: Růst (50-200 členů)
- [ ] Přidat link na GitHub README
- [ ] Propagace v učitelských skupinách
- [ ] První webinář/event
- [ ] Mentoring program

### Fáze 3: Komunita (200+ členů)
- [ ] Pravidelné eventy
- [ ] Partnerships s dalšími projekty
- [ ] Community spotlight
- [ ] Feedback loop s vývojem

---

## ✅ Checklist před spuštěním

- [ ] Server vytvořen s správným názvem a ikonou
- [ ] Všechny role nastaveny s barvami a permissions
- [ ] Všechny kanály vytvořeny
- [ ] Carl-bot přidán a nakonfigurován
- [ ] Reaction roles fungují
- [ ] Welcome message nastavena
- [ ] GitHub webhook připojen
- [ ] Pravidla napsána
- [ ] Invite link vygenerován
- [ ] První členové pozváni

---

## 📞 Kontakt pro pomoc

Pokud potřebuješ pomoct s nastavením:
- **Email:** info@praut.cz
- **Web:** https://praut.cz

---

*Tento dokument je součástí projektu Antigravity Guide*
*© 2026 Praut s.r.o.*
