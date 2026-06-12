import { Check, Globe, Star } from 'lucide-react';
import { QUALITIES, IMAGES } from '../data/content';

export default function About() {
  return (
    <section id="om-mig" className="bg-cream py-24 md:py-32">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2">
        {/* Porträtt */}
        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-navy/5">
            <img
              src={IMAGES.about}
              alt="Langflos lärare"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/40 bg-white/90 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal/10">
                  <Star className="h-5 w-5 text-teal" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy">Certifierad språklärare</p>
                  <p className="text-xs text-body/55">Erfarenhet av alla nivåer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 -top-4 hidden rounded-2xl border border-navy/5 bg-white p-4 shadow-lg lg:block">
            <div className="flex items-center gap-3">
              <Globe className="h-5 w-5 text-teal" />
              <div>
                <p className="font-display text-sm text-navy">5 språk</p>
                <p className="text-xs text-body/55">undervisas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="flex flex-col gap-6">
          <span className="eyebrow">Om mig</span>
          <h2 className="display-lg text-balance">
            En lärare som bryr sig om{' '}
            <span className="italic text-teal">ditt resultat.</span>
          </h2>

          <div className="space-y-4 max-w-prose leading-relaxed text-body/80">
            <p>
              [Din biografi här — berätta om din bakgrund, din utbildning och din passion
              för språk. Hur länge har du undervisat? Vilka är dina egna språkliga
              erfarenheter?]
            </p>
            <p>
              [Berätta om din undervisningsfilosofi — vad skiljer Langflo från andra lärare?
              Fokus på kommunikation, anpassad metodik och personligt engagemang.]
            </p>
          </div>

          <ul className="mt-2 grid gap-4 sm:grid-cols-2">
            {QUALITIES.map((q) => (
              <li key={q.text} className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal/10">
                  <Check className="h-4 w-4 text-teal" />
                </span>
                <span className="text-sm font-medium text-navy">{q.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}