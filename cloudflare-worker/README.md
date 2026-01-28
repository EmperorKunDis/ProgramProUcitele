# Prompt Library Save Worker

Cloudflare Worker pro ukládání změn z Prompt Library přímo na GitHub.

## Nasazení (5 minut)

### 1. Vytvoř Cloudflare účet
Jdi na [workers.cloudflare.com](https://workers.cloudflare.com) a vytvoř si free účet.

### 2. Vytvoř nový Worker
1. Klikni na **"Create a Worker"**
2. Pojmenuj ho: `prompt-save`
3. Vlož obsah souboru `prompt-save-worker.js`
4. Klikni **"Deploy"**

### 3. Nastav Environment Variables
V dashboardu Workeru:
1. Jdi do **Settings → Variables**
2. Přidej:
   - `GITHUB_TOKEN` = tvůj Personal Access Token (s `repo` scope)
   - `ALLOWED_ORIGIN` = `https://emperorkundis.github.io`

### 4. Aktualizuj frontend
V `prompt-library.js` změň endpoint na tvou Worker URL:
```javascript
saveEndpoint: 'https://prompt-save.YOUR-SUBDOMAIN.workers.dev',
```

## Jak získat GitHub Token

1. Jdi na https://github.com/settings/tokens?type=beta
2. Klikni **"Generate new token"** (Fine-grained)
3. Nastav:
   - Token name: `Prompt Library Worker`
   - Repository access: **Only select repositories** → `ProgramProUcitele`
   - Permissions: **Contents** → Read and write
4. Zkopíruj token

## API

```
POST /
Content-Type: application/json

{
  "category": "basics",
  "filename": "example.md",
  "content": "# New content...",
  "author": "John Doe"
}
```

Response:
```json
{
  "success": true,
  "message": "File saved successfully",
  "commit": "abc1234",
  "path": "WebApp_Guide/PromptLibrary/agent-docs/basics/example.md"
}
```

## Bezpečnost

- Token je uložen jako secret v Cloudflare (nikdy se neposílá do frontendu)
- CORS omezuje přístup pouze na tvou doménu
- Input sanitization brání path traversal útokům
