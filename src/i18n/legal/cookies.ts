import type { Lang } from '../config';
import { routes } from '../config';

const mail = '<a href="mailto:info@falconedil.com">info@falconedil.com</a>';

export const cookiesHtml: Record<Lang, string> = {
  it: `
<div class="legal-box"><p><strong>In breve:</strong> questo sito non installa cookie di profilazione, di marketing o di statistica di terze parti. Per questo motivo non è necessario alcun banner di consenso.</p></div>
<h2>1. Cosa sono i cookie</h2>
<p>I cookie sono piccoli file di testo che i siti visitati inviano al dispositivo dell’utente, dove vengono memorizzati per essere ritrasmessi agli stessi siti alla visita successiva. Tecnologie simili (come il <em>local/session storage</em> del browser) funzionano in modo analogo.</p>
<h2>2. Strumenti utilizzati da questo sito</h2>
<table><thead><tr><th>Nome</th><th>Tipo</th><th>Finalità</th><th>Durata</th></tr></thead><tbody>
<tr><td><code>fe-loaded</code></td><td>Session storage tecnico</td><td>Evita di mostrare l’animazione di caricamento iniziale più di una volta per sessione</td><td>Fino alla chiusura della scheda</td></tr>
<tr><td><code>fe-wa-hint</code></td><td>Session storage tecnico</td><td>Mostra il suggerimento del pulsante WhatsApp una sola volta per sessione</td><td>Fino alla chiusura della scheda</td></tr>
</tbody></table>
<p>Si tratta di strumenti strettamente tecnici, che non contengono dati personali e per i quali, ai sensi dell’art. 122 del Codice Privacy e delle Linee guida del Garante del 10 giugno 2021, non è richiesto il consenso.</p>
<p>I caratteri tipografici sono ospitati direttamente sul server del sito: nessuna richiesta viene inviata a servizi esterni come Google Fonts.</p>
<h2>3. Servizi di terze parti</h2>
<p>I pulsanti verso WhatsApp, Google Maps, Facebook, Instagram e LinkedIn sono semplici collegamenti: nessun contenuto di terze parti viene caricato finché l’utente non li utilizza. Una volta aperti, tali servizi applicano le proprie politiche sui cookie.</p>
<h2>4. Come gestire i cookie</h2>
<p>L’utente può in ogni momento cancellare o bloccare cookie e dati del sito dalle impostazioni del proprio browser.</p>
<h2>5. Contatti</h2>
<p>Per qualsiasi domanda: ${mail}. Per maggiori informazioni sul trattamento dei dati consulta l’<a href="${routes.privacy.it}">Informativa sulla privacy</a>.</p>`,

  en: `
<div class="legal-box"><p><strong>In short:</strong> this website does not set any profiling, marketing or third-party analytics cookies. That is why no consent banner is needed.</p></div>
<h2>1. What cookies are</h2>
<p>Cookies are small text files that websites send to your device, where they are stored and sent back to the same websites on your next visit. Similar technologies (such as the browser’s <em>local/session storage</em>) work in the same way.</p>
<h2>2. What this website uses</h2>
<table><thead><tr><th>Name</th><th>Type</th><th>Purpose</th><th>Duration</th></tr></thead><tbody>
<tr><td><code>fe-loaded</code></td><td>Technical session storage</td><td>Prevents the opening loading animation from playing more than once per session</td><td>Until the tab is closed</td></tr>
<tr><td><code>fe-wa-hint</code></td><td>Technical session storage</td><td>Shows the WhatsApp button hint only once per session</td><td>Until the tab is closed</td></tr>
</tbody></table>
<p>These are strictly technical tools that contain no personal data and, under the ePrivacy rules, do not require consent.</p>
<p>Fonts are hosted on the website’s own server: no requests are sent to external services such as Google Fonts.</p>
<h2>3. Third-party services</h2>
<p>The buttons linking to WhatsApp, Google Maps, Facebook, Instagram and LinkedIn are plain links: no third-party content is loaded until you use them. Once opened, those services apply their own cookie policies.</p>
<h2>4. Managing cookies</h2>
<p>You can delete or block cookies and site data at any time from your browser settings.</p>
<h2>5. Contact</h2>
<p>For any questions: ${mail}. For more information on how we process data, see our <a href="${routes.privacy.en}">Privacy policy</a>.</p>`,

  bg: `
<div class="legal-box"><p><strong>Накратко:</strong> този сайт не поставя бисквитки за профилиране, маркетинг или статистика на трети страни. Затова не е необходим банер за съгласие.</p></div>
<h2>1. Какво са бисквитките</h2>
<p>Бисквитките са малки текстови файлове, които посещаваните сайтове изпращат към устройството ви, където се съхраняват и при следващо посещение се изпращат обратно към същите сайтове. Подобни технологии (като <em>local/session storage</em> на браузъра) работят по сходен начин.</p>
<h2>2. Какво използва този сайт</h2>
<table><thead><tr><th>Име</th><th>Вид</th><th>Цел</th><th>Продължителност</th></tr></thead><tbody>
<tr><td><code>fe-loaded</code></td><td>Техническо session storage</td><td>Не позволява началната анимация при зареждане да се показва повече от веднъж за сесия</td><td>До затваряне на раздела</td></tr>
<tr><td><code>fe-wa-hint</code></td><td>Техническо session storage</td><td>Показва подсказката на бутона за WhatsApp само веднъж за сесия</td><td>До затваряне на раздела</td></tr>
</tbody></table>
<p>Това са строго технически инструменти, които не съдържат лични данни и съгласно правилата за електронна поверителност не изискват съгласие.</p>
<p>Шрифтовете се хостват директно на сървъра на сайта: не се изпращат заявки към външни услуги като Google Fonts.</p>
<h2>3. Услуги на трети страни</h2>
<p>Бутоните към WhatsApp, Google Maps, Facebook, Instagram и LinkedIn са обикновени връзки: не се зарежда съдържание на трети страни, докато не ги използвате. След като ги отворите, тези услуги прилагат собствените си политики за бисквитки.</p>
<h2>4. Управление на бисквитките</h2>
<p>Можете по всяко време да изтриете или блокирате бисквитките и данните на сайта от настройките на браузъра си.</p>
<h2>5. Контакт</h2>
<p>За въпроси: ${mail}. Повече информация за обработването на данните ще намерите в <a href="${routes.privacy.bg}">Политиката за поверителност</a>.</p>`,
};
