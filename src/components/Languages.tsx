import { ArrowUpRight } from 'lucide-react';
import { LANGUAGES } from '../data/content';
import { scrollToId } from '../lib/scroll';

export default function Languages() {
  return (
    <section id="sprak" className="bg-white py-24 md:py-32">
      <div className="container-x">
        <div className="mb-16 max-w-2xl">
          <span className="eyebrow">Språken</span>
          <h2 className="display-lg mt-5 text-balance">
            Fem språk. Ett sätt att lära —{' '}
            <span className="italic text-teal">ditt.</span>
          </h2>
          <p className="mt-5 max-w-prose leading-relaxed text-body/70">
            Undervisning anpassad efter din nivå och dina mål, oavsett om du börjar
            från noll eller finslipar det sista mot flyt.
          </p>
        </div>

        <ul className="divide-y divide-navy/[0.07] border-y border-navy/[0.07]">
          {LANGUAGES.map((lang) => (
            <li key={lang.name}>
              <button
                onClick={() => scrollToId('#boka')}
                className="group flex w-full items-center gap-6 py-7 text-left transition-colors hover:bg-cream/60 sm:gap-8 sm:px-4"
              >
                <span className="text-4xl leading-none sm:text-5xl" aria-hidden>
                  {lang.flag}
                </span>

                <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-5">
                  <div className="sm:w-56 sm:shrink-0">
                    <h3 className="font-display text-2xl text-navy">{lang.name}</h3>
                    <p className="text-sm italic text-body/45">{lang.native}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-teal">{lang.tagline}</p>
                    <p className="mt-1 max-w-prose text-sm leading-relaxed text-body/65">
                      {lang.description}
                    </p>
                  </div>
                </div>

                <ArrowUpRight className="hidden h-6 w-6 shrink-0 text-navy/25 transition-all duration-300 group-hover:text-teal sm:block group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}