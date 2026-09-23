// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  // After you get your final web address, put it here (e.g. 'https://yourname.com').
  site: 'https://example.netlify.app',
  markdown: {
    // Enables LaTeX math ($...$ and $$...$$) in Markdown pages and blog posts.
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  },
});
