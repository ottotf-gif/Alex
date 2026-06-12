import { ArrowUpRight } from 'lucide-react';
import { LANGUAGES, flagUrl } from '../data/content';
import { scrollToId } from '../lib/scroll';

const CARD_COLORS = [
  'bg-teal/10 hover:bg-teal/15',
  'bg-sand/20 hover:bg-sand/30',
  'bg-ink/5 hover:bg-ink/8',
  'bg-teal/8 hover:bg-teal/12',
  'bg-sand/15 hover:bg-sand/25',
];

export default function Languages() {
  return (
    <section id="sprak" className="bg-cream py-24 text-ink md:py-32">
      <div className="container-x">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow mb-5">Språken</p>
          <h2 className="display-lg text-ink text-balance">
            Välj ditt språk,{' '}
            <span className="italic text-teal">jag gör resten.</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LANGUAGES.map((lang, i) => (
            <button
              key={lang.code}
              onClick={() => scrollToId('#boka')}
              className={`group flex flex-col gap-4 rounded-3xl p-7 text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${CARD_COLORS[i]}`}
            >
              <div className="flex items-center justify-between">
                <span
                  className="flag h-12 w-12"
                  style={{ backgroundImage: `url(${flagUrl(lang.flag)})` }}
                  aria-hidden
                />
                <ArrowUpRight className="h-5 w-5 text-ink/20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal" />
              </div>

              <div>
                <h3 className="font-display text-2xl text-ink">{lang.name}</h3>
                <p className="mt-0.5 text-sm italic text-ink/35">{lang.native}</p>
              </div>

              <p className="text-sm leading-relaxed text-ink/50">
                {lang.description}
              </p>

              <span className="mt-auto inline-block rounded-full bg-white/60 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal">
                {lang.tagline}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
