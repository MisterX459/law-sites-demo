'use strict';

// Visual prototypes only. No network requests, lead storage, or production authentication.
const design = document.body.dataset.design;
const icons = {
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L9.1 11a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 1.9Z"/>',
  lock: '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2"/>',
  shield: '<path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
  scales: '<path d="M12 3v18m-6 0h12M3 7h18M6 7l-4 8h8L6 7Zm12 0-4 8h8l-4-8Z"/>',
  building: '<path d="m3 8 9-5 9 5H3Zm2 3v7m5-7v7m4-7v7m5-7v7M2 21h20"/>',
  office: '<path d="M3 21V3h12v18M15 9h6v12M6 7h5M6 11h5M6 15h5M18 13h1m-1 4h1M1 21h22"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a18 18 0 0 1 0 18 18 18 0 0 1 0-18Z"/>',
  award: '<circle cx="12" cy="8" r="5"/><path d="m8 12-1 9 5-3 5 3-1-9"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  users: '<circle cx="9" cy="7" r="3"/><path d="M3 21v-4a6 6 0 0 1 12 0v4m1-17a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 5v2"/>',
  money: '<rect x="2" y="5" width="20" height="14" rx="1"/><circle cx="12" cy="12" r="3"/><path d="M5 8v8m14-8v8"/>',
  gavel: '<path d="m14 3 7 7m-9-5 7 7m-9-3 5 5M3 21h10M3 18h10m1-7L5 20"/>',
  diamond: '<path d="m3 8 5-5h8l5 5-9 13L3 8Zm0 0h18M8 3l4 18 4-18"/>',
  language: '<path d="M3 5h12M9 3v2m-4 3c1 4 5 7 9 8M13 5c0 5-4 10-10 12m11 4 5-13 5 13m-8-4h6"/>',
  clipboard: '<rect x="5" y="5" width="14" height="17" rx="1"/><path d="M9 3h6v4H9V3Zm0 11 2 2 4-5"/>',
  message: '<path d="M21 15a3 3 0 0 1-3 3H8l-5 4V5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v10Z"/>',
  arrow: '<path d="M4 12h16m-6-6 6 6-6 6"/>',
  send: '<path d="m3 3 19 9L3 21l4-9-4-9Zm4 9h15"/>',
  user: '<circle cx="12" cy="8" r="3"/><path d="M5 21v-3a7 7 0 0 1 14 0v3M9 16h6"/>',
};
const icon = (name, cls = '') => `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.shield}</svg>`;
const label = (text, symbol = '') => `<p class="eyebrow">${symbol ? icon(symbol) : ''}${text}</p>`;
const button = (text, target = '#kontakt', cls = '') => `<a class="button ${cls}" href="${target}">${text}${icon('arrow')}</a>`;
const phone = '+48225550199';

function header() {
  const menus = {
    corporate: [['Obszary praktyki', 'praktyka'], ['Prawnicy', 'zespol'], ['Doświadczenie / Wyniki', 'doswiadczenie'], ['Kontakt', 'kontakt']],
    immigration: [['Karty Pobytu', 'praktyka'], ['Zezwolenia na Pracę', 'proces'], ['Dla Firm', 'opinie'], ['Kontakt', 'kontakt']],
    family: [['Specjalizacje', 'praktyka'], ['Zespół', 'zespol'], ['Opinie', 'standard'], ['Kontakt', 'kontakt']],
  };
  const subtitles = {corporate: 'RADCOWIE PRAWNI & ADWOKACI', immigration: 'LEGALIZACJA POBYTU I PRACY', family: 'KANCELARIA ADWOKACKA'};
  return `<header class="site-header"><div class="header-inner"><a class="brand" href="${design}.html" aria-label="Vance & Sterling — strona główna"><span>VANCE <i>&</i> STERLING</span><small>${subtitles[design]}</small></a><nav id="main-navigation" aria-label="Nawigacja główna">${menus[design].map(([name, id]) => `<a href="#${id}">${name}</a>`).join('')}</nav><div class="header-actions"><a class="header-phone" href="tel:${phone}">${icon('phone')}<span><small>${design === 'immigration' ? 'INFOLINIA MIGRACYJNA' : design === 'family' ? 'INFOLINIA WSPARCIA 24/7' : 'INFOLINIA 24/7'}</small><strong>+48 22 555 01 99</strong></span></a><button class="account-button" type="button" aria-label="Informacja o panelu klienta">${icon('user')}</button><button class="menu-toggle" type="button" aria-label="Otwórz menu" aria-expanded="false" aria-controls="main-navigation"><span></span><span></span><span></span></button></div></div></header>`;
}

function footer() {
  const content = {
    corporate: [
      'Kompleksowe wsparcie prawne dla przedsiębiorstw, najwyższa precyzja analityczna i dyskrecja w kluczowych sporach gospodarczych oraz procesach transakcyjnych.',
      'WPISANI NA LISTĘ OIRP I ORA', 'SPECJALIZACJE', ['Fuzje i Przejęcia (M&A)', 'Spory Gospodarcze i Arbitraż', 'Zgodność Regulacyjna & Compliance', 'Własność Intelektualna i Nowe Technologie'],
      'BIURA', '<strong>Warszawa</strong><p>ul. Złota 59, Piętro 21<br>00-120 Warszawa, Polska</p><strong>Nowy Jork</strong><p>One Liberty Plaza, Suite 4400<br>New York, NY 10006, USA</p>',
      'KONTAKT I WERYFIKACJA', 'Weryfikacja konfliktu interesów i bezpośrednia linia dla klientów korporacyjnych 24/7.', 'kancelaria@vancesterling.pl',
    ],
    immigration: [
      'Kancelaria Legalizacji Pobytu i Pracy w Polsce. Świadczymy kompleksowe usługi prawne i operacyjne w zakresie relokacji cudzoziemców, procedur wojewody oraz legalnego zatrudnienia.',
      'CERTYFIKOWANI DORADCY IMIGRACYJNI', 'OBSZARY PRAKTYKI', ['Karta Pobytu Czasowego (Praca / JDG)', 'Pobyt Stały i Rezydent Długoterminowy UE', 'Zezwolenia na Pracę Typ A, B, C', 'Obywatelstwo i Paszport RP'],
      'ODDZIAŁY KANCELARII', '<strong>Warszawa</strong><p>Al. Jerozolimskie 85, Piętro 12<br>02-001 Warszawa</p><strong>Wrocław & Kraków</strong><p>ul. Legnicka 52, Wrocław<br>ul. Pawia 9, Kraków</p>',
      'KONTAKT & KONSULTACJE', 'Przyjmujemy zgłoszenia w języku polskim, angielskim oraz ukraińskim.', 'kontakt@vancesterling.pl',
    ],
    family: [
      'Profesjonalna i niezależna prawna, precyzja i dyskretna ochrona interesów w sprawach rodzinnych, majątkowych i sukcesyjnych.',
      'CERTYFIKOWANI EKSPERCI PRAWA', 'OBSZARY PRAWA', ['Spory Majątkowe i Rozwody', 'Opieka i Władza Rodzicielska', 'Planowanie Spadkowe i Sukcesja', 'Mediacje i Porozumienia'],
      'SIEDZIBY KANCELARII', '<strong>Warszawa</strong><p>ul. Nowogrodzka 45, lok. piętro<br>00-695 Warszawa</p><strong>Kraków</strong><p>ul. Floriańska 18<br>31-021 Kraków</p>',
      'KONTAKT I KONSULTACJE', 'Wstępna weryfikacja kolizji interesów i poufna rejestracja dostępności.', 'kancelaria@vancesterling.pl',
    ],
  }[design];
  return `<footer class="site-footer"><div class="container footer-grid"><div><a class="footer-brand" href="${design}.html">VANCE <i>&</i> STERLING</a><p>${content[0]}</p><span class="certification">${icon('award')}${content[1]}</span></div><div><h3>${content[2]}</h3>${content[3].map(t => `<a href="#praktyka">${t}</a>`).join('')}</div><div><h3>${content[4]}</h3>${content[5]}</div><div><h3>${content[6]}</h3><p>${content[7]}</p><small>CENTRALA TELEFONICZNA</small><a href="tel:${phone}">+48 22 555 01 99</a><small>${design === 'immigration' ? 'POCZTA ELEKTRONICZNA' : 'POUFNY ADRES E-MAIL'}</small><a href="mailto:${content[8]}">${content[8]}</a></div></div><div class="container footer-legal"><p><strong>Nota prawna i informacyjna:</strong> Treści zawarte na niniejszej stronie internetowej mają charakter wyłącznie ogólnoinformacyjny i nie stanowią indywidualnej porady prawnej ani opinii adwokackiej. Przekazanie informacji przez formularz kontaktowy nie skutkuje samoistnym nawiązaniem stosunku pełnomocnictwa. Wszelkie informacje przekazywane przed potwierdzeniem przyjęcia sprawy wymagają indywidualnej weryfikacji.</p><div class="legal-row"><span>© 2025 Vance & Sterling Kancelaria Prawna. Wszelkie prawa zastrzeżone.</span><div><button type="button" data-notice="privacy">Polityka Prywatności i RODO</button><button type="button" data-notice="rules">Zasady Świadczenia Usług</button><a href="index.html">Wszystkie projekty</a></div></div></div></footer>`;
}

function field(name, text, placeholder, type = 'text', required = true) {
  return `<label class="field" for="${design}-${name}"><span>${text}${required ? ' <b>*</b>' : ''}</span><input id="${design}-${name}" name="${name}" type="${type}" placeholder="${placeholder}" ${required ? 'required' : ''} autocomplete="${name === 'name' ? 'name' : type === 'email' ? 'email' : type === 'tel' ? 'tel' : 'organization'}" ${type === 'tel' ? 'pattern="[+0-9 ()-]{7,}"' : ''}></label>`;
}
function selectField(text, options) {
  return `<label class="field full" for="${design}-category"><span>${text} <b>*</b></span><select name="category" id="${design}-category" required><option value="">Wybierz obszar wsparcia</option>${options.map(t => `<option>${t}</option>`).join('')}</select></label>`;
}
function consent(text) {
  return `<label class="consent"><input type="checkbox" name="consent" required><span>${text}</span></label>`;
}
function demoNotice() {
  return '<p class="demo-form-note">Formularz demonstracyjny — nie wysyła ani nie zapisuje danych.</p><p class="form-status" role="status" aria-live="polite"></p>';
}

function corporate() {
  const practices = [
    ['office', 'Fuzje i Przejęcia (M&A)', 'Strukturyzacja fuzji horyzontalnych i wertykalnych, wykupów lewarowanych (LBO/MBO), wydzielania zorganizowanych części przedsiębiorstwa (carve-out) oraz obrony przed wrogimi przejęciami. Doświadczone negocjacje poparte analizą ryzyk.', ['Wezwania giełdowe', 'Nabycie aktywów', 'Joint Ventures']],
    ['globe', 'Transakcje Międzynarodowe', 'Obsługa zagranicznych inwestycji bezpośrednich (FDI), audyty jurysdykcyjne, zgodność transgraniczna i strukturyzacja podatkowa. Bezpieczne prowadzenie procesów na rynkach europejskich, amerykańskich i azjatyckich.', ['Inwestycje FDI', 'Struktury FX', 'Arbitraż handlowy']],
    ['gavel', 'Zgodność Regulacyjna i Compliance', 'Zgłoszenia koncentracji do UOKiK / Komisji Europejskiej, audyty antymonopolowe, procedury whistleblowing oraz systemy AML. Skuteczna ochrona członków zarządów i organów nadzorczych przed odpowiedzialnością osobistą i karno-skarbową.', ['Zgłoszenia UOKiK', 'Obrona antymonopolowa', 'Audyty AML']],
    ['award', 'Własność Intelektualna i Nowe Technologie', 'Kompleksowa ochrona praw autorskich i patentowych, umowy wdrożeniowe i licencyjne SaaS, zgodność z EU AI Act oraz transfer technologii w projektach deep-tech. Ochrona kluczowych aktywów niematerialnych w procesach scale-up.', ['Portfele IP', 'Wdrożenia AI & IT', 'Umowy licencyjne']],
  ];
  return `<section class="corporate-hero"><img class="hero-background" src="assets/image0.jpg" alt="" fetchpriority="high"><div class="container corporate-hero-content">${label('PRAWO KORPORACYJNE · RYNKI KAPITAŁOWE · TRANSAKCJE MIĘDZYNARODOWE', 'shield')}<h1>Strategiczne doradztwo<br class="desktop-break"> prawne dla przedsiębiorstw i transakcji M&A.</h1><p class="hero-description">Doradzamy zarządom spółek, funduszom private equity oraz międzynarodowym korporacjom w złożonych procesach fuzji i przejęć, zgodności regulacyjnej, prawie spółek i ładzie instytucjonalnym.</p><div class="hero-buttons">${button('Umów konsultację biznesową', '#kontakt', 'button-light')}<a class="partner-phone" href="tel:${phone}">${icon('phone')}<span><small>BEZPOŚREDNI KONTAKT Z PARTNEREM</small>+48 22 555 01 99</span></a></div><aside class="conflict-note">${label('WERYFIKACJA KONFLIKTU INTERESÓW', 'lock')}<p>Wszystkie zgłoszenia podlegają natychmiastowej procedurze weryfikacji bezstronności i mogą maksymalnie 2 godziny do wpłynięcia zapytania.</p><strong>${icon('shield')}Ścisła Dyskrecja i Tajemnica Adwokacka</strong></aside></div></section>
  <section class="corporate-stats" id="doswiadczenie"><div class="container grid three">${[
    ['ALOKACJA KAPITAŁU','4.2 mld zł','Wartość doradztwa transakcyjnego','W transakcjach krajowych oraz transgranicznych wspierających wykupy lewarowane i wydzielenia spółek.','building'],
    ['SKALA REALIZACJI','280+','Zrealizowanych transakcji korporacyjnych','W sektorach nowych technologii, przemysłu, medycyny, logistyki oraz infrastruktury.','diamond'],
    ['DOŚWIADCZENIE RYNKOWE','40 lat','Łącznego doświadczenia partnerów','Liderzy wywodzący się z czołowych międzynarodowych kancelarii oraz organów nadzoru finansowego.','award'],
  ].map(([k,n,t,p,i])=>`<article class="corporate-stat"><div>${label(k)}${icon(i)}</div><h2>${n}</h2><h3>${t}</h3><p>${p}</p></article>`).join('')}</div></section>
  <section class="corporate-practice section" id="praktyka"><div class="container"><div class="section-heading split-heading"><div>${label('OBSZARY PRAKTYKI')}<h2>Wyspecjalizowane działy prawne na kluczowe momenty rozwoju biznesu.</h2></div><p>Łączymy precyzyjną analizę prawną, wyczucie biznesowe i bezkompromisową skuteczność procesową w sprawach decydujących o wartości przedsiębiorstwa.</p></div><div class="grid two practice-grid">${practices.map(([i,t,p,tags],n)=>`<article class="practice-card"><span class="icon-tile">${icon(i)}</span>${label(`OBSZAR 0${n+1}`)}<h3>${t}</h3><p>${p}</p><a class="practice-link" href="#kontakt" aria-label="Zapytaj o ${t}"><span class="tags">${tags.map(x=>`<span>${x}</span>`).join('')}</span>${icon('arrow')}</a></article>`).join('')}</div></div></section>
  <section class="corporate-standard" id="zespol"><div class="container standard-layout"><figure class="office-image"><img src="assets/image1.jpg" alt="Przeszklona sala konferencyjna kancelarii" loading="lazy"><figcaption><small>CZYSTOŚĆ MANDATU</small>Cyfrowa weryfikacja powiązań kapitałowych w czasie rzeczywistym.</figcaption></figure><div>${label('NASZ STANDARD')}<h2>Doświadczenie zamiast rutyny.<br>Skuteczna ochrona interesów spółki.</h2><p>W przeciwieństwie do masowych korporacji prawniczych, gdzie kluczowe sprawy bywają delegowane początkującym aplikantom, w Vance & Sterling każda transakcja jest bezpośrednio prowadzona i nadzorowana przez doświadczonych partnerów z wieloletnim stażem negocjacyjnym.</p><div class="grid two standard-cards"><article>${icon('shield')}<h3>Osobiste Zaangażowanie Partnera</h3><p>Sprawę od początku do końca prowadzi wyznaczony partner zarządzający odpowiedzialny za mandat.</p></article><article>${icon('lock')}<h3>Błyskawiczna Gotowość Transakcyjna</h3><p>Natychmiastowe formowanie zespołów do zabezpieczeń sądowych, wezwań giełdowych i pilnych zamknięć.</p></article></div></div></div></section>
  <section class="corporate-contact section" id="kontakt"><div class="container contact-layout"><div class="contact-intro">${label('KONTAKT I WYCENA MANDATU')}<h2>Poufne doradztwo.<br>Szybka weryfikacja.</h2><p>Prześlij podstawowe informacje o planowanej transakcji lub sprawie korporacyjnej, aby rozpocząć procedurę weryfikacji braku konfliktu interesów. Wszystkie zapytania są chronione pełną tajemnicą zawodową.</p><div class="contact-facts"><article>${label('SIEDZIBA GŁÓWNA W WARSZAWIE','building')}<strong>ul. Złota 59 (Skylight), Piętro 21<br>00-120 Warszawa</strong><p>Centrum biznesowe Warszawy, dogodny dojazd i parking podziemny.</p></article><article>${label('LINIA PRIORYTETOWA DLA ZARZĄDÓW','users')}<a class="serif" href="tel:${phone}">+48 22 555 01 99</a><p>Bezpośrednie połączenie z sekretariatem partnerów zarządzających.</p></article><article>${label('GWARANCJA TAJEMNICY ADWOKACKIEJ','shield')}<p>Każda korespondencja i informacja przekazana za pośrednictwem formularza jest objęta ustawową tajemnicą zawodową oraz najwyższą starannością. Dane nie są ujawniane podmiotom trzecim.</p></article></div></div><form class="contact-form corporate-form" data-demo-form>${label('ETAP 01 // PRZYJĘCIE SPRAWY')}<h3>Formularz zgłoszenia sprawy korporacyjnej</h3><p class="form-intro">Podaj podstawowe parametry transakcyjne lub prawne do wstępnej analizy.</p><div class="fields grid two">${field('name','IMIĘ I NAZWISKO','np. Tomasz Kowalski')}${field('company','NAZWA FIRMY / PODMIOTU','np. Solaris Capital Sp. z o.o.')}${field('email','SŁUŻBOWY E-MAIL','zarzad@firma.pl','email')}${field('phone','TELEFON','+48 000 000 000','tel')}${selectField('RODZAJ SPRAWY',practices.map(x=>x[1]))}<label class="field full" for="corporate-message"><span>KRÓTKI OPIS SPRAWY <small>Poufność gwarantowana prawem</small></span><textarea id="corporate-message" name="message" rows="4" placeholder="Opisz kontekst transakcji, oczekiwany harmonogram, drugą stronę umowy lub specyfikę zapotrzebowania…"></textarea></label></div>${consent('Wyrażam zgodę na przetwarzanie danych osobowych (RODO) w celu weryfikacji bezstronności i przedstawienia oferty. Przyjmuję do wiadomości, że wysłanie formularza nie stanowi nawiązania umowy prowadzenia stosunku pełnomocnictwa do chwili podpisania umowy.')}<button class="button submit-button" type="submit">Wyślij zapytanie korporacyjne ${icon('globe')}</button><div class="form-assurances"><span>${icon('shield')}Szyfrowanie TLS 256-Bit</span><span>${icon('clock')}Czas odpowiedzi do 2h</span></div>${demoNotice()}</form></div></section>`;
}

function immigration() {
  const metrics = [
    ['Skuteczność','98.5%','Pozytywnych Decyzji','Drobiazgowa kontrola formalna przed złożeniem wniosku eliminuje wezwania do uzupełnienia braków i ryzyko odmowy.','STANDARD','Pełnomocnictwo Prawne','check'],
    ['Doświadczenie','3500+','Uzyskanych Kart Pobytu','Pobyt czasowy (praca, JDG, zarząd, studia), pobyt stały oraz status rezydenta długoterminowego UE dla klientów z 40+ krajów.','ZASIĘG','Wszystkie Województwa','office'],
    ['Czas Reakcji','14 Dni','Średni Czas Przygotowania','Błyskawiczne przygotowanie kompletnego wniosku i załączników (Załącznik nr 1, ZUS RCA, podatki, umowy) i rezerwacja terminu.','GWARANCJA','Legalny Pobyt od Dnia 1','clock'],
    ['Obsługa B2B','120+','Firm i Korporacji','Stała obsługa legalizacji zatrudnienia: zezwolenia Typ A, oświadczenia, powiadomienia, testy rynku pracy oraz audyty teczek pracowniczych.','SEKTORY','IT, Produkcja, Logistyka','office'],
  ];
  return `<div class="migration-strip"><div class="container"><span>${icon('check')} SZYBKA WERYFIKACJA DOKUMENTÓW · BEZPŁATNA WSTĘPNA ANALIZA SZANS NA ZEZWOLENIE</span><span>Zgodność z przepisami Urzędu Wojewódzkiego · Poufność 100%</span><a href="tel:${phone}">Zadzwoń: +48 22 555 01 99 →</a></div></div>
  <section class="immigration-hero" id="kontakt"><div class="container immigration-hero-layout"><div class="immigration-hero-copy">${label('KANCELARIA LEGALIZACJI CUDZOZIEMCÓW','shield')}<h1>Legalizacja Pobytu i Pracy w Polsce.<br><em>Bezpiecznie, Sprawnie</em> i Zgodnie z Prawem.</h1><p class="hero-description">Kompleksowa pomoc cudzoziemcom i pracodawcom: karty pobytu czasowego i stałego, zezwolenia na pracę, obywatelstwo oraz relokacja specjalistów B2B/IT. Przejmujemy wszelkie formalności przed Urzędem Wojewódzkim.</p><div class="grid two hero-benefits"><article>${icon('check')}<div><strong>100% Zgodności z Urzędem</strong><p>Bez braków formalnych i opóźnień</p></div></article><article>${icon('language')}<div><strong>Wsparcie w Twoim Języku</strong><p>Dedykowany koordynator sprawy PL/EN/UA</p></div></article></div><div class="social-proof"><img src="assets/image6.jpg" alt="Zespół wspierający klientów" loading="lazy"><div><span class="stars">★★★★★</span><strong>PONAD 3500+ POZYTYWNYCH DECYZJI</strong><p>Lider legalizacji w Warszawie, Krakowie i Wrocławiu</p></div></div></div><form class="contact-form immigration-form" data-demo-form><div class="form-topline">${label('FORMULARZ ZGŁOSZENIOWY')}<span>● Bezpieczne Połączenie SSL</span></div><h2>Darmowa Wstępna Weryfikacja Sprawy</h2><p class="form-intro">Bezpośrednia ocena szans przez eksperta ds. legalizacji. Bez zobowiązań.</p><div class="fields grid two">${field('name','Imię i nazwisko','np. Jan Kowalski')}${field('phone','Numer telefonu','np. +48 500 123 456','tel')}${field('email','Adres e-mail','jan@example.com','email')}${field('citizenship','Obywatelstwo / Kraj pochodzenia','np. Ukraina, Indie, Gruzja')}${selectField('Rodzaj sprawy',['Karta pobytu czasowego','Pobyt stały','Zezwolenie na pracę','Obywatelstwo RP','Obsługa firmy'])}<label class="field full" for="immigration-message"><span>Krótki opis sytuacji <b>*</b></span><textarea id="immigration-message" name="message" rows="3" required placeholder="Jaki jest obecny tytuł pobytowy? Kiedy kończy się wiza/paszport? Czy wniosek został już złożony…"></textarea></label></div>${consent('Wyrażam zgodę na kontakt w celu wstępnej analizy prawnej sprawy imigracyjnej. Konsultacja jest bezpłatna i poufna.')}<button class="button submit-button" type="submit">${icon('clipboard')}Sprawdź swoje szanse bezpłatnie</button>${demoNotice()}</form></div></section>
  <section class="immigration-metrics section" id="praktyka"><div class="container"><div class="section-heading split-heading"><div>${label('DOŚWIADCZENIE W PROCEDURACH WOJEWODY')}<h2>Skuteczność Potwierdzona Decyzjami</h2></div><p>Doskonale znamy realia polskich Urzędów Wojewódzkich (DUW, MUW, PUW) oraz procedury odwoławcze przed Szefem UdSC. Chronimy Twój legalny pobyt.</p></div><div class="grid four metrics-grid">${metrics.map(([k,n,t,p,l,v,i])=>`<article class="metric-card"><div class="metric-label"><span>${k}</span>${icon(i)}</div><h3>${n}</h3><strong>${t}</strong><p>${p}</p><div class="metric-bottom"><small>${l}</small><b>${v}</b></div></article>`).join('')}</div><p class="metrics-footnote">Czas trwania postępowania administracyjnego zależy od obłożenia właściwego Urzędu Wojewódzkiego. Zapewniamy pełną pieczę nad terminami i monitowanie akt.</p></div></section>
  <section class="immigration-process section" id="proces"><div class="container"><div class="section-heading centered">${label('BEZPIECZNA I PRZEJRZYSTA ŚCIEŻKA')}<h2>Prosty Proces Legalizacji</h2><p>Przejmujemy ciężar procedur administracyjnych, abyś mógł spokojnie pracować i żyć w Polsce.</p></div><div class="grid three process-grid">${[
    ['Wstępny Audyt i Kompletowanie Dokumentów','Weryfikujemy Twoją sytuację prawną, umowy, ubezpieczenie ZUS i ciągłość legalnego pobytu. Przygotowujemy listę wymaganych załączników i wypełniamy wniosek bez ryzyka błędów.','Audyt Szans + 0 Ryzyka Formalnego','check'],
    ['Złożenie Wniosku i Reprezentacja Przed Urzędem','Rezerwujemy termin na odciski palców, składamy dokumenty, uzyskujemy czerwoną pieczęć w paszporcie i reprezentujemy Cię przed inspektorem Urzędu Wojewódzkiego na mocy pełnomocnictwa.','Oficjalne Pełnomocnictwo Prawne','building'],
    ['Odbiór Decyzji i Karty Pobytu','Monitorujemy przebieg sprawy, odpowiadamy na urzędowe pisma, składamy ponaglenia w razie bezczynności organu i asystujemy przy odbiorze gotowego plastiku karty pobytu.','Bezpieczny Pobyt do 3 Lat','award'],
  ].map(([t,p,b,i],n)=>`<article class="process-card"><span class="step-number">0${n+1}</span><h3>${t}</h3><p>${p}</p><strong>${icon(i)}${b}</strong></article>`).join('')}</div></div></section>
  <section class="immigration-testimonials section" id="opinie"><div class="container"><div class="section-heading split-heading"><div>${label('GŁOSY KLIENTÓW I PARTNERÓW')}<h2>Pewność Prawna. Spokój dla Ciebie i Twojej Firmy.</h2></div><p class="review-score">Ocena 4.9/5 na podstawie ponad 320 opinii</p></div><div class="grid two testimonials-grid"><figure class="testimonial"><span class="stars">★★★★★</span><span class="quote-mark" aria-hidden="true">”</span><blockquote>„Przenosiłem się do Warszawy na kontrakt Senior Software Engineera. Samodzielna próba kontaktu z urzędem graniczyła z cudem. Kancelaria Vance & Sterling przejęła wszystkie dokumenty, uzyskała termin na odciski i pilotowała sprawę aż do decyzji na 3 lata. Profesjonalizm na najwyższym poziomie.”</blockquote><figcaption><img src="assets/image2.jpg" alt="" loading="lazy"><div><strong>Alexey Melnyk</strong><span>Lead Developer · Karta pobytu czasowego (IT)</span></div></figcaption></figure><figure class="testimonial"><span class="stars">★★★★★</span><span class="quote-mark" aria-hidden="true">”</span><blockquote>„Zatrudniamy ponad 40 zagranicznych inżynierów i specjalistów technicznych. Kancelaria kompleksowo prowadzi zezwolenia typ A, oświadczenia oraz audyty zgodności z PIP i Strażą Graniczną. Zero przestojów produkcyjnych i 100% spokoju dla naszego działu HR.”</blockquote><figcaption><img src="assets/image4.jpg" alt="" loading="lazy"><div><strong>Piotr Czarnecki</strong><span>Dyrektor HR · Spółka Inżynieryjna (Warszawa)</span></div></figcaption></figure></div></div></section>
  <section class="immigration-cta"><div class="container"><div class="cta-panel"><div>${label('DYŻUR KONSULTACYJNY DLA CUDZOZIEMCÓW','shield')}<h2>Potrzebujesz legalizacji pobytu<br>lub zatrudnienia obcokrajowców?</h2><p>Kończy Ci się wiza, otrzymałeś pismo z urzędu lub planujesz zatrudnienie cudzoziemca? Skonsultuj swoją sprawę z naszym prawnikiem już teraz.</p></div><div class="cta-actions"><a class="button button-gold" href="tel:${phone}">${icon('phone')}<span><small>INFOLINIA MIGRACYJNA</small>+48 22 555 01 99</span></a><a class="button button-light" href="#kontakt">${icon('clipboard')}Wypełnij formularz online</a></div></div></div></section>`;
}

function family() {
  const practices = [
    ['scales','Rozwody i Podział Majątku','Złożona wycena udziałów w spółkach, nieruchomości zagranicznych, aktywów inwestycyjnych oraz weryfikacja przepływów finansowych z najwyższą starannością.','ŚCIEŻKI MEDIACJI'],
    ['users','Władza Rodzicielska i Kontakty','Konstruowanie zrównoważonych planów opieki naprzemiennej, kwestii alimentacyjnych i relokacji, stawiając dobrostan emocjonalny dziecka w centrum uwagi.','PLANY WYCHOWAWCZE'],
    ['building','Planowanie Spadkowe i Sukcesja','Tworzenie fundacji rodzinnych, testamentów windykacyjnych, pełnomocnictw medycznych i map sukcesyjnych chroniących przed sporami o zachowek.','MODELE SUKCESJI'],
    ['heart','Intercyzy i Umowy Małżeńskie','Przejrzyste, partnerskie porozumienia majątkowe zabezpieczające majątki osobiste, udziały w przedsiębiorstwach oraz wzajemne oczekiwania stron.','USTROJE MAJĄTKOWE'],
  ];
  return `<section class="family-hero"><div class="container family-hero-layout"><div>${label('EMPATYCZNE WSPARCIE • NIEZŁOMNA SKUTECZNOŚĆ','shield')}<h1>Ochrona tego, co najważniejsze w kluczowych momentach życia.</h1><p class="hero-description">Dyskretne i empatyczne wsparcie prawne w sprawach rozwodowych, podziale majątku, opiece nad dziećmi oraz prawie spadkowym i sukcesji majątkowej. Prowadzimy Twoją rodzinę ku trwałemu porozumieniu i bezpieczeństwu.</p><div class="hero-buttons">${button('Zarezerwuj poufną konsultację')}<span class="confidential-badge">${icon('lock')}<span><strong>100% POUFNOŚCI</strong>Tajemnica Adwokacka</span></span></div><div class="family-stats"><div><strong>24+</strong><span>LATA DOŚWIADCZENIA</span></div><div><strong>98%</strong><span>SPRAW ZAKOŃCZONYCH UGODĄ</span></div><div><strong>380 mln zł</strong><span>ZABEZPIECZONEGO MAJĄTKU</span></div></div></div><figure class="family-hero-image"><img src="assets/image7.jpg" alt="Poufna konsultacja rodzinna w jasnym gabinecie" fetchpriority="high"><figcaption>${icon('heart')}<div><strong>Spokój Ducha na Pierwszym Miejscu</strong><span>Dobro dzieci, stabilność i godność każdej ze stron.</span></div></figcaption></figure></div></section>
  <section class="family-practice section" id="praktyka"><div class="container"><div class="section-heading split-heading"><div>${label('OBSZARY PRAKTYKI')}<h2>Dedykowana Opieka Prawna na Każdym Etapie</h2></div><p>Zmiany w życiu rodzinnym wymagają wyważonej równowagi między stanowczą ochroną prawa a głęboką ludzką wrażliwością.</p></div><div class="grid four family-practice-grid">${practices.map(([i,t,p,l])=>`<article class="family-practice-card"><span class="icon-tile">${icon(i)}</span><h3>${t}</h3><p>${p}</p><a href="#kontakt">${l} ›</a></article>`).join('')}</div></div></section>
  <section class="family-principle" id="zespol"><div class="container principle-layout"><img src="assets/image8.jpg" alt="Mecenas Eleonora Haven podczas konsultacji" loading="lazy"><div>${label('NASZA NACZELNA ZASADA','shield')}<blockquote>„Spory rodzinne nie muszą niszczyć przyszłości. Zapewniamy spokój i merytoryczną ochronę majątku oraz relacji w momentach, gdy emocje biorą górę.”</blockquote><strong>Mec. Eleonora Haven</strong><p>Starszy Partner ds. Mediacji · Członek Izby Adwokackiej i Polskiego Centrum Mediacji</p></div></div></section>
  <section class="family-pillars section" id="standard"><div class="container"><div class="section-heading centered">${label('STANDARD HAVEN & STONE')}<h2>Trzy Filary Naszej Kancelarii</h2><p>Odrzucamy niepotrzebne spory sądowe na rzecz przemyślanej strategii, bezpieczeństwa i całkowitej jasności.</p></div><div class="grid three pillars-grid">${[
    ['money','Empatyczne podejście','Podchodzimy do spraw rodzinnych z wysoką inteligencją emocjonalną. Ograniczamy napięcia, chronimy dzieci przed sporami sądowymi i dążymy do ugodowych porozumień.',['Procedury rozwodu polubownego','Komunikacja zorientowana na porozumienie']],
    ['shield','Dyskrecja i ochrona prywatności','Publiczne rozprawy niosą ryzyko wizerunkowe. Stosujemy mediacje niejawne, wyłączenie jawności posiedzeń oraz szyfrowane kanały kontaktu, chroniąc prywatność.',['Klauzule NDA i wnioski o niejawność','Anonimowa weryfikacja wstępna sprawy']],
    ['money','Przejrzyste zasady rozliczeń','Niepewność kosztów nie powinna być źródłem stresu. Oferujemy przejrzyste cenniki, pakiety ryczałtowe i etapowe rozliczenia mediacji bez żadnych ukrytych kosztów.',['Stałe pakiety planowania majątku','Bieżący wgląd w rozliczenia i brak ukrytych kosztów']],
  ].map(([i,t,p,list],n)=>`<article class="pillar-card"><span class="icon-tile">${icon(i)}</span>${label(`FILAR 0${n+1}`)}<h3>${t}</h3><p>${p}</p><ul>${list.map(x=>`<li>${icon('check')}${x}</li>`).join('')}</ul></article>`).join('')}</div></div></section>
  <section class="family-contact section" id="kontakt"><div class="container family-contact-panel"><div class="family-contact-intro">${label('BEZPIECZNY KONTAKT','lock')}<h2>Poufne zapytanie prawne</h2><p>Nawiązanie kontaktu w sprawach rodzinnych wymaga zaufania. Każda rozmowa jest w pełni chroniona tajemnicą adwokacką. Twoje dane nie są nikomu udostępniane.</p><div class="family-contact-facts"><article>${icon('shield')}<div><strong>Gwarancja Dyskretnego Kontaktu</strong><p>Kontaktujemy się wyłącznie przez wskazaną przez Ciebie formę łączności.</p></div></article><article>${icon('clock')}<div><strong>Godziny Konsultacji</strong><p>Poniedziałek – Piątek: 8:00 – 18:30<br>Spotkania weekendowe po wcześniejszym uzgodnieniu.</p></div></article><article>${icon('message')}<div><strong>Wstępna Weryfikacja Kolizji Interesów</strong><p>Odpowiedź na zapytanie w ciągu 2 godzin roboczych.</p></div></article></div><a class="direct-phone" href="tel:${phone}">${icon('phone')}<span><small>WOLISZ KONTAKT BEZPOŚREDNI?</small><strong>+48 22 555 01 99</strong></span></a></div><form class="contact-form family-form" data-demo-form><div class="fields grid two">${field('name','IMIĘ I NAZWISKO','Jan Kowalski')}${field('email','ADRES E-MAIL','jan.kowalski@example.pl','email')}${field('phone','NUMER TELEFONU','+48 000 000 000','tel')}<label class="field" for="family-category"><span>KATEGORIA SPRAWY <b>*</b></span><select name="category" id="family-category" required><option value="">Wybierz obszar sprawy</option>${practices.map(x=>`<option>${x[1]}</option>`).join('')}</select></label><fieldset class="contact-preference full"><legend>PREFEROWANY SPOSÓB KONTAKTU *</legend><div><label><input type="radio" name="contact" value="phone" checked>Telefon</label><label><input type="radio" name="contact" value="email">E-mail</label><label><input type="radio" name="contact" value="sms">SMS / Wiadomość</label></div></fieldset><label class="field full" for="family-message"><span>KRÓTKA WIADOMOŚĆ / PREFEROWANE TERMINY (OPCJONALNIE)</span><textarea id="family-message" name="message" rows="4" placeholder="Opisz kluczowe okoliczności lub preferowane godziny kontaktu. Do czasu formalnej weryfikacji prosimy nie podawać danych strony przeciwnej."></textarea></label></div><div class="family-submit"><p>Wysłanie formularza rozpoczyna procedurę weryfikacji i wstępnego ustalenia terminu.</p><button class="button" type="submit">${icon('send')}Prześlij poufne zapytanie</button></div>${demoNotice()}</form></div></section>
  <section class="family-trust"><div class="container grid four">${[['award','Izba Adwokacka','CERTYFIKOWANI ADWOKACI'],['shield','Rekomendacje Klientów','NAJWYŻSZE OCENY RYNKOWE'],['award','Ranking Prawników 2025','WYRÓŻNIENIE LIDERA PRAWA'],['shield','Tajemnica Adwokacka','PEŁNE BEZPIECZEŃSTWO DANYCH']].map(([i,t,p])=>`<div>${icon(i)}<strong>${t}</strong><small>${p}</small></div>`).join('')}</div></section>`;
}

document.querySelector('#app').innerHTML = `${header()}<main id="main">${({corporate,immigration,family}[design])()}</main>${footer()}<dialog class="notice-dialog" aria-labelledby="notice-title"><button class="dialog-close" type="button" aria-label="Zamknij">×</button><p class="eyebrow">PROJEKT DEMONSTRACYJNY</p><h2 id="notice-title"></h2><p id="notice-body"></p><button class="button dialog-dismiss" type="button">Rozumiem</button></dialog>`;

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-navigation');
function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Otwórz menu');
  nav.classList.remove('is-open');
}
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu');
  nav.classList.toggle('is-open', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
document.addEventListener('click', e => { if (!e.target.closest('.site-header')) closeMenu(); });
window.matchMedia('(min-width: 981px)').addEventListener('change', closeMenu);

document.querySelectorAll('[data-demo-form]').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const status = form.querySelector('.form-status');
    status.textContent = 'To jest demonstracja formularza. Dane nie zostały wysłane ani zapisane. W gotowej witrynie zgłoszenie trafi do kancelarii.';
    status.classList.add('visible');
    status.scrollIntoView({behavior: 'smooth', block: 'nearest'});
  });
});
const dialog = document.querySelector('.notice-dialog');
const messages = {
  account: ['Panel klienta', 'Ta wersja odtwarza projekt wizualny. Logowanie, panel kancelarii i obsługa rzeczywistych zgłoszeń nie zostały jeszcze podłączone.'],
  privacy: ['Prywatność w demonstracji', 'Formularze w tej wersji nie wysyłają ani nie zapisują danych. Docelowa polityka prywatności i zasady przetwarzania danych wymagają przygotowania przed uruchomieniem witryny dla klientów.'],
  rules: ['Zasady świadczenia usług', 'To demonstracyjny projekt strony kancelarii. Oferta, dane kontaktowe, wyniki, opinie i informacje o prawnikach pochodzą z projektu graficznego i wymagają potwierdzenia przed publikacją.'],
};
function showNotice(key) {
  document.querySelector('#notice-title').textContent = messages[key][0];
  document.querySelector('#notice-body').textContent = messages[key][1];
  dialog.showModal();
}
document.querySelector('.account-button').addEventListener('click', () => showNotice('account'));
document.querySelectorAll('[data-notice]').forEach(b => b.addEventListener('click', () => showNotice(b.dataset.notice)));
dialog.querySelectorAll('.dialog-close,.dialog-dismiss').forEach(b => b.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', e => { if (e.target === dialog) { const r = dialog.getBoundingClientRect(); if(e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close(); } });
