import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { CONTACT } from '../data/content';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="kontakt" className="bg-paper py-24 md:py-36">
      <div className="container-x">
        <div className="mb-16 max-w-4xl">
          <p className="eyebrow mb-6">Kontakt</p>
          <h2 className="display-lg text-balance">
            Berätta vad du <span className="italic text-teal">vill uppnå.</span>
          </h2>
        </div>

        <div className="grid gap-12 border-t border-navy/15 pt-16 lg:grid-cols-[4fr_6fr] lg:gap-20">
          {/* Vänster: info */}
          <div className="flex flex-col gap-8">
            <p className="font-display text-xl text-navy">Jag hör av mig inom en dag.</p>

            <div className="flex flex-col gap-6">
              {CONTACT.map((item) => (
                <div key={item.label}>
                  <p className="text-xs uppercase tracking-[0.15em] text-body/45">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-1 inline-block border-b border-navy/30 pb-0.5 text-navy transition-colors hover:border-navy"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-navy">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Höger: formulär */}
          {sent ? (
            <div className="flex flex-col justify-center">
              <p className="font-display text-3xl text-navy text-balance">
                Tack för ditt meddelande! Jag återkommer inom ett dygn.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.15em] text-body/50">
                  Namn
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ditt namn"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="field mt-2"
                />
              </div>
              <div>
                <div className="flex items-baseline justify-between">
                  <label className="text-xs font-semibold uppercase tracking-[0.15em] text-body/50">
                    E-post
                  </label>
                  <span className="text-xs uppercase tracking-[0.15em] text-body/35">Obligatoriskt</span>
                </div>
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
                <div className="flex items-baseline justify-between">
                  <label className="text-xs font-semibold uppercase tracking-[0.15em] text-body/50">
                    Meddelande
                  </label>
                  <span className="text-xs uppercase tracking-[0.15em] text-body/35">Obligatoriskt</span>
                </div>
                <textarea
                  rows={3}
                  required
                  placeholder="Berätta lite om dig och dina mål."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="field mt-2 resize-none"
                />
              </div>
              <button
                type="submit"
                className="link-underline mt-2 w-fit"
              >
                Skicka meddelande
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}