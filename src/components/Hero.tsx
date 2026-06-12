import { ArrowRight } from 'lucide-react';
import { scrollToId } from '../lib/scroll';

export default function Hero() {
  return (
    <section id="hem" className="relative bg-paper">
      <div className="container-x pb-28 pt-44 lg:pb-40 lg:pt-52">
        {/* Eyebrow */}
        <p className="eyebrow mb-10 animate-fade-up">
          Personlig språkundervisning · Online
        </p>

        {/* Stor rubrik med kursiv accent */}
        <h1 className="display-xl max-w-5xl text-balance animate-fade-up [animation-delay:80ms]">
          Bemästra ett nytt språk,{' '}
          <span className="italic text-teal">på riktigt.</span>
        </h1>

        {/* Underrad: text + länk i två kolumner (Ottoniq-style) */}
        <div className="mt-16 grid gap-10 border-t border-navy/15 pt-10 animate-fade-up [animation-delay:160ms] md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-prose text-lg leading-relaxed text-body/80 text-pretty">
            Lektioner i svenska, engelska, tyska, franska och spanska — med en lärare
            som lär känna dig och formar varje timme efter dina mål. Inga mallar,
            ingen massproduktion. Bara du och språket.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row md:flex-col lg:flex-row">
            <button onClick={() => scrollToId('#boka')} className="btn-primary">
              Boka gratis konsultation
              <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => scrollToId('#sprak')} className="btn-outline">
              Se språken
            </button>
          </div>
        </div>

        {/* Stödsiffror på en rad */}
        <div className="mt-16 flex flex-wrap items-baseline gap-x-16 gap-y-6 animate-fade-up [animation-delay:240ms]">
          {[
            { n: '5', l: 'språk att välja mellan' },
            { n: '100%', l: 'online via video' },
            { n: 'Alla', l: 'nivåer välkomna' },
          ].map((s) => (
            <div key={s.l} className="flex items-baseline gap-3">
              <span className="font-display text-4xl text-navy">{s.n}</span>
              <span className="text-sm text-body/55">{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}