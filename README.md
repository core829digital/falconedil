# Falcon Edil — sito ufficiale

Sito web di **Falcon Edil**, impresa edile (Trinitapoli BT · Sofia).
Realizzato da **CORE829 SRL**.

## Stack

- [Astro](https://astro.build) — sito statico, HTML pre-renderizzato (SEO e velocità)
- [GSAP](https://gsap.com) + ScrollTrigger + SplitText — motion design
- [Lenis](https://lenis.darkroom.engineering) — smooth scroll
- Immagini ottimizzate in build (WebP responsive + fallback JPG)
- Font self-hosted (Archivo, Instrument Serif, IBM Plex Mono): nessuna chiamata a Google Fonts (GDPR)

## Comandi

```bash
npm install
npm run dev       # sviluppo su http://localhost:4321
npm run build     # build di produzione in ./dist
npm run preview   # anteprima della build
```

Richiede Node.js ≥ 22.23.

## Lingue

Il sito è in **italiano** (`/`), **inglese** (`/en/`) e **bulgaro** (`/bg/`), con URL tradotti
(es. `/chi-siamo/` · `/en/about-us/` · `/bg/za-nas/`), selettore lingua, `hreflang` e sitemap multilingua.
I vecchi URL WordPress EN/BG (es. `/about-us/`, `/услуги/`) reindirizzano automaticamente alle nuove pagine.

## Struttura

```
src/
  i18n/dict/it.ts     → TUTTI i testi in italiano (lingua di riferimento)
  i18n/dict/en.ts     → testi in inglese (stessa struttura, verificata da TypeScript)
  i18n/dict/bg.ts     → testi in bulgaro
  i18n/legal/         → privacy, cookie e termini nelle 3 lingue
  i18n/config.ts      → lingue, URL tradotti, redirect dei vecchi URL
  data/site.ts        → dati neutri: immagini, telefoni, indirizzi, numeri
  views/              → le pagine (una vista per pagina, condivisa dalle 3 lingue)
  pages/              → rotte (file sottili che richiamano le viste)
  components/         → componenti riutilizzabili
  layouts/            → layout base (SEO, hreflang, JSON-LD) e pagine legali
  scripts/main.ts     → motore delle animazioni (attributi data-*)
  styles/global.css   → design system (colori, tipografia, bottoni)
```

- Per cambiare un **testo**: `src/i18n/dict/<lingua>.ts`.
- Per cambiare un **telefono, indirizzo, numero o immagine**: `src/data/site.ts`.

`npm run check` verifica che le tre lingue abbiano esattamente gli stessi campi.

## Modulo contatti

Il sito è statico. Senza configurazione, il modulo apre il programma di posta dell'utente
con il messaggio già compilato verso `info@falconedil.com`.

Per l'invio diretto (consigliato) impostare in hosting le variabili d'ambiente
(vedi `.env.example`), ad es. con [Web3Forms](https://web3forms.com) (gratuito):

```
PUBLIC_FORM_ENDPOINT=https://api.web3forms.com/submit
PUBLIC_FORM_ACCESS_KEY=<chiave>
```

## SEO

- URL identici al vecchio sito (`/chi-siamo/`, `/servizi/`, `/progetti/`, `/contatti/`, pagine legali)
- Meta title/description per pagina, Open Graph, canonical
- Dati strutturati: `GeneralContractor` (2 sedi), `Organization`, `FAQPage`, `Service`, `BreadcrumbList`
- `sitemap-index.xml` e `robots.txt` generati automaticamente

## Qualità (Lighthouse, mobile)

| | Performance | Accessibilità | Best practices | SEO |
|---|---|---|---|---|
| Home (IT/EN/BG) | 85–87 (desktop 98) | 100 | 100 | 100 |
| Pagine interne | 90–97 | 100 | 100 | 100 |

LCP reale misurato ≈ 1,1 s su mobile con rete e CPU rallentate.

## Deploy

Qualsiasi hosting statico (Netlify, Vercel, Cloudflare Pages):
build command `npm run build`, cartella di output `dist`.

Header di sicurezza e cache già configurati: `public/_headers` (Netlify / Cloudflare Pages) e `vercel.json` (Vercel).
