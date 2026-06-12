import { IMAGES } from '../data/content';

export default function About() {
  return (
    <section id="om-mig" className="bg-paper py-24 md:py-36">
      <div className="container-x">
        {/* Rubrik först, bred */}
        <div className="mb-16 max-w-4xl">
          <p className="eyebrow mb-6">Om mig</p>
          <h2 className="display-lg text-balance">
            En lärare med ett <span className="italic text-teal">stort intresse</span> för
            språk och människor.
          </h2>
        </div>

        {/* Foto + bio i två kolumner, skarpa hörn */}
        <div className="grid items-start gap-12 lg:grid-cols-[5fr_4fr] lg:gap-20">
          <div>
            <img
              src={IMAGES.about}
              alt="Langflos lärare"
              className="w-full object-cover"
              style={{ aspectRatio: '4 / 5' }}
            />
            <p className="mt-4 text-xs uppercase tracking-[0.15em] text-body/40">
              Langflo — språkundervisning online
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:pt-4">
            <p className="font-display text-2xl leading-snug text-navy">
              [Kort, fängslande mening om vem du är och vad du gör — t.ex. "Bor i X.
              Undervisar i fem språk, alltid med fokus på riktig kommunikation."]
            </p>

            <div className="space-y-4 leading-relaxed text-body/75">
              <p>
                [Din biografi här — berätta om din bakgrund, din utbildning och din passion
                för språk. Hur länge har du undervisat? Vilka är dina egna språkliga
                erfarenheter?]
              </p>
              <p>
                [Berätta om din undervisningsfilosofi — vad skiljer Langflo från andra lärare?
                Fokus på kommunikation, anpassad metodik och personligt engagemang.]
              </p>
            </div>

            {/* Två fakta med tunn linje ovanför */}
            <div className="mt-4 grid grid-cols-2 gap-8 border-t border-navy/15 pt-6">
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-body/40">Språk</p>
                <p className="mt-1 font-display text-xl text-navy">5 st</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-body/40">Undervisning</p>
                <p className="mt-1 font-display text-xl text-navy">Online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}