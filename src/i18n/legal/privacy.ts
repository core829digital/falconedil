import type { Lang } from '../config';
import { routes } from '../config';

const C = {
  email: 'info@falconedil.com',
  phone: '+39 366 7141862',
  phoneHref: 'tel:+393667141862',
  vat: '03575200716',
};
const mail = `<a href="mailto:${C.email}">${C.email}</a>`;
const tel = `<a href="${C.phoneHref}">${C.phone}</a>`;

export const privacyHtml: Record<Lang, string> = {
  it: `
<div class="legal-box"><p>La presente informativa descrive come vengono trattati i dati personali degli utenti che consultano il sito <strong>falconedil.com</strong> o che contattano Falcon Edil tramite il modulo, l’email, il telefono o WhatsApp, ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 (“GDPR”) e del D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018.</p></div>
<h2>1. Titolare del trattamento</h2>
<p><strong>Falcon Edil</strong> — P.IVA ${C.vat}, con sede in Via Libertà 8, 76015 Trinitapoli (BT), Italia, in persona del legale rappresentante geom. Emanuele Falcone.<br />Email: ${mail} · Telefono: ${tel}</p>
<h2>2. Dati trattati</h2>
<h3>Dati di navigazione</h3>
<p>I sistemi informatici che ospitano il sito acquisiscono, nel normale funzionamento, alcuni dati tecnici (ad es. indirizzo IP, tipo di browser, data e ora della richiesta) la cui trasmissione è implicita nell’uso dei protocolli Internet. Tali dati sono utilizzati solo per garantire il corretto funzionamento e la sicurezza del sito e sono conservati per il tempo strettamente necessario.</p>
<h3>Dati forniti volontariamente</h3>
<p>Nome, cognome, email, telefono, località e contenuto del messaggio che l’utente inserisce nel modulo di contatto o comunica via email, telefono o WhatsApp.</p>
<h2>3. Finalità e base giuridica</h2>
<table><thead><tr><th>Finalità</th><th>Base giuridica</th></tr></thead><tbody>
<tr><td>Rispondere alle richieste di informazioni, sopralluogo e preventivo</td><td>Misure precontrattuali su richiesta dell’interessato (art. 6.1.b GDPR)</td></tr>
<tr><td>Gestione del rapporto contrattuale e adempimenti amministrativi e fiscali</td><td>Contratto e obblighi di legge (art. 6.1.b e 6.1.c GDPR)</td></tr>
<tr><td>Sicurezza del sito e prevenzione di abusi</td><td>Legittimo interesse del Titolare (art. 6.1.f GDPR)</td></tr>
</tbody></table>
<p>Il conferimento dei dati contrassegnati come obbligatori nel modulo è necessario per poter rispondere; il mancato conferimento impedisce di dare seguito alla richiesta. I dati non sono utilizzati per finalità di marketing né per processi decisionali automatizzati o profilazione.</p>
<h2>4. Modalità e conservazione</h2>
<p>I dati sono trattati con strumenti elettronici e cartacei, con misure di sicurezza adeguate. I dati delle richieste di contatto sono conservati per il tempo necessario a gestirle e, comunque, non oltre 24 mesi dall’ultimo contatto, salvo l’instaurarsi di un rapporto contrattuale; in tal caso i dati sono conservati per la durata del contratto e per i successivi 10 anni ai fini degli obblighi civilistici e fiscali.</p>
<h2>5. Destinatari</h2>
<p>I dati possono essere trattati da collaboratori autorizzati del Titolare e da fornitori che agiscono come responsabili del trattamento (ad es. fornitore di hosting, servizio di posta elettronica, eventuale servizio di inoltro del modulo di contatto, consulenti amministrativi e fiscali). I dati non sono diffusi.</p>
<p>Se l’utente sceglie di contattare il Titolare tramite <strong>WhatsApp</strong>, la comunicazione è soggetta anche all’informativa di WhatsApp Ireland Ltd. I collegamenti a Google Maps e ai profili social aprono servizi di terze parti con proprie informative.</p>
<h2>6. Trasferimento extra UE</h2>
<p>Il Titolare non trasferisce intenzionalmente i dati al di fuori dello Spazio Economico Europeo. Qualora alcuni fornitori operino al di fuori del SEE, il trasferimento avverrà sulla base di una decisione di adeguatezza della Commissione europea o di clausole contrattuali standard (artt. 45-46 GDPR).</p>
<h2>7. Diritti dell’interessato</h2>
<p>In qualsiasi momento l’utente può esercitare i diritti previsti dagli artt. 15-22 GDPR: accesso, rettifica, cancellazione, limitazione, portabilità, opposizione al trattamento e revoca del consenso eventualmente prestato, scrivendo a ${mail}.</p>
<p>L’interessato ha inoltre il diritto di proporre reclamo all’Autorità di controllo competente: in Italia il <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener">Garante per la protezione dei dati personali</a>.</p>
<h2>8. Cookie</h2>
<p>Il sito non utilizza cookie di profilazione né strumenti di analisi di terze parti. Per i dettagli consulta la <a href="${routes.cookies.it}">Politica sui cookie</a>.</p>
<h2>9. Modifiche</h2>
<p>La presente informativa può essere aggiornata. La versione in vigore è sempre pubblicata su questa pagina con la data dell’ultimo aggiornamento.</p>`,

  en: `
<div class="legal-box"><p>This notice explains how we process the personal data of users who visit <strong>falconedil.com</strong> or contact Falcon Edil through the form, by email, by phone or via WhatsApp, pursuant to Articles 13 and 14 of Regulation (EU) 2016/679 (“GDPR”) and the Italian Legislative Decree 196/2003 as amended by Legislative Decree 101/2018.</p></div>
<h2>1. Data controller</h2>
<p><strong>Falcon Edil</strong> — VAT No. IT${C.vat}, Via Libertà 8, 76015 Trinitapoli (BT), Italy, represented by its legal representative, surveyor Emanuele Falcone.<br />Email: ${mail} · Phone: ${tel}</p>
<h2>2. Data we process</h2>
<h3>Browsing data</h3>
<p>The systems hosting the website collect certain technical data during normal operation (e.g. IP address, browser type, date and time of the request), whose transmission is implicit in the use of Internet protocols. This data is used only to ensure the website works correctly and securely and is kept for no longer than strictly necessary.</p>
<h3>Data you provide</h3>
<p>First name, last name, email, phone number, location and the content of the message you enter in the contact form or send by email, phone or WhatsApp.</p>
<h2>3. Purposes and legal basis</h2>
<table><thead><tr><th>Purpose</th><th>Legal basis</th></tr></thead><tbody>
<tr><td>Replying to requests for information, site visits and quotes</td><td>Pre-contractual measures taken at your request (Art. 6(1)(b) GDPR)</td></tr>
<tr><td>Managing the contractual relationship and administrative and tax obligations</td><td>Contract and legal obligations (Art. 6(1)(b) and 6(1)(c) GDPR)</td></tr>
<tr><td>Website security and abuse prevention</td><td>Legitimate interest of the controller (Art. 6(1)(f) GDPR)</td></tr>
</tbody></table>
<p>Providing the fields marked as mandatory is necessary for us to reply; without them we cannot process your request. Your data is not used for marketing, automated decision-making or profiling.</p>
<h2>4. Processing methods and retention</h2>
<p>Data is processed electronically and on paper with appropriate security measures. Contact request data is kept for as long as necessary to handle the request and in any case for no more than 24 months after the last contact, unless a contract is entered into; in that case the data is kept for the duration of the contract and for the following 10 years to meet civil and tax obligations.</p>
<h2>5. Recipients</h2>
<p>Your data may be processed by authorised staff of the controller and by providers acting as data processors (e.g. hosting provider, email service, any contact form forwarding service, administrative and tax advisers). Your data is never disclosed to the public.</p>
<p>If you choose to contact us via <strong>WhatsApp</strong>, the communication is also subject to the privacy policy of WhatsApp Ireland Ltd. Links to Google Maps and social media open third-party services with their own privacy policies.</p>
<h2>6. Transfers outside the EU</h2>
<p>The controller does not intentionally transfer data outside the European Economic Area. If any provider operates outside the EEA, transfers will be based on an adequacy decision of the European Commission or on standard contractual clauses (Articles 45–46 GDPR).</p>
<h2>7. Your rights</h2>
<p>You may exercise your rights under Articles 15–22 GDPR at any time — access, rectification, erasure, restriction, portability, objection and withdrawal of any consent given — by writing to ${mail}.</p>
<p>You also have the right to lodge a complaint with the competent supervisory authority: in Italy, the <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener">Garante per la protezione dei dati personali</a>; in Bulgaria, the <a href="https://www.cpdp.bg" target="_blank" rel="noopener">Commission for Personal Data Protection</a>.</p>
<h2>8. Cookies</h2>
<p>This website does not use profiling cookies or third-party analytics. For details, see our <a href="${routes.cookies.en}">Cookie policy</a>.</p>
<h2>9. Changes</h2>
<p>This notice may be updated. The current version is always published on this page together with the date of the last update.</p>`,

  bg: `
<div class="legal-box"><p>Настоящата информация описва как обработваме личните данни на потребителите, които посещават <strong>falconedil.com</strong> или се свързват с Falcon Edil чрез формуляра, по имейл, по телефон или в WhatsApp, съгласно членове 13 и 14 от Регламент (ЕС) 2016/679 („GDPR“).</p></div>
<h2>1. Администратор на лични данни</h2>
<p><strong>Falcon Edil</strong> — ДДС № IT${C.vat}, със седалище Via Libertà 8, 76015 Тринитаполи (BT), Италия, представлявано от управителя Емануеле Фалконе.<br />Имейл: ${mail} · Телефон: ${tel}</p>
<h2>2. Обработвани данни</h2>
<h3>Данни при сърфиране</h3>
<p>Системите, на които се хоства сайтът, събират при нормалната си работа някои технически данни (напр. IP адрес, вид браузър, дата и час на заявката), чието предаване е присъщо на интернет протоколите. Тези данни се използват единствено за правилното функциониране и сигурността на сайта и се съхраняват само за строго необходимото време.</p>
<h3>Данни, които предоставяте</h3>
<p>Име, фамилия, имейл, телефон, местоположение и съдържанието на съобщението, което въвеждате във формуляра за контакт или изпращате по имейл, телефон или WhatsApp.</p>
<h2>3. Цели и правно основание</h2>
<table><thead><tr><th>Цел</th><th>Правно основание</th></tr></thead><tbody>
<tr><td>Отговор на запитвания за информация, оглед и оферта</td><td>Преддоговорни мерки по ваше искане (чл. 6, пар. 1, буква „б“ GDPR)</td></tr>
<tr><td>Управление на договорните отношения и административни и данъчни задължения</td><td>Договор и законови задължения (чл. 6, пар. 1, букви „б“ и „в“ GDPR)</td></tr>
<tr><td>Сигурност на сайта и предотвратяване на злоупотреби</td><td>Легитимен интерес на администратора (чл. 6, пар. 1, буква „е“ GDPR)</td></tr>
</tbody></table>
<p>Предоставянето на задължителните полета във формуляра е необходимо, за да ви отговорим; без тях не можем да обработим запитването ви. Данните не се използват за маркетинг, автоматизирано вземане на решения или профилиране.</p>
<h2>4. Начин на обработване и срок на съхранение</h2>
<p>Данните се обработват по електронен път и на хартия с подходящи мерки за сигурност. Данните от запитванията се съхраняват за времето, необходимо за обработването им, но не повече от 24 месеца след последния контакт, освен ако не бъде сключен договор; в такъв случай данните се съхраняват за срока на договора и за следващите 10 години с оглед на гражданскоправните и данъчните задължения.</p>
<h2>5. Получатели</h2>
<p>Данните могат да бъдат обработвани от упълномощени сътрудници на администратора и от доставчици, действащи като обработващи лични данни (напр. хостинг доставчик, имейл услуга, услуга за препращане на формуляра, административни и данъчни консултанти). Данните не се разпространяват публично.</p>
<p>Ако решите да се свържете с нас чрез <strong>WhatsApp</strong>, комуникацията се подчинява и на политиката за поверителност на WhatsApp Ireland Ltd. Връзките към Google Maps и социалните мрежи отварят услуги на трети страни със собствени политики.</p>
<h2>6. Предаване извън ЕС</h2>
<p>Администраторът не предава умишлено данни извън Европейското икономическо пространство. Ако някой доставчик работи извън ЕИП, предаването ще се извършва въз основа на решение на Европейската комисия относно адекватното ниво на защита или стандартни договорни клаузи (чл. 45–46 GDPR).</p>
<h2>7. Вашите права</h2>
<p>По всяко време можете да упражните правата си по чл. 15–22 GDPR — достъп, коригиране, изтриване, ограничаване, преносимост, възражение и оттегляне на дадено съгласие — като пишете на ${mail}.</p>
<p>Имате право да подадете жалба до компетентния надзорен орган: в България — <a href="https://www.cpdp.bg" target="_blank" rel="noopener">Комисията за защита на личните данни</a>; в Италия — <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener">Garante per la protezione dei dati personali</a>.</p>
<h2>8. Бисквитки</h2>
<p>Сайтът не използва бисквитки за профилиране или аналитични инструменти на трети страни. Подробности ще намерите в <a href="${routes.cookies.bg}">Политиката за бисквитките</a>.</p>
<h2>9. Промени</h2>
<p>Настоящата информация може да бъде актуализирана. Действащата версия винаги е публикувана на тази страница с датата на последната актуализация.</p>`,
};
