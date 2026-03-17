# UI-Automation-Playwright

## Leírás
Ez a repository egy Playwright alapú UI automatikus tesztvázat tartalmaz a Conduit demo oldalhoz (`https://demo.learnwebdriverio.com/`).

## Követelmények
- Node.js 18+ (ajánlott)
- Playwright telepítve (`npm install`)

## Telepítés
1. `npm install`
2. `npx playwright install` (böngészők telepítéséhez)

## Teszt futtatása
- `npm test` vagy `npm run test`
- ha HTML riportot szeretnél, a terminál kimenet után nyisd meg:
  - `playwright show-report`

## Fájlszerkezet
- `playwright.config.ts` - Playwright konfiguráció
- `tests/conduit.spec.ts` - tesztesetek

## Folyamat
1. Home oldal betöltésének ellenőrzése és a global feed láthatósága.
2. Sikertelen bejelentkezés hibajelzésének ellenőrzése.
3. Népszerű tagek sidebar ellenőrzése.

## Hibajavítási javaslatok
- Adjuk hozzá `baseURL`-t `playwright.config.ts`-ben, hogy relatív URL-eket használhassunk.
- Különítsük el a page-elemek `locators` és `page objects` formájában a skálázhatóságért.
