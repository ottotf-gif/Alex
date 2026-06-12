import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { NAV_ITEMS } from '../data/content';

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollTo(href);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/90 backdrop-blur-lg shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x">
        <div className="flex h-20 items-center justify-between">
          <Logo tone="dark" />

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.slice(0, -1).map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNav(e, item.href)}
                className="text-sm font-medium text-ink/50 transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#boka"
            onClick={(e) => handleNav(e, '#boka')}
            className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-teal md:inline-flex"
          >
            Boka lektion
          </a>

          <button
            className="p-2 text-ink md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Meny"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden bg-cream transition-all duration-300 md:hidden ${
          menuOpen ? 'max-h-96 border-b border-ink/10 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-x flex flex-col py-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNav(e, item.href)}
              className="border-b border-ink/8 py-4 text-sm font-medium text-ink/70 transition-colors last:border-0 hover:text-teal"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
