import { IMAGES } from '../data/content';

export default function About() {
  return (
    <section id="om-mig" className="bg-cream py-24 text-ink md:py-32">
      <div className="container-x">
        <div className="mb-16 max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-teal">
            Om mig
          </p>
          <h2 className="display-lg text-ink text-balance">
            En lärare med ett <span className="italic text-teal">stort intresse</span> för
            språk och människor.
          </h2>
        </div>

        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Foto — fast ratio, teal-block bakom för djup */}
          <div className="relative">
            <div className="absolute -bottom-4 -left-4 hidden h-full w-full border border-teal/40 lg:block" />
            <div className="relative h-full min-h-[26rem] overflow-hidden bg-navy">
              <img
                src={IMAGES.about}
                alt="Langflos lärare"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="flex flex-col justify-center gap-6">
            <p className="font-display text-2xl leading-snug text-ink">
              [Kort, fängslande mening om vem du är — t.ex. "Jag undervisar i fem språk,
              alltid med fokus på riktig kommunikation."]
            </p>

            <div className="space-y-4 leading-relaxed text-body/75">
              <p>
                [Din biografi här — berätta om din bakgrund, din utbildning och din passion
                för språk. Hur länge har du undervisat? Vilka är dina egna språkliga
                erfarenheter?]
              </p>
              <p>
                [Berätta om din undervisningsfilosofi — vad gör din undervisning speciell?
                Fokus på kommunikation, anpassad metodik och personligt engagemang.]
              </p>
            </div>

            <div className="mt-2 grid grid-cols-3 gap-6 border-t border-ink/15 pt-6">
              <div>
                <p className="font-display text-3xl text-ink">5</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-body/45">språk</p>
              </div>
              <div>
                <p className="font-display text-3xl text-ink">100%</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-body/45">online</p>
              </div>
              <div>
                <p className="font-display text-3xl text-ink">Alla</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-body/45">nivåer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}