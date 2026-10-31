# Engineering Portfolio

Personal engineering portfolio built with [Astro](https://docs.astro.build).

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the dev server at `localhost:4321`     |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |
| `npm run check`   | Type-check `.astro` and `.ts` files          |

## Structure

- `src/content/projects/` — one Markdown file per project (see `PROJECT_TEMPLATE.md`).
  Projects with `draft: true` appear in `npm run dev` only.
- `src/pages/` — routes. `projects/[slug].astro` renders each project.
- `src/layouts/Layout.astro` — shared page shell (head, header, footer).
- `src/components/` — `Header` and `Footer`.
- `src/lib/projects.ts` — loads published projects in display order.
- `src/styles/global.css` — theme colors, typography, and shared classes.
- `public/images/<project>/` — project images, referenced as `/images/<project>/file.jpg`.
