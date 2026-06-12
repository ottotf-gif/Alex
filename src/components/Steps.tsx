import { ArrowRight } from 'lucide-react';
import { STEPS } from '../data/content';
import { scrollToId } from '../lib/scroll';

/** Mörk kontrast-sektion — editorial numrerad lista. */
export default function Steps() {
  return (
    <section className="bg-navy py-24 text-cream md:py-36">
      <div className="container-x">
        <div className="mb-20 max-w-3xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-sand">
            Så går det till
          </p>
          <h2 className="display-lg text-cream text-balance">
            Tre steg, <span className="italic text-sand">utan strul.</span>
          </h2>
        </div>

        <ul className="border-t border-white/15">
          {STEPS.map((step) => (
            <li
              key={step.number}
              className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2 border-b border-white/15 py-8 md:grid-cols-[5rem_18rem_1fr] md:gap-x-10 md:py-10"
            >
              <span className="font-display text-3xl text-sand md:text-4xl">{step.number}</span>
              <h3 className="font-display text-2xl text-cream md:text-3xl">{step.title}</h3>
              <p className="col-span-2 max-w-prose text-sm leading-relaxed text-cream/55 md:col-span-1">
                {step.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <button
            onClick={() => scrollToId('#boka')}
            className="inline-flex items-center gap-2 bg-sand px-8 py-4 text-sm font-medium tracking-tight text-navy transition-colors hover:bg-cream"
          >
            Starta din språkresa
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}