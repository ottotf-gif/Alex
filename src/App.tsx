import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Play,
  Check,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Star,
  BookOpen,
  Users,
  Globe,
  Send,
  Youtube,
  ExternalLink,
} from 'lucide-react';

// ─── Types ───────────────────────────────────────────────────────────────────

interface NavItem {
  label: string;
  href: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_ITEMS: NavItem[] = [
  { label: 'Hem', href: '#hem' },
  { label: 'Språk', href: '#sprak' },
  { label: 'Om mig', href: '#om-mig' },
  { label: 'Boka lektion', href: '#boka' },
  { label: 'Kontakt', href: '#kontakt' },
];

const LANGUAGES = [
  {
    name: 'Svenska',
    tagline: 'Modersmål & akademisk svenska',
    description: 'Perfekta grunden för integration, studier och yrkesliv i Sverige.',
    flag: '🇸🇪',
    color: 'from-blue-50 to-yellow-50',
    accent: '#006AA7',
  },
  {
    name: 'Engelska',
    tagline: 'Business English & vardagsengelska',
    description: 'Kommunicera med självförtroende i globala sammanhang.',
    flag: '🇬🇧',
    color: 'from-blue-50 to-red-50',
    accent: '#012169',
  },
  {
    name: 'Tyska',
    tagline: 'Från nybörjare till avancerad',
    description: 'Europas viktigaste affärsspråk — öppnar dörrar på en global marknad.',
    flag: '🇩🇪',
    color: 'from-gray-50 to-red-50',
    accent: '#000000',
  },
  {
    name: 'Franska',
    tagline: 'Le français authentique',
    description: 'Det diplomatiska språket med global räckvidd och kulturell rikedom.',
    flag: '🇫🇷',
    color: 'from-blue-50 to-red-50',
    accent: '#0055A4',
  },
  {
    name: 'Spanska',
    tagline: 'Español para el mundo',
    description: 'Talas av 500+ miljoner människor — ett av världens mest inflytelserika språk.',
    flag: '🇪🇸',
    color: 'from-red-50 to-yellow-50',
    accent: '#AA151B',
  },
];

const STEPS = [
  {
    number: '01',
    title: 'Boka din tid',
    description:
      'Välj ett datum och klockslag som passar dig. Första konsultationen är kostnadsfri — vi går igenom dina mål och sätter upp en plan.',
    icon: Calendar,
  },
  {
    number: '02',
    title: 'Ha din lektion',
    description:
      'Lektioner online via video, anpassade helt efter ditt tempo, ditt mål och din nivå. Alltid personligt, aldrig mallar.',
    icon: BookOpen,
  },
  {
    number: '03',
    title: 'Nå flyt',
    description:
      'Med regelbunden träning och rätt metodik bygger du verklig förmåga — inte bara grammatikregler, utan äkta kommunikation.',
    icon: Globe,
  },
];

const YOUTUBE_VIDEOS = [
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

const TIME_SLOTS = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
const WEEK_DAYS = ['Mån', 'Tis', 'Ons', 'Tor', 'Fre'];

// ─── Subcomponents ────────────────────────────────────────────────────────────

function LangfloLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-8 h-8 rounded-lg bg-teal flex items-center justify-center">
        <Globe className="w-4 h-4 text-white" strokeWidth={2.5} />
      </div>
      <span className="text-navy font-bold text-xl tracking-tight">
        Lang<span className="text-teal">flo</span>
      </span>
    </div>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <LangfloLogo />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.slice(0, -1).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#boka"
              onClick={(e) => handleNavClick(e, '#boka')}
              className="btn-primary"
            >
              Boka lektion
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5 text-navy" /> : <Menu className="w-5 h-5 text-navy" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-3 px-2 text-sm font-medium text-navy/80 hover:text-teal transition-colors border-b border-slate-50 last:border-0"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#boka"
            onClick={(e) => handleNavClick(e, '#boka')}
            className="btn-primary mt-3 justify-center"
          >
            Boka lektion
          </a>
        </nav>
      </div>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hem"
      className="relative min-h-screen flex items-center bg-cream overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sand/20 rounded-full translate-y-1/3 -translate-x-1/4" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal/3 rounded-full opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-24 pt-28 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left column */}
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 bg-teal/10 rounded-full px-4 py-2 w-fit">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            <span className="text-xs font-semibold text-teal tracking-wide uppercase">
              Professionell språkundervisning
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-[1.05] tracking-tight">
            Bemästra ett
            <br />
            <span className="text-teal">nytt språk.</span>
            <br />
            På riktigt.
          </h1>

          <p className="text-lg text-body/80 max-w-xl leading-relaxed">
            Personliga lektioner i svenska, engelska, tyska, franska och spanska — med en erfaren lärare som
            anpassar undervisningen efter just dina mål.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => handleScroll('#boka')}
              className="btn-primary text-base px-8 py-4"
            >
              Boka en lektion
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('#sprak')}
              className="btn-outline text-base px-8 py-4"
            >
              Läs mer
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-8 pt-4 border-t border-slate-200">
            <div>
              <div className="text-2xl font-bold text-navy">5+</div>
              <div className="text-xs text-body/60 mt-0.5">Språk</div>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div>
              <div className="text-2xl font-bold text-navy">100%</div>
              <div className="text-xs text-body/60 mt-0.5">Online</div>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div>
              <div className="text-2xl font-bold text-navy">Alla</div>
              <div className="text-xs text-body/60 mt-0.5">Nivåer</div>
            </div>
          </div>
        </div>

        {/* Right column — floating card */}
        <div className="relative hidden lg:flex justify-center items-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-80 h-80 rounded-full bg-teal/8 border border-teal/10" />
          </div>

          <div className="relative z-10 bg-white rounded-3xl p-8 shadow-xl border border-slate-100 w-80">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-teal" />
              </div>
              <div>
                <div className="font-semibold text-navy text-sm">Nästa lediga tid</div>
                <div className="text-xs text-body/60">Idag, 14:00</div>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              {['Svenska för nybörjare', 'Business English', 'Tyska A2→B1'].map((course) => (
                <div key={course} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                  <Check className="w-4 h-4 text-teal flex-shrink-0" />
                  <span className="text-sm text-navy font-medium">{course}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-sand text-sand" />
              ))}
              <span className="text-xs text-body/60 ml-1">5.0 snittbetyg</span>
            </div>

            <button
              onClick={() => handleScroll('#boka')}
              className="w-full bg-teal text-white rounded-xl py-3 text-sm font-semibold hover:bg-teal-light transition-colors"
            >
              Boka gratis konsultation
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs font-medium text-body tracking-wider uppercase">Skrolla</span>
        <div className="w-px h-8 bg-body/40" />
      </div>
    </section>
  );
}

// ─── Språk ────────────────────────────────────────────────────────────────────

function Sprak() {
  return (
    <section id="sprak" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="text-center mb-16">
          <span className="section-label">Våra språk</span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3 tracking-tight">
            Vilket språk vill du lära dig?
          </h2>
          <p className="mt-4 text-body/70 max-w-xl mx-auto leading-relaxed">
            Undervisning i fem europeiska språk, anpassad efter din nivå och dina mål.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {LANGUAGES.map((lang) => (
            <div key={lang.name} className="card group cursor-default">
              <div className="text-4xl mb-4 leading-none">{lang.flag}</div>
              <h3 className="text-lg font-bold text-navy mb-1">{lang.name}</h3>
              <p className="text-xs font-semibold text-teal mb-3 tracking-wide">{lang.tagline}</p>
              <p className="text-sm text-body/70 leading-relaxed">{lang.description}</p>
              <div className="mt-5 pt-4 border-t border-slate-100">
                <a
                  href="#boka"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#boka')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm font-semibold text-teal flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Boka lektion
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Så funkar det ────────────────────────────────────────────────────────────

function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-navy relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sand/10 rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-sand">
            Processen
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 tracking-tight">
            Så funkar det
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto leading-relaxed">
            Tre enkla steg från din första kontakt till verklig språklig flyt.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px bg-gradient-to-r from-teal/0 via-teal/40 to-teal/0" />

          {STEPS.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-2xl bg-teal/20 border border-teal/30 flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-teal-light" />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-sand flex items-center justify-center">
                  <span className="text-xs font-bold text-navy">{i + 1}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#boka"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#boka')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-sand text-navy px-8 py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-sand/90 transition-colors shadow-lg"
          >
            Starta din resa
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Om mig ───────────────────────────────────────────────────────────────────

function OmMig() {
  return (
    <section id="om-mig" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — photo placeholder */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0 bg-gradient-to-br from-teal/10 to-navy/10">
              <img
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Langflo lärare"
                className="w-full h-full object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center">
                    <Star className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy text-sm">Certifierad språklärare</div>
                    <div className="text-xs text-body/60">Erfarenhet av alla nivåer</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-slate-100 hidden lg:block">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-teal" />
                <div>
                  <div className="text-xs font-bold text-navy">5 språk</div>
                  <div className="text-xs text-body/60">Undervisas</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — bio */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="section-label">Om mig</span>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3 tracking-tight leading-tight">
                En lärare som
                <br />
                bryr sig om
                <br />
                <span className="text-teal">ditt resultat.</span>
              </h2>
            </div>

            {/* Bio placeholder */}
            <div className="space-y-4 text-body/80 leading-relaxed">
              <p>
                [Din biografi här — berätta om din bakgrund, din utbildning och din passion för språk.
                Hur länge har du undervisat? Vilka är dina egna språkliga erfarenheter?]
              </p>
              <p>
                [Berätta om din undervisningsfilosofi — vad skiljer Langflo från andra lärare?
                Fokus på kommunikation, anpassad metodik, och personligt engagemang.]
              </p>
            </div>

            {/* Qualities */}
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              {[
                { icon: Check, text: 'Personligt anpassad undervisning' },
                { icon: Clock, text: 'Flexibla tider, online' },
                { icon: BookOpen, text: 'Strukturerade kursplaner' },
                { icon: Users, text: 'Alla nivåer välkomna' },
              ].map((q) => (
                <div key={q.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0">
                    <q.icon className="w-4 h-4 text-teal" />
                  </div>
                  <span className="text-sm font-medium text-navy">{q.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── YouTube ──────────────────────────────────────────────────────────────────

function VideoSection() {
  return (
    <section id="videos" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="text-center mb-16">
          <span className="section-label">YouTube</span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3 tracking-tight">
            Lär dig gratis — sedan boka
          </h2>
          <p className="mt-4 text-body/70 max-w-xl mx-auto leading-relaxed">
            Utforska gratis videolektioner på YouTube. Gilla vad du ser? Boka en personlig lektion.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {YOUTUBE_VIDEOS.map((video) => (
            <div
              key={video.id}
              className="group relative rounded-2xl overflow-hidden bg-navy/5 border border-slate-100 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Thumbnail placeholder */}
              <div className="aspect-video bg-gradient-to-br from-navy/80 to-teal/60 relative flex items-center justify-center overflow-hidden">
                <img
                  src={`https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600`}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity"
                />
                <div className="relative z-10 w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded font-mono">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-navy text-sm leading-snug mb-2">{video.title}</h3>
                <div className="flex items-center gap-2 text-xs text-body/50">
                  <Youtube className="w-3.5 h-3.5 text-red-500" />
                  <span>{video.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-slate-200 text-navy px-6 py-3 rounded-xl font-semibold text-sm hover:border-red-500 hover:text-red-500 transition-colors"
          >
            <Youtube className="w-4 h-4" />
            Se alla videor på YouTube
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Boka lektion ─────────────────────────────────────────────────────────────

function Boka() {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedLang, setSelectedLang] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDay || !selectedTime || !selectedLang) return;
    setSubmitted(true);
  };

  return (
    <section id="boka" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="text-center mb-16">
          <span className="section-label">Kom igång</span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3 tracking-tight">
            Boka din lektion
          </h2>
          <p className="mt-4 text-body/70 max-w-xl mx-auto leading-relaxed">
            Välj tid, språk och nivå — så återkommer jag med en bekräftelse.
            Första konsultationen är helt kostnadsfri.
          </p>
        </div>

        {submitted ? (
          <div className="max-w-lg mx-auto text-center bg-white rounded-3xl p-12 shadow-sm border border-slate-100">
            <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-teal" />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-3">Tack, {formData.name}!</h3>
            <p className="text-body/70">
              Din förfrågan om {selectedLang} ({selectedDay} kl. {selectedTime}) är mottagen.
              Jag återkommer inom 24 timmar.
            </p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {/* Calendar side */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <h3 className="font-bold text-navy mb-6 flex items-center gap-2 text-lg">
                <Calendar className="w-5 h-5 text-teal" />
                Välj dag och tid
              </h3>

              {/* Day picker */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-body/50 uppercase tracking-wider mb-3">
                  Dag (denna vecka)
                </p>
                <div className="flex gap-2">
                  {WEEK_DAYS.map((day) => (
                    <button
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${
                        selectedDay === day
                          ? 'bg-teal text-white shadow-sm'
                          : 'bg-slate-50 text-navy hover:bg-teal/10 hover:text-teal'
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time picker */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-body/50 uppercase tracking-wider mb-3">
                  Tid
                </p>
                <div className="grid grid-cols-4 gap-2">
                  {TIME_SLOTS.map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={`py-2.5 rounded-xl text-sm font-medium transition-all ${
                        selectedTime === t
                          ? 'bg-teal text-white shadow-sm'
                          : 'bg-slate-50 text-navy hover:bg-teal/10 hover:text-teal'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Language picker */}
              <div>
                <p className="text-xs font-semibold text-body/50 uppercase tracking-wider mb-3">
                  Språk
                </p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.name}
                      onClick={() => setSelectedLang(l.name)}
                      className={`flex items-center gap-2 py-2.5 px-3 rounded-xl text-sm font-medium transition-all ${
                        selectedLang === l.name
                          ? 'bg-teal text-white shadow-sm'
                          : 'bg-slate-50 text-navy hover:bg-teal/10 hover:text-teal'
                      }`}
                    >
                      <span>{l.flag}</span>
                      <span>{l.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {selectedDay && selectedTime && selectedLang && (
                <div className="mt-6 p-4 bg-teal/5 rounded-2xl border border-teal/20">
                  <p className="text-sm font-semibold text-teal">Ditt val:</p>
                  <p className="text-sm text-navy mt-1">
                    {selectedLang} · {selectedDay} kl. {selectedTime}
                  </p>
                </div>
              )}
            </div>

            {/* Form side */}
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col gap-5">
              <h3 className="font-bold text-navy flex items-center gap-2 text-lg">
                <Send className="w-5 h-5 text-teal" />
                Dina uppgifter
              </h3>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-body/60 uppercase tracking-wider">
                  Namn
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ditt fullständiga namn"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all text-sm"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-body/60 uppercase tracking-wider">
                  E-post
                </label>
                <input
                  type="email"
                  required
                  placeholder="din@epost.se"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all text-sm"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-body/60 uppercase tracking-wider">
                  Din nuvarande nivå & mål (valfritt)
                </label>
                <textarea
                  rows={4}
                  placeholder="Berätta kort om din nuvarande nivå och vad du vill uppnå..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={!selectedDay || !selectedTime || !selectedLang}
                className="w-full bg-teal text-white py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-teal-light transition-colors shadow-sm disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                Skicka bokningsförfrågan
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-xs text-body/50 text-center leading-relaxed">
                Kostnadsfri första konsultation. Jag bekräftar via e-post inom 24 timmar.
              </p>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── Kontakt ──────────────────────────────────────────────────────────────────

function Kontakt() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="kontakt" className="py-24 md:py-32 bg-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-sand/10 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-sand">
            Kontakt
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 tracking-tight">
            Hör av dig
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto leading-relaxed">
            Frågor, funderingar eller bara vill prata om din språkresa? Jag svarar inom ett dygn.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          {/* Contact info */}
          <div className="flex flex-col gap-8">
            <div className="space-y-5">
              {[
                {
                  icon: Mail,
                  label: 'E-post',
                  value: 'hej@langflo.se',
                  href: 'mailto:hej@langflo.se',
                },
                {
                  icon: Phone,
                  label: 'Telefon',
                  value: '+46 70 000 00 00',
                  href: 'tel:+46700000000',
                },
                {
                  icon: Globe,
                  label: 'Undervisning',
                  value: 'Alltid online via video',
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-teal-light" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 font-medium uppercase tracking-wider mb-0.5">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} className="text-white font-medium hover:text-sand transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-white font-medium">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-sand" />
                <span className="text-sm font-semibold text-white">Svarstider</span>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                Måndag–fredag: Svarar inom några timmar
                <br />
                Helger: Svarar nästa vardag
              </p>
            </div>
          </div>

          {/* Contact form */}
          {sent ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/10 text-center">
              <div className="w-16 h-16 rounded-full bg-teal/20 flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-teal-light" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Meddelande skickat!</h3>
              <p className="text-white/60 text-sm">Tack {form.name}. Jag återkommer snart.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 flex flex-col gap-5"
            >
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                  Namn
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ditt namn"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal/40 transition-all text-sm"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                  E-post
                </label>
                <input
                  type="email"
                  required
                  placeholder="din@epost.se"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal/40 transition-all text-sm"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                  Meddelande
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Skriv ditt meddelande här..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal/40 transition-all text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal text-white py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-teal-light transition-colors flex items-center justify-center gap-2"
              >
                Skicka meddelande
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-24 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-teal flex items-center justify-center">
                <Globe className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Lang<span className="text-teal-light">flo</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Professionell språkundervisning i svenska, engelska, tyska, franska och spanska.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
              Navigering
            </p>
            <nav className="flex flex-col gap-2.5">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/60 hover:text-teal-light transition-colors"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Språk */}
          <div>
            <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
              Språk
            </p>
            <div className="flex flex-col gap-2.5">
              {LANGUAGES.map((l) => (
                <span key={l.name} className="text-sm text-white/60 flex items-center gap-2">
                  <span>{l.flag}</span>
                  <span>{l.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Langflo. Alla rättigheter förbehållna.
          </p>
          <a
            href="https://ottoniq.se"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/30 hover:text-white/60 transition-colors"
          >
            Drivs av Ottoniq.se
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="font-sans bg-cream text-body">
      <Header />
      <main>
        <Hero />
        <Sprak />
        <HowItWorks />
        <OmMig />
        <VideoSection />
        <Boka />
        <Kontakt />
      </main>
      <Footer />
    </div>
  );
}
