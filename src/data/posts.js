// Collects blog posts from src/pages/blog/*.md, newest first.
// A post is left out (and not published) when its file name starts with "_",
// e.g. src/pages/blog/_my-draft.md. Use that for drafts.
const modules = import.meta.glob('../pages/blog/*.md', { eager: true });

export const posts = Object.entries(modules)
  .filter(([file]) => !file.split('/').pop().startsWith('_'))
  .map(([, p]) => ({ ...p.frontmatter, url: p.url.replace(/\/?$/, '/'), tags: p.frontmatter.tags ?? [] }))
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export const formatDate = (d, month = 'short') =>
  new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month, year: 'numeric', timeZone: 'UTC' });

export const isoDate = (d) => new Date(d).toISOString().slice(0, 10);
