/** Configurazione lingue e rotte localizzate. */
export const locales = ['it', 'en', 'bg'] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = 'it';

export const localeMeta: Record<Lang, { label: string; short: string; htmlLang: string; og: string; intl: string; hreflang: string }> = {
  it: { label: 'Italiano', short: 'IT', htmlLang: 'it', og: 'it_IT', intl: 'it-IT', hreflang: 'it' },
  en: { label: 'English', short: 'EN', htmlLang: 'en', og: 'en_GB', intl: 'en-GB', hreflang: 'en' },
  bg: { label: 'Български', short: 'BG', htmlLang: 'bg', og: 'bg_BG', intl: 'bg-BG', hreflang: 'bg' },
};

export const routes = {
  home: { it: '/', en: '/en/', bg: '/bg/' },
  about: { it: '/chi-siamo/', en: '/en/about-us/', bg: '/bg/za-nas/' },
  services: { it: '/servizi/', en: '/en/services/', bg: '/bg/uslugi/' },
  projects: { it: '/progetti/', en: '/en/projects/', bg: '/bg/proekti/' },
  contact: { it: '/contatti/', en: '/en/contacts/', bg: '/bg/kontakti/' },
  privacy: { it: '/info-sulla-privacy/', en: '/en/privacy-policy/', bg: '/bg/poveritelnost/' },
  cookies: { it: '/politica-sui-cookie-eu/', en: '/en/cookie-policy/', bg: '/bg/biskvitki/' },
  terms: { it: '/termini-e-condizioni/', en: '/en/terms-and-conditions/', bg: '/bg/obshti-usloviya/' },
} as const satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof routes;

export const path = (lang: Lang, key: RouteKey, hash = '') => routes[key][lang] + (hash ? `#${hash}` : '');

/** Lingua dedotta dal percorso (per 404 e casi generici). */
export function langFromPath(p: string): Lang {
  if (p.startsWith('/en/') || p === '/en') return 'en';
  if (p.startsWith('/bg/') || p === '/bg') return 'bg';
  return 'it';
}

/**
 * Vecchi URL del sito WordPress (versioni EN e BG) → nuovi URL.
 * Generano pagine di redirect statiche: nessuna perdita di link o posizionamento.
 */
export const legacyRedirects: Record<string, string> = {
  '/about-us': routes.about.en,
  '/services': routes.services.en,
  '/Services': routes.services.en,
  '/projects': routes.projects.en,
  '/contacts': routes.contact.en,
  '/privacy-policy': routes.privacy.en,
  '/cookie-policy-eu': routes.cookies.en,
  '/terms-and-conditions': routes.terms.en,
  '/за-нас': routes.about.bg,
  '/услуги': routes.services.bg,
  '/проекти': routes.projects.bg,
  '/контакти': routes.contact.bg,
  '/информация-за-поверителността': routes.privacy.bg,
  '/условия-и-положения': routes.terms.bg,
};
