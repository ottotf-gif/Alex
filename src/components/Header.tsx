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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? 'border-b border-navy/10 bg-paper/90 backdrop-blur-sm' : 'border-b border-transparent'
      }`}
    >
      <div className="container-x">
        <div className="flex h-20 items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-10 md:flex">
            {NAV_ITEMS.slice(0, -1).map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNav(e, item.href)}
                className="text-sm tracking-tight text-navy/70 transition-colors hover:text-navy"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#kontakt"
            onClick={(e) => handleNav(e, '#kontakt')}
            className="link-underline hidden md:inline-flex"
          >
            Skriv till mig
          </a>

          <button
            className="p-2 md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Meny"
          >
            {menuOpen ? <X className="h-6 w-6 text-navy" /> : <Menu className="h-6 w-6 text-navy" />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-navy/10 bg-paper transition-all duration-300 md:hidden ${
          menuOpen ? 'max-h-96 border-b opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-x flex flex-col py-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNav(e, item.href)}
              className="border-b border-navy/10 py-4 text-sm tracking-tight text-navy/80 transition-colors last:border-0 hover:text-navy"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}