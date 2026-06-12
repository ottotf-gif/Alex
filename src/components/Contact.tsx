import { useState } from 'react';
import { ArrowRight, Send } from 'lucide-react';
import { CONTACT } from '../data/content';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="kontakt" className="bg-cream py-24 text-ink md:py-32">
      <div className="container-x">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow mb-5">Kontakt</p>
          <h2 className="display-lg text-ink text-balance">
            Har du en fråga?{' '}
            <span className="italic text-teal">Skriv till mig.</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
          {/* Contact info in cards */}
          <div className="flex flex-col gap-4">
            {CONTACT.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-paper p-5"
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-ink/30">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-1 inline-block text-lg font-medium text-ink transition-colors hover:text-teal"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 text-lg font-medium text-ink">{item.value}</p>
                )}
              </div>
            ))}
            <p className="mt-4 text-sm text-ink/40">
              Jag svarar normalt inom ett dygn.
            </p>
          </div>

          {/* Form */}
          {sent ? (
            <div className="flex flex-col items-center justify-center rounded-3xl bg-teal/10 p-12 text-center">
              <Send className="mb-4 h-10 w-10 text-teal" />
              <p className="font-display text-3xl text-ink text-balance">
                Meddelandet skickat!
              </p>
              <p className="mt-3 text-ink/50">
                Jag hör av mig inom kort. Tack!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-3xl bg-paper p-8">
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-ink/30">
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
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-ink/30">
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
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-ink/30">
                  Meddelande
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Berätta vad jag kan hjälpa dig med..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="field-light resize-none"
                />
              </div>
              <button type="submit" className="btn-primary mt-2 w-full">
                Skicka
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
