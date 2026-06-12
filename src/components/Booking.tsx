import { useState } from 'react';
import { Calendar, Send, ArrowRight, Check } from 'lucide-react';
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

  const pill = (active: boolean) =>
    `rounded-xl text-sm font-medium transition-all ${
      active
        ? 'bg-navy text-cream shadow-sm'
        : 'bg-cream text-navy hover:bg-teal/10 hover:text-teal'
    }`;

  return (
    <section id="boka" className="bg-cream py-24 md:py-32">
      <div className="container-x">
        <div className="mb-16 max-w-2xl">
          <span className="eyebrow">Kom igång</span>
          <h2 className="display-lg mt-5 text-balance">
            Boka din lektion
          </h2>
          <p className="mt-5 max-w-prose leading-relaxed text-body/70">
            Välj tid, språk och nivå — så hör jag av mig med en bekräftelse. Första
            konsultationen är helt kostnadsfri.
          </p>
        </div>

        {submitted ? (
          <div className="mx-auto max-w-lg rounded-3xl border border-navy/5 bg-white p-12 text-center shadow-sm">
            <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-teal/10">
              <Check className="h-8 w-8 text-teal" />
            </span>
            <h3 className="font-display text-2xl text-navy">Tack, {form.name || 'och välkommen'}!</h3>
            <p className="mt-3 text-body/70">
              Din förfrågan om {lang} ({day} kl. {time}) är mottagen. Jag återkommer
              inom 24 timmar.
            </p>
          </div>
        ) : (
          <div className="mx-auto grid max-w-5xl items-start gap-8 lg:grid-cols-2">
            {/* Kalender */}
            <div className="rounded-3xl border border-navy/5 bg-white p-8 shadow-sm">
              <h3 className="mb-6 flex items-center gap-2 font-display text-lg text-navy">
                <Calendar className="h-5 w-5 text-teal" />
                Välj dag och tid
              </h3>

              <div className="mb-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-body/50">
                  Dag (denna vecka)
                </p>
                <div className="flex gap-2">
                  {WEEK_DAYS.map((d) => (
                    <button
                      key={d}
                      onClick={() => setDay(d)}
                      className={`flex-1 py-3 ${pill(day === d)}`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-body/50">
                  Tid
                </p>
                <div className="grid grid-cols-4 gap-2">
                  {TIME_SLOTS.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTime(t)}
                      className={`py-2.5 ${pill(time === t)}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-body/50">
                  Språk
                </p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.name}
                      onClick={() => setLang(l.name)}
                      className={`flex items-center gap-2 px-3 py-2.5 ${pill(lang === l.name)}`}
                    >
                      <span>{l.flag}</span>
                      <span>{l.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {ready && (
                <div className="mt-6 rounded-2xl border border-teal/20 bg-teal/5 p-4">
                  <p className="text-sm font-semibold text-teal">Ditt val</p>
                  <p className="mt-1 text-sm text-navy">
                    {lang} · {day} kl. {time}
                  </p>
                </div>
              )}
            </div>

            {/* Formulär */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 rounded-3xl border border-navy/5 bg-white p-8 shadow-sm"
            >
              <h3 className="flex items-center gap-2 font-display text-lg text-navy">
                <Send className="h-5 w-5 text-teal" />
                Dina uppgifter
              </h3>

              <div className="flex flex-col gap-1.5">
                <label className="field-label">Namn</label>
                <input
                  type="text"
                  required
                  placeholder="Ditt fullständiga namn"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="field"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="field-label">E-post</label>
                <input
                  type="email"
                  required
                  placeholder="din@epost.se"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="field"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="field-label">Din nivå &amp; dina mål (valfritt)</label>
                <textarea
                  rows={4}
                  placeholder="Berätta kort om var du är idag och vad du vill uppnå…"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="field resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={!ready}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-navy py-4 text-sm font-medium text-cream transition-colors hover:bg-teal disabled:cursor-not-allowed disabled:opacity-40"
              >
                Skicka bokningsförfrågan
                <ArrowRight className="h-4 w-4" />
              </button>

              <p className="text-center text-xs leading-relaxed text-body/50">
                Kostnadsfri första konsultation. Jag bekräftar via e-post inom 24 timmar.
              </p>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}