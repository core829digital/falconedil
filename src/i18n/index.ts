import it, { type Dict } from './dict/it';
import en from './dict/en';
import bg from './dict/bg';
import { locales, localeMeta, routes, path, type Lang, type RouteKey } from './config';

export { locales, localeMeta, routes, path };
export type { Lang, RouteKey, Dict };

const dicts: Record<Lang, Dict> = { it, en, bg };
export const t = (lang: Lang): Dict => dicts[lang];

/** Link alternativi della stessa pagina nelle altre lingue (hreflang + switcher). */
export const alternates = (key: RouteKey) => locales.map((l) => ({ lang: l, href: routes[key][l] }));

export const fmtNumber = (lang: Lang, n: number) => new Intl.NumberFormat(localeMeta[lang].intl).format(n);
export const pad = (n: number) => String(n).padStart(2, '0');
