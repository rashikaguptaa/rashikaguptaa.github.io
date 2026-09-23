# Academic website

Built with Astro. Everything you normally need to edit:

- `src/data/site.js`: name, bio, links, research interests, news, publications
- `src/pages/research.md`: the Research page (Markdown, LaTeX math works)
- `src/pages/blog/`: blog posts, one `.md` file each
- `public/images/`: your photo (then set `photo` in `site.js`)
- `public/cv.pdf`: your CV (then set `cv: "/cv.pdf"` in `site.js`)

Preview: `npm run dev`. Build: `npm run build` (output in `dist/`).
