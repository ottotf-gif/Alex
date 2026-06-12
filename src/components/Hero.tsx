import { ArrowRight } from 'lucide-react';
import { LANGUAGES, flagUrl } from '../data/content';
import { scrollToId } from '../lib/scroll';

export default function Hero() {
  return (
    <section id="hem" className="relative min-h-screen overflow-hidden bg-cream">
      {/* Subtle warm texture */}
      <div className="pointer-events-none absolute inset-0 dot-grid-light opacity-80" />

      {/* Very soft warm glow, top-left */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-sand/20 blur-[120px]" />

      <div className="container-x relative grid min-h-screen items-center gap-0 pt-20 pb-0 lg:grid-cols-[1fr_480px] lg:gap-12 xl:grid-cols-[1fr_520px]">

        {/* ── Left: copy ─────────────────────────────── */}
        <div className="flex flex-col justify-center py-20 lg:py-32">

          {/* Personal greeting chip */}
          <div className="mb-8 inline-flex w-fit items-center gap-2.5 border border-teal/25 bg-teal/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-teal" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
              Hej! Jag heter Alex.
            </span>
          </div>

          <h1 className="display-xl max-w-xl text-balance text-ink animate-fade-up">
            Lär dig ett nytt{' '}
            <span className="italic text-teal">språk med mig.</span>
          </h1>

          <p className="mt-7 max-w-md text-lg leading-relaxed text-ink/60 text-pretty animate-fade-up [animation-delay:80ms]">
            Jag undervisar privat i fem språk — alltid
            en-till-en, alltid anpassat just för dig. Inga
            mallar. Bara riktig kommunikation.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up [animation-delay:160ms]">
            <button onClick={() => scrollToId('#boka')} className="btn-primary">
              Boka ett gratis samtal
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollToId('#om-mig')}
              className="btn-outline-ink"
            >
              Om mig
            </button>
          </div>

          {/* Flag strip */}
          <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-ink/10 pt-8 animate-fade-up [animation-delay:240ms]">
            <span className="text-xs uppercase tracking-[0.18em] text-ink/35">
              Jag undervisar i
            </span>
            <div className="flex flex-wrap items-center gap-4">
              {LANGUAGES.map((lang) => (
                <div key={lang.code} className="flex items-center gap-2">
                  <span
                    className="flag h-6 w-6"
                    style={{ backgroundImage: `url(${flagUrl(lang.flag)})` }}
                    aria-hidden
                  />
                  <span className="text-sm text-ink/60">{lang.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right: portrait ────────────────────────── */}
        <div className="relative hidden self-stretch lg:flex lg:items-end">
          {/* Warm tint bg behind photo */}
          <div className="absolute inset-0 bg-gradient-to-b from-sand/10 via-sand/5 to-cream" />

          {/* Portrait — fills column top to bottom */}
          <div className="relative h-full w-full overflow-hidden">
            <img
              src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Alex, privat språklärare"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            {/* Fade into cream at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-cream to-transparent" />

            {/* Name chip at bottom */}
            <div className="absolute bottom-8 left-6">
              <p className="font-display text-2xl text-ink">Alex</p>
              <p className="mt-0.5 text-xs uppercase tracking-[0.18em] text-ink/50">
                Privat språklärare · 5 språk
              </p>
            </div>
          </div>

          {/* Floating teal accent stat — top right */}
          <div className="absolute right-0 top-24 border-l-4 border-teal bg-paper px-5 py-4 shadow-md">
            <p className="font-display text-3xl leading-none text-ink">5+</p>
            <p className="mt-1 text-xs uppercase tracking-[0.12em] text-ink/50">Språk</p>
          </div>
        </div>
      </div>
    </section>
  );
}
