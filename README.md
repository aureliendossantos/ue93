# School project

Built with Astro Starter Kit: Docs Site.

### Commands

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

### Site metadata

`src/config.ts` contains several data objects that describe metadata like title, description, default language, and Open Graph details.

### CSS styling

The theme's look and feel is controlled by a few key variables. You'll find them in the `src/styles/theme.css` CSS file.

### Page metadata

Astro uses frontmatter in Markdown pages to choose layouts and pass properties to those layouts.

```markdown
---
title: Example
description: Cool docs that uses Astro
layout: ../../layouts/MainLayout.astro
---

### Sidebar navigation

The sidebar navigation is controlled by the `SIDEBAR` variable in `src/config.ts`.
```
