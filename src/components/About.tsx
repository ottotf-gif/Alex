import { IMAGES } from '../data/content';

export default function About() {
  return (
    <section id="om-mig" className="bg-cream py-24 text-ink md:py-32">
      <div className="container-x">
        <div className="mb-16 max-w-4xl">
          <p className="eyebrow mb-5">Om mig</p>
          <h2 className="display-lg text-ink text-balance">
            En lärare som verkligen{' '}
            <span className="italic text-teal">bryr sig.</span>
          </h2>
        </div>

        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Photo with warm frame accent */}
          <div className="relative">
            <div className="absolute -bottom-5 -right-5 hidden h-full w-full border border-sand/50 lg:block" />
            <div className="relative min-h-[26rem] overflow-hidden bg-paper">
              <img
                src={IMAGES.about}
                alt="Alex, privat språklärare"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="flex flex-col justify-center gap-6">
            <p className="font-display text-2xl leading-snug text-ink">
              [Kort, personlig mening om vem du är — t.ex. "Jag undervisar i fem
              språk, alltid med fokus på riktig kommunikation."]
            </p>

            <div className="space-y-4 text-base leading-relaxed text-ink/60">
              <p>
                [Din bakgrund, utbildning och passion för språk. Hur länge har
                du undervisat? Vilka egna språkliga erfarenheter har du?]
              </p>
              <p>
                [Din undervisningsfilosofi — vad gör dig speciell? Vad betyder
                personlig undervisning för dig?]
              </p>
            </div>

            <div className="mt-2 grid grid-cols-3 gap-6 border-t border-ink/10 pt-6">
              <div>
                <p className="font-display text-4xl text-ink">5</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-ink/40">språk</p>
              </div>
              <div>
                <p className="font-display text-4xl text-ink">100%</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-ink/40">online</p>
              </div>
              <div>
                <p className="font-display text-4xl text-ink">Alla</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-ink/40">nivåer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}