// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Adds `minutesRead` to the frontmatter of every Markdown page (shown on blog posts).
// Counts prose words only; math and code blocks are skipped.
function remarkReadingTime() {
  return (tree, file) => {
    let words = 0;
    const walk = (node) => {
      if (node.type === 'math' || node.type === 'code') return;
      if (node.type === 'text' || node.type === 'inlineCode') {
        words += node.value.split(/\s+/).filter(Boolean).length;
      }
      if (node.type === 'inlineMath') words += 2;
      node.children?.forEach(walk);
    };
    walk(tree);
    file.data.astro ??= {};
    file.data.astro.frontmatter ??= {};
    file.data.astro.frontmatter.minutesRead = Math.max(1, Math.round(words / 200));
  };
}

export default defineConfig({
  // The site's public address. Used for canonical links, the sitemap, the RSS feed and link previews.
  site: 'https://rashikaguptaa.github.io',
  markdown: {
    // Enables LaTeX math ($...$ and $$...$$) in Markdown pages and blog posts.
    processor: unified({
      remarkPlugins: [remarkMath, remarkReadingTime],
      rehypePlugins: [rehypeKatex],
    }),
  },
});
