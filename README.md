# senechal.me

Personal site. Static [Astro](https://astro.build) build, no client JS, deployed on Vercel.

```sh
npm install
npm run dev      # localhost:4321
npm run build    # → dist/
```

- Page layout: `src/layouts/Base.astro`
- Styles: `src/styles/global.css` (light/dark via `prefers-color-scheme`)
- Font: Newsreader, self-hosted at build time via Astro's Fonts API (`astro.config.mjs`)
- Articles: Markdown in `src/content/articles/`, schema in `src/content.config.ts`
