import { ArrowUpRight } from 'lucide-react';
import { LANGUAGES } from '../data/content';
import { scrollToId } from '../lib/scroll';

export default function Languages() {
  return (
    <section id="sprak" className="bg-paper py-24 md:py-36">
      <div className="container-x">
        <div className="mb-20 max-w-3xl">
          <p className="eyebrow mb-6">Språken</p>
          <h2 className="display-lg text-balance">
            Fem språk. Ett sätt att lära — <span className="italic text-teal">ditt.</span>
          </h2>
        </div>

        {/* Editorial-lista med skarpa avdelare */}
        <ul className="border-t border-navy/15">
          {LANGUAGES.map((lang) => (
            <li key={lang.name} className="border-b border-navy/15">
              <button
                onClick={() => scrollToId('#boka')}
                className="group flex w-full items-center gap-8 py-8 text-left transition-colors hover:bg-cream"
              >
                <span className="font-display text-2xl text-navy/30 tabular-nums">
                  {lang.flag}
                </span>

                <div className="flex flex-1 flex-col gap-2 md:flex-row md:items-baseline md:gap-8">
                  <div className="md:w-64 md:shrink-0">
                    <h3 className="font-display text-3xl text-navy">{lang.name}</h3>
                    <p className="mt-1 text-sm italic text-body/40">{lang.native}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium uppercase tracking-wider text-teal">
                      {lang.tagline}
                    </p>
                    <p className="mt-2 max-w-prose text-sm leading-relaxed text-body/65">
                      {lang.description}
                    </p>
                  </div>
                </div>

                <ArrowUpRight className="hidden h-7 w-7 shrink-0 text-navy/20 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-teal md:block" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}