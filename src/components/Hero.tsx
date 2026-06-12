import { ArrowRight } from 'lucide-react';
import { LANGUAGES, flagUrl } from '../data/content';
import { scrollToId } from '../lib/scroll';

export default function Hero() {
  return (
    <section
      id="hem"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy text-white"
    >
      {/* Bakgrund: glöd + prick-textur */}
      <div className="pointer-events-none absolute inset-0 dot-grid" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-[-10%] h-[42rem] w-[42rem] animate-glow rounded-full bg-teal/25 blur-[120px]" />
        <div className="absolute -left-40 bottom-[-20%] h-[34rem] w-[34rem] rounded-full bg-sand/15 blur-[120px]" />
      </div>

      <div className="container-x relative w-full pt-32 pb-16">
        <p className="eyebrow mb-8 animate-fade-up">Personlig språkundervisning · Online</p>

        <h1 className="display-xl max-w-4xl text-white text-balance animate-fade-up [animation-delay:80ms]">
          Bemästra ett nytt språk,{' '}
          <span className="italic text-sand">på riktigt.</span>
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70 text-pretty animate-fade-up [animation-delay:160ms]">
          Lektioner i fem språk med en lärare som lär känna dig och formar varje
          timme efter dina mål. Inga mallar, ingen massproduktion — bara du och språket.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up [animation-delay:240ms]">
          <button onClick={() => scrollToId('#boka')} className="btn-primary">
            Boka gratis konsultation
            <ArrowRight className="h-4 w-4" />
          </button>
          <button onClick={() => scrollToId('#sprak')} className="btn-ghost">
            Se språken
          </button>
        </div>

        {/* Flagg-rad: riktiga runda flaggor */}
        <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-white/10 pt-8 animate-fade-up [animation-delay:320ms]">
          <span className="text-xs uppercase tracking-[0.2em] text-white/40">
            Jag undervisar i
          </span>
          <div className="flex items-center gap-5">
            {LANGUAGES.map((lang) => (
              <div key={lang.code} className="flex items-center gap-2.5">
                <span
                  className="flag h-7 w-7 ring-white/20"
                  style={{ backgroundImage: `url(${flagUrl(lang.flag)})` }}
                  aria-hidden
                />
                <span className="text-sm font-medium text-white/80">{lang.code}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}