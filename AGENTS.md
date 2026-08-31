# AGENTS.md

## Project overview

This repository contains **Achadinhos do Lar**, a web application
focused on organizing and presenting product recommendations for
different areas of the home.

The application is being developed incrementally, with emphasis on:

- clean architecture;
- maintainable TypeScript;
- SEO;
- accessibility;
- responsive design;
- performance;
- secure integration with external APIs;
- separation between application domain models and external API models.

The project may integrate with the Mercado Livre API, but UI components
must not depend directly on Mercado Livre response formats.

---

## Tech stack

The main technologies are:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Next.js App Router
- ESLint
- npm

Do not introduce a new framework, state-management library, validation
library, UI library, or runtime dependency unless there is a clear
technical reason for it.

Before adding a dependency, explain why the existing stack is not enough.

---

## Project structure

The repository currently follows this general organization:

```text
app/
  Category pages, layouts, metadata and Next.js routes.

components/
  Reusable UI components.

data/
  Local/mock application data.

lib/
  Infrastructure and external integrations.

lib/mercado-livre/
  Mercado Livre-specific integration code.

services/
  Application-level data access and orchestration.

types/
  Internal application/domain types.

public/
  Static assets.