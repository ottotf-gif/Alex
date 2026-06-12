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
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-30" />
      <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-teal/8 blur-[100px]" />

      <div className="container-x relative py-20">
        {/* CTA area */}
        <div className="mb-16 flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-4xl leading-tight text-white md:text-5xl">
            Redo att lära dig<br />
            <span className="italic text-sand">ett nytt språk?</span>
          </h2>
          <button
            onClick={() => scrollToId('#boka')}
            className="btn-sand mt-2"
          >
            Boka gratis samtal
          </button>
        </div>

        <div className="border-t border-white/10 pt-12">
          <div className="grid gap-10 md:grid-cols-3">
            {/* Logo & description */}
            <div className="flex flex-col gap-3">
              <Logo tone="light" />
              <p className="max-w-xs text-sm leading-relaxed text-white/40">
                Privat språkundervisning online. Svenska, engelska, tyska, franska och spanska.
              </p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-3">
              <p className="text-xs font-bold uppercase tracking-widest text-white/30">Sidor</p>
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNav(e, item.href)}
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Contact */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold uppercase tracking-widest text-white/30">Kontakt</p>
              {email && (
                <a
                  href={email.href ?? '#'}
                  className="text-sm text-white/50 transition-colors hover:text-sand"
                >
                  {email.value}
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/8 pt-8 text-xs text-white/25 md:flex-row md:justify-between">
          <p>&copy; {new Date().getFullYear()} Langflo. Alla rättigheter forbehållna.</p>
          <a
            href="https://ottoniq.se"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white/50"
          >
            Drivs av Ottoniq.se
          </a>
        </div>
      </div>
    </footer>
  );
}
