/**
 * Falcon Edil — dati neutri rispetto alla lingua (immagini, contatti, numeri).
 * I testi tradotti sono in src/i18n/dict/{it,en,bg}.ts
 * Fonte: sito originale falconedil.com (testi e immagini del cliente).
 * Tutti i contenuti testuali sono centralizzati qui per facilitare le modifiche.
 */
import type { ImageMetadata } from 'astro';

import emblem from '../assets/brand/emblem.png';

// Immagini
import autosaloneLexy from '../assets/img/autosalone-lexy.jpg';
import betoniera from '../assets/img/betoniera.jpg';
import cantiereCasale from '../assets/img/cantiere-casale.jpg';
import cantiereFucci from '../assets/img/cantiere-fucci.jpg';
import cantiereModena from '../assets/img/cantiere-modena.png';
import cantierePlovdiv from '../assets/img/cantiere-plovdiv.png';
import cantiereTrinitapoli from '../assets/img/cantiere-trinitapoli.jpg';
import condominioDopo from '../assets/img/condominio-dopo.jpg';
import condominioPrima from '../assets/img/condominio-prima.jpg';
import consulente from '../assets/img/consulente.jpg';
import consulenza from '../assets/img/consulenza.png';
import costruzioneBari from '../assets/img/costruzione-bari.jpg';
import costruzioneGru from '../assets/img/costruzione-gru.jpg';
import costruzioneTerrazzo from '../assets/img/costruzione-terrazzo.jpg';
import esperienza from '../assets/img/esperienza.jpg';
import gru from '../assets/img/gru.jpg';
import ingegneria from '../assets/img/ingegneria.png';
import internoModena from '../assets/img/interno-modena.jpg';
import lastricoDopo from '../assets/img/lastrico-dopo.jpg';
import lastricoPrima from '../assets/img/lastrico-prima.jpg';
import mezzi from '../assets/img/mezzi.jpg';
import operativita from '../assets/img/operativita.jpg';
import pavimentazione from '../assets/img/pavimentazione.png';
import piscinaLonglaville from '../assets/img/piscina-longlaville.jpg';
import personale from '../assets/img/personale.jpg';
import pratica from '../assets/img/pratica.jpg';
import progetto from '../assets/img/progetto.png';
import restauroAbitazione from '../assets/img/restauro-abitazione.png';
import sicurezza from '../assets/img/sicurezza.jpg';
import villaTrinitapoli from '../assets/img/villa-trinitapoli.jpg';

// Team
import albertoCicolella from '../assets/team/alberto-cicolella.jpg';
import antonioRiondino from '../assets/team/antonio-riondino.jpg';
import emanueleFalcone from '../assets/team/emanuele-falcone.png';
import emanueleFalcone2 from '../assets/team/emanuele-falcone-2.jpg';
import enzoLabianca from '../assets/team/enzo-labianca.png';
import giuseppeQuaranta from '../assets/team/giuseppe-quaranta.png';
import luigiDiLeo from '../assets/team/luigi-di-leo.jpg';
import minoDemiliano from '../assets/team/mino-demiliano.jpg';

// Clienti
import angelo from '../assets/clients/angelo-daddato.png';
import bruno from '../assets/clients/bruno-montanari.png';
import eleonora from '../assets/clients/eleonora-damato.png';
import giovanni from '../assets/clients/giovanni-dellernia.png';

export const images = {
  emblem,
  autosaloneLexy,
  betoniera,
  cantiereCasale,
  cantiereFucci,
  cantiereModena,
  cantierePlovdiv,
  cantiereTrinitapoli,
  condominioDopo,
  condominioPrima,
  consulente,
  consulenza,
  costruzioneBari,
  costruzioneGru,
  costruzioneTerrazzo,
  esperienza,
  gru,
  ingegneria,
  internoModena,
  lastricoDopo,
  lastricoPrima,
  mezzi,
  operativita,
  pavimentazione,
  piscinaLonglaville,
  personale,
  pratica,
  progetto,
  restauroAbitazione,
  sicurezza,
  villaTrinitapoli,
  emanueleFalcone,
  emanueleFalcone2,
};


/* ------------------------------------------------------------------ */
/* Azienda                                                             */
/* ------------------------------------------------------------------ */

export const company = {
  name: 'Falcon Edil',
  vat: '03575200716',
  founder: 'Emanuele Falcone',
  yearsExperience: 16,
  email: 'info@falconedil.com',
  emailFounder: 'e.geom.falcone@falconedil.com',
  whatsapp: '393667141862',
  social: [
    { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/emanuele.falcone.750?locale=it_IT' },
    { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/emanuele1203/' },
    { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/emanuele-falcone-96ab1b36/' },
  ],
} as const;

export const offices = [
  {
    id: 'italia',
    countryCode: 'IT',
    street: 'Via Libertà 8',
    postalCode: '76015',
    city: 'Trinitapoli',
    region: 'BT',
    phone: '+39 366 7141862',
    phoneHref: 'tel:+393667141862',
    coords: { lat: 41.3586, lng: 16.0897 },
    coordsLabel: '41.358° N · 16.089° E',
    maps: 'https://www.google.com/maps/search/?api=1&query=Via+Libert%C3%A0+8%2C+76015+Trinitapoli+BT',
  },
  {
    id: 'bulgaria',
    countryCode: 'BG',
    street: 'Blvd. Alexandar Stamboliyski 74',
    postalCode: '1303',
    city: 'Sofia',
    region: 'Sofia',
    phone: '+359 877 632714',
    phoneHref: 'tel:+359877632714',
    coords: { lat: 42.6977, lng: 23.3219 },
    coordsLabel: '42.697° N · 23.321° E',
    maps: 'https://www.google.com/maps/search/?api=1&query=Bulevard+Aleksandar+Stamboliyski+74%2C+1303+Sofia',
  },
] as const;

/* ------------------------------------------------------------------ */
/* Numeri, servizi, progetti (parti neutre)                            */
/* ------------------------------------------------------------------ */

export const statValues = [
  { value: 512, suffix: '+' },
  { value: 16, suffix: '+' },
  { value: 1120, suffix: '+' },
  { value: 1520, suffix: '+' },
];

/** Ordine e immagini dei 6 servizi principali (testi nei dizionari). */
export const serviceMedia: { slug: string; image: ImageMetadata }[] = [
  { slug: 'nuove-costruzioni', image: cantierePlovdiv },
  { slug: 'riparazioni-restauro', image: condominioDopo },
  { slug: 'pavimenti-solari', image: lastricoDopo },
  { slug: 'consulenza', image: consulente },
  { slug: 'architettura', image: pratica },
  { slug: 'servizio-gru', image: gru },
];

export const guaranteeMedia: ImageMetadata[] = [esperienza, personale, operativita, consulenza, progetto, cantiereModena];

export type ProjectMedia = { status: 'completato' | 'in-corso'; image: ImageMetadata; before?: ImageMetadata };
export const projectMedia: ProjectMedia[] = [
  { status: 'completato', image: lastricoDopo, before: lastricoPrima }, // Zapponeta
  { status: 'completato', image: condominioDopo, before: condominioPrima }, // Trinitapoli
  { status: 'completato', image: autosaloneLexy }, // Lexy-Metz
  { status: 'completato', image: piscinaLonglaville }, // Longlaville
  { status: 'in-corso', image: internoModena }, // Modena
  { status: 'in-corso', image: cantierePlovdiv }, // Plovdiv
  { status: 'in-corso', image: costruzioneBari }, // Bari
  { status: 'in-corso', image: villaTrinitapoli }, // Trinitapoli
];

export const galleryMedia: ImageMetadata[] = [
  cantiereTrinitapoli,
  costruzioneTerrazzo,
  cantiereCasale,
  betoniera,
  cantiereFucci,
  mezzi,
  operativita,
  sicurezza,
  costruzioneGru,
];

/* ------------------------------------------------------------------ */
/* Persone                                                             */
/* ------------------------------------------------------------------ */

export const leadershipMedia = [
  { name: 'Luigi di Leo', image: luigiDiLeo },
  { name: 'Emanuele Falcone', image: emanueleFalcone2 },
  { name: 'Antonio Riondino', image: antonioRiondino },
];

export const specialistMedia = [
  { name: 'Alberto Cicolella', image: albertoCicolella },
  { name: 'Mino D’Emiliano', image: minoDemiliano },
  { name: 'Giuseppe Quaranta', image: giuseppeQuaranta },
  { name: 'Enzo Labianca', image: enzoLabianca },
];

export const testimonialMedia = [
  { name: 'Angelo d’Addato', image: angelo },
  { name: 'Bruno Montanari', image: bruno },
  { name: 'Eleonora d’Amato', image: eleonora },
  { name: 'Giovanni Dell’Ernia', image: giovanni },
];

export const suppliers = [
  'dbn srl di Nunzia de Benedittis',
  'Alta Edilizia',
  'Edil 2000 di Vincenzo Squeo',
  'Di Pinto S.a.s.',
];
