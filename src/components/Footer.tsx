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
    <footer className="bg-navy text-cream">
      <div className="container-x py-20">
        {/* Stor avslutande rad (som Ottoniqs "Bygger lugnt, från Bohuslän") */}
        <div className="grid gap-12 border-b border-white/15 pb-16 md:grid-cols-[1fr_auto] md:items-end">
          <h2 className="font-display text-4xl leading-tight text-cream md:text-5xl">
            Redo att börja?<br />
            <span className="italic text-sand">Hör av dig.</span>
          </h2>
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNav(e, item.href)}
                className="text-sm tracking-tight text-cream/60 transition-colors hover:text-sand"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-cream/45">
              Personlig språkundervisning i svenska, engelska, tyska, franska och spanska.
            </p>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:gap-16">
            {email && (
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-cream/35">Kontakt</p>
                <a
                  href={email.href ?? '#'}
                  className="mt-1 inline-block text-sm text-cream/70 transition-colors hover:text-sand"
                >
                  {email.value}
                </a>
              </div>
            )}
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-cream/35">Drivs av</p>
              <a
                href="https://ottoniq.se"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-sm text-cream/70 transition-colors hover:text-sand"
              >
                Ottoniq.se
              </a>
            </div>
          </div>
        </div>

        <p className="mt-12 text-xs text-cream/30">
          © {new Date().getFullYear()} Langflo. Alla rättigheter förbehållna.
        </p>
      </div>
    </footer>
  );
}