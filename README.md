# Academic website

Live at <https://rashikaguptaa.github.io>. Built with [Astro](https://astro.build); every push to `main` deploys to GitHub Pages (`.github/workflows/deploy.yml`).

## Where things live

- `src/data/site.js`: name, bio, links, news, research areas, publications, talks, education, awards, teaching
- `src/pages/`: Home, About, Research, Publications and Teaching pages
- `public/images/`: photos (set `photo` in `site.js`; banner photos go in `public/images/banner/`)
- `public/cv.pdf`: your CV (then set `cv: "/cv.pdf"` in `site.js`)

## Commands

```sh
npm ci           # install
npm run dev      # preview at http://localhost:4321
npm run build    # build into dist/
```
