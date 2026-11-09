/**
 * Falcon Edil — contenuti del sito.
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
  legalName: 'Falcon Edil',
  tagline: 'Costruzioni edili civili e industriali',
  description:
    'Falcon Edil è un’impresa edile con una solida reputazione nel settore. Offre servizi di costruzione di appartamenti, ristrutturazione, manutenzione, restauro e consulenza, sia per progetti residenziali che commerciali.',
  vat: '03575200716',
  founder: 'Emanuele Falcone',
  founderRole: 'Geometra · Legale rappresentante',
  yearsExperience: 16,
  email: 'info@falconedil.com',
  emailFounder: 'e.geom.falcone@falconedil.com',
  whatsapp: '393667141862',
  hours: [
    { days: 'Lunedì – Sabato', time: '07:00 – 18:00' },
    { days: 'Domenica', time: 'Chiuso' },
  ],
  social: [
    { label: 'Facebook', href: 'https://www.facebook.com/emanuele.falcone.750?locale=it_IT' },
    { label: 'Instagram', href: 'https://www.instagram.com/emanuele1203/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/emanuele-falcone-96ab1b36/' },
  ],
};

export const offices = [
  {
    id: 'italia',
    country: 'Italia',
    label: 'Sede centrale Italia',
    street: 'Via Libertà 8',
    postalCode: '76015',
    city: 'Trinitapoli',
    region: 'BT',
    countryCode: 'IT',
    full: 'Via Libertà 8, 76015 Trinitapoli (BT), Italia',
    phone: '+39 366 7141862',
    phoneHref: 'tel:+393667141862',
    coords: { lat: 41.3586, lng: 16.0897 },
    coordsLabel: '41.358° N · 16.089° E',
    maps: 'https://www.google.com/maps/search/?api=1&query=Via+Libert%C3%A0+8%2C+76015+Trinitapoli+BT',
  },
  {
    id: 'bulgaria',
    country: 'Bulgaria',
    label: 'Sede centrale Bulgaria',
    street: 'Blvd. Alexandar Stamboliyski 74',
    postalCode: '1303',
    city: 'Sofia',
    region: 'Sofia',
    countryCode: 'BG',
    full: 'Blvd. Alexandar Stamboliyski 74, 1303 Sofia, Bulgaria',
    phone: '+359 877 632714',
    phoneHref: 'tel:+359877632714',
    coords: { lat: 42.6977, lng: 23.3219 },
    coordsLabel: '42.697° N · 23.321° E',
    maps: 'https://www.google.com/maps/search/?api=1&query=Bulevard+Aleksandar+Stamboliyski+74%2C+1303+Sofia',
  },
] as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Chi siamo', href: '/chi-siamo/' },
  { label: 'Servizi', href: '/servizi/' },
  { label: 'Progetti', href: '/progetti/' },
  { label: 'Contatti', href: '/contatti/' },
];

/* ------------------------------------------------------------------ */
/* Numeri                                                              */
/* ------------------------------------------------------------------ */

export const stats = [
  { value: 512, suffix: '+', label: 'Progetti completati con successo' },
  { value: 16, suffix: '+', label: 'Anni di esperienza con orgoglio' },
  { value: 1120, suffix: '+', label: 'Costruzioni e ristrutturazioni completate' },
  { value: 1520, suffix: '+', label: 'Cantieri previsti per i prossimi cinque anni' },
];

/* ------------------------------------------------------------------ */
/* Servizi                                                             */
/* ------------------------------------------------------------------ */

export type Service = {
  slug: string;
  title: string;
  short: string;
  body: string;
  image: ImageMetadata;
  points: string[];
};

export const services: Service[] = [
  {
    slug: 'nuove-costruzioni',
    title: 'Appartamenti di nuova costruzione',
    short: 'Efficienza energetica, design moderno e infrastrutture aggiornate.',
    body: 'Gli appartamenti di nuova costruzione offrono molti vantaggi, tra cui efficienza energetica, design moderno e infrastrutture aggiornate. Sono particolarmente apprezzati per l’uso di materiali e tecnologie all’avanguardia, come elettrodomestici a basso consumo energetico e spazi progettati per massimizzare il comfort. Inoltre, le nuove proprietà richiedono meno manutenzione rispetto a quelle più vecchie e spesso includono aree comuni, come giardini o aree fitness.',
    image: cantierePlovdiv,
    points: ['Efficienza energetica', 'Materiali all’avanguardia', 'Meno manutenzione'],
  },
  {
    slug: 'riparazioni-restauro',
    title: 'Riparazioni e restauro abitazioni',
    short: 'Funzionalità ed estetica della casa, riportate al loro splendore.',
    body: 'Le riparazioni e i restauri sono essenziali per mantenere o ripristinare la funzionalità e l’estetica di una casa. Il restauro si concentra sul recupero dell’integrità architettonica e strutturale di un edificio, spesso coinvolgendo elementi storici o di valore. Le riparazioni, invece, possono includere interventi minori come la riparazione di persiane, infissi o la sostituzione di impianti idraulici o di riscaldamento danneggiati.',
    image: condominioDopo,
    points: ['Recupero strutturale', 'Edifici storici', 'Infissi e impianti'],
  },
  {
    slug: 'pavimenti-solari',
    title: 'Ripristino di pavimenti solari',
    short: 'Lastrici solari impermeabili, duraturi e resistenti alle intemperie.',
    body: 'La ristrutturazione dei pavimenti solari prevede la pulizia e rimozione del vecchio pavimento, la verifica del sottofondo per stabilità e impermeabilità, la riparazione del sottofondo ed il livellamento, se necessario, l’impermeabilizzazione con guaine protettive, la posa in opera del nuovo materiale scelto per il pavimento e le finiture con sigillanti per resistere alle intemperie. Questi passaggi garantiscono un pavimento solare duraturo e resistente alle condizioni atmosferiche.',
    image: lastricoDopo,
    points: ['Verifica del sottofondo', 'Impermeabilizzazione', 'Posa e sigillatura'],
  },
  {
    slug: 'consulenza',
    title: 'Consulenza',
    short: 'Guida esperta su costi, tempi, rischi e scelta degli appaltatori.',
    body: 'La consulenza in loco è essenziale per il buon esito dei progetti. I consulenti forniscono una guida esperta sulla gestione del progetto, sulla stima dei costi e sulla selezione degli appaltatori, assicurando che i progetti siano completati nel rispetto del budget e delle scadenze. Inoltre, aiutano a identificare i rischi, a prevenire i ritardi e a mantenere la qualità, fornendo un’analisi dei rischi legati ai costi e ai tempi, che migliora l’efficienza del progetto.',
    image: consulente,
    points: ['Stima dei costi', 'Gestione del progetto', 'Analisi dei rischi'],
  },
  {
    slug: 'architettura',
    title: 'Architettura',
    short: 'Il progetto che guida l’intero cantiere: spazio, estetica, funzione.',
    body: 'L’ingegnere e l’architetto creano il progetto che guida l’intero processo di costruzione, definendo lo spazio, l’estetica e la funzionalità dell’edificio. Il loro lavoro stabilisce le specifiche tecniche, estetiche e di sicurezza. Inoltre, contribuisce a garantire la sostenibilità del progetto, integrando soluzioni innovative e materiali ad alta efficienza energetica. Infine, mantengono il coordinamento dell’intero cantiere.',
    image: pratica,
    points: ['Specifiche tecniche', 'Sostenibilità', 'Coordinamento cantiere'],
  },
  {
    slug: 'servizio-gru',
    title: 'Servizio gru',
    short: 'Sollevamento e movimentazione dei carichi, in efficienza e sicurezza.',
    body: 'Il servizio di gru è essenziale in un cantiere, in quanto offre numerosi vantaggi per l’efficienza e la sicurezza del progetto. Le gru consentono di sollevare e trasportare carichi pesanti, riducendo il lavoro manuale e accelerando il processo di costruzione. Inoltre, l’uso delle gru garantisce la sicurezza, prevenendo gli incidenti e migliorando la gestione dei materiali in cantiere.',
    image: gru,
    points: ['Carichi pesanti', 'Tempi ridotti', 'Sicurezza in cantiere'],
  },
];

/** Servizi elencati nel footer del sito originale */
export const servicesShortList = [
  'Appartamenti di nuova costruzione',
  'Riparazioni e ristrutturazioni di abitazioni',
  'Ristrutturazione di pavimenti solari',
  'Tinteggiatura di appartamenti',
  'Impianti elettrici ed idraulici',
];

/** "Noi garantiamo — Servizi di qualità" (home originale) */
export const guarantees = [
  {
    title: 'Esperienza sul campo',
    body: 'L’esperienza sul campo è essenziale per sviluppare competenze pratiche e acquisire una conoscenza approfondita del settore edile.',
    image: esperienza,
  },
  {
    title: 'Personale di costruzione',
    body: 'La qualificazione e l’esperienza del personale sono essenziali per il successo di progetti di costruzione complessi.',
    image: personale,
  },
  {
    title: 'Operazioni tecnologiche',
    body: 'Le operazioni tecnologiche nel settore edile si stanno evolvendo rapidamente per rispondere alle sfide e alle opportunità dell’era digitale.',
    image: operativita,
  },
  {
    title: 'Consulenza',
    body: 'La consulenza edilizia è un servizio essenziale per garantire il successo dei progetti di costruzione, offrendo competenze specialistiche e supporto completo dall’inizio alla fine del processo.',
    image: consulenza,
  },
  {
    title: 'Progettazione',
    body: 'La progettazione degli edifici è fondamentale per creare edifici sicuri, funzionali, sostenibili ed esteticamente gradevoli, contribuendo sia al benessere delle persone che alla protezione dell’ambiente.',
    image: progetto,
  },
  {
    title: 'Realizzazione',
    body: 'Diverse sono le figure professionali coinvolte nell’esecuzione delle costruzioni; la costruzione di edifici è un processo complesso che richiede una gestione efficace e una serie di competenze tecniche.',
    image: cantiereModena,
  },
];

/** I 4 pilastri del fondatore (home originale) */
export const pillars = [
  {
    title: 'Formazione e certificazioni',
    body: 'Formazione e certificazioni sono state essenziali per iniziare la mia carriera come appaltatore edile.',
  },
  {
    title: 'Esperienza pratica',
    body: 'Nel corso degli anni ho accumulato una vasta esperienza pratica nella gestione di progetti di costruzione, dalla pianificazione al completamento.',
  },
  {
    title: 'Innovazione tecnologica',
    body: 'Adotto sempre nuove tecnologie e pratiche di costruzione sostenibili, che sono principalmente la chiave del mio successo.',
  },
  {
    title: 'Sicurezza sul posto di lavoro',
    body: 'Mantengo un ambiente di lavoro sicuro, che è una priorità costante per me.',
  },
];

/** "Curiamo ogni minimo particolare" — processo */
export const process = [
  {
    title: 'Pianificazione',
    body: 'Rigorosa pianificazione e supervisione dei progetti, con il computo metrico estimativo che garantisce precisione nei costi e nei tempi.',
  },
  {
    title: 'Progettazione',
    body: 'Ingegneri e architetti definiscono spazio, estetica e funzionalità, assicurando che ogni fase lavori in sinergia con le altre.',
  },
  {
    title: 'Tecniche innovative',
    body: 'Attenzione meticolosa alla scelta dei materiali e all’implementazione di tecniche costruttive innovative e sostenibili.',
  },
  {
    title: 'Team',
    body: 'Team multidisciplinari coordinati per garantire qualità, sicurezza e rispetto delle normative locali, fino alla consegna.',
  },
];

/* ------------------------------------------------------------------ */
/* Progetti                                                            */
/* ------------------------------------------------------------------ */

export type Project = {
  title: string;
  place: string;
  country: string;
  status: 'completato' | 'in-corso';
  category: string;
  image: ImageMetadata;
  before?: ImageMetadata;
};

export const projects: Project[] = [
  {
    title: 'Restauro pavimentazione solare',
    place: 'Zapponeta',
    country: 'Italia',
    status: 'completato',
    category: 'Pavimenti solari',
    image: lastricoDopo,
    before: lastricoPrima,
  },
  {
    title: 'Restauro condominio',
    place: 'Trinitapoli',
    country: 'Italia',
    status: 'completato',
    category: 'Restauro',
    image: condominioDopo,
    before: condominioPrima,
  },
  {
    title: 'Pavimentazione concessionaria KIA',
    place: 'Lexy-Metz',
    country: 'Francia',
    status: 'completato',
    category: 'Pavimentazioni',
    image: autosaloneLexy,
  },
  {
    title: 'Restauro pavimentazione e piscina',
    place: 'Longlaville',
    country: 'Francia',
    status: 'completato',
    category: 'Pavimentazioni',
    image: piscinaLonglaville,
  },
  {
    title: 'Costruzione ultimata',
    place: 'Modena',
    country: 'Italia',
    status: 'in-corso',
    category: 'Nuova costruzione',
    image: internoModena,
  },
  {
    title: 'Costruzione condominio',
    place: 'Plovdiv',
    country: 'Bulgaria',
    status: 'in-corso',
    category: 'Nuova costruzione',
    image: cantierePlovdiv,
  },
  {
    title: 'Costruzione abitazione',
    place: 'Bari',
    country: 'Italia',
    status: 'in-corso',
    category: 'Nuova costruzione',
    image: costruzioneBari,
  },
  {
    title: 'Restauro villa privata',
    place: 'Trinitapoli',
    country: 'Italia',
    status: 'in-corso',
    category: 'Restauro',
    image: villaTrinitapoli,
  },
];

export const gallery = [
  { image: cantiereTrinitapoli, alt: 'Ponteggio su facciata, cantiere a Trinitapoli' },
  { image: costruzioneTerrazzo, alt: 'Operaio al lavoro su una facciata con piattaforma aerea' },
  { image: cantiereCasale, alt: 'Ponteggio su edificio in costruzione' },
  { image: betoniera, alt: 'Autobetoniera e pompa calcestruzzo in cantiere' },
  { image: cantiereFucci, alt: 'Lavori su terrazzo con vista sul paese' },
  { image: mezzi, alt: 'Mezzi operativi Falcon Edil in cantiere' },
  { image: operativita, alt: 'Restauro di un condominio con piattaforma aerea' },
  { image: sicurezza, alt: 'Squadra Falcon Edil con imbracature di sicurezza in quota' },
  { image: costruzioneGru, alt: 'Edificio in costruzione con gru a torre' },
];

/* ------------------------------------------------------------------ */
/* Persone                                                             */
/* ------------------------------------------------------------------ */

export const leadership = [
  { name: 'Luigi di Leo', title: 'Ing.', role: 'Progettista', image: luigiDiLeo },
  { name: 'Emanuele Falcone', title: 'Geom.', role: 'Legale rappresentante', image: emanueleFalcone2 },
  { name: 'Antonio Riondino', title: 'Arch.', role: 'Progettista', image: antonioRiondino },
];

export const specialists = [
  { name: 'Alberto Cicolella', role: 'Capo Reparto Costruzioni', image: albertoCicolella },
  { name: 'Mino D’Emiliano', role: 'Amministratore Reparto Infrastrutture Elettriche', image: minoDemiliano },
  { name: 'Giuseppe Quaranta', role: 'Capo Installatore Energia Elettrica', image: giuseppeQuaranta },
  { name: 'Enzo Labianca', role: 'Dirigente Installazioni Impianti Idrici e Riscaldamento', image: enzoLabianca },
];

export const testimonials = [
  {
    name: 'Angelo d’Addato',
    role: 'Panetteria · Rosticceria · Pasticceria',
    place: 'San Ferdinando di Puglia',
    image: angelo,
    quote:
      'Ha costruito da zero la mia bottega-laboratorio, situata a San Ferdinando di Puglia, ha eseguito tutte le rifiniture con scrupolosa cura ed ha rispettato i tempi di consegna a fine lavori. Grazie mille, mi rivolgerò alla vostra impresa edile per altri lavori.',
  },
  {
    name: 'Bruno Montanari',
    role: 'Imprenditore',
    place: 'Francia',
    image: bruno,
    quote:
      'Ho chiamato FALCON EDIL in Francia dove vivo e lavoro come imprenditore, per installare una pavimentazione presso una concessionaria di automobili a Lexy ed una pavimentazione esterna con massetto in una villa privata a Longlaville; che dire… semplicemente Eccellente!!!',
  },
  {
    name: 'Eleonora d’Amato',
    role: 'Insegnante',
    place: 'Barletta',
    image: eleonora,
    quote:
      'FALCON EDIL ha restaurato i due piani della mia casa ottocentesca a Barletta; meticoloso e preciso nelle rifiniture e nella scelta dei materiali, ha un team ben coordinato. Sono veramente soddisfatta di tutto, soprattutto quando ho visto i lavori ultimati e la mia casa tornata al suo antico splendore.',
  },
  {
    name: 'Giovanni Dell’Ernia',
    role: 'Imprenditore agricolo',
    place: 'Trani',
    image: giovanni,
    quote:
      'Lo scorso maggio ho contattato il geometra Falcone, poiché avevo fretta di costruire in quattro mesi un appartamento nella mia area edificabile sita a Trani, fretta dettata dall’imminente matrimonio di mio figlio, previsto per settembre. Grazie a FALCON EDIL mio figlio Giacomo ha realizzato il suo sogno.',
  },
];

export const suppliers = [
  'dbn srl di Nunzia de Benedittis',
  'Alta Edilizia',
  'Edil 2000 di Vincenzo Squeo',
  'Di Pinto S.a.s. — Soluzioni per l’edilizia',
];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const faqs = [
  {
    q: 'Quanto tempo ci vuole per costruire un appartamento?',
    a: [
      'Il tempo necessario per costruire un appartamento può variare notevolmente in base a diversi fattori, tra cui le dimensioni dell’appartamento, la complessità del progetto, la disponibilità delle risorse e l’efficienza del team di costruzione. Tuttavia, in genere, la costruzione di un appartamento richiede da diversi mesi a più di un anno.',
    ],
  },
  {
    q: 'Come si può pagare la costruzione di una casa?',
    a: [
      'La costruzione di una casa può essere finanziata attraverso diverse opzioni:',
    ],
    list: [
      ['Prestiti e mutui', 'È possibile ottenere un prestito o un mutuo da istituti finanziari o banche per coprire i costi di costruzione, incluso l’acquisto del terreno e la costruzione stessa.'],
      ['Risparmi personali', 'Utilizzare i risparmi accumulati per finanziare parte o l’intero processo di costruzione.'],
      ['Crowdfunding immobiliare', 'Piattaforme in cui diversi investitori contribuiscono finanziariamente al progetto in cambio di una quota di proprietà.'],
      ['Vendita di un immobile esistente', 'Se possiedi già un immobile, puoi venderlo per finanziare la costruzione della tua nuova casa.'],
      ['Sovvenzioni e incentivi', 'Alcuni governi offrono incentivi fiscali o sovvenzioni per promuovere la costruzione di nuove case.'],
      ['Pagamento rateale', 'A volte è possibile stabilire un accordo con l’impresa per pagare a rate durante il processo di costruzione.'],
    ],
    after:
      'È importante valutare attentamente le opzioni e consultare un consulente finanziario o un esperto del settore edile per prendere decisioni informate.',
  },
  {
    q: 'Abbiamo garanzie per l’assistenza e la manutenzione della casa?',
    a: ['Sì, ci sono diverse garanzie e servizi per l’assistenza e la manutenzione della casa:'],
    list: [
      ['Garanzia sui lavori di costruzione', 'Copre la qualità e la durabilità dei lavori; può variare da 2 a 10 anni a seconda delle normative locali e del tipo di lavoro svolto.'],
      ['Assistenza e risposta alle emergenze', 'Servizi per guasti e problemi domestici, compresi impianti idraulici ed elettrici, riscaldamento e altro ancora.'],
      ['Garanzie sul prodotto', 'Elettrodomestici, impianti e altri componenti possono essere coperti da garanzie specifiche dei produttori.'],
      ['Piani di manutenzione', 'Ispezioni e manutenzioni regolari per mantenere la casa in buone condizioni nel tempo.'],
      ['Assicurazione sulla casa', 'Le polizze possono coprire danni accidentali, incendi, inondazioni e altro ancora.'],
      ['Assistenza infissi', 'Manutenzione di finestre e porte per garantirne il corretto funzionamento e la sicurezza.'],
    ],
    after:
      'Le garanzie e i servizi di supporto possono variare notevolmente: è importante leggere attentamente i contratti per capire cosa è incluso.',
  },
];

export const faqPlain = faqs.map((f) => ({
  q: f.q,
  a: [
    ...f.a,
    ...(f.list ? f.list.map(([t, d]) => `${t}: ${d}`) : []),
    ...(f.after ? [f.after] : []),
  ].join(' '),
}));
