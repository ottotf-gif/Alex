import { ArrowRight } from 'lucide-react';
import { LANGUAGES, flagUrl } from '../data/content';
import { scrollToId } from '../lib/scroll';

export default function Hero() {
  return (
    <section
      id="hem"
      className="relative min-h-screen overflow-hidden bg-navy text-white"
    >
      <div className="pointer-events-none absolute inset-0 dot-grid" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[50rem] w-[50rem] -translate-y-1/4 translate-x-1/4 animate-glow rounded-full bg-teal/20 blur-[140px]" />
        <div className="absolute -left-32 bottom-0 h-[30rem] w-[30rem] translate-y-1/3 rounded-full bg-sand/10 blur-[100px]" />
      </div>

      <div className="container-x relative flex min-h-screen flex-col justify-center pt-24 pb-16 md:pt-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_420px] xl:gap-20">

          {/* ── Copy ─────────────────────────────────── */}
          <div>
            <p className="eyebrow mb-7 animate-fade-up">
              Hej! Jag heter Alex — välkommen.
            </p>

            <h1 className="display-xl max-w-2xl text-balance text-white animate-fade-up [animation-delay:80ms]">
              Lär dig ett nytt{' '}
              <span className="italic text-sand">språk med mig.</span>
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-relaxed text-white/65 text-pretty animate-fade-up [animation-delay:160ms]">
              Jag undervisar i fem språk — alltid personligt, alltid anpassat
              efter dig. Inga mallar, inget gruppramverk. Bara du, jag och
              språket du vill behärska.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up [animation-delay:240ms]">
              <button onClick={() => scrollToId('#boka')} className="btn-primary">
                Boka gratis samtal
                <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={() => scrollToId('#om-mig')} className="btn-ghost">
                Mer om mig
              </button>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-white/10 pt-8 animate-fade-up [animation-delay:320ms]">
              <span className="text-xs uppercase tracking-[0.2em] text-white/35">
                Jag undervisar i
              </span>
              <div className="flex flex-wrap items-center gap-5">
                {LANGUAGES.map((lang) => (
                  <div key={lang.code} className="flex items-center gap-2">
                    <span
                      className="flag h-6 w-6 ring-white/20"
                      style={{ backgroundImage: `url(${flagUrl(lang.flag)})` }}
                      aria-hidden
                    />
                    <span className="text-sm font-medium text-white/70">{lang.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Portrait ──────────────────────────────── */}
          <div className="relative hidden lg:block animate-fade-up [animation-delay:200ms]">
            {/* Geometric teal accent */}
            <div className="absolute -bottom-6 -left-6 h-full w-full border border-teal/30" />

            <div className="relative overflow-hidden aspect-[3/4]">
              <img
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Alex, språklärare på Langflo"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-navy/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-2xl leading-tight text-white">Alex</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/55">
                  Certifierad språklärare · 5 språk
                </p>
              </div>
            </div>

            <div className="absolute -right-5 top-10 bg-sand px-5 py-4 shadow-lg">
              <p className="font-display text-3xl leading-none text-ink">5+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.12em] text-ink/60">Språk</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}