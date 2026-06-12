import { ArrowRight, Check, Star } from 'lucide-react';
import { scrollToId } from '../lib/scroll';

const PREVIEW_COURSES = ['Svenska för nybörjare', 'Business English', 'Tyska A2 → B1'];

export default function Hero() {
  return (
    <section id="hem" className="relative overflow-hidden bg-cream">
      {/* Lugna bakgrundsformer */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-[-10%] h-[34rem] w-[34rem] rounded-full bg-teal/[0.06]" />
        <div className="absolute -left-32 bottom-[-20%] h-[26rem] w-[26rem] rounded-full bg-sand/20" />
      </div>

      <div className="container-x relative grid items-center gap-16 pb-24 pt-36 lg:grid-cols-[1.1fr_0.9fr] lg:pb-32 lg:pt-44">
        {/* Vänster — copy */}
        <div className="flex flex-col gap-7">
          <span className="eyebrow animate-fade-up">Personlig språkundervisning</span>

          <h1 className="display-xl text-balance animate-fade-up [animation-delay:60ms]">
            Bemästra ett nytt språk.{' '}
            <span className="italic text-teal">På riktigt.</span>
          </h1>

          <p className="max-w-prose text-lg leading-relaxed text-body/80 text-pretty animate-fade-up [animation-delay:120ms]">
            Lektioner i svenska, engelska, tyska, franska och spanska — med en lärare
            som lär känna dig och formar varje timme efter dina mål. Inga mallar,
            ingen massproduktion. Bara du och språket.
          </p>

          <div className="flex flex-wrap items-center gap-3 animate-fade-up [animation-delay:180ms]">
            <button onClick={() => scrollToId('#boka')} className="btn-primary text-base">
              Boka en gratis konsultation
              <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => scrollToId('#sprak')} className="btn-outline text-base">
              Se språken
            </button>
          </div>

          <dl className="mt-4 flex items-center gap-8 border-t border-navy/10 pt-6 animate-fade-up [animation-delay:240ms]">
            {[
              { n: '5', l: 'språk' },
              { n: '100%', l: 'online' },
              { n: 'Alla', l: 'nivåer' },
            ].map((s, i) => (
              <div key={s.l} className="flex items-center gap-8">
                {i > 0 && <span className="h-8 w-px bg-navy/10" aria-hidden />}
                <div>
                  <dt className="font-display text-2xl text-navy">{s.n}</dt>
                  <dd className="mt-0.5 text-xs text-body/60">{s.l}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        {/* Höger — flytande bokningskort */}
        <div className="relative hidden justify-center lg:flex">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-80 w-80 rounded-full border border-teal/10 bg-teal/[0.05]" />
          </div>

          <div className="relative z-10 w-[21rem] animate-soft-float rounded-3xl border border-navy/5 bg-white p-7 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)]">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wider text-body/50">Nästa lediga tid</p>
                <p className="font-display text-lg text-navy">Idag, 14:00</p>
              </div>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal/10 font-display text-teal">
                L
              </span>
            </div>

            <div className="mb-6 space-y-2.5">
              {PREVIEW_COURSES.map((course) => (
                <div
                  key={course}
                  className="flex items-center gap-3 rounded-2xl bg-cream px-4 py-3"
                >
                  <Check className="h-4 w-4 shrink-0 text-teal" />
                  <span className="text-sm font-medium text-navy">{course}</span>
                </div>
              ))}
            </div>

            <div className="mb-5 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-sand text-sand" />
              ))}
              <span className="ml-2 text-xs text-body/60">5,0 i snittbetyg</span>
            </div>

            <button
              onClick={() => scrollToId('#boka')}
              className="w-full rounded-full bg-navy py-3 text-sm font-medium text-cream transition-colors hover:bg-teal"
            >
              Boka gratis konsultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}