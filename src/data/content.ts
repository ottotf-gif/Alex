// ─────────────────────────────────────────────────────────────────────────────
//  Allt redigerbart innehåll samlat på ett ställe.
//  Ändra texter, språk, kontaktuppgifter här — komponenterna läser härifrån.
// ─────────────────────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Hem', href: '#hem' },
  { label: 'Språk', href: '#sprak' },
  { label: 'Om mig', href: '#om-mig' },
  { label: 'Videor', href: '#videor' },
  { label: 'Boka', href: '#boka' },
  { label: 'Kontakt', href: '#kontakt' },
];

export interface Language {
  name: string;
  native: string;
  code: string;        // visas stort (SV, EN, DE…)
  flag: string;        // ISO-landskod för flaggbild (se flagUrl nedan)
  tagline: string;
  description: string;
}

// Runda, skarpa flaggor hämtas från flagcdn.com (gratis, ingen nyckel).
export function flagUrl(iso: string): string {
  return `https://flagcdn.com/w160/${iso}.png`;
}

export const LANGUAGES: Language[] = [
  {
    name: 'Svenska',
    native: 'Svenska',
    code: 'SV',
    flag: 'se',
    tagline: 'För integration, studier & yrkesliv',
    description:
      'En trygg grund i svenska — från vardagssamtal till akademisk och professionell nivå.',
  },
  {
    name: 'Engelska',
    native: 'English',
    code: 'EN',
    flag: 'gb',
    tagline: 'Business & vardag',
    description:
      'Kommunicera med självförtroende i globala sammanhang, på jobbet och på resan.',
  },
  {
    name: 'Tyska',
    native: 'Deutsch',
    code: 'DE',
    flag: 'de',
    tagline: 'Nybörjare till avancerad',
    description:
      'Europas viktigaste affärsspråk — öppnar dörrar på en hel kontinent.',
  },
  {
    name: 'Franska',
    native: 'Français',
    code: 'FR',
    flag: 'fr',
    tagline: 'Le français authentique',
    description:
      'Det diplomatiska språket med global räckvidd och kulturell rikedom.',
  },
  {
    name: 'Spanska',
    native: 'Español',
    code: 'ES',
    flag: 'es',
    tagline: 'Para el mundo',
    description:
      'Talas av över 500 miljoner människor — ett av världens mest levande språk.',
  },
];

export interface Step {
  number: string;
  title: string;
  description: string;
}

export const STEPS: Step[] = [
  {
    number: '01',
    title: 'Boka din tid',
    description:
      'Välj en tid som passar dig. Första samtalet är kostnadsfritt — vi går igenom dina mål och lägger en plan tillsammans.',
  },
  {
    number: '02',
    title: 'Ha din lektion',
    description:
      'Lektioner online via video, helt anpassade efter ditt tempo, din nivå och ditt mål. Alltid personligt, aldrig mallar.',
  },
  {
    number: '03',
    title: 'Nå flyt',
    description:
      'Med regelbunden träning och rätt metodik bygger du verklig förmåga — inte bara grammatik, utan äkta kommunikation.',
  },
];

export interface Video {
  id: string;
  title: string;
  duration: string;
  views: string;
}

export const YOUTUBE_VIDEOS: Video[] = [
  {
    id: 'placeholder-1',
    title: 'Så lär du dig ett nytt språk snabbt',
    duration: '12:34',
    views: '4,2k visningar',
  },
  {
    id: 'placeholder-2',
    title: 'De 5 vanligaste misstagen när man lär sig svenska',
    duration: '8:51',
    views: '2,8k visningar',
  },
  {
    id: 'placeholder-3',
    title: 'Business English: fraser du måste kunna',
    duration: '15:22',
    views: '6,1k visningar',
  },
];

export const YOUTUBE_URL = 'https://youtube.com';

export const TIME_SLOTS = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
export const WEEK_DAYS = ['Mån', 'Tis', 'Ons', 'Tor', 'Fre'];

export interface ContactItem {
  label: string;
  value: string;
  href: string | null;
}

export const CONTACT: ContactItem[] = [
  { label: 'E-post', value: 'hej@langflo.se', href: 'mailto:hej@langflo.se' },
  { label: 'Telefon', value: '+46 70 000 00 00', href: 'tel:+46700000000' },
  { label: 'Undervisning', value: 'Alltid online via video', href: null },
];

// Bilder — byt gärna mot egna.
export const IMAGES = {
  about:
    'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1000',
  videoThumb:
    'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600',
};