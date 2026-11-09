/**
 * Falcon Edil — motion engine.
 * Lenis (smooth scroll) + GSAP/ScrollTrigger/SplitText.
 * Tutte le animazioni sono dichiarative via attributi data-* e
 * vengono disattivate con prefers-reduced-motion.
 */
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const root = document.documentElement;
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const $ = <T extends Element = HTMLElement>(s: string, ctx: ParentNode = document) => ctx.querySelector<T>(s as string) as T | null;
const $$ = <T extends Element = HTMLElement>(s: string, ctx: ParentNode = document) => Array.from(ctx.querySelectorAll<T>(s as string)) as T[];
const intlLocale = ({ it: 'it-IT', en: 'en-GB', bg: 'bg-BG' } as Record<string, string>)[root.lang] || 'it-IT';
const numberFmt = new Intl.NumberFormat(intlLocale);

/** Esegue cb una sola volta quando l'elemento sta per entrare nello schermo (più leggero di uno ScrollTrigger). */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      const cb = pending.get(e.target);
      pending.delete(e.target);
      cb?.();
    });
  },
  { rootMargin: '0px 0px -8% 0px' },
);
const pending = new WeakMap<Element, () => void>();
const onEnter = (el: Element, cb: () => void) => { pending.set(el, cb); io.observe(el); };

/** Cede il controllo al browser tra un blocco di lavoro e l'altro (niente long task). */
const yieldMain = () =>
  new Promise<void>((r) => {
    const sch = (window as unknown as { scheduler?: { yield?: () => Promise<void> } }).scheduler;
    if (sch?.yield) sch.yield().then(r);
    else window.setTimeout(r, 0);
  });

gsap.defaults({ ease: 'expo.out', duration: 1.2 });

/* -------------------------------------------------------------------------- */
/* Smooth scroll                                                               */
/* -------------------------------------------------------------------------- */
let lenis: Lenis | null = null;
// Smooth scroll solo con mouse/trackpad: su touch lo scroll nativo è già fluido e più leggero
if (!reduced && finePointer) {
  lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1, anchors: { offset: -90 } });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis!.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}

/* -------------------------------------------------------------------------- */
/* Header: solido dopo l'hero, nascosto scorrendo verso il basso              */
/* -------------------------------------------------------------------------- */
function initHeader() {
  const header = $('[data-header]');
  const dock = $('.dock');
  if (!header) return;
  let last = 0;
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('is-solid', y > 40);
    const goingDown = y > last && y > window.innerHeight * 0.6;
    if (!root.classList.contains('menu-locked')) header.classList.toggle('is-hidden', goingDown);
    dock?.classList.toggle('is-visible', y > window.innerHeight * 0.5);
    last = y;
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* -------------------------------------------------------------------------- */
/* Menu mobile                                                                 */
/* -------------------------------------------------------------------------- */
function initMenu() {
  const btn = $<HTMLButtonElement>('[data-menu-toggle]');
  const menu = $('[data-menu]');
  const header = $('[data-header]');
  if (!btn || !menu || !header) return;
  const links = $$('.menu__list a', menu);
  const outside = $$('main, footer, .dock, .wa, .skip-link');
  const brand = $('.brand', header);
  let open = false;

  const set = (state: boolean) => {
    open = state;
    btn.setAttribute('aria-expanded', String(state));
    btn.querySelector('.sr-only')!.textContent = (state ? btn.dataset.labelClose : btn.dataset.labelOpen) || '';
    header.classList.toggle('menu-open', state);
    root.classList.toggle('menu-locked', state);
    outside.forEach((el) => (el.inert = state));
    if (brand) brand.inert = state;
    if (state) {
      menu.hidden = false;
      lenis?.stop();
      gsap.timeline()
        .to(menu, { clipPath: 'inset(0 0 0% 0)', duration: 0.9, ease: 'expo.inOut' })
        .from(links, { yPercent: 100, opacity: 0, stagger: 0.06, duration: 1 }, '-=0.35');
      links[0]?.focus({ preventScroll: true });
    } else {
      lenis?.start();
      gsap.to(menu, {
        clipPath: 'inset(0 0 100% 0)',
        duration: 0.7,
        ease: 'expo.inOut',
        onComplete: () => { menu.hidden = true; },
      });
    }
  };
  btn.addEventListener('click', () => set(!open));
  document.addEventListener('keydown', (e) => {
    if (!open) return;
    if (e.key === 'Escape') { set(false); btn.focus(); return; }
    if (e.key === 'Tab') {
      // Focus trap: il focus resta tra il pulsante e le voci del menu
      const items = [btn, ...$$<HTMLElement>('a, button', menu)];
      const i = items.indexOf(document.activeElement as HTMLElement);
      if (e.shiftKey && i <= 0) { e.preventDefault(); items[items.length - 1].focus(); }
      else if (!e.shiftKey && i === items.length - 1) { e.preventDefault(); items[0].focus(); }
    }
  });
  links.forEach((a) => a.addEventListener('click', () => open && set(false)));
  window.matchMedia('(min-width: 961px)').addEventListener('change', (e) => { if (e.matches && open) set(false); });
}

/* -------------------------------------------------------------------------- */
/* Testi: reveal per riga                                                      */
/* -------------------------------------------------------------------------- */
function initSplits() {
  $$('[data-split]').forEach((el) => {
    onEnter(el, () => {
      gsap.set(el, { opacity: 1 });
      SplitText.create(el, {
        type: 'lines',
        mask: 'lines',
        linesClass: 'split-line',
        autoSplit: true,
        aria: 'none', // le righe restano testo leggibile: nessun aria-label su <p>/<h*>
        onSplit(self) {
          return gsap.from(self.lines, { yPercent: 110, rotate: 2, duration: 1.4, stagger: 0.09 });
        },
      });
    });
  });
}

/* -------------------------------------------------------------------------- */
/* Reveal generici                                                             */
/* -------------------------------------------------------------------------- */
function initReveals() {
  $$('[data-reveal]').forEach((el) => {
    const type = el.dataset.reveal;
    const delay = parseFloat(el.dataset.delay || '0');
    onEnter(el, () => {
      if (type === 'clip') {
        const img = el.querySelector('img');
        const tl = gsap.timeline({ delay });
        tl.to(el, { clipPath: 'inset(0% 0 0 0)', duration: 1.5, ease: 'expo.inOut' });
        if (img) tl.from(img, { scale: 1.35, duration: 2, ease: 'expo.out' }, 0.1);
      } else if (type === 'stagger') {
        gsap.set(el, { opacity: 1 });
        gsap.from(el.children, { y: 40, opacity: 0, duration: 1.2, stagger: 0.08, delay });
      } else if (type === 'line') {
        gsap.fromTo(el, { opacity: 1, scaleX: 0 }, { scaleX: 1, transformOrigin: 'left', duration: 1.6, ease: 'expo.inOut', delay });
      } else if (type === 'fade') {
        gsap.to(el, { opacity: 1, duration: 1.4, ease: 'power2.out', delay });
      } else {
        gsap.fromTo(el, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.3, delay });
      }
    });
  });
}

/* -------------------------------------------------------------------------- */
/* Parallax                                                                    */
/* -------------------------------------------------------------------------- */
function initParallax() {
  $$('[data-parallax]').forEach((el) => {
    const amount = parseFloat(el.dataset.parallax || '12');
    gsap.fromTo(
      el,
      { yPercent: -amount / 2 },
      {
        yPercent: amount / 2,
        ease: 'none',
        scrollTrigger: { trigger: el.parentElement || el, start: 'top bottom', end: 'bottom top', scrub: true },
      },
    );
  });
}

/* -------------------------------------------------------------------------- */
/* Contatori                                                                   */
/* -------------------------------------------------------------------------- */
function initCounters() {
  $$('[data-count]').forEach((el) => {
    const end = parseFloat(el.dataset.count || '0');
    onEnter(el, () => {
      const obj = { v: 0 };
      el.textContent = '0';
      gsap.to(obj, {
        v: end,
        duration: 2.4,
        ease: 'power3.out',
        onUpdate: () => { el.textContent = numberFmt.format(Math.round(obj.v)); },
      });
    });
  });
}

/* -------------------------------------------------------------------------- */
/* Marquee reattivo alla velocità di scroll                                   */
/* -------------------------------------------------------------------------- */
function initMarquees() {
  $$('[data-marquee]').forEach((el) => {
    const track = el.querySelector<HTMLElement>('[data-marquee-track]');
    if (!track) return;
    const dir = el.dataset.marquee === 'reverse' ? 1 : -1;
    const tween = gsap.fromTo(
      track,
      { xPercent: dir === -1 ? 0 : -50 },
      { xPercent: dir === -1 ? -50 : 0, ease: 'none', duration: parseFloat(el.dataset.speed || '40'), repeat: -1 },
    );
    let skewTo = gsap.quickTo(track, 'skewX', { duration: 0.6, ease: 'power3.out' });
    ScrollTrigger.create({
      trigger: el,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        const v = self.getVelocity();
        const boost = 1 + Math.min(Math.abs(v) / 400, 5);
        gsap.to(tween, { timeScale: (v < 0 ? -1 : 1) * boost, duration: 0.25, overwrite: true });
        gsap.to(tween, { timeScale: v < 0 ? -1 : 1, duration: 1.2, delay: 0.25, overwrite: false });
        skewTo(gsap.utils.clamp(-8, 8, v / -250));
      },
    });
  });
}

/* -------------------------------------------------------------------------- */
/* Hero                                                                        */
/* -------------------------------------------------------------------------- */
let loaderDone = !root.classList.contains('is-loading');
function heroDelay() { return loaderDone ? 0.15 : 1.9; }

function initHero() {
  const hero = $('[data-hero-section]');
  if (!hero) return;
  const bg = $$('[data-hero-slide]', hero);
  const media = $('[data-hero-media]', hero);

  // Intro: immagine che "atterra"
  if (media) gsap.from(media, { scale: 1.25, duration: 2.6, ease: 'expo.out', delay: heroDelay() - 0.2 });

  // Linee di progetto
  const lines = $$('[data-draw-line]', hero);
  lines.forEach((l, i) => {
    gsap.fromTo(l, { scaleX: 0, scaleY: 0 }, { scaleX: 1, scaleY: 1, duration: 2, ease: 'expo.inOut', delay: heroDelay() + i * 0.08 });
  });

  // Crossfade slides con Ken Burns
  if (bg.length > 1) {
    let i = 0;
    gsap.set(bg, { opacity: 0 });
    gsap.set(bg[0], { opacity: 1 });
    bg.forEach((s) => gsap.fromTo(s.querySelector('img'), { scale: 1.12 }, { scale: 1, duration: 9, ease: 'none', repeat: -1, yoyo: true }));
    const counter = $('[data-hero-index]', hero);
    const label = $('[data-hero-caption]', hero);
    const progress = $('[data-hero-progress]', hero);
    const next = () => {
      const prev = bg[i];
      i = (i + 1) % bg.length;
      const cur = bg[i];
      gsap.set(cur, { zIndex: 2 });
      gsap.set(prev, { zIndex: 1 });
      gsap.fromTo(cur, { opacity: 0, clipPath: 'inset(0 0 0 100%)' }, { opacity: 1, clipPath: 'inset(0 0 0 0%)', duration: 1.6, ease: 'expo.inOut', onComplete: () => { gsap.set(prev, { opacity: 0 }); } });
      if (counter) counter.textContent = String(i + 1).padStart(2, '0');
      if (label) label.textContent = cur.dataset.caption || '';
      if (progress) gsap.fromTo(progress, { scaleX: 0 }, { scaleX: 1, duration: 6, ease: 'none' });
    };
    if (progress) gsap.fromTo(progress, { scaleX: 0 }, { scaleX: 1, duration: 6, ease: 'none', delay: heroDelay() });
    gsap.delayedCall(6 + heroDelay(), function loop() { next(); gsap.delayedCall(6, loop); });
  }

  // Scroll-out: contenuto sale e sfuma, immagine si scurisce
  const content = $('[data-hero-content]', hero);
  if (content) {
    gsap.to(content, {
      yPercent: -18,
      opacity: 0.15,
      ease: 'none',
      scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
    });
  }
  if (media) {
    gsap.to(media, {
      yPercent: 18,
      ease: 'none',
      scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
    });
  }
}

/* -------------------------------------------------------------------------- */
/* Preloader                                                                   */
/* -------------------------------------------------------------------------- */
function initLoader() {
  const loader = $('[data-loader]');
  if (!loader || !root.classList.contains('is-loading')) { loaderDone = true; return; }
  const bar = $('[data-loader-bar]', loader);
  const count = $('[data-loader-count]', loader);
  const obj = { p: 0 };
  const tl = gsap.timeline({
    onComplete: () => {
      root.classList.remove('is-loading');
      loader.remove();
      try { sessionStorage.setItem('fe-loaded', '1'); } catch (e) { /* noop */ }
      ScrollTrigger.refresh();
    },
  });
  tl.from('.loader__emblem', { opacity: 0, y: 20, scale: 0.9, duration: 1, ease: 'expo.out' })
    .to(obj, { p: 100, duration: 1.1, ease: 'power2.inOut', onUpdate: () => {
      if (count) count.textContent = String(Math.round(obj.p));
      if (bar) bar.style.transform = `scaleX(${obj.p / 100})`;
    } }, 0.1)
    .to('.loader__center', { opacity: 0, y: -20, duration: 0.5, ease: 'power2.in' }, '+=0.1')
    .add(() => { $$('[data-hero-in], [data-hero-title]').forEach((el) => (el.style.animationPlayState = 'running')); }, '-=0.1')
    .to('.loader__panel', { clipPath: 'inset(0 0 100% 0)', duration: 1, ease: 'expo.inOut' }, '-=0.15');
  loaderDone = false;
  gsap.delayedCall(1.9, () => { loaderDone = true; });
}

/* -------------------------------------------------------------------------- */
/* Pulsanti magnetici                                                          */
/* -------------------------------------------------------------------------- */
function initMagnetic() {
  if (!finePointer) return;
  $$('[data-magnetic]').forEach((el) => {
    const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * 0.25);
      yTo((e.clientY - (r.top + r.height / 2)) * 0.35);
    });
    el.addEventListener('pointerleave', () => { xTo(0); yTo(0); });
  });
}

/* -------------------------------------------------------------------------- */
/* Cursore personalizzato con etichette                                       */
/* -------------------------------------------------------------------------- */
function initCursor() {
  const c = $('[data-cursor]');
  if (!c || !finePointer || reduced) return;
  root.classList.add('has-cursor');
  const label = $('[data-cursor-label]', c)!;
  const xTo = gsap.quickTo(c, 'x', { duration: 0.35, ease: 'power3' });
  const yTo = gsap.quickTo(c, 'y', { duration: 0.35, ease: 'power3' });
  window.addEventListener('pointermove', (e) => { xTo(e.clientX); yTo(e.clientY); });
  document.addEventListener('pointerover', (e) => {
    const t = (e.target as HTMLElement).closest<HTMLElement>('[data-cursor-text], a, button, input, textarea, select, label');
    if (t?.dataset.cursorText) {
      label.textContent = t.dataset.cursorText;
      c.classList.add('is-label');
      c.classList.remove('is-hidden');
    } else if (t) {
      c.classList.remove('is-label');
      c.classList.add('is-hidden');
    } else {
      c.classList.remove('is-label', 'is-hidden');
    }
  });
  document.addEventListener('pointerleave', () => c.classList.add('is-hidden'));
}

/* -------------------------------------------------------------------------- */
/* Lista servizi con immagine che segue il cursore                            */
/* -------------------------------------------------------------------------- */
function initHoverList() {
  $$('[data-hover-list]').forEach((list) => {
    const float = $('[data-hover-float]', list);
    if (!float || !finePointer) return;
    const imgs = $$('[data-hover-img]', float);
    const xTo = gsap.quickTo(float, 'x', { duration: 0.7, ease: 'power3' });
    const yTo = gsap.quickTo(float, 'y', { duration: 0.7, ease: 'power3' });
    const rTo = gsap.quickTo(float, 'rotate', { duration: 0.9, ease: 'power3' });
    let lastX = 0;
    list.addEventListener('pointermove', (e) => {
      const r = list.getBoundingClientRect();
      xTo(e.clientX - r.left);
      yTo(e.clientY - r.top);
      rTo(gsap.utils.clamp(-10, 10, (e.clientX - lastX) * 0.6));
      lastX = e.clientX;
    });
    $$('[data-hover-item]', list).forEach((item, i) => {
      item.addEventListener('pointerenter', () => {
        gsap.to(float, { opacity: 1, scale: 1, duration: 0.5, ease: 'power3.out' });
        imgs.forEach((im, j) => gsap.to(im, { opacity: j === i ? 1 : 0, scale: j === i ? 1 : 1.1, duration: 0.6, ease: 'power3.out' }));
      });
    });
    list.addEventListener('pointerleave', () => gsap.to(float, { opacity: 0, scale: 0.6, duration: 0.5, ease: 'power3.out' }));
  });
}

/* -------------------------------------------------------------------------- */
/* Scorrimento orizzontale progetti (desktop)                                 */
/* -------------------------------------------------------------------------- */
function initHScroll() {
  const mm = gsap.matchMedia();
  $$('[data-hscroll]').forEach((section) => {
    const track = $('[data-hscroll-track]', section);
    const bar = $('[data-hscroll-bar]', section);
    if (!track) return;
    mm.add('(min-width: 1024px)', () => {
      const distance = () => track.scrollWidth - window.innerWidth + parseFloat(getComputedStyle(track).paddingLeft || '0');
      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => { if (bar) bar.style.transform = `scaleX(${self.progress})`; },
        },
      });
      $$('[data-hscroll-img]', track).forEach((img) => {
        gsap.fromTo(img, { xPercent: -8 }, {
          xPercent: 8,
          ease: 'none',
          scrollTrigger: { trigger: img.parentElement, containerAnimation: tween, start: 'left right', end: 'right left', scrub: true },
        });
      });
    });
  });
}

/* -------------------------------------------------------------------------- */
/* Prima / Dopo                                                                */
/* -------------------------------------------------------------------------- */
function initBeforeAfter() {
  $$('[data-ba]').forEach((el) => {
    const range = $<HTMLInputElement>('input[type=range]', el);
    if (!range) return;
    const set = (v: number) => el.style.setProperty('--pos', `${v}%`);
    range.addEventListener('input', () => set(parseFloat(range.value)));
    set(parseFloat(range.value));
    // Intro: il cursore "accenna" il confronto quando entra in vista
    if (!reduced) {
      const o = { v: 50 };
      gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 70%', once: true } })
        .to(o, { v: 22, duration: 1.1, ease: 'power3.inOut', onUpdate: () => { set(o.v); range.value = String(o.v); } })
        .to(o, { v: 78, duration: 1.3, ease: 'power3.inOut', onUpdate: () => { set(o.v); range.value = String(o.v); } })
        .to(o, { v: 50, duration: 1, ease: 'power3.inOut', onUpdate: () => { set(o.v); range.value = String(o.v); } });
    }
  });
}

/* -------------------------------------------------------------------------- */
/* Linee SVG disegnate allo scroll (processo)                                 */
/* -------------------------------------------------------------------------- */
function initDraw() {
  $$<SVGPathElement>('[data-draw]').forEach((p) => {
    const len = p.getTotalLength();
    gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
    gsap.to(p, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: { trigger: p.closest('[data-draw-scope]') || p, start: 'top 70%', end: 'bottom 70%', scrub: true },
    });
  });
  $$('[data-step]').forEach((s) => {
    ScrollTrigger.create({
      trigger: s,
      start: 'top 70%',
      onEnter: () => s.classList.add('is-active'),
      onLeaveBack: () => s.classList.remove('is-active'),
    });
  });
}

/* -------------------------------------------------------------------------- */
/* Wordmark footer                                                             */
/* -------------------------------------------------------------------------- */
function initFooterWord() {
  const w = $('[data-footer-word]');
  if (!w) return;
  const split = SplitText.create(w.children, { type: 'chars', aria: 'none' });
  gsap.from(split.chars, {
    yPercent: 100,
    opacity: 0,
    stagger: 0.04,
    duration: 1.4,
    ease: 'expo.out',
    scrollTrigger: { trigger: w, start: 'top 95%', once: true },
  });
}

/* -------------------------------------------------------------------------- */
/* Filtri progetti                                                             */
/* -------------------------------------------------------------------------- */
function initFilters() {
  const bar = $('[data-filter-bar]');
  if (!bar) return;
  const items = $$('[data-filter-item]');
  const buttons = $$<HTMLButtonElement>('button[data-filter]', bar);
  buttons.forEach((b) =>
    b.addEventListener('click', () => {
      const f = b.dataset.filter!;
      buttons.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      const show = items.filter((i) => f === 'tutti' || i.dataset.filterItem === f);
      const hide = items.filter((i) => !show.includes(i));
      gsap.to(hide, { opacity: 0, scale: 0.96, duration: 0.35, ease: 'power2.in', onComplete: () => hide.forEach((h) => (h.hidden = true)) });
      gsap.delayedCall(hide.length ? 0.36 : 0, () => {
        show.forEach((s) => (s.hidden = false));
        gsap.fromTo(show, { opacity: 0, y: 30, scale: 1 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.06, ease: 'expo.out', onComplete: () => ScrollTrigger.refresh() });
      });
    }),
  );
}

/* -------------------------------------------------------------------------- */
/* FAQ: apertura animata dei <details>                                        */
/* -------------------------------------------------------------------------- */
function initAccordions() {
  $$<HTMLDetailsElement>('details[data-accordion]').forEach((d) => {
    const summary = d.querySelector('summary')!;
    const body = d.querySelector<HTMLElement>('[data-accordion-body]')!;
    summary.addEventListener('click', (e) => {
      if (reduced) return;
      e.preventDefault();
      if (d.open) {
        gsap.to(body, { height: 0, opacity: 0, duration: 0.6, ease: 'expo.inOut', onComplete: () => { d.open = false; gsap.set(body, { clearProps: 'all' }); ScrollTrigger.refresh(); } });
        d.classList.remove('is-open');
      } else {
        d.open = true;
        d.classList.add('is-open');
        gsap.fromTo(body, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: 0.8, ease: 'expo.out', onComplete: () => { gsap.set(body, { clearProps: 'all' }); ScrollTrigger.refresh(); } });
      }
    });
    if (d.open) d.classList.add('is-open');
  });
}

/* -------------------------------------------------------------------------- */
/* Modulo contatti                                                             */
/* -------------------------------------------------------------------------- */
function initForm() {
  const form = $<HTMLFormElement>('[data-contact-form]');
  if (!form) return;
  const status = $('[data-form-status]', form)!;
  const endpoint = form.dataset.endpoint || '';
  const to = form.dataset.mailto || 'info@falconedil.com';
  const m = JSON.parse(form.dataset.messages || '{}') as {
    invalid: string; sent: string; failed: string; mailto: string; subject: string;
    labels: { name: string; email: string; phone: string; type: string; location: string };
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = '';
    status.className = 'form__status';
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      const first = form.querySelector<HTMLElement>(':invalid');
      first?.focus();
      status.textContent = m.invalid;
      status.classList.add('is-error');
      return;
    }
    const data = new FormData(form);
    if (data.get('azienda_web')) return; // honeypot

    const lines = [
      `${m.labels.name}: ${data.get('nome')} ${data.get('cognome')}`,
      `${m.labels.email}: ${data.get('email')}`,
      `${m.labels.phone}: ${data.get('telefono') || '—'}`,
      `${m.labels.type}: ${data.get('intervento') || '—'}`,
      `${m.labels.location}: ${data.get('localita') || '—'}`,
      '',
      String(data.get('messaggio') || ''),
    ];

    const btn = form.querySelector<HTMLButtonElement>('button[type=submit]')!;
    if (endpoint) {
      btn.disabled = true;
      btn.setAttribute('aria-busy', 'true');
      try {
        const payload: Record<string, string> = {};
        data.forEach((v, k) => (payload[k] = String(v)));
        payload.subject = `${m.subject} — ${payload.nome} ${payload.cognome}`;
        if (form.dataset.accessKey) payload.access_key = form.dataset.accessKey;
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(String(res.status));
        form.reset();
        form.classList.remove('was-validated');
        status.textContent = m.sent;
        status.classList.add('is-ok');
      } catch {
        status.textContent = m.failed;
        status.classList.add('is-error');
      } finally {
        btn.disabled = false;
        btn.removeAttribute('aria-busy');
      }
    } else {
      const subject = `${m.subject} — ${data.get('nome')} ${data.get('cognome')}`;
      window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
      status.textContent = m.mailto;
      status.classList.add('is-ok');
    }
  });
}

/* -------------------------------------------------------------------------- */
/* WhatsApp: suggerimento mostrato una sola volta per sessione                */
/* -------------------------------------------------------------------------- */
function initWhatsappHint() {
  const wa = $('[data-wa]');
  if (!wa || !window.matchMedia('(min-width: 721px)').matches) return;
  try { if (sessionStorage.getItem('fe-wa-hint')) return; } catch (e) { /* noop */ }
  window.setTimeout(() => {
    wa.classList.add('is-hinting');
    try { sessionStorage.setItem('fe-wa-hint', '1'); } catch (e) { /* noop */ }
    window.setTimeout(() => wa.classList.remove('is-hinting'), 4200);
  }, 7000);
}

/* -------------------------------------------------------------------------- */
/* Avvio                                                                       */
/* -------------------------------------------------------------------------- */
function boot() {
  initHeader();
  initMenu();
  initAccordions();
  initForm();
  initBeforeAfter();
  initFilters();
  initWhatsappHint();

  if (reduced) {
    $$('[data-count]').forEach((el) => { el.textContent = numberFmt.format(parseFloat(el.dataset.count || '0')); });
    return;
  }

  // Critico (sopra la piega): subito
  initLoader();
  initHero();
  initReveals();
  initCounters();

  // Il resto a piccoli blocchi, cedendo il thread al browser tra uno e l'altro
  const tasks: (() => void | Promise<unknown>)[] = [
    () => document.fonts.ready.then(initSplits),
    initCursor,
    initMagnetic,
    initMarquees,
    initHoverList,
    initParallax,
    initHScroll,
    initDraw,
    initFooterWord,
  ];
  (async () => {
    for (const task of tasks) {
      await yieldMain();
      await task();
    }
    ScrollTrigger.refresh();
  })();
  window.addEventListener('load', () => ScrollTrigger.refresh());
}

boot();
