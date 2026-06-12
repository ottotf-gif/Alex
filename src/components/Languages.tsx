import { ArrowUpRight } from 'lucide-react';
import { LANGUAGES, flagUrl } from '../data/content';
import { scrollToId } from '../lib/scroll';

export default function Languages() {
  return (
    <section id="sprak" className="bg-paper py-24 text-ink md:py-32">
      <div className="container-x">
        <div className="mb-16 max-w-3xl">
          <p className="eyebrow mb-5">Språken</p>
          <h2 className="display-lg text-ink text-balance">
            Fem språk. Ett sätt att lära —{' '}
            <span className="italic text-teal">ditt.</span>
          </h2>
        </div>

        <ul className="border-t border-ink/10">
          {LANGUAGES.map((lang) => (
            <li key={lang.code} className="border-b border-ink/10">
              <button
                onClick={() => scrollToId('#boka')}
                className="group flex w-full items-center gap-6 py-7 text-left transition-colors hover:bg-cream/60"
              >
                <span
                  className="flag h-14 w-14 ring-ink/8"
                  style={{ backgroundImage: `url(${flagUrl(lang.flag)})` }}
                  aria-hidden
                />

                <div className="flex flex-1 flex-col gap-2 md:flex-row md:items-baseline md:gap-8">
                  <div className="md:w-56 md:shrink-0">
                    <h3 className="font-display text-3xl text-ink">{lang.name}</h3>
                    <p className="mt-1 text-sm italic text-ink/35">{lang.native}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-teal">
                      {lang.tagline}
                    </p>
                    <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink/55">
                      {lang.description}
                    </p>
                  </div>
                </div>

                <ArrowUpRight className="hidden h-6 w-6 shrink-0 text-ink/15 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal md:block" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}