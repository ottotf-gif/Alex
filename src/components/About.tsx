import { IMAGES } from '../data/content';
import { scrollToId } from '../lib/scroll';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="om-mig" className="bg-paper py-24 text-ink md:py-32">
      <div className="container-x">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow mb-5">Om mig</p>
          <h2 className="display-lg text-ink text-balance">
            Bakom <span className="italic text-teal">Langflo</span>
          </h2>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Photo — rounded arch shape */}
          <div className="relative mx-auto max-w-sm lg:mx-0 lg:max-w-none">
            <div className="overflow-hidden rounded-t-[200px] rounded-b-3xl bg-teal/10">
              <img
                src={IMAGES.about}
                alt="Alex, privat språklärare"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 rounded-2xl bg-sand px-5 py-4 shadow-xl">
              <p className="font-display text-2xl leading-none text-ink">5</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-ink/60">språk</p>
            </div>
          </div>

          {/* Copy */}
          <div className="flex flex-col gap-6">
            <p className="font-display text-2xl leading-snug text-ink">
              Jag undervisar i fem språk, alltid med fokus på att du
              faktiskt ska kunna kommunicera — inte bara klara ett prov.
            </p>

            <div className="space-y-4 text-base leading-relaxed text-ink/55">
              <p>
                Jag har undervisat i språk i över 8 år och talar själv fem
                språk flytande. Min resa började när jag som 17-åring
                flyttade utomlands och upptäckte hur ett nytt språk öppnar
                helt nya världar — inte bara grammatiskt, utan socialt och
                professionellt.
              </p>
              <p>
                Min filosofi är enkel: varje lektion ska kännas som ett
                samtal, inte som en föreläsning. Jag anpassar allt efter
                dina mål, din nivå och ditt tempo. Oavsett om du vill klara
                SFI, förhandla på tyska eller beställa en croissant i Paris.
              </p>
            </div>

            {/* Better stats — pill style */}
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-full bg-teal/10 px-5 py-2.5 text-sm font-semibold text-teal">
                8+ år undervisning
              </span>
              <span className="rounded-full bg-sand/30 px-5 py-2.5 text-sm font-semibold text-ink">
                Alla nivåer
              </span>
              <span className="rounded-full bg-ink/8 px-5 py-2.5 text-sm font-semibold text-ink">
                100% online
              </span>
            </div>

            <button
              onClick={() => scrollToId('#boka')}
              className="btn-primary mt-4 w-fit"
            >
              Boka ett samtal med mig
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
