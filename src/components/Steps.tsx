import { ArrowRight } from 'lucide-react';
import { STEPS } from '../data/content';
import { scrollToId } from '../lib/scroll';

const STEP_ICONS = ['🗓️', '💬', '🚀'];

export default function Steps() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
      <div className="pointer-events-none absolute -right-32 top-1/4 h-[30rem] w-[30rem] rounded-full bg-teal/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-sand/8 blur-[80px]" />

      <div className="container-x relative">
        <div className="mb-14 text-center">
          <p className="eyebrow-sand mb-5">Så funkar det</p>
          <h2 className="display-lg mx-auto max-w-lg text-white text-balance">
            Tre steg till{' '}
            <span className="italic text-sand">flyt.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className="flex flex-col items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/8"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-sand/15 text-3xl">
                {STEP_ICONS[i]}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-sand/70">
                Steg {step.number}
              </span>
              <h3 className="font-display text-2xl text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-white/55">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button onClick={() => scrollToId('#boka')} className="btn-sand">
            Starta nu
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
