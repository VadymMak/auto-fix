import type {
  NavItem,
  PricingCategory,
  GalleryImage,
  WhyItem,
  Review,
  ContactItem,
  StatItem,
  ChatConfig,
  ImageMap,
} from './types';

export const USE_LOCAL_IMAGES = false;

export const IMAGES: ImageMap = {
  hero: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=1600&q=80',
  about: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop',
  gallery: [
    'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&h=350&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&h=350&fit=crop',
    'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=500&h=350&fit=crop',
    'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&h=350&fit=crop',
  ],
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Služby', href: '#sluzby' },
  { label: 'Cenník', href: '#cennik' },
  { label: 'Galéria', href: '#galeria' },
  { label: 'Recenzie', href: '#recenzie' },
  { label: 'Kontakt', href: '#kontakt' },
  { label: 'Objednať', href: '#objednat' },
];

export const STATS: StatItem[] = [
  { value: '15+', label: 'Rokov skúseností' },
  { value: '5000+', label: 'Spokojných áut' },
  { value: '4.8★', label: 'Hodnotenie zákazníkov' },
  { value: '2 roky', label: 'Záruka na práce' },
];

export const SERVICES: PricingCategory[] = [
  {
    id: 'mechanika',
    name: 'Mechanika',
    items: [
      { id: 'm1', name: 'Výmena oleja', description: 'Výmena motorového oleja a filtra', price: '€39', duration: '30 min' },
      { id: 'm2', name: 'Výmena brzdových platničiek', description: 'Predné alebo zadné brzdy', price: '€89', duration: '45 min' },
      { id: 'm3', name: 'Diagnostika motora', description: 'Kompletná diagnostika motora', price: '€49', duration: '30 min' },
      { id: 'm4', name: 'Výmena rozvodov', description: 'Výmena rozvodového remeňa', price: '€249', duration: '3-4 hod' },
      { id: 'm5', name: 'Oprava podvozku', description: 'Tlmiče, pružiny, ramená', price: '€149', duration: '2 hod' },
      { id: 'm6', name: 'Geometria kolies', description: 'Nastavenie geometrie náprav', price: '€35', duration: '30 min' },
    ],
  },
  {
    id: 'pneumatiky',
    name: 'Pneumatiky',
    items: [
      { id: 'p1', name: 'Prezutie (4 kolesá)', description: 'Výmena pneumatík na diskoch', price: '€25', duration: '30 min' },
      { id: 'p2', name: 'Vyváženie kolies', description: 'Dynamické vyváženie kolies', price: '€20', duration: '30 min' },
      { id: 'p3', name: 'Uskladnenie pneumatík', description: 'Sezónne uskladnenie pneumatík', price: '€39/sezóna', duration: '' },
      { id: 'p4', name: 'Oprava defektu', description: 'Oprava prepichnutej pneumatiky', price: '€15', duration: '20 min' },
    ],
  },
  {
    id: 'elektrika',
    name: 'Elektrika',
    items: [
      { id: 'e1', name: 'Diagnostika elektroniky', description: 'Čítanie chybových kódov', price: '€45', duration: '30 min' },
      { id: 'e2', name: 'Výmena batérie', description: 'Nová autobatéria + montáž', price: '€29+', duration: '20 min' },
      { id: 'e3', name: 'Oprava klimatizácie', description: 'Doplnenie chladiva, servis', price: '€89', duration: '1 hod' },
      { id: 'e4', name: 'Výmena žiaroviek', description: 'Predné, zadné, denné svetlá', price: '€15', duration: '15 min' },
    ],
  },
  {
    id: 'karoseria',
    name: 'Karoséria',
    items: [
      { id: 'k1', name: 'Oprava laku', description: 'Lokálna oprava poškodeného laku', price: '€99+', duration: '1-2 dni' },
      { id: 'k2', name: 'Leštenie auta', description: 'Strojné leštenie karosérie', price: '€79', duration: '3 hod' },
      { id: 'k3', name: 'Oprava preliačin PDR', description: 'Beznástriekový spôsob opravy', price: '€59+', duration: '1-2 hod' },
      { id: 'k4', name: 'Čistenie interiéru', description: 'Hĺbkové čistenie interiéru', price: '€49', duration: '2 hod' },
    ],
  },
];

export const WHY_ITEMS: WhyItem[] = [
  {
    id: 'w1',
    icon: '🔧',
    title: 'Certifikovaní mechanici',
    description: 'Náš tím tvorí 8 certifikovaných mechanikov s dlhoročnými skúsenosťami.',
  },
  {
    id: 'w2',
    icon: '⚙️',
    title: 'Originálne náhradné diely',
    description: 'Používame iba originálne alebo certifikované náhradné diely od overených dodávateľov.',
  },
  {
    id: 'w3',
    icon: '⚡',
    title: 'Expresná diagnostika',
    description: 'Kompletná diagnostika vozidla za 30 minút — rýchlo zistíme každý problém.',
  },
  {
    id: 'w4',
    icon: '🛡️',
    title: '2-ročná záruka na práce',
    description: 'Na všetky vykonané práce poskytujeme 2-ročnú záruku. Kvalita je naša priorita.',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Marek S.',
    initial: 'M',
    text: 'Výborný servis! Prišiel som s problémom s brzdami, za hodinu bolo všetko vyriešené. Cena zodpovedá kvalite. Určite sa vrátim.',
    rating: 5,
    car: 'Škoda Octavia',
  },
  {
    id: 'r2',
    name: 'Jana K.',
    initial: 'J',
    text: 'Konečne servis, ktorému sa dá dôverovať! Vysvetlili mi všetko zrozumiteľne a neúčtovali nič navyše. Veľmi odporúčam.',
    rating: 5,
    car: 'VW Golf',
  },
  {
    id: 'r3',
    name: 'Peter H.',
    initial: 'P',
    text: 'Profesionálny prístup od prvej minúty. Rýchla diagnostika, kvalitná oprava. AutoFix je môj servis číslo jeden v Trenčíne.',
    rating: 5,
    car: 'BMW 320d',
  },
  {
    id: 'r4',
    name: 'Eva M.',
    initial: 'E',
    text: 'Prezuli mi pneumatiky expresne za 25 minút. Personál milý, priestory čisté. Vrátim sa na servis klimatizácie.',
    rating: 5,
    car: 'Hyundai Tucson',
  },
];

export const CONTACT_ITEMS: ContactItem[] = [
  {
    icon: '📍',
    title: 'Adresa',
    lines: ['Priemyselná 15', '911 01 Trenčín'],
  },
  {
    icon: '📞',
    title: 'Telefón',
    lines: ['+421 32 XXX XXXX'],
  },
  {
    icon: '🕐',
    title: 'Otváracie hodiny',
    lines: ['Po–Pi: 7:00 – 18:00', 'So: 8:00 – 13:00', 'Ne: Zatvorené'],
  },
  {
    icon: '✉️',
    title: 'Email',
    lines: ['info@autofix-trencin.sk'],
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 'g1', src: IMAGES.gallery[0], alt: 'Auto v servise', span: 'tall' },
  { id: 'g2', src: IMAGES.gallery[1], alt: 'Športové auto', span: 'normal' },
  { id: 'g3', src: IMAGES.gallery[2], alt: 'Mechanik pri práci', span: 'normal' },
  { id: 'g4', src: IMAGES.gallery[3], alt: 'Diagnostika vozidla', span: 'normal' },
  { id: 'g5', src: IMAGES.gallery[4], alt: 'Opravovňa', span: 'wide' },
];

export const CHAT_CONFIG: ChatConfig = {
  greeting: 'Dobrý deň! Som asistent AutoFix. Ako vám môžem pomôcť?',
  quickReplies: [
    { id: 'q1', label: 'Cenník služieb' },
    { id: 'q2', label: 'Objednať termín' },
    { id: 'q3', label: 'Otváracie hodiny' },
  ],
  whatsappNumber: '421321234567',
};
