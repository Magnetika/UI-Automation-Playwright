# UI-Automation-Playwright

## Description
This repository contains a Playwright-based UI automation test framework for the Conduit demo site (`https://demo.learnwebdriverio.com/`).

## Requirements
- Node.js 18+ (recommended)
- Playwright installed (`npm install`)

## Setup
1. `npm install`
2. `npx playwright install` (install browsers)

## Run tests
- `npm test` or `npm run test`
- to view HTML report after run:
  - `npx playwright show-report`

## Project structure
- `playwright.config.ts` - Playwright configuration
- `tests/conduit.spec.ts` - test cases

## Test flow
1. Verify home page loads and global feed is visible.
2. Verify failed login shows an error message.
3. Verify popular tags are visible in the sidebar.

## Improvement ideas
- Add `baseURL` in `playwright.config.ts` for using relative URLs.
- Split page elements into locators/page objects for better scalability.
