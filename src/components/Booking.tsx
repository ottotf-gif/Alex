import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { LANGUAGES, TIME_SLOTS, WEEK_DAYS, flagUrl } from '../data/content';

export default function Booking() {
  const [day, setDay] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [lang, setLang] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const ready = Boolean(day && time && lang);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ready) return;
    setSubmitted(true);
  };

  const chip = (active: boolean) =>
    `border px-4 py-3 text-sm font-medium tracking-tight transition-colors ${
      active
        ? 'border-sand bg-sand text-ink'
        : 'border-white/20 text-white hover:border-white/60'
    }`;

  return (
    <section id="boka" className="relative overflow-hidden bg-navy py-24 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-50" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-teal/15 blur-[120px]" />

      <div className="container-x relative">
        <div className="mb-16 max-w-3xl">
          <p className="eyebrow-sand mb-5">Kom igång</p>
          <h2 className="display-lg text-white text-balance">
            Boka din <span className="italic text-sand">lektion.</span>
          </h2>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-white/70">
            Välj tid, språk och nivå — så hör jag av mig med en bekräftelse. Första
            konsultationen är helt kostnadsfri.
          </p>
        </div>

        {submitted ? (
          <div className="border-t border-white/15 pt-16 text-center">
            <p className="eyebrow-sand mb-6">Tack!</p>
            <h3 className="display-lg mx-auto max-w-2xl text-white text-balance">
              Din förfrågan om <span className="italic text-sand">{lang}</span> är mottagen.
            </h3>
            <p className="mt-6 text-white/70">
              {day} kl. {time}. Jag återkommer inom 24 timmar{form.name ? `, ${form.name}` : ''}.
            </p>
          </div>
        ) : (
          <div className="grid gap-14 border-t border-white/15 pt-16 lg:grid-cols-2 lg:gap-20">
            {/* Val */}
            <div className="flex flex-col gap-10">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
                  Dag (denna vecka)
                </p>
                <div className="grid grid-cols-5 gap-2">
                  {WEEK_DAYS.map((d) => (
                    <button key={d} onClick={() => setDay(d)} className={chip(day === d)}>
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
                  Tid
                </p>
                <div className="grid grid-cols-4 gap-2">
                  {TIME_SLOTS.map((t) => (
                    <button key={t} onClick={() => setTime(t)} className={chip(time === t)}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
                  Språk
                </p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => setLang(l.name)}
                      className={`flex items-center gap-2.5 ${chip(lang === l.name)}`}
                    >
                      <span
                        className="flag h-5 w-5 ring-black/10"
                        style={{ backgroundImage: `url(${flagUrl(l.flag)})` }}
                        aria-hidden
                      />
                      <span>{l.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {ready && (
                <div className="border-t border-white/15 pt-6">
                  <p className="text-xs uppercase tracking-[0.15em] text-white/50">Ditt val</p>
                  <p className="mt-2 font-display text-2xl text-sand">
                    {lang} · {day} kl. {time}
                  </p>
                </div>
              )}
            </div>

            {/* Formulär */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
                  Namn
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ditt fullständiga namn"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="field-dark mt-2"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
                  E-post
                </label>
                <input
                  type="email"
                  required
                  placeholder="din@epost.se"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="field-dark mt-2"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
                  Din nivå &amp; dina mål (valfritt)
                </label>
                <textarea
                  rows={3}
                  placeholder="Berätta kort om var du är idag och vad du vill uppnå…"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="field-dark mt-2 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={!ready}
                className="mt-2 inline-flex items-center justify-center gap-2 bg-sand px-8 py-4 text-sm font-semibold tracking-tight text-ink transition-colors hover:bg-sand-light disabled:cursor-not-allowed disabled:opacity-30"
              >
                Skicka bokningsförfrågan
                <ArrowRight className="h-4 w-4" />
              </button>

              <p className="text-xs leading-relaxed text-white/45">
                Kostnadsfri första konsultation. Jag bekräftar via e-post inom 24 timmar.
              </p>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}