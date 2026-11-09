// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { legacyRedirects, routes, localeMeta } from './src/i18n/config.ts';

const SITE = 'https://falconedil.com';
/** Mappa URL → gruppo di traduzioni, per gli hreflang nella sitemap. */
const groups = new Map();
for (const byLang of Object.values(routes)) {
  const links = Object.entries(byLang).map(([lang, p]) => ({ lang: localeMeta[/** @type {keyof typeof localeMeta} */ (lang)].intl, url: SITE + p }));
  for (const p of Object.values(byLang)) groups.set(SITE + p, links);
}

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  // Vecchi URL WordPress (EN/BG) → nuove pagine: nessun link rotto, nessuna perdita SEO
  redirects: legacyRedirects,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        const links = groups.get(item.url);
        if (links) item.links = links;
        return item;
      },
    }),
  ],
  image: {
    responsiveStyles: false,
  },
  build: {
    inlineStylesheets: 'always',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
});
