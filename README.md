# Academic website

Live at <https://rashikaguptaa.github.io>. Built with [Astro](https://astro.build); every push to `main` deploys to GitHub Pages (`.github/workflows/deploy.yml`).

## Where things live

- `src/data/site.js`: name, bio, links, news, research areas, publications, talks, education, awards, teaching
- `src/pages/blog/`: blog posts, one `.md` file each
- `public/images/`: photos (set `photo` in `site.js`; banner photos go in `public/images/banner/`)
- `public/cv.pdf`: your CV (then set `cv: "/cv.pdf"` in `site.js`)

## Writing a blog post

Create `src/pages/blog/my-post.md` and start it with:

```md
---
layout: ../../layouts/Post.astro
title: My post title
date: 2026-10-15
description: One or two sentences shown on the blog page, in link previews and in the RSS feed.
tags: [Markov decision processes, Queueing]
---
```

- LaTeX works: `$...$` inline, `$$...$$` on its own lines.
- Reading time, the blog index, the home page "From the blog" list, previous/next links, the sitemap and `/rss.xml` all update automatically.
- **Drafts:** start the file name with an underscore (`_my-post.md`). It is not published and not listed until you rename it.

## Commands

```sh
npm ci           # install
npm run dev      # preview at http://localhost:4321
npm run build    # build into dist/
```
