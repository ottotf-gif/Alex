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
    `border text-sm font-medium tracking-tight transition-all duration-200 px-4 py-3 ${
      active
        ? 'border-teal bg-teal text-white'
        : 'border-ink/15 text-ink hover:border-teal/50 hover:text-teal'
    }`;

  return (
    <section id="boka" className="bg-paper py-24 text-ink md:py-32">
      <div className="container-x">
        <div className="mb-16 max-w-3xl">
          <p className="eyebrow mb-5">Kom igång</p>
          <h2 className="display-lg text-ink text-balance">
            Boka din <span className="italic text-teal">lektion.</span>
          </h2>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink/55">
            Välj tid, språk och nivå — så hör jag av mig med en bekräftelse.
            Första samtalet är helt kostnadsfritt.
          </p>
        </div>

        {submitted ? (
          <div className="border-t border-ink/10 pt-16">
            <p className="eyebrow mb-6">Tack!</p>
            <h3 className="display-lg max-w-2xl text-ink text-balance">
              Din förfrågan om{' '}
              <span className="italic text-teal">{lang}</span> är mottagen.
            </h3>
            <p className="mt-6 text-ink/55">
              {day} kl. {time}. Jag återkommer inom 24 timmar
              {form.name ? `, ${form.name}` : ''}.
            </p>
          </div>
        ) : (
          <div className="grid gap-14 border-t border-ink/10 pt-16 lg:grid-cols-2 lg:gap-20">
            {/* Selectors */}
            <div className="flex flex-col gap-10">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-ink/40">
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
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-ink/40">
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
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-ink/40">
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
                <div className="border-t border-ink/10 pt-6">
                  <p className="text-xs uppercase tracking-[0.15em] text-ink/40">Ditt val</p>
                  <p className="mt-2 font-display text-2xl text-teal">
                    {lang} · {day} kl. {time}
                  </p>
                </div>
              )}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/40">
                  Namn
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ditt fullständiga namn"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="field-light mt-2"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/40">
                  E-post
                </label>
                <input
                  type="email"
                  required
                  placeholder="din@epost.se"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="field-light mt-2"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/40">
                  Din nivå &amp; dina mål (valfritt)
                </label>
                <textarea
                  rows={4}
                  placeholder="Berätta kort om var du är idag och vad du vill uppnå…"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="field-light mt-2 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={!ready}
                className="mt-2 inline-flex items-center justify-center gap-2 bg-ink px-8 py-4 text-sm font-semibold tracking-tight text-white transition-colors hover:bg-teal disabled:cursor-not-allowed disabled:opacity-30"
              >
                Skicka bokningsförfrågan
                <ArrowRight className="h-4 w-4" />
              </button>

              <p className="text-xs leading-relaxed text-ink/40">
                Kostnadsfri första konsultation. Jag bekräftar via e-post inom 24 timmar.
              </p>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}