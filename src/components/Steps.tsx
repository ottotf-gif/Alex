import { ArrowRight } from 'lucide-react';
import { STEPS } from '../data/content';
import { scrollToId } from '../lib/scroll';

export default function Steps() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-cream md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-[-20%] h-96 w-96 rounded-full bg-teal/10" />
        <div className="absolute -left-24 bottom-[-25%] h-72 w-72 rounded-full bg-sand/10" />
      </div>

      <div className="container-x relative">
        <div className="mb-16 max-w-2xl">
          <span className="eyebrow before:bg-sand/60 text-sand">Så går det till</span>
          <h2 className="display-lg mt-5 text-cream text-balance">
            Tre steg från första samtal till{' '}
            <span className="italic text-sand">flyt.</span>
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.number} className="flex flex-col gap-4 bg-navy p-8 md:p-10">
              <span className="font-display text-5xl text-teal-light/70">{step.number}</span>
              <h3 className="font-display text-xl text-cream">{step.title}</h3>
              <p className="text-sm leading-relaxed text-cream/60">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <button
            onClick={() => scrollToId('#boka')}
            className="inline-flex items-center gap-2 rounded-full bg-sand px-8 py-4 text-sm font-medium tracking-tight text-navy transition-colors hover:bg-sand/90"
          >
            Starta din språkresa
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}