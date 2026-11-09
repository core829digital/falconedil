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

## Struttura

```
src/
  data/site.ts        → TUTTI i contenuti (testi, contatti, servizi, progetti, team, FAQ)
  assets/             → immagini originali del cliente (ottimizzate in build)
  components/         → componenti riutilizzabili
  layouts/            → layout base (SEO, JSON-LD) e pagine legali
  pages/              → pagine (stessi URL del vecchio sito)
  scripts/main.ts     → motore delle animazioni (attributi data-*)
  styles/global.css   → design system (colori, tipografia, bottoni)
```

Per modificare un testo o un numero basta intervenire su `src/data/site.ts`.

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

## Deploy

Qualsiasi hosting statico (Netlify, Vercel, Cloudflare Pages):
build command `npm run build`, cartella di output `dist`.
