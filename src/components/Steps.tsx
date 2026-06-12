import { ArrowRight } from 'lucide-react';
import { STEPS } from '../data/content';
import { scrollToId } from '../lib/scroll';

export default function Steps() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-50" />
      {/* Warm sand glow — feels less cold than pure teal */}
      <div className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-sand/10 blur-[100px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-teal/8 blur-[100px]" />

      <div className="container-x relative">
        <div className="mb-16 max-w-3xl">
          <p className="eyebrow-sand mb-5">Så går det till</p>
          <h2 className="display-lg text-white text-balance">
            Tre steg —{' '}
            <span className="italic text-sand">enkelt som det.</span>
          </h2>
        </div>

        <div className="grid gap-px border border-white/8 bg-white/8 md:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.number} className="flex flex-col gap-5 bg-ink p-8 md:p-10">
              <span className="font-display text-5xl text-sand/60">{step.number}</span>
              <h3 className="font-display text-2xl text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-white/55">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button onClick={() => scrollToId('#boka')} className="btn-sand">
            Starta din språkresa
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}