import Logo from './Logo';
import { NAV_ITEMS, CONTACT } from '../data/content';
import { scrollToId } from '../lib/scroll';

export default function Footer() {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToId(href);
  };

  const email = CONTACT.find((c) => c.label === 'E-post');

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-35" />
      {/* Warm glow top-right */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sand/8 blur-[80px]" />

      <div className="container-x relative py-20">
        {/* Top: personal CTA */}
        <div className="grid gap-10 border-b border-white/10 pb-16 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-sand/70">
              Klar att börja?
            </p>
            <h2 className="font-display text-4xl leading-tight text-white md:text-5xl">
              Hör av dig,<br />
              <span className="italic text-sand">jag svarar snabbt.</span>
            </h2>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 md:justify-end">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNav(e, item.href)}
                className="text-sm tracking-tight text-white/50 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-4">
            <Logo tone="light" />
            <p className="max-w-xs text-sm leading-relaxed text-white/40">
              Privat språkundervisning i svenska, engelska, tyska, franska och spanska.
            </p>
          </div>

          {email && (
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-white/30">Kontakt</p>
              <a
                href={email.href ?? '#'}
                className="mt-1 inline-block text-sm text-white/60 transition-colors hover:text-sand"
              >
                {email.value}
              </a>
            </div>
          )}
        </div>

        <div className="mt-10 flex flex-col gap-1 border-t border-white/8 pt-8 md:flex-row md:justify-between">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Langflo. Alla rättigheter förbehållna.
          </p>
          <a
            href="https://ottoniq.se"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/25 transition-colors hover:text-white/50"
          >
            Drivs av Ottoniq.se
          </a>
        </div>
      </div>
    </footer>
  );
}