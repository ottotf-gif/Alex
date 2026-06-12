import { NAV_ITEMS, LANGUAGES } from '../data/content';
import { scrollToId } from '../lib/scroll';

export default function Footer() {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToId(href);
  };

  return (
    <footer className="border-t border-white/5 bg-navy text-cream">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <a href="#hem" className="font-display text-2xl tracking-tight text-cream">
              Lang<span className="text-sand">flo</span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-cream/45">
              Personlig språkundervisning i svenska, engelska, tyska, franska och
              spanska — anpassad helt efter dig.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-cream/40">
              Navigering
            </p>
            <nav className="flex flex-col gap-2.5">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNav(e, item.href)}
                  className="text-sm text-cream/60 transition-colors hover:text-teal-light"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-cream/40">
              Språk
            </p>
            <div className="flex flex-col gap-2.5">
              {LANGUAGES.map((l) => (
                <span key={l.name} className="flex items-center gap-2 text-sm text-cream/60">
                  <span>{l.flag}</span>
                  <span>{l.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-cream/30">
            © {new Date().getFullYear()} Langflo. Alla rättigheter förbehållna.
          </p>
          <a
            href="https://ottoniq.se"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-cream/30 transition-colors hover:text-cream/60"
          >
            Drivs av Ottoniq.se
          </a>
        </div>
      </div>
    </footer>
  );
}