// ─────────────────────────────────────────────────────────────────────────────
// COPY.JS — Izvor SVEG vidljivog teksta za landing stranicu.
// Doc §7: Nema hardkodovanog teksta u komponentama. Sve što je na ekranu, nalazi se ovde.
// ─────────────────────────────────────────────────────────────────────────────

export const copy = {
  // ── SEO / METADATA (Layout.astro čita ovo) ──────────────────────────────────
  metadata: {
    lang: 'sr',
    title: '150 recepata za premium koktele kod kuće',
    description:
      'Recepti za koktele spremne za žurku — jednostavni sastojci, brza priprema. Oduševi društvo, uštedi novac na preskupe kafiće i budi zvezda večeri. Uključuje i ekskluzivne bonuse.',
    canonical: 'https://150receitascopao.netlify.app',
    ogImage: '/og-cover.jpg',
    ogType: 'website',
    siteName: 'SVET KOKTELA',
  },

  // ── 1. TIMER STICKY HEADER ────────────────────────────────────────────────
  timerBar: {
    icon: '⏰',
    label: 'Ponuda ističe za:',
    initialMinutes: 9,
    initialSeconds: 57,
  },

  // ── 2. HERO ───────────────────────────────────────────────────────────────
  hero: {
    tag: '🍋 Ekskluzivna ponuda',
    titleHighlight: '150 vrhunskih recepata za koktele',
    titleConnector: 'za tvoje',
    titleHighlightGreen: 'maksimalno uživanje',
    titleEnd: 'Čak i ako si apsolutni početnik',
    deliveryLabel: 'Dobijaš trenutni pristup preko',
    deliveryChannels: [
      { label: 'WhatsApp', kind: 'whatsapp' },
      { label: 'Email', kind: 'email' },
    ],
    videoAlt: 'Prezentacija paketa od 150 recepata za domaće koktele',
    ctaLabel: '✅ ŽELIM MOJE RECEPTE ODMAH',
    ctaSub: '🔒 100% sigurna kupovina • Trenutni pristup',
  },

  // ── 3. PREDNOSTI ─────────────────────────────────────────────────────────
  benefits: {
    intro:
      'Recepti stvoreni za čisti užitak — jednostavni sastojci, brza priprema,',
    introStrong: 'neverovatan ukus i izgled kojim ćeš oduševiti svakog gosta!',
    items: [
      'Da smućkaš svaki koktel bez trunke prethodnog iskustva',
      'Da napraviš magiju bez profesionalne opreme i fensi kuhinje',
      'Da uživaš u isprobanim receptima sa sastojcima koje svuda možeš naći',
      'Da budeš glavna zvezda svake kućne žurke, bleje na vikendici ili okupljanja sa društvom',
    ],
    ctaLabel: '🍹 ŽELIM MOJE RECEPTE ODMAH',
  },

  // ── 4. KARUSEL SA RECEPTIMA ────────────────────────────────────────────────
  carousel: {
    title: '🍹 Deo recepata u kojima ćeš',
    titleHighlight: 'uživati sa ekipom!',
    slides: [
      { caption: 'Slatki poljubac', alt: 'Koktel Slatki poljubac' },
      {
        caption: 'Špansko vino sa marakujom',
        alt: 'Koktel Špansko vino sa marakujom',
      },
      { caption: 'Kremasta marakuja fantazija', alt: 'Koktel Kremasta marakuja fantazija' },
      { caption: 'Halls osveženje', alt: 'Koktel sa Halls bombonama' },
      { caption: 'Letnji povetarac', alt: 'Koktel Letnji povetarac' },
      {
        caption: 'Kajpirinja sa marakujom i kafom',
        alt: 'Koktel Kajpirinja sa marakujom i kafom',
      },
    ],
    prevLabel: 'Prethodni slajd',
    nextLabel: 'Sledeći slajd',
    dotLabel: 'Na slajd',
  },

  // ── 5. BONUSI ──────────────────────────────────────────────────────────────
  bonuses: {
    title: '🎁 I naravno, tu su i',
    titleHighlight: 'BONUSI!',
    items: [
      {
        tag: 'Bonus 1',
        title: '50 recepata za alkoholne šotove i punčeve',
        description: 'Savršena pića za žurke koja se brzo prave i lako dele sa društvom.',
        alt: '50 recepata za alkoholne šotove i punčeve',
      },
      {
        tag: 'Bonus 2',
        title: 'Pametan spisak za kupovinu — kako da uštediš lovu',
        description:
          'Saznaj tačno koje sastojke da kupiš za top koktele, a da ne pukneš gomilu para u preskupim kafićima.',
        alt: 'Spisak za kupovinu i kalkulator',
      },
      {
        tag: 'Bonus 3',
        title: '✅ Vodič: Kako da organizuješ savršeno koktel veče',
        description: 'Spremne ideje i koraci kako da napraviš nezaboravno iskustvo i raspametiš goste.',
        alt: 'Vodič za kućnu žurku',
      },
      {
        tag: 'Bonus 4',
        title: 'Video lekcija: Kako da ukrašavaš i serviraš kao profi barmen',
        description:
          'Nauči tajne vrhunske prezentacije koja obično piće pretvara u remek-delo sa 5 zvezdica.',
        alt: 'Video lekcija za dekoraciju koktela',
      },
    ],
  },

  // ── 6. CENE ──────────────────────────────────────────────────────────────
  pricing: {
    sectionId: 'cene',
    title: 'Izaberi kako želiš da počneš danas:',
    complete: {
      badge: '⭐ Najtraženije',
      title: 'Ceo paket: 150+ recepata za koktele',
      descriptionLead: '150+ recepata za brutalne domaće koktele + svi',
      descriptionStrong: 'ekskluzivni bonusi,',
      descriptionTail: 'da postaneš najbolji kućni barmen.',
      mockupAlt: 'Prikaz celog paketa sa 150 recepata',
      includesLabel: '🎁 Uključuje sve bonuse:',
      items: [
        '150+ recepata za premium koktele',
        'Spisak jeftinih alternativa za skupa pića',
        'Vodič za pametnu kupovinu sastojaka',
        'Vodič za savršenu kućnu žurku',
        'Video lekcija za profi dekoraciju',
      ],
      strikePrice: 'Umesto 3.490 din',
      price: '990 din',
      priceNote: 'trenutni pristup',
      ctaLabel: '🛒 ŽELIM CEO PAKET',
      footer: '✅ Trenutni pristup · Email + WhatsApp · Garancija 14 dana',
    },
  },

  // ── 7. GARANCIJA ───────────────────────────────────────────────────────────
  guarantee: {
    icon: '🛡️',
    title: '14 dana pune garancije',
    description:
      'Ako iz bilo kog razloga ne budeš oduševljen/a, vraćamo ti novac do poslednjeg dinara. Bez glupih pitanja i bez stresa.',
  },

  // ── 8. ČPP (Često postavljana pitanja) ────────────────────────────────────────────────
  faq: {
    title: 'Često postavljana',
    titleHighlight: 'pitanja:',
    items: [
      {
        q: 'Da li mi treba iskustvo da bih ih napravio?',
        a: 'Apsolutno ne! Recepti su objašnjeni prosto i svako može da ih smućka, čak i ako u životu nije napravio koktel.',
      },
      {
        q: 'Da li mi trebaju skupi šejkeri i profesionalna oprema?',
        a: 'Nema potrebe. Sve možeš da napraviš kod kuće sa običnim priborom koji već imaš u kuhinji.',
      },
      {
        q: 'Za koje prilike su ovi kokteli najbolji?',
        a: 'Za sve! Od opuštanja posle teškog radnog dana, preko romantične večere, do lude kućne žurke ili bleje na vikendici.',
      },
      {
        q: 'Da li su sastojci skupi?',
        a: 'Ne. Uz naš pametan spisak za kupovinu naučićeš kako da dobiješ premium ukus sa pristupačnim proizvodima iz obližnjeg marketa.',
      },
      {
        q: 'Kako dobijam pristup nakon kupovine?',
        a: 'Pristup je trenutan! Čim prođe uplata, sve ti stiže direktno na mejl i na WhatsApp.',
      },
      {
        q: 'Postoji li garancija ako mi se ne svide?',
        a: 'Naravno! Imaš punih 14 dana garancije. Ako nisi zadovoljan/na, vraćamo 100% novca.',
      },
    ],
  },

  // ── 9. HITNOST ──────────────────────────────────────────────────────────
  urgency: {
    text: '⏰ Ne odlaži — vikend se bliži, a sa njim i još jedno dosadno veče. Promeni to odmah!',
  },

  // ── 10. FINALNI CTA ─────────────────────────────────────────────────────────
  finalCta: {
    ctaLabel: '🍹 ŽELIM PRISTUP ZA 150 RECEPATA ODMAH',
    subText: '🔒 Trenutni pristup • Garancija 14 dana • Sigurno plaćanje',
  },

  // ── 11. SIGURNOST (bedževi) ────────────────────────────────────────────────
  security: {
    items: [
      { icon: '🔒', label: 'SSL Zaštita' },
      { icon: '💳', label: 'Sigurno plaćanje' },
      { icon: '📲', label: 'Trenutni pristup' },
    ],
  },

  // ── 12. FOOTER ────────────────────────────────────────────────────────────
  footer: {
    text: '© 2026 · SVET KOKTELA · Sva prava zadržana',
  },

  // ── A11Y / pomoćni tekst ──
  a11y: {
    skipToContent: 'Pređi na glavni sadržaj',
  },
};