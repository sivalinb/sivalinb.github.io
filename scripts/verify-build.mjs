import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('dist');
const catalog = JSON.parse(await readFile('src/data/catalog.json', 'utf8'));
const origin = new URL(process.env.PORTFOLIO_SITE_URL || 'https://sivalinb.github.io').origin;
const base = '/' + (process.env.PORTFOLIO_BASE_PATH || '').split('/').filter(Boolean).join('/');
const prefix = base === '/' ? '/' : base + '/';
const errors = [];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(entry => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  }));
  return files.flat();
}

const htmlFiles = (await walk(root)).filter(file => file.endsWith('.html'));
const publicRoot = path.resolve('public');
const copiedHtml = new Set((await walk(publicRoot)).filter(file => file.endsWith('.html')).map(file => path.relative(publicRoot, file)));
const projectSites = new Set(catalog.projects.map(project => project.slug));
const pages = new Map();
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  const name = path.relative(root, file);
  if (new Set(ids).size !== ids.length) errors.push(`${name}: duplicate element IDs`);
  // Copied app shells may render headings in JavaScript; check the Astro pages here.
  if (!copiedHtml.has(name) && (html.match(/<h1\b/g) || []).length !== 1) errors.push(`${name}: expected one h1`);
  if (!copiedHtml.has(name) && !html.includes('rel="canonical"')) errors.push(`${name}: missing canonical link`);
  pages.set(file, { html, ids: new Set(ids) });
}

const expected = ['index.html', '404.html', 'projects/index.html', 'learn/index.html', 'references/index.html',
  ...catalog.projects.map(project => `projects/${project.slug}/index.html`),
  ...catalog.categories.map(category => `projects/category/${category.id}/index.html`), ...copiedHtml];
for (const route of expected) {
  if (!pages.has(path.join(root, route))) errors.push(`Missing route: ${route}`);
}
if (pages.size !== expected.length) errors.push(`Expected ${expected.length} HTML pages, found ${pages.size}`);

let references = 0;
for (const [file, { html, ids }] of pages) {
  const name = path.relative(root, file);
  const route = name.replace(/index\.html$/, '');
  const pageUrl = new URL(prefix + route, origin);

  for (const match of html.matchAll(/\b(?:aria-controls|aria-labelledby)="([^"]+)"/g)) {
    for (const id of match[1].split(/\s+/)) {
      if (!ids.has(id)) errors.push(`${name}: missing ARIA target #${id}`);
    }
  }
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const url = new URL(match[1].replaceAll('&amp;', '&'), pageUrl);
    if (url.origin !== origin) continue;
    // Other GitHub Pages project sites share the portfolio's origin but deploy separately.
    if (/^https?:\/\//.test(match[1]) && projectSites.has(url.pathname.split('/').filter(Boolean)[0])) continue;
    references++;
    if (!url.pathname.startsWith(prefix)) {
      errors.push(`${name}: URL escapes base ${prefix}: ${url.pathname}`);
      continue;
    }
    const relative = decodeURIComponent(url.pathname.slice(prefix.length));
    let target = path.resolve(root, relative);
    if (target !== root && !target.startsWith(root + path.sep)) {
      errors.push(`${name}: URL escapes build directory`);
      continue;
    }
    try {
      if ((await stat(target)).isDirectory()) target = path.join(target, 'index.html');
      await stat(target);
      if (url.hash && pages.has(target) && !pages.get(target).ids.has(decodeURIComponent(url.hash.slice(1)))) {
        errors.push(`${name}: missing fragment ${url.pathname}${url.hash}`);
      }
    } catch {
      errors.push(`${name}: missing local target ${url.pathname}`);
    }
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Verified ${pages.size} HTML pages, ${catalog.projects.length} projects and ${references} local references at ${prefix}`);
}
