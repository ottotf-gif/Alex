import { ArrowUpRight } from 'lucide-react';
import { LANGUAGES, flagUrl } from '../data/content';
import { scrollToId } from '../lib/scroll';

export default function Languages() {
  return (
    <section id="sprak" className="bg-paper py-24 text-ink md:py-32">
      <div className="container-x">
        <div className="mb-16 max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-teal">
            Språken
          </p>
          <h2 className="display-lg text-ink text-balance">
            Fem språk. Ett sätt att lära — <span className="italic text-teal">ditt.</span>
          </h2>
        </div>

        <ul className="border-t border-ink/15">
          {LANGUAGES.map((lang) => (
            <li key={lang.code} className="border-b border-ink/15">
              <button
                onClick={() => scrollToId('#boka')}
                className="group flex w-full items-center gap-6 py-7 text-left transition-colors hover:bg-cream"
              >
                {/* Rund flagga */}
                <span
                  className="flag h-14 w-14 ring-ink/10"
                  style={{ backgroundImage: `url(${flagUrl(lang.flag)})` }}
                  aria-hidden
                />

                <div className="flex flex-1 flex-col gap-2 md:flex-row md:items-baseline md:gap-8">
                  <div className="md:w-60 md:shrink-0">
                    <h3 className="font-display text-3xl text-ink">{lang.name}</h3>
                    <p className="mt-1 text-sm italic text-ink/40">{lang.native}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-teal">
                      {lang.tagline}
                    </p>
                    <p className="mt-2 max-w-prose text-sm leading-relaxed text-body/70">
                      {lang.description}
                    </p>
                  </div>
                </div>

                <ArrowUpRight className="hidden h-7 w-7 shrink-0 text-ink/20 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-teal md:block" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}