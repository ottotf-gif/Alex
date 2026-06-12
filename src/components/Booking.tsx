import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
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
    `rounded-full text-sm font-medium transition-all duration-200 px-4 py-3 ${
      active
        ? 'bg-teal text-white shadow-md scale-105'
        : 'bg-ink/6 text-ink/70 hover:bg-teal/10 hover:text-teal'
    }`;

  return (
    <section id="boka" className="bg-paper py-24 text-ink md:py-32">
      <div className="container-x">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow mb-5">Boka lektion</p>
          <h2 className="display-lg text-ink text-balance">
            Välj tid och{' '}
            <span className="italic text-teal">kör.</span>
          </h2>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink/50">
            Första samtalet kostar ingenting. Välj vad som passar dig
            nedan, fyll i dina uppgifter, och jag hör av mig.
          </p>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center rounded-3xl bg-teal/10 px-10 py-20 text-center">
            <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-teal text-white">
              <Check className="h-8 w-8" />
            </span>
            <h3 className="display-lg max-w-xl text-ink text-balance">
              Tack{form.name ? `, ${form.name}` : ''}!
            </h3>
            <p className="mt-4 max-w-md text-ink/55">
              Din förfrågan om {lang} ({day} kl. {time}) är mottagen.
              Jag återkommer inom 24 timmar via e-post.
            </p>
          </div>
        ) : (
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            {/* Selectors */}
            <div className="flex flex-col gap-10 rounded-3xl bg-white/50 p-8 shadow-sm">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-ink/35">
                  Dag
                </p>
                <div className="flex flex-wrap gap-2">
                  {WEEK_DAYS.map((d) => (
                    <button key={d} onClick={() => setDay(d)} className={chip(day === d)}>
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-ink/35">
                  Tid
                </p>
                <div className="flex flex-wrap gap-2">
                  {TIME_SLOTS.map((t) => (
                    <button key={t} onClick={() => setTime(t)} className={chip(time === t)}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-ink/35">
                  Språk
                </p>
                <div className="flex flex-wrap gap-2">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => setLang(l.name)}
                      className={`flex items-center gap-2 ${chip(lang === l.name)}`}
                    >
                      <span
                        className="flag h-5 w-5 ring-1 ring-black/10"
                        style={{ backgroundImage: `url(${flagUrl(l.flag)})` }}
                        aria-hidden
                      />
                      {l.name}
                    </button>
                  ))}
                </div>
              </div>

              {ready && (
                <div className="rounded-2xl bg-teal/10 p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-teal/70">Ditt val</p>
                  <p className="mt-2 font-display text-2xl text-ink">
                    {lang} · {day} kl. {time}
                  </p>
                </div>
              )}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-ink/35">
                  Namn
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ditt namn"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="field-light"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-ink/35">
                  E-post
                </label>
                <input
                  type="email"
                  required
                  placeholder="din@epost.se"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="field-light"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-ink/35">
                  Mål och nivå (valfritt)
                </label>
                <textarea
                  rows={4}
                  placeholder="Berätta lite om vad du vill uppnå..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="field-light resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={!ready}
                className="btn-primary mt-2 w-full disabled:cursor-not-allowed disabled:opacity-30"
              >
                Skicka förfrågan
                <ArrowRight className="h-4 w-4" />
              </button>

              <p className="text-center text-xs text-ink/35">
                100% gratis första samtal. Jag bekräftar inom 24h.
              </p>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
