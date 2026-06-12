import { ArrowRight } from 'lucide-react';
import { STEPS } from '../data/content';
import { scrollToId } from '../lib/scroll';

/** Mörk sektion med prick-textur. */
export default function Steps() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-60" />
      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-teal/15 blur-[120px]" />

      <div className="container-x relative">
        <div className="mb-16 max-w-3xl">
          <p className="eyebrow-sand mb-5">Så går det till</p>
          <h2 className="display-lg text-white text-balance">
            Tre steg, <span className="italic text-sand">utan strul.</span>
          </h2>
        </div>

        <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.number} className="flex flex-col gap-5 bg-navy p-8 md:p-10">
              <span className="font-display text-6xl text-sand/80">{step.number}</span>
              <h3 className="font-display text-2xl text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <button onClick={() => scrollToId('#boka')} className="btn-primary">
            Starta din språkresa
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}