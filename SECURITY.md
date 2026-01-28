# Bezpečnostní politika

## Podporované verze

| Verze | Podporována |
| ----- | ----------- |
| 1.x.x | ✅ Ano |
| < 1.0 | ❌ Ne |

## Hlášení bezpečnostních chyb

Bezpečnost našich uživatelů bereme vážně. Pokud jste objevili bezpečnostní chybu, prosíme vás, abyste nám ji nahlásili zodpovědně.

### Jak nahlásit

**⚠️ NEOZNAMUJTE bezpečnostní chyby přes veřejné GitHub Issues.**

Místo toho nám prosím napište na:

📧 **security@praut.cz**

### Co uvést v hlášení

- Typ zranitelnosti (např. XSS, CSRF, injection)
- Plná cesta k postiženému souboru/funkci
- Kroky k reprodukci problému
- Proof-of-concept nebo exploit kód (pokud je možné)
- Dopad zranitelnosti

### Co můžete očekávat

1. **Potvrzení přijetí** - do 48 hodin
2. **Počáteční hodnocení** - do 7 dní
3. **Pravidelné aktualizace** - minimálně každých 14 dní
4. **Oprava** - v závislosti na závažnosti

### Závažnost a časové rámce

| Závažnost | Popis | Cílový čas opravy |
|-----------|-------|-------------------|
| Kritická | Vzdálené spuštění kódu, únik citlivých dat | 24-48 hodin |
| Vysoká | XSS, CSRF s významným dopadem | 7 dní |
| Střední | Informační únik, menší XSS | 30 dní |
| Nízká | Kosmetické problémy, teoretické hrozby | 90 dní |

### Bezpečnostní opatření v projektu

Tento projekt je **statická webová aplikace** bez backendu, což významně omezuje attack surface. Přesto dodržujeme:

- ✅ Sanitizace uživatelských vstupů (vyhledávání)
- ✅ Žádné inline JavaScript event handlery
- ✅ CSP-friendly kód
- ✅ Žádné citlivé data v kódu
- ✅ Pravidelné aktualizace závislostí

### Hall of Fame

Děkujeme všem, kteří nám pomohli zlepšit bezpečnost projektu:

*Zatím prázdné - buďte první!*

---

Děkujeme za pomoc s udržováním bezpečnosti tohoto projektu! 🛡️
