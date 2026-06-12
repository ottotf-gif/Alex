import { ArrowRight } from 'lucide-react';
import { LANGUAGES, flagUrl } from '../data/content';
import { scrollToId } from '../lib/scroll';

function WorldMapSvg() {
  return (
    <svg
      viewBox="0 0 1200 600"
      fill="none"
      className="absolute inset-0 h-full w-full opacity-[0.07]"
      aria-hidden
    >
      {/* Simplified world map dots */}
      <g fill="currentColor">
        {/* North America */}
        <circle cx="250" cy="200" r="4" /><circle cx="270" cy="190" r="3" />
        <circle cx="230" cy="210" r="3.5" /><circle cx="260" cy="220" r="3" />
        <circle cx="280" cy="200" r="4" /><circle cx="240" cy="180" r="3" />
        <circle cx="220" cy="200" r="3" /><circle cx="260" cy="240" r="3.5" />
        <circle cx="290" cy="230" r="3" /><circle cx="300" cy="210" r="3.5" />
        <circle cx="240" cy="230" r="3" /><circle cx="270" cy="250" r="3" />
        {/* South America */}
        <circle cx="340" cy="360" r="4" /><circle cx="350" cy="380" r="3.5" />
        <circle cx="330" cy="340" r="3" /><circle cx="360" cy="400" r="3" />
        <circle cx="345" cy="420" r="3.5" /><circle cx="335" cy="440" r="3" />
        {/* Europe */}
        <circle cx="550" cy="180" r="4" /><circle cx="570" cy="170" r="3.5" />
        <circle cx="530" cy="190" r="3" /><circle cx="560" cy="200" r="3.5" />
        <circle cx="580" cy="190" r="3" /><circle cx="540" cy="170" r="3" />
        <circle cx="590" cy="180" r="4" /><circle cx="550" cy="210" r="3" />
        <circle cx="575" cy="210" r="3.5" /><circle cx="560" cy="160" r="3" />
        {/* Africa */}
        <circle cx="560" cy="300" r="4" /><circle cx="580" cy="320" r="3.5" />
        <circle cx="550" cy="340" r="3" /><circle cx="570" cy="280" r="3" />
        <circle cx="590" cy="350" r="3.5" /><circle cx="560" cy="370" r="3" />
        {/* Asia */}
        <circle cx="700" cy="200" r="4" /><circle cx="730" cy="180" r="3.5" />
        <circle cx="680" cy="220" r="3" /><circle cx="750" cy="200" r="3.5" />
        <circle cx="770" cy="220" r="3" /><circle cx="800" cy="190" r="3" />
        <circle cx="820" cy="210" r="4" /><circle cx="850" cy="230" r="3" />
        <circle cx="720" cy="240" r="3.5" /><circle cx="760" cy="250" r="3" />
        {/* Australia */}
        <circle cx="880" cy="400" r="4" /><circle cx="900" cy="390" r="3.5" />
        <circle cx="860" cy="410" r="3" /><circle cx="910" cy="410" r="3" />
      </g>
      {/* Connection lines between continents */}
      <g stroke="currentColor" strokeWidth="1" opacity="0.4" strokeDasharray="6 4">
        <line x1="300" y1="210" x2="530" y2="180" />
        <line x1="590" y1="190" x2="700" y2="200" />
        <line x1="570" y1="210" x2="560" y2="280" />
        <line x1="800" y1="230" x2="870" y2="390" />
      </g>
    </svg>
  );
}

const MARQUEE_TEXT = 'Privat språklärare \u00B7 Svenska \u00B7 Engelska \u00B7 Tyska \u00B7 Franska \u00B7 Spanska \u00B7 ';

export default function Hero() {
  return (
    <section id="hem" className="relative min-h-screen overflow-hidden bg-cream">
      {/* World map background */}
      <WorldMapSvg />

      {/* Floating language pills */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="pill absolute left-[8%] top-[28%] bg-sand text-ink animate-fade-up [animation-delay:400ms]">
          <span className="flag h-5 w-5" style={{ backgroundImage: `url(${flagUrl('se')})` }} />
          Svenska
        </div>
        <div className="pill absolute right-[12%] top-[22%] bg-teal text-white animate-fade-up [animation-delay:500ms]">
          <span className="flag h-5 w-5" style={{ backgroundImage: `url(${flagUrl('gb')})` }} />
          English
        </div>
        <div className="pill absolute left-[15%] bottom-[35%] bg-white text-ink animate-fade-up [animation-delay:600ms]">
          <span className="flag h-5 w-5" style={{ backgroundImage: `url(${flagUrl('de')})` }} />
          Deutsch
        </div>
        <div className="pill absolute right-[8%] bottom-[30%] bg-ink text-white animate-fade-up [animation-delay:700ms]">
          <span className="flag h-5 w-5" style={{ backgroundImage: `url(${flagUrl('fr')})` }} />
          Fran&ccedil;ais
        </div>
      </div>

      {/* Main content */}
      <div className="container-x relative flex min-h-screen flex-col items-center justify-center pt-24 pb-32 text-center">

        {/* Huge display type */}
        <h1 className="display-hero text-ink animate-fade-up">
          <span className="text-teal italic">Langflo</span>
        </h1>

        <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/60 animate-fade-up [animation-delay:100ms]">
          Privat språkundervisning anpassad just för dig.
          Fem språk, en lärare, obegränsade möjligheter.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up [animation-delay:200ms]">
          <button onClick={() => scrollToId('#boka')} className="btn-primary">
            Boka gratis samtal
            <ArrowRight className="h-4 w-4" />
          </button>
          <button onClick={() => scrollToId('#sprak')} className="btn-outline">
            Utforska språken
          </button>
        </div>

        {/* Small flag row */}
        <div className="mt-14 flex items-center justify-center gap-3 animate-fade-up [animation-delay:300ms]">
          {LANGUAGES.map((lang) => (
            <span
              key={lang.code}
              className="flag h-10 w-10 transition-transform hover:scale-110"
              style={{ backgroundImage: `url(${flagUrl(lang.flag)})` }}
              title={lang.name}
            />
          ))}
        </div>
      </div>

      {/* Scrolling marquee ticker at bottom */}
      <div className="absolute inset-x-0 bottom-0 overflow-hidden border-y border-ink/10 bg-ink py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="mx-0 text-sm font-bold uppercase tracking-[0.25em] text-white/70">
              {MARQUEE_TEXT}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
