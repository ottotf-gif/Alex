import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { LANGUAGES, TIME_SLOTS, WEEK_DAYS } from '../data/content';

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

  // Skarpa val-knappar, ingen radius
  const chip = (active: boolean) =>
    `border px-4 py-3 text-sm font-medium tracking-tight transition-colors ${
      active
        ? 'border-navy bg-navy text-cream'
        : 'border-navy/20 text-navy hover:border-navy'
    }`;

  return (
    <section id="boka" className="bg-paper py-24 md:py-36">
      <div className="container-x">
        <div className="mb-16 max-w-3xl">
          <p className="eyebrow mb-6">Kom igång</p>
          <h2 className="display-lg text-balance">
            Boka din <span className="italic text-teal">lektion.</span>
          </h2>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-body/75">
            Välj tid, språk och nivå — så hör jag av mig med en bekräftelse. Första
            konsultationen är helt kostnadsfri.
          </p>
        </div>

        {submitted ? (
          <div className="border-t border-navy/15 pt-16 text-center">
            <p className="eyebrow mb-6">Tack!</p>
            <h3 className="display-lg mx-auto max-w-2xl text-balance">
              Din förfrågan om <span className="italic text-teal">{lang}</span> är mottagen.
            </h3>
            <p className="mt-6 text-body/70">
              {day} kl. {time}. Jag återkommer inom 24 timmar{form.name ? `, ${form.name}` : ''}.
            </p>
          </div>
        ) : (
          <div className="grid gap-16 border-t border-navy/15 pt-16 lg:grid-cols-2 lg:gap-20">
            {/* Vänster: val */}
            <div className="flex flex-col gap-10">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-body/50">
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
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-body/50">
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
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-body/50">
                  Språk
                </p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.name}
                      onClick={() => setLang(l.name)}
                      className={`flex items-center gap-2 ${chip(lang === l.name)}`}
                    >
                      <span>{l.flag}</span>
                      <span>{l.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {ready && (
                <div className="border-t border-navy/15 pt-6">
                  <p className="text-xs uppercase tracking-[0.15em] text-body/50">Ditt val</p>
                  <p className="mt-2 font-display text-2xl text-navy">
                    {lang} · {day} kl. {time}
                  </p>
                </div>
              )}
            </div>

            {/* Höger: formulär med underkantsfält */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.15em] text-body/50">
                  Namn
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ditt fullständiga namn"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="field mt-2"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.15em] text-body/50">
                  E-post
                </label>
                <input
                  type="email"
                  required
                  placeholder="din@epost.se"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="field mt-2"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.15em] text-body/50">
                  Din nivå &amp; dina mål (valfritt)
                </label>
                <textarea
                  rows={3}
                  placeholder="Berätta kort om var du är idag och vad du vill uppnå…"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="field mt-2 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={!ready}
                className="mt-2 inline-flex items-center justify-center gap-2 bg-navy px-8 py-4 text-sm font-medium tracking-tight text-cream transition-colors hover:bg-teal disabled:cursor-not-allowed disabled:opacity-30"
              >
                Skicka bokningsförfrågan
                <ArrowRight className="h-4 w-4" />
              </button>

              <p className="text-xs leading-relaxed text-body/50">
                Kostnadsfri första konsultation. Jag bekräftar via e-post inom 24 timmar.
              </p>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}