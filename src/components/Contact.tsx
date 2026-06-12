import { useState } from 'react';
import { Mail, Phone, Globe, Clock, ArrowRight, Check } from 'lucide-react';
import { CONTACT } from '../data/content';

const ICONS = { 'E-post': Mail, Telefon: Phone, Undervisning: Globe } as const;

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="kontakt" className="relative overflow-hidden bg-navy py-24 text-cream md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-[-15%] h-96 w-96 rounded-full bg-teal/10" />
        <div className="absolute -right-20 bottom-[-20%] h-72 w-72 rounded-full bg-sand/10" />
      </div>

      <div className="container-x relative">
        <div className="mb-16 max-w-2xl">
          <span className="eyebrow before:bg-sand/60 text-sand">Kontakt</span>
          <h2 className="display-lg mt-5 text-cream text-balance">
            Hör av dig
          </h2>
          <p className="mt-5 max-w-prose leading-relaxed text-cream/60">
            Frågor, funderingar, eller bara nyfiken på var du skulle börja? Skriv en
            rad så svarar jag inom ett dygn.
          </p>
        </div>

        <div className="grid max-w-5xl gap-12 lg:grid-cols-2">
          {/* Info */}
          <div className="flex flex-col gap-8">
            <div className="space-y-5">
              {CONTACT.map((item) => {
                const Icon = ICONS[item.label as keyof typeof ICONS] ?? Globe;
                return (
                  <div key={item.label} className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                      <Icon className="h-5 w-5 text-teal-light" />
                    </span>
                    <div>
                      <p className="mb-0.5 text-xs font-medium uppercase tracking-wider text-cream/40">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium text-cream transition-colors hover:text-sand"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="font-medium text-cream">{item.value}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 flex items-center gap-2">
                <Clock className="h-4 w-4 text-sand" />
                <span className="text-sm font-semibold text-cream">Svarstider</span>
              </div>
              <p className="text-sm leading-relaxed text-cream/60">
                Måndag–fredag: svar inom några timmar. Helger: inom ett dygn.
              </p>
            </div>
          </div>

          {/* Formulär */}
          {sent ? (
            <div className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
              <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-teal/20">
                <Check className="h-7 w-7 text-teal-light" />
              </span>
              <h3 className="font-display text-2xl text-cream">Tack för ditt meddelande!</h3>
              <p className="mt-2 text-sm text-cream/60">Jag återkommer inom ett dygn.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold tracking-tight text-cream/60">Namn</label>
                <input
                  type="text"
                  required
                  placeholder="Ditt namn"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-teal-light focus:outline-none focus:ring-2 focus:ring-teal/25"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold tracking-tight text-cream/60">E-post</label>
                <input
                  type="email"
                  required
                  placeholder="din@epost.se"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-teal-light focus:outline-none focus:ring-2 focus:ring-teal/25"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold tracking-tight text-cream/60">Meddelande</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Vad har du på hjärtat?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-teal-light focus:outline-none focus:ring-2 focus:ring-teal/25"
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-sand py-4 text-sm font-medium text-navy transition-colors hover:bg-sand/90"
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