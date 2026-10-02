// RSS feed for the blog at /rss.xml. Updates itself on each build.
import { site } from '../data/site.js';
import { posts } from '../data/posts.js';

const esc = (s) =>
  String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function GET({ site: base }) {
  const items = posts
    .map((p) => {
      const url = new URL(p.url, base).href;
      return `    <item>
      <title>${esc(p.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description>${esc(p.description)}</description>
    </item>`;
    })
    .join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${esc(site.name)} | Blog</title>
    <link>${new URL('/blog/', base).href}</link>
    <description>${esc(`Blog of ${site.name}: Markov decision processes, queueing and operations research.`)}</description>
    <language>en</language>
${items}
  </channel>
</rss>
`,
    { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } }
  );
}
