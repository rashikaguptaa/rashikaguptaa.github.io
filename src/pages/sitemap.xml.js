// Lists every page for search engines. Updates itself on each build.
import { teaching } from '../data/optional.js';

export function GET({ site }) {
  const hidden = ['404'];
  if (!teaching.length) hidden.push('/teaching');
  const pages = Object.keys(import.meta.glob('./**/*.{astro,md}'))
    .map((f) => f.replace(/^\.\//, '/').replace(/\.(astro|md)$/, '').replace(/\/?index$/, '/'))
    .filter((p) => !hidden.some((h) => p.includes(h)));
  const urls = pages
    .map((p) => `  <url><loc>${new URL(p.endsWith('/') ? p : p + '/', site).href}</loc></url>`)
    .join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml' } }
  );
}
